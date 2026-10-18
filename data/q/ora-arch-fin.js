// ora-arch-fin — generated from src/ora-arch-fin-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Senior Solution Architect (10–15 yrs) — Finance. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-arch-fin'] = (QB['ora-arch-fin'] || []).concat([
['Architecture', 'What does a Senior Solution Architect own on an Oracle Finance program that a lead consultant doesn\'t?',
`- **End-to-end solution design** across modules, EPM, integrations, data, security and reporting — not just one workstream.
- **Architecture decisions** with documented trade-offs (ADRs) and their long-term cost.
- **Non-functional requirements**: performance, volumes, availability, security, auditability, upgradeability.
- **Integration and data architecture**: patterns, platforms (OIC, BICC, APIs), master data ownership.
- **Design authority**: reviewing workstream designs for consistency.
- **Roadmap fit**: how today's design supports future acquisitions, new countries, AI.
- **Executive communication**: explaining options and risk to CFO/CIO.`, 'B'],

['Architecture', 'How do you document and govern architecture decisions?',
`- **Architecture Decision Records (ADRs)**: context, options considered, decision, consequences, owner, date.
- A **design authority / architecture review board** that meets weekly; workstreams bring decisions that affect others.
- **Principles** agreed upfront (e.g. "adopt standard first", "one integration platform", "no direct database access", "finance owns master data X").
- **Traceability**: requirements → design → configuration → tests.
- Revisit decisions when assumptions change.`, 'B'],

['Enterprise Structures', 'Design the enterprise structure for a company with 40 legal entities in 15 countries, a US parent reporting in USD under US GAAP.',
`## Ledgers
- **Primary ledgers** per country/currency (local currency, local calendar if required), shared **global COA** where possible.
- **Reporting currency (USD)** for each non-USD primary ledger, or translation in consolidation — reporting currency if daily USD visibility is needed.
- **Secondary ledgers** only where local GAAP differs materially and is maintained in Oracle; otherwise local adjustments in a statutory tool.
- **Ledger sets** by region for period management.

## Legal entities and BUs
- Legal entities with balancing segment values; **BUs** by country or region; **shared services BUs** for AP/AR as service providers.

## Consolidation
- **FCCS** for group consolidation, eliminations, minority interests.

## Key trade-offs to explain
- Global COA vs local COA (secondary ledger with COA mapping), number of ledgers vs period-close effort, translation method.`, 'D'],

['Enterprise Structures', 'When would you put multiple legal entities in one ledger and when would you separate them?',
`**Same ledger** when entities share the 4 Cs (COA, calendar, currency, accounting method) — use **balancing segment values per legal entity**. Benefits: fewer ledgers to close, simpler intercompany, shared reporting.

**Separate ledgers** when any of the 4 Cs differ, or when:
- statutory reporting needs strict separation or local auditors require it;
- different close calendars/timelines;
- data security is easier at ledger level;
- planned divestiture (cleaner carve-out).

Trade-off: many entities per ledger need careful **intercompany balancing rules** and security by BSV.`, 'D'],

['Integration', 'How do you choose between REST APIs, FBDI, SOAP and business events for Finance integrations?',
`- **REST APIs** — real-time, low-to-medium volume, record-level (e.g. create supplier, check invoice status). Simple, but rate limits and payload size apply.
- **FBDI** — high-volume batch loads (journals, invoices, AutoInvoice). Asynchronous; use the ERP Integration Service (importBulkData) and callbacks.
- **SOAP services** — some objects only have SOAP; legacy integrations.
- **Business events** — outbound, event-driven (invoice approved, PO approved) for near real-time downstream updates.
- **BICC / BIP extracts** — outbound bulk data to a data lake or downstream system.

Rule: event-driven for real time, FBDI for bulk inbound, BICC for bulk outbound, REST for transactional lookups.`, 'D'],

['Integration', 'How would you design an integration architecture for Oracle Fusion with 50+ systems?',
`- **One integration platform** (OIC or enterprise iPaaS like MuleSoft) — avoid point-to-point.
- **Canonical patterns**: event-driven, scheduled batch, API-led (system/process/experience APIs).
- **Master data flows**: decide sources of truth (e.g. HCM for workers, Fusion for suppliers, CRM for customers) and sync patterns.
- **Error handling**: centralized logging, retries, dead-letter queues, alerting, reprocessing UI.
- **Security**: OAuth, least-privilege integration users, secrets in a vault.
- **Monitoring**: dashboards with SLAs per integration.
- **Versioning and testing**: CI/CD for integrations, regression tests on quarterly updates.
- **Inventory** of integrations with owners.`, 'D'],

