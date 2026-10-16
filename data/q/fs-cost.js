// fs-cost — generated from src/fs-cost-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Cost Accountant. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-cost'] = [
["Role", "What does a cost accountant do?",
`**Why they ask:** baseline.

**Answer:** Measures and analyzes product and operational costs: maintains standard costs and BOM/routing costing, analyzes variances, values inventory, allocates overhead, supports pricing and make-vs-buy decisions, and performs month-end inventory and COGS close.

Tip: Mention manufacturing environment and ERP.`, 'B', 'E'],

["Costing Methods", "Compare standard, actual, average and FIFO costing.",
`**Answer:** **Standard:** predetermined costs, variances captured — good for control in manufacturing. **Actual:** tracks real costs per unit/job. **Weighted average:** blends costs. **FIFO:** first in, first out, matches older costs to COGS. LIFO is allowed under US GAAP but not IFRS.

Tip: Standard + variance analysis.`, 'B', 'M'],

["Standard Cost", "How do you set standard costs?",
`**Answer:** Material: BOM quantities × expected purchase price (plus scrap/yield). Labor: routing hours × labor rates. Overhead: routing hours × overhead rates based on budgeted overhead / budgeted activity. Review annually or when significant changes occur.

Tip: Components of standard.`, 'B', 'M'],

["Variances", "Explain material price and usage variances.",
`**Answer:** **Price variance** = (actual price − standard price) × actual quantity. **Usage variance** = (actual quantity − standard quantity allowed) × standard price.

**Example:** standard 10 kg at $5; actual 11 kg at $4.80 for output. PPV = (4.80 − 5) × 11 = −$2.20 favorable; usage = (11 − 10) × 5 = $5 unfavorable.

Tip: Show calculation.`, 'B', 'M'],

["Variances", "Explain labor rate and efficiency variances.",
`**Answer:** **Rate** = (actual rate − standard rate) × actual hours. **Efficiency** = (actual hours − standard hours) × standard rate.

**Example:** standard 2 hours at $30; actual 2.5 hours at $28. Rate = (28 − 30) × 2.5 = −$5 F; efficiency = (2.5 − 2) × 30 = $15 U.

Tip: Interpret causes.`, 'B', 'M'],

["Variances", "What are overhead variances?",
`**Answer:** Variable overhead spending and efficiency variances; fixed overhead budget (spending) variance and volume variance (absorption due to production differing from planned volume).

Tip: Volume variance.`, 'D', 'M'],

["Absorption", "Absorption vs variable costing?",
`**Answer:** **Absorption** (required for GAAP) includes fixed manufacturing overhead in inventory. **Variable costing** expenses fixed overhead in the period — useful for internal decisions. Profits differ when inventory levels change.

Tip: Inventory build inflates absorption profit.`, 'B', 'M'],

["Overhead", "How do you allocate overhead?",
`**Answer:** Using cost drivers: machine hours, labor hours, or activity-based costing (ABC) with multiple drivers (setups, inspections, material moves) for more accurate product costs.

Tip: ABC benefits.`, 'B', 'M'],

["ABC", "When is activity-based costing valuable?",
`**Answer:** When products differ in complexity, volume and resource consumption — traditional allocation over-costs high-volume simple products and under-costs low-volume complex ones.

Tip: Cross-subsidization.`, 'D', 'M'],

["Inventory", "How do you value inventory at month-end?",
`**Answer:** Physical or cycle counts reconciled to system, cost roll validation, WIP valuation, capitalized variances (if material), obsolescence/excess reserves, and lower of cost or net realizable value testing.

Tip: LCNRV.`, 'B', 'M'],

["Reserves", "How do you calculate an excess and obsolete reserve?",
`**Answer:** Compare on-hand to demand (e.g. 12-month usage/forecast), reserve quantities beyond demand at policy percentages, identify obsolete items (no movement, discontinued), and review with operations.

Tip: Policy and judgment.`, 'B', 'M'],

["COGS", "How is COGS calculated?",
`**Answer:** Beginning inventory + purchases/production costs − ending inventory, or the sum of standard cost of goods shipped plus variances expensed.

Tip: Both approaches.`, 'B', 'E'],

["WIP", "How do you value work in process?",
`**Answer:** Material issued plus labor and overhead applied for operations completed, using production order status or equivalent units in process costing.

Tip: Equivalent units.`, 'D', 'M'],

["Process Costing", "What are equivalent units?",
`**Answer:** Partially completed units expressed as whole units for costing. 1,000 units 40% complete for conversion = 400 equivalent units of conversion.

Tip: Process industries.`, 'D', 'M'],

