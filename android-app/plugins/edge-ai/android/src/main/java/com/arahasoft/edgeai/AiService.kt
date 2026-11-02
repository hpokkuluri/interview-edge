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
        // CPU backend: works on every 64-bit phone and avoids GPU-driver crashes on older devices.
        val e = Engine(EngineConfig(modelPath = path, backend = Backend.CPU(), cacheDir = cacheDir.path))
        e.initialize()
        engine = e
        modelPath = path
        send(reply, reqId, R_OK, Bundle().apply { putLong("ms", System.currentTimeMillis() - t0); putLong("pssKb", Debug.getPss()) })
    }

    private fun generate(data: Bundle, reply: Messenger?, reqId: Int) {
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
        var err: Throwable? = null
        c.sendMessageAsync(message, object : MessageCallback {
            override fun onMessage(message: Message) {
                val piece = message.toString()
                if (piece.isEmpty()) return
                out.append(piece)
                if (!stopFlag) send(reply, reqId, R_TOKEN, Bundle().apply { putString("text", piece) })
            }
            override fun onDone() { latch.countDown() }
            override fun onError(throwable: Throwable) { err = throwable; latch.countDown() }
        })
        if (!latch.await(10, TimeUnit.MINUTES)) throw IllegalStateException("timed out")
        err?.let { convKey = null; throw it }
        convSeen = roles.size + 2
        send(reply, reqId, R_DONE, Bundle().apply { putString("text", out.toString()); putBoolean("stopped", stopFlag); putLong("pssKb", Debug.getPss()) })
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
