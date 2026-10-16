// qa-dir — generated from src/qa-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Director of Quality Engineering. Format: [topic, question, answer, 'B'|'D']
QB['qa-dir'] = [
["Vision", "What is your vision for quality engineering?",
`**Why they ask:** directors set direction.

**Answer:** Quality is **everyone's job**; the QE organization provides platforms, standards, expertise and data. Shift-left (testability in design, automation in CI) and shift-right (observability, progressive delivery, fast rollback). Decisions driven by outcome metrics — escaped defects, change failure rate, customer-impacting incidents — and AI-assisted testing with clear governance.

Tip: End with what success looks like in 12–18 months.`, 'B'],

["Org Design", "How would you organize a QE organization of 40 people?",
`**Answer:** Embedded QE engineers/SDETs in product teams; a central QE platform team (frameworks, test infrastructure, environments, data, CI integration); centers of excellence for performance, security and accessibility; practice leads for standards and career development; and a clear career ladder (QA analyst → SDET → senior → staff/principal QE → managers).

Tip: Explain the reporting lines and why.`, 'D'],

["Org Design", "Should QA report to engineering or be independent?",
`**Answer:** Embedding QE within engineering aligns quality with delivery and avoids "throw it over the wall". A central QE leader still matters for standards, career growth and objective quality reporting. Many companies use a matrix: embedded day-to-day, central practice ownership.

Tip: Balanced answer.`, 'D'],

["Metrics", "How do you measure the value of QE to executives?",
`**Answer:** Escaped defects and customer-impacting incidents trend; DORA metrics (change failure rate, MTTR, deployment frequency, lead time); release predictability; cost of poor quality (rework, incidents, support); and productivity gains from automation.

Tip: Tie quality to revenue and customer trust.`, 'D'],

["Metrics", "Which metrics do you avoid?",
`**Answer:** Vanity metrics like number of test cases, bugs found per tester, or raw code coverage percentage — they drive the wrong behavior. Prefer outcome metrics.

Tip: Shows maturity.`, 'D'],

["Strategy", "How do you build a quality strategy for a company?",
`**Answer:** Assess current state (process, tools, skills, metrics, pain points), align with business goals (speed, reliability, compliance), define target state and principles, set a roadmap with milestones, invest in platforms and people, and measure progress.

Tip: Maturity model framing helps.`, 'D'],

["Transformation", "How would you move from manual-heavy to automation-first?",
`**Answer:** Baseline current effort and ROI, set goals, hire automation leaders, upskill manual testers (training, pairing, time allocation), automate high-value regression and APIs first, integrate with CI and quality gates, track progress (coverage, cycle time, flakiness), and manage the people side with care.

Tip: Reskilling is key to culture.`, 'D'],

["Transformation", "How do you handle resistance to change in QA?",
`**Answer:** Explain the why, involve people in designing the change, provide training and time, celebrate early adopters, and address fears (job security) honestly with growth paths.

Tip: People first.`, 'D'],

["Tooling", "How do you choose and standardize QE tools?",
`**Answer:** Criteria: fit for tech stack, maintainability, CI integration, reporting, cost, skills availability and vendor viability. Run proofs of concept, define a "golden path" with room for justified exceptions, and retire redundant tools.

Tip: Mention consolidation savings.`, 'B'],

["Platform", "What should a QE platform team build?",
`**Answer:** Shared frameworks and libraries, test data services, ephemeral environments, device/browser grids, reporting dashboards, flaky test detection, contract testing infrastructure, and CI templates.

Tip: Platform as a product for engineers.`, 'D'],

["Risk", "How do you balance speed and quality?",
`**Answer:** Risk-based quality gates, strong automation that removes the trade-off, progressive delivery (feature flags, canaries) to limit blast radius, fast rollback, and agreed error budgets with product.

Tip: "Speed and quality reinforce each other with the right practices."`, 'D'],

["Releases", "How do you make release decisions at scale?",
`**Answer:** Automated quality gates in pipelines, clear exit criteria, risk assessment for major releases, go/no-go with product and engineering, and progressive rollout with monitoring.

Tip: Automate the routine, focus humans on judgment.`, 'D'],

["Stakeholders", "How do you partner with engineering and product leaders?",
`**Answer:** Shared quality goals and OKRs, QE input in planning and architecture, transparent risk reporting, joint postmortems, and being solution-oriented.

Tip: Partner, not gatekeeper.`, 'B'],

["Budget", "How do you manage the QE budget?",
`**Answer:** Balance headcount, tools, infrastructure (device clouds, environments) and vendors; justify with ROI and risk reduction; review tool spend annually; and use co-sourcing for peaks.

Tip: Cost-conscious leadership.`, 'D'],

["Vendors", "When do you use outsourced testing?",
`**Answer:** For scale peaks, specialized skills (security, localization, accessibility audits), device coverage or 24/7 coverage. Keep strategy, architecture and critical knowledge in-house.

Tip: Strategic vs tactical.`, 'D'],

["Talent", "How do you hire and develop QE talent?",
`**Answer:** Hire for engineering skills and curiosity, practical interviews, clear career ladder, mentoring, learning budgets, rotations, and promoting from within.

Tip: Talent pipeline.`, 'B'],

["Talent", "How do you develop managers in your organization?",
`**Answer:** Leadership training, coaching, clear expectations, peer learning circles, and gradual scope increases.

Tip: Leaders develop leaders.`, 'B'],

["Incidents", "How should QE be involved in incidents and postmortems?",
`**Answer:** Participate in blameless postmortems, identify detection gaps, add tests or monitoring, track action items to completion, and share learnings broadly.

Tip: Every incident should improve the safety net.`, 'D'],

["Observability", "How does observability relate to quality?",
`**Answer:** Logs, metrics and traces let teams detect and diagnose issues quickly in production, validate releases, and understand real user behavior to focus testing. QE should help define SLOs and synthetic checks.

Tip: Quality extends into production.`, 'D'],

["AI", "What is your strategy for AI in testing?",
`**Answer:** Use cases: test generation, self-healing automation, test data synthesis, defect triage and clustering, log analysis. Also testing AI features themselves (evaluation, safety, drift). Governance: tool approval, data privacy, human review. Measure productivity and quality impact before scaling.

Tip: Both sides — AI for testing and testing AI.`, 'D'],

["AI", "How would you build an evaluation practice for AI products?",
`**Answer:** Define quality dimensions (accuracy, groundedness, safety, tone, latency, cost), build curated evaluation datasets, automated scoring with human calibration, regression evaluations on every model or prompt change, red-teaming, and production monitoring with user feedback.

Tip: Very current — strong differentiator.`, 'D'],

["Compliance", "How do you handle quality in regulated industries?",
`**Answer:** Risk-based validation (e.g. GAMP 5 for life sciences, computer software assurance), traceability, documented evidence, change control and audit readiness — while still using automation and CI.

Tip: Compliance and speed can coexist.`, 'D'],

["Security", "How does QE work with security teams?",
`**Answer:** Security testing in pipelines (SAST, SCA, DAST), threat modeling participation, authorization test suites, and joint ownership of vulnerability remediation tracking.

Tip: DevSecOps mindset.`, 'D'],

["Performance", "How do you ensure performance and reliability at scale?",
`**Answer:** Performance engineering CoE, capacity planning, CI performance checks, chaos engineering, SLOs and error budgets.

Tip: Reliability engineering partnership with SRE.`, 'D'],

["Data", "How do you use data to drive quality decisions?",
`**Answer:** Dashboards combining test results, defects, incidents, customer feedback and deployment data; root cause trends; and focusing investment where risk and impact are highest.

Tip: Data-informed prioritization.`, 'D'],

["Scenario", "Production incidents doubled last quarter. What do you do?",
`**Answer:** Analyze incidents by cause and area, identify patterns (e.g. config changes, a specific service), implement targeted fixes (tests, gates, monitoring), and report progress to leadership weekly.

Tip: Diagnosis before action.`, 'D'],

["Scenario", "The CTO wants to eliminate the QA team and have developers test. How do you respond?",
`**Answer:** Agree that developers should own testing, then propose a model where QE shifts to enablement — platforms, coaching, specialized testing (performance, security, accessibility, exploratory) — with data on risks if specialized skills disappear. Pilot and measure.

Tip: Evolve, don't defend.`, 'D'],

["Scenario", "You inherit a 10,000-test automation suite that takes 12 hours and is 20% flaky. What do you do?",
`**Answer:** Quarantine flaky tests, analyze value (coverage overlap, failures caught), delete or move low-value UI tests down to API/unit level, parallelize, add test impact analysis, and set targets (e.g. under 1 hour, flake rate under 1%).

Tip: Less can be more.`, 'D'],

["Scenario", "Leadership asks for 30% faster releases with the same quality. How?",
`**Answer:** Map the value stream to find delays (manual testing, environments, approvals), automate and parallelize testing, add ephemeral environments, risk-based testing, feature flags and canary releases.

Tip: Value stream mapping.`, 'D'],

["Behavioral", "Tell me about a quality transformation you led.",
`**Sample answer:** "I joined an organization releasing quarterly with frequent hotfixes. Over 18 months we embedded SDETs, built a test platform, and added CI quality gates and canary releases. We moved to weekly releases, change failure rate fell from 25% to 8%, and customer-reported defects dropped 50%."

Tip: Start, actions, results.`, 'B'],

["Behavioral", "Tell me about a difficult decision you made as a QE leader.",
`**Sample answer:** "I recommended delaying a major launch by two weeks due to data integrity defects. It was unpopular, but launching would have corrupted customer records. We fixed the issues and launched cleanly; leadership later cited it as the right call."

Tip: Courage with data.`, 'B'],

["Behavioral", "How have you influenced engineering culture?",
`**Sample answer:** "I introduced 'quality champions' in each team, made test results visible on team dashboards, and celebrated prevention. Within a year, developers wrote most of the automation."

Tip: Culture change examples.`, 'B'],

["Executive", "How do you present quality to the board or executive team?",
`**Answer:** Customer and business impact first (incidents, outages, satisfaction), trends in key metrics, top risks and investments needed, and progress on the quality roadmap.

Tip: Business framing.`, 'D'],

["Customer", "How do you bring the customer's voice into quality?",
`**Answer:** Analyze support tickets and reviews, include customer journeys in test design, beta programs, and track customer-reported defects as a top metric.

Tip: Outside-in quality.`, 'D'],

["Accessibility", "Why should accessibility be part of QE leadership?",
`**Answer:** It's a legal requirement in many markets, expands the customer base, and is a quality attribute. Build standards, automated checks, manual audits and training.

Tip: Leadership responsibility.`, 'D'],

["Platform", "What role do ephemeral environments play in your strategy?",
`**Answer:** Each change gets its own environment for testing, removing shared-environment bottlenecks and enabling parallel teams; balanced against infrastructure cost.

Tip: Mention cost controls.`, 'D'],

["Global", "How do you manage distributed QE teams across time zones?",
`**Answer:** Clear ownership by product area, overlap hours for collaboration, documentation, follow-the-sun testing where useful, and equal career opportunities.

Tip: Inclusion matters.`, 'D'],

["Maturity", "How do you assess QE maturity?",
`**Answer:** Across dimensions: strategy, automation, CI/CD integration, environments and data, non-functional testing, metrics, skills and culture — rate levels from ad hoc to optimized and set targets.

Tip: Maturity model gives a roadmap.`, 'D'],

["Interview", "What would you ask our CTO?",
`**Answer:** "How do you define quality success?", "What are the biggest quality pain points today?", "How much investment are you prepared to make in platforms and people?", "How do QE and engineering share accountability?"

Tip: Strategic questions.`, 'B'],

["Career", "Why do you want to be our Director of QE?",
`**Sample answer:** "You're scaling fast and quality is starting to slow you down — I've led that transition before, building platforms and culture that let teams release faster with fewer incidents."

Tip: Tie to their stage.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I've scaled QE organizations, cut change failure rates by two-thirds, and moved teams to weekly releases. I lead with data, build strong leaders, and partner closely with engineering and product."

Tip: Proof points.`, 'B'],

["Strategy", "How do you decide between building and buying test tools?",
`**Answer:** Buy when a mature tool meets needs at reasonable cost; build when requirements are unique or a competitive advantage. Consider maintenance cost — built tools are products to maintain.

Tip: TCO thinking.`, 'D'],

["Strategy", "What is your view on testing in production?",
`**Answer:** Essential complement, not replacement: synthetic monitoring, canaries, feature flags and A/B tests with strong observability and rollback. Pre-production testing remains critical for known risks.

Tip: Balanced.`, 'D'],

["People", "How do you retain top QE engineers?",
`**Answer:** Challenging work, technical career track equal to management, recognition, learning opportunities, competitive pay and good managers.

Tip: Technical ladder matters.`, 'B'],

["Governance", "How do you set quality standards without slowing teams?",
`**Answer:** Lightweight, automated standards in CI templates; guardrails not gates; team autonomy within the golden path; and regular review of standards' value.

Tip: Automate governance.`, 'D'],

["Mergers", "How do you integrate QE teams after an acquisition?",
`**Answer:** Assess practices and tools, keep what works, align on standards and platforms over time, protect key talent, and integrate gradually.

Tip: Respect and alignment.`, 'D'],

["Cost of Quality", "What is cost of quality?",
`**Answer:** Prevention costs (training, reviews) + appraisal costs (testing) + internal failure costs (rework) + external failure costs (incidents, support, lost customers). Investing in prevention lowers total cost.

Tip: Classic framework for executives.`, 'D'],

["Future", "Where is quality engineering going in five years?",
`**Answer:** AI-assisted testing at scale, evaluations for AI systems, quality built into platforms, testing in production with strong observability, and QE engineers as quality coaches and platform builders.

Tip: Forward-looking.`, 'D']
];

QB['qa-dir'] = (QB['qa-dir'] || []).concat([
["Strategy", "How do you set quality OKRs?",
`**Answer:** Objectives tied to business outcomes (e.g. "Customers trust every release"), with measurable key results: change failure rate below 10%, customer-reported P1 defects down 40%, PR feedback under 10 minutes, flake rate under 1%. Review quarterly with engineering leadership.

Tip: Outcome-based key results.`, 'D'],
["People", "How do you build a technical career ladder for QE?",
`**Answer:** Define levels with expectations for scope, technical depth, influence and leadership — from QA engineer to staff/principal QE — parallel to the management track, with clear promotion criteria and examples.

Tip: Retains strong ICs.`, 'D']
]);
