# Interview Edge
*by Arahasoft*

Interview questions, model answers and practice modes for roles across **10 fields** — Technology, Finance, Supply Chain, HR, Sales & Marketing, Healthcare & Life Sciences, Engineering & Construction, Banking & Insurance, Legal/Consulting/Operations — plus **At Work** practice for 1:1s, reviews and promotions. 170+ positions, 174 question banks, ~8,800 questions. Every position has at least 50 questions, and every answer follows the same shape: **Why they ask → full answer or sample answer (worked examples for technical topics) → Tip**.

On a phone, use *Share → Add to Home Screen* (iPhone) or *Install app* (Android). It works offline after the first visit.

## What's inside
- **Home** — search across every question and role, then choose a field:
  - *Technology* — Oracle ERP · Oracle Modules · ERP Technical · SAP · Java & Engineering · Software Engineering (front end, back end, full stack, mobile, staff) · Data & AI (analyst, data/analytics engineer, BI, data scientist, ML, LLM/GenAI, architect, head of data) · Cloud & DevOps (cloud, DevOps, SRE, platform, Kubernetes, architect) · Cybersecurity (SOC analyst and manager, security/cloud security/IAM engineer, GRC, architect, CISO) · Infrastructure (sysadmin, network, DBA, solutions architect) · Enterprise Apps (Salesforce admin/dev, ServiceNow, Workday, Dynamics 365, NetSuite) · Product & Delivery (BA, PM/PO, Scrum Master, TPM, PMO) · Testing & QA · IT Leadership (director of enterprise apps, PMO, VP IT, CIO, CTO).
  - *Finance & Accounting* — accounting and close, financial analyst, FP&A and treasury, audit and tax, specialists (revenue/ASC 606, cost, payroll, credit, corporate development, financial risk, investor relations), leadership up to CFO.
  - *Supply Chain & Manufacturing* — procurement, planning, inventory, logistics, manufacturing and quality, specialists (supply chain analyst, S&OP, manufacturing engineer, EHS, trade compliance, reliability), leadership.
  - *Human Resources* — HR business partner, talent acquisition, compensation and benefits, CHRO.
  - *Sales & Marketing* — account executive, sales director, digital/growth marketing, customer success.
  - *Healthcare & Life Sciences* — registered nurse, nurse manager, revenue cycle, Epic analyst, CRA, regulatory affairs, GMP quality, pharmacovigilance.
  - *Engineering & Construction* — mechanical, electrical, civil/structural, construction project manager.
  - *Banking & Insurance* — commercial relationship manager, AML/KYC, underwriter, claims.
  - *Legal, Consulting & Operations* — compliance manager, corporate counsel, management consultant, operations/general manager.
  - *At Work: 1:1s & Reviews* — 1:1 with manager, skip-level with senior director, 1:1 with VP, first meeting with a new leader, performance review, promotion & raise, status updates & escalations. Save **My role** (title, responsibilities, projects, wins, goals) on the device and the model answers fill it in; **Prepare with Claude** builds a tailored brief for the meeting.
- **Resume Match** — upload a resume (PDF, Word .docx or pasted text). The app reads it on the device, finds the latest job title, years of experience and skills, and suggests what to practice for: the same level, the next step up, or any role you pick. It then builds a practice set — the role's top questions, the questions closest to the resume, a few from related deep dives (e.g. Oracle modules, only when the resume mentions Oracle) and the Interview Essentials openers — that works with the list, mock interview, flashcards and AI interviewer. The resume is saved only in that browser and can be deleted.
- **Interview Essentials** — introduction, behavioral (STAR), salary and contract rates, closing questions. Shared by every role and also on its own card.
- **Oracle ERP ladder** — Functional Consultant (2–3 yrs), Senior (3–5), Lead (5–10), Senior Solution Architect (10–15), Staff (15–20) — each with **Finance** and **SCM** tracks — plus HCM Lead, Associate Director, Director, Senior Director, VP ERP Systems.
- **Each position** — filter by **career level** (Entry, Mid, Senior, Leadership — where a role spans levels), module, **Basic / In-depth**, status (not marked, to review, known, starred) and search.
- **Practice modes**
  - *Mock interview* — random questions against a timer, answer by voice, compare with the model answer, score yourself 1–5.
  - *Flashcards* — flip, "Got it" / "Again", decks for unmarked, review, starred.
  - *AI interviewer* — a live interviewer (hiring manager, technical panel or executive) that asks one question at a time, follows up, and gives a scored debrief. Opens in Claude with the prompt ready (no extra cost); runs in the app with your own Anthropic API key (kept only on the device); or — once the server is deployed — with **Interview Edge minutes**: email sign-in, first 10 minutes free, then $0.99 / 10 min, $2.99 / 30 min, $5.99 / 60 min via Stripe.
  - *Voice practice* — speak answers; the browser transcribes them.
- Progress, stars and drafts are saved only on the device. Light/dark theme.

## Files
| File | What it is |
|---|---|
| `index.html` | Page shell and styles |
| `app.js` | The app: screens, practice modes, progress, AI interviewer |
| `data/catalog.js` | Fields, cubes and positions (add positions here) |
| `src/<position>-N.js` | **Question sources — edit these** |
| `data/q/<position>.js` | Generated question banks (one per position, loaded on demand) |
| `data/counts.js` | Generated question counts |
| `tools/merge.js` | Joins `src` parts into `data/q`, validates, rebuilds counts |
| `tools/build-sw.js` | Rebuilds `sw.js` (offline cache) with a new version |
| `tools/add-family.js` | Adds a cube (and optionally a new field) to the catalog from a small JSON spec |
| `resume.js` | Resume Match engine: reads PDF/Word/text, finds the latest role, matches roles, picks the practice set |
| `data/resume-index.js` | Generated by `tools/build-resume-index.js` (run by `merge.js`): distinctive terms per bank for matching |
| `vendor/pdfjs/` | PDF.js 3.11 (Apache-2.0), loaded only when someone opens a PDF resume |
| `config.js` | Runtime settings — set `api` to the paid-minutes server URL to turn that option on |
| `worker/` | Paid AI interviewer server (Cloudflare Worker + D1 + Stripe) — see `worker/README.md` |
| `fonts/`, `icons/`, `manifest.webmanifest`, `sw.js` | Fonts, home-screen icons, install info, offline support |

## Adding or editing questions
1. Edit or add a file in `src/` named `<position id>-<n>.js`:
   ```js
   QB['ora-fc-fin'] = (QB['ora-fc-fin'] || []).concat([
     ['General Ledger', 'Question text?', `Answer text`, 'B', 'M'],   // 'B' basic, 'D' in-depth; optional level E/M/S/X
   ]);
   ```
   Answer formatting: blank line = new paragraph, `- ` bullets, `## Heading`, `Tip: ...` callout, `**bold**`.
2. Run `node tools/merge.js` (reports malformed or duplicate questions).
3. Run `node tools/build-sw.js` so installed phones pick up the change.

New positions go in `data/catalog.js` — a role with Finance/SCM tracks uses `tracks: [{ id, label, blurb }]`.

© Arahasoft
