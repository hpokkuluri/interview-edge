// ora-lead-fin — generated from src/ora-lead-fin-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-lead-fin'] = (QB['ora-lead-fin'] || []).concat([
['Workstream Leadership', 'How do you lead a Finance workstream on an Oracle Cloud implementation?',
`## What I own
- **Scope and plan** for GL, AP, AR, FA, CM, Tax, Expenses — milestones aligned to the program plan.
- **Design authority** for finance: decisions log, cross-module consistency, sign-offs.
- **Team**: assign modules to consultants, review their configs and designs, unblock them.
- **Business relationship**: weekly sessions with the controller and process owners; raise risks early.
- **Quality**: test coverage, conversion reconciliations, cutover readiness for finance.

## How I run it
- Weekly status with RAG, risks, decisions needed.
- Daily stand-up with the team; design reviews before configuration.
- Clear RACI with the client's finance leads.

Tip: Mention team size and a decision you drove.`, 'B'],

['Workstream Leadership', 'How do you estimate effort for a Finance implementation?',
`- Break scope into **modules × legal entities/BUs × countries**, plus **RICEW** items (reports, interfaces, conversions, extensions, workflows) with complexity ratings (simple/medium/complex).
- Use **reference effort** from past projects for each item type.
- Add effort for **CRPs, testing cycles, mocks, training, cutover and hypercare**.
- Add **contingency** (10–20%) based on unknowns (data quality, client availability).
- Validate with the team; document assumptions (e.g. client provides test data, max 2 mocks).

Tip: Show you estimate bottom-up and sanity-check top-down against similar projects.`, 'D'],

['Workstream Leadership', 'How do you run fit-gap sessions effectively?',
`- Prepare **process scenarios** per module (e.g. "pay a foreign supplier by wire") and demo the **standard Oracle flow** first.
- Discuss each step: **Fit**, **Fit with config**, **Gap**.
- For gaps, classify: process change, report, extension, integration — and the **business value** of closing it.
- Push back on gaps that are only legacy habits.
- Capture decisions with owners and dates; review with the steering committee for big gaps.

Outcome: a prioritized gap list with solutions and estimates, signed off before build.`, 'B'],

['Design', 'How would you design a shared services model for AP across 20 business units?',
`- One or few **shared-service BUs** acting as **service providers** for **Payables invoicing** and **payments** to many client BUs (service provider relationships).
- **Reference data sets** to share payment terms and suppliers; **supplier site assignments** to client BUs.
- Central **invoice imaging (IDR)** inbox with routing by BU.
- **Approval rules** that route to approvers in the client BU (cost center managers).
- **Payment hub**: centralized payment process profiles and disbursement accounts per legal entity.
- **Security**: shared-services staff get access to all client BUs they serve.
- KPIs: cost per invoice, touchless rate, on-time payment.`, 'D'],

['Design', 'How do you design the payment process for a global company with many banks?',
`- **Bank connectivity**: host-to-host SFTP or a **bank hub/SWIFT** connection; reduce custom formats by using **ISO 20022 pain.001** wherever banks support it.
- **Payment methods** by country (ACH, wire, SEPA, check, local clearing).
- **Payment process profiles** per bank/format; **disbursement accounts** per legal entity and currency.
- **Payment approval** for large amounts; **positive pay** for checks.
- **Acknowledgment files** (pain.002) loaded back to update payment status.
- **Bank statement** (camt.053) feeds for reconciliation.

Tip: Mention treasury controls (who can release payments) and testing with each bank.`, 'D'],

['Design', 'How would you design consolidation for a multi-entity group: GL vs FCCS?',
`- **Fusion GL** can do simple consolidation: translation, **ledger sets**, elimination rules, reporting currencies — fine for a few entities with simple ownership.
- **EPM FCCS (Financial Consolidation and Close)** is for complex groups: partial ownership, minority interest, multi-GAAP, intercompany matching, journals at consolidation level, statutory reporting, close task management.
- Integration: **Data Integration / Data Management** loads GL balances (by account and entity) to FCCS each close.
- Mapping the GL COA to the FCCS account structure is key.

Decision drivers: ownership complexity, number of entities, reporting requirements and close timeline.`, 'D'],

