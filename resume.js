/* Interview Edge · Resume Match engine.
   Reads a resume (PDF, Word .docx or text) in the browser, finds the latest job title and years of experience,
   matches it to the question banks and picks a practice set. Nothing leaves the device.
   Pure functions below are also used by tools/build-resume-index.js (Node). */
(function (root) {
  'use strict';

  /* ---------- words ---------- */
  const STOP = new Set(('a an the and or of to in on at by for with from as is are was were be been being it its this that these those ' +
    'i me my we our you your he she they them their his her who whom which what when where why how than then there here ' +
    'not no nor but if so do does did done can could would should will shall may might must have has had having ' +
    'also very more most less least much many any all each every both either neither some such own same other another ' +
    'into onto over under about above below up down out off again further once only just too via per etc vs eg ie ' +
    'one two three four five first second third new key good great strong best well make made making get got use used using ' +
    'work worked working works team teams company companies role roles responsible responsibilities responsibility including include includes ' +
    'experience experienced years year months month day days time times tell example examples question questions answer answers ask asks ' +
    'tip tips why way ways thing things like across within based through while during after before around able ' +
    'ensure ensured ensuring provide provided providing support supported supporting help helped helping ' +
    'professional summary objective skills skill present current currently today now jan feb mar apr may jun jul aug sep sept oct nov dec ' +
    'january february march april june july august september october november december ' +
    'inc llc ltd corp corporation co pvt limited usa nj ny ca tx fl ' +
    'interviewer interviewers candidate candidates would say said says let lets want wants need needs').split(/\s+/));
  // Two-letter acronyms worth keeping (only when written in capitals).
  const TWO_DROP = new Set(['US', 'OR', 'IN', 'TO', 'AM', 'AN', 'AS', 'AT', 'BY', 'IF', 'IS', 'IT', 'OF', 'ON', 'SO', 'UP', 'WE', 'NO', 'DO', 'GO', 'MY', 'ME', 'BE', 'HE']);
  const PHRASES = [
    [/vice[\s-]+president/gi, 'VP'], [/\b[se]vp\b/gi, 'VP'], [/\bavp\b/gi, 'associate VP'],
    [/chief information security officer/gi, 'CISO'], [/chief information officer/gi, 'CIO'], [/chief technology officer/gi, 'CTO'],
    [/chief financial officer/gi, 'CFO'], [/chief executive officer/gi, 'CEO'], [/chief operating officer/gi, 'COO'],
    [/chief human resources? officer/gi, 'CHRO'], [/chief data officer/gi, 'CDO'],
    [/e[-\s]?business suite/gi, 'EBS'], [/fusion cloud/gi, 'fusion'], [/oracle cloud/gi, 'oracle fusion'],
    [/month[-\s]end/gi, 'month-end'], [/year[-\s]end/gi, 'year-end'], [/s\s?&\s?op\b/gi, 'S&OP'], [/p\s?&\s?l\b/gi, 'P&L'], [/m\s?&\s?a\b/gi, 'M&A'],
    [/fp\s?&\s?a\b/gi, 'FP&A'], [/c\+\+/gi, 'cplusplus'], [/c#/gi, 'csharp'], [/\.net\b/gi, 'dotnet'], [/node\.?js/gi, 'nodejs'], [/react\.?js/gi, 'react']
  ];
  const SYN = { sr: 'senior', snr: 'senior', jr: 'junior', mgr: 'manager', mngr: 'manager', engr: 'engineer', eng: 'engineer', dev: 'developer',
    admin: 'administrator', sysadmin: 'administrator', acct: 'accountant', asst: 'assistant', assoc: 'associate', dir: 'director',
    programmer: 'developer', financials: 'finance', financial: 'finance', procurement: 'procurement', analytics: 'analytics' };
  const stem = w => w.length > 4 && /ies$/.test(w) ? w.slice(0, -3) + 'y' : (w.length > 4 && /[^s]s$/.test(w) && !/(ss|us|is|os)$/.test(w) ? w.slice(0, -1) : w);

  // Text → array of sentences, each an array of normalized tokens.
  function tokenize(text) {
    let t = String(text || '');
    PHRASES.forEach(([re, to]) => { t = t.replace(re, to); });
    const out = [];
    t.split(/[.;:!?]+(?:\s|$)|[\n,•●▪·|()\[\]{}"“”–—]+|\s-\s/).forEach(sent => {
      const toks = [];
      (sent.match(/[A-Za-z0-9][A-Za-z0-9&+#/'’-]*/g) || []).forEach(raw => {
        raw.split(/[\/’']+/).forEach(r0 => {
          let r = r0.replace(/^-+|-+$/g, ''); if (!r) return;
          if (/^\d+$/.test(r) && !(r.length === 3 && /^(606|842|401|404|409|500)$/.test(r))) { toks.push(null); return; }
          if (r.length === 2) { if (r === r.toUpperCase() && /[A-Z]/.test(r) && !TWO_DROP.has(r)) toks.push(r.toLowerCase()); else toks.push(null); return; }
          if (r.length < 2) { toks.push(null); return; }
          let w = r.toLowerCase();
          w = SYN[w] || w;
          if (STOP.has(w)) { toks.push(null); return; }
          toks.push(stem(w));
        });
      });
      if (toks.some(Boolean)) out.push(toks);
    });
    return out;
  }
  // Features: unigrams plus adjacent-word bigrams. Returns Map feature → count.
  function features(text, into, weight) {
    const m = into || new Map(), w = weight || 1;
    tokenize(text).forEach(toks => {
      for (let i = 0; i < toks.length; i++) {
        const a = toks[i]; if (!a) continue;
        m.set(a, (m.get(a) || 0) + w);
        const b = toks[i + 1]; if (b) { const k = a + ' ' + b; m.set(k, (m.get(k) || 0) + w); }
      }
    });
    return m;
  }

  /* ---------- seniority ---------- */
  const ROLE_NOUN = /\b(analyst|engineer|developer|programmer|consultant|manager|director|architect|lead|specialist|accountant|controller|administrator|admin|nurse|scientist|officer|president|vp|head|coordinator|planner|buyer|auditor|counsel|attorney|lawyer|paralegal|representative|executive|supervisor|technician|designer|owner|master|recruiter|underwriter|adjuster|examiner|banker|partner|principal|tester|sdet|dba|cfo|cio|cto|ceo|coo|ciso|chro|cdo|treasurer|clerk|agent|advisor|adviser|strategist|researcher|chemist|pharmacist|therapist|physician|superintendent|foreman|estimator|associate|generalist|bookkeeper|steward|associate|investigator|instructor|trainer|editor|writer)s?\b/i;
  // Titles where "manager" is an individual-contributor job, not people leadership.
  const IC_MANAGER = /\b(product|account|project|program|programme|relationship|category|customer success|case|content|marketing|community|social media|office|territory|key account|portfolio|brand)\s+manager\b/i;
  function titleRank(title) {
    const t = ' ' + String(title || '').toLowerCase().replace(/[^a-z0-9&]+/g, ' ') + ' ';
    if (/ (chief|cfo|cio|cto|ceo|coo|ciso|chro|cdo|cmo|president) /.test(t) && !/ vice president /.test(t)) return 9;
    if (/ (vp|svp|evp|vice president) /.test(t)) return 8;
    if (/ (senior|sr) director /.test(t)) return 7;
    if (/ (director|head) /.test(t) && !/ associate director /.test(t)) return 6;
    if (/ (associate director|senior manager|sr manager|controller|plant manager|general manager) /.test(t)) return 5;
    if (/ manager | mgr /.test(t)) return IC_MANAGER.test(title) ? (/ (senior|sr|lead|principal) /.test(t) ? 4 : 3) : 4;
    if (/ (lead|principal|staff engineer|architect|staff software) /.test(t)) return 4;
    if (/ (senior|sr|supervisor|iii|iv) /.test(t)) return 3;
    if (/ (junior|jr|intern|trainee|assistant|entry|graduate|apprentice|clerk) /.test(t) || / i /.test(t)) return 1;
    return 2;
  }
  const yrsRank = y => y < 3 ? 2 : y < 5 ? 3 : y < 10 ? 4 : y < 15 ? 5 : 6;
  // A position's level label ("Analyst → Manager", "5–10 yrs", "Director") → [lowest, highest] rank.
  function levelRange(level, title) {
    const s = String(level || '');
    const m = s.match(/(\d+)\s*[–-]\s*(\d+)\s*yrs/); if (m) return [yrsRank(+m[1]), yrsRank(Math.max(+m[1], +m[2] - 1))];
    const p = s.match(/(\d+)\+\s*yrs/); if (p) return [yrsRank(+p[1]), 6];
    if (/all levels|any level/i.test(s)) return [1, 6];
    const R = [];
    const words = { entry: 1, specialist: 2, analyst: 2, engineer: 2, mid: 2, supervisor: 3, senior: 3, lead: 4, principal: 4, manager: 4, mgr: 4,
      controller: 5, plant: 5, director: 6, vp: 8, 'c-suite': 9, executive: 9, cdo: 9 };
    s.toLowerCase().replace(/assoc\.?\s*director/g, ' assocdir ').replace(/sr\.?\s*director/g, ' srdir ').split(/[^a-z-]+/).forEach(w => {
      if (w === 'assocdir') R.push(5); else if (w === 'srdir') R.push(7);
      else if (w === 'staff') R.push(/accountant|audit|tax/i.test(title) ? 1 : 4);
      else if (words[w]) R.push(words[w]);
    });
    if (!R.length) { const r = titleRank(title); return [r, r]; }
    return [Math.min(...R), Math.max(...R)];
  }

  /* ---------- reading the resume ---------- */
  const MONTH = '(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)';
  const YEAR = '(?:19[89]\\d|20[0-4]\\d)';
  const DATE = `(?:${MONTH}\\.?\\s*,?\\s*${YEAR}|\\d{1,2}\\s*/\\s*${YEAR}|${YEAR})`;
  const RANGE_RE = new RegExp(`${DATE}\\s*(?:[-–—~]|to|until|till)\\s*(?:${DATE}|present|current|now|date|today|ongoing)`, 'i');
  const SINGLE_DATE_RE = new RegExp(`\\b${DATE}\\b|\\b(?:present|current)\\b`, 'i');
  const EXP_HEAD = /^\s*(?:professional\s+|work\s+|relevant\s+|career\s+|employment\s+)?(?:experience|employment(?:\s+history)?|work\s+history|career\s+history|professional\s+history|employment\s+record)\s*:?\s*$/i;
  const OTHER_HEAD = /^\s*(education|skills|technical skills|core competencies|certifications?|projects|summary|profile|professional summary|awards|publications|languages|interests|references|training|volunteer(?:ing)?)\s*:?\s*$/i;
  const ORG_WORD = /\b(inc|llc|ltd|corp|corporation|company|technologies|technology|solutions|services|systems|group|bank|university|college|hospital|health|pharma|pharmaceuticals?|consulting|partners|labs|software|global|international|limited|plc|gmbh|associates|holdings|industries|enterprises|agency|institute|school|department)\b\.?/i;
  const LOCATION = /\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)?,\s*(?:[A-Z]{2}|[A-Z][a-z]+)\b|\bremote\b/;

  function cleanLines(text) {
    return String(text || '').replace(/\r/g, '').split('\n').map(l => l.replace(/[\t ]+/g, '  ').replace(/\s{3,}/g, '  ').trim()).filter(l => l && !/^[-–—_=*•●▪·\s]+$/.test(l));
  }
  function titleScore(seg) {
    const s = seg.trim(); if (!s || s.length > 90) return -9;
    const words = s.split(/\s+/);
    let sc = 0;
    if (ROLE_NOUN.test(s)) sc += 4;
    if (/\b(senior|sr\.?|junior|lead|principal|staff|chief|head|vp|director|manager)\b/i.test(s)) sc += 1;
    if (words.length <= 8) sc += 1; else if (words.length > 12) sc -= 3;
    if (ORG_WORD.test(s)) sc -= 3;
    if (LOCATION.test(s)) sc -= 2;
    if (/\d/.test(s)) sc -= 1;
    if (/[.!?]$/.test(s) && words.length > 6) sc -= 2;
    if (/^[a-z]/.test(s)) sc -= 1;
    const sig = words.filter(w => !/^(of|and|&|the|for|in|to|a|an|-|–|\/)$/i.test(w));
    const caps = sig.filter(w => /^[A-Z0-9(]/.test(w)).length / (sig.length || 1);
    if (caps >= 0.6) sc += 1; else if (caps < 0.5 && sig.length > 1) sc -= 2;
    if (/\b(a|the|of|across|with|for)\b/.test(s) && /\b(team|led|lead|managed|built|designed|owned)\b/i.test(s) && words.length > 4) sc -= 2;
    if (/@|https?:|www\.|\(\d{3}\)|\d{3}[-.\s]\d{3}[-.\s]\d{4}/.test(s)) sc -= 6;
    return sc;
  }
  const stripDates = s => s.replace(new RegExp(RANGE_RE.source, 'ig'), ' ').replace(new RegExp(SINGLE_DATE_RE.source, 'ig'), ' ');
  const segments = line => stripDates(line).split(/\s+[|–—]\s+|\s+-\s+|\s{2,}|\t|,\s+|\s+@\s+|\s+at\s+(?=[A-Z])|\s*\|\s*/).map(x => x.replace(/^[\s,;:–—-]+|[\s,;:–—-]+$/g, '')).filter(Boolean);

  // Find the latest job: first dated line in the experience section, and the best title-like piece next to it.
  function parse(text, nowYear) {
    const lines = cleanLines(text);
    nowYear = nowYear || new Date().getFullYear();
    let start = lines.findIndex(l => EXP_HEAD.test(l) || /^(professional\s+)?experience\b/i.test(l) && l.length < 40);
    const hasHead = start >= 0;
    if (!hasHead) start = 0; else start++;
    let end = lines.length;
    if (hasHead) for (let i = start; i < lines.length; i++) if (OTHER_HEAD.test(lines[i]) && i > start + 2) { end = i; break; }
    const sec = lines.slice(start, end);
    // Dated lines inside the section.
    const dated = []; sec.forEach((l, i) => { if (RANGE_RE.test(l)) dated.push(i); });
    let title = '', titleIdx = -1, best = 2;
    const first = dated.length ? dated[0] : -1;
    if (first >= 0) {
      for (let d = -2; d <= 2; d++) {
        const i = first + d; if (i < 0 || i >= sec.length) continue;
        if (d !== 0 && RANGE_RE.test(sec[i]) ) continue;
        segments(sec[i]).forEach(seg => { const sc = titleScore(seg) - Math.abs(d) * 0.5 + (d === 1 || d === 0 ? 0.3 : 0); if (sc > best) { best = sc; title = seg; titleIdx = i; } });
      }
    }
    // Fallback: a headline under the name at the top of the resume.
    if (!title) {
      lines.slice(0, 8).forEach((l, i) => { if (i === 0 && lines.length > 3) return; segments(l).forEach(seg => { const sc = titleScore(seg); if (sc > best) { best = sc; title = seg; titleIdx = -1; } }); });
    }
    title = title.replace(/\s+/g, ' ').replace(/^(title|position|role)\s*:\s*/i, '').trim();
    // The latest job block: from the first dated line until the next dated line that starts another job.
    let block = [];
    if (first >= 0) {
      const from = Math.max(0, Math.min(first, titleIdx >= 0 ? titleIdx : first));
      const lead = titleIdx >= 0 && titleIdx < first ? first - titleIdx : 0;   // title line sits above the date line
      let to = sec.length;
      for (let k = 1; k < dated.length; k++) if (dated[k] - lead > first) { to = dated[k] - lead; break; }
      block = sec.slice(from, Math.max(from + 1, to));
      if (block.length > 40) block = block.slice(0, 40);
    }
    // Years of experience: earliest year in the experience section.
    let earliest = nowYear;
    (sec.join('\n').match(new RegExp(YEAR, 'g')) || []).forEach(y => { y = +y; if (y >= 1975 && y < earliest) earliest = y; });
    const years = dated.length ? Math.max(0, nowYear - earliest) : 0;
    // Company of the latest job: an organisation-looking segment near the title.
    let company = '';
    if (first >= 0) for (let d = -2; d <= 2 && !company; d++) { const i = first + d; if (i < 0 || i >= sec.length) continue; if (i !== first && i !== titleIdx && !RANGE_RE.test(sec[i]) && sec[i].length > 80) continue; segments(sec[i]).forEach(seg => { if (!company && seg !== title && ORG_WORD.test(seg) && !ROLE_NOUN.test(seg) && seg.split(/\s+/).length <= 7 && !/[a-z]{4,}\.$/.test(seg) && /^[A-Z0-9]/.test(seg)) company = seg; }); }
    if (!company && titleIdx >= 0) { const m = sec[titleIdx].match(/\bat\s+([A-Z][\w&.'-]*(?:\s+[A-Z][\w&.'-]*){0,4})/); if (m) company = m[1]; }
    return { title, company, years, block, lines, found: !!title };
  }

  /* ---------- matching to question banks ---------- */
  const SENIOR_WORDS = new Set(['senior', 'junior', 'lead', 'principal', 'staff', 'associate', 'assistant', 'head', 'chief', 'level', 'global', 'regional', 'contract', 'contractor', 'interim', 'acting', 'ii', 'iii', 'iv', 'vp', 'director', 'manager', 'supervisor']);
  const TITLE_EQ = { developer: 'engineer', programmer: 'engineer', administrator: 'administrator', financials: 'finance', accounting: 'accountant' };
  function titleCore(title, keepLevel) {
    const out = new Set();
    tokenize(title).forEach(t => t.forEach(w => { if (!w) return; w = TITLE_EQ[w] || w; if (keepLevel || !SENIOR_WORDS.has(w)) out.add(w); }));
    return out;
  }
  function overlap(A, B) {   // how much of position title B is covered by resume title A, tempered by A's extra words
    if (!A.size || !B.size) return 0;
    let n = 0; B.forEach(w => { if (A.has(w)) n++; });
    if (!n) return 0;
    return (n / B.size) * Math.sqrt(n / A.size);
  }
  // Resume → weighted feature map (latest job and title count more).
  function resumeFeatures(r) {
    const m = new Map();
    features(r.lines.join('\n'), m, 1);
    if (r.block && r.block.length) features(r.block.join('\n'), m, 1.5);
    if (r.title) features(r.title, m, 3);
    m.forEach((v, k) => m.set(k, Math.log1p(v)));
    return m;
  }
  // Product names: a role built around one (Oracle, SAP, Salesforce…) only fits a resume that mentions it.
  const BRANDS = ['oracle', 'sap', 'salesforce', 'servicenow', 'workday', 'dynamics', 'netsuite', 'epic', 'abap', 'kubernetes', 'java'];
  const brandsOf = p => BRANDS.filter(b => (p.title + ' ' + p.famName).toLowerCase().split(/[^a-z]+/).includes(b));
  // positions: [{ id, full, title, level, famId, famName, field, track, module }]
  // index: { banks: { id: [[feature, weight], ...] } }
  function matchBanks(r, positions, index, titleOverride) {
    const rf = resumeFeatures(r);
    const title = titleOverride != null ? titleOverride : r.title;
    const A = titleCore(title), Afull = titleCore(title, true);
    const cr = Math.max(titleRank(title), r.years >= 15 && titleRank(title) < 4 ? 3 : 0);
    let maxSkill = 0;
    const rows = positions.map(p => {
      let f = index.banks[p.id] || [];
      if (typeof f === 'string') f = index.banks[p.id] = f.split('|').map(s => { const j = s.lastIndexOf(':'); return [s.slice(0, j), +s.slice(j + 1) / 99]; });
      let dot = 0, norm = 0; const hits = [];
      f.forEach(([k, w]) => { norm += w * w; const v = rf.get(k); if (v) { dot += w * v; hits.push([k, w * v]); } });
      const skill = norm ? dot / Math.sqrt(norm) : 0;
      if (skill > maxSkill) maxSkill = skill;
      const alts = p.title.split(/\s*\/\s*|\s+or\s+/).map(a => titleCore(a)).concat([titleCore(p.title)]);
      let ts = Math.max(...alts.map(B => overlap(A, B)));
      const famTok = titleCore(p.famName); let famHit = 0; famTok.forEach(w => { if (Afull.has(w)) famHit = 1; });
      if (ts > 0 && famHit) ts = Math.min(1, ts + 0.15);
      const [lo, hi] = levelRange(p.level, p.title);
      let ranks = [lo, hi];
      if (/yrs/.test(p.level) && r.years) { const yr = yrsRank(r.years); ranks = [lo, hi]; p._yfit = yr >= lo && yr <= hi ? 1 : Math.max(0, 1 - 0.4 * Math.min(Math.abs(yr - lo), Math.abs(yr - hi))); } else p._yfit = null;
      const dist = cr < lo ? lo - cr : cr > hi ? cr - hi : 0;
      const fit = Math.max(0, 1 - 0.35 * dist);
      const br = brandsOf(p), brandOk = !br.length || br.some(b => rf.has(b));
      return { p, skill, title: ts, lo: ranks[0], hi: ranks[1], fit, yfit: p._yfit, hits, brandOk };
    });
    rows.forEach(x => {
      x.skillN = maxSkill ? x.skill / maxSkill : 0;
      const lf = x.yfit != null ? (x.fit + x.yfit) / 2 : x.fit;
      x.same = (A.size ? 0.5 * x.title + 0.35 * x.skillN : 0.85 * x.skillN) + 0.15 * lf;
      if (x.p.module) x.same *= 0.7;
      if (!x.brandOk) { x.same *= 0.5; x.skillN *= 0.5; }
    });
    const roles = rows.filter(x => !x.p.module).sort((a, b) => b.same - a.same);
    const same = roles[0] || null;
    // Next step up: higher level, same kind of work.
    let next = null;
    if (same && cr < 9) {
      const want = Math.max(cr, same.lo) + 1;
      const cands = roles.filter(x => x !== same && x.p.id !== same.p.id && (x.lo >= want || (x.hi >= want && x.lo > cr)) && x.lo <= want + 2 && !(x.p.track && same.p.track && x.p.track !== same.p.track) || false);
      cands.forEach(x => {
        const sameFam = x.p.famId === same.p.famId ? 0.35 : (x.p.field === same.p.field ? 0.1 : 0);
        const step = x.lo <= want ? 1 : x.lo === want + 1 ? 0.75 : 0.5;
        x.next = 0.45 * x.skillN + 0.25 * x.title + sameFam + 0.2 * step;
      });
      cands.sort((a, b) => b.next - a.next);
      if (cands[0] && cands[0].next > 0.3) next = cands[0];
    }
    const others = roles.filter(x => x !== same && x !== next && x.same >= (same ? same.same * 0.7 : 0) && (x.title > 0 || x.skillN > 0.5)).slice(0, 3);
    // Related banks for the practice set: module deep dives and other families, not the same ladder.
    const related = rows.filter(x => x.brandOk && x.skillN >= (x.p.module ? 0.3 : 0.45) && (!same || x.p.famId !== same.p.famId)).sort((a, b) => b.skill * (b.p.module ? 1.25 : 1) - a.skill * (a.p.module ? 1.25 : 1));
    // Skills found in the resume, by how much they weigh for the matched role.
    const skills = [];
    if (same) {
      const seen = new Set();
      same.hits.concat(next ? next.hits : []).sort((a, b) => b[1] - a[1]).forEach(([k]) => {
        if (k.includes(' ') ? false : [...seen].some(s => s.includes(k))) return;
        if (skills.length < 12 && !seen.has(k)) { seen.add(k); skills.push(k); }
      });
    }
    return { rank: cr, same, next, others, related, skills, rows, rf };
  }

  // Rank questions by how many resume terms they touch (rare terms count more).
  function rankQuestions(items, rf) {
    const fs = items.map(x => features(x[0] + '. ' + x[1]));
    const df = new Map(); fs.forEach(m => m.forEach((v, k) => df.set(k, (df.get(k) || 0) + 1)));
    const N = items.length || 1;
    return items.map((x, i) => {
      let s = 0; const hit = [];
      fs[i].forEach((v, k) => { const r = rf.get(k); if (!r) return; const idf = Math.log(1 + N / df.get(k)); s += idf * Math.min(r, 2) * (k.includes(' ') ? 1.6 : 1); hit.push(k); });
      return { i, s, hit };
    }).sort((a, b) => b.s - a.s);
  }

  // The practice set: target role's top questions, its questions closest to the resume,
  // a few from related deep dives, and the Interview Essentials openers. Each item keeps its source bank in [5]
  // so progress is shared with the regular role screens.
  function buildSet(o) {
    const out = [], seen = new Set();
    const add = (x, src, section, max) => { if (seen.has(x[1]) || max <= 0) return false; seen.add(x[1]); const y = x.slice(); while (y.length < 6) y.push(null); y[0] = section; y[5] = src; y[7] = x[0]; out.push(y); return true; };
    const T = o.targetBank, tops = T.filter(x => x[6] && x[6].t);
    tops.forEach(x => add(x, o.target, 'Top questions for this role', 1));
    let n = 0; rankQuestions(T, o.rf).forEach(q => { if (n < (o.maxMatch || 15) && q.s > 0 && add(T[q.i], o.target, 'Matches your resume', 1)) n++; });
    // Fill up with in-depth questions when the resume gave few matches.
    T.filter(x => x[3] === 'D').forEach(x => { if (n < 8 && add(x, o.target, 'Matches your resume', 1)) n++; });
    (o.related || []).slice(0, 2).forEach(r => {
      let k = 0; const label = 'Related: ' + r.label;
      rankQuestions(r.bank, o.rf).forEach(q => { if (k < 6 && q.s > 0 && add(r.bank[q.i], r.id, label, 1)) k++; });
    });
    let e = 0; (o.common || []).forEach(x => { if (e < 6 && x[6] && x[6].t && /introduction|behavioral|career|strengths/i.test(x[0]) && add(x, 'common', 'Interview Essentials', 1)) e++; });
    return out;
  }

  /* ---------- file reading (browser only) ---------- */
  async function inflateRaw(bytes) {
    const ds = new DecompressionStream('deflate-raw');
    const stream = new Blob([bytes]).stream().pipeThrough(ds);
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }
  // Minimal .docx reader: find word/document.xml in the zip and turn paragraphs into lines.
  async function docxText(buf) {
    const b = new Uint8Array(buf), dv = new DataView(buf);
    let eocd = -1; for (let i = b.length - 22; i >= Math.max(0, b.length - 66000); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    if (eocd < 0) throw new Error('not a docx');
    const n = dv.getUint16(eocd + 10, true); let p = dv.getUint32(eocd + 16, true);
    const dec = new TextDecoder();
    for (let k = 0; k < n; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) break;
      const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true), nlen = dv.getUint16(p + 28, true), xlen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
      const name = dec.decode(b.subarray(p + 46, p + 46 + nlen));
      if (name === 'word/document.xml') {
        const lnl = dv.getUint16(off + 26, true), lxl = dv.getUint16(off + 28, true), data = b.subarray(off + 30 + lnl + lxl, off + 30 + lnl + lxl + csize);
        const xml = dec.decode(method === 0 ? data : await inflateRaw(data));
        return xml.replace(/<w:tab\/>/g, '\t').replace(/<w:br[^>]*\/>/g, '\n').replace(/<\/w:p>/g, '\n').replace(/<w:tc>/g, '  ').replace(/<[^>]+>/g, '')
          .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
      }
      p += 46 + nlen + xlen + clen;
    }
    throw new Error('no document');
  }
  let pdfLib = null;
  function loadPdfJs(base) {
    if (pdfLib) return pdfLib;
    return pdfLib = new Promise((res, rej) => {
      const s = document.createElement('script'); s.src = base + 'pdf.min.js';
      s.onload = () => { const L = window.pdfjsLib; if (!L) return rej(new Error('pdf')); L.GlobalWorkerOptions.workerSrc = base + 'pdf.worker.min.js'; res(L); };
      s.onerror = () => { pdfLib = null; rej(new Error('pdf load')); };
      document.head.appendChild(s);
    });
  }
  // PDF → lines, rebuilt from text positions so titles and dates stay on their own lines.
  async function pdfText(buf, base) {
    const L = await loadPdfJs(base);
    const doc = await L.getDocument({ data: new Uint8Array(buf), isEvalSupported: false }).promise;
    const out = [];
    for (let pg = 1; pg <= Math.min(doc.numPages, 8); pg++) {
      const page = await doc.getPage(pg); const tc = await page.getTextContent();
      const rows = [];
      tc.items.forEach(it => { if (!it.str) return; const y = it.transform[5], x = it.transform[4];
        let row = rows.find(r => Math.abs(r.y - y) < 2.5); if (!row) rows.push(row = { y, items: [] }); row.items.push({ x, s: it.str, w: it.width || 0 }); });
      rows.sort((a, b) => b.y - a.y).forEach(r => {
        r.items.sort((a, b) => a.x - b.x);
        let line = '', lastEnd = null;
        r.items.forEach(it => { if (lastEnd != null) { const gap = it.x - lastEnd; line += gap > 18 ? '   ' : (gap > 1.5 && !/\s$/.test(line) && !/^\s/.test(it.s) ? ' ' : ''); } line += it.s; lastEnd = it.x + it.w; });
        out.push(line);
      });
      out.push('');
    }
    return out.join('\n');
  }
  async function readFile(file, base) {
    const name = (file.name || '').toLowerCase();
    if (file.size > 8 * 1024 * 1024) throw new Error('too big');
    const buf = await file.arrayBuffer();
    if (name.endsWith('.pdf') || file.type === 'application/pdf') return pdfText(buf, base);
    if (name.endsWith('.docx') || /officedocument\.wordprocessingml/.test(file.type)) return docxText(buf);
    if (name.endsWith('.doc')) throw new Error('doc');
    return new TextDecoder().decode(buf);
  }

  const R = { buildSet, tokenize, features, titleRank, levelRange, parse, matchBanks, rankQuestions, readFile, docxText, titleCore, resumeFeatures };
  if (typeof module !== 'undefined' && module.exports) module.exports = R; else root.RESUME = R;
})(typeof window !== 'undefined' ? window : this);
