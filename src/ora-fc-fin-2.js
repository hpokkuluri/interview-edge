QB['ora-fc-fin'] = (QB['ora-fc-fin'] || []).concat([
['Cash Management', 'How does bank statement reconciliation work in Oracle Cash Management?',
`- **Load bank statements** — electronic files (BAI2, MT940, CAMT.053) or manual entry.
- **Autoreconciliation** matches statement lines to system transactions (AP payments, AR receipts, journals) using **reconciliation rule sets** — match on reference, amount, date with tolerances.
- **Manual reconciliation** for what auto-match misses.
- **External transactions** — create bank charges or interest directly from unmatched lines, using transaction creation rules.
- Reconciled payments clear (Dr Cash Clearing, Cr Cash) and accounting goes to GL.`, 'B'],

['Cash Management', 'What is the difference between a bank, a branch and a bank account in Oracle?',
`- **Bank** — the institution (e.g. JPMorgan Chase).
- **Branch** — a specific branch with routing number/BIC.
- **Bank account** — your company's account at that branch: account number, currency, GL cash and cash clearing accounts, and usage (Payables, Receivables, Payroll).

Bank accounts are owned by a **legal entity** and can be used by the business units granted access.`, 'B'],

['Subledger Accounting', 'What is Create Accounting and why does it matter?',
`Subledger transactions (invoices, receipts, assets) don't hit GL by themselves. **Create Accounting** runs Subledger Accounting to build journal entries from those events, then (optionally) **transfers and posts** them to GL.

- Modes: **Draft** (preview, can change) or **Final** (locked).
- Errors (e.g. invalid account) appear in the Create Accounting execution report — fix them and rerun.
- Run it frequently (daily) to catch issues early, not just at month end.`, 'B'],

['Subledger Accounting', 'How do you find out why a transaction did not create accounting?',
`- Check the **Create Accounting execution report** for the error message.
- View the transaction's accounting status (e.g. invoice "Unaccounted" vs "Accounted").
- Common causes: transaction not validated/approved, period closed in the subledger, invalid or disabled account combination, cross-validation rule failure, missing mapping in an account derivation rule.
- Use **Review Subledger Journal Entries** to see draft entries and errors.
- Fix the root cause, then rerun Create Accounting for that transaction or batch.`, 'D'],

['Tax', 'How is tax calculated on transactions in Oracle Fusion?',
`Oracle uses **Tax (E-Business Tax / Fusion Tax)** with a hierarchy:
- **Tax regime** (e.g. US Sales Tax, UK VAT) → **Tax** → **Tax status** → **Tax rate** → **Tax jurisdiction**.
- **Tax rules** decide when a tax applies and which rate — based on parties, locations, product and transaction details.
- Parties need **tax profiles** and registrations.
- The tax is calculated on AP invoices, AR transactions and POs and shown on separate tax lines with their own accounts.
- For US sales tax many companies integrate with a partner (Vertex, Avalara).`, 'D'],

['Expenses', 'Explain the Oracle Expenses flow.',
`- Employee creates an **expense report** (mobile app or web), attaches receipts; corporate card transactions can import automatically.
- **Expense policies** check limits (e.g. daily meal limit) and required receipts.
- **Approval** by the manager (and others via rules).
- **Auditor** review (sample or rule-based), receipt verification.
- Approved reports become **Payables invoices** (Process Expense Reimbursements) and are paid via a PPR or payroll.
- Accounting goes to the expense accounts defaulted from the employee's cost center and expense type.`, 'B'],

['Security', 'How is security structured in Oracle Fusion Financials?',
`- **Job roles** (e.g. Accounts Payable Specialist) are assigned to users and contain **duty roles** and **privileges** — what the user can do.
- **Data access** — which data: via **data access sets** for ledgers in GL and **business unit/ledger data roles** for subledgers (Manage Data Access for Users).
- **Abstract roles** (Employee, Line Manager) for self-service.
- Custom roles are created by copying seeded roles in the Security Console — never edit seeded roles.

Tip: Mention segregation of duties — e.g. the person who creates suppliers shouldn't be able to pay them.`, 'B'],

['Reporting', 'What reporting tools are available in Oracle Fusion Financials?',
`- **OTBI (Transactional Business Intelligence)** — self-service ad-hoc analyses on real-time data using subject areas. Fast to build, limited formatting.
- **BI Publisher (BIP)** — pixel-perfect reports (invoices, checks, statements) and complex SQL-based extracts.
- **Financial Reporting / Smart View** — GL balance reporting from the Essbase cube; Smart View in Excel for ad-hoc and formatted statements.
- **Account Monitor and Account Inspector** — quick balance views and drill-down.
- **Infolets/dashboards** for managers.

Rule of thumb: ad-hoc → OTBI; formatted documents or extracts → BIP; financial statements → FR/Smart View.`, 'B'],

['Reporting', 'How do you reconcile Payables to the General Ledger?',
`- Run the **Payables to Ledger Reconciliation** report (Fusion) — compares the AP trial balance with GL liability balances by period.
- Investigate differences: unaccounted transactions, accounting not transferred/posted, manual journals posted directly to the liability account, and transactions accounted in a different period.
- Make sure the **AP trial balance** (open invoices) equals the GL liability account.
- Fix the root cause — don't just make a manual adjustment.

The same idea applies to AR (Receivables to Ledger Reconciliation) and Assets.`, 'D'],

['Period Close', 'What steps would you follow to close the Payables period?',
`- Make sure all invoices are entered and **validated**; resolve holds that matter for the period.
- Complete the **payment runs** for the period.
- Run **Create Accounting** and transfer to GL; clear any accounting errors.
- Review the **Unaccounted Transactions** and exception reports.
- **Sweep** remaining unaccounted transactions to the next period if appropriate.
- **Close the Payables period**, then open the next one.
- Reconcile the AP trial balance to GL.`, 'B'],

['Period Close', 'What is the typical order of closing subledgers before GL?',
`- **Purchasing/Receiving** — receipts complete; accruals.
- **Payables** — invoices and payments accounted; close.
- **Receivables** — invoices and receipts accounted; close.
- **Cash Management** — bank statements reconciled.
- **Assets** — additions from AP posted; depreciation run; close (Assets needs Payables done first).
- **Projects/Inventory/Cost** if used.
- **General Ledger** — post, revalue, translate, consolidate, close.`, 'B'],

['Data Loads', 'What is FBDI and how do you use it?',
`**File-Based Data Import** is the standard way to load bulk data into Fusion.
- Download the **Excel template** for the object (e.g. AP invoices, journals, suppliers) from the Oracle docs.
- Fill it in, generate the **CSV zip**.
- Upload to **UCM** and run **Load Interface File for Import**, then the import process (e.g. Import Payables Invoices).
- Review errors in the import report or the interface correction screens, fix and reload.

Other options: **ADFdi spreadsheets** for journals and some objects, and **REST APIs** for integrations.`, 'B'],

['Testing', 'How do you test a configuration change before moving it to production?',
`- Write **test scenarios** with expected results (including accounting).
- Test in a non-production pod: the happy path, edge cases and negative tests.
- Check related processes — e.g. a payment terms change affects invoice due dates and payment runs.
- Get the **business user** to run **UAT** and sign off.
- Move the change via a configuration package or documented manual steps; keep evidence for audit.
- After the quarterly update, rerun key regression tests.`, 'B'],

['Support', 'A user says they cannot see a business unit when entering invoices. How do you troubleshoot?',
`- Check the user's **roles** — do they have the AP role at all?
- Check **data access**: in Manage Data Access for Users, is the user granted the role for that business unit?
- Check that the BU uses the Payables business function and is set up correctly.
- Ask the user to sign out and back in (or wait for the role refresh process).
- If many users are affected, check whether a security change or quarterly update caused it.

Tip: Interviewers like a structured approach — "role → data access → setup → refresh".`, 'B'],

['Support', 'How do you handle a production support ticket you have never seen before?',
`- **Reproduce** the issue and capture details: user, transaction, screenshots, error message, when it started.
- Check what changed recently (configuration, update, data).
- Search **My Oracle Support** for the error and known bugs; check release notes.
- Test a fix in a lower environment.
- If it's a product bug, raise an **SR** with Oracle including steps and logs.
- Keep the user updated; document the fix in the knowledge base.`, 'B'],

['Behavioral', 'Tell me about yourself.',
`Keep it to about 90 seconds: **present → past → why this role.**

## Example shape
- "I'm an Oracle Financials consultant with about three years' experience, mainly in Fusion AP, AR and GL."
- "On my last project I supported a Fusion implementation for a mid-size manufacturer — I configured payables options, payment terms and the payment process profiles, built test scripts and ran the AP part of UAT."
- "Since go-live I've handled support tickets and month-end close issues, which taught me a lot about subledger accounting."
- "I'm looking for a role where I can own a module end-to-end, which is why this position interests me."

Tip: Tailor the last line to the job description.`, 'B'],

['Behavioral', 'Describe a time you made a mistake on a project. What happened?',
`Pick a real, moderate mistake and focus on what you learned.

## Example (STAR)
- **Situation:** I changed a payment term setup in TEST but forgot one business unit when I documented it for PROD.
- **Task:** After migration, invoices for that BU had wrong due dates.
- **Action:** I spotted it in a post-migration check, told my lead straight away, fixed the setup, and corrected the affected invoices before the payment run.
- **Result:** No late or early payments went out. Since then I use a migration checklist and compare setups between environments after every move.

Tip: Own it, show how you caught it, and the process you changed.`, 'B'],

['Behavioral', 'How do you explain a technical issue to a non-technical finance user?',
`- Start with the **business impact** ("the invoice can't be paid until…"), not system terms.
- Use their language — "approval", "due date", "account" — and avoid table names.
- Give **what they need to do** and by when, in a few steps.
- Show it on screen or with a screenshot.
- Confirm they understood and follow up.

Tip: Give a quick real example, e.g. explaining a matching hold as "the invoice says 10 units but we only received 8".`, 'B'],

['General Ledger', 'What are journal categories and sources used for?',
`- **Journal source** — where the journal came from (Manual, Payables, Receivables, Spreadsheet, a custom source for an integration).
- **Journal category** — what kind of entry it is (Accrual, Adjustment, Purchase Invoices, Receipts).

They are used in **journal approval rules**, **reporting and audit** (e.g. all manual journals), **reversal options**, **AutoPost criteria** and **document sequencing**.`, 'B'],

['General Ledger', 'What is the difference between Smart View and Financial Reporting Studio?',
`- **Smart View** is an Excel add-in that queries the GL balances cube. Great for ad-hoc analysis, pivoting and building Excel-based reports with live data and drill-down.
- **Financial Reporting (FR) Studio / Financial Reporting Center** produces formatted, governed reports (P&L, balance sheet) published to many users — though Oracle is moving these to Narrative Reporting and Smart View-based reports.

Both read from the same **Essbase cube** that is updated when journals post.`, 'D'],

['Accounts Payable', 'What is the difference between a supplier, a supplier site and a site assignment?',
`- **Supplier** — the company you buy from (name, tax ID, type).
- **Supplier address** — physical address.
- **Supplier site** — the address used for purchasing and/or paying, created **per procurement business unit**, with payment terms, payment method, pay group and holds.
- **Site assignment** — lets a **client business unit** use that site (e.g. a shared-services BU processes invoices for many BUs).

Site assignments are a common reason a user "can't find the supplier" in a BU.`, 'B'],

['Accounts Payable', 'How do payment terms and discounts work in AP?',
`- **Payment terms** define due date(s) and early-payment discounts — e.g. **2/10 Net 30**: 2% discount if paid within 10 days, full amount due in 30.
- Terms default from the supplier site (or PO) onto the invoice; the **terms date basis** (invoice date, goods received, system date) decides the starting date.
- Installments are created from the terms; the PPR picks them up when due.
- Discounts are taken automatically if the payment date falls within the discount period and the option is enabled.`, 'B'],

['Behavioral', 'Why do you want to grow in Oracle Finance consulting?',
`Link your interest to finance processes and real impact.

- "I like that ERP sits where finance and technology meet — a good setup decision saves the finance team hours every month."
- "I want to deepen my GL, SLA and close knowledge and move from configuring to designing solutions."
- Mention any certification you're working on (e.g. Oracle Financials Cloud Implementation Professional).

Tip: Avoid "it pays well". Show curiosity about accounting, not just the software.`, 'B'],

['Accounts Receivable', 'What is the purpose of receivables activities and transaction types?',
`- **Transaction types** classify AR transactions (Invoice, Credit Memo, Debit Memo, Chargeback, Deposit) and control: whether they post to GL, affect open receivables, the default receivable/revenue accounts, and the related credit memo type.
- **Receivables activities** are used for non-invoice postings: adjustments, write-offs, finance charges, miscellaneous cash, bank charges, refunds — each with its own GL account.

Getting these right drives correct accounting and reporting.`, 'D'],

['Accounts Receivable', 'How do collections and dunning work in Oracle?',
`- **Advanced Collections** (Fusion) assigns customers to **collectors** based on profiles.
- Collectors work their queue: view aging, record **promises to pay**, log disputes, send correspondence.
- **Dunning** sends reminder letters automatically based on aging and dunning plans.
- **Scoring and strategies** prioritize high-risk customers.
- Disputes can create credit memo requests that route for approval.

KPIs to mention: DSO, percent current, collector effectiveness.`, 'D']
]);