["Decisions", "How do you do make-vs-buy analysis?",
`**Answer:** Compare relevant costs: avoidable costs of making (materials, labor, variable overhead, avoidable fixed costs) vs purchase price plus logistics, considering capacity, quality, strategic and risk factors.

Tip: Relevant costs only.`, 'B', 'M'],

["Decisions", "What is contribution margin?",
`**Answer:** Sales minus variable costs — the amount covering fixed costs and profit. Contribution margin per constrained resource guides product mix decisions.

**Example:** price $100, variable cost $60 → CM $40 (40%).

Tip: Constraint-based mix.`, 'B', 'E'],

["Break-even", "How do you calculate break-even?",
`**Answer:** Break-even units = fixed costs / contribution margin per unit. Fixed $400,000, CM $40 → 10,000 units.

Tip: Simple formula.`, 'B', 'E'],

["ERP", "How does costing work in Oracle/SAP?",
`**Answer:** Oracle Cost Management (cost scenarios, standard cost update, cost accounting distributions, receipt accounting) or SAP CO-PC (cost estimates, material ledger for actual costing, variance calculation on production orders).

Tip: Material ledger.`, 'D', 'M'],

["PPV", "How is purchase price variance used?",
`**Answer:** Measures procurement performance vs standard; recorded at receipt (Dr Inventory at standard, Dr/Cr PPV, Cr AP/accrual at actual) and analyzed by supplier and item.

Tip: Recorded at receipt.`, 'B', 'M'],

["Cost Roll", "What is a cost roll-up?",
`**Answer:** Calculating item costs from lower-level components through BOMs and routings; validating changes before updating standards and revaluing inventory.

Tip: Revaluation impact.`, 'D', 'M'],

["Analysis", "How do you analyze gross margin by product?",
`**Answer:** Revenue less standard cost and allocated variances by product, customer and channel; identify drivers (mix, price, cost changes) and unprofitable products.

Tip: Margin bridge.`, 'B', 'M'],

["Behavioral", "Tell me about a cost saving you identified.",
`**Sample answer:** "Variance analysis showed scrap at 8% on one line versus 3% standard. Working with operations, we found a calibration issue; fixing it saved $420K annually."

Tip: Analysis to action.`, 'B', 'M'],

