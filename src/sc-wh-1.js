// Warehouse Supervisor / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-wh'] = [
["Operations", "Describe the main warehouse processes.",
`**Why they ask:** baseline operational knowledge.

**Answer:** **Receiving** (unload, check against PO/ASN, label, quality hold) → **putaway** (system-directed to optimal locations) → **storage and replenishment** (moving stock to pick faces) → **picking** (discrete, batch, zone or wave) → **packing** → **shipping** (staging, loading, carrier documentation) → **returns** processing. Plus inventory control (cycle counts) throughout.

Tip: Mention which ones you've managed directly.`, 'B', 'E'],

["Receiving", "How do you run an efficient receiving dock?",
`**Answer:** Dock appointment scheduling, advance shipping notices (ASNs) for pre-receiving, scanning labels, quick discrepancy handling, cross-docking where possible, and same-day putaway. Track dock-to-stock time.

**Example:** ASNs and scheduled appointments cut dock-to-stock from 36 to 12 hours.

Tip: Numbers make it concrete.`, 'B', 'E'],

["Putaway", "What makes a good putaway strategy?",
`**Answer:** System-directed putaway based on item velocity, size, weight and compatibility; fast movers near shipping and at waist-level ("golden zone"); heavy items low; hazardous items segregated; and fixed vs random locations depending on SKU profile.

Tip: Mention slotting.`, 'B', 'M'],

["Picking", "Compare picking methods.",
`**Answer:**
- **Discrete:** one picker, one order — simple, low volume.
- **Batch:** one picker, many orders at once — good for small orders.
- **Zone:** pickers own areas; orders move between zones.
- **Wave:** release orders in scheduled groups aligned to carrier cutoffs.
- **Cluster/pick-to-cart** and **goods-to-person** automation.

Tip: Match method to order profile.`, 'B', 'M'],

["Picking", "How do you improve picking productivity?",
`**Answer:** Slotting fast movers close to pack-out, optimized pick paths, batch or zone picking, RF scanning or voice picking, pick-to-light, and removing walking waste. Measure units/lines per hour.

**Example:** re-slotting top 300 SKUs cut travel time 25% and raised lines per hour from 85 to 110.

Tip: Travel is 50%+ of picking time.`, 'D', 'M'],

["Slotting", "What is slotting and how often do you do it?",
`**Answer:** Assigning items to locations based on velocity, size and pick patterns. Re-slot periodically (quarterly or seasonally) as demand changes, focusing on top movers.

Tip: Data-driven slotting.`, 'D', 'M'],

["Accuracy", "How do you improve order accuracy?",
`**Answer:** Scan-based picking and packing verification, clear location labels, check-weighing at pack stations, error tracking by picker and root cause, training and feedback.

Tip: Target 99.5%+ accuracy.`, 'B', 'E'],

["Shipping", "How do you ensure on-time shipping?",
`**Answer:** Plan waves to carrier cutoffs, monitor order backlog through the day, staff peaks, stage shipments early, coordinate carrier pickups, and escalate risks before cutoffs.

Tip: Real-time visibility.`, 'B', 'E'],

["Metrics", "Which warehouse KPIs do you track?",
`**Answer:** Order accuracy, on-time shipment, dock-to-stock time, units/lines per hour, order cycle time, inventory accuracy, cost per order or unit, space utilization, safety incidents (TRIR), and overtime.

Tip: Mention a dashboard you used daily.`, 'B', 'E'],

["Safety", "How do you build a safety culture?",
`**Answer:** Start every shift with a safety talk, lead by example, encourage near-miss reporting without blame, ensure forklift certification and PPE, maintain housekeeping (5S), investigate incidents for root cause, and track leading indicators (near misses, observations).

Tip: Leading vs lagging indicators.`, 'B', 'E'],

["Safety", "What are common warehouse hazards?",
`**Answer:** Forklift and pedestrian collisions, falling objects from racks, slips and trips, manual lifting injuries, dock accidents (trailer creep), and hazardous materials. Controls: traffic lanes, rack inspections, training, proper lifting, wheel chocks and dock locks.

Tip: Mention OSHA requirements.`, 'B', 'E'],

["Safety", "An employee is injured. What do you do?",
`**Answer:** Ensure immediate care and safety, secure the area, report per policy and OSHA requirements, investigate root cause with witnesses, implement corrective actions, and communicate learnings to the team.

Tip: People first, then learn.`, 'B', 'E'],

["Labor", "How do you plan labor for peak season?",
`**Answer:** Forecast volume by day, convert to hours using productivity standards, plan temp staffing and overtime, cross-train, onboard and train early, and adjust daily based on actual volume.

**Example:** 50,000 units/day ÷ 100 units/hour = 500 labor hours ≈ 63 people on 8-hour shifts.

Tip: Show the calculation.`, 'D', 'M'],

