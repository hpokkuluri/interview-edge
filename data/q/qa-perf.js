// qa-perf — generated from src/qa-perf-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Performance Test Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-perf'] = [
["Fundamentals", "What types of performance tests are there?",
`**Why they ask:** baseline vocabulary for the role.

**Answer:**
- **Load:** expected peak traffic — does it meet targets?
- **Stress:** beyond capacity — where and how does it break?
- **Spike:** sudden jumps (e.g. a flash sale).
- **Endurance/soak:** sustained load for hours — memory leaks, resource exhaustion.
- **Scalability:** how performance changes as resources are added.
- **Volume:** large data sizes.
- **Capacity:** maximum users or throughput within SLAs.

Tip: Give an example of when you'd run each.`, 'B', 'E'],

["Fundamentals", "Which performance metrics matter most?",
`**Answer:** Response time (average and percentiles — p90, p95, p99), throughput (requests or transactions per second), error rate, concurrency (active users), and resource utilization (CPU, memory, disk I/O, network, DB connections, thread pools, GC).

Tip: Explain why percentiles matter more than averages.`, 'B', 'E'],

["Fundamentals", "Why are percentiles better than averages?",
`**Answer:** Averages hide outliers. If 95 requests take 200 ms and 5 take 10 seconds, the average is about 690 ms — looks fine — but 1 in 20 users waits 10 seconds. p95 and p99 show the real worst-case experience that users feel.

Tip: The numbers example makes it stick.`, 'B', 'E'],

["Fundamentals", "What is Little's Law?",
`**Answer:** L = λ × W — average number of items in a system equals arrival rate × average time in the system. In load testing: concurrent users = throughput × (response time + think time).

**Example:** 100 requests/sec × (0.5 s response + 4.5 s think time) = 500 concurrent users.

Tip: Use it to sanity-check your workload model.`, 'D', 'M'],

["Workload", "How do you build a realistic workload model?",
`**Answer:** Use production analytics and logs: peak hour volumes, transaction mix (e.g. 60% browse, 25% search, 10% cart, 5% checkout), user journeys, think times, data variety, and background jobs. Agree targets (SLAs/SLOs) with the business, include growth projections (e.g. 2× peak), and validate the model with stakeholders.

Tip: A wrong workload model makes the whole test meaningless — say so.`, 'D', 'M'],

["Workload", "What is think time and pacing?",
`**Answer:** **Think time** is the pause between user actions (reading, typing) — it makes load realistic. **Pacing** controls how often each virtual user starts an iteration, so you hit a target transaction rate regardless of response times.

Tip: Without think time you over-stress the system unrealistically.`, 'B', 'E'],

["Workload", "Open vs closed workload models?",
`**Answer:** **Closed:** a fixed number of virtual users loop — new requests only start when previous ones finish, so slow responses reduce load (can hide problems). **Open:** requests arrive at a set rate regardless of responses, like real internet traffic — better for web systems. k6 "arrival-rate" executors and Gatling's open models support this.

Tip: Shows advanced understanding.`, 'D', 'S'],

["Tools", "Compare JMeter, LoadRunner, k6 and Gatling.",
`**Answer:**
- **JMeter:** open source, GUI and CLI, many protocols, huge community; heavier on resources.
- **LoadRunner (OpenText):** enterprise, broad protocol support (SAP, Citrix), strong analysis; licensed and costly.
- **k6:** JavaScript scripting, developer-friendly, great for CI, cloud option.
- **Gatling:** Scala/Java/Kotlin DSL, very efficient, good reports.
Choose by protocols, team skills, CI needs and budget.

Tip: Mention which you've used in depth.`, 'B', 'M'],

["Scripting", "What is correlation?",
`**Answer:** Capturing dynamic values from server responses — session IDs, CSRF tokens, view states, order IDs — and passing them into later requests. Without correlation, replayed scripts fail or behave unrealistically. In JMeter use extractors (regex, JSON, CSS); in k6 parse responses in code.

Tip: Give an example — capturing a CSRF token from the login page.`, 'B', 'E'],

["Scripting", "What is parameterization?",
`**Answer:** Replacing hard-coded values with varied test data — usernames, products, search terms — from CSV files or generators. It avoids unrealistic caching effects and data collisions (e.g. 1,000 users buying the same item).

Tip: Mention unique data per virtual user.`, 'B', 'E'],

