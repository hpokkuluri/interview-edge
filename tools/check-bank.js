// Validate one or more question banks' src files. Usage: node tools/check-bank.js <id> [<id> ...]
// Checks each src/<id>-*.js parses and every question has the right shape.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
let bad = 0;
for (const id of process.argv.slice(2)) {
  const ctx = { window: {} }; ctx.QB = ctx.window.QB = {}; vm.createContext(ctx);
  const files = fs.readdirSync(root + '/src').filter(f => /^(.+)-\d+\.js$/.test(f) && f.replace(/-\d+\.js$/, '') === id).sort();
  if (!files.length) { console.log(id, 'NO FILES'); bad++; continue; }
  try { files.forEach(f => vm.runInContext(fs.readFileSync(root + '/src/' + f, 'utf8'), ctx)); }
  catch (e) { console.log(id, 'SYNTAX ERROR', e.message); bad++; continue; }
  const b = ctx.QB[id] || []; const probs = []; const seen = new Set();
  b.forEach((x, i) => {
    if (!Array.isArray(x) || x.length < 5 || x.length > 7) probs.push(i + ':len');
    if (typeof x[2] !== 'string' || !/^\*\*Why they ask/.test(x[2])) probs.push(i + ':why');
    if (!['B', 'D'].includes(x[3])) probs.push(i + ':diff');
    if (!['E', 'M', 'S', 'X'].includes(x[4])) probs.push(i + ':lvl');
    if (!(x[6] && x[6].f && x[6].f.length === 2 && x[6].f[0].length > 8)) probs.push(i + ':followup');
    if (seen.has(x[1])) probs.push(i + ':dup'); seen.add(x[1]);
  });
  const tops = b.filter(x => x[6] && x[6].t).length;
  const words = Math.round(b.reduce((a, x) => a + String(x[2]).split(/\s+/).length, 0) / (b.length || 1));
  if (b.length < 12) probs.push('TOO FEW QUESTIONS (' + b.length + ', need 12+)');
  if (tops < 3) probs.push('TOO FEW TOP (' + tops + ', need 3+)');
  console.log(id, 'q=' + b.length, 'top=' + tops, 'avgWords=' + words, probs.length ? 'PROBLEMS ' + probs.join(',') : 'OK');
  if (probs.length) bad++;
}
process.exit(bad ? 1 : 0);
