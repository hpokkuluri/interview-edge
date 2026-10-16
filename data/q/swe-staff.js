// swe-staff — generated from src/swe-staff-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Staff / Principal Engineer. Format: [topic, question, answer, 'B'|'D']
QB['swe-staff'] = [
["Role", "What does a staff or principal engineer do?",
`**Why they ask:** staff roles are ambiguous; they want to see you understand the scope.

**Answer:** Technical leadership beyond a single team: setting technical direction for an area, solving the hardest cross-team problems, making and documenting key architectural decisions, raising engineering quality and standards, unblocking teams, mentoring senior engineers, and aligning technical strategy with business goals — mostly through influence, not authority. Common archetypes: tech lead, architect, solver, right hand to an engineering leader.

Tip: Say which archetype fits you, with an example.`, 'B'],

["Influence", "How do you drive a technical decision across teams without authority?",
`**Answer:** Understand each team's constraints, write a clear proposal (RFC/design doc) with problem, options and trade-offs, socialize early with key people one-on-one, incorporate feedback, use data or prototypes to reduce uncertainty, get explicit sign-off from decision-makers, and document the decision (ADR).

Tip: Pre-alignment before the big meeting.`, 'D'],

["Design Docs", "What makes a strong design document?",
`**Answer:** Context and problem, goals and non-goals, proposed design with diagrams, alternatives considered and why rejected, risks and mitigations, migration and rollout plan, observability and success metrics, open questions — concise enough to be read.

Tip: Non-goals prevent scope creep.`, 'B'],

["Architecture", "How do you evaluate architectural trade-offs?",
`**Answer:** Against explicit requirements and quality attributes (scalability, latency, availability, consistency, cost, security, operability, team cognitive load), considering reversibility — one-way vs two-way doors. Prefer simple solutions that meet needs, and make trade-offs explicit.

Tip: Reversibility framing.`, 'D'],

["Architecture", "When would you split a monolith?",
`**Answer:** When team coupling slows delivery, parts need independent scaling or release cycles, or domain boundaries are clear. First modularize the monolith with clear boundaries; extract services incrementally (strangler pattern), starting with well-understood, loosely coupled domains.

Tip: Modular monolith first.`, 'D'],

["Distributed Systems", "Explain the CAP theorem and its practical meaning.",
`**Answer:** In a network partition, a distributed system must choose between consistency (all nodes see the same data) and availability (every request gets a response). In practice, you choose per use case — e.g. payments favor consistency, social feeds favor availability. PACELC adds the latency/consistency trade-off when there's no partition.

Tip: Mention PACELC.`, 'D'],

["Distributed Systems", "How do you ensure data consistency across services?",
`**Answer:** Keep strongly consistent operations within one service's database; use sagas with compensation for cross-service workflows; the outbox pattern for reliable event publishing; idempotent consumers; and reconciliation jobs to detect drift.

Tip: Reconciliation as a safety net.`, 'D'],

["Reliability", "How do you improve reliability of a critical system?",
`**Answer:** Define SLOs from user journeys, measure error budgets, remove single points of failure, add timeouts, retries and circuit breakers, load test, chaos test, improve observability, run game days, and fix top incident causes from postmortems.

Tip: SLOs drive priorities.`, 'D'],

["Scale", "How would you prepare a system for 10× traffic?",
`**Answer:** Model load and find bottlenecks (DB, hot keys, external dependencies), make services stateless and horizontally scalable, add caching and read replicas, partition data, move work async, load test to target, and plan capacity and cost.

Tip: Find the first bottleneck.`, 'D'],

["Data", "How do you approach a large data migration with zero downtime?",
`**Answer:** Dual writes or change data capture to the new store, backfill historical data, verify with reconciliation and shadow reads, gradually shift reads behind flags, then cut writes, and keep rollback until confidence is high.

Tip: Shadow reads.`, 'D'],

["Quality", "How do you raise engineering quality across an organization?",
`**Answer:** Shared standards and paved roads (templates, libraries, CI pipelines), code review culture, testing strategy guidance, observability defaults, postmortem learning, and tech talks. Make the right way the easy way.

Tip: Paved roads.`, 'D'],

["Technical Debt", "How do you prioritize technical debt?",
`**Answer:** Quantify impact (incidents, delivery slowdown, developer time, risk), tie to business goals, propose investment with expected outcomes, and negotiate a capacity allocation with product leaders. Tackle debt that blocks strategic work first.

Tip: Business framing.`, 'D'],

["Strategy", "How do you build a technical strategy for an area?",
`**Answer:** Assess current state and pain points, understand business direction for 1–3 years, define principles and target architecture, identify key bets and a sequenced roadmap, and align stakeholders. Revisit regularly.

Tip: Diagnosis → guiding policy → actions.`, 'D'],

["Mentoring", "How do you mentor senior engineers toward staff?",
`**Answer:** Give them ownership of cross-team problems, coach on writing and influence, sponsor them in visible forums, review their designs, and give honest feedback on scope and impact.

Tip: Sponsorship, not just mentorship.`, 'B'],

["Incidents", "What is your role in major incidents?",
`**Answer:** Help diagnose complex issues, guide mitigation decisions, keep communication flowing, and afterward drive blameless postmortems focused on systemic fixes.

Tip: Systemic fixes.`, 'B'],

["Build vs Buy", "How do you decide build vs buy?",
`**Answer:** Buy when the capability isn't a differentiator and good products exist; build when it's core to your advantage or requirements are unique. Include total cost of ownership, integration, lock-in and team capacity.

Tip: Core vs context.`, 'D'],

["Security", "How do you embed security into architecture?",
`**Answer:** Threat modeling for new systems, secure defaults in templates, least privilege, secrets management, dependency hygiene, and partnering with security teams early.

Tip: Threat modeling.`, 'D'],

["Cost", "How do you think about cloud cost as a staff engineer?",
`**Answer:** Make cost a design constraint, provide visibility by service and team, right-size resources, choose pricing models wisely (reserved/savings plans), and design efficient architectures.

Tip: FinOps awareness.`, 'D'],

["Platform", "What makes a good internal developer platform?",
`**Answer:** Self-service golden paths for creating, deploying and operating services, built with developer feedback, measured by adoption and lead time, and treated as a product.

Tip: Platform as product.`, 'D'],

["Communication", "How do you communicate technical decisions to executives?",
`**Answer:** Start with business impact and options, quantify risk and cost, give a clear recommendation, and avoid jargon.

Tip: One-page summary.`, 'B'],

["Behavioral", "Tell me about the most impactful technical project you led.",
`**Sample answer:** "I led the migration of our payments platform from a monolith to three services with event-driven integration. We wrote the RFC, aligned four teams, migrated with dual writes and reconciliation, and cut payment-related incidents by 70% while enabling two new payment methods."

Tip: Scope, influence, outcome.`, 'B'],

["Behavioral", "Tell me about a time you were wrong about a technical decision.",
`**Sample answer:** "I pushed for a NoSQL store for a reporting feature; query needs grew relational and we struggled. We moved to Postgres. I now insist on validating access patterns before choosing data stores."

Tip: Learning.`, 'B'],

["Behavioral", "How do you handle disagreement with another senior engineer?",
`**Answer:** Focus on shared goals and data, write down positions and trade-offs, prototype if needed, escalate to a decision-maker if stuck, and commit once decided.

Tip: Disagree and commit.`, 'B'],

["Behavioral", "Tell me about unblocking a struggling team.",
`**Sample answer:** "A team kept missing deadlines due to a fragile build. I paired with them to cut build time from 40 to 8 minutes and introduced test parallelization; their delivery predictability recovered within a quarter."

Tip: Hands-on help.`, 'B'],

["Hiring", "How do you contribute to hiring?",
`**Answer:** Design and calibrate interviews (system design, coding), interview senior candidates, raise the bar, and help close strong candidates.

Tip: Calibration.`, 'B'],

["Observability", "What observability standards would you set?",
`**Answer:** Structured logging, OpenTelemetry tracing with correlation IDs, RED metrics per service, SLOs and alerts on symptoms, dashboards per service, and runbooks.

Tip: Standard defaults in templates.`, 'D'],

["APIs", "How do you govern APIs across many teams?",
`**Answer:** API style guide, design reviews, OpenAPI contracts, versioning and deprecation policies, an API catalog, and linting in CI.

Tip: Linting automates governance.`, 'D'],

["Testing", "What testing strategy would you recommend for microservices?",
`**Answer:** Strong unit and component tests, contract tests between services, a small set of end-to-end tests, testing in production with canaries, and observability.

Tip: Contract tests.`, 'D'],

["AI", "How would you lead adoption of AI in engineering?",
`**Answer:** Pilot AI coding tools with measurement (cycle time, quality), set guidelines (security, IP, review), build internal AI features with evaluation and guardrails, and train engineers.

Tip: Measured adoption.`, 'D'],

["AI", "How would you architect an LLM-powered product feature?",
`**Answer:** Retrieval-augmented generation over permission-filtered data, model gateway for provider abstraction, prompt and version management, evaluation pipelines, guardrails (input/output filtering), caching, cost and latency controls, observability, and human feedback loops.

Tip: Evaluation is key.`, 'D'],

["Performance", "How do you approach a system-wide performance problem?",
`**Answer:** Establish baselines and SLOs, use tracing to find the critical path, profile hot spots, fix the biggest contributors, and add regression detection in CI.

Tip: Data-driven.`, 'D'],

["Leadership", "How do you balance hands-on coding with leadership?",
`**Answer:** Code on critical or exploratory work (prototypes, hard bugs), avoid being on the critical path for routine tasks, and spend substantial time on design, reviews and mentoring.

Tip: Leverage.`, 'B'],

["Impact", "How do you measure your impact as a staff engineer?",
`**Answer:** Outcomes enabled — delivery speed, reliability, cost savings, engineers grown, decisions that held up — not lines of code.

Tip: Outcome focus.`, 'B'],

["Ambiguity", "How do you handle highly ambiguous problems?",
`**Answer:** Clarify the goal and constraints, break into hypotheses, run quick experiments or spikes, share findings early, and converge on a direction.

Tip: Reduce uncertainty incrementally.`, 'B'],

["Writing", "Why is writing important at staff level?",
`**Answer:** Writing scales influence — design docs, RFCs, strategy documents and postmortems reach people you can't meet and preserve decisions.

Tip: Writing as leadership.`, 'B'],

["Cross-functional", "How do you partner with product managers?",
`**Answer:** Early involvement in discovery, explaining technical options and costs, shaping roadmaps with technical enablers, and shared outcome metrics.

Tip: Partnership.`, 'B'],

["Migration", "How do you lead a large platform migration?",
`**Answer:** Clear rationale and success metrics, migration tooling and guides, early adopter teams, tracking dashboards, deprecation timelines, and support for teams during migration.

Tip: Make migration easy.`, 'D'],

["Standards", "How do you avoid becoming an 'architecture astronaut'?",
`**Answer:** Stay grounded in real problems and data, prototype, prefer simple solutions, and measure results in production.

Tip: Pragmatism.`, 'B'],

["Interview", "What would you ask the engineering leadership?",
`**Answer:** "What are the biggest technical risks?", "Where do teams struggle most?", "How are architectural decisions made?", "What would success look like for this role in a year?"

Tip: Diagnostic.`, 'B'],

["Career", "Why are you ready for staff/principal level?",
`**Sample answer:** "I've consistently led cross-team technical efforts with measurable outcomes, mentored senior engineers into leads, and shaped technical strategy aligned with business goals."

Tip: Evidence.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I solve hard cross-team problems, raise engineering quality at scale, and grow engineers — my last migration cut incidents 70% and enabled new revenue."

Tip: Proof.`, 'B'],

["System Design", "Design a globally distributed system with low latency.",
`**Answer:** Multi-region deployment with geo-routing, data partitioned by region where possible, read replicas or multi-region databases (Spanner, CockroachDB, DynamoDB global tables), CDN and edge caching, conflict resolution for multi-region writes, and regional failover.

Tip: Data residency considerations.`, 'D'],

["System Design", "How would you design an event-driven architecture?",
`**Answer:** Define domain events and schemas (schema registry), event broker (Kafka), producers using outbox, idempotent consumers, ordering guarantees per key, retention and replay, dead-letter handling, and observability across flows.

Tip: Schema evolution.`, 'D'],

["Developer Experience", "How do you improve developer productivity?",
`**Answer:** Measure (DORA, SPACE, developer surveys), reduce build and test times, improve local environments, automate toil, and remove process friction.

Tip: Measure before optimizing.`, 'D'],

["Culture", "How do you build a healthy engineering culture?",
`**Answer:** Psychological safety, blameless postmortems, clear standards, knowledge sharing, recognition of glue work, and leaders modeling behavior.

Tip: Recognize glue work.`, 'B'],

["Operations", "What is your view on 'you build it, you run it'?",
`**Answer:** Teams owning production improves quality and accountability, but needs good tooling, on-call support, sustainable rotations and platform help.

Tip: Sustainable on-call.`, 'D'],

["Vendors", "How do you evaluate a critical third-party technology?",
`**Answer:** Fit, reliability and SLAs, security and compliance, performance, cost, vendor viability, exit strategy, and proof of concept.

Tip: Exit strategy.`, 'D'],

["Documentation", "How do you keep architecture documentation useful?",
`**Answer:** Lightweight ADRs close to code, C4-model diagrams, updated during changes, and focused on decisions rather than exhaustive detail.

Tip: C4 model.`, 'B']
];

QB['swe-staff'] = (QB['swe-staff'] || []).concat([
["Prioritization", "How do you decide what to work on as a staff engineer?",
`**Answer:** Focus on problems with the highest leverage — those blocking multiple teams, posing serious risk, or enabling strategic goals — that others aren't positioned to solve. Revisit priorities with your manager and engineering leaders regularly.

Tip: Leverage and alignment.`, 'B'],
["Sponsorship", "What's the difference between mentoring and sponsoring?",
`**Answer:** Mentoring is advising and coaching someone. Sponsoring is actively using your influence to create opportunities for them — recommending them for high-visibility projects or promotions.

Tip: Staff engineers should do both.`, 'B']
]);
