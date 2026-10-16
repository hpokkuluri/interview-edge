// Backend Engineer (Node / Python / .NET). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['swe-be'] = [
["APIs", "How do you design a good REST API?",
`**Why they ask:** API design is the core backend skill.

**Answer:** Resource-oriented URLs (/orders/{id}/items), correct HTTP methods and status codes, consistent naming and error format, pagination (cursor-based for large sets), filtering and sorting, versioning strategy, idempotency for retries (Idempotency-Key header on POST), authentication/authorization, rate limiting, and an OpenAPI specification as the contract.

Tip: Mention idempotency — it shows production experience.`, 'B', 'M'],

["APIs", "What are idempotent methods and why do they matter?",
`**Answer:** An idempotent operation has the same effect whether called once or many times. GET, PUT and DELETE should be idempotent; POST usually isn't. For payments or orders, use idempotency keys so client retries after timeouts don't create duplicates.

Tip: Payment example.`, 'B', 'M'],

["APIs", "How do you version an API?",
`**Answer:** URL versioning (/v1/), header versioning, or media types. Prefer additive, backward-compatible changes; deprecate with notice and sunset headers; version only for breaking changes.

Tip: Avoid breaking changes when possible.`, 'B', 'M'],

["APIs", "REST vs gRPC vs GraphQL?",
`**Answer:** **REST**: simple, HTTP-native, cacheable — public APIs. **gRPC**: binary Protobuf over HTTP/2, fast and strongly typed — internal service-to-service calls, streaming. **GraphQL**: client-specified queries — flexible frontends aggregating many sources.

Tip: Use-case driven.`, 'D', 'M'],

["Databases", "SQL vs NoSQL — how do you choose?",
`**Answer:** Relational databases (PostgreSQL, SQL Server) for structured data, transactions, joins and integrity. NoSQL for specific needs: document stores (MongoDB) for flexible schemas, key-value (Redis, DynamoDB) for fast lookups at scale, wide-column (Cassandra) for massive writes, graph databases for relationships. Default to relational unless a clear need exists.

Tip: "Postgres until proven otherwise" is a common stance.`, 'B', 'M'],

["Databases", "Explain database indexes and their trade-offs.",
`**Answer:** Indexes (usually B-trees) speed up lookups, joins and sorting on indexed columns but slow writes and use storage. Composite index column order matters (leftmost prefix). Check query plans (EXPLAIN) to confirm usage; avoid functions on indexed columns in WHERE clauses.

Tip: Leftmost prefix rule.`, 'B', 'M'],

["Databases", "What are ACID properties and isolation levels?",
`**Answer:** Atomicity, Consistency, Isolation, Durability. Isolation levels: Read Uncommitted, Read Committed (common default), Repeatable Read, Serializable — trading consistency against concurrency. Anomalies: dirty reads, non-repeatable reads, phantom reads.

Tip: Know your DB's default level.`, 'D', 'M'],

["Databases", "What is the N+1 query problem?",
`**Answer:** Loading a list (1 query) then querying related data for each item (N queries). Fix with joins, eager loading (ORM include/select_related), or batching (DataLoader).

Tip: Very common ORM issue.`, 'B', 'M'],

["Databases", "How do you handle database migrations safely?",
`**Answer:** Version-controlled migrations (Flyway, Liquibase, Alembic, EF migrations), backward-compatible changes with expand/contract (add column → dual write → backfill → switch reads → remove old), avoid long locks on big tables, and test on production-like data.

Tip: Expand/contract for zero downtime.`, 'D', 'S'],

["Caching", "How and where do you use caching?",
`**Answer:** CDN for static and cacheable responses, in-memory caches (Redis) for hot data and sessions, application-level memoization. Strategies: cache-aside, write-through, TTLs. Handle invalidation carefully, avoid cache stampedes (locking, jittered TTLs), and never cache sensitive data incorrectly across users.

Tip: "Cache invalidation is hard" — show you've handled it.`, 'D', 'M'],

