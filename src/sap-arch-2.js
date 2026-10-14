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
