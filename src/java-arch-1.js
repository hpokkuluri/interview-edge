// Principal Engineer / Java Architect. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['java-arch'] = (QB['java-arch'] || []).concat([
['System Design', 'Design a URL shortener at scale.',
`- **Requirements**: create short URL, redirect fast (read-heavy, e.g. 100:1), custom aliases, expiry, analytics.
- **ID generation**: base62 of a unique ID (Snowflake-style or DB sequence ranges per node) or hash with collision checks.
- **Storage**: key-value store (DynamoDB/Cassandra) keyed by short code; cache hot entries (Redis/CDN).
- **Redirect path**: CDN/edge → cache → DB; 301 vs 302 (analytics).
- **Analytics**: async events to Kafka → aggregation.
- **Scale/HA**: stateless services, multi-region reads, rate limiting, abuse detection.`, 'D'],

['System Design', 'Design an order management system for an e-commerce platform.',
`- **Services**: catalog, cart, order, payment, inventory, fulfillment, notification.
- **Order flow** as a **saga**: create order (pending) → reserve inventory → authorize payment → confirm → fulfillment; compensations on failure.
- **Outbox pattern** for events; **idempotency** on payments.
- **Data**: order DB per service; read models (CQRS) for order history/search.
- **Consistency**: inventory reservation with TTL; oversell protection.
- **Scale**: partition by order ID; queues for spikes; caching for catalog.
- **Observability** and SLOs.`, 'D'],

['System Design', 'Design a notification service that sends email, SMS and push at scale.',
`- **API** accepts notification requests (templates, channel preferences).
- **Queue** (Kafka/SQS) per priority; workers per channel with provider adapters.
- **Retries** with backoff, DLQ, provider failover.
- **Idempotency** to avoid duplicates; rate limits per user/provider.
- **Preferences/opt-outs** and compliance (CAN-SPAM, TCPA).
- **Tracking** delivery status via webhooks.
- **Templating** and localization.`, 'D'],

['System Design', 'How do you design for high availability and disaster recovery?',
`- **Redundancy** at every layer (multi-AZ), no single points of failure.
- **Stateless services**; state in replicated stores.
- **Health checks**, auto-healing, load balancing.
- **Data replication** (sync within region, async cross-region); define **RPO/RTO**.
- **Graceful degradation** and fallbacks.
- **Chaos testing** and DR drills.
- **Multi-region active-active** only when justified (complexity, consistency).`, 'D'],

['Architecture', 'Monolith vs microservices — how do you decide?',
`- **Start modular monolith** for most new products: simpler ops, consistency, fast iteration.
- **Microservices** when: independent scaling, team autonomy at scale, different technology needs, clear bounded contexts.
- Costs: distributed complexity, observability, data consistency, platform overhead.
- Use **DDD bounded contexts** to find seams; extract services when pain justifies it.`, 'B'],

['Architecture', 'Explain Domain-Driven Design concepts you use in architecture.',
`- **Bounded contexts** with their own models and language.
- **Context mapping** (customer/supplier, anti-corruption layers).
- **Aggregates** as consistency boundaries; reference other aggregates by ID.
- **Domain events** for integration.
- **Ubiquitous language** shared with business.
Helps define service boundaries and team ownership.`, 'D'],

['Architecture', 'What is event-driven architecture and what are its trade-offs?',
`- Services publish **events** (facts) and react to others' events via brokers (Kafka).
- **Benefits**: loose coupling, scalability, audit trails, extensibility.
- **Trade-offs**: eventual consistency, debugging complexity, event schema evolution, duplicate/out-of-order handling.
- Patterns: event notification, event-carried state transfer, event sourcing (selectively).
- Governance: schema registry, versioning, ownership.`, 'D'],

['Architecture', 'When would you use CQRS and event sourcing?',
`- **CQRS**: separate write model from read models — useful when reads need different shapes/scale (search, dashboards).
- **Event sourcing**: store state as an event log — strong audit, temporal queries, rebuilding projections. Costs: complexity, schema evolution, snapshots, eventual consistency.
- Use selectively for domains needing audit/history (ledgers, orders); not as a default.`, 'D'],

['Data', 'How do you choose between SQL and NoSQL databases?',
`- **Relational (Postgres)**: strong consistency, transactions, complex queries, integrity — default choice.
- **Document (MongoDB)**: flexible schemas, aggregate-oriented access.
- **Key-value (Redis/DynamoDB)**: high-scale simple lookups.
- **Wide-column (Cassandra)**: massive write throughput, time series.
- **Search (Elasticsearch/OpenSearch)**: full-text.
- **Graph** for relationship-heavy queries.
- Choose by access patterns, consistency needs, scale, team skills.`, 'B'],

['Data', 'How do you scale a relational database?',
`- **Vertical** scaling and query optimization first.
- **Read replicas** for read-heavy workloads.
- **Caching**.
- **Partitioning** (table partitions) and **sharding** (by tenant/customer) — application-aware routing.
- **CQRS** read stores.
- **Connection pooling** (PgBouncer).
- Consider distributed SQL (CockroachDB, Spanner, Aurora) for global scale.`, 'D'],

['Data', 'Explain the CAP theorem and how it affects design.',
`- In a network partition, a distributed system must choose **consistency** or **availability**.
- **CP** systems reject requests to stay consistent; **AP** systems serve possibly stale data.
- **PACELC** adds: else (no partition), trade **latency vs consistency**.
- Design per use case: payments need consistency; product views tolerate staleness.`, 'D'],

