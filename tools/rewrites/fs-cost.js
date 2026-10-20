// Rewritten Finance Specialists — Cost Accountant (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fs-cost-).
module.exports = {

'Compare standard, actual, average and FIFO costing.':
`**Why they ask:** costing methods are the foundation of the role.

**Answer:**
"Standard costing uses predetermined costs and captures the differences as variances — good for control in manufacturing. Actual costing tracks the real cost per unit or job. Weighted average blends costs as new receipts come in. FIFO matches the oldest costs to cost of goods sold first. LIFO is allowed under US GAAP but not IFRS. In manufacturing I prefer standard costing, because the variances tell operations exactly where costs went off plan."

Tip: Standard plus variance analysis.`,

'How do you set standard costs?':
`**Why they ask:** standards drive every variance.

**Answer:**
"Material is the BOM quantity times the expected purchase price, plus scrap and yield allowances. Labor is routing hours times labor rates. Overhead is routing hours times an overhead rate — budgeted overhead divided by budgeted activity. I review standards annually, or sooner if there's a big change like a new supplier price."

Tip: Know the components of a standard.`,

'Explain material price and usage variances.':
`**Why they ask:** a core calculation.

**Answer:**
"The price variance is actual price minus standard price, times actual quantity. The usage variance is actual quantity minus standard quantity allowed, times standard price. Say the standard is 10 kilos at $5, and we actually used 11 kilos at $4.80. The price variance is minus 20 cents times 11 — $2.20 favorable. The usage variance is one extra kilo times $5 — $5 unfavorable. So procurement did well, but production used too much."

Tip: Show the calculation and interpret it.`,

'Explain labor rate and efficiency variances.':
`**Why they ask:** a core calculation.

**Answer:**
"The rate variance is actual rate minus standard rate, times actual hours. The efficiency variance is actual hours minus standard hours, times standard rate. If the standard is 2 hours at $30 and we actually took 2.5 hours at $28: the rate variance is minus $2 times 2.5 — $5 favorable. Efficiency is half an hour times $30 — $15 unfavorable. Maybe a less experienced crew — cheaper but slower."

Tip: Interpret the causes.`,

'What are overhead variances?':
`**Why they ask:** overhead is often the largest cost.

**Answer:**
"For variable overhead, there are spending and efficiency variances. For fixed overhead, there's the budget or spending variance, and the volume variance — which comes from production being different from the planned volume, so fixed costs are over- or under-absorbed. The volume variance reflects capacity use, not spending."

Tip: Explain the volume variance.`,

'Absorption vs variable costing?':
`**Why they ask:** a classic concept with real consequences.

**Answer:**
"Absorption costing, which GAAP requires, puts fixed manufacturing overhead into inventory. Variable costing expenses fixed overhead in the period — useful for internal decisions. Profits differ when inventory changes: if we build inventory, absorption costing parks some fixed cost on the balance sheet and profit looks better, even though nothing was sold."

Tip: An inventory build inflates absorption profit.`,

'How do you allocate overhead?':
`**Why they ask:** allocation drives product cost.

**Answer:**
"Using cost drivers — machine hours, labor hours — or activity-based costing with multiple drivers like setups, inspections and material moves. ABC gives more accurate product costs when products use resources very differently."

Tip: Mention ABC benefits.`,

'When is activity-based costing valuable?':
`**Why they ask:** costing judgment.

**Answer:**
"When products differ a lot in complexity, volume and resource use. Traditional allocation over-costs high-volume simple products and under-costs low-volume complex ones — so the simple products subsidize the complex ones. ABC exposes that, and sometimes shows that 'profitable' custom products are actually losing money."

Tip: Explain cross-subsidization.`,

'How do you value inventory at month-end?':
`**Why they ask:** inventory valuation is a key close task.

**Answer:**
"I reconcile physical or cycle counts to the system, validate the cost roll, value work in process, capitalize variances if they're material, review excess and obsolete reserves, and test lower of cost and net realizable value."

Tip: Mention LCNRV.`,

'How do you calculate an excess and obsolete reserve?':
`**Why they ask:** a judgment-heavy estimate.

**Answer:**
"I compare on-hand quantities to demand — say 12 months of usage or forecast — and reserve the excess quantity at policy percentages. Obsolete items — no movement or discontinued — get a full reserve. Then I review the list with operations, because they know which 'slow' items are about to be used in a new order."

Tip: Policy plus judgment.`,

'How is COGS calculated?':
`**Why they ask:** a basic check.

**Answer:**
"Two ways. Beginning inventory plus purchases or production costs minus ending inventory. Or, in a standard-cost system, the standard cost of goods shipped plus the variances expensed in the period. Both should tie."

Tip: Know both approaches.`,

'How do you value work in process?':
`**Why they ask:** WIP is often misvalued.

**Answer:**
"It's material issued plus labor and overhead applied for operations completed so far, using production order status. In process costing, I use equivalent units in process."

Tip: Mention equivalent units.`,

'What are equivalent units?':
`**Why they ask:** process costing basics.

**Answer:**
"They express partially completed units as whole units for costing. If 1,000 units are 40% complete for conversion costs, that's 400 equivalent units of conversion. Material might be 100% complete if it's all added at the start."

Tip: Used in process industries.`,

'How do you do make-vs-buy analysis?':
`**Why they ask:** relevant cost thinking.

**Answer:**
"I compare relevant costs only: the avoidable costs of making — materials, labor, variable overhead and any fixed costs that would actually go away — against the purchase price plus logistics. Then factor in capacity, quality, strategic and risk factors. Allocated fixed overhead that stays either way is irrelevant."

Tip: Relevant costs only.`,

'What is contribution margin?':
`**Why they ask:** a decision-making concept.

**Answer:**
"Sales minus variable costs — the amount left to cover fixed costs and profit. At a $100 price and $60 variable cost, contribution margin is $40, or 40%. When a resource is constrained, I rank products by contribution margin per unit of that constraint, not per product."

Tip: Constraint-based mix.`,

'How do you calculate break-even?':
`**Why they ask:** a basic analysis.

**Answer:**
"Break-even units are fixed costs divided by contribution margin per unit. With $400,000 of fixed costs and a $40 contribution margin, break-even is 10,000 units."

Tip: A simple formula.`,

'How does costing work in Oracle/SAP?':
`**Why they ask:** ERP familiarity.

**Answer:**
"In Oracle Cost Management, you use cost scenarios, run standard cost updates, generate cost accounting distributions, and use receipt accounting. In SAP CO-PC, you have cost estimates, the material ledger for actual costing, and variance calculation on production orders. SAP's material ledger is what lets you revalue inventory to actual at period end."

Tip: Mention the material ledger.`,

'How is purchase price variance used?':
`**Why they ask:** procurement performance.

**Answer:**
"It measures procurement performance against standard. It's recorded at receipt: debit inventory at standard, debit or credit PPV, and credit AP or the accrual at actual. Then I analyze it by supplier and item, so procurement sees where they're beating or missing standard."

Tip: It's recorded at receipt.`,

'What is a cost roll-up?':
`**Why they ask:** standard cost mechanics.

**Answer:**
"It calculates item costs from lower-level components through BOMs and routings, up to the finished good. I validate the changes before updating standards, because the update revalues all inventory on hand — a mistake there hits the P&L immediately."

Tip: Know the revaluation impact.`,

'How do you analyze gross margin by product?':
`**Why they ask:** profitability insight.

**Answer:**
"Revenue less standard cost and allocated variances, by product, customer and channel. Then identify the drivers — mix, price and cost changes — and the unprofitable products. A margin bridge from last period to this one makes the story clear."

Tip: Use a margin bridge.`,

'Tell me about a cost saving you identified.':
`**Why they ask:** analysis that leads to action.

**Answer:**
"Variance analysis showed scrap at 8% on one line against a 3% standard. Working with operations, we traced it to a calibration problem. Fixing it saved $420,000 a year."

Tip: Analysis to action.`,

'Tell me about improving inventory accuracy.':
`**Why they ask:** inventory integrity.

**Answer:**
"I introduced ABC cycle counting with root-cause reviews for every significant variance. Inventory adjustments fell 60%, and the year-end physical count variance was immaterial."

Tip: Measured results.`,

'How do you explain variances to operations managers?':
`**Why they ask:** influence.

**Answer:**
"In their terms — hours, scrap, prices — with clear drivers and trends, not debits and credits. 'Line 3 used 400 extra labor hours because of two changeovers that ran long' lands better than 'labor efficiency variance of $12,000 unfavorable.'"

Tip: Speak their language.`,

'Which certifications help?':
`**Why they ask:** credentials.

**Answer:**
"The CMA — Certified Management Accountant — is the most relevant. A CPA is also valued, especially for audit and reporting work."

Tip: CMA.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward cost manager, plant controller, or FP&A."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn cost data into operational improvements — I found $420,000 in scrap savings and significantly improved inventory accuracy."

Tip: Proof.`,

'What is landed cost?':
`**Why they ask:** inventory valuation.

**Answer:**
"It's the total cost of getting goods to our location — purchase price plus freight, duties, insurance and handling — and it's capitalized into inventory."

Tip: Include duties and freight.`,

'Why does capacity utilization matter for cost?':
`**Why they ask:** GAAP and cost accuracy.

**Answer:**
"Fixed overhead per unit rises when volume falls. Under GAAP, overhead is absorbed based on normal capacity, and unabsorbed overhead from abnormally low production is expensed in the period, not capitalized into inventory."

Tip: Normal capacity.`,

'How do you account for scrap?':
`**Why they ask:** a common cost issue.

**Answer:**
"Normal scrap is built into the standard cost. Abnormal scrap is expensed as a variance. And I track it by cause, because that's where the savings are."

Tip: Normal versus abnormal.`,

'What is target costing?':
`**Why they ask:** market-driven cost management.

**Answer:**
"Start with the market price, subtract the desired margin, and that's the allowable cost. Then design the product and process to meet it. If the market will pay $50 and we need 30% margin, the product has to cost $35."

Tip: It's market-driven.`,

'What happens when you update standards annually?':
`**Why they ask:** standard cost cycle.

**Answer:**
"Inventory on hand is revalued at the new standards, creating a revaluation variance. I analyze the changes by component and communicate the margin impact to finance and sales before it lands."

Tip: Explain revaluation.`,

'How do transfer prices affect cost accounting?':
`**Why they ask:** intercompany complexity.

**Answer:**
"Intercompany purchases include the selling entity's profit. On consolidation, any unrealized profit still sitting in inventory has to be eliminated, so we need to track the intercompany margin in each entity's inventory."

Tip: Eliminate profit in inventory.`,

'Gross margin dropped 3 points this month. How do you investigate?':
`**Why they ask:** a practical analysis.

**Answer:**
"I build a margin bridge: price, volume, mix, material cost through PPV, labor and overhead variances, and inventory adjustments and reserves. Then identify the largest drivers. Often it's one big item — a reserve true-up or a quarter's worth of variance landing in one month."

Tip: Use a margin bridge.`,

'Physical count shows a big shortage. What do you do?':
`**Why they ask:** investigation discipline.

**Answer:**
"Recount first. Then check cut-off and unprocessed transactions, review transfers and scrap, and investigate theft or system errors. Only then record the adjustment, and fix the process that caused it."

Tip: Recount and check cut-off.`,

'Job costing vs process costing?':
`**Why they ask:** industry fit.

**Answer:**
"Job costing accumulates costs for each unique order — custom manufacturing or projects. Process costing averages costs across identical units — chemicals or food. The method has to fit the industry."

Tip: Fit to industry.`,

'What is ABC cycle counting?':
`**Why they ask:** inventory control.

**Answer:**
"Counting high-value or high-movement A items more often than B and C items. It improves accuracy efficiently, because effort goes where the value is."

Tip: Frequency by value.`,

'Which Excel skills matter?':
`**Why they ask:** practical tools.

**Answer:**
"Pivot tables, lookups, SUMIFS, variance models, and analyzing large ERP extracts. Power Query and Power BI are increasingly important."

Tip: Power Query.`,

'How do you support pricing decisions?':
`**Why they ask:** business partnering.

**Answer:**
"By providing accurate product costs, contribution margins, and scenario analysis on volume and cost changes, so sales knows the floor price and the margin at each price point."

Tip: Focus on contribution margin.`,

'How does lean manufacturing affect cost accounting?':
`**Why they ask:** modern costing.

**Answer:**
"Lean accounting uses value stream costing, simpler reporting, and less focus on traditional variances — because labor efficiency and absorption variances can encourage overproduction to make the numbers look good."

Tip: Value streams.`,

'How do you allocate freight costs?':
`**Why they ask:** inventory valuation.

**Answer:**
"Inbound freight is capitalized into inventory, allocated by weight, value or quantity. Outbound freight is usually expensed as a fulfillment cost."

Tip: Inbound versus outbound.`,

'What do auditors test in inventory?':
`**Why they ask:** audit readiness.

**Answer:**
"They observe counts, test costs, review reserves and lower of cost and NRV, check cut-off, and look at how variances are capitalized."

Tip: Count observation.`,

'How do tariffs affect cost accounting?':
`**Why they ask:** current impact.

**Answer:**
"Duties increase landed costs capitalized into inventory, which changes standard costs and margins. I update landed cost assumptions and analyze sourcing alternatives with procurement."

Tip: Update landed costs.`,

'How do you explain a production volume variance?':
`**Why they ask:** a commonly misunderstood variance.

**Answer:**
"It's fixed overhead applied at the standard rate times actual output, minus budgeted fixed overhead. If we budget $500,000 for 50,000 units — $10 a unit — and produce 45,000, we apply $450,000, so there's a $50,000 unfavorable volume variance. It reflects capacity use, not overspending."

Tip: Capacity, not spending.`,

'What are mix and yield variances?':
`**Why they ask:** process industry depth.

**Answer:**
"When inputs can substitute for each other, the material usage variance splits into mix — using a different blend of inputs than standard — and yield — getting more or less output from the total input than standard. It's common in chemicals and food."

Tip: Process industries.`,

'How are joint costs allocated?':
`**Why they ask:** joint products.

**Answer:**
"Costs before the split-off point are allocated across joint products by physical units, relative sales value at split-off, or net realizable value. By-products are often credited against the joint cost."

Tip: The sales value method.`,

'Should variances be capitalized into inventory?':
`**Why they ask:** GAAP judgment.

**Answer:**
"If variances make standard cost differ significantly from actual cost, they should be allocated between inventory and COGS so inventory approximates actual cost under GAAP. Immaterial variances are usually just expensed."

Tip: Materiality decides.`,

'Cost center vs profit center vs investment center?':
`**Why they ask:** responsibility accounting.

**Answer:**
"A cost center is responsible for costs — like maintenance. A profit center is responsible for revenue and costs — like a product line. An investment center is also responsible for the capital it uses, measured by ROI or EVA — like a division."

Tip: Responsibility accounting.`,

'What are sunk costs and why ignore them?':
`**Why they ask:** a classic decision trap.

**Answer:**
"Sunk costs are already spent and can't be recovered, so they don't change with the decision. Only future, differential costs and revenues matter. If we've spent $200,000 on old tooling, that shouldn't affect whether we buy better tooling now."

Tip: A classic trap.`,

'Operations says standard costs are unrealistic. What do you do?':
`**Why they ask:** collaboration.

**Answer:**
"I review the assumptions with them — yields, labor efficiency and prices — and compare against recent actuals. Where they're right, we update the standards. The goal is standards that are achievable but challenging, so the variances stay meaningful."

Tip: Collaborative standard setting.`,

};
