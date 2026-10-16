// Interview Edge — paid AI interviewer backend (Cloudflare Worker + D1).
// Keeps the Anthropic API key on the server, sells minutes via Stripe and meters interview time.
//
// Endpoints (JSON):
//   POST /auth/start   { email }                      → emails a 6-digit sign-in code
//   POST /auth/verify  { email, code }                → { token, email, seconds }  (first sign-in gets FREE_SECONDS)
//   GET  /me                                          → { email, seconds }
//   POST /checkout     { pack }                       → { url }  Stripe Checkout page for a minutes pack
//   POST /stripe/webhook                              → credits minutes after payment (Stripe signature checked)
//   POST /chat         { sid, system, messages }      → { text, seconds }  meters time per interview session
//
// Metering: each /chat call charges the wall-clock time since the previous call in the same
// interview session, clamped to [MIN_TURN_SECONDS, MAX_TURN_SECONDS]. The first call charges MIN_TURN_SECONDS.
// Safety: per-user rate limit, request size limits, max output tokens, and a global daily spend cap.

const PACKS = {           // seconds credited per pack; Stripe price IDs come from env (PRICE_10, PRICE_30, PRICE_60)
  p10: { seconds: 600, env: 'PRICE_10' },
  p30: { seconds: 1800, env: 'PRICE_30' },
  p60: { seconds: 3600, env: 'PRICE_60' }
};

export default {
  async fetch(req, env) {
    const origin = req.headers.get('origin') || '';
    const cors = corsHeaders(env, origin);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const url = new URL(req.url);
    try {
      let res;
      if (url.pathname === '/stripe/webhook' && req.method === 'POST') return await stripeWebhook(req, env);
      if (url.pathname === '/auth/start' && req.method === 'POST') res = await authStart(req, env);
      else if (url.pathname === '/auth/verify' && req.method === 'POST') res = await authVerify(req, env);
      else if (url.pathname === '/me' && req.method === 'GET') res = await me(req, env);
      else if (url.pathname === '/checkout' && req.method === 'POST') res = await checkout(req, env);
      else if (url.pathname === '/chat' && req.method === 'POST') res = await chat(req, env);
      else res = json({ error: 'Not found' }, 404);
      for (const [k, v] of Object.entries(cors)) res.headers.set(k, v);
      return res;
    } catch (e) {
      const status = e.status || 500;
      const res = json({ error: status === 500 ? 'Server error' : e.message }, status);
      for (const [k, v] of Object.entries(cors)) res.headers.set(k, v);
      if (status === 500) console.error(e && e.stack || e);
      return res;
    }
  }
};

/* ---------------- helpers ---------------- */
function corsHeaders(env, origin) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const ok = allowed.includes(origin);
  return {
    'access-control-allow-origin': ok ? origin : (allowed[0] || ''),
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
    'access-control-max-age': '86400',
    'vary': 'origin'
  };
}
function json(obj, status = 200) { return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } }); }
function fail(status, message) { const e = new Error(message); e.status = status; throw e; }
async function body(req, maxBytes = 200000) {
  const len = +(req.headers.get('content-length') || 0);
  if (len > maxBytes) fail(413, 'Request too large');
  const text = await req.text();
  if (text.length > maxBytes) fail(413, 'Request too large');
  try { return JSON.parse(text || '{}'); } catch { fail(400, 'Invalid JSON'); }
}
const now = () => Math.floor(Date.now() / 1000);
const today = () => new Date().toISOString().slice(0, 10);
function hex(buf) { return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join(''); }
async function sha256(s) { return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))); }
function randomHex(n) { const a = new Uint8Array(n); crypto.getRandomValues(a); return hex(a); }
function normEmail(e) { e = String(e || '').trim().toLowerCase(); if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) || e.length > 200) fail(400, 'Enter a valid email address'); return e; }
async function userFromToken(req, env) {
  const h = req.headers.get('authorization') || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : '';
  if (!token) fail(401, 'Please sign in');
  const row = await env.DB.prepare('SELECT s.email, u.seconds FROM sessions s JOIN users u ON u.email = s.email WHERE s.token_hash = ? AND s.expires > ?')
    .bind(await sha256(token), now()).first();
  if (!row) fail(401, 'Your sign-in expired — please sign in again');
  return row;
}

