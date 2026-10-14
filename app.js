/* Interview Edge · Arahasoft — the whole app (screens, practice modes, progress).
   Content lives in data/catalog.js (cubes + positions) and data/q/<position>.js (questions).
   Everything a user does is saved only on their own device (localStorage). */
'use strict';

/* ---------------- small helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const COUNTS = window.COUNTS || {};
const FAMS = window.CATALOG;
// Flatten to one entry per question bank. A role with Finance/SCM tracks becomes one entry per track.
const POS = {};
FAMS.forEach(f => f.positions.forEach(p => {
  if (p.tracks) p.tracks.forEach(t => { POS[t.id] = { id: t.id, fam: f, role: p, track: t.label, title: p.title, full: `${p.title} — ${t.label}`, level: p.level, blurb: t.blurb }; });
  else POS[p.id] = Object.assign({ fam: f, role: p, full: p.title }, p);
}));
const bankIds = p => p.tracks ? p.tracks.map(t => t.id) : [p.id];
const DIFF = { B: 'Basic', D: 'In-depth' };
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
const qid = (pos, item) => pos + ':' + hash(item[1]);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }
function famVars(f) { return `--c:${f.color};--tint:${f.tint}`; }

/* ---------------- settings & progress ---------------- */
const S = Object.assign({ theme: 'auto', reveal: false, speak: false, model: 'claude-sonnet-5-5' }, store.get('ip.settings', {}));
const saveS = () => store.set('ip.settings', S);
const applyTheme = () => { if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', S.theme); };
applyTheme();
let PROG = store.get('ip.prog', {});            // { qid: { s: 'k' | 'r', star: 1 } }
const saveP = () => store.set('ip.prog', PROG);
const st = id => (PROG[id] || {});
function setStatus(id, s) { const o = PROG[id] || {}; if (o.s === s) delete o.s; else o.s = s; if (!o.s && !o.star) delete PROG[id]; else PROG[id] = o; saveP(); }
function toggleStar(id) { const o = PROG[id] || {}; if (o.star) delete o.star; else o.star = 1; if (!o.s && !o.star) delete PROG[id]; else PROG[id] = o; saveP(); return !!o.star; }
function posProgress(pos) {
  let k = 0, r = 0; const pre = pos + ':';
  for (const id in PROG) if (id.startsWith(pre)) { if (PROG[id].s === 'k') k++; else if (PROG[id].s === 'r') r++; }
  const total = COUNTS[pos] || 0; return { k, r, total };
}
function famProgress(f) { let k = 0, total = 0; f.positions.forEach(p => bankIds(p).forEach(id => { const x = posProgress(id); k += x.k; total += x.total; })); return { k, total }; }

/* ---------------- loading question banks ---------------- */
const loading = {};
function loadBank(pos) {
  if (window.QB[pos]) return Promise.resolve(window.QB[pos]);
  if (loading[pos]) return loading[pos];
  return loading[pos] = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = `data/q/${pos}.js`;
    s.onload = () => window.QB[pos] ? res(window.QB[pos]) : rej(new Error('empty'));
    s.onerror = () => { delete loading[pos]; rej(new Error('load')); };
    document.head.appendChild(s);
  });
}

/* ---------------- answer formatting ----------------
   In the data files: blank-line-separated paragraphs; "- " bullets; "## Heading"; "Tip: ..." callout; **bold**. */
function inline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
function fmt(text) {
  const out = []; let list = null;
  const close = () => { if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; } };
  text.split('\n').forEach(raw => {
    const l = raw.trim();
    if (!l) { close(); return; }
    if (l.startsWith('- ')) { (list = list || []).push('<li>' + inline(l.slice(2)) + '</li>'); return; }
    close();
    if (l.startsWith('## ')) out.push('<h4>' + inline(l.slice(3)) + '</h4>');
    else if (/^Tip:/i.test(l)) out.push('<div class="tip"><b>Tip</b> — ' + inline(l.replace(/^Tip:\s*/i, '')) + '</div>');
    else out.push('<p>' + inline(l) + '</p>');
  });
  close(); return out.join('');
}
// The AI's replies use light markdown; render headings, bullets and bold.
function fmtAI(text) { return fmt(text.replace(/^#{1,4}\s+/gm, '## ').replace(/^\s*[*•]\s+/gm, '- ')); }

/* ---------------- icons ---------------- */
const I = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  timer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="15" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v13"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><rect x="4" y="7" width="16" height="12" rx="4"/><circle cx="9" cy="13" r="1.3" fill="currentColor"/><circle cx="15" cy="13" r="1.3" fill="currentColor"/><path d="M2 12v3M22 12v3"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>',
  starO: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5"/><path d="M4 3.5v5h5"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>'
};

/* Isometric cube for each job family — the "cubes" on the home screen. */
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const f = v => Math.max(0, Math.min(255, Math.round(amt > 0 ? v + (255 - v) * amt : v * (1 + amt))));
  return '#' + [f(r), f(g), f(b)].map(v => v.toString(16).padStart(2, '0')).join('');
}
const GLYPH = { oracle: 'ERP', sap: 'S/4', java: '{ }', itlead: 'CIO' };
function cubeSVG(f) {
  const c = f.color, g = GLYPH[f.id] || f.short;
  return `<svg viewBox="0 0 100 104" aria-hidden="true">
    <polygon points="50,10 90,33 50,56 10,33" fill="${shade(c, .45)}"/>
    <polygon points="10,33 50,56 50,100 10,77" fill="${c}"/>
    <polygon points="50,56 90,33 90,77 50,100" fill="${shade(c, -.32)}"/>
    <polygon points="50,18 76,33 50,48 24,33" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="1.6"/>
    <g transform="matrix(1 .575 0 1 0 0)"><text x="30" y="${g.length > 2 ? 54 : 55}" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="${g.length > 2 ? 12.5 : 15}" fill="#fff">${esc(g)}</text></g>
    <path d="M60 64l20-11.5M60 74l20-11.5M60 84l14-8" stroke="rgba(255,255,255,.22)" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`;
}
function hexPts(cx, cy, r) { const p = []; for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); }
const LOGO = `<svg viewBox="0 0 64 64" aria-hidden="true">
  <polygon points="${hexPts(15, 32, 12)}" fill="none" stroke="#E2262E" stroke-width="2"/>
  <polygon points="${hexPts(36, 20, 12)}" fill="none" stroke="#E2262E" stroke-width="2"/>
  <polygon points="${hexPts(36, 44, 12)}" fill="none" stroke="#E2262E" stroke-width="2"/>
  <text x="15" y="37" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="13" fill="#fff">a</text>
  <text x="36" y="25" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="12" fill="#fff">ra</text>
  <text x="36" y="49" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="12" fill="#fff">ha</text>
</svg>`;

