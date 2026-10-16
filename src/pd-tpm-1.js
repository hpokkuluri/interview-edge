// Technical Program / Project Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['pd-tpm'] = [
["Role", "What does a technical program manager do?",
`**Why they ask:** TPM vs PM vs engineering manager confusion.

**Answer:** Drives complex cross-team technical initiatives to completion: defines scope and milestones with engineering leads, manages dependencies, risks and schedules, coordinates execution across teams, communicates status to leadership, and removes blockers — with enough technical depth to understand architecture trade-offs.

Tip: Cross-team, technical depth.`, 'B', 'E'],

["Project vs Program", "Project vs program vs portfolio?",
`**Answer:** A **project** is a temporary effort with a defined outcome. A **program** is a group of related projects managed together for combined benefits. A **portfolio** is a collection of programs and projects aligned to strategy and prioritized for investment.

Tip: Benefits realization at program level.`, 'B', 'E'],

["Planning", "How do you plan a large technical program?",
`**Answer:** Clarify goals and success metrics, define scope and non-goals, break down into workstreams with owners, identify milestones and dependencies, estimate with engineering, build an integrated plan with critical path, define risks and governance, and baseline.

Tip: Critical path.`, 'B', 'M'],

["Schedule", "What is the critical path?",
`**Answer:** The longest chain of dependent tasks determining the minimum project duration; any delay on it delays the project. Tasks off it have float/slack.

**Example:** A (5d) → B (10d) → D (3d) = 18 days vs A → C (4d) → D = 12 days; the A-B-D path is critical with C having 6 days of float.

Tip: Show an example.`, 'B', 'M'],

["Risk", "How do you manage risks?",
`**Answer:** Identify risks early with teams, assess probability and impact, plan responses (avoid, mitigate, transfer, accept), assign owners, track in a risk register, and review regularly. Distinguish risks (may happen) from issues (happening).

Tip: Owners and triggers.`, 'B', 'E'],

["Dependencies", "How do you manage cross-team dependencies?",
`**Answer:** Map them visually, agree dates and interfaces with owners, track in a shared plan, add buffers, hold dependency syncs, and escalate early when at risk.

Tip: Visible and owned.`, 'B', 'M'],

["Status", "How do you report status to executives?",
`**Answer:** RAG status with honest assessment, progress against milestones, key risks/issues with mitigation, decisions needed, and next steps — one page, consistent cadence.

Tip: No watermelon status (green outside, red inside).`, 'B', 'E'],

["Scope", "How do you handle scope changes?",
`**Answer:** Assess impact on schedule, cost and risk, present options (add time/resources, trade scope), get decision from the sponsor, update plans and communicate.

Tip: Trade-offs.`, 'B', 'E'],

["Methodology", "Waterfall vs Agile vs hybrid?",
`**Answer:** **Waterfall** suits fixed requirements and regulatory sign-offs; **Agile** suits evolving requirements and iterative delivery; **hybrid** combines (agile delivery within milestone-based governance) — common in enterprise programs like ERP.

Tip: Context.`, 'B', 'E'],

["Technical", "How technical does a TPM need to be?",
`**Answer:** Enough to understand architecture, system design, APIs, infrastructure and trade-offs; to challenge estimates; identify technical risks; and communicate between engineers and executives.

Tip: Credibility with engineers.`, 'B', 'M'],

["System Design", "TPM interviews often include system design. How do you approach it?",
`**Answer:** Clarify requirements and scale, sketch high-level components (clients, load balancer, services, database, cache, queues), discuss data flow, scaling and failure points, and then talk about how you'd plan delivery: phases, teams, risks and milestones.

Tip: Connect design to execution.`, 'D', 'M'],

["Launch", "How do you manage a launch?",
`**Answer:** Launch readiness checklist (testing, performance, security, documentation, support, monitoring, rollback), go/no-go meeting, phased rollout, war room, and post-launch review.

Tip: Go/no-go criteria.`, 'B', 'M'],

["Migration", "How do you manage a large migration program?",
`**Answer:** Inventory and dependency mapping, wave planning, pilot wave, runbooks and rehearsals, cutover plans with rollback, communication, and tracking completion and decommissioning.

Tip: Rehearsals.`, 'D', 'M'],

["ERP", "How do you manage an ERP implementation?",
`**Answer:** Phases (plan, design, build, test cycles, data migration, training, cutover, hypercare), strong business ownership, fit-to-standard design, integrated testing, data readiness tracking, change management and governance with steering committees.

Tip: Business ownership.`, 'D', 'M'],

["Budget", "How do you manage program budgets?",
`**Answer:** Baseline budget, track actuals and forecasts monthly, earned value where relevant, manage contingency, and report variances with explanations.

Tip: Forecast to complete.`, 'D', 'M'],

["EVM", "Explain earned value management basics.",
`**Answer:** Planned Value (PV), Earned Value (EV), Actual Cost (AC). Schedule Performance Index SPI = EV/PV; Cost Performance Index CPI = EV/AC.

**Example:** PV $100K, EV $80K, AC $90K → SPI 0.8 (behind), CPI 0.89 (over budget).

Tip: Interpret, not just calculate.`, 'D', 'M'],

["Vendors", "How do you manage vendors and system integrators?",
`**Answer:** Clear SOWs and deliverables, governance cadence, acceptance criteria, performance tracking, change request processes, and relationship management.

Tip: Acceptance criteria.`, 'B', 'M'],

["Communication", "How do you create a communication plan?",
`**Answer:** Identify audiences, information needs, frequency and channels (steering committee, status reports, team syncs, newsletters), and owners.

Tip: Tailor by audience.`, 'B', 'E'],

