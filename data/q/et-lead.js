// et-lead — generated from src/et-lead-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Technical Lead (10–15 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-lead'] = [
["Role", "What does an Oracle technical lead do?",
`**Why they ask:** confirms you lead people and designs, not just code.

**Answer:** Owns the technical workstream: integration and extension architecture within the project, technical standards, design reviews, estimates and plans for RICEW objects, team allocation and mentoring, environment and deployment coordination, quality (code reviews, testing), and communication with functional leads, architects and the PMO. Escalates risks early.

Tip: Mention team size and number of objects you've led.`, 'B'],

["Planning", "How do you plan the technical workstream on an implementation?",
`**Answer:** Build the RICEW inventory from requirements, classify by complexity (simple/medium/complex), estimate with standard effort per tier, sequence by dependencies and test cycles (CRP, SIT1, SIT2, UAT), assign developers by skill, track weekly, and keep buffer for changes and defects.

**Example:** 80 objects: 40 simple × 3 days, 30 medium × 7, 10 complex × 15 = 480 developer-days.

Tip: Show the math.`, 'D'],

["Standards", "What technical standards do you establish?",
`**Answer:** Naming conventions, folder and repository structure, error handling and logging patterns, integration design patterns, security guidelines, documentation templates, code review checklist, and deployment procedures.

Tip: Standards save time later.`, 'B'],

["Design Review", "How do you run design reviews?",
`**Answer:** Review technical designs against requirements, standards, performance, security, supportability and reuse; involve functional leads; record decisions; and approve before build.

Tip: Catch issues before coding.`, 'B'],

["Integration", "How do you decide integration patterns across a program?",
`**Answer:** Classify integrations by volume, latency and direction; standardize patterns (REST real-time, event-driven, FBDI batch, BICC extracts, SFTP file exchange); reuse common components (logging, error handling, lookups); and document an integration catalog.

Tip: Integration catalog.`, 'D'],

["OIC", "How do you structure OIC development for a large team?",
`**Answer:** Package by domain, naming standards, reusable child integrations for common tasks (notifications, logging, file handling), lookups for configuration, connection management per environment, version control of exports, and code reviews.

Tip: Governance for scale.`, 'D'],

["Environments", "How do you manage environments and deployments?",
`**Answer:** Environment strategy (Dev, Test, UAT, Prod), refresh calendar, migration checklists, configuration management, deployment windows, and approvals — with automated pipelines where possible.

Tip: Reduce deployment errors.`, 'D'],

["Quality", "How do you ensure quality of technical deliverables?",
`**Answer:** Design reviews, code reviews, unit test standards with evidence, peer testing, automated tests for critical integrations, and defect trend tracking by developer and object.

Tip: Prevention over correction.`, 'B'],

["Team", "How do you manage a team of onshore and offshore developers?",
`**Answer:** Clear task definitions and acceptance criteria, overlap hours for handoffs, daily stand-ups, documented standards, regular code reviews, recognition, and building ownership rather than ticket-taking.

Tip: Mention a successful distributed delivery.`, 'B'],

["Team", "How do you develop junior developers?",
`**Answer:** Pair them on designs, give increasingly complex objects, review code with explanations, share business context, and encourage certifications.

Tip: Build the bench.`, 'B'],

["Team", "How do you handle a developer who consistently misses deadlines?",
`**Answer:** Understand causes (skills, unclear specs, overload), adjust assignments, provide support or pairing, set clear checkpoints, and escalate through HR process if needed.

Tip: Fair and direct.`, 'B'],

["Estimation", "How do you handle pressure to reduce estimates?",
`**Answer:** Explain the basis of estimates, offer options (reduce scope, phase delivery, add resources, accept risk), and document decisions. Don't cut estimates without changing scope.

Tip: Options, not promises.`, 'D'],

["Risk", "What are common technical risks on Oracle projects?",
`**Answer:** Late or changing requirements, data quality for conversions, integration partner readiness, environment availability, performance at volume, security design gaps, quarterly update impacts, and key-person dependencies.

Tip: Mitigation for each.`, 'D'],

["Data Migration", "How do you lead a data migration workstream?",
`**Answer:** Define objects and load sequence, mapping ownership with business, cleansing plan, automated load tools, reconciliation reports, mock conversion schedule with timings and sign-offs, and a detailed cutover runbook.

Tip: Reconciliation sign-off by business.`, 'D'],

["Cutover", "What goes into a technical cutover plan?",
`**Answer:** Sequenced tasks with owners and timings (freeze legacy, final extracts, loads, validations, integration switch-over, scheduled jobs enablement), go/no-go checkpoints, rollback plan, and communication plan — rehearsed in mock cutovers.

Tip: Rehearsal is essential.`, 'D'],

