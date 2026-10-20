// Rewritten Product & Delivery — Technical Program Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix pd-tpm-).
module.exports = {

'Project vs program vs portfolio?':
`**Why they ask:** program management fundamentals.

**Answer:**
"A project is a temporary effort with a defined outcome — say, implementing a new tax engine. A program is a group of related projects managed together for combined benefits — a finance transformation that includes the tax engine, a new ERP and a close-automation tool. A portfolio is the collection of programs and projects aligned to strategy and prioritized for investment. Benefits are usually realized at the program level."

Tip: Benefits realization at program level.`,

'How do you plan a large technical program?':
`**Why they ask:** planning skill.

**Answer:**
"Clarify goals and success metrics, define scope and non-goals, break the work into workstreams with owners, identify milestones and dependencies, estimate with engineering rather than for them, build an integrated plan with the critical path, define risks and governance, and baseline it. The critical path tells me where a one-day slip becomes a one-day program slip."

Tip: Critical path.`,

'What is the critical path?':
`**Why they ask:** scheduling fundamentals.

**Answer:**
"The longest chain of dependent tasks, which sets the minimum program duration — any delay on it delays the end date. Say A takes 5 days, then B 10 days, then D 3 days: 18 days. The alternative path A, C at 4 days, then D is only 12 days. So A-B-D is critical, and C has 6 days of float it can slip without affecting the end date."

Tip: Show an example.`,

'How do you manage risks?':
`**Why they ask:** risk discipline.

**Answer:**
"Identify risks early with the teams, assess probability and impact, plan a response — avoid, mitigate, transfer or accept — assign an owner and a trigger, track them in a register, and review weekly. A risk is something that may happen; an issue is happening now. For example: 'If the vendor API isn't ready by March 1, integration testing slips' — owner, mitigation of a mock service, trigger date."

Tip: Owners and triggers.`,

'How do you manage cross-team dependencies?':
`**Why they ask:** the hardest part of programs.

**Answer:**
"Map them visually, agree dates and interfaces with the owners on both sides, track them in a shared plan, add buffers where they hit the critical path, hold a weekly dependency sync, and escalate early when one is at risk — two weeks before, not the day it's due."

Tip: Visible and owned.`,

'How do you report status to executives?':
`**Why they ask:** executive communication.

**Answer:**
"An honest RAG status, progress against milestones, key risks and issues with their mitigations, decisions needed, and next steps — one page on a consistent cadence. No watermelon reporting: green on the outside, red on the inside. If a milestone is at risk, it's amber now, not green until it's missed."

Tip: No watermelon status (green outside, red inside).`,

'How do you handle scope changes?':
`**Why they ask:** change control.

**Answer:**
"Assess the impact on schedule, cost and risk, present options — add time, add people, or trade scope — get the sponsor's decision, then update the plan and communicate it. Scope changes aren't bad; untracked scope changes are."

Tip: Trade-offs.`,

'Waterfall vs Agile vs hybrid?':
`**Why they ask:** methodology judgment.

**Answer:**
"Waterfall suits fixed requirements and regulatory sign-offs; agile suits evolving requirements and iterative delivery; hybrid combines agile delivery inside milestone-based governance. Hybrid is common in enterprise programs like ERP, where configuration sprints sit inside fixed phases for testing, data migration and cutover."

Tip: Context.`,

'How technical does a TPM need to be?':
`**Why they ask:** role expectations.

**Answer:**
"Technical enough to understand architecture, system design, APIs, infrastructure and trade-offs; to challenge an estimate when it doesn't add up; to spot technical risks before engineers raise them; and to translate between engineers and executives. I don't design the system, but I can tell when a dependency on a shared database is going to hurt."

Tip: Credibility with engineers.`,

'TPM interviews often include system design. How do you approach it?':
`**Why they ask:** technical depth for TPMs.

**Answer:**
"Clarify requirements and scale, sketch the high-level components — clients, load balancer, services, database, cache, queues — walk through data flow, scaling and failure points, then pivot to delivery: how I'd phase it, which teams own which parts, the riskiest components to prototype first, and the milestones. Connecting the design to execution is what distinguishes a TPM answer."

Tip: Connect design to execution.`,

'How do you manage a launch?':
`**Why they ask:** launch experience.

**Answer:**
"A launch readiness checklist — testing, performance, security, documentation, support, monitoring, rollback — a go/no-go meeting with explicit criteria, a phased rollout, a war room for the first hours or days, and a post-launch review."

Tip: Go/no-go criteria.`,

'How do you manage a large migration program?':
`**Why they ask:** migration experience.

**Answer:**
"Inventory and dependency mapping, wave planning, a pilot wave with low-risk applications, runbooks and rehearsals, cutover plans with rollback, communication, and tracking through to decommissioning the old systems — migrations aren't done until the old system is switched off."

Tip: Rehearsals.`,

'How do you manage an ERP implementation?':
`**Why they ask:** enterprise program experience.

**Answer:**
"Clear phases — plan, design, build, multiple test cycles, data migration, training, cutover, hypercare — strong business ownership of design decisions, fit-to-standard design, integrated testing, data readiness tracked as its own workstream, change management, and steering committee governance. The business must own it; IT can't deliver an ERP to a business that isn't engaged."

Tip: Business ownership.`,

'How do you manage program budgets?':
`**Why they ask:** financial control.

**Answer:**
"Baseline the budget, track actuals and forecast to complete monthly, use earned value where it fits, manage contingency deliberately, and report variances with explanations. Forecast to complete matters more than spend to date."

Tip: Forecast to complete.`,

'Explain earned value management basics.':
`**Why they ask:** quantitative control.

**Answer:**
"Planned Value is the budgeted cost of work scheduled; Earned Value is the budgeted cost of work actually completed; Actual Cost is what we spent. SPI equals EV divided by PV; CPI equals EV divided by AC. With PV of $100K, EV of $80K and AC of $90K, SPI is 0.8 — we're 20% behind schedule — and CPI is about 0.89 — we're getting 89 cents of work per dollar."

Tip: Interpret, not just calculate.`,

'How do you manage vendors and system integrators?':
`**Why they ask:** vendor governance.

**Answer:**
"Clear SOWs with defined deliverables, a governance cadence, acceptance criteria for every deliverable, performance tracking, a formal change request process, and a good working relationship. Acceptance criteria stop arguments about whether something is 'done'."

Tip: Acceptance criteria.`,

'How do you create a communication plan?':
`**Why they ask:** stakeholder management.

**Answer:**
"Identify audiences, what each needs to know, frequency and channel — steering committee, status reports, team syncs, newsletters — and who owns each communication. Executives get decisions and risks monthly; teams get details weekly."

Tip: Tailor by audience.`,

'What governance structure do you set up?':
`**Why they ask:** program structure.

**Answer:**
"An executive sponsor, a steering committee for decisions, a program board, workstream leads, a RAID log — risks, assumptions, issues, dependencies — and a decision log so nobody relitigates settled decisions."

Tip: RAID log.`,

'How do you handle a stakeholder who keeps escalating?':
`**Why they ask:** relationship management.

**Answer:**
"Understand their concerns directly, increase transparency for them, involve them in relevant decisions, and set a clear communication cadence. Repeated escalation usually means they feel uninformed."

Tip: Transparency.`,

'Tell me about a program you delivered.':
`**Why they ask:** proof at scale.

**Answer:**
"I led a data center to AWS migration of 220 applications across 12 teams. With wave planning, rehearsals and a dependency tracker, we finished two weeks early and cut infrastructure costs 28%."

Tip: Scale and outcomes.`,

'Tell me about a program in trouble you recovered.':
`**Why they ask:** recovery skills.

**Answer:**
"An ERP program was four months behind. I re-baselined with realistic estimates, moved non-critical scope to phase 2, added daily defect triage, and we went live on the new date."

Tip: Re-baseline honestly.`,

'Tell me about delivering bad news to leadership.':
`**Why they ask:** courage and communication.

**Answer:**
"I reported a six-week delay as soon as we saw it, with root causes, options and a recommendation. Leadership approved extra testers, and we contained the slip to three weeks."

Tip: Early with options.`,

"Tell me about influencing teams you don't manage.":
`**Why they ask:** influence without authority.

**Answer:**
"On a platform migration, the payments team had other priorities. I met their lead to understand their roadmap, showed how the migration would remove a recurring on-call burden for them, made their contribution visible to leadership, and they committed two engineers for the critical sprint."

Tip: Influence without authority.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"PMP, PgMP, PMI-ACP, SAFe RTE or SPC, PRINCE2, and a cloud certification for technical credibility."

Tip: PMP widely recognized.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior TPM, director of program management, or PMO leader."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I deliver complex cross-team programs predictably — a 220-application migration and an ERP recovery — with clear communication and technical credibility."

Tip: Proof.`,

'How do you improve estimate accuracy?':
`**Why they ask:** planning quality.

**Answer:**
"Involve the people doing the work, break tasks down, use historical data, three-point estimates and buffers for risk. PERT is (optimistic + 4 times most likely + pessimistic) divided by 6 — with 4, 6 and 14 days that's (4 + 24 + 14) divided by 6, so 7 days."

Tip: Three-point estimates.`,

'Which metrics do you track for programs?':
`**Why they ask:** measurement.

**Answer:**
"Milestone attainment, schedule and budget variance, scope burn-up, risk trends, defect trends, and benefits realization — the last one is what the business actually funded."

Tip: Benefits.`,

'How do you ensure quality in delivery?':
`**Why they ask:** quality ownership.

**Answer:**
"Clear acceptance criteria, a test strategy with entry and exit criteria for each phase, defect management, quality gates, and performance and security testing built into the plan."

Tip: Entry/exit criteria.`,

'How do you handle resource constraints?':
`**Why they ask:** prioritization.

**Answer:**
"Prioritize by value and the critical path, negotiate for resources with data, adjust scope or schedule when needed, and avoid overloading people — burnout makes every estimate wrong."

Tip: Prioritization.`,

'How do you run lessons learned?':
`**Why they ask:** continuous improvement.

**Answer:**
"Blameless sessions at major milestones and at the end, capturing what worked and what didn't, documenting actionable improvements and sharing them with the PMO — doing it throughout, so the program itself benefits."

Tip: Throughout, not just end.`,

'Which tools do you use?':
`**Why they ask:** practical experience.

**Answer:**
"Jira and Jira Align, Smartsheet, MS Project, Azure DevOps, Confluence, Asana, and Power BI dashboards — whatever gives everyone the same view of the truth."

Tip: Tools serve visibility.`,

"Two teams disagree on technical approach and it's blocking progress. What do you do?":
`**Why they ask:** decision facilitation.

**Answer:**
"Facilitate a decision meeting with agreed criteria, involve the architects, document the trade-offs, set a decision deadline, and escalate to the decision owner if they can't converge. An imperfect decision this week beats a perfect one next month."

Tip: Time-boxed decisions.`,

'A key engineer leaves mid-program. What do you do?':
`**Why they ask:** risk response.

**Answer:**
"Assess the knowledge gaps immediately, arrange a structured handover during their notice period, reassign or hire, adjust the plan, and update the risk register — and spread knowledge so no one person is a single point of failure again."

Tip: Knowledge transfer.`,

'Leadership asks to pull in the date by a month. What do you do?':
`**Why they ask:** honest negotiation.

**Answer:**
"Analyze the options — reduce scope, add people where it actually helps, parallelize work, or accept more risk — and present the trade-offs honestly. Adding people late often slows things down at first, as Brooks' law warns."

Tip: Brooks' law caution.`,

'How do you track benefits realization?':
`**Why they ask:** value focus.

**Answer:**
"Define benefits with measures and owners in the business case, capture baselines, track after delivery, and report realized versus planned benefits to leadership."

Tip: Benefit owners.`,

'What is hypercare?':
`**Why they ask:** go-live experience.

**Answer:**
"An intensive support period after go-live — dedicated teams, daily triage, close monitoring and fast fixes — before transitioning to steady-state support once agreed exit criteria are met, like ticket volume below a threshold for two weeks."

Tip: Exit criteria.`,

'How do you drive adoption?':
`**Why they ask:** value realization.

**Answer:**
"Stakeholder engagement, training, local champions, communication, readiness assessments before go-live, and measuring adoption after launch."

Tip: Champions.`,

'How do you use AI as a TPM?':
`**Why they ask:** current tools.

**Answer:**
"Summarizing meetings and status, drafting reports, analyzing risks and dependencies across large plans, and automating routine updates — always verifying accuracy before anything reaches leadership."

Tip: Verify.`,

'Fixed price vs time and materials contracts?':
`**Why they ask:** commercial awareness.

**Answer:**
"Fixed price shifts delivery risk to the vendor but requires very clear scope — vague scope just becomes change requests. Time and materials gives flexibility but needs close cost control."

Tip: Scope clarity.`,

"What's in a cutover plan?":
`**Why they ask:** go-live discipline.

**Answer:**
"Minute-by-minute tasks with owners, dependencies, go/no-go checkpoints, data validation steps, a communication plan, and a rollback plan — rehearsed in mock cutovers so the real one is the third or fourth run."

Tip: Mock cutovers.`,

'What goes in a project charter?':
`**Why they ask:** initiation discipline.

**Answer:**
"Purpose and business case, objectives and success criteria, scope and exclusions, key milestones, budget, stakeholders and sponsor, high-level risks and assumptions, and the project manager's authority — signed by the sponsor."

Tip: The sponsor signs it.`,

'What is a work breakdown structure?':
`**Why they ask:** planning fundamentals.

**Answer:**
"A hierarchical decomposition of the total scope into deliverables and work packages small enough to estimate and assign. It's the basis for schedule, cost and responsibility, and follows the 100% rule — it captures all the work, and nothing outside scope."

Tip: The 100% rule.`,

'What is a RACI matrix?':
`**Why they ask:** role clarity.

**Answer:**
"For each activity or decision it defines who is Responsible for doing the work, who is Accountable — one person who signs off — who is Consulted and who is Informed. It prevents 'I thought you were doing that.'"

Tip: Only one A per row.`,

'How do you coordinate a multi-team release?':
`**Why they ask:** release management.

**Answer:**
"A release calendar, feature readiness tracking, integration testing windows, code freeze criteria, release notes, a go/no-go, a deployment runbook with rollback, and post-release monitoring."

Tip: Freeze criteria.`,

"What is a TPM's role during a major production incident?":
`**Why they ask:** incident leadership.

**Answer:**
"Often incident coordinator: running communications, keeping the timeline, coordinating teams, updating stakeholders on a fixed cadence, and afterward driving the post-incident review and follow-up actions to completion."

Tip: Coordination.`,

'How do you include security and compliance in programs?':
`**Why they ask:** risk management.

**Answer:**
"Involve security architects early, put security reviews and pen tests on the milestone plan, track compliance requirements like SOX and privacy as deliverables, and build in lead time — a pen test vendor booked two weeks before go-live is a schedule risk."

Tip: Plan for the lead time.`,

'How do you track progress across many agile teams?':
`**Why they ask:** scaled visibility.

**Answer:**
"Feature and epic burn-ups, PI objectives, dependency boards, flow metrics, and milestone-based roll-ups for leadership — without forcing every team into identical processes."

Tip: Roll-up without micromanaging.`,

'How do you manage data migration risk?':
`**Why they ask:** a top program risk.

**Answer:**
"Early data profiling, business ownership of cleansing, multiple mock loads with reconciliation, defined acceptance criteria, cutover rehearsals, and fallback plans. Each mock load should be cleaner than the last, measured in error counts."

Tip: Multiple mock loads.`,

};
