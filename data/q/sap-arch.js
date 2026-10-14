// sap-arch — generated from src/sap-arch-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// SAP S/4HANA Solution Architect. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['sap-arch'] = (QB['sap-arch'] || []).concat([
['Strategy', 'How do you decide between greenfield, brownfield and selective data transition?',
`- **Greenfield**: when processes need redesign, heavy customization to remove, or a fresh start (M&A consolidation); loses history in the new system (archive/reporting).
- **Brownfield**: when processes are good, history matters, and you want speed/lower risk; custom code must be adapted; fewer business benefits upfront.
- **Selective data transition (SDT)**: mix — keep some config/history, redesign parts, merge/split company codes; needs specialist tools/partners.
- Decision factors: process fit, customization level, data volume/history needs, org changes (M&A), timeline, budget, change appetite.`, 'B'],

['Strategy', 'What is "clean core" and how do you enforce it in an architecture?',
`- Keep S/4 **standard**; extensions via **released APIs** and extension points:
- **Key user extensibility** (custom fields, logic in Fiori apps).
- **On-stack developer extensibility** (ABAP Cloud / RAP with released objects).
- **Side-by-side** on **BTP** (CAP, Build, Integration Suite).
- **Governance**: architecture board, ATC checks with ABAP Cloud rules, extension inventory, no modifications.
- Benefits: upgradeability, innovation adoption, lower TCO.`, 'D'],

['Strategy', 'RISE with SAP vs on-premise vs public cloud — how do you advise a client?',
`- **Public Cloud**: standardized processes, fast innovation, lower TCO, limited flexibility — good for subsidiaries, mid-size, standard industries.
- **Private Cloud (RISE)**: flexibility of full S/4 with SAP-managed infrastructure — most large enterprises.
- **On-premise**: full control, specific regulatory or infrastructure needs, existing investments.
- Consider: process differentiation, customization, IT operating model, contract terms (RISE bundle), roadmap (SAP's innovation focus on cloud).
- **Two-tier ERP** (public cloud subsidiaries + private cloud HQ) is common.`, 'D'],

['Architecture', 'Design the enterprise structure for a global S/4HANA implementation.',
`- **Company codes** per legal entity; **controlling area(s)** (one global often).
- **Ledgers**: leading + non-leading (local GAAP/tax).
- **Plants**, **storage locations**, **sales orgs**, **purchasing orgs** (central vs local), **shipping points**.
- **Profit centers/segments** with document splitting.
- **Global CoA** with country CoA if required.
- **Group Reporting** for consolidation.
- Validate with tax, legal, operations; consider SDT for future reorganizations.`, 'D'],

['Architecture', 'What is your approach to integration architecture in an S/4 landscape?',
`- **SAP Integration Suite** as the strategic platform (cloud integration, API management, event mesh, B2B/EDI).
- **API-first**: SAP Business Accelerator Hub APIs; avoid custom RFCs where possible.
- **Event-driven** with SAP Event Mesh/Advanced Event Mesh for decoupling.
- **Master data integration** (MDG, Master Data Integration service).
- **Monitoring** (Cloud ALM, AIF for business users).
- **Security** (OAuth, principal propagation).`, 'D'],

['Architecture', 'How do you design master data management in an S/4 landscape?',
`- **SAP MDG** (on S/4 or as cloud edition) for governance of BP, material, finance master data.
- **Data models**, workflows, validations, duplicate checks.
- **Distribution** to connected systems (DRF).
- **Data quality** dashboards.
- **Ownership** by business domains.
- Consolidation scenarios for M&A (match and merge).`, 'D'],

['Architecture', 'How do you design analytics architecture with S/4HANA?',
`- **Embedded analytics** (CDS views, Fiori analytical apps) for operational reporting.
- **SAP Datasphere / Business Data Cloud** for enterprise data warehousing and semantic models across SAP and non-SAP.
- **SAP Analytics Cloud** for dashboards and planning.
- **BW/4HANA** where existing investments are strong.
- Data products and governance.`, 'D'],