["Labor", "What are engineered labor standards?",
`**Answer:** Time standards for each task based on time studies or predetermined data (e.g. MOST), used to measure productivity fairly and plan labor. Often part of a labor management system (LMS).

Tip: Mention fairness and coaching.`, 'D', 'S'],

["People", "How do you handle an underperforming team member?",
`**Answer:** Review data privately, understand causes (training, tools, personal issues), set clear expectations and support, follow up regularly and document. Follow HR process if no improvement.

Tip: Fair and consistent.`, 'B', 'E'],

["People", "How do you motivate warehouse employees?",
`**Answer:** Clear goals and visible performance boards, recognition, fair scheduling, involving them in improvements, career paths (lead, trainer, supervisor), and listening to concerns.

Tip: Retention is a big issue in warehousing.`, 'B', 'E'],

["People", "How do you reduce turnover in the warehouse?",
`**Answer:** Good onboarding and training, competitive pay and shift options, respectful supervisors, safe conditions, recognition and growth opportunities. Track early turnover (first 90 days).

Tip: Supervisor quality drives retention.`, 'D', 'M'],

["WMS", "What does a WMS do?",
`**Answer:** Directs receiving, putaway, replenishment, picking, packing and shipping; tracks inventory by location; manages waves and tasks; integrates with ERP, TMS and automation; and provides labor and productivity data. Examples: Manhattan, Blue Yonder, Oracle WMS Cloud, SAP EWM.

Tip: Name the one you've used.`, 'B', 'E'],

["WMS", "How would you prepare for a WMS implementation?",
`**Answer:** Clean item and location data, define processes and requirements, involve floor leads, test end-to-end scenarios at volume, train super users, plan a cutover with reduced volume, and provide hypercare support.

Tip: Data and training are key.`, 'D', 'S'],

["Automation", "When does warehouse automation make sense?",
`**Answer:** When volume is high and stable, labor is scarce or expensive, accuracy and speed need to improve, and payback is acceptable (often 2–5 years). Options: conveyors and sorters, AMRs, AS/RS, goods-to-person systems, and pick-to-light.

Tip: Business case first.`, 'D', 'S'],

["Space", "How do you improve space utilization?",
`**Answer:** Re-slot and right-size locations, use vertical space, reduce obsolete stock, adjust rack configurations, and consider narrow aisles or mezzanines.

Tip: Data on cube utilization.`, 'D', 'M'],

["Inventory", "How do you maintain inventory accuracy in the warehouse?",
`**Answer:** Scanning discipline, cycle counts, location control, prompt transactions, root-cause analysis of variances, and accountability by zone.

Tip: Accuracy is a warehouse responsibility.`, 'B', 'E'],

["Returns", "How do you manage returns efficiently?",
`**Answer:** Dedicated returns area, RMA validation, quick inspection and disposition (restock, refurbish, liquidate, scrap), timely system updates and credit processing.

Tip: Returns tie up cash if slow.`, 'B', 'M'],

["Cross-dock", "What is cross-docking?",
`**Answer:** Moving inbound goods directly to outbound shipping with little or no storage. It reduces handling and storage costs but needs tight coordination and good data.

Tip: Good for fast-moving or pre-allocated goods.`, 'B', 'M'],

["Costs", "How do you reduce warehouse operating costs?",
`**Answer:** Improve productivity (slotting, methods, technology), reduce overtime with better planning, cut errors and rework, optimize space, manage packaging costs, and negotiate service contracts.

Tip: Cost per order trend.`, 'D', 'M'],

["5S", "What is 5S in the warehouse?",
`**Answer:** Sort, Set in order, Shine, Standardize, Sustain — creating clean, organized, safe work areas that reduce searching and errors.

Tip: Mention audits to sustain it.`, 'B', 'E'],

["Lean", "How do you apply Lean in the warehouse?",
`**Answer:** Identify waste (travel, waiting, overprocessing, errors), map processes, standardize work, use visual management, and run kaizen events with the team.

Tip: Give a kaizen result.`, 'D', 'M'],

["Peak", "How do you prepare for peak season?",
`**Answer:** Forecast volumes early, secure labor and equipment, pre-slot seasonal items, test systems at volume, extend shifts, coordinate carriers, and run daily peak war rooms.

Tip: Plan months ahead.`, 'D', 'M'],

["Carriers", "How do you work with carriers at the dock?",
`**Answer:** Scheduled pickups, loads staged before arrival, accurate documentation (BOL, labels), monitoring carrier on-time performance, and escalating service issues.

Tip: Partnership with transportation.`, 'B', 'E'],

["Hazmat", "What do you need for hazardous materials?",
`**Answer:** Proper storage segregation, labeling, SDS availability, trained employees, spill kits, and compliance with OSHA, EPA and DOT shipping rules.

Tip: Compliance awareness.`, 'D', 'M'],

["3PL", "How do you manage a third-party logistics provider?",
`**Answer:** Clear contract and SLAs (accuracy, on-time, dock-to-stock), regular business reviews, KPI reporting, audits, and joint improvement plans.

Tip: Trust but verify.`, 'D', 'S'],

