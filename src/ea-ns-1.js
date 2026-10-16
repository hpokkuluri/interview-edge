// NetSuite Administrator / Consultant. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-ns'] = [
["Role", "What does a NetSuite administrator do?",
`**Why they ask:** baseline.

**Answer:** Manages the NetSuite account: users and roles, customizations (fields, records, forms), saved searches and reports, workflows, SuiteScript coordination, integrations, data imports, release testing, and supporting finance and operations processes.

Tip: Mention modules (financials, OneWorld, inventory, SuiteCommerce).`, 'B', 'E'],

["Core", "What is NetSuite OneWorld?",
`**Answer:** Multi-subsidiary capability for managing multiple legal entities, currencies, tax regimes and consolidations in one account, with intercompany transactions and eliminations.

Tip: Subsidiary hierarchy.`, 'B', 'M'],

["Core", "What classification segments does NetSuite have?",
`**Answer:** Department, class and location (plus subsidiary in OneWorld), and custom segments — used for reporting, permissions and GL impact.

Tip: Custom segments.`, 'B', 'E'],

["Searches", "What are saved searches?",
`**Answer:** NetSuite's main reporting and query tool: criteria (filters), results (columns, summaries, formulas), available filters, highlighting, email alerts and scheduling. Also used as data sources for dashboards, workflows and scripts.

Tip: Formula fields.`, 'B', 'E'],

["Searches", "Write a saved search formula to show days overdue on invoices.",
`**Answer:** Formula (Numeric): CASE WHEN {duedate} < SYSDATE THEN ROUND(SYSDATE - {duedate}) ELSE 0 END — criteria: Type = Invoice, Status = Open, Main Line = true.

Tip: Main Line filter.`, 'B', 'M'],

["Searches", "What does 'Main Line' mean?",
`**Answer:** Transaction searches return header (main line = true) and line rows (main line = false); filter appropriately to avoid duplicate rows.

Tip: Common mistake.`, 'B', 'E'],

["Roles", "How do roles and permissions work?",
`**Answer:** Roles grant permissions (transactions, lists, reports, setup) with levels (view, create, edit, full), restrictions by subsidiary/department/class/location, and forms. Best practice: customize from standard roles and follow least privilege with SoD.

Tip: Never give Administrator broadly.`, 'B', 'M'],

["Customization", "What customization options exist?",
`**Answer:** Custom fields (entity, item, transaction body/line, CRM), custom records, custom forms, custom lists, workflows (SuiteFlow), SuiteScript, SuiteBuilder and SuiteApps (bundles/SDF).

Tip: Declarative first.`, 'B', 'E'],

["Workflow", "What is SuiteFlow?",
`**Answer:** Point-and-click workflow tool with states, transitions, actions and conditions — for approvals, field updates, notifications and automation without code.

Tip: Approvals.`, 'B', 'E'],

["SuiteScript", "What SuiteScript types exist?",
`**Answer:** Client scripts, User Event scripts (beforeLoad, beforeSubmit, afterSubmit), Scheduled, Map/Reduce (large data), Suitelets (custom pages), RESTlets (APIs), Workflow Action scripts, and Mass Update scripts — in SuiteScript 2.x.

Tip: Map/Reduce for volume.`, 'B', 'M'],

["SuiteScript", "What are governance units?",
`**Answer:** Usage limits per script type (e.g. 1,000 units for user event, 10,000 for scheduled) — each API call consumes units; Map/Reduce handles large processing with automatic yielding.

Tip: Governance planning.`, 'D', 'M'],

["Integration", "How do you integrate NetSuite?",
`**Answer:** SuiteTalk SOAP and REST web services, RESTlets, CSV imports, SuiteQL queries, and iPaaS tools (Celigo, Boomi, MuleSoft), using token-based authentication or OAuth 2.0.

Tip: Celigo is common.`, 'B', 'M'],

