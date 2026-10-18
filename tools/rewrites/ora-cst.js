// Rewritten Oracle Cost Management answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'What are the key Cost Management setups in Fusion?':
`**Why they ask:** costing setup is where finance and supply chain meet. They want to know you can build it.

**Answer:**
"I start with cost organizations and their relationships to inventory orgs. Then cost books, primary and any secondary, assigned to the cost orgs. Then valuation structures and valuation units, which decide the level costs are kept at. Then cost profiles: item cost profiles that set the cost method, valuation structure and cost determination, plus default cost profiles so new items get one automatically. Then cost elements and cost element groups for material, overhead and resources. Then cost component mappings and expense pools. And last, the SLA rules for cost accounting and receipt accounting."

Tip: Mention default cost profiles. Missing profiles are why new items show up uncosted.`,

'What are cost elements and analysis groups?':
`**Why they ask:** cost elements decide how detailed margin analysis can be.

**Answer:**
"Cost elements are the buckets that make up an item's cost, like material, freight, duty, overhead, labor and machine. Cost element groups organize them for reporting. Analysis groups give other groupings, for example by cost type for margin analysis. Landed cost charges and overheads map to specific elements, so finance can see how much of an item's cost is freight versus the purchase price."

Tip: Give the freight example. It shows why the split matters to the business.`,

'What is the sequence of cost processing in Fusion?':
`**Why they ask:** when something isn't costed, you need to know where it stopped.

**Answer:**
"Transactions first move from Inventory and Receiving to Costing with the transfer process. Then the cost processor values them using the cost method. Then Create Cost Accounting Distributions and Create Receipt Accounting Distributions build the accounting lines. Then Create Accounting in SLA sends them to GL. I schedule these to run hourly or daily, so valuation stays current and errors show up the same day."

Tip: Present it as a chain. When a transaction is stuck, you check each link in order.`,

'How do you create and publish standard costs?':
`**Why they ask:** the standard cost cycle is a yearly finance event.

**Answer:**
"In cost planning I create a cost scenario and enter or import the standard costs, material and overhead, plus resource rates. For manufactured items I roll up costs through the structures and work definitions. Finance reviews it, with simulations and the variance against current costs. Then I publish the scenario with an effective date. On publish, on-hand inventory is revalued and the revaluation is posted."

Tip: Mention the finance review before publishing. Revaluation surprises are what finance fears most.`,

'How does perpetual average cost handle receipts and returns?':
`**Why they ask:** average cost behaves differently from standard, and returns are the tricky part.

**Answer:**
"Each receipt recalculates the average: on-hand value plus receipt value, divided by on-hand quantity plus receipt quantity. For example, 100 units at $10 on hand, receive 100 at $12, the new average is $11. Issues and shipments use the current average. Returns to supplier go out at the receipt cost or the current average, depending on settings, and that can create variances. And if on-hand goes negative, cost adjustments happen later when receipts arrive."

Tip: Do the average calculation with numbers. It's the clearest proof you understand it.`,

'Name the main variances in Fusion Cost Management.':
`**Why they ask:** variances are how finance reads cost performance.

**Answer:**
"Purchase price variance under standard costing. Invoice price variance between PO and invoice. Work order variances: material usage, resource efficiency and rate, overhead and scrap. Cycle count and physical inventory adjustments. And cost revaluation when standard costs are updated."

Tip: Give one cause for each if asked. PPV usually means price changes or off-contract buying.`,

'How are landed costs allocated?':
`**Why they ask:** landed cost affects margin accuracy for imported goods.

**Answer:**
"Each charge, like freight, duty or insurance, has a charge reference and an allocation basis: quantity, weight, volume or amount. Estimated charges come from landed cost charge templates on POs or trade operations, and actual charges come from AP invoices. Charges are allocated to receipt lines, increasing the item cost. When actuals differ from estimates, the difference is adjusted. For example, $1,000 of freight on a shipment allocated by weight puts more on the heavy items."

Tip: Explain why the allocation basis matters. Freight by value would overcharge small, expensive items.`,

'What accounting does Cost Management create for a PO receipt into inventory under standard cost?':
`**Why they ask:** a core accounting question for cost consultants.

**Answer:**
"With standard routing, the receipt books Dr Receiving Inspection, Cr Accrual, at the PO price. Delivery to inventory books Dr Inventory at standard, PPV for the difference, and Cr Receiving Inspection. The AP invoice books Dr Accrual, Cr Liability, with IPV for any difference from the PO price. When the item ships, Dr COGS, or Deferred COGS, Cr Inventory at standard."

Tip: Walk through all four steps. It shows you can follow the cost through the whole flow.`,

'What is deferred COGS and when is it used?':
`**Why they ask:** COGS must match revenue timing.

**Answer:**
"When revenue is deferred, for example waiting for customer acceptance, the cost of the shipped goods is held in Deferred COGS instead of COGS. The COGS recognition process uses revenue recognition events from AR or Revenue Management to release COGS in the same proportion as revenue. That keeps margin correct under the matching principle."

Tip: Use the acceptance example. It's the most common reason.`,

