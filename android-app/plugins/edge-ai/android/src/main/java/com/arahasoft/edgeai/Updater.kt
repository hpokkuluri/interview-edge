package com.arahasoft.edgeai

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.provider.Settings
import androidx.core.content.FileProvider
import org.json.JSONObject
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.util.zip.ZipInputStream

/**
 * In-app updates without reinstalling.
 *  - Most updates (questions, screens, sounds) are a "web update": the new app files are downloaded,
 *    unpacked into the phone's storage and the app reloads from them (Capacitor's server base path).
 *  - When the native part changed (the AI or voice engine), a new APK is downloaded and Android's
 *    "Update this app?" prompt is shown. Same signing key, so it updates in place and keeps progress.
 * Every build publishes update.json: { web, native, webUrl, apkUrl }. "native" is a fingerprint of the
 * native code; a web update is only applied when it matches the installed app's own fingerprint.
 */
class Updater(private val context: Context) {
    companion object {
        const val MANIFEST = "https://github.com/hpokkuluri/interview-edge/releases/download/android-test/update.json"
        private const val CAP_PREFS = "CapWebViewSettings"      // com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME
        private const val CAP_PATH = "serverBasePath"           // com.getcapacitor.plugin.WebView.CAP_SERVER_PATH
    }

    private fun webRoot() = File(context.filesDir, "web").apply { mkdirs() }

    /** Version stamp bundled inside the installed APK (what the native code was built with). */
    fun bundled(): JSONObject = try {
        JSONObject(context.assets.open("public/web-version.json").bufferedReader().readText())
    } catch (_: Throwable) { JSONObject() }

    /** Version of the app files currently being shown (a downloaded web update, or the bundled ones). */
    fun current(): JSONObject {
        val path = context.getSharedPreferences(CAP_PREFS, Context.MODE_PRIVATE).getString(CAP_PATH, null)
        if (path != null) {
            val f = File(path, "web-version.json")
            if (f.exists()) try { return JSONObject(f.readText()) } catch (_: Throwable) {}
        }
        return bundled()
    }

    fun fetchManifest(): JSONObject {
        val c = open(MANIFEST + "?t=" + System.currentTimeMillis())
        try { return JSONObject(c.inputStream.bufferedReader().readText()) } finally { c.disconnect() }
    }

    private fun open(url: String): HttpURLConnection {
        var u = URL(url); var hops = 0
        while (true) {
            val c = (u.openConnection() as HttpURLConnection).apply {
                connectTimeout = 15000; readTimeout = 30000; instanceFollowRedirects = false
                setRequestProperty("User-Agent", "InterviewEdge-Updater")
                setRequestProperty("Cache-Control", "no-cache")
            }
            val code = c.responseCode
            if (code in 300..399 && hops++ < 6) { u = URL(u, c.getHeaderField("Location")); c.disconnect(); continue }
            if (code != 200) { c.disconnect(); throw IllegalStateException("HTTP $code") }
            return c
        }
    }

    private fun download(url: String, to: File, onProgress: (Long, Long) -> Unit) {
        val c = open(url)
        try {
            val total = c.contentLengthLong
            to.parentFile?.mkdirs()
            val part = File(to.path + ".part")
            c.inputStream.use { inp -> part.outputStream().use { out ->
                val buf = ByteArray(1 shl 16); var got = 0L; var last = 0L
                while (true) {
                    val n = inp.read(buf); if (n < 0) break
                    out.write(buf, 0, n); got += n
                    val now = System.currentTimeMillis()
                    if (now - last > 250) { onProgress(got, total); last = now }
                }
                onProgress(got, total)
                if (total > 0 && got != total) throw IllegalStateException("download incomplete")
            } }
            to.delete(); if (!part.renameTo(to)) throw IllegalStateException("save failed")
        } finally { c.disconnect() }
    }

    /** Downloads and unpacks a web update. Returns the folder to serve from (caller switches the app to it). */
    fun applyWeb(url: String, version: String, onProgress: (Long, Long) -> Unit): File {
        val root = webRoot()
        val zip = File(root, "update.zip")
        download(url, zip, onProgress)
        val dest = File(root, "v-" + version.replace(Regex("[^A-Za-z0-9_-]"), "_"))
        val tmp = File(root, "unpacking"); tmp.deleteRecursively(); tmp.mkdirs()
        val base = tmp.canonicalPath + File.separator
        ZipInputStream(zip.inputStream().buffered(1 shl 16)).use { z ->
            while (true) {
                val e = z.nextEntry ?: break
                val out = File(tmp, e.name)
                if (!out.canonicalPath.startsWith(base)) throw SecurityException("bad entry")
                if (e.isDirectory) out.mkdirs() else { out.parentFile?.mkdirs(); out.outputStream().use { z.copyTo(it, 1 shl 16) } }
            }
        }
        zip.delete()
        if (!File(tmp, "index.html").exists() || !File(tmp, "app.js").exists()) { tmp.deleteRecursively(); throw IllegalStateException("update is incomplete") }
        dest.deleteRecursively()
        if (!tmp.renameTo(dest)) throw IllegalStateException("save failed")
        context.getSharedPreferences(CAP_PREFS, Context.MODE_PRIVATE).edit().putString(CAP_PATH, dest.path).apply()
        // Keep only the version now in use.
        root.listFiles()?.forEach { if (it.isDirectory && it.name.startsWith("v-") && it != dest) it.deleteRecursively() }
        return dest
    }

    fun canInstallApks(): Boolean = Build.VERSION.SDK_INT < 26 || context.packageManager.canRequestPackageInstalls()

    fun openInstallPermission(activity: Activity) {
        activity.startActivity(Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + context.packageName)))
    }

    fun downloadApk(url: String, onProgress: (Long, Long) -> Unit): File {
        val f = File(context.getExternalFilesDir("updates") ?: File(context.cacheDir, "updates"), "InterviewEdge.apk")
        download(url, f, onProgress)
        return f
    }

    /** Shows Android's "Do you want to update this app?" screen for the downloaded APK. */
    fun install(activity: Activity, apk: File) {
        val uri = FileProvider.getUriForFile(context, context.packageName + ".fileprovider", apk)
        activity.startActivity(Intent(Intent.ACTION_VIEW).apply {
            setDataAndType(uri, "application/vnd.android.package-archive")
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_ACTIVITY_NEW_TASK)
        })
    }
}
