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
