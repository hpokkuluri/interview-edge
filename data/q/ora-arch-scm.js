// ora-arch-scm — generated from src/ora-arch-scm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Senior Solution Architect (10–15 yrs) — SCM. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-arch-scm'] = (QB['ora-arch-scm'] || []).concat([
['Architecture', 'What does an SCM Solution Architect own on an Oracle program?',
`- **End-to-end supply chain design**: plan, source, make, deliver, return — across Fusion modules, planning, logistics systems and partners.
- **Enterprise structure for SCM**: inventory orgs, cost orgs, BUs, SFO flows aligned with Finance.
- **Integration architecture** with MES, WMS, TMS, PLM, e-commerce, EDI partners, 3PLs and contract manufacturers.
- **Master data architecture** (items, BOMs, suppliers, customers, locations).
- **NFRs**: order volumes, pick release windows, planning run times, availability for warehouses.
- **Design authority** across SCM workstreams and with Finance.
- **Roadmap**: planning maturity, automation, AI, control tower.`, 'B'],

['Enterprise Structures', 'Design the SCM structure for a company with 5 plants, 12 DCs, central procurement and 3 selling entities.',
`- **Inventory orgs**: one per plant and DC; item master org.
- **Cost orgs**: by plant (standard cost) and grouped DCs (average or standard), with **cost books** for primary and management views.
- **Procurement BU** centralized; requisitioning BUs per operating entity; **sold-to legal entity** rules.
- **Order management BUs** per selling entity; **fulfillment** from any DC via **sourcing rules**.
- **SFO flows**: central procurement entity → plants; plants → selling entities (transfer pricing).
- **Planning**: one global supply plan with all orgs; demand by selling entity/region.
- **Shipping networks** between DCs; transfer orders for rebalancing.

Validate with finance (legal flows, tax) before configuration.`, 'D'],

['Integration', 'Design the integration landscape for Fusion SCM with WMS, TMS, MES and e-commerce.',
`- **E-commerce/CRM → OM**: order create/update via REST (or events through OIC), with idempotency and status callbacks.
- **OM → WMS**: fulfillment requests via orchestration connectors; **WMS → Fusion**: pick/pack/ship confirmations, inventory adjustments.
- **Shipping/WMS ↔ TMS**: shipments for planning; carrier, tracking and freight cost back.
- **Fusion ↔ MES**: work orders and materials out; completions, consumption and scrap in.
- **Inventory snapshots** for reconciliation between WMS and Fusion.
- **Platform**: OIC (or enterprise iPaaS) with event-driven patterns, monitoring and error queues.
- **System of record** per data element documented.`, 'D'],

['Integration', 'How do you ensure inventory stays in sync between Fusion and an external WMS?',
`- Decide **who owns** on-hand detail: WMS (locator/LPN level) vs Fusion (org/subinventory level).
- **Transactional sync**: every receipt, ship, adjustment, transfer from WMS posted to Fusion in near real time.
- **Idempotent** messages with unique IDs; ordered processing per item/lot.
- **Daily reconciliation**: compare snapshots; auto-generate adjustments only with approval.
- **Monitoring**: failed messages visible to operations, not just IT.
- **Cutover**: aligned counts at go-live.`, 'D'],

['Order Management', 'How would you architect Order Management for very high order volumes (e.g. 200k lines/day)?',
`- **Order import** via bulk/REST in parallel streams, with throttling and retry.
- **Orchestration** processes kept lean (minimal steps; avoid unnecessary waits).
- **Scheduling**: GOP tuned (collections frequency, ATP rules); batch scheduling for non-urgent lines.
- **Pick release** in waves by warehouse with performance-tested release rules.
- **AutoInvoice** volumes split by batch source and run frequently.
- **Performance testing** with production-like volumes; Oracle engagement for capacity.
- **Monitoring** and alerting on backlog.`, 'D'],