['Design', 'How do you handle multi-GAAP requirements, for example US GAAP and local statutory?',
`Options:
- **Secondary ledger** (subledger-level) with a different **accounting method** — SLA creates two sets of entries from the same transaction.
- **Adjustment-only secondary ledger** — only manual GAAP adjustments; reports combine primary + adjustments.
- **Separate corporate/tax books** in Assets for depreciation differences.
- Different **COA** in a secondary ledger via **chart of accounts mapping**.

Choose based on how many transactions differ: few differences → adjustment-only; systematic differences (e.g. revenue, leases) → full subledger-level secondary ledger.`, 'D'],

['Design', 'How would you approach an EBS R12 to Fusion Financials migration?',
`- **Reimplement, don't lift-and-shift**: rethink enterprise structures, COA, processes — remove EBS customizations.
- **Map** EBS objects to Fusion: OUs → BUs, responsibilities → roles, customizations → extensions or standard features.
- **Data**: open transactions plus summary balances; decide on history (archive/reporting store).
- **Integrations**: rebuild on OIC/REST, retire database-level ones.
- **Coexistence**: phased by entity or module? (e.g. Fusion Financials with EBS SCM via integration for a period).
- **Change management**: role changes and new UI; reporting moves to OTBI/BIP/Smart View.
- Leverage Oracle's **EBS-to-Cloud** tools/accelerators where they fit.`, 'D'],

['Tax', 'How do you integrate a third-party tax engine like Vertex or Avalara?',
`- Fusion Tax provides **tax partner integration** — the partner calculates US sales/use tax.
- Set up the **tax regime** for partner services, provider configuration, and **tax partner subscriptions** for the BUs/legal entities.
- Item tax codes/product categories and **ship-from/ship-to** locations must be accurate (geocodes).
- Transactions (AR invoices, AP invoices, POs) call the partner for calculation; results stored on tax lines.
- Reporting/filing done in the partner tool; reconcile tax accounts in GL.
- Test exemptions (exempt customers with certificates), use tax on AP, and jurisdiction edge cases.`, 'D'],

['Accounts Receivable', 'How would you design billing for a subscription or services business in Oracle?',
`- Options: **Fusion Subscription Management** (for recurring billing, renewals, usage), **Project Billing** (for project-based services), or **AR + AutoInvoice** fed from a billing system.
- **Revenue Management** for ASC 606 allocation and over-time recognition.
- Invoice frequency, proration, upgrades/downgrades and usage rating are the main design points.
- **Collections** and credit management on top.
- Integration with CRM/CPQ for contracts.

Tip: Show you'd pick the tool based on how complex the billing model is.`, 'D'],

['Accounts Receivable', 'What are the common causes of AR-to-GL reconciliation differences and how do you prevent them?',
`- Transactions not accounted or not transferred/posted.
- **Manual journals** posted to the receivable account in GL.
- Transactions accounted in a different period than the aging report date.
- **Unapplied/on-account** cash accounts misunderstood.
- **Revaluation** entries not considered.
- **Prevention**: control accounts (prevent manual entry via **third-party control accounts** in SLA), daily create accounting, period-close checklist with the Receivables to Ledger Reconciliation report.`, 'D'],

['Period Close', 'A CFO wants to shorten the close from 10 days to 5. What would you do?',
`## Diagnose
- Map the current close calendar: tasks, owners, dependencies, durations; find the **critical path**.

## Typical levers
- **Continuous accounting**: daily Create Accounting, daily bank reconciliation, weekly intercompany settlement.
- **Automate accruals** (receipt accruals, recurring journals, allocations).
- **Earlier cut-offs** for AP/AR with estimates for the last days.
- **Auto-reconciliation** of balance sheet accounts (e.g. account reconciliation tools).
- **Standard close checklist** with task management (FCCS/ARCS or similar) and visibility.
- Fix data issues upstream (e.g. invalid accounts) so close isn't spent on corrections.

## Result
- Measure days to close and post-close adjustments; iterate each month.`, 'D'],

