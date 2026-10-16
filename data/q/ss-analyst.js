// ss-analyst — generated from src/ss-analyst-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Supply Chain Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ss-analyst'] = [
["Role", "What does a supply chain analyst do?",
`**Why they ask:** baseline.

**Answer:** Analyzes supply chain data to improve cost, service and inventory: KPI reporting, inventory analysis, demand and supply analysis, supplier performance, transportation cost analysis, network and scenario modeling, and recommending improvements to planning, procurement and logistics teams.

Tip: Mention tools (Excel, SQL, Power BI, ERP).`, 'B', 'E'],

["KPIs", "Which supply chain KPIs do you track?",
`**Answer:** OTIF (on time in full), fill rate, forecast accuracy/bias, inventory turns and days of supply, perfect order rate, cash-to-cash cycle, freight cost per unit, supplier on-time delivery, backorders, and order cycle time.

Tip: Define each precisely.`, 'B', 'E'],

["Inventory", "How do you calculate inventory turns and days of supply?",
`**Answer:** Turns = COGS / average inventory. Days of supply = average inventory / (COGS / 365).

**Example:** COGS $24M, average inventory $4M → 6 turns, ~61 days.

Tip: Benchmark vs industry.`, 'B', 'E'],

["Inventory", "What is ABC analysis?",
`**Answer:** Classify items by annual value: A (top ~80% of value, ~20% of items), B (next 15%), C (last 5%). Focus control, counting and planning effort on A items. XYZ adds demand variability.

Tip: ABC-XYZ matrix.`, 'B', 'E'],

["Safety Stock", "How do you calculate safety stock?",
`**Answer:** SS = z × σ_demand × √(lead time) for demand variability (add lead time variability term if needed: z × √(LT × σd² + d² × σLT²)).

**Example:** 95% service (z = 1.65), σ daily demand 20, lead time 9 days → 1.65 × 20 × 3 = 99 units.

Tip: Service level drives z.`, 'B', 'M'],

["Reorder", "What is a reorder point?",
`**Answer:** ROP = average daily demand × lead time + safety stock.

**Example:** 50/day × 9 days + 99 = 549 units.

Tip: Simple formula.`, 'B', 'E'],

["EOQ", "What is EOQ?",
`**Answer:** Economic Order Quantity = √(2 × annual demand × order cost / holding cost per unit).

**Example:** demand 12,000, order cost $100, holding $4 → √(600,000) ≈ 775 units.

Tip: Trade-off ordering vs holding.`, 'B', 'M'],

["Forecasting", "How do you measure forecast accuracy?",
`**Answer:** MAPE (mean absolute percentage error), weighted MAPE (WMAPE) for portfolio, bias (forecast − actual tendency), and forecast value added (FVA) vs naive forecast.

**WMAPE:** Σ|A − F| / ΣA.

Tip: Bias matters as much as error.`, 'B', 'M'],

["Analysis", "OTIF dropped from 95% to 88%. How do you investigate?",
`**Answer:** Split into on-time vs in-full failures, segment by customer, product, warehouse and carrier, identify top causes (stockouts, late pick, carrier delays, order changes), quantify each, and recommend fixes with owners.

Tip: Pareto of causes.`, 'B', 'M'],

["Transportation", "How do you analyze freight costs?",
`**Answer:** Cost per unit, per lb, per shipment by lane, mode and carrier; identify accessorials, expedites, LTL vs FTL opportunities, consolidation, and rate benchmarking.

Tip: Expedite costs.`, 'B', 'M'],

["Network", "What is network optimization?",
`**Answer:** Modeling facilities, flows, costs and service levels to determine the optimal number and location of plants and DCs, using tools like Coupa Supply Chain Design (LLamasoft), AIMMS or optimization in Python.

Tip: Cost vs service trade-off.`, 'D', 'M'],

["Tools", "Which tools do you use?",
`**Answer:** Excel (advanced), SQL, Power BI/Tableau, Python, ERP (SAP, Oracle), planning systems (Kinaxis, o9, Blue Yonder, IBP) and TMS/WMS data.

Tip: SQL + BI.`, 'B', 'E'],

["SQL", "Write a query for top 10 SKUs by backorder value.",
`**Answer:** SELECT sku, SUM(backorder_qty * unit_price) AS bo_value FROM order_lines WHERE status = 'BACKORDER' GROUP BY sku ORDER BY bo_value DESC LIMIT 10;

Tip: Clear and correct.`, 'B', 'M'],

