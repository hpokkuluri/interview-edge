// ora-lead-scm — generated from src/ora-lead-scm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-lead-scm'] = (QB['ora-lead-scm'] || []).concat([
['Costing', 'How do you reconcile inventory valuation to the General Ledger?',
`- Run the **inventory valuation report** (perpetual) as of period end by cost org/valuation unit.
- Compare to **GL inventory account balances** (by org via cost center or org segment).
- Differences: un-costed transactions, cost accounting not created/transferred, manual GL journals to inventory accounts, wrong account mapping in cost accounting rules.
- Use **third-party/control-account style** discipline: block manual journals to inventory accounts.
- Close the **cost period** only after reconciling.`, 'D'],

['Costing', 'What are the steps of the cost period close in Fusion Cost Management?',
`- Make sure inventory/receiving/WIP transactions are complete and **transferred to costing**.
- Run the **cost processor**; fix errors.
- Run **Create Receipt Accounting** and **Create Cost Accounting**; transfer to GL.
- Process **landed cost** adjustments and **standard cost updates** if any.
- **Close** work orders and calculate variances.
- Review **unprocessed transactions**; reconcile valuation to GL.
- **Close the cost period** (cost org/book), then open the next.`, 'D'],

['Returns', 'How would you design a returns (RMA) process with inspection and refurbishment?',
`- **Return orders** referencing original orders; return reasons drive the flow.
- **Receive** into a returns subinventory with **inspection** routing.
- Disposition: restock (good), **refurbish** (work order to repair), scrap, or return to vendor.
- **Credit** created through AR once received/inspected (or immediately for trusted customers).
- **Cost**: returned items valued at original cost or a refurbishment cost.
- Analytics on return reasons to fix root causes.`, 'D'],

['Logistics', 'When would you recommend a WMS over standard Fusion Inventory?',
`- **High volume** DCs (many lines/day), complex picking (waves, zones, cartonization).
- **LPN-based** operations, cross-docking, directed putaway.
- **Labor management** and automation (conveyors, robots).
- **Mobile RF** throughout.

Fusion Warehouse Management covers many of these natively now; best-of-breed WMS (Manhattan, Blue Yonder) for very large or automated DCs. Decision: volume, complexity, automation, and cost to integrate.`, 'D'],

['EBS', 'What changes when moving SCM from EBS to Fusion?',
`- **OM workflows → order orchestration** (process-driven, with change management).
- **Inventory org-level costing → Cost organizations and cost books**.
- **Item categories/templates → Product Hub item classes, NIRs, change orders**.
- **ASCP → Supply Chain Planning Cloud** (with collections from Fusion).
- **Advanced Pricing modifiers → Pricing strategies, segments and algorithms**.
- **SFO** for intercompany flows (vs EBS intercompany transaction flows).
- **Customizations → extensions** (VBCS, OIC); reports → OTBI/BIP.

Treat it as a redesign, not a technical upgrade.`, 'D'],

['Data Migration', 'How do you plan SCM data conversion?',
`## Objects and sequence
- Locations, orgs (setup) → suppliers, customers → items, categories, cross-references → BOMs/work definitions → costs → on-hand (lots/serials) → open POs, agreements → open sales orders → open work orders → open transfers.

## Approach
- Cleanse in source; mapping owned by business.
- **Three mocks** minimum, with timing and reconciliation each time.
- Automated validation scripts (counts, values, key attributes).
- Sign-off by data owners.`, 'B'],

['Cutover', 'What makes an SCM cutover harder than a Finance cutover?',
`- **Physical operations** don't stop: trucks arrive, orders ship — you need a freeze window or manual catch-up.
- **On-hand accuracy** depends on a count at cutover.
- **Open documents** in motion (in-transit shipments, partially received POs, picked-not-shipped orders).
- **Integrations** with partners must switch on the same day (EDI, 3PL, carriers).
- **Labels and documents** must work on day one.

Mitigation: rehearsals, partner communication, extra staff, day-1 war room.`, 'D'],

['Cutover', 'What do you monitor in the first two weeks after an SCM go-live?',
`- **Orders**: import errors, lines stuck in orchestration, backorders, on-time shipping.
- **Receipts**: ASN/receipt errors, quarantine backlog.
- **Inventory**: negative balances, unprocessed transactions, cycle count variances.
- **Costing**: uncosted transactions.
- **Integrations**: 3PL/EDI failures.
- **Procurement**: requisitions failing auto-PO, approval delays.
- **Users**: ticket volumes and training gaps.

Daily stand-up with operations and IT; track KPIs vs baseline.`, 'B'],