['Extensibility', 'When would you build a side-by-side extension on BTP vs on-stack in S/4?',
`- **On-stack (ABAP Cloud/RAP)**: tightly coupled to S/4 data/transactions, needs transactional consistency, performance-critical.
- **Side-by-side (BTP)**: separate lifecycle, user groups outside SAP, integration with non-SAP, AI services, mobile apps, different scaling needs.
- Consider skills, costs (BTP consumption), security and latency.`, 'D'],

['Process', 'What is fit-to-standard and how do you run it?',
`- **SAP Activate Explore** phase: demo **SAP Best Practices** in a preconfigured system, map business requirements, identify **delta requirements** (gaps).
- **Prioritize** deltas by value; challenge legacy customizations.
- **Document** in backlog (Cloud ALM).
- **Process owners** sign off.
- Goal: adopt standard wherever possible.`, 'B'],

['Process', 'How do you handle a business requirement that conflicts with standard S/4?',
`- **Understand** the real business need.
- **Show** standard alternatives; quantify cost/risk of deviation.
- **Options**: process change, configuration, key user extension, BTP extension, partner solution.
- **Decision** by design authority with business owner.
- Document as a delta with lifecycle cost.`, 'B'],

['Finance', 'How would you architect finance in S/4HANA for a multi-GAAP global company?',
`- **Ledgers** (leading for group GAAP, non-leading for local).
- **New Asset Accounting** with ledger-specific depreciation areas.
- **Document splitting** for segment/profit center balance sheets.
- **Material Ledger** with group/legal/profit center valuation (transfer pricing).
- **Group Reporting** for consolidation.
- **Central Finance** for non-S/4 entities during transition.
- **Advanced Financial Closing** for close orchestration.`, 'D'],

['Supply Chain', 'How would you architect supply chain in S/4 for a manufacturer?',
`- **S/4 core**: MM, SD, PP, QM, PM, EWM embedded.
- **Advanced ATP** for promising.
- **IBP** for planning (demand, supply, S&OP) with RTI integration.
- **PP/DS** for detailed scheduling.
- **SAP Digital Manufacturing** (MES) integrated.
- **TM** for transportation.
- **Ariba** for procurement network.
- **Business Network** for collaboration.`, 'D'],

['Migration', 'How do you plan data migration for a greenfield S/4?',
`- **Scope**: master data, open items, balances, limited history.
- **Tools**: Migration Cockpit (staging tables or direct transfer), partner tools (Syniti, SNP).
- **Data quality** program early.
- **Mapping** and transformation rules owned by business.
- **Mock migrations** (3+) with reconciliation.
- **Historical data**: archive or data warehouse (e.g. SAP ILM, Datasphere).`, 'B'],

['Migration', 'What are the main risks in a brownfield conversion and how do you mitigate them?',
`- **Custom code incompatibility** → ATC analysis, remediation factory.
- **Data inconsistencies** (FI-CO, AA, ML) → pre-checks, cleanup.
- **CVI/BP** issues → early synchronization.
- **Downtime** too long → downtime-optimized methods, archiving.
- **Business disruption** → thorough regression testing.
- **Missing innovation** → plan post-conversion value roadmap.`, 'D'],

['AI', 'How do you architect AI capabilities in an SAP landscape?',
`- **Joule** (SAP's copilot) across S/4 and LoB apps.
- **Embedded AI scenarios** (cash application, invoice extraction, forecasting).
- **SAP AI Core / Generative AI Hub** on BTP for custom AI with LLM access and grounding on business data.
- **Business Data Cloud** for AI-ready data.
- **Governance**: AI ethics, security, data privacy, human oversight.`, 'D'],

['Governance', 'How do you set up architecture governance for an S/4 program?',
`- **Design authority** with business and IT.
- **Architecture principles** (clean core, API-first, standard first).
- **Review gates** for designs and extensions.
- **Decisions log** and deltas backlog.
- **Tooling**: Cloud ALM, ATC, LeanIX for portfolio.`, 'B'],

['Non-Functional', 'What NFRs do you define for S/4 programs?',
`- **Performance** (response times, batch windows, volumes).
- **Availability** (SLA, HA/DR, RPO/RTO).
- **Security** (identity, SoD, encryption).
- **Scalability** (growth, M&A).
- **Compliance** (SOX, GDPR, GxP).
- **Maintainability** (clean core, upgradability).`, 'B'],

