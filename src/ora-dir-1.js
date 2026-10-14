// Director, Oracle ERP. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['ora-dir'] = (QB['ora-dir'] || []).concat([
['Role', 'What are the key responsibilities of a Director of Oracle ERP?',
`- **Own the ERP platform** (delivery and run): Financials, SCM, often HCM/EPM interfaces.
- **Roadmap and portfolio**: prioritized with business leaders.
- **Organization**: leads managers/associate directors, analysts, architects, partners.
- **Budget**: run and change spend, vendor contracts.
- **Governance**: change control, release management, SOX ITGCs, security.
- **Business partnership**: CFO organization, supply chain, procurement leaders.
- **Service performance**: SLAs, stability, user satisfaction.`, 'B'],

['Strategy', 'How would you build a 2-year ERP roadmap?',
`- **Inputs**: business strategy, pain points, support data, Oracle roadmap, technical debt, audit findings.
- **Themes**: stabilize, automate (AP/close/procurement), analytics (FDI), AI agents, new capabilities (e.g. revenue, planning), M&A readiness.
- **Prioritize** by value, risk and dependencies; quick wins in first 6 months.
- **Capacity and budget** plan.
- **Governance**: quarterly roadmap reviews with business leaders.
- **Metrics** for each initiative.`, 'B'],

['Strategy', 'What would you do in your first 100 days as Director of ERP?',
`- **Listen**: business leaders, team, partners, audit; ride along on close and key operations.
- **Assess**: stability, backlog, roadmap, team capabilities, vendor contracts, budget, risks.
- **Quick wins**: fix top pain points visible to the business.
- **Org and process**: clarify roles, governance, intake.
- **Plan**: 12-month priorities and KPIs agreed with CIO and CFO.`, 'B'],

['Organization', 'How would you structure an ERP team of 25 people?',
`- **Process-aligned teams**: Record-to-Report, Procure-to-Pay, Order-to-Cash, Supply Chain, (HCM).
- **Platform/shared services**: integrations (OIC), reporting/analytics, security, release management.
- **Architecture** role across teams.
- **Partners** for surge or specialized skills; AMS for L2 if economical.
- Managers/leads per team with clear ownership and career paths.`, 'D'],

['Organization', 'Insource vs outsource: how do you decide the right mix for ERP support?',
`- **Insource** core knowledge: architecture, business process ownership, critical modules, vendor management.
- **Outsource**: L1/L2 routine support, surge capacity, specialized skills (e.g. payroll legislative), 24x7 coverage.
- Consider **cost**, **quality**, **knowledge risk**, **speed**, **compliance**.
- Contracts with **SLAs**, knowledge transfer, and exit clauses.
- Review mix yearly.`, 'D'],

['Business Partnership', 'How do you partner with the CFO organization?',
`- **Regular forums**: monthly with Controller/VP Finance; quarterly roadmap reviews with CFO.
- **Understand finance goals**: close speed, controls, cost, forecasting accuracy.
- **Shared KPIs** and value tracking.
- **Joint ownership**: process owners in finance; IT owns platform.
- **Proactive ideas** — automation, analytics, AI.
- Be visible during close and audit.`, 'B'],

['Business Partnership', 'How do you say no to a senior business leader?',
`- Understand the **underlying need**.
- Explain **constraints and trade-offs** (cost, risk, other priorities).
- Offer **alternatives** (phased approach, standard feature, workaround).
- Use **governance** for prioritization decisions, not personal rejection.
- Keep the relationship — follow up.`, 'B'],

['Governance', 'How do you set up ERP governance?',
`- **Steering committee** (business and IT executives) for roadmap and budget.
- **Design authority** for solution decisions.
- **Change advisory board** for production changes.
- **Intake and prioritization** process with business process owners.
- **Release management** for quarterly updates and enhancements.
- **Data governance** for master data.
- **Security and compliance** reviews.`, 'D'],

['Governance', 'How do you manage SOX compliance for the ERP environment?',
`- **ITGCs**: access management (provisioning, reviews, privileged access), change management (approval, testing, segregation, emergency changes), operations (job monitoring, interfaces).
- **Application controls** in configuration, documented and tested.
- **SoD** monitoring and remediation.
- **Evidence** repository and audit calendar.
- **Relationship** with internal audit and external auditors; remediate findings quickly.`, 'D'],

['Budget', 'How do you build and manage the ERP budget?',
`- **Run costs**: licenses (Oracle subscriptions), OIC/OCI, staff, AMS vendors, tools.
- **Change costs**: projects and enhancements by business case.
- **Forecast** monthly; manage variances.
- **Optimize**: license rationalization, vendor rates, automation to reduce support costs.
- **Communicate** value delivered vs spend.`, 'B'],

['Vendors', 'How do you select and manage a systems integrator for an Oracle program?',
`- **RFP** with clear scope, requirements, evaluation criteria (experience in industry/modules, team quality, methodology, price, references).
- **Orals** with proposed team members; scenario-based questions.
- **Contract**: fixed price vs T&M, milestones tied to deliverables, key personnel, quality gates, warranty.
- **Governance**: joint PMO, weekly/monthly reviews, KPIs.
- **Knowledge transfer** and transition to support.`, 'D'],

