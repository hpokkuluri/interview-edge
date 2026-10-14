// qa-auto — generated from src/qa-auto-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// QA Automation Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-auto'] = (QB['qa-auto'] || []).concat([
['Strategy', 'What is the test automation pyramid?',
`- **Many unit tests** (fast, cheap) at the base.
- **Fewer API/service/integration tests** in the middle.
- **Few UI end-to-end tests** at the top (slow, brittle).
- Push tests down the pyramid where possible; UI tests for critical journeys only.`, 'B', 'M'],

['Strategy', 'How do you decide what to automate?',
`- Automate: stable, repetitive, high-value regression; data-driven cases; smoke tests; API checks.
- Don't automate: one-off tests, highly volatile UIs, exploratory/usability tests.
- Consider ROI: run frequency × manual effort vs build + maintenance cost.`, 'B', 'M'],

['Selenium', 'What locator strategies do you use in Selenium and which do you prefer?',
`- ID, name, CSS selectors, XPath, link text, class name.
- Prefer **stable IDs or data-test attributes** (e.g. data-testid) agreed with developers; CSS over complex XPath.
- Avoid absolute XPath and index-based locators.`, 'B', 'M'],

['Selenium', 'How do you handle waits and synchronization?',
`- Avoid **Thread.sleep**.
- Use **explicit waits** (WebDriverWait with ExpectedConditions: visibility, clickability).
- Fluent waits for polling; avoid mixing implicit and explicit waits.
- Wait for app-specific signals (spinners gone, network idle).`, 'B', 'M'],

['Playwright', 'Why are teams moving from Selenium to Playwright?',
`- **Auto-waiting** and web-first assertions reduce flakiness.
- Multiple browsers (Chromium, Firefox, WebKit) with one API; fast parallel execution.
- Built-in **tracing, screenshots, video**, network interception, API testing.
- Strong TypeScript/JS support (also Python, Java, .NET).
Selenium remains widely used with broad language and grid support.`, 'D', 'M'],

['Framework', 'Describe a test automation framework you built.',
`- **Language and runner** (Java + TestNG/JUnit, or TypeScript + Playwright Test).
- **Page Object Model** (or screenplay) for UI abstraction.
- **Config** per environment; **test data** management (factories, APIs to seed data).
- **Reporting** (Allure, HTML reports), screenshots on failure.
- **CI integration** (GitHub Actions/Jenkins/Azure DevOps), parallel runs, tagging.`, 'D', 'M'],

['Framework', 'What is the Page Object Model and why use it?',
`- A class per page/component holding **locators and actions**; tests call meaningful methods (loginPage.login(user)).
- Reduces duplication; changes to UI are fixed in one place.
- Keep assertions in tests, not page objects (common guideline).`, 'B', 'M'],

['API Automation', 'How do you automate API tests?',
`- Tools: **REST Assured** (Java), **Playwright APIRequest**, **requests + pytest** (Python), **Postman/Newman**.
- Validate status, body, schema (JSON schema), headers, performance thresholds.
- Chain requests (create → get → update → delete).
- Use test data setup/teardown; mock dependencies when needed.`, 'D', 'M'],

['Flaky Tests', 'How do you deal with flaky tests?',
`- **Track** flakiness (rerun stats); quarantine flaky tests so they don't block pipelines.
- Root causes: timing/waits, shared test data, order dependence, environment instability, animations, network.
- Fix with proper waits, isolated data, retries only as a temporary measure.
- Make flaky-test reduction a team metric.`, 'D', 'M'],

['CI/CD', 'How do you integrate automated tests into CI/CD?',
`- Run **unit and API tests on every commit/PR**; UI smoke on merge; full regression nightly.
- Parallelize; use containers/browsers in CI (e.g. Playwright Docker images, Selenium Grid).
- Fail the build on critical failures; publish reports and artifacts.
- Shift-left: tests run before deployment to higher environments.`, 'D', 'M'],

['Test Data', 'How do you manage test data for automation?',
`- Create data via **APIs or DB scripts** before tests (independent of UI).
- Unique data per test run (timestamps, UUIDs) to avoid collisions.
- Clean up afterwards or use disposable environments.
- Mask production data if used.`, 'D', 'M'],

['Coding', 'What programming concepts must an automation engineer know?',
`- OOP (classes, inheritance, interfaces), collections, exception handling, file/JSON handling.
- Async (for JS/TS), waits.
- Design patterns (POM, factory, builder, singleton cautiously).
- Git, code reviews, clean code.`, 'B', 'M'],

['Mobile', 'How do you automate mobile apps?',
`- **Appium** (cross-platform), **Espresso** (Android), **XCUITest** (iOS).
- Device clouds (BrowserStack, Sauce Labs) for coverage.
- Handle gestures, permissions, app states; stable accessibility IDs as locators.`, 'D', 'S'],

['Reporting', 'What metrics do you report for automation?',
`- Automated coverage of regression; pass rate; execution time.
- Flaky test rate; defects found by automation.
- Time saved per release.
Present trends, not just snapshots.`, 'B', 'M'],

['AI', 'How is AI changing test automation?',
`- **AI-assisted test generation** (from requirements or code), self-healing locators, visual testing, test data generation.
- Coding assistants speed up writing tests.
- Still need human judgment for what matters, reviews of generated tests, and stable design.`, 'D', 'S'],

['Behavioral', 'Tell me about automation that saved significant time.',
`- Before: manual regression took X days per release.
- What you automated, framework choices, CI integration.
- After: regression in hours; releases more frequent; fewer escaped defects.`, 'B', 'M'],

['Behavioral', 'How do you convince a team to invest in automation?',
`- Show ROI with data (manual effort, release frequency, escaped defects).
- Start with a pilot on high-value flows; demonstrate results quickly.
- Involve developers (shared ownership, testability).`, 'B', 'S']
]);
