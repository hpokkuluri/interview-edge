// qa-auto — generated from src/qa-auto-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// QA Automation Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-auto'] = [
["Strategy", "What is the test automation pyramid?",
`**Why they ask:** shows whether you design automation for speed and stability.

**Answer:** Many fast **unit tests** at the base, fewer **API/integration tests** in the middle, and a small number of **UI end-to-end tests** at the top. UI tests are slow and brittle, so push checks down to the lowest level that can catch the defect. Reserve UI tests for critical user journeys.

Tip: Mention the "ice cream cone" anti-pattern — too many UI tests.`, 'B', 'M'],

["Strategy", "How do you decide what to automate?",
`**Answer:** Automate stable, repetitive, high-value tests: regression of critical flows, smoke tests, data-driven cases, API checks, and cross-browser runs. Don't automate one-off tests, rapidly changing UIs, or usability/exploratory testing. Calculate ROI: (runs × manual minutes saved) vs (build + maintenance effort).

Tip: Show you think about maintenance cost, not just coverage.`, 'B', 'M'],

["Strategy", "How do you build an automation strategy from scratch?",
`**Answer:** Assess the application and team skills, agree goals (faster regression, CI feedback), choose tools that fit the tech stack, start with a framework and a small set of high-value tests, integrate into CI early, measure stability and time saved, then scale. Involve developers so tests are part of the definition of done.

Tip: "Start small, prove value, then scale."`, 'D', 'S'],

["Selenium", "Explain Selenium WebDriver architecture.",
`**Answer:** Test code (Java, Python, C#, JS) uses the WebDriver client library, which sends commands over the W3C WebDriver protocol to a browser driver (chromedriver, geckodriver). The driver controls the real browser. Selenium Grid distributes tests across machines and browsers in parallel.

Tip: Mention Selenium 4's W3C standard and relative locators.`, 'B', 'M'],

["Locators", "Which locator strategies do you use and why?",
`**Answer:** In order of preference: dedicated test attributes (data-testid), stable IDs, accessible roles and names, CSS selectors, then XPath when needed (e.g. text matching or traversing to a parent). Avoid absolute XPath, index-based locators and auto-generated classes.

**Example:** \`page.getByRole('button', { name: 'Submit' })\` in Playwright or \`By.cssSelector("[data-testid='submit']")\` in Selenium.

Tip: Ask developers to add test IDs — it's the biggest stability win.`, 'B', 'M'],

["Waits", "How do you handle synchronization and waits?",
`**Answer:** Never use fixed sleeps. In Selenium, use explicit waits (WebDriverWait with conditions like visibility or clickability) and avoid mixing them with implicit waits. In Playwright, rely on auto-waiting and web-first assertions (\`expect(locator).toBeVisible()\`). Wait for application signals — spinner gone, network idle, specific API response.

Tip: Poor waits cause most flaky tests — say so.`, 'B', 'M'],

["Playwright", "Why are teams moving from Selenium to Playwright?",
`**Answer:** Auto-waiting and web-first assertions reduce flakiness; one API for Chromium, Firefox and WebKit; fast parallel runs with browser contexts; built-in tracing, screenshots and video; network interception and API testing; strong TypeScript support plus Python, Java and .NET. Selenium still has broad language support, Grid and huge community.

Tip: Show balanced judgment rather than tool fandom.`, 'D', 'M'],

["Playwright", "What is a browser context in Playwright?",
`**Answer:** An isolated, incognito-like session within a browser — its own cookies, storage and cache. Tests can run in parallel contexts in one browser instance, which is faster than launching browsers. You can save an authenticated state (storageState) and reuse it to skip login in each test.

Tip: Mention storageState for faster tests.`, 'D', 'M'],

["Framework", "Describe an automation framework you built.",
`**Sample answer:** "TypeScript with Playwright Test. Page objects for UI, API helpers to create test data, environment configs for dev/QA/staging, fixtures for logged-in users, tags for smoke and regression, Allure reports with traces on failure, and GitHub Actions running smoke on every PR and full regression nightly in 4 parallel shards. Runtime dropped from 3 hours to 25 minutes."

Tip: Structure + CI + results.`, 'D', 'M'],

["Framework", "What is the Page Object Model?",
`**Answer:** A design pattern where each page or component is a class holding its locators and actions (e.g. \`loginPage.login(user)\`). Tests call meaningful methods instead of raw locators. Benefits: less duplication, easier maintenance — when the UI changes, you update one place. Keep assertions in tests, not page objects.

Tip: Mention component objects for reusable widgets.`, 'B', 'M'],

