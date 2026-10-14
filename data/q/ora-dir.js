// ora-dir — generated from src/ora-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-dir'] = (QB['ora-dir'] || []).concat([
['Strategy', 'How do you decide between EBS upgrade/extension and moving to Oracle Fusion Cloud?',
`- **Business drivers**: innovation pace, AI, user experience, cost of running EBS, talent availability.
- **EBS support timelines** and infrastructure costs.
- **Customization level** in EBS — heavy custom code increases migration effort but also run cost.
- **TCO** over 5–7 years for both paths.
- **Risk and change capacity** of the organization.
- Option: **hybrid** (Fusion Financials first, EBS SCM later).
- Present a recommendation with a phased plan.`, 'D'],

['Strategy', 'How do you build the business case for an ERP investment?',
`- **Problem statement** and strategic alignment.
- **Benefits**: efficiency (FTE capacity), working capital (DSO, inventory), cost avoidance (legacy retirement), risk reduction (controls), revenue enablement.
- **Costs**: subscriptions, implementation, internal team, change management, run costs.
- **NPV/ROI/payback**, sensitivity analysis.
- **Non-financial** benefits.
- **Benefit owners** in the business.`, 'D'],

['Delivery', 'How do you structure a large ERP program?',
`- **Executive sponsor** (CFO/COO) and steering committee.
- **Program director** with PMO.
- **Workstreams**: Finance, SCM, HCM, Integrations, Data, Testing, Change/Training, Technical.
- **Design authority**.
- **Business process owners** with decision rights.
- **Phases and gates**.
- **Risk and issue management**.
- **Benefits management**.`, 'D'],

['Delivery', 'What are your go/no-go criteria for an ERP go-live?',
`- **Testing**: SIT/UAT completed; no open critical/high defects; workarounds documented for mediums.
- **Data**: final mock reconciled; business sign-off.
- **Cutover rehearsal** within planned time.
- **Integrations** tested with partners.
- **Security**: roles provisioned and tested; SoD reviewed.
- **Training** completed; super users ready.
- **Support model** ready (hypercare, war room).
- **Business readiness**: process owners confirm.
- **Rollback plan**.`, 'D'],

['Operations', 'How do you run hypercare after a major go-live?',
`- **War room** with business and IT; daily stand-ups.
- **Triage** by business impact; fast decisions.
- **Monitoring** of critical processes (payments, shipping, close).
- **KPIs** dashboard (tickets, backlog, critical process status).
- **Communication** to users and leadership.
- **Exit criteria** to transition to steady-state support.`, 'B'],

['Governance', 'How do you balance standardization with business units wanting local differences?',
`- **Global template** principles agreed by leadership.
- **Variation process**: requests justified with business/regulatory reasons; approved by design authority.
- **Configurable** variations (by BU) preferred over extensions.
- **Cost transparency** of variations.
- Periodic review to remove obsolete variations.`, 'B'],

['Governance', 'How do you handle audit findings related to ERP?',
`- **Understand** the finding and root cause.
- **Remediation plan** with owners and dates.
- **Interim mitigating controls**.
- **Evidence** of remediation and testing.
- **Prevent recurrence**: process/automation changes.
- **Report** progress to audit committee via CIO/CFO when needed.`, 'B'],

['Vendors', 'How do you evaluate an AMS (application managed services) provider\'s performance?',
`- **SLA metrics**: response/resolution times, backlog.
- **Quality**: reopened tickets, repeat incidents, failed changes.
- **Proactivity**: improvement ideas, automation delivered.
- **Knowledge**: documentation quality, staff continuity.
- **Business satisfaction**.
- **Commercials**: value for money; consider outcome-based pricing.`, 'B'],

['People', 'How do you lead managers, not just individual contributors?',
`- Set **direction and outcomes**, let managers decide how.
- **Coach** them on people leadership and stakeholder management.
- **Consistent practices** across teams (performance, hiring).
- **Leadership team** forum weekly.
- **Develop** them for future roles.`, 'B'],

