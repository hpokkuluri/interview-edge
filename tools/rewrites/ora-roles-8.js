// Rewritten Oracle Associate Director questions (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'How do you see the Associate Director role in an ERP organization?':
`**Why they ask:** to check you understand the role is both hands-on and leadership.

**Answer:**
"I see it as the bridge between hands-on delivery and leadership. I'd own a functional area, like Finance and SCM applications, or a set of workstreams. I lead a team of 5 to 15 consultants and analysts: hiring, coaching and performance. I make sure projects, enhancements and support for my area meet scope, quality and time. I'm a trusted partner for the finance and supply chain directors. I keep enough technical depth to review designs and solve escalated problems. And I contribute to the roadmap, budget and resourcing for my area."

Tip: Stress "bridge". It shows you'll stay credible with the team and the business.`,

'What would you focus on in your first 90 days as Associate Director?':
`**Why they ask:** a plan shows maturity.

**Answer:**
"In the first 30 days, I'd meet each team member one-on-one and the key business stakeholders, and review open projects, incidents, the backlog and SLAs to understand the pain points. By 60 days, I'd identify the top issues, like a support backlog, failed quarterly updates or unclear priorities, deliver some quick wins, and clarify roles and ways of working. By 90 days, I'd present a plan, priorities, team development, process improvements and KPIs, agreed with my director and business partners."

Tip: Mention one-on-ones with every team member. It shows people come first.`,

'How do you build and develop a high-performing ERP team?':
`**Why they ask:** people leadership is the core of the role.

**Answer:**
"I set clear expectations: roles, ownership by module or process, and quality standards. I invest in growth with individual development plans, certifications, stretch assignments and rotation across modules. I coach through regular one-on-ones and use design reviews as teaching moments. I recognize good work and create safety for people to raise problems. I hire for gaps in both skills and attitude. And I measure delivery quality, engagement and retention."

Tip: Mention psychological safety. Teams that hide problems fail at go-live.`,

'How do you handle a strong technical performer who is difficult to work with?':
`**Why they ask:** a common, tricky people situation.

**Answer:**
"I give specific feedback on the behavior and its impact on the team or stakeholders, with examples. I try to understand the cause: frustration, workload or feeling unrecognized. We agree expectations and support, like pairing or communication coaching. I recognize improvement when I see it. If the behavior continues, I move to formal performance management. Technical value doesn't excuse behavior that damages the team."

Tip: Say that last line clearly. It shows you protect the team.`,

'How do you run performance reviews for your team?':
`**Why they ask:** fairness and development.

**Answer:**
"I give continuous feedback during the year, so the review has no surprises. I base it on evidence: goals, outcomes delivered, stakeholder feedback and behaviors. I calibrate with peers for fairness. The conversation is balanced: strengths, growth areas and career goals. We agree a development plan for next year. And it links to compensation through the company process."

Tip: Say "no surprises". It's the mark of a good manager.`,

'How do you hire for an Oracle functional role?':
`**Why they ask:** hiring quality shapes the team.

**Answer:**
"I define the need: module depth, level and soft skills. I use structured interviews with technical scenarios, like 'walk me through P2P accounting', plus problem solving, communication and culture fit. I add a practical exercise, like designing a setup or troubleshooting a case. A diverse panel scores consistently. I sell the role too: growth and interesting work. And the onboarding plan is ready before day one."

Tip: Mention the practical exercise. It reveals real skill fast.`,

'How do you manage multiple projects and support work with one team?':
`**Why they ask:** capacity management is daily work.

**Answer:**
"One backlog, with priorities agreed with the business owners. Capacity allocation, for example 60% projects, 30% support and 10% improvement, adjusted monthly. A clear owner for each item, with limits on work in progress. A weekly review of status, risks and capacity. Support SLAs for critical processes, close, payments and shipping, are protected. And I escalate conflicts early to my director or the business."

Tip: Give the capacity split. It shows you plan deliberately.`,