['Integration', 'How do you design a high-volume journal integration from a banking or billing system?',
`- **Summarize** at source where possible (by account/day) — GL isn't a transaction store. Keep detail in a subledger or **Fusion Accounting Hub**.
- Use **FBDI journal import** with chunking (e.g. 100k lines per file), parallel imports by ledger.
- **Validate** COA combinations before sending; cross-reference tables for mapping.
- Idempotency: unique batch IDs to prevent double-loading.
- **Reconciliation**: control totals per batch; automated comparison source vs GL.
- Schedule around close; monitor import performance.

If detailed accounting rules are needed for a non-Oracle source → **Accounting Hub**.`, 'D'],

['Accounting Hub', 'What is Fusion Accounting Hub (FAH) and when would you use it?',
`FAH lets you create **subledger accounting from non-Oracle source systems** (banking, insurance policy admin, billing, loans) using the same **SLA rules engine**.
- Define a **subledger application**, **event model** (event classes/types), **sources** (transaction attributes) and **accounting rules**.
- Load transactions (FBDI/REST), run Create Accounting → journals to GL with drill-down to source attributes.
- Supports **multi-GAAP** (e.g. IFRS 17, US GAAP) through multiple accounting methods.

Use it when the source system can't produce good accounting itself, or rules must be controlled by finance in one place.`, 'D'],

['Data Architecture', 'How would you design analytics and data extraction from Fusion Financials?',
`- **Fusion Data Intelligence (FDI / formerly FAW)** — prebuilt warehouse with finance KPIs, ADW underneath, extendable with other data.
- **BICC** extracts (incremental) to object storage / data lake for enterprise data platforms (Snowflake, Databricks).
- **OTBI/BIP** for operational reporting in-app.
- **EPM** for planning and management reporting.
- Governance: data definitions (e.g. "spend"), reconciliation of warehouse to GL, security replication.

Avoid building heavy BIP extracts for analytics — they hit production and are hard to maintain.`, 'D'],

['Security', 'How do you architect security for a global Finance Cloud deployment?',
`- **Role design** based on job families; copy-and-trim seeded roles; minimize custom privileges.
- **Data security**: BU, ledger/data access sets, segment value security only where essential (performance and complexity).
- **SoD** ruleset (Advanced Access Controls or GRC tool), preventive checks at provisioning.
- **Provisioning** automated from HCM (role mapping rules) and IAM (SSO via SAML/OIDC, MFA).
- **Privileged access** (admins, implementers) time-bound and logged.
- **Audit**: audit policies on sensitive setups, user access reviews quarterly.
- **Integration users** with least privilege.`, 'D'],

['Environments', 'How do you plan the environment (pod) strategy for an Oracle Cloud program?',
`- Typical: **PROD**, **TEST/UAT**, **DEV/CRP**, sometimes extra for **data migration** or **training**.
- **P2T (production-to-test) and T2T refreshes** schedule — after go-live, refresh test from prod regularly for realistic testing.
- Configuration moves via **FSM configuration packages** or manual with checklists; extensions via proper deployment.
- **Quarterly update** timing: test pods get updates 2 weeks early.
- Data masking in non-prod for sensitive data.
- Keep an **environment calendar** to avoid conflicts between projects.`, 'B'],

['Extensions', 'What extension options exist for Oracle Fusion and how do you decide?',
`- **Configuration** first: flexfields (DFF/EFF), lookups, rules, approval workflows, page composer/personalization.
- **Visual Builder (VBCS) / Redwood extensions** — UI apps and pages on Fusion data via REST.
- **OIC** — integrations and process automation.
- **BIP/OTBI** — reports.
- **Application Composer** (where available), **groovy** in some areas.
- **OCI services** (Functions, APEX on ADB) for side applications.
- **AI Agent Studio** for agentic automation.

Decide by: business value, upgrade-safety (only supported APIs), skills to maintain it, security. Keep an extension inventory and review it yearly.`, 'D'],

['Migration', 'How would you architect a phased EBS-to-Fusion migration with coexistence?',
`- **Phasing options**: by **module** (Financials first, SCM later) or by **entity/region**.
- **Coexistence integrations**: e.g. EBS SCM → Fusion AP (receipts/POs for matching), EBS OM → Fusion AR, EBS inventory accounting → Fusion GL (journal summary).
- **Master data** single source during coexistence (supplier master in Fusion, synced to EBS).
- **Reporting** across both during transition (data warehouse).
- **Retire** coexistence integrations quickly — they're costly.
- Plan **historical data** access (archive in a reporting DB).`, 'D'],