['People', 'How do you reskill an ERP team for cloud and AI?',
`- **Skills assessment** vs future needs (Fusion, OIC, VBCS, data, AI agents).
- **Learning paths** and certifications; time allocated for learning.
- **Hands-on** pilots and hackathons.
- **Hiring** for key gaps.
- **Recognition** of new skills in career progression.`, 'B'],

['Business Partnership', 'How do you show the value of the ERP organization to executives?',
`- **Business outcomes** tied to ERP initiatives (close days, cost per invoice, DSO, inventory).
- **Stability** and service metrics.
- **Cost transparency** and optimization achieved.
- **Roadmap progress**.
- Quarterly value review with CFO/CIO.`, 'B'],

['Strategy', 'How would you approach rationalizing multiple ERPs after acquisitions?',
`- **Inventory** ERPs, costs, users, processes, contracts.
- **Target state**: one global Oracle Fusion platform (typical).
- **Prioritize** by cost savings, risk, synergy targets, complexity.
- **Roadmap** of migrations using a template.
- **Interim**: consolidated reporting.
- **Business case** and sponsorship.`, 'D'],

['Operations', 'How do you approach continuous improvement after ERP stabilization?',
`- **Analyze** process data: holds, exceptions, cycle times, manual work.
- **Prioritize** improvements by value.
- **Adopt** new Oracle features each quarter.
- **Automation** (AI agents, auto-approvals, auto-reconciliation).
- **Measure** and share results.`, 'B'],

['Data', 'How do you approach master data governance at the enterprise level?',
`- **Data owners** by domain (suppliers: procurement; customers: finance/sales; items: supply chain).
- **Governance council** with standards and KPIs.
- **Tools**: workflows in Oracle (supplier registration, NIR), data quality monitoring.
- **Stewards** with time allocated.
- **Link to business outcomes** (fewer payment errors, accurate planning).`, 'D'],

['Risk', 'What are the top ERP risks you monitor as Director?',
`- **Operational**: outages of critical processes (payments, payroll, shipping).
- **Security**: access abuse, data leaks.
- **Compliance**: SOX, tax, privacy.
- **Change**: quarterly updates, big projects.
- **People**: key-person dependency.
- **Vendor**: partner performance, Oracle roadmap changes.
- **Financial**: budget overruns.
Risk register reviewed monthly with mitigation owners.`, 'B'],

['Behavioral', 'How do you handle a situation where your CIO and CFO have different priorities for ERP?',
`- Understand **both priorities** and drivers (CIO: platform cost, security, standardization; CFO: speed, controls, insights).
- Find **common ground** and trade-offs.
- Present **options with impact** to both together.
- Use **governance** (steering committee) for decisions.
- Execute and communicate consistently.`, 'B'],

['Behavioral', 'Tell me about a time you built a team from scratch.',
`- **Context**: new ERP CoE after go-live, partner-run before.
- **Actions**: defined roles, hired a mix of experienced and growth hires, built onboarding, transitioned knowledge from partner, set up processes (support, release, governance).
- **Result**: in 9 months, insourced L2 support, reduced vendor costs 35%, improved satisfaction.`, 'B'],

['Behavioral', 'How do you keep your team motivated during long, difficult programs?',
`- Connect work to **purpose** and business impact.
- **Celebrate milestones**.
- **Protect** from unnecessary chaos; clear priorities.
- **Listen** and act on concerns.
- **Sustainable pace**; recognize effort.`, 'B'],

['Behavioral', 'What would your business partners say about you?',
`- Aim for: reliable, transparent, understands the business, brings ideas, delivers.
- Give **examples** (feedback quotes, outcomes).
- Mention a development area and progress.`, 'B'],

['Strategy', 'How do you decide what to build on Oracle vs buy a best-of-breed SaaS tool?',
`- **Fit** with Oracle capabilities today and roadmap.
- **Differentiation**: does it give competitive advantage?
- **Integration cost** and data consistency.
- **TCO** and vendor viability.
- **User experience**.
- **Platform strategy** (fewer vendors vs best tools).
- Decide with architecture and business owners.`, 'B'],

