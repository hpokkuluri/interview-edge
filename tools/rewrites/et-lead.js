// Rewritten ERP Technical — Oracle Technical Lead answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'How do you plan the technical workstream on an implementation?':
`**Why they ask:** planning is the technical lead's core job.

**Answer:**
"I build the RICEW inventory from the requirements and classify each object as simple, medium or complex. I estimate with a standard effort per tier, then sequence the work by dependencies and test cycles: CRP, SIT1, SIT2 and UAT. I assign developers by skill, track weekly, and keep a buffer for changes and defects. For example, 80 objects: 40 simple at 3 days, 30 medium at 7 and 10 complex at 15 gives 120 plus 210 plus 150, which is 480 developer-days, before buffer."

Tip: Show the math. It proves the plan isn't a guess.`,

'What technical standards do you establish?':
`**Why they ask:** standards make teams consistent.

**Answer:**
"Naming conventions, folder and repository structure, error handling and logging patterns, integration design patterns, security guidelines, documentation templates, a code review checklist, and deployment procedures."

Tip: Say "standards save time later". It's why they matter.`,

'How do you run design reviews?':
`**Why they ask:** catching issues before build.

**Answer:**
"I review each technical design against the requirements, our standards, performance, security, supportability and reuse. Functional leads join so the business logic is checked too. Decisions are recorded, and the design is approved before anyone builds."

Tip: Say "catch issues before coding". It's the cheapest point to fix them.`,

'How do you decide integration patterns across a program?':
`**Why they ask:** consistency across many integrations.

**Answer:**
"I classify integrations by volume, latency and direction. Then I standardize a small set of patterns: REST for real-time, event-driven for near real-time, FBDI for batch inbound, BICC for bulk extracts, and SFTP for file exchange. Common components, like logging, error handling and lookups, are reused. And everything is documented in an integration catalog."

Tip: Mention the integration catalog. It's how a program stays manageable.`,

'How do you structure OIC development for a large team?':
`**Why they ask:** OIC at scale needs governance.

**Answer:**
"I package integrations by domain with naming standards. Reusable child integrations handle common tasks like notifications, logging and file handling. Lookups hold configuration. Connections are managed per environment. Exports go into version control. And code reviews apply to integrations like any other code."

Tip: Mention reusable child integrations. They cut build time a lot.`,

'How do you manage environments and deployments?':
`**Why they ask:** deployment errors are common.

**Answer:**
"An environment strategy for dev, test, UAT and production, with a refresh calendar. Migration checklists, configuration management, deployment windows and approvals. And automated pipelines wherever possible."

Tip: Say "reduce deployment errors". It's the goal.`,

'How do you ensure quality of technical deliverables?':
`**Why they ask:** quality leadership.

**Answer:**
"Design reviews, code reviews, unit test standards with evidence, peer testing, automated tests for critical integrations, and tracking defect trends by developer and object, so I can coach where needed."

Tip: Say "prevention over correction". It's the mindset.`,

'How do you manage a team of onshore and offshore developers?':
`**Why they ask:** distributed teams are the norm.

**Answer:**
"I give clear task definitions with acceptance criteria. We use overlap hours for handoffs and daily stand-ups. Standards are documented, and code is reviewed regularly. I recognize good work and build ownership, so people own outcomes instead of just taking tickets."

Tip: Mention a distributed delivery that went well. It makes it real.`,

'How do you develop junior developers?':
`**Why they ask:** building the team.

**Answer:**
"I pair them on designs, give them increasingly complex objects, review their code with explanations, share the business context, and encourage certifications."

Tip: Say "build the bench". It shows you think ahead.`,

'How do you handle a developer who consistently misses deadlines?':
`**Why they ask:** people management.

**Answer:**
"I try to understand the cause: skills, unclear specs or overload. Then I adjust assignments, provide support or pairing, and set clear checkpoints. If it doesn't improve, I escalate through the HR process."

Tip: Be fair and direct. That's what they want to hear.`,

