// Director, PMO & Transformation. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-pmo'] = (QB['it-pmo'] || []).concat([
['Role', 'What is the role of a PMO in a modern organization?',
`- **Portfolio management**: prioritization, funding, capacity, alignment to strategy.
- **Delivery governance**: standards, stage gates, risk management, reporting.
- **Enablement**: methods, tools, training, coaching project managers.
- **Benefits realization** tracking.
- **Transformation office** for strategic programs.
- Value-adding, not bureaucratic.`, 'B'],

['Portfolio', 'How do you prioritize a portfolio of projects?',
`- **Strategic alignment** scoring.
- **Value** (financial and non-financial), **risk**, **effort**, **dependencies**, **urgency** (regulatory).
- **Capacity** constraints.
- **Governance board** decisions.
- **Re-prioritize** quarterly.`, 'B'],

['Portfolio', 'How do you manage capacity across a project portfolio?',
`- **Resource planning** by skill and team.
- **Demand vs supply** visibility.
- **Limit WIP** — start fewer projects, finish more.
- **Scenario planning** for new requests.
- **Tools** (Planview, ServiceNow SPM, Jira Align).`, 'D'],

['Methodology', 'Waterfall, agile, hybrid — how do you choose?',
`- **Waterfall/predictive**: stable requirements, regulatory phases, fixed-scope contracts (e.g. some infrastructure).
- **Agile**: evolving requirements, software products, customer feedback.
- **Hybrid**: ERP programs (phase gates + agile build sprints).
- Choose per project context; standardize governance outcomes, not ceremonies.`, 'B'],

['Methodology', 'How do you scale agile across a large organization?',
`- Frameworks (SAFe, LeSS, Scrum@Scale) or a lightweight custom model.
- **Common cadence** for planning (PI planning/quarterly).
- **Portfolio Kanban** for initiatives.
- **Dependencies** managed visibly.
- **Leadership** buy-in and coaching.
- Avoid framework dogma; focus on outcomes.`, 'D'],

['Governance', 'What stage gates would you use for large programs?',
`- **Idea/Concept**: problem, value hypothesis.
- **Business case**: options, costs, benefits, risks.
- **Plan/Design**: scope, plan, architecture approval.
- **Build/Test readiness**.
- **Go-live readiness**.
- **Benefits review** post-implementation.
- Gates focus on decisions, not paperwork.`, 'B'],

['Governance', 'How do you design project status reporting that executives actually use?',
`- **One page**: RAG with objective criteria, milestones, budget, top risks/issues, decisions needed.
- **Trends** over time.
- **Consistent** format across projects.
- **Automated** data from tools where possible.
- **Exceptions-based** portfolio dashboards.`, 'B'],

['Risk', 'How do you manage risks in programs?',
`- **Identify** early with team workshops.
- **Assess** probability/impact.
- **Mitigation** plans with owners and dates.
- **Monitor** with key risk indicators.
- **Escalate** per thresholds.
- **Contingency** budgets.`, 'B'],

['Benefits', 'How do you ensure projects deliver their promised benefits?',
`- **Benefit owners** in the business.
- **Baselines** and measurable KPIs.
- **Benefits register** and tracking post go-live.
- **Adoption** focus.
- **Reviews** at 3/6/12 months.
- Link to budgets (e.g. cost savings removed from budgets).`, 'D'],

['Transformation', 'What makes a business transformation succeed?',
`- **Clear vision** and case for change.
- **Executive sponsorship** and alignment.
- **Strong transformation office** with governance.
- **Business ownership** of outcomes.
- **Change management** and communication.
- **Quick wins** and momentum.
- **Measurement** of value.`, 'B'],

['Transformation', 'How do you run a transformation office (TMO)?',
`- **Charter** and decision rights.
- **Initiative** portfolio with owners and value targets.
- **Cadence**: weekly initiative reviews, monthly steering.
- **Value tracking** validated by finance.
- **Interdependency** and change load management.
- **Communications** and culture.`, 'D'],

