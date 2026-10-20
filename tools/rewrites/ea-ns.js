// Rewritten Enterprise Apps — NetSuite Administrator / Consultant (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ea-ns-).
module.exports = {

'What is NetSuite OneWorld?':
`**Why they ask:** multi-entity fundamentals.

**Answer:**
"OneWorld is NetSuite's multi-subsidiary edition: multiple legal entities, currencies and tax regimes in one account, arranged in a subsidiary hierarchy that drives consolidation. It supports intercompany transactions and automatic eliminations. A US parent with UK and Canadian subsidiaries can consolidate to USD in real time without a separate consolidation tool."

Tip: Subsidiary hierarchy.`,

'What classification segments does NetSuite have?':
`**Why they ask:** reporting design.

**Answer:**
"Department, class and location — plus subsidiary in OneWorld — and custom segments for anything else, like region or product line. They drive reporting, role restrictions and GL impact. Custom segments are valuable because they can be made GL-impacting and appear on financial reports like the standard ones."

Tip: Custom segments.`,

'What are saved searches?':
`**Why they ask:** the core NetSuite skill.

**Answer:**
"NetSuite's main query and reporting tool. You set criteria for filters, results for columns, summaries and formulas, available filters for users, highlighting, and email alerts or schedules. Saved searches also feed dashboards, workflows and scripts, so they're everywhere. Formula fields — CASE statements, date math — are what make them really powerful."

Tip: Formula fields.`,

'Write a saved search formula to show days overdue on invoices.':
`**Why they ask:** hands-on search skill.

**Answer:**
"A Formula (Numeric) column: CASE WHEN {duedate} < SYSDATE THEN ROUND(SYSDATE - {duedate}) ELSE 0 END. Criteria: Type is Invoice, Status is Open, and Main Line is true so each invoice appears once. An invoice due 12 days ago shows 12; one not yet due shows 0. I'd add highlighting for anything over 60 days."

Tip: Main Line filter.`,

"What does 'Main Line' mean?":
`**Why they ask:** a common search mistake.

**Answer:**
"Transaction searches return one header row — Main Line true — and a row per line — Main Line false. Without filtering, a five-line invoice appears six times and totals get inflated. For header totals filter Main Line true; for item analysis filter false, and often exclude tax and shipping lines too."

Tip: Common mistake.`,

'How do roles and permissions work?':
`**Why they ask:** security administration.

**Answer:**
"Roles grant permissions on transactions, lists, reports and setup at levels — view, create, edit, full — with restrictions by subsidiary, department, class or location, and assigned forms. Best practice is to customize from standard roles, apply least privilege and check segregation of duties — an AP clerk who can create vendors shouldn't also pay them. Administrator is for a tiny number of people."

Tip: Never give Administrator broadly.`,

'What customization options exist?':
`**Why they ask:** platform breadth.

**Answer:**
"Custom fields — entity, item, transaction body and line, CRM — custom records, custom forms, custom lists, SuiteFlow workflows, SuiteScript, SuiteBuilder and SuiteApps packaged with SDF. I go declarative first — fields, forms, workflows — and script only when configuration can't do it."

Tip: Declarative first.`,

'What is SuiteFlow?':
`**Why they ask:** no-code automation.

**Answer:**
"NetSuite's point-and-click workflow tool, built from states, transitions, actions and conditions — used for approvals, field updates, notifications and automation without code. A typical one: purchase orders over $5,000 route to the department head, over $25,000 to the CFO, with email notifications and a locked record while pending."

Tip: Approvals.`,

'What SuiteScript types exist?':
`**Why they ask:** developer knowledge.

**Answer:**
"In SuiteScript 2.x: Client scripts for browser behavior; User Event scripts with beforeLoad, beforeSubmit and afterSubmit; Scheduled scripts; Map/Reduce for large data volumes; Suitelets for custom pages; RESTlets for custom APIs; Workflow Action scripts; and Mass Update scripts. For processing 50,000 records, Map/Reduce is the right choice because it handles governance and parallelism automatically."

Tip: Map/Reduce for volume.`,

'What are governance units?':
`**Why they ask:** a NetSuite-specific constraint.

**Answer:**
"Usage limits per script execution — for example 1,000 units for a User Event script and 10,000 for a Scheduled script. Each API call costs units — loading or saving a record costs more than reading a field. Map/Reduce handles large jobs by yielding and resuming automatically, so I plan governance before writing anything that loops over records."

Tip: Governance planning.`,

'How do you integrate NetSuite?':
`**Why they ask:** integration skills.

**Answer:**
"SuiteTalk SOAP and REST web services, RESTlets for custom endpoints, CSV imports, SuiteQL for queries, and iPaaS tools — Celigo, Boomi, MuleSoft — authenticated with token-based authentication or OAuth 2.0. Celigo is very common for Shopify, Salesforce and 3PL integrations."

Tip: Celigo is common.`,

'How do you import data?':
`**Why they ask:** data management.

**Answer:**
"The CSV Import Assistant with field mappings and saved import maps, external IDs so later imports update instead of duplicating, the right sequence — lists, then entities, then items, then transactions — testing in sandbox first, and validation afterward with saved searches comparing counts and totals."

Tip: External IDs.`,

'Explain revenue recognition in NetSuite.':
`**Why they ask:** a key finance capability.

**Answer:**
"Advanced Revenue Management handles ASC 606: revenue arrangements group the elements of a sale, performance obligations are identified, standalone selling price drives allocation, and revenue plans and schedules recognize revenue over time or at a point in time. For a $12,000 bundle of software and a year of support, ARM allocates by SSP and recognizes the support portion monthly."

Tip: ARM for ASC 606.`,

'How does period close work in NetSuite?':
`**Why they ask:** close experience.

**Answer:**
"The period close checklist: lock AR, AP and payroll, resolve date and period mismatches, revalue open foreign currency balances, run amortization and revenue recognition journals, intercompany eliminations, calculate consolidated exchange rates, then close the period."

Tip: Checklist steps.`,

'What inventory features does NetSuite offer?':
`**Why they ask:** operations breadth.

**Answer:**
"Multi-location inventory, bins, lot and serial numbers, assemblies and work orders, demand planning, costing methods — average, FIFO, LIFO, standard — and advanced inventory features like replenishment. Costing method is set per item and is hard to change later, so it's decided carefully at setup."

Tip: Costing methods.`,

'Describe order-to-cash in NetSuite.':
`**Why they ask:** process knowledge.

**Answer:**
"Estimate, then sales order with approval, then fulfillment — pick, pack, ship — then invoice, customer payment and deposit, with revenue recognition where it applies. Each transaction is created from the previous one, so the chain is traceable from the sales order's related records."

Tip: Transaction chain.`,

'Describe procure-to-pay in NetSuite.':
`**Why they ask:** process knowledge.

**Answer:**
"Purchase request or requisition, purchase order with approvals, item receipt, vendor bill with matching against the PO and receipt, and bill payment — often with vendor bill approval routing as a separate control."

Tip: Vendor bill approval.`,

"How do you handle NetSuite's two releases a year?":
`**Why they ask:** release management.

**Answer:**
"Review the release notes, test in the release preview account — especially scripts, workflows and integrations — communicate changes to users, and plan which new features to enable. A deprecated API in a script is the most common breakage."

Tip: Release preview.`,

'Sandbox vs release preview?':
`**Why they ask:** environment knowledge.

**Answer:**
"A sandbox is a copy of production for development and testing, refreshed on request. Release preview is a temporary account on the upcoming version, available for a few weeks before each upgrade, purely to test the new release against our customizations."

Tip: Different purposes.`,

'What is SuiteCloud Development Framework?':
`**Why they ask:** professional development practices.

**Answer:**
"Developer tooling that manages customizations as files — scripts, custom records, fields, workflows — in source control, and deploys them between accounts. It replaces manual bundles, so changes are versioned, reviewed and deployed consistently from sandbox to production."

Tip: Source control.`,

'What is SuiteQL?':
`**Why they ask:** advanced querying.

**Answer:**
"A SQL-like query language for NetSuite data, used through SuiteScript's N/query module and the REST API. It handles complex joins and aggregations that are awkward in saved searches — like joining transactions, lines and custom records in one query for an integration."

Tip: Joins.`,

'How do you build useful dashboards?':
`**Why they ask:** user enablement.

**Answer:**
"Role-based dashboards with KPIs, KPI meters, saved search portlets, reminders and report snapshots matched to each role's daily work. The AP clerk sees bills pending approval and overdue vendor credits; the CFO sees cash, AR aging and revenue versus budget."

Tip: Role-based.`,

'What AI features exist in NetSuite?':
`**Why they ask:** current product awareness.

**Answer:**
"Text Enhance for generating and refining content, AI-assisted bill capture that reads vendor invoices, intelligent recommendations, and AI assistants and agents for finance tasks that Oracle keeps expanding with each release. Bill capture has the clearest ROI for AP teams."

Tip: Bill capture.`,

'Tell me about a NetSuite improvement you made.':
`**Why they ask:** proof.

**Answer:**
"AP approvals ran on emailed spreadsheets. I built a SuiteFlow approval workflow by amount and department with saved search alerts for anything stuck. Approval cycle time dropped from 9 days to 2."

Tip: Measured outcome.`,

'Tell me about a data clean-up project.':
`**Why they ask:** data quality skills.

**Answer:**
"We had about 4,000 duplicate customers. I used saved searches to find duplicates by name, email and tax ID, merged them with the duplicate management tool, and turned on duplicate detection — which made AR reporting accurate again."

Tip: Method.`,

'How do you prioritize admin requests?':
`**Why they ask:** service management.

**Answer:**
"By business impact, urgency, effort and risk, in a transparent request queue reviewed with stakeholders. A broken invoice template blocking billing beats a new dashboard every time."

Tip: Transparent queue.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"NetSuite Administrator, ERP Consultant, Financial User, and SuiteCloud Developer."

Tip: Admin cert.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior administrator, NetSuite consultant or ERP manager."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I keep NetSuite clean, secure and automated for finance and operations — I've cut approval cycles from days to hours and improved data quality."

Tip: Proof.`,

'What can custom forms control?':
`**Why they ask:** UI configuration.

**Answer:**
"Field layout, visibility, mandatory fields, default values, subtabs, buttons and the linked print template — assigned by role, so the warehouse sees a simple fulfillment form while finance sees accounting fields."

Tip: Role-based forms.`,

'How do you customize printed forms?':
`**Why they ask:** a frequent request.

**Answer:**
"Advanced PDF/HTML templates using FreeMarker syntax for invoices, purchase orders and statements — adding logos, conditional sections, and fields from related records."

Tip: FreeMarker.`,

'How does multi-currency work?':
`**Why they ask:** global finance.

**Answer:**
"Each subsidiary has a base currency, transactions can be in other currencies, exchange rate tables hold daily rates, revaluation adjusts open balances at month-end, and consolidated exchange rates — current, average and historical — handle translation for reporting."

Tip: Revaluation.`,

'How are intercompany transactions handled?':
`**Why they ask:** multi-entity accounting.

**Answer:**
"Intercompany journal entries, paired intercompany sales and purchase orders, automated intercompany management, and elimination entries generated during close so consolidated results don't double count."

Tip: Eliminations.`,

'How do you design approval routing?':
`**Why they ask:** control design.

**Answer:**
"By amount thresholds, department, subsidiary or the employee hierarchy — using standard approval routing for simple cases and SuiteFlow for complex rules, like requiring both department and finance approval above $50,000."

Tip: Hierarchy.`,

'How do you track changes?':
`**Why they ask:** audit support.

**Answer:**
"System notes on each record show who changed what and when, the login audit trail covers access, saved searches on system notes report changes across records, and SDF deployment logs track customization changes."

Tip: System notes.`,

'When do you use User Event vs Client scripts?':
`**Why they ask:** scripting judgment.

**Answer:**
"Client scripts for browser interactions and in-form validation, like warning a user as they type. User Event scripts for server-side logic on load or save that must run however the record arrives — UI, CSV import or integration. Anything protecting data integrity belongs server-side, because a CSV import never runs client scripts."

Tip: Server for integrity.`,

"A user can't see a transaction. What do you check?":
`**Why they ask:** troubleshooting.

**Answer:**
"Role permissions for that transaction type, subsidiary, department, class and location restrictions on the role, the segment values on the transaction itself, and the form assignment."

Tip: Restrictions.`,

'An integration duplicates sales orders. What do you do?':
`**Why they ask:** integration troubleshooting.

**Answer:**
"Check whether external IDs are being used, whether retries happen without idempotency, and the iPaaS error logs. Then add duplicate prevention — upsert on external ID or a check on the source order number — and clean up the duplicates already created."

Tip: External IDs.`,

'How do you improve slow record loads?':
`**Why they ask:** performance tuning.

**Answer:**
"Review scripts and workflows on the record with the Application Performance Management SuiteApp, reduce sublist sourcing, optimize searches used by scripts, and remove unused customizations. Often one heavy beforeLoad script is responsible for most of the delay."

Tip: APM SuiteApp.`,

'How are fixed assets managed?':
`**Why they ask:** finance breadth.

**Answer:**
"The Fixed Asset Management SuiteApp: asset types, depreciation methods, asset proposals generated from vendor bills, and depreciation schedules posting journals each period."

Tip: SuiteApp.`,

'How is sales tax handled?':
`**Why they ask:** tax configuration.

**Answer:**
"The SuiteTax engine with tax codes and nexuses, or integration with Avalara for US sales tax calculation across thousands of jurisdictions."

Tip: Nexus.`,

'How are budgets handled?':
`**Why they ask:** planning support.

**Answer:**
"Budgets by account, period and segments, imported by CSV, compared in budget-versus-actual reports — and NetSuite Planning and Budgeting for more advanced EPM needs."

Tip: Budget vs actual.`,

'How does NetSuite relate to Oracle Fusion?':
`**Why they ask:** market awareness.

**Answer:**
"Both are Oracle cloud ERPs. NetSuite targets small to mid-market with faster deployment; Fusion targets large enterprises with deeper complexity. Companies sometimes move from NetSuite to Fusion as they scale."

Tip: Growth path.`,

'How do you train users?':
`**Why they ask:** adoption.

**Answer:**
"Role-based training, SuiteAnswers articles, short recorded walkthroughs, and quick reference guides for common tasks."

Tip: SuiteAnswers.`,

'How do you govern customizations?':
`**Why they ask:** long-term maintainability.

**Answer:**
"Change requests, naming conventions — like a prefix per department on script IDs — documentation, sandbox testing, SDF deployments, and periodic cleanup of unused fields and scripts."

Tip: Naming conventions.`,

'What item types does NetSuite support?':
`**Why they ask:** item setup knowledge.

**Answer:**
"Inventory items, non-inventory items for sale, purchase or resale, service items, assembly items, kit or package items, item groups, other charge items, discount, markup, subtotal and description items, gift certificates and download items. Kits are sold as a bundle without being built; assemblies are built through work orders and stocked."

Tip: Kits vs assemblies.`,

"What are accounting preferences you'd review first?":
`**Why they ask:** setup judgment.

**Answer:**
"Period close settings like allowing non-GL changes, approval requirements for journals, AR and AP posting periods, multi-currency, expense allocation, and preventing posting to closed periods."

Tip: Lock periods properly.`,

'How do expense allocations work?':
`**Why they ask:** close process.

**Answer:**
"Allocation schedules move expenses between departments, classes or locations using fixed weights or statistical weights — like headcount per department — and run on a schedule as part of close."

Tip: Statistical allocations.`,

'How do you schedule a saved search to email results?':
`**Why they ask:** practical automation.

**Answer:**
"On the search's Email tab, set recipients — users, roles or groups — the schedule, and whether results go as an attachment or inline. You can also send alerts when records are created or changed, like notifying the controller whenever a journal over $50,000 is posted."

Tip: Alerts on changes.`,

};
