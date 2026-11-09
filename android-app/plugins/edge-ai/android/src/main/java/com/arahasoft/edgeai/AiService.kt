package com.arahasoft.edgeai

import android.app.Service
import android.content.ComponentCallbacks2
import android.content.Intent
import android.os.Bundle
import android.os.Debug
import android.os.Handler
import android.os.HandlerThread
import android.os.IBinder
import android.os.Looper
import android.os.Message as OsMessage
import android.os.Messenger
import android.os.Process
import android.os.RemoteException
import android.util.Log
import com.google.ai.edge.litertlm.Backend
import com.google.ai.edge.litertlm.Contents
import com.google.ai.edge.litertlm.Conversation
import com.google.ai.edge.litertlm.ConversationConfig
import com.google.ai.edge.litertlm.Engine
import com.google.ai.edge.litertlm.EngineConfig
import com.google.ai.edge.litertlm.Message
import com.google.ai.edge.litertlm.MessageCallback
import com.google.ai.edge.litertlm.SamplerConfig
import java.io.File
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

/**
 * Runs the Gemma model in a separate process (":ai", see AndroidManifest.xml).
 * The app talks to it through AiClient. If this process is killed (out of memory, a native crash in the
 * model runtime, the system reclaiming RAM), the app process is untouched and AiClient reports "crashed".
 *
 * One request is processed at a time on a single worker thread.
 */
class AiService : Service() {
    companion object {
        const val MSG_LOAD = 1
        const val MSG_GENERATE = 2
        const val MSG_STOP = 3
        const val MSG_UNLOAD = 4
        const val MSG_STATS = 5
        const val MSG_KILL = 6          // used by the crash test to simulate the model process dying

        const val R_OK = 100
        const val R_ERROR = 101
        const val R_TOKEN = 102
        const val R_DONE = 103
        const val R_STATS = 104
        private const val TAG = "EdgeAI-Service"
    }

    private val worker = HandlerThread("edge-ai-worker").apply { start() }
    private val workerHandler = Handler(worker.looper)
    @Volatile private var stopFlag = false
    private var engine: Engine? = null
    private var modelPath: String? = null
    private var conv: Conversation? = null
    private var convKey: String? = null
    private var convSeen = 0
    private var backendName = "CPU"

    private val messenger = Messenger(Handler(Looper.getMainLooper()) { msg ->
        val what = msg.what
        val data = Bundle(msg.data)
        val reply = msg.replyTo
        val reqId = msg.arg1
        when (what) {
            MSG_STOP -> stopFlag = true
            MSG_KILL -> Process.killProcess(Process.myPid())
            MSG_STATS -> send(reply, reqId, R_STATS, Bundle().apply {
                putLong("pssKb", Debug.getPss())
                putBoolean("loaded", engine != null)
                putInt("pid", Process.myPid())
            })
            else -> workerHandler.post { handle(what, data, reply, reqId) }
        }
        true
    })

    override fun onBind(intent: Intent?): IBinder = messenger.binder

    private fun handle(what: Int, data: Bundle, reply: Messenger?, reqId: Int) {
        try {
            when (what) {
                MSG_LOAD -> load(data, reply, reqId)
                MSG_GENERATE -> generate(data, reply, reqId)
                MSG_UNLOAD -> { closeAll(); send(reply, reqId, R_OK, Bundle()) }
            }
        } catch (t: Throwable) {
            // Java-side failures (bad model file, unsupported phone, OutOfMemoryError) come back as a clean error.
            Log.e(TAG, "request $what failed", t)
            if (t is OutOfMemoryError) closeAll()
            send(reply, reqId, R_ERROR, Bundle().apply {
                putString("code", when {
                    t is OutOfMemoryError -> "oom"
                    t is UnsatisfiedLinkError -> "unsupported"
                    t.message == "not loaded" -> "notloaded"
                    else -> "failed"
                })
                putString("message", t.message ?: t.javaClass.simpleName)
            })
        }
    }

