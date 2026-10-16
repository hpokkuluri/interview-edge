// Usage: node tools/add-family.js <json file> — appends families to data/catalog.js and adds them to their field.
// JSON: { "after": "<family id to insert after in the field list, optional>", "families": [ { id, field, name, short, glyph, color, tint, tag, positions: [...] } ] }
// A new field can be included as "field_def": { id, name, glyph, color, tint, tag } (added to FIELDS if missing).
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'data/catalog.js');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let src = fs.readFileSync(file, 'utf8');
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const pos = p => '      { id: ' + q(p.id) + ', title: ' + q(p.title) + ', level: ' + q(p.level) + ', blurb: ' + q(p.blurb) + ' }';
for (const f of spec.families) {
  if (src.includes("id: '" + f.id + "', field:")) { console.log('skip existing', f.id); continue; }
  const block = '  {\n    id: ' + q(f.id) + ', field: ' + q(f.field) + ', name: ' + q(f.name) + ', short: ' + q(f.short) + ', glyph: ' + q(f.glyph) + ', color: ' + q(f.color) + ', tint: ' + q(f.tint) + ',\n    tag: ' + q(f.tag) + ',\n    positions: [\n' + f.positions.map(pos).join(',\n') + '\n    ]\n  }';
  const end = src.indexOf('\n];\n\n// Fields');
  if (end < 0) throw new Error('catalog end marker not found');
  src = src.slice(0, end) + ',\n' + block + src.slice(end);
}
if (spec.field_def && !src.includes("{ id: '" + spec.field_def.id + "', name:")) {
  const d = spec.field_def;
  const line = "  { id: " + q(d.id) + ", name: " + q(d.name) + ", glyph: " + q(d.glyph) + ", color: " + q(d.color) + ", tint: " + q(d.tint) + ", tag: " + q(d.tag) + ",\n    families: [] }";
  // Keep the 'At Work' field last: insert new fields before it when present.
  const w = src.indexOf("\n  { id: 'work', name:", src.indexOf('window.FIELDS'));
  if (w >= 0) src = src.slice(0, w) + '\n' + line + ',' + src.slice(w);
  else { const m = src.indexOf('\n];\n', src.indexOf('window.FIELDS')); src = src.slice(0, m) + ',\n' + line + src.slice(m); }
}
// Add family ids to their field's families list.
for (const f of spec.families) {
  const re = new RegExp("(\\{ id: '" + f.field + "', name:[\\s\\S]*?families: \\[)([^\\]]*)(\\])");
  src = src.replace(re, (all, a, list, c) => {
    const ids = list.split(',').map(s => s.trim()).filter(Boolean);
    if (ids.includes("'" + f.id + "'")) return all;
    const after = spec.after ? ids.indexOf("'" + spec.after + "'") : -1;
    if (after >= 0) ids.splice(after + 1, 0, "'" + f.id + "'"); else ids.push("'" + f.id + "'");
    spec.after = f.id;
    return a + ids.join(', ') + c;
  });
}
fs.writeFileSync(file, src);
console.log('ok');
