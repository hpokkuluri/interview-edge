// Oracle Senior Functional Consultant (3–5 yrs) — SCM. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-sfc-scm'] = (QB['ora-sfc-scm'] || []).concat([
['Supply Chain Orchestration', 'What is Supply Chain Financial Orchestration (SFO) and when do you need it?',
`SFO handles the **financial side of supply chain flows that cross legal entities or business units** — e.g. a US company buys goods that are received by its Mexican warehouse, or a sales BU sells goods shipped from another entity's warehouse.

- **Financial orchestration flows** (procurement or shipment flows) define the chain of entities, **transfer pricing rules** and **documentation** (intercompany AR/AP invoices).
- Physical movement happens once; SFO creates the **logical** intercompany transactions and accounting in each entity.
- Common for global companies with central procurement or sales entities.

Tip: Mention an example flow you configured and how you tested the intercompany invoices.`, 'D'],

['Order Management', 'How do you design orchestration processes for different order types?',
`- Group fulfillment patterns: **standard ship**, **drop ship**, **back-to-back**, **configured items (ATO)**, **services/subscriptions**, **returns**.
- Create an orchestration process per pattern (or copy seeded ones) with steps, task types and **change management** rules.
- **Process assignment rules** route lines by order type, item type, BU or source.
- Set **planning/lead times** per step for jeopardy calculation.
- Test change scenarios: quantity change after scheduling, cancel after pick, change ship-to after release.`, 'D'],

['Order Management', 'What is Global Order Promising (GOP) and how do sourcing rules affect it?',
`GOP checks **availability** and promises a date for order lines.
- Considers on-hand, supply (POs, work orders, transfers), lead times and allocations.
- **Sourcing rules and assignment sets** tell GOP which warehouses (and suppliers) can fulfill — with ranks and percentages.
- Supports **ATP** (available to promise) and **CTP** (capable to promise — checks component and resource availability for make items).
- Data is collected from the transaction system into the planning data repository — **data collections** must run regularly.

Tip: A common issue: GOP can't schedule because collections didn't run or sourcing isn't assigned.`, 'D'],

['Order Management', 'How do you handle changes to a sales order that is already in fulfillment?',
`- Fusion OM uses **change management** in the orchestration process: each step defines whether a change is allowed and what **compensation** pattern runs (e.g. cancel the reservation and reschedule, update the shipment line, or reject the change).
- Changes from source systems come as **revisions**; OM compares and applies them.
- After **ship confirm**, changes are blocked; you use returns or credit memos instead.
- Constraints (processing constraints) can block specific changes by role or status.`, 'D'],

['Order Management', 'What are processing constraints?',
`Rules that **prevent changes or actions** on orders based on conditions — e.g. "cannot change the ship-to address once the line is pick-released", or "only order administrators can change price after booking".
- Defined on entities (order header, line) and attributes, with conditions (status) and roles.
- Prevent data corruption mid-fulfillment and enforce controls.
- Seeded constraints exist; you add custom ones for business rules.`, 'D'],

['Pricing', 'How would you set up customer-specific pricing with volume discounts?',
`- Create a **price list** with base prices.
- Create a **discount list** with **tiered** (volume) adjustments — e.g. 1–99 units 0%, 100–499 5%, 500+ 10%.
- Build a **pricing strategy** combining the price list and discount list.
- Create a **pricing segment** for the customer (or customer class) and **assign the strategy** to that segment.
- Test with orders at each tier and check the price breakdown on the order line.`, 'D'],

['Procurement', 'How do blanket agreements with price breaks work?',
`- Create a **blanket purchase agreement** with items, prices and **price breaks** (by quantity, ship-to org, or dates).
- Requisitions and POs that reference the agreement get the right price automatically.
- **Cumulative** price breaks consider total quantity released so far; **non-cumulative** look at each release.
- Agreement **amount limits** and **effective dates** control usage.
- Enable **automatic sourcing** so requisitions pick up the agreement.`, 'D'],

['Procurement', 'How do you configure supplier-managed price changes through the supplier portal?',
`- Enable suppliers to request **agreement changes** via the **Supplier Portal** (change orders on agreements).
- Changes go through **approval** by the buyer (and rules by % change).
- Supplier must be registered with portal access and the right roles.
- Once approved, the new prices apply to new orders from the effective date.
- Audit trail kept on the agreement revision history.`, 'D'],