    private fun load(data: Bundle, reply: Messenger?, reqId: Int) {
        val path = data.getString("path") ?: throw IllegalArgumentException("no model path")
        if (engine != null && path == modelPath) { send(reply, reqId, R_OK, Bundle().apply { putLong("ms", 0) }); return }
        closeAll()
        val f = File(path)
        if (!f.canRead()) throw IllegalStateException("model file missing")
        val t0 = System.currentTimeMillis()
        // Graphics chip (GPU) first: several times faster. If this phone's GPU can't run the model — init throws,
        // or the AI process dies while trying — remember that and use the main processor (CPU) from then on.
        val gp = getSharedPreferences("edgeai-gpu", MODE_PRIVATE)
        // Died while starting on the GPU: never try it again. Died mid-answer on the GPU (could also be the app being
        // swiped away): give up on the GPU only after it happens twice in a row.
        if (gp.getBoolean("trying", false)) {
            gp.edit().putBoolean("bad", true).putBoolean("trying", false).commit()
            Log.w(TAG, "the AI process died starting on the GPU — using CPU on this phone")
        }
        if (gp.getBoolean("active", false)) {
            val n = gp.getInt("deaths", 0) + 1
            gp.edit().putInt("deaths", n).putBoolean("active", false).putBoolean("bad", gp.getBoolean("bad", false) || n >= 2).commit()
            Log.w(TAG, "the AI process died mid-answer on the GPU ($n in a row)")
        }
        var e: Engine? = null
        var used = "CPU"
        if (!gp.getBoolean("bad", false) && !hasOpenCl()) {
            gp.edit().putBoolean("bad", true).commit()
            Log.i(TAG, "no OpenCL on this phone — using CPU")
        }
        if (!gp.getBoolean("bad", false) && data.getBoolean("allowGpu", true)) {
            gp.edit().putBoolean("trying", true).commit()
            try {
                e = Engine(EngineConfig(modelPath = path, backend = Backend.GPU(), cacheDir = cacheDir.path)).also { it.initialize() }
                used = "GPU"
            } catch (t: Throwable) {
                Log.w(TAG, "GPU not available (${t.message}) — using CPU", t)
                try { e?.close() } catch (_: Throwable) {}
                e = null
                gp.edit().putBoolean("bad", true).commit()
            } finally { gp.edit().putBoolean("trying", false).commit() }
        }
        if (e == null) e = Engine(EngineConfig(modelPath = path, backend = Backend.CPU(), cacheDir = cacheDir.path)).also { it.initialize() }
        engine = e
        modelPath = path
        backendName = used
        Log.i(TAG, "model loaded on $used in ${System.currentTimeMillis() - t0} ms")
        send(reply, reqId, R_OK, Bundle().apply { putLong("ms", System.currentTimeMillis() - t0); putLong("pssKb", Debug.getPss()); putString("backend", used) })
    }

    /** The GPU path needs the phone's OpenCL driver; many phones (including some recent ones) don't expose it to apps. */
    private fun hasOpenCl(): Boolean = try { System.loadLibrary("OpenCL"); true } catch (_: Throwable) {
        listOf("/vendor/lib64/libOpenCL.so", "/system/vendor/lib64/libOpenCL.so", "/system/lib64/libOpenCL.so").any { File(it).exists() }
    }

    /** If an answer fails on the GPU, switch this phone to the CPU for good, reload, and answer again. */
    private fun generate(data: Bundle, reply: Messenger?, reqId: Int) {
        try { generateOnce(data, reply, reqId) }
        catch (t: Throwable) {
            if (backendName != "GPU" || t is OutOfMemoryError) throw t
            val path = modelPath ?: throw t
            Log.w(TAG, "answer failed on the GPU (${t.message}) — switching to CPU", t)
            getSharedPreferences("edgeai-gpu", MODE_PRIVATE).edit().putBoolean("bad", true).putBoolean("active", false).commit()
            closeAll()
            engine = Engine(EngineConfig(modelPath = path, backend = Backend.CPU(), cacheDir = cacheDir.path)).also { it.initialize() }
            modelPath = path; backendName = "CPU"
            generateOnce(data, reply, reqId)
        }
    }

