package com.arahasoft.edgeai

import android.app.ActivityManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.os.Bundle
import android.os.Handler
import android.os.HandlerThread
import android.os.IBinder
import android.os.Message
import android.os.Messenger
import android.os.RemoteException
import android.util.Log
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger

/**
 * App-side handle to AiService (which runs in the separate ":ai" process).
 * Detects when that process dies and reports it instead of letting it take the app down.
 */
class AiClient(private val context: Context, private val onEvent: (String, Bundle) -> Unit) {
    interface Callback {
        fun onToken(text: String) {}
        fun onResult(ok: Boolean, data: Bundle)
    }

    private val replyThread = HandlerThread("edge-ai-reply").apply { start() }
    private val prefs = context.getSharedPreferences("edgeai", Context.MODE_PRIVATE)
    private val ids = AtomicInteger(1)
    private val pending = ConcurrentHashMap<Int, Callback>()
    private val waiting = mutableListOf<() -> Unit>()
    @Volatile private var service: Messenger? = null
    @Volatile var loaded = false; private set
    @Volatile private var busy = false
    private var bound = false

    private val replies = Messenger(Handler(replyThread.looper) { msg ->
        val cb = pending[msg.arg1]
        when (msg.what) {
            AiService.R_TOKEN -> cb?.onToken(msg.data.getString("text") ?: "")
            AiService.R_STATS, AiService.R_OK, AiService.R_DONE -> { pending.remove(msg.arg1); cb?.onResult(true, Bundle(msg.data)) }
            AiService.R_ERROR -> { pending.remove(msg.arg1); cb?.onResult(false, Bundle(msg.data)) }
        }
        true
    })

    private val conn = object : ServiceConnection {
        override fun onServiceConnected(name: ComponentName?, b: IBinder?) {
            service = Messenger(b)
            try { b?.linkToDeath({ died() }, 0) } catch (_: RemoteException) { died() }
            val run = synchronized(waiting) { waiting.toList().also { waiting.clear() } }
            run.forEach { it() }
        }
        override fun onServiceDisconnected(name: ComponentName?) { died() }
        override fun onBindingDied(name: ComponentName?) { died(); rebind() }
    }

    @Synchronized private fun died() {
        if (service == null && pending.isEmpty() && !loaded) return
        val working = busy || pending.isNotEmpty()
        val wasLoaded = loaded
        service = null
        loaded = false
        if (working) {
            // Died in the middle of loading or answering: count it. Two in a row and the app stops auto-loading on this phone.
            val n = prefs.getInt("crashes", 0) + 1
            prefs.edit().putInt("crashes", n).apply()
            Log.w("EdgeAI", "AI process stopped while working (crash count $n)")
            onEvent("aiState", Bundle().apply { putString("state", "crashed"); putInt("crashes", n) })
        } else if (wasLoaded) {
            // Reclaimed while idle (e.g. app in background): just reload next time.
            onEvent("aiState", Bundle().apply { putString("state", "unloaded"); putInt("crashes", prefs.getInt("crashes", 0)) })
        }
        val err = Bundle().apply { putString("code", "crashed"); putString("message", "The AI stopped (the phone may be low on memory).") }
        val cbs = pending.values.toList(); pending.clear()
        cbs.forEach { it.onResult(false, err) }
        busy = false
    }

    private fun rebind() {
        try { if (bound) context.unbindService(conn) } catch (_: Throwable) {}
        bound = false
        ensureBound()
    }

    @Synchronized fun ensureBound() {
        if (bound) return
        bound = context.bindService(Intent(context, AiService::class.java), conn, Context.BIND_AUTO_CREATE)
    }

    private fun request(what: Int, data: Bundle, cb: Callback) {
        ensureBound()
        val doSend = {
            val id = ids.getAndIncrement()
            pending[id] = cb
            try {
                service!!.send(Message.obtain(null, what, id, 0).apply { this.data = data; replyTo = replies })
            } catch (e: Exception) {
                pending.remove(id)
                cb.onResult(false, Bundle().apply { putString("code", "crashed"); putString("message", "The AI is restarting — try again.") })
            }
        }
        if (service != null) doSend() else synchronized(waiting) { waiting.add(doSend) }
    }

    /** Refuses to load when the phone doesn't have enough free memory right now (prevents out-of-memory kills). */
    fun load(path: String, minAvailMb: Long, cb: Callback) {
        val mi = ActivityManager.MemoryInfo()
        (context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager).getMemoryInfo(mi)
        val availMb = mi.availMem / 1048576
        if (!loaded && minAvailMb > 0 && availMb < minAvailMb) {
            cb.onResult(false, Bundle().apply { putString("code", "lowmem"); putLong("availMb", availMb); putString("message", "Not enough free memory right now") })
            return
        }
        busy = true
        request(AiService.MSG_LOAD, Bundle().apply { putString("path", path) }, object : Callback {
            override fun onResult(ok: Boolean, data: Bundle) { busy = false; loaded = ok; cb.onResult(ok, data) }
        })
    }

    fun generate(sid: String, system: String, roles: ArrayList<String>, texts: ArrayList<String>, message: String, maxTokens: Int, cb: Callback) {
        busy = true
        request(AiService.MSG_GENERATE, Bundle().apply {
            putString("sid", sid); putString("system", system); putString("message", message)
            putStringArrayList("roles", roles); putStringArrayList("texts", texts); putInt("maxTokens", maxTokens)
        }, object : Callback {
            override fun onToken(text: String) = cb.onToken(text)
            override fun onResult(ok: Boolean, data: Bundle) {
                busy = false
                if (ok) prefs.edit().putInt("crashes", 0).apply()
                if (!ok && data.getString("code") == "notloaded") loaded = false
                cb.onResult(ok, data)
            }
        })
    }

    fun stop() { service?.let { try { it.send(Message.obtain(null, AiService.MSG_STOP)) } catch (_: Exception) {} } }

    fun unload(cb: Callback) { request(AiService.MSG_UNLOAD, Bundle(), object : Callback { override fun onResult(ok: Boolean, data: Bundle) { loaded = false; cb.onResult(ok, data) } }) }

    fun stats(cb: Callback) = request(AiService.MSG_STATS, Bundle(), cb)

    /** Crash test only: kills the AI process the way an out-of-memory kill would. */
    fun killProcess() { service?.let { try { it.send(Message.obtain(null, AiService.MSG_KILL)) } catch (_: Exception) {} } }

    fun crashes() = prefs.getInt("crashes", 0)
    fun resetCrashes() = prefs.edit().putInt("crashes", 0).apply()
    fun isConnected() = service != null
}
