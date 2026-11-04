// Copies the web app into www/ so it ships inside the Android app (no website needed),
// and stamps it with web-version.json for in-app updates:
//   web    = this build of the app files (changes on every build)
//   native = fingerprint of the native code (AI/voice engine, Android project setup). A downloaded web update is
//            only applied to an installed app with the same fingerprint; otherwise the app offers a full app update.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const src = path.join(__dirname, '..'), out = path.join(__dirname, 'www');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out);
const items = ['index.html', 'app.js', 'config.js', 'resume.js', 'fonts.css', 'manifest.webmanifest', 'icons', 'fonts', 'data', 'vendor', 'sounds'];
for (const it of items) fs.cpSync(path.join(src, it), path.join(out, it), { recursive: true, filter: f => !f.endsWith('.DS_Store') });

const NATIVE = ['plugins/edge-ai/android/src/main', 'plugins/edge-ai/android/build.gradle', 'patch-android.js', 'package.json', 'capacitor.config.json', 'res-overrides', 'ci/fetch-sherpa.sh'];
const h = crypto.createHash('sha256');
const walk = p => { const st = fs.statSync(p); if (st.isDirectory()) fs.readdirSync(p).sort().forEach(n => walk(path.join(p, n))); else { h.update(path.relative(__dirname, p)); h.update(fs.readFileSync(p)); } };
NATIVE.forEach(p => { const f = path.join(__dirname, p); if (fs.existsSync(f)) walk(f); });
const now = new Date();
const stamp = { web: process.env.BUILD_STAMP || now.toISOString().replace(/\D/g, '').slice(0, 12), native: h.digest('hex').slice(0, 12), date: now.toISOString() };
fs.writeFileSync(path.join(out, 'web-version.json'), JSON.stringify(stamp));
console.log('Copied web app to www/', stamp);
