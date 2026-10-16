// Solutions Architect. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['inf-sa'] = [
["Role", "What does a solutions architect do?",
`**Why they ask:** the title varies between enterprise, vendor and consulting settings.

**Answer:** Translates business requirements into technical solution designs: gathering functional and non-functional requirements, choosing technologies, designing integration, data, security and deployment, estimating cost, documenting decisions, and guiding delivery teams through implementation. Pre-sales SAs at vendors also run demos and proofs of concept.

Tip: Say which kind of SA you've been.`, 'B', 'E'],

["Requirements", "How do you gather requirements for a new solution?",
`**Answer:** Stakeholder interviews and workshops, current-state analysis, business goals and success metrics, functional requirements (what it does), non-functional requirements (performance, availability, security, compliance, scalability, cost), constraints (budget, timeline, skills, existing tech), and assumptions — documented and agreed.

Tip: NFRs are often missed.`, 'B', 'E'],

["Design", "Walk me through how you design a solution.",
`**Answer:** Clarify goals and requirements, identify options (build vs buy vs SaaS), assess them against criteria (fit, cost, risk, time, skills), design the architecture (components, integrations, data flows, security, deployment), validate with a proof of concept if risky, estimate cost and effort, document decisions (ADRs), and review with stakeholders.

Tip: Options and trade-offs.`, 'B', 'M'],

["Design", "Design a scalable e-commerce platform.",
`**Answer:** CDN and WAF in front, a stateless web/API tier on autoscaling containers, microservices or a modular monolith for catalog, cart, orders and payments, a relational database for orders with read replicas, a cache (Redis) for sessions and catalog, search (OpenSearch), queues for order processing and notifications, a payment provider integration (tokenized), object storage for images, observability, and multi-AZ deployment.

Tip: Mention peak-event scaling, such as Black Friday.`, 'D', 'M'],

["Build vs Buy", "How do you decide between build, buy or SaaS?",
`**Answer:** Buy or SaaS when the capability isn't a differentiator, mature products exist and speed matters. Build when it's core to competitive advantage or no product fits. Consider total cost of ownership, integration, customization limits, vendor lock-in and support.

Tip: Differentiation drives build.`, 'B', 'M'],

["Integration", "What integration patterns do you use?",
`**Answer:** Synchronous REST/GraphQL APIs, asynchronous messaging and events (Kafka, SQS/SNS, Service Bus), file-based batch, iPaaS (MuleSoft, Boomi, Oracle Integration), API gateways, and change data capture. Choose based on latency, coupling, volume and reliability needs.

Tip: Prefer async for loose coupling.`, 'B', 'M'],

["Integration", "How do you make integrations reliable?",
`**Answer:** Idempotent operations, retries with backoff, dead-letter queues, monitoring and alerting, correlation IDs for tracing, contract versioning, and reconciliation reports.

Tip: Idempotency.`, 'D', 'M'],

["NFR", "How do you design for high availability?",
`**Answer:** Remove single points of failure, use redundancy across availability zones, health checks and automatic failover, stateless services, replicated data stores, graceful degradation, and tested recovery, all sized to the availability target (99.9% ≈ 8.8 hours of downtime a year; 99.99% ≈ 53 minutes).

Tip: Know the downtime numbers.`, 'B', 'M'],

["NFR", "How do you design for scalability?",
`**Answer:** Horizontal scaling of stateless components, caching, database read replicas and sharding or partitioning, asynchronous processing, CDNs, and autoscaling based on metrics, with load testing to confirm.

Tip: Find the bottleneck first.`, 'B', 'M'],

["NFR", "How do you design for security?",
`**Answer:** Threat model, identity and SSO, least privilege, encryption in transit and at rest, secrets management, network segmentation, input validation, logging and monitoring, and compliance requirements built in from the start.

Tip: Security by design.`, 'B', 'M'],

["Cost", "How do you estimate solution cost?",
`**Answer:** Infrastructure (cloud calculators with expected usage), licensing and SaaS fees, implementation effort, support and operations, and contingency, presented as a total cost of ownership over 3–5 years with assumptions stated.

Tip: State assumptions.`, 'B', 'M'],

["Cloud", "How do you choose between cloud service models?",
`**Answer:** IaaS for control or lift-and-shift, PaaS and serverless to reduce operations and speed delivery, SaaS for commodity capabilities. Balance against control, portability, skills and cost.

Tip: Managed services reduce toil.`, 'B', 'M'],