["Scripting", "How do you validate responses in load scripts?",
`**Answer:** Add checks/assertions for status codes and key content (e.g. "Order confirmed" text or an order ID), not just HTTP 200 — servers sometimes return error pages with 200. Track check failures as errors.

Tip: A 200 isn't always success.`, 'B', 'E'],

["Execution", "How do you ramp up load during a test?",
`**Answer:** Gradually increase users or arrival rate (e.g. 10% steps every few minutes), hold at target for a steady state (30–60 minutes for load tests), then ramp down. Ramping shows where response times start degrading.

Tip: Note the "knee" in the response-time curve.`, 'B', 'M'],

["Execution", "How do you make sure the load generator isn't the bottleneck?",
`**Answer:** Monitor load generator CPU, memory and network; keep them below ~70–80%; distribute load across multiple injectors; use efficient tools/modes (JMeter non-GUI); and run a calibration test.

Tip: Many teams misdiagnose the injector as the application.`, 'D', 'M'],

["Environment", "How production-like does the test environment need to be?",
`**Answer:** As close as possible — same architecture, configuration, data volumes and integrations. If smaller, scale results carefully and identify which components don't scale linearly. Note differences in the report.

Tip: Data volume is often overlooked.`, 'D', 'M'],

["Analysis", "How do you find a performance bottleneck?",
`**Answer:** Correlate response times with server metrics and APM traces (Dynatrace, AppDynamics, New Relic, Datadog, OpenTelemetry). Drill from slow transactions to slow tiers to slow calls — database queries, external services, locks, thread pool exhaustion, GC pauses, connection pool limits. Change one thing at a time and retest.

**Example:** "p95 jumped at 400 users; APM showed DB connection pool waits; pool was 20 — raised to 60 and fixed two slow queries; p95 dropped from 4.2 s to 0.6 s."

Tip: A concrete story beats a list.`, 'D', 'M'],

["Analysis", "Response times climb steadily during a soak test. What could it be?",
`**Answer:** Memory leak (heap grows, GC frequency rises), connection or thread leaks, caches growing without eviction, tables growing and queries slowing without indexes, or log/disk filling up. Analyze heap dumps, GC logs and resource trends over time.

Tip: Mention heap dump analysis tools (Eclipse MAT, VisualVM).`, 'D', 'M'],

["Analysis", "Throughput plateaus while CPU is only 40%. Why?",
`**Answer:** A bottleneck other than CPU: thread or connection pool limits, database locks, a slow downstream service, rate limiting, synchronized code, network bandwidth, or the load generator itself.

Tip: "Low CPU + flat throughput = waiting somewhere."`, 'D', 'S'],

["Analysis", "How do you analyze database performance?",
`**Answer:** Find top queries by total time (AWR in Oracle, pg_stat_statements in PostgreSQL, Query Store in SQL Server), check execution plans for full scans and missing indexes, look at locks and waits, connection usage, and cache hit ratios.

Tip: Mention working with DBAs.`, 'D', 'M'],

["Analysis", "What is garbage collection's impact on performance?",
`**Answer:** In Java/.NET, GC pauses stop or slow application threads. Frequent or long pauses cause latency spikes. Tune heap size and collector (G1, ZGC), and fix object churn or leaks. Check GC logs during tests.

Tip: Link latency spikes to GC events.`, 'D', 'S'],

["Front-end", "How do you test front-end performance?",
`**Answer:** Measure Core Web Vitals — LCP (loading), INP (interactivity), CLS (layout shift) — with Lighthouse, WebPageTest and real user monitoring. Check page weight, number of requests, caching, image optimization and JavaScript execution time.

Tip: Backend load tests don't show front-end slowness.`, 'D', 'M'],

["APM", "How do you use APM tools in performance testing?",
`**Answer:** Tag test traffic, watch service maps and transaction traces during the test, identify slow methods, SQL and external calls, and compare runs before and after fixes.

Tip: APM turns "it's slow" into "this query is slow".`, 'D', 'M'],

["Cloud", "How does cloud change performance testing?",
`**Answer:** Test autoscaling behavior (how fast new instances come online), check service limits and throttling, generate load from the cloud across regions, watch costs during big tests, and confirm CDN and caching behavior.

Tip: Autoscaling lag is a common surprise.`, 'D', 'S'],

