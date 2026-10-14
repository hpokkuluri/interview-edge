// Associate Director, ERP. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['ora-assoc-dir'] = (QB['ora-assoc-dir'] || []).concat([
['Role', 'How do you see the Associate Director role in an ERP organization?',
`- **Bridge** between hands-on delivery and leadership: own a functional area (e.g. Finance & SCM applications) or a set of workstreams.
- **People**: lead 5–15 consultants/analysts — hiring, coaching, performance.
- **Delivery**: projects, enhancements and support for the area meet scope, quality, time.
- **Stakeholders**: trusted partner for finance/supply chain directors.
- **Technical credibility**: can still review designs and solve escalated problems.
- **Input to strategy**: roadmap, budget and resourcing for the area.`, 'B'],

['Role', 'What would you focus on in your first 90 days as Associate Director?',
`- **30 days**: meet the team 1:1, key business stakeholders, review open projects, incidents, backlog, SLAs; understand pain points.
- **60 days**: identify top issues (e.g. support backlog, quarterly update failures, unclear priorities); quick wins; clarify roles and ways of working.
- **90 days**: present a plan — priorities, team development, process improvements, KPIs — agreed with my Director and business partners.`, 'B'],

['People', 'How do you build and develop a high-performing ERP team?',
`- **Clear expectations**: roles, ownership by module/process, quality standards.
- **Growth**: individual development plans, certifications, stretch assignments, rotation across modules.
- **Coaching**: regular 1:1s, design reviews as teaching moments.
- **Recognition** of good work; psychological safety to raise problems.
- **Hiring** for gaps (skills and attitude).
- **Measure**: delivery quality, engagement, retention.`, 'B'],

['People', 'How do you handle a strong technical performer who is difficult to work with?',
`- **Specific feedback** on behaviors and their impact on the team/stakeholders, with examples.
- Understand causes (frustration, workload, recognition).
- Agree expectations and support (e.g. pairing, communication coaching).
- Recognize improvements; escalate to formal performance management if behavior continues.
- Don't let technical value excuse behavior that damages the team.`, 'B'],

['People', 'How do you run performance reviews for your team?',
`- **Continuous feedback** during the year so reviews have no surprises.
- Evidence: goals, delivered outcomes, stakeholder feedback, behaviors.
- **Calibration** with peers for fairness.
- Balanced conversation: strengths, growth areas, career aspirations.
- **Development plan** for next year.
- Link to compensation per company process.`, 'B'],

['People', 'How do you hire for an Oracle functional role?',
`- **Define** the need: module depth, level, soft skills.
- **Structured interviews**: technical scenarios (e.g. "walk through P2P accounting"), problem solving, communication, culture.
- **Practical exercise** (design a setup, troubleshoot a case).
- Diverse panel; consistent scoring.
- **Sell** the role: growth, interesting work.
- Onboarding plan ready before day one.`, 'B'],

['Delivery', 'How do you manage multiple projects and support work with one team?',
`- **Single backlog** with priorities agreed with business owners.
- **Capacity allocation**: e.g. 60% projects, 30% support, 10% improvement — adjusted monthly.
- **Clear owners** per item; WIP limits.
- **Weekly review** of status, risks, capacity.
- Protect **support SLAs** for critical processes (close, payments, shipping).
- Escalate conflicts early to the Director/business.`, 'B'],

['Delivery', 'How do you estimate and plan an enhancement request?',
`- **Clarify requirements** and acceptance criteria with the requester.
- **Solution options** (config, report, extension) with effort ranges.
- **Impact analysis**: other modules, integrations, security, controls.
- **Plan**: design, build, test (including regression), deploy, communicate.
- **Approval** through change governance.
- Track estimates vs actuals to improve.`, 'B'],

['Support', 'How do you set up an effective ERP support model?',
`- **Tiered support**: L1 service desk, L2 functional analysts by module, L3 specialists/partners/Oracle.
- **SLAs** by priority with business-impact definitions.
- **Knowledge base** and runbooks; self-service guides.
- **Problem management**: root-cause analysis on recurring incidents.
- **Monitoring** of integrations and jobs.
- **Business calendar** awareness (close, payroll, peak shipping).
- KPIs: SLA attainment, backlog, repeat incidents, satisfaction.`, 'D'],

['Support', 'A P1 incident: payments did not go to the bank on payroll/supplier payment day. How do you lead the response?',
`- **Mobilize**: incident bridge with AP/treasury, integration team, bank contact; one incident lead.
- **Business continuity first**: manual file upload or bank portal for critical payments; prioritize.
- **Diagnose**: payment file generation, transmission logs, bank acknowledgments, certificates/keys.
- **Communicate** regular updates to stakeholders.
- **Fix and verify** with bank confirmation.
- **Post-incident review**: root cause and prevention (monitoring, alerts, certificate expiry tracking).`, 'D'],

['Stakeholders', 'How do you build a strong relationship with the Controller or VP Supply Chain?',
`- Understand their **priorities and KPIs** (close timeline, audit, cost, service).
- **Regular cadence** (monthly review) with transparent status and risks.
- **Deliver quick wins** that matter to them.
- Bring **ideas** (automation, analytics), not just tickets.
- Be present in **critical moments** (close, go-lives).
- Say no with alternatives when needed.`, 'B'],