["Framework", "What design patterns are useful in test automation?",
`**Answer:** Page Object/Component Object, Factory (create drivers or test data), Builder (construct complex test data), Singleton (config — use carefully), Strategy (different behaviors per environment), and Screenplay (actor-based tests for readability).

Tip: Pick two and explain where you used them.`, 'D', 'S'],

["Framework", "Data-driven vs keyword-driven vs BDD frameworks?",
`**Answer:** **Data-driven:** the same test runs with multiple data sets (CSV, JSON, parameterized tests). **Keyword-driven:** tests built from reusable keywords, often by non-programmers (Robot Framework). **BDD:** tests written in Gherkin (Given/When/Then) with Cucumber or SpecFlow, connecting business language to code.

Tip: Say BDD helps only if business people actually read the scenarios.`, 'D', 'M'],

["BDD", "When is Cucumber/BDD a good choice?",
`**Answer:** When product owners and testers collaborate on scenarios and the feature files serve as living documentation. It's overhead when only engineers read them. Keep scenarios declarative ("When the user checks out") not imperative ("When I click the button with id...").

Tip: Show you know the common misuse.`, 'D', 'M'],

["API Automation", "How do you automate API tests?",
`**Answer:** Tools: REST Assured (Java), Playwright request context, requests + pytest (Python), Postman/Newman, Karate. Validate status codes, response bodies, JSON schema, headers and response time. Chain flows (create → get → update → delete), parameterize data, and clean up after tests.

**Example check:** POST /orders returns 201 and an ID; GET /orders/{id} returns the same items and total.

Tip: API tests give the best return — fast and stable.`, 'D', 'M'],

["API Automation", "How do you handle authentication in API tests?",
`**Answer:** Obtain tokens programmatically (OAuth client credentials or login endpoint) in a setup step, cache them per test run, store secrets in CI secret stores — never in code — and test negative cases: expired token, missing token, wrong scope.

Tip: Mention role-based tests (user vs admin).`, 'D', 'M'],

["Flaky Tests", "How do you deal with flaky tests?",
`**Answer:** Track flakiness with rerun statistics, quarantine flaky tests so they don't block pipelines, and fix root causes: bad waits, shared test data, order dependence, environment instability, animations, third-party calls. Retries are a temporary aid, not a fix. Make flake rate a team metric.

Tip: Share a flaky test you fixed and the cause.`, 'D', 'M'],

["CI/CD", "How do you integrate tests into CI/CD?",
`**Answer:** Run unit and API tests on every pull request; UI smoke on merge to main; full regression nightly or before release. Run in containers with parallel shards, publish reports and artifacts (screenshots, traces), and fail builds on critical failures. Tools: GitHub Actions, Jenkins, Azure DevOps, GitLab CI.

Tip: Mention keeping PR checks under ~10 minutes.`, 'D', 'M'],

["CI/CD", "How do you run tests in parallel safely?",
`**Answer:** Make tests independent — each creates its own data and doesn't rely on order. Avoid shared accounts or use a pool of users. Use isolated browser contexts. Shard across machines in CI. Watch shared resources like databases.

Tip: Independence is the precondition.`, 'D', 'M'],

["Test Data", "How do you manage test data for automation?",
`**Answer:** Create data through APIs or database scripts before tests rather than through the UI; use unique values (timestamps, UUIDs) to avoid collisions; clean up afterward or use disposable environments; use factories/builders for complex objects; mask any production data.

Tip: "Never depend on data another test created."`, 'D', 'M'],

["Mocking", "When do you mock services in automated tests?",
`**Answer:** When a dependency is slow, unreliable, costly or not yet built — payment gateways, third-party APIs, email. Use network interception (Playwright route), WireMock or service virtualization. Keep some end-to-end tests with real integrations to catch contract issues.

Tip: Balance — over-mocking hides real bugs.`, 'D', 'M'],

["Coding", "Which programming skills does an automation engineer need?",
`**Answer:** Solid fundamentals in one language (Java, TypeScript, Python, C#): OOP, collections, exceptions, async/await (for JS), file and JSON handling, and string manipulation. Plus Git, code reviews and clean code. Automation code is production code.

Tip: Expect a coding exercise — practice string and array problems.`, 'B', 'M'],

["Coding", "Write logic to check whether a list of prices on a page is sorted ascending.",
`**Answer:** Collect the prices, convert text like "$1,299.00" to numbers, then compare each to the next.
Pseudo-code: \`prices = texts.map(t => parseFloat(t.replace(/[$,]/g, '')))\`; then check \`prices.every((p, i) => i === 0 || prices[i-1] <= p)\`.
Also test descending sort, ties, and sorting across paginated pages.

Tip: Mention the number-parsing step — many candidates compare strings.`, 'D', 'M'],

