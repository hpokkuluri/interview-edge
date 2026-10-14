// Performance Test Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-perf'] = (QB['qa-perf'] || []).concat([
['Fundamentals', 'What types of performance tests are there?',
`- **Load**: expected peak load.
- **Stress**: beyond capacity to find breaking points.
- **Spike**: sudden jumps in load.
- **Endurance/soak**: sustained load over hours to find leaks.
- **Scalability**: how performance changes as resources scale.
- **Volume**: large data volumes.`, 'B', 'E'],

['Fundamentals', 'What key metrics do you measure?',
`- **Response time** (average and percentiles — p90/p95/p99).
- **Throughput** (requests/transactions per second).
- **Error rate**.
- **Resource utilization** (CPU, memory, I/O, DB connections, threads).
- **Concurrency** (active users/sessions).`, 'B', 'E'],

['Workload', 'How do you build a realistic workload model?',
`- Use **production analytics/logs**: transaction mix, peak hour volumes, user journeys, think times.
- Define user types and their proportions; arrival rates.
- Include background jobs and integrations.
- Agree targets with business (SLAs/SLOs) and plan for growth.`, 'D', 'M'],

['Tools', 'Compare JMeter, LoadRunner, k6 and Gatling.',
`- **JMeter**: open source, GUI + CLI, many protocols, large community.
- **LoadRunner** (OpenText): enterprise, many protocols, strong analysis, licensed.
- **k6**: JavaScript scripts, developer-friendly, CI-friendly, cloud option.
- **Gatling**: Scala/Java/Kotlin DSL, efficient, good reports.
Choose by protocols, team skills, CI needs and budget.`, 'B', 'M'],

['Scripting', 'What is correlation and parameterization?',
`- **Correlation**: capturing dynamic values (session IDs, tokens, view states) from responses and reusing them in later requests.
- **Parameterization**: using varied test data (users, products) instead of hard-coded values to simulate real usage and avoid caching artifacts.`, 'B', 'E'],

['Analysis', 'How do you find a performance bottleneck?',
`- Correlate response times with server metrics and **APM** traces (Dynatrace, AppDynamics, New Relic, OpenTelemetry).
- Look at slow transactions → slow tiers → slow calls/queries.
- Check DB (slow queries, locks), thread pools, connection pools, GC, external calls.
- Change one thing at a time and retest.`, 'D', 'M'],

['Analysis', 'Response times increase steadily during a soak test. What could it be?',
`- **Memory leak** (heap growth, frequent GC), connection or thread leaks.
- Growing tables/caches without cleanup; log file growth.
- Analyze heap dumps, GC logs and resource trends over time.`, 'D', 'M'],

['ERP', 'How would you performance test an ERP like Oracle Fusion or SAP?',
`- Focus on **key business transactions** (order entry, invoice processing, close processes) and **batch jobs** (AutoInvoice, payment runs, MRP).
- Coordinate with the vendor (SaaS limits; Oracle may require notification for load tests).
- Test integrations at volume (OIC, FBDI loads).
- Use production-like data volumes.`, 'D', 'S'],

['Process', 'When should performance testing happen in a project?',
`- **Early**: component/API tests in CI (shift-left).
- **Before major releases**: full load tests in a production-like environment.
- **After infrastructure changes** or major data growth.
- Continuous monitoring in production.`, 'B', 'M'],

['Cloud', 'How does cloud change performance testing?',
`- **Autoscaling** behavior must be tested (scale-out timing, limits).
- Generate load from the cloud (distributed injectors).
- Watch costs of load tests.
- Test regional latency and CDN effects.`, 'D', 'S'],

['Reporting', 'What goes into a performance test report?',
`- Objectives and workload model.
- Results vs targets (tables and graphs of percentiles, throughput, errors).
- Bottlenecks found and fixes.
- Risks and recommendations; go/no-go opinion.`, 'B', 'M'],

['Behavioral', 'Tell me about a performance issue you found before go-live.',
`- Test scenario, symptom (e.g. p95 at 8s at 60% load), root cause (missing index/connection pool), fix, retest result, business impact avoided.`, 'B', 'M']
]);
