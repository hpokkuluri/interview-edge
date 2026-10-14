// Oracle Lead Functional Consultant (5–10 yrs) — SCM. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-lead-scm'] = (QB['ora-lead-scm'] || []).concat([
['Workstream Leadership', 'How do you lead the SCM workstream on a Fusion implementation?',
`- Own **scope and plan** for Procurement, Inventory, OM, Costing, Product Hub, Manufacturing/Planning as in scope.
- Act as **design authority**: end-to-end flows (P2P, O2C, plan-to-produce, returns, intercompany) consistent across modules and with Finance.
- Lead **CRPs**, decisions log, gap resolutions with the operations leaders.
- Manage the **team**: assign modules, review configuration and designs, coach.
- Coordinate with **Finance** (costing, accruals), **integrations** (3PL, MES, e-commerce) and **data** (items, suppliers, on-hand).
- Drive testing, cutover and hypercare readiness for warehouses and plants.`, 'B'],

['Design', 'How would you design inventory organizations for a company with plants, DCs and third-party warehouses?',
`- One **inventory org per physical site** that has distinct costing, planning or legal ownership: each plant, each DC.
- **3PL warehouses**: separate inventory orgs (often with simplified setups) integrated via ship/receipt messages.
- **Subinventories** for stock types within a site (raw, WIP staging, FG, quarantine, returns).
- **Cost organizations** grouping orgs that share costs (e.g. all US DCs at one average cost).
- **Item master org** at the top; **shipping networks** and **sourcing rules** between orgs.
- Consider legal entities and **SFO** flows when orgs belong to different entities.

Avoid too many orgs — each adds setup, planning and period-close overhead.`, 'D'],

['Design', 'Standard vs average costing — how do you help a client choose?',
`## Standard cost
- Stable, predictable valuation; variances highlight purchasing and manufacturing performance.
- Needs cost maintenance (yearly updates) and variance analysis.
- Common in manufacturing.

## Average (perpetual) cost
- Reflects actual purchase prices; no variance analysis, less maintenance.
- Cost can swing with price changes; harder to spot inefficiencies.
- Common in distribution.

## How I decide with them
- Industry and margin analysis needs, finance team capacity, volatility of purchase prices, and group reporting standards. Prototype both with real data if unsure.`, 'D'],

['Design', 'How would you design centralized procurement for a company with 10 operating companies?',
`- One (or a few regional) **procurement BUs** serving many **requisitioning BUs** (service provider relationships).
- **Global agreements** with **enable for all requisitioning BUs**; local agreements where needed.
- **Category-based buyer assignment** (category managers).
- **Approval rules** in requisitioning BUs (budget owners) and procurement BU (buyer/contract approvals).
- **Supplier master** shared; site assignments to each client BU.
- **Sold-to legal entity** and **bill-to BU** per requisitioning company so AP and liabilities sit in the right entity.
- Use **SFO** if a central entity buys and resells internally.`, 'D'],

['Design', 'How do you design supply chain financial orchestration flows?',
`- Map **physical flows** (who ships/receives) and **financial flows** (who buys/sells legally) with the tax and finance teams.
- For each flow: **trade relationships** between entities, **transfer pricing rules** (cost-plus, price list), **documentation** (intercompany AR/AP invoices or journal only), and **accounting**.
- Define **financial orchestration flows** (procurement flow, shipment flow) and **assignment rules**.
- Consider **tax implications** (VAT/customs) and profit-in-inventory eliminations.
- Test end-to-end including intercompany invoices and costing in each entity.`, 'D'],

['Design', 'How would you handle drop-ship vs warehouse fulfillment decisions in the O2C design?',
`- **Item and supplier attributes** decide eligibility (e.g. bulky items always drop ship).
- **Sourcing rules** and **orchestration process assignment** route lines to drop-ship or warehouse processes.
- Consider **customer promise** (lead times), **margins** (freight), **visibility** (supplier ASNs for tracking), and **financial flows** (logical receipt/shipment accounting).
- Ensure **AP and AR** timing works (supplier invoice vs customer invoice).
- Returns: who receives them — supplier or your warehouse?`, 'D'],

['Product Hub', 'How do you set up item data governance in Product Hub?',
`- Define **item classes** with required attributes and numbering.
- Use **New Item Requests** with definition steps per function (engineering, procurement, planning, costing, quality) and an approval step.
- **Validation rules** and **templates** for consistency.
- **Change orders** for changes after release.
- **Data stewards** per class; KPIs on cycle time and data completeness.
- Integrate PLM (e.g. Oracle PLM or Agile) as the source for engineering items if applicable.

Result: fewer duplicate items and complete attributes before transactions start.`, 'D'],

