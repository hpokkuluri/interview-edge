// Bundles tools/gemini-live/src.js + the Firebase SDK into vendor/gemini-live.js (one self-contained file).
// Usage: (cd tools/gemini-live && npm install) && node tools/gemini-live/build.js
const path = require('path');
require(path.join(__dirname, 'node_modules', 'esbuild')).buildSync({
  entryPoints: [path.join(__dirname, 'src.js')],
  bundle: true, minify: true, format: 'iife', target: ['chrome90', 'safari15'],
  outfile: path.join(__dirname, '..', '..', 'vendor', 'gemini-live.js'),
  legalComments: 'none',
  banner: { js: '/* Interview Edge live interviewer — includes the Firebase JS SDK (Apache-2.0). Built from tools/gemini-live/src.js */' }
});
console.log('built vendor/gemini-live.js');
