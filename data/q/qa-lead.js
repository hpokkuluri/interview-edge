// qa-lead — generated from src/qa-lead-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// QA Lead / Test Manager. Format: [topic, question, answer, 'B'|'D']
QB['qa-lead'] = [
["Strategy", "What's the difference between a test strategy and a test plan?",
`**Why they ask:** leads must operate at both levels.

**Answer:** A **test strategy** is organization- or program-level: approach, test levels and types, tools, environments, automation approach, roles, metrics and risk approach — it changes rarely. A **test plan** is release- or project-level: scope, schedule, resources, entry/exit criteria, deliverables and risks for a specific delivery.

Tip: Mention you've written both.`, 'B'],

["Strategy", "How do you apply risk-based testing?",
`**Answer:** Identify risks by business impact × likelihood (complex code, new features, critical flows, integrations, past defect hotspots). Allocate test depth, techniques and order by risk — high-risk areas get more coverage and earlier testing. Communicate residual risk at release.

**Example:** payments and pricing get deep testing and automation; a rarely used admin screen gets a smoke test.

Tip: Risk-based testing is how you defend scope decisions.`, 'D'],

["Estimation", "How do you estimate testing effort?",
`**Answer:** Break down work (analysis, test design, data setup, execution, retest, regression, automation, reporting), use historical metrics (cases per day, defects per feature), apply three-point estimates for uncertainty, and add contingency for environment issues. Review estimates with the team.

Tip: Mention tracking actuals to improve future estimates.`, 'D'],

["Planning", "What are entry and exit criteria?",
`**Answer:** **Entry criteria:** conditions to start testing — build deployed, smoke passed, environment and data ready, requirements approved. **Exit criteria:** conditions to finish — planned tests executed, critical/high defects closed or accepted, coverage met, performance and security results acceptable.

Tip: Exit criteria guide the go/no-go decision.`, 'B'],

["Release", "How do you make a go/no-go recommendation?",
`**Answer:** Compare status against exit criteria, list open defects with business impact and workarounds, note untested areas and residual risks, and give a clear recommendation. The business owner decides with this information; I document the decision.

Tip: Recommend, don't just report.`, 'D'],

["Metrics", "Which QA metrics do you report to management?",
`**Answer:** Execution progress and pass rate, defect trends (opened vs closed, by severity), defect leakage to production, requirements or risk coverage, automation coverage and stability, and cycle time from build to test complete. Metrics drive decisions, never blame.

Tip: Mention a dashboard you built.`, 'B'],

["Metrics", "What is defect leakage and how do you reduce it?",
`**Answer:** The share of defects found after release vs total defects. Reduce it by analyzing escaped defects for root cause (missing scenario, environment difference, late change), adding tests, earlier QA involvement, better environments and data, and stronger regression.

Tip: Root-cause every escaped critical defect.`, 'D'],

["People", "How do you build and lead a QA team?",
`**Answer:** Hire a mix of skills (manual, automation, performance, domain), define roles and career paths, coach and give regular feedback, encourage pairing and code reviews, recognize good work, and build healthy relationships with developers.

Tip: Name someone you developed.`, 'B'],

["People", "How do you handle an underperforming tester?",
`**Answer:** Discuss privately with specific examples, understand causes (skills, workload, motivation), agree a clear plan with support (training, pairing), follow up regularly, and document. Escalate through HR if no improvement.

Tip: Fair and supportive.`, 'B'],

["People", "How do you keep testers motivated during long regression cycles?",
`**Answer:** Automate repetitive work, rotate assignments, involve them in exploratory testing and improvements, recognize finds, and share how their work protects customers.

Tip: Practical ideas.`, 'B'],

["Process", "How do you shift testing left?",
`**Answer:** QA in refinement and design reviews, testable acceptance criteria, API tests before UI exists, developers writing unit tests with QA guidance, automation in CI, static analysis, and early environment availability.

Tip: Example of a requirement gap caught early.`, 'D'],

["Process", "How do you improve collaboration between QA and development?",
`**Answer:** Shared goals and metrics, QA embedded in teams, three amigos sessions (product, dev, QA), clear defect reports, pairing on complex issues, and blameless retrospectives.

Tip: "Quality is the team's job."`, 'B'],

["Environments", "How do you manage test environments and data?",
`**Answer:** Environment calendar and ownership, stable builds with deployment notes, refresh strategy with data masking, automated test data setup, health checks, and service virtualization for unavailable dependencies.

Tip: Environment downtime metrics help get investment.`, 'D'],

["Stakeholders", "Development wants to skip regression to meet a deadline. What do you do?",
`**Answer:** Quantify the risk — what's untested, its business impact and history of defects there. Offer options: risk-based subset, automated smoke and critical flows, extra people, a staggered or feature-flagged release. Escalate the decision to the business owner with a clear risk statement and document it.

Tip: Options, not just "no".`, 'B'],

["Stakeholders", "How do you communicate test status to executives?",
`**Answer:** A short summary: overall readiness (green/amber/red), top risks, critical open defects with impact, and decisions needed. Details available on request.

Tip: One page.`, 'B'],

["Automation", "How do you build an automation program as a QA lead?",
`**Answer:** Set goals (e.g. regression from 5 days to 1), choose tools fitting the stack, start with a framework and high-value flows, integrate with CI, track ROI and stability, upskill manual testers, and involve developers.

Tip: Measured progress.`, 'D'],

["Automation", "How do you measure automation ROI?",
`**Answer:** Manual effort saved per cycle × cycles per year, minus build and maintenance effort; plus faster releases and earlier defect detection. Report trends quarterly.

**Example:** 120 hours saved per release × 12 releases = 1,440 hours/year vs 400 hours build + 200 hours/year maintenance.

Tip: Show the math.`, 'D'],

["Vendors", "How do you manage an outsourced testing vendor?",
`**Answer:** Clear SOW and deliverables, SLAs (defect detection, execution productivity, quality of test cases), knowledge transfer, regular quality reviews of their work, governance meetings and escalation paths.

Tip: Trust but verify.`, 'D'],

["Agile", "What's the QA lead's role in an agile organization?",
`**Answer:** Set quality standards and practices across teams, coach embedded testers, own the test strategy and tooling, coordinate cross-team integration and release testing, and report quality metrics.

Tip: Coach and enabler.`, 'B'],

["Release", "How do you manage release testing across multiple teams?",
`**Answer:** A release calendar with code freeze, integration testing environment, coordinated regression, defect triage across teams, release readiness checklist and a go/no-go meeting.

Tip: Mention feature flags to reduce big-bang risk.`, 'D'],

["Defects", "How do you run a defect triage meeting?",
`**Answer:** Review new and reopened defects, confirm reproduction, agree severity and priority, assign owners and target dates, and identify blockers. Keep it short and focused, with product, dev and QA present.

Tip: Decisions, not discussions.`, 'B'],

["Defects", "How do you handle a disagreement about defect severity?",
`**Answer:** Use agreed severity definitions and business impact, involve the product owner for priority, and document the decision.

Tip: Definitions prevent arguments.`, 'B'],

["Quality", "How do you define quality for a product?",
`**Answer:** Meeting user needs reliably: correct functionality, performance, security, usability and accessibility — measured by defects, customer issues, uptime and satisfaction.

Tip: Customer-centric.`, 'B'],

["Performance", "How do you incorporate performance and security testing?",
`**Answer:** Include them in the strategy with risk-based scope, specialists or partners where needed, early lightweight checks in CI, and full tests before major releases.

Tip: Non-functional testing is often forgotten.`, 'D'],

["Tools", "How do you choose test tools?",
`**Answer:** Requirements (tech stack, CI integration, reporting), team skills, total cost, community and vendor support, and a proof of concept on real scenarios.

Tip: PoC before commitment.`, 'D'],

["Budget", "How do you justify QA headcount or tooling budget?",
`**Answer:** Data on defect leakage costs, release delays, manual effort, incident impact, and ROI of automation or tools.

Tip: Business language.`, 'D'],

["Production", "How do you use production data to improve testing?",
`**Answer:** Analyze incidents and support tickets for gaps, use analytics to prioritize flows and devices, monitor errors after releases, and add regression tests for each escaped defect.

Tip: Close the feedback loop.`, 'D'],

["Behavioral", "Tell me about a release where quality issues escaped to production.",
`**Sample answer:** "A tax calculation bug reached production for one state because test data only covered three states. We hot-fixed within a day, added data-driven tax tests for all states, and introduced a release checklist item for configuration changes."

Tip: Own it, fix the system.`, 'B'],

["Behavioral", "Tell me about a time you improved QA processes significantly.",
`**Sample answer:** "Releases took two weeks of testing with high defect leakage. I introduced risk-based testing, automated the top 200 regression cases, and embedded testers in sprints. Testing dropped to three days, and production defects fell 45%."

Tip: Before/after.`, 'B'],

["Behavioral", "Tell me about a conflict with a development manager.",
`**Sample answer:** "A dev manager felt QA was slowing releases. We looked at the data together — most delays came from unstable builds. We agreed on a smoke test gate in CI, which cut wasted testing time and improved our relationship."

Tip: Data-driven resolution.`, 'B'],

["Hiring", "How do you interview testers?",
`**Answer:** Test design exercise (e.g. test a login page), defect report writing, SQL/API basics, automation coding for automation roles, and behavioral questions about collaboration and curiosity.

Tip: Practical exercises reveal skill.`, 'D'],

["AI", "How would you introduce AI into the QA process?",
`**Answer:** Pilot AI for test case generation from requirements, test data, flaky failure analysis, and defect summarization. Measure quality and time saved, keep human review, and set rules on data privacy and tool approval.

Tip: Governed adoption.`, 'D'],

["ERP", "How does leading QA for ERP projects differ?",
`**Answer:** Business-process focus, heavy involvement of business users in UAT, data migration testing, vendor update regression, and accounting verification.

Tip: Mention if you've done it.`, 'D'],

["Compliance", "How do you handle QA in regulated environments (FDA, SOX)?",
`**Answer:** Documented test plans and approvals, traceability, evidence retention, change control, and validation (e.g. computer system validation in GxP). Testing must be auditable.

Tip: Mention GAMP 5 for life sciences.`, 'D'],

["Coverage", "How do you know you've tested enough?",
`**Answer:** Exit criteria met, risk coverage achieved, defect discovery rate leveling off, critical paths automated and passing, and stakeholders accept residual risk.

Tip: "Enough" is a risk decision.`, 'D'],

["Accessibility", "How would you add accessibility testing to the process?",
`**Answer:** Define the WCAG target, add automated axe checks in CI, train testers on manual checks, include accessibility in definition of done, and audit key journeys periodically.

Tip: Legal and customer reasons.`, 'D'],

["Mobile", "How do you plan device coverage for mobile testing?",
`**Answer:** Use analytics to pick top devices and OS versions covering ~80–90% of users, mix real devices and cloud farms, and include older/low-end devices for performance.

Tip: Data-driven matrix.`, 'D'],

["Documentation", "What documentation should a QA team maintain?",
`**Answer:** Test strategy, plans per release, test cases or charters, regression suite, environment and data guides, defect guidelines, and test summary reports.

Tip: Lean but sufficient.`, 'B'],

["Culture", "How do you build a quality culture?",
`**Answer:** Shared ownership of quality, fast feedback, celebrating prevention not just bug finding, blameless postmortems, and leaders who value quality over speed when it matters.

Tip: Culture beats process.`, 'D'],

["Scenario", "You join a team with no test process. What do you do first?",
`**Answer:** Understand the product, risks and release pain; set up basic defect tracking and a smoke/regression checklist; agree definitions of severity; start risk-based testing of critical flows; then build automation and metrics.

Tip: Quick wins first.`, 'D'],

["Scenario", "Customer complaints spike after a release. What do you do?",
`**Answer:** Triage complaints to find the issue, support a rapid fix or rollback, analyze why testing missed it, and add tests and process changes.

Tip: Act fast, learn systematically.`, 'D'],

["Scenario", "Your team is overloaded with three parallel releases. What do you do?",
`**Answer:** Prioritize by business value and risk with product owners, apply risk-based scope, borrow capacity (developers testing, vendor support), automate, and communicate trade-offs openly.

Tip: Transparency about trade-offs.`, 'D'],

["Interview", "What would you ask about our QA organization?",
`**Answer:** "What's your release frequency?", "Where do most production defects come from?", "What's the automation coverage and stability?", "How are testers embedded in teams?"

Tip: Diagnostic questions.`, 'B'],

["Career", "Where do you see yourself in five years?",
`**Answer:** Leading quality engineering for a larger organization — strategy, platforms and people.

Tip: Ambition aligned with role.`, 'B'],

["Closing", "Why should we hire you as QA lead?",
`**Sample answer:** "I've built QA teams and processes that cut testing time while reducing production defects — 45% fewer escaped defects and regression from two weeks to three days. I lead with data and partner well with development and product."

Tip: Results plus leadership.`, 'B'],

["Shift-right", "What is shift-right testing?",
`**Answer:** Testing and monitoring in production — canary releases, feature flags, A/B tests, synthetic monitoring and real user monitoring — to catch issues that only appear with real users and data.

Tip: Complements shift-left.`, 'D'],

["Reviews", "Why are requirement reviews important?",
`**Answer:** Defects in requirements are cheapest to fix before coding. QA reviews catch ambiguity, missing edge cases and untestable requirements.

Tip: Example of a caught gap.`, 'B'],

["Standards", "Which testing standards or certifications are useful?",
`**Answer:** ISTQB (Foundation, Advanced Test Manager), ISO/IEC/IEEE 29119 for testing processes, and domain-specific standards (GAMP 5, IEC 62304 for medical devices).

Tip: Mention relevance to the domain.`, 'B'],

["Planning", "How do you plan regression for frequent releases?",
`**Answer:** Automate core regression in CI, run risk-based manual checks for changed areas, use feature flags, and keep the suite lean and prioritized.

Tip: Continuous over big-bang.`, 'D']
];

QB['qa-lead'] = (QB['qa-lead'] || []).concat([
["Planning", "How do you plan testing for a large program with several vendors?",
`**Answer:** One integrated test strategy and calendar, clear ownership by vendor and phase, shared defect tool and severity definitions, integrated environments with a schedule, joint triage, common exit criteria, and a program-level test manager coordinating readiness reporting.

Tip: Integration points are where multi-vendor programs fail.`, 'D']
]);
