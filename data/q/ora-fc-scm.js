// ora-fc-scm — generated from src/ora-fc-scm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Functional Consultant (2–3 yrs) — SCM. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-fc-scm'] = (QB['ora-fc-scm'] || []).concat([
['SCM Basics', 'What modules make up Oracle Fusion SCM?',
`- **Product Management / Product Hub** — items and item structures.
- **Procurement** — Purchasing, Self Service Procurement, Sourcing, Supplier Portal, Supplier Qualification.
- **Inventory Management** — organizations, subinventories, transactions, counts.
- **Order Management** — sales orders and orchestration; **Global Order Promising**.
- **Logistics** — Shipping, Receiving, Transportation.
- **Cost Management** — item cost, receipt accounting, cost accounting.
- **Manufacturing** — work definitions, work orders.
- **Supply Chain Planning** — demand, supply, replenishment.

Tip: Say which ones you've worked on and to what depth.`, 'B'],

['Inventory', 'What is the difference between an inventory organization, a subinventory and a locator?',
`- **Inventory organization** — a plant, warehouse or distribution center that holds items and inventory (has its own item attributes, costing and calendar).
- **Subinventory** — a physical or logical area within the org (e.g. Stores, FG, Staging, MRB). Can be tracked (quantity on hand) or expense.
- **Locator** — a specific bin/shelf inside a subinventory, e.g. Row.Rack.Bin.

Hierarchy: Organization → Subinventory → Locator.`, 'B'],

['Inventory', 'What is an item master organization and why do items exist in it?',
`- Items are created once in the **item master organization** (in Fusion, it's the master org in Product Hub) and then **assigned** to the inventory orgs that use them.
- **Master-level attributes** must be the same everywhere (e.g. description, primary UOM).
- **Org-level attributes** can differ by org (e.g. planner, min-max levels, lead times).
- This avoids duplicate items and keeps definitions consistent.

In Fusion the master org is set up in Product Hub, and **item classes** and **templates** default attributes.`, 'B'],

['Inventory', 'What are the main inventory transaction types?',
`- **Receipts** — from purchase orders or transfers.
- **Issues** — to work orders, accounts (miscellaneous issue), sales orders (shipping).
- **Subinventory transfers** — moving stock within an org.
- **Interorganization transfers** — between orgs (direct or in-transit).
- **Miscellaneous receipt/issue** — adjustments to an account.
- **Cycle count and physical inventory adjustments.**

Each has a transaction type, source type and action, and creates cost accounting.`, 'B'],

['Inventory', 'What is lot and serial control?',
`- **Lot control** tracks a batch of items with the same properties (e.g. made together, same expiry date). Common in pharma and food. Lots can carry expiration dates, grades, status.
- **Serial control** tracks each individual unit with a unique number (e.g. equipment).
- Serial control can be at **receipt**, **predefined**, or **at sales order issue**.
- Both give full traceability: where a lot/serial came from and where it went (genealogy).

Control is set on the item and can't easily be changed once transactions exist.`, 'B'],

['Inventory', 'What is the difference between cycle counting and physical inventory?',
`- **Cycle counting** — counting a small set of items regularly (often by **ABC classification**: A items counted more often). Keeps records accurate without shutting down operations.
- **Physical inventory** — counting everything at once (often at year end), usually freezing transactions during the count.

## Cycle count process
- Define the cycle count, classes and frequency.
- Generate count schedules and count sequences.
- Enter counts; **recounts** for out-of-tolerance results.
- **Approve** adjustments (tolerances drive approval); adjustments post to inventory and accounting.`, 'B'],

['Inventory', 'How does min-max planning work?',
`- Set **minimum** and **maximum** quantities for an item in an org (or subinventory).
- The min-max report/process checks on-hand plus on-order. If it falls below the **min**, it suggests (or creates) a replenishment order to bring it up to the **max**.
- Replenishment can be a requisition (purchase), a transfer from another org, or a work order.
- Fixed lot multiples and minimum order quantities adjust the suggested quantity.

It's simple and works well for stable-demand items like spare parts and consumables.`, 'B'],

