// Usage: node tools/rewrite.js <rewrites.json> [src-file-prefix]
// Replaces answers in the src/ question files with fully rewritten ones (Why they ask → Answer → Tip).
// JSON: { "<exact question text>": "<new answer markdown>", ... }
// Every src file holding a listed question is re-written in place (same banks, order, topics and levels).
// Afterwards run: node tools/merge.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), srcDir = path.join(root, 'src');
const map = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const prefix = process.argv[3] || '';
const used = new Set();
for (const f of fs.readdirSync(srcDir).filter(f => f.startsWith(prefix) && f.endsWith('.js'))) {
  const text = fs.readFileSync(path.join(srcDir, f), 'utf8');
  const ctx = { window: {} }; ctx.QB = ctx.window.QB = {}; vm.createContext(ctx);
  vm.runInContext(text, ctx);
  let changed = 0;
  for (const id of Object.keys(ctx.QB)) ctx.QB[id] = ctx.QB[id].map(q => {
    if (!Object.prototype.hasOwnProperty.call(map, q[1])) return q;
    used.add(q[1]); changed++;
    const r = q.slice(); r[2] = map[q[1]].trim(); return r;
  });
  if (!changed) continue;
  const header = text.startsWith('//') ? text.split('\n')[0] + '\n' : '';
  const body = Object.keys(ctx.QB).map(id => 'QB[' + JSON.stringify(id) + '] = (QB[' + JSON.stringify(id) + '] || []).concat([\n' +
    ctx.QB[id].map(q => '[' + q.map(v => JSON.stringify(v)).join(', ') + ']').join(',\n') + '\n]);').join('\n\n');
  fs.writeFileSync(path.join(srcDir, f), header + body + '\n');
  console.log(f + ': ' + changed + ' rewritten');
}
const missing = Object.keys(map).filter(k => !used.has(k));
if (missing.length) { console.error('NOT FOUND:\n- ' + missing.join('\n- ')); process.exit(1); }
