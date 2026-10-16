# Interview Edge — paid AI interviewer server

This small server lets people use the in-app AI interviewer **without their own API key**.
Your Anthropic key stays on the server, people buy minutes with Stripe, and every interview is metered.

- **Pricing in the app:** first 10 minutes free, then $0.99 / 10 min, $2.99 / 30 min, $5.99 / 60 min. No subscription.
- **Sign-in:** email + 6-digit code (no passwords).
- **Runs on:** Cloudflare Workers + D1 (SQLite). The free tier is enough to start.
- **The app is unchanged until you switch it on:** set `api` in `config.js` (repo root) to your server URL.

## How the protection works

| Risk | Protection |
|---|---|
| API key leaks | Key is a server secret; the browser never sees it |
| Someone uses it for free | Every call needs a signed-in token and a positive minutes balance |
| Free-minute farming with many emails | Global daily cap on free minutes (`FREE_DAILY_CAP_SECONDS`) |
| Runaway AI bill | Hard daily spend cap (`DAILY_CAP_USD`), output token cap, request size limits, per-user rate limit |
| Fake payments | Stripe webhook signature checked; each payment credited once |
| Long idle sessions | Each turn charges the time since the last turn, capped at 2 minutes |

## Will you make money? (per pack, approximate)

AI cost depends on the model and interview length. With Sonnet-class pricing ($3 / $15 per million tokens)
and prompt caching, a 10-minute interview (about 8 turns) costs roughly **$0.10–$0.20**. Haiku is about a third of that.

| Pack | Price | Stripe fee (2.9% + $0.30) | AI cost (est.) | You keep (est.) |
|---|---|---|---|---|
| 10 min | $0.99 | $0.33 | $0.10–0.20 | **$0.46–0.56** |
| 30 min | $2.99 | $0.39 | $0.30–0.60 | **$2.00–2.30** |
| 60 min | $5.99 | $0.47 | $0.60–1.20 | **$4.32–4.92** |

The $0.30 fixed Stripe fee eats a third of the $0.99 pack — the 30 and 60 minute packs are where the margin is.
The server records actual AI cost per interview (`usage.usd`) and per day (`daily.usd`), so you can check real numbers after launch.

## One-time setup (about 30 minutes)

You need: a Cloudflare account, a Stripe account, an Anthropic API key, and a Resend account (free, for sign-in emails) with a domain you can send from.

1. **Install and log in**
   ```sh
   cd worker
   npm install
   npx wrangler login
   ```
2. **Create the database** and paste the printed `database_id` into `wrangler.toml`:
   ```sh
   npx wrangler d1 create interview-edge
   npx wrangler d1 execute interview-edge --remote --file=schema.sql
   ```
3. **Stripe:** in the Stripe dashboard create a product "Interview minutes" with three one-time prices: $0.99, $2.99, $5.99.
   Put the three `price_…` IDs into `PRICE_10`, `PRICE_30`, `PRICE_60` in `wrangler.toml`.
4. **Email:** in Resend, verify your domain, then set `MAIL_FROM` in `wrangler.toml` (e.g. `Interview Edge <login@yourdomain.com>`).
5. **Secrets** (you'll be prompted for each value):
   ```sh
   npx wrangler secret put ANTHROPIC_API_KEY
   npx wrangler secret put STRIPE_SECRET_KEY
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CODE_PEPPER          # any long random string
   ```
6. **Deploy:**
   ```sh
   npx wrangler deploy
   ```
   Note the URL it prints, e.g. `https://interview-edge-api.<you>.workers.dev`.
7. **Stripe webhook:** in Stripe → Developers → Webhooks, add endpoint `<your URL>/stripe/webhook` for event
   `checkout.session.completed`. Copy its signing secret, then:
   ```sh
   npx wrangler secret put STRIPE_WEBHOOK_SECRET
   ```
8. **Switch the app on:** in `config.js` at the repo root set `api: 'https://interview-edge-api.<you>.workers.dev'`,
   run `node tools/build-sw.js`, commit and push.

Test with Stripe test mode first (test keys and test prices), then switch to live keys.

## Settings you can change (`wrangler.toml`)

- `MODEL` — `claude-sonnet-5-5` (better) or `claude-haiku-5-5` (cheaper). Update `PRICE_IN_PER_MTOK` / `PRICE_OUT_PER_MTOK` to match.
- `FREE_SECONDS` — free time for each new email (600 = 10 min).
- `FREE_DAILY_CAP_SECONDS` — total free time given out per day across everyone.
- `DAILY_CAP_USD` — the server refuses AI calls after this much spend in a day.
- `MIN_TURN_SECONDS` / `MAX_TURN_SECONDS` — the per-turn charge range.

## Checking how it's going

```sh
npx wrangler d1 execute interview-edge --remote --command "SELECT day, round(usd,2) AS ai_cost, free_seconds/60 AS free_min FROM daily ORDER BY day DESC LIMIT 14"
npx wrangler d1 execute interview-edge --remote --command "SELECT count(*) AS payments, sum(amount_cents)/100.0 AS revenue FROM payments"
```

## Tests

`npm test` runs the server end to end against an in-memory database with fake Stripe, Resend and Anthropic APIs
(sign-in, metering, rate limits, spend cap, checkout, webhook signature and double-credit protection).

## Later: iOS and Android

The same server works for native apps — they call the same endpoints. Note that Apple and Google require
in-app purchases for digital minutes sold inside their apps; the server would need a small addition to verify
App Store / Play receipts instead of (or alongside) Stripe.