["Coding", "How do you reverse a string or find duplicates in an array?",
`**Answer:** Reverse: \`s.split('').reverse().join('')\` (JS) or \`s[::-1]\` (Python). Duplicates: loop with a Set — if an item is already in the set, it's a duplicate. Time complexity O(n).

Tip: Explain complexity briefly — interviewers like it.`, 'B', 'E'],

["Git", "How do you use Git in automation work?",
`**Answer:** Feature branches, small commits with clear messages, pull requests with code review, rebasing or merging from main regularly, and resolving conflicts. Test code follows the same standards as application code.

Tip: Mention reviewing developers' test code too.`, 'B', 'E'],

["Reporting", "What should a good automation report show?",
`**Answer:** Pass/fail summary, trend over time, failure details with screenshots, traces, videos and logs, test duration, flaky test indicators, and links to the build and commit. Tools: Allure, Playwright HTML report, ReportPortal.

Tip: Make failures quick to diagnose.`, 'B', 'M'],

["Maintenance", "How do you keep an automation suite maintainable?",
`**Answer:** Good structure (page objects, helpers), stable locators, no duplicated logic, code reviews, regular cleanup of obsolete tests, tagging and ownership, and fixing broken tests immediately rather than letting them rot.

Tip: "A red suite everyone ignores is worse than no suite."`, 'D', 'M'],

["Visual", "What is visual regression testing?",
`**Answer:** Comparing screenshots against approved baselines to catch unintended UI changes (layout, styling). Tools: Playwright's toHaveScreenshot, Percy, Applitools (AI-based comparison). Handle dynamic content by masking or stabilizing data.

Tip: Mention reducing false positives.`, 'D', 'M'],

["Mobile", "How do you automate mobile apps?",
`**Answer:** Appium for cross-platform (WebDriver protocol), Espresso for Android and XCUITest for iOS (faster, native). Use accessibility IDs as locators, run on emulators/simulators in CI and on real devices in device clouds (BrowserStack, Sauce Labs).

Tip: Mention handling permissions and app states.`, 'D', 'S'],

["Performance", "Can automation engineers help with performance testing?",
`**Answer:** Yes — write load scripts with k6, JMeter or Gatling for key APIs, add lightweight performance checks to pipelines (e.g. p95 latency thresholds), and capture front-end metrics with Lighthouse in CI.

Tip: Shows breadth.`, 'D', 'M'],

["Contract", "What is contract testing?",
`**Answer:** Verifying that services agree on the shape of requests and responses, without full end-to-end environments. Consumers define expectations; providers verify them in their pipeline (Pact). It catches breaking API changes early.

Tip: Useful in microservice architectures.`, 'D', 'S'],

["Databases", "How do you validate database changes in automated tests?",
`**Answer:** Connect via a DB client library, query after actions to verify inserts/updates, and clean up. Prefer API-level verification when possible; use direct DB checks for things the API doesn't expose.

Tip: Mention least-privilege test DB users.`, 'D', 'M'],

["Security", "What security checks can be automated?",
`**Answer:** Dependency vulnerability scans, static analysis, DAST scans (OWASP ZAP) in pipelines, and authorization tests — e.g. user A can't access user B's data via API.

Tip: Mention the OWASP Top 10.`, 'D', 'S'],

["Metrics", "How do you measure automation success?",
`**Answer:** Regression time saved, percentage of regression automated, pipeline pass rate and flakiness, defects caught by automation before production, and release frequency improvements.

Tip: Tie metrics to business outcomes.`, 'B', 'M'],

["AI", "How is AI changing test automation?",
`**Answer:** AI coding assistants speed up writing tests; tools offer self-healing locators, test generation from requirements or user flows, visual AI comparisons and failure triage. Engineers still design strategy, review generated tests and ensure they assert meaningful outcomes.

Tip: Show you'd validate AI-generated tests.`, 'D', 'S'],

["AI", "How would you test an AI chatbot feature?",
`**Answer:** Build evaluation sets of prompts with expected behaviors, check accuracy and grounding, test safety (prompt injection, harmful content, PII leakage), consistency across runs, latency and cost, and regression when the model or prompt changes. Combine automated scoring with human review.

Tip: Very current topic — good differentiator.`, 'D', 'S'],

["Leadership", "How do you convince a team to invest in automation?",
`**Answer:** Show data — manual regression hours, release delays, escaped defects. Propose a pilot on high-value flows with a clear target (e.g. regression from 3 days to 4 hours), deliver it quickly, and involve developers so ownership is shared.

Tip: A pilot with measurable results wins support.`, 'B', 'S'],