'How do you estimate and plan an enhancement request?':
`**Why they ask:** estimation drives trust with the business.

**Answer:**
"I clarify the requirements and acceptance criteria with the requester. I lay out solution options, configuration, report or extension, with effort ranges. I analyze the impact on other modules, integrations, security and controls. Then I plan design, build, testing including regression, deployment and communication. It goes through change governance for approval. And I track estimates against actuals to get better."

Tip: Mention tracking estimate accuracy. It improves credibility over time.`,

'How do you set up an effective ERP support model?':
`**Why they ask:** support is a big part of the job.

**Answer:**
"Tiered support: L1 service desk, L2 functional analysts by module, L3 specialists, partners or Oracle. SLAs by priority with clear business-impact definitions. A knowledge base, runbooks and self-service guides. Problem management with root-cause analysis on recurring incidents. Monitoring of integrations and jobs. Awareness of the business calendar: close, payroll and peak shipping. And KPIs: SLA attainment, backlog, repeat incidents and satisfaction."

Tip: Mention the business calendar. Support priorities change at month-end.`,

'A P1 incident: payments did not go to the bank on payroll/supplier payment day. How do you lead the response?':
`**Why they ask:** crisis leadership.

**Answer:**
"I set up an incident bridge with AP or payroll, treasury, the integration team and the bank contact, with one incident lead. Business continuity first: a manual file upload or the bank portal for critical payments, in priority order. Then diagnose: payment file generation, transmission logs, bank acknowledgments, and certificates or keys. I send regular updates to stakeholders. We fix it and confirm with the bank. And afterwards, a post-incident review on root cause and prevention, like monitoring, alerts and tracking certificate expiry."

Tip: Mention certificate expiry. It's a surprisingly common cause.`,

'How do you build a strong relationship with the Controller or VP Supply Chain?':
`**Why they ask:** business partnership.

**Answer:**
"I learn their priorities and KPIs: close timeline, audit, cost and service. I hold a regular monthly review with transparent status and risks. I deliver quick wins that matter to them. I bring ideas, like automation and analytics, not just tickets. I'm present at critical moments like close and go-lives. And when I have to say no, I bring alternatives."

Tip: Mention being present at close. Presence builds trust quickly.`,

'Two business leaders want conflicting changes. How do you handle it?':
`**Why they ask:** conflict management.

**Answer:**
"I clarify each need and the business outcome behind it. I analyze how each option affects both. I look for a solution that meets both, for example configuration by business unit. If that's not possible, I bring them together with data, and escalate to a common sponsor or governance board for a decision. Then I document and communicate it."

Tip: Look for configuration by BU first. It often removes the conflict entirely.`,

'How do you manage quarterly Oracle updates for your area?':
`**Why they ask:** a routine but critical process.

**Answer:**
"I plan the update calendar and assign owners per module. We assess the release notes and decide on opt-ins. Regression testing runs in the test environment during the two-week window, automated where possible. Defects are triaged and SRs raised. Users get communication and training. And after the production update, we validate."

Tip: Mention post-update validation in production. It catches what test missed.`,

'How do you ensure SOX IT general controls are met for ERP changes?':
`**Why they ask:** compliance is part of the role.

**Answer:**
"Change management: tickets, approvals, test evidence, separation between the person who builds and the person who migrates, and an emergency change process. Access management: provisioning approvals, quarterly access reviews and logged privileged access. Operations: job monitoring, interface controls, and the vendor's SOC reports for backup and restore. Evidence is stored and ready for auditors. And I train the team and spot-check compliance."

Tip: Mention spot-checks. Controls slip without them.`,

'As Associate Director, how hands-on should you be?':
`**Why they ask:** balance between doing and leading.

**Answer:**
"Hands-on enough to stay credible: I can review designs, understand root causes and challenge estimates. I get involved in critical incidents and key design decisions. But I avoid becoming a bottleneck, so I delegate execution and coach the team. And I keep up with Oracle releases and new capabilities."

Tip: Say "not a bottleneck". It's the risk in this role.`,