["Concurrency", "How do you prevent race conditions when updating data?",
`**Answer:** Database transactions with appropriate isolation, row-level locking (SELECT ... FOR UPDATE), optimistic concurrency with version columns, atomic operations (UPDATE ... SET stock = stock - 1 WHERE stock > 0), and distributed locks only when necessary.

Tip: Inventory decrement example.`, 'D', 'M'],

["Messaging", "When would you use a message queue?",
`**Answer:** To decouple services, smooth load spikes, process work asynchronously (emails, image processing), and improve resilience. Tools: RabbitMQ, SQS, Azure Service Bus, Kafka (event streaming). Design consumers to be idempotent and handle retries and dead-letter queues.

Tip: Idempotent consumers.`, 'B', 'M'],

["Messaging", "Kafka vs RabbitMQ?",
`**Answer:** Kafka is a distributed log for high-throughput event streaming, retention and replay, with consumer groups and partitions for ordering. RabbitMQ is a traditional message broker with flexible routing, good for task queues and lower-latency messaging. Choose by throughput, replay needs and routing complexity.

Tip: Replay is Kafka's key differentiator.`, 'D', 'S'],

["Architecture", "Monolith vs microservices?",
`**Answer:** A well-structured (modular) monolith is simpler to build, test and deploy — ideal early on. Microservices allow independent scaling and deployment by separate teams but add network complexity, distributed data, observability and operational overhead. Split when team or scaling needs justify it, along clear domain boundaries.

Tip: "Start with a modular monolith."`, 'D', 'S'],

["Architecture", "How do you handle transactions across microservices?",
`**Answer:** Avoid distributed transactions (2PC) where possible. Use the **saga pattern** — a sequence of local transactions with compensating actions on failure — orchestrated or choreographed via events, plus the **outbox pattern** to publish events reliably with database changes.

Tip: Outbox pattern shows depth.`, 'D', 'S'],

["Security", "How do you secure a backend API?",
`**Answer:** Authentication (OAuth 2.0/OIDC, JWT validation), authorization checks on every request (including object-level — users can only access their own resources), input validation, parameterized queries (prevent SQL injection), rate limiting, secrets management (vaults, not code), TLS, security headers, dependency scanning, and logging without sensitive data.

Tip: Object-level authorization (IDOR) is the most common API flaw.`, 'B', 'M'],

["Security", "JWT vs session cookies?",
`**Answer:** Sessions store state on the server with a session ID cookie — easy revocation. JWTs are self-contained signed tokens — stateless and scalable, but harder to revoke; keep them short-lived with refresh tokens. Store tokens in httpOnly secure cookies for browsers.

Tip: Revocation trade-off.`, 'D', 'M'],

["Security", "What is the OWASP API Security Top 10?",
`**Answer:** Common API risks including broken object-level authorization, broken authentication, broken object property-level authorization, unrestricted resource consumption, broken function-level authorization, server-side request forgery, security misconfiguration, and improper inventory management.

Tip: Lead with BOLA.`, 'D', 'S'],

["Performance", "How do you find and fix a slow endpoint?",
`**Answer:** Measure with APM/tracing (OpenTelemetry, Datadog), find where time goes (DB queries, external calls, CPU), check query plans and indexes, add caching, batch or parallelize calls, paginate, and move heavy work to background jobs. Load test to verify.

**Example:** p95 from 1.8 s to 220 ms by adding an index and removing an N+1 query.

Tip: Numbers.`, 'B', 'M'],

["Scalability", "How do you scale a backend service?",
`**Answer:** Stateless services behind a load balancer for horizontal scaling, caching, database read replicas, connection pooling, partitioning/sharding for very large data, async processing with queues, and autoscaling on metrics.

Tip: Stateless first.`, 'D', 'M'],

["Reliability", "How do you make a service resilient to failures?",
`**Answer:** Timeouts on all external calls, retries with exponential backoff and jitter (only for safe/idempotent operations), circuit breakers, bulkheads, graceful degradation, health checks, and redundancy across zones.

Tip: Timeouts everywhere.`, 'D', 'M'],