["Leadership", "How do you mentor manual testers moving into automation?",
`**Answer:** Start with programming basics in the team's language, pair on real tests, give small tasks with code review, provide templates and helpers, and celebrate first contributions.

Tip: Supportive and structured.`, 'B', 'S'],

["Behavioral", "Tell me about automation that saved significant time.",
`**Sample answer:** "Release regression took 3 testers 4 days. I automated 220 critical scenarios with Playwright and API setup, ran them in 6 parallel shards in CI, and cut regression to 40 minutes. We went from monthly to weekly releases."

Tip: Before/after numbers.`, 'B', 'M'],

["Behavioral", "Tell me about a time your tests missed a bug.",
`**Sample answer:** "A currency rounding bug reached production because our tests only used USD. I added data-driven tests for five currencies, reviewed other areas with similar gaps, and added a check to our test review checklist."

Tip: Own it and show the systemic fix.`, 'B', 'M'],

["Behavioral", "How do you handle a pipeline that's red because of your tests?",
`**Answer:** Investigate immediately — real defect, test bug, or environment issue. If it's my test, fix or quarantine it fast so the team isn't blocked, and communicate in the team channel.

Tip: Ownership and speed.`, 'B', 'E'],

["Environments", "How do you handle tests across dev, QA and staging environments?",
`**Answer:** Externalize configuration (URLs, credentials, feature flags) per environment, use environment variables in CI, and tag tests that only make sense in certain environments.

Tip: Never hard-code URLs.`, 'B', 'M'],

["Docker", "How do containers help test automation?",
`**Answer:** Consistent environments locally and in CI, easy parallel browsers (official Playwright or Selenium Docker images), spinning up dependencies with Docker Compose or Testcontainers, and clean state for each run.

Tip: Mention a docker-compose test stack.`, 'D', 'M'],

["Cloud", "What are cloud testing platforms used for?",
`**Answer:** Running tests on many browsers, OS versions and real mobile devices without maintaining labs — BrowserStack, Sauce Labs, LambdaTest. Useful for coverage; costs scale with parallel sessions.

Tip: Mention choosing a coverage matrix from analytics.`, 'B', 'M'],

["Accessibility", "Can accessibility checks be automated?",
`**Answer:** Partially — tools like axe-core (integrated with Playwright or Selenium) catch roughly a third to half of WCAG issues automatically (missing labels, contrast, ARIA errors). Manual checks are still needed for keyboard flow and screen reader experience.

Tip: Balanced view.`, 'D', 'M'],

["Review", "What do you look for when reviewing someone's test code?",
`**Answer:** Meaningful assertions, independence, no hard-coded waits or data, clear naming, reuse of helpers and page objects, proper cleanup, and readability.

Tip: "A test without a good assertion is just a script."`, 'D', 'S'],

["Career", "Where do you want to grow as an automation engineer?",
`**Answer:** Toward SDET or quality engineering leadership — test architecture, CI/CD, performance and security testing, and coaching teams on testability.

Tip: Show direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build automation that teams trust — stable, fast and integrated into CI. I've cut regression from days to under an hour, reduced flakiness below 1%, and helped developers own tests. I'm strong in TypeScript and Java and comfortable across UI and API layers."

Tip: Reliability and impact.`, 'B', 'M']
];

QB['qa-auto'] = (QB['qa-auto'] || []).concat([
["Selenium", "How do you handle frames, multiple windows and alerts in Selenium?",
`**Answer:** Frames: \`driver.switchTo().frame(...)\` then \`defaultContent()\` to return. Windows: get \`getWindowHandles()\`, switch to the new handle, close it and switch back. Alerts: \`driver.switchTo().alert()\` then accept/dismiss/getText. In Playwright, frames use \`frameLocator\`, new pages come from \`context.waitForEvent('page')\`, and dialogs are handled with \`page.on('dialog')\`.

Tip: Showing both tools' approaches stands out.`, 'B', 'M'],
["Selenium", "What is Selenium Grid and when do you need it?",
`**Answer:** Grid distributes tests across multiple machines, browsers and OS versions in parallel. A hub/router receives sessions and sends them to nodes. Use it to cut run time and cover browser combinations — or use cloud grids (BrowserStack, Sauce Labs) or Docker-based Selenoid/Selenium images instead of maintaining your own.

Tip: Mention Selenium 4's distributed Grid components.`, 'D', 'M'],
["Strategy", "What would you automate first in a brand-new project?",
`**Answer:** A smoke suite of the most critical journeys (login, core transaction, payment), API tests for core services, and a CI job that runs them on every build. That gives fast, visible value; then expand to regression by risk.

Tip: Quick wins build trust in automation.`, 'B', 'M']
]);
