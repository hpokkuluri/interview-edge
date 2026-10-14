// Run with: node tools/merge.js
// Joins the source parts in src/<id>-<n>.js into one data/q/<id>.js per position, then rebuilds counts.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), src = path.join(root, 'src');
const groups = {};
fs.readdirSync(src).filter(f => /^[a-z0-9-]+-\d+\.js$/.test(f)).forEach(f => { const m = f.match(/^(.+)-(\d+)\.js$/); (groups[m[1]] = groups[m[1]] || []).push([+m[2], f]); });
for (const id in groups) {
  const parts = groups[id].sort((a, b) => a[0] - b[0]).map(([, f]) => fs.readFileSync(path.join(src, f), 'utf8').trim());
  fs.writeFileSync(path.join(root, 'data/q', id + '.js'), `// ${id} — generated from src/${id}-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js\n` + parts.join('\n\n') + '\n');
}
require('./build-counts.js');
