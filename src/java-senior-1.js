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