['Inventory', 'What is a reservation?',
`A reservation **holds on-hand quantity** for a specific demand (e.g. a sales order or work order) so no one else can use it.
- Can be at the org, subinventory, lot, locator or serial level.
- Reduces **available to reserve / available to transact** quantities.
- Created manually or automatically (e.g. during scheduling).

Tip: Difference — **on-hand** = physically there; **available** = on-hand minus reservations and other holds.`, 'D'],

['Procurement', 'Explain the Procure-to-Pay flow and the main documents.',
`- **Requisition** — internal request (Self Service Procurement), approved.
- **Purchase order** — created from the requisition (manually or automatically), approved and sent to the supplier.
- **Receipt** — goods/services received (Receiving), optionally inspected and delivered to inventory or expense.
- **Invoice** — matched in AP to PO and receipt.
- **Payment** — AP payment run.

Accounting: receipt → Dr Inventory/Expense, Cr Accrual; invoice → Dr Accrual, Cr AP Liability; payment → Dr Liability, Cr Cash.`, 'B'],

['Procurement', 'What types of purchase orders are there?',
`- **Standard PO** — one-time purchase with specific items, quantities, prices and dates.
- **Blanket Purchase Agreement (BPA)** — agreed prices for items over a period, without fixed quantities. You release orders against it.
- **Contract Purchase Agreement (CPA)** — agreed terms with a supplier but no specific items; standard POs reference it.
- **Planned PO** (EBS) — committed quantities with tentative dates; scheduled releases.

In Fusion: Standard PO, Blanket Agreement and Contract Agreement.`, 'B'],

['Procurement', 'How does a requisition get converted into a purchase order automatically?',
`In Fusion:
- The requisition line references an **agreement** (BPA) or catalog item with an agreed price and supplier.
- Requisition is approved.
- **Automated buyer processing** (configured in Procurement setup) creates the PO automatically if: the line has a valid source agreement, the supplier site is active, and the agreement allows automatic ordering.
- The PO goes through approval (or is auto-approved within limits) and is communicated to the supplier.

Lines without a source go to the **buyer's Process Requisitions** work area for manual conversion.`, 'B'],

['Procurement', 'How are purchasing approvals configured in Fusion?',
`- Approvals use **BPM** rules via **Manage Requisition/Purchasing Document Approvals**.
- Rules can be based on: amount, category, cost center, project, supervisor hierarchy, position or job level, or approval groups.
- Example: requisitions under $5,000 → supervisor; over $5,000 → supervisor then department head; IT categories → IT approver.
- Test rules thoroughly with different amounts and categories; check for "no approver found" errors.`, 'B'],

['Procurement', 'What is a procurement catalog?',
`Catalogs let requesters shop like an online store in Self Service Procurement.
- **Local catalog** — items and prices loaded into Fusion (from BPAs or catalog uploads).
- **Punchout catalog** — the user goes to the supplier's website, picks items, and returns a cart.
- **Informational catalog** — instructions or links (e.g. "how to order business cards").
- **Content zones** control which users see which catalogs.
- **Smart forms** for non-catalog requests with guided fields.`, 'D'],

['Procurement', 'How do you onboard a new supplier in Oracle Fusion?',
`- **Supplier registration** — the supplier registers through the supplier portal or is entered by procurement.
- **Approval** of the registration (rules).
- Create the **supplier**: tax ID, addresses, **sites** per procurement BU, **site assignments** to client BUs, bank account (with verification), contacts, payment terms/method.
- **Supplier qualification** questionnaires if needed (e.g. diversity, compliance).
- Control who can change bank details (a common fraud risk).`, 'B'],

['Receiving', 'What are the receipt routings?',
`- **Direct delivery** — receive and deliver in one step to the final destination.
- **Standard receipt** — receive first (to a receiving location), then deliver in a separate step.
- **Inspection required** — receive, inspect (accept/reject), then deliver.

Routing defaults from the PO schedule, item, supplier or receiving options. The choice affects when inventory becomes available and when accrual accounting happens.`, 'B'],

['Receiving', 'How do you return goods to a supplier?',
`- Create a **return to supplier** transaction against the receipt (Receiving → Returns).
- Inventory is reduced; receipt accounting reverses the accrual.
- If already invoiced, AP needs a **debit memo** (can be automatic with RTS-based debit memos if enabled on the supplier site).
- Use **RMA numbers** from the supplier and track the return shipment.
- Corrections (vs returns) fix data entry errors on a receipt rather than physically sending goods back.`, 'B'],

