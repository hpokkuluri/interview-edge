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
