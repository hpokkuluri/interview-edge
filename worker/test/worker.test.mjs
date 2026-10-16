// End-to-end test of the Worker with a D1-like SQLite adapter and faked external APIs.
import Database from 'better-sqlite3';
import fs from 'fs';
import crypto from 'crypto';
const W = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const worker = (await import(W + '/src/index.js')).default;

// --- D1 adapter ---
const sql = new Database(':memory:');
sql.exec(fs.readFileSync(W + '/schema.sql', 'utf8'));
function stmt(q) {
  let args = [];
  const s = {
    bind(...a) { args = a; return s; },
    async first() { return sql.prepare(q).get(...args) || null; },
    async run() { const r = sql.prepare(q).run(...args); return { meta: { changes: r.changes } }; },
    async all() { return { results: sql.prepare(q).all(...args) }; },
    _exec() { const p = sql.prepare(q); return p.reader ? { results: p.all(...args) } : { meta: { changes: p.run(...args).changes } }; }
  };
  return s;
}
const DB = { prepare: stmt, async batch(list) { return sql.transaction(() => list.map(s => s._exec()))(); } };

const env = { DB, ALLOWED_ORIGINS: 'https://app.test', APP_URL: 'https://app.test/', MODEL: 'claude-sonnet-5-5', MAX_OUTPUT_TOKENS: '1500',
  PRICE_IN_PER_MTOK: '3', PRICE_OUT_PER_MTOK: '15', FREE_SECONDS: '600', FREE_DAILY_CAP_SECONDS: '36000', DAILY_CAP_USD: '20',
  MIN_TURN_SECONDS: '15', MAX_TURN_SECONDS: '120', MAIL_FROM: 'x@y.z', PRICE_10: 'price_10', PRICE_30: 'price_30', PRICE_60: 'price_60',
  ANTHROPIC_API_KEY: 'sk', STRIPE_SECRET_KEY: 'sk_test', STRIPE_WEBHOOK_SECRET: 'whsec_test', RESEND_API_KEY: 're', CODE_PEPPER: 'pep' };

// --- fake external APIs ---
let lastCode = null, anthropicCalls = 0, lastAnthropicBody = null;
globalThis.fetch = async (url, opts) => {
  if (url.includes('resend.com')) { lastCode = JSON.parse(opts.body).text.match(/\d{6}/)[0]; return new Response('{}', { status: 200 }); }
  if (url.includes('stripe.com')) { const f = new URLSearchParams(opts.body); return new Response(JSON.stringify({ url: 'https://checkout.stripe.test/' + f.get('metadata[pack]') }), { status: 200 }); }
  if (url.includes('anthropic.com')) { anthropicCalls++; lastAnthropicBody = JSON.parse(opts.body); return new Response(JSON.stringify({ content: [{ type: 'text', text: 'Next question?' }], usage: { input_tokens: 2000, output_tokens: 100 } }), { status: 200 }); }
  throw new Error('unexpected fetch ' + url);
};

