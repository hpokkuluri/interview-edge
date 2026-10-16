// Usage: node tools/annotate.js <annotations.json>
// Upgrades older outline-style banks to the full-answer format, keeping their existing content.
// JSON: { "<bankId>": [ [why, tip, optionalSampleAnswer], ... one per question, in bank order ] }
// Each answer becomes: **Why they ask:** … / **Answer:** <existing> [/ **Sample answer:** …] / Tip: …
// Rewrites src/<bankId>-1.js with the upgraded bank and removes src/<bankId>-N.js (N>1).
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ann = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
for (const id of Object.keys(ann)) {
  const ctx = { window: {} }; ctx.QB = ctx.window.QB = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(root, 'data/q', id + '.js'), 'utf8'), ctx);
  const bank = ctx.QB[id];
  if (!bank) throw new Error('no bank ' + id);
  if (bank.length !== ann[id].length) throw new Error(id + ': ' + bank.length + ' questions but ' + ann[id].length + ' annotations');
  const out = bank.map((q, i) => {
    const [why, tip, sample] = ann[id][i];
    if (/\*\*Why they ask/.test(q[2])) return q; // already upgraded
    let body = q[2].trim().replace(/\n*Tip:[^\n]*$/i, '');
    let a = '**Why they ask:** ' + why + '\n\n**Answer:**\n' + body;
    if (sample) a += '\n\n**Sample answer:**\n' + sample;
    a += '\n\nTip: ' + tip;
    const r = q.slice(); r[2] = a; return r;
  });
  const header = fs.readFileSync(path.join(root, 'src', id + '-1.js'), 'utf8').split('\n')[0];
  const js = header + '\nQB[' + JSON.stringify(id) + '] = (QB[' + JSON.stringify(id) + '] || []).concat([\n' +
    out.map(q => '[' + q.map(v => JSON.stringify(v)).join(', ') + ']').join(',\n') + '\n]);\n';
  fs.readdirSync(path.join(root, 'src')).filter(f => new RegExp('^' + id + '-\\d+\\.js$').test(f)).forEach(f => fs.unlinkSync(path.join(root, 'src', f)));
  fs.writeFileSync(path.join(root, 'src', id + '-1.js'), js);
  console.log('upgraded', id, out.length);
}
