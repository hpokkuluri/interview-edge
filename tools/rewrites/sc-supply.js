// Rewritten Supply Chain — Supply / Materials Planner (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-supply-).
module.exports = {

'Explain how MRP works.':
`**Why they ask:** MRP is the planner's core engine.

**Answer:**
"MRP takes the master schedule or demand, the bill of materials, inventory on hand and on order, lead times, lot-sizing rules and safety stock. It explodes demand through the BOM level by level, nets it against available inventory and scheduled receipts, and offsets by lead time to create planned buy and make orders with dates. It also produces exception messages — reschedule in, reschedule out, cancel, expedite. For example: 100 bikes due in week 10 need 200 wheels; we have 50, so we need 150; with a two-week lead time, the planned order is released in week 8."

Tip: A quick example impresses.`,

'What causes bad MRP output?':
`**Why they ask:** planners own data quality.

**Answer:**
"Inaccurate inventory, wrong BOMs or routings, outdated lead times, wrong lot sizes or MOQs, unrealistic forecasts, and old open orders that should have been closed. MRP is just math — garbage in, garbage out. Keeping that data clean is part of my job, not someone else's."

Tip: Data quality ownership is part of the job.`,

'What is the master production schedule (MPS)?':
`**Why they ask:** the link between demand and materials.

**Answer:**
"The MPS is the plan of which finished goods we'll produce, how many and when, balancing demand against capacity. It drives MRP for all the components. Rough-cut capacity planning checks it's feasible on key resources, and time fences protect near-term stability."

Tip: Mention rough-cut capacity planning.`,

'What are time fences?':
`**Why they ask:** stability versus responsiveness.

**Answer:**
"Inside the demand time fence, only firm customer orders drive planning — the forecast is ignored. Inside the planning time fence, the system won't automatically change planned orders; a planner has to decide. Together they stop the plan from changing every time demand twitches."

Tip: Stability versus responsiveness.`,

'How do you calculate safety stock?':
`**Why they ask:** a core planning calculation.

**Answer:**
"With a stable lead time, a common formula is Z times the demand standard deviation times the square root of lead time. Z comes from the service level — 1.65 for 95%. If demand varies by 40 units a week and lead time is 4 weeks, that's 1.65 times 40 times 2 — 132 units. If the lead time also varies, the formula adds a term for lead-time variability."

Tip: Show the calculation.`,

'How often should safety stock be reviewed?':
`**Why they ask:** static parameters drift.

**Answer:**
"At least quarterly, and whenever demand variability, lead times or service targets change. Static safety stocks go out of date fast. Most planning tools can recalculate automatically — I set that up and review the big changes."

Tip: Mention automated recalculation.`,

'What is a reorder point?':
`**Why they ask:** a basic replenishment trigger.

**Answer:**
"The reorder point is average demand during the lead time plus safety stock. At 50 units a day with a 10-day lead time and 150 of safety stock, that's 500 plus 150 — 650 units. When inventory falls to 650, we order."

Tip: Simple and quick.`,

'What lot sizing methods exist?':
`**Why they ask:** order quantity decisions.

**Answer:**
"Lot-for-lot orders exactly what's needed. Fixed order quantity uses a set amount. Economic order quantity balances ordering and holding cost. Period order quantity covers a set number of periods. And min-max. The choice balances setup or ordering cost against holding cost and supplier constraints. I use lot-for-lot for expensive A items and period quantities for cheap C items."

Tip: Say which you use for which items.`,

'What is EOQ?':
`**Why they ask:** a classic formula.

**Answer:**
"Economic order quantity minimizes total ordering and holding cost. It's the square root of two times annual demand times cost per order, divided by annual holding cost per unit. With demand of 10,000, $50 per order and $2 holding cost, that's the square root of 500,000 — about 707 units. It assumes steady demand, so I treat it as a starting point."

Tip: Mention its assumptions.`,

'You have a shortage that will stop production. What do you do?':
`**Why they ask:** crisis handling.

**Answer:**
"First confirm the actual inventory and exactly when it's needed. Then expedite with the supplier — partial shipments or air freight — and check other sites, substitutes and alternate suppliers. I work with scheduling to resequence production, and tell sales and customers early if needed. After it's resolved, I do a root-cause analysis."

Tip: Communication speed is key.`,

'How do you prioritize allocation when supply is short?':
`**Why they ask:** fair, consistent decisions.

**Answer:**
"I agree the rules with sales and leadership in advance — strategic customers, contractual commitments, margin, order date — and apply them consistently. And I communicate transparently with everyone affected. Rules agreed before the crisis avoid fights during it."

Tip: Rules agreed in advance avoid conflict.`,

'How do you manage MRP exception messages?':
`**Why they ask:** daily planner work.

**Answer:**
"I prioritize by impact — critical items, near-term dates and high value. I act on reschedule-in, reschedule-out, cancel and expedite messages, fix master data errors that cause false messages, and avoid overreacting to small changes by using dampening and time fences."

Tip: Management by exception.`,

'How do you reduce excess and obsolete inventory?':
`**Why they ask:** cash and waste.

**Answer:**
"I identify slow movers and anything with coverage far beyond need. Then cancel or push out open orders, return to suppliers, transfer to other sites, rework or substitute into other products, or sell at a discount. And fix the root causes — forecast bias, big MOQs, and engineering changes without run-out plans. Prevention matters most."

Tip: Prevention matters most.`,

'What is DDMRP?':
`**Why they ask:** a modern planning method.

**Answer:**
"Demand Driven MRP places strategic decoupling buffers in the supply chain. Each buffer has red, yellow and green zones sized on usage, lead time and variability. Replenishment is triggered by actual demand through the net flow position, which reduces the bullwhip effect and MRP nervousness. It suits variable demand and long lead times."

Tip: Mention where it suits.`,

'What is capacity planning and how does it relate to materials planning?':
`**Why they ask:** feasible plans need both.

**Answer:**
"Capacity planning checks whether machines and labor can meet the plan — rough-cut capacity at MPS level, and detailed capacity requirements planning at work center level. A material plan is useless if the line can't run it, so materials and capacity have to align."

Tip: Material plus capacity equals a feasible plan.`,

'How do you manage supplier lead times?':
`**Why they ask:** lead times drive MRP.

**Answer:**
"I keep ERP lead times accurate using actual receipt history, monitor variability, share forecasts with suppliers to help shorten lead times, and adjust safety stock when lead times change. Outdated lead times are one of the top causes of bad MRP plans."

Tip: Outdated lead times are a top MRP problem.`,

'How do you work with suppliers as a planner?':
`**Why they ask:** collaboration.

**Answer:**
"I share forecasts and firm orders, confirm delivery dates, track on-time performance, collaborate on capacity and lead times, and use supplier portals or VMI for key items. Collaboration reduces surprises on both sides."

Tip: Collaboration reduces surprises.`,

'What is vendor-managed inventory?':
`**Why they ask:** a supplier collaboration model.

**Answer:**
"The supplier monitors our inventory levels and replenishes within agreed min and max levels. It cuts our planning effort and can lower inventory, but it needs data sharing and trust. Consignment is a related model, where the supplier owns the stock until we use it."

Tip: Mention consignment as a related model.`,

'What is kanban replenishment?':
`**Why they ask:** Lean planning.

**Answer:**
"It's a pull system where consumption triggers replenishment through cards or signals. The number of kanbans is demand during lead time plus safety, divided by the container quantity. It works well for stable, repetitive demand and takes those items out of MRP noise."

Tip: The Lean link.`,

'Why is BOM accuracy important?':
`**Why they ask:** BOM errors cause shortages.

**Answer:**
"MRP uses the BOM to calculate every component requirement. A wrong quantity or a missing part causes shortages or excess. So engineering changes have to update BOMs on time, and I work closely with engineering on ECOs."

Tip: Mention working with engineering on ECOs.`,

'How do you handle an engineering change in planning?':
`**Why they ask:** changes create obsolete stock.

**Answer:**
"I plan the effectivity date so we use up the old components first where possible, coordinate procurement of the new ones, make sure BOMs and routings are updated, and avoid leaving obsolete stock behind."

Tip: Effectivity planning.`,

'Which KPIs does a supply planner own?':
`**Why they ask:** accountability.

**Answer:**
"Material availability or shortages, on-time delivery to production, supplier on-time delivery, inventory turns or days of supply, excess and obsolete value, schedule adherence and expedite costs. In my last role, I cut production shortages by 60% while reducing inventory."

Tip: Mention your numbers.`,

'How do you calculate inventory turns and days of supply?':
`**Why they ask:** basic metrics.

**Answer:**
"Turns are annual COGS divided by average inventory. Days of supply is average inventory divided by average daily usage, or 365 divided by turns. With $24 million of COGS and $4 million of inventory, that's 6 turns — about 61 days."

Tip: Quick math.`,

"What is the supply planner's role in S&OP?":
`**Why they ask:** planners lead the supply review.

**Answer:**
"I lead the supply review — checking the demand plan against capacity and materials, identifying constraints, and laying out options like overtime, outsourcing, pre-building or allocation, each with its cost. Then I bring recommendations to the pre-S&OP and executive meetings."

Tip: Options with costs.`,

'Which planning tools have you used?':
`**Why they ask:** tool familiarity.

**Answer:**
"Oracle Supply Planning Cloud for MRP and exceptions, SAP MRP in a previous job, Kinaxis RapidResponse for what-if scenarios, and Excel for supplier follow-up."

Tip: Name tasks — swap in your own tools.`,

'Your top supplier announces a 6-week delay. What do you do?':
`**Why they ask:** structured response.

**Answer:**
"I assess the impact by item and date on production and customers, check inventory, alternative suppliers and substitutes, reprioritize production, expedite partial shipments, tell stakeholders, and update plans and safety stock for the new reality."

Tip: A structured response.`,

'Inventory is too high but shortages are also frequent. Why?':
`**Why they ask:** a classic interview question.

**Answer:**
"It's a mix problem — too much of the slow movers and too little of the key items. Usually caused by poor segmentation, inaccurate SKU-level forecasts, wrong safety stock settings, big MOQs and bad data. The fix is segmenting the items and resetting parameters item by item, not changing everything by the same percentage."

Tip: A classic interview question.`,

'Leadership wants inventory cut by 20% without hurting service. How?':
`**Why they ask:** a common goal.

**Answer:**
"Segment the items, recalculate safety stocks from actual variability, negotiate shorter lead times and smaller MOQs, clear excess and obsolete stock, improve forecast accuracy, and push out or cancel orders we don't need. Each lever gets a dollar target, and I track service weekly."

Tip: Quantify each lever.`,

'How do you plan across multiple sites or warehouses?':
`**Why they ask:** network planning.

**Answer:**
"Distribution requirements planning, sourcing rules, inter-site transfers, deciding what to stock centrally versus locally, and rebalancing inventory between sites before buying more."

Tip: Take a network view.`,

'How do planners handle outsourced manufacturing?':
`**Why they ask:** contract manufacturing.

**Answer:**
"I plan contract manufacturer orders with their lead times, supply components if we consign them, track their capacity commitments, and monitor quality and delivery performance like any other supplier."

Tip: Mention component consignment.`,

'How do you keep planning parameters accurate?':
`**Why they ask:** parameter hygiene.

**Answer:**
"Regular reviews of lead times, safety stock, MOQs and lot sizes against actual data, reports that flag outdated parameters, and clear ownership for each item."

Tip: Parameter hygiene.`,

'How do you communicate supply risks to sales?':
`**Why they ask:** no surprises.

**Answer:**
"Early, specific and with options — which items, customers and dates are affected, what the alternatives are, and when we expect recovery."

Tip: No surprises for customers.`,

'Tell me about reducing inventory without hurting service.':
`**Why they ask:** proof.

**Answer:**
"I segmented 4,000 SKUs, recalculated safety stocks using actual variability, and negotiated smaller MOQs on 30 key items. Inventory fell $2.1 million — 18% — and fill rate held at 97%."

Tip: Numbers.`,

'Tell me about a shortage you solved.':
`**Why they ask:** creativity under pressure.

**Answer:**
"A connector shortage threatened a $1 million order. I found stock at a sister plant, arranged an air shipment of partials, and worked with scheduling to resequence production. We shipped on time."

Tip: Creativity and coordination.`,

'How do you handle constant schedule changes?':
`**Why they ask:** a planner's daily reality.

**Answer:**
"I push for frozen windows, dig into why changes keep happening, communicate the impact of each change clearly, and keep flexibility where it matters — safety stock and capacity buffers on the critical items."

Tip: A balanced approach.`,

'What is available-to-promise (ATP)?':
`**Why they ask:** order promising.

**Answer:**
"ATP is the quantity not yet committed to orders and available to promise new customers, by date — based on on-hand inventory, scheduled receipts and existing commitments. Capable-to-promise goes further and also checks capacity to make more."

Tip: An order promising concept.`,

'What is pegging?':
`**Why they ask:** shortage impact analysis.

**Answer:**
"Pegging links each supply order to the demands it satisfies. So if a PO is late, I can see exactly which customer orders are affected."

Tip: Useful for shortage impact analysis.`,

'What is the difference between push and pull planning?':
`**Why they ask:** method choice.

**Answer:**
"Push produces based on forecasts — that's MRP. Pull produces based on actual consumption — that's kanban. Most companies use a hybrid: push for long lead-time items and pull for repetitive ones."

Tip: Show when each fits.`,

'How do you build resilience into supply plans?':
`**Why they ask:** disruption readiness.

**Answer:**
"Strategic buffers for critical items, dual sourcing, monitoring supplier risk, scenario planning, and visibility into sub-tier suppliers — recent disruptions showed that's often where the problem starts."

Tip: Lessons from recent disruptions.`,

'How do expedite costs reflect planning quality?':
`**Why they ask:** a planning health metric.

**Answer:**
"Frequent premium freight and overtime signal problems with planning, data or supplier performance. I track expedite spend with root causes, because each one points to something to fix."

Tip: A good metric to mention.`,

'How would you improve a struggling planning function?':
`**Why they ask:** leadership thinking.

**Answer:**
"Assess data quality, parameters, processes and skills. Fix master data first, define clear roles and KPIs, put S&OP discipline in place, and train the planners. Without the foundation, nothing else holds."

Tip: Foundation first.`,

'Why supply planning?':
`**Why they ask:** motivation.

**Answer:**
"I like solving puzzles under pressure — balancing customer service, inventory and cost while things change every day. And planning has a direct, visible impact on the business."

Tip: Show energy for problem solving.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I keep production supplied while reducing inventory — I cut $2.1 million of stock with no service loss — and I handle shortages calmly and creatively. I know MRP deeply and keep planning data clean."

Tip: Proof.`,

'What is a planning BOM?':
`**Why they ask:** configurable products.

**Answer:**
"It's an artificial BOM used to forecast options or families. For example, if 60% of bikes use model A wheels and 40% model B, a planning BOM splits the bike forecast that way. You can plan components without forecasting every configuration."

Tip: Useful for configurable products.`,

'What is the difference between gross and net requirements?':
`**Why they ask:** basic MRP math.

**Answer:**
"Gross requirements are the total needs from demand or parent items. Net requirements are gross minus on-hand minus scheduled receipts, plus safety stock. Planned orders cover the net requirements."

Tip: Basic MRP math.`,

'What is MRP nervousness and how do you reduce it?':
`**Why they ask:** plan stability.

**Answer:**
"It's planned orders changing constantly because of small changes in demand or data. Suppliers lose trust when every order moves. I reduce it with time fences, sensible lot sizing, dampening rules, firm planned orders, and a stable forecast."

Tip: Practical controls.`,

'What is a firm planned order?':
`**Why they ask:** a quick definition.

**Answer:**
"It's a planned order the planner locks so MRP won't change its quantity or date automatically — useful for stability in the near term."

Tip: Quick definition.`,

'What is days of coverage and how do you use it?':
`**Why they ask:** a practical metric.

**Answer:**
"It's how many days current inventory will last at forecast usage. Low coverage flags a coming shortage; very high coverage flags excess. I sort by it every morning to see where to look first."

Tip: Simple and practical.`,

'What is distribution requirements planning (DRP)?':
`**Why they ask:** network planning logic.

**Answer:**
"DRP plans replenishment across a distribution network. It calculates what each DC needs from forecasts, inventory and safety stock, then generates transfer or purchase orders back through the network to the source. It's MRP logic applied to distribution."

Tip: MRP logic applied to distribution.`,

};