['Planning', 'How would you architect supply chain planning for a global company?',
`- **Demand Management**: statistical + ML forecasting by product/customer/region; consensus process.
- **Supply Planning**: constrained plans across plants/DCs; **MPS** for key plants.
- **Sales & Operations Planning** (Fusion S&OP or IBP process) linking demand, supply and finance.
- **Replenishment Planning** for DC inventory policies.
- **Data**: collections from Fusion (and external systems via files), item planning attributes owned by planning.
- **Cadence**: weekly plan cycles, daily net-change.
- **Scenarios** for what-if and risk.
- Integration with **GOP** for promising.`, 'D'],

['Planning', 'What data foundations must be in place before planning can work?',
`- **Item attributes**: lead times (processing, pre/post), order modifiers, safety stock policy, planning method, make/buy.
- **BOMs and work definitions** accurate.
- **Sourcing rules** and assignment sets.
- **Calendars** (shipping, receiving, manufacturing).
- **Demand history** clean (returns, promos, stockouts adjusted).
- **Open supply** accurate (POs, work orders, transfers).
- **Resource capacities** if constrained planning.

Without these, the plan produces noise and planners won't trust it.`, 'B'],

['Product Hub', 'How would you architect product master data across PLM, Product Hub and downstream systems?',
`- **Engineering items/BOMs** authored in **PLM** (Oracle PLM/Innovation Management or third-party).
- On release, items flow to **Product Hub** (master for enterprise item data) via change orders.
- Product Hub enriches commercial, planning, costing attributes via **NIR** workflows and data stewards.
- Publish to downstream: e-commerce, WMS, MES, CPQ via events/OIC.
- **Global item numbering**, classes and data quality rules.
- **Cross-references** to legacy and supplier/customer part numbers.`, 'D'],

['Compliance', 'How would you architect DSCSA serialization for a pharmaceutical distributor with Oracle?',
`- **Serialization repository** (level 4/5 — e.g. TraceLink, rfxcel, SAP ATTP-equivalent) holds serial numbers, aggregation and EPCIS events.
- **Oracle Fusion** tracks lots (and serials where needed) for inventory and orders.
- **Integrations**: inbound **EPCIS** events from manufacturers linked to receipts/ASNs; outbound EPCIS on shipments; verification requests (VRS) for saleable returns.
- **Warehouse** scanning at receiving, picking and shipping (aggregation/disaggregation).
- **Exceptions** process for mismatches (quarantine).
- **Audit trail** and data retention.

Key: align Fusion lot/serial and shipment data with the serialization system to the unit level.`, 'D'],

['Compliance', 'How do you design SCM for GxP-regulated environments?',
`- **Computer System Validation (CSV/CSA)**: validation plan, risk assessment, IQ/OQ/PQ or risk-based testing, traceability.
- **21 CFR Part 11**: electronic signatures and audit trails on GMP-relevant transactions (QA release, status changes).
- **Quality integration**: inspections, deviations, CAPA.
- **Lot genealogy** and recall capability.
- **Change control** for configuration with impact assessments.
- **Quarterly updates** handled with a validation strategy (risk-based regression).`, 'D'],

['Outsourced Manufacturing', 'How would you model contract manufacturers in Oracle Fusion?',
`- **Contract manufacturing** (Fusion Outsourced Manufacturing): you own the material and design; the CM builds.
- Model the CM site as an **inventory org** (contract manufacturing org) with work definitions.
- **Purchase order** for the CM service tied to a **work order**; components shipped to the CM (or bought by them on your behalf).
- CM reports progress and completions (B2B messages); finished goods received.
- **Costing**: material + CM service cost into the assembly.
- Visibility via supplier portal/B2B.`, 'D'],

['Logistics', 'How would you architect transportation and global trade with Oracle?',
`- **OTM** for planning, tendering, carrier rates, freight settlement.
- **GTM** for trade compliance: restricted party screening, classification (HTS/ECCN), licenses, customs filings, duty management.
- **Integration**: Fusion OM/Shipping ↔ OTM/GTM (native integration), carriers via EDI/APIs, customs brokers.
- **Landed cost** management feeding costing.
- **Visibility**: shipment tracking feeds to customers.`, 'D'],