['Product Hub', 'How would you clean and migrate a legacy item master with many duplicates?',
`- **Profile** the data: duplicates by description, manufacturer part number, UOM inconsistencies, inactive items.
- Agree **rules**: which items migrate (activity in last 24 months, open transactions, on-hand), golden record selection.
- **Standardize** descriptions and UOMs; map to new item classes and categories.
- Build **cross-reference** (legacy → new item) for open orders, BOMs and history.
- Load via **item import** in stages; reconcile counts and key attributes.
- Business data owners sign off each mock.`, 'D'],

['Procurement', 'How do you fix invoice matching problems on blanket POs with many receipts?',
`- Symptom: AP staff must pick specific receipts, often stale ones, and invoices go on hold.
- Option: change the **invoice match option** on the BPA/PO schedules from **Receipt** to **Purchase Order** — still **3-way** (receipt quantity is checked in total), but AP matches at PO level.
- Update **document style/agreement defaults** so new releases default correctly; consider **mass update** for open POs.
- Check impacts: price variance analysis by receipt, accrual clearing, reports.
- Train receivers to receive promptly so totals are right.
- Pilot with a few high-volume suppliers before rolling out.`, 'D'],

['Procurement', 'What KPIs would you set up for procurement?',
`- **Spend under management** / on-contract %.
- **PO cycle time** (requisition to PO).
- **Touchless PO %** (auto-created POs).
- **Savings** (negotiated vs baseline).
- **Supplier performance**: on-time delivery, quality rejects.
- **Maverick spend**.
- **Buyer productivity**.

Use OTBI/FDI dashboards; baseline before go-live.`, 'B'],

['Inventory', 'How would you run an inventory accuracy improvement program?',
`- Measure **record accuracy** (by count) and value variance by location.
- Implement **ABC cycle counting** with tolerances and root-cause codes.
- Fix **process causes**: receiving delays, unrecorded issues, wrong locators, UOM mistakes.
- Use **scanning/mobile** transactions instead of paper.
- **Locator control** and material status to stop misplacement.
- Weekly review of adjustments with warehouse leads.
- Target e.g. 98%+ accuracy for A items.`, 'D'],

['Inventory', 'How would you design lot and serial control for a pharmaceutical company?',
`- **Lot control** on all API, raw materials and finished goods; **serial control** at saleable units if **DSCSA/EU FMD** serialization applies (often in a dedicated serialization system integrated with Oracle).
- **Lot attributes**: expiry, retest date, manufacturer lot, grade, origin.
- **Material status**: quarantine → approved/released → rejected; QA release controls availability.
- **FEFO** picking.
- **Genealogy** for recall: from raw material lot to customer shipment.
- **GxP considerations**: validated system (CSV), audit trails, electronic signatures (21 CFR Part 11) for key transactions.`, 'D'],

['Inventory', 'How do you plan the inventory cutover for a warehouse go-live?',
`- **Freeze** transactions in legacy (stop receiving/shipping or log them manually).
- **Physical count** (or validated cycle-count snapshot) by item, lot, serial, locator.
- **Load on-hand** via inventory transaction import with costs from finance; reconcile quantity and value to legacy and GL.
- Convert **open POs, sales orders, transfers** after on-hand.
- **Catch-up** manual transactions after go-live.
- Shipping/receiving restart with floor support.

Plan around low-volume days and coordinate with customers/suppliers.`, 'D'],

['Order Management', 'How would you design the O2C process for a company selling through e-commerce and EDI?',
`- **Order capture**: e-commerce via REST order import (or OIC); EDI 850 via B2B provider → OM.
- **Validation and pricing**: pricing in Fusion or honor channel price.
- **Orchestration**: standard ship, drop ship, back-to-back.
- **GOP** for promising; ATP shown to customers.
- **Shipping** with carrier integration; **ASN (856)** back to EDI customers; tracking to e-commerce.
- **Invoicing** (810 for EDI), payments for e-commerce (card settlement).
- **Returns** process in both channels.
- **Monitoring** of order import failures.`, 'D'],

['Order Management', 'How do you handle order holds for export compliance?',
`- Integrate with a **trade compliance** solution (Oracle Global Trade Management or third party) to screen parties (denied party screening) and items (classification, licenses).
- Orchestration step triggers screening; failures place an **export compliance hold**.
- Compliance team reviews and releases or cancels.
- Audit trail for regulators.

Common for tech and pharma companies selling internationally.`, 'D'],