["Performance", "How do you plan for performance on an Oracle implementation?",
`**Answer:** Identify high-volume processes and integrations, design for bulk processing, run volume tests in SIT, tune reports and integrations, and coordinate with Oracle for SaaS load testing policies.

Tip: Volume testing before UAT.`, 'D'],

["Security", "How do you design security for integrations and extensions?",
`**Answer:** Dedicated integration users with least-privilege custom roles, OAuth where possible, credential management, encryption in transit, data masking in non-prod, and audit logging.

Tip: Least privilege.`, 'D'],

["Quarterly Updates", "How do you manage quarterly update impact on custom objects?",
`**Answer:** Maintain a custom object inventory, review release notes for changes affecting APIs, tables and pages, run regression tests (automated where possible) in the test pod, fix issues, and sign off before production updates.

Tip: Automation reduces effort.`, 'D'],

["Redwood", "How do you plan for Redwood adoption in technical work?",
`**Answer:** Inventory personalizations and extensions on classic pages, check Oracle's Redwood conversion timelines, plan VB Studio extensions for Redwood pages, update test scripts, and coordinate training.

Tip: Check readiness material each quarter.`, 'D'],

["AI", "How would you lead AI agent adoption technically?",
`**Answer:** Identify use cases with the business, use AI Agent Studio templates, design tools/APIs the agents need with proper security, test accuracy and safety, set up monitoring, and govern changes like other code.

Tip: Governance plus value.`, 'D'],

["Stakeholders", "How do you work with functional leads?",
`**Answer:** Joint requirement walkthroughs, agreed specs with sample data, regular syncs, shared defect triage, and transparency on technical constraints.

Tip: One team.`, 'B'],

["Stakeholders", "How do you report technical status to the PMO?",
`**Answer:** Objects by status (design, build, unit test, ready), defects and aging, risks and issues, dependency status, and forecast vs plan — in a concise dashboard.

Tip: Data-driven reporting.`, 'B'],

["Vendors", "How do you work with third-party integration partners?",
`**Answer:** Agree interface specifications and SLAs early, define test timelines and environments, joint testing, clear defect ownership, and escalation paths.

Tip: Partner readiness is a common risk.`, 'D'],

["Support", "How do you transition technical objects to support?",
`**Answer:** Documentation (designs, runbooks), knowledge transfer sessions, monitoring setup, known-issue list, hypercare period with joint support, and formal sign-off.

Tip: Supportability planned from the start.`, 'D'],

["Production Support", "How do you run technical production support?",
`**Answer:** Ticket triage by severity, SLAs, monitoring dashboards, root-cause analysis for recurring issues, change management for fixes, and regular reporting.

Tip: Reduce repeat incidents.`, 'D'],

["Change Management", "How do you control changes in production?",
`**Answer:** Formal change requests with impact analysis, approvals (CAB), testing evidence, scheduled deployment windows, rollback plans and post-deployment validation — also satisfying SOX change management.

Tip: Audit evidence.`, 'D'],

["Technical Debt", "How do you manage technical debt?",
`**Answer:** Track it in a backlog, prioritize by risk and cost of delay, allocate capacity each release, and retire unnecessary customizations during upgrades.

Tip: Make it visible.`, 'D'],

["Tools", "Which tools do you use to manage the technical team?",
`**Answer:** Jira or Azure DevOps for work tracking, Git for version control, Confluence/SharePoint for documentation, OIC and VB Studio pipelines, and monitoring dashboards.

Tip: Name what you've used.`, 'B'],

["Scenario", "A critical integration fails on go-live day. What do you do?",
`**Answer:** Mobilize the team, triage quickly, communicate status to leadership, apply a workaround (manual process or reprocessing) to protect business operations, fix the root cause, reprocess transactions, and document lessons.

Tip: Protect the business first.`, 'D'],

["Scenario", "SIT is behind schedule with many technical defects. What do you do?",
`**Answer:** Analyze defects by object and root cause, add daily triage, assign best developers to critical paths, reprioritize by business impact, and communicate a realistic recovery plan.

Tip: Data-driven recovery.`, 'D'],

["Scenario", "The business asks for a major change late in the project. What do you do?",
`**Answer:** Assess impact on effort, timeline and risk; present options (defer to phase 2, add resources, cut scope); get a formal change decision.

Tip: Change control.`, 'D'],

["Behavioral", "Tell me about a large technical delivery you led.",
`**Sample answer:** "I led 12 developers delivering 95 RICEW objects for an Oracle Fusion Financials and Procurement implementation — 35 OIC integrations, 40 reports and 20 conversions. We hit every test cycle milestone and went live with zero critical integration defects."

Tip: Scale and outcome.`, 'B'],

