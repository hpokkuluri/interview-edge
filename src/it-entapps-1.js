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