['Order Management', 'Explain the Order-to-Cash flow from the SCM side.',
`- **Sales order** created (manually, via import, or from a CPQ/CRM system).
- **Orchestration** process starts — order is validated, priced, and **scheduled** (Global Order Promising checks availability).
- **Reserve** inventory, then **pick release** creates pick tasks/move orders.
- **Pick confirm** and **pack**.
- **Ship confirm** — inventory is issued, the order line is fulfilled.
- **Billing** — lines are sent to Receivables (AutoInvoice) for invoicing.
- **Revenue and COGS** recognized; receipts applied in AR.`, 'B'],

['Order Management', 'What is order orchestration in Fusion Order Management?',
`Orchestration is the process engine that drives each order line through fulfillment.
- **Orchestration processes** define steps (schedule, reserve, ship, invoice) and their order.
- **Fulfillment lines** are assigned to a process via process assignment rules (e.g. by order type or item).
- Steps call **fulfillment systems** (Shipping, Receiving, Manufacturing, a 3PL) through connectors.
- Supports **jeopardy** (lateness warnings), **change management** (what to do if the order changes mid-process) and **holds**.

EBS equivalent: Order Management workflows.`, 'D'],

['Order Management', 'What are holds in Order Management and how are they applied?',
`Holds stop an order or line from progressing.
- **Credit check hold** — customer exceeds credit limit.
- **Manual holds** — e.g. pricing review, export compliance.
- **Hold definitions** specify where the hold stops the process (e.g. before shipping or before invoicing).
- Applied manually or automatically by rules; released by authorized users with a reason.

Tip: Mention you checked who can release holds — it's a control point.`, 'B'],

['Order Management', 'How does pricing work for sales orders in Fusion?',
`Fusion uses **Pricing Administration**:
- **Price lists** — base price per item and UOM.
- **Discount lists** — percentage or amount discounts.
- **Pricing strategies** combine price lists and discounts and are assigned to customers or segments via **pricing segments** and **strategy assignment rules**.
- **Pricing algorithms** calculate the final price; **charges** (e.g. freight) can be added.
- **Shipping charges** and **cost-plus** pricing are possible.

EBS uses Advanced Pricing modifiers and qualifiers.`, 'D'],

['Shipping', 'What is pick release and what happens during it?',
`Pick release selects order lines that are ready to ship and creates **pick tasks/move orders**.
- Uses **release rules**: order, customer, ship date, warehouse, shipment priority.
- **Picking rules** decide where to pick from (e.g. FIFO, FEFO by lot expiry).
- It can auto-allocate and auto-pick-confirm.
- After picking, items move to staging; then pack and **ship confirm** creates the shipment and issues inventory.`, 'B'],

['Costing', 'What costing methods does Oracle support?',
`Fusion Cost Management supports:
- **Standard cost** — a fixed cost per item; differences go to variance accounts (e.g. purchase price variance).
- **Perpetual average cost** — cost updates with each receipt.
- **Actual cost (FIFO/LIFO)** — cost layers consumed in order.

EBS: Standard, Average, FIFO, LIFO, plus Periodic Average/Incremental LIFO.

Cost method is set by **cost organization and cost book** in Fusion (by inventory org in EBS).`, 'B'],

['Costing', 'What is the difference between Receipt Accounting and Cost Accounting in Fusion?',
`- **Receipt Accounting** creates the accounting for receipts, deliveries and returns, and manages **accruals** (receipt accrual, period-end accrual for expense items). It also handles accrual clearing and write-offs.
- **Cost Accounting** costs **inventory transactions** (issues, transfers, shipments, production) using the cost method, creating entries like Dr COGS / Cr Inventory.
- Both run their own **Create Accounting** processes and transfer to GL.

Tip: Mention that you schedule Transfer Transactions to Costing and Create Cost Accounting regularly.`, 'D']
]);

