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
