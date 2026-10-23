// Usage: node tools/deepen.js <batch.js> [<batch.js> ...]
// Batch: module.exports = { '<bank-id>': { <1-based position>: 'new follow-up answer' | ['new follow-up question', 'answer'], ... }, ... }
// Replaces only the follow-up ANSWER (keeps the follow-up question and the top marks), then runs tools/extras.js per bank.
// Dump positions first with: node tools/deepen.js --dump <bank-id>
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const root = path.join(__dirname, '..'), srcDir = path.join(root, 'src');
function load(bank) {
  const files = fs.readdirSync(srcDir).filter(f => new RegExp('^' + bank.replace(/-/g, '\\-') + '-\\d+\\.js$').test(f)).sort((a, b) => +a.match(/-(\d+)\.js$/)[1] - +b.match(/-(\d+)\.js$/)[1]);
  const all = [];
  files.forEach(f => { const ctx = { window: {} }; ctx.QB = ctx.window.QB = {}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(srcDir, f), 'utf8'), ctx); (ctx.QB[bank] || []).forEach(q => all.push(q)); });
  return all;
}
const args = process.argv.slice(2);
if (args[0] === '--dump') {
  args.slice(1).forEach(bank => { load(bank).forEach((q, i) => { if (q[6] && q[6].t && (!q[6].f || q[6].f[1].split(/\s+/).length < (+process.env.MINW || 999))) console.log(`${bank} ${i + 1} | Q: ${q[1]} | FQ: ${q[6].f ? q[6].f[0] : '-'} | FA: ${q[6].f ? q[6].f[1] : '-'}`); }); });
  process.exit(0);
}
const tmp = path.join(require('os').tmpdir(), 'deepen-' + process.pid + '.js');
let total = 0;
args.forEach(file => {
  const batch = require(path.resolve(file));
  for (const bank in batch) {
    const items = load(bank), fu = {};
    for (const pos in batch[bank]) {
      const q = items[+pos - 1];
      if (!q || !q[6] || !q[6].f) { console.error(`${bank} #${pos}: no follow-up at that position`); process.exitCode = 1; continue; }
      const v = batch[bank][pos]; fu[pos] = Array.isArray(v) ? v : [q[6].f[0], v]; total++;
    }
    fs.writeFileSync(tmp, 'module.exports = ' + JSON.stringify({ fu }) + ';\n');
    cp.execFileSync('node', [path.join(__dirname, 'extras.js'), tmp, bank], { stdio: 'inherit' });
  }
});
try { fs.unlinkSync(tmp); } catch (e) {}
console.log('deepened', total, 'follow-up answers');
