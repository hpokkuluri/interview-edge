// Rewritten Oracle consultant-level role questions (fc/sfc fin and scm) (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'How is security structured in Oracle Fusion Financials?':
`**Why they ask:** every finance consultant touches security, and SoD is an audit topic.

**Answer:**
"Fusion security has two parts: what you can do and which data you can do it on. What you can do comes from job roles, like Accounts Payable Specialist, which contain duty roles and privileges. Which data comes from data access: data access sets for ledgers in GL, and business unit or ledger data roles for subledgers, set in Manage Data Access for Users. Abstract roles like Employee and Line Manager cover self-service. Custom roles are created by copying seeded roles in the Security Console; I never edit seeded roles. And I check segregation of duties, for example the person who creates suppliers shouldn't be able to pay them."

Tip: Use the "what vs which data" split. It makes a complex topic simple.`,

'What reporting tools are available in Oracle Fusion Financials?':
`**Why they ask:** to see if you'll pick the right tool for a reporting request.

**Answer:**
"OTBI is self-service, ad-hoc analysis on real-time data using subject areas, quick to build but with basic formatting. BI Publisher is for pixel-perfect documents like checks, invoices and statements, and for complex SQL-based extracts. Financial Reporting and Smart View report GL balances from the Essbase cube, with Smart View in Excel for ad-hoc and formatted statements. Account Monitor and Account Inspector give quick balance views and drill-down. And infolets and dashboards serve managers. My rule of thumb: ad-hoc goes to OTBI, documents and extracts to BIP, financial statements to Financial Reporting or Smart View."

Tip: End with the rule of thumb. It answers the follow-up before it's asked.`,

'How do you reconcile Payables to the General Ledger?':
`**Why they ask:** AP-to-GL reconciliation is a monthly control.

**Answer:**
"I run the Payables to Ledger Reconciliation report, which compares the AP trial balance to the GL liability balance by period. If there's a difference, I look at unaccounted transactions, accounting that wasn't transferred or posted, manual journals posted straight to the liability account, and transactions accounted in a different period. The goal is that the open invoices in the AP trial balance equal the GL liability account. And I fix the cause, not just book an adjustment. The same approach works for AR and Assets."

Tip: Say "fix the cause, not just adjust". It's what controllers want to hear.`,

'What is FBDI and how do you use it?':
`**Why they ask:** FBDI is the main bulk load tool in Fusion.

**Answer:**
"File-Based Data Import is the standard way to load bulk data. I download the Excel template for the object, like AP invoices, journals or suppliers, from Oracle's documentation. I fill it in and generate the CSV zip file. Then I upload it to UCM, run Load Interface File for Import, then the import process, for example Import Payables Invoices. Errors show in the import report or the interface correction pages, and I fix and reload. Other options are ADFdi spreadsheets for journals and some objects, and REST APIs for integrations."

Tip: Name the two-step process: load interface, then import. It shows you've done it.`,

'How do you test a configuration change before moving it to production?':
`**Why they ask:** untested changes cause production problems.

**Answer:**
"I write test scenarios with expected results, including the accounting. I test in a non-production environment: the normal path, edge cases and things that should fail. I check related processes, for example a payment terms change affects due dates and payment runs. A business user runs UAT and signs off. I move the change with a configuration package or documented manual steps, keeping evidence for audit. And after the next quarterly update, I rerun the key regression tests."

Tip: Mention checking related processes. It's where surprises come from.`,

'A user says they cannot see a business unit when entering invoices. How do you troubleshoot?':
`**Why they ask:** a common support ticket. They want a structured approach.

**Answer:**
"I go in order. Role: does the user have an AP role at all? Data access: in Manage Data Access for Users, is that role granted for this business unit? Setup: does the BU use the Payables business function and is it set up correctly? Refresh: I ask the user to sign out and back in, or wait for the role refresh. And if many users have the same problem, I check whether a recent security change or quarterly update caused it."

Tip: Say the order out loud: role, data access, setup, refresh. Interviewers like the structure.`,

