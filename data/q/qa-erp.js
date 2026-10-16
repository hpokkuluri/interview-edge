// qa-erp — generated from src/qa-erp-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// ERP / Oracle Cloud Tester. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-erp'] = [
["ERP Testing", "How is testing an ERP different from testing a typical web app?",
`**Why they ask:** ERP testing needs business-process thinking.

**Answer:** You test **end-to-end business processes** across modules (procure-to-pay, order-to-cash, record-to-report), not just screens. Results must be verified in **accounting** (journals, balances, reports). Behavior is **configuration-driven**, so the same screen behaves differently by business unit. There are **roles and approvals**, **batch jobs** (imports, payment runs, close), **integrations**, and SaaS vendors push **quarterly updates** that need regression.

Tip: Mention you always check accounting, not just the UI.`, 'B', 'E'],

["ERP Testing", "Walk me through testing a procure-to-pay scenario in Oracle Fusion.",
`**Answer:**
1. Create a requisition; verify approval routing.
2. Create the purchase order; verify defaults (supplier site, ship-to, accounts) and approval.
3. Receive the goods; check tolerances and receipt routing.
4. Create and match the AP invoice (3-way); validate; check holds.
5. Pay through a payment process request.
6. Run Create Accounting; verify SLA journals (receipt accrual, liability, cash) and GL balances.
Negative cases: over-receipt, price variance hold, closed period, inactive supplier.

Tip: Showing the accounting step sets you apart.`, 'B', 'E'],

["ERP Testing", "Walk me through testing an order-to-cash scenario.",
`**Answer:** Create the customer and sales order; check pricing, credit check and approval; pick, pack and ship; verify inventory decreases and cost of goods sold accounting; AutoInvoice creates the invoice with correct tax; apply a receipt; check AR aging, revenue and receivable accounting in GL. Negative cases: credit hold, insufficient inventory, return (RMA) and credit memo.

Tip: Mention verifying COGS and revenue accounting.`, 'B', 'E'],

["ERP Testing", "Walk me through testing a record-to-report (close) scenario.",
`**Answer:** Enter manual and recurring journals with approval, run allocations, revalue foreign currency, reconcile subledgers to GL, run intercompany, close subledger periods then GL, run financial reports (FSG/Financial Reporting Studio) and verify balances and consolidation.

Tip: Close testing needs realistic period data.`, 'D', 'M'],

["Test Phases", "What are the testing phases on an ERP implementation?",
`**Answer:** Configuration/unit testing (consultants), **CRP** (conference room pilots to validate design), **SIT** (system integration testing — end-to-end with integrations), **data migration testing**, **performance testing**, **UAT** (business users), **cutover rehearsals (mock conversions)**, then post-go-live regression for updates.

Tip: Mention multiple SIT cycles.`, 'B', 'E'],

["Test Phases", "SIT vs UAT on an ERP project?",
`**Answer:** **SIT** is run by the project team to prove processes work end to end across modules and integrations. **UAT** is run by business users with realistic scenarios to confirm the system supports their daily work before sign-off. Both need scripts, data, defect management and exit criteria.

Tip: UAT shouldn't find basic defects — SIT should.`, 'B', 'E'],

["Quarterly Updates", "How do you test Oracle Cloud quarterly updates?",
`**Answer:** Updates reach the test environment about two weeks before production. Review the What's New and readiness material for changed features and Redwood pages, run the regression suite (ideally automated) across core flows, reports, integrations and extensions, log issues and raise SRs with Oracle, retest fixes, and sign off before production updates.

Tip: Mention the tight two-week window and why automation matters.`, 'B', 'M'],

["Quarterly Updates", "How would you build a regression suite for Oracle Fusion?",
`**Answer:** Start with critical business processes and their variations (business units, currencies), integrations and interfaces, key reports and BI Publisher outputs, security roles, and known past issues. Prioritize tiers (P1 must-pass), automate the stable P1/P2 flows, and update the suite after every design change.

Tip: Tie the suite to business process documentation.`, 'D', 'M'],

["Automation", "Which tools automate ERP testing?",
`**Answer:** ERP-focused tools: Opkey, Tricentis Tosca, Worksoft Certify, Panaya, Oracle's own testing offerings. General tools: Selenium/Playwright (harder with complex ERP UIs), plus API testing for REST services and integrations. Choose based on Redwood and classic page support, maintenance effort, business-user friendliness and cost.

Tip: Mention you evaluated tools in a PoC if true.`, 'D', 'M'],

