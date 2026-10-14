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