'How do you handle a production support ticket you have never seen before?':
`**Why they ask:** support work is full of new problems.

**Answer:**
"First I reproduce it and capture the details: user, transaction, screenshots, error message and when it started. I check what changed recently, configuration, an update or data. I search My Oracle Support for the error and known bugs, and check the release notes. I test a fix in a lower environment. If it's a product bug, I raise an SR with Oracle, with steps and logs. I keep the user updated, and I document the fix in the knowledge base."

Tip: Mention "what changed recently". It solves most new problems.`,

'Tell me about yourself.':
`**Why they ask:** the opener. They want a clear, relevant story in about 90 seconds.

**Answer (example, use your own facts):**
"I'm an Oracle Financials consultant with about three years' experience, mainly in Fusion AP, AR and GL. On my last project I supported a Fusion implementation for a mid-size manufacturer: I configured payables options, payment terms and payment process profiles, built test scripts, and ran the AP part of UAT. Since go-live I've handled support tickets and month-end close issues, which taught me a lot about subledger accounting. Now I'm looking for a role where I can own a module end to end, which is why this position interests me."

Tip: Use present, past, why this role. Tailor the last line to the job description.`,

'Describe a time you made a mistake on a project. What happened?':
`**Why they ask:** they want honesty and what you learned.

**Answer (example):**
"I changed a payment term setup in test but missed one business unit when I documented it for production. After migration, invoices for that BU had the wrong due dates. I caught it in my post-migration check, told my lead straight away, fixed the setup, and corrected the affected invoices before the payment run, so no payments went out late or early. Since then I use a migration checklist and compare setups between environments after every move."

Tip: Own it, show how you caught it, and name the process you changed.`,

'How do you explain a technical issue to a non-technical finance user?':
`**Why they ask:** consultants spend a lot of time explaining.

**Answer:**
"I start with the business impact, like 'the invoice can't be paid until we receive the goods', not system terms. I use their words, approval, due date, account, and no table names. I tell them what they need to do and by when, in a few steps, and show it on screen or with a screenshot. Then I check they understood and follow up. For example, I'd explain a quantity hold as 'the invoice says 10 units, but we've only received 8'."

Tip: Use the 10-vs-8 example. It shows you can translate.`,

'Why do you want to grow in Oracle Finance consulting?':
`**Why they ask:** to see motivation beyond pay.

**Answer:**
"I like that ERP sits where finance and technology meet. A good setup decision can save the finance team hours every month, and I enjoy seeing that. I want to deepen my GL, SLA and close knowledge and move from configuring to designing solutions. I'm also working toward the Oracle Financials Cloud implementation certification."

Tip: Show curiosity about accounting, not just the software.`,

'How does SCM integrate with Financials?':
`**Why they ask:** good SCM consultants understand the accounting impact.

**Answer:**
"Procurement feeds AP, because POs and receipts are matched to invoices. Receiving feeds GL through receipt accrual accounting. Inventory and costing feed GL with inventory valuation, COGS and variances. Order Management feeds AR, because shipped lines are invoiced through AutoInvoice. Capital POs can create asset additions from AP. And project-related POs and costs go to Projects. A good SCM consultant knows the accounting each step creates."

Tip: End with that last sentence. It's what finance-minded interviewers want.`,

'How would you load items or on-hand balances into Fusion?':
`**Why they ask:** data loads are part of every SCM go-live.

**Answer:**
"Items go in through FBDI with the item import template, or Product Hub spreadsheets and import maps, including attributes, categories and org assignments. On-hand balances go in with Inventory Transaction Import as miscellaneous receipts, with lots, serials and locators, at cost. Open POs go through Purchase Order Import. The order matters: items, then org assignments, then costs, then on-hand. And I reconcile quantities and values with the legacy system after each load."

Tip: Stress the load order. Loading on-hand before costs gives zero-cost inventory.`,

'How would you test a full P2P cycle after a configuration change?':
`**Why they ask:** testing the whole chain catches what unit tests miss.

**Answer:**
"I create a requisition with the affected item or category and check approval routing. I convert it to a PO and check the defaults: supplier site, terms and accounts. I receive it with the right routing and tolerances. I match the invoice in AP and check holds. I run Create Accounting for receiving and AP and check the GL entries. And I test negative cases, like over-receipt and wrong price, plus a return."

Tip: Mention checking the accounting. Interviewers like that you go past the screens.`,

