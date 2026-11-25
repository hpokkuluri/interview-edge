// Part 2: contracts, billing, revenue, construction and engineer-to-order, control and close-out.
QB['ora-mod-ppm'] = (QB['ora-mod-ppm'] || []).concat([
['Billing & Revenue', 'How do Project Contracts and Project Billing work together?', `**Why they ask:** the revenue side of the suite.

**Answer:**
"A contract has a customer, lines and funding linked to projects or tasks. Each line has a bill plan, which decides how invoices are calculated, and a revenue plan, which decides how revenue is recognized. Billing methods include time and materials, cost-plus with markups, percent complete, and amount- or rate-based milestones. Invoices are generated, approved and sent to Receivables; revenue is generated and accounted through SLA to GL."

Tip: Separate bill plan from revenue plan. Billing and revenue often differ.`, 'B', 'M', null, {t:1, f:['Why keep bill plan and revenue plan separate?', 'Contracts often bill on milestones but recognize revenue over time; separating them handles ASC 606 correctly.']}],
['Billing & Revenue', 'Explain the billing methods: T&M, cost-plus, percent complete and milestone.', `**Why they ask:** construction and services use different ones.

**Answer:**
"Time and materials bills hours and costs at bill rates. Cost-plus bills actual cost with a markup or fee, common on cost-reimbursable contracts. Percent complete bills a share of the contract value based on progress, often cost-to-cost or physical progress. Milestone billing invoices fixed amounts when events are met. Construction often bills monthly progress against a schedule of values with retention held back."

Tip: Tie construction to progress billing plus retention.`, 'B', 'M', null, {f:['Which method gives the most cash-flow risk to the contractor?', 'Milestone billing, because cost is spent long before the milestone is reached and invoiced.']}],
['Billing & Revenue', 'How is revenue recognized on long construction contracts under ASC 606?', `**Why they ask:** the core Finance concept on project clients.

**Answer:**
"Most construction contracts meet over-time recognition because the customer controls the asset as it's built. The usual measure is cost-to-cost percent complete: cost to date divided by estimated total cost, times the contract value, less revenue recognized before. In Fusion this is a percent-complete revenue method on the revenue plan, using actual cost and the latest forecast. The estimate at completion must be current each month, or revenue is wrong."

Tip: Stress that a stale forecast means wrong revenue.`, 'D', 'S', null, {t:1, f:['What happens when the estimated total cost goes up?', 'Percent complete drops, so revenue is adjusted in the current period; if total cost exceeds the contract value, the full expected loss is recognized right away.']}],
['Billing & Revenue', 'Explain unbilled receivables and billings in excess, with the accounting.', `**Why they ask:** the heart of the construction WIP schedule.

**Answer:**
"When revenue recognized is more than billed, the difference is unbilled receivable, a contract asset: debit unbilled receivable, credit revenue. When billing is ahead of revenue, it's billings in excess, a contract liability: invoicing debits AR and credits unbilled first, then unearned revenue. Fusion manages both through Project Billing accounting. The WIP schedule compares the two by job every month."

Tip: Say over-billed equals liability, under-billed equals asset.`, 'D', 'S', null, {t:1, f:['Why do auditors look closely at under-billing?', 'Large under-billings can mean revenue recognized on optimistic estimates that may never be billed or collected.']}],
['Construction', 'How does retention (retainage) work on the owner side and subcontractor side?', `**Why they ask:** retention is everywhere in construction.

**Answer:**
"On the owner side, the contractor bills full progress but the owner withholds a percentage, often 5–10%. Project Billing supports retention terms, creating a retention receivable that is billed when released, often at completion. On the subcontractor side, Procurement complex work contracts withhold retention from subcontractor payments, recorded as retention payable and released at completion. Finance reports both by job."

Tip: Mention both sides — owner retention receivable, subcontractor retention payable.`, 'D', 'S', null, {f:['Where does retention show on the balance sheet?', 'Retention receivable is a contract asset or receivable; retention payable is a liability, both tracked by job.']}],
['Construction', 'How are subcontractor payments handled in Fusion?', `**Why they ask:** subcontractors are a big share of construction cost.

**Answer:**
"Procurement complex work contracts hold the schedule of values, progress payment terms, retention and advances with recoupment. The subcontractor submits progress, which becomes a pay request and Payables invoice for the work done, less retention and recouped advances. The invoice carries project details, so the cost flows to Project Costing. Lien waivers and compliance documents are often handled in Textura Payment Management, integrated with ERP."

Tip: Mention Textura if the client is a large general contractor.`, 'D', 'S', null, {f:['What compliance checks happen before paying a subcontractor?', 'Lien waivers, insurance certificates, licensing and approved progress, usually as holds before payment.']}],
['Billing & Revenue', 'How do project invoices get to Receivables?', `**Why they ask:** the AR integration.

**Answer:**
"After invoices are generated and approved in Project Billing, Transfer to Receivables sends them through the AutoInvoice interface. Receivables creates the transactions linked to the contract and project, accounts the receivable, and handles receipts and collections. The invoice keeps the project reference, so project billed amounts reconcile to AR."

Tip: Mention reconciling project billed amounts to AR.`, 'B', 'M', null, {f:['An invoice was transferred but didn\'t appear in AR. What do you check?', 'AutoInvoice errors and the Transfer to Receivables output, usually customer, transaction type or accounting setup problems.']}],
['Construction', 'What is a WIP schedule and how do you produce it from Fusion?', `**Why they ask:** a key construction finance report, also used by banks and sureties.

**Answer:**
"The WIP schedule lists each job: contract value, estimated total cost, cost to date, percent complete, revenue earned, billed to date, and over- or under-billing, plus estimated gross profit. In Fusion the data comes from Project Contracts, Costing, Control forecasts and Billing. I build it in OTBI or BIP, or use Construction Intelligence, and reconcile totals to the GL unbilled and billings-in-excess accounts."

Tip: Mention sureties and banks — they rely on it.`, 'D', 'S', null, {t:1, f:['What does margin fade mean?', 'When estimated gross profit on a job keeps dropping from month to month — an early sign of a problem job.']}],
['Engineer to Order', 'What is engineer-to-order, and how is it different from make-to-stock and configure-to-order?', `**Why they ask:** ETO and project-driven supply chain are often in construction and engineering JDs.

**Answer:**
"Make-to-stock builds standard products before orders. Configure-to-order assembles standard options chosen by the customer. Engineer-to-order designs the product for a specific customer after the contract, like custom machinery, power equipment, ships or large structures, often over months or years. In Oracle that's project-driven supply chain: the contract and project come first, and requisitions, POs, work orders and inventory all carry the project."

Tip: Give one example from an industry you know.`, 'B', 'M', null, {t:1, f:['Why does ETO need project-specific inventory?', 'Material is engineered and bought for one job, so it must be reserved and costed to that job, not used elsewhere.']}],
['Engineer to Order', 'Walk me through the end-to-end flow of an engineer-to-order job in Oracle.', `**Why they ask:** tests whether you can connect SCM, Projects and Finance.

**Answer:**
"A contract and project are created with tasks for design, procurement, manufacturing and installation. Engineering creates items and the bill of materials. Requisitions and POs carry the project; receipts go into project inventory; work orders consume that material. Cost Accounting values it and transfers cost to Project Costing; AP, labor and expenses come in directly. Project Billing invoices by milestone or progress; revenue is recognized over time. Finance sees margin and WIP by job."

Tip: End with "the project is where cost, billing and margin come together."`, 'D', 'S', null, {f:['Where do things usually go wrong in this flow?', 'Material bought without the project, so it lands in common inventory, and late forecasts that make percent-complete revenue wrong.']}],
['Construction', 'What applications are in Oracle\'s construction stack, and how do they connect to Fusion?', `**Why they ask:** construction clients rarely use Fusion alone.

**Answer:**
"Primavera P6 or Primavera Cloud handles schedules and progress; Unifier handles owner-side cost controls, change orders and pay applications; Aconex handles documents and RFIs; Textura handles subcontractor pay apps and lien waivers. Fusion Project Financials is the system of record for cost, billing and revenue. Typical integrations through OIC: project structure and WBS synced with Primavera, percent complete back to Fusion for revenue and billing, and committed and actual cost sent to the scheduling tool."

Tip: Say which system owns what — schedule versus financials.`, 'D', 'S', null, {t:1, f:['Which system should own the WBS?', 'Usually the scheduling tool owns the detailed schedule; Fusion owns the financial task structure. Agree a mapping at the level both need.']}],
['Project Control', 'How do budgets, forecasts and estimate-at-completion work in Projects?', `**Why they ask:** revenue and margin depend on them.

**Answer:**
"Project Control holds an approved cost and revenue budget, often by task and resource, with versions. Forecasts give estimate to complete and estimate at completion, usually monthly. Actuals and commitments are compared to both. For percent-complete revenue, the cost forecast drives the estimate at completion, so its accuracy directly affects revenue."

Tip: Stress monthly forecast discipline.`, 'B', 'M', null, {f:['What is budgetary control on a project?', 'Checking requisitions, POs and invoices against available project budget and stopping or warning when funds run out.']}],
['Project Control', 'How does a change order affect the contract, budget and revenue?', `**Why they ask:** change orders are constant in construction.

**Answer:**
"An approved change order amends the contract value and the cost budget. In Fusion, the contract is amended with a new version and the budget and forecast are revised. Percent-complete revenue then recalculates with the new contract value and estimated cost. Unapproved change orders are tracked separately and only included in revenue when they're probable and enforceable under ASC 606."

Tip: Mention unapproved change orders — auditors focus on them.`, 'D', 'S', null, {f:['What controls do you put around change orders?', 'Approval workflow, versioned contract amendments, and a log reconciling approved changes to contract value.']}],
['Billing & Revenue', 'How do you handle a loss-making project?', `**Why they ask:** a key accounting rule for contracts.

**Answer:**
"When the estimated total cost exceeds total revenue, the whole expected loss is recognized immediately, not spread over the job. In Fusion that usually means a loss provision entry by job, either through a Projects adjustment or a controlled GL entry with the project as a reference, based on the forecast. Finance reviews loss jobs monthly."

Tip: Say "full loss recognized immediately."`, 'D', 'S', null, {f:['How do you spot a loss job early?', 'Margin fade on the WIP schedule and forecasts rising faster than progress.']}],
['Close-out', 'What happens when a project closes out?', `**Why they ask:** end-of-life Finance steps.

**Answer:**
"Final costs are collected and accruals cleared; final invoice and retention billing are issued; revenue is trued up to the final contract value; for capital projects, remaining CIP is capitalized; and the project status changes to closed so no new charges come in. Finance confirms unbilled, retention and WIP balances for the job are zero or explained."

Tip: Check that job balances clear to zero.`, 'B', 'M', null, {f:['What balances most often remain after close-out?', 'Retention receivable or payable not yet released, and small unbilled or accrual differences.']}]
]);
