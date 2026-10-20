// Rewritten Supply Chain — Inventory Control (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-inv-).
module.exports = {

'How do you measure inventory accuracy?':
`**Why they ask:** accuracy is the core KPI of the role.

**Answer:**
"I count samples and compare them to system records. Location accuracy is the percentage of locations where item and quantity match within tolerance — if 485 of 500 locations are right, that's 97%. Value accuracy is the absolute dollar variance divided by total dollars counted. Tolerances depend on item class — zero for A items, maybe plus or minus 2% for C items. I report location accuracy to operations, because it drives picking, and value accuracy to finance."

Tip: Say which measure you report and why.`,

'How do you improve inventory accuracy?':
`**Why they ask:** fixing causes, not symptoms.

**Answer:**
"I root-cause every significant variance — receiving errors, wrong picks, unrecorded scrap, transactions not entered, unit-of-measure errors. Then fix the process and training gaps, enforce scanning, organize locations clearly, require approvals for adjustments, and use cycle counting to catch problems early. Adjusting the number without finding the cause just means it breaks again next week."

Tip: Root cause, not just correction.`,

'How do you design a cycle count program?':
`**Why they ask:** a core program you'd own.

**Answer:**
"I classify items ABC by value or usage. A items are counted monthly or more, B quarterly, C twice a year. I add trigger counts — zero or negative balances, pick discrepancies, and after adjustments. Counts are blind, variances above tolerance get recounted, and we investigate before adjusting. For scale: 1,000 A items counted monthly is about 50 counts per working day, plus the B and C items."

Tip: Calculating daily count volume shows practicality.`,

'What is a blind count and why use it?':
`**Why they ask:** a basic counting control.

**Answer:**
"In a blind count the counter doesn't see the system quantity, so they count what's physically there instead of just confirming the number they expect. It gives more honest results."

Tip: Quick and clear.`,

'How do cycle counts help avoid a full physical inventory?':
`**Why they ask:** a big cost saving.

**Answer:**
"If cycle counting is effective and accuracy stays consistently high, auditors may accept it in place of a wall-to-wall count — saving a shutdown. To get there, you need documented procedures, coverage of every item during the year, good accuracy results, and controls over adjustments."

Tip: Mention auditor acceptance criteria.`,

'How do you run a wall-to-wall physical inventory?':
`**Why they ask:** a high-stakes event.

**Answer:**
"I plan the cut-off and timing, freeze transactions or manage in-transit items, prepare tags and teams of counters and checkers, and train everyone. We count, recount variances, reconcile to the system, investigate large differences, approve adjustments with finance, and document it all for the auditors. Cut-off is where most errors happen — receipts and shipments on count day have to be handled exactly."

Tip: Mention cut-off of receipts and shipments.`,

'You find a large inventory variance. How do you investigate?':
`**Why they ask:** systematic problem solving.

**Answer:**
"First I recount to confirm it's real. Then review the transaction history — receipts, issues, transfers and adjustments. I check nearby locations and similar items for misplacement, check unit-of-measure conversions, and look for open transactions not yet processed, like in-transit or pending receipts. I talk to the people involved. Then correct it and fix the root cause."

Tip: Show a systematic approach.`,

'What controls should exist over inventory adjustments?':
`**Why they ask:** adjustments can hide theft or errors.

**Answer:**
"Reason codes on every adjustment, approval thresholds by value, separation between the people counting and the people approving, finance review of adjustments, and reporting of adjustment trends by reason and by user. For public companies, these are SOX controls."

Tip: Mention SOX relevance.`,

'What inventory costing methods exist?':
`**Why they ask:** accounting awareness.

**Answer:**
"FIFO — first in, first out; weighted average; standard cost with variances to actual; specific identification; and LIFO, which is allowed under US GAAP but not IFRS. Whatever the method, inventory has to be carried at the lower of cost and net realizable value. My last company used standard cost."

Tip: Mention which method your company used.`,

'What is standard costing and how are variances handled?':
`**Why they ask:** common in manufacturing.

**Answer:**
"Items are valued at a predetermined standard cost. Differences from actual go to variance accounts — purchase price variance, material usage, labor and overhead variances. Standards are usually updated once a year. Inventory control matters because usage variances often come from unrecorded scrap or inaccurate counts."

Tip: Show finance partnership.`,

'How do you manage excess and obsolete inventory?':
`**Why they ask:** E&O ties up cash.

**Answer:**
"I identify it with rules — no movement in 12 months, more than 24 months of coverage, or discontinued items. Then review it with planning, sales and finance and take action: return to vendor, rework, transfer to another site, sell at a discount, donate, or scrap. Reserves are set per policy. And I work on prevention — better planning and an end-of-life check on engineering changes."

Tip: Prevention plus disposition.`,

'How is an obsolescence reserve calculated?':
`**Why they ask:** a key estimate.

**Answer:**
"By policy. For example, reserve 25% of value for items with 12 to 18 months of coverage, 50% for 18 to 24 months, and 100% for items with no usage in 24 months — plus specific reserves for discontinued items. It's reviewed quarterly with finance and the auditors."

Tip: A policy-based approach.`,

'Which inventory KPIs do you track?':
`**Why they ask:** managing by numbers.

**Answer:**
"Inventory accuracy, turns, days on hand, excess and obsolete percentage, shrink, fill rate or stockouts, adjustment value, aging, and carrying cost. In my last role, accuracy went from 86% to 98.5% and E&O fell by a third."

Tip: Mention your actual results.`,

'How do you calculate inventory turns?':
`**Why they ask:** a basic metric.

**Answer:**
"Turns are annual cost of goods sold divided by average inventory value. Days on hand is 365 divided by turns. With $30 million of COGS and $5 million of average inventory, that's 6 turns — about 61 days on hand."

Tip: Quick math.`,

'What is inventory carrying cost?':
`**Why they ask:** justifies reductions.

**Answer:**
"It's the annual cost of holding inventory, typically 20 to 30% of its value — cost of capital, storage, insurance, taxes, handling, shrink and obsolescence. So $5 million of inventory at 25% costs about $1.25 million a year to hold. That's how I justify reduction projects."

Tip: Use it to justify reductions.`,

'What causes shrinkage and how do you reduce it?':
`**Why they ask:** shrink is lost money.

**Answer:**
"Theft, damage, receiving errors, unrecorded scrap and transaction errors. I reduce it with access control, CCTV, receiving checks, recording scrap on time, cycle counts, audits and a culture of accountability. Analyzing shrink by area and shift usually shows where to focus."

Tip: Mention data analysis by area.`,

'How do you perform ABC analysis?':
`**Why they ask:** prioritization.

**Answer:**
"I rank items by annual usage value — units times cost. Typically A items are the top 80% of value from about 20% of items, B the next 15%, and C the last 5%. I use it to set count frequency, planning attention and storage locations — A items closest to the pick face."

Tip: It's the Pareto principle.`,

'How does location management affect accuracy?':
`**Why they ask:** organization drives accuracy.

**Answer:**
"Clear, labeled locations, one item per location where possible, system-directed putaway, and disciplined location transfers all reduce misplacement and picking errors. If people can put stock anywhere, the system never knows where it is."

Tip: Organization drives accuracy.`,

'What receiving controls protect inventory accuracy?':
`**Why they ask:** errors start at receiving.

**Answer:**
"Check items and quantities against the PO and packing slip, scan labels, record discrepancies immediately, inspect quality where required, and receive in the system promptly, before putaway. A receiving error flows into every count and every MRP run after it."

Tip: Errors start at receiving.`,

'How do unit-of-measure issues cause problems?':
`**Why they ask:** a common hidden cause.

**Answer:**
"We might buy in cases, store in eaches and issue in boxes. If the conversion in the item master is wrong — say a case is set to 10 when it's really 12 — every receipt creates a quantity error. I keep UOM conversions accurate, audit them, and train staff on them."

Tip: A common hidden cause.`,

'Which systems have you used for inventory control?':
`**Why they ask:** tool familiarity.

**Answer:**
"Oracle Fusion Inventory for cycle counts, transactions and adjustments; Oracle WMS for directed tasks; and Power BI dashboards for accuracy and aging."

Tip: Name tasks — swap in your own systems.`,

'How are cycle counts set up in Oracle Inventory?':
`**Why they ask:** hands-on Oracle detail.

**Answer:**
"You define a cycle count with ABC classes or count frequencies, tolerances, approval rules and recount settings. Then schedule the counts, generate count sequences, enter results, recount and approve adjustments, and review the accuracy reports. Approval tolerances decide which variances post automatically and which wait for a supervisor."

Tip: Hands-on detail impresses.`,

'Why use lot and serial control?':
`**Why they ask:** traceability.

**Answer:**
"For traceability — recalls, expiry, quality issues and warranty. Lot control tracks batches; serial control tracks individual units. It's required in industries like pharma, food and medical devices. For expiring lots, we pick FEFO — first expired, first out."

Tip: Mention FEFO for expiring lots.`,

'What is FEFO?':
`**Why they ask:** a basic picking rule.

**Answer:**
"First expired, first out — picking items with the earliest expiry date first. It's essential for perishables and pharmaceuticals."

Tip: Short and clear.`,

'What is consignment inventory and how is it controlled?':
`**Why they ask:** ownership distinction.

**Answer:**
"It's inventory owned by the supplier but stored at our site until we use it — we pay when we consume it. It has to be tracked separately from our own stock, counted regularly, and consumption reconciled with the supplier."

Tip: The ownership distinction.`,

'How do you handle in-transit inventory?':
`**Why they ask:** cut-off accuracy.

**Answer:**
"I track ownership based on shipping terms, record in-transit balances between sites, and reconcile shipments to receipts so stock isn't lost or counted twice. Cut-off matters especially at month-end."

Tip: Cut-off matters at month-end.`,

'How do you work with finance on inventory?':
`**Why they ask:** accounting awareness.

**Answer:**
"I reconcile the inventory subledger to the GL, support month-end and audits, explain adjustments and variances, agree reserves, and report inventory value trends."

Tip: Accounting awareness.`,

'What do auditors look at in inventory?':
`**Why they ask:** audit readiness.

**Answer:**
"Count observations, cut-off, valuation and costing, the reserve method, adjustment controls, and the reconciliation between subledger and GL."

Tip: Be audit-ready.`,

'How would you reduce inventory by 15%?':
`**Why they ask:** a common goal.

**Answer:**
"I'd analyze by category and aging, dispose of excess and obsolete, adjust safety stock and reorder points, reduce lot sizes and MOQs, improve forecast accuracy, and stop over-ordering. And track service levels weekly so we don't hurt customers."

Tip: Multiple levers.`,

'How can technology improve inventory control?':
`**Why they ask:** modern tools.

**Answer:**
"Barcode and RFID scanning, WMS-directed tasks, mobile counting apps, real-time dashboards, and analytics that predict variances or obsolescence. RFID makes sense for high-value or high-volume items."

Tip: RFID for high-value or high-volume items.`,

'When does RFID make sense?':
`**Why they ask:** business case thinking.

**Answer:**
"For high-volume or high-value items, returnable containers, apparel and retail, or wherever very fast counts are needed. The cost per tag and the reader infrastructure have to be justified — tagging a $2 item rarely pays off."

Tip: Business case thinking.`,

'How do you prevent negative inventory?':
`**Why they ask:** negative stock signals process problems.

**Answer:**
"System settings that block negative balances, transactions done on time — receive before you issue — correct backflush settings in manufacturing, and an investigation of every occurrence."

Tip: Negative stock signals process issues.`,

'What is backflushing and how does it affect accuracy?':
`**Why they ask:** manufacturing-specific risk.

**Answer:**
"Backflushing automatically issues components when production is reported, based on the bill of materials. If the BOM, scrap or actual usage differs from reality, inventory goes wrong silently. So regular counts and BOM accuracy are critical for backflushed items."

Tip: Manufacturing-specific detail.`,

'Tell me about improving inventory accuracy significantly.':
`**Why they ask:** proof of impact.

**Answer:**
"Accuracy was 86%. I analyzed the variances and found most came from unit-of-measure errors and late receiving. We fixed 140 UOM conversions, required same-day receiving, and started daily ABC cycle counts. Accuracy reached 98.5% in six months."

Tip: Root cause, actions, result.`,

'Tell me about reducing obsolete inventory.':
`**Why they ask:** cash recovery.

**Answer:**
"We had $1.8 million of slow-moving stock. I reviewed it with sales and engineering, returned $400,000 to suppliers, reworked $300,000 into current products, sold $500,000 at a discount, and scrapped the rest. Then I added an end-of-life review before engineering changes, so it doesn't build up again."

Tip: Recovery plus prevention.`,

'How do you handle pushback from warehouse staff on counting?':
`**Why they ask:** engagement.

**Answer:**
"I explain why accuracy matters to them — less time searching, fewer shortages and less overtime. I schedule counts around peaks, keep it simple, and share results and recognition when accuracy improves."

Tip: Engagement.`,

'How would you set up an inventory control function?':
`**Why they ask:** structure.

**Answer:**
"Policies for counting, adjustments and reserves; ABC classification; a cycle count program; KPIs and dashboards; training; and regular reviews with operations and finance."

Tip: A structured approach.`,

'How do you build accountability for inventory accuracy?':
`**Why they ask:** visibility drives behavior.

**Answer:**
"I assign location or zone ownership, report accuracy by area and shift, review variances in daily meetings, and recognize improvements publicly. When a zone owner sees their number every morning, it gets better."

Tip: Visibility drives behavior.`,

'How does inventory control support planning?':
`**Why they ask:** linking to business outcomes.

**Answer:**
"Accurate on-hand balances make MRP and replenishment reliable. Inaccurate records cause false shortages — expediting stock we already have — or excess orders. Planning is only as good as the inventory record."

Tip: Link to business outcomes.`,

'Should inventory control manage safety stock?':
`**Why they ask:** clear roles.

**Answer:**
"Usually planning owns the safety stock settings. Inventory control provides the data and flags excess or shortages. Working together keeps the parameters realistic."

Tip: Clear roles.`,

'How do you handle customer returns in inventory?':
`**Why they ask:** reverse logistics control.

**Answer:**
"Returns are received against an RMA, inspected and given a disposition — restock, rework, scrap or return to vendor — with the transaction recorded accurately, so returned items don't distort balances or go back on the shelf damaged."

Tip: Reverse logistics control.`,

'How do you control scrap?':
`**Why they ask:** unrecorded scrap kills accuracy.

**Answer:**
"Record scrap promptly with a reason code, require approval above thresholds, analyze trends, and work with production and quality to reduce it. Unrecorded scrap is one of the biggest causes of inaccurate inventory."

Tip: Unrecorded scrap is a major accuracy issue.`,

'Why inventory control?':
`**Why they ask:** motivation.

**Answer:**
"Inventory is often the biggest asset on the balance sheet, and its accuracy affects customers, production and finance. I like finding root causes and fixing processes so the numbers can be trusted."

Tip: Business impact.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I raised inventory accuracy from 86% to 98.5%, cleared $1.8 million of obsolete stock, and built a cycle count program the auditors accepted. And I work well with warehouse, planning and finance."

Tip: Proof.`,

'What is the difference between periodic and perpetual inventory systems?':
`**Why they ask:** a basic concept.

**Answer:**
"In a perpetual system, records update with every transaction in real time — that's how ERPs work. In a periodic system, inventory is determined by a physical count at period end, and cost of goods sold is calculated as beginning inventory plus purchases minus ending inventory."

Tip: Simple and clear.`,

'What is safety stock vs cycle stock vs anticipation stock?':
`**Why they ask:** inventory types.

**Answer:**
"Cycle stock comes from regular replenishment and is used up between orders. Safety stock is the buffer for variability in demand and supply. Anticipation stock is built ahead of known peaks or shutdowns. And there's pipeline stock — inventory in transit."

Tip: Know the inventory types.`,

'What is dead stock?':
`**Why they ask:** a quick definition.

**Answer:**
"Inventory with no movement for a long period — often 12 months or more — and little chance of future use. It's a candidate for disposal and a full reserve."

Tip: Quick definition.`,

'How do you reconcile the inventory subledger to the general ledger?':
`**Why they ask:** finance collaboration.

**Answer:**
"I compare the inventory valuation report totals to the GL inventory accounts and investigate differences — unaccounted transactions, manual journals, cost updates or in-transit timing — and resolve them before close."

Tip: Finance collaboration.`,

'What is a tolerance in cycle counting?':
`**Why they ask:** practical setup detail.

**Answer:**
"It's the acceptable variance before a recount or approval is required — tight for A items, say zero to 1%, and looser for C items, say 5%. It focuses effort on the variances that matter."

Tip: Practical setup detail.`,

};
