// Rewritten QA & Testing — SDET (Why they ask → Answer → Tip). Apply with rewrite.js (prefix qa-sdet-).
module.exports = {

'How would you design a test strategy for a microservices system?':
`**Why they ask:** test architecture at SDET level.

**Answer:**
"A pyramid adapted for services. Unit tests in each service, owned by developers with my guidance. Component tests — one service with its dependencies stubbed. Consumer-driven contract tests with Pact between services. Integration tests against real dependencies in containers using Testcontainers. A small number of end-to-end tests for critical journeys like checkout. And production checks — synthetic monitoring, canaries, feature flags. I keep end-to-end tests few because across 20 services they get slow and flaky, and contracts catch most integration breaks faster."

Tip: Explain why you keep end-to-end tests few — slow and flaky across many services.`,

'Explain consumer-driven contract testing.':
`**Why they ask:** a key microservices technique.

**Answer:**
"Each consumer writes tests describing the requests it sends and the responses it relies on, which generate a contract. The provider runs every consumer's contract in its own pipeline to prove it still satisfies them. A broker stores contracts and verification results, and a can-i-deploy check blocks a release that would break a consumer. If the orders team renames customerId, their build fails before the billing service ever sees it. Pact and Spring Cloud Contract are the common tools."

Tip: Mention it replaces many brittle end-to-end tests.`,

'How do you make a large test suite fast?':
`**Why they ask:** feedback speed drives productivity.

**Answer:**
"Parallelize and shard; make tests hermetic and independent; create data via APIs instead of the UI; reuse authenticated state; run only impacted tests on pull requests using test impact analysis; cache dependencies and containers; push checks down the pyramid; and move slow suites to nightly. On my last team, sharding across 8 runners plus test-impact selection cut pull request feedback from 45 minutes to 8."

Tip: Numbers make it concrete.`,

'What is a hermetic test?':
`**Why they ask:** reliability fundamentals.

**Answer:**
"A test that depends only on what it sets up itself — no shared environments, no external services, no dependence on test order. It creates its own data, uses fakes or containers for dependencies, and cleans up. Hermetic tests give the same result every run and can run in parallel safely."

Tip: Mention Testcontainers or in-memory fakes.`,

'What is Testcontainers and why use it?':
`**Why they ask:** modern integration testing.

**Answer:**
"A library that starts real dependencies — PostgreSQL, Kafka, Redis, LocalStack for AWS — in Docker containers from test code and tears them down afterward. You get realistic integration tests that behave the same on a laptop and in CI, without shared test environments. Reuse mode keeps containers alive between local runs for speed."

Tip: Mention reuse mode for speed.`,

'When do you mock and when do you use real dependencies?':
`**Why they ask:** test design judgment.

**Answer:**
"I mock external, slow or non-deterministic things in unit and component tests — third-party APIs, the clock, randomness. I use real dependencies in integration tests where behavior matters — SQL queries, serialization, messaging. A mocked repository can't tell you your SQL has a typo, so over-mocking gives green tests that hide integration bugs."

Tip: Mention fakes vs mocks vs stubs.`,

"What's the difference between mocks, stubs, fakes and spies?":
`**Why they ask:** precise vocabulary.

**Answer:**
"A stub returns canned data. A mock verifies interactions — was this method called with these arguments? A fake is a working lightweight implementation, like an in-memory database. A spy wraps a real object and records calls. I prefer fakes and stubs; heavy use of mocks couples tests to implementation details, so refactors break tests even when behavior is unchanged."

Tip: Prefer fakes and stubs; overuse of mocks couples tests to implementation.`,

'Implement a function to check if a string is a palindrome, and how would you test it?':
`**Why they ask:** coding plus a tester's mindset.

**Answer:**
"Normalize first — lowercase and strip non-alphanumeric characters — then walk two pointers from both ends toward the middle, returning false on the first mismatch. That's O(n) time and O(1) extra space. Then the tests: empty string, a single character, even and odd lengths, mixed case like 'Racecar', punctuation like 'A man, a plan, a canal: Panama', Unicode characters, and a very long input for performance."

Tip: Always list test cases after coding — that's what makes it an SDET answer.`,

'How would you test a function that sorts an array?':
`**Why they ask:** systematic test design.

**Answer:**
"Example cases: empty, one element, already sorted, reverse sorted, duplicates, negative numbers, very large arrays, mixed types if allowed, and stability — equal keys keep their original order. Then property-based testing: for hundreds of random arrays, assert the output is sorted, has the same length, and contains exactly the same elements as the input."

Tip: Mention property-based testing (Hypothesis, fast-check, jqwik).`,

'What is property-based testing?':
`**Why they ask:** advanced technique.

**Answer:**
"Instead of hand-picked examples, you state properties that must always hold, and the framework generates hundreds of random inputs looking for a counterexample, then shrinks it to the simplest failing case. A classic property is decode(encode(x)) equals x. It's great for parsers, serializers and calculations — it once found that our CSV encoder broke on a value containing just a quote character."

Tip: Great for parsers, serializers and calculations.`,

'How do you test a REST API thoroughly?':
`**Why they ask:** API depth.

**Answer:**
"Functional tests for each endpoint, status codes and payloads; validation of missing and invalid fields; authentication and authorization — roles and tenant isolation; pagination and filtering; idempotency for PUT and retries; concurrency with simultaneous updates; error handling; performance thresholds; schema and contract compliance; and backward compatibility. Authorization tests — can tenant A read tenant B's invoice? — find the most serious bugs."

Tip: Authorization testing finds the most serious bugs.`,

'How would you test a payment system?':
`**Why they ask:** high-stakes test design.

**Answer:**
"Happy paths per payment method; declines and gateway errors using sandbox test cards; idempotency, so retrying a payment never double-charges; timeouts and partial failures — the gateway charged but our service timed out; refunds and partial refunds; currency and rounding; concurrency; reconciliation between our records and the gateway's; security — PCI scope and no card data in logs; and audit trails. Idempotency and reconciliation are where real money gets lost."

Tip: Idempotency and reconciliation show depth.`,

'How would you test a file upload feature?':
`**Why they ask:** breadth of thinking.

**Answer:**
"Allowed and disallowed types, size limits just under and just over, empty and corrupt files, file names with special characters or very long names, duplicates, concurrent uploads, slow or interrupted networks, virus scanning, integrity on download using a checksum, access permissions — and malicious files: a renamed executable, path traversal names like ../../etc/passwd, and HTML files with scripts."

Tip: Security cases make the answer stand out.`,

'How would you test a search feature?':
`**Why they ask:** functional and quality dimensions.

**Answer:**
"Exact and partial matches, case and accent insensitivity, typos, special characters, empty and very long queries, ranking relevance, filters and sorting, pagination, performance with large data, the no-results experience, and injection attempts. For relevance, a labeled dataset of queries with expected top results lets me measure ranking quality across releases."

Tip: Mention relevance evaluation with test datasets.`,

'How do you test for race conditions?':
`**Why they ask:** concurrency testing.

**Answer:**
"Fire simultaneous requests at the same resource — two $80 withdrawals from an account holding $100, sent at the same instant — using parallel threads or a load tool, and check invariants: the balance must never go negative and exactly one withdrawal should succeed. I repeat it many times because races are intermittent, and review code for shared state and missing locks or transactions."

Tip: Concrete invariant examples impress.`,

'How do you include performance checks in pipelines?':
`**Why they ask:** continuous performance.

**Answer:**
"Lightweight k6 or Gatling tests on key APIs with thresholds — p95 under 300 milliseconds, error rate under 1% — run on merges or nightly, with results trended over time so slow degradation is visible, failing builds on regressions, and full load tests before major releases."

Tip: Trends catch slow degradation.`,

'What security testing can an SDET automate?':
`**Why they ask:** shift-left security.

**Answer:**
"SAST and dependency scanning in CI, secrets scanning, DAST with OWASP ZAP against test environments, authorization tests for IDOR — user A requesting user B's resource — input validation and injection tests, and checks for security headers. I work with developers so these run on every pull request, not just before release."

Tip: Mention shifting security left with developers.`,

'How does testing in production fit into quality?':
`**Why they ask:** modern quality thinking.

**Answer:**
"Synthetic monitoring of critical journeys, canary releases with automatic rollback when error rates rise, feature flags for gradual rollout, and real user monitoring with alerting tied to SLOs and error budgets. It complements pre-production testing, because some issues only appear with real traffic and data."

Tip: Mention SLOs and error budgets.`,

'How would you design a CI pipeline for quality?':
`**Why they ask:** delivery design.

**Answer:**
"On pull request: lint, unit tests, static analysis, security scans, build, component and contract tests — all under about 10 minutes. On merge: integration tests, deploy to staging, smoke and API regression. Nightly: full end-to-end and performance. Release gates on quality thresholds, with reports and artifacts for every run."

Tip: Mention keeping PR checks fast.`,

'How do you systematically reduce flaky tests?':
`**Why they ask:** trust in automation.

**Answer:**
"Detect with rerun analysis and a flake dashboard, quarantine automatically, assign an owner to each, and fix root causes — timing, shared state, order dependence, unstable environments, external services. And a team goal like a flake rate under 0.5%. Flakiness is a culture and tooling problem as much as a code problem."

Tip: Flakiness is a culture and tooling problem, not just code.`,

'What makes code testable?':
`**Why they ask:** influencing design.

**Answer:**
"Dependency injection, small single-purpose functions, pure functions where possible, clear interfaces, no hidden global state or static calls, and good observability. For example, a service that called DateTime.Now directly couldn't test 'subscription expires at midnight'; injecting a clock made it a two-line test."

Tip: Give an example of refactoring for testability.`,

'What do you look for when reviewing developer code?':
`**Why they ask:** quality leverage.

**Answer:**
"Tests covering the new logic and edge cases, meaningful assertions, a testable design, error handling, logging, security issues, and whether existing tests were updated properly rather than deleted or weakened."

Tip: Reviews are a quality lever, not just a gate.`,

'How do you handle test data at scale?':
`**Why they ask:** data management.

**Answer:**
"Factories and builders for objects, APIs to seed data, synthetic data generators, masked production subsets for realistic volumes, per-test isolation through unique tenants or IDs, and automated cleanup — all compliant with privacy rules."

Tip: Mention privacy compliance.`,

'How do ephemeral environments help testing?':
`**Why they ask:** infrastructure for quality.

**Answer:**
"A full environment spun up per pull request — a Kubernetes namespace or a preview deployment — lets tests run in isolation against exactly that change, with no shared-environment conflicts. It's torn down after merge to control cost."

Tip: Mention preview environments in Vercel/Netlify or K8s.`,

'How do you test event-driven systems (Kafka, queues)?':
`**Why they ask:** async system testing.

**Answer:**
"Verify producers publish correct events — schema registry checks and contract tests — consumers process messages idempotently so a redelivered message doesn't double-ship an order, ordering and retries work, dead-letter queues capture failures, and end-to-end flows complete. Kafka runs in Testcontainers for integration tests, and assertions poll with a timeout rather than sleeping."

Tip: Idempotent consumers are a key point.`,

"What's your approach to mobile test architecture?":
`**Why they ask:** mobile strategy.

**Answer:**
"Native frameworks — Espresso and XCUITest — for fast UI tests owned by app developers, API and contract tests for the backend, a small set of cross-platform end-to-end tests with Appium or Maestro, device-cloud runs before release, and crash and analytics monitoring in production."

Tip: Balance speed and coverage.`,

'How would you test an LLM-powered feature?':
`**Why they ask:** a new testing frontier.

**Answer:**
"Build evaluation datasets with expected behaviors, then score with deterministic checks — format, required facts — LLM-as-judge calibrated against human ratings, and human review of a sample. Test safety — prompt injection, jailbreaks, data leakage — measure latency and cost, and run the evaluations on every prompt or model change, with production outputs monitored."

Tip: Evaluations are the new regression suite.`,

'How do you use AI to improve testing productivity?':
`**Why they ask:** practical AI use.

**Answer:**
"Generating test scaffolding and data, suggesting edge cases I might miss, summarizing failures, clustering flaky failures by cause, and drafting contract tests. I always review generated tests for meaningful assertions — AI happily writes tests that pass but verify nothing."

Tip: Practical, not hype.`,

'Which quality metrics would you track?':
`**Why they ask:** measurement.

**Answer:**
"Escaped defects and their severity, change failure rate and MTTR from DORA, pipeline duration, flake rate, coverage of critical paths, and time to detect regressions. Coverage percentage alone is misleading."

Tip: Coverage % alone is misleading.`,

'Is 100% code coverage a good goal?':
`**Why they ask:** metric judgment.

**Answer:**
"No. Coverage shows which code ran, not whether behavior was verified — a test with no assertions still adds coverage. Chasing 100% produces weak tests on trivial code. I aim for high coverage of critical logic and use mutation testing to check whether the tests actually catch changes."

Tip: Mention mutation testing (Stryker, PIT).`,

'What is mutation testing?':
`**Why they ask:** test quality measurement.

**Answer:**
"A tool makes small changes to the code — flips a greater-than to greater-or-equal, changes a plus to a minus — and runs the tests. If the tests still pass, the mutant survived, meaning nothing would have caught that bug. The mutation score shows how effective the tests really are. PIT for Java, Stryker for JavaScript and .NET."

Tip: Strong signal of test quality.`,

'How do you design a reusable test framework for multiple teams?':
`**Why they ask:** platform thinking.

**Answer:**
"A shared core library — API clients, auth, data factories, reporting — with conventions and templates, semantic versioning, documentation and examples, extension points for team-specific needs, and a support channel. I treat it as a product with users and track adoption."

Tip: Adoption metrics matter.`,

'Describe a tool you built that improved quality.':
`**Why they ask:** proof.

**Answer:**
"I built a test data service with an API that created realistic customers, orders and accounts in seconds. Teams stopped sharing fragile test accounts; flaky tests dropped 60% and the time to write a new test halved."

Tip: Problem, solution, adoption, impact.`,

'Tell me about a design flaw you caught before it shipped.':
`**Why they ask:** early impact.

**Answer:**
"In a design review for order retries, I noticed there was no idempotency key, so a network retry could create duplicate orders. We added idempotency keys and tests for duplicate submissions before development finished."

Tip: Early catch = high value.`,

'How do you influence developers to write better tests?':
`**Why they ask:** influence without authority.

**Answer:**
"Make it easy with templates and fast feedback, show value with data — bugs caught, time saved — pair on tough cases, include test quality in code reviews, and celebrate good examples in team demos."

Tip: Influence without authority.`,

'Tell me about a production incident and your role.':
`**Why they ask:** learning from failure.

**Answer:**
"A config change broke checkout in one region. I helped reproduce it, added a synthetic check for every region, and added a config validation test to the pipeline so similar changes fail before deployment."

Tip: Turn incidents into tests.`,

'How would you test a distributed system for resilience?':
`**Why they ask:** resilience engineering.

**Answer:**
"Chaos engineering: controlled experiments that kill instances, add latency or drop network traffic, starting from a hypothesis like 'if the recommendations service is down, checkout still works.' Verify timeouts, retries with backoff, circuit breakers and fallbacks behave, and that alerts fire. Tools include Chaos Monkey, Gremlin, Litmus and AWS Fault Injection Service."

Tip: Start small with a hypothesis.`,

'How do you test database migrations?':
`**Why they ask:** deployment safety.

**Answer:**
"Run migrations on a copy of production-like data, verify schema and data integrity, test backward compatibility for rolling deploys with the expand-and-contract pattern, measure runtime and locking — a migration that locks a big table for 10 minutes is an outage — and test rollback."

Tip: Expand/contract shows maturity.`,

'How do you test backward compatibility of an API?':
`**Why they ask:** protecting consumers.

**Answer:**
"Contract tests for existing consumers, running old client test suites against the new version, checking that new fields are additive and optional, deprecation headers, and versioned endpoints when a breaking change is unavoidable."

Tip: Mention consumer contract tests.`,

"Where does accessibility fit in an SDET's work?":
`**Why they ask:** inclusive quality.

**Answer:**
"Automated axe checks in component and end-to-end tests, linting for ARIA misuse, and manual audits of keyboard and screen reader flows before releases."

Tip: Quality includes everyone.`,

'How would you build a quality engineering culture?':
`**Why they ask:** leadership mindset.

**Answer:**
"Quality owned by the whole team, SDETs as enablers — tools, coaching, standards — fast feedback loops, blameless postmortems that end with new tests, and shared metrics."

Tip: Enablement over gatekeeping.`,

'What would you ask about our engineering setup?':
`**Why they ask:** diagnostic curiosity.

**Answer:**
"What does your test pyramid look like today? How long does pull request feedback take? How do you handle flaky tests? Who owns tests — developers or QA? What's your release frequency and rollback process?"

Tip: Shows you'll diagnose quickly.`,

'Which languages and stacks are you strongest in?':
`**Why they ask:** technical fit.

**Answer:**
"Java with JUnit 5, REST Assured and Testcontainers for backend services, and TypeScript with Playwright for web. I'm comfortable reading Go and Python services to write targeted tests."

Tip: Be specific.`,

'How do you test applications running on Kubernetes?':
`**Why they ask:** cloud-native testing.

**Answer:**
"Validate manifests with linting and policy checks, test liveness and readiness probes, run integration tests in ephemeral namespaces, verify autoscaling and resource limits under load, and test rolling updates and rollbacks. Helm charts get their own tests with helm template rendering and chart-testing."

Tip: Mention Helm chart testing.`,

'How do feature flags affect testing?':
`**Why they ask:** configuration complexity.

**Answer:**
"They allow testing in production with limited users, but multiply configurations — 10 flags is over a thousand combinations. I test both states for critical paths, include flag state in test setup, and push to remove old flags so the combinations don't grow forever."

Tip: Flag debt is real.`,

'Where do you want to go as an SDET?':
`**Why they ask:** career fit.

**Answer:**
"Toward staff quality engineer or test architect — shaping quality strategy across teams, building platforms and mentoring."

Tip: Show ambition with direction.`,

'Why should we hire you as an SDET?':
`**Why they ask:** your closing pitch.

**Answer:**
"I combine strong engineering with a tester's mindset. I've built test platforms adopted by multiple teams, cut pull request feedback time by 80%, and introduced contract testing that removed most of our flaky end-to-end tests."

Tip: Engineering + impact.`,

'How would you test a URL shortener service?':
`**Why they ask:** system design plus testing.

**Answer:**
"Functional: create a short URL, redirect with 301 or 302 to the original, custom aliases, duplicates, invalid URLs, expiry. Non-functional: redirect latency at p99, high read throughput, key uniqueness when thousands are created concurrently, storage growth. Security: malicious or phishing URLs, open-redirect abuse, rate limiting. Analytics: accurate click counts. Resilience: what happens when the cache or database fails."

Tip: System design + testing answers are common in SDET interviews.`,

'How would you write a retry helper for flaky external calls in a test framework?':
`**Why they ask:** framework engineering judgment.

**Answer:**
"Wrap the call with a configurable number of attempts and exponential backoff — 200, 400, then 800 milliseconds — retry only on transient errors like timeouts, 502 and 503, log every attempt, and fail with the last error. I use it for setup calls to unstable dependencies, never to hide real test failures — retrying an assertion just masks bugs."

Tip: The "only transient errors" point shows judgment.`,

};
