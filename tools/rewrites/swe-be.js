// Rewritten Software Engineering — Backend Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix swe-be-).
module.exports = {

'What are idempotent methods and why do they matter?':
`**Why they ask:** retries are everywhere in distributed systems.

**Answer:**
"An idempotent operation has the same effect whether it runs once or ten times. GET, PUT and DELETE should be idempotent; POST usually isn't. It matters most for payments: if a client sends 'charge $50', times out and retries, a non-idempotent endpoint charges twice. So the client sends an Idempotency-Key header; the server stores the key with the result, and a retry with the same key just returns the original response instead of charging again."

Tip: Payment example.`,

'How do you version an API?':
`**Why they ask:** API evolution without breaking clients.

**Answer:**
"URL versioning like /v1/orders, a header, or a media type. URL versioning is the most visible and simplest for public APIs. But I try hard to avoid new versions at all: additive changes — new optional fields, new endpoints — are backward compatible. I only version for breaking changes, and deprecate the old version with notice, Deprecation and Sunset headers, and usage tracking so we know who still calls it."

Tip: Avoid breaking changes when possible.`,

'REST vs gRPC vs GraphQL?':
`**Why they ask:** choosing the right interface.

**Answer:**
"REST is simple, HTTP-native and cacheable — my default for public APIs. gRPC uses binary Protobuf over HTTP/2, so it's fast, strongly typed and supports streaming — great for internal service-to-service calls. GraphQL lets the client ask for exactly the fields it needs across many sources — good for frontends aggregating data, like a mobile app screen that would otherwise need six REST calls."

Tip: Use-case driven.`,

'SQL vs NoSQL — how do you choose?':
`**Why they ask:** data store judgment.

**Answer:**
"Relational databases like PostgreSQL for structured data, transactions, joins and integrity constraints — which is most business data. NoSQL for specific needs: document stores like MongoDB for flexible schemas, key-value stores like Redis or DynamoDB for very fast lookups at scale, wide-column like Cassandra for massive write volumes, and graph databases for relationship-heavy queries. My default is Postgres until a clear access pattern proves otherwise."

Tip: "Postgres until proven otherwise" is a common stance.`,

'Explain database indexes and their trade-offs.':
`**Why they ask:** the most common performance lever.

**Answer:**
"An index — usually a B-tree — lets the database find rows without scanning the table, speeding up lookups, joins and sorts, at the cost of slower writes and extra storage. Column order in a composite index matters: an index on (customer_id, created_at) helps WHERE customer_id = 42 ORDER BY created_at, but not a query filtering only on created_at — that's the leftmost-prefix rule. I confirm with EXPLAIN, and avoid wrapping indexed columns in functions, like WHERE LOWER(email) = ..., which stops the index being used unless there's a matching expression index."

Tip: Leftmost prefix rule.`,

'What are ACID properties and isolation levels?':
`**Why they ask:** correctness under concurrency.

**Answer:**
"Atomicity — all or nothing; Consistency — constraints hold; Isolation — concurrent transactions don't interfere; Durability — committed data survives a crash. Isolation levels trade consistency for concurrency: Read Uncommitted allows dirty reads; Read Committed — the default in Postgres and SQL Server — prevents those but allows non-repeatable reads; Repeatable Read prevents those; Serializable prevents phantoms too, at the cost of more conflicts and retries."

Tip: Know your DB's default level.`,

'What is the N+1 query problem?':
`**Why they ask:** the most common ORM performance bug.

**Answer:**
"You load a list with one query — say 100 orders — then the code touches order.customer in a loop and the ORM fires 100 more queries, one per customer. 101 round trips instead of 2. The fix is a join or eager loading — include in Entity Framework or Prisma, select_related or prefetch_related in Django — or batching with a DataLoader in GraphQL. I spot it by counting queries per request in logs or APM."

Tip: Very common ORM issue.`,

'How do you handle database migrations safely?':
`**Why they ask:** zero-downtime deployments.

**Answer:**
"Version-controlled migrations with Flyway, Liquibase, Alembic or EF migrations, run by the pipeline. For breaking changes, expand and contract: to rename a column, add the new one, deploy code that writes both, backfill, switch reads, and only later drop the old one — so old and new code versions both work during the rollout. I also avoid long locks on big tables — for example, creating indexes concurrently in Postgres — and test against production-sized data."

Tip: Expand/contract for zero downtime.`,

'How and where do you use caching?':
`**Why they ask:** performance and its pitfalls.

**Answer:**
"At several layers: a CDN for static and cacheable responses, Redis for hot data and sessions, and in-process memoization. Usually cache-aside — read the cache, on a miss load from the database and populate it with a TTL. The hard parts are invalidation — I delete the key on update — and stampedes, where a popular key expires and a thousand requests hit the database at once; jittered TTLs or a lock so one request rebuilds the value fix that. And never cache per-user data under a shared key."

Tip: "Cache invalidation is hard" — show you've handled it.`,

'How do you prevent race conditions when updating data?':
`**Why they ask:** concurrency correctness.

**Answer:**
"Take inventory: two customers buying the last item at the same moment. Reading stock, checking it's above zero and then writing creates a race. The simplest fix is an atomic statement: UPDATE products SET stock = stock - 1 WHERE id = 7 AND stock > 0 — if it affects zero rows, it's sold out. Other tools: SELECT ... FOR UPDATE row locks inside a transaction, optimistic concurrency with a version column that rejects stale writes, and distributed locks only when the data spans systems."

Tip: Inventory decrement example.`,

'When would you use a message queue?':
`**Why they ask:** asynchronous design.

**Answer:**
"To decouple services, absorb load spikes, run work asynchronously — sending emails, resizing images — and improve resilience, since the producer keeps working if a consumer is down. RabbitMQ, SQS or Azure Service Bus for task queues; Kafka for event streaming. Consumers must be idempotent because messages can be delivered more than once, with retries and a dead-letter queue for poison messages."

Tip: Idempotent consumers.`,

'Kafka vs RabbitMQ?':
`**Why they ask:** messaging trade-offs.

**Answer:**
"Kafka is a distributed log: very high throughput, messages retained for days so consumers can replay them, consumer groups for scaling, and ordering within a partition. RabbitMQ is a traditional broker with flexible routing — exchanges, topics, priorities — great for task queues and low-latency messaging, and messages are gone once consumed. If I need to replay events or feed many independent consumers, Kafka; for job queues, RabbitMQ or SQS."

Tip: Replay is Kafka's key differentiator.`,

'Monolith vs microservices?':
`**Why they ask:** architecture judgment.

**Answer:**
"A well-structured modular monolith is simpler to build, test, deploy and debug — ideal early on. Microservices let separate teams deploy and scale independently, but bring network failures, distributed data, harder observability and real operational overhead. I'd start with a modular monolith with clean domain boundaries, and split out a service when team size or a specific scaling need justifies it."

Tip: "Start with a modular monolith."`,

'How do you handle transactions across microservices?':
`**Why they ask:** distributed data consistency.

**Answer:**
"I avoid two-phase commit. Instead, a saga: a sequence of local transactions, each with a compensating action. Placing an order: reserve inventory, charge payment, create shipment; if payment fails, the saga releases the inventory. It can be orchestrated by a coordinator or choreographed through events. To publish events reliably, I use the outbox pattern: write the order and an outbox row in the same database transaction, and a relay publishes from the outbox — so we never commit data without its event, or the reverse."

Tip: Outbox pattern shows depth.`,

'How do you secure a backend API?':
`**Why they ask:** security is part of the job.

**Answer:**
"Authentication with OAuth 2.0 or OIDC and proper JWT validation; authorization on every request, including object-level — checking that order 123 actually belongs to the caller; input validation; parameterized queries; rate limiting; secrets in a vault, not code; TLS; security headers; dependency scanning; and logs that never contain passwords or tokens. Object-level authorization is the flaw I see most — changing an ID in the URL shouldn't reveal someone else's data."

Tip: Object-level authorization (IDOR) is the most common API flaw.`,

'JWT vs session cookies?':
`**Why they ask:** auth design trade-offs.

**Answer:**
"Sessions keep state on the server with a session ID in a cookie — revoking access is just deleting the session. JWTs are self-contained signed tokens — stateless and easy to scale, but you can't easily revoke one before it expires. So JWTs should be short-lived, around 15 minutes, with refresh tokens. For browsers, I store tokens in httpOnly, Secure, SameSite cookies rather than localStorage, so injected scripts can't read them."

Tip: Revocation trade-off.`,

'What is the OWASP API Security Top 10?':
`**Why they ask:** API threat awareness.

**Answer:**
"The common API risks: broken object-level authorization, broken authentication, broken object property-level authorization — like letting a user set isAdmin in a PATCH — unrestricted resource consumption, broken function-level authorization, server-side request forgery, security misconfiguration, and improper inventory management of old or shadow APIs. BOLA is number one."

Tip: Lead with BOLA.`,

'How do you find and fix a slow endpoint?':
`**Why they ask:** practical performance work.

**Answer:**
"Measure first with tracing or APM to see where the time goes — database, external calls or CPU. Then check query plans and indexes, add caching, batch or parallelize calls, paginate, and move heavy work to background jobs, then load test to confirm. On one endpoint, p95 was 1.8 seconds; the trace showed 60 queries from an N+1 plus a sequential scan. A join and one index took it to 220 milliseconds."

Tip: Numbers.`,

'How do you scale a backend service?':
`**Why they ask:** scalability fundamentals.

**Answer:**
"Make it stateless so instances behind a load balancer scale horizontally, with sessions in Redis rather than memory. Then caching, read replicas for the database, connection pooling, partitioning or sharding for very large data, async processing with queues, and autoscaling on metrics like CPU or request rate. The database is usually the bottleneck, so I protect it first."

Tip: Stateless first.`,

'How do you make a service resilient to failures?':
`**Why they ask:** production thinking.

**Answer:**
"Timeouts on every external call — a missing timeout lets one slow dependency tie up every thread. Retries with exponential backoff and jitter, only for idempotent operations. Circuit breakers to fail fast when a dependency is down, bulkheads to isolate resource pools, graceful degradation, health checks, and redundancy across zones."

Tip: Timeouts everywhere.`,

'What does good observability look like?':
`**Why they ask:** operability.

**Answer:**
"Structured JSON logs with a correlation ID passed through every service, metrics — RED for services: rate, errors, duration; USE for resources — distributed tracing, dashboards per service, and alerts on user-facing SLOs rather than every internal metric. With a correlation ID, I can follow one failed checkout across five services in seconds."

Tip: Correlation IDs.`,

'How do you test backend services?':
`**Why they ask:** quality practices.

**Answer:**
"Unit tests for business logic, integration tests against real dependencies using Testcontainers — a real Postgres and Kafka in Docker instead of mocks — contract tests between services, API tests, and a small set of end-to-end tests. Test data builders keep tests readable, and every test is independent so they run in parallel."

Tip: Testcontainers mention.`,

'How does Node.js handle concurrency?':
`**Why they ask:** runtime understanding.

**Answer:**
"A single-threaded event loop with non-blocking I/O — the OS and libuv's thread pool handle the waiting, and callbacks run when results are ready. So Node handles thousands of concurrent I/O-bound requests well. But CPU-heavy work — hashing large files, image processing — blocks the loop and stalls every request; that goes to worker threads or a separate service. Streams handle large data, and running multiple instances uses all CPU cores."

Tip: Don't block the event loop.`,

'What is the GIL and how does it affect Python backends?':
`**Why they ask:** Python runtime depth.

**Answer:**
"The Global Interpreter Lock lets only one thread run Python bytecode at a time in CPython, so threads don't speed up CPU-bound work. I/O-bound work is fine with threads or asyncio, because the GIL is released while waiting. CPU-bound work uses multiprocessing or native extensions like NumPy. Python 3.13 introduced an experimental free-threaded build without the GIL, but most production code still assumes it."

Tip: Know async frameworks like FastAPI.`,

'FastAPI vs Django vs Flask?':
`**Why they ask:** framework fit.

**Answer:**
"Django is batteries-included — ORM, admin, auth — ideal for full applications with a database-heavy back office. FastAPI is async with type-hint-driven validation through Pydantic and automatic OpenAPI docs — my choice for modern APIs. Flask is minimal and flexible — good for small services where you want to pick each piece."

Tip: Choose by project needs.`,

"What's important in modern .NET backend development?":
`**Why they ask:** .NET depth.

**Answer:**
"ASP.NET Core with minimal APIs or controllers, built-in dependency injection, async/await end to end, Entity Framework Core — or Dapper for hot paths — the middleware pipeline, configuration with the options pattern, ILogger structured logging, and health checks. I work on the current LTS release, .NET 8, and track the yearly releases."

Tip: Mention current LTS version use.`,

'Design a rate limiter.':
`**Why they ask:** a classic design question.

**Answer:**
"Algorithms: fixed window, sliding window, token bucket and leaky bucket. I'd use token bucket — say 100 tokens refilled at 10 per second per API key — because it allows short bursts while enforcing an average rate. Across many servers, state lives in Redis, updated atomically with a Lua script so two servers can't both spend the last token. When the bucket's empty, return 429 with a Retry-After header."

Tip: Token bucket explanation.`,

'How would you design a URL shortener?':
`**Why they ask:** classic system design.

**Answer:**
"Generate a short key by base62-encoding a unique ID — seven characters give 62 to the power of 7, about 3.5 trillion combinations — or hash with collision checks. Store the mapping in a key-value store or an indexed SQL table. Redirect with 301 for permanent links or 302 if we want to count every click, cache hot keys in Redis, record analytics asynchronously through a queue, and add rate limiting and malicious-URL checks."

Tip: Classic system design question.`,

"Find duplicates in a large file that doesn't fit in memory.":
`**Why they ask:** algorithmic thinking with constraints.

**Answer:**
"Partition first. Stream the file once and send each line to one of, say, 100 bucket files based on hash(line) mod 100 — identical lines always land in the same bucket. Each bucket is now small enough to load, so I process them one at a time with a hash set and report duplicates. Alternatively, an external merge sort, then one pass comparing adjacent lines."

Tip: Divide and conquer.`,

'How would you design a notification service?':
`**Why they ask:** system design breadth.

**Answer:**
"An API accepts notification requests and puts them on a queue. Workers per channel — email, SMS, push — call providers like SES or Twilio, using templates and checking user preferences and opt-outs first. Retries with backoff, idempotency keys so a retry doesn't send twice, rate limits per user, a fallback provider, and delivery status tracking."

Tip: Preferences and retries.`,

'How do you handle file uploads at scale?':
`**Why they ask:** practical architecture.

**Answer:**
"The API issues a pre-signed URL so the client uploads directly to S3 or Blob storage, bypassing our servers. An event then triggers asynchronous virus scanning and validation, metadata goes in the database, downloads go through a CDN, and lifecycle policies handle retention. Proxying a 2 GB video through app servers wastes memory and threads."

Tip: Don't proxy large files through your app servers.`,

'Which cloud services do backend engineers commonly use?':
`**Why they ask:** cloud fluency.

**Answer:**
"Compute — containers on ECS, EKS or AKS, and serverless functions — managed databases like RDS, object storage, queues and event buses, secrets managers, API gateways and monitoring. Most of my work has been on AWS: ECS Fargate, RDS Postgres, SQS and S3."

Tip: Mention your cloud provider experience.`,

'When is serverless a good fit?':
`**Why they ask:** balanced judgment.

**Answer:**
"Event-driven or spiky workloads, small APIs, scheduled jobs and glue code — you pay per use and manage no servers. Trade-offs are cold starts, execution time limits, vendor lock-in and harder local testing. A webhook handler that runs 500 times a day is perfect; a latency-critical API with steady high traffic usually isn't."

Tip: Balanced.`,

'Why use Docker for backend services?':
`**Why they ask:** container basics.

**Answer:**
"Consistent environments from laptop to production, isolated dependencies, easy scaling with orchestrators, and reproducible builds. I use small base images, multi-stage builds so compilers don't ship, and run as a non-root user."

Tip: Security best practices.`,

'What should a backend CI/CD pipeline include?':
`**Why they ask:** delivery practices.

**Answer:**
"Linting and static analysis, unit and integration tests, security scans — SAST and dependency checks — a container build and image scan, deployment to staging with smoke tests, a progressive production rollout with canary or blue-green, and automatic rollback when error rates rise."

Tip: Progressive delivery.`,

'How do you handle large data processing jobs?':
`**Why they ask:** batch processing design.

**Answer:**
"Process in chunks with checkpoints so a failure at row 8 million restarts from the last checkpoint, not from zero. Idempotent writes so reprocessing a chunk is safe, parallel workers, backpressure so we don't overwhelm the database, and monitoring of progress and failures."

Tip: Restartability.`,

'Tell me about a system you designed.':
`**Why they ask:** proof of design skill.

**Answer:**
"I designed an order processing service handling 2,000 orders a minute at peak: a stateless API, PostgreSQL with read replicas, outbox events to Kafka for fulfillment and billing, idempotency keys and autoscaling. p99 latency stayed under 300 milliseconds through Black Friday."

Tip: Scale, choices, results.`,

'Tell me about an incident you handled.':
`**Why they ask:** production ownership.

**Answer:**
"A deploy caused database connection pool exhaustion and timeouts across the API. I rolled back within minutes, then found an error path that never released its connection. I fixed it, added a test for that path and an alert on pool usage, and wrote a blameless postmortem."

Tip: Calm, root cause, prevention.`,

'How do you approach code reviews?':
`**Why they ask:** collaboration.

**Answer:**
"I focus on correctness, security, readability, tests and design; I'm specific and kind, explain my reasoning, label nitpicks as optional, and approve when it's good enough rather than holding out for perfect."

Tip: Constructive reviews.`,

'How would you integrate an LLM API into a backend?':
`**Why they ask:** current demand.

**Answer:**
"Wrap calls in a dedicated service with timeouts, retries and a fallback model; stream responses for perceived speed; version prompts like code; add retrieval from approved data, with authorization enforced on what's retrieved; log usage and cost per feature; defend against prompt injection by treating retrieved content as untrusted; and run evaluations on a test set before changing prompts or models."

Tip: Security and cost.`,

'What makes a senior backend engineer?':
`**Why they ask:** leveling.

**Answer:**
"Designing reliable, scalable systems with sensible trade-offs, owning production quality, mentoring others, writing clear design docs, and anticipating failure modes before they happen. For example, my design reviews always include 'what happens when this dependency is slow?'"

Tip: Examples.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward staff engineer or architect — distributed systems, platform design and technical leadership."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build scalable, secure services and own them in production — I've designed high-throughput systems, cut latency by 80%, and improved reliability with better observability and resilience patterns."

Tip: Proof.`,

'What are common HTTP status codes a backend should return?':
`**Why they ask:** API correctness.

**Answer:**
"200 OK, 201 Created, 202 Accepted for async work, 204 No Content; 400 for validation errors, 401 when not authenticated, 403 when authenticated but not allowed, 404, 409 for conflicts like a duplicate, 422 for semantic validation failures, 429 when rate limited; 500, 502, 503 when unavailable, and 504 for gateway timeouts. The 401 versus 403 distinction trips people up: 401 is 'who are you?', 403 is 'I know who you are, and no.'"

Tip: 401 vs 403 distinction.`,

'How do you design a database schema?':
`**Why they ask:** data modeling.

**Answer:**
"Understand the entities, relationships and — most importantly — access patterns. Normalize to third normal form to avoid redundancy, then denormalize selectively where reads need it. Choose keys, constraints and indexes, and plan audit fields like created_at and updated_by, plus soft deletes where history matters."

Tip: Access patterns drive design.`,

'How do you implement background jobs?':
`**Why they ask:** async processing.

**Answer:**
"Queue-backed workers — Celery, BullMQ, Hangfire or Sidekiq — with retries and backoff, dead-letter handling and monitoring. For scheduled jobs across multiple instances, a lock or leader election so the nightly report doesn't run three times."

Tip: Avoid duplicate scheduled runs across instances.`,

'How do you manage configuration and secrets?':
`**Why they ask:** operational hygiene.

**Answer:**
"Environment-based config following the twelve-factor approach, secrets in a vault — AWS Secrets Manager, Azure Key Vault or HashiCorp Vault — never in code or images, rotation policies, and least-privilege access to each secret."

Tip: 12-factor app.`,

'What is connection pooling and why does it matter?':
`**Why they ask:** a frequent outage cause.

**Answer:**
"Opening a database connection is expensive — TLS, authentication, memory on the server — so a pool keeps open connections that requests reuse. Size it to what the database can handle: 20 app instances with a pool of 50 each is 1,000 connections, which can overwhelm Postgres. Release connections promptly, and use an external pooler like PgBouncer for many instances or serverless."

Tip: Pool exhaustion is a common outage cause.`,

'What is event sourcing and when would you use it?':
`**Why they ask:** advanced patterns.

**Answer:**
"Instead of storing current values, you store an append-only sequence of events — AccountOpened, Deposited $100, Withdrew $30 — and rebuild state by replaying them. It gives a perfect audit trail and lets you ask what the state was at any point in time, so it suits ledgers and finance, often with CQRS for read models. It adds real complexity, so I use it only when those benefits matter."

Tip: Balanced view.`,

};