'How do you handle pressure to reduce estimates?':
`**Why they ask:** integrity under pressure.

**Answer:**
"I explain how the estimates were built, then offer options: reduce scope, phase delivery, add resources, or accept more risk. And I document the decision. I don't cut estimates without changing scope, because that just moves the problem to go-live."

Tip: Say "options, not promises". It's the professional answer.`,

'What are common technical risks on Oracle projects?':
`**Why they ask:** risk awareness.

**Answer:**
"Late or changing requirements, data quality for conversions, integration partner readiness, environment availability, performance at volume, security design gaps, quarterly update impacts, and key-person dependencies."

Tip: Have a mitigation ready for each. They'll ask.`,

'How do you lead a data migration workstream?':
`**Why they ask:** migration leadership.

**Answer:**
"I define the objects and load sequence, agree mapping ownership with the business, set a cleansing plan, build automated load tools and reconciliation reports, run a mock conversion schedule with timings and sign-offs, and write a detailed cutover runbook."

Tip: Say "reconciliation sign-off by the business". They own the data.`,

'What goes into a technical cutover plan?':
`**Why they ask:** cutover planning.

**Answer:**
"Sequenced tasks with owners and timings: freeze legacy, final extracts, loads, validations, switching integrations over, and enabling scheduled jobs. Go/no-go checkpoints, a rollback plan and a communication plan. And it's rehearsed in mock cutovers."

Tip: Say "rehearsal is essential". Untested cutovers run long.`,

'How do you plan for performance on an Oracle implementation?':
`**Why they ask:** performance failures at go-live are costly.

**Answer:**
"I identify the high-volume processes and integrations early, design for bulk processing, run volume tests in SIT, tune reports and integrations, and coordinate with Oracle on their SaaS load testing policies."

Tip: Say "volume testing before UAT". Finding issues in UAT is too late.`,

'How do you design security for integrations and extensions?':
`**Why they ask:** security design.

**Answer:**
"Dedicated integration users with least-privilege custom roles, OAuth where possible, proper credential management, encryption in transit, data masking in non-production, and audit logging."

Tip: Say "least privilege". It's the foundation.`,

'How do you manage quarterly update impact on custom objects?':
`**Why they ask:** quarterly risk management.

**Answer:**
"I maintain a custom object inventory, review release notes for changes to APIs, tables and pages, run regression tests in the test environment, automated where possible, fix issues, and sign off before production is updated."

Tip: Mention automation. It's what makes it sustainable every quarter.`,

'How do you plan for Redwood adoption in technical work?':
`**Why they ask:** Redwood is changing extension work.

**Answer:**
"I inventory personalizations and extensions on classic pages, check Oracle's Redwood conversion timelines, plan VB Studio extensions for the Redwood pages, update test scripts, and coordinate training."

Tip: Mention checking readiness material each quarter.`,

'How would you lead AI agent adoption technically?':
`**Why they ask:** current technical leadership.

**Answer:**
"I'd identify use cases with the business, start from AI Agent Studio templates, design the tools and APIs the agents need with proper security, test accuracy and safety, set up monitoring, and govern changes to agents like any other code."

Tip: Say "governance plus value". Both matter.`,

'How do you work with functional leads?':
`**Why they ask:** collaboration.

**Answer:**
"Joint requirement walkthroughs, agreed specs with sample data, regular syncs, shared defect triage, and being open about technical constraints."

Tip: Say "one team". It's the attitude they want.`,

'How do you report technical status to the PMO?':
`**Why they ask:** reporting discipline.

**Answer:**
"A concise dashboard: objects by status, design, build, unit test and ready; defects and their age; risks and issues; dependency status; and forecast against plan."

Tip: Say "data-driven reporting". It builds trust.`,

'How do you work with third-party integration partners?':
`**Why they ask:** partners are a common risk.

**Answer:**
"I agree interface specifications and SLAs early, define test timelines and environments, test jointly, set clear defect ownership, and agree escalation paths."

Tip: Say "partner readiness is a common risk". Plan for it.`,

