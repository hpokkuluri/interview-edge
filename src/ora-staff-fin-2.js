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
