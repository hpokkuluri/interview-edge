// Supply / Materials Planner. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-supply'] = [
["Role", "What does a supply or materials planner do?",
`**Why they ask:** confirms scope.

**Answer:** Turns the demand plan into supply: plans production and purchases so materials arrive on time, at the right quantity and cost. Runs and reviews MRP, manages safety stock and lead times, resolves shortages and excess, coordinates with buyers, production and suppliers, and reports material availability and inventory KPIs.

Tip: Mention the balance of service, inventory and cost.`, 'B', 'E'],

["MRP", "Explain how MRP works.",
`**Answer:** Inputs: master production schedule or demand, **bill of materials**, **inventory** (on hand and on order), **lead times**, lot-sizing rules and safety stock. MRP explodes demand through the BOM level by level, nets against available inventory and scheduled receipts, and offsets by lead time to create **planned orders** (buy and make) with dates. It also generates exception messages (reschedule in/out, cancel, expedite).

**Example:** 100 bikes due week 10 → each needs 2 wheels → 200 wheels; 50 on hand → 150 net; 2-week lead time → planned order in week 8.

Tip: A quick example impresses.`, 'B', 'E'],

["MRP", "What causes bad MRP output?",
`**Answer:** Inaccurate inventory, wrong BOMs or routings, outdated lead times, incorrect lot sizes or MOQs, unrealistic forecasts, and open orders that should have been closed. "Garbage in, garbage out."

Tip: Data quality ownership is part of the job.`, 'B', 'M'],

["MRP", "What is the master production schedule (MPS)?",
`**Answer:** The plan of what finished goods will be produced, in what quantities and when, balancing demand with capacity. It drives MRP for components. Time fences protect near-term stability.

Tip: Mention rough-cut capacity planning.`, 'B', 'M'],

["MRP", "What are time fences?",
`**Answer:** **Demand time fence:** inside it, only firm customer orders drive planning (forecast ignored). **Planning time fence:** inside it, the system won't automatically change planned orders; planners must decide. They prevent nervous plans and constant changes.

Tip: Stability vs responsiveness.`, 'D', 'M'],

["Safety Stock", "How do you calculate safety stock?",
`**Answer:** A common formula with stable lead time: **SS = Z × σd × √LT**, where Z is from the service level (1.65 for 95%), σd is demand standard deviation per period, LT is lead time in periods. With variable lead time: SS = Z × √(LT × σd² + d² × σLT²).

**Example:** Z = 1.65, σd = 40/week, LT = 4 weeks → SS = 1.65 × 40 × 2 = 132 units.

Tip: Show the calculation.`, 'D', 'M'],

["Safety Stock", "How often should safety stock be reviewed?",
`**Answer:** At least quarterly, and when demand variability, lead times or service targets change. Static safety stocks drift out of date quickly.

Tip: Mention automated recalculation in planning tools.`, 'B', 'M'],

["Inventory", "What is a reorder point?",
`**Answer:** ROP = average demand during lead time + safety stock. When inventory falls to the ROP, place an order.

**Example:** 50 units/day × 10 days + 150 safety stock = 650 units.

Tip: Simple and quick.`, 'B', 'E'],

["Lot Sizing", "What lot sizing methods exist?",
`**Answer:** Lot-for-lot (order exactly what's needed), fixed order quantity, economic order quantity (EOQ), period order quantity (cover N periods), and min-max. Choice balances ordering/setup cost vs holding cost and supplier constraints.

Tip: Mention which you use for which items.`, 'B', 'M'],

["Lot Sizing", "What is EOQ?",
`**Answer:** Economic order quantity minimizes total ordering and holding cost: **EOQ = √(2DS/H)** where D = annual demand, S = cost per order, H = annual holding cost per unit.

**Example:** D = 10,000, S = $50, H = $2 → EOQ = √(1,000,000/2) ≈ 707 units.

Tip: Mention its assumptions (steady demand).`, 'D', 'M'],

["Shortages", "You have a shortage that will stop production. What do you do?",
`**Answer:** Confirm actual inventory and requirement timing; expedite with the supplier (partial shipments, air freight); check other sites, substitutes or alternate suppliers; work with scheduling to resequence production; inform sales and customers early if needed; and do root cause analysis after.

Tip: Communication speed is key.`, 'B', 'E'],

["Shortages", "How do you prioritize allocation when supply is short?",
`**Answer:** Agree rules with sales and leadership — strategic customers, contractual commitments, margin, order date — and apply them consistently. Communicate transparently.

Tip: Rules agreed in advance avoid conflict.`, 'D', 'M'],

["Exceptions", "How do you manage MRP exception messages?",
`**Answer:** Prioritize by impact (critical items, near-term dates, high value), act on reschedule-in/out, cancel and expedite messages, fix master data errors causing false messages, and avoid overreacting to small changes (use dampening and time fences).

Tip: Management by exception.`, 'D', 'M'],