['Operations', 'How would you reduce ERP support costs by 20% without hurting service?',
`- **Analyze** ticket data: top categories, repeat incidents, how-to questions.
- **Eliminate** root causes; **self-service** knowledge base; **training**.
- **Automation**: monitoring, auto-remediation, chatbots/AI agents for user questions.
- **Vendor optimization**: rates, outcome-based contracts.
- **Retire** unused customizations/reports.
- Track SLA and satisfaction during changes.`, 'D'],

['Delivery', 'How do you manage dependencies between ERP and other enterprise programs (CRM, data platform)?',
`- **Integrated roadmap** across programs.
- **Architecture alignment** (integration standards, master data ownership).
- **Joint planning** for shared milestones.
- **Dependency tracking** in PMO; escalation paths.
- **Regular syncs** between program leaders.`, 'B'],

['AI', 'How would you govern AI agents acting in Oracle ERP?',
`- **Approval process** for each agent use case (business owner, security, compliance).
- **Least-privilege** roles for agents; actions logged.
- **Human-in-the-loop** for financial commitments.
- **Monitoring**: accuracy, exceptions, drift.
- **Incident handling** for wrong actions.
- **Policy** aligned with corporate AI governance.`, 'D'],

['Behavioral', 'Why are you the right Director for our ERP organization?',
`- **Experience**: platforms, programs and teams similar to theirs.
- **Results**: measurable business outcomes and service improvements.
- **Leadership**: teams built, people developed.
- **Partnership**: trusted by finance and supply chain leaders.
- **Forward-looking**: cloud, automation, AI.
- Tailor to their situation (transformation, stabilization, growth).`, 'B'],

['Governance', 'How do you manage technical debt in the ERP landscape?',
`- **Inventory** customizations, extensions, legacy integrations, unused reports.
- **Assess** risk and cost.
- **Allocate capacity** in the roadmap (e.g. 15–20%).
- **Retire/replace** with standard features.
- **Prevent** new debt through design authority.`, 'B']
]);

// Added Oct 2026: Redwood and AI Agent Studio questions for leaders.
QB['ora-dir'] = (QB['ora-dir'] || []).concat([
['AI Agent Studio', 'What is your strategy for AI agents on the Oracle ERP platform?',
`- **Start with Oracle-delivered agents** and AI Agent Studio (native security, lower risk).
- **Use-case portfolio** across AP, close, procurement, order management, HR — scored by value and risk.
- **Governance**: risk tiers, human approval for financial/commitment actions, evaluations, monitoring, audit involvement.
- **Skills**: build a small agent team in the ERP CoE.
- **Measure** value (cycle times, productivity) and cost (premium LLM tokens).`, 'D'],
['AI Agent Studio', 'How do you decide between Oracle AI Agent Studio and a general enterprise AI platform?',
`- **Oracle AI Agent Studio** for processes centered on Fusion data — inherits Fusion security, uses business objects, delivered templates, Oracle supports it.
- **Enterprise AI platform** for cross-system assistants and non-ERP use cases.
- Connect them via **A2A/MCP** and APIs instead of duplicating.
- Decide per use case; avoid building ERP agents outside Fusion without a reason.`, 'D'],
['Redwood', 'How do you fund and govern the Redwood transition?',
`- Treat it as a **program** with a budget: VBS rebuilds, testing, training.
- Use it to **simplify**: retire unneeded personalizations.
- **Timeline** driven by Oracle's classic retirement dates.
- **Governance**: change control for VBS extensions; regression automation.`, 'D'],
['Risk', 'What new risks do AI agents add to ERP, and how do you manage them?',
`- **Wrong actions or answers** → workflows, approvals, evaluations.
- **Data exposure** → least privilege, inherited security, credential store for external access.
- **Audit/compliance** → traces, control documentation.
- **Cost overruns** → token monitoring.
- **Dependency on vendors/models** → periodic re-evaluation.`, 'D'],
['Business Partnership', 'How would you present AI agent results to the CFO after a pilot?',
`- **Problem** and baseline.
- **Results**: time saved, cycle time, accuracy, user feedback.
- **Costs and risks**, control design.
- **Recommendation**: scale, adjust or stop; next use cases.`, 'B']
]);