['Procurement', 'What are the key Procurement setups you configure for a new procurement BU?',
`- **Business unit** with Procurement and Requisitioning functions and **service provider** relationships.
- **Procurement agents** and their access.
- **Common options** (default currency, line types, document numbering).
- **Configure procurement business function** (default ship-to, buyer assignment, receipt/invoice options).
- **Document styles**, **approvals**, **catalogs and content zones**.
- **Supplier site assignments** for the BU.
- **Purchasing categories** and **buyer assignment rules**.`, 'B'],

['Procurement', 'How does supplier acknowledgment of purchase orders work?',
`- On the PO, set **acknowledgment required** (document, schedule-level) with a due date.
- Supplier acknowledges (accept/reject, propose changes) in the **Supplier Portal** or via B2B.
- Buyer reviews proposed changes and accepts/rejects them, creating a change order.
- Monitor pending acknowledgments with OTBI/infolets.

Useful for long-lead or critical items where you need the supplier's committed dates.`, 'D'],

['B2B', 'How do you exchange POs and invoices electronically with suppliers in Fusion?',
`- **Collaboration Messaging Framework (CMK)** — Fusion's B2B layer.
- Supports **OAGIS** XML and **cXML**; EDI (X12 850/855/856/810) usually via a **B2B service provider** or OIC + an EDI translator.
- Setup: trading partners, **collaboration documents**, delivery methods, and **supplier/customer associations**.
- Messages: outbound PO, inbound PO acknowledgment, inbound ASN, inbound invoice.
- Monitor in the **Collaboration Messaging History**.`, 'D'],

['Receiving', 'What is an ASN and how is it used in receiving?',
`An **Advance Shipment Notice** tells you what a supplier has shipped (items, quantities, lots/serials, expected date) before it arrives.
- Created by the supplier in the portal or via B2B (EDI 856).
- Receivers **receive against the ASN** — faster and more accurate.
- **ASBN** (advance shipment and billing notice) can also create the invoice.
- Can be required on the PO (ASN reference required) to force suppliers to send them.`, 'B'],

['Receiving', 'How does receipt accounting create accruals and how do you clear old accruals?',
`- On delivery to inventory or expense (accrue at receipt), Receipt Accounting books **Dr Inventory/Expense, Cr Receipt Accrual**.
- When the invoice is matched in AP, AP books **Dr Accrual, Cr Liability**; differences go to IPV/variance accounts.
- Use **Accrual Reconciliation** in Receipt Accounting (Review Receipt Accounting Distributions, accrual balances report) to find accruals with no invoice or mismatches.
- **Write off** with approval or **clear** after investigation (e.g. PO should be closed).
- Close POs regularly to stop accruals building up.`, 'D'],

['Inventory', 'What is consigned inventory and how is it handled in Fusion?',
`**Supplier consignment**: the supplier owns the inventory sitting in your warehouse until you consume it.
- A **consignment agreement** (BPA with consignment terms) with the supplier.
- Receipts go into inventory as **consigned** (owned by the supplier) — no liability.
- When you **consume** it (issue, transfer, or after aging), ownership transfers: a **consumption advice** is created and AP invoices the supplier (or pay-on-use).
- On-hand shows both owned and consigned quantities.

Customer consignment (your stock at a customer site) is the reverse.`, 'D'],

['Inventory', 'How do you set up and use transfer orders in Fusion?',
`- **Transfer orders** move inventory between orgs with a full order flow: request → approve → ship → receive.
- Created from **transfer requests**, planning, min-max, or the internal material transfer UI.
- Sourced by **sourcing rules**; shipping network and **transfer pricing** (cost or price list) defined.
- Can create intercompany accounting via SFO if orgs belong to different legal entities.
- Track status from the Transfer Orders work area.`, 'D'],

['Inventory', 'How do you configure cycle counting with approvals and tolerances?',
`- Create the **cycle count** for an org with subinventories, classes (ABC) and frequency.
- **Count tolerances**: quantity % and value thresholds — within tolerance post automatically, otherwise **recount** or **approve**.
- **Approval required**: always, never, or only if out of tolerance.
- **Count sequences** generated by schedules; counters enter counts (mobile/web).
- **Adjustments** post with an account (cycle count adjustment account) and create cost accounting.`, 'D'],

