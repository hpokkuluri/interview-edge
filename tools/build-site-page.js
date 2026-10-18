// Builds one Interview Edge role page for arahasoft.com from an interview-edge question bank.
// Usage: node build-site-page.js <interview-edge dir> <bank id> <slug> <role title> <out dir> "<what the page covers>"
const fs = require('fs'), path = require('path');
const [ieDir, bankId, slug, roleTitle, outDir, about] = process.argv.slice(2);
if (!about) throw new Error('Pass a 6th argument describing what the page covers, e.g. "Oracle Fusion Payables, Payments and Expenses projects"');
global.QB = {}; global.window = global;
require(path.resolve(ieDir, 'data/q', bankId + '.js'));
// At Work banks carry {placeholders} that the app fills from the user's saved role; the site uses the app's neutral wording.
const FALLBACK = { title: 'Senior ERP Analyst', team: 'the ERP applications team', manager: 'my manager',
  resp: 'the finance applications and the integrations that feed them', projects: 'the supplier onboarding upgrade and the month-end close automation project',
  wins: 'cutting invoice processing time by about 30% and closing the last two quarters on schedule',
  challenges: 'a tight go-live date and one open role on the team',
  goals: 'leading a larger team within the next year', priorities: 'a reliable close, fewer manual steps and faster delivery for finance' };
