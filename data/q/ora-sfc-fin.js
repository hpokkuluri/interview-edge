// ora-sfc-fin — generated from src/ora-sfc-fin-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Senior Functional Consultant (3–5 yrs) — Finance. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-sfc-fin'] = (QB['ora-sfc-fin'] || []).concat([
['Implementation', 'Walk me through the phases of an Oracle Cloud implementation and your role in each.',
`Oracle's method is often a version of **Oracle Unified Method (OUM)** or a client's agile-hybrid:
- **Discovery / Plan** — gather requirements, current-state processes, scope.
- **Design / CRP1** — configure a baseline, demo to the business, run fit-gap.
- **Build / CRP2** — finish configuration, build extensions, reports, integrations, conversions.
- **Test** — SIT (system integration), UAT, parallel runs or reconciliations.
- **Deploy** — cutover, mock conversions, go-live, hypercare.

## My role as a senior consultant
- Own the module design (e.g. AP and Payments), write the **functional design documents**, configure, write test scripts, lead CRP demos, train key users, and support cutover and hypercare.`, 'B'],

['Implementation', 'What is a Conference Room Pilot (CRP) and how do you run a good one?',
`A CRP is a scripted demo of the configured system using the client's data and processes, so the business can validate the design.

## How I run one
- Agree **scenarios** beforehand (e.g. "PO-matched invoice with price variance").
- Use **realistic data** — their suppliers, accounts, amounts.
- Walk end-to-end including **accounting** and reports, not just screens.
- Capture **gaps and decisions** live in a log with owners.
- Follow up with updated designs and a sign-off.

CRP1 validates the baseline; CRP2 validates the near-final solution including integrations.`, 'B'],

['Implementation', 'How do you handle a requirement that Oracle cannot meet out of the box?',
`- First, **challenge the requirement** — is it a real business need or a legacy habit? Can a process change solve it?
- Look for **configuration options** (descriptive flexfields, SLA rules, approval rules, BIP reports, OTBI).
- If not, consider a **low-impact extension**: Visual Builder page, OIC integration, BIP report, Application Composer (where available), or a REST API process.
- Document it in the **RICEW/RICEFW** inventory with cost and support impact.
- Get **business sign-off** on the trade-off.

Tip: Interviewers like hearing that you avoided a customization by changing the process.`, 'B'],

['Subledger Accounting', 'How would you change the liability account on AP invoices based on supplier type using SLA?',
`- Navigate to **Manage Accounting Methods**; **copy** the seeded Standard Accrual method (never edit seeded).
- Create a **mapping set**: input = supplier type (supplier attribute source); output = natural account value.
- Create an **account derivation rule** for the liability that takes the default account and **overrides the natural account segment** with the mapping set output.
- Copy the seeded **journal entry rule set** for the Invoices event class and attach the new ADR to the **Liability** journal line.
- **Activate** the rule set, assign the custom method to the ledger.
- Test invoice, payment, cancellation and prepayment application.`, 'D'],

['Subledger Accounting', 'What are mapping sets, sources and supporting references in SLA?',
`- **Sources** — the transaction data SLA can use in rules (e.g. supplier type, item category, project). Custom sources can be built from attributes/DFFs.
- **Mapping sets** — lookup tables that turn input values into a segment value or full account (e.g. category → natural account).
- **Supporting references** — extra attributes stored with journal lines (e.g. supplier, invoice number) so you can report balances by them and reconcile.

Supporting references are very useful for reconciliations like intercompany or tax accounts.`, 'D'],

['General Ledger', 'How do you configure journal approval in Fusion GL?',
`- Enable **journal approval** on the ledger and on the **journal sources** that require it (e.g. Manual, Spreadsheet).
- Define the approval rules in **BPM Worklist** (Manage Journal Approval Rules):
- by journal amount (e.g. over $50k → controller);
- by ledger or category;
- by supervisor hierarchy or approval groups.
- Test edge cases: amounts at the threshold, multiple ledgers, self-approval prevention.
- Consider whether subledger journals need approval (usually not — they're controlled upstream).`, 'D'],

['General Ledger', 'What is AutoPost and when would you use it?',
`AutoPost automatically posts journals that match **criteria sets** — by ledger, source, category, period and priority.
- Used for subledger journals (Payables, Receivables, Assets) and trusted integrations so finance doesn't post them manually.
- Schedule it to run regularly.
- Exclude sources that need review or approval (manual journals).

Tip: Combine with Create Accounting "transfer and post" options to keep GL current daily.`, 'D'],

