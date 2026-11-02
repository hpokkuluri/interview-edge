package com.arahasoft.edgeai

import android.app.ActivityManager
import android.app.DownloadManager
import android.content.Context
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.StatFs
import java.io.File
import java.util.zip.ZipInputStream

/**
 * Where the downloaded files live on the phone (the AI model and the natural-voice pack), the phone's fitness
 * for running them, and the downloads. Downloads go through Android's DownloadManager: they keep going with
 * the app closed, resume after a dropped connection, and show progress in the notification shade.
 * A name ending in .zip is unpacked into a folder of the same name (without .zip) once downloaded.
 */
class ModelStore(private val context: Context) {
    private val prefs = context.getSharedPreferences("edgeai", Context.MODE_PRIVATE)
    private val dm = context.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    private val unpacking = java.util.Collections.synchronizedSet(mutableSetOf<String>())
    private val unpackErrors = java.util.Collections.synchronizedSet(mutableSetOf<String>())

    private fun dir(): File = (context.getExternalFilesDir("models") ?: File(context.filesDir, "models")).apply { mkdirs() }
    fun file(name: String) = File(dir(), name)
    /** Folder a .zip download unpacks into. */
    fun folder(name: String) = File(dir(), name.removeSuffix(".zip"))
    private fun key(name: String) = "dl:$name"
    private fun isZip(name: String) = name.endsWith(".zip")

    fun isReady(name: String, expected: Long): Boolean =
        if (isZip(name)) File(folder(name), ".ok").exists()
        else file(name).let { it.exists() && (expected <= 0 || it.length() == expected) }

    fun deviceInfo(name: String, expected: Long, voice: String?): Bundle {
        val mi = ActivityManager.MemoryInfo()
        (context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager).getMemoryInfo(mi)
        return Bundle().apply {
            putBoolean("abiOk", Build.SUPPORTED_ABIS.any { it == "arm64-v8a" || it == "x86_64" })
            putLong("totalMb", mi.totalMem / 1048576)
            putLong("availMb", mi.availMem / 1048576)
            putBoolean("lowRamDevice", mi.lowMemory)
            putLong("freeMb", StatFs(dir().path).availableBytes / 1048576)
            putInt("sdk", Build.VERSION.SDK_INT)
            putString("model", Build.MANUFACTURER + " " + Build.MODEL)
            putBoolean("ready", isReady(name, expected))
            putString("path", file(name).path)
            putBoolean("downloading", progress(name, expected).getString("state") in setOf("running", "paused", "extracting") ||
                (voice != null && progress(voice, 0).getString("state") in setOf("running", "paused", "extracting")))
            if (voice != null) putBoolean("voiceReady", isReady(voice, 0))
        }
    }

