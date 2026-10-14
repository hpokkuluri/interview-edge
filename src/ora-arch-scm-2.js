QB['ora-arch-scm'] = (QB['ora-arch-scm'] || []).concat([
['Order Management', 'How would you design order orchestration to support omnichannel fulfillment (ship from store, BOPIS)?',
`- **Fulfillment nodes**: DCs, stores, suppliers (drop ship) — modeled as orgs or external fulfillment systems.
- **Sourcing logic** by distance, inventory, cost and capacity (GOP rules or an external order-routing engine).
- **Orchestration processes** per fulfillment type: ship from DC, ship from store, buy online pick up in store, drop ship.
- **Inventory visibility** across nodes (store inventory feeds).
- **Change and cancel** handling across systems.
- **Returns anywhere** with routing to the right node.`, 'D'],

['Inventory', 'How would you design inventory visibility across Oracle and non-Oracle locations?',
`- **Fusion** holds on-hand for Oracle-managed orgs.
- **External locations** (3PLs, consignment sites, stores) send snapshots/transactions into Fusion as external orgs or into a visibility layer.
- **GOP** collects supply from all sources for promising.
- **Control tower** dashboards for availability and aging.
- Agreed **latency** and reconciliation process.`, 'D'],

['Procurement', 'How would you architect source-to-pay for a large enterprise on Fusion?',
`- **Supplier lifecycle**: registration, qualification, risk screening, performance.
- **Sourcing** events and **contracts** with clause library.
- **Catalogs** and agreements; **guided buying** in Self Service Procurement.
- **Approvals** by budget owners and category.
- **Receiving/acceptance** for goods and services.
- **AP automation** (e-invoicing, IDR, matching).
- **Spend analytics** and savings tracking.
- **Integrations**: supplier networks, risk providers, e-signature.`, 'D'],

['Procurement', 'How do you design procurement for services (contractors, SOWs) in Oracle?',
`- **Fixed-price** and **rate-based** services lines; **complex work** (progress payments, retainage) for construction/projects.
- **Service receipts** (amount or quantity based) — receipt by requester or self-billing.
- **Contingent workforce** may use a VMS (e.g. Fieldglass/Beeline) integrated with Fusion for POs and invoices.
- **Approvals** by project/cost center owner.
- Matching options: 2-way or 3-way with service acceptance.`, 'D'],

['Manufacturing', 'How do you architect manufacturing execution between Fusion and MES?',
`- **Fusion**: planning, work orders, costing, inventory, quality records of record.
- **MES**: shop-floor execution detail (machine data, operator steps, electronic batch records in pharma).
- **Integration**: work orders and BOM/recipes to MES; consumption, completions, labor/machine time, quality results back.
- **Granularity**: send summaries where detail isn't needed in ERP.
- **Timing**: near real time for inventory-critical transactions.
- **Error handling** and reconciliation (WIP balances).`, 'D'],

['Maintenance', 'How does Oracle Maintenance fit into the SCM architecture?',
`- **Asset maintenance** for equipment: assets, work orders, preventive maintenance schedules, meters.
- Material for maintenance from **inventory** (MRO spares), purchases via procurement.
- **Costs** to assets/cost centers; integration with Fixed Assets.
- **IoT** data can trigger condition-based maintenance.
- Benefits: uptime, spare parts optimization.`, 'D'],

['Quality', 'How would you architect a closed-loop quality process with Oracle?',
`- **Inspection plans** at receiving, production and shipping.
- **Nonconformance** records for failures → **investigation** → **CAPA** (corrective/preventive actions).
- **Supplier quality**: SCARs, supplier scorecards feeding sourcing decisions.
- **Change orders** in Product Hub when design/specs change.
- **Complaints** (customer) linked to lots and genealogy.
- Analytics on defect trends.`, 'D'],

['Data Architecture', 'How do you govern master data in an SCM landscape?',
`- **Data owners** per domain (items, suppliers, customers, locations, BOMs).
- **Stewards** and workflows (NIR, supplier registration, customer onboarding).
- **Quality rules** at entry, not after.
- **KPIs**: completeness, duplicates, time to create.
- **Change control** for structural data (UOMs, item classes).
- Regular **data quality reviews** with business leaders.`, 'B'],

['Testing', 'How do you test a global SCM template before the first rollout?',
`- **Process scenarios** covering all variants (product types, fulfillment types, entities).
- **Integration tests** with real partner test environments.
- **Accounting verification** with finance for each flow.
- **Volume/performance tests** for peak days.
- **Day-in-the-life** simulations in a warehouse and plant.
- **Cutover rehearsal**.
- Exit criteria agreed with business leadership.`, 'B'],

['Cutover', 'How would you plan a wave-based go-live for 12 DCs?',
`- **Pilot DC** (representative but lower risk); stabilization period (4–6 weeks) before wave 2.
- **Waves** grouped by region/complexity; avoid peak seasons.
- **Repeatable cutover runbook** with timing from pilot.
- **Inventory counts** and on-hand loads per wave.
- **Partner communication** (carriers, customers, suppliers).
- **Hypercare** teams moving with waves.
- Lessons learned after each wave.`, 'D'],

['Roadmap', 'How do you build an SCM digital roadmap?',
`- Assess **maturity**: planning, procurement, manufacturing, logistics, data, analytics.
- Link to **business goals**: service level, working capital, cost, resilience, sustainability.
- Prioritize initiatives: e.g. Product Hub governance → planning → control tower → AI agents.
- **Sequencing** respecting data foundations.
- Business cases and KPIs per initiative.
- Quarterly review with supply chain leadership.`, 'B'],

['Sustainability', 'How can Oracle SCM support sustainability (ESG) goals?',
`- **Supplier ESG** data via qualification questionnaires and third-party ratings.
- **Emissions** tracking (Scope 3 purchased goods) using spend or activity data — Oracle Fusion Sustainability/partner tools.
- **Transportation optimization** (OTM) to reduce emissions.
- **Product data**: materials, recyclability attributes in Product Hub.
- **Reporting** for ESG disclosures (CSRD etc.).`, 'D'],

['Architecture', 'How would you evaluate whether to use Fusion native capability vs a best-of-breed tool (e.g. WMS, planning)?',
`- **Fit**: does Fusion meet the requirements today (and on the roadmap)?
- **Complexity/scale**: is the use case at the edge of Fusion's capability?
- **Integration cost** and data latency of a separate tool.
- **Total cost of ownership**: licenses, support, skills.
- **User experience** and adoption.
- **Strategic direction**: platform consolidation vs differentiation.
- Run a **proof of concept** with real scenarios for close calls.`, 'B'],

['Behavioral', 'How do you handle disagreements between workstream leads on cross-module design?',
`- Get both to state the **business requirement** and constraints.
- Lay out options and impacts on each module (including finance).
- Decide based on **end-to-end outcome**, not module convenience.
- Document in the design authority log; communicate.
- Escalate to the sponsor only if business trade-offs need executive decision.`, 'B'],

['Integration', 'How would you design integration with a supplier collaboration network?',
`- Network (e.g. a B2B supplier network) connects to Fusion via OIC/B2B: POs out, acknowledgments, ASNs, invoices, catalogs in.
- **Supplier onboarding** to the network vs portal (small suppliers stay on the Fusion supplier portal).
- **Mapping** of network documents to Fusion objects.
- **Duplicates/consistency** checks between network and portal channels.
- **Monitoring** and partner support model.`, 'D'],

['Planning', 'What is S&OP and how would you support it with Oracle?',
`**Sales & Operations Planning** is a monthly business process aligning demand, supply and finance:
- Demand review → supply review → financial reconciliation → executive S&OP meeting.
- Oracle **Sales and Operations Planning** (Fusion SCP) provides plans, scenarios, financial views, and collaboration.
- Integrates demand plans, supply plans and **EPM** financial plans.
- Outcome: one agreed plan driving execution and finance forecasts.`, 'D'],

['Inventory', 'How would you design an inventory optimization approach?',
`- **Segment** items (ABC/XYZ: value and variability).
- Set **service level targets** by segment.
- Calculate **safety stock** statistically (demand and lead-time variability).
- Optimize **order quantities** (EOQ, lot sizes) vs ordering costs.
- **Multi-echelon** thinking for DC networks (where to hold buffers).
- Monitor **excess and obsolete** inventory; disposition rules.
- Tools: Fusion Replenishment Planning or specialized optimization.`, 'D'],

['Architecture', 'How do you approach a supply chain control tower design?',
`- **Use cases first**: late supplier POs, stockout risk, delayed shipments, quality holds, capacity issues.
- **Data**: near-real-time feeds from Fusion (events), WMS/TMS, carriers, suppliers.
- **Alerts** with thresholds and owners; **recommended actions** (AI where valuable).
- **Workflow** to act (expedite, reallocate, notify customer).
- **Dashboards** for leadership and operations.
- Start small; expand use cases quarterly.`, 'D'],

['Behavioral', 'How do you keep your SCM architecture skills current?',
`- Oracle **release readiness** for SCM, planning, logistics.
- **Customer Connect** and SCM user groups.
- Hands-on with new features (Redwood pages, AI agents) in a sandbox.
- Industry learning (APICS/ASCM certifications, supply chain publications).
- Learning from post-implementation reviews.`, 'B'],

['Order Management', 'How do you integrate CPQ with Oracle Order Management?',
`- CPQ (Oracle CPQ or third-party) owns **configuration, pricing and quoting**.
- Accepted quote → **order** in OM (via native integration or OIC/REST), carrying configuration, prices and discounts.
- Decide whether **pricing** in OM recalculates or **freezes** CPQ prices.
- **Configured items** created in OM/Configurator for ATO.
- **Status updates** back to CPQ/CRM.
- Customer and item master alignment across systems.`, 'D'],

['Costing', 'How would you support a company switching from average to standard cost?',
`- Business case and finance approval (variances, reporting).
- **Set standard costs** for all items (from recent average/actual costs and roll-ups).
- **Timing** at a period/year start; **revaluation** of on-hand at switch.
- **Cost profiles** changed for items/cost orgs; new **variance accounts**.
- Test thoroughly (receipts, work orders, shipments).
- Train finance on variance analysis.`, 'D'],

['Returns', 'How would you architect reverse logistics at scale?',
`- **Return authorization** policies by product/customer; online return portal.
- **Routing** returns to the right node (DC, repair center, supplier).
- **Inspection and disposition** rules (restock, refurbish, recycle, scrap, return to vendor).
- **Credit** timing rules (at authorization vs receipt vs inspection).
- **Refurbishment** via work orders; serialized tracking.
- Analytics on return reasons and cost.`, 'D'],

['Architecture', 'How do you ensure the SCM design supports M&A growth?',
`- **Template-based** org setup (new plant/DC quickly).
- **Item master** with cross-references for acquired catalogs.
- **Supplier/customer** onboarding processes.
- **SFO flows** extendable to new entities.
- **Integration patterns** reusable for new 3PLs/MES.
- Day-1 playbook: visibility via data integration before full migration.`, 'B'],

['Behavioral', 'Tell me about a time an SCM design caused an unexpected finance impact.',
`## Example (STAR)
- **Situation:** A drop-ship design went live; finance saw COGS posted before revenue for a month.
- **Task:** As architect I owned the cross-module design.
- **Action:** Found the logical receipt/shipment timing differed from AR invoicing triggers; adjusted the orchestration to bill on supplier ship confirmation and enabled **COGS deferral** matching revenue recognition.
- **Result:** Margins aligned the following month; we added finance sign-off to every orchestration process design.

Lesson: every SCM flow needs an accounting walkthrough.`, 'B'],

['Logistics', 'What is cross-docking and how would you support it?',
`**Cross-docking** moves inbound goods straight to outbound shipping with little or no storage.
- Requires **visibility** of inbound supply (ASNs) and outbound demand.
- **Planned cross-dock** (known at receipt) vs **opportunistic** (WMS decides).
- Supported in WMS capabilities (Fusion Warehouse Management or best-of-breed).
- Benefits: faster flow, lower storage cost. Needs tight timing and data accuracy.`, 'D']
]);