['M&A', 'How would you integrate an acquired company into the Oracle Fusion Finance platform?',
`- **Day 1**: consolidate their trial balance into FCCS via mapping; no system change.
- **Assess** their processes, systems, COA, entities, contracts.
- **Template-based onboarding**: new legal entities, ledger (or BSVs), BUs from the global template; localizations.
- **Data migration**: open AP/AR, assets, balances at a month-end.
- **Integrations**: their banks, payroll, operational systems.
- **People and controls**: roles, SoD, SOX scoping.
- Make the platform **M&A-ready**: documented template, automation scripts, repeatable playbook — target e.g. 90 days to onboard.`, 'D'],

['M&A', 'How would you support a divestiture (carve-out) of a business unit in Oracle?',
`- Identify all data and setups belonging to the business: ledgers/BSVs, BUs, suppliers/customers, assets, open transactions, users.
- Options: **TSA** (transition service agreement) where the parent runs processes for the buyer for a time; **clone** of the environment for the buyer; **data extract** for the buyer's system.
- Restrict data access between parent and divested business (legal requirement).
- Plan cut-off dates for open items and intercompany settlement.
- Clean structures that make carve-outs easier: **separate ledgers/BSVs per entity** from the start.`, 'D'],

['Banking', 'Design the bank integration architecture for a multinational using Oracle Fusion.',
`- Options: **direct host-to-host** per bank, **SWIFT** (Alliance Lite2 / service bureau), or a **bank connectivity hub** (e.g. Kyriba, a bank-agnostic gateway).
- **Formats**: ISO 20022 (pain.001 payments, pain.002 status, camt.053/052 statements) to reduce bank-specific work.
- **Security**: PGP encryption/signing, SFTP keys, segregation of payment release.
- **Flows**: payment files from PPRs → hub → banks; acknowledgments and statements back into Cash Management.
- **Treasury** functions (in-house bank, netting) possibly in a TMS integrated with Fusion.
- **Monitoring** of file transmission and acknowledgments.`, 'D'],

['Tax', 'How would you architect indirect tax for a global Fusion implementation?',
`- **Fusion Tax** natively for VAT/GST countries (rules-based); **partner engine** (Vertex/Avalara/Sovos) for US sales/use tax and possibly global.
- **E-invoicing mandates** (Italy SDI, Mexico CFDI, India e-invoice, PEPPOL, upcoming EU ViDA) via Oracle localizations or partners.
- **Tax reporting** (VAT returns, SAF-T) from Fusion tax reporting ledger or partner.
- **Master data**: party tax profiles, registrations, product tax classification.
- Governance: tax team owns rules; changes through change control; regression tests for rate changes.`, 'D'],

['Non-Functional', 'What non-functional requirements matter for a Finance Cloud design and how do you address them?',
`- **Performance**: volumes (invoices/day, journal lines, AutoInvoice lines), batch windows, close-time processes. Test with production-like volumes.
- **Availability**: SaaS SLA; plan for outages of integrations, not the core app.
- **Security and compliance**: SOX, GDPR (data residency, personal data in supplier/customer records), PCI (no card data).
- **Auditability**: audit trails, logs retention.
- **Scalability**: new entities, acquisitions.
- **Maintainability**: standard features, documented extensions, regression automation.`, 'B'],

['Performance', 'A Create Accounting job runs for 6 hours at month end. How do you approach it?',
`- Check **volumes and run patterns**: is everything processed at month end? Move to **daily accounting**.
- **Parallelize** by ledger/application and use processing parameters appropriately.
- Review **SLA rules**: complex custom sources, heavy mapping sets, or many supporting references can slow processing.
- Check for **errors causing reprocessing**.
- Look at **concurrent jobs** competing (AutoInvoice, reports) and reschedule.
- Raise an **SR** with Oracle with diagnostics if performance is abnormal.
- Measure after each change.`, 'D'],

['Reporting', 'How do you architect management reporting vs statutory reporting?',
`- **Statutory/GAAP** reporting from GL (and FCCS for consolidated) — controlled, reconciled, audited.
- **Management reporting** often needs different hierarchies, allocations, and non-GL data (headcount, volumes) → **EPM (Planning, Profitability and Cost Management)** or FDI.
- **One COA with multiple hierarchies** (alternate trees) supports both.
- Keep **one source of truth** for actuals (GL) and reconcile any warehouse to it.
- Narrative Reporting for board/statutory packs.`, 'D'],

