// ora-sfc-scm — generated from src/ora-sfc-scm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-sfc-scm'] = (QB['ora-sfc-scm'] || []).concat([
['Planning', 'What are sourcing rules, bills of distribution and assignment sets?',
`- **Sourcing rule** — for an org (or item), where supply comes from: buy from supplier X (60%) and Y (40%), or transfer from org A. Ranks give priority.
- **Bill of distribution** — sourcing across multiple orgs (global source chains).
- **Assignment set** — assigns sourcing rules at different levels: global, org, category, item, item-org. The most specific level wins.

Used by Planning, GOP, min-max and automatic requisition sourcing.`, 'D'],

['Planning', 'What is the difference between a forecast and a demand plan?',
`- A **forecast** is a prediction of future demand for items (from history, statistical models or input).
- A **demand plan** (Demand Management) manages forecasts across levels (product family, region, customer), blends statistical forecasts with sales input and **consensus**, and measures **forecast accuracy**.
- The approved demand plan feeds the **supply plan** as demand.

Good answer: mention forecast consumption (sales orders consume the forecast to avoid double counting).`, 'D'],

['Shipping', 'How do you configure shipping for a new warehouse?',
`- **Shipping parameters** for the org (pick release defaults, staging subinventory, auto-pack, ship confirm rules).
- **Picking rules** (FIFO/FEFO, locator order).
- **Release rules and release sequence rules.**
- **Document sets** (pick slips, packing slips, BOL) and printers.
- **Carriers and ship methods**, freight terms, shipping costs.
- **Shipping exceptions** and their actions.
- Test pick → pack → ship confirm → invoicing.`, 'D'],

['Shipping', 'What are shipping exceptions?',
`Exceptions flag problems during shipping — e.g. **short pick**, damaged goods, missing documents.
- Defined with a severity (error, warning, info) and handling.
- Can be logged manually or automatically.
- Errors block ship confirm until resolved.
- Reports help track recurring warehouse problems.`, 'B'],

['Logistics', 'What does Oracle Transportation Management (OTM) add to Fusion SCM?',
`OTM handles **transportation planning and execution**:
- Load building and **route optimization**.
- **Carrier selection** and **rate management**.
- **Tendering** to carriers and tracking.
- **Freight payment and audit**.
- Integrates with Fusion Shipping (shipments go to OTM; planned shipments come back).

Useful for high-volume shippers to reduce freight cost.`, 'D'],

['Logistics', 'What is Warehouse Management (WMS) and how is it different from standard Inventory?',
`- Standard Inventory tracks quantities by org/subinventory/locator.
- **WMS** adds **task-based** warehouse operations: directed putaway, wave picking, **LPNs** (license plate numbers), cartonization, cross-docking, labor management, mobile RF devices.
- Fusion now has **Warehouse Management** built on Inventory, and many companies use specialized WMS (Manhattan, Blue Yonder) integrated via APIs.

LPN = a container ID (pallet/case) you transact as a unit.`, 'D'],

['Manufacturing', 'What is backflushing?',
`**Backflushing** automatically issues components when an operation or assembly is reported complete, instead of issuing them manually beforehand.
- **Supply type** on the component: Push (manual issue), **Assembly Pull** (at completion), **Operation Pull** (at operation completion), Bulk, Phantom.
- Reduces transactions for high-volume, low-value components.
- Risk: inaccurate on-hand if actual usage differs (scrap) — needs good BOM accuracy and scrap reporting.`, 'D'],

['Manufacturing', 'How is work order cost calculated and how are variances recognized?',
`- **Standard cost**: assembly valued at standard; actual material, resource and overhead charged to the work order. At **close**, variances are calculated: material usage, resource efficiency, rate variances.
- **Actual/average cost**: assembly cost = actual costs charged.
- Accounting: Dr WIP for issues and resources; Cr WIP / Dr Inventory at completion; variances to variance accounts at close.

Closing work orders on time is key for clean month-end costing.`, 'D'],

['Integration', 'What accounting does a sales order shipment create, and where?',
`- At **ship confirm**: Cost Management creates **Dr COGS (or Deferred COGS), Cr Inventory** at the item cost.
- At **invoicing** in AR: **Dr Receivable, Cr Revenue (or Deferred Revenue), Cr Tax**.
- If revenue is deferred (e.g. acceptance clause), **COGS is deferred too** and recognized in line with revenue (COGS matching to revenue recognition).
- SLA creates accounting in each subledger; transfer to GL.`, 'D'],

