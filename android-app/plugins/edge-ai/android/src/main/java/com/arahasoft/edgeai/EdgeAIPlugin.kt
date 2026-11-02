package com.arahasoft.edgeai

import android.Manifest
import android.os.Bundle
import com.getcapacitor.JSObject
import com.getcapacitor.PermissionState
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.annotation.Permission
import com.getcapacitor.annotation.PermissionCallback

/** The bridge the web app uses: window.Capacitor.Plugins.EdgeAI */
@CapacitorPlugin(
    name = "EdgeAI",
    permissions = [Permission(alias = "microphone", strings = [Manifest.permission.RECORD_AUDIO])]
)
class EdgeAIPlugin : Plugin() {
    companion object { const val VOICE_PACK = "kokoro-en-v1.zip" }   // must match LOCAL_AI.voice.name in config.js
    private lateinit var ai: AiClient
    private lateinit var store: ModelStore
    private lateinit var voice: VoiceIO

    override fun load() {
        ai = AiClient(context) { ev, b -> notifyListeners(ev, toJs(b)) }
        store = ModelStore(context)
        voice = VoiceIO(context, store.folder(VOICE_PACK)) { ev, b -> notifyListeners(ev, toJs(b)) }
    }

    override fun handleOnDestroy() { voice.release(); super.handleOnDestroy() }

    private fun toJs(b: Bundle): JSObject {
        val o = JSObject()
        for (k in b.keySet()) {
            @Suppress("DEPRECATION") when (val v = b.get(k)) {
                null -> o.put(k, null as String?)
                is Boolean -> o.put(k, v)
                is Int -> o.put(k, v)
                is Long -> o.put(k, v)
                is Float -> o.put(k, v.toDouble())
                is Double -> o.put(k, v)
                else -> o.put(k, v.toString())
            }
        }
        return o
    }

    // ---------------- phone check & model download ----------------
    @PluginMethod fun deviceCheck(call: PluginCall) {
        val name = call.getString("name") ?: return call.reject("name required")
        val b = store.deviceInfo(name, call.getLong("bytes") ?: 0L, call.getString("voice"))
        b.putInt("crashes", ai.crashes())
        b.putBoolean("loaded", ai.loaded)
        b.putBoolean("micAvailable", voice.available())
        call.resolve(toJs(b))
    }

    @PluginMethod fun download(call: PluginCall) {
        val url = call.getString("url") ?: return call.reject("url required")
        val name = call.getString("name") ?: return call.reject("name required")
        call.resolve(toJs(store.start(url, name, call.getLong("bytes") ?: 0L, call.getBoolean("wifiOnly", true) == true,
            call.getString("title") ?: "Interview Edge AI", call.getLong("reserveBytes") ?: 0L)))
    }

    @PluginMethod fun downloadProgress(call: PluginCall) {
        val name = call.getString("name") ?: return call.reject("name required")
        call.resolve(toJs(store.progress(name, call.getLong("bytes") ?: 0L)))
    }

    @PluginMethod fun cancelDownload(call: PluginCall) { store.cancel(call.getString("name") ?: ""); call.resolve() }

    @PluginMethod fun deleteModel(call: PluginCall) {
        val name = call.getString("name") ?: ""
        ai.unload(object : AiClient.Callback { override fun onResult(ok: Boolean, data: Bundle) { store.delete(name); call.resolve() } })
    }

    // ---------------- the model ----------------
    @PluginMethod fun load(call: PluginCall) {
        val name = call.getString("name") ?: return call.reject("name required")
        val f = store.file(name)
        if (!f.exists()) return call.reject("Model not downloaded", "missing")
        ai.load(f.path, call.getLong("minAvailMb") ?: 0L, result(call))
    }

    @PluginMethod fun generate(call: PluginCall) {
        val sid = call.getString("sid") ?: "s"
        val history = call.getArray("history")
        val roles = ArrayList<String>(); val texts = ArrayList<String>()
        if (history != null) for (i in 0 until history.length()) {
            val m = history.getJSONObject(i)
            roles.add(if (m.optString("role") == "user") "user" else "model"); texts.add(m.optString("content"))
        }
        ai.generate(sid, call.getString("system") ?: "", roles, texts, call.getString("message") ?: "", call.getInt("maxTokens") ?: 300,
            object : AiClient.Callback {
                override fun onToken(text: String) { notifyListeners("token", JSObject().put("sid", sid).put("text", text)) }
                override fun onResult(ok: Boolean, data: Bundle) { finish(call, ok, data) }
            })
    }

    @PluginMethod fun stop(call: PluginCall) { ai.stop(); call.resolve() }
    @PluginMethod fun unload(call: PluginCall) { ai.unload(result(call)) }
    @PluginMethod fun stats(call: PluginCall) { ai.stats(result(call)) }
    @PluginMethod fun resetCrashes(call: PluginCall) { ai.resetCrashes(); call.resolve() }

    private fun result(call: PluginCall) = object : AiClient.Callback {
        override fun onResult(ok: Boolean, data: Bundle) { finish(call, ok, data) }
    }

    private fun finish(call: PluginCall, ok: Boolean, data: Bundle) {
        if (ok) call.resolve(toJs(data))
        else call.reject(data.getString("message") ?: "AI error", data.getString("code") ?: "failed", toJs(data))
    }

    // ---------------- voice ----------------
    @PluginMethod fun listen(call: PluginCall) {
        if (!voice.available()) return call.reject("Speech recognition isn't available on this phone", "unavailable")
        if (getPermissionState("microphone") != PermissionState.GRANTED) { requestPermissionForAlias("microphone", call, "micPermission"); return }
        voice.listen(); call.resolve()
    }

    @PermissionCallback private fun micPermission(call: PluginCall) {
        if (getPermissionState("microphone") == PermissionState.GRANTED) { voice.listen(); call.resolve() }
        else call.reject("Microphone permission was denied", "permission")
    }

    @PluginMethod fun stopListening(call: PluginCall) { voice.stopListening(); call.resolve() }

    @PluginMethod fun voices(call: PluginCall) { voice.voices { b -> b.putBoolean("natural", voice.natural.available()); call.resolve(toJs(b)) } }

    @PluginMethod fun voicePreload(call: PluginCall) { voice.natural.preload(); call.resolve(JSObject().put("natural", voice.natural.available())) }

    @PluginMethod fun speak(call: PluginCall) {
        val text = call.getString("text") ?: ""
        voice.speak(text, call.getString("gender") ?: "female", (call.getFloat("rate") ?: 1.0f), call.getBoolean("queue", false) == true) { id -> call.resolve(JSObject().put("id", id)) }
    }

    @PluginMethod fun stopSpeaking(call: PluginCall) { voice.stopSpeaking(); call.resolve() }
}