["Automation", "What are the challenges of automating Oracle Fusion UIs?",
`**Answer:** Dynamic element IDs and complex components (classic ADF pages and newer Redwood pages), frequent UI changes with quarterly updates, long-running scheduled processes (ESS jobs) needing polling, and data dependencies (open periods, valid suppliers and items). Mitigate with ERP-aware tools, API-based data setup, robust waits and modular tests.

Tip: Mention Redwood conversion changing locators.`, 'D', 'S'],

["Test Data", "How do you manage test data in ERP testing?",
`**Answer:** Prepare master data per scenario — suppliers, customers, items, employees, bank accounts — open accounting periods, valid accounts and cost centers. Plan around environment refreshes (production-to-test clones) and mask sensitive data. For repeatable automation, create data through FBDI or REST APIs.

Tip: Data readiness is usually the biggest risk in SIT.`, 'D', 'M'],

["Data Migration", "How do you test data migration?",
`**Answer:** Validate record counts source vs target, reconcile financial totals (open AP, AR, GL balances by account), sample-check field values, test that migrated records work in transactions (pay a migrated invoice, ship a migrated order), verify error logs, and run multiple mock conversions with sign-off.

Tip: "Migrated data must be usable, not just loaded."`, 'D', 'M'],

["Integrations", "How do you test an inbound integration into Fusion?",
`**Answer:** Positive cases (valid records load correctly and appear in the UI and reports), negative cases (invalid data rejected with clear errors), partial failures, duplicates (idempotency), volume, monitoring and alerts, reprocessing of failed records, and reconciliation of counts between source and Fusion.

Tip: Mention testing via OIC monitoring.`, 'D', 'M'],

["Integrations", "How do you test an outbound integration such as a bank payment file?",
`**Answer:** Generate payments, create the file, and validate format (e.g. NACHA or ISO 20022 XML) against the bank's specification, check amounts, bank details and totals, test special characters and multiple currencies, and do an end-to-end test with the bank's test environment before go-live.

Tip: Bank testing usually needs extra lead time.`, 'D', 'M'],

["Security", "How do you test ERP roles and security?",
`**Answer:** For each job role, test that users can perform their tasks and **cannot** perform others. Test data security — users only see their business units, ledgers or inventory orgs. Check segregation of duties conflicts and approval routing by role and hierarchy.

Tip: Negative security testing is often skipped — mention you do it.`, 'D', 'M'],

["Reports", "How do you test reports in an ERP?",
`**Answer:** Validate totals against known transactions and GL balances, check parameters and filters, formatting and output types (PDF, Excel), security (who can run it, what data appears), performance with large data, and scheduled delivery.

Tip: Reconcile report totals to GL.`, 'B', 'E'],

["Approvals", "How do you test approval workflows?",
`**Answer:** Test each rule (amount thresholds, categories, cost centers), routing up the hierarchy, delegation and vacation rules, rejections and resubmission, timeouts and escalation, and notifications (email and worklist).

Tip: Boundary amounts are key — exactly at the threshold.`, 'B', 'M'],

["Accounting", "Why must ERP testers check accounting entries?",
`**Answer:** Because many defects don't show in the UI — wrong account, cost center or amount in the journal. For each transaction, verify the subledger journal (SLA), its transfer to GL, and resulting balances. Finance users will reject a system whose accounting is wrong.

Tip: Mention Account Inspector or SLA journal reports.`, 'B', 'E'],

["Defects", "How do you triage ERP defects?",
`**Answer:** Classify as configuration issue, data issue, training/user error, integration issue, custom extension bug, or product bug (SR to Oracle). Assign to the right owner, set severity by business impact, and track in daily triage during SIT and UAT.

Tip: Knowing these categories shows ERP experience.`, 'D', 'M'],

["Oracle SR", "When and how do you raise an SR with Oracle?",
`**Answer:** When a defect appears to be standard product behavior not caused by configuration or data. Provide clear steps, environment, screenshots, logs (diagnostics), business impact and severity; reproduce in a vanilla scenario if possible; track until resolved or a workaround is provided.

Tip: Good SRs get faster answers.`, 'D', 'M'],

["Cutover", "What is cutover testing or mock conversion?",
`**Answer:** A rehearsal of the go-live sequence: data loads in order, configurations, integrations switched, timing of each step, validation and reconciliation, and sign-offs. Multiple mocks reduce go-live risk and confirm the timeline fits the cutover window.

Tip: Mention timing each step.`, 'D', 'M'],

