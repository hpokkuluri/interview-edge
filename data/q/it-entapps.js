// it-entapps — generated from src/it-entapps-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Director, Enterprise Applications. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-entapps'] = (QB['it-entapps'] || []).concat([
['Role', 'What does a Director of Enterprise Applications own?',
`- **Application portfolio**: ERP, CRM, HCM, procurement, EPM, collaboration and business SaaS.
- **Roadmap** aligned with business functions.
- **Delivery and support** of applications (in-house + partners).
- **Integration and data** across apps.
- **Vendor and license management**.
- **Governance**: change, security, compliance.
- **Business partnership** with functional leaders.`, 'B'],

['Portfolio', 'How do you manage an enterprise application portfolio?',
`- **Inventory** with owners, users, costs, contracts, technical health, business value.
- **TIME/rationalization**: Tolerate, Invest, Migrate, Eliminate.
- **Roadmap** of consolidations and upgrades.
- **Governance** for new application requests (avoid shadow IT duplication).
- **Tools**: enterprise architecture repositories (LeanIX, ServiceNow APM).`, 'B'],

['Portfolio', 'How do you handle SaaS sprawl?',
`- **Discover** apps (SSO logs, expense reports, CASB).
- **Classify** by risk, cost, overlap.
- **Consolidate** overlapping tools; negotiate enterprise agreements.
- **Intake process** for new SaaS with security/procurement review.
- **SSO** enforcement and offboarding controls.`, 'D'],

['Strategy', 'How do you build an enterprise applications roadmap?',
`- **Business priorities** by function.
- **Current pain points** and technical debt.
- **Vendor roadmaps** (e.g. Oracle, Salesforce, Workday) and end-of-support dates.
- **Integration and data** strategy.
- **Prioritization** with business leaders; funding.
- **Quarterly** reviews.`, 'B'],

['Strategy', 'How do you decide between suite and best-of-breed applications?',
`- **Suite**: integrated data/processes, fewer vendors, simpler governance; may lack depth in some areas.
- **Best-of-breed**: functional depth and innovation; integration cost and complexity.
- **Decision** by process criticality, differentiation, integration maturity, TCO.
- Many companies: suite core (ERP/HCM) + selective best-of-breed.`, 'B'],

['Integration', 'What integration strategy do you use across enterprise applications?',
`- **iPaaS** (MuleSoft, OIC, Boomi, Workato) as standard.
- **API-led** and event-driven patterns.
- **Master data** ownership defined.
- **Monitoring** and error handling standards.
- **Integration inventory** and reuse.`, 'D'],

['Data', 'How do you manage master data across ERP, CRM and HCM?',
`- **Domain owners** (customer, supplier, product, employee).
- **Systems of record** defined.
- **MDM** tools for complex cases.
- **Data quality** rules and monitoring.
- **Governance council**.`, 'D'],

['Delivery', 'How do you set up the delivery model for enterprise apps?',
`- **Product teams** aligned to business capabilities (R2R, P2P, O2C, H2R, L2C).
- **Shared platform** teams (integration, data, security).
- **Partners** for scale and specialty.
- **Agile/hybrid** delivery with release management for SaaS updates.
- **Business process owners** embedded in prioritization.`, 'B'],

['Delivery', 'How do you manage quarterly SaaS releases across many applications?',
`- **Release calendar** consolidated.
- **Impact assessment** per app.
- **Automated regression** for critical processes.
- **Communication** and training.
- **Feature adoption** decisions with business owners.`, 'B'],

['Support', 'How do you design an application support model?',
`- **ITSM** (ServiceNow) with tiers (service desk, app analysts, specialists/vendors).
- **SLAs** by business criticality.
- **Knowledge management** and self-service.
- **Problem management** for recurring issues.
- **Business-calendar-aware** support (close, payroll, peak season).`, 'B'],

