// java-senior — generated from src/java-senior-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Senior Java Engineer. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['java-senior'] = (QB['java-senior'] || []).concat([
['Core Java', 'Explain the equals() and hashCode() contract.',
`- If two objects are **equal** (equals returns true), they **must** have the same hashCode.
- Equal hashCodes don't imply equality (collisions allowed).
- equals must be reflexive, symmetric, transitive, consistent, and x.equals(null) is false.
- Breaking the contract breaks **HashMap/HashSet** (objects "lost" in buckets).
- Use the same fields in both; prefer **records** or IDE/Objects.hash for generation; be careful with mutable fields used as keys.`, 'B'],

['Core Java', 'How does HashMap work internally?',
`- Array of **buckets**; index = hash(key) & (n - 1) (hash spread with high bits).
- Collisions stored in a **linked list**, converted to a **red-black tree** when a bucket exceeds 8 entries (and table ≥ 64) — O(log n) worst case.
- **Load factor** 0.75 → resize (double) and rehash when exceeded.
- Allows one null key.
- Not thread-safe — use **ConcurrentHashMap** for concurrency.`, 'D'],

['Core Java', 'What are the differences between ArrayList, LinkedList and ArrayDeque?',
`- **ArrayList**: dynamic array; O(1) random access; amortized O(1) append; O(n) insert/remove in middle. Best default.
- **LinkedList**: doubly linked; O(1) insert/remove at known node but O(n) access; poor cache locality — rarely the best choice.
- **ArrayDeque**: resizable circular array; fast add/remove at both ends; ideal for stacks/queues (better than Stack/LinkedList).`, 'B'],

['Core Java', 'What are records, sealed classes and pattern matching in modern Java?',
`- **Records** (Java 16): concise immutable data carriers — auto constructor, accessors, equals/hashCode/toString.
- **Sealed classes/interfaces** (Java 17): restrict which classes can extend/implement — model closed hierarchies.
- **Pattern matching**: instanceof with binding (Java 16), **switch patterns** and **record patterns** (Java 21) — exhaustive switches over sealed types.
- Together they enable algebraic-data-type style modeling with compiler-checked exhaustiveness.`, 'B'],

['Core Java', 'Why is immutability valuable and how do you create an immutable class?',
`- **Thread-safe** without synchronization; safe to share and cache; easier reasoning; good map keys.
- How: final class (or sealed), private final fields, no setters, **defensive copies** of mutable inputs/outputs (or use immutable collections — List.copyOf), initialize everything in constructor.
- **Records** give shallow immutability — still copy mutable components.`, 'B'],

['Core Java', 'Checked vs unchecked exceptions — how do you design exception handling?',
`- **Checked** (Exception subclasses): must be declared/handled — for recoverable conditions callers should handle.
- **Unchecked** (RuntimeException): programming errors or conditions callers can't reasonably handle.
- Modern practice: mostly unchecked, with **meaningful custom exceptions**, translation at layer boundaries, never swallow exceptions, include context, use try-with-resources.
- Centralized handling (e.g. @ControllerAdvice) at API edges.`, 'B'],

['Streams', 'Explain Java Streams and common pitfalls.',
`- Declarative pipelines: source → intermediate ops (map, filter, sorted — lazy) → terminal op (collect, reduce).
- **Pitfalls**: side effects in lambdas, reusing a consumed stream, parallel streams on small data or with shared state, boxing overhead (use IntStream), complex nested streams hurting readability, checked exceptions in lambdas.
- Use streams for clarity, loops when they're clearer or faster.`, 'B'],

['Concurrency', 'Explain the Java Memory Model, volatile and happens-before.',
`- The JMM defines **visibility** and **ordering** guarantees between threads.
- **happens-before**: if A happens-before B, B sees A's effects. Established by: program order, monitor unlock → lock, volatile write → read, thread start/join, final field semantics.
- **volatile**: guarantees visibility and ordering for that variable, not atomicity of compound actions (count++ is not atomic).
- Use **Atomic*** classes or locks for atomic updates.`, 'D'],

