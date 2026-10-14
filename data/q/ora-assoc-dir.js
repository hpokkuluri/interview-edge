// ora-assoc-dir — generated from src/ora-assoc-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-assoc-dir'] = (QB['ora-assoc-dir'] || []).concat([
['Delivery', 'How do you ensure quality in your team\'s deliverables?',
`- **Standards**: design templates, configuration workbooks, test evidence requirements.
- **Peer reviews** and design reviews before build.
- **Definition of done**: tested (including regression), documented, trained, approved.
- **Defect tracking** and root-cause analysis for escaped defects.
- **Automated tests** where possible.`, 'B'],

['Delivery', 'How do you handle a project that is slipping?',
`- **Diagnose**: scope growth, estimates, dependencies, resources, quality issues.
- **Options**: reduce scope (MVP), add resources (carefully), extend dates, change approach.
- **Re-plan** with the team; communicate to stakeholders with a recommendation.
- Track **leading indicators** going forward.`, 'B'],

['Delivery', 'What delivery methodology do you prefer for ERP enhancements?',
`- **Agile/iterative** for enhancements and continuous improvement: backlog, sprints, demos to business.
- **Hybrid** for larger programs: phase gates (design sign-off, UAT exit) with iterative build.
- **ERP specifics**: quarterly update cycles, month-end freeze periods, SOX change control.
- Pick what fits; focus on business engagement and quality.`, 'B'],

['Technical', 'How would you approach consolidating multiple approval workflows into a simpler design?',
`- **Inventory** current rules by transaction type and BU.
- **Analyze** actual approval data — who really approves, how often rules are used.
- **Design principles**: fewer rules, hierarchy-based with amount thresholds, exceptions by category.
- **Prototype** and test with business; document.
- **Communicate** and train approvers.
- Measure approval cycle time before/after.`, 'D'],

['Technical', 'How would you handle a request for a new report that finance needs urgently for an audit?',
`- Clarify **exact requirements** and deadline; check if a **standard report/OTBI** already covers it.
- Build quickly in **OTBI** (or BIP if formatting needed); validate completeness and accuracy with finance (**key report** validation if used as audit evidence).
- Document parameters and logic.
- Deliver and plan a proper version later if needed.`, 'B'],

['Technical', 'What is your approach to data quality in ERP master data (suppliers, customers, items)?',
`- **Ownership**: business data owners and stewards.
- **Entry controls**: required fields, validations, approval workflows (supplier registration, NIR).
- **Monitoring**: duplicate detection reports, completeness dashboards.
- **Cleanup** campaigns with targets.
- **Training** and feedback to requesters.`, 'B'],

['People', 'How do you manage a mixed team of employees, contractors and offshore partners?',
`- **One team culture**: shared goals, standups, recognition for all.
- **Clear roles**: who owns design, build, test, support.
- **Knowledge retention**: critical knowledge with employees; documentation.
- **Time zones**: overlap hours and handoffs.
- **Fair treatment** and inclusion in decisions.`, 'B'],

['People', 'How do you prevent burnout during go-lives and month-end crunches?',
`- **Plan** coverage and rotations; avoid single points of failure.
- **Realistic** schedules; defer non-critical work.
- **Recognize** extra effort; give time off after.
- Watch for signs and talk to people.
- Fix recurring crunch causes (automation, better processes).`, 'B'],

['People', 'How do you develop a future leader on your team?',
`- Identify potential: ownership, influence, judgment.
- **Delegate** leadership opportunities (lead a workstream, run a CRP, mentor juniors).
- **Coaching** on stakeholder management and decision-making.
- **Exposure** to senior meetings.
- **Feedback** and career conversations; sponsorship for promotion.`, 'B'],

['Stakeholders', 'How do you manage expectations when the business wants everything now?',
`- **Transparent backlog** and capacity.
- **Prioritization** with business owners against value.
- **Roadmap** with phased delivery.
- **Quick wins** where possible.
- Explain trade-offs openly; involve leaders in decisions.`, 'B'],

['Stakeholders', 'How do you handle an executive escalation about a system issue?',
`- **Acknowledge** quickly; understand impact.
- **Assign** owner and get facts.
- **Communicate** plan and timeline; update regularly.
- **Fix** and confirm with the executive.
- **Follow-up**: root cause and prevention; make sure the team learns, not panics.`, 'B'],

['Governance', 'How do you prioritize the backlog between business requests, technical debt and compliance?',
`- **Compliance/regulatory** and **security** first (non-negotiable dates).
- **Business value** scoring for requests.
- **Technical debt** allocated a fixed capacity (e.g. 15%).
- Transparent decisions with governance board.`, 'B'],

['Governance', 'How do you manage configuration changes safely in production?',
`- **Change request** with business approval.
- **Test** in non-production with evidence; regression for impacted areas.
- **Migration** via configuration packages or documented steps; segregation of duties.
- **Change window** outside close/payroll.
- **Validation** after deployment; rollback plan.`, 'D'],

['Technical', 'A key integration from a third-party system fails silently for three days. What do you change?',
`- **Monitoring**: alerts on failures and on **absence of expected data** (heartbeat checks).
- **Dashboards** visible to business owners.
- **Error handling** with notifications and retries.
- **Reconciliation** reports (source vs Oracle counts daily).
- **Runbook** and owners.`, 'D'],

['Technical', 'How would you approach a business request for AI automation in AP or procurement?',
`- Clarify the **problem and metric** (e.g. invoice processing time).
- Check **Oracle-native** capabilities (IDR, AI agents) first.
- **Pilot** with a defined scope, human review, measured outcomes.
- **Controls**: approvals, audit trail, security roles.
- **Scale** after success.`, 'D'],