/* ---------------- voice: dictation and read-aloud ---------------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null, recBtn = null;
function stopDictation() { if (rec) { try { rec.stop(); } catch (e) {} } }
function dictate(textarea, btn, onChange) {
  if (!SR) { toast('Voice typing isn’t available in this browser — use the mic on your keyboard.'); textarea.focus(); return; }
  if (rec && recBtn === btn) { stopDictation(); return; }
  stopDictation();
  const r = new SR(); r.lang = 'en-US'; r.continuous = true; r.interimResults = true;
  const base = textarea.value ? textarea.value.replace(/\s*$/, ' ') : '';
  let finals = '';
  r.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finals += t + ' '; else interim += t;
    }
    textarea.value = base + finals + interim; onChange && onChange();
  };
  r.onerror = e => { if (e.error === 'not-allowed') toast('Microphone permission was blocked.'); };
  r.onend = () => { btn.classList.remove('live'); if (btn.dataset.label) btn.querySelector('span').textContent = btn.dataset.label; if (rec === r) { rec = null; recBtn = null; } };
  rec = r; recBtn = btn; btn.classList.add('live');
  if (btn.dataset.label) btn.querySelector('span').textContent = 'Stop';
  try { r.start(); } catch (e) { btn.classList.remove('live'); }
}
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/\*\*/g, '').replace(/^#+\s*/gm, ''));
  u.lang = 'en-US'; u.rate = 1;
  const v = speechSynthesis.getVoices().find(v => /en-US/i.test(v.lang) && /natural|premium|enhanced|google/i.test(v.name)) || speechSynthesis.getVoices().find(v => /en-US/i.test(v.lang));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
const stopSpeak = () => { if ('speechSynthesis' in window) speechSynthesis.cancel(); };

/* ---------------- screen stack & navigation ---------------- */
const stage = $('#stage');
const stack = [];          // [{ route, el, cleanup }]
const W = () => stage.clientWidth;
function bar(ctx, title, extra = '') {
  return `<div class="bar"><button class="back" data-back>${I.back}<span>${esc(ctx.back)}</span></button><div class="bar-title">${esc(title)}</div>${extra}</div>`;
}
function titleOf(route) {
  const [k, a] = route.split('/');
  if (k === 'home') return 'Home';
  if (k === 'fam') return FAMS.find(f => f.id === a).short;
  if (k === 'pos' || k === 'q') return POS[a] ? (POS[a].track || shortTitle(POS[a].title)) : 'Back';
  if (k === 'mock') return 'Mock';
  if (k === 'flash') return 'Flashcards';
  if (k === 'ai') return 'Interview';
  if (k === 'settings') return 'Settings';
  return 'Back';
}
const shortTitle = t => t.length > 18 ? t.split(/[,/]/)[0].trim().slice(0, 18) : t;

function build(route) {
  const el = document.createElement('div'); el.className = 'screen';
  const [k, a, b] = route.split('/');
  const ctx = { el, route, cleanup: [], back: stack.length ? titleOf(stack[stack.length - 1].route) : 'Home' };
  ({ home: vHome, fam: vFam, pos: vPos, q: vQ, mock: vMock, flash: vFlash, ai: vAI, settings: vSettings }[k] || vHome)(ctx, a, b);
  return ctx;
}
function wireCommon(ctx) {
  ctx.el.addEventListener('click', e => {
    if (e.target.closest('[data-back]')) { history.back(); return; }
    const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
  });
}
function mount(ctx, dir) {
  wireCommon(ctx);
  const cur = stack[stack.length - 1];
  stage.appendChild(ctx.el);
  if (!cur || dir === 0) { if (cur) teardown(cur); return; }
  const w = W();
  ctx.el.style.transform = `translateX(${dir * w}px)`;
  ctx.el.getBoundingClientRect();
  ctx.el.classList.add('anim'); cur.el.classList.add('anim');
  ctx.el.style.transform = 'translateX(0)';
  cur.el.style.transform = `translateX(${-dir * w * .3}px)`;
  if (dir < 0) { cur.el.style.zIndex = 2; cur.el.style.transform = `translateX(${w}px)`; }
}
function teardown(s, later) {
  s.cleanup.forEach(fn => { try { fn(); } catch (e) {} });
  const rm = () => s.el.remove();
  later ? setTimeout(rm, 320) : rm();
}
function go(route, opts = {}) {
  stopDictation(); stopSpeak();
  if (opts.replace) {
    // Swap the top screen in place (next/previous question, Finance ↔ SCM) without adding a Back step.
    const cur = stack.pop();
    const ctx = build(route); wireCommon(ctx);
    stage.appendChild(ctx.el); stack.push(ctx);
    if (route.startsWith('pos/')) store.set('ip.last', route.split('/')[1]);
    if (!cur) return;
    const d = opts.dir || 0;
    if (!d) { teardown(cur); return; }
    const w = W();
    ctx.el.style.transform = `translateX(${d * w}px)`; ctx.el.getBoundingClientRect();
    ctx.el.classList.add('anim'); cur.el.classList.add('anim');
    ctx.el.style.transform = 'translateX(0)'; cur.el.style.transform = `translateX(${-d * w}px)`;
    teardown(cur, true);
    return;
  }
  const ctx = build(route);
  mount(ctx, 1);
  stack.push(ctx);
  history.pushState({ d: stack.length }, '');
  if (route.startsWith('pos/')) store.set('ip.last', route.split('/')[1]);
}
function popScreen() {
  if (stack.length < 2) return;
  stopDictation(); stopSpeak();
  const cur = stack.pop(), prev = stack[stack.length - 1];
  refresh(prev);
  const w = W();
  prev.el.style.transform = `translateX(${-w * .3}px)`; prev.el.getBoundingClientRect();
  prev.el.classList.add('anim'); cur.el.classList.add('anim');
  cur.el.style.zIndex = 2;
  prev.el.style.transform = 'translateX(0)'; cur.el.style.transform = `translateX(${w}px)`;
  teardown(cur, true);
}
// Re-render a screen we come back to, so progress dots and counts are fresh.
function refresh(s) { if (s.refresh) s.refresh(); }
window.addEventListener('popstate', () => popScreen());

/* swipe from the left edge to go back, like a native app */
(function swipeBack() {
  let sx = 0, sy = 0, on = false, cur, prev, w;
  stage.addEventListener('touchstart', e => {
    if (stack.length < 2) return; const t = e.touches[0];
    if (t.clientX > 28) return;
    sx = t.clientX; sy = t.clientY; on = null; cur = stack[stack.length - 1]; prev = stack[stack.length - 2]; w = W();
  }, { passive: true });
  stage.addEventListener('touchmove', e => {
    if (on === false || !cur) return; const t = e.touches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (on === null) { if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return; on = Math.abs(dx) > Math.abs(dy); if (!on) return; cur.el.classList.remove('anim'); prev.el.classList.remove('anim'); }
    const x = Math.max(0, dx); cur.el.style.transform = `translateX(${x}px)`; cur.el.style.zIndex = 2; prev.el.style.transform = `translateX(${-w * .3 + x * .3}px)`;
  }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (!on || !cur) { on = false; cur = null; return; }
    const dx = e.changedTouches[0].clientX - sx;
    cur.el.classList.add('anim'); prev.el.classList.add('anim');
    if (dx > w / 3) history.back();
    else { cur.el.style.transform = 'translateX(0)'; prev.el.style.transform = `translateX(${-w * .3}px)`; }
    on = false; cur = null;
  });
})();

/* ================= SCREENS ================= */

