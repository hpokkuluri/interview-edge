package com.arahasoft.edgeai

import android.app.ActivityManager
import android.content.Context
import android.os.Bundle
import android.os.Process
import android.util.Log
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Assume.assumeTrue
import org.junit.FixMethodOrder
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.MethodSorters
import java.io.File
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

/**
 * Crash and size test for the on-device AI. Run by .github/workflows/ai-crash-test.yml on emulators with
 * different amounts of RAM. Every result line is logged with the tag EdgeAI-Test so the workflow can print a report.
 *
 * Instrumentation arguments: modelPath (the 2.6 GB Gemma file, already on the emulator), url + bytes (download test).
 */
@RunWith(AndroidJUnit4::class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class CrashTest {
    private val ctx: Context = InstrumentationRegistry.getInstrumentation().targetContext
    private val args: Bundle = InstrumentationRegistry.getArguments()
    private val modelPath = args.getString("modelPath") ?: "/data/local/tmp/edge-model.litertlm"
    private val events = mutableListOf<String>()
    private val client by lazy { AiClient(ctx) { ev, b -> synchronized(events) { events.add(ev + ":" + b.getString("state")) } } }

    private fun log(s: String) = Log.i("EdgeAI-Test", s)

    private fun ramMb(): Long { val mi = ActivityManager.MemoryInfo(); (ctx.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager).getMemoryInfo(mi); return mi.totalMem / 1048576 }
    private fun availMb(): Long { val mi = ActivityManager.MemoryInfo(); (ctx.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager).getMemoryInfo(mi); return mi.availMem / 1048576 }

    private class Res { var ok = false; var data = Bundle(); var tokens = 0; val text = StringBuilder() }

    private fun call(timeoutMin: Long = 15, block: (AiClient.Callback) -> Unit): Res {
        val r = Res(); val l = CountDownLatch(1)
        block(object : AiClient.Callback {
            override fun onToken(text: String) { r.tokens++; r.text.append(text) }
            override fun onResult(ok: Boolean, data: Bundle) { r.ok = ok; r.data = data; l.countDown() }
        })
        assertTrue("timed out", l.await(timeoutMin, TimeUnit.MINUTES))
        return r
    }

    private fun load(minAvail: Long = 0) = call { client.load(modelPath, minAvail, it) }
    private fun ask(sid: String, q: String, history: List<Pair<String, String>> = emptyList(), max: Int = 60) = call {
        client.generate(sid, "You are a hiring manager interviewing a candidate. Keep replies under 40 words.",
            ArrayList(history.map { it.first }), ArrayList(history.map { it.second }), q, max, it)
    }
    private fun pss(): Long = call(1) { client.stats(it) }.data.getLong("pssKb") / 1024

    private fun haveModel() = File(modelPath).let { it.exists() && it.length() > 100_000_000 }

    @Test fun t1_deviceCheck() {
        val b = ModelStore(ctx).deviceInfo("edge-model.litertlm", 0)
        log("DEVICE ram=${b.getLong("totalMb")}MB avail=${b.getLong("availMb")}MB free=${b.getLong("freeMb")}MB abiOk=${b.getBoolean("abiOk")} sdk=${b.getInt("sdk")}")
        assertTrue(b.getLong("totalMb") > 0)
    }

    @Test fun t2_loadAndAnswer() {
        assumeTrue("model not on device", haveModel())
        val t0 = System.currentTimeMillis()
        val r = load()
        log("LOAD ok=${r.ok} code=${r.data.getString("code")} ms=${System.currentTimeMillis() - t0} ramMb=${ramMb()}")
        if (!r.ok) {
            // On a low-RAM phone the model may not fit: that must be a clean failure, never an app crash.
            assertTrue("load failed with unexpected error ${r.data.getString("code")}", r.data.getString("code") in setOf("crashed", "oom", "lowmem", "failed"))
            log("LOWRAM-RESULT clean failure (${r.data.getString("code")}) — app process survived pid=${Process.myPid()}")
            return
        }
        log("MEM after load: aiProcessPss=${pss()}MB phoneAvail=${availMb()}MB")
        val a = ask("t2", "Tell me about yourself.")
        log("ANSWER ok=${a.ok} tokens=${a.tokens} text=${a.text.toString().replace('\n', ' ').take(160)}")
        assertTrue(a.ok); assertTrue(a.text.isNotBlank())
        val b = ask("t2", "Why do you want this role?", listOf("user" to "Tell me about yourself.", "model" to a.text.toString()))
        log("FOLLOWUP ok=${b.ok} tokens=${b.tokens}")
        assertTrue(b.ok)
        log("MEM after 2 turns: aiProcessPss=${pss()}MB phoneAvail=${availMb()}MB")
    }

    @Test fun t3_longPromptNearContextLimit() {
        assumeTrue(haveModel()); if (!load().ok) return
        // Interview feedback sends a big prompt (all questions + answers + reference points). Make it bigger than real use.
        val big = (1..10).joinToString("\n\n") { i -> "Question $i: Explain how you would reconcile subledger to GL at month end.\nCandidate answer: " + "I start by running the reconciliation report, compare balances by account, then trace differences to unposted journals and timing items. ".repeat(4) }
        val r = ask("t3", big + "\n\nGive a score out of 10 and three improvements.", max = 200)
        log("LONG-PROMPT ok=${r.ok} code=${r.data.getString("code")} chars=${big.length} tokens=${r.tokens}")
        assertTrue("long prompt must not crash the AI process: ${r.data.getString("code")}", r.ok || r.data.getString("code") == "failed")
    }

    @Test fun t4_repeatedLoadUnload() {
        assumeTrue(haveModel())
        val start = availMb()
        repeat(3) { i ->
            val r = load(); if (!r.ok) { log("CYCLE $i load failed ${r.data.getString("code")}"); return }
            val a = ask("t4-$i", "Name one strength.", max = 20)
            assertTrue(a.ok)
            assertTrue(call(2) { client.unload(it) }.ok)
            Thread.sleep(1500)
            log("CYCLE $i ok aiPss=${pss()}MB phoneAvail=${availMb()}MB")
        }
        log("LEAK-CHECK phoneAvail start=${start}MB end=${availMb()}MB")
    }

    @Test fun t5_aiProcessDiesMidAnswer_appSurvives() {
        assumeTrue(haveModel()); if (!load().ok) return
        val r = Res(); val l = CountDownLatch(1); val firstToken = CountDownLatch(1)
        client.generate("t5", "You are an interviewer.", arrayListOf(), arrayListOf(), "Describe in detail how a three-way match works in accounts payable.", 300,
            object : AiClient.Callback {
                override fun onToken(text: String) { r.tokens++; firstToken.countDown() }
                override fun onResult(ok: Boolean, data: Bundle) { r.ok = ok; r.data = data; l.countDown() }
            })
        assertTrue("no tokens before kill", firstToken.await(10, TimeUnit.MINUTES))
        client.killProcess()   // same effect as Android's low-memory killer or a native crash in the model
        assertTrue(l.await(1, TimeUnit.MINUTES))
        assertFalse(r.ok)
        assertEquals("crashed", r.data.getString("code"))
        log("KILLED-MID-ANSWER app pid ${Process.myPid()} alive, error=${r.data.getString("code")} crashEvents=${synchronized(events) { events.toList() }}")
        // The app recovers: the AI process restarts and works again.
        val again = load(); assertTrue("reload after crash failed: ${again.data.getString("code")}", again.ok)
        val a = ask("t5b", "Hello.", max = 15); assertTrue(a.ok)
        log("RECOVERED after kill: answer ok, crash counter reset to ${client.crashes()}")
        assertEquals(0, client.crashes())
    }

    @Test fun t6_lowMemoryGuard() {
        assumeTrue(haveModel())
        call(2) { client.unload(it) }
        val r = load(minAvail = 1_000_000)   // demand more free RAM than any phone has
        log("LOWMEM-GUARD ok=${r.ok} code=${r.data.getString("code")}")
        assertFalse(r.ok); assertEquals("lowmem", r.data.getString("code"))
    }

    @Test fun t7_download() {
        val url = args.getString("url") ?: return
        val bytes = args.getString("bytes")?.toLong() ?: return
        val store = ModelStore(ctx)
        val name = "dl-test.litertlm"
        store.delete(name)
        val s = store.start(url, name, bytes, wifiOnly = false)
        log("DOWNLOAD start state=${s.getString("state")} code=${s.getString("code")} free=${store.deviceInfo(name, bytes).getLong("freeMb")}MB")
        if (s.getString("code") == "nospace") { log("DOWNLOAD refused cleanly: not enough space"); return }
        val t0 = System.currentTimeMillis()
        var p = s
        while (System.currentTimeMillis() - t0 < 25 * 60_000) {
            Thread.sleep(5000)
            p = store.progress(name, bytes)
            if (p.getString("state") == "done" || p.getString("state") == "error") break
        }
        log("DOWNLOAD end state=${p.getString("state")} code=${p.getString("code")} got=${p.getLong("received") / 1048576}MB in ${(System.currentTimeMillis() - t0) / 1000}s")
        assertEquals("done", p.getString("state"))
        assertEquals(bytes, store.file(name).length())
        store.delete(name)
    }
}