["Performance", "What performance testing matters for an ERP?",
`**Answer:** Peak online transactions, batch jobs at volume (payment runs, AutoInvoice, MRP, cost processing), integration volumes and month-end close load. For Oracle Cloud, coordinate load tests with Oracle per their policy.

Tip: Month-end is the real peak.`, 'D', 'S'],

["Redwood", "What should you watch for when Redwood pages replace classic pages?",
`**Answer:** Changed navigation and field placement, different personalization behavior, new or missing fields, changes to automated test locators, and user training needs. Test Redwood pages alongside classic during the transition and update scripts.

Tip: Mention reviewing Oracle's Redwood readiness notes for the update.`, 'D', 'M'],

["Extensions", "How do you test ERP extensions built in Visual Builder or OIC?",
`**Answer:** Functional tests of the extension's UI and logic, integration with Fusion REST APIs, security (role-based access), error handling, and regression after each quarterly update since APIs and pages can change.

Tip: Extensions are a common source of update regressions.`, 'D', 'S'],

["UAT", "How do you prepare business users for UAT?",
`**Answer:** Training sessions on the system and on logging defects, clear scripts based on their real scenarios, prepared data and access, a schedule with daily check-ins, and a support team on hand. Track progress and sign-off per process.

Tip: Good UAT preparation prevents chaos.`, 'B', 'M'],

["Metrics", "Which metrics do you report during ERP testing?",
`**Answer:** Scripts executed vs planned by process, pass rates, defects by severity, module and status, defect aging, blocked tests, and readiness against exit criteria.

Tip: Show readiness by business process.`, 'B', 'M'],

["Strategy", "How would you set up a test strategy for an ERP implementation?",
`**Answer:** Define phases and entry/exit criteria, scenario library mapped to business processes, roles between consultants, testers and business, environments and data plan, defect management and triage cadence, tools, regression and automation plan after go-live, and reporting.

Tip: Mention a RACI.`, 'D', 'S'],

["Strategy", "How do you prioritize test scenarios when time is short?",
`**Answer:** Risk-based: financial impact, compliance (SOX, tax), volume, complexity, integrations and past issues. Must-pass processes first (e.g. pay suppliers, invoice customers, payroll, close).

Tip: "Can we pay, bill, and close?"`, 'B', 'M'],

["SoD", "How do you test segregation of duties?",
`**Answer:** Run SoD analysis on role design (e.g. create supplier vs pay supplier), test that conflicting actions are blocked for a user, and verify compensating controls where conflicts are accepted.

Tip: Mention Oracle Advanced Access Controls if used.`, 'D', 'S'],

["Tax", "How do you test tax calculation in an ERP?",
`**Answer:** Test scenarios by jurisdiction, product taxability, exemptions and ship-from/ship-to combinations; verify integration with tax engines (Vertex, Avalara) and tax accounting; test VAT and reverse charge for international flows.

Tip: Tax errors are costly — thorough testing pays off.`, 'D', 'M'],

["Multi-entity", "How do you test multi-currency and multi-entity scenarios?",
`**Answer:** Transactions in foreign currencies with rate types, revaluation and realized gains/losses, intercompany transactions between entities, translation in consolidation, and reporting in each ledger.

Tip: Include rounding checks.`, 'D', 'M'],

["Behavioral", "Tell me about a business-critical defect you found in ERP testing.",
`**Sample answer:** "During SIT I noticed payments for one country used the wrong bank file format — the file passed system validation but the bank would have rejected all payments. Catching it before go-live avoided a missed supplier payment run."

Tip: Business impact is the story.`, 'B', 'M'],

["Behavioral", "Tell me about handling a difficult UAT.",
`**Sample answer:** "Business users were overwhelmed and logging training questions as defects. I set up daily triage, separated training items from defects, ran quick training sessions, and UAT completed on schedule with a clean defect list."

Tip: Organization under pressure.`, 'B', 'M'],

["Behavioral", "How do you work with functional consultants?",
`**Answer:** Understand their design, review configuration documents, share defects with clear evidence and business impact, and collaborate on root cause. We both want the business processes to work.

Tip: Partnership tone.`, 'B', 'E'],

["Fusion", "What are ESS jobs and how do they affect testing?",
`**Answer:** Enterprise Scheduler Service jobs are background processes in Oracle Fusion — imports, accounting, payments, reports. Tests must submit jobs, wait for completion (polling status), check logs and outputs, and verify downstream results.

Tip: Automation must handle job waits.`, 'D', 'M'],

["Fusion", "What is FBDI and how do testers use it?",
`**Answer:** File-Based Data Import — Excel templates converted to CSV/ZIP files, uploaded and imported via scheduled processes. Testers use it to load test data in bulk and to test data migration and inbound integrations.

Tip: Know the import → load interface → import process flow.`, 'B', 'M'],