'How would you approach a request to automate month-end accruals in Oracle?':
`**Why they ask:** a practical automation question.

**Answer:**
"First I'd sort the accruals by type. PO-based accruals come from Receipt Accounting, accrue at receipt or at period end. Recurring ones, like rent and utilities, become recurring journals or GL allocations. Estimates, like bonuses or services, come in through an ADFdi spreadsheet with approval, and possibly AI-assisted estimates later. All of them reverse automatically next period. And controls include approval and a review report."

Tip: Sorting by type is the key. Each type has a different best tool.`,

'How would you reduce invoice holds that delay supplier payments?':
`**Why they ask:** a business-impact question.

**Answer:**
"I analyze three months of holds by type, supplier, BU and buyer. Then fix the top causes: price differences by updating agreements, quantity holds from receiving delays, invalid accounts through better defaults, and tax issues. I adjust tolerances where appropriate, with controls. For blanket agreements with many receipts, I consider PO-level matching. I set up a hold resolution workflow that routes holds to the right owners. And I track holds as a percentage and average days on hold."

Tip: Start with analysis. A few causes usually explain most holds.`,

'How do you manage a budget for your ERP area?':
`**Why they ask:** financial responsibility.

**Answer:**
"I understand the cost categories: staff, contractors and partners, licenses, cloud services and training. I forecast monthly and track against plan. I prioritize spend on business value. I control vendor costs with SOWs that have clear deliverables. And I raise variances early with explanations."

Tip: Say "raise variances early". Finance leaders hate late surprises.`,

'How do you manage an implementation partner or AMS vendor?':
`**Why they ask:** vendor management is part of the job.

**Answer:**
"A clear SOW with scope, deliverables, SLAs and acceptance criteria. Weekly operational reviews and monthly performance reviews with KPIs. Quality checks on their work, like design reviews and test evidence. Knowledge transfer to internal staff. An escalation path and remedies for poor performance. And a partnership mindset, with accountability."

Tip: Mention knowledge transfer. It protects you from vendor dependency.`,

'How do you report status to your Director and business leadership?':
`**Why they ask:** communication upward.

**Answer:**
"Concise: RAG, accomplishments, next steps, risks and issues, and decisions needed. Metrics like SLAs, backlog and project milestones. Business language. Early warnings with mitigation options. And the same format every week or month so trends are visible."

Tip: Mention "decisions needed". It turns a report into action.`,

'Tell me about a time you turned around an underperforming team or project.':
`**Why they ask:** proof of leadership impact.

**Answer (example):**
"We had a support backlog of 300 tickets, missed SLAs and a frustrated business. I had a quarter to restore service. I triaged the backlog and closed duplicates and obsolete tickets, set priorities with the business, created module ownership, added daily stand-ups, fixed the top five recurring issues at the root, and built a knowledge base. The backlog was under 60 in ten weeks, SLA attainment went from 62% to 94%, and satisfaction scores rose."

Tip: Give before-and-after numbers. They prove the turnaround.`,

'Tell me about a time you had to deliver bad news to a business leader.':
`**Why they ask:** honesty and stakeholder trust.

**Answer (example):**
"A go-live for a new AP automation feature had to slip four weeks because of supplier data issues. I told the controller as soon as the risk was confirmed, explained the cause, and gave options: go live with 60% of suppliers or delay, with my recommendation of a phased approach. They chose the phased go-live, and trust stayed intact because there were no surprises."

Tip: State the principle: early, honest, with options.`,

'Describe a conflict within your team and how you resolved it.':
`**Why they ask:** team leadership.

**Answer (example):**
"Two leads disagreed on who owned certain integrations, and it was causing delays. I met each of them separately to understand their views, then together. We clarified decision rights with a RACI and documented ownership for each integration. The delays stopped, and the RACI became a team standard."

Tip: End with the lasting change. It shows you fix the system, not just the moment.`,

'What improvements would you prioritize for an ERP area in its first year after go-live?':
`**Why they ask:** post-go-live priorities.

**Answer:**
"Stabilize first: resolve recurring incidents, tune processes and finish deferred items. Then adoption: close training gaps and grow self-service reporting. Then automation quick wins, like auto-approvals, AP automation and reconciliation. Data quality programs. Regression automation for quarterly updates. And a roadmap for phase 2."

Tip: Say "stabilize first". Improvements on an unstable system don't land.`,