'What is the cost period close checklist?':
`**Why they ask:** a practical close question.

**Answer:**
"All inventory and receiving transactions are transferred and costed, with no errors. Landed cost and accrual adjustments are processed. Work orders are closed and variances calculated. Create Cost Accounting and Create Receipt Accounting have run and transferred to GL. Inventory valuation is reconciled to GL. Then I close the cost period and open the next."

Tip: Put reconciliation before closing. It's the step people skip under pressure.`,

'Which Cost Management reports do you use?':
`**Why they ask:** to see if you know where to look.

**Answer:**
"The perpetual inventory valuation report by cost org, valuation unit and item. Item cost and cost history reports. Margin analysis by item and customer. Receipt accounting and accrual reconciliation reports. And cost accounting distributions and work order variance reports."

Tip: Say which one you'd run first at month-end: inventory valuation, to tie to GL.`,

"Tell me how you would troubleshoot inventory valuation that doesn't match GL.":
`**Why they ask:** a classic month-end problem.

**Answer:**
"First timing: is the valuation as of the same period end, and is GL closed? Then uncosted or unaccounted transactions, or transfer processes that didn't run. Then manual journals in GL to inventory accounts. Then account mapping differences, like expense subinventories or in-transit. Then revaluations posted in a different period. I fix the causes and document a monthly reconciliation so it doesn't come back."

Tip: Start with timing. It explains more differences than people expect.`,

'How would you design the costing architecture for a multi-entity manufacturer?':
`**Why they ask:** a senior design question.

**Answer:**
"Cost orgs per plant, using standard cost with roll-ups for resources and overhead. A primary cost book for GAAP and a secondary book for management, IFRS, or a group view with intercompany markup removed. Valuation units at cost org level, or by lot for high-value items. Transfer pricing through supply chain financial orchestration for intercompany moves. Landed costs for imports. Variance reporting. And an annual standard cost cycle with simulation, approvals and revaluation."

Tip: Mention the group view without intercompany markup. It's what group finance needs.`,

'How would you support a company switching from average to standard cost?':
`**Why they ask:** a big change that affects finance reporting.

**Answer:**
"First a business case and finance approval, because standard cost brings variances and different reporting. Then set standard costs for every item, starting from recent average or actual costs, with roll-ups for manufactured items. Switch at a period or year start, revaluing on-hand at the switch. Change the cost profiles and add the new variance accounts. Test receipts, work orders and shipments. And train finance on reading variances, because that's the new skill they'll need."

Tip: End with training on variances. The system change is easier than the people change.`,

'What costing methods does Oracle support?':
`**Why they ask:** a basic costing question.

**Answer:**
"Fusion supports standard cost, a fixed cost per item with differences going to variances like PPV; perpetual average cost, which updates with each receipt; and actual cost, FIFO or LIFO, where cost layers are consumed in order. EBS has standard, average, FIFO, LIFO, plus periodic average and incremental LIFO. In Fusion the method is set by cost organization and cost book through cost profiles; in EBS it's by inventory org."

Tip: Mention where the method is set in each. It shows you know both products.`,

'What is the difference between Receipt Accounting and Cost Accounting in Fusion?':
`**Why they ask:** these two are often confused.

**Answer:**
"Receipt Accounting creates the accounting for receipts, deliveries and returns, and manages accruals, both receipt accruals and period-end accruals for expense items, including clearing and write-offs. Cost Accounting costs inventory transactions, like issues, transfers, shipments and production, using the cost method, with entries like Dr COGS, Cr Inventory. Each runs its own Create Accounting process and transfers to GL."

Tip: Say you schedule both regularly. It shows you've run them in production.`,

'What is purchase price variance (PPV)?':
`**Why they ask:** PPV is the most watched cost variance.

**Answer:**
"Under standard costing, inventory is valued at standard. When we buy at a different price, the difference is PPV: PO price minus standard, times quantity received. For example, standard $10, PO price $11, 100 units gives $100 unfavorable PPV. At delivery the entry is Dr Inventory $1,000, Dr PPV $100, Cr Accrual $1,100. Invoice price variance then captures any difference between the invoice and the PO. Procurement and finance watch PPV to measure buying performance."

Tip: Give the journal entry. It shows you know where PPV lands.`,

'How does a standard cost update work?':
`**Why they ask:** a yearly event with P&L impact.

**Answer:**
"I create a new cost scenario with the new standards, usually yearly or quarterly. I roll up costs for manufactured items: material, resources and overhead. Finance reviews it, then I publish. On publish, Oracle revalues on-hand inventory at the new cost and posts the difference to the revaluation account. Before publishing, I run a what-if report so finance sees the revaluation impact in advance."

Tip: Mention the what-if report. Finance hates surprises in revaluation.`,

"Why might an item's cost show as zero in Fusion and what do you check?":
`**Why they ask:** a common support ticket.

**Answer:**
"Under standard costing, no standard cost has been defined; under average costing, there haven't been any receipts yet. Or the item cost profile is missing or wrong. Or the cost processor hasn't run, or the transactions are uncosted because of errors. Or the wrong cost org, book or valuation unit is being looked at. I fix the setup, run the cost processor, and check the item's cost history."

Tip: Mention the missing cost profile. It's the most common cause for new items.`,

