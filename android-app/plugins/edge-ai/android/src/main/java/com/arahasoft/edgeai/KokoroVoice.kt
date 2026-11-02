package com.arahasoft.edgeai

import android.media.AudioAttributes
import android.media.AudioFormat
import android.media.AudioTrack
import android.os.Handler
import android.os.HandlerThread
import android.util.Log
import com.k2fsa.sherpa.onnx.OfflineTts
import com.k2fsa.sherpa.onnx.OfflineTtsConfig
import com.k2fsa.sherpa.onnx.OfflineTtsKokoroModelConfig
import com.k2fsa.sherpa.onnx.OfflineTtsModelConfig
import java.io.File
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.atomic.AtomicInteger

/**
 * Natural, human-sounding speech on the phone: the Kokoro voice model (82M, int8) through sherpa-onnx.
 * Text is split into sentences; sentence N+1 is synthesized while sentence N plays, so speech starts quickly.
 * If anything fails, the caller falls back to the phone's built-in voice.
 */
class KokoroVoice(private val dir: File, private val onDone: (String, Boolean) -> Unit) {
    companion object {
        const val FEMALE = 3    // af_heart
        const val MALE = 16     // am_michael
        private const val TAG = "EdgeAI-Voice"
    }

    private val synthThread = HandlerThread("kokoro-synth").apply { start() }
    private val synth = Handler(synthThread.looper)
    private var tts: OfflineTts? = null
    @Volatile private var failed = false
    private val generation = AtomicInteger(0)      // bumped by stop(): drops queued and in-flight audio
    private var track: AudioTrack? = null
    private val playQ = LinkedBlockingQueue<Chunk>()
    private class Chunk(val gen: Int, val id: String, val samples: FloatArray?, val last: Boolean)

    fun available() = !failed && File(dir, ".ok").exists()

    private fun ensure(): OfflineTts? {
        tts?.let { return it }
        if (!available()) return null
        return try {
            val cores = Runtime.getRuntime().availableProcessors()
            val cfg = OfflineTtsConfig(
                model = OfflineTtsModelConfig(
                    kokoro = OfflineTtsKokoroModelConfig(
                        model = File(dir, "model.int8.onnx").path,
                        voices = File(dir, "voices.bin").path,
                        tokens = File(dir, "tokens.txt").path,
                        dataDir = File(dir, "espeak-ng-data").path,
                        lexicon = File(dir, "lexicon-us-en.txt").path,
                        lang = "en-us",
                    ),
                    numThreads = (cores / 2).coerceIn(1, 4),
                    debug = false,
                    provider = "cpu",
                ),
                maxNumSentences = 1,
            )
            val t0 = System.currentTimeMillis()
            OfflineTts(config = cfg).also { tts = it; Log.i(TAG, "voice loaded in ${System.currentTimeMillis() - t0} ms, rate ${it.sampleRate()}") }
        } catch (t: Throwable) {
            Log.e(TAG, "voice failed to load — using the built-in voice", t); failed = true; null
        }
    }

    /** Warm the model up in the background so the first sentence plays without a long pause. */
    fun preload() { synth.post { ensure() } }

    /** Queues speech. Returns false (caller should use the built-in voice) if the natural voice isn't available. */
    fun speak(id: String, text: String, male: Boolean, speed: Float, queue: Boolean): Boolean {
        if (!available()) return false
        if (!queue) stop()
        val gen = generation.get()
        val sentences = text.split(Regex("(?<=[.!?;:])\\s+")).map { it.trim() }.filter { it.isNotEmpty() }
        if (sentences.isEmpty()) { onDone(id, true); return true }
        synth.post {
            val t = ensure()
            if (t == null) { onDone(id, false); return@post }
            sentences.forEachIndexed { i, s ->
                if (generation.get() != gen) return@post
                val audio = try { t.generate(s, if (male) MALE else FEMALE, speed) } catch (e: Throwable) { Log.e(TAG, "synth failed", e); null }
                if (generation.get() != gen) return@post
                startPlayer(t.sampleRate())
                playQ.put(Chunk(gen, id, audio?.samples, i == sentences.lastIndex))
            }
        }
        return true
    }

    @Volatile private var playerRunning = false
    @Synchronized private fun startPlayer(rate: Int) {
        if (playerRunning) return
        playerRunning = true
        Thread {
            val min = AudioTrack.getMinBufferSize(rate, AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_FLOAT)
            val at = AudioTrack.Builder()
                .setAudioAttributes(AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_MEDIA).setContentType(AudioAttributes.CONTENT_TYPE_SPEECH).build())
                .setAudioFormat(AudioFormat.Builder().setEncoding(AudioFormat.ENCODING_PCM_FLOAT).setSampleRate(rate).setChannelMask(AudioFormat.CHANNEL_OUT_MONO).build())
                .setBufferSizeInBytes(maxOf(min, rate * 4 / 2))
                .setTransferMode(AudioTrack.MODE_STREAM)
                .build()
            track = at
            at.play()
            var written = 0L
            var seenGen = -1
            try {
                while (true) {
                    val c = playQ.take()
                    if (c.gen != generation.get()) continue
                    if (c.gen != seenGen) { seenGen = c.gen; written = at.playbackHeadPosition.toLong() and 0xffffffffL }
                    val s = c.samples
                    if (s != null && s.isNotEmpty()) { at.write(s, 0, s.size, AudioTrack.WRITE_BLOCKING); written += s.size }
                    if (c.last) {
                        // Wait until the speaker has actually played everything, then report "done".
                        val end = System.currentTimeMillis() + 15_000
                        while (c.gen == generation.get() && at.playbackHeadPosition.toLong() and 0xffffffffL < written && System.currentTimeMillis() < end) Thread.sleep(30)
                        onDone(c.id, true)
                    }
                }
            } catch (_: InterruptedException) {
            } catch (t: Throwable) { Log.e(TAG, "playback failed", t) }
            finally { try { at.stop(); at.release() } catch (_: Throwable) {}; track = null; playerRunning = false }
        }.apply { name = "kokoro-play"; start() }
    }

    fun stop() {
        generation.incrementAndGet()
        playQ.clear()
        synth.removeCallbacksAndMessages(null)
        track?.let { try { it.pause(); it.flush(); it.play() } catch (_: Throwable) {} }
    }

    fun release() {
        stop()
        synth.post { try { tts?.release() } catch (_: Throwable) {}; tts = null }
    }
}
