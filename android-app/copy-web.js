// Copies the web app into www/ so it ships inside the Android app (no website needed).
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..'), out = path.join(__dirname, 'www');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out);
const items = ['index.html', 'app.js', 'config.js', 'resume.js', 'fonts.css', 'manifest.webmanifest', 'icons', 'fonts', 'data', 'vendor'];
for (const it of items) fs.cpSync(path.join(src, it), path.join(out, it), { recursive: true, filter: f => !f.endsWith('.DS_Store') });
console.log('Copied web app to www/');