['Reliability', 'How do you define and use SLOs?',
`- **SLIs**: measurable indicators (availability, latency p99, error rate).
- **SLOs**: targets (e.g. 99.9% of requests < 300 ms over 30 days).
- **Error budgets**: allowed unreliability — if exhausted, prioritize reliability over features.
- **Alerting** on burn rate, not raw thresholds.
- Align SLOs with user experience and business needs.`, 'D'],

['Reliability', 'How do you design resilient service-to-service communication?',
`- **Timeouts** on every call (budget per request).
- **Retries** with exponential backoff and jitter — only for idempotent operations.
- **Circuit breakers** and **bulkheads** (Resilience4j).
- **Fallbacks** and graceful degradation.
- **Load shedding** and backpressure.
- **Async** patterns where possible.`, 'D'],

['Performance', 'How do you approach capacity planning?',
`- **Baseline** current usage and growth.
- **Load testing** to find limits (Gatling, k6) and bottlenecks.
- **Model** peak loads (seasonality, events).
- **Headroom** targets (e.g. 30–50%).
- **Autoscaling** policies.
- Revisit regularly.`, 'B'],

['Security', 'How do you build security into the architecture?',
`- **Threat modeling** (STRIDE) for new systems.
- **Zero trust**: authenticate/authorize every call (mTLS, OAuth2 tokens).
- **Least privilege** for services and data.
- **Secrets management**; encryption in transit/at rest.
- **Secure SDLC**: SAST/DAST, dependency scanning, SBOM.
- **Audit logging** and monitoring.`, 'D'],

['Platform', 'What is platform engineering and how do you build an internal developer platform?',
`- Provide **golden paths**: templates, CI/CD, observability, security baked in.
- **Self-service** infrastructure (Kubernetes, databases, queues) via portals (Backstage).
- **Paved roads** reduce cognitive load; teams focus on business logic.
- Measure **developer productivity** (DORA metrics, onboarding time).
- Treat the platform as a product with users.`, 'D'],

['Platform', 'How do you design CI/CD for many microservices?',
`- **Trunk-based development** with short-lived branches.
- **Automated pipelines**: build, unit/integration tests, security scans, contract tests, container build, deploy.
- **Progressive delivery**: canary, blue/green, feature flags.
- **GitOps** (Argo CD) for deployments.
- **Rollback** automation.
- Track DORA metrics (deploy frequency, lead time, change failure rate, MTTR).`, 'D'],

['API', 'How do you manage API versioning and evolution?',
`- Prefer **backward-compatible** changes (additive fields).
- **Versioning** strategy for breaking changes (URI /v2 or headers) with deprecation timelines.
- **Consumer-driven contract tests**.
- **API gateway** for routing and policies.
- **Schema registry** for events (Avro/Protobuf compatibility rules).`, 'B'],

['Architecture', 'How do you approach migrating a legacy monolith to modern architecture?',
`- **Strangler fig**: route new features to new services; gradually replace monolith functions.
- **Identify seams** with DDD; start with low-risk, high-value areas.
- **Anti-corruption layers**.
- **Data migration** strategy (CDC, dual writes carefully).
- **Measure** progress and value; avoid big-bang rewrites.`, 'D'],

['Architecture', 'How do you document and communicate architecture?',
`- **C4 model** diagrams (context, container, component).
- **ADRs** for decisions.
- **Living documentation** in repos.
- **Architecture reviews** for significant changes.
- Tailor communication to audience (executives vs engineers).`, 'B'],

['Leadership', 'How does a Principal Engineer influence across teams?',
`- **Technical vision** and strategy documents.
- **Standards** and reference implementations.
- **Mentoring** senior engineers.
- **Reviews** of critical designs.
- **Solving** the hardest cross-team problems hands-on.
- **Building consensus** through writing and data.`, 'B'],

['Leadership', 'How do you balance technical debt and feature delivery?',
`- **Make debt visible** (inventory, impact on velocity/incidents).
- **Allocate capacity** (e.g. 20%) and tie debt work to business outcomes.
- **Pay down** debt in areas of active change.
- **Prevent** new debt with standards and reviews.`, 'B'],

['AI', 'How would you architect an LLM-powered feature in a Java system?',
`- **Use case** and success metrics; decide build vs buy.
- **RAG architecture**: document ingestion, chunking, embeddings, vector store (pgvector/OpenSearch), retrieval, prompt assembly, LLM call (via Spring AI or provider SDKs).
- **Guardrails**: input/output validation, PII redaction, rate limits, cost control.
- **Evaluation**: offline test sets, online feedback.
- **Observability**: prompts/latency/cost tracing.
- **Fallbacks** when the model is unavailable.`, 'D'],

['Behavioral', 'Describe a system you architected and how it evolved.',
`- **Context and requirements**, **initial design**, **key decisions**, **what changed** with scale or business, **how you adapted**, **results**, **lessons**.
- Show judgment about trade-offs over time.`, 'B'],

['Behavioral', 'Tell me about a time you were wrong about a technical decision.',
`- Real example (e.g. chose event sourcing for a domain that didn't need it).
- How you recognized it (complexity, slowed delivery).
- How you corrected (simplified to CRUD + audit log).
- Lesson (match complexity to need; reversible decisions).`, 'B']
]);
