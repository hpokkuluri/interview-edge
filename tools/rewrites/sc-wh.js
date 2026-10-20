// Rewritten Supply Chain — Warehouse / Distribution Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-wh-).
module.exports = {

'How do you run an efficient receiving dock?':
`**Why they ask:** receiving sets up everything after it.

**Answer:**
"Dock appointment scheduling so trucks don't all arrive at once, advance shipping notices so we can pre-receive, label scanning, quick handling of discrepancies, cross-docking where possible, and same-day putaway. I track dock-to-stock time. At my last site, ASNs plus scheduled appointments cut dock-to-stock from 36 hours to 12."

Tip: Numbers make it concrete.`,

'What makes a good putaway strategy?':
`**Why they ask:** putaway drives picking efficiency.

**Answer:**
"System-directed putaway based on item velocity, size, weight and compatibility. Fast movers go near shipping and at waist height — the golden zone. Heavy items go low, hazardous items are segregated, and I choose fixed or random locations depending on the SKU profile. It all depends on good slotting."

Tip: Mention slotting.`,

'Compare picking methods.':
`**Why they ask:** method choice drives productivity.

**Answer:**
"Discrete picking is one picker, one order — simple, for low volume. Batch picking is one picker doing many orders at once — good for small orders. Zone picking gives pickers their own area and orders move between zones. Wave picking releases orders in scheduled groups aligned to carrier cut-offs. And there's cluster pick-to-cart and goods-to-person automation. The right one depends on the order profile — lots of one-line e-commerce orders call for batch; big multi-line B2B orders suit zone."

Tip: Match the method to the order profile.`,

'How do you improve picking productivity?':
`**Why they ask:** picking is the biggest labor cost.

**Answer:**
"Slot fast movers close to pack-out, optimize pick paths, use batch or zone picking, RF or voice picking and pick-to-light, and remove walking waste. Travel is often more than half of picking time. I measure units or lines per hour. Re-slotting our top 300 SKUs cut travel 25% and raised lines per hour from 85 to 110."

Tip: Travel is more than half of picking time.`,

'What is slotting and how often do you do it?':
`**Why they ask:** a key efficiency lever.

**Answer:**
"Slotting is assigning items to locations based on velocity, size and pick patterns. I re-slot quarterly or seasonally as demand changes, focusing on the top movers first, using velocity data from the WMS — not gut feel."

Tip: Data-driven slotting.`,

'How do you improve order accuracy?':
`**Why they ask:** errors cost money and customers.

**Answer:**
"Scan-based picking and pack verification, clear location labels, check-weighing at pack stations, tracking errors by picker and root cause, and training with feedback. I target 99.5% or better. Separating look-alike SKUs is one of the cheapest fixes."

Tip: Target 99.5% or higher.`,

'How do you ensure on-time shipping?':
`**Why they ask:** missed trucks mean missed promises.

**Answer:**
"Plan waves to carrier cut-offs, monitor the order backlog throughout the day, staff for peaks, stage shipments early, coordinate carrier pickups, and escalate risks well before cut-off — not after the truck leaves."

Tip: Real-time visibility.`,

'Which warehouse KPIs do you track?':
`**Why they ask:** managing by numbers.

**Answer:**
"Order accuracy, on-time shipment, dock-to-stock time, units or lines per hour, order cycle time, inventory accuracy, cost per order or unit, space utilization, safety incidents — TRIR — and overtime. I review a one-page dashboard every morning in the start-up meeting."

Tip: Mention a dashboard you used daily.`,

'How do you build a safety culture?':
`**Why they ask:** warehouses are high-risk workplaces.

**Answer:**
"Every shift starts with a safety talk, and I lead by example. Near misses are reported without blame. Forklift certification and PPE are enforced, housekeeping stays tight with 5S, incidents are investigated for root cause, and I track leading indicators — near misses and safety observations — not just injuries, which are lagging."

Tip: Leading versus lagging indicators.`,

'What are common warehouse hazards?':
`**Why they ask:** safety awareness.

**Answer:**
"Forklift and pedestrian collisions, falling objects from racks, slips and trips, manual lifting injuries, dock accidents like trailer creep, and hazardous materials. The controls are separate traffic lanes, rack inspections, training, proper lifting technique, wheel chocks and dock locks — all in line with OSHA requirements."

Tip: Mention OSHA requirements.`,

'An employee is injured. What do you do?':
`**Why they ask:** people first.

**Answer:**
"First, make sure the person gets immediate care and the area is safe. Report it per policy and OSHA requirements. Investigate the root cause with witnesses, implement corrective actions, and share the learning with the whole team so it doesn't happen again."

Tip: People first, then learn.`,

'How do you plan labor for peak season?':
`**Why they ask:** peak planning is critical.

**Answer:**
"I forecast volume by day and convert it to hours using productivity standards. For example, 50,000 units a day at 100 units per hour is 500 labor hours — about 63 people on eight-hour shifts. Then plan temps and overtime, cross-train, onboard and train early, and adjust daily based on actual volume."

Tip: Show the calculation.`,

'What are engineered labor standards?':
`**Why they ask:** fair productivity measurement.

**Answer:**
"They're time standards for each task, built from time studies or predetermined data like MOST. They measure productivity fairly — accounting for travel distance and item size — and help plan labor. They're usually part of a labor management system. I use them for coaching, not just discipline."

Tip: Mention fairness and coaching.`,

'How do you handle an underperforming team member?':
`**Why they ask:** fair management.

**Answer:**
"I review the data privately with them and find the cause — training, tools or something personal. We set clear expectations and support, I follow up regularly and document progress. If it doesn't improve, I follow the HR process."

Tip: Fair and consistent.`,

'How do you motivate warehouse employees?':
`**Why they ask:** engagement and retention.

**Answer:**
"Clear goals and visible performance boards, recognition, fair scheduling, involving them in improvements, career paths — lead, trainer, supervisor — and listening to their concerns. Retention is a big issue in warehousing, so this matters a lot."

Tip: Retention is a big issue.`,

'How do you reduce turnover in the warehouse?':
`**Why they ask:** turnover is expensive.

**Answer:**
"Good onboarding and training, competitive pay and shift options, respectful supervisors, safe conditions, recognition and growth opportunities. I track early turnover — the first 90 days — because that's where most people leave, and it's usually about their supervisor."

Tip: Supervisor quality drives retention.`,

'What does a WMS do?':
`**Why they ask:** core technology.

**Answer:**
"A warehouse management system directs receiving, putaway, replenishment, picking, packing and shipping; tracks inventory by location; manages waves and tasks; integrates with ERP, TMS and automation; and provides labor and productivity data. Examples are Manhattan, Blue Yonder, Oracle WMS Cloud and SAP EWM."

Tip: Name the one you've used.`,

'How would you prepare for a WMS implementation?':
`**Why they ask:** go-lives are risky.

**Answer:**
"Clean the item and location data, define processes and requirements, involve floor leads, test end-to-end scenarios at real volume, train super users, plan a cutover with reduced volume, and provide hypercare support for the first weeks."

Tip: Data and training are key.`,

'When does warehouse automation make sense?':
`**Why they ask:** capital judgment.

**Answer:**
"When volume is high and stable, labor is scarce or expensive, accuracy and speed need to improve, and payback is acceptable — usually two to five years. Options include conveyors and sorters, AMRs, AS/RS, goods-to-person systems and pick-to-light. Business case first, technology second."

Tip: Business case first.`,

'How do you improve space utilization?':
`**Why they ask:** space is expensive.

**Answer:**
"Re-slot and right-size locations, use vertical space, clear obsolete stock, adjust rack configurations, and consider narrow aisles or mezzanines before leasing more space. I measure cube utilization to find the waste."

Tip: Use data on cube utilization.`,

'How do you maintain inventory accuracy in the warehouse?':
`**Why they ask:** accuracy is a warehouse responsibility.

**Answer:**
"Scanning discipline, cycle counts, location control, prompt transactions, root-cause analysis of variances, and accountability by zone. If the warehouse doesn't own accuracy, nobody does."

Tip: Accuracy is a warehouse responsibility.`,

'How do you manage returns efficiently?':
`**Why they ask:** returns tie up cash.

**Answer:**
"A dedicated returns area, RMA validation, quick inspection and disposition — restock, refurbish, liquidate or scrap — and prompt system updates and credit processing. Returns sitting in a corner for weeks tie up cash and frustrate customers."

Tip: Returns tie up cash if slow.`,

'What is cross-docking?':
`**Why they ask:** a flow technique.

**Answer:**
"It's moving inbound goods straight to outbound shipping with little or no storage. It cuts handling and storage cost, but needs tight coordination and good data. It works best for fast-moving or pre-allocated goods."

Tip: Good for fast-moving or pre-allocated goods.`,

'How do you reduce warehouse operating costs?':
`**Why they ask:** cost ownership.

**Answer:**
"Improve productivity through slotting, methods and technology; cut overtime with better planning; reduce errors and rework; optimize space; manage packaging costs; and renegotiate service contracts. I watch the cost per order trend."

Tip: Track the cost per order trend.`,

'What is 5S in the warehouse?':
`**Why they ask:** a basic discipline.

**Answer:**
"Sort, Set in order, Shine, Standardize and Sustain — creating clean, organized, safe work areas that reduce searching and errors. Sustaining it takes regular audits with scores posted."

Tip: Mention audits to sustain it.`,

'How do you apply Lean in the warehouse?':
`**Why they ask:** continuous improvement.

**Answer:**
"Identify waste — travel, waiting, overprocessing, errors — map the processes, standardize work, use visual management, and run kaizen events with the team. A packing kaizen once cut steps per order from 14 to 9 and raised pack rates 20%."

Tip: Give a kaizen result.`,

'How do you prepare for peak season?':
`**Why they ask:** peak is make-or-break.

**Answer:**
"Forecast volumes early, secure labor and equipment, pre-slot seasonal items, test systems at peak volume, extend shifts, coordinate with carriers, and run a daily peak war room. Planning starts months ahead, not weeks."

Tip: Plan months ahead.`,

'How do you work with carriers at the dock?':
`**Why they ask:** dock partnership.

**Answer:**
"Scheduled pickups, loads staged before the truck arrives, accurate documentation — bills of lading and labels — monitoring carrier on-time performance, and escalating service issues to transportation. A quick turn at our dock makes us a shipper carriers want to serve."

Tip: Partnership with transportation.`,

'What do you need for hazardous materials?':
`**Why they ask:** compliance awareness.

**Answer:**
"Proper storage segregation, labeling, safety data sheets available, trained employees, spill kits, and compliance with OSHA, EPA and DOT shipping rules."

Tip: Compliance awareness.`,

'How do you manage a third-party logistics provider?':
`**Why they ask:** outsourced operations.

**Answer:**
"A clear contract and SLAs — accuracy, on-time and dock-to-stock — regular business reviews, KPI reporting, audits and joint improvement plans. Trust but verify."

Tip: Trust but verify.`,

'How do you manage a warehouse budget?':
`**Why they ask:** financial ownership.

**Answer:**
"I plan labor, equipment, supplies and facility costs against forecast volume, track cost per unit, explain variances, and keep looking for savings."

Tip: Financial ownership.`,

'Volume doubles overnight due to a promotion. What do you do?':
`**Why they ask:** calm under surge.

**Answer:**
"Extend shifts and add temps, prioritize orders by service commitments, simplify processes — switching to batch picking for small orders — communicate with customer service and carriers, and monitor the backlog hourly. And afterward, push for earlier notice next time."

Tip: A calm, structured response.`,

'Shipping errors spiked this month. How do you fix it?':
`**Why they ask:** data-driven root cause.

**Answer:**
"I analyze errors by type, shift, picker and SKU, and find the causes — new staff, look-alike SKUs next to each other, or scanning being skipped. Then retrain, re-slot and enforce scan verification, and track errors daily until they're back down."

Tip: Data-driven root cause.`,

'The WMS goes down during shipping. What do you do?':
`**Why they ask:** business continuity.

**Answer:**
"Activate the downtime procedure — paper or offline picking for priority orders — communicate with IT and customers, keep careful records so we can enter transactions when the system's back, and debrief afterward to improve the procedure."

Tip: Business continuity.`,

'Tell me about a warehouse improvement you led.':
`**Why they ask:** proof.

**Answer:**
"Order accuracy was 98.2%. I introduced scan verification at pack stations and re-slotted look-alike SKUs apart. Accuracy rose to 99.7%, and customer complaints dropped by 60%."

Tip: Numbers.`,

'Tell me about handling a difficult employee situation.':
`**Why they ask:** people leadership.

**Answer:**
"Two team leads were in constant conflict, and it was affecting their shift. I met each one separately, then together, clarified their responsibilities and agreed on behaviors. Productivity recovered within weeks."

Tip: People leadership.`,

'Describe a peak season you managed.':
`**Why they ask:** peak experience.

**Answer:**
"We handled three times normal volume with 40 temps. I started hiring six weeks early, created a two-hour training program, and ran hourly backlog reviews. We hit 99% on-time shipping."

Tip: Planning pays off.`,

'How do you develop supervisors and leads?':
`**Why they ask:** building the bench.

**Answer:**
"Coaching, clear expectations, leadership training, giving them ownership of their area's metrics, and regular feedback. Good supervisors are what keep good employees."

Tip: Build your bench.`,

'How do you run a daily start-up meeting?':
`**Why they ask:** daily management.

**Answer:**
"Safety message, yesterday's results against targets, today's volume and priorities, staffing, issues, and recognition. Ten minutes, standing, at the visual board — same format every day."

Tip: Short and consistent.`,

'What regulations affect warehouses?':
`**Why they ask:** compliance.

**Answer:**
"OSHA safety standards for forklifts and hazards, fire codes, hazmat rules from DOT and EPA, food safety under FDA's FSMA or pharma good distribution practices for regulated goods, and customs rules for bonded warehouses."

Tip: Mention your industry.`,

'What warehouse technologies have you used?':
`**Why they ask:** tool experience.

**Answer:**
"RF scanners with Oracle WMS, voice picking, pick-to-light in one zone, and AMRs in a pilot that improved picking productivity by 30%."

Tip: Be specific — swap in your own.`,

'How would you design a new distribution center layout?':
`**Why they ask:** design thinking.

**Answer:**
"I analyze order profiles and SKU velocities, then plan the flow — receiving, storage, pick, pack, ship — to minimize travel. Size each area by volume, choose storage and handling equipment, plan for growth and future automation, and simulate before building."

Tip: Flow-based design.`,

'Why warehouse management?':
`**Why they ask:** motivation.

**Answer:**
"I enjoy leading teams in a fast-paced environment where results are visible every day. Getting customers their orders right and on time is satisfying."

Tip: Show energy.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I run safe, accurate and productive operations. I lifted accuracy to 99.7%, handled triple-volume peaks at 99% on-time, and reduced turnover by improving how supervisors coach."

Tip: Proof.`,

'What is an ASN?':
`**Why they ask:** receiving basics.

**Answer:**
"An advance shipping notice is an electronic message from the supplier listing what's shipping, quantities and packaging, sent before the truck arrives — EDI 856. It lets us plan labor and receive faster by scanning instead of counting."

Tip: Mention EDI 856.`,

'What is the difference between FIFO and LIFO in physical stock rotation?':
`**Why they ask:** stock rotation.

**Answer:**
"Physically, FIFO ships the oldest stock first — the standard for most goods so nothing ages. LIFO ships the newest first, used only where the layout or product requires it, like bulk materials in a pile. Items with expiry dates use FEFO — first expired, first out. That's the physical meaning, separate from the accounting methods."

Tip: Physical versus accounting meaning.`,

'What is a pick face and replenishment?':
`**Why they ask:** prevents picker waiting.

**Answer:**
"The pick face is the location pickers take items from. Replenishment moves stock from reserve storage to the pick face before it runs empty — triggered by min-max or demand-based rules in the WMS. Done well, pickers never wait for stock."

Tip: It prevents picker waiting.`,

'What is order cycle time?':
`**Why they ask:** a customer-facing metric.

**Answer:**
"It's the time from order release to shipment. Shorter cycle times allow later order cut-offs, which is a real service advantage."

Tip: A key customer-facing metric.`,

'What is a wave plan?':
`**Why they ask:** shipping coordination.

**Answer:**
"It groups orders into waves released together for picking, usually timed to carrier departures or by zone, balancing the workload and making sure shipments are ready by cut-off. Some modern WMS setups use waveless, continuous release instead."

Tip: Align waves to carrier cut-offs.`,

};