['Concurrency', 'synchronized vs ReentrantLock vs atomic variables — when do you use each?',
`- **synchronized**: simple, intrinsic lock; automatic release; good default.
- **ReentrantLock**: tryLock with timeout, interruptible locking, fairness, multiple Conditions — for advanced needs.
- **Atomic variables** (AtomicInteger, LongAdder): lock-free CAS for single variables/counters — high throughput.
- **ReadWriteLock/StampedLock** for read-heavy data.
- Prefer higher-level concurrency utilities (ConcurrentHashMap, executors) over manual locking.`, 'D'],

['Concurrency', 'What are virtual threads (Project Loom) and when should you use them?',
`- **Virtual threads** (Java 21): lightweight threads managed by the JVM, mounted on carrier platform threads; blocking I/O unmounts them cheaply.
- Enable **thread-per-request** style with millions of threads — simpler code than reactive for I/O-bound workloads.
- Use: Executors.newVirtualThreadPerTaskExecutor(), Spring Boot 3.2+ property spring.threads.virtual.enabled.
- **Caveats**: pinning in synchronized blocks during blocking (improved in Java 24), don't pool them, CPU-bound work gains nothing, ThreadLocal heavy usage costs memory.`, 'D'],

['Concurrency', 'How does ConcurrentHashMap achieve thread safety?',
`- Java 8+: **CAS** for inserting into empty bins, **synchronized on bin head** for updates — fine-grained locking.
- Reads are mostly lock-free (volatile reads).
- **Atomic compound operations**: computeIfAbsent, merge, compute.
- Size via counter cells (like LongAdder).
- No null keys/values.
- Iterators are weakly consistent (no ConcurrentModificationException).`, 'D'],

['Concurrency', 'Explain CompletableFuture and how you compose async tasks.',
`- Represents an async result with composition: thenApply (map), thenCompose (flatMap), thenCombine (zip two), allOf/anyOf, exceptionally/handle for errors.
- Run on a **specified executor** (avoid the common pool for blocking I/O).
- **Timeouts**: orTimeout, completeOnTimeout.
- Pitfalls: forgetting error handling, blocking get() in request threads.
- With virtual threads, simple blocking code is often clearer.`, 'D'],

['Concurrency', 'How do you detect and prevent deadlocks?',
`- **Detect**: thread dumps (jstack, JFR) show "Found one Java-level deadlock"; monitoring tools.
- **Prevent**: consistent lock ordering, tryLock with timeouts, minimize lock scope, avoid calling external code while holding locks, use higher-level concurrent structures.
- Also watch for **database deadlocks** in transactions — consistent update ordering, short transactions.`, 'D'],

['JVM', 'Explain JVM memory areas and garbage collection basics.',
`- **Heap** (objects): young generation (Eden, survivors) and old generation; **Metaspace** (class metadata); **thread stacks**; code cache; direct memory.
- **GC**: most objects die young — minor GCs are cheap; promotion to old gen.
- Collectors: **G1** (default — balanced, region-based), **ZGC** (very low pause, large heaps, generational in Java 21), **Shenandoah**, **Parallel** (throughput).
- Tune with goals (pause vs throughput), heap sizing, and GC logs.`, 'D'],

['JVM', 'How would you troubleshoot a memory leak in a Java service?',
`- **Symptoms**: growing heap after full GCs, OutOfMemoryError, frequent GC.
- **Gather**: GC logs, heap dump (jcmd GC.heap_dump or -XX:+HeapDumpOnOutOfMemoryError), JFR recording.
- **Analyze** with Eclipse MAT/VisualVM: dominator tree, retained size, paths to GC roots.
- Common causes: unbounded caches/maps, static collections, listeners not removed, ThreadLocals in pools, unclosed resources, classloader leaks.
- Fix, add bounded caches (Caffeine), monitor heap trends.`, 'D'],

