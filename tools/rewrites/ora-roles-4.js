// Rewritten Oracle Senior Solution Architect (SCM) questions (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'What does an SCM Solution Architect own on an Oracle program?':
`**Why they ask:** to see if you understand the architect's scope in SCM.

**Answer:**
"I own the end-to-end supply chain design: plan, source, make, deliver and return, across Fusion modules, planning, logistics systems and partners. The SCM enterprise structure: inventory orgs, cost orgs, BUs and SFO flows, aligned with Finance. The integration architecture with MES, WMS, TMS, PLM, e-commerce, EDI partners, 3PLs and contract manufacturers. The master data architecture for items, BOMs, suppliers, customers and locations. Non-functional requirements like order volumes, pick release windows, planning run times and warehouse availability. Design authority across SCM workstreams and with Finance. And the roadmap: planning maturity, automation, AI and a control tower."

Tip: Mention alignment with Finance. SCM architects are judged on the seams.`,

'Design the integration landscape for Fusion SCM with WMS, TMS, MES and e-commerce.':
`**Why they ask:** a core SCM architecture question.

**Answer:**
"E-commerce or CRM creates and updates orders in OM through REST or OIC events, with idempotency and status callbacks. OM sends fulfillment requests to the WMS through orchestration connectors, and the WMS returns pick, pack and ship confirmations and inventory adjustments. Shipping or WMS sends shipments to the TMS for planning, and carrier, tracking and freight cost come back. Fusion sends work orders and materials to MES, and completions, consumption and scrap come back. Inventory snapshots reconcile WMS and Fusion. It all runs on OIC or an enterprise iPaaS with event-driven patterns, monitoring and error queues. And the system of record for each data element is documented."

Tip: End with "system of record documented". It prevents most integration disputes.`,

'How do you ensure inventory stays in sync between Fusion and an external WMS?':
`**Why they ask:** WMS drift is a common, costly problem.

**Answer:**
"First decide who owns what: the WMS owns locator and LPN detail, Fusion owns org and subinventory level. Every receipt, shipment, adjustment and transfer in the WMS posts to Fusion in near real time. Messages have unique IDs so they're idempotent, and they're processed in order per item and lot. A daily reconciliation compares snapshots, and adjustments are only created with approval. Failed messages are visible to operations, not just IT. And counts are aligned at go-live."

Tip: Say "failed messages visible to operations". They're the ones who can fix them.`,

'How would you architect DSCSA serialization for a pharmaceutical distributor with Oracle?':
`**Why they ask:** a specialist compliance architecture question.

**Answer:**
"A serialization repository, like TraceLink or rfxcel, holds serial numbers, aggregation and EPCIS events. Fusion tracks lots, and serials where needed, for inventory and orders. Inbound EPCIS events from manufacturers link to receipts and ASNs; outbound EPCIS goes with shipments; and verification requests handle saleable returns. Warehouses scan at receiving, picking and shipping, including aggregation and disaggregation. Mismatches go through an exception process with quarantine. And there's a full audit trail and data retention. The key is aligning Fusion lot, serial and shipment data with the serialization system down to the unit."

Tip: Mention aggregation. It's where serialization projects struggle.`,

'How do you design SCM for GxP-regulated environments?':
`**Why they ask:** pharma and medical device projects need validation.

**Answer:**
"Computer system validation, CSV or the newer CSA approach: a validation plan, risk assessment, IQ, OQ and PQ or risk-based testing, and traceability. 21 CFR Part 11: electronic signatures and audit trails on GMP-relevant transactions like QA release and status changes. Quality integration with inspections, deviations and CAPA. Lot genealogy and recall capability. Change control for configuration with impact assessments. And a validation strategy for quarterly updates, using risk-based regression."

Tip: Mention the quarterly update strategy. It's the hardest part of validated SaaS.`,

'How would you design supply chain analytics on top of Oracle Fusion?':
`**Why they ask:** analytics architecture for SCM.

**Answer:**
"Fusion Data Intelligence SCM analytics gives prebuilt KPIs like OTIF, inventory turns, PO cycle time and supplier performance. BICC extracts go to a data lake for enterprise analytics that join non-Oracle data like WMS, TMS and IoT. A supply chain control tower shows real-time exceptions, like late POs, stockouts and delayed shipments, with alerts and actions. Data definitions, like how OTIF is calculated, are governed. And I avoid heavy BIP extracts on production."

Tip: Mention governing the OTIF definition. Different definitions cause endless arguments.`,