["ERP", "How do you performance test an ERP like Oracle Fusion or SAP?",
`**Answer:** Focus on critical business transactions (order entry, invoice processing) and batch jobs (AutoInvoice, payment runs, MRP, close processes) at production-like volumes, including integrations (OIC, FBDI loads). For SaaS, follow the vendor's rules — Oracle requires prior notification and limits for load tests on Fusion pods.

Tip: Batch windows matter as much as online users.`, 'D', 'S'],

["Microservices", "What's different about performance testing microservices?",
`**Answer:** Test individual services for capacity, then end-to-end flows; watch network latency, retries and cascading failures, circuit breakers, and the slowest dependency in a chain. Distributed tracing is essential.

Tip: Mention tail latency amplification.`, 'D', 'S'],

["Shift-left", "How do you shift performance testing left?",
`**Answer:** Lightweight API load tests in CI with thresholds, performance budgets for pages, profiling during development, and early capacity tests on new services — rather than one big test before go-live.

Tip: Trend results per build.`, 'D', 'M'],

["Planning", "What goes into a performance test plan?",
`**Answer:** Objectives and success criteria (SLAs), scope (transactions, systems), workload model, test types and scenarios, environment and data, monitoring plan, tools, schedule, roles, risks and assumptions.

Tip: Agree success criteria before testing.`, 'B', 'M'],

["Reporting", "What goes into a performance test report?",
`**Answer:** Executive summary with a clear verdict, objectives, workload, results vs targets (percentiles, throughput, errors), resource utilization graphs, bottlenecks found and fixes, risks and recommendations, and a go/no-go opinion.

Tip: Lead with the business conclusion.`, 'B', 'M'],

["Capacity", "How do you do capacity planning?",
`**Answer:** Measure throughput per resource unit at acceptable response times, project future demand (growth, peaks, new features), and calculate required capacity with headroom (e.g. 30%). Validate with tests and monitor production trends.

Tip: Tie to business growth forecasts.`, 'D', 'S'],

["SLAs", "How do you define performance requirements when the business has none?",
`**Answer:** Use industry benchmarks (e.g. pages under 2–3 seconds), current production performance as a baseline, competitor comparisons, and business impact (conversion drops with slowness). Propose targets and get agreement.

Tip: Turn vague "fast" into numbers.`, 'B', 'M'],

["Caching", "How does caching affect test results?",
`**Answer:** Warm caches make responses faster; cold caches show worst-case behavior. Test both, vary data to avoid unrealistic cache hit rates, and understand CDN and application caches.

Tip: Parameterization prevents false confidence.`, 'D', 'M'],

["Network", "How do you test under real network conditions?",
`**Answer:** Simulate latency, bandwidth limits and packet loss (browser throttling, network emulators, tc on Linux), and test from multiple geographic regions.

Tip: Mobile users on slow networks matter.`, 'D', 'M'],

["Chaos", "How does chaos engineering relate to performance?",
`**Answer:** Injecting failures (instance loss, latency, dependency outages) under load shows whether the system degrades gracefully — timeouts, retries, circuit breakers, autoscaling.

Tip: Resilience is performance under failure.`, 'D', 'S'],

["Tuning", "Name common performance tuning fixes you've seen.",
`**Answer:** Adding indexes, fixing N+1 queries, increasing connection/thread pools appropriately, caching hot data, async processing for slow work, compression, pagination, CDN for static content, query rewrites and JVM tuning.

Tip: Give one real example with numbers.`, 'D', 'M'],

["Coding", "How do you script complex flows in k6?",
`**Answer:** Write JavaScript functions per user journey, group requests, use checks and thresholds, parameterize with SharedArray data, correlate values from JSON responses, set scenarios with executors (ramping-arrival-rate), and export results to Grafana or the cloud.

Tip: Mention thresholds as pass/fail criteria in CI.`, 'D', 'M'],

["JMeter", "Explain key JMeter components.",
`**Answer:** Thread Groups (users, ramp-up, loops), Samplers (HTTP requests), Config Elements (CSV Data Set, HTTP defaults, cookie manager), Pre/Post Processors (extractors for correlation), Assertions, Timers (think time), Listeners (results — disabled in load runs), and Controllers (logic).

Tip: Run JMeter in non-GUI mode for real tests.`, 'B', 'E'],

