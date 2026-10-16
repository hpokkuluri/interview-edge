// ea-d365 — generated from src/ea-d365-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Microsoft Dynamics 365 Consultant (F&O / Business Central / CE). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-d365'] = [
["Role", "What does a Dynamics 365 consultant do?",
`**Why they ask:** D365 covers ERP and CRM; they need to know which you know.

**Answer:** Implements and supports Dynamics 365 applications — Finance and Supply Chain Management (F&O), Business Central (SMB ERP) or Customer Engagement (Sales, Customer Service on Dataverse) — gathering requirements, configuring modules, designing processes, data migration, testing, training and post-go-live support.

Tip: State which apps you know.`, 'B', 'E'],

["Product", "D365 Finance & Operations vs Business Central?",
`**Answer:** **F&O** (Finance, Supply Chain Management) is for large enterprises with complex multi-entity, manufacturing and global needs. **Business Central** is for small and mid-size businesses with simpler, faster deployment. Both are cloud ERP; extensibility differs (X++ for F&O, AL for BC).

Tip: Fit to company size.`, 'B', 'E'],

["Finance", "Explain the chart of accounts and financial dimensions in F&O.",
`**Answer:** Main accounts plus financial dimensions (department, cost center, business unit, project) combined through account structures and advanced rules; dimensions enable flexible reporting without huge account lists.

Tip: Account structures.`, 'D', 'M'],

["Finance", "How does period close work in D365 Finance?",
`**Answer:** Financial period close workspace with tasks and checklists, subledger closing (AP, AR, inventory close), reconciliations, intercompany, revaluations, consolidations and reporting through Financial Reporting (Management Reporter).

Tip: Inventory close.`, 'D', 'M'],

["Supply Chain", "What are key SCM processes in D365?",
`**Answer:** Procure-to-pay (purchase requisitions, POs, receipts, vendor invoices), order-to-cash (sales orders, picking, packing, shipping, invoicing), inventory and warehouse management (WMS), master planning, and production control.

Tip: End-to-end flows.`, 'B', 'M'],

["Inventory", "Explain inventory dimensions in D365 SCM.",
`**Answer:** Product dimensions (configuration, size, color, style, version), storage dimensions (site, warehouse, location, inventory status, license plate) and tracking dimensions (batch, serial number) — controlled via dimension groups.

Tip: Dimension groups.`, 'D', 'M'],

["Inventory", "Which costing methods does D365 support?",
`**Answer:** FIFO, LIFO, weighted average, weighted average date, moving average and standard cost — configured in item model groups; inventory close settles issues against receipts for non-standard methods.

Tip: Item model groups.`, 'D', 'M'],

["Planning", "How does master planning work?",
`**Answer:** Calculates net requirements from demand (sales, forecasts) and supply (on-hand, orders) using coverage groups (period, min/max, requirement), generating planned orders. Planning Optimization is the current engine.

Tip: Coverage groups.`, 'D', 'M'],

["CE", "What is Dataverse?",
`**Answer:** The data platform underneath Dynamics 365 Customer Engagement and Power Apps — tables, relationships, business rules, security roles and APIs.

Tip: Power Platform foundation.`, 'B', 'M'],

["CE", "How does security work in Dynamics 365 CE?",
`**Answer:** Business units, security roles with privileges and access levels (user, business unit, parent-child BU, organization), teams, field security profiles and hierarchy security.

Tip: Access levels.`, 'D', 'M'],

["Power Platform", "How does Power Platform extend D365?",
`**Answer:** Power Apps for custom apps, Power Automate for workflow and integrations, Power BI for analytics, Copilot Studio for agents — all connected to Dataverse and D365 data.

Tip: Low-code extension.`, 'B', 'M'],

["Integration", "What integration options exist for F&O?",
`**Answer:** Data management framework (data entities, import/export projects), OData and custom services, business events, dual-write (real-time sync with Dataverse), recurring integrations, Azure services (Logic Apps, Service Bus, Synapse/Fabric links).

Tip: Data entities.`, 'D', 'M'],

["Data", "How do you migrate data into D365 F&O?",
`**Answer:** Data Management workspace with data entities and templates, load sequence (configuration → master data → open transactions → balances), validation, and reconciliation — using staging tables for review.

Tip: Sequence matters.`, 'B', 'M'],

["Lifecycle", "What is Lifecycle Services (LCS) / Power Platform admin center for F&O?",
`**Answer:** Tools for managing F&O environments, deployments, updates and monitoring; Microsoft is moving F&O environment management into the Power Platform admin center (unified admin).

Tip: Unified admin transition.`, 'D', 'M'],