['EPM', 'How do Oracle EPM modules fit with Fusion Financials?',
`- **Planning (EPBCS)** — budgets and forecasts; budgets can be loaded to GL for budgetary control/reporting.
- **FCCS** — consolidation and close.
- **ARCS (Account Reconciliation)** — balance sheet reconciliations and transaction matching.
- **Narrative Reporting** — management/board reporting packages.
- **Tax Reporting (TRCS)** — income tax provision.
- **Profitability and Cost Management** — allocations and profitability.
- Integration via **Data Integration**: GL balances to EPM (and drill-back to Fusion).

Architect the dimensions (accounts, entities) consistently across GL and EPM.`, 'D'],

['AI', 'How would you architect AI agents in an Oracle Finance landscape responsibly?',
`- Use **Oracle AI Agent Studio** for agents that operate on Fusion data with Fusion security.
- **Use cases** with clear ROI: invoice exceptions, collections emails, reconciliation explanations, close insights.
- **Guardrails**: agents act within the user's or a service role's privileges; **human approval** for financial postings and payments.
- **Auditability**: log prompts, actions and decisions.
- **Data privacy**: no sensitive data to external models without approval.
- **Measure**: accuracy, time saved, exceptions.
- **Change management** for finance users.`, 'D'],

['Stakeholders', 'How do you present architecture options to a CFO and CIO?',
`- Start with the **business question** and decision needed.
- Two or three **options** with: cost (build and run), risk, time, business impact, future flexibility.
- A clear **recommendation** and why.
- Visual: one simple diagram, no jargon.
- What happens if we **don't decide** now.

Example: "Separate ledgers per country will add 2 hours to close but make local statutory reporting and divestitures easier — I recommend it for countries with different fiscal years only."`, 'B'],

['Behavioral', 'Describe an architecture decision you made that you later regretted. What did you learn?',
`## Example
- **Decision:** Allowed a custom BIP-based extract to feed a downstream data warehouse to save time.
- **What happened:** Volumes grew; the extract slowed production at peak times and broke after a quarterly update.
- **Fix:** Moved to **BICC incremental extracts** to object storage.
- **Learning:** Use the platform's intended pattern even if it takes longer up front; consider growth and upgrade impact in every decision.

Interviewers want honesty, ownership and a durable lesson.`, 'B']
]);