'How do you transition technical objects to support?':
`**Why they ask:** supportability.

**Answer:**
"Documentation, including designs and runbooks. Knowledge transfer sessions. Monitoring set up. A known-issue list. A hypercare period with joint support. And formal sign-off from the support team."

Tip: Say "plan supportability from the start". Not at the end.`,

'How do you run technical production support?':
`**Why they ask:** run-mode leadership.

**Answer:**
"Ticket triage by severity with SLAs, monitoring dashboards, root-cause analysis for recurring issues, change management for fixes, and regular reporting."

Tip: Say "reduce repeat incidents". That's the measure of good support.`,

'How do you control changes in production?':
`**Why they ask:** change control and SOX.

**Answer:**
"Formal change requests with impact analysis, approval through the change board, testing evidence, scheduled deployment windows, rollback plans and validation after deployment. That also satisfies SOX change management."

Tip: Mention audit evidence. It's part of the job.`,

'How do you manage technical debt?':
`**Why they ask:** long-term thinking.

**Answer:**
"I track it in a backlog, prioritize by risk and cost of delay, allocate some capacity every release, and retire unnecessary customizations during upgrades."

Tip: Say "make it visible". Hidden debt never gets paid.`,

'Which tools do you use to manage the technical team?':
`**Why they ask:** practical tooling.

**Answer:**
"Jira or Azure DevOps for work tracking, Git for version control, Confluence or SharePoint for documentation, OIC and VB Studio pipelines for deployment, and monitoring dashboards."

Tip: Name what you've actually used.`,

'A critical integration fails on go-live day. What do you do?':
`**Why they ask:** crisis handling.

**Answer:**
"I mobilize the team, triage quickly and communicate status to leadership. I apply a workaround, a manual process or reprocessing, to protect business operations. Then I fix the root cause, reprocess the transactions, and document the lessons."

Tip: Say "protect the business first". It's the priority.`,

'SIT is behind schedule with many technical defects. What do you do?':
`**Why they ask:** delivery recovery.

**Answer:**
"I analyze the defects by object and root cause, add a daily triage, put the best developers on the critical path, reprioritize by business impact, and communicate a realistic recovery plan."

Tip: Say "data-driven recovery". Guessing makes it worse.`,

'The business asks for a major change late in the project. What do you do?':
`**Why they ask:** change control.

**Answer:**
"I assess the impact on effort, timeline and risk, then present options: defer to phase 2, add resources, or cut other scope. And I get a formal change decision."

Tip: Say "change control". It protects everyone.`,

'Tell me about a large technical delivery you led.':
`**Why they ask:** proof of scale.

**Answer (example):**
"I led 12 developers delivering 95 RICEW objects for a Fusion Financials and Procurement implementation: 35 OIC integrations, 40 reports and 20 conversions. We hit every test cycle milestone and went live with no critical integration defects."

Tip: Give scale and outcome. It's what they remember.`,

'Tell me about a conflict within your team.':
`**Why they ask:** facilitation skill.

**Answer (example):**
"Two senior developers disagreed on an integration pattern. I had each present the pros and cons, we evaluated them against our standards and volumes, and chose the event-driven option. Both felt heard, and the decision stuck."

Tip: Show facilitation, not dictating.`,

"Tell me about a technical decision you'd make differently.":
`**Why they ask:** honesty and learning.

**Answer (example):**
"We built a custom BIP extract to feed a data warehouse, and it later had performance problems as volumes grew. Today I'd use BICC incremental extracts from the start."

Tip: Keep it honest and specific. It shows learning.`,

'How do you work with solution architects?':
`**Why they ask:** role clarity.

**Answer:**
"I align with the overall architecture, give technical feasibility input, raise risks early, and make sure the team's designs follow the architectural principles."

Tip: Say you raise risks early. Architects value that.`,

'How do you promote reuse across the team?':
`**Why they ask:** efficiency.

**Answer:**
"Shared libraries, like child integrations, common BIP data models and VB components. A component catalog. And design reviews that check whether an existing asset can be reused."

Tip: Mention the component catalog. It makes reuse easy.`,