    /** Starts (or re-attaches to) a download. Returns an error code instead of starting when space is short. */
    fun start(url: String, name: String, expected: Long, wifiOnly: Boolean, title: String, reserveBytes: Long = 0): Bundle {
        val cur = progress(name, expected)
        if (cur.getString("state") in setOf("running", "paused", "extracting", "done")) return cur
        val need = expected + reserveBytes + 300L * 1048576
        val free = StatFs(dir().path).availableBytes
        if (free < need) return Bundle().apply { putString("state", "error"); putString("code", "nospace"); putLong("freeMb", free / 1048576); putLong("needMb", need / 1048576) }
        file(name).delete()
        File(dir(), "$name.part").delete()
        val req = DownloadManager.Request(Uri.parse(url))
            .setTitle(title)
            .setDescription("Interview Edge")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE)
            .setDestinationUri(Uri.fromFile(File(dir(), "$name.part")))
            .setAllowedOverMetered(!wifiOnly)
            .setAllowedOverRoaming(false)
        prefs.edit().putLong(key(name), dm.enqueue(req)).apply()
        return progress(name, expected)
    }

    fun progress(name: String, expected: Long): Bundle {
        val out = Bundle()
        if (isReady(name, expected)) {
            val n = if (isZip(name)) 1L else file(name).length()
            out.putString("state", "done"); out.putLong("received", n); out.putLong("total", n); return out
        }
        if (name in unpacking) { out.putString("state", "extracting"); return out }
        if (unpackErrors.remove(name)) { out.putString("state", "error"); out.putString("code", "corrupt"); return out }
        val id = prefs.getLong(key(name), -1L)
        if (id < 0) {
            // A finished zip whose unpacking was interrupted (app closed): unpack it now.
            if (isZip(name) && file(name).exists()) { unpack(name); out.putString("state", "extracting"); return out }
            out.putString("state", "idle"); return out
        }
        dm.query(DownloadManager.Query().setFilterById(id)).use { c ->
            if (c == null || !c.moveToFirst()) { prefs.edit().remove(key(name)).apply(); out.putString("state", "idle"); return out }
            val status = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS))
            val got = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR))
            val total = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES)).let { if (it > 0) it else expected }
            val reason = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_REASON))
            out.putLong("received", got); out.putLong("total", total)
            when (status) {
                DownloadManager.STATUS_SUCCESSFUL -> {
                    val part = File(dir(), "$name.part")
                    prefs.edit().remove(key(name)).apply()
                    if (expected > 0 && part.length() != expected) {
                        part.delete(); out.putString("state", "error"); out.putString("code", "corrupt")
                    } else if (part.renameTo(file(name))) {
                        if (isZip(name)) { unpack(name); out.putString("state", "extracting") } else out.putString("state", "done")
                    } else { out.putString("state", "error"); out.putString("code", "save") }
                }
                DownloadManager.STATUS_FAILED -> {
                    prefs.edit().remove(key(name)).apply(); dm.remove(id)
                    out.putString("state", "error"); out.putString("code", if (reason == DownloadManager.ERROR_INSUFFICIENT_SPACE) "nospace" else "network"); out.putInt("reason", reason)
                }
                DownloadManager.STATUS_PAUSED -> {
                    out.putString("state", "paused")
                    out.putString("code", when (reason) {
                        DownloadManager.PAUSED_QUEUED_FOR_WIFI -> "wifi"
                        DownloadManager.PAUSED_WAITING_FOR_NETWORK -> "offline"
                        else -> "retrying"
                    })
                }
                else -> out.putString("state", "running")
            }
        }
        return out
    }

    /** Unpacks a downloaded zip on a background thread; writes a ".ok" marker when complete. */
    private fun unpack(name: String) {
        if (!unpacking.add(name)) return
        Thread {
            val zip = file(name); val dest = folder(name)
            try {
                dest.deleteRecursively(); dest.mkdirs()
                val root = dest.canonicalPath + File.separator
                ZipInputStream(zip.inputStream().buffered(1 shl 16)).use { zin ->
                    while (true) {
                        val e = zin.nextEntry ?: break
                        val out = File(dest, e.name)
                        if (!out.canonicalPath.startsWith(root)) throw SecurityException("bad entry ${e.name}")
                        if (e.isDirectory) out.mkdirs() else { out.parentFile?.mkdirs(); out.outputStream().buffered(1 shl 16).use { zin.copyTo(it, 1 shl 16) } }
                    }
                }
                File(dest, ".ok").writeText("ok")
                zip.delete()
            } catch (t: Throwable) {
                android.util.Log.e("EdgeAI", "unpack $name failed", t)
                dest.deleteRecursively(); zip.delete(); unpackErrors.add(name)
            } finally { unpacking.remove(name) }
        }.start()
    }

    fun cancel(name: String) {
        val id = prefs.getLong(key(name), -1L)
        if (id >= 0) dm.remove(id)
        prefs.edit().remove(key(name)).remove("dlId").apply()
        File(dir(), "$name.part").delete()
    }

    fun delete(name: String) {
        cancel(name); file(name).delete()
        if (isZip(name)) folder(name).deleteRecursively()
    }
}
