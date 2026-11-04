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
// Every build gets a higher version number, so Android installs it as an update over the previous one.
if (process.env.VERSION_CODE) g = g.replace(/versionCode\s+\d+/, 'versionCode ' + process.env.VERSION_CODE).replace(/versionName\s+"[^"]*"/, `versionName "1.0.${process.env.VERSION_CODE}"`);
// PHONE_ONLY=1 (the APK people install) also drops x86_64, which only emulators use; the crash test keeps it.
const ex = process.env.PHONE_ONLY === '1' ? "'lib/x86/**', 'lib/x86_64/**'" : "'lib/x86/**'";
if (!g.includes("lib/x86/**")) g = g.replace(/android\s*\{/, `android {\n    packagingOptions { jniLibs { excludes += [${ex}] } }`);
fs.writeFileSync(ag, g);
// The app also needs to find the voice library's local Maven repo (see ci/fetch-sherpa.sh).
const rb = path.join(__dirname, 'android', 'build.gradle');
let r = fs.readFileSync(rb, 'utf8');
if (!r.includes('libs/maven')) r = r.replace(/allprojects\s*\{\s*repositories\s*\{/, m => m + "\n        maven { url \"$rootDir/../plugins/edge-ai/android/libs/maven\" }");
fs.writeFileSync(rb, r);
console.log('Patched android project: minSdk 26, no x86 libs, voice library repo');
