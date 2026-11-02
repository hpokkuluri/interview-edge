// Run after `npx cap add android`: settings the generated project needs for the on-device AI.
const fs = require('fs'), path = require('path');
const v = path.join(__dirname, 'android', 'variables.gradle');
let s = fs.readFileSync(v, 'utf8');
// The on-device AI library needs Android 8.0+ (API 26).
s = s.replace(/minSdkVersion\s*=\s*\d+/, 'minSdkVersion = 26');
fs.writeFileSync(v, s);
console.log('Patched android project: minSdk 26');