/* ---------------- auth: email code ---------------- */
async function authStart(req, env) {
  const { email: raw } = await body(req, 2000);
  const email = normEmail(raw);
  const prev = await env.DB.prepare('SELECT sent_at FROM codes WHERE email = ?').bind(email).first();
  if (prev && now() - prev.sent_at < 60) fail(429, 'Please wait a minute before requesting another code');
  const code = String(100000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 900000));
  await env.DB.prepare('INSERT INTO codes (email, code_hash, expires, tries, sent_at) VALUES (?, ?, ?, 0, ?) ON CONFLICT(email) DO UPDATE SET code_hash = excluded.code_hash, expires = excluded.expires, tries = 0, sent_at = excluded.sent_at')
    .bind(email, await sha256(code + env.CODE_PEPPER), now() + 600, now()).run();
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: 'Bearer ' + env.RESEND_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM, to: [email], subject: 'Your Interview Edge sign-in code: ' + code,
      text: `Your Interview Edge sign-in code is ${code}.\n\nIt expires in 10 minutes. If you didn't request it, you can ignore this email.`
    })
  });
  if (!r.ok) { console.error('email send failed', r.status, await r.text()); fail(502, 'Could not send the email — try again shortly'); }
  return json({ ok: true });
}

async function authVerify(req, env) {
  const { email: raw, code } = await body(req, 2000);
  const email = normEmail(raw);
  const row = await env.DB.prepare('SELECT code_hash, expires, tries FROM codes WHERE email = ?').bind(email).first();
  if (!row || row.expires < now()) fail(400, 'That code expired — request a new one');
  if (row.tries >= 5) fail(429, 'Too many attempts — request a new code');
  if (row.code_hash !== await sha256(String(code || '').trim() + env.CODE_PEPPER)) {
    await env.DB.prepare('UPDATE codes SET tries = tries + 1 WHERE email = ?').bind(email).run();
    fail(400, 'That code is not right');
  }
  await env.DB.prepare('DELETE FROM codes WHERE email = ?').bind(email).run();
  // First sign-in: free minutes, limited by a global daily allowance to stop free-tier farming.
  const existing = await env.DB.prepare('SELECT seconds FROM users WHERE email = ?').bind(email).first();
  if (!existing) {
    const freeToday = await env.DB.prepare('SELECT free_seconds FROM daily WHERE day = ?').bind(today()).first();
    const free = (freeToday ? freeToday.free_seconds : 0) < +env.FREE_DAILY_CAP_SECONDS ? +env.FREE_SECONDS : 0;
    await env.DB.batch([
      env.DB.prepare('INSERT INTO users (email, seconds, created) VALUES (?, ?, ?)').bind(email, free, now()),
      env.DB.prepare('INSERT INTO daily (day, usd, free_seconds) VALUES (?, 0, ?) ON CONFLICT(day) DO UPDATE SET free_seconds = free_seconds + excluded.free_seconds').bind(today(), free)
    ]);
  }
  const token = randomHex(32);
  await env.DB.prepare('INSERT INTO sessions (token_hash, email, expires) VALUES (?, ?, ?)').bind(await sha256(token), email, now() + 90 * 86400).run();
  const u = await env.DB.prepare('SELECT seconds FROM users WHERE email = ?').bind(email).first();
  return json({ token, email, seconds: u.seconds });
}

async function me(req, env) { const u = await userFromToken(req, env); return json({ email: u.email, seconds: u.seconds }); }

/* ---------------- payments: Stripe Checkout ---------------- */
async function checkout(req, env) {
  const u = await userFromToken(req, env);
  const { pack } = await body(req, 1000);
  const p = PACKS[pack]; if (!p) fail(400, 'Unknown pack');
  const price = env[p.env]; if (!price) fail(500, 'Pack not configured');
  const form = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price]': price, 'line_items[0][quantity]': '1',
    success_url: env.APP_URL + '?paid=1', cancel_url: env.APP_URL + '?paid=0',
    customer_email: u.email, client_reference_id: u.email,
    'metadata[email]': u.email, 'metadata[pack]': pack, 'metadata[seconds]': String(p.seconds)
  });
  const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST', headers: { authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, 'content-type': 'application/x-www-form-urlencoded' }, body: form
  });
  const j = await r.json();
  if (!r.ok) { console.error('stripe', j); fail(502, 'Payment page unavailable — try again'); }
  return json({ url: j.url });
}

