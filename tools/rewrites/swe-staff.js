// Rewritten Software Engineering — Staff / Principal Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix swe-staff-).
module.exports = {

'How do you drive a technical decision across teams without authority?':
`**Why they ask:** influence is the core staff skill.

**Answer:**
"I start by understanding each team's constraints, then write an RFC with the problem, options and trade-offs. Before any big meeting I socialize it one-on-one with the key people, fold in their feedback, and use data or a prototype where there's uncertainty. Then explicit sign-off from the decision-makers and an ADR so it sticks. When we standardized on one event broker across four teams, the decision meeting took 30 minutes because every objection had already been heard and addressed."

Tip: Pre-alignment before the big meeting.`,

'What makes a strong design document?':
`**Why they ask:** writing is how staff engineers scale.

**Answer:**
"Context and problem, goals and non-goals, the proposed design with diagrams, alternatives considered and why they were rejected, risks and mitigations, migration and rollout plan, observability and success metrics, and open questions — short enough that people actually read it. Non-goals matter most for preventing scope creep: 'this does not cover multi-region' ends a lot of debates."

Tip: Non-goals prevent scope creep.`,

'How do you evaluate architectural trade-offs?':
`**Why they ask:** judgment.

**Answer:**
"Against explicit requirements and quality attributes — scalability, latency, availability, consistency, cost, security, operability and the team's cognitive load. I also ask about reversibility: a two-way-door decision like a library choice can be made fast; a one-way door like a primary database deserves more rigor. And I prefer the simplest design that meets the needs, with trade-offs written down."

Tip: Reversibility framing.`,

'When would you split a monolith?':
`**Why they ask:** avoiding fashionable mistakes.

**Answer:**
"When team coupling is slowing delivery, when parts need independent scaling or release cycles, and when domain boundaries are clear. First I'd modularize the monolith with enforced boundaries, then extract services incrementally with the strangler pattern, starting with a well-understood, loosely coupled domain like notifications rather than the core order model."

Tip: Modular monolith first.`,

'Explain the CAP theorem and its practical meaning.':
`**Why they ask:** distributed systems depth.

**Answer:**
"During a network partition, a distributed system must choose between consistency — every node returns the same latest data — and availability — every request gets a response. In practice you choose per use case: a payment balance favors consistency and rejects writes it can't confirm; a social feed favors availability and tolerates slightly stale data. PACELC adds that even without a partition, you trade latency against consistency."

Tip: Mention PACELC.`,

'How do you ensure data consistency across services?':
`**Why they ask:** microservice correctness.

**Answer:**
"Keep strongly consistent operations inside one service's database. For workflows spanning services, sagas with compensating actions; the outbox pattern so events are published reliably with the data change; idempotent consumers; and reconciliation jobs that compare systems nightly and flag drift. Reconciliation is the safety net that catches what the design missed."

Tip: Reconciliation as a safety net.`,

'How do you improve reliability of a critical system?':
`**Why they ask:** production leadership.

**Answer:**
"Define SLOs from user journeys and track error budgets, remove single points of failure, add timeouts, retries and circuit breakers, load test and chaos test, improve observability, run game days, and fix the top incident causes from postmortems. The SLOs decide priorities — we spend reliability effort where users actually feel it."

Tip: SLOs drive priorities.`,

'How would you prepare a system for 10× traffic?':
`**Why they ask:** scaling strategy.

**Answer:**
"Model the expected load and find the first bottleneck — usually the database, a hot key, or an external dependency with rate limits. Make services stateless so they scale horizontally, add caching and read replicas, partition data, move work to async queues, load test to the 10x target, and plan capacity and cost. Every fix reveals the next bottleneck, so it's iterative."

Tip: Find the first bottleneck.`,

'How do you approach a large data migration with zero downtime?':
`**Why they ask:** high-risk execution.

**Answer:**
"Start dual writes or change data capture into the new store, backfill historical data, verify with reconciliation and shadow reads — reading from both and comparing results without serving the new one — then shift reads gradually behind flags, then cut over writes, keeping rollback available until we're confident. On a 2-billion-row migration, shadow reads caught a timezone bug before any customer saw it."

Tip: Shadow reads.`,

'How do you raise engineering quality across an organization?':
`**Why they ask:** org-wide impact.

**Answer:**
"Shared standards delivered as paved roads — service templates, libraries, CI pipelines with testing and security built in — a healthy code review culture, testing strategy guidance, observability defaults, learning from postmortems, and tech talks. Make the right way the easy way and most teams take it."

Tip: Paved roads.`,

'How do you prioritize technical debt?':
`**Why they ask:** business-aligned engineering.

**Answer:**
"Quantify impact — incidents, delivery slowdown, developer hours, risk — tie it to business goals, propose an investment with expected outcomes, and negotiate a capacity allocation with product leadership. 'This flaky build costs 40 engineer-hours a week' gets funded; 'the code is ugly' doesn't. Debt that blocks strategic work goes first."

Tip: Business framing.`,

'How do you build a technical strategy for an area?':
`**Why they ask:** strategic thinking.

**Answer:**
"Diagnose the current state and pain points, understand where the business is heading over one to three years, set guiding principles and a target architecture, then identify a few key bets in a sequenced roadmap and align stakeholders. And revisit it regularly — a strategy nobody updates is a historical document."

Tip: Diagnosis → guiding policy → actions.`,

'How do you mentor senior engineers toward staff?':
`**Why they ask:** growing leaders.

**Answer:**
"Give them ownership of a cross-team problem, coach their writing and influence, sponsor them in visible forums, review their designs, and give honest feedback on scope and impact. Sponsorship matters most — putting their name forward for the project, not just advising them."

Tip: Sponsorship, not just mentorship.`,

'What is your role in major incidents?':
`**Why they ask:** technical leadership under pressure.

**Answer:**
"Help diagnose the hard parts, guide mitigation decisions — like whether to fail over or roll back — keep communication flowing, and afterward drive a blameless postmortem focused on systemic fixes rather than patching the one symptom."

Tip: Systemic fixes.`,

'How do you decide build vs buy?':
`**Why they ask:** strategic resource use.

**Answer:**
"Buy when the capability isn't a differentiator and good products exist — auth, feature flags, observability. Build when it's core to our competitive advantage or our requirements are genuinely unique. I include total cost of ownership, integration effort, lock-in and team capacity — a 'free' internal tool still costs two engineers forever."

Tip: Core vs context.`,

'How do you embed security into architecture?':
`**Why they ask:** security leadership.

**Answer:**
"Threat modeling for new systems, secure defaults in templates, least privilege, secrets management, dependency hygiene, and bringing the security team in at design time rather than at launch."

Tip: Threat modeling.`,

'How do you think about cloud cost as a staff engineer?':
`**Why they ask:** cost is an engineering concern.

**Answer:**
"Cost is a design constraint like latency. I push for visibility by service and team, right-sizing, smart pricing models like savings plans, and efficient architectures. One design review moved a chatty cross-region integration in-region and saved about $40K a month in data transfer."

Tip: FinOps awareness.`,

'What makes a good internal developer platform?':
`**Why they ask:** platform thinking.

**Answer:**
"Self-service golden paths for creating, deploying and operating services, built from developer feedback, measured by adoption and lead time, and run as a product with a roadmap and support."

Tip: Platform as product.`,

'How do you communicate technical decisions to executives?':
`**Why they ask:** executive communication.

**Answer:**
"Start with business impact and options, quantify risk and cost, give a clear recommendation, no jargon — one page. 'Option B costs one extra quarter but removes the outage risk behind last year's two major incidents. I recommend B.'"

Tip: One-page summary.`,

'Tell me about the most impactful technical project you led.':
`**Why they ask:** proof at staff scope.

**Answer:**
"I led the migration of our payments platform from a monolith to three services with event-driven integration. I wrote the RFC, aligned four teams, and we migrated with dual writes and reconciliation. Payment-related incidents dropped 70%, and the new design let us launch two new payment methods that had been blocked for a year."

Tip: Scope, influence, outcome.`,

'Tell me about a time you were wrong about a technical decision.':
`**Why they ask:** humility and learning.

**Answer:**
"I pushed for a NoSQL store for a reporting feature. The query needs turned relational and we struggled with joins and aggregations, so we moved to Postgres. Now I insist on validating access patterns before choosing a data store."

Tip: Learning.`,

'How do you handle disagreement with another senior engineer?':
`**Why they ask:** collaboration among peers.

**Answer:**
"Focus on shared goals and data, write down both positions and their trade-offs, prototype if it's close, escalate to a decision-maker if we're stuck, and commit fully once it's decided."

Tip: Disagree and commit.`,

'Tell me about unblocking a struggling team.':
`**Why they ask:** hands-on leverage.

**Answer:**
"A team kept missing deadlines because of a fragile 40-minute build. I paired with them to cut it to 8 minutes and introduced test parallelization. Their delivery predictability recovered within a quarter."

Tip: Hands-on help.`,

'How do you contribute to hiring?':
`**Why they ask:** organizational contribution.

**Answer:**
"Design and calibrate interviews — system design and coding — interview senior candidates, raise the bar consistently, and help close strong candidates by talking about the technical challenges honestly."

Tip: Calibration.`,

'What observability standards would you set?':
`**Why they ask:** operational maturity.

**Answer:**
"Structured logging, OpenTelemetry tracing with correlation IDs, RED metrics per service, SLOs with symptom-based alerts, a dashboard per service, and runbooks — all as defaults baked into the service template, so teams get them without thinking."

Tip: Standard defaults in templates.`,

'How do you govern APIs across many teams?':
`**Why they ask:** consistency at scale.

**Answer:**
"An API style guide, design reviews for public or shared APIs, OpenAPI contracts, versioning and deprecation policies, an API catalog, and linting in CI with a tool like Spectral so most of the style guide enforces itself."

Tip: Linting automates governance.`,

'What testing strategy would you recommend for microservices?':
`**Why they ask:** quality at scale.

**Answer:**
"Strong unit and component tests per service, contract tests between services so a provider can't break a consumer unknowingly, a small set of end-to-end tests, testing in production with canaries, and good observability. Big end-to-end suites across 30 services become slow and flaky."

Tip: Contract tests.`,

'How would you lead adoption of AI in engineering?':
`**Why they ask:** current leadership topic.

**Answer:**
"Pilot AI coding tools with measurement — cycle time, review load, defect rates — set guidelines on security, IP and review, build internal AI features with evaluation and guardrails, and train engineers. Measured adoption beats hype or bans."

Tip: Measured adoption.`,

'How would you architect an LLM-powered product feature?':
`**Why they ask:** current architecture challenges.

**Answer:**
"Retrieval-augmented generation over permission-filtered data, a model gateway that abstracts providers and handles fallback, prompt and version management, evaluation pipelines run on every change, input and output guardrails, caching, cost and latency controls, observability, and human feedback loops. Evaluation is the piece most teams skip and regret."

Tip: Evaluation is key.`,

'How do you approach a system-wide performance problem?':
`**Why they ask:** data-driven method.

**Answer:**
"Establish baselines and SLOs, use tracing to find the critical path, profile the hot spots, fix the biggest contributors first, and add performance regression checks in CI so we don't slide back."

Tip: Data-driven.`,

'How do you balance hands-on coding with leadership?':
`**Why they ask:** staff engineer operating model.

**Answer:**
"I code on critical or exploratory work — prototypes, hard bugs, a tricky migration tool — but stay off the critical path for routine features so I'm not a bottleneck. Most of my time goes to design, reviews and mentoring, which multiplies output more than my own commits."

Tip: Leverage.`,

'How do you measure your impact as a staff engineer?':
`**Why they ask:** self-awareness.

**Answer:**
"Outcomes I enabled — faster delivery, better reliability, cost savings, engineers I helped grow, and decisions that held up a year later — not lines of code."

Tip: Outcome focus.`,

'How do you handle highly ambiguous problems?':
`**Why they ask:** staff problems are ambiguous.

**Answer:**
"Clarify the goal and constraints, break the problem into hypotheses, run quick spikes or experiments, share findings early, and converge on a direction — reducing uncertainty step by step rather than waiting for a perfect plan."

Tip: Reduce uncertainty incrementally.`,

'Why is writing important at staff level?':
`**Why they ask:** leadership through writing.

**Answer:**
"Writing scales influence: design docs, RFCs, strategy documents and postmortems reach people I'll never meet and preserve the reasoning behind decisions long after I've moved on."

Tip: Writing as leadership.`,

'How do you partner with product managers?':
`**Why they ask:** cross-functional leadership.

**Answer:**
"Join discovery early, explain technical options and their costs, shape roadmaps to include technical enablers, and share outcome metrics so we're aiming at the same thing."

Tip: Partnership.`,

'How do you lead a large platform migration?':
`**Why they ask:** execution at scale.

**Answer:**
"A clear rationale and success metrics, migration tooling and guides — ideally automated codemods — early adopter teams, a tracking dashboard, deprecation timelines, and hands-on support. The easier the migration, the faster it finishes."

Tip: Make migration easy.`,

"How do you avoid becoming an 'architecture astronaut'?":
`**Why they ask:** pragmatism.

**Answer:**
"Stay grounded in real problems and data, prototype instead of theorizing, prefer simple solutions, and measure results in production."

Tip: Pragmatism.`,

'What would you ask the engineering leadership?':
`**Why they ask:** diagnostic curiosity.

**Answer:**
"What are the biggest technical risks? Where do teams struggle most? How are architectural decisions made today? What would success look like for this role in a year?"

Tip: Diagnostic.`,

'Why are you ready for staff/principal level?':
`**Why they ask:** readiness.

**Answer:**
"I've consistently led cross-team technical efforts with measurable outcomes, mentored senior engineers into leads, and shaped technical strategy aligned with business goals."

Tip: Evidence.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I solve hard cross-team problems, raise engineering quality at scale, and grow engineers — my last migration cut incidents 70% and enabled new revenue."

Tip: Proof.`,

'Design a globally distributed system with low latency.':
`**Why they ask:** advanced system design.

**Answer:**
"Multi-region deployment with geo-routing, data partitioned by region where possible so most reads and writes stay local, multi-region databases like Spanner, CockroachDB or DynamoDB global tables where data must be global, CDN and edge caching, a conflict resolution strategy for multi-region writes, and regional failover. Data residency rules may force some data to stay in-region."

Tip: Data residency considerations.`,

'How would you design an event-driven architecture?':
`**Why they ask:** architecture depth.

**Answer:**
"Define domain events and their schemas in a schema registry, use Kafka as the broker, have producers publish via the outbox pattern, make consumers idempotent, keep ordering per key — such as per order ID — set retention for replay, handle dead letters, and trace flows end to end. Schema evolution rules — backward-compatible changes only — prevent consumers breaking."

Tip: Schema evolution.`,

'How do you improve developer productivity?':
`**Why they ask:** org-level leverage.

**Answer:**
"Measure first — DORA, SPACE and developer surveys — then reduce build and test times, improve local environments, automate toil and remove process friction. Surveys often point somewhere unexpected, like waiting days for environment access."

Tip: Measure before optimizing.`,

'How do you build a healthy engineering culture?':
`**Why they ask:** cultural leadership.

**Answer:**
"Psychological safety, blameless postmortems, clear standards, knowledge sharing, recognizing glue work like onboarding and documentation, and senior people modeling the behavior they expect."

Tip: Recognize glue work.`,

"What is your view on 'you build it, you run it'?":
`**Why they ask:** operating model views.

**Answer:**
"Teams owning production improves quality and accountability, but only with good tooling, on-call support, sustainable rotations and platform help. Without those it just burns people out."

Tip: Sustainable on-call.`,

'How do you evaluate a critical third-party technology?':
`**Why they ask:** risk judgment.

**Answer:**
"Fit, reliability and SLAs, security and compliance, performance, cost, vendor viability, an exit strategy, and a proof of concept on our real workload."

Tip: Exit strategy.`,

'How do you keep architecture documentation useful?':
`**Why they ask:** documentation that lives.

**Answer:**
"Lightweight ADRs next to the code, C4-model diagrams at the context and container levels, updated as part of changes, focused on decisions rather than exhaustive detail nobody maintains."

Tip: C4 model.`,

'How do you decide what to work on as a staff engineer?':
`**Why they ask:** prioritization at staff level.

**Answer:**
"The highest-leverage problems: ones blocking multiple teams, posing serious risk, or enabling strategic goals — and that nobody else is positioned to solve. I revisit priorities with my manager and engineering leaders regularly."

Tip: Leverage and alignment.`,

"What's the difference between mentoring and sponsoring?":
`**Why they ask:** leadership maturity.

**Answer:**
"Mentoring is advising and coaching someone. Sponsoring is spending your own influence to create opportunities for them — recommending them for a high-visibility project or advocating in promotion discussions. Staff engineers should do both."

Tip: Staff engineers should do both.`,

};
