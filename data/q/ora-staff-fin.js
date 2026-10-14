// ora-staff-fin — generated from src/ora-staff-fin-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-staff-fin'] = (QB['ora-staff-fin'] || []).concat([
['Problem Solving', 'Create Accounting is producing entries to the wrong cost center for a subset of invoices. How do you find the cause?',
`- Pick **sample transactions**: compare expected vs actual accounts.
- **View accounting** with the **account derivation trace**: which ADR fired, which source values were used.
- Check **ADR priority order** and conditions — a broader rule earlier may be catching these.
- Check **source values**: defaulting on invoice distributions (from PO, supplier, project), DFF values set by integrations.
- Check **mapping sets** for missing or wrong entries; recent changes to rules (activation dates).
- Fix rule/mapping, **re-account** drafts or create correcting entries for final ones; regression test.`, 'D'],

['Problem Solving', 'How do you diagnose intermittent failures in an FBDI-based integration?',
`- **Collect evidence**: job IDs, ESS logs, import reports, timestamps, file sizes.
- Patterns: failures at **peak times** (contention), with **large files**, specific **data** (special characters, encoding), or after **refreshes** (credentials, UCM accounts).
- Check **callback** handling and timeouts in OIC.
- Validate **file format** changes after quarterly updates (template columns).
- Implement **chunking**, retries with backoff, better logging, and alerting.
- If platform-side, SR with logs.`, 'D'],

['Architecture', 'What is your view on customizations vs extensions in SaaS, and where do you draw the line?',
`- **No customizations** of the SaaS core (not possible anyway); **extensions** only through supported APIs and tools.
- Extensions are justified when they create **business value** that standard features can't, and the **total cost** (build, test every quarter, support) is acceptable.
- Prefer **configuration**, then **low-code** (VBCS, OIC, AI Agent Studio), then **pro-code** on OCI.
- Every extension needs an **owner**, documentation, automated tests and a **retirement review** when Oracle releases equivalent features.`, 'B'],

['Strategy', 'How would you approach rationalizing 400 custom reports in Oracle Finance?',
`- **Inventory** with usage data (last run, users, frequency).
- **Classify**: unused → retire; duplicates → consolidate; replaceable by standard/FDI → migrate; critical → keep and certify.
- **Engage owners**: confirm business need; set a sunset date for retired ones.
- **Governance**: request process for new reports, certification, ownership, review cycle.
- Target: e.g. reduce by 50% in 6 months, freeing support capacity.`, 'D'],

['Controls', 'How do you make the finance platform audit-ready all year round?',
`- **Control matrix** mapped to configurations, reports and owners.
- **Evidence automation**: scheduled reports of configuration changes, user access, SoD, journal approvals stored centrally.
- **Change management** with tickets, approvals, testing evidence for every configuration change.
- **Key report validation** documented.
- **Quarterly self-assessments** and remediation tracking.
- **Relationship** with auditors: walk-throughs before fieldwork.`, 'D'],

['Accounting', 'How would you support IFRS 17 or similar complex accounting standards with Oracle?',
`- Calculations (CSM, risk adjustment, cohorts) usually in **actuarial/specialized engines**.
- **Fusion Accounting Hub** to turn calculation outputs into accounting under IFRS 17 and local GAAP (multiple methods/ledgers).
- **Data lineage** and reconciliation from policy systems → engine → FAH → GL.
- **Granular dimensions** (portfolio, cohort) via supporting references rather than COA segments.
- **Disclosure** reporting from a data warehouse.

Even outside insurance, the pattern applies to any complex standard: specialized calculation + FAH + GL.`, 'D'],

['Accounting', 'What is your approach to multi-ledger, multi-currency design for treasury-heavy companies?',
`- **Functional currency** per entity determined with accounting (ASC 830/IAS 21).
- **Reporting currencies** where daily group-currency balances are needed.
- **Revaluation** rules by account range (monetary items only), with gain/loss accounts by entity.
- **Hedge accounting** handled in treasury systems with journals to GL (cash flow hedge reserves in OCI).
- **Translation** in FCCS with CTA.
- Daily rates feed from a market data provider; controls on rates.`, 'D'],

['Risk', 'What are the biggest risks in a mature Oracle Finance platform and how do you manage them?',
`- **Quarterly change risk** → automated regression and release management.
- **Integration fragility** → monitoring, idempotency, modernization.
- **Key-person dependency** → documentation, cross-training.
- **Security drift** (role creep, SoD) → access reviews, preventive controls.
- **Data quality decay** (suppliers, customers) → governance.
- **Technical debt** → yearly rationalization.
- **Vendor/roadmap risk** (deprecations) → roadmap tracking.`, 'B'],