['General Ledger', 'How do segment value security rules work?',
`Segment value security restricts which **segment values** a user can see or use — e.g. a regional accountant can only use cost centers in their region.
- Enable security on the value set, create **data security policies** for value conditions, and grant them through roles.
- In Fusion, it's managed via **Manage Value Sets → security** and data roles in the Security Console.
- It affects entry and inquiry/reporting; combine with **data access sets** (ledger/BSV access).

Be careful: too many rules hurt performance and usability.`, 'D'],

['General Ledger', 'What is a data access set?',
`A data access set controls which **ledgers** (or ledger sets) and which **primary balancing segment values** a user can access in GL, and whether it's read-only or read/write.
- **Full ledger** access, or **specific BSVs** (e.g. company 101–110 only).
- Assigned to users through **Manage Data Access for Users** with GL roles.
- Ledger sets let a user work across ledgers that share COA and calendar (e.g. open/close periods together).`, 'B'],

['Intercompany', 'How does Fusion Intercompany work?',
`Two parts:
- **Intercompany balancing** — automatic: when a journal crosses balancing segment values, GL/SLA creates due-to/due-from lines based on **intercompany balancing rules** (by ledger, legal entity, source/category).
- **Intercompany transactions** — the **Intercompany module**: one entity creates a transaction (e.g. management fee), the partner approves it; it creates journals in both ledgers and optionally **AR invoices and AP invoices** to settle.

Also set up: **intercompany organizations**, **transaction types**, **receivables/payables assignments**, and the **intercompany reconciliation** report.`, 'D'],

['Intercompany', 'How do you reconcile intercompany balances at month end?',
`- Run the **Intercompany Reconciliation** report (Fusion) — compares due-to/due-from between entity pairs.
- Investigate differences: timing (one side booked in the next period), FX rate differences, missing transactions, manual journals with the wrong intercompany segment.
- Use an **intercompany segment** in the COA so you can report balances by trading partner.
- Agree a **cut-off date** and settlement process (netting).
- Eliminations happen in consolidation (FCCS or GL elimination rules).`, 'D'],

['Accounts Payable', 'How do you configure invoice approval workflow in Fusion Payables?',
`- Enable **invoice approval** in Manage Invoice Options.
- Define rules in **BPM** (Manage Invoice Approval Rules), e.g.:
- PO-matched invoices within tolerance → no approval;
- non-PO invoices → cost center manager by amount;
- over $100k → add controller.
- Use **approval groups** or supervisor hierarchy; handle missing approvers with a fallback.
- Decide whether approval happens **before or after validation** and whether payment requires approval.
- Test reassign, delegate, request information and rejection flows.`, 'D'],

['Accounts Payable', 'What is Intelligent Document Recognition (IDR) / invoice imaging?',
`- Suppliers email invoices (PDF/images) to a dedicated address.
- Oracle's **IDR** (AI-based capture) reads the invoice and creates an **incomplete invoice** with header and line data, matched to PO when possible.
- AP staff review and complete exceptions in the **Invoices work area**.
- Higher accuracy over time as it learns supplier layouts.

## What I'd watch
- Supplier communication and email rules.
- Duplicate detection (invoice sent by email and mail).
- KPIs: touchless rate, processing time.`, 'D'],

['Payments', 'How do you set up a new payment format, for example a bank\'s ACH file?',
`- Get the bank's **file specification** and test process.
- Use or copy a seeded **BI Publisher template** (e.g. NACHA, ISO 20022 pain.001) and adjust for the bank's requirements.
- Create the **payment format** pointing to the template.
- Create a **payment process profile** linking format, payment method, transmission (SFTP/ web service) and grouping rules.
- Assign the profile to the **disbursement bank account** and payment methods.
- Test with the bank: prenotes, small live payments, acknowledgment files.`, 'D'],

['Payments', 'What is positive pay?',
`A fraud-prevention service: you send the bank a file of issued checks (number, amount, payee). The bank only pays checks that match.
- In Fusion, run the **Positive Pay File** process (with a BIP template in the bank's format) after each check run.
- Includes voided checks.
- Transmit automatically via SFTP.
- Exceptions are reviewed by treasury before the bank pays.`, 'B'],

['Payments', 'How do you void a payment and what happens to the invoices and accounting?',
`- **Void** the payment in Payables with a void date and action for the invoices: **cancel**, **place on hold**, or **leave open** for repayment.
- Accounting reverses the payment entry (Dr Cash Clearing, Cr Liability) on the void date.
- If the payment cleared the bank, you can't simply void — handle via stop payment or refund instead.
- For electronic payments, void only if the bank rejected the payment.
- Watch 1099 impact and positive pay files (send voids).`, 'D'],

