// Site Reliability Engineer (SRE). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cl-sre'] = [
["SRE Basics", "What is SRE and how does it differ from traditional ops?",
`**Why they ask:** foundational.

**Answer:** Site Reliability Engineering applies software engineering to operations: defining reliability targets (SLOs), managing error budgets, automating toil, building observability, handling incidents with blameless learning, and improving systems through engineering work rather than manual effort. Traditional ops often focused on manual processes and change avoidance; SRE balances reliability with release velocity using data.

Tip: Mention Google's SRE book origin.`, 'B', 'E'],

["SLOs", "Explain SLI, SLO and SLA.",
`**Answer:** **SLI** (indicator): a measurement of service behavior, e.g. % of requests under 300 ms or % successful requests. **SLO** (objective): the target for an SLI, e.g. 99.9% availability over 30 days. **SLA** (agreement): a contractual commitment to customers with penalties, usually looser than internal SLOs.

Tip: SLOs should reflect user experience.`, 'B', 'E'],

["SLOs", "How do you choose good SLIs?",
`**Answer:** Measure what users experience: availability (successful requests ÷ total), latency (percentile under threshold), freshness for data pipelines, correctness, throughput. Measure as close to the user as possible (load balancer or client-side), and keep a small number per service.

Tip: User-centric.`, 'D', 'M'],

["Error Budgets", "What is an error budget and how is it used?",
`**Answer:** The allowed unreliability implied by the SLO — 99.9% monthly availability allows about 43 minutes of downtime per 30 days. If the budget is healthy, teams can ship faster and take risks; if it's exhausted, focus shifts to reliability work and risky releases pause, per an agreed policy.

**Math:** 30 days × 24 × 60 × 0.001 ≈ 43.2 minutes.

Tip: Show the math.`, 'B', 'M'],

["Error Budgets", "How do you alert on SLOs?",
`**Answer:** Use burn-rate alerts — how fast the error budget is being consumed — with multiple windows (e.g. fast burn over 1 hour for pages, slow burn over 6 hours/3 days for tickets). This reduces noise and catches real user impact.

Tip: Multi-window burn rate.`, 'D', 'S'],

["Toil", "What is toil and how do you reduce it?",
`**Answer:** Manual, repetitive, automatable, reactive work that scales with service size and has no lasting value — e.g. manual restarts, ticket-driven provisioning. Measure it, cap it (Google suggests under 50% of time), and eliminate it with automation and better design.

Tip: Measure toil.`, 'B', 'M'],

["Incidents", "Walk me through your incident response process.",
`**Answer:** Detect (alerts), triage severity, declare an incident and assign roles (incident commander, communications, operations), mitigate first (rollback, failover, scale, disable feature), communicate regularly to stakeholders and status page, resolve, then hold a blameless postmortem with tracked actions.

Tip: Roles and mitigation-first.`, 'B', 'M'],

["Incidents", "What does an incident commander do?",
`**Answer:** Coordinates the response — sets priorities, delegates tasks, keeps the timeline, ensures communication, decides on escalation, and declares resolution. They don't necessarily fix the problem themselves.

Tip: Coordination over hands-on.`, 'B', 'M'],

["Postmortems", "What should a postmortem include?",
`**Answer:** Summary, impact (users, duration, SLO budget consumed), timeline, root cause and contributing factors, detection and response analysis, what went well, action items with owners and dates, and lessons learned — blameless and shared widely.

Tip: Detection gaps are often key findings.`, 'B', 'M'],

["Observability", "What are the pillars of observability?",
`**Answer:** Metrics (aggregated numbers over time), logs (discrete events with context), and traces (requests across services). Increasingly profiles and events too. Correlate them with shared identifiers (trace IDs) — OpenTelemetry standardizes collection.

Tip: OpenTelemetry.`, 'B', 'M'],

["Observability", "What are the RED and USE methods?",
`**Answer:** **RED** for services: Rate, Errors, Duration. **USE** for resources: Utilization, Saturation, Errors. Together they give a quick health picture. Google's four golden signals: latency, traffic, errors, saturation.

Tip: Golden signals.`, 'B', 'M'],

["Reliability", "How do you design for high availability?",
`**Answer:** Eliminate single points of failure, redundancy across zones/regions, health checks and automatic failover, stateless services, graceful degradation, load shedding, timeouts and retries with backoff, and capacity headroom.

Tip: Graceful degradation.`, 'B', 'M'],

["Reliability", "What are cascading failures and how do you prevent them?",
`**Answer:** One failing component overloads others (retries storms, resource exhaustion), spreading the outage. Prevent with timeouts, retry budgets with jitter, circuit breakers, bulkheads, load shedding, rate limiting, and autoscaling limits.

Tip: Retry storms.`, 'D', 'M'],