'Tell me about a time you supported users during a go-live.':
`**Why they ask:** go-live support shows how you work under pressure.

**Answer (example):**
"In the first week after a Fusion SCM go-live, warehouse users struggled with pick release and shipping. I was the on-site support for Inventory and Shipping. I sat with users on the floor, logged every issue, fixed the quick ones like a printer setup and a wrong picking rule, made two one-page job aids, and ran a 15-minute daily huddle. Tickets dropped from about 40 a day to under 10 by the end of week two, and shipments met the daily target."

Tip: Numbers and job aids make it concrete.`,

'How do you prioritize when several users need help at once?':
`**Why they ask:** support work means juggling.

**Answer:**
"Business impact first: anything stopping shipping, receiving or payments comes first. Then how many users are affected, then deadlines like month-end. I acknowledge everyone quickly so they know they're in the queue. If two critical issues collide, I escalate to my lead. And I track everything in the ticket tool so nothing gets lost."

Tip: Mention acknowledging everyone. It keeps users calm while they wait.`,

'Walk me through the phases of an Oracle Cloud implementation and your role in each.':
`**Why they ask:** senior consultants need to know the life cycle and their part in it.

**Answer:**
"Most projects follow Oracle Unified Method or a client's agile hybrid. Discovery and planning gathers requirements, current processes and scope. Design, or CRP1, configures a baseline, demos it to the business and runs fit-gap. Build, or CRP2, finishes configuration and builds extensions, reports, integrations and conversions. Testing covers SIT, UAT and parallel runs or reconciliations. Deploy covers mock conversions, cutover, go-live and hypercare. As a senior consultant I own the module design, for example AP and Payments: I write the functional design, configure, write test scripts, lead the CRP demos, train key users, and support cutover and hypercare."

Tip: Name what you own in each phase. That's the real question.`,

'What is a Conference Room Pilot (CRP) and how do you run a good one?':
`**Why they ask:** CRPs are where design is won or lost.

**Answer:**
"A CRP is a scripted demo of the configured system using the client's own data and processes, so the business can validate the design. I agree scenarios in advance, like 'PO-matched invoice with a price variance'. I use realistic data: their suppliers, accounts and amounts. I walk end to end, including accounting and reports, not just screens. I capture gaps and decisions live in a log with owners. And I follow up with updated designs and a sign-off. CRP1 validates the baseline; CRP2 validates the near-final solution with integrations."

Tip: Mention using the client's real data. It's what makes the business engage.`,

'How do you handle a requirement that Oracle cannot meet out of the box?':
`**Why they ask:** customization decisions affect cost and upgrades for years.

**Answer:**
"First I challenge the requirement: is it a real business need or a legacy habit? Could a process change solve it? Then I look for configuration: descriptive flexfields, SLA rules, approval rules, BIP reports or OTBI. If that's not enough, I look for a light extension: a Visual Builder page, an OIC integration, a BIP report, or a REST-based process. I record it in the RICEW inventory with its cost and support impact. And the business signs off on the trade-off."

Tip: Give an example where you avoided an extension by changing the process. Interviewers love that.`,

'How would you build a financial statement in Fusion?':
`**Why they ask:** financial statements are the end product of GL.

**Answer:**
"I build the account hierarchies first, for natural account and cost center, because the report depends on them. Then I use Financial Reporting Studio, or Smart View or Narrative Reporting, against the GL balances cube. Rows are hierarchy nodes like Revenue, COGS and Opex; columns are periods and scenarios like Actual, Budget and Prior Year; and the point of view is ledger, company and currency. I add formulas for variances and percentages, formatting, and drill-down to journals. Then I publish to the Financial Reporting Center and schedule batches if needed. Before release, I reconcile it to the trial balance."

Tip: End with reconciling to the trial balance. It's the step that builds trust.`,