/* ---------- Home: the cubes ---------- */
function vHome(ctx) {
  const render = () => {
    const total = Object.values(COUNTS).reduce((a, b) => a + b, 0);
    const known = Object.values(PROG).filter(p => p.s === 'k').length;
    const mocks = store.get('ip.mocks', []).length;
    const last = store.get('ip.last', null), lp = last && POS[last];
    ctx.el.innerHTML = `<div class="home">
      <div class="hero"><div class="hero-top"><div class="brand">${LOGO}<span>ARAHASOFT</span></div>
        <button class="icon-btn" data-go="settings" aria-label="Settings">${I.gear}</button></div>
        <div class="hero-body"><h1>Interview <em>Edge</em></h1><div class="tagline">by Arahasoft</div>
        <p>Questions, model answers and mock interviews for senior, director and VP roles in Oracle ERP, SAP, Java engineering and IT leadership.</p>
        <div class="stats"><div class="stat"><b>${total}</b><span>questions</span></div><div class="stat"><b>${known}</b><span>you know</span></div><div class="stat"><b>${mocks}</b><span>mock interviews</span></div></div></div></div>
      <div class="home-main"><div class="wrap">
        ${lp ? `<button class="continue" data-go="pos/${lp.id}" style="${famVars(lp.fam)}"><span class="dot" style="background:${lp.fam.color}">${I.play}</span><span style="flex:1;min-width:0"><b>Continue: ${esc(lp.full)}</b><span>${posProgress(lp.id).k} of ${posProgress(lp.id).total} known · ${esc(lp.fam.name)}</span></span>${I.arrow.replace('<svg', '<svg width="20" height="20" style="color:var(--text-3)"')}</button>` : ''}
        <div class="sec-h">Choose a track</div>
        <div class="cubes">${FAMS.map(f => { const p = famProgress(f); return `<button class="cube" data-go="fam/${f.id}" style="${famVars(f)}">${cubeSVG(f)}<h3>${esc(f.name)}</h3><span class="meta">${f.positions.length} roles · ${p.total} questions</span><span class="bar-p"><i style="width:${p.total ? (p.k / p.total * 100).toFixed(1) : 0}%"></i></span></button>`; }).join('')}</div>
        <p class="home-foot">Your progress stays on this device. © Arahasoft</p>
      </div></div></div>`;
  };
  render(); ctx.refresh = render;
}

/* ---------- Family: the positions inside a cube ---------- */
function vFam(ctx, id) {
  const f = FAMS.find(x => x.id === id);
  const render = () => {
    ctx.el.innerHTML = `${bar(ctx, f.name)}<div class="wrap" style="${famVars(f)}">
      <div class="fam-head">${cubeSVG(f)}<div><h2>${esc(f.name)}</h2><p>${esc(f.tag)}</p></div></div>
      <div class="list">${f.positions.map((p, i) => {
        const prog = id => { const x = posProgress(id); const pk = x.total ? x.k / x.total * 100 : 0, pr = x.total ? x.r / x.total * 100 : 0;
          return `<span class="prog"><i class="k" style="width:${pk}%"></i><i class="r" style="width:${pr}%"></i></span><small>${x.k}/${x.total}</small>`; };
        const head = `<div class="pos-row"><span class="n">${i + 1}</span><div style="flex:1;min-width:0"><h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p></div><span class="chip c">${esc(p.level)}</span></div>`;
        if (p.tracks) return `<div class="card">${head}<div class="tracks">${p.tracks.map(t => `<button class="track" data-go="pos/${t.id}"><span class="tl"><b>${esc(t.label)}</b>${I.arrow}</span><span class="tp">${prog(t.id)}</span></button>`).join('')}</div></div>`;
        return `<button class="card" data-go="pos/${p.id}">${head}<div class="pos-foot">${prog(p.id)}</div></button>`; }).join('')}</div></div>`;
  };
  render(); ctx.refresh = render;
}