["Reliability", "Explain circuit breakers.",
`**Answer:** A pattern that stops calling a failing dependency after errors exceed a threshold (open state), returns fallbacks quickly, then periodically tests recovery (half-open) before resuming (closed). Protects callers and gives the dependency time to recover.

Tip: States explanation.`, 'B', 'M'],

["Capacity", "How do you do capacity planning?",
`**Answer:** Measure current utilization and demand trends, forecast growth and peaks (launches, seasonality), load test to find limits per instance, plan headroom (e.g. N+1 or 30%), and automate scaling where possible.

Tip: Load test to know limits.`, 'D', 'M'],

["Load Testing", "How do you load test a service?",
`**Answer:** Define realistic traffic models, use tools (k6, Gatling, Locust), ramp load to and beyond expected peaks, monitor SLIs and resources, find breaking points and bottlenecks, and repeat after changes.

Tip: Test failure modes too.`, 'D', 'M'],

["Chaos", "What is chaos engineering?",
`**Answer:** Deliberately injecting failures (killing instances, adding latency, failing dependencies) in controlled experiments with hypotheses, to discover weaknesses before real incidents. Start small in staging, then production with blast-radius limits. Tools: Chaos Mesh, Gremlin, AWS FIS, Litmus.

Tip: Hypothesis-driven.`, 'D', 'M'],

["DR", "How do you test disaster recovery?",
`**Answer:** Scheduled DR drills and game days: fail over regions or databases, restore from backups, measure actual RTO/RPO, document gaps and fix them.

Tip: Untested DR doesn't work.`, 'D', 'M'],

["Releases", "How do SREs make releases safer?",
`**Answer:** Progressive delivery (canaries with automated analysis), feature flags, automated rollback on SLO regression, release freeze policies tied to error budgets, and small, frequent changes.

Tip: Automated canary analysis.`, 'B', 'M'],

["On-call", "How do you make on-call sustainable?",
`**Answer:** Actionable alerts only, runbooks, reasonable rotation sizes, follow-the-sun when possible, limits on pages per shift, compensation, and dedicated time to fix recurring issues.

Tip: Alert quality.`, 'B', 'M'],

["Alerting", "What makes a good alert?",
`**Answer:** Actionable, urgent, user-impacting, with clear context and runbook links. Page for symptoms (SLO burn), ticket for causes (disk filling slowly). Remove alerts that don't lead to action.

Tip: "Every page should require human action."`, 'B', 'M'],

["Kubernetes", "What reliability concerns arise with Kubernetes?",
`**Answer:** Resource requests/limits (OOMKills, throttling), pod disruption budgets, probes, node pressure and autoscaling, multi-zone spread (topology constraints), control plane upgrades, and noisy neighbors.

Tip: PodDisruptionBudgets.`, 'D', 'M'],

["Databases", "How do you improve database reliability?",
`**Answer:** Replication and automated failover, backups with tested restores, connection pooling, query performance monitoring, capacity headroom, safe migrations, and read replicas for scaling.

Tip: Restore tests.`, 'D', 'M'],

["Linux", "A server has high load. How do you investigate?",
`**Answer:** uptime/top for load and CPU, vmstat/iostat for I/O wait, free for memory and swap, ss/netstat for connections, dmesg for kernel issues, and per-process tools (pidstat, strace) — then correlate with application metrics.

Tip: CPU vs I/O wait.`, 'B', 'M'],

["Networking", "How do you debug intermittent latency spikes?",
`**Answer:** Correlate with traces and metrics (GC pauses, CPU throttling, noisy neighbors, network retransmits, DNS timeouts, connection pool exhaustion), look at percentiles over time, and reproduce under load.

Tip: CPU throttling in containers is common.`, 'D', 'S'],

["Automation", "What would you automate first as a new SRE?",
`**Answer:** The highest-volume toil: repetitive incident remediations, manual provisioning, certificate renewals, scaling adjustments, and noisy alert handling — measured by time saved.

Tip: Data-driven priorities.`, 'B', 'M'],

["Coding", "What coding do SREs do?",
`**Answer:** Automation tools, operators/controllers, reliability features in services (timeouts, retries), monitoring exporters, CLIs, and infrastructure as code — in Go, Python or similar.

Tip: Engineering focus.`, 'B', 'M'],

["Culture", "How do you work with development teams?",
`**Answer:** Shared ownership of reliability, production readiness reviews before launch, embedded SRE support, error budget policies agreed with product, and teaching observability practices.

Tip: Production readiness reviews.`, 'B', 'M'],

["PRR", "What is a production readiness review?",
`**Answer:** A checklist review before launch: SLOs defined, monitoring and alerts, runbooks, capacity and load testing, dependencies and failure modes, rollback plan, security, on-call coverage.

Tip: Prevents surprises.`, 'D', 'M'],

