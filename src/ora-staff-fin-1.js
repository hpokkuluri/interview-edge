// Staff, Oracle Applications (15–20 yrs) — Finance. Principal-level individual contributor.
// Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-staff-fin'] = (QB['ora-staff-fin'] || []).concat([
['Role', 'How is a Staff Oracle Applications engineer different from a Solution Architect?',
`- **Scope**: the whole finance platform across programs and years, not one project.
- **Influence without authority**: sets standards that many teams follow; resolves cross-team technical disputes.
- **Hardest problems**: performance, data integrity, complex accounting, failed integrations, audit findings.
- **Technical strategy**: platform roadmap, retirement of legacy, adoption of new capabilities (AI, Redwood, FDI).
- **Talent multiplier**: grows architects and leads; builds the Center of Excellence.
- **Executive advisor** on finance technology risk and investments.

Still deeply hands-on — can read a BIP SQL, an SLA rule, an OIC flow and an FBDI log.`, 'B'],

['Strategy', 'What would your first 90 days look like as Staff, Oracle Applications (Finance)?',
`## Days 1–30: Listen and learn
- Meet finance leaders, IT leaders, support teams, auditors.
- Review the landscape: modules, extensions, integrations, incidents, audit findings, roadmap, spend.
- Shadow a month-end close.

## Days 31–60: Diagnose
- Top 5 risks and opportunities with evidence (e.g. close delays from accounting errors, fragile integrations, SoD gaps).
- Quick wins identified.

## Days 61–90: Act
- Deliver 2–3 quick wins.
- Propose standards (design authority, extension policy) and a 12–18-month technical roadmap.
- Agree on success metrics with the leadership.`, 'B'],

['Strategy', 'How do you define a multi-year finance platform strategy?',
`- **Business drivers**: growth, M&A, shared services, close speed, controls, cost.
- **Target state**: Fusion ERP core + EPM + FDI analytics + automation (AI agents) + integration platform, minimal custom code.
- **Principles**: standard first, event-driven integrations, single source of truth per data domain, security by design.
- **Roadmap** in waves with business value and dependencies.
- **Funding model** and capacity (run vs change).
- **Metrics**: close days, automation rates, incidents, technical debt.
- Review yearly; adapt to Oracle's roadmap.`, 'D'],

['Problem Solving', 'Month-end: GL and subledger balances don\'t reconcile for AP in one ledger, and no one knows why. Walk me through it.',
`- **Scope** the difference: by period, BU, account, currency; when did it start?
- **Payables to Ledger Reconciliation** report: identify categories — unaccounted, not transferred, not posted, manual journals, accounted in a different period.
- **SLA analysis**: journals with errors, entries posted to non-control accounts, changes in accounting rules mid-period.
- **Data checks**: transactions with accounting date in closed periods, sweep processes, canceled invoices partially accounted.
- **Recent changes**: config packages migrated, quarterly update, new integration.
- **Fix** root cause + **corrective entries** with audit trail; add **controls** (third-party control accounts, daily recon report).
- Raise an **SR** with evidence if a product bug is suspected.`, 'D'],

['Problem Solving', 'An integration created 5,000 duplicate AP invoices overnight. What do you do?',
`## Contain
- **Stop** the integration and the next **payment run** (or exclude those invoices — place on hold).
- Communicate to AP, treasury and leadership.

## Assess
- Identify duplicates (batch IDs, timestamps, source keys); confirm none were paid.

## Remediate
- **Cancel** duplicates (bulk via REST or mass cancel), keeping audit trail; reverse accounting if accounted.
- Reconcile to source.

## Root cause and prevent
- Usually **non-idempotent retries** after a timeout. Add **idempotency keys** (source invoice ID check before create), duplicate invoice validation, monitoring alerts on volume anomalies.
- Post-incident review with actions and owners.`, 'D'],

['Problem Solving', 'Performance of OTBI and BIP reports is degrading across the finance user base. How do you approach it?',
`- **Measure**: which reports, when, how long, how many users; the Oracle diagnostics.
- **Patterns**: unfiltered OTBI analyses (no date prompts), cross-subject-area queries, BIP data models on base tables without indexes, reports scheduled at peak times.
- **Fix**: required prompts, governed shared analyses, rewrite heavy BIP SQL against proper views, move analytics workloads to **FDI/BICC** data warehouse, schedule bursts off-peak.
- **Governance**: report certification process, decommission unused reports.
- Engage Oracle if platform-side.`, 'D'],