["Imports", "How do you import data?",
`**Answer:** CSV Import Assistant with mappings, saved import maps, external IDs for updates, sequence (lists → entities → items → transactions), test in sandbox, and validate.

Tip: External IDs.`, 'B', 'E'],

["Finance", "Explain revenue recognition in NetSuite.",
`**Answer:** Advanced Revenue Management (ARM) handles ASC 606: revenue arrangements, performance obligations, standalone selling price, allocation, and revenue plans and schedules.

Tip: ARM for ASC 606.`, 'D', 'M'],

["Finance", "How does period close work in NetSuite?",
`**Answer:** Period close checklist: lock AR/AP/payroll, resolve date/period mismatches, revalue currencies, run amortization and revenue recognition journals, intercompany eliminations, consolidated exchange rates, then close the period.

Tip: Checklist steps.`, 'D', 'M'],

["Inventory", "What inventory features does NetSuite offer?",
`**Answer:** Multi-location inventory, bins, lot and serial numbers, assemblies, work orders, demand planning, costing methods (average, FIFO, LIFO, standard) and advanced inventory.

Tip: Costing methods.`, 'B', 'M'],

["O2C", "Describe order-to-cash in NetSuite.",
`**Answer:** Estimate → sales order → approval → fulfillment (pick, pack, ship) → invoice → customer payment → deposit, with revenue recognition where applicable.

Tip: Transaction chain.`, 'B', 'E'],

["P2P", "Describe procure-to-pay in NetSuite.",
`**Answer:** Purchase request/requisition → purchase order with approvals → item receipt → vendor bill (with matching) → bill payment.

Tip: Vendor bill approval.`, 'B', 'E'],

["Releases", "How do you handle NetSuite's two releases a year?",
`**Answer:** Review release notes, test in release preview account, check scripts and workflows, communicate changes and enable new features.

Tip: Release preview.`, 'B', 'M'],

["Sandbox", "Sandbox vs release preview?",
`**Answer:** **Sandbox** is a copy of production for development and testing (refresh on request). **Release preview** is a temporary account to test the upcoming version.

Tip: Different purposes.`, 'B', 'E'],

["SDF", "What is SuiteCloud Development Framework?",
`**Answer:** Developer tooling to manage customizations as files in source control and deploy them between accounts, replacing manual bundles for professional development.

Tip: Source control.`, 'D', 'M'],

["SuiteQL", "What is SuiteQL?",
`**Answer:** SQL-like query language for NetSuite data via SuiteScript (N/query) and REST, useful for complex joins and analytics.

Tip: Joins.`, 'D', 'M'],

["Dashboards", "How do you build useful dashboards?",
`**Answer:** Role-based dashboards with KPIs, KPI meters, saved search portlets, reminders and report snapshots aligned to each role's daily work.

Tip: Role-based.`, 'B', 'E'],

["AI", "What AI features exist in NetSuite?",
`**Answer:** NetSuite Text Enhance for generative content, bill capture with AI, intelligent recommendations, and AI assistants/agents for finance tasks being expanded.

Tip: Bill capture.`, 'B', 'M'],

["Behavioral", "Tell me about a NetSuite improvement you made.",
`**Sample answer:** "AP approvals were emailed spreadsheets. I built a SuiteFlow approval workflow by amount and department with saved search alerts. Approval cycle time dropped from 9 days to 2."

Tip: Measured outcome.`, 'B', 'M'],

["Behavioral", "Tell me about a data clean-up project.",
`**Sample answer:** "We had 4,000 duplicate customers. I used saved searches to find duplicates, merged them with the duplicate management tool, and enabled duplicate detection — improving AR reporting accuracy."

Tip: Method.`, 'B', 'M'],

["Behavioral", "How do you prioritize admin requests?",
`**Answer:** Business impact, urgency, effort and risk, with a transparent request queue and stakeholder alignment.

Tip: Transparent queue.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** NetSuite Administrator, ERP Consultant, Financial User, and SuiteCloud Developer.

Tip: Admin cert.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior admin, NetSuite consultant, or ERP manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep NetSuite clean, secure and automated for finance and operations — I've cut approval cycles and improved data quality."

Tip: Proof.`, 'B', 'E'],