['Leadership', 'How do you handle disagreement with a VP who wants a quick fix you believe is risky?',
`- Understand the **business pressure** behind the request.
- Explain the **risk in business terms** (e.g. audit failure, payment errors) with evidence.
- Offer a **safer alternative** that meets the timeline (temporary manual control, phased fix).
- If they still choose the risky path: **document** the risk, get it accepted by the right owner, and put **monitoring** in place.
- Stay professional and supportive of the decision.`, 'B'],

['Leadership', 'How do you build trust with the CFO organization as a technical leader?',
`- Speak **finance language**: close, controls, cash, margins.
- **Deliver reliably** — small promises kept.
- **Transparency** on incidents and risks.
- Spend time **in their processes** (close war room, AP floor).
- Bring **ideas that improve their KPIs**, not just technology.
- Celebrate their wins.`, 'B'],

['Strategy', 'How do you measure the value of the finance platform?',
`- **Efficiency**: cost per invoice/journal/transaction, FTE capacity freed.
- **Speed**: days to close, cycle times.
- **Quality**: errors, adjustments, audit findings.
- **Cash**: DSO, DPO optimization, discounts captured.
- **Platform health**: incidents, availability, technical debt.
- **Adoption**: self-service reporting, automation rates.
- Report quarterly to finance and IT leadership.`, 'B'],

['Data Migration', 'How would you design a reusable data migration factory for multiple rollouts?',
`- **Standard templates** and mapping workbooks per object.
- **Staging database** with transformation and validation scripts (versioned).
- **Automated loads** via FBDI/REST and **automated reconciliation** reports.
- **Data quality dashboards** for business owners.
- **Runbooks** and timing data from previous rollouts.
- **Team** with clear roles (extract, transform, load, reconcile).
- Continuous improvement after each rollout.`, 'D'],

['Architecture', 'How would you design disaster recovery and business continuity for a SaaS finance platform?',
`- **Oracle's SaaS DR** covers the application; you own continuity for **integrations, extensions, banks and processes**.
- **Integration platform** HA/DR (OIC instances, OCI regions).
- **Payment continuity**: manual payment procedures with banks if Fusion is unavailable on a payment day.
- **Close continuity**: offline procedures and priorities.
- **Data backups** of extensions/configurations (configuration packages, source code).
- **Tested** BCP playbooks with finance.`, 'D'],

['Controls', 'How would you use continuous controls monitoring in Oracle?',
`- **Advanced Controls** (AAC/ATC) or GRC tools to monitor: SoD conflicts, sensitive access, configuration changes, transaction anomalies (duplicate suppliers, payments to new bank accounts, round-dollar journals).
- **Incidents** routed to control owners with SLAs.
- **Dashboards** for compliance.
- Reduces reliance on sample-based testing and catches issues early.`, 'D'],

['Strategy', 'How do you approach Oracle licensing and cost optimization?',
`- **Usage review**: active users vs licensed (hosted employees/records), module usage, environments.
- **Right-size** at renewal; remove unused modules or environments.
- **Negotiate** with roadmap needs (e.g. FDI, EPM) bundled.
- **Avoid shelfware**: adoption plans for purchased modules.
- **Cost of extensions/integrations** (OIC message packs, OCI consumption) monitored.
- Coordinate with procurement and finance.`, 'D'],

['Behavioral', 'How do you balance hands-on work with strategic responsibilities?',
`- Stay hands-on on the **hardest, highest-leverage** problems — not routine work.
- Time-box: e.g. 40% strategy/governance, 40% deep problem solving and design reviews, 20% mentoring.
- **Delegate** with coaching.
- Keep a small sandbox habit to stay current.
- Measure impact, not activity.`, 'B'],

['Behavioral', 'What would your peers say is your biggest strength and your biggest development area?',
`- Strength: be specific and back it with an example (e.g. "untangling complex accounting/integration problems under pressure — I led the fix when …").
- Development area: real but not disqualifying, with what you're doing about it (e.g. "I can go too deep into a problem myself; I now pair with a lead so they learn and I step back").
- Show self-awareness and growth.`, 'B'],