['Behavioral', 'Tell me about a difficult trade-off you made in an SCM design.',
`## Example (STAR)
- **Situation:** Operations wanted every warehouse adjustment to be approved; that would slow cycle counting.
- **Task:** Balance control with throughput.
- **Action:** I analyzed adjustment history: 90% of adjustments were under $200. We set **auto-post** for small, in-tolerance adjustments, **approval** for high-value or A items, and a weekly review report.
- **Result:** Cycle counting kept pace; finance kept control over 95% of adjustment value; audit accepted the design.`, 'B'],

['Behavioral', 'Describe how you handled a supplier or partner that delayed an integration.',
`## Example (STAR)
- **Situation:** A 3PL couldn't deliver their API changes for shipment confirmations 4 weeks before go-live.
- **Task:** I owned the logistics integration readiness.
- **Action:** Escalated with the business owner; agreed a **fallback** using their existing flat-file format via OIC; built and tested it in two weeks while they finished the API.
- **Result:** Go-live stayed on date; we switched to the API a month later.

Lesson: always have a fallback for external dependencies.`, 'B'],

['Procurement', 'How would you roll out Self Service Procurement to all employees?',
`- **Catalogs first**: top categories by spend in local/punchout catalogs.
- **Smart forms** for common non-catalog requests (services, IT).
- **Approval rules** simple and based on HR hierarchy + amount.
- **Training**: short videos, in-app guidance; super users per department.
- **Pilot** with a few departments; measure catalog adoption and approval times.
- **Communications** explaining "how to buy".
- Track **catalog spend %** and requisition cycle time.`, 'B'],

['Procurement', 'How would you design supplier onboarding with risk and compliance checks?',
`- **Registration** via supplier portal with required documents (W-9/W-8, insurance, certifications).
- **Supplier Qualification** questionnaires for risk (financial, ESG, cyber, sanctions).
- **Third-party screening** (sanctions, D&B risk scores) via integration.
- **Approval** by procurement, finance (bank details verification), and compliance.
- **Bank account verification** process (callback) to prevent fraud.
- Periodic **requalification** and certificate expiry alerts.`, 'D'],

['Order Management', 'How do you design GOP and sourcing for multi-warehouse fulfillment?',
`- **Sourcing rules** by region (customer ship-to zone → nearest DC, with alternates ranked).
- **ATP rules** (supply types considered, infinite time fence, lead times).
- **Allocation** for constrained items by channel/customer priority.
- **Split shipments** policy (allowed or not).
- Run **collections** frequently for accurate supply.
- Measure promise accuracy and adjust rules.`, 'D'],

['Planning', 'How do you get planners to trust a new planning system?',
`- **Clean data** first — wrong lead times destroy trust.
- Run the new plan **in parallel** and compare recommendations with what planners would do; explain differences.
- Show **pegging** (why a planned order exists).
- Start with **exceptions** that matter rather than thousands of messages.
- Involve senior planners in tuning parameters.
- Celebrate quick wins (expedites avoided, inventory reduced).`, 'B'],

['Costing', 'How do you handle intercompany profit in inventory with SFO?',
`- When one entity sells to another at transfer price above cost, the buying entity's inventory includes **intercompany profit**.
- SFO with **transfer pricing** creates the intercompany sale/purchase and costs in each entity.
- At group level, **unrealized profit in inventory** must be **eliminated** in consolidation until the goods are sold externally.
- Fusion can track **profit in inventory** (e.g. via cost books/elemental costs for intercompany markup) to support elimination.
- Agree the approach with group finance.`, 'D'],

['SCM Strategy', 'How do you prioritize SCM capabilities for phase 1 vs phase 2?',
`- **Phase 1 (core)**: what's needed to run the business on day one — procurement, inventory, OM, costing, critical integrations.
- **Phase 2 (optimize)**: planning sophistication, supplier qualification, advanced analytics, WMS features, automation (AI agents).
- Criteria: **business criticality**, **dependencies**, **risk**, **change capacity** of the organization.
- Keep phase 1 lean but complete end-to-end.`, 'B'],

['AI', 'Where can AI help in Oracle SCM today?',
`- **Procurement**: AI agents for supplier onboarding, requisition assistance, contract analysis; spend classification.
- **Planning**: machine-learning demand forecasting, supply chain risk alerts.
- **Order management**: order exception handling agents; generative AI for customer communications.
- **Inventory**: anomaly detection in adjustments.
- **Product Hub**: AI-generated item descriptions and attribute enrichment.

Approach: start with high-volume, rules-based tasks with human review.`, 'D'],

