// ora-fc-fin — generated from src/ora-fc-fin-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Functional Consultant (2–3 yrs) — Finance. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-fc-fin'] = (QB['ora-fc-fin'] || []).concat([
['Fusion Basics', 'What is the difference between Oracle E-Business Suite and Oracle Fusion Cloud ERP?',
`- **EBS** is on-premise (or hosted) — the customer owns the database, applies patches and can customize code directly. Forms-based UI, concurrent programs, responsibilities.
- **Fusion Cloud ERP** is SaaS — Oracle hosts and upgrades it quarterly (e.g. 25A, 25B). No direct database access; you extend through configuration, Visual Builder, OIC, BI Publisher and REST APIs. Browser UI, scheduled processes, role-based security.

## What changes for a consultant
- Setups are done through **Functional Setup Manager (FSM)** tasks instead of individual forms.
- You must regression-test every quarterly update.
- Reporting uses OTBI, BI Publisher and Financial Reporting/Smart View.

Tip: If you've worked on both, say which and give one example of how you did the same task in each.`, 'B'],

['Fusion Basics', 'What is Functional Setup Manager and how do you use it?',
`FSM is the Fusion tool for all application setup.

- **Offerings** (e.g. Financials) contain **functional areas** (e.g. Payables), which contain **setup tasks** (e.g. Manage Payables Options).
- You **opt in** to the offerings and features you need, then work through the task list.
- **Implementation projects** group tasks and let you assign them to team members and track status.
- **Configuration packages** export setups from one environment and import them into another (e.g. TEST → PROD).
- **Scope values** let you set up a task for a specific BU or ledger.

Tip: Mention you used configuration packages to move setups between pods — it shows you know the deployment process.`, 'B'],

['General Ledger', 'What are the "4 Cs" of a ledger in Oracle?',
`A ledger is defined by four things:
- **Chart of accounts** — the account structure (segments).
- **Calendar** — the accounting periods (e.g. monthly, 4-4-5).
- **Currency** — the ledger currency.
- **aCcounting method** — the Subledger Accounting method that tells subledgers how to create journals.

Two legal entities can share one primary ledger only if all four are the same; otherwise they need separate ledgers.`, 'B'],

['General Ledger', 'What is a balancing segment and why is it important?',
`The balancing segment is the chart-of-accounts segment (usually **Company**) for which Oracle ensures debits equal credits on every journal.

- If a journal crosses two balancing segment values (e.g. company 101 and 102), Oracle automatically creates **intercompany balancing lines** using the intercompany balancing rules.
- Balancing segment values are typically assigned to **legal entities**, so you can produce a balance sheet per entity.
- Fusion supports up to three balancing segments (primary, second and third) — e.g. Company and Cost Center.`, 'B'],

['General Ledger', 'Walk me through the life of a manual journal entry in Fusion GL.',
`- **Create**: Journals → Create Journal (or upload via the ADFdi spreadsheet). Enter batch, journal, ledger, period, category, lines.
- **Validate**: cross-validation rules and account combinations are checked; invalid combinations are rejected.
- **Approve**: if journal approval is enabled, the journal routes through BPM approval rules (often by amount or source).
- **Post**: posting updates account balances (GL_BALANCES); can be manual or via AutoPost.
- **Reverse** (if needed): reversal journals for accruals, scheduled for the next period.

Tip: Mention the spreadsheet upload (ADFdi) — most finance teams use it for bulk journals.`, 'B'],

['General Ledger', 'What are cross-validation rules?',
`Cross-validation rules stop invalid combinations of segment values from being created.

Example: "Balance-sheet accounts (1000–3999) must use cost center 000." The rule has a **condition filter** (when the rule applies) and a **validation filter** (what's allowed), plus an error message.

- They only stop **new** combinations — existing ones must be disabled separately.
- Set them up early, before transactions start, and test them with real account strings.`, 'B'],

['General Ledger', 'How do you open and close GL periods, and what statuses can a period have?',
`Period statuses: **Never Opened, Future Enterable, Open, Closed, Permanently Closed.**

- Open the next period with **Manage Accounting Periods** (or the Open Period process).
- Journals can be entered in Future Enterable periods but not posted.
- Close the period after all subledgers have transferred and all journals are posted and reconciled.
- A Closed period can be reopened; Permanently Closed cannot — use it only after audit sign-off.

Subledgers (AP, AR, FA) have their own period statuses, closed before GL.`, 'B'],

['General Ledger', 'What is the difference between a primary ledger, a secondary ledger and a reporting currency?',
`- **Primary ledger** — the main book of record for a legal entity.
- **Secondary ledger** — a parallel ledger that can differ in chart of accounts, calendar, currency and/or accounting method. Used for local GAAP vs IFRS/US GAAP or a different COA for statutory reporting. Can be maintained at subledger, journal or balance level.
- **Reporting currency** — same COA, calendar and method as the primary; only the currency differs. Used when you just need to report in another currency.

Rule of thumb: only the currency differs → reporting currency; anything else differs → secondary ledger.`, 'D'],