["Behavioral", "Tell me about improving inventory accuracy.",
`**Sample answer:** "I introduced ABC cycle counting with root-cause reviews; inventory adjustments fell 60% and year-end physical count variance was immaterial."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "How do you explain variances to operations managers?",
`**Answer:** In operational terms — hours, scrap, prices — with clear drivers and trends, not just accounting numbers.

Tip: Speak their language.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** CMA (Certified Management Accountant) is most relevant; CPA also valued.

Tip: CMA.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Cost manager, plant controller, or FP&A.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn cost data into operational improvements — identifying $420K in scrap savings and improving inventory accuracy."

Tip: Proof.`, 'B', 'E'],

["Landed Cost", "What is landed cost?",
`**Answer:** Total cost of getting goods to your location: purchase price plus freight, duties, insurance and handling — capitalized into inventory.

Tip: Duties and freight.`, 'B', 'E'],

["Capacity", "Why does capacity utilization matter for cost?",
`**Answer:** Fixed overhead per unit rises when volume falls; unabsorbed overhead should be expensed (abnormal capacity) rather than capitalized under GAAP.

Tip: Normal capacity.`, 'D', 'M'],

["Scrap", "How do you account for scrap?",
`**Answer:** Normal scrap is included in standard cost; abnormal scrap is expensed as a variance; track by cause.

Tip: Normal vs abnormal.`, 'B', 'M'],

["Target Costing", "What is target costing?",
`**Answer:** Start with market price minus desired margin to get allowable cost, then design products and processes to meet it.

Tip: Market-driven.`, 'D', 'M'],

["Standards Update", "What happens when you update standards annually?",
`**Answer:** Inventory is revalued at new standards, creating a revaluation variance; analyze changes by component and communicate margin impacts.

Tip: Revaluation.`, 'D', 'M'],

["Intercompany", "How do transfer prices affect cost accounting?",
`**Answer:** Intercompany purchases include profit; consolidation eliminates unrealized profit in inventory, requiring tracking of intercompany margin.

Tip: Profit in inventory elimination.`, 'D', 'M'],

["Scenario", "Gross margin dropped 3 points this month. How do you investigate?",
`**Answer:** Build a margin bridge: price, volume, mix, material cost (PPV), labor and overhead variances, inventory adjustments and reserves; identify largest drivers.

Tip: Margin bridge.`, 'B', 'M'],

["Scenario", "Physical count shows a big shortage. What do you do?",
`**Answer:** Recount, check cut-off and unprocessed transactions, review transfers and scrap, investigate theft or system errors, then record adjustments and fix processes.

Tip: Recount and cut-off.`, 'B', 'M'],

["Job Costing", "Job costing vs process costing?",
`**Answer:** **Job costing** accumulates costs per unique order (custom manufacturing, projects); **process costing** averages costs across homogeneous units (chemicals, food).

Tip: Fit to industry.`, 'B', 'E'],

["Cycle Counting", "What is ABC cycle counting?",
`**Answer:** Counting high-value/high-movement (A) items more frequently than B and C items, improving accuracy efficiently.

Tip: Frequency by value.`, 'B', 'E'],

["Excel", "Which Excel skills matter?",
`**Answer:** Pivot tables, lookups, SUMIFS, variance models and data analysis of large ERP extracts; Power Query and Power BI increasingly.

Tip: Power Query.`, 'B', 'E'],

["Pricing", "How do you support pricing decisions?",
`**Answer:** Provide accurate product costs, contribution margins, and scenario analysis on volume and cost changes.

Tip: Contribution margin.`, 'B', 'M'],

["Lean", "How does lean manufacturing affect cost accounting?",
`**Answer:** Lean accounting uses value stream costing, simpler reporting and less focus on traditional variances that may encourage overproduction.

Tip: Value streams.`, 'D', 'M'],

["Freight", "How do you allocate freight costs?",
`**Answer:** Inbound freight capitalized to inventory (by weight, value or quantity); outbound freight usually expensed as fulfillment cost.

Tip: Inbound vs outbound.`, 'B', 'M'],

["Audit", "What do auditors test in inventory?",
`**Answer:** Observation of counts, cost testing, reserves, LCNRV, cut-off and capitalization of variances.

Tip: Count observation.`, 'B', 'M'],

["Tariffs", "How do tariffs affect cost accounting?",
`**Answer:** Duties increase landed costs capitalized to inventory and affect standard costs and margins; analyze sourcing alternatives.

Tip: Landed cost updates.`, 'D', 'M']
];

QB['fs-cost'] = (QB['fs-cost']||[]).concat([
["Variances", "How do you explain a production volume variance?",
`**Answer:** Fixed overhead applied at the standard rate × actual output, minus budgeted fixed overhead. Producing below the planned volume under-absorbs fixed costs, which gives an unfavorable variance. It reflects capacity use, not spending efficiency.

**Example:** budget $500K for 50,000 units ($10/unit). Producing 45,000 units applies $450K, a $50K unfavorable volume variance.

Tip: Capacity, not spending.`, 'D', 'M'],
["Yield", "What are mix and yield variances?",
`**Answer:** When inputs can substitute for each other, the material usage variance splits into **mix** (a different blend of inputs than standard) and **yield** (more or less output from the total input than standard). This is common in chemicals and food.

Tip: Process industries.`, 'D', 'S'],
["Joint Costs", "How are joint costs allocated?",
`**Answer:** Costs before the split-off point are allocated across joint products by physical units, relative sales value at split-off, or net realizable value. By-products are often credited against joint cost.

Tip: Sales value method.`, 'D', 'M'],
["Capitalized Variances", "Should variances be capitalized into inventory?",
`**Answer:** Material variances that make standard costs differ significantly from actual should be allocated between inventory and COGS so that inventory approximates actual cost under GAAP. Immaterial variances are usually expensed.

Tip: Materiality.`, 'D', 'M'],
["Cost Centers", "Cost center vs profit center vs investment center?",
`**Answer:** A **cost center** is responsible for costs (maintenance). A **profit center** is responsible for revenue and costs (a product line). An **investment center** is also responsible for capital used, measured by ROI or EVA (a division).

Tip: Responsibility accounting.`, 'B', 'E'],
["Relevant Costs", "What are sunk costs and why ignore them?",
`**Answer:** Costs already incurred that can't be recovered. They don't change with the decision, so only future, differential costs and revenues matter.

**Example:** $200K already spent on old tooling shouldn't affect whether to buy better tooling.

Tip: A classic trap.`, 'B', 'E'],
["Scenario", "Operations says standard costs are unrealistic. What do you do?",
`**Answer:** Review the assumptions with them (yields, labor efficiency, prices), compare against recent actuals, update standards where they're justified, and keep standards achievable but challenging so variances stay meaningful.

Tip: Collaborative standard setting.`, 'B', 'M']
]);
