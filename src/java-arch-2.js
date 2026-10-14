QB['java-arch'] = (QB['java-arch'] || []).concat([
['System Design', 'Design a real-time chat system.',
`- **Connections**: WebSockets via gateway servers; connection registry (Redis) mapping users to servers.
- **Message flow**: client → gateway → chat service → persistence (Cassandra/partitioned by conversation) → fan-out to recipients' gateways (pub/sub).
- **Ordering** per conversation (sequence numbers).
- **Delivery receipts**, offline storage, push notifications.
- **Scale**: horizontal gateways, partitioned storage, presence service.
- **Security**: E2E encryption options, authentication.`, 'D'],

['System Design', 'Design a rate-limited public API platform.',
`- **API gateway** (authentication, quotas, rate limits per key, routing).
- **Distributed rate limiting** with Redis (token bucket) or gateway-native.
- **Developer portal** with keys and documentation.
- **Usage metering** for billing.
- **Backends** stateless with autoscaling.
- **Observability** per consumer.`, 'D'],

['System Design', 'Design a feed/timeline system (like a social feed).',
`- **Fan-out on write** (push to followers' feeds) for normal users; **fan-out on read** for celebrities (hybrid).
- **Feed storage** in Redis/Cassandra with recent items.
- **Ranking** service (ML) for personalization.
- **Pagination** with cursors.
- **Caching** and precomputation.
- Handle deletes/edits and privacy settings.`, 'D'],

['System Design', 'How would you design a distributed job scheduler?',
`- **Job definitions** stored in DB; **scheduler** nodes with leader election (or partitioned ownership) to avoid duplicate runs.
- **Queue** for ready jobs; **workers** pull and execute.
- **At-least-once** with idempotent jobs; locks/leases with expiry.
- **Retries**, dead letters, timeouts.
- **Observability** of job status.
- Alternatives: Quartz clustered, Temporal for workflows.`, 'D'],

['Data', 'How do you design a data pipeline for analytics from microservices?',
`- **CDC** (Debezium) or **domain events** into Kafka.
- **Stream processing** (Flink/Kafka Streams) for real-time aggregates.
- **Lakehouse** storage (Iceberg/Delta) for analytics.
- **Schema registry** and data contracts.
- **Data quality** checks; lineage.
- Separate operational and analytical workloads.`, 'D'],

['Data', 'How do you ensure data consistency between a service DB and its published events?',
`- **Transactional outbox**: write event to outbox table in the same transaction; relay publishes (polling or CDC).
- Avoid dual writes (DB + Kafka) without coordination.
- **Idempotent consumers** with dedupe.
- **Ordering** via partition keys.`, 'D'],

['Architecture', 'What is a service mesh and when is it worth it?',
`- Infrastructure layer (Istio, Linkerd) handling **mTLS**, traffic management (retries, canaries), and observability via sidecars or ambient mode.
- Worth it with many services needing consistent security and traffic policies.
- Costs: complexity, resource overhead, learning curve.
- Alternatives: library-based resilience + gateway.`, 'D'],

['Architecture', 'Kubernetes: what do architects need to get right?',
`- **Resource requests/limits** and autoscaling (HPA/KEDA).
- **Health probes**, graceful shutdown.
- **Config/secrets** management.
- **Network policies**, RBAC, pod security.
- **Multi-AZ** node pools, pod disruption budgets.
- **Observability** stack.
- **Cost** management.`, 'B'],

['Architecture', 'Serverless vs containers — how do you choose?',
`- **Serverless** (Lambda/Functions): event-driven, spiky workloads, minimal ops; limits on runtime, cold starts (mitigated with SnapStart for Java), vendor coupling.
- **Containers** (Kubernetes/ECS): long-running services, steady traffic, more control, portability.
- Often hybrid.`, 'B'],

['Performance', 'How do you make Java services start fast and use less memory?',
`- **GraalVM native image** (Spring Boot 3 AOT) — fast startup, low memory; trade-offs: build time, reflection config, peak throughput.
- **CDS / AppCDS** and **CRaC** (checkpoint/restore) for faster startup on the JVM.
- **Lean dependencies**; lazy initialization.
- Right-size heap; tune GC.`, 'D'],

['Reliability', 'How do you run blameless postmortems and make them effective?',
`- **Timeline**, impact, root causes and contributing factors.
- **Focus on systems**, not individuals.
- **Action items** with owners and deadlines.
- **Share** learnings widely.
- **Track** completion; revisit recurring themes.`, 'B'],

['Reliability', 'How would you implement chaos engineering?',
`- Start with **hypotheses** about steady state.
- **Small blast radius** experiments (kill instances, inject latency, fail dependencies) in staging, then production with safeguards.
- Tools: Chaos Monkey, Gremlin, AWS FIS, Litmus.
- **Observe**, learn, fix weaknesses.
- Make it routine (game days).`, 'D'],

['Security', 'How do you manage secrets and credentials in a microservices platform?',
`- **Vault/Secrets Manager**; dynamic short-lived credentials.
- **Workload identity** (IRSA, Workload Identity) instead of static keys.
- **Rotation** automation.
- **No secrets** in code, images, or logs.
- **Audit** access.`, 'B'],

['Leadership', 'How do you set technical direction for an engineering organization?',
`- **Understand** business strategy and constraints.
- **Assess** current architecture and pain points.
- **Write** a technical strategy (principles, target architecture, roadmap).
- **Socialize** with engineers and leadership; incorporate feedback.
- **Enable** through platforms and examples.
- **Revisit** periodically.`, 'B'],

['Leadership', 'How do you evaluate a new technology for adoption?',
`- **Problem fit** and alternatives.
- **Maturity**, community, vendor viability.
- **Operational cost** and skills.
- **Proof of concept** with success criteria.
- **Adoption plan** (pilot team, guidelines).
- **Exit strategy**.`, 'B'],

['Leadership', 'How do you run an architecture review?',
`- **Pre-read** design doc with context, options, decision, risks.
- **Focus** on high-impact concerns: correctness, scalability, security, operability, cost.
- **Constructive**, time-boxed discussion.
- **Outcomes**: approve, approve with conditions, revisit.
- Keep reviews lightweight to avoid bottlenecks.`, 'B'],

['Behavioral', 'How do you handle a disagreement with an engineering director about architecture?',
`- **Understand** their goals (timeline, cost, team capacity).
- **Present** options with data.
- **Propose** reversible steps or experiments.
- **Disagree and commit** once decided; document risks.`, 'B'],

['Behavioral', 'What does a great Principal Engineer do in their first 90 days?',
`- **Learn** the systems, people and business.
- **Listen** to pain points.
- **Pick** a meaningful problem and deliver.
- **Build** relationships with leads.
- **Propose** a technical direction informed by what you learned.`, 'B'],

['System Design', 'How would you design a payments ledger?',
`- **Double-entry** model: every transaction posts balanced debits/credits.
- **Immutable** entries (append-only); corrections via reversal entries.
- **Idempotency** and exactly-once semantics for external events.
- **Consistency**: strong (single DB per ledger partition) — avoid eventual consistency for balances.
- **Reconciliation** with external providers.
- **Auditability** and retention.`, 'D'],

['System Design', 'Design a search service for a product catalog.',
`- **Indexing pipeline** from catalog changes (CDC/events) into OpenSearch/Elasticsearch.
- **Schema** with analyzers, synonyms, facets.
- **Query service** with ranking, filters, personalization.
- **Relevance tuning** and A/B tests.
- **Scale**: shards/replicas; caching popular queries.
- **Freshness** SLAs.`, 'D'],

['AI', 'How do you evaluate and govern AI coding assistants in an engineering org?',
`- **Pilot** with metrics (cycle time, defects, developer satisfaction).
- **Policies**: IP and data protection (no secrets in prompts), licensing of generated code.
- **Review** standards (generated code still reviewed and tested).
- **Training** on effective use.
- **Monitor** quality and security findings.`, 'D'],

['Behavioral', 'Why do you want to be a Principal Engineer here?',
`- **Interest** in their technical challenges and domain.
- **Track record** of cross-team impact.
- **Balance** of hands-on and strategic work.
- **Mentoring** and culture contributions.`, 'B'],

['Architecture', 'How do you approach multi-tenancy in a SaaS platform?',
`- **Isolation models**: shared schema (tenant ID column), schema per tenant, database per tenant — trade-offs in cost, isolation, operations.
- **Tenant context** propagated securely; row-level security.
- **Noisy neighbor** controls (quotas, rate limits).
- **Per-tenant** customization via configuration.
- **Data residency** options for large tenants.`, 'D'],

['Architecture', 'How do you make architecture decisions reversible?',
`- **Abstractions** at volatile boundaries (ports and adapters).
- **Feature flags** and gradual rollouts.
- **Strangler** approaches instead of big bangs.
- **Avoid lock-in** where cheap to avoid.
- Distinguish one-way doors (careful) from two-way doors (move fast).`, 'B'],

['Behavioral', 'Describe how you grew senior engineers into leaders.',
`- Gave them **ownership** of significant designs.
- Coached on **writing**, influence, and trade-offs.
- **Sponsored** them for visible work.
- Created **forums** (architecture guild) where they could lead.
- Outcome: promotions, stronger technical bench.`, 'B']
]);
