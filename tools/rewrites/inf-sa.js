// Rewritten Infrastructure — Solutions Architect (Why they ask → Answer → Tip). Apply with rewrite.js (prefix inf-sa-).
module.exports = {

'How do you gather requirements for a new solution?':
`**Why they ask:** good architecture starts with good requirements.

**Answer:**
"Stakeholder interviews and workshops, a look at the current state, business goals and success metrics, then functional requirements — what it must do — and non-functional requirements — performance, availability, security, compliance, scalability and cost. Plus constraints like budget, timeline, team skills and existing technology, and assumptions, all documented and agreed. NFRs are the ones most often missed: 'it should be fast' becomes '95% of searches under 2 seconds at 500 concurrent users.'"

Tip: NFRs are often missed.`,

'Walk me through how you design a solution.':
`**Why they ask:** your design process.

**Answer:**
"Clarify goals and requirements, identify options — build, buy or SaaS — and score them against criteria like fit, cost, risk, time and skills. Then design the architecture: components, integrations, data flows, security and deployment. Validate risky parts with a proof of concept, estimate cost and effort, record decisions as ADRs, and review with stakeholders. The output is always options with trade-offs and a recommendation, not a single take-it-or-leave-it design."

Tip: Options and trade-offs.`,

'Design a scalable e-commerce platform.':
`**Why they ask:** a classic design exercise.

**Answer:**
"A CDN and WAF at the edge; a stateless web and API tier on autoscaling containers; catalog, cart, orders and payments as services or modules in a modular monolith; a relational database for orders with read replicas; Redis for sessions and hot catalog data; OpenSearch for search; queues for order processing and notifications so checkout stays fast; a tokenized payment provider integration to keep card data out of scope; object storage for images; observability throughout; and multi-AZ deployment. For Black Friday, pre-scale, load test at 10x, and cache aggressively."

Tip: Mention peak-event scaling, such as Black Friday.`,

'How do you decide between build, buy or SaaS?':
`**Why they ask:** strategic judgment.

**Answer:**
"Buy or SaaS when the capability isn't a differentiator, mature products exist and speed matters — HR, payroll, ticketing. Build when it's core to competitive advantage or nothing fits — like a pricing engine that is the business. I compare total cost of ownership over three to five years, integration effort, customization limits, lock-in and support."

Tip: Differentiation drives build.`,

'What integration patterns do you use?':
`**Why they ask:** integration design.

**Answer:**
"Synchronous REST or GraphQL APIs, asynchronous messaging and events — Kafka, SQS and SNS, Service Bus — file-based batch, iPaaS like MuleSoft, Boomi or Oracle Integration, API gateways, and change data capture. I choose by latency, coupling, volume and reliability. If the order system shouldn't fail when the warehouse system is down, that's an event, not a synchronous call."

Tip: Prefer async for loose coupling.`,

'How do you make integrations reliable?':
`**Why they ask:** integrations fail in production.

**Answer:**
"Idempotent operations so retries are safe, retries with backoff, dead-letter queues for poison messages, monitoring and alerts, correlation IDs for tracing a transaction across systems, versioned contracts, and reconciliation reports that compare counts and totals daily between source and target."

Tip: Idempotency.`,

'How do you design for high availability?':
`**Why they ask:** resilience design.

**Answer:**
"Remove single points of failure, spread redundancy across availability zones, use health checks with automatic failover, stateless services, replicated data stores, graceful degradation and tested recovery — all sized to the target. 99.9% allows about 8.8 hours of downtime a year; 99.99% only about 53 minutes, which usually means multi-region and a much higher cost."

Tip: Know the downtime numbers.`,

'How do you design for scalability?':
`**Why they ask:** growth readiness.

**Answer:**
"Horizontal scaling of stateless components, caching, database read replicas and partitioning or sharding, asynchronous processing, CDNs, and autoscaling on meaningful metrics — confirmed with load testing. I find the first bottleneck before optimizing anything; it's usually the database."

Tip: Find the bottleneck first.`,

'How do you design for security?':
`**Why they ask:** security by design.

**Answer:**
"A threat model early, identity with SSO, least privilege, encryption in transit and at rest, secrets management, network segmentation, input validation, logging and monitoring, and compliance requirements built in from the start rather than bolted on before go-live."

Tip: Security by design.`,

'How do you estimate solution cost?':
`**Why they ask:** financial credibility.

**Answer:**
"Infrastructure from cloud calculators with realistic usage, licensing and SaaS fees, implementation effort, ongoing support and operations, and contingency — presented as total cost of ownership over three to five years with every assumption written down, so if usage doubles, everyone can see why the bill did."

Tip: State assumptions.`,

'How do you choose between cloud service models?':
`**Why they ask:** cloud judgment.

**Answer:**
"IaaS for control or lift-and-shift, PaaS and serverless to cut operations and deliver faster, SaaS for commodity capabilities. I balance control, portability, skills and cost — managed services remove a lot of patching and on-call toil."

Tip: Managed services reduce toil.`,

'Monolith vs microservices?':
`**Why they ask:** avoiding fashionable over-engineering.

**Answer:**
"A modular monolith is simpler to build, test and deploy and is often best early on. Microservices allow independent scaling and deployment for large teams, but add distributed complexity — networking, data consistency, observability. I decide by team size and domain complexity; for a team of eight, a modular monolith is usually right."

Tip: A modular monolith is a valid answer.`,

'When is event-driven architecture a good fit?':
`**Why they ask:** pattern judgment.

**Answer:**
"When multiple systems need to react to business events — an order placed triggers billing, fulfillment and loyalty points — when loose coupling and scale matter, and when processing needs to be near real time. The trade-offs are eventual consistency, harder debugging and the need for schema governance."

Tip: Trade-offs.`,

'How do you choose a database for a solution?':
`**Why they ask:** data architecture.

**Answer:**
"By access patterns and consistency needs: relational for transactions and complex queries, document stores for flexible schemas, key-value for caching and simple lookups, wide-column for massive write volumes, graph for relationship queries, time-series for metrics, and vector databases for AI similarity search."

Tip: Access patterns.`,

'What architecture documentation do you produce?':
`**Why they ask:** communication artifacts.

**Answer:**
"Context and container diagrams following the C4 model, integration and data flow diagrams, deployment views, the NFRs, architecture decision records, risks and assumptions, and cost estimates."

Tip: C4 model.`,

'How do you get architecture approved?':
`**Why they ask:** governance navigation.

**Answer:**
"Align early with enterprise architecture standards and the security and data teams, present options and trade-offs at the review board, document decisions and exceptions, and follow up on any conditions. Nothing at the board should be a surprise — I pre-review with the key reviewers."

Tip: No surprises at the review board.`,

'How do you handle conflicting stakeholder requirements?':
`**Why they ask:** stakeholder management.

**Answer:**
"Clarify the underlying goals, quantify the trade-offs in cost, time and risk, offer options, and escalate the decision to the right owner with my recommendation. Often both stakeholders want the same outcome expressed differently."

Tip: Options with a recommendation.`,

'How do you stay involved during delivery?':
`**Why they ask:** follow-through.

**Answer:**
"Regular design reviews, answering team questions quickly, adjusting the design as new information emerges, reviewing critical code or configuration, tracking architecture risks, and validating NFRs through performance and security testing. Designs that are thrown over the wall rarely survive contact with delivery."

Tip: Don't throw designs over the wall.`,

'How do you plan an application migration to the cloud?':
`**Why they ask:** migration methodology.

**Answer:**
"Assess and categorize each application with the 7 Rs — retire, retain, rehost, relocate, replatform, repurchase, refactor — map dependencies, plan migration waves, design the landing zone, migrate and test, cut over, then optimize cost and performance."

Tip: The 7 Rs.`,

'How would you design a generative AI solution for internal knowledge search?':
`**Why they ask:** current architecture demand.

**Answer:**
"A RAG architecture: ingest documents with their access-control metadata, chunk and embed them into a vector store, retrieve relevant chunks filtered by the user's permissions, generate answers with an LLM, show citations so users can verify, add guardrails, evaluate answer quality against a test set, monitor cost, and log usage. Permission-aware retrieval is non-negotiable — the assistant must never surface a document the user can't open."

Tip: Permission-aware retrieval.`,

'How do you run a proof of concept?':
`**Why they ask:** de-risking.

**Answer:**
"Agree success criteria and scope up front, time-box it — two to four weeks — set up data and environments, demo the key scenarios, document results against the criteria, and recommend next steps. Without agreed criteria, a PoC becomes an endless demo."

Tip: Success criteria first.`,

"How do you handle a customer requirement your product can't meet?":
`**Why they ask:** integrity.

**Answer:**
"Be honest, understand the underlying need, propose workarounds, partner solutions or roadmap items, and never overpromise. Customers remember the architect who told them the truth."

Tip: Trust over a quick win.`,

'How do you manage architecture risks?':
`**Why they ask:** risk management.

**Answer:**
"Identify them early — new technology, integration complexity, performance unknowns — mitigate with spikes and proofs of concept, track them in a risk log with owners, and communicate them openly to stakeholders."

Tip: Spikes for unknowns.`,

'How do you explain a technical design to executives?':
`**Why they ask:** executive communication.

**Answer:**
"Business outcome first, one simple diagram, cost, timeline, risks and the decisions needed — technical detail in the appendix. 'This lets us launch in two new countries in Q3 for $400K, with one risk around the tax integration.'"

Tip: Outcome first.`,

'How do you integrate a new SaaS app with ERP systems?':
`**Why they ask:** enterprise integration.

**Answer:**
"Define master data ownership first — which system owns customers, items, prices — then integration patterns through APIs or iPaaS, identity with SSO and SCIM, data mapping and transformations, error handling and reconciliation, and security and compliance reviews."

Tip: Master data ownership.`,

'Tell me about a solution you designed.':
`**Why they ask:** proof.

**Answer:**
"I designed a customer portal integrating with Oracle ERP through an API layer and event queues. It handled 10x seasonal peaks without issues and cut support calls 30%."

Tip: Outcome.`,

'Tell me about a design decision you got wrong.':
`**Why they ask:** self-awareness.

**Answer:**
"I chose microservices for a small team's product. The operational overhead slowed them down, so we consolidated into a modular monolith. Now I match architecture to team size and maturity."

Tip: Learning.`,

'Tell me about influencing without authority.':
`**Why they ask:** influence.

**Answer:**
"Teams were building duplicate integrations to the same ERP. I proposed a shared API layer, proved reuse savings with a pilot, and got buy-in from three teams."

Tip: Show value.`,

'Which certifications are valuable?':
`**Why they ask:** credentials.

**Answer:**
"AWS Solutions Architect Associate and Professional, Azure Solutions Architect Expert, Google Professional Cloud Architect, TOGAF, and domain certifications such as Salesforce or Oracle."

Tip: Professional level.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward enterprise architect or principal architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn business needs into practical, cost-aware solutions and stay with teams through delivery. My designs scale, integrate cleanly and land on budget."

Tip: Proof.`,

'How do you use caching effectively?':
`**Why they ask:** performance design.

**Answer:**
"Cache read-heavy, rarely changing data — a CDN for static content, Redis for sessions and lookups — with clear TTLs and invalidation, never caching user-specific or sensitive data under shared keys, and protecting against stampedes when popular keys expire."

Tip: Invalidation strategy.`,

'How do you design good APIs?':
`**Why they ask:** interface design.

**Answer:**
"Resource-oriented REST, consistent naming, versioning, pagination, a clear error format, idempotency keys on writes so a retried payment doesn't charge twice, OAuth authentication, rate limits, and OpenAPI documentation."

Tip: Idempotency keys.`,

'What resilience patterns do you know?':
`**Why they ask:** robust design.

**Answer:**
"Retries with exponential backoff and jitter, circuit breakers, bulkheads, timeouts, fallbacks, queues for load leveling, and graceful degradation — if recommendations fail, show bestsellers instead of an error."

Tip: Circuit breakers.`,

'How do you handle transactions across services?':
`**Why they ask:** distributed consistency.

**Answer:**
"Avoid distributed transactions. Use sagas — choreographed or orchestrated — with compensating actions, the outbox pattern so events are published reliably with the data change, and idempotent consumers."

Tip: Outbox pattern.`,

'What observability should every solution include?':
`**Why they ask:** operability.

**Answer:**
"Structured logs with correlation IDs, metrics for latency, errors, throughput and saturation, distributed tracing, health checks, and dashboards with alerts tied to SLOs."

Tip: Correlation IDs.`,

'The business wants a solution live in 3 months but the scope is large. What do you do?':
`**Why they ask:** pragmatic delivery.

**Answer:**
"Define an MVP of the highest-value features, phase the rest, use SaaS or managed services to move faster, and make the trade-offs and risks explicit to the sponsor."

Tip: MVP and phases.`,

'A legacy system has no APIs. How do you integrate with it?':
`**Why they ask:** real-world constraints.

**Answer:**
"Options: careful database-level integration, file exports, change data capture, RPA as a last resort, or wrapping it with an API layer so consumers don't depend on the legacy internals — while planning modernization."

Tip: Wrap and modernize.`,

'How do you think about vendor lock-in?':
`**Why they ask:** balanced judgment.

**Answer:**
"Accept lock-in where the value is high, like managed services that remove operational work; reduce it where switching risk matters through open standards, abstraction layers and data portability; and document exit strategies."

Tip: Pragmatic view.`,

'How do you estimate effort for a solution?':
`**Why they ask:** planning credibility.

**Answer:**
"Break the work into components, estimate with the delivery teams who'll do it, compare with past projects, add contingency for risk, and refine as requirements firm up."

Tip: Involve the teams.`,

'How do compliance requirements affect design?':
`**Why they ask:** regulated environments.

**Answer:**
"Data residency, encryption, audit logging, access controls, retention and approved services all shape choices — for example using HIPAA-eligible services only, or tokenizing card data to shrink PCI scope."

Tip: Early compliance review.`,

'What makes a good architecture diagram?':
`**Why they ask:** communication.

**Answer:**
"A clear purpose and audience, consistent notation, labeled flows and protocols, trust boundaries and a legend — and one diagram per purpose rather than everything crammed into one picture."

Tip: One diagram per purpose.`,

'How do you handle technical debt in designs?':
`**Why they ask:** long-term thinking.

**Answer:**
"Make debt explicit in ADRs, quantify its impact, plan paydown alongside features, and avoid taking on debt in critical areas like security and data integrity."

Tip: Explicit debt.`,

'What is the Well-Architected Framework?':
`**Why they ask:** shared review vocabulary.

**Answer:**
"Guidance from AWS — with similar frameworks from Azure and Google — for reviewing workloads against pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. I use it in design reviews to surface risks systematically."

Tip: Name the pillars.`,

'How do you design a multi-tenant SaaS application?':
`**Why they ask:** SaaS architecture.

**Answer:**
"Choose an isolation model: pooled — a shared database with a tenant ID — bridge, with a schema per tenant, or silo, with a database or full stack per tenant. Enforce tenant context in every query, for example with row-level security, meter per-tenant usage, and plan noisy-neighbor controls. Large or regulated customers can get dedicated silos."

Tip: Row-level security.`,

'What DR strategies exist and how do they compare?':
`**Why they ask:** cost versus recovery trade-offs.

**Answer:**
"From cheapest and slowest to most expensive and fastest: backup and restore — hours to days; pilot light — core components running, minutes to hours; warm standby — a scaled-down copy running; and multi-site active-active — near-zero RTO. The choice follows each system's RTO and RPO from the business impact analysis."

Tip: Match it to the business impact analysis.`,

'How do you decide between batch and real-time processing?':
`**Why they ask:** data architecture judgment.

**Answer:**
"Real-time streaming when decisions need data within seconds — fraud detection, inventory availability. Batch is simpler and cheaper for reporting and reconciliations. Many solutions combine them. The key question is how fresh the data really needs to be."

Tip: Ask how fresh the data needs to be.`,

'How do you validate performance before go-live?':
`**Why they ask:** quality assurance.

**Answer:**
"Define targets as latency percentiles and throughput, load and stress test with realistic data and traffic patterns, find and fix bottlenecks, retest, and set production monitoring against the same targets."

Tip: Use percentiles, not averages.`,

'How do you plan a data migration in a solution?':
`**Why they ask:** migration risk.

**Answer:**
"Profile and cleanse the source data, map and transform it, run trial migrations, reconcile counts and balances, get business sign-off, and rehearse the cutover with a rollback plan."

Tip: Reconciliation sign-off.`,

};
