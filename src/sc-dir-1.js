// Director of Supply Chain. Format: [topic, question, answer, 'B'|'D']
QB['sc-dir'] = [
["Strategy", "How do you align supply chain strategy with business strategy?",
`**Why they ask:** directors translate business goals into supply chain design.

**Answer:** Start from how the company competes — cost leadership, speed, customization, or service. Then design the supply chain to match: a lean, efficient chain for cost-focused, stable products; an agile, responsive chain for innovative or volatile products. Translate into targets (service level, cost, inventory, lead time), network and sourcing choices, and initiatives — reviewed through S&OP.

Tip: Mention Fisher's "efficient vs responsive" framework.`, 'B'],

["S&OP", "How do you make S&OP effective?",
`**Answer:** Executive engagement and decision-making focus, a disciplined monthly calendar, one set of numbers, clear roles for demand, supply and finance reviews, scenarios for gaps with costs, and tracking of decisions and actions. Evolve toward integrated business planning (IBP) linked to financial plans.

Tip: "S&OP is a decision meeting, not a reporting meeting."`, 'D'],

["S&OP", "What are signs that S&OP isn't working?",
`**Answer:** Executives don't attend, multiple versions of the forecast, decisions made outside the process, constant expediting, high inventory with low service, and finance plans disconnected from operations.

Tip: Diagnose before fixing.`, 'D'],

["Metrics", "What supply chain metrics do you report to leadership?",
`**Answer:** Customer service (OTIF, fill rate), inventory (days on hand, turns, E&O), total supply chain cost (% of sales), forecast accuracy and bias, cash-to-cash cycle, supplier performance, and safety. Balanced so improving one doesn't hurt another.

Tip: Show trade-offs explicitly.`, 'B'],

["Metrics", "What is the cash-to-cash cycle?",
`**Answer:** Days inventory outstanding + days sales outstanding − days payables outstanding. It measures how long cash is tied up in operations.

**Example:** 60 + 45 − 50 = 55 days. Reducing inventory by 10 days on $100M COGS frees about $2.7M.

Tip: Link to the CFO's priorities.`, 'D'],

["Resilience", "How do you make a supply chain more resilient?",
`**Answer:** Map multi-tier suppliers to find single points of failure; dual or multi-source critical items; regionalize where sensible; hold strategic buffer inventory; monitor risk signals; build scenario plans and playbooks; and design flexible capacity and logistics options.

Tip: Lessons from recent disruptions.`, 'D'],

["Resilience", "How do you balance resilience with cost?",
`**Answer:** Segment by risk and importance — invest in resilience (dual sourcing, buffers) for critical, high-impact items, and stay lean for low-risk items. Quantify the cost of disruption vs cost of mitigation.

Tip: Risk-adjusted decisions.`, 'D'],

["Inventory", "How do you optimize inventory across the network?",
`**Answer:** Segment SKUs (ABC/XYZ), set service targets by segment, use multi-echelon inventory optimization to place stock where it gives the best service per dollar, improve forecast accuracy, reduce lead times and lot sizes, and clear excess regularly.

Tip: Multi-echelon optimization is advanced.`, 'D'],

["Cost", "How would you reduce total supply chain cost?",
`**Answer:** Procurement savings, freight optimization (mode, consolidation, network), warehouse productivity, inventory reduction (carrying cost), fewer expedites through better planning, and network redesign. Track cost-to-serve by customer and channel.

Tip: Cost-to-serve insight.`, 'D'],

["Cost", "What is cost-to-serve analysis?",
`**Answer:** Calculating the full cost of serving each customer or channel — order handling, picking, freight, returns, special services and payment terms — to understand true profitability and adjust service models or pricing.

Tip: Some large customers can be unprofitable.`, 'D'],

["Network", "When would you redesign the distribution network?",
`**Answer:** After growth or new markets, M&A, changes in customer expectations (faster delivery), rising costs, or tariff and sourcing changes. Model scenarios for cost, service and risk.

Tip: Network modeling tools.`, 'D'],

["Digital", "What digital tools would you invest in?",
`**Answer:** Integrated planning (IBP/advanced planning), control tower visibility, WMS/TMS, supplier collaboration portals, analytics and AI for forecasting and risk — on top of clean master data.

Tip: Data foundation first.`, 'D'],

["Digital", "What is a supply chain control tower?",
`**Answer:** A central visibility and decision hub combining real-time data from orders, inventory, shipments and suppliers, with alerts and scenario tools to respond to exceptions quickly.

Tip: Visibility to action.`, 'D'],

["Planning", "How do you improve forecast accuracy as a director?",
`**Answer:** Invest in data quality and tools, establish a demand planning process with accountability, track accuracy and bias, use FVA, and integrate customer and market intelligence.

Tip: Process and accountability.`, 'D'],

["Procurement", "How do you partner with procurement?",
`**Answer:** Align on category strategies, supplier risk, lead times and MOQs, total cost, and supplier performance. Joint S&OP participation.

Tip: Integrated supply chain.`, 'B'],

["Logistics", "What logistics priorities would you set?",
`**Answer:** OTIF improvement, freight cost per unit, carrier performance, network efficiency, visibility, and sustainability.

Tip: Balanced priorities.`, 'B'],

["Manufacturing", "How do you work with manufacturing operations?",
`**Answer:** Align production plans with demand and capacity, agree frozen windows, coordinate maintenance and changeovers, and share KPIs like schedule attainment.

Tip: Partnership.`, 'B'],

["Team", "How do you build a strong supply chain team?",
`**Answer:** Right structure (planning, procurement, logistics, customer service), hire analytical and collaborative people, develop skills in data and systems, create career paths and succession plans, and foster cross-functional collaboration.

Tip: People development examples.`, 'B'],

["Team", "How do you develop supply chain talent?",
`**Answer:** Rotations across functions, certifications (APICS/ASCM CPIM, CSCP), mentoring, stretch projects and data skills training.

Tip: Mention certifications.`, 'B'],

["Customers", "How do you improve customer service performance?",
`**Answer:** Measure OTIF by root cause, improve planning and inventory placement, fix warehouse and transportation issues, provide order visibility, and manage key account requirements.

Tip: Root-cause approach.`, 'D'],

["Sustainability", "How do you integrate sustainability into supply chain?",
`**Answer:** Measure emissions (Scope 3), set targets, optimize transport (mode shift, load fill), packaging reduction, supplier engagement, and circular economy initiatives.

Tip: Cost and carbon often align.`, 'D'],

["Risk", "How do you manage supplier risk at a director level?",
`**Answer:** Risk segmentation, monitoring tools, multi-tier visibility, business continuity plans, contracts with protections, and regular risk reviews with leadership.

Tip: Structured program.`, 'D'],

["Tariffs", "How do you respond to sudden tariff changes?",
`**Answer:** Quantify exposure, evaluate alternative sources and routes, use trade programs (FTZ, drawback, FTAs), adjust pricing with sales, and update inventory and sourcing plans.

Tip: Current and practical.`, 'D'],

["Scenario", "Service levels dropped from 96% to 88%. What do you do?",
`**Answer:** Analyze by root cause (forecast misses, supply shortages, warehouse or transport issues), prioritize fixes by impact, set up a recovery plan with weekly tracking, and communicate with sales and key customers.

Tip: Structured recovery.`, 'D'],

["Scenario", "The CFO wants inventory cut by $10M in six months. How?",
`**Answer:** Analyze inventory by category and aging, eliminate excess and obsolete, recalculate safety stocks, reduce lot sizes and lead times, cancel or defer purchases, improve forecast accuracy, and protect service for critical items. Track weekly.

Tip: Quantify each lever.`, 'D'],

["Scenario", "A key supplier is going bankrupt. What do you do?",
`**Answer:** Assess exposure and inventory, secure supply (last-time buys, tooling ownership), qualify alternatives quickly, consider supporting the supplier temporarily if strategic, and communicate with stakeholders.

Tip: Act fast.`, 'D'],

["Behavioral", "Tell me about a supply chain crisis you managed.",
`**Sample answer:** "During a port congestion crisis, our lead times doubled. I set up a daily war room, rerouted through two alternate ports, prioritized allocation for top customers, and increased safety stock on critical items. We kept OTIF above 92% while competitors fell below 80%."

Tip: Actions and outcome.`, 'B'],

["Behavioral", "Tell me about a major improvement you led.",
`**Sample answer:** "I implemented S&OP across three business units, cutting inventory 22% ($14M) while improving OTIF from 89% to 95% within a year."

Tip: Numbers.`, 'B'],

["Behavioral", "How do you handle disagreements between sales and operations?",
`**Answer:** Bring data to the S&OP process, clarify trade-offs (service vs cost vs inventory), find options, and escalate decisions to the executive meeting if needed.

Tip: Facilitate decisions.`, 'B'],

["Stakeholders", "How do you communicate supply chain performance to executives?",
`**Answer:** One-page scorecard with trends, key issues and actions, trade-offs and decisions needed, in business and financial terms.

Tip: Business language.`, 'B'],

["Budget", "How do you manage the supply chain budget?",
`**Answer:** Plan freight, warehousing, labor and inventory carrying costs against volume, track cost per unit, explain variances, and drive savings initiatives.

Tip: Financial ownership.`, 'D'],

["Outsourcing", "When would you outsource logistics or manufacturing?",
`**Answer:** When partners offer better cost, flexibility, expertise or capacity; keep strategic capabilities and IP in-house; manage with clear SLAs and governance.

Tip: Strategic control.`, 'D'],

["Technology", "How would you lead a supply chain system implementation?",
`**Answer:** Define processes first, secure executive sponsorship, involve users, clean data, phase the rollout, test thoroughly, train and support hypercare, and measure benefits.

Tip: Process before technology.`, 'D'],

["AI", "Where does AI help supply chain most?",
`**Answer:** Demand forecasting and sensing, inventory optimization, predictive ETAs and disruptions, supplier risk monitoring, warehouse automation and planning assistants.

Tip: Practical use cases.`, 'D'],

["Segmentation", "What is supply chain segmentation?",
`**Answer:** Designing different supply chain approaches for different product or customer segments — e.g. make-to-stock with high service for fast movers, make-to-order for low-volume custom items.

Tip: One size doesn't fit all.`, 'D'],

["Lead Time", "How do you reduce end-to-end lead time?",
`**Answer:** Map the value stream, remove waiting and batching, shorten supplier lead times, speed order processing, and position inventory closer to customers.

Tip: VSM thinking.`, 'D'],

["Collaboration", "How do you collaborate with key customers on supply chain?",
`**Answer:** Share forecasts and data (CPFR, VMI), joint planning for promotions, regular business reviews, and agreed KPIs.

Tip: Partnership examples.`, 'D'],

["Compliance", "What compliance areas does a supply chain director oversee?",
`**Answer:** Trade compliance (customs, export controls), transportation regulations, product safety and traceability, supplier ethics and conflict minerals, and environmental rules.

Tip: Breadth.`, 'D'],

["Culture", "How do you build a culture of continuous improvement in supply chain?",
`**Answer:** Visible KPIs, daily/weekly reviews, problem-solving training, celebrating improvements, and leaders engaging at the gemba.

Tip: Lead by example.`, 'B'],

["Career", "Why are you ready for a supply chain director role?",
`**Sample answer:** "I've led planning, procurement and logistics teams, implemented S&OP, and delivered both service and inventory improvements. I'm ready to own end-to-end performance."

Tip: Proof.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver balanced results — I cut inventory by $14M while raising OTIF to 95%, built resilient sourcing through disruptions, and developed strong teams."

Tip: Numbers.`, 'B'],

["Planning", "What is the difference between strategic, tactical and operational planning?",
`**Answer:** **Strategic** (years): network, capacity, sourcing strategy. **Tactical** (months): S&OP, inventory targets, procurement plans. **Operational** (days/weeks): scheduling, replenishment, shipping.

Tip: Horizon clarity.`, 'B'],

["Inventory", "What is multi-echelon inventory optimization?",
`**Answer:** Optimizing inventory levels across all stages of the network together (plants, DCs, stores) rather than each location separately, to achieve service targets with minimum total inventory.

Tip: Advanced concept.`, 'D'],

["Customer Service", "What is the difference between OTIF and fill rate?",
`**Answer:** **Fill rate** measures quantity shipped vs ordered. **OTIF** requires orders to be both complete and on time (per customer requested date). OTIF is stricter and customer-focused.

Tip: Definitions matter in customer contracts.`, 'B'],

["Bullwhip", "How do you reduce the bullwhip effect?",
`**Answer:** Share demand data upstream, reduce order batching, stabilize pricing and promotions, shorten lead times, and collaborate with partners.

Tip: Classic concept.`, 'D'],

["Interview", "What would you ask the COO in this interview?",
`**Answer:** "What are the biggest supply chain pain points today?", "How mature is S&OP?", "What investments are planned?", "How is supply chain success measured?"

Tip: Diagnostic questions.`, 'B'],

["Network", "What factors decide where to place a distribution center?",
`**Answer:** Customer locations and delivery time requirements, transportation costs, labor availability and cost, real estate, taxes and incentives, infrastructure and risk.

Tip: Multi-factor analysis.`, 'D'],

["Metrics", "How do you set inventory targets?",
`**Answer:** Based on service level targets, demand variability, lead times and segment strategy; expressed as days of supply or dollars by category; reviewed in S&OP.

Tip: Data-driven targets.`, 'D']
];
