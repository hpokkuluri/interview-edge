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

`hpokkuluri/interview-edge` (GitHub Pages at https://interview.arahasoft.com/ — custom domain via the CNAME file; the old github.io address redirects).
Attach with push access and clone, work on `main`. Pushing triggers the Android APK rebuild.

## Top-up to 50

Existing banks below the 50-question standard, lowest first — bring each to **50+** role-specific
questions by adding `src/<id>-N.js` files (don't duplicate existing question text). Prioritize
these before adding brand-new roles. The hw-* (Hardware Engineering, added 2026-11-04 at the owner's request) go first. (Module banks `ora-mod-*` aggregate questions from the Oracle
role banks automatically and are handled separately — not listed here.)

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
- [x] ls-msl — Medical Science Liaison — 2026-11-24
- [x] ls-qc — QC Lab Analyst — 2026-11-24
- [x] ls-sales — Pharma Sales Rep / Key Account Manager — 2026-11-24
- [x] ls-sp — Statistical Programmer (SAS / R) — 2026-11-24
- [x] ls-val — Validation Engineer (Equipment, Process, Cleaning) — 2026-11-24
- [x] ls-bio — Biostatistician — 2026-11-24
- [x] sm-revops — Sales Operations / RevOps — 2026-11-22
- [x] sm-sdr — Sales Development Rep (SDR / BDR) — 2026-11-22
- [x] ls-hoq — Head of Quality / VP Quality — 2026-11-22
- [x] sec-pentest — Penetration Tester / Ethical Hacker — 2026-11-22
- [x] hr-hris — HRIS / People Systems Analyst — 2026-11-16
- [x] hr-ld — Learning & Development Manager — 2026-11-16
- [x] hr-payroll — Payroll Manager — 2026-11-16
- [x] hr-rec — Recruiter / Technical Recruiter — 2026-11-16
- [x] sm-content — Content & SEO Marketing Manager — 2026-11-16
- [x] sm-demandgen — Demand Generation Manager — 2026-11-16
- [x] en-env — Environmental Engineer — 2026-11-15
- [x] en-est — Construction Estimator — 2026-11-15
- [x] en-ind — Industrial Engineer — 2026-11-15
- [x] en-safety — Construction Safety / HSE Manager — 2026-11-15
- [x] en-super — Site Superintendent / Field Supervisor — 2026-11-15
- [x] hr-er — Employee Relations Manager — 2026-11-15
- [x] cs-pmo — Program Manager / PMO Lead — 2026-11-14
- [x] en-chem — Chemical / Process Engineer — 2026-11-14
- [x] hr-gen — HR Generalist — 2026-11-14
- [x] sm-pmm — Product Marketing Manager — 2026-11-14
- [x] lg-privacy — Privacy / Data Protection Officer — 2026-11-14
- [x] hw-test — Hardware Test Engineer — 2026-11-10
- [x] hw-si — Signal Integrity Engineer — 2026-11-10
- [x] hw-power — Power Electronics Engineer — 2026-11-10
- [x] hw-fw — Firmware Engineer — 2026-11-10
- [x] hw-pm — Hardware Product Manager — 2026-11-10
- [x] hw-design — Hardware Design Engineer — 2026-11-09
- [x] hw-pcb — PCB Layout Engineer — 2026-11-09
- [x] hw-fpga — FPGA Engineer — 2026-11-09
- [x] hw-asic — ASIC / Chip Design Engineer — 2026-11-09
- [x] hw-embed — Embedded Hardware Engineer — 2026-11-09
- [x] sm-se — Sales Engineer / Solutions Consultant — 2026-11-04
- [x] bk-credit — Credit Analyst / Credit Risk Analyst — 2026-11-04
- [x] bk-mortgage — Mortgage Loan Officer / Underwriter — 2026-11-04
- [x] bk-risk — Risk Manager (Enterprise / Financial) — 2026-11-04
- [x] cs-change — Change Management Consultant — 2026-11-04
- [x] bk-actuary — Actuary (Life / P&C / Health) — 2026-11-01
- [x] bk-agent — Insurance Agent / Broker — 2026-11-01
- [x] bk-pb — Personal Banker / Branch Manager — 2026-11-01
- [x] cs-strategy — Strategy / Business Analyst — 2026-11-01
- [x] lg-contracts — Contracts Manager / Commercial Counsel — 2026-11-01
- [x] lg-paralegal — Paralegal / Legal Assistant — 2026-11-01
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

> Note (2026-11-07): the entire older queue below (Finance Specialists II `fa-*`, Supply Chain
> Specialists II `sc-*`, Technology `tc-*`, and the `gov`/`hosp`/`media` fields) has been checked
> against the live catalog and is now **fully duplicated under other ids** (e.g. `fa-internal-audit`≈
> `fa-audit`, `fa-treasury`≈`fa-treas`, `fa-fpna`≈`fa-fpa`, `fa-controller`≈`fa-ctrl`, `sc-logistics`≈
> `sc-log`, `sc-quality-mfg`≈`sc-qual`, `sc-production`≈`sc-prod`, `sc-sourcing`≈`sc-cat`, `tc-platform`≈
> `cl-plat`, `tc-mobile-dev`≈`swe-mob`, `tc-dba`≈`inf-dba`, `tc-network`≈`inf-net`, `tc-scrum`≈`pd-sm`,
> `tc-tpm`≈ Technical Program/Project Manager). **Skip all of it** — build the Fresh batch (2026-11-07)
> below instead, which is verified NOT in the catalog.

### Fresh batch (added 2026-11-07) — verified NOT in catalog; build these first

Healthcare & Allied Health (field `health`) — cube `health-clin` "Clinical & Allied Health":
(All six fresh-batch clinical roles built — see Done.)

Finance & Accounting (field `fin`) — cube `finspec` "Finance Specialists" / `accops`:
(Both finance fresh-batch roles built — see Done.)

Legal (field `biz`) — cube `legal` "Legal & Compliance":
- [x] lg-legalops — Legal Operations Manager (built earlier — already in catalog/src, confirmed 2026-11-17)

Technology (field `tech`) — cubes `sec` / `data` / `swe` / existing tech families:
- [x] da-gov — Data Governance / Data Management Analyst (built earlier — already in catalog/src, confirmed 2026-11-17)
- [x] da-compvis — Computer Vision Engineer (built earlier — already in catalog/src, confirmed 2026-11-17)
- [x] tc-gamedev — Game Developer / Gameplay Engineer (built earlier — already in catalog/src, confirmed 2026-11-17)
- [x] tc-release — Release / Build Engineer (built earlier — already in catalog/src, confirmed 2026-11-17)

Sales & Marketing (field `sales`) — cube `salesmkt` / `sm-spec`:
- [x] sm-brand — Brand Manager (built earlier — already in catalog/src, confirmed 2026-11-17)

Business & Operations (field `biz`) — cube `consult` "Consulting & Operations":
(COO built — see Done.)

### Fresh batch (added 2026-11-11) — in-demand real titles, good salaries; run the catalog/src novelty check and skip any semantic duplicate before building

Healthcare & Allied Health (field `health`) — cube `health-clin` "Clinical & Allied Health":
(All four 2026-11-11 clinical roles built — see Done.)

Engineering & Construction (field `eng`) — cube `engcore` "Engineering & Construction":
(All four 2026-11-11 engineering roles built — see Done.)

Skilled Trades & Field Services (field `trades`) — cube `trades-core` "Skilled Trades":
- [ ] tr-millwright — Millwright (machinery install/alignment, precision leveling, bearings, vibration, safety) — NOTE: likely semantic duplicate of existing `tr-maintenance` "Industrial Maintenance Tech / Millwright"; verify before building

Finance & Business (field `fin` / `biz`) — cubes `finspec` / `consult`:
- [x] biz-ma — Corporate Development / M&A Analyst — skipped: semantic duplicate of existing `fs-ib` "Corporate Development / Investment Analyst" (DCF/comps/LBO/accretion-dilution/diligence), confirmed 2026-11-19
- [x] biz-esg — ESG / Sustainability Manager — 2026-11-19 (built — see Done)
- [x] fin-reanalyst — Real Estate / Investment Analyst — 2026-11-19 (built — see Done)

Sales & Marketing (field `sales`) — cube `salesmkt` / `sm-spec`:
- [x] sm-growth — Growth Marketing Manager — 2026-11-19 (built — see Done)
- [x] sm-ecommerce — E-commerce Manager — 2026-11-19 (built — see Done)
- [x] sm-partner — Channel / Partnerships Manager — 2026-11-23 (built — see Done)

Media, Creative & Communications (field `media`) — cube `media-core` "Creative & Comms":
- [x] md-motion — Motion Designer / Animator — 2026-11-19 (built — see Done)

Government & Public Sector (field `gov`) — cube `gov-core` "Public Sector":
- [x] gv-parole — Probation / Parole Officer — 2026-11-23 (built — see Done)

Hospitality, Retail & Real Estate (field `hosp`) — cube `hosp-core` "Hospitality & Retail":
- [x] hs-merchandiser — Retail Buyer / Merchandiser — 2026-11-19 (built — see Done)

### Fresh batch (added 2026-11-19) — in-demand real titles, good salaries; run the catalog/src novelty check and skip any semantic duplicate before building

Technology & Product (field `tech`) — cubes `prod` / `swe`:
- [x] ai-pm — AI Product Manager — 2026-11-23 (built — distinct from `pd-pm`: AI/ML strategy, model selection, RAG/fine-tune, evals, responsible AI — see Done)
- [x] tc-devrel — Developer Advocate / DevRel — 2026-11-21 (built — see Done)
- [x] pd-growthpm — Growth Product Manager — 2026-11-25 (built — distinct from `pd-pm`/`sm-growth`: AARRR, activation/retention, experiment rigor, growth loops, PLG — see Done)
- [x] pd-datapm — Data Product Manager — 2026-11-25 (built — distinct from `pd-pm`: data platforms, ETL/ELT, quality/SLAs, metrics governance, ML products — see Done)

Healthcare & Allied Health (field `health`) — cubes `hcare` / `health-clin`:
- [x] hc-casemgr — RN Case Manager / Utilization Review Nurse — 2026-11-21 (built — see Done)
- [x] hc-cno — Chief Nursing Officer — 2026-11-23 (built — see Done)
- [x] hc-infprev — Infection Preventionist — 2026-11-25 (built — distinct from `hc-rn`: HAI surveillance, bundles, isolation, outbreak response, NHSN/SIR — see Done)
- [x] hc-cdi — Clinical Documentation Integrity Specialist — 2026-11-25 (built — distinct from `hc-coder`: concurrent review, compliant queries, CC/MCC/DRGs, clinical validation — see Done)

Finance & Accounting / Banking (fields `fin` / `bank`) — cubes `audit`/`accops` / `bk-spec`:
- [x] fa-secrep — SEC Reporting / Technical Accounting Manager — 2026-11-25 (built — distinct from `fa-ctrl`: 10-K/10-Q/EDGAR, technical accounting memos, ASC 606/842/805, EPS, non-GAAP, SOX/ICFR — see Done)
- [x] bk-cre — Commercial Real Estate Lender / CRE Credit Analyst — 2026-11-28 (built — distinct from `bk-credit`/`fin-reanalyst`: CRE income underwriting, NOI, cap rates, DSCR, LTV/LTC, debt yield, sponsor/recourse analysis, loan structure, refi and construction risk — see Done)

Sales & Marketing (field `sales`) — cube `sm-spec`:
- [x] sm-lifecycle — Lifecycle / Retention Marketing Manager — 2026-11-23 (built — see Done)
- [x] sm-abm — Account-Based Marketing (ABM) Manager — 2026-11-21 (built — see Done)
- [x] sm-fieldmktg — Field & Events Marketing Manager — 2026-11-25 (built — events, webinars, regional pipeline, sales alignment, lead follow-up, event ROI — see Done)
- [x] sm-csops — Customer Success Operations Manager — 2026-11-28 (built — distinct from `sm-csm`/`sm-revops`: health scoring, playbooks, CS platform admin, renewal/churn forecasting, NRR/GRR, segmentation/coverage, data integration, CSM enablement — see Done)

HR & People (field `hr`) — cube `hr-ops`:
- [x] hr-peopleanalytics — People Analytics Manager — 2026-11-21 (built — see Done)
- [x] hr-od — Organizational Development Consultant — 2026-11-23 (built — see Done)

Legal (field `biz`) — cube `legal`:
- [x] lg-ediscovery — eDiscovery / Litigation Support Manager — 2026-11-21 (built — see Done)

Engineering & Construction (field `eng`) — cube `en-spec`:
- [x] en-water — Water / Wastewater Engineer — 2026-11-28 (built — distinct from `en-env`: drinking-water and wastewater treatment trains, activated sludge, nutrient removal, hydraulics/pumps, Clean Water Act/NPDES vs Safe Drinking Water Act, design flows, distribution/collection — see Done)
- [x] en-transport — Transportation / Traffic Engineer — 2026-11-21 (built — see Done)

Business & Operations (field `biz`) — cube `consult`:
- [ ] biz-bizops — Business Operations (BizOps) Manager (cross-functional ops, metrics, process, planning) — verify vs `cs-ops`

### Fresh batch (added 2026-11-25) — in-demand real titles, good salaries across varied verticals; run the catalog/src novelty check and skip any semantic duplicate before building

Healthcare & Allied Health (field `health`) — cubes `hcare` / `health-clin`:
- [x] hc-phleb — Phlebotomist — 2026-11-26 (built — see Done)
- [x] hc-ma — Medical Assistant — 2026-11-27 (built — distinct from `hc-practice-mgr`: rooming, vitals, injections, EKG, CLIA-waived tests, phlebotomy, scope of practice — see Done)
- [x] hc-spd — Sterile Processing Technician — 2026-11-28 (built — distinct from `hc-surgtech` in-OR role: decontamination, one-directional flow, sterilization methods/monitoring (BI/CI/Bowie-Dick), IFU, Spaulding, tray assembly, tracking/recall — see Done)
- [x] hc-radther — Radiation Therapist — 2026-11-27 (built — distinct from `hc-radtech` diagnostic imaging: oncology linac delivery, IGRT, IMRT/VMAT, fractionation, ALARA — see Done)
- [x] hc-nucmed — Nuclear Medicine Technologist — 2026-11-26 (built — see Done)

Technology & Product (field `tech`) — cubes `prod` / `swe` / `cloud` / `data`:
- [ ] tc-solarch — Solutions Architect (pre-sales/delivery cloud architecture, requirements, design, trade-offs) — verify vs `cl-arch`/`inf-ea`/`sm-se`
- [x] tc-observ — Observability / Monitoring Engineer — 2026-11-28 (built — distinct from `cl-sre`: three pillars (metrics/logs/traces), monitoring vs observability, SLOs/error budgets, RED/USE/golden signals, OpenTelemetry, distributed tracing, cardinality/cost, alert fatigue — see Done)
- [x] da-mlops — MLOps Engineer — 2026-11-26 (built — distinct from `da-ml`: deployment/serving, feature stores, CI/CD for ML, registry, drift monitoring, reproducibility, cost — see Done)

Finance & Business (field `fin` / `biz`) — cubes `accops` / `consult`:
- [ ] fa-grant — Grant / Fund Accountant (restricted funds, nonprofit/government, compliance, reporting) — verify vs `fs-fund`
- [x] biz-tprisk — Third-Party / Vendor Risk Manager — 2026-11-26 (built — see Done)

Sales & Marketing (field `sales`) — cube `sm-spec`:
- [ ] sm-cro — Conversion Rate Optimization Specialist (A/B testing, landing pages, funnel analytics, UX) — verify vs `sm-growth`/`sm-ecommerce`
- [x] sm-community — Community Manager — 2026-11-26 (built — see Done)
- [ ] sm-affiliate — Affiliate / Partner Marketing Manager (programs, networks, payouts, fraud) — verify vs `sm-partner`
- [x] sm-cx — Customer Experience (CX) Manager — 2026-11-27 (built — journey mapping, VoC, NPS/CSAT/CES, cross-functional influence, omnichannel, CX ROI — see Done)

Legal (field `biz`) — cube `legal`:
- [x] lg-trademark — Trademark Attorney / Specialist — 2026-11-27 (built — distinct from `lg-patent`: distinctiveness, clearance, prosecution, oppositions, enforcement, licensing, international — see Done)
- [x] lg-employment — Labor & Employment Attorney — 2026-11-27 (built — distinct from `lg-litig`: at-will, discrimination, FLSA, FMLA/ADA, retaliation, NLRA, investigations, RIFs — see Done)

Engineering & Construction (field `eng`) — cube `en-spec` / `engcore`:
- [x] en-packaging — Packaging Engineer — 2026-11-26 (built — see Done)
- [ ] en-reliability — Reliability / Maintenance Engineer (RCM, FMEA, uptime, predictive maintenance) — verify vs `en-ind`

Skilled Trades & Field Services (field `trades`) — cube `trades-core`:
- [x] tr-heavyequip — Heavy Equipment Operator — 2026-11-27 (built — distinct from `tr-crane`: excavators/loaders/dozers/graders, grade and GPS control, trenching/cave-in safety, utility strikes — see Done)
- [x] tr-sheetmetal — Sheet Metal Worker — 2026-11-28 (built — fabrication and layout/pattern development, HVAC ductwork, SMACNA, seams/connections, materials and gauge, installation and sealing, blueprints, safety — see Done)

### From contacts (added 2026-11-06) — verified NOT in catalog; build first

(All contact-added roles built — see Done.)

### Fresh batch (added 2026-10-31) — verified NOT in catalog; prefer these

Healthcare & Life Sciences (field `health`) — cube `health-clin` "Clinical & Allied Health":
(All fresh-batch clinical roles built — see Done.)

Skilled Trades & Field Services (field `trades`) — cube `trades-core` "Skilled Trades":
(All fresh-batch trades roles built — see Done.)

Engineering & Construction (field `eng`) — cube `engcore` "Engineering & Construction":
(All fresh-batch engineering roles built — see Done.)

Government & Public Sector (field `gov`) — cube `gov-core` "Public Sector":
(All fresh-batch government roles built — see Done.)

Media, Creative & Communications (field `media`) — cube `media-core` "Creative & Comms":
(All fresh-batch media roles built — see Done.)

Hospitality, Retail & Real Estate (field `hosp`) — cube `hosp-core` "Hospitality & Retail":
(All fresh-batch hospitality roles built — see Done.)

Transportation, Logistics & Aviation (field `trans`) — cube `trans-core` "Transportation & Aviation":
(All fresh-batch transportation roles built — see Done.)

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
- [x] tc-tech-support — IT Support / Help Desk Technician (built 2026-11-06; placed in existing `infra` cube rather than a one-role `tech-more` cube)
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
- [x] en-biomed — Biomedical Engineer — 2026-11-02
- [x] gv-epi — Epidemiologist — 2026-11-02
- [x] md-creativedir — Creative Director — 2026-11-02
- [x] tr-wind — Wind Turbine Technician — 2026-11-02
- [x] hs-casino — Casino / Gaming Operations Manager — 2026-11-02
- [x] tl-marineeng — Marine Engineer / Ship's Engineer — 2026-11-02
- [x] gv-fire — Firefighter / Fire Captain — 2026-11-03
- [x] gv-revenue — Tax Examiner / Revenue Agent — 2026-11-03
- [x] md-uxr — UX Researcher — 2026-11-03
- [x] hc-pa — Physician Assistant — 2026-11-03
- [x] hc-ot — Occupational Therapist — 2026-11-03
- [x] hc-rt — Respiratory Therapist — 2026-11-03
- [x] hc-slp — Speech-Language Pathologist — 2026-11-05
- [x] hc-sono — Diagnostic Medical Sonographer — 2026-11-05
- [x] hc-crna — Nurse Anesthetist (CRNA) — 2026-11-05
- [x] tr-solar — Solar PV Installer — 2026-11-05
- [x] tr-ironworker — Ironworker — 2026-11-05
- [x] tr-instrument — Instrumentation & Controls Technician — 2026-11-05
- [x] bk-ib — Investment Banking Analyst / Associate — 2026-11-06
- [x] sm-am — Account Manager / Key Account Manager — 2026-11-06
- [x] cs-cos — Chief of Staff — 2026-11-06
- [x] lg-litig — Litigation Attorney / Trial Lawyer — 2026-11-06
- [x] en-petro — Petroleum Engineer — 2026-11-06
- [x] en-robotics — Robotics Engineer — 2026-11-06
- [x] inf-ea — Enterprise Architect — 2026-11-06
- [x] gv-evidence — Property & Evidence Technician — 2026-11-06
- [x] eng-svp — SVP / EVP of Software Engineering — 2026-11-06
- [x] hw-controls — Control Systems Engineer — 2026-11-06
- [x] hw-mech — Mechatronics Engineer — 2026-11-06
- [x] hw-rf — RF / Wireless Engineer — 2026-11-06
- [x] hc-claims — Medical Claims Examiner / Health Claims Analyst — 2026-11-06
- [x] tc-tech-support — IT Support / Help Desk Technician — 2026-11-06 (placed in `infra` cube)
- [x] hc-dh — Dental Hygienist — 2026-11-07 (placed in `health-clin` cube)
- [x] hc-rd — Registered Dietitian / Nutritionist — 2026-11-07 (placed in `health-clin` cube)
- [x] fs-quant — Quantitative Analyst (Quant) — 2026-11-07 (placed in `finspec` cube)
- [x] fa-forensic — Forensic Accountant — 2026-11-07 (placed in `audit` cube)
- [x] lg-patent — Patent Attorney / Patent Agent — 2026-11-07 (placed in `legal` cube)
- [x] sec-appsec — Application Security Engineer — 2026-11-07 (placed in `sec` cube)
- [x] hc-surgtech — Surgical Technologist — 2026-11-08 (placed in `health-clin` cube)
- [x] fs-pe — Private Equity Associate — 2026-11-08 (placed in `finspec` cube)
- [x] fs-fund — Fund Accountant — 2026-11-08 (placed in `finspec` cube)
- [x] lg-immig — Immigration Attorney — 2026-11-08 (placed in `legal` cube)
- [x] sec-ir — Incident Response / Digital Forensics Analyst — 2026-11-08 (placed in `sec` cube)
- [x] biz-coo — Chief Operating Officer (COO) — 2026-11-08 (placed in `consult` cube)
- [x] hc-paramedic — Paramedic / EMT — 2026-11-11 (placed in `health-clin` cube)
- [x] hc-pharmtech — Pharmacy Technician — 2026-11-11 (placed in `health-clin` cube)
- [x] hc-genetic — Genetic Counselor — 2026-11-11 (placed in `health-clin` cube)
- [x] hc-dentist — Dentist (General) — 2026-11-11 (placed in `health-clin` cube)
- [x] hc-optometrist — Optometrist — 2026-11-11 (placed in `health-clin` cube)
- [x] hc-vet — Veterinarian — 2026-11-11 (placed in `health-clin` cube)
- [x] sm-mktops — Marketing Operations Manager — 2026-11-17 (placed in `sm-spec` cube)
- [x] sm-pricing — Pricing Analyst / Manager — 2026-11-17 (placed in `sm-spec` cube)
- [x] hc-audiologist — Audiologist — 2026-11-17 (placed in `health-clin` cube)
- [x] hc-podiatrist — Podiatrist (DPM) — 2026-11-17 (placed in `health-clin` cube)
- [x] hc-midwife — Certified Nurse Midwife — 2026-11-17 (placed in `health-clin` cube)
- [x] hc-perfusion — Perfusionist — 2026-11-17 (placed in `health-clin` cube)
- [x] en-structural — Structural Engineer — 2026-11-18 (placed in `engcore` cube)
- [x] en-geotech — Geotechnical Engineer — 2026-11-18 (placed in `engcore` cube)
- [x] en-fire — Fire Protection Engineer — 2026-11-18 (placed in `engcore` cube)
- [x] en-mep — MEP / Building Systems Engineer — 2026-11-18 (placed in `engcore` cube)
- [x] tr-boilermaker — Boilermaker — 2026-11-18 (placed in `trades-core` cube)
- [x] tr-crane — Crane Operator — 2026-11-18 (placed in `trades-core` cube)
- [x] biz-esg — ESG / Sustainability Manager — 2026-11-19 (placed in `consult` cube)
- [x] fin-reanalyst — Real Estate / Investment Analyst — 2026-11-19 (placed in `finspec` cube)
- [x] sm-growth — Growth Marketing Manager — 2026-11-19 (placed in `sm-spec` cube)
- [x] sm-ecommerce — E-commerce Manager — 2026-11-19 (placed in `sm-spec` cube)
- [x] md-motion — Motion Designer / Animator — 2026-11-19 (placed in `media-core` cube)
- [x] hs-merchandiser — Retail Buyer / Merchandiser — 2026-11-19 (placed in `hosp-core` cube)
- [x] tc-devrel — Developer Advocate / DevRel — 2026-11-21 (placed in `swe` cube)
- [x] hc-casemgr — RN Case Manager / Utilization Review Nurse — 2026-11-21 (placed in `hcare` cube)
- [x] sm-abm — Account-Based Marketing (ABM) Manager — 2026-11-21 (placed in `sm-spec` cube)
- [x] hr-peopleanalytics — People Analytics Manager — 2026-11-21 (placed in `hr-ops` cube)
- [x] lg-ediscovery — eDiscovery / Litigation Support Manager — 2026-11-21 (placed in `legal` cube)
- [x] en-transport — Transportation / Traffic Engineer — 2026-11-21 (placed in `en-spec` cube)
- [x] sm-partner — Channel / Partnerships Manager — 2026-11-23 (placed in `sm-spec` cube)
- [x] sm-lifecycle — Lifecycle / Retention Marketing Manager — 2026-11-23 (placed in `sm-spec` cube)
- [x] ai-pm — AI Product Manager — 2026-11-23 (placed in `prod` cube)
- [x] hc-cno — Chief Nursing Officer — 2026-11-23 (placed in `hcare` cube)
- [x] gv-parole — Probation / Parole Officer — 2026-11-23 (placed in `gov-core` cube)
- [x] hr-od — Organizational Development Consultant — 2026-11-23 (placed in `hr-ops` cube)
- [x] pd-growthpm — Growth Product Manager — 2026-11-25 (placed in `prod` cube)
- [x] pd-datapm — Data Product Manager — 2026-11-25 (placed in `prod` cube)
- [x] hc-infprev — Infection Preventionist — 2026-11-25 (placed in `hcare` cube)
- [x] hc-cdi — Clinical Documentation Integrity Specialist — 2026-11-25 (placed in `health-clin` cube)
- [x] fa-secrep — SEC Reporting / Technical Accounting Manager — 2026-11-25 (placed in `accops` cube)
- [x] sm-fieldmktg — Field & Events Marketing Manager — 2026-11-25 (placed in `sm-spec` cube)
- [x] hc-phleb — Phlebotomist — 2026-11-26 (placed in `health-clin` cube)
- [x] hc-nucmed — Nuclear Medicine Technologist — 2026-11-26 (placed in `health-clin` cube)
- [x] da-mlops — MLOps Engineer — 2026-11-26 (placed in `data` cube)
- [x] biz-tprisk — Third-Party / Vendor Risk Manager — 2026-11-26 (placed in `consult` cube)
- [x] sm-community — Community Manager — 2026-11-26 (placed in `sm-spec` cube)
- [x] en-packaging — Packaging Engineer — 2026-11-26 (placed in `en-spec` cube)
- [x] hc-ma — Medical Assistant — 2026-11-27 (placed in `health-clin` cube)
- [x] hc-radther — Radiation Therapist — 2026-11-27 (placed in `health-clin` cube)
- [x] lg-trademark — Trademark Attorney / Specialist — 2026-11-27 (placed in `legal` cube)
- [x] lg-employment — Labor & Employment Attorney — 2026-11-27 (placed in `legal` cube)
- [x] tr-heavyequip — Heavy Equipment Operator — 2026-11-27 (placed in `trades-core` cube)
- [x] sm-cx — Customer Experience (CX) Manager — 2026-11-27 (placed in `sm-spec` cube)
- [x] hc-spd — Sterile Processing Technician — 2026-11-28 (placed in `health-clin` cube)
- [x] tr-sheetmetal — Sheet Metal Worker — 2026-11-28 (placed in `trades-core` cube)
- [x] bk-cre — Commercial Real Estate Lender / CRE Credit Analyst — 2026-11-28 (placed in `bk-spec` cube)
- [x] en-water — Water / Wastewater Engineer — 2026-11-28 (placed in `en-spec` cube)
- [x] sm-csops — Customer Success Operations Manager — 2026-11-28 (placed in `sm-spec` cube)
- [x] tc-observ — Observability / Monitoring Engineer — 2026-11-28 (placed in `cloud` cube)