["Excel", "Which Excel skills are essential?",
`**Answer:** XLOOKUP/INDEX-MATCH, pivot tables, SUMIFS, data tables and scenario analysis, Solver for optimization, Power Query for data cleansing.

Tip: Solver.`, 'B', 'E'],

["Supplier", "How do you build a supplier scorecard?",
`**Answer:** Metrics: on-time delivery, quality (PPM, defects), lead time adherence, cost competitiveness, responsiveness, and compliance — weighted, reviewed quarterly with suppliers.

Tip: Weighted.`, 'B', 'E'],

["Cash-to-Cash", "What is the cash-to-cash cycle?",
`**Answer:** DIO + DSO − DPO — days cash is tied up in operations.

**Example:** DIO 60 + DSO 45 − DPO 40 = 65 days.

Tip: Working capital link.`, 'B', 'M'],

["Bullwhip", "What is the bullwhip effect?",
`**Answer:** Demand variability amplifies moving upstream because of order batching, forecast updating, price promotions and shortage gaming. Reduce via information sharing, smaller batches, stable pricing and collaborative planning.

Tip: Causes and fixes.`, 'B', 'M'],

["Scenario Modeling", "How do you model the impact of a tariff increase?",
`**Answer:** Identify affected items and suppliers by country of origin, calculate landed cost changes, model alternative sourcing options and pricing impacts, and summarize margin effects.

Tip: Landed cost.`, 'D', 'M'],

["Data Quality", "How do you deal with poor master data?",
`**Answer:** Identify issues (lead times, lot sizes, units of measure), quantify impact, work with owners to fix at source, and set governance.

Tip: Lead time accuracy.`, 'B', 'M'],

["Dashboards", "How do you design a supply chain dashboard?",
`**Answer:** Focus on key decisions, top KPIs with targets, trends, drill-down by dimension, exception highlights, and refresh automation.

Tip: Exceptions.`, 'B', 'E'],

["AI", "How is AI used in supply chain analytics?",
`**Answer:** Machine learning demand forecasting, anomaly detection, predictive ETAs, inventory optimization, and AI assistants for querying data.

Tip: ML forecasting.`, 'B', 'M'],

["Behavioral", "Tell me about an analysis that saved money.",
`**Sample answer:** "I analyzed expedited freight and found 40% came from late POs for 30 SKUs. Adjusting reorder points and lead times cut expedites $650K annually."

Tip: Quantified.`, 'B', 'M'],

["Behavioral", "Tell me about influencing a decision with data.",
`**Sample answer:** "I showed slow-moving inventory at one DC worth $2.1M; leadership approved rebalancing and SKU rationalization."

Tip: Data to decision.`, 'B', 'M'],

["Behavioral", "How do you handle conflicting data sources?",
`**Answer:** Trace definitions and timing, reconcile, document the source of truth, and communicate assumptions.

Tip: Definitions.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** APICS CPIM, CSCP, CLTD, and Six Sigma Green Belt.

Tip: CSCP.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior analyst, planning manager, or supply chain strategy roles.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn supply chain data into savings and better service — cutting expedites $650K and highlighting $2M of excess inventory."

Tip: Proof.`, 'B', 'E'],

["Service Level", "Cycle service level vs fill rate?",
`**Answer:** **Cycle service level** is the probability of not stocking out during a replenishment cycle; **fill rate** is the percentage of demand met from stock. Fill rate is usually higher than CSL.

Tip: Different measures.`, 'D', 'M'],

["Lead Time", "Why does lead time variability matter?",
`**Answer:** It increases safety stock needs, often more than demand variability; reducing it lowers inventory.

Tip: Supplier reliability.`, 'B', 'M'],

["Landed Cost", "How do you calculate landed cost?",
`**Answer:** Product cost + freight + insurance + duties and tariffs + brokerage + handling, allocated per unit.

Tip: Duty rates by HTS code.`, 'B', 'E'],

["Simulation", "When would you use simulation?",
`**Answer:** For complex systems with variability (warehouse throughput, inventory policies) where analytical formulas are insufficient.

Tip: Variability.`, 'D', 'M'],

["Benchmarking", "How do you benchmark supply chain performance?",
`**Answer:** Industry reports (Gartner, APQC), peer data, and frameworks like SCOR metrics.

Tip: SCOR.`, 'D', 'M'],

["SCOR", "What is the SCOR model?",
`**Answer:** Supply Chain Operations Reference model with processes (plan, source, make, deliver, return, enable — updated as SCOR Digital Standard) and standard metrics.

Tip: Common language.`, 'D', 'M'],