'How would you use Oracle to improve supply chain resilience?':
`**Why they ask:** resilience is a board-level topic since recent disruptions.

**Answer:**
"Multi-sourcing through sourcing rules and supplier qualification. Supplier risk monitoring, financial, geopolitical and ESG, linked to supplier records. Inventory buffers for critical items using planning safety stock policies. Scenario planning for supplier failure or demand spikes. Control tower alerts with AI-driven exception handling. And visibility into tier-1 suppliers, and tier-2 where possible."

Tip: Mention scenario planning. It turns resilience from a slogan into a practice.`,

'How would you architect migrating SCM from EBS to Fusion with plants going live in waves?':
`**Why they ask:** wave migrations need coexistence design.

**Answer:**
"I'd start with a pilot plant or DC, then regions, often with finance going first as the backbone. During coexistence, EBS sites trade with Fusion sites through integrations for intercompany flows, transfers and planning. Product Hub in Fusion is the global item master, synced to EBS during the transition. Planning either collects from both instances into one plan or runs separate plans for a time. Coexistence is retired quickly, each wave reuses the template, and lessons go into the next wave."

Tip: Mention one plan across both instances. It's the hardest coexistence decision.`,

'How do you build a global SCM template for rollouts?':
`**Why they ask:** templates make rollouts fast and consistent.

**Answer:**
"Core processes are standardized: P2P, O2C, returns, transfers and inventory control. The configuration baseline is documented and packaged. Rules say what countries or sites may change, like legal documents and tax, and what they may not. A rollout kit includes data templates, test scripts, training and a cutover plan. Template changes go through global governance. And I measure rollout duration and defects to keep improving the kit."

Tip: Mention measuring each rollout. The template should get faster every time.`,

'What SCM non-functional requirements do you define early?':
`**Why they ask:** NFRs prevent go-live performance problems.

**Answer:**
"Volumes: orders and lines per day, receipts, shipments, items and BOM sizes. Batch windows: pick release, planning runs, collections and cost processing. Latency: order import to scheduling, and ship confirm to invoice. Warehouse availability: how much outage they can tolerate and offline fallback procedures. Integration throughput and error SLAs. Label and document printing performance. And data retention and archiving."

Tip: Mention printing performance. Slow labels stop a warehouse.`,

'Pick release is taking too long in a busy DC. How do you approach it?':
`**Why they ask:** a performance troubleshooting question.

**Answer:**
"I measure first: lines per release, the rules used and time per step. Then release rules: smaller waves by priority or carrier cutoff instead of releasing everything at once. Picking rules: simpler allocation logic and no complex sort orders on huge data sets. Reservation and auto pick confirm settings. Document printing moved to asynchronous processes. Competing processes, like planning or costing, rescheduled. And Oracle support with diagnostics if needed."

Tip: Start with smaller waves. It's usually the biggest win.`,

'How do you design SCM security for a large organization?':
`**Why they ask:** SCM security has many layers.

**Answer:**
"Roles by job: buyer, category manager, warehouse operator, planner and order administrator. Data access by BU, inventory org and cost org, and procurement agent access by BU. Item data security for who can create and change items by class. SoD: supplier creation vs PO approval vs receiving vs invoicing, and inventory adjustments vs count approval. Partner access through supplier and customer portals with external identities. And provisioning automated from HCM."

Tip: Give one SCM SoD conflict. It shows you think like an auditor.`,

'How do you align supply chain leaders, finance and IT on a design?':
`**Why they ask:** architects work across groups.

**Answer:**
"I frame decisions around business outcomes: service level, cost and cash. Cross-functional decisions, like costing, intercompany and inventory policy, get joint workshops with all three. I present options with trade-offs, not only technical arguments. A design authority with business representation makes decisions. And one decisions log keeps everyone aligned."

Tip: Say "service level, cost and cash". It's the language all three understand.`,

'Describe a supply chain architecture you designed and its outcome.':
`**Why they ask:** proof of architect experience.

**Answer (structure, use your own facts):**
"Business context: for example, a global medical device maker with 8 plants, 20 DCs and 3 ERPs. Problems: no inventory visibility, slow order promising and manual intercompany. Solution: Fusion SCM with SFO, Product Hub as the item master, OIC to MES, WMS and TMS, Supply Planning, and control tower dashboards. Key decisions: standard cost per plant, global sourcing rules, and keeping a specialist WMS for the largest DCs. Outcomes: OTIF up 6 points, inventory down 12%, intercompany automated. And lessons learned."

Tip: Keep the outcomes numeric. They're what interviewers remember.`,