['Behavioral', 'Why a Staff IC role instead of a management path?',
`- You create the most value by **solving the hardest problems and setting technical direction**.
- You enjoy **multiplying others** through standards, reviews and mentoring — without managing performance reviews and budgets.
- You still lead — through influence.
- Examples of impact at org level (standards adopted, incidents eliminated, programs rescued).`, 'B'],

['Accounting', 'How do you approach a request to restate prior-period accounting in Oracle?',
`- Confirm the **accounting decision** (finance/audit) and periods affected.
- Options: **adjusting entries in the current period** (most common), or **reopening prior periods** (if allowed and not reported) with corrections.
- For subledger errors: correct the source if possible and re-account; otherwise manual journals with references.
- **Revaluation/translation** and consolidation reruns for affected periods.
- **Audit trail** and documentation; control to prevent recurrence.`, 'D'],

['Architecture', 'How do you decide what belongs in GL vs in subledgers vs in analytics?',
`- **GL**: summarized, auditable financial balances needed for statutory and management reporting.
- **Subledgers / Accounting Hub**: transaction detail with accounting, drill-down, third-party balances.
- **Analytics/data warehouse**: high-cardinality analysis (customer, product, SKU, channel profitability), non-financial data, history.
- Don't push operational dimensions into the COA; use supporting references and analytics.`, 'B'],

['Problem Solving', 'Users report that approvals randomly route to the wrong approver. How do you investigate?',
`- Collect examples: transaction, expected vs actual approver, time.
- Check **BPM rules** (priority, conditions), **approval groups**, **HR hierarchy data** (manager changes, inactive managers, position hierarchy).
- Check **delegations** and **vacation rules**.
- Look at **attributes used** (cost center, amount) on the transaction at submission.
- Recent **HCM data loads** often cause it.
- Fix data or rules; add **monitoring** for approval routing failures.`, 'D'],

['Strategy', 'How would you plan the adoption of Redwood UX across Finance?',
`- Track Oracle's **Redwood page roadmap** and **deprecation** of classic pages.
- **Pilot** with a user group; gather feedback.
- **Extensions/personalizations** on classic pages must be rebuilt (Visual Builder Studio).
- **Training** updates and quick reference guides.
- **Regression tests** updated for new UI.
- Phase by module; communicate dates early.`, 'D'],

['Governance', 'How do you prioritize a backlog of finance system enhancement requests?',
`- **Intake** with business case: value (time/cost/risk), users affected, regulatory need.
- **Scoring** model (value, effort, risk, strategic fit).
- **Governance board** with finance process owners decides quarterly.
- **Capacity split**: run vs change vs debt.
- Communicate decisions and timelines transparently.`, 'B'],

['Leadership', 'How do you lead a post-incident review without blame?',
`- Focus on **what happened and why**, not who.
- **Timeline** of events with facts.
- **Contributing factors**: process, tooling, monitoring, communication.
- **Actions** with owners and dates; track to completion.
- Share learnings broadly.
- Make it safe to report mistakes early.`, 'B'],

['Behavioral', 'Where do you see enterprise finance systems in five years, and how are you preparing?',
`- **Autonomous finance**: AI agents handling routine processing (invoices, reconciliations, collections) with humans managing exceptions and judgment.
- **Continuous close** and real-time reporting.
- **Unified data platforms** combining ERP, EPM and operational data.
- **Regulatory digitization** (e-invoicing, real-time tax reporting).
- Preparation: building data foundations, governance for AI, upskilling teams, piloting agents now.`, 'B']
]);

QB['ora-staff-fin'] = (QB['ora-staff-fin'] || []).concat([
['Architecture', 'How would you design the finance platform to support a shift to a global business services (GBS) model?',
`- **Service-provider BUs** for transaction processing (AP, AR, GL) serving all client BUs.
- **Role design** for GBS staff with cross-BU access and SoD.
- **Work queues** and SLAs (approvals, holds, collections) with dashboards.
- **Standard processes** and global template; local exceptions minimal.
- **Analytics** for productivity and quality (cost per transaction, touchless %).
- **Automation/AI agents** in GBS for high-volume work.
- **Language/time zone** coverage and knowledge management.`, 'D']
]);

// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio questions at principal level.
QB['ora-staff-fin'] = (QB['ora-staff-fin'] || []).concat([
['AI Agent Studio', 'How would you set up an enterprise operating model for AI agents on Oracle Fusion?',
`- **Intake and prioritization** of agent use cases with business owners (value, risk, feasibility).
- **Risk tiers**: informational agents (low), drafting/assisting (medium), agents that change records (high — human approval mandatory).
- **Standards**: instruction templates, tool usage rules, naming, evaluation-set requirements, monitoring thresholds.
- **Lifecycle**: build → evaluate → pilot → publish → monitor → re-evaluate on model/release changes.
- **Ownership**: each agent has a business owner and a technical owner.
- **Audit**: control documentation, traces retained, periodic review.`, 'D'],

['AI Agent Studio', 'How do you evaluate and monitor agent quality over time?',
`- **Evaluation sets** per agent: correctness, safety ("must refuse"), tone, tool-use correctness; run before each publish and after Oracle updates or LLM changes.
- **Monitoring dashboard**: sessions, latency, errors, token usage; alert on drift.
- **Tracing** to debug wrong answers (which tool returned what).
- **User feedback** loops.
- **Quarterly review** with owners; retire agents that don't deliver value.`, 'D'],

['AI Agent Studio', 'An agent gave a supplier the wrong payment date. How do you investigate?',
`- Pull the **trace** for that session: question, tools called, data returned, model output.
- Was the **data** wrong (payment schedule changed after), the **tool** wrong (filtered on the wrong field), or the **model** misread it?
- Fix accordingly: tool definition, instructions ("only quote dates from the scheduled payment record"), or add a **deep link** and caveat.
- Add the case to the **evaluation set**; re-run.
- Communicate with the supplier and AP.`, 'D'],

['AI Agent Studio', 'What is your view on letting agents post journals or release payments?',
`- Not autonomously in most organizations today. Agents can **prepare** (draft journals with support, recommend payment holds/releases), but posting and payment release stay with authorized humans via **approval nodes**.
- Revisit for low-risk, high-volume cases once accuracy is proven, controls are designed, and audit agrees (e.g. auto-clearing small reconciliation differences within policy).
- Document the decision in the control framework.`, 'D'],

['Redwood', 'How would you lead an enterprise-wide Redwood adoption program?',
`- **Roadmap** aligned with Oracle's classic retirement schedule; module waves.
- **Extension rationalization**: retire most personalizations; rebuild essentials in VBS with standards.
- **Regression automation** updated for Redwood.
- **Change management** at scale (role-based learning, super users).
- **Metrics**: adoption, ticket volumes, task times.
- **Engage Oracle** on gaps and bugs early.`, 'D'],

['Fusion Platform', 'How do you keep a Fusion Finance platform current with quarterly releases, Redwood and AI features?',
`- **Release governance**: assess every quarter (mandatory changes, Redwood pages, new AI features).
- **Opt-in decisions** with business owners; adoption roadmap.
- **Automated regression** (UI and API).
- **Sandbox** for evaluating new features and agents.
- **Communication** to users each release.
- Track value of adopted features.`, 'B'],

['Accounting', 'How would you design accounting controls around AI-assisted close tasks?',
`- AI prepares: **accrual proposals**, **reconciliation match suggestions**, **variance explanations**.
- Humans review/approve; postings go through normal **journal approval**.
- **Evidence**: agent outputs and traces attached to close tasks.
- **Thresholds**: materiality-based review levels.
- **Testing** of AI-assisted controls by internal audit.`, 'D'],

['Strategy', 'How do you build the business case for AI agents in Finance?',
`- **Baseline** volumes and effort (invoice exceptions, inquiries, reconciliations, collections emails).
- **Expected impact** from pilots (time per item, automation rate, error reduction).
- **Costs**: build/maintenance effort, premium LLM tokens, change management.
- **Risks and controls** cost.
- **Phased** value plan; measure actuals vs case.`, 'D'],

['Problem Solving', 'After a quarterly update, a Redwood page extension breaks month-end journal entry. What do you do?',
`- **Workaround**: users enter journals via **ADFdi spreadsheet** or (if still available) the classic page.
- **Diagnose** in test: VBS extension errors, changed components/events in the release.
- **Fix** the extension, test, publish; raise an **SR** if it's an Oracle regression.
- **Prevent**: add this flow to automated regression during the two-week test window; keep extensions on supported events and tokens.`, 'D'],

['Leadership', 'How do you build AI and Redwood skills across a Finance applications organization?',
`- **Skills matrix** and learning paths (AI Agent Studio, VBS, OIC, prompt/evaluation design).
- **Guilds** and internal demos.
- **Hands-on pilots** with real business problems.
- **Career paths** that reward these skills.
- External **certifications** and Oracle events.`, 'B']
]);