const call = async (method, path, body, token, headers = {}) => {
  const r = await worker.fetch(new Request('https://api.test' + path, { method, headers: Object.assign({ 'content-type': 'application/json', origin: 'https://app.test' }, token ? { authorization: 'Bearer ' + token } : {}, headers), body: body == null ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env);
  return { status: r.status, body: await r.json().catch(() => null), cors: r.headers.get('access-control-allow-origin') };
};
let fails = 0; const ok = (c, m) => { console.log((c ? '✓ ' : '✗ ') + m); if (!c) fails++; };

// Auth
let r = await call('POST', '/auth/start', { email: 'Hari@Example.com' });
ok(r.status === 200 && lastCode, 'code emailed');
ok(r.cors === 'https://app.test', 'CORS allows app origin');
r = await call('POST', '/auth/start', { email: 'hari@example.com' });
ok(r.status === 429, 'resend throttled within 60s');
r = await call('POST', '/auth/verify', { email: 'hari@example.com', code: '000000' });
ok(r.status === 400, 'wrong code rejected');
r = await call('POST', '/auth/verify', { email: 'hari@example.com', code: lastCode });
ok(r.status === 200 && r.body.seconds === 600, 'verified, 10 free minutes');
const token = r.body.token;
r = await call('GET', '/me', null, token);
ok(r.body.seconds === 600 && r.body.email === 'hari@example.com', '/me returns balance');
r = await call('GET', '/me', null, 'bogus');
ok(r.status === 401, 'bad token rejected');

// Chat metering
const sys = 'You are an interviewer.';
r = await call('POST', '/chat', { sid: 'abc12345abc', system: sys, messages: [{ role: 'user', content: 'Hello' }] }, token);
ok(r.status === 200 && r.body.text === 'Next question?' && r.body.seconds === 585, 'first turn charged 15s → 585');
ok(lastAnthropicBody.system[0].cache_control && lastAnthropicBody.max_tokens === 1500, 'prompt caching + output cap sent');
r = await call('POST', '/chat', { sid: 'abc12345abc', system: sys, messages: [{ role: 'user', content: 'Hello' }, { role: 'assistant', content: 'Q1' }, { role: 'user', content: 'A1' }] }, token);
ok(r.status === 429, 'rapid second call throttled');
sql.prepare('UPDATE usage SET last_at = last_at - 70').run();
r = await call('POST', '/chat', { sid: 'abc12345abc', system: sys, messages: [{ role: 'user', content: 'Hello' }, { role: 'assistant', content: 'Q1' }, { role: 'user', content: 'A1' }] }, token);
ok(r.body.seconds === 515, 'second turn charged elapsed 70s → 515');
sql.prepare('UPDATE usage SET last_at = last_at - 1000').run();
r = await call('POST', '/chat', { sid: 'abc12345abc', system: sys, messages: [{ role: 'user', content: 'x' }] }, token);
ok(r.body.seconds === 395, 'idle gap capped at 120s → 395');
const spend = sql.prepare('SELECT usd FROM daily').get().usd;
ok(Math.abs(spend - 3 * (2000 * 3 + 100 * 15) / 1e6) < 1e-9, 'daily spend tracked ($' + spend.toFixed(4) + ')');

// Validation
r = await call('POST', '/chat', { sid: 'abc12345abc', system: 'x'.repeat(30000), messages: [{ role: 'user', content: 'x' }] }, token);
ok(r.status === 400, 'oversized system prompt rejected');
r = await call('POST', '/chat', { sid: 'abc12345abc', system: sys, messages: [{ role: 'assistant', content: 'x' }] }, token);
ok(r.status === 400, 'bad conversation shape rejected');

// Out of minutes
sql.prepare('UPDATE users SET seconds = 0').run();
const before = anthropicCalls;
r = await call('POST', '/chat', { sid: 'zzz12345zzz', system: sys, messages: [{ role: 'user', content: 'x' }] }, token);
ok(r.status === 402 && anthropicCalls === before, 'no minutes → 402, no AI call made');

// Daily cap
sql.prepare('UPDATE users SET seconds = 600').run();
sql.prepare('UPDATE daily SET usd = 25').run();
r = await call('POST', '/chat', { sid: 'yyy12345yyy', system: sys, messages: [{ role: 'user', content: 'x' }] }, token);
ok(r.status === 503, 'daily spend cap blocks calls');
sql.prepare('UPDATE daily SET usd = 0').run();

// Checkout + webhook
r = await call('POST', '/checkout', { pack: 'p30' }, token);
ok(r.status === 200 && r.body.url.endsWith('/p30'), 'checkout session URL returned');
r = await call('POST', '/checkout', { pack: 'nope' }, token);
ok(r.status === 400, 'unknown pack rejected');
const evt = JSON.stringify({ type: 'checkout.session.completed', data: { object: { id: 'cs_1', payment_status: 'paid', amount_total: 299, client_reference_id: 'hari@example.com', metadata: { email: 'hari@example.com', seconds: '1800', pack: 'p30' } } } });
const t = Math.floor(Date.now() / 1000);
const sig = crypto.createHmac('sha256', 'whsec_test').update(t + '.' + evt).digest('hex');
let wr = await worker.fetch(new Request('https://api.test/stripe/webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=${sig}` }, body: evt }), env);
ok(wr.status === 200, 'webhook accepted with valid signature');
r = await call('GET', '/me', null, token);
ok(r.body.seconds === 2400, 'paid 30 min credited → 2400s');
wr = await worker.fetch(new Request('https://api.test/stripe/webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=${sig}` }, body: evt }), env);
r = await call('GET', '/me', null, token);
ok(r.body.seconds === 2400, 'webhook retry does not double-credit');
wr = await worker.fetch(new Request('https://api.test/stripe/webhook', { method: 'POST', headers: { 'stripe-signature': `t=${t},v1=deadbeef` }, body: evt }), env);
ok(wr.status === 400, 'forged webhook rejected');

// Free-minute farming cap
sql.prepare("UPDATE daily SET free_seconds = 36000").run();
await call('POST', '/auth/start', { email: 'second@example.com' });
r = await call('POST', '/auth/verify', { email: 'second@example.com', code: lastCode });
ok(r.status === 200 && r.body.seconds === 0, 'free allowance exhausted → new user gets 0 free');

console.log(fails ? `FAILURES: ${fails}` : 'ALL PASSED');
