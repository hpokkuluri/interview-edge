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
3. **Questions**: the standard is **~50 role-specific questions per role** (owner's directive —
   depth matters). 12 is only the validator's hard minimum. Split the questions across multiple
   source files — `src/<id>-1.js`, `src/<id>-2.js`, `src/<id>-3.js`, … — because `tools/merge.js`
   concatenates every `src/<id>-*.js` into the bank; keep each file around 35–40 questions for
   manageability. Write them in this exact tuple format — each file concats onto `QB["<id>"]`:
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
   - Cover the real arc in depth: role overview, core skills, technical/domain depth, behavioral,
     several scenarios, and a closing "why this role". At ~50 questions, go deep across every
     sub-topic of the role without filler — distinct, genuinely useful questions only. Keep
     ~8–12 marked top (`"t":1`) and a follow-up on every question. No near-duplicate questions
     (the validator dedupes on question text, which can drop a bank below target — so write a few
     extra to land safely at 50+).
   - Non-module banks automatically also show the 50 shared "Interview Essentials" questions at
     runtime, so a 50-question bank shows ≈ 100+ to the user.
4. **Build:** `node tools/merge.js && node tools/build-sw.js`.
5. **Validate:** `node tools/check-bank.js <id>` must print `OK`. Fix every problem. Also run
   `node -e "global.window={};require('./data/catalog.js')"` to confirm the catalog still parses,
   and confirm the new id appears in `data/counts.js` with a count.

## Each daily run

The owner wants **every role to reach ~50 role-specific questions**, and wants the app to keep
growing with new roles. So each run does both, in this priority order:

1. **Top up existing thin banks first.** Work through the `## Top-up to 50` queue below, taking
   the lowest-count roles first. For each, read its existing `src/<id>-*.js`, then add new
   `src/<id>-N.js` files with enough distinct questions to reach **50+** (don't duplicate existing
   question text). Aim to fully top up **4–6 roles per run** (more if they only need a handful).
   Move each finished one to `## Topped up`.
2. **Then add new roles** if run capacity remains: take the first unchecked role under `## Next`
   (skip if `src/<id>-1.js` exists or `<id>` is already in the catalog), create its cube/field if
   needed, and build it at the **~50-question** standard. Move finished ones to `## Done`.
3. If `## Next` has fewer than 12 items left, add 20 more realistic, in-demand real job titles
   (good salaries) across varied verticals to `## Next` before finishing.

Quality first — a smaller number of genuinely strong, honest, non-redundant questions beats
padding to hit a number. Do roles one at a time, validating each with `node tools/check-bank.js
<id>` (must print `OK`).

- After the batch: `node tools/merge.js && node tools/build-sw.js`, confirm counts rose, then
  commit to `main` and push. Commit message summarizing what changed (e.g.
  `Daily roles: topped up hr-gen, hr-rec to 50; added <id> (+N roles)`). End commit messages with:
  `Co-Authored-By: Claude <noreply@anthropic.com>`
- Move each finished role to `## Done` (new roles) or `## Topped up` (existing roles) as
  `- [x] <id> — <title> — YYYY-MM-DD`.
- The app hides any catalog role whose bank isn't built yet, so a half-finished catalog entry
  never breaks the UI — but only push roles whose `check-bank.js` is `OK`.
- If a push is rejected because `main` moved, `git pull --rebase`, re-run merge + build-sw +
  checks, and push again.

## Repo