['Industry', 'How do you approach S/4 for a pharmaceutical company?',
`- **GxP validation** strategy (CSV/CSA).
- **Batch management**, **QM** (inspections, release), **EWM** with GMP storage.
- **Serialization** (SAP ATTP) integration.
- **Process manufacturing** (recipes, process orders), **electronic batch records** (MES).
- **Regulatory reporting**.
- **Clinical supply** and **pharma-specific** solutions (partner ecosystem).`, 'D'],

['Behavioral', 'Describe an S/4 architecture you designed end to end.',
`- **Context**, **scope**, **key decisions** (deployment, migration approach, integration platform, analytics), **trade-offs**, **outcomes** (go-live, KPIs), **lessons**.
- Use one diagram on a whiteboard.`, 'B'],

['Behavioral', 'How do you handle a client that wants to customize heavily in S/4?',
`- Understand **why** (differentiation vs habit).
- Show **costs** (upgrades, testing, support) and **clean core** principles.
- Offer **extension patterns** that preserve upgradability.
- Escalate to sponsor with business case if needed.`, 'B'],

['Strategy', 'What happens with SAP ECC end of mainstream maintenance and what do you advise?',
`- SAP ECC 6.0 mainstream maintenance ends **end of 2027**, with optional extended maintenance to end of 2030 at extra cost.
- Advise: **roadmap** to S/4 now — assessment (Readiness Check), approach decision, business case, partner selection.
- Avoid last-minute rush (partner capacity, costs).`, 'B'],

['Architecture', 'What is two-tier ERP and when would you use it?',
`- **Tier 1**: corporate S/4 (private cloud) for HQ and large entities.
- **Tier 2**: subsidiaries on **S/4 Public Cloud** or lighter ERP.
- **Integration** for intercompany, master data, consolidation.
- Benefits: lower cost and faster rollouts for small entities.
- Risks: integration complexity, process differences.`, 'D'],

['Testing', 'How do you approach test automation for S/4?',
`- **SAP Cloud ALM** test management; **Tricentis Test Automation for SAP**, Worksoft or similar.
- Automate regression of core processes (O2C, P2P, R2R, P2M).
- Run for each upgrade/feature pack and transports bundle.
- Maintain test data strategy.`, 'B'],

['Security', 'How do you architect identity and access for S/4 and BTP?',
`- **SAP Cloud Identity Services** (IAS for authentication, IPS for provisioning) with corporate IdP (Entra ID, Okta).
- **SSO** across S/4, BTP, SuccessFactors, Ariba.
- **Role design** with business roles (Fiori) and GRC for SoD.
- **IAG** (Identity Access Governance) for cloud access requests.`, 'D'],

['Strategy', 'How do you build the business case for S/4HANA?',
`- **Value drivers**: process efficiency (automation, real-time), working capital, inventory, faster close, better insight, AI readiness, risk (end of ECC support).
- **Costs**: licenses/subscription (RISE), implementation, infrastructure, change.
- **Benchmarks** (SAP value lifecycle tools).
- **Phased value plan** and KPIs.`, 'D']
]);