['Change', 'How do you approach organizational change management?',
`- **Frameworks** (ADKAR, Kotter) adapted.
- **Stakeholder analysis** and impact assessment.
- **Sponsorship** and change network.
- **Communication** and training plans.
- **Resistance** management.
- **Adoption** measurement.`, 'B'],

['Change', 'How do you handle change saturation when too many initiatives hit the same people?',
`- **Change heat map** by group and time.
- **Sequence** initiatives.
- **Consolidate** communications and training.
- **Escalate** to leadership for prioritization.
- **Support** managers.`, 'D'],

['People', 'How do you develop project managers in your PMO?',
`- **Competency framework** (technical PM, leadership, business acumen).
- **Training and certifications** (PMP, agile).
- **Mentoring** and communities of practice.
- **Rotations** across project types.
- **Feedback** and career paths (program manager, portfolio manager).`, 'B'],

['Finance', 'How do you manage project financials?',
`- **Budgets** by phase/category.
- **Actuals vs forecast** monthly; earned value for large programs.
- **Capex/opex** classification with finance.
- **Change control** for budget changes.
- **Contingency** management.`, 'B'],

['Vendors', 'How do you manage vendors on large programs?',
`- **Clear SOWs** and deliverables.
- **Governance**: regular reviews, KPIs.
- **Milestone payments** tied to acceptance.
- **Integrated** plans and RAID.
- **Escalation** paths.`, 'B'],

['Behavioral', 'Tell me about a program you turned around.',
`- **Situation**: troubled program (budget, schedule, morale).
- **Actions**: assessment, re-plan, governance fixes, resourcing, stakeholder reset.
- **Results**: delivery and benefits.
- **Lessons**.`, 'B'],

['Behavioral', 'How do you handle a sponsor who is disengaged?',
`- **Understand** reasons (competing priorities, unclear value).
- **Make it easy**: concise decisions-focused meetings.
- **Show** value and risks clearly.
- **Escalate** if sponsorship gap threatens success; seek a new sponsor if needed.`, 'B'],

['Behavioral', 'How do you say no to a senior executive\'s pet project?',
`- **Use the portfolio process** — evaluate objectively.
- **Show** trade-offs with other priorities.
- **Offer** options (smaller pilot, later timing).
- **Let governance** decide transparently.`, 'B'],

['Tools', 'What tools and data do you use to run a portfolio?',
`- **SPM/PPM tools** (Planview, ServiceNow SPM, Jira Align, Smartsheet).
- **Integrated** data from delivery tools (Jira, Azure DevOps).
- **Dashboards** (Power BI/Tableau).
- **Single source of truth** for portfolio data.`, 'B'],

['AI', 'How can AI improve PMO operations?',
`- **Automated status** summaries from tool data.
- **Risk prediction** from project signals.
- **Resource matching**.
- **Document generation** (charters, reports).
- **Meeting summaries** and action tracking.
Govern accuracy and data security.`, 'D'],

['Strategy', 'How do you link strategy to execution?',
`- **Strategic objectives** translated into initiatives and OKRs.
- **Portfolio** alignment scoring.
- **Funding** follows priorities.
- **Regular** strategy reviews connecting progress to outcomes.`, 'B'],

['Governance', 'How do you avoid the PMO being seen as bureaucracy?',
`- **Value** focus: help projects succeed.
- **Right-size** governance by risk.
- **Automate** reporting.
- **Coach**, don't police.
- **Measure** PMO value (delivery success, benefits).`, 'B'],

['Behavioral', 'Why do you want to lead our PMO/transformation?',
`- **Experience** with similar portfolios/transformations.
- **Results** achieved.
- **Approach** (pragmatic, value-focused).
- **Motivation** for their strategy.`, 'B'],

['Delivery', 'How do you handle interdependencies between programs?',
`- **Dependency mapping** at portfolio level.
- **Integrated** roadmaps and milestones.
- **Regular** cross-program syncs.
- **Escalation** of conflicts.
- **Architecture** alignment.`, 'B']
]);
