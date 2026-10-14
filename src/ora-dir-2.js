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