['Costing', 'How would you design the costing architecture for a multi-entity manufacturer?',
`- **Cost orgs** per plant (standard cost, roll-ups with resources/overhead).
- **Cost books**: primary (GAAP) and secondary (management/IFRS or group view with intercompany markup eliminated).
- **Valuation units** at cost org level (or by lot for high-value items).
- **Transfer pricing** via SFO for intercompany movements.
- **Landed costs** for imports.
- **Variance analysis** reporting.
- **Standard cost cycle**: annual update with simulation, approvals, revaluation.`, 'D'],

['Data Architecture', 'How would you design supply chain analytics on top of Oracle Fusion?',
`- **Fusion Data Intelligence (SCM analytics)** for prebuilt KPIs (OTIF, inventory turns, PO cycle time, supplier performance).
- **BICC** extracts to a data lake for enterprise analytics joining non-Oracle data (WMS, TMS, IoT).
- **Supply chain control tower**: real-time exceptions (late POs, stockouts, delayed shipments) with alerts and actions.
- **Data definitions** governed (e.g. OTIF calculation).
- Avoid heavy BIP extracts on production.`, 'D'],

['Resilience', 'How would you use Oracle to improve supply chain resilience?',
`- **Multi-sourcing** via sourcing rules and supplier qualification.
- **Supplier risk monitoring** (financial, geopolitical, ESG) integrated with supplier records.
- **Inventory buffers** for critical items using planning safety stock policies.
- **Scenario planning** (what-if supplier failure, demand spikes).
- **Control tower** alerts and AI-driven exception handling.
- **Visibility** into tier-1 (and tier-2 where possible) supply.`, 'D'],

['AI', 'Where would you apply AI agents in a Fusion SCM landscape?',
`- **Procurement**: supplier onboarding agent, requisition assistant, contract risk review, PO change negotiation drafts.
- **Order management**: exception triage (holds, late lines), customer communications.
- **Planning**: forecast anomaly explanations, planner assistant for exceptions.
- **Inventory/quality**: anomaly detection in adjustments and nonconformances.
- **Product data**: enrichment and classification.

Guardrails: role-based access, human approval for commitments (POs, prices), auditing of agent actions.`, 'D'],

['Migration', 'How would you architect migrating SCM from EBS to Fusion with plants going live in waves?',
`- **Wave plan**: pilot plant/DC first, then regions; finance may go first as the backbone.
- **Coexistence**: EBS sites trade with Fusion sites — intercompany flows, transfers and planning across both via integrations.
- **Global master data** in Fusion Product Hub synced to EBS during transition.
- **Planning**: one plan across both instances (collect from both) or temporary separate plans.
- **Retire** coexistence quickly; each wave reuses a template.
- **Lessons** fed into the next wave.`, 'D'],

['Template', 'How do you build a global SCM template for rollouts?',
`- **Core processes** standardized (P2P, O2C, returns, transfers, inventory control).
- **Configuration baseline** documented and packaged.
- **Local variation** rules: what countries/sites may change (e.g. legal documents, tax) and what they may not.
- **Rollout kit**: data templates, test scripts, training, cutover plan.
- **Template governance**: change requests evaluated globally.
- Measure rollout duration and defects to improve the kit.`, 'B'],

['Non-Functional', 'What SCM non-functional requirements do you define early?',
`- **Volumes**: orders/lines per day, receipts, shipments, items, BOM sizes.
- **Batch windows**: pick release, planning runs, collections, cost processing.
- **Latency**: order import to schedule, ship confirm to invoice.
- **Warehouse availability**: tolerance for outages; offline fallback procedures.
- **Integration throughput** and error SLAs.
- **Label/document printing** performance.
- **Data retention** and archiving.`, 'B'],