["Forms", "What can custom forms control?",
`**Answer:** Field layout, visibility, mandatory fields, default values, subtabs, buttons and printed templates — assigned by role.

Tip: Role-based forms.`, 'B', 'E'],

["Printing", "How do you customize printed forms?",
`**Answer:** Advanced PDF/HTML templates using FreeMarker syntax for invoices, POs and statements.

Tip: FreeMarker.`, 'D', 'M'],

["Multi-currency", "How does multi-currency work?",
`**Answer:** Base currency per subsidiary, transaction currencies, exchange rate tables, currency revaluation for open balances, and consolidated exchange rates for reporting.

Tip: Revaluation.`, 'D', 'M'],

["Intercompany", "How are intercompany transactions handled?",
`**Answer:** Intercompany journal entries, paired intercompany sales/purchase orders, automated intercompany management and elimination entries during close.

Tip: Eliminations.`, 'D', 'M'],

["Approvals", "How do you design approval routing?",
`**Answer:** By amount thresholds, department, subsidiary or employee hierarchy, using standard approval routing or SuiteFlow for complex rules.

Tip: Hierarchy.`, 'B', 'M'],

["Audit", "How do you track changes?",
`**Answer:** System notes on records, login audit trail, saved searches on system notes, and SuiteCloud deployment logs.

Tip: System notes.`, 'B', 'E'],

["Scripting", "When do you use User Event vs Client scripts?",
`**Answer:** Client scripts for browser UI interactions and validation; User Event scripts for server-side logic on record load/save that must run regardless of entry method (CSV, integrations).

Tip: Server for integrity.`, 'B', 'M'],

["Scenario", "A user can't see a transaction. What do you check?",
`**Answer:** Role permissions, subsidiary/department/class/location restrictions, the transaction's segment values, and form assignment.

Tip: Restrictions.`, 'B', 'E'],

["Scenario", "An integration duplicates sales orders. What do you do?",
`**Answer:** Check external ID usage, retries without idempotency, error logs in the iPaaS, add duplicate prevention logic and clean up duplicates.

Tip: External IDs.`, 'D', 'M'],

["Performance", "How do you improve slow record loads?",
`**Answer:** Review scripts and workflows on the record (Script Performance Monitor / APM), reduce sublist sourcing, optimize searches and remove unused customizations.

Tip: APM SuiteApp.`, 'D', 'M'],

["Fixed Assets", "How are fixed assets managed?",
`**Answer:** Fixed Asset Management SuiteApp with asset types, depreciation methods, proposals from vendor bills and depreciation schedules.

Tip: SuiteApp.`, 'D', 'M'],

["Tax", "How is sales tax handled?",
`**Answer:** SuiteTax engine with tax codes and nexus, or integrations with Avalara for US sales tax calculation.

Tip: Nexus.`, 'D', 'M'],

["Budgets", "How are budgets handled?",
`**Answer:** Budgets by account, period and segments, imported via CSV, compared in budget vs actual reports; NetSuite Planning and Budgeting (EPM) for advanced needs.

Tip: Budget vs actual.`, 'B', 'E'],

["Oracle", "How does NetSuite relate to Oracle Fusion?",
`**Answer:** Both are Oracle cloud ERPs: NetSuite targets small to mid-market with faster deployment; Fusion targets large enterprises with deeper complexity. Companies sometimes move from NetSuite to Fusion as they scale.

Tip: Growth path.`, 'D', 'M'],

["Training", "How do you train users?",
`**Answer:** Role-based training, SuiteAnswers articles, recorded walkthroughs, and quick reference guides.

Tip: SuiteAnswers.`, 'B', 'E'],

["Governance", "How do you govern customizations?",
`**Answer:** Change requests, naming conventions, documentation, sandbox testing, SDF for deployments and periodic cleanup.

Tip: Naming conventions.`, 'B', 'M']
];
