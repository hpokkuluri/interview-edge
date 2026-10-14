QB['java-senior'] = (QB['java-senior'] || []).concat([
['Design', 'Which design patterns do you use most in Java and why?',
`- **Strategy** — swap algorithms (e.g. pricing rules).
- **Factory/Builder** — object creation with many options (records + builders).
- **Decorator** — add behavior (caching, logging) around interfaces.
- **Observer/event** — decoupled notifications (Spring events).
- **Template method** — shared workflow with variable steps.
- **Adapter** — integrate external APIs.
Use patterns to solve real problems, not for their own sake.`, 'B'],

['Design', 'Explain SOLID principles with examples.',
`- **S**ingle responsibility: a class has one reason to change (separate OrderValidator from OrderRepository).
- **O**pen/closed: extend via new implementations, not editing (strategy for payment types).
- **L**iskov substitution: subclasses honor contracts (a ReadOnlyList shouldn't throw on add if List promises add).
- **I**nterface segregation: small focused interfaces.
- **D**ependency inversion: depend on abstractions; inject dependencies.`, 'B'],

['Design', 'How do you approach writing clean, maintainable code in a team?',
`- **Readable names**, small methods, clear boundaries.
- **Tests** as safety net and documentation.
- **Code reviews** focused on design and correctness.
- **Consistent style** (formatters, linters, static analysis — Sonar, Error Prone).
- **Refactor** continuously; avoid premature abstraction.
- Document decisions (ADRs) for non-obvious choices.`, 'B'],

['Microservices', 'How do microservices communicate and how do you handle failures?',
`- **Synchronous**: REST/gRPC — simple but coupled in availability.
- **Asynchronous**: events/messages (Kafka) — decoupled, eventual consistency.
- **Failure handling**: timeouts, retries with backoff and jitter, **circuit breakers** (Resilience4j), bulkheads, fallbacks, idempotency.
- **Observability**: tracing (OpenTelemetry) across calls.`, 'D'],

['Microservices', 'How do you handle distributed transactions across services?',
`- Avoid 2PC across services.
- **Saga pattern**: sequence of local transactions with compensating actions — **orchestration** (central coordinator) or **choreography** (events).
- **Transactional outbox**: write state change and event in the same DB transaction; publish via relay/CDC (Debezium).
- **Idempotent consumers**.
- Design for eventual consistency in the UX.`, 'D'],

['Performance', 'How do you design caching in a Java service?',
`- **Local cache** (Caffeine) for hot, small data; **distributed cache** (Redis) for shared state.
- **Patterns**: cache-aside, read-through, write-through.
- **Invalidation**: TTLs, events on change, versioned keys.
- **Avoid**: caching without bounds, stale data issues for critical values, cache stampede (use request coalescing, jittered TTL).
- Measure hit rates.`, 'D'],

['Performance', 'A REST endpoint went from 100 ms to 2 s. How do you investigate?',
`- **Observability**: traces to see which span is slow (DB, downstream API, CPU).
- **Recent changes**: deploys, data growth, config.
- **DB**: slow query logs, execution plans, missing indexes, locks.
- **Downstream**: latency, timeouts, retries.
- **JVM**: GC pauses, thread pool exhaustion, connection pool waits (HikariCP metrics).
- Fix root cause; add alerts on latency percentiles.`, 'D'],

['Data', 'How do you approach SQL and database design as a Java engineer?',
`- **Normalize** for integrity; denormalize consciously for reads.
- **Indexes** based on query patterns; check plans.
- **Transactions** short; correct isolation level.
- **Pagination** with keyset for large tables.
- **Migrations** with Flyway/Liquibase; backward-compatible changes for zero-downtime deploys.
- Avoid ORM magic hiding expensive queries.`, 'B'],

['Security', 'How do you secure a Spring Boot API?',
`- **Spring Security** with **OAuth2/OIDC** (JWT resource server), scopes/roles.
- **Input validation** (Bean Validation), output encoding.
- **Protect** against injection (parameterized queries), CSRF (for browser sessions), SSRF.
- **Secrets** in a vault, not config files.
- **Dependency scanning** (OWASP, Snyk), patching.
- **Rate limiting** and audit logs.`, 'B'],

['Observability', 'What does good observability look like for a Java service?',
`- **Metrics** (Micrometer → Prometheus): RED (rate, errors, duration), JVM, pools.
- **Structured logs** with correlation IDs.
- **Distributed tracing** (OpenTelemetry).
- **Dashboards** and **alerts** on SLOs (latency percentiles, error rates).
- **Health checks** (liveness/readiness) via Actuator.`, 'B'],

['DevOps', 'How do you package and deploy Java services in containers?',
`- **Layered jars**/Buildpacks or Jib for efficient images; small base images (distroless/JRE).
- **JVM container awareness** (MaxRAMPercentage).
- **Health probes**, graceful shutdown.
- **CI/CD**: build, test, scan, deploy (Kubernetes) with blue/green or canary.
- **Config** via environment/ConfigMaps; secrets via vault.
- Consider **GraalVM native images** for fast startup where suitable.`, 'B'],

['Coding', 'How would you implement an LRU cache in Java?',
`- **LinkedHashMap** with accessOrder=true and override removeEldestEntry when size > capacity — simplest.
- Or **HashMap + doubly linked list** for O(1) get/put manually.
- Thread safety: wrap with locks or use **Caffeine** in production (better eviction — W-TinyLFU).
- Discuss trade-offs and complexity in interviews.`, 'B'],

['Coding', 'How would you design a rate limiter?',
`- **Algorithms**: token bucket (bursts allowed), leaky bucket, fixed window, sliding window log/counter.
- **Single node**: in-memory (Bucket4j).
- **Distributed**: Redis with atomic Lua scripts or gateway-level limits.
- **Per key** (user/API key/IP), headers for remaining quota, 429 responses.
- Consider fairness and clock issues.`, 'D'],

['Coding', 'Find duplicates in a large file that doesn\'t fit in memory — how?',
`- **External sort**: split into sorted chunks on disk, merge — duplicates adjacent.
- **Hash partitioning**: hash each line into N files so duplicates land in the same partition; process each partition in memory with a HashSet.
- **Probabilistic**: Bloom filter to detect likely duplicates, then verify.
- Discuss I/O, memory, and parallelism.`, 'D'],

['Modern Java', 'What notable features came in Java 17 and 21 LTS?',
`- **Java 17**: sealed classes, records (final), pattern matching for instanceof, text blocks, strong encapsulation of JDK internals, new random generators.
- **Java 21**: virtual threads, record patterns, pattern matching for switch, sequenced collections, generational ZGC, string templates (preview, later withdrawn).
- Plan upgrades: test, check dependencies, use new features where they simplify code.`, 'B'],

['Behavioral', 'Tell me about a challenging production issue you solved.',
`## Example (STAR)
- **Situation**: intermittent 500 errors under peak load.
- **Action**: traces showed DB connection pool exhaustion; found a slow downstream call inside a @Transactional method holding connections; moved the call outside the transaction, added timeouts and a circuit breaker.
- **Result**: errors gone; p99 latency down 60%; added connection pool alerts.`, 'B'],

['Behavioral', 'How do you mentor junior engineers?',
`- **Code reviews** that teach (explain why).
- **Pairing** on hard problems.
- **Small ownership** areas with support.
- Encourage **asking questions** early.
- Share resources and patterns.`, 'B'],

['Behavioral', 'How do you handle disagreement in a code review?',
`- Focus on **code and outcomes**, not people.
- Explain reasoning with **evidence** (performance data, standards).
- Be open to being wrong; propose experiments.
- Escalate to team conventions or a tech lead if stuck; document decisions.`, 'B'],

['Behavioral', 'Describe a time you improved system performance or reliability.',
`- **Example**: reduced batch job runtime from 3 hours to 25 minutes by replacing row-by-row JPA updates with JDBC batch updates, parallelizing by partition and adding indexes.
- Include **measurement**, **approach**, **result**, **follow-up monitoring**.`, 'B'],

['Design', 'How would you design an idempotent payment API?',
`- **Idempotency-Key** header from client; store key + request hash + response.
- On retry with same key: return stored response; different payload → 409/422.
- **Atomic** creation (unique constraint on key).
- **Expiry** policy for keys.
- Downstream calls to payment providers also idempotent.
- Handle **in-progress** state for concurrent retries.`, 'D'],

['Testing', 'How do you test concurrent code?',
`- Design for testability (inject executors/clocks).
- **Stress tests** with many threads; **jcstress** for low-level concurrency.
- **Deterministic** tests via controlled executors.
- **Awaitility** for async assertions.
- Static analysis and code review for race conditions.`, 'D'],

['Spring', 'What is Spring WebFlux and when would you choose it over MVC?',
`- **Reactive**, non-blocking stack (Reactor) for high-concurrency I/O with few threads; backpressure support.
- Choose when: streaming, very high concurrency with non-blocking drivers end to end (R2DBC, reactive clients).
- **MVC + virtual threads** now covers many high-concurrency cases with simpler code.
- Reactive adds complexity in debugging and learning curve.`, 'D'],

['Data', 'How do you handle schema changes with zero downtime?',
`- **Expand and contract**: add new columns/tables (nullable), deploy code writing both, backfill, switch reads, remove old fields later.
- Avoid locking migrations on big tables (online DDL tools).
- **Backward-compatible** APIs during rollout.
- Feature flags for switching.`, 'D'],

['Behavioral', 'Why should we hire you as a Senior Java Engineer?',
`- **Depth**: Java/JVM, Spring, data, distributed systems.
- **Delivery**: production systems you've built and run.
- **Quality**: testing, observability, clean code.
- **Team**: mentoring, collaboration.
- Tie to their stack and problems.`, 'B'],

['Core Java', 'What is the difference between Comparable and Comparator?',
`- **Comparable** (compareTo): the class's **natural ordering**, implemented by the class itself.
- **Comparator**: external ordering strategies — Comparator.comparing(Person::lastName).thenComparing(...).
- Keep compareTo consistent with equals for sorted collections (TreeSet/TreeMap).`, 'B'],

['Core Java', 'How does String handling work in Java (immutability, pool, StringBuilder)?',
`- **Immutable** — safe sharing, hash caching.
- **String pool** for literals; intern() to add.
- Concatenation in loops → use **StringBuilder**; compiler optimizes simple concatenations (invokedynamic since Java 9).
- Compact strings (Latin-1 storage) since Java 9 save memory.`, 'B']
]);