'How do you handle a situation where the business wants to replicate a legacy process exactly?':
`**Why they ask:** a common push-back scenario.

**Answer:**
"I ask why the process exists, to find the underlying need. I show the standard Oracle flow with their data and quantify the benefits. I offer configuration that meets the need a different way. If they still insist, I document the cost, risk and upgrade impact and take it to the sponsor for a decision. And I revisit it after go-live with data."

Tip: Mention revisiting after go-live. It gives people a way to say yes now.`,

'How do you integrate EDI partners at scale?':
`**Why they ask:** EDI at scale needs a model, not one-off projects.

**Answer:**
"I use a B2B or EDI provider, a VAN or cloud EDI, for partner onboarding and translation between X12 or EDIFACT and a canonical XML or JSON. On the Oracle side, OIC B2B or Fusion Collaboration Messaging. A partner onboarding playbook covers testing, certification and go-live. Monitoring includes functional acknowledgments, 997 or CONTRL, and error alerts. And a standard document set: 850, 855, 856 and 810 for customers and suppliers, 940 and 945 for 3PLs, and 214 for carrier status."

Tip: Name the document numbers. It proves real EDI experience.`,

'How do you govern master data in an SCM landscape?':
`**Why they ask:** master data quality decides SCM success.

**Answer:**
"Each domain has an owner: items, suppliers, customers, locations and BOMs. Stewards run workflows like NIRs, supplier registration and customer onboarding. Quality rules apply at entry, not after. KPIs track completeness, duplicates and time to create. Structural data, like UOMs and item classes, goes through change control. And data quality is reviewed regularly with business leaders."

Tip: Say "quality at entry, not after". Cleaning later always costs more.`,

'How do you test a global SCM template before the first rollout?':
`**Why they ask:** a flawed template repeats its flaws in every country.

**Answer:**
"Process scenarios cover every variant: product types, fulfillment types and entities. Integrations are tested with real partner test environments. Finance verifies the accounting for every flow. Volume and performance tests simulate peak days. Day-in-the-life simulations run in a warehouse and a plant. The cutover is rehearsed. And exit criteria are agreed with business leadership."

Tip: Mention peak-day volume tests. Templates often pass at average volume and fail at peak.`,

'How would you plan a wave-based go-live for 12 DCs?':
`**Why they ask:** wave planning is an architect and program skill.

**Answer:**
"A pilot DC first, representative but lower risk, with four to six weeks of stabilization before wave two. Waves grouped by region or complexity, avoiding peak seasons. A repeatable cutover runbook with timing from the pilot. Inventory counts and on-hand loads for each wave. Communication with carriers, customers and suppliers. Hypercare teams that move with the waves. And lessons learned after each wave."

Tip: Mention the stabilization period. Rushing wave two is how problems multiply.`,

'How do you build an SCM digital roadmap?':
`**Why they ask:** strategic planning for supply chain systems.

**Answer:**
"I assess maturity in planning, procurement, manufacturing, logistics, data and analytics. I link initiatives to business goals: service level, working capital, cost, resilience and sustainability. I prioritize, for example Product Hub governance, then planning, then a control tower, then AI agents. Sequencing respects data foundations. Each initiative has a business case and KPIs. And supply chain leadership reviews it every quarter."

Tip: Say "sequencing respects data foundations". It's why item master comes before AI.`,

'How can Oracle SCM support sustainability (ESG) goals?':
`**Why they ask:** ESG reporting is growing fast.

**Answer:**
"Supplier ESG data comes from qualification questionnaires and third-party ratings. Emissions tracking, like Scope 3 purchased goods, uses spend or activity data with Oracle Fusion Sustainability or partner tools. Transportation optimization in OTM reduces emissions. Product Hub can hold materials and recyclability attributes. And it all feeds ESG disclosures like CSRD."

Tip: Mention Scope 3. It's where most supply chain emissions sit.`,

'How would you evaluate whether to use Fusion native capability vs a best-of-breed tool (e.g. WMS, planning)?':
`**Why they ask:** a classic architecture trade-off.

**Answer:**
"I look at fit: does Fusion meet the requirements today and on its roadmap? Complexity and scale: is the use case at the edge of what Fusion does well? Integration cost and data latency of a separate tool. Total cost of ownership: licenses, support and skills. User experience and adoption. And strategic direction: consolidating the platform versus differentiating. For close calls, I run a proof of concept with real scenarios."

Tip: Recommend a proof of concept for close calls. It replaces opinions with evidence.`,