"How do you ensure quality in your team's deliverables?":
`**Why they ask:** quality standards.

**Answer:**
"Standards: design templates, configuration workbooks and test evidence requirements. Peer and design reviews before build. A definition of done: tested including regression, documented, trained and approved. Defects tracked, with root-cause analysis for those that reach production. And automated tests where possible."

Tip: Mention a definition of done. It removes ambiguity.`,

'How do you handle a project that is slipping?':
`**Why they ask:** delivery recovery.

**Answer:**
"I diagnose first: scope growth, estimates, dependencies, resources or quality issues. Then options: reduce scope to an MVP, add resources carefully, extend dates, or change the approach. I re-plan with the team and take a recommendation to stakeholders. And I track leading indicators from then on."

Tip: Mention leading indicators. They show slippage before the date is missed.`,

'What delivery methodology do you prefer for ERP enhancements?':
`**Why they ask:** delivery approach.

**Answer:**
"For enhancements and continuous improvement, agile and iterative: a backlog, sprints and demos to the business. For larger programs, a hybrid, with phase gates like design sign-off and UAT exit, and iterative build inside. ERP adds specifics: quarterly update cycles, month-end freeze periods and SOX change control. I pick what fits, and focus on business engagement and quality."

Tip: Mention month-end freezes. It shows ERP-specific awareness.`,

'How would you approach consolidating multiple approval workflows into a simpler design?':
`**Why they ask:** simplification is a common goal.

**Answer:**
"I inventory the current rules by transaction type and BU. I analyze actual approval data: who really approves and how often each rule fires. Design principles: fewer rules, hierarchy-based with amount thresholds, and exceptions by category. I prototype and test with the business, and document. I communicate and train approvers. And I measure approval cycle time before and after."

Tip: Mention analyzing real approval data. It shows which rules actually matter.`,

'How would you handle a request for a new report that finance needs urgently for an audit?':
`**Why they ask:** urgent requests with control implications.

**Answer:**
"I clarify the exact requirement and deadline, and check whether a standard report or OTBI already covers it. If not, I build it quickly in OTBI, or BIP if formatting matters, and validate completeness and accuracy with finance, because if it's audit evidence, it needs key report validation. I document the parameters and logic. Then deliver it, and plan a proper version later if needed."

Tip: Mention key report validation. Audit evidence needs it.`,

'What is your approach to data quality in ERP master data (suppliers, customers, items)?':
`**Why they ask:** data quality affects everything.

**Answer:**
"Ownership by business data owners and stewards. Controls at entry: required fields, validations and approval workflows like supplier registration and NIRs. Monitoring with duplicate reports and completeness dashboards. Cleanup campaigns with targets. And training and feedback for the people requesting new records."

Tip: Say "controls at entry". It's cheaper than cleaning up later.`,

'How do you manage a mixed team of employees, contractors and offshore partners?':
`**Why they ask:** most ERP teams are mixed.

**Answer:**
"One team culture: shared goals, shared stand-ups and recognition for everyone. Clear roles for design, build, test and support. Critical knowledge stays with employees and is documented. Overlap hours and handoffs across time zones. And fair treatment and inclusion in decisions."

Tip: Mention keeping critical knowledge with employees. It reduces risk.`,

'How do you prevent burnout during go-lives and month-end crunches?':
`**Why they ask:** sustainable leadership.

**Answer:**
"I plan coverage and rotations so nobody is a single point of failure. I keep schedules realistic and defer non-critical work. I recognize extra effort and give time off afterwards. I watch for signs and talk to people. And I fix the recurring causes of crunches through automation and better processes."

Tip: Mention fixing recurring crunch causes. It's the long-term answer.`,