["Excess", "How do you reduce excess and obsolete inventory?",
`**Answer:** Identify slow movers and coverage beyond need; cancel or push out open orders; return to supplier; transfer to other sites; rework or substitute into other products; sell at discount; and fix root causes (forecast bias, large MOQs, engineering changes).

Tip: Prevention matters most.`, 'D', 'M'],

["DDMRP", "What is DDMRP?",
`**Answer:** Demand Driven MRP places strategic **decoupling point buffers** in the supply chain. Buffers are sized with red, yellow and green zones based on usage, lead time and variability. Replenishment is triggered by actual demand (net flow position), reducing the bullwhip effect and MRP nervousness.

Tip: Mention where it suits (variable demand, long lead times).`, 'D', 'S'],

["Capacity", "What is capacity planning and how does it relate to materials planning?",
`**Answer:** Checking that production resources (machines, labor) can meet the plan — rough-cut capacity planning at MPS level, detailed capacity requirements planning (CRP) at work center level. Material plans must align with available capacity.

Tip: Material + capacity = feasible plan.`, 'D', 'M'],

["Lead Times", "How do you manage supplier lead times?",
`**Answer:** Keep ERP lead times accurate using actual receipt history, monitor variability, share forecasts with suppliers to reduce lead times, and adjust safety stock when lead times change.

Tip: Outdated lead times are a top MRP problem.`, 'B', 'M'],

["Suppliers", "How do you work with suppliers as a planner?",
`**Answer:** Share forecasts and firm orders, confirm delivery dates, track on-time performance, collaborate on capacity and lead times, and use supplier portals or VMI for key items.

Tip: Collaboration reduces surprises.`, 'B', 'E'],

["VMI", "What is vendor-managed inventory?",
`**Answer:** The supplier monitors your inventory levels and replenishes within agreed min/max levels. It reduces your planning effort and can lower inventory, but requires data sharing and trust.

Tip: Mention consignment as a related model.`, 'D', 'M'],

["Kanban", "What is kanban replenishment?",
`**Answer:** A pull system where consumption triggers replenishment via cards or signals. Number of kanbans = (demand during lead time + safety) ÷ container quantity. Works well for stable, repetitive demand.

Tip: Lean link.`, 'D', 'M'],

["BOM", "Why is BOM accuracy important?",
`**Answer:** MRP uses the BOM to calculate component requirements. Wrong quantities or missing parts cause shortages or excess. Engineering change management must update BOMs on time.

Tip: Mention working with engineering on ECOs.`, 'B', 'E'],

["Engineering Changes", "How do you handle an engineering change in planning?",
`**Answer:** Plan the effectivity date, use up old components (run-out) where possible, coordinate new component procurement, update BOMs and routings, and avoid obsolete stock.

Tip: Effectivity planning.`, 'D', 'M'],

["Metrics", "Which KPIs does a supply planner own?",
`**Answer:** Material availability or shortages, on-time delivery to production, supplier on-time delivery, inventory turns or days of supply, excess and obsolete value, schedule adherence and expedite costs.

Tip: Mention your numbers.`, 'B', 'M'],

["Metrics", "How do you calculate inventory turns and days of supply?",
`**Answer:** Turns = annual COGS ÷ average inventory. Days of supply = average inventory ÷ average daily usage (or 365 ÷ turns).

**Example:** COGS $24M, average inventory $4M → 6 turns → about 61 days.

Tip: Quick math.`, 'B', 'E'],

["S&OP", "What is the supply planner's role in S&OP?",
`**Answer:** Lead the supply review: assess the demand plan against capacity and materials, identify constraints and options (overtime, outsourcing, pre-build, allocation), quantify costs, and bring recommendations to the pre-S&OP and executive meetings.

Tip: Options with costs.`, 'B', 'M'],

["Tools", "Which planning tools have you used?",
`**Sample answer:** "Oracle Supply Planning Cloud for MRP and exceptions, SAP MRP on a previous job, Kinaxis RapidResponse for what-if scenarios, and Excel for supplier follow-up."

Tip: Name tasks.`, 'B', 'E'],

["Scenario", "Your top supplier announces a 6-week delay. What do you do?",
`**Answer:** Assess impact on production and customers by item and date, check inventory, alternative suppliers and substitutes, reprioritize production, expedite partial shipments, inform stakeholders, and update plans and safety stock.

Tip: Structured response.`, 'D', 'M'],

["Scenario", "Inventory is too high but shortages are also frequent. Why?",
`**Answer:** Wrong inventory mix — too much of slow movers and too little of key items. Causes: poor segmentation, inaccurate forecasts by SKU, wrong safety stock settings, large MOQs, and poor data. Fix by segmenting and resetting parameters item by item.

Tip: Classic interview question.`, 'D', 'M'],

["Scenario", "Leadership wants inventory cut by 20% without hurting service. How?",
`**Answer:** Segment items, recalculate safety stocks, reduce lead times and MOQs with suppliers, eliminate excess and obsolete stock, improve forecast accuracy, and push out or cancel unnecessary orders. Track service weekly.

Tip: Quantify each lever.`, 'D', 'S'],