["Budget", "How do you manage a warehouse budget?",
`**Answer:** Plan labor, equipment, supplies and facilities costs against forecast volume; track cost per unit; explain variances; and find savings.

Tip: Financial ownership.`, 'D', 'S'],

["Scenario", "Volume doubles overnight due to a promotion. What do you do?",
`**Answer:** Extend shifts and add temps, prioritize orders by service commitments, simplify processes (batch picking), communicate with customer service and carriers, and monitor backlog hourly.

Tip: Calm, structured response.`, 'D', 'M'],

["Scenario", "Shipping errors spiked this month. How do you fix it?",
`**Answer:** Analyze errors by type, shift, picker and SKU; find root causes (new staff, similar SKUs adjacent, scanning skipped); retrain, re-slot, enforce scan verification; and track daily.

Tip: Data-driven root cause.`, 'D', 'M'],

["Scenario", "The WMS goes down during shipping. What do you do?",
`**Answer:** Activate the downtime procedure (paper or offline picking for priority orders), communicate with IT and customers, keep records for later system entry, and debrief afterward.

Tip: Business continuity.`, 'D', 'M'],

["Behavioral", "Tell me about a warehouse improvement you led.",
`**Sample answer:** "Order accuracy was 98.2%. I introduced pack-station scan verification and re-slotted look-alike SKUs apart. Accuracy rose to 99.7%, and customer complaints dropped by 60%."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "Tell me about handling a difficult employee situation.",
`**Sample answer:** "Two team leads were in constant conflict, affecting the shift. I met each separately, then together, clarified responsibilities and agreed behaviors. Productivity recovered within weeks."

Tip: People leadership.`, 'B', 'E'],

["Behavioral", "Describe a peak season you managed.",
`**Sample answer:** "We handled 3× normal volume with 40 temps. I started hiring six weeks early, created a two-hour training program, and ran hourly backlog reviews. We hit 99% on-time shipping."

Tip: Planning pays off.`, 'B', 'M'],

["Leadership", "How do you develop supervisors and leads?",
`**Answer:** Coaching, clear expectations, leadership training, giving them ownership of metrics, and regular feedback.

Tip: Build your bench.`, 'B', 'S'],

["Leadership", "How do you run a daily start-up meeting?",
`**Answer:** Safety message, yesterday's results vs targets, today's volume and priorities, staffing, issues and recognition — 10 minutes, standing, with visual boards.

Tip: Short and consistent.`, 'B', 'E'],

["Compliance", "What regulations affect warehouses?",
`**Answer:** OSHA safety standards (forklifts, hazards), fire codes, hazmat (DOT, EPA), food safety (FDA/FSMA) or pharma (GDP) for regulated goods, and customs bonded warehouse rules.

Tip: Mention your industry.`, 'D', 'M'],

["Technology", "What warehouse technologies have you used?",
`**Sample answer:** "RF scanners and Oracle WMS, voice picking, pick-to-light in one zone, and AMRs in a pilot that improved picking productivity by 30%."

Tip: Be specific.`, 'B', 'M'],

["Strategy", "How would you design a new distribution center layout?",
`**Answer:** Analyze order profiles and SKU velocities, plan flow (receiving → storage → pick → pack → ship) to minimize travel, size areas by volume, choose storage and handling equipment, plan for growth and automation, and simulate before building.

Tip: Flow-based design.`, 'D', 'S'],

["Career", "Why warehouse management?",
`**Sample answer:** "I enjoy leading teams in a fast-paced environment where results are visible every day. Getting customers their orders right and on time is satisfying."

Tip: Energy.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I run safe, accurate and productive operations — I lifted accuracy to 99.7%, handled 3× peaks at 99% on-time, and reduced turnover by improving supervisor coaching."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is an ASN?",
`**Answer:** An advance shipping notice — an electronic message from the supplier listing what's being shipped, quantities and packaging, sent before arrival. Enables faster receiving and planning.

Tip: EDI 856.`, 'B', 'E'],

["Technical", "What is the difference between FIFO and LIFO in physical stock rotation?",
`**Answer:** FIFO ships oldest stock first — standard for most goods to avoid aging. LIFO ships newest first — used only where physical layout or product nature requires (e.g. bulk materials). Expiry-driven items use FEFO.

Tip: Physical vs accounting meaning.`, 'B', 'E'],

["Technical", "What is a pick face and replenishment?",
`**Answer:** The location where pickers take items. Replenishment moves stock from reserve storage to pick faces before they run empty — triggered by min/max or demand-based rules in the WMS.

Tip: Prevents picker waiting.`, 'B', 'M'],

["Technical", "What is order cycle time?",
`**Answer:** Time from order release to shipment. Shorter cycle times enable later cutoffs and better customer service.

Tip: Key customer-facing metric.`, 'B', 'E']
];
