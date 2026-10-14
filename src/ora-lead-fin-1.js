// Oracle Financials Lead — questions and model answers.
// Format: [category, question, answer]. In answers: blank line = new paragraph, "- " bullet, "## " heading, "Tip: " callout, **bold**.
QB['ora-lead-fin'] = (QB['ora-lead-fin'] || []).concat([
['Enterprise Structures', 'Walk me through how you would design the enterprise structure for a multi-country Fusion Financials implementation.',
`Start from how the business is legally, managerially and fiscally organized — the structure should mirror that, not the org chart.

## The building blocks
- **Legal entities** — one per registered company; they own transactions, tax registrations and statutory reporting.
- **Primary ledgers** — one per unique combination of chart of accounts, calendar, currency and accounting method (the "4 Cs"). Countries sharing all four can share a ledger with balancing segment values per legal entity.
- **Business units** — where transactional work happens (AP, AR, Procurement); assign service-provider relationships if a shared-services center processes for many BUs.
- **Reference data sets** — share setups (payment terms, customers, suppliers' sites) across BUs instead of duplicating.
- **Secondary or reporting-currency ledgers** — for local GAAP vs IFRS/US GAAP, or group-currency reporting.

## How I'd approach it
- Run workshops with finance, tax and legal to confirm entities, currencies and statutory needs per country.
- Design the chart of accounts with group consolidation in mind first, local statutory needs via secondary ledgers or segment mapping.
- Prototype in a sandbox with real transactions and the close process before locking it in — this is the hardest thing to change later.

Tip: Mention a real example: how many ledgers, why you chose secondary ledgers vs reporting currencies, and one trade-off you made.`, 'D'],

['Chart of Accounts', 'How do you design a chart of accounts for a global company, and what mistakes have you seen?',
`A good COA answers reporting questions with segments, not with hundreds of natural accounts.

## Design principles
- **Typical segments:** Company (balancing), Cost Center, Natural Account, Intercompany, Product/Line of Business, Future1 — each with a clear owner and purpose.
- Keep segments **orthogonal** — one meaning per segment, no "smart" codes that encode two things.
- Leave room: number ranges by account type, spare segments for growth, and a future segment.
- Use **hierarchies (account and cost-center trees)** for roll-ups and reporting instead of creating summary values.
- Define **cross-validation rules** early to stop invalid combinations at entry.

## Common mistakes
- Copying the legacy COA one-for-one, including its workarounds.
- Using cost centers to track projects or customers (use subledger attributes or the right segment).
- Too many segments — users and integrations suffer; balancing headaches multiply.
- Ignoring intercompany: no intercompany segment makes eliminations painful.

Tip: Interviewers like a "before vs after" — e.g. reduced 4,000 natural accounts to 900 by moving detail into segments and hierarchies.`, 'D'],

['Subledger Accounting', 'Explain Subledger Accounting (SLA) and give an example of a rule you customized.',
`SLA is the engine that turns subledger events (an AP invoice validated, a receipt applied) into accounting entries before they go to GL. It separates "what happened" from "how we account for it", so the rules can change without touching transactions.

## Key components
- **Event classes and types** — what happened (e.g. Invoices → Invoice Validated).
- **Journal line rules** — debit/credit, accounting class, conditions.
- **Account derivation rules (ADRs)** — how each account segment is derived (from the transaction, a mapping set or a constant).
- **Description rules** and **supporting references** for reporting and reconciliation.
- **Subledger Accounting Method** assigned to the ledger, grouping the application accounting definitions.

## Example
On one project the business wanted AP liability booked to a different natural account by supplier type (intercompany vs third-party). I copied the standard method, created an ADR that overrode only the natural-account segment using a mapping set driven by supplier type, attached it to the liability journal line rule, validated, and regression-tested invoice, payment and cancellation flows.

Tip: Always say you copy the seeded method rather than editing it, and that you test the full event lifecycle (create, adjust, cancel, pay).`, 'D'],

['Period Close', 'How do you run and improve the month-end close in Oracle Financials?',
`I treat the close as a sequenced checklist across subledgers with clear owners, cut-off times and reconciliations.

## Typical sequence
- **Procurement/AP:** complete receipts, run receipt accrual, validate and account invoices, transfer to GL, close AP period.
- **AR:** finish billing and receipts, run revaluation if needed, account and transfer, close AR period.
- **Assets:** add assets, run depreciation, create accounting, close FA period.
- **Cash Management:** reconcile bank statements.
- **GL:** post journals, run revaluation and translation, intercompany and allocations, reconcile subledger to GL, close the period, consolidate.

## How I improve it
- Use the Fusion **Close Monitor** and task lists so status is visible to the controller.
- Move work earlier: daily create-accounting runs, continuous reconciliation, accrual automation.
- Track a metric (days to close) and remove bottlenecks — on one program we went from 8 to 5 working days by automating accruals and bank reconciliation and moving intercompany settlements to weekly.

Tip: Lead with a number — days to close before and after — then explain what you changed.`, 'D'],

['Accounts Payable', 'A supplier is paid twice. How would you investigate and prevent it from happening again?',
`## Investigate
- Find both invoices: check invoice numbers, amounts, dates and supplier sites — duplicates often differ by a character, a leading zero or a different site.
- Check the source: one manual and one from OCR/imaging or an integration is the most common pattern.
- Check whether the duplicate-invoice validation was bypassed or the invoice number was altered.

## Recover
- Contact the supplier for a refund or credit memo; record it in AP and apply it, or net it on the next payment.
- Make sure accounting and 1099/tax reporting stay correct.

## Prevent
- Tighten **duplicate-invoice checks** (supplier + number + amount + date) and normalize invoice numbers on import.
- Use **holds and validation** consistently; control who can override.
- Run a periodic duplicate-payment analytics report before each payment run.
- Review the imaging/integration process so the same invoice can't enter by two routes.

Tip: Interviewers listen for root cause + control, not just "we got the money back".`, 'D'],

['Accounts Receivable', 'How do you design the cash application process to reduce unapplied cash?',
`## Approach
- **Get remittance data in**: lockbox files, bank statements (BAI2/CAMT.053) and remittance emails — the quality of remittance drives auto-application.
- **AutoMatch / Lockbox rules**: match on transaction number, PO, amount, customer reference; set tolerances and rules for partial and over-payments.
- **Receipt application exceptions** go to a work queue with clear ownership and ageing targets.
- Use **AutoCash rule sets** for receipts without remittance (e.g. oldest invoice first) where the business agrees.

## Measure
- Auto-application rate, unapplied and on-account balances, days to apply.
- On one rollout we moved auto-applied receipts from about 45% to 80% by adding customer-reference matching and cleaning customer master data.

Tip: Mention bank statement reconciliation in Cash Management closing the loop.`, 'D'],

['Fixed Assets', 'Explain how asset books, categories and depreciation work in Oracle Assets, including tax books.',
`- **Corporate book** — the primary book linked to a ledger, holding the main depreciation for financial reporting.
- **Tax books** — copies of corporate assets with different depreciation methods/lives (e.g. MACRS in the US); kept in step using **Mass Copy** each period.
- **Asset categories** — default the accounts, depreciation method, life and prorate convention per book.
- **Depreciation** runs per book per period; once run and the period closed it creates accounting through SLA.
- **Additions** come from manual entry, Mass Additions from AP invoices, or projects (CIP to capitalized assets).

## Things I watch
- Category design matches both financial and tax needs.
- Mass Additions from AP are reviewed weekly, not at month-end.
- Retirements, transfers and impairments flow correctly to GL.

Tip: If you've done IFRS vs local GAAP, mention multiple corporate books or secondary ledgers for different depreciation.`, 'D'],

['Leadership', 'Tell me about a time you had to push back on a business request during an implementation.',
`Use STAR, and show you protected the outcome, not just the scope.

## Example structure
- **Situation:** During design, the controller wanted the legacy 200-line approval matrix rebuilt exactly in Fusion.
- **Task:** I owned the AP and approvals design and the go-live date.
- **Action:** I analyzed a year of invoices and showed 92% were approved by the same three rules. I proposed a simpler rule set plus exception routing, ran a short demo with real data, and agreed a 30-day review after go-live.
- **Result:** The configuration took days instead of weeks, approvals cycle time dropped, and the review found only two rules needed adding.

## What interviewers listen for
- Data, not opinion.
- Respect for the business owner's concern (control and auditability).
- A way to revisit — you didn't just win the argument.

Tip: Keep it under two minutes and end with the measurable result.`, 'D'],

['SOX & Controls', 'What SOX controls do you build into an Oracle Financials implementation?',
`## Access controls
- Role design with **segregation of duties** (e.g. no one can create a supplier and pay it); use Advanced Access Controls or a third-party SoD tool.
- Quarterly user access reviews; privileged access for support logged and time-bound.

## Configuration controls
- Change control for setups (approval, testing evidence, migration via FSM configuration packages).
- Audit trail enabled on key setups like suppliers, bank accounts and payment terms.

## Process controls
- Invoice approval workflows and holds, three-way match, payment approvals.
- Journal approval rules by amount and source.
- Reconciliations (subledger to GL, bank, intercompany) with sign-off.
- Supplier bank-account change verification.

## Evidence
- Reports and logs the auditors can rely on (key report validation — completeness and accuracy).

Tip: Mention you involve internal audit early in design so controls aren't bolted on before go-live.`, 'D'],

['Integrations & Data', 'How do you approach data conversion for a Financials go-live?',
`## Scope and strategy
- Decide what to convert: open AP invoices, open AR transactions, assets, GL balances (and how much history — usually summary balances for 1–2 years).
- Master data first: suppliers, customers, banks, then transactions.

## Tools
- **FBDI** templates loaded via UCM and the import processes, or **HDL-style** loaders where applicable; REST APIs for smaller sets.
- Mapping tables for COA (legacy to new segments) maintained by the business.

## Quality
- At least three mock conversions with reconciliation each time: record counts, control totals, sample checks — signed off by finance.
- Cleanse in the source system before extraction; don't carry junk over.
- A cutover plan with timing, owners and a fallback.

Tip: Say who signed off reconciliations — finance owning the numbers is what auditors expect.`, 'D']
]);
