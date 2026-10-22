// Usage: node tools/extras.js <batch.js> <bank-id>
// Adds "top question" marks and follow-up questions to one bank's src files.
// Batch: module.exports = { top: ['<exact question>', ...], fu: { '<exact question>': ['<follow-up question>', '<follow-up answer>'], ... } }
// Stored as item[6] = { t: 1, f: [q, a] } (items padded with null up to index 5). Top marks in a batch replace the bank's old marks.
// Afterwards run: node tools/merge.js && node tools/build-sw.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), srcDir = path.join(root, 'src');
const batch = require(path.resolve(process.argv[2])), bank = process.argv[3];
if (!bank) { console.error('Give the bank id, e.g. fa-ap'); process.exit(1); }
const top = new Set(batch.top || []), fu = batch.fu || {}, seen = new Set();
const files = fs.readdirSync(srcDir).filter(f => new RegExp('^' + bank.replace(/[-]/g, '\\-') + '-\\d+\\.js$').test(f)).sort((a, b) => +a.match(/-(\d+)\.js$/)[1] - +b.match(/-(\d+)\.js$/)[1]);
let n = 0;   // numeric keys in a batch = 1-based position in the bank (files in number order)
if (!files.length) { console.error('No src files for ' + bank); process.exit(1); }
let nt = 0, nf = 0;
for (const f of files) {
  const text = fs.readFileSync(path.join(srcDir, f), 'utf8');
  const ctx = { window: {} }; ctx.QB = ctx.window.QB = {}; vm.createContext(ctx);
  vm.runInContext(text, ctx);
  for (const id of Object.keys(ctx.QB)) ctx.QB[id] = ctx.QB[id].map(q => {
    n++; const r = q.slice(); while (r.length < 6) r.push(null);
    const ex = Object.assign({}, r[6] || {});
    if (batch.top) delete ex.t;
    if (top.has(r[1]) || top.has(n)) { ex.t = 1; nt++; seen.add(top.has(n) ? n : r[1]); }
    const fk = Object.prototype.hasOwnProperty.call(fu, n) ? n : (Object.prototype.hasOwnProperty.call(fu, r[1]) ? r[1] : null);
    if (fk !== null) { ex.f = fu[fk].map(s => s.trim()); nf++; seen.add('F:' + fk); }
    if (Object.keys(ex).length) r[6] = ex; else r.length = 6;
    while (r.length > 3 && r[r.length - 1] === null) r.pop();
    return r;
  });
  const header = text.startsWith('//') ? text.split('\n')[0] + '\n' : '';
  const body = Object.keys(ctx.QB).map(id => 'QB[' + JSON.stringify(id) + '] = (QB[' + JSON.stringify(id) + '] || []).concat([\n' +
    ctx.QB[id].map(q => '[' + q.map(v => JSON.stringify(v)).join(', ') + ']').join(',\n') + '\n]);').join('\n\n');
  fs.writeFileSync(path.join(srcDir, f), header + body + '\n');
}
const miss = [...top].filter(q => !seen.has(q)).concat(Object.keys(fu).filter(q => !seen.has('F:' + q)));
console.log(bank + ': ' + nt + ' top, ' + nf + ' follow-ups');
if (miss.length) { console.error('NOT FOUND:\n- ' + miss.join('\n- ')); process.exit(1); }