["Observability", "What does good observability look like?",
`**Answer:** Structured logs with correlation IDs, metrics (RED: rate, errors, duration; USE for resources), distributed tracing, dashboards, and SLO-based alerting on user-facing symptoms rather than every internal metric.

Tip: Correlation IDs.`, 'D', 'M'],

["Testing", "How do you test backend services?",
`**Answer:** Unit tests for business logic, integration tests with real dependencies (Testcontainers for DBs/queues), contract tests between services, API tests, and a small set of end-to-end tests. Use test data builders and keep tests independent.

Tip: Testcontainers mention.`, 'B', 'M'],

["Node.js", "How does Node.js handle concurrency?",
`**Answer:** A single-threaded event loop with non-blocking I/O handled by libuv's thread pool and the OS. CPU-heavy work blocks the loop — offload to worker threads or separate services. Use async/await, streams for large data, and cluster/multiple instances to use all cores.

Tip: Don't block the event loop.`, 'B', 'M'],

["Python", "What is the GIL and how does it affect Python backends?",
`**Answer:** The Global Interpreter Lock lets only one thread execute Python bytecode at a time in CPython, limiting CPU-bound threading. I/O-bound work scales with threads or asyncio; CPU-bound work uses multiprocessing or native extensions. (Python 3.13 introduced an experimental free-threaded build.)

Tip: Know async frameworks like FastAPI.`, 'D', 'M'],

["Python", "FastAPI vs Django vs Flask?",
`**Answer:** **Django**: batteries-included (ORM, admin, auth) — full apps. **FastAPI**: async, type-hint-driven validation (Pydantic), automatic OpenAPI — modern APIs. **Flask**: minimal and flexible — small services.

Tip: Choose by project needs.`, 'B', 'M'],

[".NET", "What's important in modern .NET backend development?",
`**Answer:** ASP.NET Core minimal APIs or controllers, dependency injection built-in, async/await throughout, Entity Framework Core (or Dapper for performance), middleware pipeline, configuration and options pattern, logging with ILogger, and health checks.

Tip: Mention current LTS version use.`, 'B', 'M'],

["Coding", "Design a rate limiter.",
`**Answer:** Algorithms: fixed window, sliding window log/counter, token bucket (allows bursts), leaky bucket. For distributed services, store counters in Redis with atomic operations (INCR with TTL or Lua scripts). Return 429 with Retry-After headers.

Tip: Token bucket explanation.`, 'D', 'S'],

["Coding", "How would you design a URL shortener?",
`**Answer:** Generate short keys (base62 of a unique ID or hash with collision checks), store mapping in a key-value store or SQL with an index, redirect with 301/302, cache hot keys, handle analytics asynchronously, and add rate limiting and abuse checks.

Tip: Classic system design question.`, 'D', 'M'],

["Coding", "Find duplicates in a large file that doesn't fit in memory.",
`**Answer:** Stream the file, hash each line into one of N bucket files (partitioning), then process each bucket in memory with a hash set. Or use external sorting, then scan adjacent duplicates.

Tip: Divide and conquer.`, 'D', 'S'],

["System Design", "How would you design a notification service?",
`**Answer:** API to accept notification requests → queue → workers per channel (email, SMS, push) with provider integrations, templates, user preferences and opt-outs, retries with backoff, idempotency, rate limiting, and delivery status tracking.

Tip: Preferences and retries.`, 'D', 'S'],

["System Design", "How do you handle file uploads at scale?",
`**Answer:** Pre-signed URLs to upload directly to object storage (S3/Blob), virus scanning and validation asynchronously, metadata in the database, CDN for downloads, and lifecycle policies for retention.

Tip: Don't proxy large files through your app servers.`, 'D', 'M'],

["Cloud", "Which cloud services do backend engineers commonly use?",
`**Answer:** Compute (containers on ECS/EKS/AKS, serverless functions), managed databases, object storage, queues and event buses, secrets managers, API gateways, and monitoring services.

Tip: Mention your cloud provider experience.`, 'B', 'M'],

["Serverless", "When is serverless a good fit?",
`**Answer:** Event-driven or spiky workloads, small APIs, scheduled jobs and glue code — pay per use, no server management. Trade-offs: cold starts, execution limits, vendor lock-in, and harder local testing.

Tip: Balanced.`, 'D', 'M'],