["Fusion", "How do you test with OTBI or BI Publisher reports?",
`**Answer:** Validate report data against transactions and GL, test filters and prompts, security (data visible by role), and scheduled outputs. OTBI is useful for quick validation queries during testing.

Tip: Testers can use OTBI to verify data quickly.`, 'D', 'M'],

["SAP", "How is SAP testing similar or different?",
`**Answer:** Similar business-process focus (P2P, O2C, R2R) and integration testing. SAP uses transactions (t-codes) or Fiori apps, transports for changes, and tools like Tricentis Tosca and SAP Solution Manager/Cloud ALM for test management. S/4HANA upgrades and RISE releases require regression similar to Oracle updates.

Tip: Shows transferable skills.`, 'D', 'M'],

["Environments", "How do you manage ERP test environments?",
`**Answer:** Coordinate refresh schedules (P2T clones), post-refresh steps (mask data, update integration endpoints, reset passwords), environment calendars, and quarterly update timing.

Tip: Refresh steps are often forgotten — mention a checklist.`, 'D', 'M'],

["Audit", "Why do auditors care about ERP testing evidence?",
`**Answer:** For SOX, changes affecting financial reporting need evidence of testing and approval (change management ITGC). Test scripts, results and sign-offs must be retained.

Tip: Keep evidence organized.`, 'D', 'M'],

["Tools", "Which test management tools have you used on ERP projects?",
`**Sample answer:** "Jira with Zephyr for SIT scripts and defects, Oracle's test templates for processes, and Opkey for regression automation on quarterly updates."

Tip: Be specific.`, 'B', 'E'],

["Leadership", "How would you lead a test team on an ERP project?",
`**Answer:** Clear process ownership per tester, daily stand-ups and triage, a test calendar aligned to the project plan, data and environment readiness checks, metrics reporting to the PMO, and coaching on business processes.

Tip: Business-process knowledge is the core skill.`, 'D', 'S'],

["Career", "Why ERP testing?",
`**Sample answer:** "ERP systems run the business — finance, supply chain, HR. Testing them means understanding how the business works and preventing costly issues like failed payments or wrong accounting. I enjoy that mix of business and technical."

Tip: Business impact motivation.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I test ERP processes end to end and always verify the accounting. I've supported SIT, UAT and quarterly updates for Oracle Fusion, built automated regression, and caught issues like a wrong bank file format before go-live."

Tip: ERP-specific proof.`, 'B', 'M'],

["Hypercare", "What happens in hypercare after go-live?",
`**Answer:** Intensive support for the first weeks: monitoring transactions and integrations, quick triage of issues, daily stand-ups, tracking first-time processes (first payment run, first month-end close), and fixing data or config issues.

Tip: Testers help reproduce and verify fixes.`, 'B', 'M'],

["Negative Testing", "Give examples of negative tests in an ERP.",
`**Answer:** Entering transactions in closed periods, invalid account combinations, inactive suppliers or customers, exceeding approval limits, duplicate invoice numbers, over-receipt beyond tolerance, and users without required roles.

Tip: Negative tests catch control gaps.`, 'B', 'E'],

["Regression", "What breaks most often after ERP updates?",
`**Answer:** Custom reports and extensions, integrations relying on changed APIs, personalized pages, approval rules and Redwood page changes.

Tip: Focus regression on customizations.`, 'D', 'M'],

["Communication", "How do you report ERP test status to leadership?",
`**Answer:** Readiness by business process (green/amber/red), key open defects with business impact, risks to go-live, and decisions needed.

Tip: Process-based, not test-case counts.`, 'B', 'M']
];

QB['qa-erp'] = (QB['qa-erp'] || []).concat([
["Fusion", "How do you test Oracle Fusion REST APIs?",
`**Answer:** Use Postman or automated scripts with a test user's credentials (basic auth or OAuth), call resources like /fscmRestApi/resources/.../invoices to create, query and update records, check status codes and payloads, verify the records in the UI and accounting, and test errors (missing required fields, invalid values, security restrictions).

Tip: APIs are also great for creating test data quickly.`, 'D', 'M'],
["Period Close", "Why is period status important in ERP testing?",
`**Answer:** Transactions can only be accounted in open periods. Tests fail with confusing errors if periods aren't open for the dates used. Plan test dates and period statuses (GL, AP, AR, inventory, cost) as part of environment readiness, and include negative tests for closed periods.

Tip: A practical detail that shows real experience.`, 'B', 'E']
]);
