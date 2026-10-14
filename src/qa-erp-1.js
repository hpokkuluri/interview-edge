// ERP / Oracle Cloud Tester. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-erp'] = (QB['qa-erp'] || []).concat([
['ERP Testing', 'How is testing an ERP different from testing a typical web application?',
`- **End-to-end business processes** across modules (P2P, O2C, R2R) — not just screens.
- **Accounting results** must be verified (journals, balances), not only UI outcomes.
- **Configuration-driven** behavior (setups change outcomes).
- **Integrations and batch jobs** (imports, payment runs, close processes).
- **Roles and data security** matter.
- SaaS **quarterly updates** require ongoing regression.`, 'B', 'E'],

['ERP Testing', 'Walk me through testing a Procure-to-Pay scenario in Oracle Fusion.',
`- Create requisition → approval → PO (check defaults, approvals).
- Receive goods (routing, tolerances).
- Create/match AP invoice (2/3-way), validate; check holds.
- Pay via payment process request.
- Run **Create Accounting**; verify SLA journals (accrual, liability, cash) and GL balances.
- Negative cases: over-receipt, price variance holds, closed periods.`, 'B', 'E'],

['ERP Testing', 'What is SIT vs UAT on an ERP project?',
`- **SIT (system integration testing)**: end-to-end flows across modules and integrations, run by the project team.
- **UAT**: business users confirm the system supports their real processes with realistic data.
- Both need test scripts, data, defect management and exit criteria.`, 'B', 'E'],

['Quarterly Updates', 'How do you test Oracle Cloud quarterly updates?',
`- Updates hit the **test pod ~2 weeks before production**.
- Run the **regression suite** (ideally automated) for core flows, integrations, reports and extensions.
- Review **What's New** for changed features and Redwood pages.
- Log issues, raise **SRs**, retest fixes; sign off before production update.`, 'B', 'M'],

['Automation', 'Which tools automate ERP testing?',
`- ERP-focused: **Opkey**, **Tricentis Tosca**, **Worksoft**, **Panaya**, **Oracle's testing offerings**.
- General: Selenium/Playwright (harder with complex ERP UIs), API testing for integrations.
- Choose based on Redwood/ADF support, maintenance effort, business-user friendliness.`, 'D', 'M'],

['Automation', 'What are the challenges in automating Oracle Fusion UIs?',
`- Dynamic IDs and complex components (ADF classic pages, Redwood).
- Frequent UI changes with quarterly updates.
- Long-running processes (ESS jobs) needing waits/polling.
- Test data dependencies (open periods, suppliers, items).
- Mitigation: ERP-aware tools, APIs for setup, robust waits, modular tests.`, 'D', 'S'],

['Test Data', 'How do you manage test data in ERP testing?',
`- **Master data** prepared per scenario (suppliers, customers, items, employees).
- **Open periods** and valid accounts.
- Data refresh strategy (P2T clones) and **masking** of sensitive data.
- Create data via **FBDI/REST** for repeatable automation.`, 'D', 'M'],

['Integrations', 'How do you test an inbound integration to Fusion?',
`- Positive cases: valid records loaded correctly (UI and reports).
- Negative cases: invalid data rejected with clear errors; partial failures.
- Volume tests; duplicate handling (idempotency).
- Monitoring/alerts work; reprocessing works.
- Reconcile counts between source and Fusion.`, 'D', 'M'],

['Security', 'How do you test ERP roles and security?',
`- Test each **job role** can do what it should — and **cannot** do what it shouldn't.
- Data security: users only see their BUs/ledgers/orgs.
- **SoD** conflicts checked.
- Approval routing by role/hierarchy.`, 'D', 'M'],

['Leadership', 'How would you set up a test strategy for an ERP implementation?',
`- Test phases: unit/config, SIT cycles, data migration testing, performance, UAT, cutover rehearsal, regression for updates.
- Scenario library mapped to processes; RACI between consultants and business.
- Defect management and triage cadence; entry/exit criteria.
- Automation plan for regression after go-live.`, 'D', 'S'],

['Behavioral', 'Tell me about a business-critical defect you found during ERP testing.',
`- e.g. payment file created wrong bank account format for one country; or accounting posted to wrong cost center.
- How you found it (checking accounting, not just UI), impact avoided, fix, and new regression test.`, 'B', 'M']
]);