async function stripeWebhook(req, env) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') || '';
  const parts = Object.fromEntries(sig.split(',').map(kv => kv.split('=')));
  const t = parts.t, v1 = sig.split(',').filter(kv => kv.startsWith('v1=')).map(kv => kv.slice(3));
  if (!t || !v1.length || Math.abs(now() - +t) > 300) return new Response('bad signature', { status: 400 });
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const expected = hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(t + '.' + payload)));
  if (!v1.includes(expected)) return new Response('bad signature', { status: 400 });
  const ev = JSON.parse(payload);
  if (ev.type === 'checkout.session.completed' && ev.data.object.payment_status === 'paid') {
    const s = ev.data.object, email = (s.metadata && s.metadata.email) || s.client_reference_id;
    const secs = +((s.metadata && s.metadata.seconds) || 0);
    if (email && secs > 0) {
      // Idempotent: the payment id is the primary key, so retries never double-credit.
      const ins = await env.DB.prepare('INSERT OR IGNORE INTO payments (id, email, seconds, amount_cents, created) VALUES (?, ?, ?, ?, ?)')
        .bind(s.id, email, secs, s.amount_total || 0, now()).run();
      if (ins.meta.changes) {
        await env.DB.prepare('INSERT INTO users (email, seconds, created) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET seconds = seconds + excluded.seconds')
          .bind(email, secs, now()).run();
      }
    }
  }
  return new Response('ok');
}

/* ---------------- metered chat ---------------- */
async function chat(req, env) {
  const u = await userFromToken(req, env);
  const { sid, system, messages } = await body(req, 120000);
  if (!/^[a-z0-9]{8,40}$/i.test(String(sid || ''))) fail(400, 'Bad session');
  if (typeof system !== 'string' || system.length > 24000) fail(400, 'Setup too long');
  if (!Array.isArray(messages) || !messages.length || messages.length > 80) fail(400, 'Bad conversation');
  const msgs = messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 6000) }));
  if (msgs[0].role !== 'user' || msgs[msgs.length - 1].role !== 'user') fail(400, 'Bad conversation');

  // Global daily spend cap protects against runaway cost.
  const day = await env.DB.prepare('SELECT usd FROM daily WHERE day = ?').bind(today()).first();
  if (day && day.usd >= +env.DAILY_CAP_USD) fail(503, 'The AI interviewer is busy right now — please try again later');

  // Time metering for this interview session.
  const t = now();
  const s = await env.DB.prepare('SELECT last_at FROM usage WHERE sid = ? AND email = ?').bind(sid, u.email).first();
  if (s && t - s.last_at < 2) fail(429, 'Slow down a little');
  const minT = +env.MIN_TURN_SECONDS || 15, maxT = +env.MAX_TURN_SECONDS || 120;
  const charge = s ? Math.min(maxT, Math.max(minT, t - s.last_at)) : minT;
  if (u.seconds <= 0) fail(402, 'You are out of interview minutes');

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: env.MODEL, max_tokens: +env.MAX_OUTPUT_TOKENS || 1500, system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }], messages: msgs })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { console.error('anthropic', r.status, j); fail(r.status === 429 ? 503 : 502, 'The AI interviewer is busy — try again in a moment'); }
  const text = (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n').trim();

  // Cost accounting (USD per million tokens from env; cached reads are cheaper).
  const us = j.usage || {};
  const usd = ((us.input_tokens || 0) * +env.PRICE_IN_PER_MTOK + (us.cache_creation_input_tokens || 0) * +env.PRICE_IN_PER_MTOK * 1.25 +
    (us.cache_read_input_tokens || 0) * +env.PRICE_IN_PER_MTOK * 0.1 + (us.output_tokens || 0) * +env.PRICE_OUT_PER_MTOK) / 1e6;

  const results = await env.DB.batch([
    env.DB.prepare('UPDATE users SET seconds = MAX(0, seconds - ?) WHERE email = ?').bind(charge, u.email),
    env.DB.prepare('INSERT INTO usage (sid, email, started, last_at, seconds, usd) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(sid) DO UPDATE SET last_at = excluded.last_at, seconds = seconds + excluded.seconds, usd = usd + excluded.usd')
      .bind(sid, u.email, t, t, charge, usd),
    env.DB.prepare('INSERT INTO daily (day, usd, free_seconds) VALUES (?, ?, 0) ON CONFLICT(day) DO UPDATE SET usd = usd + excluded.usd').bind(today(), usd),
    env.DB.prepare('SELECT seconds FROM users WHERE email = ?').bind(u.email)
  ]);
  const left = results[3].results[0].seconds;
  return json({ text, seconds: left });
}