'When would you choose OTBI vs BI Publisher?':
`**Why they ask:** picking the wrong tool wastes time.

**Answer:**
"OTBI is self-service, drag and drop on subject areas, real-time, and it applies user security automatically. It's best for ad-hoc analysis, dashboards and simple lists, but it can't join everything and formatting is basic. BI Publisher uses SQL data models with RTF, Excel or eText templates for pixel-perfect output. It's best for documents like checks, invoices and statements, bank files, complex joins and extracts, and bursting. It needs more technical skill, and you have to handle data security in the SQL yourself. So I start with OTBI and move to BIP when formatting or data complexity requires it."

Tip: Mention that BIP doesn't apply data security on its own. It's a senior-level point.`,

'What is a BIP data model and how do you secure a BIP report?':
`**Why they ask:** BIP security is often done wrong.

**Answer:**
"A data model defines the data: SQL queries, parameters, lists of values, links between data sets, and event triggers. The report applies a layout template, RTF, Excel or eText, to that data. To secure it, I put the report in a catalog folder with permissions for specific roles. And in the SQL, I filter the data by the user's access, for example by joining to the business unit security views, because BIP doesn't apply data security automatically."

Tip: The SQL security point is what separates senior from junior. Make sure you say it.`,

'How do you design custom roles for a finance implementation?':
`**Why they ask:** role design affects audit and SoD.

**Answer:**
"I start from the seeded job roles and map them to the client's real jobs: AP clerk, AP supervisor, GL accountant, controller. I copy the seeded roles and remove privileges that aren't needed, rather than building from scratch. I check segregation of duties conflicts, like supplier maintenance plus payments. I assign data access per BU or ledger. I document the design and get sign-off from the controller and audit. And I test each role with real scenarios, including negative tests to prove what a user can't do."

Tip: Mention negative tests. Proving what users can't do is half of security testing.`,

'How do you convert open AP invoices and validate the conversion?':
`**Why they ask:** conversion errors show up as wrong payments.

**Answer:**
"I extract open invoices as of cutover and usually load only the remaining unpaid amount. They load through FBDI, Payables Standard Invoice Import, with supplier, site, terms, due dates and the original invoice number. I validate and account them, and the offset goes to a conversion clearing account that's cleared by the GL balance conversion. Then I reconcile count and amount by supplier against the legacy aging, and finance signs off. I do this in at least two mock conversions before production."

Tip: Mention keeping original invoice numbers and due dates. Payment timing depends on them.`,

'What is MOAC in EBS R12?':
`**Why they ask:** EBS knowledge still matters for migrations.

**Answer:**
"Multi-Org Access Control lets a user work with several operating units from one responsibility. It's controlled by a security profile, set in the MO: Security Profile option, listing the operating units, and MO: Default Operating Unit sets the default. Before R12, users needed a separate responsibility for each operating unit. In Fusion, the equivalent is data access by business unit through data roles."

Tip: Link it to Fusion. It shows you can help EBS clients move.`,

'What are the key differences between EBS and Fusion for Financials consultants?':
`**Why they ask:** many clients are moving from EBS to Fusion.

**Answer:**
"Operating units become business units. Responsibilities become job roles plus data access. Concurrent programs become scheduled processes. Forms and Discoverer give way to OTBI, BIP and Smart View. Custom code and CEMLIs give way to extensions only: Visual Builder, OIC and BIP. Patching by the customer becomes quarterly updates by Oracle. And there are new capabilities: AI agents, Smart View on live balances, embedded analytics, and Intelligent Document Recognition."

Tip: Show you can explain these to an EBS client. That's often the job.`,

'How do you write a good functional test script?':
`**Why they ask:** good test scripts make UAT and regression work.

**Answer:**
"It has a clear purpose, which requirement or scenario it tests. It lists preconditions and data: supplier, item and user role. The steps are written so a business user can follow them. Each step has an expected result, including accounting entries and reports. It includes negative cases, what should fail. It traces back to requirements, and evidence like screenshots is captured. And I reuse the scripts as the regression pack for quarterly updates."

Tip: Mention reuse for regression. It doubles the value of the work.`,

'What goes into a functional design document?':
`**Why they ask:** design documents are a consultant's main deliverable.

**Answer:**
"The business requirement and scope. Current and future process flows. Configuration decisions with the values and the reasons. Gaps and how they're solved, with extensions, reports or workarounds. Integration and data touchpoints. Security and controls. Assumptions, dependencies and open items. And sign-off. A good design document lets someone else configure the module without asking me."

Tip: End with "someone else can configure from it". That's the quality bar.`,