['General Ledger', 'Explain revaluation and translation in GL.',
`- **Revaluation** adjusts **foreign-currency balances** (e.g. a EUR bank account in a USD ledger) to the period-end exchange rate. The difference goes to unrealized gain/loss. Typically reversed the next period.
- **Translation** converts the **whole ledger's balances** into another currency for reporting/consolidation — balance sheet at period-end rate, P&L at average rate, equity at historical rates; the difference goes to the Cumulative Translation Adjustment (CTA).

Run revaluation before translation, after all foreign-currency transactions are posted.`, 'D'],

['General Ledger', 'How would you set up a recurring allocation, for example rent allocated by headcount?',
`Use **Calculation Manager** allocation rules in Fusion GL:
- **Source (pool):** the rent account balance for the period.
- **Basis:** a statistical account holding headcount by cost center (loaded each month).
- **Target:** rent expense on each receiving cost center, proportional to headcount.
- **Offset:** a credit back to the source cost center.

Generate the allocation each month (manually or on a schedule), review, and post. In EBS the equivalent is **MassAllocations**.

Tip: Mention you test with a small known set of numbers so you can check the math by hand.`, 'D'],

['Accounts Payable', 'Explain the Procure-to-Pay flow and where AP fits in.',
`- **Requisition** → **Purchase Order** (Procurement)
- **Receipt** of goods/services (Receiving)
- **Invoice** entered/imported, matched to PO and receipt (AP)
- **Validation** — matching, tax and holds checked (AP)
- **Approval** (AP)
- **Payment** through a Payment Process Request (AP / Payments)
- **Accounting** — Create Accounting and transfer to GL (SLA)

Accounting entries: receipt accrual (Dr Inventory/Expense, Cr Receipt Accrual), invoice (Dr Accrual, Cr Liability), payment (Dr Liability, Cr Cash Clearing), reconciliation (Dr Cash Clearing, Cr Cash).`, 'B'],

['Accounts Payable', 'What is the difference between 2-way, 3-way and 4-way matching?',
`- **2-way**: invoice vs PO (quantity and price). Used for services or low-risk items.
- **3-way**: invoice vs PO vs **receipt** — you can only be invoiced for what you received.
- **4-way**: invoice vs PO vs receipt vs **inspection/acceptance** — used where quality checks matter.

The match level is set on the PO schedule (defaulted from the supplier, item or purchasing options). Mismatches beyond tolerances put the invoice on hold.`, 'B'],

['Accounts Payable', 'What are invoice holds and how do you release them?',
`Holds stop an invoice from being paid until an issue is fixed.

## Common holds
- **Matching holds**: Qty Ord, Qty Rec, Price, Amount.
- **Variance holds**: distribution/tax variance.
- **Account holds**: invalid distribution account.
- **Supplier/site holds**: payment hold on the supplier.
- **Manual holds** placed by users.

## Release
- **System holds** release automatically when you fix the cause and re-validate (e.g. receive the goods, correct the price).
- **Manual-releasable holds** are released by an authorized user with a release reason.
- Holds can route to the right person via the holds resolution workflow.`, 'B'],

['Accounts Payable', 'What types of invoices can you enter in Payables?',
`- **Standard** — normal supplier invoice.
- **Credit memo** — supplier credit (negative).
- **Debit memo** — your own credit against a supplier.
- **Prepayment** — advance payment, applied later to invoices.
- **Withholding tax** — created automatically for withheld amounts.
- **Expense report** — employee reimbursement (from Expenses).
- **Payment request** — non-supplier payees (e.g. refunds).
- **Interest** — late-payment interest (auto-created when set up).`, 'B'],

['Accounts Payable', 'How does a prepayment work in AP?',
`- Enter a **Prepayment** invoice, validate and pay it. Accounting: Dr Prepaid Expense, Cr Liability, then Cr Cash on payment.
- When the real invoice arrives, **apply** the prepayment to it — this reduces the amount payable. Accounting reverses the prepaid asset into the invoice.
- **Temporary** prepayments can be applied to invoices; **permanent** ones (e.g. deposits) cannot.
- Prepayments can also be applied automatically at validation if set up.

Tip: Mention reconciling the prepaid account — unapplied prepayments are a common audit question.`, 'B'],

['Accounts Payable', 'What is a Payment Process Request (PPR)?',
`A PPR is how Fusion selects and pays invoices in bulk.

- **Selection criteria**: pay-through date, business unit, supplier, payment method, pay group, currency.
- **Payment and processing options**: which disbursement bank account, payment process profile, whether to stop for review.
- Steps: **select invoices → review proposed payments → build payments → create payment file** (or print checks) → **transmit** to the bank.
- Can be scheduled (e.g. weekly check run, daily ACH).

Payment Process Profiles define the format (NACHA, ISO 20022 XML, check) and transmission method.`, 'B'],