['Inventory', 'How do you set up material status control for quarantine and QA release?',
`- Define statuses (e.g. **Quarantine**, **Approved**, **Rejected**, **Hold**) with **allowed transactions** (e.g. Quarantine: no shipping, no issue to production, allows transfer to QA lab).
- Assign default status at **subinventory**, **locator**, **lot** or **serial** level.
- QA changes status after inspection (with electronic signature in regulated environments).
- Picking/ATP respects status.
- Reports of material in quarantine with ageing.`, 'D'],

['Procurement', 'How do you manage contracts in Oracle Procurement?',
`- **Procurement Contracts** for authoring with **clause library**, templates and deviations review.
- Link contracts to **agreements** and **POs** (contract terms on purchase documents).
- **Approval workflow** including legal for non-standard clauses.
- **Deliverables** tracking (obligations) with reminders.
- **Repository** with renewals and expirations alerts.
- E-signature integration.`, 'D'],

['Workstream Leadership', 'What risks do you watch most closely on an SCM program?',
`- **Data quality** (items, BOMs, lead times) — affects planning and costing.
- **Integration readiness** of external partners.
- **Operational cutover** (physical inventory, open orders).
- **User readiness** on the floor (warehouse, plants).
- **Finance alignment** on costing and accounting.
- **Performance** for high-volume processes.

I track them weekly with owners and mitigation, and escalate early.`, 'B'],

['Behavioral', 'Why do you want to be a Lead SCM consultant?',
`- You enjoy **end-to-end** supply chain thinking — how a design choice in procurement affects costing and customer service.
- You've grown from module expert to **owning designs and guiding others**.
- Examples: flows you designed, teams you guided, measurable results (cycle time, accuracy).
- You want to keep **hands-on** while leading.

Close: "I can own your SCM workstream and make it work with Finance from day one."`, 'B'],

['Order Management', 'How do you design order holds and approvals for high-value or unusual orders?',
`- **Credit check** at booking/scheduling via Credit Management.
- **Pricing approvals** for discounts beyond thresholds (via approval rules or CPQ upstream).
- **Manual review holds** triggered by rules (order value > $X, new customer, high-risk country).
- Holds defined by **step** (pre-schedule vs pre-ship).
- Clear owners for release and SLAs.
- Dashboard of orders on hold by reason and age.`, 'D'],

['Manufacturing', 'How would you approach a Fusion Manufacturing implementation for a mid-size plant?',
`- **Plant data**: work centers, resources, calendars, item structures, work definitions — validated by engineering.
- **Work order types** and execution: manual vs backflush; operation reporting granularity (don't overdo it).
- **Shop floor** devices/tablets; possible **MES** integration.
- **Costing**: standard cost with resource and overhead rates; variance reporting.
- **Quality** inspections at key operations.
- **Planning** feeds (planned orders → work orders).
- Pilot one production line first.`, 'D'],

['Testing', 'How do you validate costing results before go-live?',
`- Pick **representative items** (purchased, manufactured, multi-level).
- Compare Fusion **cost rollups** with legacy and finance expectations.
- Run full flows (receipt, issue, completion, shipment) and verify **accounting** and **variances**.
- Reconcile converted **inventory value** to legacy and GL.
- Finance signs off on cost scenarios and valuation.`, 'D'],

['Workstream Leadership', 'How do you keep SCM and Finance designs aligned?',
`- **Joint design sessions** for integration points: receiving accruals, cost accounting, intercompany, AP matching, AR invoicing, revenue/COGS.
- A **shared accounting matrix**: each SCM transaction → expected journal → owner.
- **Joint CRPs and SIT scenarios**.
- **Decision log** visible to both workstreams.
- Regular sync between leads.`, 'B']
]);

QB['ora-lead-scm'] = (QB['ora-lead-scm'] || []).concat([
['Receiving', 'How would you speed up receiving at a busy distribution center?',
`- Require **ASNs** from top suppliers so receipts are pre-populated.
- **Barcode/mobile receiving** with LPN or lot scanning.
- **Direct delivery** routing for low-risk items; inspection only where needed.
- **Receiving tolerances** that auto-accept small differences.
- **Dock scheduling** to level the workload.
- Measure dock-to-stock time and receipt backlog daily.`, 'B']
]);