'Tell me about a time you disagreed with your lead or the client on a design decision.':
`**Why they ask:** they want to see you push back respectfully, with facts.

**Answer (example):**
"My lead wanted one ledger for the US and Canada, with a CAD reporting currency. I owned the GL design and saw a problem: the Canadian entity needed a different fiscal calendar for statutory reporting. I prepared a short comparison of one ledger, separate ledgers, and a secondary ledger, showed that the calendar difference made a shared ledger impossible, and recommended a separate Canadian primary ledger. My lead agreed after the walkthrough, and we avoided rework later."

Tip: Show facts, respect and a recommendation, and say you'd accept the final decision either way.`,

'How do you mentor junior consultants?':
`**Why they ask:** senior roles include developing others.

**Answer:**
"I pair them on real tasks: they configure, I review. I explain why, not just which screen, including the accounting behind each setup. I give them ownership of a small area, like payment terms or tax setup, with check-ins. I share checklists, sample test scripts, and how to search My Oracle Support. And I give feedback early and specifically."

Tip: Mention one person you helped and where they are now. It makes it real.`,

'How do you handle scope creep from finance users during a project?':
`**Why they ask:** scope creep sinks go-live dates.

**Answer:**
"I log every new request in the requirements or change log. I assess the impact on effort, timeline and risk. I separate what's needed for go-live from what can go to phase 2. I take it to the project manager and business owner for a decision, rather than silently absorbing it. And I tell the requester what was decided."

Tip: Show you protected the go-live date without dismissing the business.`,

'Describe a complex production issue you resolved during month-end.':
`**Why they ask:** month-end issues test calm problem solving.

**Answer (example):**
"On day two of close, Create Accounting for Payables failed for 800 invoices. I was the AP lead. The error showed an invalid account combination, and I traced it to a cost center the GL team had end-dated the day before. I enabled the old cost center temporarily, reran accounting, then worked with GL to reclass the balances and add a check to the cost center change process. Close finished on time, and we added a pre-close report that flags disabled accounts."

Tip: Root cause plus a process fix is what makes it a senior answer.`,

'What accounting does a sales order shipment create, and where?':
`**Why they ask:** SCM consultants must understand O2C accounting.

**Answer:**
"At ship confirm, Cost Management books Dr COGS, or Deferred COGS, Cr Inventory at the item cost. At invoicing, AR books Dr Receivable, Cr Revenue, or Deferred Revenue, Cr Tax. If revenue is deferred, for example because of an acceptance clause, COGS is deferred too and recognized in line with revenue. SLA creates the accounting in each subledger, and it's transferred to GL."

Tip: Mention deferred COGS matching deferred revenue. It's the detail that impresses.`,

'How do you integrate a third-party logistics (3PL) provider with Fusion?':
`**Why they ask:** 3PL integration is common and easy to get wrong.

**Answer:**
"Outbound, shipment requests from Order Management or pick release go to the 3PL through OIC, B2B messaging or files. Inbound, ship confirmations with tracking, lots and serials come back through the shipment confirmation services, and receipts through the receiving APIs. Periodic on-hand snapshots let us reconcile inventory. I add error handling, monitoring dashboards, and idempotency so retries don't create duplicates. The 3PL is often modeled as an external warehouse org with fulfillment connectors in OM."

Tip: Mention the on-hand reconciliation. 3PL inventory drifts without it.`,

'What is Oracle Integration Cloud (OIC) and how is it used with SCM?':
`**Why they ask:** OIC is the main integration tool for Fusion.

**Answer:**
"OIC is Oracle's integration platform. It has adapters, including the Fusion ERP Cloud adapter for REST, SOAP, business events and FBDI, plus FTP, database, REST and EDI. Business events, like Purchase Order Approved, trigger integrations in real time. Scheduled integrations handle batches, like a nightly item sync. It also has process automation and B2B. Typical SCM uses are sending POs to suppliers, receiving ASNs and receipts from 3PLs, syncing items to PLM or MES, and bringing in orders from e-commerce."

Tip: Give two real integrations you've seen. It turns a definition into experience.`,