["Architecture Styles", "Monolith vs microservices?",
`**Answer:** A **monolith** (ideally modular) is simpler to build, test and deploy, and is often best early on. **Microservices** enable independent scaling and deployment for large teams, but add distributed complexity (networking, data consistency, observability). Choose based on team size and domain complexity.

Tip: A modular monolith is a valid answer.`, 'B', 'M'],

["Architecture Styles", "When is event-driven architecture a good fit?",
`**Answer:** When multiple systems react to business events, when loose coupling and scalability matter, and when real-time processing is needed. Trade-offs: eventual consistency, debugging complexity, and the need for schema governance.

Tip: Trade-offs.`, 'D', 'M'],

["Data", "How do you choose a database for a solution?",
`**Answer:** Relational for transactions and complex queries, document stores for flexible schemas, key-value for caching and simple lookups, wide-column for massive write scale, graph for relationships, time-series for metrics, and vector databases for AI similarity search — based on access patterns and consistency needs.

Tip: Access patterns.`, 'B', 'M'],

["Documentation", "What architecture documentation do you produce?",
`**Answer:** Context and container diagrams (the C4 model), integration and data flow diagrams, deployment views, NFRs, architecture decision records, risks and assumptions, and cost estimates.

Tip: C4 model.`, 'B', 'E'],

["Governance", "How do you get architecture approved?",
`**Answer:** Align early with enterprise architecture standards, security and data teams, present options and trade-offs at architecture review boards, document decisions and exceptions, and follow up on conditions.

Tip: No surprises at the review board.`, 'B', 'M'],

["Stakeholders", "How do you handle conflicting stakeholder requirements?",
`**Answer:** Clarify the underlying goals, quantify trade-offs (cost, time, risk), offer options, and escalate the decision to the right owner with a recommendation.

Tip: Options with a recommendation.`, 'B', 'M'],

["Delivery", "How do you stay involved during delivery?",
`**Answer:** Regular design reviews, answering team questions, adjusting the design when new information emerges, reviewing critical code or configuration, tracking architecture risks and validating NFRs through testing.

Tip: Don't throw designs over the wall.`, 'B', 'M'],

["Migration", "How do you plan an application migration to the cloud?",
`**Answer:** Assess and categorize applications (the 7 Rs: retire, retain, rehost, relocate, replatform, repurchase, refactor), find dependencies, plan migration waves, design the landing zone, migrate and test, cut over, then optimize.

Tip: The 7 Rs.`, 'B', 'M'],

["AI", "How would you design a generative AI solution for internal knowledge search?",
`**Answer:** RAG architecture: ingest documents with access control metadata, chunk and embed them into a vector store, retrieve relevant chunks with permission filtering, generate answers with an LLM, show citations, add guardrails, evaluate quality, monitor cost, and log usage.

Tip: Permission-aware retrieval.`, 'D', 'M'],

["Pre-sales", "How do you run a proof of concept?",
`**Answer:** Agree success criteria and scope up front, a time-box, the data and environments, a demo of key scenarios, documented results against the criteria, and next steps.

Tip: Success criteria first.`, 'B', 'M'],

["Pre-sales", "How do you handle a customer requirement your product can't meet?",
`**Answer:** Be honest, understand the underlying need, propose workarounds, partners or roadmap items, and never overpromise.

Tip: Trust over a quick win.`, 'B', 'M'],

["Risk", "How do you manage architecture risks?",
`**Answer:** Identify risks early (new technology, integration complexity, performance unknowns), mitigate them with spikes and proofs of concept, track them in a risk log, and communicate them to stakeholders.

Tip: Spikes for unknowns.`, 'B', 'M'],

["Communication", "How do you explain a technical design to executives?",
`**Answer:** Business outcome first, a simple diagram, cost, timeline, risks and decisions needed. Leave the technical details for the appendix.

Tip: Outcome first.`, 'B', 'E'],

["Enterprise", "How do you integrate a new SaaS app with ERP systems?",
`**Answer:** Define master data ownership, integration patterns (APIs/iPaaS), identity via SSO and SCIM, data mapping and transformations, error handling and reconciliation, and security and compliance reviews.

Tip: Master data ownership.`, 'D', 'M'],

["Behavioral", "Tell me about a solution you designed.",
`**Sample answer:** "I designed a customer portal integrating with Oracle ERP through an API layer and event queues. It handled 10x seasonal peaks without issues and cut support calls 30%."

Tip: Outcome.`, 'B', 'M'],