['Vendors', 'How do you manage strategic SaaS vendors?',
`- **Executive relationships** and QBRs.
- **Contract management**: renewals, price caps, SLAs, data terms.
- **License optimization** (usage reviews).
- **Roadmap influence**.
- **Exit planning** (data portability).`, 'B'],

['Vendors', 'How do you prepare for a major software renewal negotiation?',
`- **Usage analysis**: active users, modules used.
- **Requirements** for next term (growth, new products).
- **Market alternatives** and benchmarks.
- **Timing** leverage (vendor quarter/year end).
- **Negotiation team** (procurement, legal, finance).
- **Target terms**: price, caps, flexibility, SLAs.`, 'D'],

['Governance', 'How do you govern changes in enterprise applications?',
`- **Change advisory board**.
- **Risk-based** approval levels.
- **Testing and documentation** requirements.
- **SOX** controls for in-scope apps.
- **Release windows** avoiding critical business periods.`, 'B'],

['Governance', 'How do you ensure SOX compliance for enterprise applications?',
`- **Scoping** with internal audit.
- **ITGCs**: access, change, operations controls.
- **Application controls** documented and tested.
- **SoD** monitoring.
- **SOC 1/2 reports** from SaaS vendors with complementary user entity controls.
- **Remediation** of findings.`, 'D'],

['Security', 'How do you secure SaaS applications?',
`- **SSO and MFA** everywhere.
- **Role-based access** and periodic reviews.
- **SaaS security posture management** (misconfigurations).
- **Data protection** (DLP, encryption, sharing controls).
- **Vendor security assessments**.
- **Logging** to SIEM.`, 'B'],

['Business Partnership', 'How do you partner with the CFO, CHRO and CRO?',
`- **Understand** each function's goals and KPIs.
- **Regular** business reviews.
- **Joint roadmaps**.
- **Business relationship managers** for each function.
- **Deliver** measurable outcomes.`, 'B'],

['Business Partnership', 'How do you prioritize competing requests from different functions?',
`- **Common scoring** (value, risk, alignment, effort).
- **Governance forum** with function leaders.
- **Capacity** transparency.
- **Strategic alignment** with company goals.
- **Communicate** decisions and rationale.`, 'B'],

['M&A', 'How do you integrate applications after an acquisition?',
`- **Day-1**: email, collaboration, access, financial reporting.
- **Assessment** of acquired applications.
- **Integration plan**: migrate to standard apps, TSA where needed.
- **Data migration** and decommissioning.
- **People and change** management.`, 'D'],

['AI', 'How do you approach AI across enterprise applications?',
`- **Leverage embedded AI** in ERP/CRM/HCM (copilots, agents).
- **Use case portfolio** with business value.
- **Governance** (data, security, responsible AI).
- **Data foundations**.
- **Pilots** and scaling.
- **Change management**.`, 'D'],

['People', 'How do you build a high-performing enterprise apps team?',
`- **Business-savvy technologists**.
- **Career paths** (functional, technical, product).
- **Training** and certifications.
- **Right partner mix**.
- **Culture** of ownership and customer focus.`, 'B'],

['Behavioral', 'Tell me about an enterprise application program you led.',
`- **Scope** (e.g. CRM consolidation, ERP upgrade, HCM rollout).
- **Challenges** and how you handled them.
- **Results** (adoption, cost, process KPIs).
- **Lessons**.`, 'B'],

['Behavioral', 'How do you handle a business leader who bought a SaaS tool without IT?',
`- **Understand** the need and urgency.
- **Assess** risks (security, data, integration, cost).
- **Bring** it under governance (SSO, contract, data).
- **Improve** intake process to be faster so shadow IT isn't needed.
- Partner rather than police.`, 'B'],

['Finance', 'How do you manage enterprise application costs?',
`- **License optimization** (inactive users, right tiers).
- **Contract** consolidation and negotiations.
- **Retire** redundant apps.
- **Automation** of support.
- **Showback** to business units.`, 'B'],

