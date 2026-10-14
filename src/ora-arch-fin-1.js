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