["Containers", "Why use Docker for backend services?",
`**Answer:** Consistent environments from dev to prod, isolated dependencies, easy scaling with orchestrators, and reproducible builds. Use small base images, multi-stage builds and non-root users.

Tip: Security best practices.`, 'B', 'E'],

["CI/CD", "What should a backend CI/CD pipeline include?",
`**Answer:** Linting and static analysis, unit and integration tests, security scans (SAST, dependency checks), container build and scan, deployment to staging with smoke tests, progressive production rollout (canary/blue-green), and automatic rollback on errors.

Tip: Progressive delivery.`, 'B', 'M'],

["Data", "How do you handle large data processing jobs?",
`**Answer:** Batch processing in chunks with checkpoints, streaming for continuous data, idempotent writes, parallel workers, backpressure, and monitoring progress and failures.

Tip: Restartability.`, 'D', 'M'],

["Behavioral", "Tell me about a system you designed.",
`**Sample answer:** "I designed an order processing service handling 2,000 orders/minute at peak: stateless API, PostgreSQL with read replicas, outbox events to Kafka for fulfillment and billing, idempotency keys, and autoscaling. p99 latency stayed under 300 ms during Black Friday."

Tip: Scale, choices, results.`, 'B', 'M'],

["Behavioral", "Tell me about an incident you handled.",
`**Sample answer:** "A deploy caused connection pool exhaustion. I rolled back, found a missing connection release in an error path, added a test and pool metrics alert, and wrote a blameless postmortem."

Tip: Calm, root cause, prevention.`, 'B', 'M'],

["Behavioral", "How do you approach code reviews?",
`**Answer:** Focus on correctness, security, readability, tests and design; be specific and kind; explain reasoning; approve when good enough rather than perfect.

Tip: Constructive reviews.`, 'B', 'E'],

["AI", "How would you integrate an LLM API into a backend?",
`**Answer:** Wrap calls in a service with timeouts, retries and fallbacks; stream responses; manage prompts and versions; add retrieval (RAG) from approved data; enforce authorization on retrieved data; log usage and cost; protect against prompt injection; and evaluate quality.

Tip: Security and cost.`, 'D', 'S'],

["Seniority", "What makes a senior backend engineer?",
`**Answer:** Designs reliable, scalable systems with sensible trade-offs, owns production quality, mentors others, writes clear designs, and anticipates failure modes.

Tip: Examples.`, 'B', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Toward staff engineer or architect roles — distributed systems, platform design and technical leadership.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build scalable, secure services and own them in production — I've designed high-throughput systems, cut latency by 80%, and improved reliability with better observability and resilience patterns."

Tip: Proof.`, 'B', 'M'],

["HTTP", "What are common HTTP status codes a backend should return?",
`**Answer:** 200, 201 (created), 202 (accepted for async), 204; 400 (validation), 401 (not authenticated), 403 (not authorized), 404, 409 (conflict), 422; 429 (rate limited); 500, 502, 503 (unavailable), 504.

Tip: 401 vs 403 distinction.`, 'B', 'E'],

["Data Modeling", "How do you design a database schema?",
`**Answer:** Understand entities, relationships and access patterns; normalize to avoid redundancy (3NF), then denormalize selectively for performance; choose keys, constraints and indexes; plan for audit fields and soft deletes where needed.

Tip: Access patterns drive design.`, 'B', 'M'],

["Background Jobs", "How do you implement background jobs?",
`**Answer:** Queue-backed workers (Celery, BullMQ, Hangfire, Sidekiq), scheduled jobs with locking to avoid duplicates, retries with backoff, dead-letter handling, and monitoring.

Tip: Avoid duplicate scheduled runs across instances.`, 'B', 'M'],

["Config", "How do you manage configuration and secrets?",
`**Answer:** Environment-based config (12-factor), secrets in a vault (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault), no secrets in code or images, rotation policies, and least-privilege access.

Tip: 12-factor app.`, 'B', 'M']
];