'How do you develop a future leader on your team?':
`**Why they ask:** succession and growth.

**Answer:**
"I look for potential: ownership, influence and judgment. I delegate leadership opportunities, like leading a workstream, running a CRP or mentoring juniors. I coach them on stakeholder management and decisions. I give them exposure to senior meetings. And I hold career conversations and sponsor them for promotion."

Tip: Mention sponsorship. Coaching helps; sponsorship gets people promoted.`,

'How do you manage expectations when the business wants everything now?':
`**Why they ask:** demand management.

**Answer:**
"I make the backlog and capacity transparent. I prioritize with business owners by value. I share a roadmap with phased delivery. I find quick wins where possible. And I explain trade-offs openly and involve leaders in the decisions."

Tip: Involve leaders in trade-offs. It shares ownership of the choices.`,

'How do you handle an executive escalation about a system issue?':
`**Why they ask:** composure under senior pressure.

**Answer:**
"I acknowledge quickly and understand the impact. I assign an owner and get the facts. I communicate the plan and timeline, with regular updates. Once it's fixed, I confirm with the executive. Then follow-up: root cause and prevention, and I make sure the team learns from it rather than panics."

Tip: Mention protecting the team from panic. Good leaders absorb pressure.`,

'How do you prioritize the backlog between business requests, technical debt and compliance?':
`**Why they ask:** prioritization logic.

**Answer:**
"Compliance, regulatory and security items come first, because their dates aren't negotiable. Business requests are scored by value. Technical debt gets a fixed share of capacity, like 15%. And decisions are made transparently through a governance board."

Tip: Mention fixed capacity for debt. Without it, debt always loses.`,

'How do you manage configuration changes safely in production?':
`**Why they ask:** change control.

**Answer:**
"Every change has a request with business approval. It's tested in non-production with evidence and regression for impacted areas. Migration uses configuration packages or documented steps, with segregation of duties. Changes go in a window outside close and payroll. After deployment, we validate, and there's a rollback plan."

Tip: Mention avoiding close and payroll windows. It shows business awareness.`,

'A key integration from a third-party system fails silently for three days. What do you change?':
`**Why they ask:** monitoring design.

**Answer:**
"Monitoring with alerts not only on failures but on the absence of expected data, heartbeat checks. Dashboards that business owners can see. Error handling with notifications and retries. Daily reconciliation reports comparing source and Oracle counts. And a runbook with clear owners."

Tip: Mention alerting on missing data. Silent failures send nothing to alert on.`,

'How would you approach a business request for AI automation in AP or procurement?':
`**Why they ask:** a current, practical question.

**Answer:**
"I clarify the problem and the metric, like invoice processing time. I check Oracle-native capabilities first, Intelligent Document Recognition and AI agents. I run a pilot with a defined scope, human review and measured outcomes. Controls include approvals, audit trail and security roles. And I scale after it succeeds."

Tip: Say "Oracle-native first". It's lower cost and risk.`,

'How do you contribute to the ERP roadmap as Associate Director?':
`**Why they ask:** strategic contribution.

**Answer:**
"I bring business needs from my area and pain points from support data. I evaluate new Oracle features relevant to my area. I propose initiatives with value and effort estimates. And I align with my director's priorities and the enterprise strategy."

Tip: Mention support data. It turns opinions into evidence.`,

'Tell me about a decision you made with incomplete information.':
`**Why they ask:** judgment under uncertainty.

**Answer (example):**
"I had to decide whether to proceed with a quarterly update while one regression test was still unresolved. I assessed the risk: which area it affected and whether a workaround existed. I consulted the business owner and we agreed to proceed with a monitored workaround and an Oracle SR. There was no business impact, and Oracle's patch came two weeks later. My lesson: frame the risk clearly and agree it with the business owner."

Tip: Show how you framed the risk. That's the skill they're testing.`,

'What is your leadership style?':
`**Why they ask:** fit with the team and culture.

**Answer:**
"I'd describe it as coaching and empowering. I set clear goals and trust the team to own the solutions, and I step in during crises. I hold high standards with support. I communicate transparently. And I adapt: more direction for new team members, more autonomy for experienced ones. For example, [a short example from your own team]."

Tip: Back it with a real example. Styles are easy to claim.`,

