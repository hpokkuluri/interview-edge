// Inventory Control Analyst / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-inv'] = [
["Role", "What does an inventory control analyst do?",
`**Why they ask:** confirms scope.

**Answer:** Ensures inventory records are accurate and inventory is at the right level: runs cycle counts and physical inventories, investigates variances and adjustments, monitors KPIs (accuracy, turns, aging), manages excess and obsolete stock with finance, maintains item and location data, and improves processes and controls so the system matches reality.

Tip: Mention the link between accuracy and MRP/customer service.`, 'B', 'E'],

["Accuracy", "How do you measure inventory accuracy?",
`**Answer:** Count samples and compare to system records. **Location accuracy:** % of locations where item and quantity match within tolerance. **Value accuracy:** absolute $ variance ÷ total $ counted. Use tolerances by item class (e.g. 0% for A items, ±2% for C items).

**Example:** 485 of 500 locations correct → 97% accuracy.

Tip: Say which measure you report and why.`, 'B', 'E'],

["Accuracy", "How do you improve inventory accuracy?",
`**Answer:** Root-cause every significant variance (receiving errors, wrong picks, unrecorded scrap, transactions not entered, unit-of-measure errors), fix process and training gaps, enforce scanning, organize locations clearly, control adjustments with approvals, and use cycle counting to catch issues early.

Tip: Root cause, not just correction.`, 'B', 'E'],

["Cycle Counting", "How do you design a cycle count program?",
`**Answer:** Classify items **ABC** by value or usage: count A items monthly (or more), B quarterly, C semiannually. Add trigger counts — zero or negative balances, pick discrepancies, after adjustments. Count without showing system quantity (blind counts), recount variances above tolerance, and investigate before adjusting.

**Example:** 1,000 A items monthly = ~50 counts per working day.

Tip: Calculate daily count volume — shows practicality.`, 'B', 'E'],

["Cycle Counting", "What is a blind count and why use it?",
`**Answer:** The counter doesn't see the system quantity, so they count what's actually there instead of confirming the expected number. It gives more honest results.

Tip: Quick and clear.`, 'B', 'E'],

["Cycle Counting", "How do cycle counts help avoid a full physical inventory?",
`**Answer:** If cycle counting is effective and accuracy is consistently high, auditors may accept it instead of a wall-to-wall count, saving downtime. It needs documented procedures, coverage of all items over the year, and controls over adjustments.

Tip: Mention auditor acceptance criteria.`, 'D', 'M'],

["Physical Inventory", "How do you run a wall-to-wall physical inventory?",
`**Answer:** Plan cut-off and timing, freeze transactions or manage in-transit items, prepare tags and teams (counters and checkers), train staff, count and recount variances, reconcile to the system, investigate large differences, approve adjustments with finance, and document for auditors.

Tip: Mention cut-off of receipts and shipments.`, 'B', 'M'],

["Variances", "You find a large inventory variance. How do you investigate?",
`**Answer:** Recount to confirm; review transaction history (receipts, issues, transfers, adjustments); check nearby locations and similar items for misplacement; check unit-of-measure conversions; look at open transactions not yet processed (in-transit, pending receipts); interview staff; then correct and fix the root cause.

Tip: Systematic approach.`, 'B', 'M'],

["Adjustments", "What controls should exist over inventory adjustments?",
`**Answer:** Reason codes, approval thresholds by value, segregation between counters and approvers, review of adjustments by finance, and reporting of adjustment trends by reason and user.

Tip: SOX relevance.`, 'D', 'M'],

["Valuation", "What inventory costing methods exist?",
`**Answer:** FIFO (first in, first out), weighted average, standard cost (with variances to actual), specific identification, and LIFO (US GAAP only, not IFRS). Inventory must be carried at the lower of cost and net realizable value.

Tip: Mention which method your company used.`, 'B', 'M'],

["Valuation", "What is standard costing and how are variances handled?",
`**Answer:** Items are valued at predetermined standard costs. Differences from actual go to variance accounts — purchase price variance, material usage, labor and overhead variances. Standards are updated periodically (often annually).

Tip: Finance partnership.`, 'D', 'M'],

["E&O", "How do you manage excess and obsolete inventory?",
`**Answer:** Identify using rules (no movement for 12 months, coverage over 24 months, discontinued items), review with planning, sales and finance, take actions (return to vendor, rework, transfer, discount sale, donate, scrap), set reserves per policy, and prevent through better planning and engineering change control.

Tip: Prevention plus disposition.`, 'D', 'M'],

["E&O", "How is an obsolescence reserve calculated?",
`**Answer:** By policy: e.g. reserve 25% of value for items with 12–18 months coverage, 50% for 18–24, 100% for no usage in 24 months, plus specific reserves for discontinued items. Reviewed quarterly with finance and auditors.

Tip: Policy-based approach.`, 'D', 'S'],

["Metrics", "Which inventory KPIs do you track?",
`**Answer:** Inventory accuracy, turns, days on hand, excess and obsolete %, shrink, fill rate or stockouts, adjustment value, aging, and carrying cost.

Tip: Mention your actual results.`, 'B', 'E'],

