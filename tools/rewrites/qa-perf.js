// Rewritten QA & Testing — Performance Test Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix qa-perf-).
module.exports = {

'Which performance metrics matter most?':
`**Why they ask:** the vocabulary of performance work.

**Answer:**
"Response time — average and especially percentiles like p90, p95 and p99 — throughput in requests or transactions per second, error rate, concurrency, and resource utilization: CPU, memory, disk I/O, network, database connections, thread pools and garbage collection. Percentiles matter more than averages because they show what the slowest users actually experience."

Tip: Explain why percentiles matter more than averages.`,

'Why are percentiles better than averages?':
`**Why they ask:** a key analytical concept.

**Answer:**
"Averages hide outliers. If 95 requests take 200 milliseconds and 5 take 10 seconds, the average is 95 times 0.2 plus 5 times 10, which is 69 seconds over 100 requests — about 690 milliseconds. That looks fine, but one in twenty users waits 10 seconds. p95 and p99 expose that tail, which is what users feel and complain about."

Tip: The numbers example makes it stick.`,

"What is Little's Law?":
`**Why they ask:** workload modeling math.

**Answer:**
"L equals lambda times W: the average number of items in a system equals the arrival rate times the average time each spends in it. For load testing, concurrent users equal throughput times response time plus think time. So 100 requests per second with 0.5 seconds of response and 4.5 seconds of think time needs 100 times 5 — 500 concurrent virtual users. I use it to sanity-check every workload model."

Tip: Use it to sanity-check your workload model.`,

'How do you build a realistic workload model?':
`**Why they ask:** a wrong model makes the test meaningless.

**Answer:**
"From production analytics and logs: peak-hour volumes, the transaction mix — say 60% browse, 25% search, 10% add to cart, 5% checkout — user journeys, think times, data variety and background jobs. Then agree targets with the business, add growth — typically 2x current peak — and validate the model with stakeholders before testing. If the model is wrong, the results are precise but meaningless."

Tip: A wrong workload model makes the whole test meaningless — say so.`,

'What is think time and pacing?':
`**Why they ask:** realistic load.

**Answer:**
"Think time is the pause between a user's actions — reading a page, typing — which makes load realistic. Pacing controls how often each virtual user starts a new iteration, so I hit a target rate — say 1,200 checkouts an hour — no matter how response times change. Without think time, 100 virtual users can generate the load of thousands of real people."

Tip: Without think time you over-stress the system unrealistically.`,

'Open vs closed workload models?':
`**Why they ask:** advanced understanding.

**Answer:**
"In a closed model, a fixed number of virtual users loop, and each starts its next request only after the last one finishes — so when the system slows down, the load drops, which can hide problems. In an open model, requests arrive at a set rate regardless of responses, like real internet traffic — better for public web systems. k6's arrival-rate executors and Gatling's open injection profiles support this."

Tip: Shows advanced understanding.`,

'Compare JMeter, LoadRunner, k6 and Gatling.':
`**Why they ask:** tool knowledge.

**Answer:**
"JMeter is open source with a GUI and CLI, supports many protocols and has a huge community, but uses more resources per virtual user. LoadRunner from OpenText is enterprise-grade with broad protocol support — SAP, Citrix — and strong analysis, but it's licensed and expensive. k6 uses JavaScript, is developer-friendly and fits CI pipelines well. Gatling uses a Scala, Java or Kotlin DSL, is very efficient and produces good reports. I've used JMeter and k6 in depth; I choose by protocols, team skills, CI needs and budget."

Tip: Mention which you've used in depth.`,

'What is correlation?':
`**Why they ask:** core scripting skill.

**Answer:**
"Capturing dynamic values from server responses — session IDs, CSRF tokens, view states, order IDs — and feeding them into later requests. A recorded script replays the token from recording time, so the login fails. In JMeter I use regex or JSON extractors; in k6 I parse the response in code — for example, pulling the CSRF token from the login page HTML and sending it with the login POST."

Tip: Give an example — capturing a CSRF token from the login page.`,

'What is parameterization?':
`**Why they ask:** realistic data.

**Answer:**
"Replacing hard-coded values with varied data — usernames, products, search terms — from CSV files or generators. Otherwise everything is served from cache and you get unrealistic results, or collisions like 1,000 virtual users trying to buy the same last item. Each virtual user gets unique data."

Tip: Mention unique data per virtual user.`,

'How do you validate responses in load scripts?':
`**Why they ask:** avoiding false passes.

**Answer:**
"Checks on status codes and key content — 'Order confirmed' text or an order ID in the response — not just HTTP 200, because servers sometimes return an error page with a 200 status. Failed checks count as errors. I once saw a test 'pass' at 2,000 users while every response was a maintenance page."

Tip: A 200 isn't always success.`,

'How do you ramp up load during a test?':
`**Why they ask:** test design.

**Answer:**
"Increase load gradually — in about 10% steps every few minutes — hold at target for a steady state of 30 to 60 minutes for a load test, then ramp down. Ramping shows the knee in the curve: the point where response times stop being flat and start climbing sharply, which is the practical capacity."

Tip: Note the "knee" in the response-time curve.`,

"How do you make sure the load generator isn't the bottleneck?":
`**Why they ask:** a common misdiagnosis.

**Answer:**
"Monitor the injectors' CPU, memory and network and keep them under about 70 to 80%, spread load across several injectors, run JMeter in non-GUI mode, and do a calibration run. Many teams have blamed an application for slowness that was actually a maxed-out load generator."

Tip: Many teams misdiagnose the injector as the application.`,

'How production-like does the test environment need to be?':
`**Why they ask:** validity of results.

**Answer:**
"As close as possible — same architecture, configuration, data volumes and integrations. If it's smaller, I scale results carefully and identify components that don't scale linearly, like a database. Data volume is the most overlooked: a query that's instant on 10,000 rows can take seconds on 50 million. Differences go in the report."

Tip: Data volume is often overlooked.`,

'How do you find a performance bottleneck?':
`**Why they ask:** root-cause skill.

**Answer:**
"Correlate response times with server metrics and APM traces — Dynatrace, AppDynamics, Datadog, OpenTelemetry — and drill down from slow transactions to slow tiers to slow calls: database queries, external services, locks, thread pool exhaustion, GC pauses, connection pool limits. Change one thing at a time and retest. On one system p95 jumped at 400 users; APM showed threads waiting for database connections with a pool of 20. We raised it to 60 and fixed two slow queries, and p95 dropped from 4.2 seconds to 0.6."

Tip: A concrete story beats a list.`,

'Response times climb steadily during a soak test. What could it be?':
`**Why they ask:** long-running issues.

**Answer:**
"A memory leak — heap keeps growing and GC runs more and more often — connection or thread leaks, caches growing without eviction, tables growing so unindexed queries slow down, or logs filling the disk. I analyze heap dumps with Eclipse MAT or VisualVM, GC logs, and resource trends across the hours."

Tip: Mention heap dump analysis tools (Eclipse MAT, VisualVM).`,

'Throughput plateaus while CPU is only 40%. Why?':
`**Why they ask:** analytical reasoning.

**Answer:**
"Something other than CPU is the bottleneck — the system is waiting. Thread or connection pool limits, database locks, a slow downstream service, rate limiting, synchronized code, network bandwidth, or the load generator itself. Thread dumps and APM wait times usually show which."

Tip: "Low CPU + flat throughput = waiting somewhere."`,

'How do you analyze database performance?':
`**Why they ask:** databases are the usual bottleneck.

**Answer:**
"Find top queries by total time — AWR in Oracle, pg_stat_statements in PostgreSQL, Query Store in SQL Server — check execution plans for full scans and missing indexes, look at locks and waits, connection usage and cache hit ratios. I work closely with DBAs on fixes."

Tip: Mention working with DBAs.`,

"What is garbage collection's impact on performance?":
`**Why they ask:** runtime knowledge.

**Answer:**
"In Java and .NET, GC pauses stop or slow application threads, so frequent or long pauses show up as latency spikes. I check GC logs during tests and line pauses up with p99 spikes. Fixes are tuning heap size and the collector — G1 or ZGC — and reducing object churn or leaks in code."

Tip: Link latency spikes to GC events.`,

'How do you test front-end performance?':
`**Why they ask:** user-perceived performance.

**Answer:**
"Core Web Vitals — LCP for loading, INP for interactivity, CLS for layout shift — measured with Lighthouse, WebPageTest and real user monitoring. Plus page weight, number of requests, caching, image optimization and JavaScript execution time. A backend load test can be green while the page takes 6 seconds to become usable."

Tip: Backend load tests don't show front-end slowness.`,

'How do you use APM tools in performance testing?':
`**Why they ask:** modern diagnostics.

**Answer:**
"Tag test traffic, watch service maps and transaction traces during the run, identify slow methods, SQL and external calls, and compare runs before and after fixes. APM turns 'checkout is slow' into 'this specific query takes 3 seconds.'"

Tip: APM turns "it's slow" into "this query is slow".`,

'How does cloud change performance testing?':
`**Why they ask:** cloud-era testing.

**Answer:**
"Test how autoscaling behaves — new instances may take 3 to 5 minutes to serve traffic, so a sudden spike can still overwhelm the system — check service limits and throttling, generate load from multiple cloud regions, watch costs during big tests, and confirm CDN and caching behavior."

Tip: Autoscaling lag is a common surprise.`,

'How do you performance test an ERP like Oracle Fusion or SAP?':
`**Why they ask:** enterprise performance testing.

**Answer:**
"Focus on critical business transactions like order entry and invoice processing, and on batch jobs — AutoInvoice, payment runs, MRP, close processes — at production-like volumes, including integrations through OIC and FBDI loads. For SaaS, follow the vendor's rules: Oracle requires advance notice and has limits on load testing Fusion environments. Batch windows matter as much as online users."

Tip: Batch windows matter as much as online users.`,

"What's different about performance testing microservices?":
`**Why they ask:** distributed systems.

**Answer:**
"Test individual services for capacity, then end-to-end flows; watch network latency, retries and cascading failures, circuit breakers, and the slowest dependency in each chain. Distributed tracing is essential. Tail latency amplifies: if a page calls 10 services in parallel, each with a 1% chance of being slow, about 10% of page loads hit at least one slow call."

Tip: Mention tail latency amplification.`,

'How do you shift performance testing left?':
`**Why they ask:** continuous performance.

**Answer:**
"Lightweight API load tests in CI with thresholds, performance budgets for pages, profiling during development, and early capacity tests on new services — instead of one big test before go-live. Trending results per build catches a 20% regression the day it's introduced."

Tip: Trend results per build.`,

'What goes into a performance test plan?':
`**Why they ask:** planning discipline.

**Answer:**
"Objectives and success criteria, scope of transactions and systems, the workload model, test types and scenarios, environment and data, monitoring plan, tools, schedule, roles, risks and assumptions. Success criteria get agreed before testing, so nobody moves the goalposts after the results."

Tip: Agree success criteria before testing.`,

'What goes into a performance test report?':
`**Why they ask:** communication.

**Answer:**
"An executive summary with a clear verdict, objectives, the workload, results against targets — percentiles, throughput, errors — resource utilization graphs, bottlenecks found and fixed, risks and recommendations, and a go/no-go opinion. The first line answers 'are we ready for peak?'"

Tip: Lead with the business conclusion.`,

'How do you do capacity planning?':
`**Why they ask:** forward-looking analysis.

**Answer:**
"Measure throughput per resource unit at acceptable response times, project demand from growth, peaks and new features, and calculate capacity with headroom. If one node handles 300 orders a minute within SLA and peak is forecast at 1,800, I need 6 nodes, plus about 30% headroom — so 8. Then validate with tests and monitor production trends."

Tip: Tie to business growth forecasts.`,

'How do you define performance requirements when the business has none?':
`**Why they ask:** turning vague into measurable.

**Answer:**
"Use current production performance as a baseline, industry benchmarks like pages under 2 to 3 seconds, competitor comparisons, and business impact — conversion drops as pages slow. Then propose specific targets — '95% of searches under 1.5 seconds at 2x peak' — and get them agreed."

Tip: Turn vague "fast" into numbers.`,

'How does caching affect test results?':
`**Why they ask:** avoiding false confidence.

**Answer:**
"Warm caches make responses fast; cold caches show worst-case behavior, like right after a deployment. I test both, vary data so cache hit rates are realistic, and understand both CDN and application caches. If every virtual user searches 'laptop', you're testing the cache, not the system."

Tip: Parameterization prevents false confidence.`,

'How do you test under real network conditions?':
`**Why they ask:** real-world realism.

**Answer:**
"Simulate latency, bandwidth limits and packet loss with browser throttling, network emulators or tc on Linux, and run tests from multiple geographic regions. Mobile users on slow networks are often a big share of traffic."

Tip: Mobile users on slow networks matter.`,

'How does chaos engineering relate to performance?':
`**Why they ask:** resilience thinking.

**Answer:**
"Injecting failures — losing an instance, adding latency, taking a dependency down — while under load shows whether the system degrades gracefully: do timeouts, retries, circuit breakers and autoscaling work as designed, or does one slow service take everything down?"

Tip: Resilience is performance under failure.`,

"Name common performance tuning fixes you've seen.":
`**Why they ask:** practical experience.

**Answer:**
"Adding indexes, fixing N+1 queries, sizing connection and thread pools properly, caching hot data, moving slow work to async processing, compression, pagination, a CDN for static content, query rewrites and JVM tuning. One missing index on an order lookup took a report from 40 seconds to under 1."

Tip: Give one real example with numbers.`,

'How do you script complex flows in k6?':
`**Why they ask:** k6 depth.

**Answer:**
"A JavaScript function per user journey, requests grouped, checks and thresholds — like p95 under 500 milliseconds — data parameterized with SharedArray, values correlated from JSON responses, scenarios using executors such as ramping-arrival-rate, and results exported to Grafana or k6 Cloud. Thresholds become pass/fail criteria in CI."

Tip: Mention thresholds as pass/fail criteria in CI.`,

'Explain key JMeter components.':
`**Why they ask:** JMeter depth.

**Answer:**
"Thread Groups define users, ramp-up and loops; Samplers send requests; Config Elements like CSV Data Set, HTTP defaults and the cookie manager; pre- and post-processors, including extractors for correlation; Assertions; Timers for think time; Listeners for results — disabled during real load runs; and logic Controllers. Real tests run in non-GUI mode."

Tip: Run JMeter in non-GUI mode for real tests.`,

'What do you monitor during a test?':
`**Why they ask:** observability during tests.

**Answer:**
"Application response times and errors; servers — CPU, memory, disk, network; the JVM or CLR — heap, GC, threads; the database — top queries, locks, connections; load balancers, queues, caches and external dependencies. I agree the monitoring setup before the test starts, not after a failure."

Tip: Agree monitoring before the test starts.`,

'Tell me about a performance issue you found before go-live.':
`**Why they ask:** proof.

**Answer:**
"At 60% of target load, checkout p95 hit 8 seconds. APM showed the pricing service querying the database once per cart line. Developers batched the calls and added caching, and p95 dropped to 700 milliseconds at full load. Black Friday ran smoothly."

Tip: Symptom, root cause, fix, result.`,

'How do you handle a team that wants to skip performance testing?':
`**Why they ask:** influence.

**Answer:**
"Explain the risk with data — past incidents, revenue lost per hour of slowness — propose a reduced scope focused on the riskiest transactions, and offer quick automated checks in CI so there's some protection on every build."

Tip: Risk-based compromise.`,

'Describe a time your test results were challenged.':
`**Why they ask:** credibility.

**Answer:**
"Developers said our test was unrealistic. I walked them through the workload model built from production logs and showed the APM trace of the slow query. We agreed on the fix, and a retest confirmed it."

Tip: Data settles debates.`,

'How would you set up a performance engineering practice?':
`**Why they ask:** leadership.

**Answer:**
"Standard tooling and frameworks, workload models from production data, performance requirements written into stories, CI performance checks, a dedicated performance environment with APM, a center of excellence for complex tests, and dashboards tracking trends."

Tip: Practice, not just tests.`,

'How do you prioritize which systems to performance test?':
`**Why they ask:** risk-based thinking.

**Answer:**
"By business criticality, user volume, recent changes, known risks, upcoming peak events and past incidents."

Tip: Risk-based approach.`,

'How do you control the cost of performance testing in the cloud?':
`**Why they ask:** cost awareness.

**Answer:**
"Run environments only during test windows, use spot instances for load generators, right-size test runs, reuse scripts, and tear everything down afterward."

Tip: Cost awareness is valued.`,

'Can load tests cause security concerns?':
`**Why they ask:** coordination.

**Answer:**
"Yes — they can trigger DDoS protection, WAF blocks or rate limits, and they must never use real customer data. I coordinate with security, allowlist the injectors, and use masked or synthetic data."

Tip: Coordination prevents surprises.`,

'How do you test batch job performance?':
`**Why they ask:** non-interactive workloads.

**Answer:**
"Run jobs at production-like volumes, measure duration against the batch window, monitor resources and locks, test them concurrently with online users, and check how they scale as data grows — a job that fits in 3 of 4 hours today may not next year."

Tip: Batch windows shrink as data grows.`,

'How do you test mobile app performance?':
`**Why they ask:** mobile coverage.

**Answer:**
"App startup time, rendering smoothness, memory and battery use, network usage, behavior on low-end devices and slow networks, plus backend API load. Android Profiler, Xcode Instruments and Firebase Performance Monitoring."

Tip: Device matters.`,

'How would you performance test an AI/LLM feature?':
`**Why they ask:** a current topic.

**Answer:**
"Measure time to first token and total latency, throughput under concurrent requests, provider rate limits and token quotas, cost per request, and fallback behavior when the model API is slow or unavailable."

Tip: Current and relevant.`,

'Why performance engineering?':
`**Why they ask:** motivation.

**Answer:**
"I like the detective work — finding why a system slows down and fixing it with developers. It combines testing, systems knowledge and real business impact."

Tip: Show curiosity.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build realistic workload models and find root causes with APM rather than just reporting slow numbers. I've prevented peak-season outages — like cutting checkout p95 from 8 seconds to 0.7 before Black Friday."

Tip: Root-cause skill plus impact.`,

'What is the difference between latency and throughput?':
`**Why they ask:** fundamentals.

**Answer:**
"Latency is how long one request takes — say 250 milliseconds. Throughput is how many requests are handled per unit of time — say 800 per second. They interact: as throughput approaches capacity, queues form and latency rises sharply — the knee in the curve."

Tip: Draw the response-time curve "knee" if you can.`,

'How do you compare two test runs fairly?':
`**Why they ask:** analytical rigor.

**Answer:**
"Same workload, data, environment configuration and duration; exclude the warm-up period; compare percentiles, throughput and errors at steady state; and run more than once, because variance between identical runs can be 5 to 10%."

Tip: Consistency makes comparisons meaningful.`,

};
