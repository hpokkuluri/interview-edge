package com.arahasoft.edgeai

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.speech.tts.Voice
import java.util.Locale

/**
 * Microphone (Android speech recognition) and spoken replies (Android text-to-speech) with a
 * male or female voice. Everything here runs on the main thread, as Android requires.
 */
class VoiceIO(private val context: Context, voiceDir: java.io.File, private val emit: (String, Bundle) -> Unit) {
    /** The natural (Kokoro) voice, once its pack is downloaded; otherwise the phone's built-in voice is used. */
    val natural = KokoroVoice(voiceDir) { id, ok ->
        val req = pendingNatural.remove(id)
        if (ok || req == null) emit("tts", Bundle().apply { putString("type", if (ok) "done" else "error"); putString("id", id) })
        // The natural voice couldn't start on this phone: say it with the built-in voice instead, under the same id.
        else speakBuiltIn(req.first, req.second, req.third, true) { bid -> alias[bid] = id }
    }
    private val pendingNatural = java.util.concurrent.ConcurrentHashMap<String, Triple<String, String, Float>>()
    private val alias = java.util.concurrent.ConcurrentHashMap<String, String>()
    private var nUtter = 0
    private val main = Handler(Looper.getMainLooper())
    private var recognizer: SpeechRecognizer? = null
    private var tts: TextToSpeech? = null
    private var ttsReady = false
    private val queued = mutableListOf<() -> Unit>()
    private var utter = 0

    // Google text-to-speech English (US) voices. The codes are stable across Google TTS versions.
    private val googleMale = setOf("iol", "iom", "tpd")
    private val googleFemale = setOf("iob", "iog", "sfg", "tpc", "tpf")

