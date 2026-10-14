QB['ora-sfc-fin'] = (QB['ora-sfc-fin'] || []).concat([
['Reporting', 'How would you build a financial statement in Fusion?',
`- Build **account hierarchies (trees)** for the natural account and cost center first — the report depends on them.
- Use **Financial Reporting Studio** (or Smart View / Narrative Reporting) against the GL balances cube.
- Rows = account hierarchy nodes (Revenue, COGS, Opex...), columns = periods/scenarios (Actual, Budget, Prior Year), POV = ledger, company, currency.
- Add formulas (variances, %), formatting, and drill-down to journals.
- Publish to the Financial Reporting Center; schedule batches if needed.

Tip: Mention reconciling the report to the trial balance before releasing it.`, 'D'],

['Reporting', 'When would you choose OTBI vs BI Publisher?',
`## OTBI
- Self-service, drag-and-drop on subject areas; real-time; respects user security automatically.
- Best for ad-hoc analysis, dashboards, simple lists.
- Limits: can't join everything; formatting is basic.

## BI Publisher
- SQL data models with RTF/Excel/eText templates; pixel-perfect output.
- Best for documents (checks, invoices, statements), bank files, complex joins and extracts, bursting.
- Needs more technical skill; you must handle data security in the SQL.

Rule of thumb: start with OTBI; go to BIP when formatting or data complexity requires it.`, 'B'],

['Reporting', 'What is a BIP data model and how do you secure a BIP report?',
`- A **data model** defines the data: SQL queries (against the Fusion database through BIP), parameters, LOVs, links between data sets, and event triggers.
- The **report** applies a **layout template** (RTF, Excel, eText) to the data.
- Security: put the report in a catalog folder with **permissions** for specific roles; in SQL, filter data using the user's access (e.g. join to BU security views like FUN_USER_ROLE_DATA_ASGNMNTS) — BIP doesn't apply data security automatically.

Tip: The security point is what separates seniors from juniors.`, 'D'],

['Period Close', 'How do you use the Close Monitor and close tasks in Fusion?',
`- **Close Monitor** shows period status across subledgers and ledgers in one view — which are open, closed, or pending.
- In Fusion GL, **Period Close** components include the close status per ledger and drill to subledgers.
- Many companies use **Oracle EPM Financial Consolidation and Close** task manager (or BlackLine) for the close checklist with owners, dependencies and due dates.
- I set up the checklist to mirror the real sequence, with evidence attached for audit.`, 'D'],

['Period Close', 'How do you handle period-end accruals for received but not invoiced (RNI) goods?',
`- **Accrue at receipt** (common for inventory and many expense items): the accrual is booked when goods are received and cleared when the invoice is matched.
- **Period-end accrual** (for some expense items): run the **Create Accrual** / **Accrue Uninvoiced Receipts** process at period end; it's reversed next period.
- Review the **accrual reconciliation report** for old or wrong accruals; write off with approval.
- Agree with finance which method applies by item/destination type.`, 'D'],

['Multi-currency', 'How are exchange rates managed and used in Oracle?',
`- **Rate types**: Corporate, Spot, User, etc.
- Daily rates are loaded (manually, via spreadsheet, or integration from a provider like Reuters/Bloomberg/a bank).
- Transactions use the rate for the transaction date and rate type; **User** rate types let users enter a rate.
- **Revaluation** uses period-end rates; **translation** uses period-end, average and historical rates.
- Ensure rates are loaded **before** processing — missing rates block accounting.`, 'B'],

['Multi-currency', 'How do realized gains and losses arise in AP and AR?',
`- When an invoice in a foreign currency is **paid** (AP) or **receipted** (AR) at a different exchange rate than the invoice rate, the difference is a **realized gain or loss**.
- Example: EUR 1,000 invoice booked at 1.10 ($1,100), paid at 1.12 ($1,120) → $20 realized loss for AP.
- SLA books it to the realized gain/loss accounts at payment/receipt.
- **Unrealized** gains/losses come from revaluing open balances at period end.`, 'B'],

['Lease Accounting', 'What do you know about Oracle Fusion Lease Accounting?',
`Supports **ASC 842 / IFRS 16** for lessees:
- Lease contracts with payments, terms and options.
- Calculates the **right-of-use asset** and **lease liability** (present value of payments at the discount rate).
- Classification (finance vs operating under ASC 842).
- Generates amortization schedules, accounting journals, and **AP invoices** for payments.
- Integrates with Assets (ROU assets) and AP.
- Handles modifications, impairments and terminations.`, 'D'],

['Expenses', 'How do you configure expense policies and corporate cards?',
`- **Expense templates and types** (meals, hotel, mileage) with default accounts.
- **Policies** — rate limits (by location, job level), daily limits, receipt requirements, justification thresholds; policy warnings vs errors.
- **Mileage rates** by period/vehicle.
- **Corporate cards**: card program, card issuer file loading (e.g. Amex, Visa feeds), matching to employees, payment options (company pay vs individual pay).
- **Audit rules** and receipt management.`, 'D'],

['Security', 'How do you design custom roles for a finance implementation?',
`- Start from the **seeded job roles**; map them to the client's actual jobs (AP clerk, AP supervisor, GL accountant, controller).
- **Copy** seeded roles and remove unneeded privileges/duties rather than building from scratch.
- Check **segregation of duties** conflicts (e.g. supplier maintenance + payments).
- Assign **data access** per BU/ledger.
- Document the role design and get controller/audit sign-off.
- Test each role with real user scenarios (and negative tests).`, 'D'],

['Data Migration', 'How do you convert open AP invoices and validate the conversion?',
`- Extract **open invoices** (unpaid balance) as of cutover; usually load the **remaining amount** to a conversion clearing account.
- Load via **FBDI** (Payables Standard Invoice Import) with supplier, site, terms, due dates, and the original invoice number.
- Validate and account them; the offset goes to a **conversion clearing account** that's cleared by the GL balance conversion.
- Reconcile **count and amount by supplier** against the legacy aging report; finance signs off.
- Do it in at least two mocks before production.`, 'D'],

['EBS', 'What is MOAC in EBS R12?',
`**Multi-Org Access Control** lets a user access data for **multiple operating units** from one responsibility.
- Controlled by a **security profile** (MO: Security Profile) listing operating units.
- MO: Default Operating Unit sets the default.
- Before R12, users needed one responsibility per operating unit.

Fusion's equivalent is **data access by business unit** through data roles.`, 'D'],

['EBS', 'What are the key differences between EBS and Fusion for Financials consultants?',
`- **Operating Unit (EBS)** → **Business Unit (Fusion)**.
- **Responsibilities** → **job roles + data access**.
- **Concurrent programs** → **scheduled processes**.
- **Forms/Discoverer** → **OTBI/BIP/Smart View**.
- **Customization (custom code, CEMLI)** → **extensions (VBCS, OIC, BIP)** only.
- **Patching by you** → **quarterly updates by Oracle**.
- New capabilities: AI agents, Smart View on live balances, embedded analytics, IDR.

Tip: Show you can explain these to a client moving from EBS.`, 'B'],

['Quarterly Updates', 'How do you manage Oracle\'s quarterly updates?',
`- Read the **release readiness** content and **What's New** documents for the modules.
- Identify **opt-in features** worth enabling and mandatory changes.
- Updates go to TEST two weeks before PROD: run a **regression test pack** (ideally automated) for key flows: P2P, O2C, close, payments, integrations, reports.
- Log issues, raise SRs early.
- Communicate changes to users (release notes, training).`, 'B'],

['Testing', 'How do you write a good functional test script?',
`- **Clear purpose** — which requirement/scenario it tests.
- **Preconditions and data** — supplier, item, user role.
- **Steps** a business user can follow.
- **Expected results** for each step, including accounting entries and reports.
- **Negative cases** (what should fail).
- Traceability back to requirements; evidence captured (screenshots).

Tip: Mention reusing scripts as the regression pack for quarterly updates.`, 'B'],

['Design', 'What goes into a functional design document?',
`- Business requirement and scope.
- Current vs future process (process flow).
- **Configuration decisions** with values and why.
- Gaps and how they're solved (extensions, reports, workarounds).
- Integration and data touchpoints.
- Security and controls.
- Assumptions, dependencies, open items.
- Sign-off.

A good design document lets someone else configure the module without asking you.`, 'B'],

['Behavioral', 'Tell me about a time you disagreed with your lead or the client on a design decision.',
`## Example (STAR)
- **Situation:** The lead wanted one ledger for US and Canada, using a reporting currency for CAD.
- **Task:** I owned GL design and saw a problem: the Canadian entity needed a different fiscal calendar for statutory reporting.
- **Action:** I prepared a short comparison (one ledger vs separate ledgers vs secondary ledger), showed the calendar difference made a shared ledger impossible, and recommended a separate Canadian primary ledger.
- **Result:** The lead agreed after the walkthrough; we avoided rework later.

What matters: **facts, respect, a recommendation** — and accepting the final decision.`, 'B'],

['Behavioral', 'How do you mentor junior consultants?',
`- Pair them on real tasks: they configure, I review.
- Explain **why**, not just which screen — the accounting behind a setup.
- Give them ownership of a small area (e.g. payment terms, tax setup) with check-ins.
- Share checklists, sample test scripts, and how to search My Oracle Support.
- Give feedback early and specifically.

Tip: Mention one person you helped and where they are now.`, 'B'],

['Behavioral', 'How do you handle scope creep from finance users during a project?',
`- Log every new request in the **requirements/change log**.
- Assess impact: effort, timeline, risk.
- Separate **must-have for go-live** from **phase 2**.
- Escalate to the project manager and business owner for a decision — don't silently absorb it.
- Communicate the decision back to the requester.

Tip: Show you protected the go-live date without ignoring the business.`, 'B'],

['General Ledger', 'How do you design account hierarchies for reporting?',
`- Build **trees** for the natural account (Assets, Liabilities, Equity, Revenue, Expense, with sub-levels) and for cost centers (department → division → company).
- Align with the **financial statement lines** and management reporting needs.
- Create **tree versions** effective by date; **audit** and **flatten** them, then **publish** to the Essbase cube.
- Use the same hierarchies in allocations, FR reports and Smart View.
- Govern changes (who can add nodes; change control).`, 'D'],

['General Ledger', 'What is a ledger set and why use one?',
`A ledger set groups ledgers that share the **same chart of accounts and calendar**, so you can:
- open/close periods for many ledgers at once;
- run revaluation, translation, allocations and reports across them;
- grant access with one data access set.

Ledgers with different currencies can still be in a set. Very useful for companies with many country ledgers.`, 'B'],

['Accounts Payable', 'How do you prevent supplier bank account fraud in Oracle?',
`- Restrict who can **create or change supplier bank accounts** (separate from AP processing).
- Require **bank account verification** — supplier portal changes go through **approval** (supplier profile change requests).
- Callback procedures to a known contact before approving changes.
- Audit reports on bank account changes before each payment run.
- Hold first payments to a new account for review.

Tip: Mention a real control and the SoD conflicts you checked.`, 'D'],

['Accounts Payable', 'What are the key Payables options and invoice options you configure?',
`- **Invoice options**: invoice approval, allow adjustments to paid invoices, duplicate invoice checking, invoice currency, receipt acceptance days, default payment terms basis, require validation before approval.
- **Matching**: tolerances, allow distribution override, recalculation on match.
- **Payment options**: allow payment date before system date, bank charge bearer, payment document options.
- **Accounting option**: accrual or cash basis, automatic offsets, prepayment account.
- **Self-service invoices** and supplier portal options.

Each is set by business unit.`, 'D'],

['Accounts Receivable', 'How do you set up AutoMatch for receipts?',
`- **AutoMatch rule sets** define how Fusion matches receipts to transactions using remittance references.
- Configure **thresholds**: customer recommendation threshold, combined weighted threshold, days of closed invoices to consider.
- Fusion uses string matching and weighting (exact match, partial match, customer recommendation).
- **Application exception rules** handle under/over-payments within tolerance (write-off, on-account, etc.).
- Monitor results and tune thresholds.`, 'D'],

['Cash Management', 'What is cash positioning and forecasting in Fusion?',
`- **Cash positioning** shows the daily cash position by bank account/currency: opening balance + expected inflows (AR receipts, receipts) − outflows (AP payments, payroll).
- **Cash forecasting** projects cash for future periods from AP, AR, POs, sales orders, payroll and external sources.
- Uses bank statement balances and subledger data.
- Treasury uses it to plan funding, investments and intercompany transfers.

Many large companies use dedicated treasury systems (Kyriba, etc.) alongside Oracle.`, 'D'],

['Behavioral', 'Describe a complex production issue you resolved during month-end.',
`## Example (STAR)
- **Situation:** On day 2 of close, Create Accounting for Payables failed for 800 invoices.
- **Task:** I was the AP lead and owned close support.
- **Action:** The error showed an invalid account combination. I traced it to a cost center that had been end-dated the day before by the GL team. I enabled the old cost center temporarily, reran accounting, and then worked with GL to reclass the balances and add a check to the cost-center change process.
- **Result:** Close finished on schedule; we added a pre-close validation report for disabled accounts.

Tip: Root cause + process fix = senior-level answer.`, 'B']
]);