["Metrics", "How do you calculate inventory turns?",
`**Answer:** Turns = annual COGS ÷ average inventory value. Days on hand = 365 ÷ turns.

**Example:** COGS $30M, average inventory $5M → 6 turns, about 61 days.

Tip: Quick math.`, 'B', 'E'],

["Carrying Cost", "What is inventory carrying cost?",
`**Answer:** The annual cost of holding inventory, typically 20–30% of inventory value: cost of capital, storage, insurance, taxes, handling, shrink and obsolescence.

**Example:** $5M inventory × 25% = $1.25M per year.

Tip: Use it to justify reductions.`, 'B', 'M'],

["Shrink", "What causes shrinkage and how do you reduce it?",
`**Answer:** Theft, damage, receiving errors, unrecorded scrap, and transaction errors. Reduce with access control, CCTV, receiving checks, timely scrap recording, cycle counts, audits, and a culture of accountability.

Tip: Mention data analysis by area.`, 'B', 'E'],

["ABC", "How do you perform ABC analysis?",
`**Answer:** Rank items by annual usage value (units × cost). Typically A = top ~80% of value (~20% of items), B = next ~15%, C = remaining ~5%. Use it to set count frequency, planning attention and storage locations.

Tip: Pareto principle.`, 'B', 'E'],

["Locations", "How does location management affect accuracy?",
`**Answer:** Clear, labeled locations, one item per location where possible, system-directed putaway, and disciplined location transfers reduce misplacement and picking errors.

Tip: Organization drives accuracy.`, 'B', 'E'],

["Receiving", "What receiving controls protect inventory accuracy?",
`**Answer:** Check quantities and items against PO and packing slip, scan labels, record discrepancies immediately, inspect quality where required, and receive in the system promptly before putaway.

Tip: Errors start at receiving.`, 'B', 'E'],

["Units", "How do unit-of-measure issues cause problems?",
`**Answer:** Buying in cases, storing in each, issuing in boxes — wrong conversions in the item master create big quantity errors. Maintain accurate UOM conversions and train staff.

Tip: Common hidden cause.`, 'B', 'M'],

["Systems", "Which systems have you used for inventory control?",
`**Sample answer:** "Oracle Fusion Inventory for cycle counts, transactions and adjustments; Oracle WMS for directed tasks; and Power BI dashboards for accuracy and aging."

Tip: Name tasks.`, 'B', 'E'],

["Oracle", "How are cycle counts set up in Oracle Inventory?",
`**Answer:** Define a cycle count with ABC classes or count frequencies, tolerances, approval rules and recount settings; schedule counts; generate count sequences; enter results; recount and approve adjustments; and review accuracy reports.

Tip: Hands-on detail.`, 'D', 'M'],

["Lot and Serial", "Why use lot and serial control?",
`**Answer:** For traceability — recalls, expiry, quality issues and warranty. Lot control tracks batches; serial control tracks individual units. Required in industries like pharma, food and medical devices.

Tip: FIFO/FEFO for expiring lots.`, 'B', 'M'],

["FEFO", "What is FEFO?",
`**Answer:** First expired, first out — picking items with the earliest expiry first, essential for perishables and pharmaceuticals.

Tip: Short and clear.`, 'B', 'E'],

["Consignment", "What is consignment inventory and how is it controlled?",
`**Answer:** Inventory owned by the supplier but stored at your site until used; you pay when consumed. Track separately, count regularly, and reconcile consumption with the supplier.

Tip: Ownership distinction.`, 'D', 'M'],

["In-transit", "How do you handle in-transit inventory?",
`**Answer:** Track ownership by shipping terms, record in-transit balances between sites, and reconcile shipments and receipts to avoid lost or double-counted stock.

Tip: Cut-off matters at month-end.`, 'D', 'M'],

["Finance", "How do you work with finance on inventory?",
`**Answer:** Reconcile inventory subledger to GL, support month-end and audits, explain adjustments and variances, agree reserves, and report inventory value trends.

Tip: Accounting awareness.`, 'B', 'M'],

["Audit", "What do auditors look at in inventory?",
`**Answer:** Count observations, cut-off, valuation and costing, reserve methodology, adjustment controls, and reconciliation between subledger and GL.

Tip: Be audit-ready.`, 'D', 'M'],

["Reduction", "How would you reduce inventory by 15%?",
`**Answer:** Analyze by category and aging, dispose of excess and obsolete, adjust safety stock and reorder points, reduce lot sizes and MOQs, improve forecast accuracy, and stop over-ordering. Track service levels to protect customers.

Tip: Multiple levers.`, 'D', 'S'],

["Technology", "How can technology improve inventory control?",
`**Answer:** Barcode and RFID scanning, WMS directed tasks, mobile counting apps, real-time dashboards, and analytics to predict variances or obsolescence.

Tip: RFID for high-value or high-volume items.`, 'D', 'M'],

["RFID", "When does RFID make sense?",
`**Answer:** High-volume or high-value items, returnable containers, apparel and retail, or where fast counts are needed. Cost per tag and reader infrastructure must be justified.

Tip: Business case thinking.`, 'D', 'M'],

