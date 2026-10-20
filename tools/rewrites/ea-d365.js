// Rewritten Enterprise Apps — Dynamics 365 Consultant (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ea-d365-).
module.exports = {

'D365 Finance & Operations vs Business Central?':
`**Why they ask:** product positioning.

**Answer:**
"F&O — Finance and Supply Chain Management — is for large enterprises with complex multi-entity, manufacturing and global requirements. Business Central is for small and mid-size businesses, with simpler, faster deployment. Both are cloud ERP; extensibility differs — X++ for F&O, AL for Business Central. A 40-person distributor fits Business Central; a manufacturer with 12 legal entities across three continents needs F&O."

Tip: Fit to company size.`,

'Explain the chart of accounts and financial dimensions in F&O.':
`**Why they ask:** finance design fundamentals.

**Answer:**
"Main accounts combine with financial dimensions — department, cost center, business unit, project — through account structures and advanced rules that control which dimensions are valid for which accounts. That keeps the chart lean: instead of creating 'travel expense — sales — east', you have one travel account and dimensions for department and region, so reporting stays flexible without thousands of accounts."

Tip: Account structures.`,

'How does period close work in D365 Finance?':
`**Why they ask:** month-end experience.

**Answer:**
"The financial period close workspace manages tasks and checklists across legal entities. Then subledger closing — AP, AR and inventory close, which settles issues against receipts for actual costing — reconciliations, intercompany, foreign currency revaluation, consolidation, and reporting through Financial Reporting. Inventory close is the step that most often surprises new clients."

Tip: Inventory close.`,

'What are key SCM processes in D365?':
`**Why they ask:** supply chain breadth.

**Answer:**
"Procure-to-pay — requisitions, purchase orders, product receipts, vendor invoices. Order-to-cash — sales orders, picking, packing, shipping, invoicing. Inventory and warehouse management with WMS, master planning, and production control. I think in end-to-end flows, because a design choice in receiving affects AP matching later."

Tip: End-to-end flows.`,

'Explain inventory dimensions in D365 SCM.':
`**Why they ask:** a core SCM concept.

**Answer:**
"Three groups. Product dimensions — configuration, size, color, style, version. Storage dimensions — site, warehouse, location, inventory status, license plate. Tracking dimensions — batch and serial number. They're controlled through dimension groups assigned to items, and getting them right before go-live matters, because changing them later with transactions is painful."

Tip: Dimension groups.`,

'Which costing methods does D365 support?':
`**Why they ask:** cost accounting knowledge.

**Answer:**
"FIFO, LIFO, weighted average, weighted average date, moving average and standard cost, set in item model groups. For the non-standard methods, inventory close settles issues against receipts and posts adjustments. Standard cost is common in manufacturing because variances are visible immediately."

Tip: Item model groups.`,

'How does master planning work?':
`**Why they ask:** planning knowledge.

**Answer:**
"It calculates net requirements from demand — sales orders and forecasts — against supply — on-hand, purchase and production orders — using coverage groups: period, min/max or requirement. It then generates planned orders to firm. Planning Optimization is the current engine and runs much faster than the old built-in one."

Tip: Coverage groups.`,

'What is Dataverse?':
`**Why they ask:** platform understanding.

**Answer:**
"The data platform underneath Dynamics 365 Customer Engagement and Power Apps — tables, relationships, business rules, security roles and APIs. It's the foundation for the whole Power Platform, so Sales, Customer Service and custom apps all share the same data and security."

Tip: Power Platform foundation.`,

'How does security work in Dynamics 365 CE?':
`**Why they ask:** CRM security model.

**Answer:**
"Business units, security roles with privileges and access levels — user, business unit, parent-child business units, organization — teams, field security profiles and hierarchy security. For example, a sales rep might have user-level read on opportunities while a regional manager has business-unit level."

Tip: Access levels.`,

'How does Power Platform extend D365?':
`**Why they ask:** low-code extensibility.

**Answer:**
"Power Apps for custom apps, Power Automate for workflows and integrations, Power BI for analytics, and Copilot Studio for agents — all connected to Dataverse and D365 data. A field inspection canvas app writing back to Dataverse is often a few weeks instead of a custom development project."

Tip: Low-code extension.`,

'What integration options exist for F&O?':
`**Why they ask:** integration design.

**Answer:**
"The data management framework with data entities and import/export projects, OData and custom services, business events, dual-write for near real-time sync with Dataverse, recurring integrations, and Azure services — Logic Apps, Service Bus, and Synapse or Fabric links for analytics. Data entities are the building block for almost all of them."

Tip: Data entities.`,

'How do you migrate data into D365 F&O?':
`**Why they ask:** migration experience.

**Answer:**
"The Data Management workspace with data entities and templates, following a load sequence — configuration, then master data, then open transactions, then balances — with staging tables to review errors, and reconciliation at each step. Open AR and AP totals must tie to legacy before sign-off."

Tip: Sequence matters.`,

'What is Lifecycle Services (LCS) / Power Platform admin center for F&O?':
`**Why they ask:** environment management.

**Answer:**
"LCS has been the portal for managing F&O environments, deployments, updates and monitoring. Microsoft is moving F&O environment management into the Power Platform admin center as part of unified admin, so newer projects increasingly manage environments there."

Tip: Unified admin transition.`,

'How do you manage continuous updates?':
`**Why they ask:** post-go-live operations.

**Answer:**
"Microsoft releases service updates several times a year. I plan regression testing with RSAT — the Regression Suite Automation Tool that replays task recordings — use update scheduling, review Feature Management to decide which new features to turn on, and test our extensions against each update in a sandbox first."

Tip: RSAT automated testing.`,

'What is extension-based development in F&O?':
`**Why they ask:** upgrade-safe customization.

**Answer:**
"Customizations use extensions rather than overlayering Microsoft's code — adding fields, extending methods with chain of command, event handlers and new objects in X++. Because Microsoft's code is never modified, continuous updates apply cleanly."

Tip: Chain of command.`,

'What reporting options exist?':
`**Why they ask:** reporting breadth.

**Answer:**
"Financial Reporting for financial statements, SSRS for documents like invoices, Power BI embedded and analytical workspaces, Electronic Reporting for regulatory and bank formats, and data export to a lake or Microsoft Fabric for analytics. Electronic Reporting is powerful because formats like bank files are configured, not coded."

Tip: Electronic Reporting.`,

'What Copilot features exist in Dynamics 365?':
`**Why they ask:** current product awareness.

**Answer:**
"Copilot summarizes records, drafts emails, assists collections with customer summaries and suggested communications, gives demand planning insights, and Microsoft has been adding agents for tasks like supplier communications and time entry. The agent capabilities are evolving quickly, so I check each release wave."

Tip: Agentic features growing.`,

"What is Microsoft's Success by Design?":
`**Why they ask:** methodology.

**Answer:**
"Microsoft's FastTrack implementation approach, with review workshops at key points — solution blueprint, data, integration, performance and go-live readiness — to catch risks early. The go-live readiness review is the one that most often surfaces gaps in cutover planning."

Tip: Go-live readiness review.`,

'How do you run a fit-gap analysis?':
`**Why they ask:** consulting discipline.

**Answer:**
"Demonstrate standard processes with the business, capture requirements, mark each as fit, configuration gap or development gap, prioritize the gaps, and look for standard alternatives before customizing. On one project, 30 requested customizations came down to 8 after we showed standard workarounds."

Tip: Standard first.`,

'How is intercompany handled?':
`**Why they ask:** multi-entity design.

**Answer:**
"Intercompany trading relationships create automatic sales and purchase order chains between entities, intercompany accounting handles journal entries with due-to and due-from postings, and eliminations happen in consolidation."

Tip: Trading relationships.`,

'What is advanced warehouse management?':
`**Why they ask:** WMS depth.

**Answer:**
"Location directives that decide where to pick and put away, work templates, wave processing, mobile device flows, license plates and replenishment — for directed warehouse operations. Location directives are where most of the design effort goes."

Tip: Location directives.`,

'What are key Business Central concepts?':
`**Why they ask:** BC knowledge.

**Answer:**
"Posting groups — general business and product, customer, vendor and inventory — that determine which G/L accounts transactions hit, dimensions for analysis, AL extensions, AppSource apps, and role centers with simpler setup than F&O."

Tip: Posting groups.`,

'Tell me about a D365 implementation you delivered.':
`**Why they ask:** proof.

**Answer:**
"I implemented F&O Finance and SCM for a manufacturer with six legal entities, led AP, AR and inventory design and data migration. They closed their first month in 6 days, down from 12."

Tip: Measured outcome.`,

'Tell me about resolving a post-go-live issue.':
`**Why they ask:** troubleshooting.

**Answer:**
"Inventory close failed because of negative inventory caused by timing issues. I found item model groups with the wrong settings, corrected them, recalculated, and turned off negative physical inventory where it shouldn't be allowed."

Tip: Root cause.`,

'How do you handle customization requests?':
`**Why they ask:** protecting upgradability.

**Answer:**
"Explore standard features and configuration first, quantify the cost and upgrade impact of custom code, and escalate the decision with options. 'This extension costs 15 days plus regression every update; the standard alternative needs one extra click' usually settles it."

Tip: Upgrade impact.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"MB-310 for Finance, MB-330 and MB-335 for Supply Chain, MB-800 for Business Central, MB-210 and MB-230 for Sales and Customer Service, and MB-700 for solution architects."

Tip: MB-700 for architects.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward lead consultant or solution architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I deliver D365 solutions using standard functionality wherever possible, with clean data and strong testing — I've shortened month-end closes and stabilized inventory processes."

Tip: Proof.`,

'How do purchase requisitions and approvals work in F&O?':
`**Why they ask:** P2P configuration.

**Answer:**
"Requisitions use procurement categories and catalogs, workflow approvals route by amount and financial dimensions, and approved lines are released to purchase orders, with budget checks if budget control is on."

Tip: Workflow.`,

'How does three-way matching work in D365?':
`**Why they ask:** AP control knowledge.

**Answer:**
"Invoice matching policies — two-way or three-way — compare invoice, purchase order and product receipt quantities and prices within tolerances. If the PO says 100 units at $10 and the invoice says $10.80 with a 5% price tolerance, it's flagged and needs approval before posting."

Tip: Tolerances.`,

'What AR features have you used?':
`**Why they ask:** order-to-cash depth.

**Answer:**
"Customer posting profiles, credit limits, the collections workspace, payment journals, settlement, interest notes, and Copilot collections assistance."

Tip: Collections workspace.`,

'How are fixed assets handled?':
`**Why they ask:** finance breadth.

**Answer:**
"Asset groups, books with depreciation profiles — often separate books for corporate and tax — acquisitions from AP, depreciation proposals, disposals, and integration with GL through posting profiles."

Tip: Multiple books.`,

'How does budgeting work?':
`**Why they ask:** finance breadth.

**Answer:**
"Budget planning with worksheets and workflows, budget register entries, and budget control, which checks purchase requisitions and orders against available funds and warns or blocks when they'd exceed the budget."

Tip: Budget control.`,

'What production types exist in D365 SCM?':
`**Why they ask:** manufacturing knowledge.

**Answer:**
"Discrete manufacturing with BOMs, routes and production orders; process manufacturing with formulas, batch orders and co-products; and lean manufacturing with kanban. I've worked mostly with discrete."

Tip: Know which you used.`,

'How is F&O security structured?':
`**Why they ask:** security model.

**Answer:**
"Roles are made of duties, duties of privileges, and privileges grant access to entry points like menu items. Segregation of duties rules flag conflicting duties, and security diagnostics help analyze what a role can reach."

Tip: Role → duty → privilege.`,

'What testing approach do you use?':
`**Why they ask:** quality discipline.

**Answer:**
"Unit testing of configuration, system integration testing, UAT with business scenarios, performance testing, and RSAT regression for updates."

Tip: RSAT.`,

'Users report that vendor invoices post to wrong accounts. What do you check?':
`**Why they ask:** troubleshooting.

**Answer:**
"Vendor posting profiles, the account mappings on procurement categories or item groups, default financial dimensions, and account structures — and then trace one invoice's voucher to see exactly which setup it picked up."

Tip: Posting profiles.`,

'Master planning creates too many planned orders. What do you check?':
`**Why they ask:** planning troubleshooting.

**Answer:**
"Coverage settings, safety stock, lead times, forecast consumption, and the negative days and positive days parameters. Positive days set too low, for example, ignores existing supply and creates new planned orders."

Tip: Coverage groups.`,

'How does D365 compare with Oracle Fusion?':
`**Why they ask:** market awareness.

**Answer:**
"Both are enterprise cloud ERPs. D365 integrates tightly with Microsoft 365, Azure and Power Platform; Oracle Fusion offers deep financials and a broad SaaS suite. The choice depends on the existing ecosystem, industry needs and cost."

Tip: Balanced.`,

'What is dual-write?':
`**Why they ask:** ERP–CRM integration.

**Answer:**
"Near real-time, bidirectional synchronization between F&O and Dataverse tables — so a customer created in Sales appears in F&O within seconds, enabling integrated experiences across ERP and CRM."

Tip: ERP–CRM link.`,

'How are workflows configured in F&O?':
`**Why they ask:** configuration skills.

**Answer:**
"Workflow types per module with conditions, approval steps, assignment by hierarchy, position or user, escalations and delegation — for example, invoices over $25,000 escalate to the CFO after 48 hours without action."

Tip: Hierarchy assignment.`,

'How is tax handled in F&O?':
`**Why they ask:** tax configuration.

**Answer:**
"Sales tax codes, sales tax groups and item sales tax groups — the intersection decides the tax — or the newer Tax Calculation service, plus integrations with Avalara or Vertex for US sales tax."

Tip: Tax engines.`,

'How do you provide analytics data from D365?':
`**Why they ask:** analytics architecture.

**Answer:**
"Synapse Link or the Microsoft Fabric link exports tables to a lake for Power BI and analytics, so heavy reporting doesn't query production."

Tip: Fabric link.`,

'How do you train users?':
`**Why they ask:** adoption.

**Answer:**
"Role-based sessions, task guides built with Task Recorder, Microsoft Learn content, and super-users in each department who support their colleagues."

Tip: Task recorder guides.`,

'What are posting profiles in D365 F&O?':
`**Why they ask:** GL integration foundation.

**Answer:**
"Setups that map subledger transactions — customers, vendors, inventory, fixed assets — to main accounts. The AR summary account for a customer group, or the inventory receipt and issue accounts for an item group, come from posting profiles. They're the foundation of how subledgers hit the GL."

Tip: The foundation of GL integration.`,

'What are model-driven apps vs canvas apps?':
`**Why they ask:** Power Platform knowledge.

**Answer:**
"Model-driven apps are generated from Dataverse data — forms, views, business process flows — with a consistent UI, and the D365 CE apps are built this way. Canvas apps are designed screen by screen and can connect to many data sources — good for task-specific mobile apps like a warehouse cycle count."

Tip: Know when to use each.`,

'What are business process flows?':
`**Why they ask:** CRM process design.

**Answer:**
"Guided stages and steps shown on a record — lead to opportunity moves through Qualify, Develop, Propose, Close — to standardize the process and require key data at each stage before moving on."

Tip: Stage gating.`,

'What environments do you need in an F&O project?':
`**Why they ask:** project setup.

**Answer:**
"Development environments, a build environment, test and UAT sandboxes at tier 2 or higher, a higher-tier performance environment, and production — with database movement operations to refresh UAT from production before key test cycles."

Tip: Refresh UAT from production.`,

'What does a D365 go-live cutover include?':
`**Why they ask:** go-live experience.

**Answer:**
"Freeze legacy systems, final data migration — open AR and AP, open orders, on-hand inventory, GL balances — reconciliation and business sign-off, configuration validation, switching integrations, user access checks, and hypercare support for the first weeks."

Tip: Reconciliation sign-off.`,

};