QB['ora-fc-scm'] = (QB['ora-fc-scm'] || []).concat([
['Costing', 'What is purchase price variance (PPV)?',
`Under **standard costing**, inventory is valued at standard cost. When you buy at a different price:
- **PPV = (PO price − standard cost) × quantity received.**
- Example: standard $10, PO price $11, 100 units → $100 unfavorable PPV.
- Accounting at receipt/delivery: Dr Inventory $1,000 (standard), Dr PPV $100, Cr Accrual $1,100.
- Invoice price variance (IPV) captures differences between invoice and PO price.

PPV is watched closely by procurement and finance to measure buying performance.`, 'B'],

['Costing', 'How does a standard cost update work?',
`- Create a **new cost scenario** with new standard costs (often yearly or quarterly).
- **Roll up** costs for manufactured items (material + resources + overhead).
- Review and **publish** the scenario.
- On publish, Oracle revalues on-hand inventory at the new cost and posts the difference to a **standard cost adjustment / revaluation** account.

Tip: Mention you run a "what-if" report first so finance sees the revaluation impact before publishing.`, 'D'],

['Product Hub', 'What are item classes and item templates?',
`- **Item class** (Fusion Product Hub) — a hierarchy that groups items (e.g. Raw Materials > Chemicals). Classes define **item numbering**, **attribute groups** (extensible flexfields), **templates**, **new item request** rules and data security. Child classes inherit from parents.
- **Item template** — a set of default attribute values (e.g. "Purchased Item": purchasable, stockable, transactable, costing enabled). Applied when creating items to keep attributes consistent.

EBS uses item templates and categories; Fusion adds item classes on top.`, 'B'],

['Product Hub', 'What is an item category and how is it used?',
`Categories group items for a business purpose. Each **catalog** (category set) serves one function:
- **Purchasing catalog** — drives buyer assignment, approvals and spend reporting.
- **Inventory catalog** — reporting and planning.
- **Costing/GL catalog** — drives accounts via SLA rules.

An item can belong to several catalogs (one category per catalog unless multiple assignment is allowed). Many setups (e.g. approvals by category) depend on them, so design catalogs early.`, 'B'],

['Product Hub', 'What are item status codes and lifecycle phases?',
`- **Item status** (e.g. Active, Inactive, Prototype, Obsolete) controls key functional attributes — whether the item can be purchased, stocked, transacted, ordered or used in BOMs.
- **Lifecycle phases** (Design, Prototype, Production, Obsolete) track where the item is in its life; changing phase can change status.
- Changing status is how you stop an item from being ordered without deleting it.`, 'D'],

['Manufacturing', 'What is a bill of materials (BOM) and a routing / work definition?',
`- **BOM / item structure** — the list of components and quantities needed to make an item.
- **Routing (EBS) / Work definition (Fusion)** — the operations and resources (machines, labor) and their sequence, with component issues assigned to operations.
- Together they drive **work orders**, **cost rollups** and **planning**.

Fusion item structures live in Product Hub; work definitions in Manufacturing.`, 'B'],

['Manufacturing', 'Describe the work order lifecycle in Fusion Manufacturing.',
`- **Create** the work order (manually, from planning, or for a sales order).
- **Release** it — components can be picked.
- **Issue components** (manually, push, or backflush/assembly pull).
- **Report operations and resources** as work is done.
- **Complete** the assembly into inventory (and report scrap if any).
- **Close** the work order — variances are calculated by Cost Management.

Statuses: Unreleased → Released → Completed → Closed (On Hold / Canceled possible).`, 'D'],

['Planning', 'What is the difference between MRP and min-max planning?',
`- **Min-max** looks only at on-hand and on-order against fixed min/max levels — no forecasts, no BOM explosion.
- **MRP** (in Fusion Supply Chain Planning) uses **demand** (forecasts, sales orders), **supply** (on-hand, POs, work orders), **BOMs** and **lead times** to calculate what to make or buy and when. It explodes demand through the BOM to components.

Use min-max for simple, stable items; MRP for manufactured items and variable demand.`, 'D'],

['Inventory', 'What is an interorganization transfer and how is it set up?',
`Moving inventory between two inventory orgs.
- **Shipping networks** define the from/to orgs, transfer type (**direct** or **in-transit**), intransit accounts and whether receipt is required.
- **Direct** — moves instantly.
- **In-transit** — shipped, sits in transit, then received at the destination.
- Can use **transfer orders** (Fusion) for a full ship/receive flow with transfer pricing.
- Cost: transfer price and freight can create intercompany accounting if orgs are in different legal entities.`, 'D'],

['Inventory', 'How do you investigate an on-hand quantity that doesn\'t match the physical count?',
`- Check **pending/unprocessed transactions** (interface errors, pending transactions, unprocessed receipts or shipments).
- Review **transaction history** for the item/subinventory/locator — look for wrong subinventory, unit of measure mistakes, or lot/serial errors.
- Check **reservations** and staged quantities (picked but not shipped).
- Recount to confirm.
- Fix with an **adjustment** (with approval) and identify the root cause (training, process, scanning).`, 'B'],

['Procurement', 'What is sourcing (RFQ/auction) in Oracle Procurement?',
`**Oracle Sourcing** creates negotiations to get competitive bids:
- **RFI** — request for information.
- **RFQ** — request for quotes.
- **Auction** — suppliers see rankings and rebid.
- Steps: create the negotiation (lines, requirements, terms), invite suppliers, collect responses, **score and analyze**, **award**, and create a **PO or agreement** from the award.

It improves pricing and creates an audit trail for supplier selection.`, 'B'],

['Procurement', 'What happens when you need to change an approved purchase order?',
`- Create a **change order** (Fusion) — the PO opens a new revision.
- Changes like price, quantity or dates may need **re-approval** (based on rules).
- The revised PO is communicated to the supplier.
- Some changes are blocked after receipt or invoicing (e.g. you can't reduce quantity below received).
- **Cancel** or **close** POs when no longer needed (Closed for Receiving, Closed for Invoicing, Finally Closed).`, 'B'],

['Procurement', 'What are the PO close statuses?',
`- **Open** — normal.
- **Closed for receiving** — can still be invoiced (e.g. received within tolerance).
- **Closed for invoicing** — can still be received.
- **Closed** — both received and invoiced; can be reopened.
- **Finally closed** — permanent; releases encumbrance; cannot be reopened.
- **Canceled** — nothing more can happen on it.

Receipt and invoice close tolerances drive automatic closure.`, 'D'],

['Receiving', 'What is the difference between receipt tolerance and invoice tolerance?',
`- **Receipt tolerances** (quantity, date) control how much over/under or how early/late you can receive vs the PO — with actions like warning or reject.
- **Invoice tolerances** (price, quantity, amount) in AP control how much an invoice can differ from PO/receipt before a **matching hold** is placed.

They work together: tight receipt tolerance prevents over-receiving; invoice tolerance prevents overpaying.`, 'B'],

['Shipping', 'What documents are produced during shipping?',
`- **Pick slip** — what to pick and where.
- **Packing slip** — what's in the shipment, for the customer.
- **Bill of lading (BOL)** — contract with the carrier.
- **Commercial invoice** — for international shipments/customs.
- **Labels** (shipping, carton).
- **ASN** (advance shipment notice) — electronic notice to the customer.

They're produced using document sets at pick release or ship confirm.`, 'B'],

['Order Management', 'What is drop shipment?',
`The supplier ships directly to your customer — the goods never enter your warehouse.
- A sales order line with **drop ship** source type creates a **requisition/PO** to the supplier.
- The supplier ships to the customer; you record a **logical receipt** (and logical shipment) when they confirm.
- AP pays the supplier invoice; AR invoices the customer.
- Inventory is not physically touched, but accounting still flows through receipt and cost.`, 'D'],

['Order Management', 'What is back-to-back ordering?',
`A sales order line triggers a **dedicated purchase (or work order)** for that customer, and the supply is **reserved** to the order when it arrives.
- Received into your warehouse (unlike drop ship), then shipped to the customer.
- Used for items you don't stock but want to control/inspect.
- The reservation ensures the incoming supply isn't used for other orders.`, 'D'],

['Order Management', 'How do returns (RMA) work in Order Management?',
`- Create a **return order** (RMA) referencing the original sales order where possible — keeps price and lot/serial info.
- Customer ships back; **receive** the return in Receiving (with inspection if needed).
- Inventory increases (or goes to a reject/MRB subinventory).
- A **credit memo** is created in AR through invoicing of the return line.
- Return reasons are tracked for analysis.`, 'B'],

['Integration', 'How does SCM integrate with Financials?',
`- **Procurement → AP**: POs and receipts are matched to invoices.
- **Receiving → GL**: receipt accrual accounting via Receipt Accounting.
- **Inventory/Costing → GL**: inventory valuation, COGS and variances via Cost Accounting.
- **Order Management → AR**: shipped lines invoiced through AutoInvoice.
- **Assets**: capital POs can create mass additions from AP.
- **Projects**: project-related POs and costs.

A good SCM consultant understands the accounting each step creates.`, 'B'],

['Data Loads', 'How would you load items or on-hand balances into Fusion?',
`- **Items**: Item import via **FBDI** (Item Import template) or **Product Hub spreadsheet / import maps**; can load attributes, categories and org assignments.
- **On-hand balances**: **Inventory Transaction Import** FBDI with miscellaneous receipts (with lots/serials and locators) at cost.
- **Open POs**: Purchase Order Import FBDI.
- Always load **in sequence** (items → orgs → costs → on-hand) and reconcile quantities and values with the legacy system.`, 'B'],

['Testing', 'How would you test a full P2P cycle after a configuration change?',
`- Create a requisition with the affected item/category, check approval routing.
- Convert to PO; confirm defaults (supplier site, terms, accounts).
- Receive (with the right routing and tolerances).
- Match invoice in AP; check holds.
- Run Create Accounting for receiving and AP; verify GL entries.
- Test negative cases (over-receipt, wrong price) and a return.

Tip: Interviewers like that you check the accounting, not just the screens.`, 'B'],

['Behavioral', 'Tell me about a time you supported users during a go-live.',
`## Example (STAR)
- **Situation:** First week after a Fusion SCM go-live; warehouse users struggled with pick release and shipping.
- **Task:** I was the on-site support for Inventory and Shipping.
- **Action:** I sat with users on the floor, logged every issue, fixed quick ones (printer setup, a wrong picking rule), created two one-page job aids, and held a 15-minute daily huddle.
- **Result:** Tickets dropped from ~40/day to under 10 by the end of the second week, and shipments met the daily target.

Tip: Numbers and job aids make the answer concrete.`, 'B'],

['Behavioral', 'How do you prioritize when several users need help at once?',
`- **Business impact first** — anything stopping shipping, receiving, or payment comes first.
- Then **number of users affected**, then deadlines (e.g. month-end).
- Acknowledge everyone quickly so they know it's in the queue.
- Escalate to my lead if two critical issues collide.
- Track everything in the ticket tool so nothing is lost.`, 'B'],

['SCM Basics', 'What is the difference between an inventory organization and a business unit in Fusion SCM?',
`- **Business unit** — performs business functions like procurement, requisitioning, order fulfillment and billing; has its own setups and data security.
- **Inventory organization** — a physical location that holds and transacts inventory.
- An inventory org is tied to a **profit center BU** (and legal entity) for accounting. A procurement BU can serve many requisitioning BUs and inventory orgs.

Getting these relationships right is key in the enterprise structure design.`, 'D'],

['Procurement', 'What is a Procurement agent and why does it matter?',
`**Procurement agents** are buyers set up with access to specific **procurement BUs** and actions (manage requisitions, POs, agreements, suppliers, sourcing).
- Defined in **Manage Procurement Agents**.
- Controls which documents a buyer can see and act on (own documents vs all documents in the BU).
- Without an agent setup, a user with the buyer role still can't create POs in that BU — a common support issue.`, 'D']
]);

QB['ora-fc-scm'] = (QB['ora-fc-scm'] || []).concat([
['Inventory', 'What is ABC classification and how is it used?',
`ABC analysis ranks items by value (usually annual usage value = quantity × cost):
- **A items** — roughly 10–20% of items, ~70–80% of value. Counted most often, tightest control.
- **B items** — middle.
- **C items** — many items, little value. Counted least often.

In Oracle you **compile an ABC analysis** for an org, assign classes, and use them in **cycle count** frequency and planning policies.`, 'B'],

['Procurement', 'What is the difference between a requisitioning BU, procurement BU and sold-to legal entity?',
`- **Requisitioning BU** — where the requester works; owns the requisition and the expense/charge accounts.
- **Procurement BU** — the purchasing team that creates and manages the PO and supplier relationship; can serve many requisitioning BUs.
- **Sold-to legal entity** — the legal entity that is financially liable for the purchase (and appears on the PO).
- The **bill-to BU** processes the invoice in AP.

This model supports centralized procurement for many BUs in Fusion.`, 'D']
]);