['Integration', 'How do you integrate a third-party logistics (3PL) provider with Fusion?',
`- **Outbound**: shipment requests (from OM/pick release) sent to the 3PL — via OIC, B2B messaging or file.
- **Inbound**: ship confirmations (with tracking, lots/serials) back to Fusion via REST/SOAP shipment confirmation services; receipts via receiving APIs.
- Inventory sync: periodic on-hand snapshots to reconcile.
- Error handling and monitoring dashboards; idempotency for retries.
- Often modeled as an external warehouse org with **Fulfillment** connectors in OM.`, 'D'],

['Integration', 'What is Oracle Integration Cloud (OIC) and how is it used with SCM?',
`OIC is Oracle's integration platform:
- **Adapters**: Fusion ERP Cloud adapter (REST/SOAP, business events, FBDI), FTP, database, REST, EDI.
- **Business events** (e.g. "Purchase Order Approved") trigger integrations in real time.
- **Scheduled integrations** for batch (e.g. nightly item sync).
- **Process automation** and **B2B** capabilities.

Typical SCM uses: PO to suppliers, ASN/receipts from 3PLs, item sync to PLM/MES, orders from e-commerce.`, 'B'],

['Reporting', 'What OTBI subject areas would you use for procurement spend analysis?',
`- **Procurement – Spend Real Time** — invoice-based spend by supplier, category, BU.
- **Purchasing – Purchase Orders Real Time** — PO amounts, status, buyer.
- **Procurement – Requisitions Real Time** — requisition cycle times.
- **Supplier Performance**, **Agreements** subject areas.
- Combine with categories and cost centers for slice-and-dice.

Also the prebuilt **Procurement dashboards** and **Spend Classification** (AI-based categorization).`, 'D'],

['Security', 'How is SCM data security set up in Fusion?',
`- **Job roles** (Buyer, Warehouse Manager, Order Manager) carry function privileges.
- **Data access**: by **BU** (procurement, requisitioning, order management), by **inventory organization** (Manage Data Access for Users / inventory org access), by **cost organization** for costing.
- **Procurement agents** add document-level access.
- **Item data security** in Product Hub by item class and roles.
- Test with real user accounts; avoid giving superuser roles to business users.`, 'D'],

['Data Migration', 'What is your approach to converting open sales orders and POs?',
`- **Cutover strategy**: convert only **open lines** (not shipped/received); closed history stays in legacy or a data archive.
- **POs**: load via Purchase Order Import FBDI with the **remaining quantity**, original PO number in a reference field; approval bypass for converted docs.
- **Sales orders**: load via order import (FBDI or REST) with original order references, pricing frozen to legacy prices.
- **Open receipts / RNI**: decide accrual treatment with finance.
- Reconcile quantities and values; business signs off after each mock.`, 'D'],

['Testing', 'How do you plan system integration testing (SIT) for an SCM implementation?',
`- Build **end-to-end scenarios** covering P2P, O2C, plan-to-produce, returns and intercompany flows — across modules and integrations.
- Include **finance**: verify accounting for each step.
- Use converted data from a mock load.
- Assign testers by role; track defects in a tool with severity and owners.
- Run **regression cycles** after fixes.
- Exit criteria: no open critical/high defects, key scenarios passed and signed.`, 'B'],

['Behavioral', 'Tell me about a time you improved a supply chain process using Oracle.',
`## Example (STAR)
- **Situation:** Buyers spent hours each week converting requisitions to POs manually.
- **Task:** I owned procurement configuration.
- **Action:** I analyzed 6 months of requisitions; 70% were repeat items from 15 suppliers. I set up blanket agreements with those suppliers, loaded catalogs and enabled automatic PO creation.
- **Result:** About 65% of requisitions became POs without buyer touch; buyers moved to sourcing work; PO cycle time dropped from 3 days to same-day.

Tip: Quote the before/after metric.`, 'B'],

['Behavioral', 'How do you work with the finance team on SCM topics?',
`- Involve finance early on **costing method, accrual and variance accounts**, intercompany flows and inventory valuation.
- Walk them through accounting for each SCM transaction in CRPs.
- Agree month-end responsibilities (accrual review, cost close, inventory reconciliation).
- Build shared reports (inventory valuation to GL reconciliation).
- Speak their language — debits/credits, not just screens.`, 'B'],