const fill = t => t.replace(/\{(title|team|manager|resp|projects|wins|challenges|goals|priorities)\}/g, (m, k) => FALLBACK[k]);
const qs = (QB[bankId] || []).map(q => [q[0], fill(q[1]), fill(q[2]), q[3]]);
if (!qs.length) throw new Error('No questions for ' + bankId);

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<code>$1</code>');
function md(text) {
  const out = []; let list = null;
  const close = () => { if (list) { out.push(`</${list}>`); list = null; } };
  for (const raw of text.split('\n')) {
    const line = raw.trimEnd();
    let m;
    if ((m = line.match(/^\s*[-•]\s+(.*)/))) { if (list !== 'ul') { close(); out.push('<ul>'); list = 'ul'; } out.push(`<li>${inline(m[1])}</li>`); }
    else if ((m = line.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); out.push('<ol>'); list = 'ol'; } out.push(`<li>${inline(m[1])}</li>`); }
    else if ((m = line.match(/^#+\s+(.*)/))) { close(); out.push(`<p class="sub">${inline(m[1])}</p>`); }
    else if ((m = line.match(/^Tip:\s*(.*)/))) { close(); out.push(`<p class="tip"><strong>Tip:</strong> ${inline(m[1])}</p>`); }
    else if (!line.trim()) { close(); }
    else { close(); out.push(`<p>${inline(line)}</p>`); }
  }
  close(); return out.join('\n');
}

const topics = [...new Set(qs.map(q => q[0]))];
const basics = qs.filter(q => q[3] === 'B').length;
const desc = `${qs.length} ${roleTitle} interview questions with full answers: why they ask, what to say, and a tip. Interview Edge by Arahasoft.`;
const pageTitle = `${roleTitle} Interview Questions (${qs.length}) | Interview Edge by Arahasoft`;
const url = `https://arahasoft.com/interview/${slug}/`;

const items = qs.map((q, i) => `
<details class="q" data-topic="${esc(q[0])}" data-level="${q[3]}">
  <summary><span class="qn">${i + 1}</span><span class="qt">${inline(q[1])}</span><span class="meta"><span class="tag">${esc(q[0])}</span><span class="tag lvl">${q[3] === 'B' ? 'Basic' : 'In-depth'}</span></span></summary>
  <div class="ans">${md(q[2])}</div>
</details>`).join('');

const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qs.map(q => ({ '@type': 'Question', name: q[1], acceptedAnswer: { '@type': 'Answer', text: q[2].replace(/\*\*/g, '') } })) };

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Arahasoft">
<script type="application/ld+json">${JSON.stringify(faq).replace(/</g, '\\u003c')}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
<style>
:root { --navy:#0F2356; --accent:#1A4FCC; --accent-hover:#1340AA; --blue-light:#EEF3FF; --gray-50:#F8F9FC; --gray-100:#F0F2F7; --gray-200:#E2E6F0; --gray-600:#5A6480; --text:#111827; --text-muted:#4B5563; --border:#E2E6F0; }
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:"Inter",sans-serif; color:var(--text); background:#fff; font-size:15px; line-height:1.7; }
a { color:var(--accent); }
nav { position:sticky; top:0; z-index:10; background:rgba(255,255,255,0.97); border-bottom:1px solid var(--border); padding:0 1.25rem; display:flex; align-items:center; justify-content:space-between; height:64px; }
nav img { height:44px; width:auto; display:block; }
nav .links { display:flex; gap:0.25rem; align-items:center; }
nav .links a { color:var(--gray-600); text-decoration:none; font-size:0.88rem; font-weight:500; padding:0.45rem 0.75rem; border-radius:6px; }
nav .links a:hover { background:var(--gray-100); color:var(--navy); }
nav .links a.on { color:var(--accent); background:var(--blue-light); }
.wrap { max-width:820px; margin:0 auto; padding:2rem 1.25rem 4rem; }
.crumb { font-size:0.8rem; color:var(--gray-600); margin-bottom:0.75rem; }
.crumb a { color:var(--gray-600); text-decoration:none; }
.brand { display:inline-block; font-size:0.72rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent); background:var(--blue-light); border:1px solid rgba(26,79,204,0.2); padding:0.2rem 0.6rem; border-radius:999px; margin-bottom:0.75rem; }
h1 { font-family:"Manrope",sans-serif; font-weight:800; color:var(--navy); font-size:clamp(1.5rem,4vw,2.1rem); line-height:1.2; letter-spacing:-0.02em; margin-bottom:0.6rem; }
.lead { color:var(--text-muted); margin-bottom:1.25rem; }
.stats { display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.5rem; }
.stat { background:var(--gray-50); border:1px solid var(--border); border-radius:8px; padding:0.4rem 0.8rem; font-size:0.85rem; color:var(--navy); }
.stat b { font-family:"Manrope",sans-serif; }
.filters { display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem; }
.filters button { font:inherit; font-size:0.82rem; border:1px solid var(--gray-200); background:#fff; color:var(--gray-600); border-radius:999px; padding:0.3rem 0.8rem; cursor:pointer; }
.filters button.on { background:var(--navy); color:#fff; border-color:var(--navy); }
.tools { display:flex; justify-content:flex-end; margin-bottom:0.5rem; }
.tools button { font:inherit; font-size:0.82rem; background:none; border:none; color:var(--accent); cursor:pointer; }
details.q { border:1px solid var(--border); border-radius:10px; margin-bottom:0.6rem; background:#fff; }
details.q[open] { border-color:rgba(26,79,204,0.35); }
summary { list-style:none; cursor:pointer; padding:0.85rem 1rem; display:grid; grid-template-columns:auto 1fr; gap:0.2rem 0.75rem; align-items:start; }
summary::-webkit-details-marker { display:none; }
.qn { font-family:"Manrope",sans-serif; font-weight:800; color:var(--accent); font-size:0.9rem; min-width:1.6rem; padding-top:0.05rem; }
.qt { font-weight:600; color:var(--navy); }
.meta { grid-column:2; display:flex; gap:0.35rem; flex-wrap:wrap; }
.tag { font-size:0.7rem; color:var(--gray-600); background:var(--gray-100); border-radius:4px; padding:0.05rem 0.45rem; }
.tag.lvl { background:var(--blue-light); color:var(--accent); }
summary::after { content:"Show answer"; grid-column:2; font-size:0.78rem; color:var(--accent); font-weight:500; }
details[open] summary::after { content:"Hide answer"; }
.ans { padding:0 1rem 1rem 3.35rem; color:var(--text); }
.ans p { margin:0.35rem 0; }
.ans .sub { font-weight:600; color:var(--navy); margin-top:0.6rem; }
.ans ul, .ans ol { padding-left:1.15rem; margin:0.35rem 0; }
.ans li { margin:0.2rem 0; }
.ans strong { color:var(--navy); }
.ans .tip { background:var(--blue-light); border-left:3px solid var(--accent); border-radius:0 6px 6px 0; padding:0.5rem 0.75rem; margin-top:0.75rem; }
.ans code { font-size:0.85em; background:var(--gray-100); padding:0.05rem 0.3rem; border-radius:4px; }
.cta { margin-top:2.5rem; background:var(--navy); color:#fff; border-radius:12px; padding:1.5rem; }
.cta h2 { font-family:"Manrope",sans-serif; font-size:1.2rem; margin-bottom:0.35rem; }
.cta p { color:#C9D3EC; margin-bottom:1rem; }
.cta a { display:inline-block; background:var(--accent); color:#fff; text-decoration:none; font-weight:600; font-size:0.9rem; padding:0.65rem 1.4rem; border-radius:8px; }
.cta a:hover { background:var(--accent-hover); }
footer { text-align:center; font-size:0.8rem; color:var(--gray-600); padding:2rem 1rem; border-top:1px solid var(--border); }
@media (max-width:640px) { nav .links a.hide-sm { display:none; } .ans { padding-left:1rem; } }
.author { display:flex; gap:0.9rem; align-items:flex-start; background:#F3F6FC; border:1px solid var(--border, #DDE3EE); border-radius:12px; padding:1rem 1.1rem; margin:0 0 1.5rem; }
.author .av { flex:none; width:44px; height:44px; border-radius:50%; background:var(--navy, #0B1F4B); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-family:"Manrope",sans-serif; }
.author b { display:block; color:var(--navy, #0B1F4B); }
.author p { margin:0.15rem 0 0; font-size:0.88rem; color:var(--text-muted, #4A5568); line-height:1.5; }
</style>
<script type="application/ld+json">{"@context": "https://schema.org", "@type": "Person", "name": "Hari Pokkuluri", "jobTitle": "Senior Oracle ERP Solution Architect", "worksFor": {"@type": "Organization", "name": "Arahasoft", "url": "https://arahasoft.com/"}, "knowsAbout": ["Oracle Fusion Cloud", "Oracle E-Business Suite", "Oracle Financials", "Oracle SCM", "Oracle HCM", "Oracle Procurement"]}</script>
</head>
<body>
<nav>
  <a href="/"><img src="/Logo/arahasoft_logo1.png" alt="Arahasoft"></a>
  <div class="links">
    <a href="/" class="hide-sm">Home</a>
    <a href="/interview/" class="on">Interview Edge</a>
    <a href="/#contact">Contact</a>
  </div>
</nav>
<main class="wrap">
  <div class="crumb"><a href="/">Arahasoft</a> › <a href="/interview/">Interview Edge</a> › ${bankId.startsWith('ora-mod-') ? 'Oracle Modules' : bankId.startsWith('ora-') ? 'Oracle ERP Roles' : bankId.startsWith('et-') ? 'ERP Technical' : bankId.startsWith('w-') ? 'At Work' : 'Interview Essentials'}</div>
  <span class="brand">Interview Edge by Arahasoft</span>
  <h1>${esc(roleTitle)} Interview Questions</h1>
  <p class="lead">${bankId.startsWith('w-') ? `How to handle ${esc(about)}. Each question has why it comes up, a sample answer and a tip. The sample answers use an example Senior ERP Analyst; swap in your own projects, wins and goals. Tap a question to see the answer.` : `The questions interviewers ask for ${esc(about)}, with why they ask, a full answer you can say in the room, and a tip. Tap a question to see the answer.`}</p>
  <div class="author"><div class="av">HP</div><div><b>Questions and answers by Hari Pokkuluri</b><p>Senior Oracle ERP Solution Architect with 22+ years in Oracle Fusion Cloud and E-Business Suite: Financials, SCM, HCM and Procurement. Oracle-certified in R11/R12 Financials and OCI AI Foundations. Arahasoft.</p></div></div>
  <div class="stats">
    <span class="stat"><b>${qs.length}</b> questions</span>
    <span class="stat"><b>${basics}</b> basic</span>
    <span class="stat"><b>${qs.length - basics}</b> in-depth</span>
  </div>
  ${topics.length > 1 && topics.length <= 14 ? `<div class="filters" id="filters">
    <button class="on" data-f="all">All</button>
    ${topics.map(t => `<button data-f="${esc(t)}">${esc(t)}</button>`).join('\n    ')}
  </div>` : ''}
  <div class="tools"><button id="toggleAll">Show all answers</button></div>
  <div id="list">${items}
  </div>
  <section class="cta">
    <h2>Need Oracle help?</h2>
    <p>Arahasoft implements and supports Oracle Fusion Cloud and E-Business Suite: Financials, SCM, Procurement and HCM.</p>
    <a href="/#contact">Contact Arahasoft</a>
  </section>
</main>
<footer>© ${new Date().getFullYear()} Arahasoft · Interview Edge by Arahasoft</footer>
<script>
(function () {
  var list = document.getElementById('list'), qs = list.querySelectorAll('details.q');
  var fl = document.getElementById('filters'); if (fl) fl.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    this.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
    var f = b.getAttribute('data-f');
    qs.forEach(function (q) { q.style.display = (f === 'all' || q.getAttribute('data-topic') === f) ? '' : 'none'; });
  });
  var open = false, t = document.getElementById('toggleAll');
  t.addEventListener('click', function () {
    open = !open; qs.forEach(function (q) { if (q.style.display !== 'none') q.open = open; });
    t.textContent = open ? 'Hide all answers' : 'Show all answers';
  });
})();
</script>
</body>
</html>
`;
fs.mkdirSync(path.join(outDir, 'interview', slug), { recursive: true });
fs.writeFileSync(path.join(outDir, 'interview', slug, 'index.html'), html);
console.log('wrote', qs.length, 'questions,', topics.length, 'topics');