['Stakeholders', 'Two business leaders want conflicting changes. How do you handle it?',
`- Clarify **each need** and the business outcome behind it.
- Analyze **impact** of each option on both.
- Look for a **solution meeting both** (e.g. configuration by BU).
- If not possible, bring them together with data; escalate to a common sponsor or governance board for a decision.
- Document and communicate the decision.`, 'B'],

['Governance', 'How do you manage quarterly Oracle updates for your area?',
`- **Plan** the update calendar; assign owners per module.
- **Impact assessment** of release notes; decide on opt-ins.
- **Regression testing** (automated where possible) in test pod during the two-week window.
- **Defect triage** and SRs.
- **Communication** and training for users.
- **Post-update validation** in production.`, 'B'],

['Governance', 'How do you ensure SOX IT general controls are met for ERP changes?',
`- **Change management**: tickets, approvals, testing evidence, segregation between developer and migrator, emergency change process.
- **Access management**: provisioning approvals, quarterly access reviews, privileged access logging.
- **Operations**: job monitoring, interface controls, backup/restore (vendor SOC reports).
- **Evidence** stored and ready for auditors.
- Train the team; spot-check compliance.`, 'D'],

['Technical', 'As Associate Director, how hands-on should you be?',
`- Stay **credible**: able to review designs, understand root causes, challenge estimates.
- Hands-on in **critical incidents** and **key design decisions**.
- Avoid becoming a **bottleneck** — delegate execution, coach the team.
- Keep up with Oracle releases and new capabilities.`, 'B'],

['Technical', 'How would you approach a request to automate month-end accruals in Oracle?',
`- Understand **accrual types**: receipt accruals (PO-based), recurring (rent, utilities), estimates (bonuses, services).
- **PO-based**: Receipt Accounting accruals (accrue at receipt or period-end).
- **Recurring**: recurring journals or allocations in GL.
- **Estimates**: spreadsheet upload (ADFdi) with approval, or AI-assisted estimates in future.
- **Reversals** automatic next period.
- Controls: approval and review report.`, 'D'],

['Technical', 'How would you reduce invoice holds that delay supplier payments?',
`- **Analyze holds** by type, supplier, BU, buyer for 3 months.
- Fix **top root causes**: price differences (update agreements), quantity received (receiving delays), invalid accounts (defaults), tax issues.
- Adjust **tolerances** where appropriate (with controls).
- Consider **PO-level matching** for BPAs with many receipts.
- **Hold resolution workflow** to route holds to the right owners.
- KPI: holds %, average days on hold.`, 'D'],

['Budget', 'How do you manage a budget for your ERP area?',
`- Understand **cost categories**: staff, contractors/partners, licenses, cloud services, training.
- **Forecast** monthly; track vs plan.
- **Prioritize** spend on business value.
- **Vendor costs** controlled (SOWs with clear deliverables).
- Raise **variances** early with explanations.`, 'B'],

['Vendors', 'How do you manage an implementation partner or AMS vendor?',
`- **Clear SOW**: scope, deliverables, SLAs, acceptance criteria.
- **Governance**: weekly operational reviews, monthly performance reviews with KPIs.
- **Quality checks** on their work (design reviews, test evidence).
- **Knowledge transfer** to internal staff.
- **Escalation path** and remedies for poor performance.
- Partnership mindset with accountability.`, 'B'],

['Communication', 'How do you report status to your Director and business leadership?',
`- **Concise**: RAG, accomplishments, next steps, risks/issues, decisions needed.
- **Metrics**: SLAs, backlog, project milestones.
- **Business language**.
- **Early warnings** with mitigation options.
- Consistent format weekly/monthly.`, 'B'],

['Behavioral', 'Tell me about a time you turned around an underperforming team or project.',
`## Example (STAR)
- **Situation:** Support backlog of 300 tickets, SLAs missed, business frustrated.
- **Task:** Restore service within a quarter.
- **Action:** Triaged backlog (closed duplicates/obsolete), set priorities with business, created module ownership, added daily stand-ups, fixed top 5 recurring issues (root causes), built a knowledge base.
- **Result:** Backlog under 60 in 10 weeks; SLA attainment from 62% to 94%; satisfaction scores up.`, 'B'],

['Behavioral', 'Tell me about a time you had to deliver bad news to a business leader.',
`## Example (STAR)
- **Situation:** A planned go-live for a new AP automation feature had to slip 4 weeks due to supplier data issues.
- **Action:** Informed the Controller as soon as the risk was confirmed, explained the cause and options (go live with 60% of suppliers vs delay), recommended a phased approach.
- **Result:** They chose phased go-live; trust maintained because there were no surprises.

Principle: early, honest, with options.`, 'B'],

['Behavioral', 'Describe a conflict within your team and how you resolved it.',
`- **Situation**: two leads disagreed on integration ownership, causing delays.
- **Action**: met separately to understand views, then together; clarified decision rights (RACI); documented ownership for each integration.
- **Result**: delays stopped; RACI became a standard for the team.`, 'B'],

['Strategy', 'What improvements would you prioritize for an ERP area in its first year after go-live?',
`- **Stabilize**: resolve recurring incidents, tune processes, finish deferred items.
- **Adoption**: training gaps, self-service reporting.
- **Automation**: quick wins (auto-approvals, AP automation, reconciliation).
- **Data quality** programs.
- **Regression automation** for quarterly updates.
- **Roadmap** for phase 2 capabilities.`, 'B']
]);
