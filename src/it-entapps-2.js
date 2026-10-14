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
