module.exports = {
'ora-mod-ap': {
6: "In the payment process profile and the payment process request. The PPR selection criteria pick the disbursement bank account and profile, often defaulted by business unit and currency rules — for example USD payments from the US operating account, EUR from the euro account. If the run picks nothing, I check the bank account's business unit access first.",
12: "Fixing price and quantity tolerances and enforcing on-time receipt entry. In most AP shops the bulk of holds are small price differences and missing receipts, not complex issues. Setting a sensible price tolerance — say 2% or $50 — and chasing receivers within 48 hours can lift touchless rates by 20 points."
},
'ora-mod-ar': {
1: "AutoAccounting rules or the SLA mappings, plus the transaction types with their receivable and revenue accounts. If they're wrong, every invoice from that source lands in the wrong account — and you find out at month end. I test each transaction type with draft accounting before go-live.",
8: "By amount and risk. Collection strategies create tasks — reminders, calls, escalations — and the collector's worklist is sorted by overdue value and customer risk score, so the biggest exposures come first. A $200,000 balance 45 days late beats twenty $500 balances, even though the small ones are older."
},
'ora-mod-cm': {
4: "So exact matches on reference and amount happen first, and looser matches — like amount within a date range — only apply to what's left. If a loose rule ran first, it could match a $10,000 payment to the wrong $10,000 deposit, and the correct match would then fail."
},
'ora-mod-cst': {
1: "For different reporting needs — for example a primary cost book at standard cost for US GAAP and a secondary book for IFRS or for management costing with a different method or overhead treatment. The same transactions are costed in both books, so you get two valuations without double entry.",
3: "Whether the transfer to costing and the cost processor ran without errors, then the cost processor error list for missing setup — typically no standard cost published for the item, or a missing cost profile. Fix the setup and rerun the processor; the uncosted transactions then pick up.",
4: "Fusion revalues the on-hand quantity to the new standard and posts a revaluation adjustment to inventory and the revaluation offset account in the period you publish. For example, 1,000 units moving from $10 to $10.50 creates a $500 increase. That's why I simulate the update before publishing.",
5: "Under perpetual average, returns are usually valued at the current average cost, so the average doesn't jump. If you use the original receipt cost instead, a return at $12 when the average is $10 shifts the average for the remaining stock, which can surprise finance.",
8: "Invoice price variance — the difference between the PO price and the invoice price, posted when the AP invoice is accounted, as long as it's within tolerance. Under standard cost, the receipt already posted PPV against standard, so IPV only captures the PO-to-invoice difference.",
10: "Uncosted transactions, pending transfers to costing, or open errors in the cost processor. I clear the error queue and run a final cost cycle before close rather than forcing the period shut, because anything left uncosted ends up valued in the wrong period.",
12: "Reclass journals or accruals posted straight to inventory accounts in GL, which never appear in the cost valuation report. A $50,000 reclass by finance creates a $50,000 difference forever. I restrict manual journals to inventory accounts and route any needed adjustment through Cost Management."
},
'ora-mod-fa': {
3: "Once the period is closed. Until then you can roll back depreciation, fix the asset and rerun. After close, corrections go through adjustments in the current period, either amortized over the remaining life or expensed as catch-up, so I review depreciation before closing the period.",
4: "Expensed, because the original life was simply an error, so catch-up depreciation corrects history in the current period. For example, an asset keyed with a 10-year life instead of 5 gets the missed depreciation booked at once. Amortized fits a genuine change in estimate going forward.",
9: "It hasn't been accounted in Payables, Create Mass Additions hasn't run, or the line's account isn't a clearing account on any asset category. I check them in that order. Also check whether the line was already sent and is sitting in the mass additions queue waiting to be posted.",
11: "When the asset is ready for its intended use — when the building is occupied or the machine is running — not when the project closes financially. Waiting understates depreciation; for example, a $3 million line in use for four months but still in CIP misses about $50,000 of depreciation on a 20-year life.",
16: "Depreciation journals not transferred or not posted in GL, manual GL entries to accumulated depreciation, or a depreciation rollback and rerun after the journals were already transferred. I compare the reserve ledger report with GL by account and period to see which month the gap starts.",
17: "Run depreciation for the first period in a test environment and compare the monthly expense with legacy by category and book. Large differences usually point to wrong lives, methods or prorate conventions. Also tie cost and accumulated depreciation totals to legacy and to the GL at cutover.",
18: "The incremental borrowing rate — what the company would pay to borrow over a similar term, with similar security, in the same currency. Treasury usually provides a rate table by term and currency, for example 5.2% for 5 years in USD, and it's applied when the lease starts.",
21: "A monthly CIP review with project managers. We went through every CIP project over 90 days old, asked if the asset was in use, and capitalized those that were. Assets waiting to be placed in service dropped by half, depreciation started on time, and auditors stopped raising it."
},
'ora-mod-gl': {
69: "Usually a defined deadline, like close day 4, after which material adjustments go to FCCS as top-side journals with documentation, and the local ledger is corrected next period. Smaller items wait for next month. Without a cut-off, GL and FCCS never match and the consolidation reruns all week."
},
'ora-mod-inv': {
1: "Prespecified, so stock only goes to valid, defined locators that the warehouse set up. Dynamic entry is faster to start but creates messy, misspelled locators like A-01-1 and A01-01, and stock gets lost. For a busy warehouse, accuracy matters more than the small setup effort.",
2: "There may not be enough stock in the source subinventory, or picking rules — like lot status, expiry or locator rules — exclude what's there. I check on-hand by lot and locator and the picking rules before re-releasing, rather than just releasing again and getting the same result.",
4: "So movements during counting don't distort the comparison between the snapshot and the count. If an item is picked after the snapshot but before it's counted, the system shows a false shortage. If you can't freeze, you need careful cutoff handling and recount of moved items.",
6: "Usually a reservation or on-hand issue — lots or serials not available, stock moved after picking — or a missing ship method or carrier. I read the exception message, check on-hand for the picked lots, fix the data and retry. Repeat failures by the same warehouse point to a process gap.",
7: "The receiving org, from the moment it ships, under FOB shipping point — so it's valued in the receiving org's in-transit inventory. Under FOB destination the shipping org keeps ownership until receipt. The FOB setting on the shipping network drives who carries the in-transit value."
},
'ora-mod-om': {
1: "The line isn't assigned to an orchestration process and sits there stuck, with no error users notice. I always set a default process as a catch-all, and a report of lines without a process, so new order types or sources don't quietly pile up.",
2: "Order managers get an alert and act: expedite the supply, change the source to another warehouse, split the line, or tell the customer the new date. Jeopardy is only useful if someone owns the response — so each priority level needs an owner and a target response time.",
3: "Each fulfillment line can ship and bill separately, so AR gets invoice lines per shipment rather than per order line. If 60 of 100 units ship today, the customer is billed for 60 now and 40 later, which matches revenue to delivery and avoids disputes.",
6: "Use the source order number plus the source system as a unique key, so a retried call is rejected or updates the existing order instead of creating a new one. Also make the integration check the response before retrying, and alert on any order with more than one attempt.",
7: "Orders were stuck after a fulfillment connector call to the 3PL failed. I traced it to an expired credential on the connection, renewed it, resubmitted the failed tasks and cleared about 600 lines in an afternoon. Then I added monitoring so credential expiry alerts two weeks ahead."
},
'ora-mod-pim': {
1: "So they're consistent everywhere — UOM, description, item class, regulatory data. Only attributes that truly differ by site, like planning method, lead time or the buyer, are controlled at the item org level. Fewer org-level attributes means fewer chances for sites to drift apart.",
2: "When it's product data the business manages and searches by — like voltage, color or dosage strength — with grouping, validation and security by item class. A descriptive flexfield is fine for a few simple fields, but extensible attributes scale to hundreds of attributes organized by product type.",
4: "Assign each step by role or group rather than named people, so work isn't stuck when someone is out, and set due dates with reminders and escalation for overdue steps. Reporting on NIRs waiting more than, say, three days by step shows where the bottleneck is.",
5: "When the change needs approval or an audit trail — like a BOM structure change, switching an approved manufacturer, or a regulated attribute. Editing the item directly is fine for minor, low-risk changes, but in GxP or audited environments, change orders give the evidence auditors ask for.",
7: "Inactivate one item, move its on-hand and open documents — POs, orders, BOMs — to the surviving item, and add a cross-reference so old part numbers still find it. Then look at why it got through, for example a weak matching rule, and tighten it.",
12: "Cycle time from request to active item — for example from eight days to three — the number of rejected or returned requests, and duplicate or incomplete items found later. I'd also track how many items needed a correction within 30 days of going active, as a quality measure."
},
'ora-mod-plan': {
1: "Replenishment Planning for stocking locations — min-max, reorder points and safety stock across DCs and stores — fed by Demand Management forecasts, often without full Supply Planning. Supply Planning is more for manufacturers with BOMs, routings and capacity constraints.",
2: "Filter by priority and value, so planners work the late customer orders and high-value shortages first, and tune parameters like safety stock and lead times so noise exceptions disappear. If a planner gets 2,000 exceptions a day, they'll ignore all of them.",
3: "The plan runs on stale data — yesterday's on-hand and orders — so recommendations are wrong. I check collection status before every scheduled plan run, and set the plan to wait or alert if collections fail, rather than run anyway.",
5: "If the BOM or scrap factor is inaccurate, backflushing issues the wrong quantities without anyone noticing, so on-hand drifts. It works well only with accurate BOMs and scrap factors, plus regular cycle counts on backflushed components to catch drift early."
},
'ora-mod-po': {
2: "Buyer assignment and approval rules route wrongly — a laptop request might go to the facilities buyer — and spend reports by category can't be trusted, so sourcing teams negotiate on bad data. I'd lock the category list and map each catalog item to one category.",
3: "The requisition can't be submitted without the user entering an account manually, which leads to coding errors. I'd fix the HCM assignment so the default expense account comes from the employee's department, rather than letting users key accounts.",
5: "Use a blanket agreement with the item and price, enabled for automatic sourcing and document creation, plus the requisitioning business unit assigned. Approved requisitions for those items then create and send POs without a buyer touching them — often 60–80% of catalog spend.",
6: "Use approval groups or positions instead of named people, keep the HCM supervisor hierarchy clean, and set a fallback approver. A weekly report of documents pending approval for more than three days also catches problems before suppliers start calling.",
9: "Classify it, for example with AI spend classification, to see which categories and suppliers it covers. Then move recurring non-PO spend — like maintenance or office supplies — onto agreements or catalogs, and set a 'no PO, no pay' policy above a threshold."
},
'ora-mod-sla': {
1: "Seeded methods can't be edited and are maintained by Oracle in each update. A copy lets you change just the rules you need while keeping the rest close to standard. When Oracle adds new event classes to the seeded method, you review and bring them into your copy.",
2: "When GL posting is controlled by GL users. The entries transfer to GL as unposted journals, so the GL team can review, for example, large AP or AR batches before posting. Final post is more common when you trust the subledger and want a faster close.",
3: "The rule returns no value, so accounting errors out for that transaction. I always end an ADR with a default line without conditions — often pointing to a suspense or review account — so accounting completes and the exception is easy to find and correct.",
6: "A GL journal fixes the ledger but not the subledger, so the subledger and GL stay out of sync and the AP or AR to GL reconciliation shows a permanent difference. It's better to correct the transaction or use a subledger adjustment so both sides agree.",
8: "Invalid account combinations from cross-validation rules or inactive or end-dated segment values. The fix belongs in the value or the rule, not the transaction. I check the Create Accounting execution report, then the specific segment, then rerun accounting for the failed items.",
9: "Tax rules decide which regime, tax, status and rate apply based on the parties, place of supply, product and transaction type, so users don't pick tax manually. For example, a US company selling to a German business customer gets reverse-charge VAT automatically.",
14: "Defining the event model and the sources with the source-system team, so every transaction carries the attributes the accounting rules need — product, region, customer type. If a needed attribute isn't in the feed, no amount of rule design can produce the right account.",
16: "I ran draft accounting for a mix of intercompany and third-party invoices — before and after the change — and compared the accounts line by line. Only the intercompany invoices changed; the others matched exactly. That comparison went into the change ticket as evidence."
}
};