['Period Close', 'What is a third-party control account in SLA?',
`An account flagged so that **only subledger transactions with a third party (supplier/customer)** can post to it.
- Prevents **manual GL journals** to accounts like AP liability or AR receivables.
- Enables **third-party balance reporting** (supplier/customer balances) from SLA.
- Keeps subledger-to-GL reconciliation clean.

Set on the natural account value (Third Party Control Account = Supplier/Customer).`, 'D'],

['Testing', 'How do you design a finance test strategy for a large implementation?',
`- **Unit/config testing** by consultants.
- **SIT** with end-to-end flows across modules and integrations (P2P, O2C, record-to-report, acquire-to-retire).
- **Data validation** of conversions (counts, values, sample checks).
- **UAT** by business users with real scenarios and **day-in-the-life** tests.
- **Parallel run or reconciliation** (e.g. compare a month's close in legacy and Oracle) for high-risk areas.
- **Performance testing** for big volumes (AutoInvoice, payment runs).
- **Regression automation** for quarterly updates.
- Entry/exit criteria, defect triage cadence, and sign-off by the controller.`, 'D'],

['Cutover', 'How do you plan a Finance cutover?',
`- **Cutover plan**: minute-by-minute tasks for the go-live weekend — owner, start time, duration, dependencies, verification step.
- **Freeze legacy**: last invoice entry, last payment run, last receipts.
- **Convert**: master data → open AP/AR → assets → GL balances; reconcile each step and sign off.
- **Open periods**, enable integrations, final security checks.
- **Go/No-Go** meeting with criteria.
- **Fallback plan** if a critical step fails.
- **Hypercare** schedule: first payment run, first close.

Rehearse in at least two mock cutovers with timing.`, 'D'],

['Cutover', 'What do you focus on during hypercare after a Finance go-live?',
`- **First payment run** and **first bank file** — highest risk.
- **First month-end close** — subledger accounting errors, reconciliations.
- **Integrations** — monitor failures daily.
- **User support** — floor walkers, triage war room, daily issue review.
- **KPIs**: open tickets, invoices on hold, unapplied cash, accounting errors.
- Transition to the **support team** with knowledge transfer and runbooks.`, 'B'],

['Team Leadership', 'How do you manage an offshore team on an Oracle project?',
`- Clear **work packages** with specs, acceptance criteria and due dates.
- **Overlap hours** for daily stand-ups; written handoffs at end of day.
- Shared **standards**: naming, config workbooks, test evidence.
- **Review** their output (configs, BIP reports) before client delivery.
- Build their **business understanding** — invite them to key design sessions (recordings).
- Recognize good work publicly; give them ownership.

Tip: Mention a time the setup saved schedule (follow-the-sun testing).`, 'B'],

['Team Leadership', 'A consultant on your team is underperforming. What do you do?',
`- **Talk early and privately** — specific examples, impact on the project.
- Understand the cause: skill gap, unclear expectations, personal issues, workload.
- Agree a **plan**: training, pairing, smaller tasks with frequent reviews, clear deadlines.
- Check in weekly; document progress.
- If no improvement, escalate to their manager / resource manager and adjust staffing to protect the project.

Balance: fair to the person, honest with the client about delivery risk.`, 'B'],

['Stakeholders', 'How do you handle a controller who resists the new Oracle process?',
`- **Listen** to understand the real concern (control, workload, reporting).
- Show the new process with **their data** in a CRP; quantify benefits (time saved, better controls).
- Offer **adjustments within standard** (e.g. an extra approval step, a report they rely on).
- Involve them in decisions — make them a co-owner.
- Escalate through the **steering committee** only if it threatens the design or timeline.

Example: a controller wanted manual journal review for all subledger entries; we gave them a daily OTBI exception report instead.`, 'B'],