['Behavioral', 'Describe a situation where a go-live didn\'t go as planned.',
`## Example (STAR)
- **Situation:** At go-live, pick release created tasks for the wrong subinventory, and the warehouse couldn't ship.
- **Task:** I owned shipping configuration.
- **Action:** I quickly found the picking rule was using a test subinventory that had been converted with stock. I corrected the rule, re-released the orders, and moved stock with the warehouse lead. Then I added a cutover checklist item to validate picking rules against production data.
- **Result:** Shipping resumed within four hours; we met the day's shipments with overtime.

What matters: calm triage, root cause, prevention.`, 'B'],

['Order Management', 'How do configured (ATO) items flow through Order Management?',
`- **Assemble-to-order (ATO)** model items are configured by the customer (via **Configurator**) at order entry.
- The selected options create a **configured item** (unique item/BOM) when the order is scheduled.
- A **work order** (or supply from a supplier for buy ATO) is created and reserved to the order.
- After completion, it ships like a normal item.
- Pricing comes from model + options.

PTO (pick-to-order) kits are picked from stock rather than built.`, 'D'],

['Procurement', 'What is spend authorization or sourcing compliance and why does it matter?',
`It ensures purchases go through **approved suppliers and agreements**:
- **Approved Supplier List (ASL)** and **sourcing rules** point requisitions to contracted suppliers.
- Catalog-first buying through Self Service Procurement.
- **Non-catalog requests** route for extra approval.
- Reports on off-contract spend ("maverick spend").

Benefits: better prices, fewer suppliers to manage, compliance with policies.`, 'B'],

['Procurement', 'How does Supplier Qualification Management work?',
`- **Questions** and **questionnaires** (e.g. certifications, insurance, ESG, diversity).
- **Qualifications** and **assessments** — scored evaluations of a supplier for a business relationship.
- **Initiatives** send questionnaires to many suppliers at once.
- Results feed supplier eligibility (e.g. only qualified suppliers can be awarded in sourcing).
- Expiry tracking for certificates.`, 'D'],

['Inventory', 'How do you handle lot expiry and FEFO in Oracle?',
`- Enable **lot control** with **shelf life** (days) on the item; lots get an expiration date at receipt.
- **Picking rules** with **FEFO** (first expired, first out) allocate the nearest-expiring lots first.
- **Material status** can block expired lots from being shipped.
- Reports/alerts for lots near expiry; lot **grade** and **retest dates** for pharma.
- Expired lots: move to a quarantine subinventory or scrap with approval.`, 'D'],

['SCM Basics', 'What setups must exist before you can create an inventory organization in Fusion?',
`- **Location** (address).
- **Legal entity** and **business unit** (profit center BU).
- **Item master organization**.
- **Calendar** (workday calendar for scheduling).
- **Cost organization** relationship (for costing).
- **Ledger** association via legal entity/BU.

Then: inventory org parameters, subinventories, locators, shipping/receiving parameters, and cost setups.`, 'B'],

['Quarterly Updates', 'How do you approach quarterly update testing for SCM?',
`- Review **What's New** for Procurement, Inventory, OM, Costing, Product Hub.
- Run an **automated regression** pack for P2P, O2C, transfers, cost close and key integrations (OIC, B2B).
- Check custom reports (BIP/OTBI), Visual Builder extensions and **REST API** changes.
- Test opt-in features in a sandbox before enabling.
- Plan a quick smoke test after the PROD update weekend.`, 'B']
]);

QB['ora-sfc-scm'] = (QB['ora-sfc-scm'] || []).concat([
['Procurement', 'How do you handle requisitions that fail automatic PO creation?',
`- Check the requisition line in **Process Requisitions** — the reason is usually shown (no source agreement, supplier site inactive, agreement expired, price/UOM mismatch, missing procurement BU access).
- Fix the root data: renew the agreement, add the site assignment, correct the UOM conversion.
- Re-submit or let the buyer create the PO manually.
- Track repeat failures in a report so the root cause (e.g. expired agreements) is fixed before it hits users.`, 'B'],

['Inventory', 'What are the key inventory organization parameters you set?',
`- **Item master org**, schedule (calendar), **default subinventory/locator controls**.
- **Lot and serial** number generation and uniqueness.
- **Negative balances allowed** or not.
- **Picking and putaway** defaults (picking rule, allocation).
- **ATP and reservations** settings.
- **Shipping/receiving** parameters, interorg transfer defaults.
- **Costing**: linked cost org, default accounts.

Decisions like negative balances need business agreement — they affect controls and costing.`, 'D']
]);