    private fun generateOnce(data: Bundle, reply: Messenger?, reqId: Int) {
        val e = engine ?: throw IllegalStateException("not loaded")
        val sid = data.getString("sid") ?: "s"
        val system = data.getString("system") ?: ""
        val roles = data.getStringArrayList("roles") ?: arrayListOf()
        val texts = data.getStringArrayList("texts") ?: arrayListOf()
        val message = data.getString("message") ?: ""
        val maxTokens = data.getInt("maxTokens", 300)
        stopFlag = false

        // Reuse the open conversation when the app's history matches what we already have; otherwise rebuild it.
        if (conv == null || convKey != sid || convSeen != roles.size) {
            try { conv?.close() } catch (_: Throwable) {}
            val history = roles.indices.map { i -> if (roles[i] == "user") Message.user(texts[i]) else Message.model(texts[i]) }
            conv = e.createConversation(ConversationConfig(
                systemInstruction = Contents.of(system),
                initialMessages = history,
                samplerConfig = SamplerConfig(topK = 40, topP = 0.95, temperature = 0.7),
                maxOutputToken = maxTokens,
            ))
            convKey = sid
            convSeen = roles.size
        }
        val c = conv!!
        val out = StringBuilder()
        val latch = CountDownLatch(1)
        val gp = getSharedPreferences("edgeai-gpu", MODE_PRIVATE)
        if (backendName == "GPU") gp.edit().putBoolean("active", true).commit()
        val tStart = System.currentTimeMillis(); var tFirst = 0L; var pieces = 0
        var err: Throwable? = null
        c.sendMessageAsync(message, object : MessageCallback {
            override fun onMessage(message: Message) {
                val piece = message.toString()
                if (piece.isEmpty()) return
                if (tFirst == 0L) tFirst = System.currentTimeMillis()
                pieces++
                out.append(piece)
                if (!stopFlag) send(reply, reqId, R_TOKEN, Bundle().apply { putString("text", piece) })
            }
            override fun onDone() { latch.countDown() }
            override fun onError(throwable: Throwable) { err = throwable; latch.countDown() }
        })
        if (!latch.await(10, TimeUnit.MINUTES)) throw IllegalStateException("timed out")
        if (backendName == "GPU") gp.edit().putBoolean("active", false).putInt("deaths", 0).commit()
        err?.let { convKey = null; throw it }
        convSeen = roles.size + 2
        val tEnd = System.currentTimeMillis()
        val firstMs = if (tFirst > 0) tFirst - tStart else tEnd - tStart
        val tps = if (tFirst > 0 && tEnd > tFirst && pieces > 1) (pieces - 1) * 1000.0 / (tEnd - tFirst) else 0.0
        Log.i(TAG, "answer on $backendName: first word ${firstMs} ms, ${"%.1f".format(tps)} tokens/s, $pieces tokens")
        send(reply, reqId, R_DONE, Bundle().apply { putString("text", out.toString()); putBoolean("stopped", stopFlag); putLong("pssKb", Debug.getPss())
            putString("backend", backendName); putLong("firstMs", firstMs); putDouble("tps", tps) })
    }

    private fun closeAll() {
        try { conv?.close() } catch (_: Throwable) {}
        try { engine?.close() } catch (_: Throwable) {}
        conv = null; convKey = null; convSeen = 0; engine = null; modelPath = null
    }

    private fun send(to: Messenger?, reqId: Int, what: Int, b: Bundle) {
        if (to == null) return
        try { to.send(OsMessage.obtain(null, what, reqId, 0).apply { data = b }) } catch (_: RemoteException) {}
    }

    // Free the model if Android says memory is critically low, before the system has to kill us.
    @Suppress("DEPRECATION")
    override fun onTrimMemory(level: Int) {
        super.onTrimMemory(level)
        if (level >= ComponentCallbacks2.TRIM_MEMORY_RUNNING_CRITICAL && level < ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN) {
            Log.w(TAG, "memory critical ($level) — releasing model")
            workerHandler.postAtFrontOfQueue { closeAll() }
        }
    }

    override fun onDestroy() {
        workerHandler.post { closeAll() }
        worker.quitSafely()
        super.onDestroy()
    }
}
