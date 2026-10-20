// Rewritten Cloud & DevOps — Site Reliability Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix cl-sre-).
module.exports = {

'Explain SLI, SLO and SLA.':
`**Why they ask:** the foundation of SRE.

**Answer:**
"An SLI is a measurement of service behavior — say, the percentage of requests that succeed, or that complete under 300 milliseconds. An SLO is the target for that SLI — 99.9% successful over 30 days. An SLA is a contractual commitment to customers with penalties, usually looser than the internal SLO — for example an SLA of 99.5% backed by an internal SLO of 99.9%, so we have warning before we owe credits."

Tip: SLOs should reflect user experience.`,

'How do you choose good SLIs?':
`**Why they ask:** bad SLIs make SLOs meaningless.

**Answer:**
"I measure what users experience: availability as successful requests over total, latency as the share of requests under a threshold, freshness for data pipelines, correctness, throughput. I measure as close to the user as possible — at the load balancer or client-side, not CPU on a server — and keep it to two or three per service. For checkout: 99.9% of requests succeed and 99% complete under 500 milliseconds."

Tip: User-centric.`,

'What is an error budget and how is it used?':
`**Why they ask:** the mechanism that balances speed and reliability.

**Answer:**
"It's the unreliability the SLO allows. 99.9% over 30 days is 30 times 24 times 60 minutes times 0.001 — about 43 minutes. While budget remains, teams ship fast and take risks. When it's spent, focus shifts to reliability work and risky releases pause, according to a policy agreed with product in advance. It turns 'reliability versus features' from an argument into a number."

Tip: Show the math.`,

'How do you alert on SLOs?':
`**Why they ask:** alerting maturity.

**Answer:**
"Burn-rate alerts — how fast the error budget is being consumed — over multiple windows. A fast burn, like 14 times the normal rate over an hour, would spend 2% of the monthly budget in that hour, so it pages someone. A slow burn over six hours or three days opens a ticket. That cuts noise dramatically while still catching real user impact."

Tip: Multi-window burn rate.`,

'What is toil and how do you reduce it?':
`**Why they ask:** SRE's engineering mandate.

**Answer:**
"Toil is manual, repetitive, automatable, reactive work that scales with the service and has no lasting value — restarting a stuck process, provisioning by ticket. I measure it, cap it — Google's guideline is under 50% of an SRE's time — and eliminate the biggest chunks with automation or better design."

Tip: Measure toil.`,

'Walk me through your incident response process.':
`**Why they ask:** structured response under pressure.

**Answer:**
"Detect through alerts, triage severity, declare an incident and assign roles — incident commander, communications lead, operations. Mitigate first: roll back, fail over, scale, or disable the feature. Communicate at a regular cadence to stakeholders and the status page. Resolve, then run a blameless postmortem with tracked actions. Root cause can wait until users are okay."

Tip: Roles and mitigation-first.`,

'What does an incident commander do?':
`**Why they ask:** incident leadership.

**Answer:**
"Coordinates the response — sets priorities, delegates tasks, keeps the timeline, makes sure communication happens, decides on escalation and declares resolution. The IC usually isn't typing commands; their job is keeping ten smart people from all debugging the same thing."

Tip: Coordination over hands-on.`,

'What should a postmortem include?':
`**Why they ask:** learning culture.

**Answer:**
"A summary, impact — users affected, duration, error budget consumed — a timeline, root cause and contributing factors, analysis of detection and response, what went well, action items with owners and dates, and lessons learned. Blameless and shared widely. Often the most valuable finding is that detection took 20 minutes when it should have taken two."

Tip: Detection gaps are often key findings.`,

'What are the pillars of observability?':
`**Why they ask:** telemetry fundamentals.

**Answer:**
"Metrics — aggregated numbers over time; logs — discrete events with context; traces — a request's path across services. Increasingly profiles and events too. The value comes from correlating them through shared identifiers like trace IDs, and OpenTelemetry standardizes how they're collected."

Tip: OpenTelemetry.`,

'What are the RED and USE methods?':
`**Why they ask:** quick-diagnosis frameworks.

**Answer:**
"RED is for services: Rate, Errors, Duration. USE is for resources: Utilization, Saturation, Errors. Together they give a fast health picture. Google's four golden signals — latency, traffic, errors, saturation — combine the two."

Tip: Golden signals.`,

'How do you design for high availability?':
`**Why they ask:** reliability design.

**Answer:**
"Eliminate single points of failure, spread redundancy across zones or regions, health checks with automatic failover, stateless services, graceful degradation, load shedding, timeouts and retries with backoff, and capacity headroom. Graceful degradation is underrated — if recommendations fail, show bestsellers instead of an error page."

Tip: Graceful degradation.`,

'What are cascading failures and how do you prevent them?':
`**Why they ask:** large outages are usually cascades.

**Answer:**
"One failing component overloads others — through retry storms or resource exhaustion — and the outage spreads. Prevention is timeouts, retry budgets with jitter, circuit breakers, bulkheads to isolate resource pools, load shedding, rate limiting, and autoscaling limits so one service can't consume everything."

Tip: Retry storms.`,

'Explain circuit breakers.':
`**Why they ask:** a resilience pattern.

**Answer:**
"When errors to a dependency exceed a threshold, the breaker opens and calls fail fast with a fallback instead of waiting on timeouts. After a cool-down it goes half-open and lets a few test requests through; if they succeed it closes and normal traffic resumes. It protects the caller's threads and gives the dependency room to recover."

Tip: States explanation.`,

'How do you do capacity planning?':
`**Why they ask:** avoiding surprise saturation.

**Answer:**
"Measure current utilization and demand trends, forecast growth and peaks like launches and seasonality, load test to know the limit per instance, plan headroom — N+1 or around 30% — and automate scaling where possible. If one pod handles 400 requests per second and the forecast peak is 6,000, I need 15 pods plus headroom — say 20."

Tip: Load test to know limits.`,

'How do you load test a service?':
`**Why they ask:** practical performance validation.

**Answer:**
"Define a realistic traffic model from production patterns, use k6, Gatling or Locust, ramp to and beyond the expected peak, watch SLIs and resources, find the breaking point and the bottleneck, and repeat after changes. I also test failure modes under load — what happens when a dependency slows down at peak."

Tip: Test failure modes too.`,

'What is chaos engineering?':
`**Why they ask:** proactive resilience.

**Answer:**
"Deliberately injecting failures — killing instances, adding latency, failing a dependency — in controlled experiments with a hypothesis, like 'if one zone fails, error rate stays under 1%.' Start small in staging, then production with a limited blast radius. Tools include Chaos Mesh, Gremlin, AWS FIS and Litmus."

Tip: Hypothesis-driven.`,

'How do you test disaster recovery?':
`**Why they ask:** DR plans often don't work.

**Answer:**
"Scheduled DR drills and game days: actually fail over a region or database, restore from backups, measure the real RTO and RPO against targets, document gaps and fix them. The first drill almost always finds something — a missing DNS change, an expired credential."

Tip: Untested DR doesn't work.`,

'How do SREs make releases safer?':
`**Why they ask:** most outages are changes.

**Answer:**
"Progressive delivery with canaries and automated analysis, feature flags, automated rollback when SLIs regress, release freezes tied to error budget policy, and small, frequent changes that are easy to reason about."

Tip: Automated canary analysis.`,

'How do you make on-call sustainable?':
`**Why they ask:** burnout kills reliability.

**Answer:**
"Only actionable alerts, good runbooks, rotations big enough — six to eight people — follow-the-sun where possible, a target like under two pages per shift, compensation, and dedicated time to fix recurring issues."

Tip: Alert quality.`,

'What makes a good alert?':
`**Why they ask:** alert quality.

**Answer:**
"It's actionable, urgent and user-impacting, with context and a runbook link. Page on symptoms — SLO burn — and ticket on causes — a disk filling slowly over days. Any alert that doesn't lead to action gets deleted or downgraded."

Tip: "Every page should require human action."`,

'What reliability concerns arise with Kubernetes?':
`**Why they ask:** platform-specific reliability.

**Answer:**
"Requests and limits — OOMKills and CPU throttling — PodDisruptionBudgets, probe configuration, node pressure and autoscaling speed, spreading across zones with topology constraints, control plane upgrades, and noisy neighbors."

Tip: PodDisruptionBudgets.`,

'How do you improve database reliability?':
`**Why they ask:** databases are the usual single point of pain.

**Answer:**
"Replication with automated failover, backups with tested restores, connection pooling, query performance monitoring, capacity headroom, safe online migrations, and read replicas for scaling reads."

Tip: Restore tests.`,

'A server has high load. How do you investigate?':
`**Why they ask:** Linux troubleshooting.

**Answer:**
"uptime and top for load and CPU, vmstat and iostat to see whether it's I/O wait rather than CPU, free for memory and swap, ss for connections, dmesg for kernel issues like OOM kills, and pidstat or strace for a specific process — then correlate with application metrics. High load with idle CPU usually means processes are blocked on disk."

Tip: CPU vs I/O wait.`,

'How do you debug intermittent latency spikes?':
`**Why they ask:** hard real-world debugging.

**Answer:**
"Look at percentiles over time and correlate with traces and metrics: GC pauses, CPU throttling in containers, noisy neighbors, TCP retransmits, DNS timeouts, connection pool exhaustion. Then reproduce under load. A recent one was a five-second DNS timeout hitting one in a few hundred requests — the p99 gave it away."

Tip: CPU throttling in containers is common.`,

'What would you automate first as a new SRE?':
`**Why they ask:** prioritization.

**Answer:**
"The highest-volume toil, measured by time: repetitive incident remediations, manual provisioning, certificate renewals, scaling tweaks, and noisy alert handling. I'd spend the first weeks measuring where on-call time actually goes."

Tip: Data-driven priorities.`,

'What coding do SREs do?':
`**Why they ask:** SRE is engineering.

**Answer:**
"Automation tools, Kubernetes operators and controllers, reliability features in services — timeouts, retries, graceful shutdown — monitoring exporters, CLIs and infrastructure as code, mostly in Go and Python."

Tip: Engineering focus.`,

'How do you work with development teams?':
`**Why they ask:** shared ownership.

**Answer:**
"Reliability is shared. I run production readiness reviews before launches, embed with teams on critical services, agree error budget policies with product, and teach observability practices so teams can debug their own services."

Tip: Production readiness reviews.`,

'What is a production readiness review?':
`**Why they ask:** prevention.

**Answer:**
"A checklist review before launch: SLOs defined, monitoring and alerts, runbooks, load tested capacity, dependencies and failure modes, a rollback plan, security review, and on-call coverage. It's how you avoid finding out at 2 a.m. that nobody owns the new service."

Tip: Prevents surprises.`,

'Tell me about a major incident you handled.':
`**Why they ask:** proof under pressure.

**Answer:**
"A cache cluster failure pushed all reads to the database and caused site-wide errors. As incident commander I had us shed non-critical traffic, scale the read replicas and restore the cache. Service recovered in 25 minutes. Postmortem actions added cache redundancy and request coalescing so a cache miss storm can't hit the database again."

Tip: Roles, mitigation, follow-up.`,

'Tell me about reducing toil.':
`**Why they ask:** measurable improvement.

**Answer:**
"Engineers spent about 10 hours a week on manual certificate renewals and disk cleanups. I automated both with cert-manager and scheduled jobs plus alerts. Toil on those tasks dropped by 80%."

Tip: Measured.`,

'How do you handle disagreement with product about reliability vs features?':
`**Why they ask:** influence.

**Answer:**
"I use the error budget policy as the objective framework, show user impact data — failed checkouts, support tickets — and agree priorities together. It's much easier when the policy was agreed before the disagreement."

Tip: Data over opinion.`,

'How is AI changing SRE work?':
`**Why they ask:** current trends.

**Answer:**
"AIOps for anomaly detection and alert correlation, LLM assistants that summarize incidents and suggest runbook steps, and natural-language queries over observability data — with SREs validating suggestions and owning decisions. And SREs now run AI services themselves, with GPU capacity and latency SLOs."

Tip: Validate AI suggestions.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward staff SRE or reliability leadership — SLO programs, platform reliability and resilience engineering across the organization."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I make systems measurably more reliable — SLO programs, faster incident response, less toil. I cut MTTR from 90 to 20 minutes while helping teams ship faster."

Tip: Proof.`,

"What does 'five nines' mean in downtime?":
`**Why they ask:** numeric fluency.

**Answer:**
"99.999% allows about 5.26 minutes of downtime a year — roughly 26 seconds a month. For comparison, 99.9% is about 8.76 hours a year and 99.99% about 52.6 minutes. Each extra nine costs dramatically more."

Tip: Know these numbers.`,

'How do you handle unreliable dependencies?':
`**Why they ask:** real systems depend on imperfect things.

**Answer:**
"Timeouts, retries with backoff and budgets, circuit breakers, caching and fallbacks, async processing where possible, and SLOs that account for dependencies. If a critical dependency is 99.9%, my service can't honestly promise 99.99% without a fallback."

Tip: Your SLO can't exceed your critical dependencies.`,

'What is load shedding?':
`**Why they ask:** overload protection.

**Answer:**
"Deliberately rejecting some requests — the lower-priority ones — when overloaded, so the system stays responsive for critical traffic. Returning a fast 503 or 429 is far better than every request timing out and the whole service collapsing."

Tip: Prioritization.`,

'What are the dangers of retries?':
`**Why they ask:** a classic outage amplifier.

**Answer:**
"Retries amplify load exactly when a service is struggling — if three layers each retry three times, one user request can become 27 at the bottom. Use exponential backoff with jitter, retry budgets, retry only idempotent operations, and retry at one layer, not all of them."

Tip: Jitter.`,

'How do you manage log volume and cost?':
`**Why they ask:** observability costs grow fast.

**Answer:**
"Structured logging with levels, sampling high-volume logs, retention tiers — hot for a week, cheap storage after — dropping noisy logs at the collector, and using metrics instead of logs for counting things."

Tip: Cost awareness.`,

'How does distributed tracing help?':
`**Why they ask:** microservice debugging.

**Answer:**
"It follows one request across services as spans with timing and errors, so in a call chain of 15 services you can see that 900 of 1,000 milliseconds were spent in one slow database call — the critical path becomes obvious."

Tip: Critical path analysis.`,

'Why are most outages caused by changes?':
`**Why they ask:** change risk awareness.

**Answer:**
"Deployments and config changes introduce new behavior into a system that was stable. Mitigation is progressive rollouts, automated testing, change review, closer monitoring after changes, and easy rollback — for config changes as much as code."

Tip: Config changes too.`,

'MTTR vs MTTD vs MTBF?':
`**Why they ask:** reliability metrics.

**Answer:**
"MTTD is mean time to detect, MTTR is mean time to restore, and MTBF is mean time between failures. SRE puts as much effort into shrinking detection and recovery as into preventing failures, because failures will happen."

Tip: Detection matters.`,

'What is a game day?':
`**Why they ask:** practice culture.

**Answer:**
"A planned exercise simulating a failure or incident to practice the response, test runbooks and find gaps — engineers and sometimes business stakeholders together. Teams that practice handle real incidents calmly."

Tip: Practice builds confidence.`,

'How do you communicate during an outage?':
`**Why they ask:** stakeholder trust.

**Answer:**
"Acknowledge early, update at a set cadence — every 30 minutes, say — in plain language about impact and when the next update comes, and send a final summary, internally and on the public status page. Silence is what destroys trust."

Tip: Regular cadence.`,

'Your service is at 100% error budget consumption mid-month. What do you do?':
`**Why they ask:** policy in practice.

**Answer:**
"Follow the error budget policy: pause risky releases, prioritize the reliability fixes from recent incidents, check whether alerting and the SLO definitions are right, and communicate with product leadership about the trade-off."

Tip: Policy agreed in advance.`,

'Alerts fire constantly and people ignore them. How do you fix it?':
`**Why they ask:** alert fatigue.

**Answer:**
"Audit every alert for actionability, delete or downgrade the noisy ones, move to SLO-based alerts, add runbooks, and track page volume per shift so it doesn't creep back."

Tip: Alert hygiene.`,

'What are the challenges of multi-region active-active?':
`**Why they ask:** architecture realism.

**Answer:**
"Data consistency and conflict resolution, latency for cross-region writes, routing and failover logic, roughly double the cost, and operational complexity. Many services choose active-passive because it meets the RTO with far less complexity."

Tip: Data is the hard part.`,

'How do you get teams to adopt SLOs?':
`**Why they ask:** program rollout.

**Answer:**
"Start with one critical user journey, define simple SLIs from data we already have, set targets from historical performance, build a dashboard, agree an error budget policy with product, and expand gradually once teams see it working."

Tip: Start small.`,

'What is headroom and how much do you keep?':
`**Why they ask:** capacity judgment.

**Answer:**
"Spare capacity above expected peak to absorb spikes and failures — often N+1, enough to survive losing one instance or zone, or 20 to 40% above peak depending on how fast we can scale and how critical the service is. With three zones, each should handle half the load so losing one is survivable."

Tip: Zone failure planning.`,

};
