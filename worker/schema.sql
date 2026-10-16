-- Interview Edge paid AI interviewer — D1 schema. Apply with:
--   npx wrangler d1 execute interview-edge --remote --file=schema.sql
CREATE TABLE IF NOT EXISTS users (
  email   TEXT PRIMARY KEY,
  seconds INTEGER NOT NULL DEFAULT 0,      -- interview time balance
  created INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS codes (           -- one pending sign-in code per email
  email     TEXT PRIMARY KEY,
  code_hash TEXT NOT NULL,
  expires   INTEGER NOT NULL,
  tries     INTEGER NOT NULL DEFAULT 0,
  sent_at   INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (        -- sign-in tokens (only hashes are stored)
  token_hash TEXT PRIMARY KEY,
  email      TEXT NOT NULL,
  expires    INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS usage (           -- one row per interview session, for metering and reporting
  sid     TEXT PRIMARY KEY,
  email   TEXT NOT NULL,
  started INTEGER NOT NULL,
  last_at INTEGER NOT NULL,
  seconds INTEGER NOT NULL DEFAULT 0,
  usd     REAL NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS payments (        -- Stripe Checkout sessions credited (id makes crediting idempotent)
  id           TEXT PRIMARY KEY,
  email        TEXT NOT NULL,
  seconds      INTEGER NOT NULL,
  amount_cents INTEGER NOT NULL,
  created      INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS daily (           -- global daily totals for the spend cap and free-minute allowance
  day          TEXT PRIMARY KEY,
  usd          REAL NOT NULL DEFAULT 0,
  free_seconds INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_usage_email ON usage(email);
CREATE INDEX IF NOT EXISTS idx_payments_email ON payments(email);