['Stakeholders', 'How do you communicate project status to executives?',
`- One page: **RAG** status, milestones vs plan, top 3 risks/issues with mitigation, **decisions needed**, budget/time impact.
- Business language, not system terms.
- Bad news early with a plan.
- Consistent format every week so trends are visible.

Tip: Executives care about go-live date, business readiness, and risk to operations.`, 'B'],

['Controls', 'How do you work with internal and external auditors during an implementation?',
`- Engage them **early** (design phase) — share control design, SoD matrix, key reports.
- Document **key controls** (automated and manual) and map them to SOX control IDs.
- Provide evidence: configuration screenshots, test results, conversion reconciliations, user access reviews.
- **Key report validation** (completeness and accuracy of reports used in controls).
- Get sign-off before go-live on conversion and controls.

It avoids late surprises and rework.`, 'D'],

['Reporting', 'How would you design a reporting strategy for a Finance Cloud implementation?',
`- **Inventory** current reports; **rationalize** — many can be retired or replaced by standard reports.
- Map each to the right tool: **OTBI** (operational, ad-hoc), **BIP** (formatted/extracts), **FR/Smart View/Narrative Reporting** (financial statements), **EPM** (planning/consolidation), **FAW/Fusion Data Intelligence** (cross-module analytics, history).
- Define **ownership** (business vs IT), security and naming standards.
- Train power users to build their own OTBI.
- Build the critical reports early so they are tested in SIT/UAT.`, 'D'],

['AI', 'How are AI and agents being used in Oracle Fusion Financials?',
`- **Intelligent Document Recognition** for invoices.
- **AI agents** (Oracle AI Agent Studio): e.g. payables agents that process invoices, ledger agents for close insights, collections agents drafting customer communications.
- **Generative AI** in narratives (e.g. variance explanations), supplier communications, and help.
- **Predictive**: payment time predictions, anomaly detection in journals, expense auditing.
- Configuration via AI Agent Studio with guardrails and human approval.

Tip: Show practical judgment — where AI helps (high-volume, rules-based) and where controls still need humans.`, 'D'],

['Accounts Payable', 'How would you increase touchless invoice processing?',
`- Push suppliers to **PO-based invoicing** with accurate POs (catalogs, agreements).
- Use **IDR** for capture and **supplier portal / e-invoicing** (EDI, PEPPOL) to remove paper.
- Tune **matching tolerances** and use **receipt-based matching** where appropriate.
- Fix master data (supplier sites, bank details, UOMs).
- **Auto-approval** for PO-matched invoices within tolerance.
- Analyze holds by type and supplier monthly; fix root causes.
- KPI: touchless %, invoices per FTE, average cycle time.`, 'D'],

['Accounts Payable', 'How do you handle invoice matching for services or blanket POs where receipts are messy?',
`- For services, consider **2-way match** or **amount-based lines** instead of quantity.
- For blanket POs with many receipts, consider moving the **invoice match option** from **Receipt** to **Purchase Order** (still 3-way) so AP doesn't have to pick specific receipts — Oracle checks received quantity in total.
- Use **receipt acceptance** or **self-billing (pay on receipt)** for high-volume suppliers.
- Train requesters to receive promptly.

Trade-off: PO-level matching loses receipt-level traceability for price differences; agree with audit.`, 'D'],

['Fixed Assets', 'How would you design Oracle Assets for a company with IFRS and US GAAP plus tax books?',
`- **Corporate book** linked to the primary ledger (e.g. US GAAP).
- **Tax books** (federal, state) with MACRS methods via mass copy.
- For IFRS differences (component depreciation, revaluation, different lives): a second **corporate book** linked to a **secondary ledger**, or **adjustment-only** approach for few differences.
- **Category** design that supports both bases.
- **Impairment** and revaluation processes for IFRS.
- Reconcile each book to its ledger every period.`, 'D'],