['Planning', 'How would you approach implementing Fusion Supply Planning?',
`- Start with **data readiness**: item planning attributes (lead times, order modifiers, safety stock), BOM and routing accuracy, sourcing rules.
- **Collections** setup and frequency.
- Design **plan types** (supply plan, replenishment, MPS) and horizons.
- Define **exceptions** planners act on; build workflows.
- **Pilot** a product line; compare recommendations against current planner decisions.
- Train planners on trust-building — they must see why the plan recommends something.
- Measure: service level, inventory, expedites.`, 'D'],

['Planning', 'How do you set safety stock?',
`Methods:
- **Fixed quantity** or **days of supply**.
- **Statistical** — based on demand variability, lead time variability and target **service level** (e.g. 95% → z = 1.65).
- Fusion supports **planning-calculated safety stock** using forecast error.

Decisions: higher service levels for A items and critical customers; lower for C items. Review quarterly — static safety stock goes stale.`, 'D'],

['Manufacturing', 'Discrete vs process manufacturing — what is different in Oracle?',
`- **Discrete**: items assembled from components (electronics, machinery) — BOMs, routings/work definitions, work orders with operations, serial tracking.
- **Process**: recipes and formulas with yields, by-products and co-products, batch sizes, potency/grade (chemicals, food, pharma).
- Fusion supports both: **Discrete Manufacturing** and **Process Manufacturing** (batch work orders with outputs).
- Costing differs: process manufacturing handles yields and co-product cost allocation.`, 'D'],

['Quality', 'How would you integrate quality inspection into receiving for a regulated company?',
`- **Inspection receipt routing** for regulated items.
- **Inspection plans** by item/supplier with sampling (AQL) and specifications.
- Received material goes to a **quarantine** subinventory/status until QA release.
- Failures create **nonconformances** and **supplier corrective actions (SCAR)**.
- **Electronic signatures** for release.
- Link to supplier performance scores.`, 'D'],

['Integration', 'What integrations are typical in an SCM implementation and how do you manage them?',
`- **3PL/WMS**: shipments and receipts.
- **MES** (manufacturing execution): work order completions and material consumption.
- **E-commerce/CRM/CPQ**: orders and pricing.
- **EDI/B2B**: suppliers and customers.
- **Carriers / TMS**: rates, labels, tracking.
- **PLM**: items and BOMs.
- **Planning tools** (if external).

## Management
- Integration inventory with owners, patterns (real-time vs batch), error handling, monitoring and SLAs.
- Build on **OIC** with standard APIs; test with partners early; plan cutover sequencing.`, 'B'],

['Integration', 'How would you design an MES integration for work order execution?',
`- **Fusion → MES**: released work orders, work definitions, item/lot master data (event-driven via business events or scheduled).
- **MES → Fusion**: operation completions, material consumption (with lots), assembly completions, scrap, resource time — via **REST APIs** (work order transactions).
- Decide **system of record** for each step to avoid double entry.
- **Error handling**: retries, an error queue, reconciliation reports (WIP, on-hand).
- **Timing**: near real-time for inventory accuracy; batching only where acceptable.`, 'D'],

['Testing', 'How do you test end-to-end SCM flows involving finance and integrations?',
`- **Scenario library**: P2P (stock, expense, services), O2C (stock, drop ship, back-to-back, ATO), returns (customer and supplier), transfers (intra and intercompany), plan-to-produce.
- Include **integration partners** (3PL, EDI) using their test environments.
- Validate **accounting** at each step: receipt, issue, COGS, intercompany invoices.
- **Day-in-the-life** tests with warehouse and procurement users.
- **Volume tests** for pick release and order import.`, 'B'],

['Team Leadership', 'How do you build a strong SCM team on a project?',
`- Mix of **deep module experts** and **end-to-end thinkers**.
- Pair juniors with seniors; rotate across modules for breadth.
- Clear **standards** (config workbooks, design templates, test evidence).
- Weekly **design reviews** where the team challenges each other.
- Recognition and growth paths; protect the team from chaos with clear priorities.`, 'B'],

['Stakeholders', 'How do you balance operations (speed) and finance (control) requirements in SCM design?',
`- Get both in the room for key designs (receiving, inventory adjustments, costing, returns).
- Use **risk-based controls**: approvals only where value or risk is high (e.g. adjustments above $X).
- Automate controls (tolerances, material status) instead of manual approvals.
- Make accounting impacts visible in CRPs.
- Agree KPIs that both care about (inventory accuracy, cost per order).`, 'B']
]);
