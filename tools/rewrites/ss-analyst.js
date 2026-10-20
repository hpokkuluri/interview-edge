// Rewritten Operations Specialists — Supply Chain Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ss-analyst-).
module.exports = {

'Which supply chain KPIs do you track?':
`**Why they ask:** analysts live in the metrics.

**Answer:**
"OTIF — on time in full — fill rate, forecast accuracy and bias, inventory turns and days of supply, perfect order rate, the cash-to-cash cycle, freight cost per unit, supplier on-time delivery, backorders and order cycle time. And I define each one precisely, because OTIF can mean very different things at different companies — against requested date or promised date, by line or by order."

Tip: Define each precisely.`,

'How do you calculate inventory turns and days of supply?':
`**Why they ask:** a basic analytical check.

**Answer:**
"Turns are cost of goods sold divided by average inventory. Days of supply is average inventory divided by daily COGS — COGS over 365. With $24 million of COGS and $4 million of average inventory, that's 6 turns and about 61 days. Then I benchmark against the industry, because 6 turns is great for heavy equipment and poor for grocery."

Tip: Benchmark against the industry.`,

'What is ABC analysis?':
`**Why they ask:** prioritization.

**Answer:**
"It classifies items by annual value. A items are the top 80% or so of value from about 20% of items, B the next 15%, C the last 5%. You focus control, counting and planning effort on the A items. Adding XYZ for demand variability gives a nine-box matrix — AX items can be automated, AZ items need the most attention."

Tip: Mention the ABC-XYZ matrix.`,

'How do you calculate safety stock?':
`**Why they ask:** a core calculation.

**Answer:**
"For demand variability, safety stock is z times the standard deviation of demand times the square root of lead time. If lead time also varies, there's an extra term for that. At a 95% service level, z is 1.65. With daily demand variation of 20 units and a 9-day lead time, that's 1.65 times 20 times 3 — 99 units. The service level target drives z, so it's really a business decision."

Tip: The service level drives z.`,

'What is a reorder point?':
`**Why they ask:** a replenishment basic.

**Answer:**
"The reorder point is average daily demand times lead time, plus safety stock. At 50 a day with a 9-day lead time and 99 units of safety stock, it's 450 plus 99 — 549 units."

Tip: A simple formula.`,

'What is EOQ?':
`**Why they ask:** a classic formula.

**Answer:**
"Economic order quantity is the square root of two times annual demand times order cost, divided by holding cost per unit. With 12,000 units of demand, $100 per order and $4 holding cost, it's the square root of 600,000 — about 775 units. It's the trade-off point between ordering too often and holding too much."

Tip: The ordering-versus-holding trade-off.`,

'How do you measure forecast accuracy?':
`**Why they ask:** forecast quality drives everything.

**Answer:**
"MAPE for individual items, weighted MAPE for a portfolio — the sum of absolute errors divided by the sum of actuals — bias, to see if we're consistently high or low, and forecast value added against a naive forecast. Bias matters as much as error: a forecast that's always 10% high builds inventory every single month."

Tip: Bias matters as much as error.`,

'OTIF dropped from 95% to 88%. How do you investigate?':
`**Why they ask:** a classic analyst problem.

**Answer:**
"First I split failures into on-time misses versus in-full misses. Then segment by customer, product, warehouse and carrier, identify the top causes — stockouts, late picks, carrier delays, order changes — and quantify each one. Usually a Pareto shows two or three causes drive most of the drop. Then I recommend fixes with owners."

Tip: Use a Pareto of causes.`,

'How do you analyze freight costs?':
`**Why they ask:** a common analysis area.

**Answer:**
"I look at cost per unit, per pound and per shipment by lane, mode and carrier. Then dig into accessorials, expedites, LTL loads that could be consolidated into truckloads, and benchmark our rates. Expedites are usually the first place I look — they're expensive and they point to planning problems."

Tip: Start with expedite costs.`,

'What is network optimization?':
`**Why they ask:** strategic analysis.

**Answer:**
"It's modeling facilities, flows, costs and service levels to find the best number and location of plants and DCs. Tools like Coupa Supply Chain Design, AIMMS, or optimization code in Python solve it. The output is a cost-versus-service trade-off curve leadership can choose from."

Tip: The cost-versus-service trade-off.`,

'Which tools do you use?':
`**Why they ask:** technical skills.

**Answer:**
"Advanced Excel, SQL, Power BI or Tableau, Python, ERP data from SAP and Oracle, planning systems like Kinaxis, o9, Blue Yonder or IBP, and TMS and WMS data. SQL and BI are the ones I use every day."

Tip: SQL plus BI.`,

'Write a query for top 10 SKUs by backorder value.':
`**Why they ask:** a live SQL check.

**Answer:**
"I'd select the SKU and the sum of backorder quantity times unit price as backorder value, from the order lines table where status equals 'BACKORDER', group by SKU, order by backorder value descending, and limit to 10:

SELECT sku, SUM(backorder_qty * unit_price) AS bo_value FROM order_lines WHERE status = 'BACKORDER' GROUP BY sku ORDER BY bo_value DESC LIMIT 10;

On SQL Server I'd use TOP 10 instead of LIMIT."

Tip: Clear and correct — mention dialect differences.`,

'Which Excel skills are essential?':
`**Why they ask:** daily tools.

**Answer:**
"XLOOKUP or INDEX-MATCH, pivot tables, SUMIFS, data tables and scenario analysis, Solver for optimization, and Power Query for cleaning data. Solver is underrated — I've used it to optimize truck loads and allocation."

Tip: Mention Solver.`,

'How do you build a supplier scorecard?':
`**Why they ask:** supplier performance analysis.

**Answer:**
"Metrics for on-time delivery, quality — defect PPM — lead time adherence, cost competitiveness, responsiveness and compliance, each weighted by importance, and reviewed quarterly with the suppliers. For example, 40% delivery, 30% quality, 20% cost, 10% responsiveness."

Tip: Make it weighted.`,

'What is the cash-to-cash cycle?':
`**Why they ask:** working capital link.

**Answer:**
"It's days inventory outstanding plus days sales outstanding minus days payables outstanding — how many days cash is tied up in operations. With 60 days of inventory, 45 of receivables and 40 of payables, it's 65 days."

Tip: The working capital link.`,

'What is the bullwhip effect?':
`**Why they ask:** a classic concept.

**Answer:**
"Demand variability gets amplified as you move upstream, because of order batching, forecast updating, price promotions and shortage gaming. A small change at the store becomes a big swing at the factory. You reduce it with information sharing, smaller batches, stable pricing and collaborative planning."

Tip: Give causes and fixes.`,

'How do you model the impact of a tariff increase?':
`**Why they ask:** a current analysis.

**Answer:**
"I identify the affected items and suppliers by country of origin, calculate the change in landed cost, model alternative sourcing options and pricing impacts, and summarize the margin effect for leadership. For example, a 25% tariff on a $10 part adds $2.50 — then I'd show which alternative sources beat that."

Tip: Work from landed cost.`,

'How do you deal with poor master data?':
`**Why they ask:** analysts find data problems first.

**Answer:**
"I identify the issues — wrong lead times, lot sizes, units of measure — quantify their impact, work with the owners to fix them at the source, and push for governance so they stay fixed. Lead time accuracy is usually the most valuable fix."

Tip: Lead time accuracy matters most.`,

'How do you design a supply chain dashboard?':
`**Why they ask:** communication through data.

**Answer:**
"I start with the decisions it supports. Then show the top KPIs with targets and trends, drill-down by dimension, highlighted exceptions, and automated refresh. The exceptions are what make people act — a wall of green numbers gets ignored."

Tip: Highlight exceptions.`,

'How is AI used in supply chain analytics?':
`**Why they ask:** current skills.

**Answer:**
"Machine learning demand forecasting, anomaly detection, predictive ETAs, inventory optimization, and AI assistants that let people query data in plain language. I've used gradient boosting models for forecasting with promotions and weather as features."

Tip: Mention ML forecasting.`,

'Tell me about an analysis that saved money.':
`**Why they ask:** proof of impact.

**Answer:**
"I analyzed expedited freight and found 40% came from late POs on just 30 SKUs, because their lead times in the system were wrong. Adjusting reorder points and lead times cut expedites by $650,000 a year."

Tip: Quantify it.`,

'Tell me about influencing a decision with data.':
`**Why they ask:** analysis must lead to action.

**Answer:**
"I showed leadership that one DC was holding $2.1 million of slow-moving inventory while other sites were short. They approved rebalancing and a SKU rationalization, which freed most of that cash within two quarters."

Tip: Data to decision.`,

'How do you handle conflicting data sources?':
`**Why they ask:** a daily reality.

**Answer:**
"I trace the definitions and timing behind each — often one is shipped date and the other is invoice date. Then reconcile, document which source is the truth for that metric, and communicate the assumptions clearly."

Tip: Check definitions first.`,

'Which certifications help?':
`**Why they ask:** professional development.

**Answer:**
"ASCM's CPIM for planning, CSCP for end-to-end supply chain, CLTD for logistics, and a Six Sigma Green Belt. CSCP gives the broadest view."

Tip: CSCP is the broadest.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior analyst, then planning manager or supply chain strategy roles — using analytics to shape bigger decisions."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn supply chain data into savings and better service — I cut expedites by $650,000 a year and highlighted $2 million of excess inventory that leadership acted on."

Tip: Proof.`,

'Cycle service level vs fill rate?':
`**Why they ask:** precise definitions.

**Answer:**
"Cycle service level is the probability of not stocking out during a replenishment cycle. Fill rate is the percentage of demand met from stock. Fill rate is usually higher, because even when you stock out, you've usually filled most of the demand in that cycle."

Tip: Different measures.`,

'Why does lead time variability matter?':
`**Why they ask:** inventory drivers.

**Answer:**
"It increases safety stock needs — often more than demand variability does. A supplier who's sometimes a week late forces you to hold a week of extra stock. So improving supplier reliability can cut inventory significantly."

Tip: Supplier reliability matters.`,

'How do you calculate landed cost?':
`**Why they ask:** sourcing analysis.

**Answer:**
"Product cost plus freight, insurance, duties and tariffs, brokerage and handling, allocated per unit. Duty rates come from the HTS code, so classification accuracy matters."

Tip: Duty rates come from the HTS code.`,

'When would you use simulation?':
`**Why they ask:** analytical method choice.

**Answer:**
"For complex systems with a lot of variability — like warehouse throughput or testing inventory policies — where formulas aren't enough. Simulation shows how the system behaves across thousands of random scenarios, not just the average."

Tip: Use it when variability matters.`,

'How do you benchmark supply chain performance?':
`**Why they ask:** context for metrics.

**Answer:**
"Industry reports from Gartner and APQC, peer data, and frameworks like SCOR metrics, which give standard definitions so comparisons are fair."

Tip: Mention SCOR.`,

'What is the SCOR model?':
`**Why they ask:** a common framework.

**Answer:**
"The Supply Chain Operations Reference model defines standard processes — plan, source, make, deliver, return and enable — and standard metrics. It's been updated as the SCOR Digital Standard. Its value is a common language across companies and functions."

Tip: A common language.`,

'How do you identify excess and obsolete inventory?':
`**Why they ask:** cash recovery.

**Answer:**
"I compare on-hand inventory to forecast demand over a horizon, flag items with no movement, and calculate the value at risk. For example, anything with more than 18 months of coverage or no usage in 12 months goes on the list with its dollar value."

Tip: Show the value at risk.`,

'Leadership wants to cut inventory 20% without hurting service. How do you approach it?':
`**Why they ask:** a common project.

**Answer:**
"Segment inventory into cycle stock, safety stock and excess. Remove the excess, right-size safety stock to service targets, reduce lead times and lot sizes, and simulate the service impact before changing anything. Segmenting first shows where the 20% can safely come from."

Tip: Segment first.`,

"A supplier's lead time doubles. What analysis do you do?":
`**Why they ask:** quick risk analysis.

**Answer:**
"I identify the impacted items and how many weeks of coverage we have, recalculate reorder points and safety stock, assess the shortage risk by date, and evaluate alternate suppliers or expediting."

Tip: Start with coverage analysis.`,

'How might you use Python?':
`**Why they ask:** technical depth.

**Answer:**
"Cleaning large datasets with pandas, forecasting with statsmodels or Prophet, optimization with PuLP, and automating recurring reports. I automated a weekly inventory report that used to take four hours by hand."

Tip: Highlight automation.`,

'What is the perfect order rate?':
`**Why they ask:** a composite metric.

**Answer:**
"It's the percentage of orders delivered on time, complete, undamaged and with correct documentation. It's the product of the component rates — 95% on time times 98% complete times 99% damage-free times 99% correct paperwork is about 91%. Small gaps multiply."

Tip: It's multiplicative.`,

'How do you present analysis to leadership?':
`**Why they ask:** communication.

**Answer:**
"Lead with the conclusion and its impact, show the key supporting data, recommend actions, and keep the detail in backup. Answer first."

Tip: Answer first.`,

'How do you analyze supply chain risk?':
`**Why they ask:** resilience analysis.

**Answer:**
"Map single-source suppliers and geographic concentration, check supplier financial health, lead times and inventory coverage, and quantify revenue at risk — how much revenue depends on each risky supplier."

Tip: Quantify revenue at risk.`,

'How do analysts support sustainability?':
`**Why they ask:** a growing area.

**Answer:**
"Measuring emissions by mode and lane, modeling mode shifts and network changes, and tracking supplier sustainability data for Scope 3 reporting."

Tip: Mention Scope 3.`,

'What is MRP?':
`**Why they ask:** planning basics.

**Answer:**
"Material requirements planning calculates net requirements for components from the master schedule and bills of materials, accounting for inventory and lead times, and generates planned orders. It handles dependent demand — components whose demand depends on what we're building."

Tip: Dependent demand.`,

'How do you handle urgent ad hoc requests?':
`**Why they ask:** analysts get pulled everywhere.

**Answer:**
"I clarify the question and the decision behind it first, deliver a quick directional answer, then refine. I keep reusable queries and templates so most requests take minutes, not days."

Tip: Clarify the decision.`,

'How do you handle seasonality in analysis?':
`**Why they ask:** avoiding false conclusions.

**Answer:**
"Compare the same periods year over year, use seasonal indices and decomposition, and plan inventory builds ahead of peaks. Comparing December to November tells you nothing useful in a seasonal business."

Tip: Use seasonal indices.`,

'Which forecasting methods do you know?':
`**Why they ask:** analytical toolkit.

**Answer:**
"Naive and moving averages, exponential smoothing — simple, Holt for trend, Holt-Winters for seasonality — ARIMA, regression with drivers, and machine learning like gradient boosting for many SKUs with external features. I choose based on the demand pattern."

Tip: Holt-Winters for seasonality.`,

'How do you forecast intermittent demand?':
`**Why they ask:** spare parts and slow movers.

**Answer:**
"Standard methods do badly when demand is mostly zeros. I use Croston's method or its variants, bootstrapping, or set stocking policies directly from the demand distribution. And use error metrics that make sense for intermittent demand — MAPE breaks when actuals are zero."

Tip: Mention Croston's method.`,

'What is inventory carrying cost?':
`**Why they ask:** justifies reductions.

**Answer:**
"It's the annual cost of holding inventory, typically 20 to 30% of its value — capital, storage, insurance, taxes, obsolescence and shrinkage. $10 million of inventory at 25% costs $2.5 million a year."

Tip: Use it to justify reductions.`,

'How do you use Pareto analysis?':
`**Why they ask:** focus.

**Answer:**
"I rank causes or items by impact to find the vital few — for example, 20% of SKUs causing 80% of stockouts, or three carriers causing most late deliveries. Then focus action there first."

Tip: It's about focus.`,

'How have you automated reporting?':
`**Why they ask:** efficiency.

**Answer:**
"Power Query and Power BI refreshes from ERP extracts, SQL views, Python scripts for data cleaning, and scheduled distribution. My last automation saved about six hours a week and removed copy-paste errors."

Tip: Quantify hours saved.`,

'A planner disputes your recommendation. What do you do?':
`**Why they ask:** collaboration.

**Answer:**
"I listen to their operational context — they often know something the data doesn't. Then re-check the data and assumptions together, adjust if they're right, and if we still disagree, agree a small test or pilot to settle it."

Tip: Collaborate.`,

};