    fun initTts(done: (() -> Unit)? = null) = main.post {
        if (tts != null) { if (ttsReady) done?.invoke() else if (done != null) queued.add(done); return@post }
        if (done != null) queued.add(done)
        tts = TextToSpeech(context) { status ->
            main.post {
                ttsReady = status == TextToSpeech.SUCCESS
                tts?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                    override fun onStart(id: String?) {}
                    override fun onDone(id: String?) { if (id?.endsWith("-last") == true) emit("tts", Bundle().apply { putString("type", "done"); putString("id", id.removeSuffix("-last").let { alias.remove(it) ?: it }) }) }
                    @Deprecated("Deprecated in Java") override fun onError(id: String?) { emit("tts", Bundle().apply { putString("type", "error"); putString("id", id ?: "") }) }
                    override fun onStop(id: String?, interrupted: Boolean) { if (id?.endsWith("-last") == true) emit("tts", Bundle().apply { putString("type", "stopped"); putString("id", id.removeSuffix("-last")) }) }
                })
                val run = queued.toList(); queued.clear(); run.forEach { it() }
            }
        }
    }

    private fun gender(v: Voice): String? {
        val n = v.name.lowercase(Locale.US)
        if (Regex("\\bfemale\\b|-female|_female|#female").containsMatchIn(n)) return "female"
        if (Regex("\\bmale\\b|-male|_male|#male").containsMatchIn(n)) return "male"
        val code = Regex("-x-([a-z]{3})").find(n)?.groupValues?.get(1) ?: return null
        return if (code in googleMale) "male" else if (code in googleFemale) "female" else null
    }

    /** Best installed English voice for the requested gender; on-device voices first so it works offline. */
    private fun pick(want: String): Voice? {
        val all = try { tts?.voices?.toList() ?: emptyList() } catch (_: Exception) { emptyList() }
        val english = all.filter { it.locale.language == "en" && !it.features.contains(TextToSpeech.Engine.KEY_FEATURE_NOT_INSTALLED) }
        fun score(v: Voice) = (if (v.locale.country == "US") 4 else 0) + (if (!v.isNetworkConnectionRequired) 2 else 0) + (if (v.quality >= Voice.QUALITY_HIGH) 1 else 0)
        return english.filter { gender(it) == want }.maxByOrNull(::score)
    }

    fun voices(cb: (Bundle) -> Unit) = initTts {
        val f = pick("female"); val m = pick("male")
        cb(Bundle().apply {
            putBoolean("ready", ttsReady)
            putString("female", f?.name); putString("male", m?.name)
            putString("engine", tts?.defaultEngine ?: "")
        })
    }

    /** Speaks text in the chosen voice. If the phone has no voice of that gender, the default voice is pitched to match. */
    fun speak(text: String, want: String, rate: Float, queue: Boolean, cb: (String) -> Unit) {
        if (natural.available()) {
            tts?.stop()
            val id = "n${++nUtter}"
            pendingNatural[id] = Triple(text, want, rate)
            if (natural.speak(id, text, want == "male", rate, queue)) { cb(id); return }
            pendingNatural.remove(id)
        }
        speakBuiltIn(text, want, rate, queue, cb)
    }

    private fun speakBuiltIn(text: String, want: String, rate: Float, queue: Boolean, cb: (String) -> Unit) = initTts {
        val t = tts
        if (!ttsReady || t == null) { cb(""); return@initTts }
        if (!queue) t.stop()
        val v = pick(want)
        var exact = false
        if (v != null) exact = t.setVoice(v) == TextToSpeech.SUCCESS
        if (!exact) { t.setVoice(t.defaultVoice ?: t.voice) }
        t.setPitch(if (exact) 1.0f else if (want == "male") 0.82f else 1.12f)
        t.setSpeechRate(rate)
        val id = "u${++utter}"
        val max = (TextToSpeech.getMaxSpeechInputLength() - 100).coerceAtLeast(500)
        val parts = chunk(text, max)
        parts.forEachIndexed { i, p ->
            val uid = if (i == parts.lastIndex) "$id-last" else "$id-$i"
            t.speak(p, if (i == 0 && !queue) TextToSpeech.QUEUE_FLUSH else TextToSpeech.QUEUE_ADD, null, uid)
        }
        cb(id)
    }

    private fun chunk(s: String, max: Int): List<String> {
        if (s.length <= max) return listOf(s)
        val out = mutableListOf<String>(); var cur = StringBuilder()
        for (sent in s.split(Regex("(?<=[.!?])\\s+"))) {
            if (cur.length + sent.length + 1 > max && cur.isNotEmpty()) { out.add(cur.toString()); cur = StringBuilder() }
            cur.append(sent.take(max)).append(' ')
        }
        if (cur.isNotEmpty()) out.add(cur.toString())
        return out
    }

    fun stopSpeaking() { natural.stop(); main.post { tts?.stop() } }

    // ---------------- microphone ----------------
    fun available() = SpeechRecognizer.isRecognitionAvailable(context)

    fun listen() = main.post {
        tts?.stop(); natural.stop()
        recognizer?.destroy()
        val r = SpeechRecognizer.createSpeechRecognizer(context)
        recognizer = r
        r.setRecognitionListener(object : RecognitionListener {
            override fun onReadyForSpeech(params: Bundle?) = ev("ready")
            override fun onBeginningOfSpeech() = ev("speaking")
            override fun onRmsChanged(rmsdB: Float) {}
            override fun onBufferReceived(buffer: ByteArray?) {}
            override fun onEndOfSpeech() = ev("pause")
            override fun onError(error: Int) {
                val code = when (error) {
                    SpeechRecognizer.ERROR_NO_MATCH, SpeechRecognizer.ERROR_SPEECH_TIMEOUT -> "nomatch"
                    SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS -> "permission"
                    SpeechRecognizer.ERROR_NETWORK, SpeechRecognizer.ERROR_NETWORK_TIMEOUT -> "network"
                    SpeechRecognizer.ERROR_RECOGNIZER_BUSY -> "busy"
                    else -> "error"
                }
                emit("speech", Bundle().apply { putString("type", "error"); putString("code", code) })
                ev("end")
            }
            override fun onResults(results: Bundle?) {
                val t = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)?.firstOrNull() ?: ""
                emit("speech", Bundle().apply { putString("type", "final"); putString("text", t) })
                ev("end")
            }
            override fun onPartialResults(partial: Bundle?) {
                val t = partial?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)?.firstOrNull() ?: return
                emit("speech", Bundle().apply { putString("type", "partial"); putString("text", t) })
            }
            override fun onEvent(eventType: Int, params: Bundle?) {}
        })
        val i = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US")
            putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
            putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1)
            // Interview answers have thinking pauses; ask the recognizer to wait longer before it stops.
            putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 3000L)
            putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, 2500L)
            putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 4000L)
        }
        try { r.startListening(i) } catch (e: Exception) {
            emit("speech", Bundle().apply { putString("type", "error"); putString("code", "error") }); ev("end")
        }
    }

    private fun ev(type: String) = emit("speech", Bundle().apply { putString("type", type) })

    fun stopListening() = main.post { try { recognizer?.stopListening() } catch (_: Exception) {} }

    fun release() = main.post {
        natural.release()
        recognizer?.destroy(); recognizer = null
        tts?.shutdown(); tts = null; ttsReady = false
    }
}