['Accounts Receivable', 'How do you set up Lockbox processing?',
`- Define the **lockbox** with the bank's file format (**transmission format**: BAI2 or custom).
- Map file fields to Oracle fields; set matching rules (match on transaction number, PO, sales order, consolidated bill).
- Define **AutoCash rules** for unmatched receipts.
- Steps: import → validate → **post QuickCash** → apply.
- In Fusion, Lockbox is processed by **Process Receipts Through Lockbox**.

KPI: percentage of receipts auto-applied.`, 'D'],

['Accounts Receivable', 'How does Fusion Revenue Management support ASC 606 / IFRS 15?',
`- Source documents (sales orders, contracts, AR invoices) flow into **Revenue Management** as **customer contracts** and **performance obligations**.
- **Standalone selling prices (SSP)** are set by item/class; Oracle **allocates the transaction price** across obligations by relative SSP.
- Revenue is recognized when obligations are **satisfied** (point in time on shipment/acceptance, or over time ratably).
- Accounting: contract assets, contract liabilities (deferred revenue), revenue.
- Handles contract modifications and discounts.

Tip: Mention the five steps of 606 to show you understand the accounting, not just the module.`, 'D'],

['Accounts Receivable', 'How does credit management work in Fusion?',
`- **Credit profiles** for customers with credit limits and review cycles.
- **Credit checks** from Order Management place orders on **credit hold** when exposure exceeds the limit.
- **Credit reviews/case folders** — analysts review data (aging, payment history, external scores like D&B) and recommend limit changes; approvals route via workflow.
- Exposure includes open AR plus uninvoiced orders.

Integration: OM → Credit Management → hold release.`, 'D'],

['Fixed Assets', 'How do you handle construction-in-progress (CIP) assets?',
`- Costs are collected as **CIP assets** (from AP mass additions or Projects).
- CIP doesn't depreciate.
- When construction is complete, **capitalize** the CIP asset — it becomes a capitalized asset with a date placed in service and starts depreciating.
- With Fusion Projects, use **capital projects** to build assets, generate asset lines and interface them to Assets.

Watch: CIP aging review so completed projects get capitalized on time.`, 'D'],

['Fixed Assets', 'How do you merge or split mass additions?',
`- **Merge** combines several invoice lines into one asset (e.g. freight and installation added to the main equipment).
- **Split** turns one line with quantity 10 into 10 assets (e.g. 10 laptops).
- **Add to existing asset** — cost adjustments to an asset already in service.
- Done in the **Mass Additions** work area before posting.
- Merged lines inherit the parent's category and details.`, 'B'],

['Cash Management', 'How do you design reconciliation rule sets for high auto-match rates?',
`- Analyze the bank statements: what references does the bank pass (check number, payment reference, invoice number)?
- Build rules from **strictest to loosest**: exact reference + amount → amount + date tolerance → one-to-many and many-to-one for batch deposits.
- Add **tolerance rules** for small differences (bank fees) and **transaction creation rules** for recurring charges (fees, interest).
- Make sure payment references sent to the bank are returned on statements (e.g. ISO 20022 end-to-end ID).
- Measure and refine the auto-match rate monthly.`, 'D'],

['Tax', 'How would you set up a new tax rate, for example a VAT rate change in a country?',
`- In **Manage Tax Rates**, **end-date** the current rate and create a new rate with the effective date (or add a new rate period under the same rate code).
- Update tax rules if the rate determination changes.
- Check **tax recovery rates** and accounts.
- Test transactions dated before and after the change (AP, AR, PO).
- Communicate to AP/AR teams, and check reports and tax filings for the switch-over period.

Tip: Mention transactions that span the date (e.g. invoices dated before, paid after).`, 'D'],

['Budgetary Control', 'What is budgetary control and encumbrance accounting?',
`- **Budgetary control** checks spending against budgets in real time — requisitions, POs and invoices can't be approved if they exceed available funds (absolute control) or warn (advisory).
- **Encumbrance** reserves funds: requisition encumbrance → PO encumbrance → actual (invoice) — each step relieves the previous.
- Common in public sector, higher education and some corporates.
- Setup: control budgets, budgetary control rules, control levels by segment, and loading budgets.

Funds check vs funds reserve: check only validates; reserve consumes funds.`, 'D']
]);

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