['Vendors', 'How do you manage the relationship with Oracle?',
`- **Account team** relationship; quarterly business reviews.
- **Support escalations** process.
- **Roadmap influence** via Customer Connect and advisory boards.
- **Commercial**: renewals, license usage, new products — negotiate with clear needs.
- Hold Oracle accountable for SaaS service levels.`, 'B'],

['Delivery', 'How do you ensure large ERP projects deliver value, not just go-live?',
`- **Business case** with measurable benefits and owners.
- **Benefit tracking** after go-live (e.g. close days, touchless %).
- **Adoption** focus: training, process changes, KPIs.
- **Post-implementation review** at 3–6 months.
- **Continuous improvement** backlog.`, 'B'],

['Delivery', 'A major ERP project is red: over budget and behind schedule. What do you do?',
`- **Health check**: independent review of scope, plan, quality, team, vendor performance.
- **Root causes**: unclear requirements, poor estimates, data issues, resourcing.
- **Options**: de-scope, phase, re-baseline, add/replace resources, change vendor approach.
- **Decision** with steering committee and sponsor.
- **Re-plan** with tighter governance and leading indicators.
- **Communicate** transparently.`, 'D'],

['Operations', 'How do you measure ERP service performance?',
`- **Availability/stability**: incidents by priority, MTTR, integration failures.
- **SLA attainment** and backlog.
- **Change success rate**.
- **User satisfaction** (surveys).
- **Business KPIs** supported (close days, PO cycle time, order cycle time).
- Report monthly to business and IT leadership.`, 'B'],

['Operations', 'How do you prepare for and run quarterly Oracle updates across ERP?',
`- **Release calendar** with business (avoid close conflicts).
- **Impact analysis** per process team; feature adoption decisions.
- **Automated regression** for core flows and integrations.
- **Go/no-go** before production update (issues raised to Oracle).
- **Communications** and training.
- **Post-update** hypercare and review.`, 'B'],

['Security', 'How do you approach ERP security and access management?',
`- **Role design** with least privilege and SoD.
- **Automated provisioning** from HCM/IAM with approvals.
- **Access reviews** quarterly by managers/owners.
- **Privileged access** controls.
- **Sensitive data** protection (bank details, personal data).
- **Monitoring** and periodic audits.
- Coordinate with the CISO organization.`, 'D'],

['Data', 'How do you build a data and analytics capability around ERP?',
`- **Operational reporting** (OTBI/BIP) self-service with governance.
- **Analytics platform** (FDI or enterprise data platform with BICC extracts).
- **KPIs** defined with business owners.
- **Data governance**: owners, quality, definitions.
- **Skills**: BI developers, data engineers, business analysts.`, 'D'],

['AI', 'What is your AI strategy for the ERP platform?',
`- **Use embedded Oracle AI** first (agents, IDR, predictions) — lower cost and risk.
- **Prioritize use cases** with measurable value: AP processing, collections, close insights, procurement assistance.
- **Governance**: risk assessment, human-in-the-loop for financial actions, auditability, security.
- **Pilots** with metrics; scale successful ones.
- **Upskill** team on AI Agent Studio and prompt design.
- **Change management** for users.`, 'D'],

['M&A', 'How would you integrate an acquired company\'s ERP?',
`- **Day 1** reporting via consolidation mapping; no system changes.
- **Assessment**: systems, processes, data, contracts, people.
- **Decision**: migrate to Oracle template vs TSA vs keep (rare).
- **Plan**: template-based migration with data, integrations, security, controls.
- **Timeline**: aligned to synergy targets and close calendar.
- **People**: retain key knowledge from acquired company.`, 'D'],

['People', 'How do you build a culture of accountability and continuous improvement?',
`- **Clear ownership** for processes, systems and outcomes.
- **Transparent metrics** shared with the team.
- **Blameless post-mortems** focused on learning.
- **Recognize** improvements and initiative.
- **Leaders model** the behavior.`, 'B'],

['People', 'How do you retain top ERP talent?',
`- **Interesting work**: new capabilities, AI, architecture.
- **Growth**: career paths (technical and management), certifications, mentoring.
- **Recognition** and fair compensation (benchmark market).
- **Flexibility** and work-life balance.
- **Stay interviews** to understand risks early.`, 'B'],

['Behavioral', 'Tell me about the biggest ERP transformation you led.',
`Structure:
- **Scope**: modules, entities, countries, users, budget, timeline, team size and partners.
- **Your role**: accountability and key decisions.
- **Challenges**: e.g. data, resistance, vendor issues — how you handled them.
- **Outcomes**: business KPIs and stability.
- **Learnings**.`, 'B'],

['Behavioral', 'Describe a failure and what you learned.',
`- Pick a real, significant failure (e.g. go-live with poor data quality causing a delayed close).
- Own your part.
- What you did to recover.
- What you changed permanently (data readiness gates, more mocks, business sign-off).`, 'B'],

['Behavioral', 'How do you make decisions under pressure with conflicting stakeholder views?',
`- Gather **facts quickly**; separate urgent from important.
- Identify **decision owner** and criteria (risk, business impact, compliance).
- Consult key stakeholders briefly.
- **Decide** and communicate rationale.
- Review afterwards.`, 'B']
]);