['Data', 'How do you enable enterprise reporting across applications?',
`- **Data platform** (Snowflake/Databricks/Fabric or vendor warehouses like Oracle FDI).
- **Governed semantic layer** and KPI definitions.
- **Self-service** BI with training.
- **Data quality** and lineage.`, 'B'],

['Strategy', 'What trends will shape enterprise applications in the next few years?',
`- **AI agents** embedded in business apps.
- **Composable** architectures and low-code.
- **Data platforms** unifying operational and analytical data.
- **Consolidation** of SaaS portfolios.
- **Security and regulatory** demands.`, 'B']
]);

QB['it-entapps'] = (QB['it-entapps'] || []).concat([
['CRM', 'How would you approach a CRM consolidation (e.g. multiple Salesforce orgs)?',
`- **Assess** orgs: users, processes, customizations, integrations, data.
- **Target** model: single org vs hub-and-spoke; global processes with local variations.
- **Data migration** with dedupe of accounts/contacts.
- **Integration** to ERP (quote-to-cash).
- **Phased** migration; change management for sales teams.`, 'D'],

['HCM', 'What should an enterprise apps director know about HCM implementations?',
`- **Core HR** foundations and data quality.
- **Payroll** accuracy (parallel runs) and integration with finance.
- **Security** for sensitive data.
- **Employee experience** (self-service, mobile).
- **Integrations** (benefits, identity, ERP).
- **Works councils/legal** in some countries.`, 'B'],

['ERP', 'How do you keep ERP aligned with business changes (new entities, products, processes)?',
`- **Intake** process with business owners.
- **Templates** for common changes (new legal entity, new product line).
- **Impact assessment** across modules and integrations.
- **Release management**.
- **Documentation** of configurations.`, 'B'],

['Integration', 'An integration failure causes orders not to reach the ERP for 6 hours. What changes do you make?',
`- **Monitoring** and alerts on failures and missing volumes.
- **Retry/queue** mechanisms to avoid data loss.
- **Business dashboards** showing integration health.
- **Runbooks** and on-call.
- **Root cause** fixes (capacity, error handling).
- **Postmortem** with actions.`, 'D'],

['Governance', 'How do you set up an enterprise architecture function for applications?',
`- **Principles** and standards (cloud-first, API-first, buy before build).
- **Architecture reviews** for new apps and major changes.
- **Capability maps** and application portfolio management.
- **Target architecture** and roadmaps.
- **Lightweight**, value-adding processes.`, 'B'],

['Delivery', 'How do you implement a product operating model for enterprise apps?',
`- **Products** aligned to business capabilities with product owners.
- **Persistent teams** with capacity funding.
- **Roadmaps** co-owned with business.
- **Outcome metrics**.
- **Change** of funding model from projects to products.`, 'D'],

['Delivery', 'How do you approach testing for SaaS applications?',
`- **Risk-based** regression around releases.
- **Test automation** tools for SaaS (Tricentis, Opkey, Provar).
- **Integration** tests.
- **UAT** with business for major changes.
- **Test data** strategy.`, 'B'],

['People', 'How do you upskill your team for low-code and AI capabilities?',
`- **Training paths** (platform certifications, AI tools).
- **Pilot projects** for hands-on learning.
- **Communities** of practice.
- **Recognition** of new skills.
- **Hiring** for gaps.`, 'B'],

['Vendors', 'How do you evaluate a new SaaS application?',
`- **Requirements** and demos with scripted scenarios.
- **Security/compliance** review (SOC 2, data residency).
- **Integration** capabilities (APIs).
- **TCO**.
- **References** and vendor viability.
- **Proof of concept** for critical decisions.`, 'B'],

['Data', 'How do you approach data privacy in enterprise applications?',
`- **Data inventory** of personal data.
- **Privacy by design** in processes.
- **Retention/deletion** policies implemented.
- **Access controls** and masking.
- **Vendor DPAs**.
- **Data subject request** processes.`, 'B'],

['Support', 'How do you measure and improve user satisfaction with enterprise apps?',
`- **Surveys** (CSAT, NPS) and usage analytics.
- **Ticket analysis** for friction points.
- **User councils**.
- **Improvements** prioritized from feedback.
- **Training** and communication.`, 'B'],

['Finance', 'How do you build a business case for replacing a legacy application?',
`- **Costs** of current (licenses, support, infrastructure, risk).
- **Benefits** of new (efficiency, capabilities, risk reduction).
- **Implementation costs**.
- **NPV/payback**.
- **Non-financial** benefits.`, 'B'],

['Behavioral', 'Describe a time you had to rescue a failing application implementation.',
`- Situation, diagnosis (scope, vendor, data), actions (reset plan, governance, team changes), result, lessons.`, 'B'],

['Behavioral', 'How do you handle a vendor that isn\'t meeting SLAs?',
`- **Data** on SLA misses and impact.
- **Escalate** through account management.
- **Remediation** plan with dates.
- **Contract** remedies (credits).
- **Contingency** options if persistent.`, 'B'],

['Strategy', 'How do you approach application modernization?',
`- **Assess** legacy apps (business value, technical health).
- **Strategies**: retire, replace with SaaS, replatform, refactor.
- **Prioritize** by risk and value.
- **Roadmap** with funding.`, 'B'],

['Governance', 'What KPIs would you report for enterprise applications?',
`- **Availability** and incidents.
- **SLA** attainment.
- **Delivery** of roadmap.
- **Adoption** and satisfaction.
- **Costs** and license utilization.
- **Business** process KPIs supported.`, 'B'],

['AI', 'How do you evaluate an AI copilot or agent from a SaaS vendor?',
`- **Use cases** and measurable value.
- **Data access** and security model.
- **Accuracy** testing with real scenarios.
- **Cost** (licenses, consumption).
- **Governance** (logging, human oversight).
- **Pilot** with metrics.`, 'D'],

['Security', 'How do you manage access reviews across many applications?',
`- **Identity governance** tool (SailPoint, Saviynt, Entra ID Governance).
- **Automated** campaigns by application and risk.
- **Manager/owner** certifications.
- **Remediation** tracking.
- **Joiner-mover-leaver** automation.`, 'D'],

['Business Partnership', 'How do you gain a seat at the table with business leadership?',
`- **Deliver** reliably.
- **Speak** business language.
- **Bring** insights and ideas.
- **Understand** their goals deeply.
- **Be proactive** about risks and opportunities.`, 'B'],

['Behavioral', 'Why this Director of Enterprise Applications role?',
`- **Experience** with their application landscape.
- **Results** in similar roles.
- **Motivation** for their transformation goals.
- **Leadership** style.`, 'B'],

['Delivery', 'How do you run a global application rollout?',
`- **Global template**.
- **Pilot** and waves.
- **Local requirements** process.
- **Training** and change network.
- **Hypercare**.
- **Lessons** learned per wave.`, 'B'],

['Data', 'How do you approach analytics when data sits in many SaaS apps?',
`- **Centralize** into a data platform via connectors (Fivetran, native).
- **Model** business entities consistently.
- **Govern** definitions.
- **Self-service** with certified datasets.`, 'B'],

['Integration', 'When should you use an iPaaS vs native integrations?',
`- **Native** connectors for simple point integrations between major SaaS (fast, vendor-supported).
- **iPaaS** for orchestration, transformation, monitoring, reuse, many systems.
- **Standardize** to avoid integration sprawl.`, 'B'],

['Governance', 'How do you balance agility and control in enterprise apps?',
`- **Risk-based** governance (lighter for low-risk changes).
- **Automation** of controls (testing, approvals in pipelines).
- **Clear** decision rights.
- **Guardrails** rather than gates.`, 'B'],

['Strategy', 'How would you approach consolidating ERPs across business units?',
`- **Assess** current ERPs, costs, processes.
- **Target** platform and template.
- **Business case**.
- **Phased migration** with priority by value/risk.
- **Change management**.`, 'D']
]);