QB["ora-arch-fin"] = (QB["ora-arch-fin"] || []).concat([
["Chart of Accounts", "A client wants to add a new segment to the COA two years after go-live. How do you respond?", "- **Understand the need**: what reporting is missing? Often it can be met with **hierarchies**, **supporting references**, **DFFs**, projects, or EPM dimensions.\n- If a segment is truly needed: in Fusion you can't simply add a segment to a used COA structure. Options: **new COA + new ledgers** with **COA mapping** and balance migration, or use an unused **future segment** if one was designed in.\n- Impact: integrations, SLA rules, reports, FR, EPM, security, cross-validation rules, user training.\n- Recommend a **business case** and a planned change at a fiscal year boundary.\n\nLesson for designs: always include a **future segment**.", "D"],
["Chart of Accounts", "What makes a chart of accounts \"future-proof\"?", "- Clean **segment purposes** (no overloaded segments).\n- Room in value ranges; **future segment(s)** with a default value.\n- **Hierarchies** for reporting instead of hard-coded rollups.\n- **Intercompany segment** from the start.\n- **Global consistency** with controlled local extensions.\n- **Governance** for adding values (owners, approval, naming).\n- Alignment with **EPM dimensions** and consolidation.", "B"],
["Subledger Accounting", "How would you design SLA for complex revenue and cost accounting across multiple GAAPs?", "- Inventory all **event classes** that need non-standard accounting.\n- **Copy** seeded methods once per GAAP (e.g. US GAAP method, IFRS method), maximize **reuse** of rules (shared ADRs, mapping sets).\n- **Secondary ledger** with the second method at subledger level.\n- Use **custom sources** sparingly — prefer seeded sources and DFFs mapped via the source mapping.\n- **Supporting references** for reconciliation (contract ID, product).\n- Document each rule with business rationale; test with an accounting matrix.\n- Governance: finance owns rules; IT owns deployment.", "D"],
["Intercompany", "How would you design an end-to-end intercompany solution?", "- **Types of flows**: goods (SFO), services/management fees (Fusion Intercompany), financing (loans — treasury), cost allocations (GL allocations with intercompany balancing).\n- **Intercompany segment** in COA and **balancing rules** by legal entity pair.\n- **Invoice vs journal-only** decision per country (tax and statutory need invoices in many countries).\n- **Settlement/netting** process (monthly netting via treasury).\n- **Reconciliation** tooling (Fusion IC reconciliation or ARCS transaction matching).\n- **Elimination** in FCCS.\n- **Transfer pricing** policy aligned with tax.", "D"],
["Period Close", "How would you architect a \"continuous close\" for a large enterprise?", "- **Event-driven accounting**: subledgers account and post continuously (scheduled hourly/daily).\n- **Automated reconciliations** (ARCS transaction matching, bank reconciliations daily).\n- **Automated accruals and allocations** with schedules.\n- **Close task management** (FCCS/ARCS) with dependencies and dashboards.\n- **Anomaly detection** (AI) on journals and balances.\n- **Soft close** monthly, hard close quarterly where appropriate.\n- KPIs and continuous improvement.", "D"],
["Data Migration", "How do you architect data migration for a large Finance program?", "- **Migration framework**: extract → stage (a migration database) → transform (mapping tables) → validate → load (FBDI/REST) → reconcile.\n- **Automation** of loads and reconciliation scripts; repeatable runs.\n- **Data quality** rules and dashboards; business owns cleansing.\n- **Mocks** with timing for cutover planning; performance tuning of large loads.\n- **Audit trail**: evidence of each reconciliation and sign-off.\n- **Historical data** strategy: summary balances in Fusion, details in an archive/warehouse.", "D"],
["Data Architecture", "How do you decide what historical data to bring into Fusion?", "- **Regulatory/legal** retention needs (often satisfied by an archive, not the new ERP).\n- **Business needs**: comparatives (prior-year balances), open items, asset history.\n- **Typical**: GL balances 1–2 years by period (summary), open AP/AR, full asset records with accumulated depreciation, open POs.\n- **Detailed history** → archive/data warehouse with search and reporting.\n- Cost and complexity rise sharply with each year of detail — make it a business decision.", "B"],
["Integration", "How do you handle error management and reprocessing for Finance integrations?", "- **Categorize** errors: data (bad account), business (closed period), technical (timeouts).\n- **Retries** for technical errors with backoff.\n- **Business error queues** visible to finance users (not only IT) with clear messages and ownership.\n- **Reprocessing** after correction without duplicates (idempotency keys).\n- **Alerting** by severity; daily integration health report.\n- **Reconciliation** between source and Fusion counts/totals.", "D"],
["Integration", "What is the role of business events and callbacks in Fusion integration design?", "- **Business events** (e.g. Invoice Validated, Journal Batch Approved, Supplier Created) are published by Fusion and consumed by OIC subscriptions — enabling **event-driven** flows without polling.\n- **Callbacks** after bulk imports (ERP Integration Service) notify when an FBDI job completes, with status and logs, so the integration can continue or alert.\n- Benefits: lower latency, less load, cleaner orchestration.\n- Design for **ordering** and **duplicate events**.", "D"],
["Security", "How do you handle sensitive data (bank accounts, tax IDs) in a Fusion design?", "- **Masking**: bank account numbers masked in UI and reports for most roles.\n- **Restricted roles** for viewing/changing sensitive data.\n- **Data masking** in non-production environments after refreshes.\n- **Encryption** in transit (TLS, PGP for files) and at rest (Oracle SaaS).\n- **Audit** policies on changes.\n- **GDPR**: personal data in supplier/customer/employee records — retention and right-to-erasure processes.", "D"],
["Controls", "How do you design automated controls in Fusion to reduce SOX testing effort?", "- **Configuration-based controls**: matching tolerances, approval rules, duplicate checks, cross-validation rules, third-party control accounts, period statuses.\n- **Access controls**: SoD rules and role design.\n- Automated controls are tested by **configuration review** once (benchmarking) instead of sample testing, if change management controls are strong.\n- **Change management** evidence for configuration changes.\n- **Continuous controls monitoring** (AAC/GRC) for transactions and configuration changes.\n\nResult: fewer manual controls, faster audits.", "D"],
["Banking", "How do you design payment controls to prevent fraud?", "- **Segregation**: supplier bank maintenance ≠ invoice entry ≠ payment release.\n- **Bank account change verification** with callback and approval.\n- **Payment approval** for PPRs above thresholds (or all PPRs).\n- **Positive pay** for checks; **payee name match** services.\n- **File security**: encrypted, signed files; no manual file editing; transmission automated.\n- **Monitoring**: new bank accounts paid for the first time, payments outside normal patterns.", "D"],
["Accounts Payable", "How would you architect an AP automation program end to end?", "**Why they ask:** an architect is expected to see the whole program, from how invoices arrive to how success is measured.\n\n**Answer:**\n\"I design it in layers, following the invoice. Inbound: e-invoicing through EDI, PEPPOL or the supplier portal first, IDR for PDFs, and paper scanning only as a last resort. Validation: PO matching, tolerances, duplicate detection and tax validation. Approval: rules-based, with matched invoices auto-approved. Exceptions: AI agents that suggest how to resolve holds and answer supplier status questions. Payments: timing tuned between early-pay discounts and cash position, plus virtual cards where suppliers accept them. Analytics across all of it: touchless rate, cycle time, cost per invoice. And a supplier enablement program, because the technology only works if suppliers use the right channel.\"\n\nTip: Name supplier enablement as its own workstream. Many automation programs fail because suppliers keep emailing PDFs.", "D"],
["Revenue", "How would you architect revenue recognition for a company with products, services and subscriptions?", "- **Order capture** in CPQ/OM, **subscriptions** in Fusion Subscription Management, **projects** in Project Billing.\n- All feed **Revenue Management** as source documents → contracts and performance obligations.\n- **SSP** governance (finance owns SSP tables, updated periodically).\n- **Billing** in AR (AutoInvoice) independent of revenue timing.\n- **Accounting**: contract assets/liabilities, revenue, deferred revenue reconciliation.\n- **Disclosures** reporting (remaining performance obligations).", "D"],
["Fixed Assets", "How would you architect asset accounting for a capital-intensive company with projects?", "- **Capital projects** in Fusion Projects with capitalization rules (asset grouping, CIP).\n- **Assets** module with **corporate and tax books**; IFRS book if needed.\n- **Asset tracking** (physical) via Maintenance or third-party (tags, locations).\n- **Lease accounting** for leased assets (ROU).\n- **Impairment** and revaluation processes.\n- **Integration** with maintenance (work orders) for component-level tracking if required.\n- Close: depreciation runs, CIP aging review, reconciliation to GL.", "D"],
["Testing", "How do you design test automation for an Oracle Cloud Finance landscape?", "- **Scope**: top end-to-end flows (P2P, O2C, R2R), key reports, integrations.\n- **Tools**: Oracle's or third-party (Opkey, Worksoft, Tricentis) with Redwood/ADF UI support; API-level tests for integrations.\n- **Data strategy**: reusable test data that survives refreshes.\n- **Run cadence**: every quarterly update, after configuration changes, before major releases.\n- **Maintenance**: own the scripts like code; update when processes change.\n- **Reporting**: pass/fail dashboards for go/no-go decisions.", "D"],
["Roadmap", "How do you build a 3-year Finance systems roadmap?", "- **Current state** assessment: systems, pain points, KPIs, technical debt.\n- **Business strategy** inputs: growth, M&A, new markets, finance operating model (shared services, close speed).\n- **Capabilities** prioritized by value and dependency (e.g. AP automation, continuous close, revenue automation, FDI analytics, AI agents).\n- **Phasing** with quick wins in year 1.\n- **Costs and benefits** per initiative.\n- **Governance**: quarterly roadmap review with finance leadership.", "B"],
["Behavioral", "Tell me about a time you had to say no to a senior executive.", "## Example (STAR)\n- **Situation:** A regional CFO wanted a custom invoice approval engine outside Fusion for their region.\n- **Task:** As architect I had to protect the global template.\n- **Action:** I listened to the real need (approvals by project manager), showed how Fusion approval rules could route by project manager via a project attribute, and estimated the custom engine's cost and upgrade risk.\n- **Result:** They agreed to the standard approach; it went live with the region's rollout with no custom code.\n\nMessage: say \"no\" to the solution, \"yes\" to the need.", "B"],
["Behavioral", "How do you stay current with Oracle Cloud changes?", "- Read **quarterly release readiness** (What's New) for Financials, SCM, EPM, OIC.\n- **Oracle Cloud Customer Connect**, Oracle blogs, product roadmaps.\n- **Certifications** (e.g. Financials implementation professional, OCI AI/architect).\n- Hands-on in a **sandbox** with new features (AI agents, Redwood pages).\n- Peer networks and user groups (OAUG, Quest).\n\nTip: Name something new you've tried recently.", "B"],
["Reporting", "How would you design Smart View and Essbase usage for a finance team?", "- The **GL balances cube** (Essbase) is created per COA/calendar; updated on posting.\n- **Smart View** ad-hoc queries and formatted Excel reports linked to live data.\n- **Member names and aliases** from hierarchies — design trees for user-friendly reporting.\n- **Performance**: avoid giant queries; use member selection, suppress missing.\n- **Governance**: shared report templates library, training for power users.\n- **Drill-down** to journals for audit trail.", "D"],
["Architecture", "What are the most common reasons Oracle Finance implementations fail, and how do you prevent them?", "- **Poor data quality** → early profiling, cleansing, multiple mocks.\n- **Over-customization** → \"standard first\" principle, design authority.\n- **Weak business ownership** → engaged process owners with decision rights.\n- **Underestimated integrations** → integration inventory and early build.\n- **Insufficient testing** → realistic SIT/UAT, parallel close.\n- **Change management** neglected → role-based training, super users.\n- **Unclear scope** → strong change control.\n\nTip: Give one example where you saw and fixed one of these.", "B"],
["Localization", "How do you handle country localizations in a global Finance template?", "- **Global template** for common processes; **localization layer** per country (tax, e-invoicing, statutory reports, bank formats, payment methods, legal numbering).\n- Use **Oracle's localizations** where available; partners for gaps.\n- **Country rollout checklist** with local finance, tax and legal.\n- Keep local variants **documented and minimal**.\n- Watch regulatory changes (e-invoicing mandates) and plan them into the roadmap.", "D"],
["Integration", "How would you design supplier and customer master data management across systems?", "- **System of record** per domain (e.g. Fusion for suppliers; CRM for customer prospects, Fusion for billing accounts).\n- **Golden record** rules, duplicate checks, enrichment (D&B).\n- **Sync patterns**: event-driven updates from the master to consumers; avoid bi-directional edits.\n- **Governance**: data stewards, approval workflows (supplier onboarding), data quality KPIs.\n- Consider **MDM tools** if many systems and complex hierarchies.", "D"],
["Architecture", "What is your approach to reducing technical debt in an existing Oracle Finance landscape?", "- **Inventory** customizations, extensions, reports and integrations with usage, cost and risk.\n- **Retire** what isn't used; **replace** custom solutions with new standard features (check each release).\n- **Modernize** fragile integrations (point-to-point → OIC with events).\n- **Simplify** security roles and approval rules.\n- **Fund** debt reduction in the roadmap (e.g. 20% capacity).\n- Track metrics: number of custom objects, incidents caused by extensions.", "D"],
["Behavioral", "How do you mentor lead consultants to think like architects?", "- Ask them \"what else does this affect?\" on every design.\n- Have them write **ADRs** for their decisions and review them together.\n- Expose them to **NFRs**, integration and security discussions.\n- Let them present designs to the design authority.\n- Share reading (Oracle docs, architecture patterns) and post-mortems of past projects.", "B"],
["Architecture", "How do you design for upgrade-safety on Oracle SaaS?", "- Use only **supported extension points** (public REST APIs, BIP, VBCS, OIC, flexfields).\n- No dependence on **undocumented tables** in BIP where views exist; avoid screen scraping.\n- **Regression automation** for extensions and integrations.\n- Track **deprecations** in release notes (e.g. classic UI pages replaced by Redwood).\n- Keep personalizations minimal; document them.", "B"],
["Behavioral", "Walk me through a solution you architected end to end.", "Structure (3–4 minutes):\n- **Business problem** and goals (e.g. 25 entities on 4 legacy systems, 12-day close).\n- **Constraints**: timeline, budget, regulatory, integration landscape.\n- **Solution**: enterprise structures, modules, EPM, integration platform, data strategy, security, reporting — with one simple diagram.\n- **Key decisions and trade-offs** (2–3).\n- **Delivery**: phases, your role, team.\n- **Outcomes**: close days, cost per invoice, audit results.\n- **Lessons**.\n\nPractice drawing the diagram on a whiteboard.", "B"]
]);

// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio architecture questions.
QB['ora-arch-fin'] = (QB['ora-arch-fin'] || []).concat([
['AI Agent Studio', 'Explain the architecture of an AI agent in Oracle AI Agent Studio.',
`- **Agent**: instructions + topics + tools + an LLM, running natively in Fusion on OCI.
- **Tools** connect the agent to data and actions: Business Object (Fusion APIs), Document (RAG over documents, including external repositories), External REST/Connector, MCP, Email, Deep Link, User Session.
- **Workflows**: nodes (business object, code, email trigger, vector DB read/write, human approval, agent nodes) for deterministic, auditable processes; can be chained.
- **Security**: identity propagation — agents act with the user's Fusion roles; a **credential store** holds keys for external services.
- **Observability**: monitoring dashboard (sessions, latency, errors, tokens), tracing, evaluations.
- **Interoperability**: invoked from Fusion pages, Teams, external apps; **A2A** and **MCP** for cross-vendor agents and tools.`, 'D'],

['AI Agent Studio', 'When would you use a workflow agent instead of a free-form conversational agent?',
`- **Workflow** when steps are known, outcomes must be consistent and auditable (invoice exception routing, accrual preparation, supplier onboarding checks). Add **agent nodes** only where judgment/interpretation is needed.
- **Conversational** for open questions and help (policy Q&A, status inquiries).
- Finance generally favors workflows with **human approval nodes** for anything that changes financial data.`, 'D'],

['AI Agent Studio', 'How do RAG and document tools work in AI Agent Studio, and what should you watch for?',
`- **Document tool / vector DB nodes**: documents (policies, contracts, procedures) are chunked and embedded; the agent retrieves relevant pieces to ground answers. Oracle supports multimodal content and external repositories (e.g. SharePoint).
- **Watch for**: document quality and versioning (stale policies), access control on documents, citing sources/deep links, testing with tricky questions, and refreshing indexes when documents change.`, 'D'],

['AI Agent Studio', 'How would you connect a Fusion agent to non-Oracle systems?',
`- **External REST / Connector tools** for systems with APIs (bank portals, tax engines, CRM).
- **MCP tools** where the external system exposes an MCP server.
- **A2A** to collaborate with agents on other platforms.
- **OIC** behind the scenes for complex orchestration and transformations.
- **Credential store** for secrets; least-privilege service accounts; monitoring of failures.`, 'D'],

['AI Agent Studio', 'How do you choose the LLM for an agent?',
`- Oracle provides **Fusion-optimized models**, and you can choose premium models from several providers (OpenAI, Anthropic, Google, Meta, Cohere, xAI as announced).
- Choose by **task**: reasoning-heavy exceptions vs simple lookups; latency; cost (token usage for premium models); data/residency requirements.
- **Evaluate** candidates with the same evaluation set before deciding; re-evaluate when models change.`, 'D'],

['Redwood', 'Explain the Redwood extension architecture vs classic Fusion customization.',
`- **Classic (ADF)** pages: Page Composer/sandboxes, Application Composer in some areas, Groovy.
- **Redwood** pages: built on Oracle JET/Visual Builder; extended with **Visual Builder Studio** — page extensions (fields, layouts, rules in JavaScript-based events), stored in Git, deployed via pipeline.
- **Flexfields** remain the data extension mechanism.
- **APIs/FBDI unchanged**; deep-link formats can change.
- Architects should plan the **retirement of classic personalizations** and avoid fragile CSS/DOM tweaks — use Redwood design tokens and supported extension points.`, 'D'],

['Redwood', 'How do you build a custom Redwood-style application for Finance users?',
`- **Visual Builder Studio** to create a Redwood app using Fusion REST APIs (Business Objects) and Redwood components — looks native.
- Host as an extension or standalone VB app; SSO with Fusion identity.
- Use for gaps like a custom reconciliation workbench or a guided intake form.
- Include in the extension inventory, CI/CD and regression testing.`, 'D'],

['Fusion Platform', 'What changed in Fusion integration and data options recently that an architect should know?',
`- **Business events** + OIC for event-driven integration.
- **REST APIs** expanding across modules; FBDI remains for bulk.
- **BICC** for bulk extracts; **Fusion Data Intelligence** as the analytics platform.
- **AI Agent Studio** tools reuse the same business objects/APIs.
- **Redwood** page extensions via VBS.
Design new integrations around APIs and events; keep FBDI for volume.`, 'D'],

['Architecture', 'How would you redesign an AP process end to end using Fusion AI capabilities?',
`- **Intake**: e-invoicing + **IDR** for PDFs; agent handles supplier email questions.
- **Validation**: matching, tolerances, duplicate checks.
- **Exceptions**: workflow agent explains holds and routes to owners with recommended actions.
- **Approval**: rule-based; auto-approve matched invoices.
- **Payment**: optimized runs; agent answers payment status queries.
- **Controls**: human approvals for financial changes, audit traces, SoD.
- **KPIs**: touchless rate, days on hold, cost per invoice.`, 'D'],

['Accounting', 'How do you design SLA rules for a new revenue stream without disrupting existing accounting?',
`- Identify **event classes** and sources affected.
- **Copy and version** the accounting method; add new journal line rules/ADRs with conditions specific to the new stream.
- Use **supporting references** for reporting the new stream.
- Test with an **accounting matrix** including reversals and adjustments.
- Activate at a period start; reconcile the first close carefully.`, 'D'],

['Architecture', 'What does an "AI-ready" Finance platform need?',
`- **Clean master data** (suppliers, customers, COA, hierarchies).
- **Current releases and Redwood** adoption (AI features arrive there first).
- **APIs and events** documented; minimal custom code.
- **Security model** that's tight and well-understood (agents inherit it).
- **Governance**: AI use-case intake, evaluation, monitoring, audit involvement.
- **Data platform** (FDI) for analytics and model grounding.`, 'D']
]);
