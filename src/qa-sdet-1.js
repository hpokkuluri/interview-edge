// SDET. Format: [topic, question, answer, 'B'|'D']
QB['qa-sdet'] = (QB['qa-sdet'] || []).concat([
['Role', 'How is an SDET different from a QA automation engineer?',
`- An **SDET** is a software engineer focused on testability and quality: builds frameworks and tools, writes production-quality code, reviews developer code, works on unit/integration/contract tests, CI pipelines and test infrastructure.
- Automation engineers focus more on automating test cases; SDETs shape **how the system is tested**, often across services.`, 'B'],

['Design', 'How would you design a test strategy for a microservices system?',
`- **Unit tests** per service (developers, with SDET guidance).
- **Component tests** with dependencies mocked/stubbed.
- **Contract tests** (Pact/Spring Cloud Contract) between consumers and providers.
- **Integration tests** with real dependencies in containers (Testcontainers).
- **Few end-to-end tests** for critical journeys.
- **Observability-based** checks in production (synthetics, monitoring).`, 'D'],

['Contract Testing', 'What is consumer-driven contract testing?',
`- Consumers define expectations (requests/responses) in **contracts**; providers verify they meet them in their pipeline.
- Catches breaking API changes early without full end-to-end environments.
- Tools: **Pact**, Spring Cloud Contract; a broker stores contracts and verification results.`, 'D'],

['Test Infrastructure', 'How do you make tests fast and reliable at scale?',
`- **Parallel execution** and sharding; containerized environments.
- **Hermetic tests** (no shared state), deterministic data.
- **Test impact analysis**: run tests affected by the change.
- Cache dependencies; fail fast.
- Monitor flakiness; quarantine and fix.`, 'D'],

['Coding', 'Write logic to validate that an API returns sorted results — how would you approach it?',
`- Call the API with sort parameters; extract the list of sort keys.
- Assert each element compares correctly to the next (handle ties and nulls per spec).
- Add tests for pagination boundaries (sorting across pages).
- Parameterize for ascending/descending and different fields.`, 'D'],

['Testcontainers', 'What is Testcontainers and why use it?',
`- Library that starts real dependencies (databases, Kafka, Redis) in Docker containers during tests.
- Realistic integration tests without shared environments; consistent locally and in CI.`, 'D'],

['Mocking', 'When do you mock and when do you use real dependencies?',
`- **Mock** external, slow or non-deterministic dependencies in unit/component tests (third-party APIs, time).
- **Use real** dependencies in integration tests where behavior matters (DB queries, messaging).
- Over-mocking hides integration bugs; balance across the pyramid.`, 'B'],

['Performance', 'How do you include performance checks in pipelines?',
`- Lightweight load tests (k6/Gatling) on key APIs with thresholds (p95 latency, error rate).
- Run on merges to main or nightly; trend results.
- Full load tests before major releases.`, 'D'],

['Security', 'What security testing can an SDET automate?',
`- **SAST** and dependency scanning in CI.
- **DAST** scans (OWASP ZAP) on test environments.
- Auth/authorization tests (role-based access, IDOR checks), input validation tests.
- Secrets scanning.`, 'D'],

['Quality Culture', 'How do you help developers own quality?',
`- Make testing easy: frameworks, templates, fast feedback.
- Code reviews focusing on testability.
- Shared quality metrics (escaped defects, flaky tests).
- Pair on difficult tests; teach techniques.`, 'B'],

['Observability', 'How does testing in production fit in?',
`- **Synthetic monitoring** of critical journeys.
- **Feature flags** and canary releases with metrics.
- Monitoring and alerting as a safety net; fast rollback.
- Not a replacement for pre-production testing.`, 'D'],

['Behavioral', 'Describe a testing tool or framework you built from scratch.',
`- Problem it solved, design choices (language, architecture), adoption, measurable impact (time saved, bugs caught, flakiness reduced).`, 'B'],

['Behavioral', 'Tell me about a time you found a design flaw that tests alone couldn\'t catch.',
`- Example: reviewing an API design and spotting missing idempotency for payment retries; proposed idempotency keys and tests.
- Outcome and lesson.`, 'D'],

['AI', 'How would you test an LLM-powered feature?',
`- **Evaluation datasets** with expected behaviors; automated scoring (exact checks, rubric/LLM-as-judge with human review).
- Safety tests (prompt injection, harmful content, PII leakage).
- Regression evaluations when prompts/models change.
- Monitor in production (feedback, drift, cost, latency).`, 'D']
]);