'Why do you want to move into an Associate Director role?':
`**Why they ask:** motivation.

**Answer:**
"I've been leading informally, running workstreams and mentoring, and I want broader impact through a team. I enjoy business partnership and developing people. I still bring technical depth to keep delivery strong. And I've already achieved results through others, for example [your example]."

Tip: Fill in a concrete result achieved through others.`,

"How do you handle a situation where your manager's direction conflicts with what the business wants?":
`**Why they ask:** navigating competing directions.

**Answer:**
"I understand both perspectives and the reasoning. I bring data on the impacts. I discuss it openly with my manager first and propose a path. If needed, I set up a conversation between my manager and the business. And once a decision is made, I commit and execute."

Tip: Say "discuss with my manager first". Going around them breaks trust.`,

'How do you measure the success of your ERP team?':
`**Why they ask:** results orientation.

**Answer:**
"Service: SLA attainment and incident trends. Delivery: projects on time and scope, and enhancement throughput. Quality: defects and failed changes. Business outcomes, like close days and touchless rates. Team: engagement, retention and skills growth. And stakeholder satisfaction."

Tip: Include business outcomes. It shows you think beyond IT metrics.`,

'How would you approach a request to add a new business unit to Oracle?':
`**Why they ask:** a practical setup question.

**Answer:**
"I gather requirements: legal entity, ledger, currency, tax, banking and processes. Then setup: the BU, its functions, reference data, approvals, security, sequences and payment profiles. Integrations and reports are updated. Data: supplier and customer site assignments and opening balances. Then end-to-end testing, training and a go-live plan. And I use a checklist template so onboarding is repeatable."

Tip: Mention the reusable checklist. It makes the next BU faster.`,

'How do you reduce repeat incidents?':
`**Why they ask:** support maturity.

**Answer:**
"Problem management that tracks recurring incidents with root-cause analysis. Permanent fixes through configuration, data, training or automation. Knowledge articles and user self-service. Monitoring for early detection. And a monthly review of the top incident categories."

Tip: Mention the monthly review. It keeps problem management active.`,

'Describe a time you influenced a decision without formal authority.':
`**Why they ask:** influence skills.

**Answer (example):**
"Procurement wanted to keep manual PO approvals for every amount. I analyzed 12 months of POs and showed that 85% were under $2,000 with no rejections. I proposed auto-approval under that threshold with a monthly review. It was approved, and PO cycle time dropped from three days to same-day for most POs."

Tip: Data plus a safety net, the monthly review, is what convinced them.`,

'What trends in ERP will matter most for your team in the next two years?':
`**Why they ask:** forward thinking.

**Answer:**
"AI agents in Fusion for AP, procurement, collections and close. Redwood adoption and extensions with Visual Builder Studio. Continuous close and automation. Data and analytics with Fusion Data Intelligence. Regulatory digitization like e-invoicing. And a skills shift from configuration toward automation and data."

Tip: Mention the skills shift. It shows you're preparing your team.`,

'How do you run a successful UAT with business users?':
`**Why they ask:** UAT quality decides go-live readiness.

**Answer:**
"I plan scenarios with business owners and use realistic data. I train the testers and give them clear scripts and support. Defects are triaged daily with transparent status. Exit criteria are agreed up front. And sign-off is formal."

Tip: Mention exit criteria agreed up front. It prevents arguments at the end.`,

'How do you keep quarterly updates under control now that Redwood and AI features change every release?':
`**Why they ask:** release management is getting harder.

**Answer:**
"Each release gets an assessment per module, including Redwood pages and AI features. Core flows have automated regression. Opt-in decisions are made with business owners. And users hear about changes early."

Tip: Mention opt-in decisions with the business. It keeps them in control.`,

'How do you develop your consultants for the Redwood/AI era?':
`**Why they ask:** capability building.

**Answer:**
"Learning paths for AI Agent Studio and Visual Builder Studio, with certification goals. Hands-on sandbox projects. Rotating people into pilots. And recognizing new skills in reviews."

Tip: Mention rotating people into pilots. Real work builds skills fastest.`,

};