["Behavioral", "Tell me about a design decision you got wrong.",
`**Sample answer:** "I chose microservices for a small team's product. Operational overhead slowed them down, so we consolidated into a modular monolith. I now match the architecture to team size."

Tip: Learning.`, 'B', 'M'],

["Behavioral", "Tell me about influencing without authority.",
`**Sample answer:** "Teams were building duplicate integrations. I proposed a shared API layer, demonstrated reuse savings with a pilot, and got buy-in from three teams."

Tip: Show value.`, 'B', 'M'],

["Certifications", "Which certifications are valuable?",
`**Answer:** AWS Solutions Architect Associate/Professional, Azure Solutions Architect Expert, Google Professional Cloud Architect, TOGAF, and domain certifications such as Salesforce or Oracle.

Tip: Professional level.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Enterprise architect or principal architect.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn business needs into practical, cost-aware solutions and stay with teams through delivery. My designs scale, integrate cleanly and land on budget."

Tip: Proof.`, 'B', 'M'],

["Caching", "How do you use caching effectively?",
`**Answer:** Cache read-heavy, rarely changing data (CDN for static content, Redis for sessions and lookups), set TTLs and invalidation strategies, avoid caching sensitive data improperly, and watch out for stampedes.

Tip: Invalidation strategy.`, 'B', 'M'],

["API", "How do you design good APIs?",
`**Answer:** Resource-oriented REST design, consistent naming, versioning, pagination, clear error formats, idempotency keys for writes, authentication (OAuth), rate limits, and OpenAPI documentation.

Tip: Idempotency keys.`, 'B', 'M'],

["Resilience", "What resilience patterns do you know?",
`**Answer:** Retries with exponential backoff and jitter, circuit breakers, bulkheads, timeouts, fallbacks, queues for load leveling, and graceful degradation.

Tip: Circuit breakers.`, 'D', 'M'],

["Consistency", "How do you handle transactions across services?",
`**Answer:** Avoid distributed transactions. Use the saga pattern (choreography or orchestration) with compensating actions, the outbox pattern for reliable event publishing, and idempotent consumers.

Tip: Outbox pattern.`, 'D', 'S'],

["Observability", "What observability should every solution include?",
`**Answer:** Structured logs with correlation IDs, metrics (latency, errors, throughput, saturation), distributed tracing, health checks, dashboards and alerts tied to SLOs.

Tip: Correlation IDs.`, 'B', 'M'],

["Scenario", "The business wants a solution live in 3 months but the scope is large. What do you do?",
`**Answer:** Define an MVP of the highest-value features, phase the rest, use SaaS or managed services to speed up, and make trade-offs and risks explicit.

Tip: MVP and phases.`, 'B', 'M'],

["Scenario", "A legacy system has no APIs. How do you integrate with it?",
`**Answer:** Options: database-level integration with care, file exports, change data capture, RPA as a last resort, or wrapping it with an API layer, while planning modernization.

Tip: Wrap and modernize.`, 'D', 'M'],

["Lock-in", "How do you think about vendor lock-in?",
`**Answer:** Accept lock-in where the value is high (managed services), reduce it where switching risk matters (open standards, abstraction layers, data portability), and document exit strategies.

Tip: Pragmatic view.`, 'D', 'M'],

["Estimation", "How do you estimate effort for a solution?",
`**Answer:** Break the work into components, estimate with the delivery teams, compare with past projects, add contingency for risk, and refine as requirements firm up.

Tip: Involve the teams.`, 'B', 'M'],

["Compliance", "How do compliance requirements affect design?",
`**Answer:** Data residency, encryption, audit logging, access controls, retention and approved services all shape choices, for example HIPAA-eligible services or PCI scope reduction through tokenization.

Tip: Early compliance review.`, 'D', 'M'],

["Diagrams", "What makes a good architecture diagram?",
`**Answer:** A clear purpose and audience, consistent notation, labeled flows and protocols, trust boundaries, and a legend. Avoid cramming everything into one picture.

Tip: One diagram per purpose.`, 'B', 'E'],

["Technical Debt", "How do you handle technical debt in designs?",
`**Answer:** Make debt explicit (ADRs), quantify its impact, plan paydown alongside features, and avoid unnecessary debt in critical areas such as security and data.

Tip: Explicit debt.`, 'D', 'M']
];