/* ---------- Position: practice modes + question index ---------- */
const listState = {};   // remembers filters per position while the app is open
function vPos(ctx, id) {
  const p = POS[id], f = p.fam;
  const ls = listState[id] = listState[id] || { cat: 'All', stat: 'all', diff: 'all', q: '' };
  ctx.el.innerHTML = `${bar(ctx, p.title)}<div class="wrap" style="${famVars(f)}"><div class="empty">Loading questions…</div></div>`;
  loadBank(id).then(bank => {
    const cats = ['All', ...new Set(bank.map(x => x[0]))];
    const hasDiff = bank.some(x => x[3]);
    const tracks = p.role.tracks ? `<div class="trk-sw"><div class="seg" id="tsw">${p.role.tracks.map(t => `<button data-t="${t.id}" class="${t.id === id ? 'on' : ''}">${esc(t.label)}</button>`).join('')}</div></div>` : '';
    const head = () => { const x = posProgress(id); const n = bank.length;
      return `<div class="pos-hero"><span class="chip">${esc(p.level)}${p.track ? ' · ' + esc(p.track) : ' · ' + esc(f.name)}</span><h2>${esc(p.title)}</h2><p>${esc(p.blurb)}</p>
        <div class="prog"><i style="background:#fff;width:${x.k / n * 100}%"></i><i style="background:var(--gold);width:${x.r / n * 100}%"></i></div>
        <div class="legend"><span>● ${x.k} known</span><span style="color:var(--gold)">● ${x.r} to review</span><span>${n - x.k - x.r} not marked</span></div></div>`; };
    const filtered = () => bank.map((x, i) => i).filter(i => {
      const x = bank[i], s = st(qid(id, x));
      if (ls.cat !== 'All' && x[0] !== ls.cat) return false;
      if (ls.diff !== 'all' && x[3] !== ls.diff) return false;
      if (ls.stat === 'star' && !s.star) return false;
      if (ls.stat === 'r' && s.s !== 'r') return false;
      if (ls.stat === 'new' && s.s) return false;
      if (ls.stat === 'k' && s.s !== 'k') return false;
      if (ls.q) { const q = ls.q.toLowerCase(); if (!(x[1] + ' ' + x[2] + ' ' + x[0]).toLowerCase().includes(q)) return false; }
      return true;
    });
    const rows = () => { const idx = filtered(); ctx.list = idx;
      if (!idx.length) return '<div class="empty">No questions match.</div>';
      return idx.map(i => { const x = bank[i], s = st(qid(id, x));
        return `<button class="qrow" data-q="${i}"><span class="num">${i + 1}</span><span class="qt">${esc(x[1])}<span class="qc">${esc(x[0])}${x[3] ? `<span class="lvl ${x[3]}">${DIFF[x[3]]}</span>` : ''}</span></span>${s.star ? I.star.replace('<svg', '<svg class="star-ic"') : ''}<span class="sdot ${s.s || ''}"></span></button>`; }).join(''); };
    const statChips = [['all', 'All'], ['new', 'Not marked'], ['r', 'To review'], ['k', 'Known'], ['star', '★ Starred']];
    ctx.el.innerHTML = `${bar(ctx, p.title)}<div class="wrap" style="${famVars(f)}">
      <div id="head">${head()}</div>${tracks}
      <div class="modes">
        <button class="mode" data-go="mock/${id}"><span class="ic">${I.timer}</span><b>Mock interview</b><span>Timed, random questions, score yourself</span></button>
        <button class="mode" data-go="flash/${id}"><span class="ic">${I.cards}</span><b>Flashcards</b><span>Flip, mark known or review</span></button>
        <button class="mode" data-go="ai/${id}"><span class="ic">${I.bot}</span><b>AI interviewer</b><span>Live follow-ups and feedback</span></button>
        <button class="mode" id="voiceq"><span class="ic">${I.mic}</span><b>Voice practice</b><span>Answer a random question out loud</span></button>
      </div>
      ${hasDiff ? `<div class="seg" id="dc" style="margin-top:18px">${[['all', 'All levels'], ['B', 'Basic'], ['D', 'In-depth']].map(([k, l]) => `<button data-d="${k}" class="${ls.diff === k ? 'on' : ''}">${l}</button>`).join('')}</div>` : ''}
      <label class="search">${I.search}<input id="qs" type="search" placeholder="Search ${bank.length} questions" value="${esc(ls.q)}" autocomplete="off"></label>
      <div class="chips" id="sc">${statChips.map(([k, l]) => `<button class="fchip ${ls.stat === k ? 'on' : ''}" data-st="${k}">${l}</button>`).join('')}</div>
      <div class="chips" id="cc">${cats.map(c => `<button class="fchip ${ls.cat === c ? 'on' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div>
      <div id="rows">${rows()}</div></div>`;
    const R = () => { $('#rows', ctx.el).innerHTML = rows(); };
    $('#qs', ctx.el).addEventListener('input', e => { ls.q = e.target.value.trim(); R(); });
    if (hasDiff) $('#dc', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-d]'); if (!b) return; ls.diff = b.dataset.d; $$('#dc button', ctx.el).forEach(x => x.classList.toggle('on', x === b)); R(); });
    const tsw = $('#tsw', ctx.el); if (tsw) tsw.addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (!b || b.dataset.t === id) return; go(`pos/${b.dataset.t}`, { replace: true, dir: 0 }); store.set('ip.last', b.dataset.t); });
    $('#sc', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-st]'); if (!b) return; ls.stat = b.dataset.st; $$('#sc .fchip', ctx.el).forEach(x => x.classList.toggle('on', x === b)); R(); });
    $('#cc', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; ls.cat = b.dataset.cat; $$('#cc .fchip', ctx.el).forEach(x => x.classList.toggle('on', x === b)); R(); });
    $('#rows', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-q]'); if (!b) return; qList[id] = ctx.list.slice(); go(`q/${id}/${b.dataset.q}`); });
    $('#voiceq', ctx.el).addEventListener('click', () => { const i = Math.floor(Math.random() * bank.length); qList[id] = shuffle(bank.map((x, j) => j)); go(`q/${id}/${i}/voice`); });
    ctx.refresh = () => { $('#head', ctx.el).innerHTML = head(); R(); };
  }).catch(() => { $('.wrap', ctx.el).innerHTML = '<div class="empty">Couldn’t load these questions. Check your connection and try again.</div>'; });
}

/* ---------- One question with its model answer ---------- */
const qList = {};   // the list the user is stepping through (filtered order)
function vQ(ctx, id, idxStr, mode) {
  const p = POS[id], f = p.fam, bank = window.QB[id], i = +idxStr, x = bank[i], key = qid(id, x);
  const list = qList[id] || bank.map((_, j) => j);
  const pos = list.indexOf(i);
  const voice = mode === 'voice';
  let shown = S.reveal && !voice;
  const drafts = store.get('ip.drafts', {});
  const render = () => {
    const s = st(key);
    ctx.el.innerHTML = `${bar(ctx, pos >= 0 ? `${pos + 1} of ${list.length}` : `Question ${i + 1}`, `<button class="icon-btn" id="sp" aria-label="Read aloud">${I.speaker}</button><button class="icon-btn" id="star" aria-label="Star" style="color:${s.star ? 'var(--gold)' : ''}">${s.star ? I.star : I.starO}</button>`)}
    <div class="wrap" style="${famVars(f)}">
      <div class="q-cat"><span class="chip c">${esc(x[0])}</span>${x[3] ? `<span class="chip">${DIFF[x[3]]}</span>` : ''}<span class="chip">${esc(p.full)}</span></div>
      <h2 class="q-text">${esc(x[1])}</h2>
      <div class="practice" id="pr" ${voice || drafts[key] ? '' : 'hidden'}><h4>Your answer</h4><p>Say it out loud or type it, then compare with the model answer.</p>
        <textarea class="ans" id="mine" placeholder="Tap the mic and start talking…">${esc(drafts[key] || '')}</textarea>
        <div class="rec-row"><button class="mic" id="mic" data-label="Speak">${I.mic}<span>Speak</span></button><small id="wc"></small></div></div>
      ${voice || drafts[key] ? '' : `<button class="btn ghost wide" id="try" style="margin-bottom:12px">${I.mic} Practice your answer first</button>`}
      <div id="ans">${shown ? `<div class="answer">${fmt(x[2])}</div>` : `<button class="reveal" id="rv">Show model answer<small>Think it through first — what would you say?</small></button>`}</div>
      <div class="actions"><button class="btn k ${s.s === 'k' ? 'on' : ''}" id="mk">${I.check} Got it</button><button class="btn r ${s.s === 'r' ? 'on' : ''}" id="mr">${I.redo} Review again</button></div>
      <div class="pager"><button class="btn ghost" id="prev" ${pos <= 0 ? 'disabled' : ''}>${I.back} Previous</button><button class="btn navy" id="next" ${pos < 0 || pos >= list.length - 1 ? 'disabled' : ''}>Next ${I.arrow}</button></div>
    </div>`;
    const ta = $('#mine', ctx.el), wc = $('#wc', ctx.el);
    const count = () => { const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; wc.textContent = n ? `${n} words · about ${Math.max(1, Math.round(n / 140))} min spoken` : ''; const d = store.get('ip.drafts', {}); if (ta.value.trim()) d[key] = ta.value; else delete d[key]; store.set('ip.drafts', d); };
    ta.addEventListener('input', count); count();
    $('#mic', ctx.el).addEventListener('click', e => dictate(ta, e.currentTarget, count));
    const tryB = $('#try', ctx.el); if (tryB) tryB.addEventListener('click', () => { $('#pr', ctx.el).hidden = false; tryB.remove(); ta.focus(); });
    const rv = $('#rv', ctx.el); if (rv) rv.addEventListener('click', () => { shown = true; stopDictation(); $('#ans', ctx.el).innerHTML = `<div class="answer">${fmt(x[2])}</div>`; });
    $('#star', ctx.el).addEventListener('click', e => { const on = toggleStar(key); e.currentTarget.innerHTML = on ? I.star : I.starO; e.currentTarget.style.color = on ? 'var(--gold)' : ''; toast(on ? 'Starred' : 'Removed star'); });
    $('#sp', ctx.el).addEventListener('click', () => speak(x[1] + (shown ? '. ' + x[2] : '')));
    $('#mk', ctx.el).addEventListener('click', () => { setStatus(key, 'k'); const s2 = st(key); $('#mk', ctx.el).classList.toggle('on', s2.s === 'k'); $('#mr', ctx.el).classList.remove('on'); if (s2.s === 'k' && pos >= 0 && pos < list.length - 1) setTimeout(() => step(1), 250); });
    $('#mr', ctx.el).addEventListener('click', () => { setStatus(key, 'r'); const s2 = st(key); $('#mr', ctx.el).classList.toggle('on', s2.s === 'r'); $('#mk', ctx.el).classList.remove('on'); });
    $('#prev', ctx.el).addEventListener('click', () => step(-1));
    $('#next', ctx.el).addEventListener('click', () => step(1));
    if (voice && S.speak) setTimeout(() => speak(x[1]), 350);
  };
  const step = d => { const ni = list[pos + d]; if (ni === undefined) return; go(`q/${id}/${ni}${voice ? '/voice' : ''}`, { replace: true, dir: d }); };
  render();
}

/* ---------- Mock interview: timed random questions, self-scored ---------- */
const SCORE_L = ['', 'Missed', 'Weak', 'OK', 'Good', 'Strong'];
const SCORE_C = ['', '#DC2626', '#EA580C', '#D97706', '#2563EB', '#16A34A'];
function vMock(ctx, id) {
  const p = POS[id], f = p.fam;
  ctx.el.innerHTML = `${bar(ctx, 'Mock interview')}<div class="wrap" style="${famVars(f)}"><div class="empty">Loading…</div></div>`;
  loadBank(id).then(bank => {
    const cfg = Object.assign({ n: 8, mins: 3, pool: 'all', speak: S.speak, voice: true }, store.get('ip.mockcfg', {}));
    let session = null, timer = null;
    ctx.cleanup.push(() => clearInterval(timer));
    const wrap = () => $('.wrap', ctx.el);
    const pool = () => bank.map((x, i) => i).filter(i => { const s = st(qid(id, bank[i])); return cfg.pool === 'all' || (cfg.pool === 'review' && s.s === 'r') || (cfg.pool === 'new' && !s.s) || (cfg.pool === 'star' && s.star); });

    function setup() {
      clearInterval(timer);
      const hist = store.get('ip.mocks', []).filter(m => m.pos === id).slice(-5).reverse();
      const seg = (name, opts) => `<div class="seg" data-k="${name}">${opts.map(([v, l]) => `<button data-v="${v}" class="${String(cfg[name]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
      wrap().innerHTML = `<div class="pos-hero"><span class="chip">${esc(p.level)}</span><h2>Mock interview</h2><p>${esc(p.full)} — random questions against the clock. Answer out loud as you would in the room, then compare with the model answer and score yourself honestly.</p></div>
        <div class="panel"><h3>Set up</h3>
          <div class="field"><label>Questions</label>${seg('n', [[5, '5'], [8, '8'], [12, '12'], [20, '20']])}</div>
          <div class="field"><label>Time per question</label>${seg('mins', [[2, '2 min'], [3, '3 min'], [5, '5 min'], [0, 'No limit']])}</div>
          <div class="field"><label>Draw from</label>${seg('pool', [['all', 'All'], ['new', 'Unmarked'], ['review', 'Review'], ['star', 'Starred']])}</div>
          <div class="field">
            <label class="toggle"><span><b>Answer by voice</b><span>Your spoken answer is transcribed so you can read it back</span></span><input type="checkbox" class="sw" id="cv" ${cfg.voice ? 'checked' : ''}></label>
            <label class="toggle"><span><b>Read questions aloud</b><span>Like an interviewer asking you</span></span><input type="checkbox" class="sw" id="cs" ${cfg.speak ? 'checked' : ''}></label>
          </div>
          <div class="muted" id="pc" style="margin-top:6px"></div>
          <button class="btn pri wide" id="start" style="margin-top:14px">${I.play} Start interview</button></div>
        ${hist.length ? `<div class="panel"><h3>Recent results</h3><div class="hist">${hist.map(m => `<div><span>${new Date(m.at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} · ${m.n} questions</span><b>${m.avg.toFixed(1)} / 5</b></div>`).join('')}</div></div>` : ''}`;
      const pc = () => { const n = pool().length; $('#pc', ctx.el).textContent = `${n} question${n === 1 ? '' : 's'} available in this set.`; $('#start', ctx.el).disabled = !n; };
      $$('.seg', ctx.el).forEach(sg => sg.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; const k = sg.dataset.k; cfg[k] = isNaN(+b.dataset.v) ? b.dataset.v : +b.dataset.v; $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); store.set('ip.mockcfg', cfg); pc(); }));
      $('#cv', ctx.el).addEventListener('change', e => { cfg.voice = e.target.checked; store.set('ip.mockcfg', cfg); });
      const csw = $('#cs', ctx.el); if (csw) csw.addEventListener('change', e => { cfg.speak = e.target.checked; store.set('ip.mockcfg', cfg); });
      $('#start', ctx.el).addEventListener('click', () => { const qs = shuffle(pool()).slice(0, cfg.n); session = { qs, at: 0, scores: [], answers: [] }; ask(); });
      pc();
    }

    function ask() {
      clearInterval(timer); stopDictation();
      const n = session.at, x = bank[session.qs[n]], total = cfg.mins * 60; let left = total, revealed = false;
      const C = 2 * Math.PI * 28;
      wrap().innerHTML = `<div class="mock-top"><div class="ring" id="ring">${cfg.mins ? `<svg viewBox="0 0 66 66"><circle cx="33" cy="33" r="28" fill="none" stroke="var(--line)" stroke-width="6"/><circle id="arc" cx="33" cy="33" r="28" fill="none" stroke="var(--c)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="0"/></svg><b id="tm"></b>` : `<svg viewBox="0 0 66 66"><circle cx="33" cy="33" r="28" fill="none" stroke="var(--c)" stroke-width="6"/></svg><b>∞</b>`}</div>
          <div style="flex:1"><div class="qn">QUESTION ${n + 1} OF ${session.qs.length} · ${esc(x[0]).toUpperCase()}</div><div class="dots">${session.qs.map((_, j) => `<i class="${j < n ? 'done' : j === n ? 'cur' : ''}"></i>`).join('')}</div></div></div>
        <h2 class="q-text">${esc(x[1])}</h2>
        ${cfg.voice ? `<div class="practice"><h4>Your answer</h4><textarea class="ans" id="mine" placeholder="Tap Speak and answer as you would in the room…"></textarea><div class="rec-row"><button class="mic" id="mic" data-label="Speak">${I.mic}<span>Speak</span></button><small id="wc"></small></div></div>` : ''}
        <div id="after"><button class="btn navy wide" id="done" style="margin-top:14px">I’ve answered — show model answer</button></div>
        <button class="btn ghost wide" id="quit" style="margin-top:10px">End interview</button>`;
      const tick = () => { if (!cfg.mins) return; const m = Math.floor(Math.max(0, left) / 60), s = Math.max(0, left) % 60;
        $('#tm', ctx.el).textContent = `${m}:${String(s).padStart(2, '0')}`; $('#arc', ctx.el).setAttribute('stroke-dashoffset', C * (1 - Math.max(0, left) / total));
        $('#ring', ctx.el).classList.toggle('low', left <= 30);
        if (left === 30 && navigator.vibrate) navigator.vibrate(80);
        if (left <= 0) { clearInterval(timer); toast('Time’s up'); if (navigator.vibrate) navigator.vibrate([120, 80, 120]); reveal(); } };
      if (cfg.mins) { tick(); timer = setInterval(() => { left--; tick(); }, 1000); }
      const ta = $('#mine', ctx.el);
      if (ta) { const wc = $('#wc', ctx.el); const cnt = () => { const k = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; wc.textContent = k ? `${k} words` : ''; };
        ta.addEventListener('input', cnt); $('#mic', ctx.el).addEventListener('click', e => dictate(ta, e.currentTarget, cnt)); }
      if (cfg.speak) setTimeout(() => speak(x[1]), 300);
      $('#done', ctx.el).addEventListener('click', reveal);
      $('#quit', ctx.el).addEventListener('click', () => { if (session.scores.length) results(); else setup(); });
      function reveal() {
        if (revealed) return; revealed = true; clearInterval(timer); stopDictation(); stopSpeak();
        session.answers[n] = ta ? ta.value : '';
        $('#after', ctx.el).innerHTML = `<div class="answer" style="margin-top:14px"><h4>Model answer</h4>${fmt(x[2])}</div>
          <div class="panel"><h3>How did you do?</h3><p>Score your answer against the model answer.</p><div class="score">${[1, 2, 3, 4, 5].map(v => `<button data-s="${v}">${v}<small>${SCORE_L[v]}</small></button>`).join('')}</div></div>`;
        $('#after .score', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-s]'); if (!b) return; const v = +b.dataset.s;
          $$('#after .score button', ctx.el).forEach(z => z.classList.toggle('on', z === b));
          session.scores[n] = v;
          const key = qid(id, x); const cur = st(key).s;
          if (v <= 2 && cur !== 'r') setStatus(key, 'r'); else if (v >= 4 && cur !== 'k') setStatus(key, 'k');
          setTimeout(() => { session.at++; if (session.at < session.qs.length) { ask(); ctx.el.scrollTop = 0; } else results(); }, 300); });
        $('#after', ctx.el).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function results() {
      clearInterval(timer); stopDictation();
      const sc = session.scores.filter(Boolean), avg = sc.reduce((a, b) => a + b, 0) / (sc.length || 1);
      if (sc.length) { const h = store.get('ip.mocks', []); h.push({ pos: id, at: Date.now(), n: sc.length, avg }); store.set('ip.mocks', h.slice(-200)); }
      const verdict = avg >= 4.3 ? 'Interview-ready on this set.' : avg >= 3.5 ? 'Solid — tighten the weaker answers.' : avg >= 2.5 ? 'Getting there — keep drilling the review list.' : 'Early days — study the model answers, then try again.';
      ctx.el.scrollTop = 0;
      wrap().innerHTML = `<div class="panel" style="text-align:center"><div class="muted">YOUR AVERAGE</div><div class="big-num">${avg.toFixed(1)}<span style="font-size:1.6rem;color:var(--text-3)"> / 5</span></div><p style="margin:0;color:var(--text-2)">${verdict}</p></div>
        <div class="panel"><h3>Question by question</h3><p>Scores of 1–2 were added to your review list; 4–5 marked as known.</p>
        ${session.qs.slice(0, session.scores.length).map((qi, j) => { const v = session.scores[j]; return `<div class="res-row"><span class="sc" style="background:${SCORE_C[v] || 'var(--text-3)'}">${v || '–'}</span><div style="flex:1"><p>${esc(bank[qi][1])}</p>${session.answers[j] ? `<div class="muted" style="margin-top:4px">You said: ${esc(session.answers[j].slice(0, 220))}${session.answers[j].length > 220 ? '…' : ''}</div>` : ''}</div></div>`; }).join('')}</div>
        <div class="actions"><button class="btn pri" id="again">${I.redo} New interview</button><button class="btn" data-go="ai/${id}">${I.bot} AI interviewer</button></div>`;
      $('#again', ctx.el).addEventListener('click', setup);
    }
    setup();
  });
}

/* ---------- Flashcards ---------- */
function vFlash(ctx, id) {
  const p = POS[id], f = p.fam;
  ctx.el.innerHTML = `${bar(ctx, 'Flashcards')}<div class="wrap" style="${famVars(f)}"><div class="empty">Loading…</div></div>`;
  loadBank(id).then(bank => {
    let deck = [], at = 0, which = store.get('ip.deck', 'new'), done = { k: 0, r: 0 };
    const wrap = () => $('.wrap', ctx.el);
    const sets = () => {
      const all = bank.map((x, i) => i), s = i => st(qid(id, bank[i]));
      return { new: all.filter(i => !s(i).s), review: all.filter(i => s(i).s === 'r'), star: all.filter(i => s(i).star), all };
    };
    function pick() {
      const S2 = sets();
      const lab = { new: ['Not marked', 'Fresh cards'], review: ['To review', 'Ones you missed'], star: ['Starred', 'Your picks'], all: ['All cards', 'Whole set'] };
      wrap().innerHTML = `<div class="pos-hero"><span class="chip">${esc(p.full)}</span><h2>Flashcards</h2><p>Tap a card to flip it. “Got it” marks it known; “Again” puts it on your review list.</p></div>
        <div class="panel"><h3>Choose a deck</h3><p>Cards are shuffled each time.</p><div class="deck-pick">${Object.keys(lab).map(k => `<button data-d="${k}" class="${which === k ? 'on' : ''}" ${S2[k].length ? '' : 'disabled style="opacity:.45"'}><b>${S2[k].length}</b><span>${lab[k][0]}</span></button>`).join('')}</div>
        <button class="btn pri wide" id="go" style="margin-top:14px">${I.play} Start</button></div>`;
      $('.deck-pick', ctx.el).addEventListener('click', e => { const b = e.target.closest('[data-d]'); if (!b || b.disabled) return; which = b.dataset.d; store.set('ip.deck', which); $$('.deck-pick button', ctx.el).forEach(z => z.classList.toggle('on', z === b)); });
      $('#go', ctx.el).addEventListener('click', () => { const s = sets()[which]; if (!s.length) { toast('That deck is empty'); return; } deck = shuffle(s); at = 0; done = { k: 0, r: 0 }; card(); });
    }
    function card() {
      if (at >= deck.length) return finish();
      const x = bank[deck[at]];
      wrap().innerHTML = `<div class="flip"><div class="fcard" id="fc"><div class="face f-front"><span class="chip c" style="align-self:flex-start">${esc(x[0])}</span><h2 class="q-text">${esc(x[1])}</h2><small>Tap to flip</small></div>
        <div class="face f-back"><div class="answer">${fmt(x[2])}</div></div></div></div>
        <div class="fc-count">${at + 1} / ${deck.length}</div>
        <div class="actions"><button class="btn r on" id="again">${I.redo} Again</button><button class="btn k on" id="got">${I.check} Got it</button></div>
        <button class="btn ghost wide" id="end">End session</button>`;
      const fc = $('#fc', ctx.el);
      const size = () => { const fr = $('.f-front', fc), bk = $('.f-back', fc); fc.style.minHeight = Math.max(340, fc.classList.contains('flipped') ? Math.min(bk.scrollHeight, window.innerHeight * .62) : fr.scrollHeight) + 'px'; };
      fc.addEventListener('click', () => { fc.classList.toggle('flipped'); size(); }); size();
      const mark = s => { const key = qid(id, x); if (st(key).s !== s) setStatus(key, s); done[s]++; at++; card(); };
      $('#again', ctx.el).addEventListener('click', () => mark('r'));
      $('#got', ctx.el).addEventListener('click', () => mark('k'));
      $('#end', ctx.el).addEventListener('click', finish);
    }
    function finish() {
      wrap().innerHTML = `<div class="panel" style="text-align:center"><div class="muted">SESSION DONE</div><div class="big-num">${done.k}<span style="font-size:1.6rem;color:var(--text-3)"> known</span></div><p style="margin:0;color:var(--text-2)">${done.r} added to your review list.</p></div>
        <div class="actions"><button class="btn pri" id="more">${I.cards} Another deck</button><button class="btn" data-go="mock/${id}">${I.timer} Mock interview</button></div>`;
      $('#more', ctx.el).addEventListener('click', pick);
    }
    pick();
  });
}

/* ---------- AI interviewer (uses the person's own Claude API key, kept on this device) ---------- */
const PERSONAS = {
  hm: ['Hiring manager', 'the hiring manager this role reports to'],
  panel: ['Technical panel', 'a senior technical panel interviewer who probes depth, specifics and trade-offs'],
  exec: ['Executive', 'a C-level executive (CEO/CFO/COO) assessing leadership, business judgment and executive presence']
};
function aiSystem(p, bank, cfg) {
  return `You are ${PERSONAS[cfg.persona][1]}, interviewing a candidate for the role "${p.full}" (${p.level}, ${p.fam.name} track). Role focus: ${p.blurb}

Run a realistic interview:
- Ask ONE question at a time. Keep each of your turns short (under 70 words) and conversational, like a real interviewer.
- Pitch questions at the ${p.level} level: mix hands-on depth with leadership, judgment and behavioral questions in proportion to the seniority.
- After each answer, either ask one probing follow-up (when the answer is vague, lacks specifics, metrics, trade-offs or the candidate's own role) or move on to a new topic. Do not give feedback or hints during the interview.
- Aim for about ${cfg.len} main questions. After the last one, or whenever the candidate says END, stop interviewing and give feedback.

Feedback format (use these headings):
## Overall
Score out of 10 and a hiring signal: Strong hire / Hire / Lean no hire / No hire, with one sentence why.
## Strengths
## Gaps
## Question by question
One or two lines each: what landed, what was missing.
## What a strong answer adds
## Practice next
Three specific things.

Be candid and specific; this is practice, so honest critique is the point. Topics you can draw from (the candidate's question bank — rephrase, combine and go beyond them):
${bank.map(x => '- ' + x[1]).join('\n')}

Start by greeting the candidate briefly in character and asking your first question.`;
}
// Same interviewer brief, written as a message to paste into Claude (keeps the link a sensible length).
function claudePrompt(p, bank, cfg) {
  const topics = shuffle(bank).slice(0, 20);
  return aiSystem(p, topics, cfg)
    .replace(/^You are /, 'Please role-play a job interview with me. You are ')
    .replace('Start by greeting the candidate briefly in character and asking your first question.', 'I am the candidate. Start now: greet me briefly in character and ask your first question. When I type END, give the feedback.');
}
async function callClaude(system, messages) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': S.key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
    body: JSON.stringify({ model: S.model, max_tokens: 1800, system, messages })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) {
    const m = (j.error && j.error.message) || r.statusText;
    if (r.status === 401) throw new Error('The API key was rejected. Check it in Settings.');
    if (r.status === 404) throw new Error(`Model not found (${S.model}). Pick another model in Settings.`);
    if (r.status === 429) throw new Error('Rate limit reached — wait a moment and try again.');
    throw new Error(m || 'Request failed');
  }
  return (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n').trim();
}
const END_MSG = 'END — please stop the interview and give me your full feedback now.';
function vAI(ctx, id) {
  const p = POS[id], f = p.fam;
  ctx.el.innerHTML = `${bar(ctx, 'AI interviewer')}<div class="wrap" style="${famVars(f)}"><div class="empty">Loading…</div></div>`;
  loadBank(id).then(bank => {
    const wrap = () => $('.wrap', ctx.el);
    const cfg = Object.assign({ persona: 'hm', len: 6, speak: S.speak }, store.get('ip.aicfg', {}));
    let conv = store.get('ip.ai.' + id, null);   // { cfg, msgs: [{role, content}] } — first user msg is hidden
    let busy = false;
    ctx.cleanup.push(stopSpeak);

    function intro() {
      const seg = (name, opts) => `<div class="seg" data-k="${name}">${opts.map(([v, l]) => `<button data-v="${v}" class="${String(cfg[name]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
      wrap().innerHTML = `<div class="pos-hero"><span class="chip">${esc(p.level)}</span><h2>AI interviewer</h2><p>${esc(p.full)} — answer by typing or speaking. It follows up like a real panel and debriefs you at the end.</p></div>
        <div class="panel"><h3>Interview setup</h3>
          <div class="field"><label>Interviewer</label>${seg('persona', Object.entries(PERSONAS).map(([k, v]) => [k, v[0]]))}</div>
          <div class="field"><label>Length</label>${seg('len', [[4, 'Short'], [6, 'Standard'], [10, 'Full loop']])}</div>
          <a class="btn pri wide" id="claude" href="#" target="_blank" rel="noopener" style="margin-top:12px;text-decoration:none">${I.bot} Interview me in Claude</a>
          <p class="muted" style="margin:8px 2px 0">Opens Claude with this interview ready to go — uses your Claude plan, no extra cost. If the message box is empty, just paste — the setup is already copied.</p>
        </div>
        <div class="panel"><h3>Or interview right here</h3><p>Runs inside this app with voice and read-aloud. Needs your own Anthropic API key (billed per use).</p>
          ${S.key ? `<label class="toggle" style="margin-bottom:8px"><span><b>Read interviewer aloud</b><span>Uses your device’s voice</span></span><input type="checkbox" class="sw" id="cs" ${cfg.speak ? 'checked' : ''}></label>` : ''}
          ${S.key ? `<button class="btn wide" id="start">${I.play} Start in this app</button>` : `<button class="btn wide" data-go="settings">${I.gear} Add API key in Settings</button>`}
          ${S.key && conv ? `<button class="btn ghost wide" id="resume" style="margin-top:10px">Resume previous interview (${conv.msgs.length - 1} messages)</button>` : ''}
        </div>`;
      $$('.seg', ctx.el).forEach(sg => sg.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; const k = sg.dataset.k; cfg[k] = isNaN(+b.dataset.v) ? b.dataset.v : +b.dataset.v; $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); store.set('ip.aicfg', cfg); }));
      const csw = $('#cs', ctx.el); if (csw) csw.addEventListener('change', e => { cfg.speak = e.target.checked; store.set('ip.aicfg', cfg); });
      const cl = $('#claude', ctx.el);
      const setLink = () => { cl.href = 'https://claude.ai/new?q=' + encodeURIComponent(claudePrompt(p, bank, cfg)); };
      setLink(); ctx.el.addEventListener('click', e => { if (e.target.closest('.seg')) setTimeout(setLink, 0); });
      cl.addEventListener('click', () => { setLink(); try { navigator.clipboard.writeText(claudePrompt(p, bank, cfg)).catch(() => {}); } catch (e) {} toast('Opening Claude — interview setup also copied'); });
      const st = $('#start', ctx.el); if (st) st.addEventListener('click', () => { conv = { cfg: Object.assign({}, cfg), msgs: [{ role: 'user', content: 'Hello — I’m ready to begin the interview.' }] }; chat(); send(null); });
      const rs = $('#resume', ctx.el); if (rs) rs.addEventListener('click', chat);
    }
    ctx.refresh = () => { if (!$('#chat', ctx.el)) intro(); };   // pick up a key added in Settings

    function chat() {
      wrap().innerHTML = `<div class="chat" id="chat"></div>
        <div class="composer"><div class="composer-in"><button class="round mic-b" id="mic" aria-label="Speak">${I.mic}</button><textarea id="in" rows="1" placeholder="Your answer…"></textarea><button class="round" id="send" aria-label="Send">${I.send}</button></div>
        <div class="composer-tools"><button class="btn ghost" id="fb">End &amp; get feedback</button><button class="btn ghost" id="new">New interview</button></div></div>`;
      const box = $('#chat', ctx.el), input = $('#in', ctx.el);
      box.innerHTML = `<div class="msg sys">${esc(PERSONAS[conv.cfg.persona][0])} · ${esc(p.title)}</div>` + conv.msgs.slice(1).map(m => bubble(m)).join('');
      const grow = () => { input.style.height = 'auto'; input.style.height = Math.min(180, input.scrollHeight) + 'px'; };
      input.addEventListener('input', grow);
      $('#mic', ctx.el).addEventListener('click', e => dictate(input, e.currentTarget, grow));
      $('#send', ctx.el).addEventListener('click', () => { const t = input.value.trim(); if (!t || busy) return; stopDictation(); input.value = ''; grow(); send(t); });
      input.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) $('#send', ctx.el).click(); });
      $('#fb', ctx.el).addEventListener('click', () => { if (!busy) send(END_MSG); });
      $('#new', ctx.el).addEventListener('click', () => { stopSpeak(); store.del('ip.ai.' + id); conv = null; intro(); });
      scrollEnd();
    }
    const bubble = m => m.role === 'user' ? (m.content === END_MSG ? '<div class="msg sys">You ended the interview — feedback requested</div>' : `<div class="msg me">${esc(m.content)}</div>`) : `<div class="msg ai">${/^##|\n##/.test(m.content) ? fmtAI(m.content) : esc(m.content)}</div>`;
    const scrollEnd = () => requestAnimationFrame(() => { ctx.el.scrollTop = ctx.el.scrollHeight; });
    async function send(text) {
      const box = $('#chat', ctx.el); if (!box) return;
      if (text) { conv.msgs.push({ role: 'user', content: text }); box.insertAdjacentHTML('beforeend', bubble({ role: 'user', content: text })); }
      busy = true; $('#send', ctx.el).disabled = true;
      box.insertAdjacentHTML('beforeend', '<div class="msg ai typing" id="typing"><i></i><i></i><i></i></div>'); scrollEnd();
      try {
        const reply = await callClaude(aiSystem(p, bank, conv.cfg), conv.msgs);
        conv.msgs.push({ role: 'assistant', content: reply }); store.set('ip.ai.' + id, conv);
        const t = $('#typing', ctx.el); if (t) t.outerHTML = bubble({ role: 'assistant', content: reply });
        if (conv.cfg.speak) speak(reply);
        if (/^##\s*Overall/m.test(reply)) { const h = store.get('ip.mocks', []); const m = reply.match(/(\d+(?:\.\d)?)\s*(?:\/|out of)\s*10/); h.push({ pos: id, at: Date.now(), n: conv.cfg.len, avg: m ? +m[1] / 2 : 0, ai: 1 }); store.set('ip.mocks', h.slice(-200)); }
      } catch (e) {
        if (text) conv.msgs.pop();
        const t = $('#typing', ctx.el); if (t) t.outerHTML = `<div class="msg err">${esc(e.message === 'Failed to fetch' ? 'Couldn’t reach the AI service — check your connection.' : e.message)}</div>`;
        if (text) { $('#in', ctx.el).value = text; }
      }
      busy = false; const sb = $('#send', ctx.el); if (sb) sb.disabled = false; scrollEnd();
    }
    intro();
  });
}

/* ---------- Settings ---------- */
function vSettings(ctx) {
  const seg = (name, opts) => `<div class="seg" data-k="${name}">${opts.map(([v, l]) => `<button data-v="${v}" class="${S[name] === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  ctx.el.innerHTML = `${bar(ctx, 'Settings')}<div class="wrap">
    <div class="panel"><h3>Display</h3>
      <div class="field"><label>Theme</label>${seg('theme', [['auto', 'Auto'], ['light', 'Light'], ['dark', 'Dark']])}</div>
      <div class="field">
        <label class="toggle"><span><b>Show answers right away</b><span>Off = tap to reveal, so you think first</span></span><input type="checkbox" class="sw" id="rv" ${S.reveal ? 'checked' : ''}></label>
        <label class="toggle"><span><b>Read questions aloud by default</b><span>For mock interviews and voice practice</span></span><input type="checkbox" class="sw" id="sp" ${S.speak ? 'checked' : ''}></label>
      </div></div>
    <div class="panel"><h3>AI interviewer</h3><p>Uses Claude with your own Anthropic API key. The key is stored only on this device and sent only to Anthropic.</p>
      <div class="field"><label for="key">API key</label><input class="txt" id="key" type="password" autocomplete="off" placeholder="sk-ant-…" value="${esc(S.key || '')}"></div>
      <div class="field"><label for="model">Model</label><select class="txt" id="model">
        ${[['claude-sonnet-5-5', 'Sonnet 5.5 · balanced'], ['claude-opus-5-5', 'Opus 5.5 · most thorough'], ['claude-haiku-5-5', 'Haiku 5.5 · fastest']].map(([v, l]) => `<option value="${v}" ${S.model === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="actions" style="margin-bottom:0"><button class="btn pri" id="save">Save key</button><button class="btn ghost" id="test">Test it</button></div>
      <div class="muted" id="kmsg" style="margin-top:8px"></div></div>
    <div class="panel"><h3>Your progress</h3><p>${Object.keys(PROG).length} questions marked · ${store.get('ip.mocks', []).length} interviews completed. Saved only in this browser.</p>
      <button class="btn ghost wide" id="reset" style="color:var(--red)">Reset all progress</button></div>
    <p class="home-foot">Interview Edge by Arahasoft · Model answers are a starting point — make them your own with your real examples and numbers.</p></div>`;
  $$('.seg', ctx.el).forEach(sg => sg.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; S[sg.dataset.k] = b.dataset.v; saveS(); applyTheme(); $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); }));
  $('#rv', ctx.el).addEventListener('change', e => { S.reveal = e.target.checked; saveS(); });
  $('#sp', ctx.el).addEventListener('change', e => { S.speak = e.target.checked; saveS(); });
  $('#model', ctx.el).addEventListener('change', e => { S.model = e.target.value; saveS(); });
  $('#save', ctx.el).addEventListener('click', () => { S.key = $('#key', ctx.el).value.trim(); saveS(); $('#kmsg', ctx.el).textContent = S.key ? 'Saved on this device.' : 'Key removed.'; });
  $('#test', ctx.el).addEventListener('click', async () => {
    S.key = $('#key', ctx.el).value.trim(); saveS(); const m = $('#kmsg', ctx.el);
    if (!S.key) { m.textContent = 'Paste a key first.'; return; }
    m.textContent = 'Testing…';
    try { await callClaude('Reply with the single word OK.', [{ role: 'user', content: 'Test' }]); m.textContent = '✓ Works — the AI interviewer is ready.'; }
    catch (e) { m.textContent = '✗ ' + (e.message === 'Failed to fetch' ? 'Couldn’t reach Anthropic — check your connection.' : e.message); }
  });
  $('#reset', ctx.el).addEventListener('click', () => {
    if (!confirm('Clear all your marks, stars, drafts and interview history on this device?')) return;
    PROG = {}; saveP(); ['ip.mocks', 'ip.drafts', 'ip.last'].forEach(store.del);
    Object.keys(localStorage).filter(k => k.startsWith('ip.ai.')).forEach(k => store.del(k));
    toast('Progress cleared'); go('settings', { replace: true });
  });
}

/* ---------------- start ---------------- */
(function start() {
  const ctx = build('home'); wireCommon(ctx); stage.appendChild(ctx.el); stack.push(ctx);
  history.replaceState({ d: 1 }, '');
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