["Excess", "How do you identify excess and obsolete inventory?",
`**Answer:** Compare on-hand to forecast demand over a horizon, flag items with no movement, and calculate value at risk.

Tip: Value at risk.`, 'B', 'E'],

["Scenario", "Leadership wants to cut inventory 20% without hurting service. How do you approach it?",
`**Answer:** Segment inventory (cycle, safety, excess), remove excess, right-size safety stock by service targets, reduce lead times and lot sizes, and simulate service impacts.

Tip: Segment first.`, 'B', 'M'],

["Scenario", "A supplier's lead time doubles. What analysis do you do?",
`**Answer:** Identify impacted items and stock coverage, recalculate reorder points and safety stock, assess shortage risk, and evaluate alternate suppliers or expediting.

Tip: Coverage analysis.`, 'B', 'M'],

["Python", "How might you use Python?",
`**Answer:** Cleaning large datasets with pandas, forecasting with statsmodels/Prophet, optimization with PuLP, and automating reports.

Tip: Automation.`, 'D', 'M'],

["Perfect Order", "What is the perfect order rate?",
`**Answer:** Percentage of orders delivered on time, complete, damage-free and with correct documentation — the product of component rates.

**Example:** 95% × 98% × 99% × 99% ≈ 91%.

Tip: Multiplicative.`, 'B', 'M'],

["Communication", "How do you present analysis to leadership?",
`**Answer:** Lead with the conclusion and impact, show key supporting data, recommend actions, and keep details in backup.

Tip: Answer first.`, 'B', 'E'],

["Risk", "How do you analyze supply chain risk?",
`**Answer:** Map single-source and geographic concentrations, supplier financial health, lead times and inventory coverage, and quantify revenue at risk.

Tip: Revenue at risk.`, 'D', 'M'],

["Sustainability", "How do analysts support sustainability?",
`**Answer:** Measure emissions by mode and lane, model mode shifts and network changes, and track supplier sustainability data.

Tip: Scope 3.`, 'D', 'M'],

["MRP", "What is MRP?",
`**Answer:** Material Requirements Planning calculates net requirements for components from the master schedule and BOMs, considering inventory and lead times, generating planned orders.

Tip: Dependent demand.`, 'B', 'E'],

["Ad hoc", "How do you handle urgent ad hoc requests?",
`**Answer:** Clarify the question and decision, deliver a quick directional answer, then refine; reuse queries and templates.

Tip: Clarify the decision.`, 'B', 'E'],

["Seasonality", "How do you handle seasonality in analysis?",
`**Answer:** Compare year-over-year same periods, use seasonal indices and decomposition, and plan inventory builds ahead of peaks.

Tip: Seasonal indices.`, 'B', 'M']
];

QB['ss-analyst'] = (QB['ss-analyst']||[]).concat([
["Forecasting", "Which forecasting methods do you know?",
`**Answer:** Naive and moving averages, exponential smoothing (simple, Holt for trend, Holt-Winters for seasonality), ARIMA, regression with drivers, and machine learning models (gradient boosting) for many SKUs with external features. Choose based on the demand pattern.

Tip: Holt-Winters for seasonality.`, 'B', 'M'],
["Intermittent Demand", "How do you forecast intermittent demand?",
`**Answer:** Standard methods perform poorly on demand that is mostly zero. Use Croston's method or its variants, bootstrapping, or set stocking policies directly from the demand distribution. Measure with appropriate error metrics.

Tip: Croston's method.`, 'D', 'M'],
["Carrying Cost", "What is inventory carrying cost?",
`**Answer:** The annual cost of holding inventory, typically 20–30% of inventory value: capital cost, storage, insurance, taxes, obsolescence and shrinkage.

**Example:** $10M of inventory at 25% → $2.5M a year.

Tip: Use it to justify reductions.`, 'B', 'E'],
["Pareto", "How do you use Pareto analysis?",
`**Answer:** Rank causes or items by impact to find the vital few. For example, 20% of SKUs causing 80% of stockouts, or 3 carriers causing most late deliveries. Then focus action there.

Tip: Focus.`, 'B', 'E'],
["Automation", "How have you automated reporting?",
`**Answer:** Power Query and Power BI refreshes from ERP extracts, SQL views, Python scripts for data cleaning, and scheduled distribution. This saves hours each week and reduces errors.

Tip: Hours saved.`, 'B', 'E'],
["Scenario", "A planner disputes your recommendation. What do you do?",
`**Answer:** Listen to their operational context, re-check the data and assumptions together, adjust if they're right, and agree a test or pilot to validate.

Tip: Collaborate.`, 'B', 'E']
]);