'How do you handle disagreements between workstream leads on cross-module design?':
`**Why they ask:** architects resolve cross-team conflicts.

**Answer:**
"I get both leads to state the business requirement and their constraints. I lay out the options and their impact on each module, including finance. We decide based on the end-to-end outcome, not what's convenient for one module. The decision goes into the design authority log and is communicated. I only escalate to the sponsor if it's a business trade-off that needs an executive."

Tip: Say "end-to-end outcome, not module convenience". It's the architect's tiebreaker.`,

'How would you design integration with a supplier collaboration network?':
`**Why they ask:** supplier networks are common for large buyers.

**Answer:**
"The network connects to Fusion through OIC or B2B: POs go out, and acknowledgments, ASNs, invoices and catalogs come back. I decide which suppliers onboard to the network and which, usually smaller ones, stay on the Fusion supplier portal. Network documents are mapped to Fusion objects. I check for duplicates and consistency between the network and portal channels. And there's monitoring and a partner support model."

Tip: Mention channel rules by supplier size. It keeps costs sensible.`,

'How do you approach a supply chain control tower design?':
`**Why they ask:** control towers are a common modernization goal.

**Answer:**
"Use cases first: late supplier POs, stockout risk, delayed shipments, quality holds and capacity issues. Then data: near real-time feeds from Fusion events, WMS, TMS, carriers and suppliers. Alerts have thresholds and owners, with recommended actions, using AI where it adds value. A workflow lets people act: expedite, reallocate or notify the customer. Dashboards serve both leadership and operations. And I start small and add use cases each quarter."

Tip: Say "use cases first". Control towers built data-first become dashboards nobody uses.`,

'How do you keep your SCM architecture skills current?':
`**Why they ask:** SCM moves fast.

**Answer:**
"I read Oracle's release readiness for SCM, planning and logistics. I follow Customer Connect and SCM user groups. I try new features hands-on in a sandbox, like Redwood pages and AI agents. I keep up with industry learning, like ASCM certifications and supply chain publications. And I learn from post-implementation reviews."

Tip: Name a recent feature you tried. It makes the answer real.`,

'How do you ensure the SCM design supports M&A growth?':
`**Why they ask:** growth by acquisition is common.

**Answer:**
"A template-based org setup lets us add a plant or DC quickly. The item master supports cross-references for acquired catalogs. Supplier and customer onboarding processes are ready to absorb new records. SFO flows extend to new entities. Integration patterns are reusable for new 3PLs or MES. And a day-one playbook gives visibility through data integration before full migration."

Tip: Mention the day-one playbook. Leadership wants visibility immediately after a deal.`,

'Tell me about a time an SCM design caused an unexpected finance impact.':
`**Why they ask:** cross-module awareness.

**Answer (example):**
"A drop-ship design went live, and finance saw COGS posted before revenue for a month. As the architect I owned the cross-module design. I found the logical receipt and shipment timing didn't match the AR invoicing trigger. I changed the orchestration to bill on supplier ship confirmation and enabled COGS deferral to match revenue recognition. Margins lined up the following month, and we added finance sign-off to every orchestration process design. My lesson: every SCM flow needs an accounting walkthrough."

Tip: End with the lesson. It's what they're really asking for.`,

'How would you architect supplier collaboration combining Fusion, portals and AI?':
`**Why they ask:** a current architecture question.

**Answer:**
"The Supplier Portal handles POs, acknowledgments, ASNs and invoices. B2B or EDI serves high-volume suppliers. An AI agent handles supplier emails, like quotes, delays and invoice questions: it reads documents, updates drafts, and answers status questions with deep links. Supplier qualification and risk data are integrated. And there's one supplier master, with clear channel rules for each supplier tier."

Tip: Mention channel rules by tier. It keeps the model manageable.`,

"How do you prepare an SCM landscape to adopt Oracle's AI features quickly?":
`**Why they ask:** AI readiness is a platform quality.

**Answer:**
"Stay current on releases and Redwood pages. Clean the data: items, suppliers, customers and lead times. Use API-first integrations so agents can reuse them. Review the security model, since agents inherit it. Set up AI governance and an evaluation practice. And keep a pilot backlog prioritized with business owners."

Tip: Mention reusable APIs. Agents depend on the same building blocks.`,

};
