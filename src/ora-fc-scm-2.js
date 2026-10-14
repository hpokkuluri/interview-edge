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
