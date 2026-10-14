QB['ora-arch-fin'] = (QB['ora-arch-fin'] || []).concat([
['Chart of Accounts', 'A client wants to add a new segment to the COA two years after go-live. How do you respond?',
`- **Understand the need**: what reporting is missing? Often it can be met with **hierarchies**, **supporting references**, **DFFs**, projects, or EPM dimensions.
- If a segment is truly needed: in Fusion you can't simply add a segment to a used COA structure. Options: **new COA + new ledgers** with **COA mapping** and balance migration, or use an unused **future segment** if one was designed in.
- Impact: integrations, SLA rules, reports, FR, EPM, security, cross-validation rules, user training.
- Recommend a **business case** and a planned change at a fiscal year boundary.

Lesson for designs: always include a **future segment**.`, 'D'],

['Chart of Accounts', 'What makes a chart of accounts "future-proof"?',
`- Clean **segment purposes** (no overloaded segments).
- Room in value ranges; **future segment(s)** with a default value.
- **Hierarchies** for reporting instead of hard-coded rollups.
- **Intercompany segment** from the start.
- **Global consistency** with controlled local extensions.
- **Governance** for adding values (owners, approval, naming).
- Alignment with **EPM dimensions** and consolidation.`, 'B'],

['Subledger Accounting', 'How would you design SLA for complex revenue and cost accounting across multiple GAAPs?',
`- Inventory all **event classes** that need non-standard accounting.
- **Copy** seeded methods once per GAAP (e.g. US GAAP method, IFRS method), maximize **reuse** of rules (shared ADRs, mapping sets).
- **Secondary ledger** with the second method at subledger level.
- Use **custom sources** sparingly — prefer seeded sources and DFFs mapped via the source mapping.
- **Supporting references** for reconciliation (contract ID, product).
- Document each rule with business rationale; test with an accounting matrix.
- Governance: finance owns rules; IT owns deployment.`, 'D'],

['Intercompany', 'How would you design an end-to-end intercompany solution?',
`- **Types of flows**: goods (SFO), services/management fees (Fusion Intercompany), financing (loans — treasury), cost allocations (GL allocations with intercompany balancing).
- **Intercompany segment** in COA and **balancing rules** by legal entity pair.
- **Invoice vs journal-only** decision per country (tax and statutory need invoices in many countries).
- **Settlement/netting** process (monthly netting via treasury).
- **Reconciliation** tooling (Fusion IC reconciliation or ARCS transaction matching).
- **Elimination** in FCCS.
- **Transfer pricing** policy aligned with tax.`, 'D'],

['Period Close', 'How would you architect a "continuous close" for a large enterprise?',
`- **Event-driven accounting**: subledgers account and post continuously (scheduled hourly/daily).
- **Automated reconciliations** (ARCS transaction matching, bank reconciliations daily).
- **Automated accruals and allocations** with schedules.
- **Close task management** (FCCS/ARCS) with dependencies and dashboards.
- **Anomaly detection** (AI) on journals and balances.
- **Soft close** monthly, hard close quarterly where appropriate.
- KPIs and continuous improvement.`, 'D'],

['Data Migration', 'How do you architect data migration for a large Finance program?',
`- **Migration framework**: extract → stage (a migration database) → transform (mapping tables) → validate → load (FBDI/REST) → reconcile.
- **Automation** of loads and reconciliation scripts; repeatable runs.
- **Data quality** rules and dashboards; business owns cleansing.
- **Mocks** with timing for cutover planning; performance tuning of large loads.
- **Audit trail**: evidence of each reconciliation and sign-off.
- **Historical data** strategy: summary balances in Fusion, details in an archive/warehouse.`, 'D'],

['Data Architecture', 'How do you decide what historical data to bring into Fusion?',
`- **Regulatory/legal** retention needs (often satisfied by an archive, not the new ERP).
- **Business needs**: comparatives (prior-year balances), open items, asset history.
- **Typical**: GL balances 1–2 years by period (summary), open AP/AR, full asset records with accumulated depreciation, open POs.
- **Detailed history** → archive/data warehouse with search and reporting.
- Cost and complexity rise sharply with each year of detail — make it a business decision.`, 'B'],

['Integration', 'How do you handle error management and reprocessing for Finance integrations?',
`- **Categorize** errors: data (bad account), business (closed period), technical (timeouts).
- **Retries** for technical errors with backoff.
- **Business error queues** visible to finance users (not only IT) with clear messages and ownership.
- **Reprocessing** after correction without duplicates (idempotency keys).
- **Alerting** by severity; daily integration health report.
- **Reconciliation** between source and Fusion counts/totals.`, 'D'],

['Integration', 'What is the role of business events and callbacks in Fusion integration design?',
`- **Business events** (e.g. Invoice Validated, Journal Batch Approved, Supplier Created) are published by Fusion and consumed by OIC subscriptions — enabling **event-driven** flows without polling.
- **Callbacks** after bulk imports (ERP Integration Service) notify when an FBDI job completes, with status and logs, so the integration can continue or alert.
- Benefits: lower latency, less load, cleaner orchestration.
- Design for **ordering** and **duplicate events**.`, 'D'],

['Security', 'How do you handle sensitive data (bank accounts, tax IDs) in a Fusion design?',
`- **Masking**: bank account numbers masked in UI and reports for most roles.
- **Restricted roles** for viewing/changing sensitive data.
- **Data masking** in non-production environments after refreshes.
- **Encryption** in transit (TLS, PGP for files) and at rest (Oracle SaaS).
- **Audit** policies on changes.
- **GDPR**: personal data in supplier/customer/employee records — retention and right-to-erasure processes.`, 'D'],

['Controls', 'How do you design automated controls in Fusion to reduce SOX testing effort?',
`- **Configuration-based controls**: matching tolerances, approval rules, duplicate checks, cross-validation rules, third-party control accounts, period statuses.
- **Access controls**: SoD rules and role design.
- Automated controls are tested by **configuration review** once (benchmarking) instead of sample testing, if change management controls are strong.
- **Change management** evidence for configuration changes.
- **Continuous controls monitoring** (AAC/GRC) for transactions and configuration changes.

Result: fewer manual controls, faster audits.`, 'D'],

['Banking', 'How do you design payment controls to prevent fraud?',
`- **Segregation**: supplier bank maintenance ≠ invoice entry ≠ payment release.
- **Bank account change verification** with callback and approval.
- **Payment approval** for PPRs above thresholds (or all PPRs).
- **Positive pay** for checks; **payee name match** services.
- **File security**: encrypted, signed files; no manual file editing; transmission automated.
- **Monitoring**: new bank accounts paid for the first time, payments outside normal patterns.`, 'D'],

['Accounts Payable', 'How would you architect an AP automation program end to end?',
`- **Inbound channels**: e-invoicing (EDI, PEPPOL, supplier portal), IDR for PDFs, paper scanning only as last resort.
- **Validation**: PO matching, tolerances, duplicate detection, tax validation.
- **Approval**: rules-based with auto-approval for matched invoices.
- **AI agents** for exception handling (e.g. suggest resolution for holds).
- **Payments**: optimized timing (discounts vs cash), virtual card programs.
- **Analytics**: touchless rate, cycle time, cost per invoice.
- **Supplier enablement** program as part of the architecture.`, 'D'],

['Revenue', 'How would you architect revenue recognition for a company with products, services and subscriptions?',
`- **Order capture** in CPQ/OM, **subscriptions** in Fusion Subscription Management, **projects** in Project Billing.
- All feed **Revenue Management** as source documents → contracts and performance obligations.
- **SSP** governance (finance owns SSP tables, updated periodically).
- **Billing** in AR (AutoInvoice) independent of revenue timing.
- **Accounting**: contract assets/liabilities, revenue, deferred revenue reconciliation.
- **Disclosures** reporting (remaining performance obligations).`, 'D'],

['Fixed Assets', 'How would you architect asset accounting for a capital-intensive company with projects?',
`- **Capital projects** in Fusion Projects with capitalization rules (asset grouping, CIP).
- **Assets** module with **corporate and tax books**; IFRS book if needed.
- **Asset tracking** (physical) via Maintenance or third-party (tags, locations).
- **Lease accounting** for leased assets (ROU).
- **Impairment** and revaluation processes.
- **Integration** with maintenance (work orders) for component-level tracking if required.
- Close: depreciation runs, CIP aging review, reconciliation to GL.`, 'D'],

['Testing', 'How do you design test automation for an Oracle Cloud Finance landscape?',
`- **Scope**: top end-to-end flows (P2P, O2C, R2R), key reports, integrations.
- **Tools**: Oracle's or third-party (Opkey, Worksoft, Tricentis) with Redwood/ADF UI support; API-level tests for integrations.
- **Data strategy**: reusable test data that survives refreshes.
- **Run cadence**: every quarterly update, after configuration changes, before major releases.
- **Maintenance**: own the scripts like code; update when processes change.
- **Reporting**: pass/fail dashboards for go/no-go decisions.`, 'D'],

['Roadmap', 'How do you build a 3-year Finance systems roadmap?',
`- **Current state** assessment: systems, pain points, KPIs, technical debt.
- **Business strategy** inputs: growth, M&A, new markets, finance operating model (shared services, close speed).
- **Capabilities** prioritized by value and dependency (e.g. AP automation, continuous close, revenue automation, FDI analytics, AI agents).
- **Phasing** with quick wins in year 1.
- **Costs and benefits** per initiative.
- **Governance**: quarterly roadmap review with finance leadership.`, 'B'],

['Behavioral', 'Tell me about a time you had to say no to a senior executive.',
`## Example (STAR)
- **Situation:** A regional CFO wanted a custom invoice approval engine outside Fusion for their region.
- **Task:** As architect I had to protect the global template.
- **Action:** I listened to the real need (approvals by project manager), showed how Fusion approval rules could route by project manager via a project attribute, and estimated the custom engine's cost and upgrade risk.
- **Result:** They agreed to the standard approach; it went live with the region's rollout with no custom code.

Message: say "no" to the solution, "yes" to the need.`, 'B'],

['Behavioral', 'How do you stay current with Oracle Cloud changes?',
`- Read **quarterly release readiness** (What's New) for Financials, SCM, EPM, OIC.
- **Oracle Cloud Customer Connect**, Oracle blogs, product roadmaps.
- **Certifications** (e.g. Financials implementation professional, OCI AI/architect).
- Hands-on in a **sandbox** with new features (AI agents, Redwood pages).
- Peer networks and user groups (OAUG, Quest).

Tip: Name something new you've tried recently.`, 'B'],

['Reporting', 'How would you design Smart View and Essbase usage for a finance team?',
`- The **GL balances cube** (Essbase) is created per COA/calendar; updated on posting.
- **Smart View** ad-hoc queries and formatted Excel reports linked to live data.
- **Member names and aliases** from hierarchies — design trees for user-friendly reporting.
- **Performance**: avoid giant queries; use member selection, suppress missing.
- **Governance**: shared report templates library, training for power users.
- **Drill-down** to journals for audit trail.`, 'D'],

['Architecture', 'What are the most common reasons Oracle Finance implementations fail, and how do you prevent them?',
`- **Poor data quality** → early profiling, cleansing, multiple mocks.
- **Over-customization** → "standard first" principle, design authority.
- **Weak business ownership** → engaged process owners with decision rights.
- **Underestimated integrations** → integration inventory and early build.
- **Insufficient testing** → realistic SIT/UAT, parallel close.
- **Change management** neglected → role-based training, super users.
- **Unclear scope** → strong change control.

Tip: Give one example where you saw and fixed one of these.`, 'B'],

['Localization', 'How do you handle country localizations in a global Finance template?',
`- **Global template** for common processes; **localization layer** per country (tax, e-invoicing, statutory reports, bank formats, payment methods, legal numbering).
- Use **Oracle's localizations** where available; partners for gaps.
- **Country rollout checklist** with local finance, tax and legal.
- Keep local variants **documented and minimal**.
- Watch regulatory changes (e-invoicing mandates) and plan them into the roadmap.`, 'D'],

['Integration', 'How would you design supplier and customer master data management across systems?',
`- **System of record** per domain (e.g. Fusion for suppliers; CRM for customer prospects, Fusion for billing accounts).
- **Golden record** rules, duplicate checks, enrichment (D&B).
- **Sync patterns**: event-driven updates from the master to consumers; avoid bi-directional edits.
- **Governance**: data stewards, approval workflows (supplier onboarding), data quality KPIs.
- Consider **MDM tools** if many systems and complex hierarchies.`, 'D'],

['Architecture', 'What is your approach to reducing technical debt in an existing Oracle Finance landscape?',
`- **Inventory** customizations, extensions, reports and integrations with usage, cost and risk.
- **Retire** what isn't used; **replace** custom solutions with new standard features (check each release).
- **Modernize** fragile integrations (point-to-point → OIC with events).
- **Simplify** security roles and approval rules.
- **Fund** debt reduction in the roadmap (e.g. 20% capacity).
- Track metrics: number of custom objects, incidents caused by extensions.`, 'D'],

['Behavioral', 'How do you mentor lead consultants to think like architects?',
`- Ask them "what else does this affect?" on every design.
- Have them write **ADRs** for their decisions and review them together.
- Expose them to **NFRs**, integration and security discussions.
- Let them present designs to the design authority.
- Share reading (Oracle docs, architecture patterns) and post-mortems of past projects.`, 'B'],

['Architecture', 'How do you design for upgrade-safety on Oracle SaaS?',
`- Use only **supported extension points** (public REST APIs, BIP, VBCS, OIC, flexfields).
- No dependence on **undocumented tables** in BIP where views exist; avoid screen scraping.
- **Regression automation** for extensions and integrations.
- Track **deprecations** in release notes (e.g. classic UI pages replaced by Redwood).
- Keep personalizations minimal; document them.`, 'B'],

['Behavioral', 'Walk me through a solution you architected end to end.',
`Structure (3–4 minutes):
- **Business problem** and goals (e.g. 25 entities on 4 legacy systems, 12-day close).
- **Constraints**: timeline, budget, regulatory, integration landscape.
- **Solution**: enterprise structures, modules, EPM, integration platform, data strategy, security, reporting — with one simple diagram.
- **Key decisions and trade-offs** (2–3).
- **Delivery**: phases, your role, team.
- **Outcomes**: close days, cost per invoice, audit results.
- **Lessons**.

Practice drawing the diagram on a whiteboard.`, 'B']
]);