["Updates", "How do you manage continuous updates?",
`**Answer:** Microsoft releases service updates several times a year; plan regression testing (RSAT), use update scheduling, review feature management to enable new features and test extensions.

Tip: RSAT automated testing.`, 'B', 'M'],

["Development", "What is extension-based development in F&O?",
`**Answer:** Customizations use extensions (no overlayering of Microsoft code) in X++, adding fields, methods (chain of command), event handlers and new objects — keeping upgrades seamless.

Tip: Chain of command.`, 'D', 'M'],

["Reporting", "What reporting options exist?",
`**Answer:** Financial Reporting, SSRS reports, Power BI embedded and analytical workspaces, Electronic Reporting for regulatory formats, and data export to a data lake/Fabric for analytics.

Tip: Electronic Reporting.`, 'B', 'M'],

["Copilot", "What Copilot features exist in Dynamics 365?",
`**Answer:** Copilot for summarizing records, drafting emails, collections assistance, demand planning insights, and agents for tasks like supplier communications and time entry.

Tip: Agentic features growing.`, 'B', 'M'],

["Implementation", "What is Microsoft's Success by Design?",
`**Answer:** Microsoft FastTrack methodology with review workshops (solution blueprint, data, integration, performance, go-live readiness) to reduce implementation risk.

Tip: Go-live readiness review.`, 'D', 'M'],

["Fit-Gap", "How do you run a fit-gap analysis?",
`**Answer:** Demonstrate standard processes, capture business requirements, mark each as fit, configuration gap, or development gap, prioritize gaps and look for standard alternatives before customizing.

Tip: Standard first.`, 'B', 'M'],

["Intercompany", "How is intercompany handled?",
`**Answer:** Intercompany trading relationships for automatic sales/purchase order chains, intercompany accounting for journal entries, and eliminations in consolidation.

Tip: Trading relationships.`, 'D', 'M'],

["Warehouse", "What is advanced warehouse management?",
`**Answer:** Location directives, work templates, wave processing, mobile device flows, license plates, and replenishment — for directed picking and putaway.

Tip: Location directives.`, 'D', 'S'],

["Business Central", "What are key Business Central concepts?",
`**Answer:** Posting groups (general business/product, customer/vendor, inventory) that determine G/L accounts, dimensions, AL extensions, AppSource apps, and simpler setup with role centers.

Tip: Posting groups.`, 'D', 'M'],

["Behavioral", "Tell me about a D365 implementation you delivered.",
`**Sample answer:** "I implemented F&O Finance and SCM for a manufacturer with 6 legal entities, led AP/AR and inventory design, and data migration. We closed the first month in 6 days, down from 12."

Tip: Measured outcome.`, 'B', 'M'],

["Behavioral", "Tell me about resolving a post-go-live issue.",
`**Sample answer:** "Inventory close failed due to negative inventory from timing issues. I identified item groups with bad settings, corrected them, recalculated, and added controls to prevent negative physical inventory."

Tip: Root cause.`, 'B', 'M'],

["Behavioral", "How do you handle customization requests?",
`**Answer:** Explore standard features and configuration, quantify cost and upgrade impact of custom code, and escalate decisions with options.

Tip: Upgrade impact.`, 'B', 'M'],

["Certifications", "Which certifications matter?",
`**Answer:** Microsoft Dynamics 365 Finance Functional Consultant (MB-310), Supply Chain (MB-330/335), Business Central (MB-800), Sales/Customer Service (MB-210/230), and Solution Architect (MB-700).

Tip: MB-700 for architects.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Lead consultant or solution architect.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver D365 solutions using standard functionality wherever possible, with clean data and strong testing — I've shortened month-end closes and stabilized inventory processes."

Tip: Proof.`, 'B', 'E'],

["Procurement", "How do purchase requisitions and approvals work in F&O?",
`**Answer:** Requisitions use procurement categories and catalogs, workflow approvals by amount and dimensions, then release to purchase orders, with budget checks if configured.

Tip: Workflow.`, 'B', 'M'],

["AP", "How does three-way matching work in D365?",
`**Answer:** Invoice matching policies (two-way or three-way) compare invoice, PO and product receipt quantities and prices with tolerances; mismatches require approval.

Tip: Tolerances.`, 'B', 'M'],

["AR", "What AR features have you used?",
`**Answer:** Customer posting profiles, credit limits, collections workspace, payment journals, settlement, interest notes and Copilot collections assistance.

Tip: Collections workspace.`, 'B', 'M'],

["Fixed Assets", "How are fixed assets handled?",
`**Answer:** Asset groups, books with depreciation profiles, acquisitions from AP, depreciation proposals, disposals and integration with GL posting profiles.

Tip: Multiple books.`, 'D', 'M'],

