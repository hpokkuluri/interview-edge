// Rewritten QA & Testing — ERP Test Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix qa-erp-).
module.exports = {

'Walk me through testing a procure-to-pay scenario in Oracle Fusion.':
`**Why they ask:** P2P is the core ERP test scenario.

**Answer:**
"I'd follow the money end to end. Create a requisition for, say, 10 laptops at $1,000 and confirm it routes to the right approver for a $10,000 amount. Create the purchase order and check defaults — supplier site, ship-to, charge account — and approval. Receive the goods and check receiving tolerances. Create the AP invoice and match it three-way to PO and receipt, validate it, and check no holds. Pay it through a payment process request. Then run Create Accounting and verify the journals: receipt accrual debit inventory or expense and credit accrual, then invoice clearing the accrual against AP liability, then payment debiting liability and crediting cash — and confirm GL balances. Negative cases: over-receipt, a price variance hold when the invoice says $1,050, a closed period, and an inactive supplier."

Tip: Showing the accounting step sets you apart.`,

'Walk me through testing an order-to-cash scenario.':
`**Why they ask:** the revenue side of ERP.

**Answer:**
"Create the customer and a sales order; check pricing, the credit check and approval. Pick, pack and ship, verifying inventory decreases and cost of goods sold is accounted. AutoInvoice creates the invoice with correct tax; apply a receipt; then check AR aging, revenue and receivable accounting in GL. Negative cases: a customer on credit hold, insufficient inventory, and a return through an RMA with a credit memo."

Tip: Mention verifying COGS and revenue accounting.`,

'Walk me through testing a record-to-report (close) scenario.':
`**Why they ask:** month-end close is where finance lives.

**Answer:**
"Enter manual and recurring journals with approval, run allocations, revalue foreign currency balances, reconcile subledgers to GL, run intercompany, close subledger periods and then GL, and run financial reports from Financial Reporting Studio to verify balances and consolidation. It needs realistic period data — a close test on an empty ledger proves nothing."

Tip: Close testing needs realistic period data.`,

'What are the testing phases on an ERP implementation?':
`**Why they ask:** project lifecycle knowledge.

**Answer:**
"Configuration and unit testing by consultants, conference room pilots to validate the design with the business, system integration testing end to end with integrations — usually two or three SIT cycles — data migration testing, performance testing, UAT by business users, cutover rehearsals or mock conversions, and then regression testing for every update after go-live."

Tip: Mention multiple SIT cycles.`,

'SIT vs UAT on an ERP project?':
`**Why they ask:** a key distinction.

**Answer:**
"SIT is run by the project team to prove processes work end to end across modules and integrations. UAT is run by business users with their real scenarios to confirm the system supports their daily work before sign-off. Both need scripts, data, defect management and exit criteria. If UAT is finding basic defects, SIT wasn't thorough enough."

Tip: UAT shouldn't find basic defects — SIT should.`,

'How do you test Oracle Cloud quarterly updates?':
`**Why they ask:** quarterly updates are a constant ERP reality.

**Answer:**
"The update reaches our test environment about two weeks before production. In that window I review the What's New and readiness material for changed features and Redwood pages, run the regression suite — ideally automated — across core flows, reports, integrations and extensions, log issues and raise SRs with Oracle, retest fixes, and sign off before the production update. Two weeks isn't enough for a full manual regression, which is why automation matters so much here."

Tip: Mention the tight two-week window and why automation matters.`,

'How would you build a regression suite for Oracle Fusion?':
`**Why they ask:** sustained quality after go-live.

**Answer:**
"Start from critical business processes and their variations — different business units, currencies — then integrations, key reports and BI Publisher outputs, security roles, and past issues. Tier them so P1 tests must pass, automate the stable P1 and P2 flows, and update the suite after every design change. Mapping each test to the business process document keeps it relevant."

Tip: Tie the suite to business process documentation.`,

'Which tools automate ERP testing?':
`**Why they ask:** tooling knowledge.

**Answer:**
"ERP-focused tools like Opkey, Tricentis Tosca, Worksoft Certify and Panaya, plus Oracle's own testing offerings. General tools like Selenium or Playwright work but are harder with complex ERP pages, and API testing covers REST services and integrations. I'd choose based on Redwood and classic page support, maintenance effort, business-user friendliness and cost — ideally after a proof of concept on our own processes."

Tip: Mention you evaluated tools in a PoC if true.`,

'What are the challenges of automating Oracle Fusion UIs?':
`**Why they ask:** practical automation experience.

**Answer:**
"Dynamic element IDs and complex components across classic ADF pages and newer Redwood pages, UI changes every quarter, long-running ESS jobs that tests must poll until complete, and data dependencies like open periods and valid suppliers and items. I mitigate with ERP-aware tools, API-based data setup, robust waits and modular tests. Redwood conversions in particular change locators, so tests break on update day unless they're designed for it."

Tip: Mention Redwood conversion changing locators.`,

'How do you manage test data in ERP testing?':
`**Why they ask:** data is the biggest SIT risk.

**Answer:**
"Prepare master data per scenario — suppliers, customers, items, employees, bank accounts — plus open accounting periods and valid accounts and cost centers. Plan around environment refreshes from production, mask sensitive data, and for repeatable automation create data through FBDI or REST APIs. In most SIT cycles I've run, missing or wrong data blocked more tests than defects did."

Tip: Data readiness is usually the biggest risk in SIT.`,

'How do you test data migration?':
`**Why they ask:** migration errors are high-impact.

**Answer:**
"Compare record counts source versus target, reconcile financial totals — open AP, AR and GL balances by account — sample-check field values, and prove migrated records work in transactions: pay a migrated invoice, ship a migrated order, receive against a migrated PO. Check error logs, and run multiple mock conversions with sign-off. If open AP is $4.2 million in legacy, it must be $4.2 million in Fusion."

Tip: "Migrated data must be usable, not just loaded."`,

'How do you test an inbound integration into Fusion?':
`**Why they ask:** integrations break most often.

**Answer:**
"Positive cases — valid records load and show correctly in the UI and reports. Negative cases — invalid data rejected with clear errors. Partial failures, duplicates so a resend doesn't create two invoices, volume, monitoring and alerts, reprocessing of failed records, and reconciling counts between the source and Fusion. I watch runs in the OIC monitoring console to confirm error handling actually fires."

Tip: Mention testing via OIC monitoring.`,

'How do you test an outbound integration such as a bank payment file?':
`**Why they ask:** payment files are high-risk.

**Answer:**
"Generate payments, create the file, and validate the format — NACHA or ISO 20022 XML — against the bank's specification. Check amounts, bank details, control totals, special characters in supplier names and multiple currencies, then run an end-to-end test with the bank's test environment before go-live. Banks often need several weeks to schedule testing, so I book it early."

Tip: Bank testing usually needs extra lead time.`,

'How do you test ERP roles and security?':
`**Why they ask:** security is a SOX concern.

**Answer:**
"For each job role, test that users can do their tasks and can't do others — an AP clerk can enter invoices but can't approve payments. Test data security: users only see their own business units, ledgers or inventory orgs. Check segregation of duties conflicts and approval routing by role and hierarchy. The negative tests are the ones most often skipped."

Tip: Negative security testing is often skipped — mention you do it.`,

'How do you test reports in an ERP?':
`**Why they ask:** reports drive decisions.

**Answer:**
"Validate totals against known transactions and GL balances, check parameters and filters, formatting and output types like PDF and Excel, security — who can run it and what data they see — performance with large data, and scheduled delivery. A trial balance report that doesn't tie to GL is a release blocker."

Tip: Reconcile report totals to GL.`,

'How do you test approval workflows?':
`**Why they ask:** approvals are full of edge cases.

**Answer:**
"Test each rule — amount thresholds, categories, cost centers — routing up the hierarchy, delegation and vacation rules, rejection and resubmission, timeouts and escalation, and notifications in email and the worklist. Boundaries matter: if over $10,000 needs director approval, I test $9,999.99, exactly $10,000 and $10,000.01."

Tip: Boundary amounts are key — exactly at the threshold.`,

'Why must ERP testers check accounting entries?':
`**Why they ask:** a hallmark of strong ERP testers.

**Answer:**
"Because many defects never show in the UI — the invoice looks perfect but hits the wrong account, cost center or amount. For each transaction I check the subledger journal, its transfer to GL and the resulting balances, using Account Inspector or SLA journal reports. Finance will reject a system whose accounting is wrong, no matter how good the screens look."

Tip: Mention Account Inspector or SLA journal reports.`,

'How do you triage ERP defects?':
`**Why they ask:** ERP experience shows in triage.

**Answer:**
"Classify each one: configuration issue, data issue, training or user error, integration issue, custom extension bug, or product bug that needs an SR with Oracle. Route it to the right owner, set severity by business impact, and run daily triage during SIT and UAT. Often half the 'defects' in early UAT are training or data."

Tip: Knowing these categories shows ERP experience.`,

'When and how do you raise an SR with Oracle?':
`**Why they ask:** vendor engagement.

**Answer:**
"When a defect looks like standard product behavior, not our configuration or data. I provide clear steps, the environment, screenshots, diagnostic logs, business impact and severity, reproduce it in a vanilla scenario if possible, and track it until it's fixed or there's a workaround. A clear SR with a reproducible case gets answered much faster."

Tip: Good SRs get faster answers.`,

'What is cutover testing or mock conversion?':
`**Why they ask:** go-live readiness.

**Answer:**
"A full rehearsal of the go-live sequence: data loads in order, configurations, switching integrations, timing every step, validation and reconciliation, and sign-offs. Multiple mocks reduce risk and prove the plan fits the window — if mock one takes 70 hours and the cutover weekend is 60, we know early."

Tip: Mention timing each step.`,

'What performance testing matters for an ERP?':
`**Why they ask:** non-functional risks.

**Answer:**
"Peak online transactions, batch jobs at volume — payment runs, AutoInvoice, MRP, cost processing — integration volumes, and month-end close load, which is the real peak. For Oracle Cloud, load testing has to be coordinated with Oracle under their policy."

Tip: Month-end is the real peak.`,

'What should you watch for when Redwood pages replace classic pages?':
`**Why they ask:** current Oracle reality.

**Answer:**
"Changed navigation and field placement, different personalization behavior, new or missing fields, broken automated test locators, and user training needs. I test Redwood pages alongside classic during the transition, review Oracle's Redwood readiness notes for each update, and update scripts and training materials."

Tip: Mention reviewing Oracle's Redwood readiness notes for the update.`,

'How do you test ERP extensions built in Visual Builder or OIC?':
`**Why they ask:** extensions break on updates.

**Answer:**
"Functional tests of the extension's UI and logic, integration with Fusion REST APIs, role-based security, error handling, and regression after every quarterly update, since APIs and pages can change underneath them."

Tip: Extensions are a common source of update regressions.`,

'How do you prepare business users for UAT?':
`**Why they ask:** UAT success depends on preparation.

**Answer:**
"Training on the system and on how to log defects, clear scripts based on their real scenarios, data and access ready before day one, a schedule with daily check-ins, and support people in the room. Then track progress and sign-off per process."

Tip: Good UAT preparation prevents chaos.`,

'Which metrics do you report during ERP testing?':
`**Why they ask:** reporting.

**Answer:**
"Scripts executed versus planned by process, pass rates, defects by severity, module and status, defect aging, blocked tests, and readiness against exit criteria — shown by business process so leaders see 'Procure-to-Pay: green, Order-to-Cash: amber.'"

Tip: Show readiness by business process.`,

'How would you set up a test strategy for an ERP implementation?':
`**Why they ask:** planning ability.

**Answer:**
"Define phases with entry and exit criteria, a scenario library mapped to business processes, a RACI between consultants, testers and the business, environment and data plans, defect management and triage cadence, tools, the regression and automation plan for after go-live, and reporting."

Tip: Mention a RACI.`,

'How do you prioritize test scenarios when time is short?':
`**Why they ask:** risk-based thinking.

**Answer:**
"By risk: financial impact, compliance like SOX and tax, volume, complexity, integrations and past issues. Must-pass processes come first — can we pay suppliers, invoice customers, run payroll and close the books?"

Tip: "Can we pay, bill, and close?"`,

'How do you test segregation of duties?':
`**Why they ask:** control testing.

**Answer:**
"Run SoD analysis on the role design — like create supplier versus pay supplier — test that a user is actually blocked from the conflicting action, and verify compensating controls where a conflict is accepted. Oracle Advanced Access Controls can automate the analysis if it's licensed."

Tip: Mention Oracle Advanced Access Controls if used.`,

'How do you test tax calculation in an ERP?':
`**Why they ask:** tax errors are costly.

**Answer:**
"Scenarios by jurisdiction, product taxability, exemptions and ship-from/ship-to combinations; integration with tax engines like Vertex or Avalara and the tax accounting; and VAT and reverse charge for international flows. A shipment from Texas to an exempt customer in California should calculate zero tax and record the exemption certificate."

Tip: Tax errors are costly — thorough testing pays off.`,

'How do you test multi-currency and multi-entity scenarios?':
`**Why they ask:** global ERP complexity.

**Answer:**
"Foreign-currency transactions with the right rate types, revaluation and realized gains and losses, intercompany transactions between entities that net to zero, translation in consolidation, and reporting in each ledger — including rounding checks, which are a classic source of small but annoying differences."

Tip: Include rounding checks.`,

'Tell me about a business-critical defect you found in ERP testing.':
`**Why they ask:** proof of impact.

**Answer:**
"During SIT I noticed payments for one country used the wrong bank file format. The file passed system validation, but the bank would have rejected every payment. Catching it before go-live avoided a missed supplier payment run."

Tip: Business impact is the story.`,

'Tell me about handling a difficult UAT.':
`**Why they ask:** organization under pressure.

**Answer:**
"Business users were overwhelmed and logging training questions as defects. I set up daily triage, separated training items from real defects, ran quick training sessions, and UAT finished on schedule with a clean defect list."

Tip: Organization under pressure.`,

'How do you work with functional consultants?':
`**Why they ask:** collaboration.

**Answer:**
"Understand their design, review the configuration documents, raise defects with clear evidence and business impact, and work through root cause together. We both want the processes to work."

Tip: Partnership tone.`,

'What are ESS jobs and how do they affect testing?':
`**Why they ask:** Oracle-specific knowledge.

**Answer:**
"Enterprise Scheduler Service jobs are background processes in Fusion — imports, Create Accounting, payments, reports. Tests have to submit the job, poll its status until it finishes, check the log and output, and verify the downstream results. Automation must handle these waits properly or it'll be flaky."

Tip: Automation must handle job waits.`,

'What is FBDI and how do testers use it?':
`**Why they ask:** data loading knowledge.

**Answer:**
"File-Based Data Import: Excel templates generate CSV files zipped and uploaded, then 'Load Interface File for Import' loads them into interface tables and an import process creates the records. Testers use it to load test data in bulk and to test data migration and inbound integrations — including checking the error reports for rejected rows."

Tip: Know the import → load interface → import process flow.`,

'How do you test with OTBI or BI Publisher reports?':
`**Why they ask:** reporting tools.

**Answer:**
"Validate report data against transactions and GL, test filters and prompts, security by role, and scheduled outputs. I also use OTBI as a testing tool — a quick analysis is often the fastest way to confirm 500 migrated records look right."

Tip: Testers can use OTBI to verify data quickly.`,

'How is SAP testing similar or different?':
`**Why they ask:** transferable skills.

**Answer:**
"The business-process focus — P2P, O2C, R2R — and integration testing are the same. SAP uses transactions or Fiori apps, transports to move changes, and tools like Tricentis Tosca and SAP Solution Manager or Cloud ALM for test management. S/4HANA upgrades and RISE releases need regression just like Oracle's quarterly updates."

Tip: Shows transferable skills.`,

'How do you manage ERP test environments?':
`**Why they ask:** environment discipline.

**Answer:**
"Coordinate refresh schedules for production-to-test clones, run post-refresh steps — mask data, repoint integration endpoints away from production, reset passwords — keep an environment calendar, and plan around quarterly update timing. Forgetting to repoint an integration after a refresh can send test payments to a real bank, so it's on a checklist."

Tip: Refresh steps are often forgotten — mention a checklist.`,

'Why do auditors care about ERP testing evidence?':
`**Why they ask:** compliance awareness.

**Answer:**
"Under SOX, changes affecting financial reporting need evidence of testing and approval as part of change management ITGCs. Test scripts, results and sign-offs must be retained and easy to produce."

Tip: Keep evidence organized.`,

'Which test management tools have you used on ERP projects?':
`**Why they ask:** tooling experience.

**Answer:**
"Jira with Zephyr for SIT scripts and defects, Oracle's process test templates, and Opkey for regression automation on quarterly updates."

Tip: Be specific.`,

'How would you lead a test team on an ERP project?':
`**Why they ask:** leadership.

**Answer:**
"Clear process ownership per tester, daily stand-ups and triage, a test calendar aligned to the project plan, data and environment readiness checks before each cycle, metrics to the PMO, and coaching the team on the business processes themselves."

Tip: Business-process knowledge is the core skill.`,

'Why ERP testing?':
`**Why they ask:** motivation.

**Answer:**
"ERP systems run the business — finance, supply chain, HR. Testing them means understanding how the business works and preventing expensive problems like failed payments or wrong accounting. I enjoy that mix of business and technical work."

Tip: Business impact motivation.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I test ERP processes end to end and always verify the accounting. I've supported SIT, UAT and quarterly updates for Oracle Fusion, built automated regression, and caught issues like a wrong bank file format before go-live."

Tip: ERP-specific proof.`,

'What happens in hypercare after go-live?':
`**Why they ask:** post-go-live experience.

**Answer:**
"Intensive support for the first few weeks: monitoring transactions and integrations, fast triage, daily stand-ups, and close watch on first-time events — the first payment run, the first month-end close. Testers reproduce issues and verify fixes quickly."

Tip: Testers help reproduce and verify fixes.`,

'Give examples of negative tests in an ERP.':
`**Why they ask:** control thinking.

**Answer:**
"Entering transactions in a closed period, invalid account combinations, inactive suppliers or customers, exceeding approval limits, duplicate invoice numbers, over-receipt beyond tolerance, and users without the required roles trying the action."

Tip: Negative tests catch control gaps.`,

'What breaks most often after ERP updates?':
`**Why they ask:** focus for regression.

**Answer:**
"Custom reports and extensions, integrations relying on changed APIs, personalized pages, approval rules and Redwood page changes. So regression effort goes heaviest on customizations."

Tip: Focus regression on customizations.`,

'How do you report ERP test status to leadership?':
`**Why they ask:** executive communication.

**Answer:**
"Readiness by business process in green, amber or red, the key open defects with their business impact, risks to go-live, and decisions needed — not test case counts."

Tip: Process-based, not test-case counts.`,

'How do you test Oracle Fusion REST APIs?':
`**Why they ask:** API skills in ERP.

**Answer:**
"Postman or automated scripts with a test user's credentials through basic auth or OAuth, calling resources under /fscmRestApi/resources — like the invoices resource — to create, query and update records. I check status codes and payloads, verify the records in the UI and accounting, and test errors: missing required fields, invalid values and security restrictions. APIs are also the fastest way to create test data."

Tip: APIs are also great for creating test data quickly.`,

'Why is period status important in ERP testing?':
`**Why they ask:** practical ERP detail.

**Answer:**
"Transactions can only be accounted in open periods, so tests fail with confusing errors if the GL, AP, AR, inventory or cost periods aren't open for the dates used. I plan test dates and period statuses as part of environment readiness, and include negative tests for closed periods."

Tip: A practical detail that shows real experience.`,

};
