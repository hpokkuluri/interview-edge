// Run after `npx cap add android`: settings the generated project needs for the on-device AI.
const fs = require('fs'), path = require('path');
const v = path.join(__dirname, 'android', 'variables.gradle');
let s = fs.readFileSync(v, 'utf8');
// The on-device AI library needs Android 8.0+ (API 26).
s = s.replace(/minSdkVersion\s*=\s*\d+/, 'minSdkVersion = 26');
fs.writeFileSync(v, s);
// Leave out 32-bit x86 native libraries (emulator-only) to keep the APK smaller.
const ag = path.join(__dirname, 'android', 'app', 'build.gradle');
let g = fs.readFileSync(ag, 'utf8');
if (!g.includes("lib/x86/**")) g = g.replace(/android\s*\{/, "android {\n    packagingOptions { jniLibs { excludes += ['lib/x86/**'] } }");
fs.writeFileSync(ag, g);
console.log('Patched android project: minSdk 26, no x86 libs');