['Accounts Payable', 'How do you handle 1099 reporting in Oracle Payables?',
`- Mark US suppliers as **federal reportable**, with taxpayer ID and income tax type (e.g. MISC, NEC).
- Invoice distributions carry the **income tax type** — defaulted from the supplier.
- During the year, fix errors with the **Update and Report Income Tax Details** process.
- At year end, run the **1099 reports** (US 1099 Report, Invoice Exceptions, Supplier Exceptions) and produce the electronic file (1099 Electronic Media) or forms.

Tip: Mention reviewing the exception reports in December, not January.`, 'D'],

['Accounts Receivable', 'Explain the Order-to-Cash flow and where AR fits in.',
`- **Customer** set up (customer, account, sites)
- **Sales order** booked and **shipped** (Order Management)
- **Invoice** created in AR through **AutoInvoice** (from OM or other sources) or manually
- **Receipt** recorded (manually, lockbox or bank statement)
- **Receipt applied** to invoices
- **Collections** for overdue balances
- **Accounting** to GL via Create Accounting

Accounting: invoice (Dr Receivable, Cr Revenue, Cr Tax), receipt (Dr Cash, Cr Receivable).`, 'B'],

['Accounts Receivable', 'What is AutoInvoice?',
`AutoInvoice is the AR program that imports transactions from other systems (Order Management, Projects, legacy billing) into invoices, credit memos and debit memos.

- Data goes into the interface tables (RA_INTERFACE_LINES_ALL in EBS; FBDI or OM integration in Fusion).
- **Transaction sources** control validation and defaulting (batch source).
- **Grouping rules** decide which lines become one invoice; **line ordering rules** sort lines.
- **AutoAccounting** derives the revenue/receivable accounts (in Fusion, alongside SLA).
- Errors stay in the interface and are shown in the AutoInvoice exceptions report — fix and resubmit.`, 'B'],

['Accounts Receivable', 'What is the customer structure in Oracle (party, account, site)?',
`Oracle uses the **Trading Community Architecture (TCA)** model:
- **Party** — the real-world organization or person (e.g. ACME Corp).
- **Customer account** — the business relationship with that party (terms, profile, credit). One party can have several accounts.
- **Account sites** — addresses used for the account, with **site uses** (Bill-to, Ship-to).
- **Customer profile** — credit limits, collector, statement and dunning settings.

Because parties are shared, the same company can be both a customer and a supplier.`, 'B'],

['Accounts Receivable', 'How do you apply a receipt, and what happens with unapplied or on-account cash?',
`- Create the receipt (manually, via lockbox or from bank statements) against a receipt method and bank account.
- **Apply** it to one or more open transactions; partial application leaves a balance.
- **Unapplied** — money received but not yet matched to invoices.
- **On-account** — deliberately placed on the customer account to apply later (e.g. a deposit).
- **Unidentified** — you don't know the customer yet.

AutoMatch / AutoApply rules can apply receipts automatically using remittance information.`, 'B'],

['Accounts Receivable', 'What is the difference between an adjustment and a credit memo?',
`- **Credit memo** — reduces an invoice because of a business reason (return, pricing error, disputed line). It's a transaction document, often sent to the customer, and can reverse revenue and tax.
- **Adjustment** — changes the balance of an invoice for small write-offs, bad debt, or rounding. It uses an activity (receivables activity) for the accounting and is subject to approval limits.

Rule of thumb: billing was wrong → credit memo; collecting the money won't happen → adjustment.`, 'B'],

['Fixed Assets', 'How does an asset get created from an AP invoice?',
`- An AP invoice line is charged to an **asset clearing account** (or flagged as track as asset).
- After accounting, run **Create Mass Additions** — this sends eligible lines to the **Mass Additions** queue in Assets.
- In Assets, **review** the mass additions: assign category, location, cost center, date in service, merge or split lines.
- **Post Mass Additions** creates the assets.
- Depreciation starts based on the date placed in service and the prorate convention.`, 'B'],

['Fixed Assets', 'What are the main asset transactions in Oracle Assets?',
`- **Addition** — new asset.
- **Adjustment** — change cost, life, method.
- **Transfer** — move to another location, cost center or employee.
- **Reclassification** — change asset category.
- **Retirement** — full or partial, with proceeds of sale and cost of removal; gain/loss calculated.
- **Reinstatement** — undo a retirement in the same period.
- **Revaluation** and **impairment** where required.

Each creates accounting entries through SLA after Create Accounting.`, 'B'],

['Fixed Assets', 'What is depreciation prorate convention?',
`The prorate convention decides **when depreciation starts** for an asset based on its date placed in service — e.g.:
- **Following month** — starts next month.
- **Mid-month** — half a month in the month added.
- **Actual month** — full month in the month added.
- **Half-year** (common in US tax books) — half a year of depreciation in the first year regardless of month.

It's set on the asset category per book and copied to the asset.`, 'D']
]);

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
