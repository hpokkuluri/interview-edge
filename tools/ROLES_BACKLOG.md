# Interview Edge — daily new-roles backlog

This drives the "Interview Edge daily roles" scheduled task. Each run adds a batch of
new interview-question banks (roles) to the app and pushes them live. Pushing to `main`
auto-rebuilds the Android test APK via `.github/workflows/android.yml`.

## How to add ONE role

A "role" is a question bank shown under a field → cube on the home screen.

1. **Pick** the first unchecked role under `## Next`. Skip it if `src/<id>-1.js` already
   exists or `<id>` is already in `data/catalog.js`; take the next one instead.
2. **Catalog** (`data/catalog.js`): add the role as a `{ id, title, level, blurb }` object
   to the `positions` array of the named family (cube). If the backlog says to create a NEW
   cube, add a new family object to `window.CATALOG` (copy an existing one's shape: `id, field,
   name, short, glyph, color, tint, tag, positions: [...]`) and add its `id` to the right
   field's `families` array in `window.FIELDS`. Reuse the field's color/tint. If it says a NEW
   field, add a `window.FIELDS` entry too.
3. **Questions** (`src/<id>-1.js`): write **12–14 questions** (more is welcome) in this exact
   tuple format — one JS file that concats onto `QB["<id>"]`:
   ```js
   // <Role title>. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X', source, { t: top, f: [follow-up q, a] }]
   QB["<id>"] = (QB["<id>"] || []).concat([
   ["Topic", "Question text?", "**Why they ask:** ...\n\n**Answer:**\n\"...\"\n\nTip: ...", "B", "M", null, {"t":1,"f":["Likely follow-up question?","Short spoken follow-up answer."]}],
   ...
   ]);
   ```
   - Tuple index 0 = topic, 1 = question, 2 = answer, 3 = `'B'` (basic) or `'D'` (in-depth),
     4 = level `'E'`/`'M'`/`'S'`/`'X'` (entry/mid/senior/exec), 5 = `null`, 6 = `{ t:1, f:[fq, fa] }`.
   - Every answer MUST start with `**Why they ask:**`, then `**Answer:**` written the way a
     strong candidate would say it out loud (use a worked example or numbers for technical
     topics), then a one-line `Tip:`. No outline-only bullets, no `[blanks]`.
   - Every question needs a follow-up `f: [question, answer]` (answer 1–2 sentences). Mark the
     ~4–6 most important questions as top with `"t":1`. Keep answers accurate and honest; present
     trade-offs; never invent facts, numbers or credentials.
   - Cover the real arc: role overview, core skills, technical/domain depth, behavioral, a
     scenario or two, and a closing "why this role". First and last questions are good "top" picks.
   - Non-module banks automatically also show the 50 shared "Interview Essentials" questions at
     runtime, so 12–14 own questions is enough (shown total ≈ 62+).
4. **Build:** `node tools/merge.js && node tools/build-sw.js`.
5. **Validate:** `node tools/check-bank.js <id>` must print `OK`. Fix every problem. Also run
   `node -e "global.window={};require('./data/catalog.js')"` to confirm the catalog still parses,
   and confirm the new id appears in `data/counts.js` with a count.

## Each daily run

- Add **6 new roles** (quality first — if a role would be thin or you're unsure of the domain,
  skip it for a better one). Do them one at a time, validating each.
- Prefer, in order: (a) any field still under 12 roles, bringing it toward 12+; (b) the next
  items under `## Next`; (c) if `## Next` has fewer than 12 items left, add 20 more realistic,
  in-demand roles (real job titles paying solid salaries) to `## Next` across varied verticals
  before finishing — so the app keeps growing.
- After all 6: `node tools/merge.js && node tools/build-sw.js`, confirm counts rose, then commit
  to `main` and push. Commit message: `Daily roles: <id1>, <id2>, ... (+N roles)`. End commit
  messages with:
  `Co-Authored-By: Claude <noreply@anthropic.com>`
- Move each finished role from `## Next` to `## Done` as `- [x] <id> — <title> — YYYY-MM-DD`.
- The app hides any catalog role whose bank isn't built yet, so a half-finished catalog entry
  never breaks the UI — but only push roles whose `check-bank.js` is `OK`.
- If a push is rejected because `main` moved, `git pull --rebase`, re-run merge + build-sw +
  checks, and push again.

## Repo

`hpokkuluri/interview-edge` (GitHub Pages at https://hpokkuluri.github.io/interview-edge/).
Attach with push access and clone, work on `main`. Pushing triggers the Android APK rebuild.

## Next

New cubes to create as you go (put the cube's field in parentheses):

### Finance & Accounting (field `fin`) — new cube `fin-more` "Finance Specialists II"
- [ ] fa-staff — Staff Accountant (record-to-report, journal entries, reconciliations, month-end)
- [ ] fa-ap — Accounts Payable Specialist / Manager (invoice processing, 3-way match, controls)
- [ ] fa-ar — Accounts Receivable / Collections Specialist (billing, aging, DSO, disputes)
- [ ] fa-tax — Tax Accountant / Manager (returns, provisions, compliance, planning)
- [ ] fa-internal-audit — Internal Auditor (SOX, controls testing, risk-based audits)
- [ ] fa-treasury — Treasury Analyst (cash management, liquidity, forecasting, FX, debt)
- [ ] fa-fpna — FP&A Analyst (budgeting, forecasting, variance, modeling, board decks)
- [ ] fa-controller — Controller (close, financial statements, controls, team, GAAP)

### Supply Chain & Manufacturing (field `scm`) — new cube `scm-more` "Supply Chain Specialists II"
- [ ] sc-buyer — Purchasing Agent / Buyer (POs, supplier negotiation, sourcing, cost)
- [ ] sc-logistics — Logistics / Transportation Coordinator (routing, carriers, freight, 3PL)
- [ ] sc-warehouse — Warehouse / Distribution Manager (WMS, picking, labor, safety, throughput)
- [ ] sc-demand — Demand Planner (forecasting, S&OP, inventory, statistical models)
- [ ] sc-quality-mfg — Manufacturing Quality Engineer (SPC, root cause, CAPA, ISO 9001)
- [ ] sc-production — Production Supervisor (scheduling, crews, OEE, safety, lean)
- [ ] sc-sourcing — Strategic Sourcing / Category Manager (RFx, TCO, supplier strategy)

### Healthcare (field `health`) — new cube `health-clin` "Clinical & Allied Health"
- [ ] hc-np — Nurse Practitioner (assessment, diagnosis, prescribing, scope, patient care)
- [ ] hc-pharmacist — Pharmacist (dispensing, interactions, counseling, MTM, compliance)
- [ ] hc-pt — Physical Therapist (evaluation, treatment plans, outcomes, documentation)
- [ ] hc-medtech — Medical Lab Technologist (testing, QC, CLIA, specimen handling)
- [ ] hc-radtech — Radiologic Technologist (imaging, positioning, safety, PACS)
- [ ] hc-coder — Medical Coder / Biller (ICD-10, CPT, compliance, denials)
- [ ] hc-practice-mgr — Medical Practice Manager (operations, staff, billing, compliance)

### Technology (field `tech`) — new cube `tech-more` "More Tech Roles"
- [ ] tc-ml — Machine Learning Engineer (training, deployment, MLOps, evaluation)
- [ ] tc-platform — Platform / Infrastructure Engineer (Kubernetes, IaC, reliability)
- [ ] tc-mobile-dev — Mobile Developer (iOS/Android, lifecycle, performance, releases)
- [ ] tc-dba — Database Administrator (tuning, backup/recovery, HA, security)
- [ ] tc-network — Network Engineer (routing, switching, firewalls, troubleshooting)
- [ ] tc-tech-support — IT Support / Help Desk Technician (troubleshooting, ticketing, SLAs)
- [ ] tc-scrum — Scrum Master / Agile Coach (ceremonies, impediments, metrics, coaching)
- [ ] tc-tpm — Technical Program Manager (cross-team delivery, dependencies, risk)

### New field `edu` "Education & Training" (color #0D9488, tint #DCF5F1) — cube `edu-core` "Education"
- [ ] ed-teacher — K-12 Teacher (lesson planning, classroom management, assessment, differentiation)
- [ ] ed-prof — Professor / Instructor (curriculum, teaching, research, advising)
- [ ] ed-principal — School Principal / Administrator (leadership, staff, budgets, outcomes)
- [ ] ed-counselor — School Counselor (guidance, support, college/career, caseload)
- [ ] ed-instrdesign — Instructional Designer (ADDIE, e-learning, LMS, assessment)
- [ ] ed-sped — Special Education Teacher (IEPs, accommodations, inclusion, compliance)

### New field `gov` "Government & Public Sector" (color #7C3AED, tint #EFE9FD) — cube `gov-core` "Public Sector"
- [ ] gv-analyst — Policy Analyst (research, briefs, stakeholders, evaluation)
- [ ] gv-admin — Public Administrator / City Manager (operations, budgets, services, council)
- [ ] gv-grants — Grants Manager (writing, compliance, reporting, federal funds)
- [ ] gv-social — Social Worker / Case Manager (assessment, caseload, resources, ethics)
- [ ] gv-emergency — Emergency Management Specialist (preparedness, response, FEMA, drills)
- [ ] gv-procurement — Government Procurement Officer (FAR, bids, contracts, compliance)

### New field `hosp` "Hospitality, Retail & Real Estate" (color #EA580C, tint #FCEEE2) — cube `hosp-core` "Hospitality & Retail"
- [ ] hs-hotel — Hotel / Hospitality Manager (operations, guest service, revenue, staff)
- [ ] hs-restaurant — Restaurant Manager (operations, cost, staff, service, safety)
- [ ] hs-retail — Retail Store Manager (sales, team, inventory, loss prevention, KPIs)
- [ ] hs-realestate — Real Estate Agent / Broker (listings, clients, negotiation, closing)
- [ ] hs-property — Property Manager (tenants, leasing, maintenance, budgets)
- [ ] hs-event — Event / Catering Manager (planning, vendors, logistics, budgets)
- [ ] hs-facilities — Facilities Manager (maintenance, vendors, safety, space, budgets)

### New field `media` "Media, Creative & Communications" (color #DB2777, tint #FCE7F1) — cube `media-core` "Creative & Comms"
- [ ] md-ux — UX / Product Designer (research, wireframes, prototypes, usability, design systems)
- [ ] md-graphic — Graphic Designer (brand, layout, tools, feedback, production)
- [ ] md-social — Social Media Manager (strategy, content, community, analytics)
- [ ] md-pr — PR / Communications Manager (media relations, messaging, crisis, press)
- [ ] md-copywriter — Copywriter / Technical Writer (clarity, audience, editing, voice)
- [ ] md-video — Video Producer / Editor (production, editing, storytelling, delivery)

## Done
(Finished roles get moved here by the daily task.)