['Accounting', 'Explain how you would design accounting for a complex revenue arrangement with variable consideration.',
`- **ASC 606 / IFRS 15**: estimate variable consideration (rebates, usage, penalties) using expected value or most likely amount; **constrain** to avoid significant reversal.
- In Oracle: **Revenue Management** for allocation and recognition; variable consideration via **estimates** (adjustments to transaction price) and true-ups as actuals arrive.
- **Rebates/chargebacks**: channel revenue management or accruals via SLA/GL.
- **Accounting**: contract liabilities/assets, revenue, accrued rebates.
- **Controls**: estimates reviewed quarterly with documented methodology.
- Reporting for disclosures (RPO, disaggregation).`, 'D'],

['Accounting', 'How do you handle Pillar Two / global minimum tax data requirements in the ERP landscape?',
`- Pillar Two (15% global minimum tax) needs **jurisdictional data**: GloBE income, covered taxes, deferred taxes, by constituent entity.
- **ERP role**: clean legal entity structure, entity-level trial balances, mapping of accounts to GloBE adjustments, intercompany detail.
- Calculation typically in **Tax Reporting (TRCS)** or specialized tax tools fed from GL/FCCS.
- Architect **data lineage** and controls: tax data is audited too.
- Partner early with the tax department; changes to COA or entity mapping may be needed.`, 'D'],

['Governance', 'How do you set up a Center of Excellence (CoE) for Oracle Finance?',
`- **Mission**: maximize value from the platform; keep it stable, secure and current.
- **Roles**: platform owner, solution architects, functional leads by process, integration and reporting engineers, release manager, data steward.
- **Services**: design authority, release management (quarterly updates), demand intake and prioritization, standards and templates, training and knowledge base, vendor management with Oracle.
- **Metrics**: incidents, cycle time for enhancements, adoption of new features, user satisfaction.
- **Operating model**: CoE with business process owners; partners for surge capacity.`, 'D'],

['Governance', 'What standards would you set for extensions, integrations and reports?',
`- **Extension policy**: standard first; justification and design review for any extension; supported APIs only; code in source control; automated tests.
- **Integrations**: one platform, naming, error handling and monitoring patterns, idempotency, security (OAuth, least privilege).
- **Reports**: OTBI before BIP; certified vs personal reports; performance guidelines; owners and review dates.
- **Documentation**: design docs and runbooks mandatory.
- **Lifecycle**: yearly review to retire unused objects.`, 'D'],

['Data Integrity', 'How do you ensure data integrity across Fusion, EPM and downstream systems?',
`- **Single source of truth** per data domain; documented lineage.
- **Automated reconciliations**: GL vs FCCS, GL vs FDI, subledgers vs GL, integrations source vs target.
- **Controls in pipelines**: control totals, schema validation, idempotency.
- **Change management**: COA and hierarchy changes propagated with checks (EPM metadata sync).
- **Monitoring and alerts** with owners.`, 'D'],

['Oracle Relationship', 'How do you work with Oracle (support, product management) to resolve platform issues?',
`- **Quality SRs**: clear problem statement, steps, logs, business impact, environment; severity matched to impact.
- **Escalations** through the account team and support escalation process when impact is high.
- **Customer Connect** ideas and **customer advisory boards** to influence the roadmap.
- **Early adopter** programs for features you need.
- Track SRs and patches; maintain workarounds.`, 'B'],

['Strategy', 'How do you decide whether to adopt a new Oracle feature (e.g. an AI agent) in production?',
`- **Value**: problem it solves, measurable benefit.
- **Readiness**: maturity of the feature, known issues, roadmap.
- **Impact**: processes, controls, security, training, data.
- **Pilot** with a defined scope and success metrics; compare against baseline.
- **Controls** sign-off (audit, risk) for anything touching financial postings.
- **Rollout** plan with change management, then measure.`, 'B'],

['M&A', 'Design an M&A integration playbook for the finance platform.',
`- **Pre-close**: due diligence on systems, data, controls; Day-1 requirements (reporting, cash, payroll).
- **Day 1**: TB mapping to FCCS; bank access; minimal changes.
- **Day 1–100**: decision on target state (migrate to Fusion vs keep TSA); controls alignment; SOX scoping.
- **Migration**: template-based onboarding (entities, ledgers, BUs, security), data migration kit, integrations kit.
- **Hypercare**, close integration, synergy tracking.
- **Reusable assets**: checklists, scripts, data templates, training.`, 'D'],

['Controls', 'An audit finding says SoD conflicts exist for 40 users in Payables. How do you remediate?',
`- **Validate**: run SoD analysis (AAC/GRC) and confirm conflicts (e.g. supplier maintenance + invoice entry + payment).
- **Immediate**: remove unnecessary roles; for necessary exceptions, add **mitigating controls** (e.g. review reports of supplier changes paid in the same week).
- **Root cause**: role design (overloaded custom roles), provisioning process without preventive checks.
- **Redesign** roles to separate duties; implement **preventive SoD checks** at provisioning.
- **Evidence** for auditors; quarterly access reviews.`, 'D'],