`hpokkuluri/interview-edge` (GitHub Pages at https://hpokkuluri.github.io/interview-edge/).
Attach with push access and clone, work on `main`. Pushing triggers the Android APK rebuild.

## Top-up to 50

Existing banks below the 50-question standard, lowest first — bring each to **50+** role-specific
questions by adding `src/<id>-N.js` files (don't duplicate existing question text). Prioritize
these before adding brand-new roles. (Module banks `ora-mod-*` aggregate questions from the Oracle
role banks automatically and are handled separately — not listed here.)

- [ ] bk-actuary — Actuary (Life / P&C / Health) (at 11, add ~39)
- [ ] bk-agent — Insurance Agent / Broker (at 11, add ~39)
- [ ] bk-pb — Personal Banker / Branch Manager (at 11, add ~39)
- [ ] cs-strategy — Strategy / Business Analyst (at 11, add ~39)
- [ ] lg-contracts — Contracts Manager / Commercial Counsel (at 11, add ~39)
- [ ] lg-paralegal — Paralegal / Legal Assistant (at 11, add ~39)
- [ ] sm-se — Sales Engineer / Solutions Consultant (at 11, add ~39)
- [ ] bk-credit — Credit Analyst / Credit Risk Analyst (at 12, add ~38)
- [ ] bk-mortgage — Mortgage Loan Officer / Underwriter (at 12, add ~38)
- [ ] bk-risk — Risk Manager (Enterprise / Financial) (at 12, add ~38)
- [ ] cs-change — Change Management Consultant (at 12, add ~38)
- [ ] cs-pmo — Program Manager / PMO Lead (at 12, add ~38)
- [ ] en-chem — Chemical / Process Engineer (at 12, add ~38)
- [ ] en-env — Environmental Engineer (at 12, add ~38)
- [ ] en-est — Construction Estimator (at 12, add ~38)
- [ ] en-ind — Industrial Engineer (at 12, add ~38)
- [ ] en-safety — Construction Safety / HSE Manager (at 12, add ~38)
- [ ] en-super — Site Superintendent / Field Supervisor (at 12, add ~38)
- [ ] hr-er — Employee Relations Manager (at 12, add ~38)
- [ ] hr-gen — HR Generalist (at 12, add ~38)
- [ ] hr-hris — HRIS / People Systems Analyst (at 12, add ~38)
- [ ] hr-ld — Learning & Development Manager (at 12, add ~38)
- [ ] hr-payroll — Payroll Manager (at 12, add ~38)
- [ ] hr-rec — Recruiter / Technical Recruiter (at 12, add ~38)
- [ ] lg-privacy — Privacy / Data Protection Officer (at 12, add ~38)
- [ ] sm-content — Content & SEO Marketing Manager (at 12, add ~38)
- [ ] sm-demandgen — Demand Generation Manager (at 12, add ~38)
- [ ] sm-pmm — Product Marketing Manager (at 12, add ~38)
- [ ] sm-revops — Sales Operations / RevOps (at 12, add ~38)
- [ ] sm-sdr — Sales Development Rep (SDR / BDR) (at 12, add ~38)
- [ ] ls-hoq — Head of Quality / VP Quality (at 13, add ~37)
- [ ] sec-pentest — Penetration Tester / Ethical Hacker (at 18, add ~32)
- [ ] ls-msl — Medical Science Liaison (at 22, add ~28)
- [ ] ls-qc — QC Lab Analyst (at 22, add ~28)
- [ ] ls-sales — Pharma Sales Rep / Key Account Manager (at 22, add ~28)
- [ ] ls-sp — Statistical Programmer (SAS / R) (at 23, add ~27)
- [ ] ls-val — Validation Engineer (Equipment, Process, Cleaning) (at 23, add ~27)
- [ ] ls-bio — Biostatistician (at 24, add ~26)
- [ ] ls-cpm — Clinical Project Manager / Clinical Ops Lead (at 24, add ~26)
- [ ] ls-ctc — Clinical Trial Coordinator / Assistant (at 24, add ~26)
- [ ] ls-cdm — Clinical Data Manager (at 25, add ~25)
- [ ] it-ehr — Healthcare EHR Tester (at 40, add ~10)
- [ ] it-embed — Automotive / Embedded Test Engineer (at 40, add ~10)
- [ ] it-ins — Insurance Systems Tester (Guidewire) (at 40, add ~10)
- [ ] it-meddev — Medical Device Software V&V Engineer (at 40, add ~10)
- [ ] it-pay — Banking & Payments Tester (at 40, add ~10)
- [ ] it-telecom — Telecom / Network Test Engineer (at 40, add ~10)
- [ ] qa-uat — UAT Coordinator / Business Tester (at 40, add ~10)
- [ ] it-csv — Computer System Validation (CSV/CSA) Engineer (at 42, add ~8)
- [ ] qa-game — Game Tester / Game QA (at 42, add ~8)
- [ ] qa-sfdc — Salesforce Tester (at 42, add ~8)
- [ ] qa-a11y — Accessibility Tester (at 46, add ~4)
- [ ] qa-sap — SAP Tester (at 46, add ~4)
- [ ] qa-mobile — Mobile App Tester (at 47, add ~3)
- [ ] qa-vp — Head of QA / VP Quality Engineering (at 47, add ~3)
- [ ] qa-data — Data / ETL Tester (at 48, add ~2)
- [ ] qa-api — API / Microservices Tester (at 49, add ~1)
- [ ] qa-arch — Test Architect (at 49, add ~1)

## Topped up
(Existing roles brought to 50+ get moved here by the daily task.)
- [x] ed-teacher — K-12 Teacher — 2026-10-29
- [x] ed-prof — Professor / Instructor — 2026-10-29
- [x] ed-principal — School Principal / Administrator — 2026-10-29
- [x] ed-counselor — School Counselor — 2026-10-29
- [x] ed-instrdesign — Instructional Designer — 2026-10-29
- [x] ed-sped — Special Education Teacher — 2026-10-29

## Next

> Note (2026-10-31): the older queue sections below (Finance/SCM/Healthcare/Tech `tc-*`,
> and the `gov`/`hosp`/`media` fields) are now largely **already built under different ids**
> — e.g. `fa-staff`≈`fa-acct`, `tc-ml`≈`da-ml`, `sc-warehouse`≈`sc-wh`, and every `gv-*`/`hs-*`/`md-*`
> item is live. Before building any of them, run the catalog/src novelty check and **skip
> semantic duplicates**. The **Fresh batch** below is verified not in the catalog as of 2026-10-31
> — prefer it.

### Fresh batch (added 2026-10-31) — verified NOT in catalog; prefer these

Healthcare & Life Sciences (field `health`) — cube `health-clin` "Clinical & Allied Health":
- [ ] hc-pa — Physician Assistant (assessment, diagnosis, prescribing, scope, collaboration)
- [ ] hc-ot — Occupational Therapist (evaluation, treatment plans, ADLs, outcomes, documentation)
- [ ] hc-rt — Respiratory Therapist (ventilators, ABGs, airway, protocols, critical care)
- [ ] hc-slp — Speech-Language Pathologist (assessment, swallowing, therapy, IEP, documentation)
- [ ] hc-sono — Diagnostic Medical Sonographer (ultrasound, anatomy, protocols, QA, ergonomics)
- [ ] hc-crna — Nurse Anesthetist (CRNA) (anesthesia, airway, pharmacology, monitoring, safety)

Skilled Trades & Field Services (field `trades`) — cube `trades-core` "Skilled Trades":
- [ ] tr-wind — Wind Turbine Technician (climbing, hydraulics, electrical, SCADA, safety)
- [ ] tr-solar — Solar PV Installer (racking, inverters, NEC, interconnection, safety)
- [ ] tr-ironworker — Ironworker (structural steel, rigging, welding, heights, blueprints)
- [ ] tr-instrument — Instrumentation & Controls Technician (calibration, PLCs, loops, P&IDs)

Engineering & Construction (field `eng`) — cube `engcore` "Engineering & Construction":
- [ ] en-biomed — Biomedical Engineer (devices, design controls, FDA, testing, standards)
- [ ] en-petro — Petroleum Engineer (reservoir, drilling, production, economics, safety)
- [ ] en-robotics — Robotics Engineer (kinematics, controls, perception, integration, safety)

Government & Public Sector (field `gov`) — cube `gov-core` "Public Sector":
- [ ] gv-epi — Epidemiologist (surveillance, study design, outbreaks, biostatistics, communication)
- [ ] gv-fire — Firefighter / Fire Captain (suppression, rescue, incident command, EMS, safety)
- [ ] gv-revenue — Tax Examiner / Revenue Agent (audits, compliance, tax law, documentation, ethics)

Media, Creative & Communications (field `media`) — cube `media-core` "Creative & Comms":
- [ ] md-creativedir — Creative Director (vision, team, brand, pitches, cross-functional)
- [ ] md-uxr — UX Researcher (methods, usability, synthesis, influence, ethics)

Hospitality, Retail & Real Estate (field `hosp`) — cube `hosp-core` "Hospitality & Retail":
- [ ] hs-casino — Casino / Gaming Operations Manager (floor ops, compliance, revenue, security, staff)

Transportation, Logistics & Aviation (field `trans`) — cube `trans-core` "Transportation & Aviation":
- [ ] tl-marineeng — Marine Engineer / Ship's Engineer (propulsion, auxiliaries, watchkeeping, maintenance, safety)

### Older queue (verify novelty — many already built under other ids)

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
- [x] ed-teacher — K-12 Teacher — 2026-10-29
- [x] ed-prof — Professor / Instructor — 2026-10-29
- [x] ed-principal — School Principal / Administrator — 2026-10-29
- [x] ed-counselor — School Counselor — 2026-10-29
- [x] ed-instrdesign — Instructional Designer — 2026-10-29
- [x] ed-sped — Special Education Teacher — 2026-10-29
- [x] ed-psych — School Psychologist — 2026-10-31
- [x] bk-advisor — Financial Advisor / Wealth Manager — 2026-10-31
- [x] en-aero — Aerospace Engineer — 2026-10-31
- [x] hs-chef — Executive Chef / Culinary Director — 2026-10-31
- [x] tr-elevator — Elevator Installer / Mechanic — 2026-10-31
- [x] tl-marine — Marine / Ship Captain (Merchant Mariner) — 2026-10-31