QB['sap-arch'] = (QB['sap-arch'] || []).concat([
['Architecture', 'How do you approach a multi-ERP landscape (SAP + non-SAP) after acquisitions?',
`- **Short term**: consolidated reporting via Group Reporting/Datasphere; **Central Finance** for real-time finance replication.
- **Medium term**: harmonize master data (MDG), central procurement/payments.
- **Long term**: migrate acquired entities to the S/4 template (SDT tools help merge).
- Business case and synergy targets drive pace.`, 'D'],

['Architecture', 'How do you design S/4HANA for high transaction volumes (e.g. retail, utilities)?',
`- **Sizing** and performance testing early.
- **Industry solutions** (IS-Retail now S/4 Retail; IS-U for utilities) with high-volume designs.
- **Parallel processing** for batch (billing, MRP Live).
- **Data aging/archiving** strategy.
- **Integration throughput** (event mesh, asynchronous patterns).
- **HANA scale-up** with sufficient memory and app server scaling.`, 'D'],

['Architecture', 'What is SAP Business Data Cloud / Datasphere and how does it fit?',
`- **Datasphere**: SAP's data warehouse/fabric with business semantics (successor direction to BW).
- **Business Data Cloud**: unified offering combining Datasphere, SAC, BW, and data products from SAP apps, plus partnership with Databricks for AI/ML.
- Fits as the **enterprise data layer** for analytics and AI across SAP and non-SAP.`, 'D'],

['Process', 'How do you ensure end-to-end process integrity across modules?',
`- **End-to-end process owners** (O2C, P2P, R2R, P2M).
- **Process models** (Signavio) with system mapping.
- **Integrated testing** scenarios.
- **Process mining** (Signavio Process Intelligence) post go-live to find bottlenecks and deviations.`, 'D'],

['Process', 'How can process mining help an S/4 program?',
`- **Before**: analyze ECC processes to identify variants, rework, automation potential; inform fit-to-standard.
- **During**: baseline KPIs.
- **After**: monitor adoption, conformance, cycle times; continuous improvement.
- Tools: SAP Signavio Process Intelligence, Celonis.`, 'B'],

['Migration', 'How do you plan cutover for a large S/4 go-live?',
`- **Cutover strategy**: big bang vs phased, timing (avoid peak/year-end), legacy freeze.
- **Detailed runbook**: technical (conversion/migration), data, integration switch-over, business activities.
- **Rehearsals** with timing.
- **Go/no-go criteria**.
- **Hypercare** with command center.
- **Rollback** plan.`, 'D'],

['Governance', 'How do you manage the deltas (gaps) backlog after fit-to-standard?',
`- **Classify**: configuration, key user extension, developer extension, BTP, partner product, process change.
- **Value vs effort** prioritization; reject low-value deltas.
- **Lifecycle cost** captured.
- **Approval** by design authority.
- Track to delivery in Cloud ALM.`, 'B'],

['Strategy', 'How do you keep an S/4 system current after go-live?',
`- **Release strategy**: annual feature packs, upgrades every 1–2 years (private/on-prem); public cloud updates automatically.
- **Clean core** to minimize upgrade effort.
- **Automated regression**.
- **Innovation adoption** roadmap.
- Budget and resources planned in advance.`, 'B'],

['Behavioral', 'How do you communicate architecture trade-offs to executives?',
`- **Business framing**: cost, risk, time, flexibility.
- **Options** with recommendation.
- **One-page** visuals.
- **Decision needed** clearly stated.`, 'B'],

['Behavioral', 'Tell me about a time you challenged a system integrator\'s design.',
`- **Situation**: SI proposed a custom pricing engine in ABAP.
- **Action**: reviewed requirements; showed standard condition technique and aATP product allocation could meet 90%; proposed BTP extension for the remaining logic.
- **Result**: avoided core modification; faster upgrades; SI agreed.`, 'B'],

['Industry', 'How do you approach S/4HANA for a consumer products company?',
`- **O2C** at scale with EDI and promotions (trade promotion management), **condition contract management** for rebates.
- **aATP** with product allocation.
- **IBP** for demand sensing and S&OP.
- **EWM/TM** for distribution.
- **Batch management** and shelf-life.
- **Analytics** for revenue growth management.`, 'D'],

['Finance', 'How does Central Finance work technically?',
`- **SLT** replicates postings from source systems (SAP ECC, non-SAP via SLT-like tools) in real time.
- **Mapping** (MDG-based) of master data and org units.
- **Initial load** of balances/open items.
- **Error handling** framework (AIF).
- Enables central reporting, central payments, central processes.`, 'D'],

['Architecture', 'How do you approach regional data residency in an SAP landscape?',
`- **Regulations** (e.g. data localization in China, Russia, some Middle East).
- **Options**: separate regional instances, local data stores with replication of non-personal data, cloud regions.
- **Integration** design respecting restrictions.
- **Legal** sign-off.`, 'D'],

['Strategy', 'What is your view on SAP\'s AI and Joule strategy for customers?',
`- **Joule** as a unified copilot across SAP apps; agents for business processes.
- **Value** depends on clean data, current releases and clean core.
- **Recommendation**: prepare foundations (S/4 cloud, BTP, identity), pilot high-value scenarios, govern usage, measure benefits.
- Balance enthusiasm with business outcomes.`, 'D'],

['Process', 'How do you design order-to-cash across S/4 and CRM/commerce systems?',
`- **SAP Sales Cloud / Commerce Cloud** or non-SAP CRM for front office; **S/4** for order fulfillment, billing, finance.
- **Integration** via Integration Suite (quotes, orders, availability, pricing).
- **Pricing** ownership (S/4 vs CPQ).
- **Customer master** synchronization.
- **Order status** visibility back to front office.`, 'D'],

['Testing', 'What testing phases do you plan for an S/4 program?',
`- **Unit** and **string** testing.
- **SIT** (end-to-end with integrations).
- **Data migration** testing.
- **Performance** testing.
- **UAT**.
- **Regression** (for brownfield especially).
- **Cutover rehearsals**.
- **Security/role** testing.`, 'B'],

['Behavioral', 'What is the hardest S/4 decision you\'ve faced as an architect?',
`- e.g. choosing brownfield with selective redesign vs greenfield for a company with heavy customizations and limited budget.
- Describe analysis (process fit, data, costs), stakeholder alignment, decision and results.`, 'B'],

['Architecture', 'How do you design for M&A agility in S/4?',
`- **Template** with standardized org structures and processes.
- **SDT tools** for company code merges/splits.
- **Central Finance** for quick financial integration.
- **MDG** for master data consolidation.
- **Integration** patterns for acquired systems.`, 'D'],

['Strategy', 'How do you approach SAP licensing in an S/4 program?',
`- **FUE** (full usage equivalent) model in S/4 licensing; user type classification.
- **Digital access** (document-based) for indirect use.
- **RISE** subscription bundles (FUE-based) including infrastructure.
- **Optimize** user classifications; plan for growth.
- Involve procurement and licensing advisors.`, 'D'],

['Process', 'How do you support finance close transformation in S/4?',
`- **Universal Journal** real-time data.
- **Advanced Financial Closing**.
- **Intercompany matching** with AI.
- **Group Reporting** for fast consolidation.
- **Automation** of accruals (Accrual Engine) and allocations.
- **Embedded analytics** for close dashboards.`, 'D'],

['Architecture', 'How do you integrate S/4 with SuccessFactors and Ariba?',
`- **SuccessFactors**: employee master data replication to S/4 (for payroll/cost centers, workflow agents), org data; via Integration Suite prepackaged content.
- **Ariba**: procurement integration (POs, invoices, master data) via Cloud Integration Gateway.
- **Identity** unified via IAS.
- **Monitoring** centrally.`, 'B'],

['Behavioral', 'How do you mentor functional consultants into solution architects?',
`- Involve them in **cross-module** design decisions.
- Teach **NFRs** and integration/security thinking.
- Have them write **architecture decision records**.
- Exposure to executive presentations.
- Feedback on trade-off reasoning.`, 'B'],

['Strategy', 'Where is SAP heading and how should customers prepare?',
`- **Cloud-first** (RISE/GROW), **clean core**, **BTP** for extensions, **Business Data Cloud**, **AI (Joule/agents)** everywhere.
- Prepare: move to S/4 cloud editions, reduce custom code, invest in data foundations, build BTP skills, set AI governance.`, 'B'],

['Architecture', 'What is the role of SAP Signavio in an S/4 transformation?',
`- **Process modeling** (target processes), **process mining** (current-state insights), **journey modeling** (customer/employee experience), **process governance**.
- Links business process design to S/4 configuration and testing.
- Supports continuous improvement after go-live.`, 'D']
]);

QB['sap-arch'] = (QB['sap-arch'] || []).concat([
['Strategy', 'How do you prioritize which business processes to transform vs lift into S/4?',
`- **Value** potential (cost, cash, growth, risk) per process.
- **Pain points** and current performance (process mining).
- **Change capacity** of the organization.
- **Standard fit** — high fit = adopt standard quickly.
- Transform high-value processes; lift stable, low-value ones with minimal change.`, 'B']
]);