['Architecture', 'How do you approach a request to run Fusion and a second ERP (e.g. for a large acquisition) long-term?',
`- Understand why: cost of migration, unique business model, divestiture plans.
- **Two-ERP architecture**: consolidation and reporting via FCCS/FDI; master data alignment (customers, suppliers, items); intercompany integration; shared controls framework.
- **Costs**: integration, duplicate skills, licenses, audit complexity.
- Define **exit criteria** and revisit annually.
- Make the case with total cost of ownership over 5 years.`, 'D'],

['Leadership', 'How do you influence decisions when you don\'t own the budget or the team?',
`- **Credibility** from solving real problems and being right with data.
- **Relationships** with business owners and delivery leaders.
- **Clear written proposals** (one-pagers, ADRs) with options and impact.
- **Find allies** (audit, security, finance leaders) who share the goal.
- **Pilot** to prove value before asking for full commitment.
- Accept decisions gracefully and keep a record of risks.`, 'B'],

['Leadership', 'How do you develop architects and leads in your organization?',
`- **Design reviews** as coaching sessions.
- **Stretch assignments** with support.
- **Communities of practice** (monthly sessions, brown bags).
- **Career paths** with clear expectations for each level.
- **Certifications and learning budgets**.
- **Feedback** frequently, specifically, with examples.

Measure: promotions, retention, quality of designs.`, 'B'],

['Problem Solving', 'A quarterly update broke a critical payment integration in production. Walk me through your response.',
`- **Contain**: switch to the **fallback** (manual file upload or previous format), ensure today's payments go out.
- **Diagnose**: compare payloads/formats before/after; check release notes for API/format changes.
- **Fix**: patch the integration/template; test in test pod; deploy.
- **Oracle**: SR if it's a regression; request patch.
- **Prevention**: add the integration to automated regression with production-like data; subscribe to API change notices; earlier testing in the update window.
- **Post-incident review**.`, 'D'],

['Accounting', 'How would you design accounting for intercompany loans and interest across entities?',
`- **Treasury** owns loan agreements (in a TMS or Fusion with custom process).
- **Interest accruals** monthly by agreement (rates, day-count) → journals in both entities (lender interest income, borrower expense) with **intercompany segment**.
- **FX revaluation** of foreign-currency loans; consider **net investment** treatment where appropriate.
- **Withholding tax** on interest across borders.
- **Settlement** via netting or cash.
- **Reconciliation** and elimination in FCCS.
- Transfer pricing documentation (arm's-length rates).`, 'D'],

['Controls', 'How do you design journal entry controls for a large organization?',
`- **Approval rules** by amount, source, category, ledger.
- **Prevent self-approval**.
- **Restricted accounts** (cash, intercompany, control accounts) with extra approvals or blocked for manual entry.
- **Supporting documentation** attached.
- **Post-close review** of top-side and late journals.
- **Analytics**: unusual journals (weekend, round amounts, rare users, keywords) — AI anomaly detection.
- **Evidence** retained for audit.`, 'D'],

['Strategy', 'How would you evaluate Fusion Data Intelligence vs building your own finance data warehouse?',
`## FDI
- Prebuilt data pipelines, models and KPIs for Fusion; Oracle maintains them with releases; quick time to value; extensible (ADW, custom data).
- Licensing cost; some modeling constraints.

## Own warehouse
- Full flexibility, joins with all enterprise data; uses existing platform (Snowflake/Databricks).
- Must build and maintain Fusion extracts (BICC) and models; upgrade risk; longer time to value.

## Decision
- Often hybrid: FDI for Fusion-centric analytics; enterprise lake for cross-domain analytics fed from FDI/BICC.`, 'D'],

['Behavioral', 'Tell me about the hardest technical problem you solved in Oracle Finance.',
`Structure:
- **Problem**: specific, high stakes (e.g. close blocked, auditors waiting, millions misposted).
- **Complexity**: why it was hard (multiple systems, intermittent, product bug).
- **Approach**: hypotheses, data you gathered, tools used (SLA diagnostics, SQL, logs).
- **Resolution**: fix and controls added.
- **Impact**: quantified.
- **What it taught you** and how you shared it (runbook, training).

Tip: Show depth — interviewers at this level expect technical specifics.`, 'B'],

['Behavioral', 'Describe a time you changed the direction of a large program.',
`## Example (STAR)
- **Situation:** A program planned a big-bang Fusion rollout to 30 countries in 12 months.
- **Task:** As principal architect, I believed data readiness and localizations made it high-risk.
- **Action:** Built a risk model with data quality metrics and localization gaps; proposed a pilot + 3 waves; presented to the steering committee with costs and risk reduction.
- **Result:** The program re-planned; pilot surfaced issues that would have hit all countries; final go-lives were stable with no close delays.`, 'B']
]);