["Behavioral", "Tell me about a conflict within your team.",
`**Sample answer:** "Two senior developers disagreed on an integration pattern. I had each present pros and cons, we evaluated against our standards and volumes, and chose the event-driven option; both felt heard."

Tip: Facilitation.`, 'B'],

["Behavioral", "Tell me about a technical decision you'd make differently.",
`**Sample answer:** "We built a custom BIP extract for a data warehouse that later had performance issues. I'd use BICC incremental extracts from the start."

Tip: Honest learning.`, 'B'],

["Architecture", "How do you work with solution architects?",
`**Answer:** Align with the overall architecture, provide technical feasibility input, raise risks, and ensure designs follow architectural principles.

Tip: Collaboration.`, 'B'],

["Reusability", "How do you promote reuse across the team?",
`**Answer:** Shared libraries (child integrations, common BIP data models, VB components), a component catalog, and design reviews that check for existing assets.

Tip: Efficiency.`, 'D'],

["Documentation", "What documentation do you require from your team?",
`**Answer:** Technical designs, mapping documents, unit test evidence, deployment notes, and support runbooks.

Tip: Consistent templates.`, 'B'],

["Testing", "How do you approach automated testing for integrations?",
`**Answer:** Build test harnesses with sample payloads, validate outputs, run after changes and quarterly updates, and integrate with pipelines where possible.

Tip: Regression safety net.`, 'D'],

["EBS to Fusion", "How do you plan the technical side of an EBS-to-Fusion migration?",
`**Answer:** Inventory EBS customizations, classify (retire/standard/rebuild), design Fusion integrations and extensions, plan data migration from EBS, build coexistence integrations if phased, and train the team on Fusion tooling.

Tip: Retire as much as possible.`, 'D'],

["Budget", "How do you manage technical budget and resources?",
`**Answer:** Track effort vs estimates, forecast remaining work, manage contractors and offshore costs, and flag overruns early with options.

Tip: Financial awareness.`, 'D'],

["Hiring", "How do you interview technical consultants?",
`**Answer:** Technical exercises (SQL, design scenario), discussion of past projects in depth, problem-solving approach, and communication skills.

Tip: Practical evaluation.`, 'B'],

["Career", "Where do you see yourself next?",
`**Answer:** Technical architect or delivery lead for larger programs, owning integration and extension architecture across platforms.

Tip: Growth.`, 'B'],

["Closing", "Why should we hire you as technical lead?",
`**Sample answer:** "I've led large technical teams to on-time, high-quality delivery, set standards that reduced defects, managed complex cutovers, and developed developers into leads."

Tip: Leadership plus delivery.`, 'B'],

["Communication", "How do you explain a technical issue to business stakeholders?",
`**Answer:** Focus on business impact, cause in simple terms, what's being done, timeline and any workaround — avoiding jargon.

Tip: Business language.`, 'B'],

["Metrics", "Which metrics do you track for the technical team?",
`**Answer:** Objects delivered vs plan, defect density and reopen rate, unit test coverage evidence, cycle time per object, production incidents and resolution time.

Tip: Balanced metrics.`, 'D'],

["Governance", "How do you avoid over-customization?",
`**Answer:** Challenge requirements with "fit to standard" workshops, require business justification and architecture approval for customizations, and prefer configuration and extensions over custom code.

Tip: Design authority.`, 'D'],

["Monitoring", "How do you set up monitoring for integrations?",
`**Answer:** OIC monitoring with alerts, custom dashboards of success/failure counts, business-level reconciliation reports, and on-call procedures.

Tip: Business reconciliation is often missed.`, 'D'],

["Hypercare", "How do you run technical hypercare?",
`**Answer:** Daily stand-ups, war-room support, monitoring of first runs (payments, imports, close), rapid fixes through expedited change control, and issue tracking until stable.

Tip: First-time process monitoring.`, 'D'],

["Knowledge", "How do you avoid single points of knowledge in the team?",
`**Answer:** Documentation, pairing, rotating assignments, and knowledge-sharing sessions.

Tip: Key-person risk.`, 'B']
];

QB['et-lead'] = (QB['et-lead'] || []).concat([
["Planning", "How do you align technical delivery with test cycles?",
`**Answer:** Map each RICEW object to the test cycle where it's needed (CRP, SIT1, SIT2, UAT), set build-complete dates ahead of each cycle, track readiness, and reserve capacity for defect fixing during cycles.

Tip: Objects ready before the cycle, not during it.`, 'D']
]);