['Strategy', 'How do you contribute to the ERP roadmap as Associate Director?',
`- Bring **business needs** from your area and **pain points** from support data.
- Evaluate **new Oracle features** relevant to your area.
- Propose initiatives with **value and effort** estimates.
- Align with the Director's priorities and enterprise strategy.`, 'B'],

['Behavioral', 'Tell me about a decision you made with incomplete information.',
`- **Situation**: whether to proceed with a quarterly update while one regression test was unresolved.
- **Action**: assessed risk (area impacted, workaround available), consulted business owner, agreed to proceed with a monitored workaround and Oracle SR.
- **Result**: no business impact; Oracle patch applied two weeks later.
- **Learning**: frame risk clearly and agree with the business owner.`, 'B'],

['Behavioral', 'What is your leadership style?',
`- Describe honestly with examples, e.g.: **coaching** and **empowering** — clear goals, trust the team to own solutions, step in during crises.
- High standards with **support**.
- **Transparent** communication.
- Adapt style to people and situations (more direction for new team members, more autonomy for experienced ones).`, 'B'],

['Behavioral', 'Why do you want to move into an Associate Director role?',
`- You've been leading informally (workstreams, mentoring) and want **broader impact** through a team.
- You enjoy **business partnership** and **developing people**.
- You still bring technical depth to keep delivery strong.
- Examples of results you achieved through others.`, 'B'],

['Behavioral', 'How do you handle a situation where your manager\'s direction conflicts with what the business wants?',
`- Understand both **perspectives** and the reasoning.
- Bring **data** on impacts.
- Discuss openly with your manager first; propose a path.
- If needed, facilitate a conversation between your manager and the business.
- Once decided, commit and execute.`, 'B'],

['Delivery', 'How do you measure the success of your ERP team?',
`- **Service**: SLA attainment, incident trends.
- **Delivery**: projects on time/scope, enhancement throughput.
- **Quality**: defects, failed changes.
- **Business outcomes**: e.g. close days, touchless rates.
- **Team**: engagement, retention, skills growth.
- **Stakeholder satisfaction**.`, 'B'],

['Technical', 'How would you approach a request to add a new business unit to Oracle?',
`- **Requirements**: legal entity, ledger, currency, tax, banking, processes.
- **Setup**: BU, functions, reference data, approvals, security, sequences, payment profiles.
- **Integrations** and reports updates.
- **Data**: suppliers/customers site assignments, open balances.
- **Testing** end-to-end; **training**; **go-live** plan.
- Use a **checklist/template** for repeatable onboarding.`, 'D'],

['Support', 'How do you reduce repeat incidents?',
`- **Problem management**: track recurring incidents, root-cause analysis.
- **Permanent fixes** (config, data, training, automation).
- **Knowledge articles** and user self-service.
- **Monitoring** for early detection.
- Review top incident categories monthly.`, 'B'],

['Behavioral', 'Describe a time you influenced a decision without formal authority.',
`- **Situation**: procurement wanted to keep manual PO approvals for all amounts.
- **Action**: analyzed 12 months of POs, showed 85% were under $2k with no rejections, proposed auto-approval under threshold with monthly review.
- **Result**: approved; PO cycle time dropped from 3 days to same day for most POs.`, 'B'],

['Strategy', 'What trends in ERP will matter most for your team in the next two years?',
`- **AI agents** in Fusion (AP, procurement, collections, close).
- **Redwood UX** adoption and extensions with Visual Builder.
- **Continuous close** and automation.
- **Data and analytics** (FDI).
- **Regulatory digitization** (e-invoicing).
- Skills shift: from configuration to automation and data.`, 'B'],

['Delivery', 'How do you run a successful UAT with business users?',
`- **Plan** scenarios with business owners; realistic data.
- **Train** testers; give clear scripts and support.
- **Daily triage** of defects; transparent status.
- **Exit criteria** agreed upfront.
- **Sign-off** formally.`, 'B']
]);

// Added Oct 2026: Redwood and AI Agent Studio questions for leaders.
QB['ora-assoc-dir'] = (QB['ora-assoc-dir'] || []).concat([
['Redwood', 'How would you plan your team\'s work for Oracle\'s move from classic to Redwood pages?',
`- **Inventory** affected pages and personalizations per module; estimate rebuild effort in VBS.
- **Plan waves** by module aligned to Oracle's retirement dates, avoiding close.
- **Assign owners**; build VBS skills in the team.
- **Regression testing** and user training in each wave.
- Report progress and risks to the Director and business owners.`, 'D'],
['AI Agent Studio', 'Your CFO asks: "What should we do with Oracle AI Agent Studio?" How do you respond?',
`- Explain briefly: Oracle's tool to use delivered agents and build our own inside Fusion, with our security.
- Propose **2–3 pilots** with clear value (AP inquiries/holds, expense policy help, collections emails).
- **Controls**: human approval for financial actions; audit involvement.
- **Measure** and report in 90 days.`, 'D'],
['AI Agent Studio', 'How would you staff and run an AI agent pilot?',
`- Small team: a functional lead, a technical consultant (tools/APIs), a business owner, and a tester.
- Scope one process; define success metrics.
- Build, evaluate with real scenarios, pilot with 5–10 users.
- Weekly review; decide scale/stop at the end.`, 'B'],
['Delivery', 'How do you keep quarterly updates under control now that Redwood and AI features change every release?',
`- Release **assessment** per module including Redwood pages and AI features.
- **Automated regression** for core flows.
- Opt-in decisions with business owners.
- Communicate changes early to users.`, 'B'],
['People', 'How do you develop your consultants for the Redwood/AI era?',
`- Learning paths (AI Agent Studio, Visual Builder Studio) and certification goals.
- Hands-on sandbox projects.
- Rotate people into pilots.
- Recognize new skills in reviews.`, 'B']
]);
