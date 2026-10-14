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