['Projects', 'How does Fusion Project Financials interact with core Financials?',
`- **Project costing**: costs from AP invoices, expenses, time, inventory and POs are collected against projects/tasks.
- **Capital projects**: generate CIP assets and send to Assets.
- **Project billing / contracts**: invoices created through AR; revenue recognized via project revenue methods.
- **Burdening** (overheads) and **cross-charging** between organizations.
- Accounting via SLA for Project Costing and Billing.

Common design point: project-related segments vs project as a subledger attribute (don't put projects in the COA).`, 'D'],

['Change Management', 'How do you ensure finance users are ready for go-live?',
`- **Change impact assessment** by role: what's different for AP clerks, accountants, approvers.
- **Super users** trained early; they help train others.
- **Role-based training** with job aids, short videos, practice environment.
- **Readiness checks**: training completion, UAT participation, access provisioned.
- **Communication plan** from leadership.
- Post-go-live support model and FAQs.`, 'B'],

['Quarterly Updates', 'How do you set up governance for continuous Oracle Cloud releases?',
`- A **release management** process: review readiness docs each quarter, assess impact, decide on opt-ins.
- **Regression automation** (e.g. Oracle's testing tools or third-party like Opkey/Worksoft) for core flows.
- **Change Advisory Board** to approve configuration changes and new features.
- **Roadmap** of features to adopt aligned to business priorities.
- Communicate changes to users with short release notes.`, 'B'],

['Behavioral', 'Tell me about the most complex Finance implementation you led.',
`Structure:
- **Context**: industry, size (entities, countries, users), modules, timeline, team size.
- **Complexity**: e.g. 12 ledgers, multi-GAAP, shared services, 40 integrations, aggressive timeline.
- **Your role and key decisions**: e.g. redesigned COA, chose secondary ledgers, introduced payment hub.
- **Challenges**: data quality, resistance, scope changes — and what you did.
- **Results**: on-time go-live, close time reduced, KPIs.
- **Learning**: what you'd do differently.

Tip: Practice a 3-minute version and a 30-second version.`, 'B'],

['Behavioral', 'What would you do if you discovered late in the project that a key design decision was wrong?',
`- **Assess impact** fast: what breaks, cost/time to fix, workaround options.
- **Tell the PM and business owner** immediately with options and a recommendation.
- Choose between **fix now** (delay) or **workaround and fix in phase 2** — business decides.
- Document the decision and learnings.

Example: discovered that one legal entity needed a separate ledger due to a different fiscal year; we created it before SIT with two weeks' extra effort rather than going live with a workaround.`, 'B'],

['General Ledger', 'How do you handle suspense accounts and journal imports from external systems?',
`- **Journal import** from external sources via FBDI (Journal Import template), GL REST, or OIC.
- Define a **custom journal source** per system for traceability, approval and reporting.
- **Suspense posting**: can be enabled to post unbalanced journals to a suspense account — better to keep it off and fix imbalances at source.
- Validate COA combinations upfront (cross-validation rules) and use **dynamic combination creation** carefully.
- Monitor import errors daily; reconcile the source system to GL by source.`, 'D'],

['General Ledger', 'What is average daily balancing and when is it used?',
`**Average balance processing** keeps **daily balances** and calculates average balances (period-to-date, quarter-to-date, year-to-date).
- Needed by **banks and financial institutions** for regulatory reporting and interest calculations.
- Enabled on the ledger (average balance processing), with **effective dates** on journals.
- Fusion supports average daily balances in GL with specific reporting.

Mention it only if relevant — it shows breadth.`, 'D'],