["Governance", "What governance structure do you set up?",
`**Answer:** Executive sponsor, steering committee for decisions, program board, workstream leads, RAID log (risks, assumptions, issues, dependencies), and decision log.

Tip: RAID log.`, 'B', 'M'],

["Stakeholders", "How do you handle a stakeholder who keeps escalating?",
`**Answer:** Understand their concerns, increase transparency, involve them in decisions, and set clear communication cadence.

Tip: Transparency.`, 'B', 'E'],

["Behavioral", "Tell me about a program you delivered.",
`**Sample answer:** "I led a data center to AWS migration for 220 applications across 12 teams. With wave planning, rehearsals and a dependency tracker, we finished two weeks early and cut infrastructure costs 28%."

Tip: Scale and outcomes.`, 'B', 'M'],

["Behavioral", "Tell me about a program in trouble you recovered.",
`**Sample answer:** "An ERP program was 4 months behind. I re-baselined with realistic estimates, cut non-critical scope to phase 2, added daily defect triage, and we went live within the new date."

Tip: Re-baseline honestly.`, 'B', 'M'],

["Behavioral", "Tell me about delivering bad news to leadership.",
`**Sample answer:** "I reported a 6-week delay early with root causes, options and a recommendation. Leadership approved extra testers and we contained the slip to 3 weeks."

Tip: Early with options.`, 'B', 'M'],

["Behavioral", "Tell me about influencing teams you don't manage.",
`**Answer:** Build relationships, align to shared goals, make work visible, recognize contributions, and use data to drive decisions.

Tip: Influence without authority.`, 'B', 'M'],

["Certifications", "Which certifications are useful?",
`**Answer:** PMP, PgMP, PMI-ACP, SAFe RTE/SPC, PRINCE2, and cloud certifications for technical credibility.

Tip: PMP widely recognized.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior TPM, director of program management or PMO leader.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver complex cross-team programs predictably — 220-application migrations and ERP recoveries — with clear communication and technical credibility."

Tip: Proof.`, 'B', 'E'],

["Estimation", "How do you improve estimate accuracy?",
`**Answer:** Involve the people doing the work, break down tasks, use historical data, three-point estimates (optimistic, likely, pessimistic), and buffers for risk.

**PERT:** (O + 4M + P) / 6 — e.g. (4 + 4×6 + 14)/6 = 7 days.

Tip: Three-point estimates.`, 'B', 'M'],

["Metrics", "Which metrics do you track for programs?",
`**Answer:** Milestone attainment, schedule and budget variance, burn-up of scope, risk trends, defect trends, and benefits realization.

Tip: Benefits.`, 'B', 'M'],

["Quality", "How do you ensure quality in delivery?",
`**Answer:** Clear acceptance criteria, test strategy with entry/exit criteria, defect management, quality gates, and performance/security testing.

Tip: Entry/exit criteria.`, 'B', 'M'],

["Resources", "How do you handle resource constraints?",
`**Answer:** Prioritize work by value and critical path, negotiate resources, adjust scope or schedule, and avoid overloading people.

Tip: Prioritization.`, 'B', 'E'],

["Lessons Learned", "How do you run lessons learned?",
`**Answer:** Blameless sessions at milestones and end, gather what worked and didn't, document actionable improvements and share them with the PMO.

Tip: Throughout, not just end.`, 'B', 'E'],

["Tools", "Which tools do you use?",
`**Answer:** Jira and Jira Align, Smartsheet, MS Project, Azure DevOps, Confluence, Asana, and dashboards in Power BI.

Tip: Tools serve visibility.`, 'B', 'E'],

["Scenario", "Two teams disagree on technical approach and it's blocking progress. What do you do?",
`**Answer:** Facilitate a decision meeting with criteria, involve architects, document trade-offs, set a decision deadline and escalate to the decision owner if needed.

Tip: Time-boxed decisions.`, 'B', 'M'],

["Scenario", "A key engineer leaves mid-program. What do you do?",
`**Answer:** Assess knowledge gaps, arrange handover, reassign or hire, adjust plans and update risks.

Tip: Knowledge transfer.`, 'B', 'E'],

["Scenario", "Leadership asks to pull in the date by a month. What do you do?",
`**Answer:** Analyze options: reduce scope, add resources (if effective), parallelize, accept more risk — present trade-offs honestly.

Tip: Brooks' law caution.`, 'B', 'M'],

["Benefits", "How do you track benefits realization?",
`**Answer:** Define benefits with measures and owners in the business case, baseline, track after delivery, and report realized vs planned.

Tip: Benefit owners.`, 'D', 'M'],

["Hypercare", "What is hypercare?",
`**Answer:** An intensive support period after go-live with dedicated teams, daily triage, monitoring and rapid fixes before transitioning to steady-state support.

Tip: Exit criteria.`, 'B', 'E'],

["Change Management", "How do you drive adoption?",
`**Answer:** Stakeholder engagement, training, champions, communication, readiness assessments, and measuring adoption post-launch.

Tip: Champions.`, 'B', 'E'],

["AI", "How do you use AI as a TPM?",
`**Answer:** Summarizing meetings and status, drafting reports, analyzing risks and dependencies, and automating updates — while verifying accuracy.

Tip: Verify.`, 'B', 'E'],

["Contracts", "Fixed price vs time and materials contracts?",
`**Answer:** **Fixed price** shifts risk to the vendor but requires clear scope; **T&M** gives flexibility but needs close cost control.

Tip: Scope clarity.`, 'D', 'M'],

["Cutover", "What's in a cutover plan?",
`**Answer:** Minute-by-minute tasks with owners, dependencies, go/no-go checkpoints, data validation steps, communication plan and rollback plan — rehearsed in mock cutovers.

Tip: Mock cutovers.`, 'D', 'M']
];