["Budget", "How does budgeting work?",
`**Answer:** Budget planning with worksheets and workflows, budget register entries, and budget control checking documents against available funds.

Tip: Budget control.`, 'D', 'M'],

["Production", "What production types exist in D365 SCM?",
`**Answer:** Discrete manufacturing (BOMs, routes, production orders), process manufacturing (formulas, batch orders, co-products), and lean manufacturing (kanban).

Tip: Know which you used.`, 'D', 'M'],

["Security", "How is F&O security structured?",
`**Answer:** Roles composed of duties, duties composed of privileges, privileges granting entry point access; segregation of duties rules and security diagnostics.

Tip: Role → duty → privilege.`, 'D', 'M'],

["Testing", "What testing approach do you use?",
`**Answer:** Unit testing of configuration, system integration testing, UAT with business scenarios, performance testing, and RSAT regression for updates.

Tip: RSAT.`, 'B', 'E'],

["Scenario", "Users report that vendor invoices post to wrong accounts. What do you check?",
`**Answer:** Vendor posting profiles, procurement category or item group account mappings, financial dimension defaults and account structures.

Tip: Posting profiles.`, 'B', 'M'],

["Scenario", "Master planning creates too many planned orders. What do you check?",
`**Answer:** Coverage settings, safety stock, lead times, forecast consumption, and negative days/positive days parameters.

Tip: Coverage groups.`, 'D', 'M'],

["Oracle Comparison", "How does D365 compare with Oracle Fusion?",
`**Answer:** Both are enterprise cloud ERPs; D365 integrates tightly with Microsoft 365, Azure and Power Platform, while Oracle Fusion offers deep financials and broad SaaS suite capabilities. Choice depends on ecosystem, industry needs and cost.

Tip: Balanced.`, 'D', 'M'],

["Dual-write", "What is dual-write?",
`**Answer:** Near real-time bidirectional synchronization between F&O and Dataverse tables, enabling integrated experiences across ERP and CRM.

Tip: ERP–CRM link.`, 'D', 'M'],

["Workflow", "How are workflows configured in F&O?",
`**Answer:** Workflow types per module with conditions, approval steps, assignments (hierarchy, position, user), escalations and delegation.

Tip: Hierarchy assignment.`, 'B', 'M'],

["Tax", "How is tax handled in F&O?",
`**Answer:** Sales tax codes, groups and item sales tax groups, or the newer Tax Calculation service; integrations with tax engines (Avalara, Vertex) for US sales tax.

Tip: Tax engines.`, 'D', 'M'],

["Data Lake", "How do you provide analytics data from D365?",
`**Answer:** Synapse Link / Microsoft Fabric link exporting tables to a lake for Power BI and analytics, avoiding heavy production queries.

Tip: Fabric link.`, 'D', 'M'],

["Training", "How do you train users?",
`**Answer:** Role-based sessions, task guides, Microsoft Learn, and super-users.

Tip: Task recorder guides.`, 'B', 'E']
];

QB['ea-d365'] = (QB['ea-d365']||[]).concat([
["Posting", "What are posting profiles in D365 F&O?",
`**Answer:** Configurations that map subledger transactions (customers, vendors, inventory, fixed assets) to main accounts, such as the AR summary account for a customer group, or inventory receipt and issue accounts per item group.

Tip: The foundation of GL integration.`, 'D', 'M'],
["CE", "What are model-driven apps vs canvas apps?",
`**Answer:** **Model-driven apps** are built from Dataverse data (forms, views, business process flows) with consistent UI, and are what D365 CE apps use. **Canvas apps** are pixel-designed apps connecting to many data sources, good for task-specific mobile apps.

Tip: Know when to use each.`, 'B', 'M'],
["CE", "What are business process flows?",
`**Answer:** Guided stages and steps displayed on records (for example lead to opportunity stages: Qualify, Develop, Propose, Close) to standardize processes and require key data at each stage.

Tip: Stage gating.`, 'B', 'E'],
["Environments", "What environments do you need in an F&O project?",
`**Answer:** Development (cloud-hosted or unified developer), build, test/UAT (sandbox tier 2+), performance testing (higher tier), and production, with database movement operations to refresh test environments.

Tip: Refresh UAT from production.`, 'D', 'M'],
["Cutover", "What does a D365 go-live cutover include?",
`**Answer:** Freeze legacy systems, final data migration (open AR/AP, open orders, on-hand inventory, GL balances), reconciliation and sign-off, configuration validation, integration switch-over, user access checks, and hypercare support.

Tip: Reconciliation sign-off.`, 'B', 'M']
]);
