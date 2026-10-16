// SDET (Software Development Engineer in Test). Format: [topic, question, answer, 'B'|'D']
QB['qa-sdet'] = [
["Role", "How is an SDET different from a QA automation engineer?",
`**Why they ask:** to confirm you think as an engineer about quality.

**Answer:** An SDET is a software engineer focused on testability and quality at the system level. Beyond automating test cases, an SDET designs test architecture, builds frameworks and internal tools, writes production-quality code, reviews developer code for testability, owns contract and integration testing strategies, and improves CI/CD pipelines and test infrastructure.

Tip: Give an example of a tool or framework you built that others use.`, 'B'],

["Strategy", "How would you design a test strategy for a microservices system?",
`**Answer:**
- **Unit tests** in each service (owned by developers, with SDET guidance).
- **Component tests** — a service with its dependencies stubbed.
- **Contract tests** (Pact) between consumers and providers.
- **Integration tests** with real dependencies in containers (Testcontainers).
- **A few end-to-end tests** for critical journeys.
- **Production checks** — synthetic monitoring, canaries, feature flags.

Tip: Explain why you keep end-to-end tests few — slow and flaky across many services.`, 'D'],

["Contract Testing", "Explain consumer-driven contract testing.",
`**Answer:** Each consumer writes tests describing the requests it sends and responses it needs; these generate a contract. The provider runs the contract in its pipeline to verify it still satisfies every consumer. A broker stores contracts and verification results, and "can-i-deploy" checks block breaking releases. Tools: Pact, Spring Cloud Contract.

Tip: Mention it replaces many brittle end-to-end tests.`, 'D'],

["Test Infrastructure", "How do you make a large test suite fast?",
`**Answer:** Parallelize and shard; make tests hermetic and independent; create data via APIs; reuse authenticated state; run only impacted tests on PRs (test impact analysis); cache dependencies and containers; push checks down the pyramid; and move slow suites to nightly.

**Example:** "Sharding across 8 runners and test-impact selection cut PR feedback from 45 to 8 minutes."

Tip: Numbers make it concrete.`, 'D'],

["Test Infrastructure", "What is a hermetic test?",
`**Answer:** A test that depends only on what it sets up itself — no shared environments, external services or test order. It creates its own data, uses fakes or containers for dependencies, and cleans up. Hermetic tests are reliable and parallelizable.

Tip: Mention Testcontainers or in-memory fakes.`, 'D'],

["Testcontainers", "What is Testcontainers and why use it?",
`**Answer:** A library that starts real dependencies — PostgreSQL, Kafka, Redis, LocalStack — in Docker containers from test code, then tears them down. It gives realistic integration tests that run the same locally and in CI, without shared test environments.

Tip: Mention reuse mode for speed.`, 'D'],

["Mocking", "When do you mock and when do you use real dependencies?",
`**Answer:** Mock external, slow or non-deterministic dependencies in unit and component tests — third-party APIs, time, randomness. Use real dependencies in integration tests where behavior matters — SQL queries, serialization, messaging. Over-mocking gives green tests that hide integration bugs.

Tip: Mention fakes vs mocks vs stubs.`, 'B'],

["Mocking", "What's the difference between mocks, stubs, fakes and spies?",
`**Answer:** **Stub:** returns canned data. **Mock:** verifies interactions (was this method called with these arguments?). **Fake:** a working lightweight implementation (in-memory database). **Spy:** wraps a real object and records calls.

Tip: Prefer fakes and stubs; overuse of mocks couples tests to implementation.`, 'D'],

["Coding", "Implement a function to check if a string is a palindrome, and how would you test it?",
`**Answer:** Normalize (lowercase, remove non-alphanumerics), then compare with two pointers from both ends — O(n) time, O(1) extra space. Tests: empty string, single character, even/odd length, mixed case, punctuation ("A man, a plan..."), Unicode, very long input.

Tip: Always list test cases after coding — that's what makes it an SDET answer.`, 'D'],

["Coding", "How would you test a function that sorts an array?",
`**Answer:** Cases: empty, one element, already sorted, reverse sorted, duplicates, negative numbers, very large arrays, mixed types if allowed, stability (equal keys keep order). Use property-based testing: for random inputs, output is sorted, has the same length and same elements.

Tip: Mention property-based testing (Hypothesis, fast-check, jqwik).`, 'D'],

["Coding", "What is property-based testing?",
`**Answer:** Instead of hand-picked examples, you define properties that must always hold, and the framework generates hundreds of random inputs to find counterexamples, then shrinks them to the simplest failing case. Example property: "decode(encode(x)) == x".

Tip: Great for parsers, serializers and calculations.`, 'D'],

["Design", "How do you test a REST API thoroughly?",
`**Answer:** Functional (each endpoint, status codes, payloads), validation (missing/invalid fields), auth and authorization (roles, tenant isolation), pagination and filtering, idempotency (PUT, retries), concurrency (simultaneous updates), error handling, performance thresholds, schema/contract compliance, and backward compatibility.

Tip: Authorization testing finds the most serious bugs.`, 'D'],

["Design", "How would you test a payment system?",
`**Answer:** Happy paths per method; declines and errors from the gateway (using sandbox test cards); idempotency (retrying a payment doesn't double-charge); timeouts and partial failures; refunds and partial refunds; currency and rounding; concurrency; reconciliation between internal records and the gateway; security (PCI scope, no card data in logs); and audit trails.

Tip: Idempotency and reconciliation show depth.`, 'D'],

["Design", "How would you test a file upload feature?",
`**Answer:** Allowed and disallowed types, size limits (just under/over), empty and corrupt files, file names with special characters, duplicate uploads, concurrent uploads, slow or interrupted network, virus scanning, storage and retrieval integrity (checksum), permissions on who can access the file, and malicious files (path traversal, scripts).

Tip: Security cases make the answer stand out.`, 'D'],

["Design", "How would you test a search feature?",
`**Answer:** Exact and partial matches, case and accent insensitivity, typos, special characters, empty and very long queries, ranking relevance, filters and sorting, pagination, performance with large data, no-results experience, and injection attempts.

Tip: Mention relevance evaluation with test datasets.`, 'D'],

["Concurrency", "How do you test for race conditions?",
`**Answer:** Fire simultaneous requests at the same resource (e.g. two withdrawals from one account), use load tools or parallel threads, verify invariants (balance never negative), check database locking and transactions, and run tests repeatedly. Code review for shared state helps too.

Tip: Concrete invariant examples impress.`, 'D'],

["Performance", "How do you include performance checks in pipelines?",
`**Answer:** Lightweight k6 or Gatling tests on key APIs with thresholds (e.g. p95 < 300 ms, error rate < 1%) run on merges or nightly; trend results over time; fail builds on regressions; and run full load tests before major releases.

Tip: Trends catch slow degradation.`, 'D'],

["Security", "What security testing can an SDET automate?",
`**Answer:** SAST and dependency scanning (SCA) in CI, secrets scanning, DAST (OWASP ZAP) against test environments, authorization tests (IDOR — user A accessing user B's resource), input validation and injection tests, and security headers checks.

Tip: Mention shifting security left with developers.`, 'D'],

["Observability", "How does testing in production fit into quality?",
`**Answer:** Synthetic monitoring of critical journeys, canary releases with automated rollback on error-rate increases, feature flags for gradual rollout, real user monitoring and alerting. It complements pre-production testing because some issues only appear with real traffic and data.

Tip: Mention SLOs and error budgets.`, 'D'],

["CI/CD", "How would you design a CI pipeline for quality?",
`**Answer:** On PR: lint, unit tests, static analysis, security scans, build, component and contract tests (fast, under ~10 min). On merge: integration tests, deploy to staging, smoke and API regression. Nightly: full E2E and performance. Release gates: quality thresholds. Artifacts and reports for every run.

Tip: Mention keeping PR checks fast.`, 'D'],

["Flakiness", "How do you systematically reduce flaky tests?",
`**Answer:** Detect (rerun analysis, flake dashboards), quarantine automatically, assign owners, and fix root causes — timing, shared state, order dependence, unstable environments, external services. Set a team goal (e.g. flake rate < 0.5%).

Tip: Flakiness is a culture and tooling problem, not just code.`, 'D'],

["Testability", "What makes code testable?",
`**Answer:** Dependency injection, small single-purpose functions, pure functions where possible, clear interfaces, avoiding hidden global state and static calls, and observability (logs, metrics). As an SDET I review designs for these properties early.

Tip: Give an example of refactoring for testability.`, 'D'],

["Code Review", "What do you look for when reviewing developer code?",
`**Answer:** Tests that cover new logic and edge cases, meaningful assertions, testability of the design, error handling, logging, security issues, and whether existing tests were updated properly.

Tip: Reviews are a quality lever, not just a gate.`, 'B'],

["Data", "How do you handle test data at scale?",
`**Answer:** Factories/builders for objects, APIs to seed data, synthetic data generators, masked production subsets for realistic volumes, per-test isolation (unique tenants or IDs), and automated cleanup.

Tip: Mention privacy compliance.`, 'D'],

["Environments", "How do ephemeral environments help testing?",
`**Answer:** Spinning up a full environment per pull request (via Kubernetes namespaces or preview deployments) lets tests run in isolation against the exact change, removing shared-environment conflicts. Torn down after merge to control cost.

Tip: Mention preview environments in Vercel/Netlify or K8s.`, 'D'],

["Messaging", "How do you test event-driven systems (Kafka, queues)?",
`**Answer:** Verify producers publish correct events (schema registry, contract tests), consumers handle messages idempotently, ordering and retries work, dead-letter queues capture failures, and end-to-end flows complete. Use Testcontainers for Kafka in integration tests.

Tip: Idempotent consumers are a key point.`, 'D'],

["Mobile", "What's your approach to mobile test architecture?",
`**Answer:** Native frameworks (Espresso, XCUITest) for fast UI tests owned by app developers, API and contract tests for backend, a small set of cross-platform E2E tests (Appium or Maestro), device cloud runs before release, and crash/analytics monitoring in production.

Tip: Balance speed and coverage.`, 'D'],

["AI", "How would you test an LLM-powered feature?",
`**Answer:** Build evaluation datasets with expected behaviors; score with deterministic checks (format, required facts), LLM-as-judge with human calibration, and human review; test safety (prompt injection, jailbreaks, data leakage); measure latency and cost; and run evaluations on every prompt or model change. Monitor real outputs in production.

Tip: Evaluations are the new regression suite.`, 'D'],

["AI", "How do you use AI to improve testing productivity?",
`**Answer:** Generate test scaffolding and data, suggest edge cases, summarize failures, cluster flaky failures, and help write contract tests. Always review generated code for meaningful assertions.

Tip: Practical, not hype.`, 'D'],

["Metrics", "Which quality metrics would you track?",
`**Answer:** Escaped defects and severity, change failure rate and MTTR (DORA), test pipeline duration, flake rate, coverage of critical paths, and time to detect regressions.

Tip: Coverage % alone is misleading.`, 'D'],

["Coverage", "Is 100% code coverage a good goal?",
`**Answer:** No. Coverage shows what code ran, not whether behavior was verified. Chasing 100% leads to weak tests. Aim for high coverage of critical logic, use mutation testing to check test strength, and focus on risk.

Tip: Mention mutation testing (Stryker, PIT).`, 'D'],

["Mutation", "What is mutation testing?",
`**Answer:** A tool makes small changes (mutants) to the code — flips a condition, changes an operator — and runs the tests. If tests still pass, the mutant "survived", meaning tests didn't catch the change. Mutation score shows test effectiveness. Tools: PIT (Java), Stryker (JS/.NET).

Tip: Strong signal of test quality.`, 'D'],

["Architecture", "How do you design a reusable test framework for multiple teams?",
`**Answer:** Shared core library (clients, auth, data factories, reporting), conventions and templates, versioning, documentation and examples, extension points for team-specific needs, and an internal support channel. Treat it like a product with users.

Tip: Adoption metrics matter.`, 'D'],

["Behavioral", "Describe a tool you built that improved quality.",
`**Sample answer:** "I built a test data service with an API that created realistic customers, orders and accounts in seconds. Teams stopped sharing fragile test accounts; flaky tests dropped 60% and new test writing time halved."

Tip: Problem, solution, adoption, impact.`, 'B'],

["Behavioral", "Tell me about a design flaw you caught before it shipped.",
`**Sample answer:** "In a design review for order retries, I noticed there was no idempotency key — a network retry could create duplicate orders. We added idempotency keys and tests for duplicate submissions before development finished."

Tip: Early catch = high value.`, 'D'],

["Behavioral", "How do you influence developers to write better tests?",
`**Answer:** Make it easy (templates, fast feedback), show value with data (bugs caught, time saved), pair on tough cases, include test quality in code reviews, and celebrate good examples.

Tip: Influence without authority.`, 'B'],

["Behavioral", "Tell me about a production incident and your role.",
`**Sample answer:** "A config change broke checkout for one region. I helped reproduce it, added a synthetic check for each region, and a config validation test in the pipeline so similar changes fail before deployment."

Tip: Turn incidents into tests.`, 'B'],

["Systems", "How would you test a distributed system for resilience?",
`**Answer:** Chaos engineering — inject failures (kill instances, add latency, drop network) in controlled experiments; verify timeouts, retries with backoff, circuit breakers and fallbacks; and confirm alerts fire. Tools: Chaos Monkey, Gremlin, Litmus, AWS Fault Injection Service.

Tip: Start small with a hypothesis.`, 'D'],

["Systems", "How do you test database migrations?",
`**Answer:** Run migrations on a copy of production-like data, verify schema and data integrity, test backward compatibility for rolling deploys (expand/contract pattern), measure run time and locking, and test rollback.

Tip: Expand/contract shows maturity.`, 'D'],

["Versioning", "How do you test backward compatibility of an API?",
`**Answer:** Contract tests for existing consumers, run old client test suites against the new version, check that new fields are additive and optional, deprecation headers, and versioned endpoints when breaking changes are unavoidable.

Tip: Mention consumer contract tests.`, 'D'],

["Accessibility", "Where does accessibility fit in an SDET's work?",
`**Answer:** Automated axe checks in component and E2E tests, linting for ARIA misuse, and manual audits for keyboard and screen reader flows before releases.

Tip: Quality includes everyone.`, 'D'],

["Leadership", "How would you build a quality engineering culture?",
`**Answer:** Quality owned by the whole team, SDETs as enablers (tools, coaching, standards), fast feedback loops, blameless postmortems with test follow-ups, and shared metrics.

Tip: Enablement over gatekeeping.`, 'D'],

["Interview", "What would you ask about our engineering setup?",
`**Answer:** "What does your test pyramid look like today?", "How long is PR feedback?", "How do you handle flaky tests?", "Who owns tests — developers or QA?", "What's your release frequency and rollback process?"

Tip: Shows you'll diagnose quickly.`, 'B'],

["Languages", "Which languages and stacks are you strongest in?",
`**Sample answer:** "Java with JUnit 5, REST Assured and Testcontainers for backend services, and TypeScript with Playwright for web. I'm comfortable reading Go and Python services to write targeted tests."

Tip: Be specific.`, 'B'],

["Kubernetes", "How do you test applications running on Kubernetes?",
`**Answer:** Validate manifests (lint, policy checks), test health/readiness probes, run integration tests in ephemeral namespaces, verify autoscaling and resource limits under load, and test rolling updates and rollbacks.

Tip: Mention Helm chart testing.`, 'D'],

["Feature Flags", "How do feature flags affect testing?",
`**Answer:** They allow testing in production with limited users, but multiply configurations. Test both flag states for critical paths, clean up old flags, and include flag configuration in test setup.

Tip: Flag debt is real.`, 'D'],

["Career", "Where do you want to go as an SDET?",
`**Answer:** Toward staff quality engineer or test architect — shaping quality strategy across teams, building platforms, and mentoring.

Tip: Show ambition with direction.`, 'B'],

["Closing", "Why should we hire you as an SDET?",
`**Sample answer:** "I combine strong engineering with a tester's mindset. I've built test platforms adopted by multiple teams, cut PR feedback time by 80%, and introduced contract testing that removed most of our flaky E2E tests."

Tip: Engineering + impact.`, 'B']
];