'What OTBI subject areas would you use for procurement spend analysis?':
`**Why they ask:** a practical reporting question.

**Answer:**
"Procurement – Spend Real Time for invoice-based spend by supplier, category and BU. Purchasing – Purchase Orders Real Time for PO amounts, status and buyer. Procurement – Requisitions Real Time for requisition cycle times. Plus the Supplier Performance and Agreements subject areas. I combine them with categories and cost centers to slice the data. There are also prebuilt Procurement dashboards, and AI-based Spend Classification for spend without good categories."

Tip: Mention Spend Classification. It fills the gap for non-PO spend.`,

'How is SCM data security set up in Fusion?':
`**Why they ask:** SCM security has more layers than finance.

**Answer:**
"Job roles, like Buyer, Warehouse Manager and Order Manager, carry the function privileges. Data access is by business unit for procurement, requisitioning and order management; by inventory organization; and by cost organization for costing. Procurement agents add document-level access. Item data security in Product Hub works by item class and roles. I test with real user accounts and avoid giving superuser roles to business users."

Tip: Mention procurement agents. It's the layer people forget.`,

'What is your approach to converting open sales orders and POs?':
`**Why they ask:** open order conversion affects day-one operations.

**Answer:**
"I convert only open lines, not shipped or received ones; closed history stays in legacy or an archive. POs load through Purchase Order Import with the remaining quantity and the original PO number in a reference field, with approval bypassed for converted documents. Sales orders load through order import with original references and prices frozen to the legacy prices. Open receipts and received-not-invoiced need an agreed accrual treatment with finance. Then I reconcile quantities and values, and the business signs off after each mock."

Tip: Mention freezing legacy prices on sales orders. Repricing on conversion causes disputes.`,

'How do you plan system integration testing (SIT) for an SCM implementation?':
`**Why they ask:** SIT is where cross-module problems show up.

**Answer:**
"I build end-to-end scenarios covering P2P, O2C, plan-to-produce, returns and intercompany flows across modules and integrations, including the finance accounting at each step. I use converted data from a mock load. Testers are assigned by role, and defects are tracked in a tool with severity and owners. Regression cycles run after fixes. Exit criteria are no open critical or high defects and key scenarios passed and signed off."

Tip: Mention using converted data. Test data hides problems that real data shows.`,

'Tell me about a time you improved a supply chain process using Oracle.':
`**Why they ask:** they want proof you add business value.

**Answer (example):**
"Buyers were spending hours each week converting requisitions to POs by hand. I owned procurement configuration, so I analyzed six months of requisitions and found 70% were repeat items from 15 suppliers. I set up blanket agreements with those suppliers, loaded catalogs and turned on automatic PO creation. About 65% of requisitions then became POs with no buyer touch, buyers moved to sourcing work, and PO cycle time dropped from three days to same-day."

Tip: Quote the before and after numbers. They make the story.`,

'How do you work with the finance team on SCM topics?':
`**Why they ask:** SCM and finance must work together.

**Answer:**
"I involve finance early on costing method, accrual and variance accounts, intercompany flows and inventory valuation. In CRPs I walk them through the accounting for each SCM transaction. We agree month-end responsibilities: accrual review, cost close and inventory reconciliation. We build shared reports, like inventory valuation to GL. And I speak their language: debits and credits, not just screens."

Tip: Say "debits and credits, not just screens". Finance teams notice.`,

"Describe a situation where a go-live didn't go as planned.":
`**Why they ask:** they want calm triage and learning.

**Answer (example):**
"At go-live, pick release created tasks for the wrong subinventory and the warehouse couldn't ship. I owned shipping configuration. I quickly found the picking rule pointed to a test subinventory that had been converted with stock. I corrected the rule, re-released the orders, and moved stock with the warehouse lead. Then I added a cutover checklist item to validate picking rules against production data. Shipping resumed within four hours, and we met the day's shipments with overtime."

Tip: Show calm triage, root cause and prevention. That's what they're listening for.`,

};