['JVM', 'How do you diagnose high CPU in a Java application?',
`- Identify the process and **threads** consuming CPU (top -H), convert thread IDs to hex, match with **thread dumps**.
- Use **async-profiler** or **JFR** for CPU flame graphs.
- Check **GC activity** (CPU spent in GC).
- Common causes: tight loops, inefficient algorithms, regex backtracking, excessive logging/serialization, lock contention spinning.`, 'D'],

['Spring', 'How does Spring Boot auto-configuration work?',
`- @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan.
- Auto-configuration classes (listed in META-INF/spring/...AutoConfiguration.imports) are applied **conditionally** — @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty.
- Your own beans take precedence (OnMissingBean).
- Debug with --debug or the conditions report (actuator /conditions).`, 'B'],

['Spring', 'Explain Spring bean scopes and the bean lifecycle.',
`- **Scopes**: singleton (default), prototype, request, session, application, websocket.
- **Lifecycle**: instantiate → populate properties (DI) → aware callbacks → BeanPostProcessor before → @PostConstruct / afterPropertiesSet → BeanPostProcessor after (proxies created) → ready → @PreDestroy on shutdown.
- Prototype beans in singletons need ObjectProvider/lookup to get new instances.`, 'B'],

['Spring', 'How do @Transactional and Spring proxies work, and what are common pitfalls?',
`- Spring creates a **proxy** around the bean; calls through the proxy start/commit/rollback transactions.
- **Pitfalls**: self-invocation (calling a @Transactional method from the same class bypasses the proxy), private methods not proxied, checked exceptions don't roll back by default (use rollbackFor), long transactions holding locks, mixing propagation (REQUIRES_NEW) without understanding.
- Keep transactions short; set readOnly for queries.`, 'D'],

['Data', 'What are common JPA/Hibernate performance problems?',
`- **N+1 queries** from lazy associations — fix with fetch joins, entity graphs, batch fetching.
- **Eager fetching** loading too much.
- **Large persistence contexts** in batch jobs — flush/clear periodically.
- **Missing indexes**.
- **Inefficient pagination** with fetch joins on collections.
- Use DTO projections for read models; enable SQL logging/statistics in dev.`, 'D'],

['Data', 'Optimistic vs pessimistic locking — when do you use each?',
`- **Optimistic** (@Version): no locks; detect conflicts at commit — for low-contention updates; handle OptimisticLockException with retry/user message.
- **Pessimistic** (SELECT ... FOR UPDATE): lock rows — for high-contention critical sections (e.g. inventory decrement) — risk deadlocks and reduced throughput.
- Alternatives: atomic SQL updates (UPDATE ... SET qty = qty - 1 WHERE qty > 0).`, 'D'],

['APIs', 'How do you design a good REST API?',
`- **Resources** as nouns, HTTP methods with correct semantics (GET safe, PUT/DELETE idempotent).
- **Status codes** meaningful (201, 204, 400, 404, 409, 422, 429).
- **Pagination**, filtering, sorting; consistent error format (RFC 9457 problem details).
- **Versioning** strategy.
- **Idempotency keys** for POSTs that create payments/orders.
- **Security** (OAuth2), rate limiting, OpenAPI documentation.`, 'B'],

['Testing', 'What is your testing strategy for a Spring Boot microservice?',
`- **Unit tests** (JUnit 5, Mockito) for business logic.
- **Slice tests** (@WebMvcTest, @DataJpaTest).
- **Integration tests** with **Testcontainers** (real DB, Kafka).
- **Contract tests** (Spring Cloud Contract/Pact) for APIs.
- **End-to-end** sparingly.
- Fast feedback in CI; coverage of critical paths, not vanity metrics.`, 'B'],

['Messaging', 'How does Kafka guarantee ordering and delivery, and how do you build reliable consumers?',
`- **Ordering** per partition; key-based partitioning keeps related events ordered.
- **Delivery**: producers with acks=all, idempotent producer, retries; consumers commit offsets after processing (at-least-once).
- **Exactly-once** within Kafka via transactions (read-process-write).
- **Reliable consumers**: idempotent processing (dedupe keys), retry topics and DLQ, handle rebalances, monitor lag.`, 'D']
]);

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