'What documentation do you require from your team?':
`**Why they ask:** documentation standards.

**Answer:**
"Technical designs, mapping documents, unit test evidence, deployment notes and support runbooks, all using consistent templates."

Tip: Say "consistent templates". It makes documents usable.`,

'How do you approach automated testing for integrations?':
`**Why they ask:** regression safety.

**Answer:**
"I build test harnesses with sample payloads, validate the outputs, run them after every change and quarterly update, and plug them into pipelines where possible."

Tip: Call it a regression safety net. That's what it is.`,

'How do you plan the technical side of an EBS-to-Fusion migration?':
`**Why they ask:** migration leadership.

**Answer:**
"I inventory the EBS customizations and classify each as retire, standard or rebuild. I design the Fusion integrations and extensions, plan the data migration from EBS, build coexistence integrations if it's phased, and train the team on Fusion tools."

Tip: Say "retire as much as possible". It's the biggest saving.`,

'How do you manage technical budget and resources?':
`**Why they ask:** financial awareness.

**Answer:**
"I track effort against estimates, forecast remaining work, manage contractor and offshore costs, and flag overruns early with options."

Tip: Say "early, with options". It's what managers want.`,

'How do you interview technical consultants?':
`**Why they ask:** hiring judgment.

**Answer:**
"I use technical exercises, like SQL and a design scenario, an in-depth discussion of past projects, a look at their problem-solving approach, and an assessment of communication skills."

Tip: Mention practical exercises. They reveal real skill.`,

'Where do you see yourself next?':
`**Why they ask:** career direction.

**Answer:**
"As a technical architect or delivery lead for larger programs, owning integration and extension architecture across platforms."

Tip: Keep it focused. It shows ambition with direction.`,

'Why should we hire you as technical lead?':
`**Why they ask:** a closing question.

**Answer (sample):**
"I've led large technical teams to on-time, high-quality delivery, set standards that cut defects, managed complex cutovers, and developed developers into leads."

Tip: Combine leadership with delivery. Both are the job.`,

'How do you explain a technical issue to business stakeholders?':
`**Why they ask:** communication.

**Answer:**
"I focus on the business impact, explain the cause in simple terms, say what's being done, give a timeline and any workaround, and avoid jargon."

Tip: Say "business language". It's the skill being tested.`,

'Which metrics do you track for the technical team?':
`**Why they ask:** measurement.

**Answer:**
"Objects delivered against plan, defect density and reopen rate, unit test evidence, cycle time per object, and production incidents with resolution time."

Tip: Say "balanced metrics". Speed alone hides quality issues.`,

'How do you avoid over-customization?':
`**Why they ask:** protecting the platform.

**Answer:**
"I challenge requirements in fit-to-standard workshops, require business justification and architecture approval for any customization, and prefer configuration and extensions over custom code."

Tip: Mention a design authority. It's the governance that makes it stick.`,

'How do you set up monitoring for integrations?':
`**Why they ask:** operational readiness.

**Answer:**
"OIC monitoring with alerts, dashboards of success and failure counts, business-level reconciliation reports, and on-call procedures."

Tip: Mention business reconciliation. It's the part most teams miss.`,

'How do you run technical hypercare?':
`**Why they ask:** go-live support.

**Answer:**
"Daily stand-ups and war-room support. Close monitoring of first runs, like payments, imports and the first close. Rapid fixes through expedited change control. And tracking every issue until things are stable."

Tip: Mention first-time process monitoring. First runs are where problems show.`,

'How do you avoid single points of knowledge in the team?':
`**Why they ask:** key-person risk.

**Answer:**
"Documentation, pairing, rotating assignments and knowledge-sharing sessions."

Tip: Say "key-person risk". It shows you think about resilience.`,

'How do you align technical delivery with test cycles?':
`**Why they ask:** delivery planning.

**Answer:**
"I map each RICEW object to the test cycle where it's needed: CRP, SIT1, SIT2 or UAT. I set build-complete dates ahead of each cycle, track readiness, and reserve capacity for fixing defects during the cycles."

Tip: Say "objects ready before the cycle, not during it".`,

};