['Expenses', 'How would you roll out Oracle Expenses to 5,000 employees?',
`- **Policies** harmonized across countries; travel policy owners sign off.
- **Corporate card** feeds tested with the issuer; card holder matching.
- **Mobile app** with receipt capture; single sign-on.
- **Approval** via manager hierarchy (needs accurate HCM data).
- **Pilot** with one department; fix issues; then waves.
- Training: short videos and FAQs; help desk ready.
- **Auditing**: risk-based audit rules to reduce manual audit.
- Integration with payroll for reimbursements if used.`, 'D'],

['Accounts Receivable', 'How would you reduce DSO using Oracle?',
`- **Accurate, timely invoicing** — remove billing delays (AutoInvoice errors, missing PO numbers).
- **E-invoicing / customer portal** so invoices arrive faster.
- **Collections strategies** with prioritized worklists, automated dunning, promise-to-pay tracking.
- **Credit management** to stop risky orders.
- **Cash application automation** (AutoMatch, lockbox) so payments are applied quickly.
- **Dispute management** with root-cause tracking.
- Dashboards: DSO, aging buckets, collector productivity.`, 'D'],

['Workstream Leadership', 'How do you decide what to configure vs build vs change in the process?',
`Decision order:
- **Adopt the standard** process if it meets the business need (cheapest to support, fastest upgrades).
- **Configure** (setups, rules, flexfields, approvals).
- **Report or extend** lightly (BIP, OTBI, Visual Builder, OIC) when value is clear.
- **Custom build** only for competitive differentiators or regulatory needs.

I score gaps on **business value**, **effort**, **support cost** and **upgrade risk**, and get the business owner to decide.`, 'B'],

['Behavioral', 'Why should we hire you as a Lead Finance consultant?',
`Tie your strengths to their needs:
- **Depth** across Finance modules (name them) and **end-to-end** process knowledge (P2P, O2C, R2R).
- **Implementations**: number and scale; roles you held.
- **Leadership**: teams you've led, how you develop people.
- **Business partnership**: speaking the controller's language; outcomes like faster close.
- **Calm under pressure**: go-lives and close crises handled.

Close with: "I can own the finance workstream from design to hypercare and make your team successful."`, 'B']
]);

QB['ora-lead-fin'] = (QB['ora-lead-fin'] || []).concat([
['Cash Management', 'How would you design bank statement processing for 200 bank accounts across 15 banks?',
`- **Standard formats**: CAMT.053 or BAI2 from every bank where possible; avoid custom parsers.
- **Automated retrieval** via SFTP/bank connectivity, scheduled **Load and Import Bank Statement**.
- **Reconciliation rule sets** per account type (disbursement, collection, payroll, zero balance).
- **Transaction creation rules** for fees and interest.
- **Exception dashboards** for unreconciled items by age.
- Prior-day and **intraday** statements for cash positioning.
- Ownership: treasury vs shared services for exceptions.`, 'D'],

['Design', 'How do you design the chart of accounts mapping between legacy and Fusion for conversion and reporting?',
`- Build a **mapping table** owned by finance: legacy account string → new segment values (with rules for cost centers and intercompany).
- Use it for **balance conversion**, **open transaction conversion**, and **historical reporting** (comparatives).
- Validate: every legacy account with a balance maps; no new combination violates cross-validation rules.
- Freeze the mapping before the last mock; changes go through change control.
- Optionally load it into Fusion as **chart of accounts mappings** for interfaces from legacy systems that still send legacy accounts.`, 'D'],

['Workstream Leadership', 'What KPIs would you track to show the Finance implementation succeeded?',
`- **Close**: days to close, post-close adjustments.
- **AP**: cost per invoice, touchless %, on-time payment %, early-pay discounts captured.
- **AR**: DSO, auto-cash-application %, unapplied cash.
- **Controls**: audit findings, SoD violations, manual journals volume.
- **Adoption**: tickets per user, training completion, use of self-service reporting.
- **Stability**: integration failures, Create Accounting errors.

Baseline them before go-live so improvement is provable.`, 'B']
]);