'How do you reconcile inventory valuation to the General Ledger?':
`**Why they ask:** a key month-end control.

**Answer:**
"I run the perpetual inventory valuation report as of period end by cost org and valuation unit, and compare it to the GL inventory account balances, by org through the cost center or org segment. Differences usually come from uncosted transactions, cost accounting not created or transferred, manual GL journals to inventory accounts, or wrong account mapping in cost accounting rules. I block manual journals to inventory accounts, and I only close the cost period after reconciling."

Tip: Say you block manual journals to inventory accounts. It's the prevention step.`,

'What are the steps of the cost period close in Fusion Cost Management?':
`**Why they ask:** a practical close sequence question.

**Answer:**
"I make sure inventory, receiving and WIP transactions are complete and transferred to costing. I run the cost processor and fix errors. I run Create Receipt Accounting and Create Cost Accounting and transfer to GL. I process landed cost adjustments and any standard cost updates. I close work orders and calculate variances. I review unprocessed transactions and reconcile valuation to GL. Then I close the cost period for the cost org and book, and open the next."

Tip: Keep the order clear. Each step depends on the one before.`,

'How do you handle intercompany profit in inventory with SFO?':
`**Why they ask:** a group finance question with real audit impact.

**Answer:**
"When one entity sells to another at a transfer price above cost, the buying entity's inventory includes intercompany profit. SFO with transfer pricing creates the intercompany sale and purchase and the costs in each entity. At group level, that unrealized profit must be eliminated in consolidation until the goods are sold outside the group. Fusion can track profit in inventory, for example with cost books or elemental costs for the markup, to support the elimination. I'd agree the approach with group finance early."

Tip: Explain why it has to be eliminated. It shows you understand consolidation.`,

'How do you explain a large purchase price variance to the business?':
`**Why they ask:** cost consultants have to explain numbers, not just produce them.

**Answer:**
"I break PPV down by item, supplier, category and period. Then I look at causes: price increases, off-contract spot buys, outdated standards, currency movements, or freight included in the price. Then actions: update standards, negotiate agreements, enforce catalog buying. I present it with trend charts and the top ten drivers, because usually a few items explain most of it."

Tip: Say "a few items explain most of it". Leaders want the short list.`,

'What are cost organizations, cost books and valuation units in Fusion Cost Management?':
`**Why they ask:** the core costing structure in Fusion.

**Answer:**
"A cost organization is a group of inventory orgs that share costing, like a plant and its nearby warehouses. A cost book is a set of costing policies; the primary book is for financial reporting, and others can be added for management or local GAAP. The valuation structure and valuation unit set the level costs are kept at, for example by cost org, by cost org and subinventory, or by lot. Cost profiles assign the cost method to items through item cost profiles and defaults. Together they replace EBS's per-org cost method."

Tip: Give an example of a cost org grouping. It makes it concrete.`,

"How do you troubleshoot an inventory transaction that hasn't been costed?":
`**Why they ask:** a daily support issue.

**Answer:**
"I check that Transfer Transactions from Inventory to Costing ran and succeeded. Then Review Cost Accounting Processes for cost processor errors: missing cost, missing item cost profile, missing valuation unit, or a closed cost period. Then the cost accounting distributions for SLA account errors in Create Cost Accounting. I fix the cause, like defining the missing standard cost, and rerun the cost processor, with the cost period open."

Tip: Follow the chain in order. That's the method they want.`,

'How do landed costs work in Fusion?':
`**Why they ask:** landed cost improves margin accuracy.

**Answer:**
"Landed Cost Management adds freight, duties, insurance and other charges to item cost. I define charge references and allocation bases, quantity, weight, value or volume. Charges are estimated on the PO through landed cost charge templates, and actuals come from trade operations and AP invoices. They're allocated to receipt lines and included in inventory value and COGS when sold. Differences between estimate and actual are adjusted."

Tip: Say why it matters: true margin on imported goods.`,

'How do you reconcile receipt accruals at month end?':
`**Why they ask:** stale accruals are a common audit point.

**Answer:**
"After Create Receipt Accounting and transfers have run, I review open accruals in the accrual reconciliation. I investigate old ones: missing invoices, wrong POs, quantity differences. POs that are complete get closed. Where justified, accruals are written off with approval."

Tip: Say "close completed POs". It stops accruals from piling up.`,

'How would you design costing for a vertically integrated pharma company (API, formulation, packaging, distribution)?':
`**Why they ask:** a specialist design question.

**Answer:**
"Process manufacturing for API and formulation, with recipes, yields and by-products; discrete or process for packaging. Cost orgs per plant, standard cost with a yearly cycle and roll-ups across all levels. Lot-level valuation where costs vary by lot, if needed. Intercompany through SFO between manufacturing and distribution entities, with transfer pricing. Variance analysis for yield, usage and PPV, and inventory reserves for expiry and quarantine. Landed costs for imported materials. And GxP and finance controls on any cost change."

Tip: Mention yield variances. They're the variance pharma finance watches most.`,

};