["Process", "How do you prevent negative inventory?",
`**Answer:** System settings to block negative balances, timely transactions (receive before issue), correct backflush settings in manufacturing, and investigation of each occurrence.

Tip: Negative stock signals process issues.`, 'D', 'M'],

["Manufacturing", "What is backflushing and how does it affect accuracy?",
`**Answer:** Automatically issuing components when production is reported, based on the BOM. If BOMs, scrap or actual usage differ, inventory becomes inaccurate. Regular counts and BOM accuracy are critical.

Tip: Manufacturing-specific detail.`, 'D', 'M'],

["Behavioral", "Tell me about improving inventory accuracy significantly.",
`**Sample answer:** "Accuracy was 86%. I analyzed variances and found most came from unit-of-measure errors and late receiving. We fixed 140 UOM conversions, required same-day receiving, and started daily ABC cycle counts. Accuracy reached 98.5% in six months."

Tip: Root cause, actions, result.`, 'B', 'M'],

["Behavioral", "Tell me about reducing obsolete inventory.",
`**Sample answer:** "We had $1.8M of slow-moving stock. I reviewed it with sales and engineering, returned $400K to suppliers, reworked $300K into current products, sold $500K at a discount, and scrapped the rest. I also added an end-of-life review before engineering changes."

Tip: Recovery plus prevention.`, 'B', 'M'],

["Behavioral", "How do you handle pushback from warehouse staff on counting?",
`**Answer:** Explain why accuracy matters to them (fewer searching, fewer shortages), schedule counts around peaks, make it simple, and share results and recognition.

Tip: Engagement.`, 'B', 'E'],

["Leadership", "How would you set up an inventory control function?",
`**Answer:** Policies (counting, adjustments, reserves), ABC classification, cycle count program, KPIs and dashboards, training, and regular reviews with operations and finance.

Tip: Structured approach.`, 'D', 'S'],

["Leadership", "How do you build accountability for inventory accuracy?",
`**Answer:** Assign location or zone ownership, report accuracy by area and shift, review variances in daily meetings, and recognize improvements.

Tip: Visibility drives behavior.`, 'D', 'S'],

["Planning", "How does inventory control support planning?",
`**Answer:** Accurate on-hand balances make MRP and replenishment reliable; inaccurate records cause false shortages or excess orders.

Tip: Link to business outcomes.`, 'B', 'E'],

["Safety Stock", "Should inventory control manage safety stock?",
`**Answer:** Usually planning owns safety stock settings, but inventory control provides data and highlights excess or shortages. Collaboration ensures parameters reflect reality.

Tip: Clear roles.`, 'B', 'M'],

["Returns", "How do you handle customer returns in inventory?",
`**Answer:** Receive with an RMA, inspect, disposition (restock, rework, scrap, return to vendor), and record transactions accurately so returned items don't distort balances.

Tip: Reverse logistics control.`, 'B', 'M'],

["Scrap", "How do you control scrap?",
`**Answer:** Record scrap with reasons promptly, approve above thresholds, analyze trends, and work with production and quality to reduce it.

Tip: Unrecorded scrap is a major accuracy issue.`, 'B', 'E'],

["Career", "Why inventory control?",
`**Sample answer:** "Inventory is often the biggest asset on the balance sheet, and accuracy affects customers, production and finance. I like finding root causes and fixing processes."

Tip: Business impact.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I raised inventory accuracy from 86% to 98.5%, cleared $1.8M of obsolete stock, and built cycle count programs auditors accepted. I work well with warehouse, planning and finance."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is the difference between periodic and perpetual inventory systems?",
`**Answer:** **Perpetual:** records update with every transaction in real time (ERP standard). **Periodic:** inventory determined by physical counts at period end; COGS is calculated as beginning + purchases − ending.

Tip: Simple and clear.`, 'B', 'E'],

["Technical", "What is safety stock vs cycle stock vs anticipation stock?",
`**Answer:** **Cycle stock:** inventory from regular replenishment, used between orders. **Safety stock:** buffer for variability. **Anticipation stock:** built ahead of known peaks or shutdowns. Also pipeline (in-transit) stock.

Tip: Inventory types.`, 'B', 'M'],

["Technical", "What is dead stock?",
`**Answer:** Inventory with no movement over a long period (e.g. 12+ months) and little chance of future use. Candidates for disposal and full reserve.

Tip: Quick definition.`, 'B', 'E'],

["Technical", "How do you reconcile the inventory subledger to the general ledger?",
`**Answer:** Compare inventory valuation report totals to GL inventory accounts, investigate differences (unaccounted transactions, manual journals, cost updates, in-transit), and resolve before close.

Tip: Finance collaboration.`, 'D', 'M'],

["Technical", "What is a tolerance in cycle counting?",
`**Answer:** An acceptable variance range before a recount or approval is required — tighter for A items (e.g. 0–1%), looser for C items (e.g. 5%).

Tip: Practical setup detail.`, 'B', 'M']
];