["Behavioral", "Tell me about a major incident you handled.",
`**Sample answer:** "A cache cluster failure caused database overload and site-wide errors. As incident commander, I had us shed non-critical traffic, scale the database read replicas and restore the cache. Service recovered in 25 minutes. Postmortem actions added cache redundancy and request coalescing."

Tip: Roles, mitigation, follow-up.`, 'B', 'M'],

["Behavioral", "Tell me about reducing toil.",
`**Sample answer:** "Engineers spent 10 hours a week on manual certificate renewals and disk cleanups. I automated both with cert-manager and scheduled jobs plus alerts. Toil dropped by 80%."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "How do you handle disagreement with product about reliability vs features?",
`**Answer:** Use the error budget policy as an objective framework, show user impact data, and agree priorities together.

Tip: Data over opinion.`, 'B', 'M'],

["AI", "How is AI changing SRE work?",
`**Answer:** AIOps for anomaly detection and alert correlation, LLM assistants summarizing incidents and suggesting runbook steps, and natural-language querying of observability data — while SREs validate suggestions and own decisions. Also: running reliable AI services with GPU capacity and latency SLOs.

Tip: Validate AI suggestions.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/staff SRE or reliability leadership — SLO programs, platform reliability and resilience engineering.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I make systems measurably more reliable — SLO programs, faster incident response, less toil — and I've cut MTTR from 90 to 20 minutes while helping teams ship faster."

Tip: Proof.`, 'B', 'M'],

["Availability", "What does 'five nines' mean in downtime?",
`**Answer:** 99.999% availability ≈ 5.26 minutes of downtime per year (about 26 seconds per month). 99.9% ≈ 8.76 hours per year; 99.99% ≈ 52.6 minutes per year.

Tip: Know these numbers.`, 'B', 'E'],

["Dependencies", "How do you handle unreliable dependencies?",
`**Answer:** Timeouts, retries with backoff and budgets, circuit breakers, caching and fallbacks, async processing, and SLOs that account for dependency reliability.

Tip: Your SLO can't exceed your critical dependencies.`, 'D', 'M'],

["Load Shedding", "What is load shedding?",
`**Answer:** Deliberately rejecting some requests (lower priority) when overloaded to keep the system responsive for critical traffic — returning 503/429 early rather than collapsing.

Tip: Prioritization.`, 'D', 'M'],

["Retries", "What are the dangers of retries?",
`**Answer:** Retries amplify load during outages (retry storms). Use exponential backoff with jitter, retry budgets, only retry idempotent operations, and avoid retries at every layer.

Tip: Jitter.`, 'D', 'M'],

["Logs", "How do you manage log volume and cost?",
`**Answer:** Structured logging with levels, sampling of high-volume logs, retention tiers, dropping noisy logs at collection, and metrics instead of logs for counting.

Tip: Cost awareness.`, 'D', 'M'],

["Tracing", "How does distributed tracing help?",
`**Answer:** Follows a request across services with spans showing timing and errors, revealing where latency or failures occur in complex call chains.

Tip: Critical path analysis.`, 'B', 'M'],

["Change Management", "Why are most outages caused by changes?",
`**Answer:** Deployments and config changes introduce new behavior; mitigate with progressive rollouts, automated testing, change review, monitoring after changes, and easy rollback.

Tip: Config changes too.`, 'B', 'M'],

["Metrics", "MTTR vs MTTD vs MTBF?",
`**Answer:** MTTD (mean time to detect), MTTR (mean time to restore/recover), MTBF (mean time between failures). SRE focuses on reducing MTTD and MTTR as much as preventing failures.

Tip: Detection matters.`, 'B', 'M'],

["Game Days", "What is a game day?",
`**Answer:** A planned exercise simulating failures or incidents to practice response, test runbooks and find gaps, involving engineers and sometimes business stakeholders.

Tip: Practice builds confidence.`, 'D', 'M'],

["Status Pages", "How do you communicate during an outage?",
`**Answer:** Early acknowledgment, regular updates at set intervals, plain language about impact and next update time, and a final summary — internally and on public status pages.

Tip: Regular cadence.`, 'B', 'M'],

["Scenario", "Your service is at 100% error budget consumption mid-month. What do you do?",
`**Answer:** Follow the error budget policy: pause risky releases, prioritize reliability fixes from recent incidents, review alerting and SLO definitions, and communicate with product leadership.

Tip: Policy agreed in advance.`, 'D', 'M'],

["Scenario", "Alerts fire constantly and people ignore them. How do you fix it?",
`**Answer:** Audit alerts for actionability, delete or downgrade noisy ones, move to SLO-based alerts, add runbooks, and track page volume per shift.

Tip: Alert hygiene.`, 'B', 'M'],

["Multi-region", "What are the challenges of multi-region active-active?",
`**Answer:** Data consistency and conflict resolution, latency for cross-region writes, routing and failover logic, cost, and operational complexity. Many services choose active-passive for simplicity.

Tip: Data is the hard part.`, 'D', 'S']
];