["Multi-site", "How do you plan across multiple sites or warehouses?",
`**Answer:** Distribution requirements planning (DRP), sourcing rules, inter-site transfers, centralized vs local stock decisions, and balancing inventory between sites.

Tip: Network view.`, 'D', 'M'],

["Make vs Buy", "How do planners handle outsourced manufacturing?",
`**Answer:** Plan contract manufacturer orders with lead times, supply components if consigned, track capacity commitments, and monitor quality and delivery performance.

Tip: Mention component consignment.`, 'D', 'M'],

["Data", "How do you keep planning parameters accurate?",
`**Answer:** Regular reviews of lead times, safety stock, MOQs and lot sizes against actual data; reports flagging outdated parameters; and clear ownership.

Tip: Parameter hygiene.`, 'B', 'M'],

["Communication", "How do you communicate supply risks to sales?",
`**Answer:** Early, specific and with options — affected items, customers and dates, alternatives, and expected recovery.

Tip: No surprises for customers.`, 'B', 'E'],

["Behavioral", "Tell me about reducing inventory without hurting service.",
`**Sample answer:** "I segmented 4,000 SKUs, recalculated safety stocks with actual variability, and negotiated smaller MOQs on 30 key items. Inventory fell $2.1M (18%) while fill rate held at 97%."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "Tell me about a shortage you solved.",
`**Sample answer:** "A connector shortage threatened a $1M order. I found stock at a sister plant, arranged an air shipment of partials, and resequenced production. We shipped on time."

Tip: Creativity and coordination.`, 'B', 'E'],

["Behavioral", "How do you handle constant schedule changes?",
`**Answer:** Push for frozen windows, understand root causes of changes, communicate impacts clearly, and keep flexibility where it matters (safety stock, capacity buffers).

Tip: Balanced.`, 'B', 'M'],

["Planning", "What is available-to-promise (ATP)?",
`**Answer:** The quantity of a product not yet committed to orders and available to promise to new customers, by date — based on on-hand inventory, scheduled receipts and existing commitments. CTP (capable-to-promise) also considers capacity.

Tip: Order promising concept.`, 'D', 'M'],

["Planning", "What is pegging?",
`**Answer:** Linking supply orders to the demands they satisfy, so planners can see which customer orders are affected if a supply is late.

Tip: Useful for shortage impact analysis.`, 'D', 'M'],

["Planning", "What is the difference between push and pull planning?",
`**Answer:** **Push:** produce based on forecasts (MRP). **Pull:** produce based on actual consumption (kanban). Many companies use hybrids — push for long lead-time items, pull for repetitive items.

Tip: Show when each fits.`, 'B', 'M'],

["Risk", "How do you build resilience into supply plans?",
`**Answer:** Strategic buffers for critical items, dual sourcing, monitoring supplier risk, scenario planning, and visibility into sub-tier suppliers.

Tip: Lessons from recent disruptions.`, 'D', 'S'],

["Cost", "How do expedite costs reflect planning quality?",
`**Answer:** Frequent premium freight and overtime signal poor planning, data or supplier performance. Track expedite spend and root causes to improve.

Tip: Good metric to mention.`, 'D', 'M'],

["Leadership", "How would you improve a struggling planning function?",
`**Answer:** Assess data quality, parameters, processes and skills; fix master data; define clear roles and KPIs; implement S&OP discipline; and train planners.

Tip: Foundation first.`, 'D', 'S'],

["Career", "Why supply planning?",
`**Sample answer:** "I like solving puzzles under pressure — balancing customer service, inventory and cost while things change daily. Planning has a direct impact on the business."

Tip: Energy for problem solving.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep production supplied while reducing inventory — I cut $2.1M of stock with no service loss and handle shortages calmly and creatively. I know MRP deeply and keep planning data clean."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is a planning BOM?",
`**Answer:** An artificial BOM used to forecast options or families (e.g. 60% of bikes have model A wheels, 40% model B), so you can plan components without forecasting every configuration.

Tip: Useful for configurable products.`, 'D', 'S'],

["Technical", "What is the difference between gross and net requirements?",
`**Answer:** Gross requirements are total needs from demand or parent items. Net requirements = gross − on hand − scheduled receipts + safety stock. Planned orders cover net requirements.

Tip: Basic MRP math.`, 'B', 'E'],

["Technical", "What is MRP nervousness and how do you reduce it?",
`**Answer:** Frequent changes in planned orders caused by small changes in demand or data. Reduce it with time fences, lot sizing, dampening rules, firm planned orders and stable forecasts.

Tip: Practical controls.`, 'D', 'M'],

["Technical", "What is a firm planned order?",
`**Answer:** A planned order that the planner locks so MRP won't change its quantity or date automatically — useful for stability in the near term.

Tip: Quick definition.`, 'B', 'M'],

["Technical", "What is days of coverage and how do you use it?",
`**Answer:** How many days current inventory will last at forecasted usage. Planners use it to spot shortages (low coverage) and excess (very high coverage) quickly.

Tip: Simple and practical.`, 'B', 'E']
];