['Performance', 'Pick release is taking too long in a busy DC. How do you approach it?',
`- Measure: lines per release, rules used, time per step.
- **Release rules**: smaller waves, by priority/carrier cutoff; avoid releasing everything at once.
- **Picking rules**: simplify allocation logic; avoid complex sort orders on huge data sets.
- **Reservations** and auto-pick-confirm settings.
- **Document printing**: move label generation to asynchronous processes.
- **Concurrent processes** competing (planning, costing) — reschedule.
- Engage Oracle support with diagnostics if needed.`, 'D'],

['Security', 'How do you design SCM security for a large organization?',
`- **Roles** by job (buyer, category manager, warehouse operator, planner, order administrator).
- **Data access** by BU, inventory org, cost org; **procurement agent** access by BU.
- **Item data security** (who can create/change items by class).
- **SoD**: supplier creation vs PO approval vs receiving vs invoicing; inventory adjustments vs counting approval.
- **Partner access**: supplier and customer portals with external identities.
- Provisioning automation from HCM.`, 'D'],

['Stakeholders', 'How do you align supply chain leaders, finance and IT on a design?',
`- Frame decisions around **business outcomes** (service level, cost, cash).
- Joint **design workshops** with all three for cross-functional decisions (costing, intercompany, inventory policy).
- **Options with trade-offs** — not only technical arguments.
- A **decision forum** (design authority with business representation).
- Keep a single **decisions log**.`, 'B'],

['Behavioral', 'Describe a supply chain architecture you designed and its outcome.',
`Structure:
- **Business context**: e.g. global medical device maker, 8 plants, 20 DCs, 3 ERPs.
- **Problems**: no inventory visibility, slow order promising, manual intercompany.
- **Solution**: Fusion SCM + SFO, Product Hub as master, OIC to MES/WMS/TMS, Supply Planning, control tower dashboards.
- **Key decisions**: e.g. standard cost per plant, global sourcing rules, WMS kept for large DCs.
- **Outcomes**: OTIF +6 points, inventory −12%, intercompany automated.
- **Lessons**.`, 'B'],

['Behavioral', 'How do you handle a situation where the business wants to replicate a legacy process exactly?',
`- Understand **why** the process exists — the underlying need.
- Show the **standard Oracle flow** with their data; quantify benefits.
- Offer **configuration** to meet the need differently.
- If they insist, document cost, risk and upgrade impact; escalate to the sponsor for a decision.
- Revisit after go-live with data.`, 'B'],

['Integration', 'How do you integrate EDI partners at scale?',
`- Use a **B2B/EDI provider** (VAN or cloud EDI) for partner onboarding and translation (X12/EDIFACT ↔ canonical XML/JSON).
- **OIC B2B** or Fusion **Collaboration Messaging** for Oracle side.
- **Partner onboarding playbook**: testing, certification, go-live.
- **Monitoring**: acknowledgments (997/CONTRL), error alerts.
- Standard document set: 850/855/856/810 (customers and suppliers), 940/945 (3PL), 214 (carrier status).`, 'D']
]);

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

// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio architecture questions.
QB['ora-arch-scm'] = (QB['ora-arch-scm'] || []).concat([
['AI Agent Studio', 'Design an agentic architecture for order exception management in Fusion SCM.',
`- **Events**: order holds, scheduling failures, late shipments (business events / scheduled checks).
- **Workflow agent**: Business Object nodes gather order, supply (GOP), shipment and customer data → agent node classifies the exception and proposes actions (reschedule, split, substitute, expedite).
- **Human approval** for customer-impacting changes; Email/Deep Link tools notify owners.
- **External tools**: carrier tracking via REST/MCP; WMS status via connector.
- **Monitoring**: exception volumes, resolution time, agent accuracy.
- **Security**: identity propagation and least-privilege tools.`, 'D'],

['AI Agent Studio', 'How would you use MCP and A2A in a supply chain landscape?',
`- **MCP tools** let Fusion agents call tools exposed by other systems (WMS, TMS, supplier portals, planning tools) through a standard protocol.
- **A2A** lets a Fusion agent collaborate with agents on other platforms (e.g. a logistics provider's agent for tracking or rebooking).
- Architect: trust boundaries, credentials in the credential store, logging, rate limits, and clear ownership of each agent.`, 'D'],

['AI Agent Studio', 'What makes a supply chain agent safe to deploy at scale?',
`- **Deterministic workflows** for core steps; agents only where judgment is needed.
- **Draft-then-approve** for commitments (POs, order changes).
- **Evaluation sets** including edge cases and "must refuse" requests.
- **Tracing** and dashboards; alerting on error spikes.
- **Gradual rollout** by BU/site.
- **Fallback** to manual process when the agent or LLM is unavailable.`, 'D'],

['Redwood', 'How do Redwood and Visual Builder Studio change your extension strategy for SCM?',
`- Classic personalizations (Page Composer) will retire with classic pages — **rebuild only what's valuable** in VBS.
- Prefer **configuration and rules** in VBS over custom pages.
- For bigger needs (e.g. a dock scheduling screen), build a **Redwood app in Visual Builder** on Fusion REST APIs.
- Treat VBS assets as code (Git, reviews, pipeline, regression each quarter).`, 'D'],

['Redwood', 'What should you test when SCM pages switch to Redwood?',
`- End-to-end flows: requisition → PO → receipt → invoice; order → ship → bill; transfers; counts.
- **Mobile/tablet** use on the warehouse floor and **barcode scanning** behavior.
- **Printing** (labels, documents) and **notifications/deep links**.
- **VBS extensions** and rules.
- **Performance** for high-volume users.
- Reports embedded on pages.`, 'D'],

['Fusion Platform', 'How do you design integrations for Fusion SCM using business events?',
`- Subscribe in **OIC** to events like PO approved, shipment confirmed, receipt created, item released.
- Push to downstream systems (supplier portal, WMS, e-commerce, analytics) in near real time.
- **Idempotency** (events can repeat), ordering where needed, error queues and replay.
- Combine with REST lookups for full payloads.`, 'D'],

['Architecture', 'How would you architect supplier collaboration combining Fusion, portals and AI?',
`- **Supplier Portal** for POs, acknowledgments, ASNs, invoices.
- **B2B/EDI** for high-volume suppliers.
- **AI agent** to handle supplier emails (quotes, delays, invoice questions) — reads documents, updates drafts, answers status with deep links.
- **Supplier qualification** and risk data integrated.
- One supplier master; clear channel rules per supplier tier.`, 'D'],

['Planning', 'Where does AI help most in Fusion planning, and what are the limits?',
`- **ML forecasting** and demand sensing; anomaly detection in history.
- **Exception prioritization** and explanations for planners.
- **Scenario summaries** for S&OP.
- **Limits**: poor master data (lead times, BOMs) still breaks plans; planners must understand and own decisions; explainability matters for trust.`, 'D'],

['Architecture', 'How do you prepare an SCM landscape to adopt Oracle\'s AI features quickly?',
`- Stay **current on releases** and Redwood pages.
- **Clean data**: items, suppliers, customers, lead times.
- **API-first integrations** (so agents can reuse them).
- **Security model** reviewed — agents inherit it.
- **AI governance** and evaluation practice.
- **Pilot backlog** prioritized with business owners.`, 'B'],

['Product Hub', 'How would you architect item master governance with Redwood Product Management and AI?',
`- **Item classes, templates and rules** as the backbone.
- **NIR/change order workflows** in Redwood with team-based steps.
- **AI** for description generation, attribute enrichment from spec sheets, duplicate detection — proposals reviewed by stewards.
- **Events** publish released items to WMS, e-commerce, MES.
- Data quality KPIs on dashboards.`, 'D'],

['Order Management', 'How would you design order capture from multiple channels with agent support?',
`- **APIs** for e-commerce/CPQ/EDI orders into OM.
- **Agent** for email/PDF purchase orders: extracts lines, matches customer items, creates **draft orders** for review.
- **Validation** rules and pricing in OM.
- **Human review** queue for low-confidence extractions.
- Monitor extraction accuracy and order cycle time.`, 'D']
]);