['Inventory', 'What is the difference between available to transact, available to reserve and on-hand?',
`- **On-hand** — total physical quantity in the location.
- **Available to reserve** — on-hand minus existing reservations (and some statuses).
- **Available to transact** — what you can actually move or issue now — excludes quantities that are reserved, in non-transactable subinventories, or with restrictive **material status** (e.g. lot on hold).

Material status (at subinventory, locator, lot, serial) controls which transactions are allowed — e.g. a quarantine status blocks shipping.`, 'B'],

['Costing', 'What are cost organizations, cost books and valuation units in Fusion Cost Management?',
`- **Cost organization** — a group of inventory orgs that share costing (e.g. a plant and its satellite warehouses).
- **Cost book** — a set of costing policies; primary book for financial reporting, plus optional others (e.g. for management or local GAAP).
- **Valuation structure / valuation unit** — the level at which costs are kept (e.g. by cost org, by cost org + subinventory, or by lot).
- **Cost profiles** assign the cost method (standard, average, FIFO) to items via **item cost profiles** and defaults.

These replace EBS's per-org cost method.`, 'D'],

['Costing', 'How do you troubleshoot an inventory transaction that hasn\'t been costed?',
`- Check **Transfer Transactions from Inventory to Costing** ran and succeeded.
- Look at **Review Cost Accounting Processes** / **Cost Processor errors**: missing cost, missing item cost profile, missing valuation unit, period closed in costing.
- Check the **cost accounting distributions** for errors in Create Cost Accounting (SLA account errors).
- Fix the root cause (e.g. define the missing standard cost), then re-run the cost processor.
- Make sure the cost period is open.`, 'D'],

['Costing', 'How do landed costs work in Fusion?',
`**Landed Cost Management** adds freight, duties, insurance and other charges to the item cost:
- Define **charge references** and **allocation basis** (quantity, weight, value, volume).
- Estimate charges on the PO (via **landed cost charge templates**) and/or use actuals from **trade operations** and AP invoices.
- Charges are allocated to receipt lines and included in inventory valuation (and COGS when sold).
- Variances between estimated and actual charges are adjusted.

Improves margin accuracy for imported goods.`, 'D'],

['Product Hub', 'What is a New Item Request (NIR) and how is it configured?',
`A **New Item Request** is a governed workflow for creating items.
- Item classes are configured for **NIR**: which **entities** (attributes, structures, AML) are required and the **workflow steps** (definition, approval) with assignees.
- Requester submits the NIR; **definition steps** route to teams to fill their attributes (e.g. costing, planning, purchasing).
- **Approval steps** approve; once approved, the item is created/released.
- Rules (validation rules) enforce data quality; **notifications** keep people informed.

Benefit: clean item data and auditability instead of free-for-all item creation.`, 'D'],

['Product Hub', 'What are change orders in Product Hub?',
`Change orders control **changes to existing items or structures** (attributes, BOM components, revisions).
- Created with affected items and proposed changes.
- Route through **workflow** (review, approval), similar to NIRs.
- On approval, changes are **implemented** (optionally with a new revision and effective date).
- Keeps an audit trail of what changed, who approved and when — important in regulated industries (pharma, medical devices).`, 'D'],

['Quality', 'How does Oracle Quality Management support inspections?',
`- **Inspection plans** define characteristics to check (e.g. dimension, pH), sampling, and acceptance criteria.
- Triggered at **receiving**, **work order operations**, or **inventory** (ad-hoc).
- Inspection results are recorded; failures can trigger **issues**, **nonconformances** and **corrective actions**.
- Rejected material moves to a quarantine status/subinventory.

Integrated with Receiving (inspection routing) and Manufacturing.`, 'D'],

['Planning', 'Describe how Supply Planning generates planned orders.',
`- **Data collections** bring on-hand, POs, work orders, sales orders, forecasts, item and BOM data into the planning repository.
- A **supply plan** runs with plan options (horizon, organizations, demand schedules, constraints).
- It nets demand against supply, explodes BOMs, applies **lead times**, **order modifiers** (min, max, fixed lot multiple) and **sourcing rules**.
- Creates **planned orders** (buy, make, transfer) and **recommendations** (reschedule in/out, cancel).
- Planners review in the Supply Planning work area and **release** planned orders to execution (requisitions, work orders, transfer orders).`, 'D']
]);