["Monitoring", "What do you monitor during a test?",
`**Answer:** Application response times and errors, servers (CPU, memory, disk, network), JVM/CLR (heap, GC, threads), database (top queries, locks, connections), load balancers, queues, caches, and external dependencies.

Tip: Agree monitoring before the test starts.`, 'B', 'M'],

["Behavioral", "Tell me about a performance issue you found before go-live.",
`**Sample answer:** "At 60% of target load, checkout p95 hit 8 seconds. APM showed a pricing service calling the database once per cart line. Developers batched the calls and added caching; p95 dropped to 700 ms at full load. Black Friday ran smoothly."

Tip: Symptom, root cause, fix, result.`, 'B', 'M'],

["Behavioral", "How do you handle a team that wants to skip performance testing?",
`**Answer:** Explain the risk with examples or data (past incidents, revenue impact of slowness), propose a reduced scope focused on the riskiest transactions, and offer quick automated checks in CI.

Tip: Risk-based compromise.`, 'B', 'M'],

["Behavioral", "Describe a time your test results were challenged.",
`**Sample answer:** "Developers said our test was unrealistic. I walked them through the workload model built from production logs and APM traces showing the slow query. We agreed on the fix, and a retest confirmed it."

Tip: Data settles debates.`, 'B', 'M'],

["Leadership", "How would you set up a performance engineering practice?",
`**Answer:** Standard tooling and frameworks, workload models from production data, performance requirements in stories, CI performance checks, a performance environment and APM, a center of excellence for complex tests, and dashboards that track trends.

Tip: Practice, not just tests.`, 'D', 'S'],

["Leadership", "How do you prioritize which systems to performance test?",
`**Answer:** By business criticality, user volume, recent changes, known risks, upcoming peak events and past incidents.

Tip: Risk-based approach.`, 'B', 'S'],

["Costs", "How do you control the cost of performance testing in the cloud?",
`**Answer:** Schedule environments to run only during tests, use spot instances for load generators, right-size test runs, reuse scripts, and tear down after.

Tip: Cost awareness is valued.`, 'D', 'S'],

["Security", "Can load tests cause security concerns?",
`**Answer:** Yes — they can trigger DDoS protections, WAF blocks or rate limits, and must not use real customer data. Coordinate with security teams, whitelist injectors, and use masked data.

Tip: Coordination prevents surprises.`, 'D', 'M'],

["Batch", "How do you test batch job performance?",
`**Answer:** Run jobs with production-like volumes, measure duration against the batch window, monitor resource usage and locks, test concurrency with online users, and check scaling with data growth.

Tip: Batch windows shrink as data grows.`, 'D', 'M'],

["Mobile", "How do you test mobile app performance?",
`**Answer:** App startup time, screen rendering (frames), memory and battery use, network usage, behavior on low-end devices and slow networks, plus backend API load. Tools: Android Profiler, Xcode Instruments, Firebase Performance.

Tip: Device matters.`, 'D', 'M'],

["AI", "How would you performance test an AI/LLM feature?",
`**Answer:** Measure time to first token and total latency, throughput under concurrent requests, rate limits and token quotas, cost per request, and fallback behavior when the model API is slow or unavailable.

Tip: Current and relevant.`, 'D', 'S'],

["Career", "Why performance engineering?",
`**Sample answer:** "I like the detective work — finding why a system slows down and fixing it with developers. It combines testing, systems knowledge and real business impact."

Tip: Show curiosity.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build realistic workload models, find root causes with APM rather than just reporting slow numbers, and I've prevented peak-season outages — like cutting checkout p95 from 8 s to 0.7 s before Black Friday."

Tip: Root-cause skill plus impact.`, 'B', 'M']
];

QB['qa-perf'] = (QB['qa-perf'] || []).concat([
["Analysis", "What is the difference between latency and throughput?",
`**Answer:** **Latency** is how long a single request takes (e.g. 250 ms). **Throughput** is how many requests are handled per unit of time (e.g. 800 requests/second). They interact: as throughput approaches capacity, queues form and latency rises sharply.

Tip: Draw the response-time curve "knee" if you can.`, 'B', 'E'],
["Analysis", "How do you compare two test runs fairly?",
`**Answer:** Same workload, data, environment configuration and duration; warm-up period excluded; compare percentiles, throughput and errors at steady state; and run more than once to account for variance.

Tip: Consistency makes comparisons meaningful.`, 'D', 'M']
]);
