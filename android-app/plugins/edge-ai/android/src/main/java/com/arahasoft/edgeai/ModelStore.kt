package com.arahasoft.edgeai

import android.app.ActivityManager
import android.app.DownloadManager
import android.content.Context
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.StatFs
import java.io.File

/**
 * Where the model lives on the phone, the phone's fitness for running it, and the download.
 * The download goes through Android's DownloadManager: it keeps going with the app closed, resumes
 * after a dropped connection, and shows progress in the notification shade.
 */
class ModelStore(private val context: Context) {
    private val prefs = context.getSharedPreferences("edgeai", Context.MODE_PRIVATE)
    private val dm = context.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager

    private fun dir(): File = (context.getExternalFilesDir("models") ?: File(context.filesDir, "models")).apply { mkdirs() }
    fun file(name: String) = File(dir(), name)

    fun deviceInfo(name: String, expected: Long): Bundle {
        val mi = ActivityManager.MemoryInfo()
        (context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager).getMemoryInfo(mi)
        val f = file(name)
        return Bundle().apply {
            putBoolean("abiOk", Build.SUPPORTED_ABIS.any { it == "arm64-v8a" || it == "x86_64" })
            putLong("totalMb", mi.totalMem / 1048576)
            putLong("availMb", mi.availMem / 1048576)
            putBoolean("lowRamDevice", mi.lowMemory)
            putLong("freeMb", StatFs(dir().path).availableBytes / 1048576)
            putInt("sdk", Build.VERSION.SDK_INT)
            putString("model", Build.MANUFACTURER + " " + Build.MODEL)
            putBoolean("ready", f.exists() && (expected <= 0 || f.length() == expected))
            putString("path", f.path)
            putBoolean("downloading", prefs.getLong("dlId", -1L) >= 0 && progress(name, expected).getString("state") == "running")
        }
    }

    /** Starts (or re-attaches to) the download. Returns an error code instead of starting when space is short. */
    fun start(url: String, name: String, expected: Long, wifiOnly: Boolean): Bundle {
        val cur = progress(name, expected)
        if (cur.getString("state") == "running" || cur.getString("state") == "done") return cur
        val target = file(name)
        val need = expected + 300L * 1048576
        val free = StatFs(dir().path).availableBytes
        if (free < need) return Bundle().apply { putString("state", "error"); putString("code", "nospace"); putLong("freeMb", free / 1048576); putLong("needMb", need / 1048576) }
        target.delete()
        File(dir(), "$name.part").delete()
        val req = DownloadManager.Request(Uri.parse(url))
            .setTitle("Interview Edge AI")
            .setDescription("Downloading the on-device AI interviewer")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE)
            .setDestinationUri(Uri.fromFile(File(dir(), "$name.part")))
            .setAllowedOverMetered(!wifiOnly)
            .setAllowedOverRoaming(false)
        val id = dm.enqueue(req)
        prefs.edit().putLong("dlId", id).apply()
        return progress(name, expected)
    }

    fun progress(name: String, expected: Long): Bundle {
        val out = Bundle()
        val target = file(name)
        if (target.exists() && (expected <= 0 || target.length() == expected)) {
            out.putString("state", "done"); out.putLong("received", target.length()); out.putLong("total", target.length()); return out
        }
        val id = prefs.getLong("dlId", -1L)
        if (id < 0) { out.putString("state", "idle"); return out }
        dm.query(DownloadManager.Query().setFilterById(id)).use { c ->
            if (c == null || !c.moveToFirst()) { prefs.edit().remove("dlId").apply(); out.putString("state", "idle"); return out }
            val status = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS))
            val got = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR))
            val total = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES)).let { if (it > 0) it else expected }
            val reason = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_REASON))
            out.putLong("received", got); out.putLong("total", total)
            when (status) {
                DownloadManager.STATUS_SUCCESSFUL -> {
                    val part = File(dir(), "$name.part")
                    if (expected > 0 && part.length() != expected) {
                        part.delete(); prefs.edit().remove("dlId").apply()
                        out.putString("state", "error"); out.putString("code", "corrupt")
                    } else if (part.renameTo(target)) {
                        prefs.edit().remove("dlId").apply(); out.putString("state", "done")
                    } else { out.putString("state", "error"); out.putString("code", "save") }
                }
                DownloadManager.STATUS_FAILED -> {
                    prefs.edit().remove("dlId").apply(); dm.remove(id)
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

    fun cancel(name: String) {
        val id = prefs.getLong("dlId", -1L)
        if (id >= 0) dm.remove(id)
        prefs.edit().remove("dlId").apply()
        File(dir(), "$name.part").delete()
    }

    fun delete(name: String) { cancel(name); file(name).delete() }

}
