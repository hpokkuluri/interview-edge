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
