// qa-manual — generated from src/qa-manual-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// QA Analyst / Manual Tester. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-manual'] = [
["Fundamentals", "What is the difference between QA, QC and testing?",
`**Why they ask:** a basic check that you understand your role's purpose.

**Answer:** **Quality Assurance** is process-focused — preventing defects through good standards, reviews and practices across the lifecycle. **Quality Control** is product-focused — finding defects in what was built. **Testing** is an activity within QC: executing the software to find defects and confirm it meets requirements.

Tip: Add that modern QA is about preventing defects early, not just finding them at the end.`, 'B', 'E'],

["Fundamentals", "Explain the software testing life cycle (STLC).",
`**Answer:**
1. **Requirement analysis** — understand what to test; raise questions on unclear requirements.
2. **Test planning** — scope, approach, resources, schedule, risks, entry/exit criteria.
3. **Test design** — test cases, test data, traceability to requirements.
4. **Environment setup** — test environment and data ready.
5. **Test execution** — run tests, log defects, retest fixes.
6. **Test closure** — summary report, metrics, lessons learned.

Tip: Mention that in agile these phases happen inside each sprint.`, 'B', 'E'],

["Fundamentals", "What are the levels of testing?",
`**Answer:**
- **Unit testing** — individual functions, usually by developers.
- **Integration testing** — interfaces between modules or systems.
- **System testing** — the complete system against requirements.
- **Acceptance testing (UAT)** — business users confirm it meets their needs.

Tip: Mention who usually owns each level.`, 'B', 'E'],

["Fundamentals", "What is the difference between functional and non-functional testing?",
`**Answer:** **Functional** testing checks what the system does — features, business rules, calculations (e.g. "an order total includes tax"). **Non-functional** testing checks how well it does it — performance, security, usability, accessibility, compatibility, reliability.

Tip: Give one example of each from a real project.`, 'B', 'E'],

["Fundamentals", "Smoke vs sanity vs regression testing?",
`**Answer:**
- **Smoke:** a quick, broad check that a new build's critical functions work — is it stable enough to test?
- **Sanity:** a quick, narrow check that a specific fix or change works.
- **Regression:** broad re-testing to make sure changes didn't break existing functionality.

**Example:** after a login bug fix — sanity-test login; smoke-test the build's main flows; run regression before release.

Tip: Mention which of these you automate.`, 'B', 'E'],

["Fundamentals", "Verification vs validation?",
`**Answer:** **Verification:** "Are we building the product right?" — reviews, walkthroughs, inspections of documents and code against specs. **Validation:** "Are we building the right product?" — testing the working software against user needs.

Tip: A short, crisp answer is enough.`, 'B', 'E'],

["Fundamentals", "Black-box, white-box and grey-box testing?",
`**Answer:** **Black-box:** test inputs and outputs without knowing the internal code. **White-box:** test with knowledge of the code — paths, branches, conditions. **Grey-box:** partial knowledge, such as knowing the database schema or APIs while testing through the UI.

Tip: Mention you use grey-box techniques like checking the database after a UI action.`, 'B', 'E'],

["Test Design", "Explain equivalence partitioning and boundary value analysis.",
`**Answer:** **Equivalence partitioning** divides inputs into groups that should behave the same, so you test one value per group (valid and invalid). **Boundary value analysis** tests at the edges, where defects cluster.

**Example:** an age field accepting 18–65 → partitions: below 18, 18–65, above 65. Boundaries: 17, 18, 65, 66 (plus a middle value like 40).

Tip: Do the example out loud — it's the most common test design question.`, 'B', 'E'],

["Test Design", "What is a decision table and when do you use it?",
`**Answer:** A table that lists combinations of conditions and the expected action for each — useful for complex business rules.

**Example:** discount rules — member (Y/N) × order over $100 (Y/N) gives four combinations: member + over $100 = 15%, member only = 10%, over $100 only = 5%, neither = 0%. Each column becomes a test case.

Tip: It shows you test logic systematically, not randomly.`, 'D', 'M'],

["Test Design", "What is state transition testing?",
`**Answer:** Testing how a system moves between states based on events, including invalid transitions.

**Example:** an order goes Draft → Submitted → Approved → Shipped → Closed. Test each valid transition, and invalid ones like Draft → Shipped or editing a Closed order.

Tip: Great for workflows like approvals, tickets and orders.`, 'D', 'M'],

["Test Design", "What is pairwise testing?",
`**Answer:** A technique that tests every pair of input values at least once instead of every combination, cutting test cases dramatically while catching most interaction defects.

**Example:** 3 browsers × 3 operating systems × 3 languages = 27 combinations; pairwise covers all pairs in about 9 tests. Tools: PICT, AllPairs.

Tip: Mention it for compatibility testing.`, 'D', 'M'],

["Test Design", "What is exploratory testing and how do you structure it?",
`**Answer:** Simultaneous learning, test design and execution, guided by the tester's skill. Structure it with **charters** (a mission like "explore checkout with expired cards"), a time box (60–90 minutes), notes of what you tried, and a debrief of defects, questions and risks.

Tip: Mention it finds issues scripted tests miss — especially in new features.`, 'B', 'M'],

["Test Design", "What is error guessing?",
`**Answer:** Using experience to anticipate where defects are likely — empty fields, special characters, very long input, double-clicks, back button after submit, network drops, time zones, leap years. It complements formal techniques.

Tip: Give a real bug you found this way.`, 'B', 'E'],

["Test Cases", "What makes a good test case?",
`**Answer:** A clear title and objective linked to a requirement; preconditions and test data; numbered steps; an expected result for each step; independent and repeatable; one purpose per case; and priority/tags (smoke, regression).

**Example title:** "Checkout — applies 10% member discount on orders over $100."

Tip: Mention you write cases someone else can run without asking you.`, 'B', 'E'],

["Test Cases", "How do you write test cases when there are no detailed requirements?",
`**Answer:** Talk to the product owner, BA and developers; use the existing application, user stories, designs and similar features as references; write high-level scenarios first; document assumptions and get them confirmed; and use exploratory testing to learn.

Tip: "Document assumptions and confirm them" is the key phrase.`, 'B', 'M'],

["Test Cases", "What is a requirements traceability matrix?",
`**Answer:** A table that maps each requirement to its test cases (and often defects). It shows coverage — every requirement has tests — and impact — which tests to rerun when a requirement changes.

Tip: Mention tools that do this automatically (Jira with Xray/Zephyr, Azure DevOps).`, 'B', 'E'],

["Defects", "What should a good defect report include?",
`**Answer:** A specific title (what fails, where), steps to reproduce, test data, environment and build, expected vs actual result, severity and priority, and evidence (screenshots, logs, video).

**Example title:** "Checkout: 500 error when applying a discount code to a cart with 0-priced item."

Tip: A developer should reproduce it without contacting you.`, 'B', 'E'],

["Defects", "What is the difference between severity and priority?",
`**Answer:** **Severity** is the impact on the system; **priority** is how urgently it must be fixed.

**Examples:**
- Logo misspelled on the home page — low severity, high priority.
- Crash in a rarely used admin report — high severity, lower priority.
- Payment failure for all users — high and high.

Tip: The examples are what interviewers want.`, 'B', 'E'],

["Defects", "Explain the defect life cycle.",
`**Answer:** New → Assigned/Open → In Progress → Fixed → Ready for Retest → Retest → Closed (or Reopened if it still fails). Other states: Rejected (not a bug), Duplicate, Deferred (fix later), Cannot Reproduce.

Tip: Mention triage meetings where priority is agreed.`, 'B', 'E'],

["Defects", "A developer says your defect is 'not a bug'. What do you do?",
`**Answer:** Recheck the requirement or acceptance criteria. If I'm right, share clear evidence — steps, screenshots, the requirement text. If the requirement is unclear, bring in the product owner to decide. Accept the decision and document it; keep it professional, not personal.

Tip: Calm, evidence-based, and let the product owner decide.`, 'B', 'E'],

["Defects", "What do you do if you can't reproduce a defect?",
`**Answer:** Check environment differences (browser, data, user role, build), logs and timing. Try to narrow conditions. If still not reproducible, document what was tried, keep it open as "cannot reproduce" with monitoring, and capture more evidence next time (logs, video).

Tip: Intermittent bugs often relate to data, timing or concurrency.`, 'D', 'M'],

["Agile", "How does testing work in an agile team?",
`**Answer:** Testers join refinement to clarify acceptance criteria, design tests while code is written, test stories within the sprint, pair with developers, automate regression where possible, and contribute to the definition of done. Quality is a team responsibility.

Tip: "Testing is part of the sprint, not after it."`, 'B', 'E'],

["Agile", "What are acceptance criteria and how do you test them?",
`**Answer:** Conditions a story must meet to be accepted, often in Given/When/Then format.

**Example:** "Given a member with an order over $100, when they check out, then a 10% discount is applied."
I derive positive tests from each criterion, plus negative and edge cases (exactly $100, non-member, expired membership).

Tip: Mention you help write acceptance criteria during refinement.`, 'B', 'E'],

["Agile", "What is the definition of done and how does QA contribute?",
`**Answer:** The team's agreed checklist for a story to be complete — e.g. code reviewed, unit tests passing, acceptance tests passed, no open high-severity defects, documentation updated. QA ensures testing criteria are included and met.

Tip: Shows process maturity.`, 'B', 'M'],

["Agile", "What is shift-left testing?",
`**Answer:** Moving testing activities earlier — reviewing requirements, testing APIs before the UI exists, writing tests alongside code, static analysis. Defects found early are much cheaper to fix.

Tip: Give an example of a requirement gap you caught in refinement.`, 'B', 'M'],

["Regression", "How do you decide what goes into a regression suite?",
`**Answer:** Critical business flows, high-risk and frequently changed areas, past defect hotspots, and integrations. Prioritize into tiers — P1 smoke, P2 core regression, P3 extended. Automate stable, repetitive cases and review the suite regularly to remove obsolete tests.

Tip: Mention impact analysis for each release.`, 'D', 'M'],

["Regression", "You have one day to test a release that normally takes a week. What do you do?",
`**Answer:** Do risk-based testing: identify what changed and its impact, prioritize critical business flows and changed areas, run automated regression, do focused exploratory testing on new features, and clearly communicate what wasn't tested and the residual risk.

Tip: Transparency about risk is the key point.`, 'D', 'M'],

["SQL", "Why do testers need SQL? Give examples.",
`**Answer:** To verify data behind the UI, set up test data and investigate defects.
- Check an order saved: \`SELECT status, total FROM orders WHERE order_id = 1001;\`
- Find duplicates: \`SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;\`
- Join to verify related records: orders and order_lines totals match.

Tip: Be ready to write a JOIN and GROUP BY on a whiteboard.`, 'B', 'E'],

["SQL", "Write a query to find customers with no orders.",
`**Answer:**
\`SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id WHERE o.order_id IS NULL;\`
A LEFT JOIN keeps all customers; those without a matching order have NULL order columns.

Tip: Mention NOT EXISTS as an alternative.`, 'D', 'M'],

["API", "How do you test an API manually?",
`**Answer:** Use Postman (or similar) to send requests with different methods, headers, auth and payloads. Check status codes, response body and schema, error messages and response times. Negative tests: missing or invalid fields, wrong types, unauthorized access, large payloads. Save collections with environments for reuse.

Tip: Mention chaining requests (create → get → update → delete).`, 'B', 'M'],

["API", "What HTTP status codes should a tester know?",
`**Answer:** 200 OK, 201 Created, 204 No Content; 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable; 429 Too Many Requests; 500 Internal Server Error, 502/503/504 gateway or availability errors.

Tip: Explain 401 vs 403 — a common follow-up.`, 'B', 'E'],

["UAT", "What is UAT and how does QA support it?",
`**Answer:** User acceptance testing is where business users confirm the system supports their real work. QA supports it by preparing environments and data, providing scenarios or scripts, training users on logging defects, triaging issues, and tracking sign-off.

Tip: Mention UAT is not a repeat of system testing.`, 'B', 'E'],

["Mobile", "What is different about testing mobile apps?",
`**Answer:** Device and OS fragmentation, screen sizes and orientation, interruptions (calls, notifications), network changes and offline mode, battery and performance, permissions, gestures, and app store rules. Use real devices plus device clouds (BrowserStack, Sauce Labs).

Tip: Mention testing upgrades from the previous app version.`, 'D', 'M'],

["Web", "How do you do cross-browser testing?",
`**Answer:** Identify target browsers and versions from analytics, test key flows on each (Chrome, Safari, Edge, Firefox, mobile browsers), use cloud tools for coverage, and watch for layout, JavaScript and date/time differences — Safari is often the odd one out.

Tip: Prioritize by user traffic.`, 'B', 'E'],

["Accessibility", "What is accessibility testing?",
`**Answer:** Checking that people with disabilities can use the product — screen readers, keyboard-only navigation, color contrast, text alternatives for images, captions, focus order. Standard: WCAG 2.1/2.2 AA. Tools: axe, Lighthouse, WAVE, plus manual screen reader testing (NVDA, VoiceOver).

Tip: Mention it's a legal requirement in many contexts.`, 'D', 'M'],

["Security", "What basic security checks can a manual tester do?",
`**Answer:** Try accessing pages without login or with another user's ID in the URL (broken access control), check input fields for script injection, verify passwords and sensitive data aren't exposed in URLs or logs, check session timeout and logout, and confirm error messages don't reveal technical details.

Tip: Mention OWASP Top 10 awareness.`, 'D', 'M'],

["Tools", "Which test management and defect tools have you used?",
`**Sample answer:** "Jira with Xray for test cases and defects, Azure DevOps Test Plans on another project, and TestRail for a client. I've built dashboards showing execution progress and defect trends."

Tip: Mention what you did with each tool.`, 'B', 'E'],

["Metrics", "Which testing metrics do you report?",
`**Answer:** Test execution progress (planned vs executed, pass/fail), defects by severity and status, defect trends (opened vs closed), requirements coverage, and defect leakage (bugs found in production). Metrics guide decisions — not blame.

Tip: Mention a go/no-go summary.`, 'B', 'M'],

["Environments", "What do you do when the test environment is unstable?",
`**Answer:** Report the impact clearly (blocked tests, hours lost), work with DevOps to fix root causes, use mocks or stubs where possible, prioritize tests that can run, and adjust the plan and communicate schedule risk.

Tip: Quantify the impact.`, 'B', 'M'],

["Test Data", "How do you manage test data?",
`**Answer:** Prepare data for each scenario (valid, invalid, edge cases), use scripts or APIs to create it repeatably, keep sensitive production data masked, and reset data between runs where possible.

Tip: Mention test data is often the biggest bottleneck.`, 'B', 'E'],

["ERP", "How is testing an ERP or business application different?",
`**Answer:** You test end-to-end business processes across modules (order-to-cash, procure-to-pay), verify accounting and reports, deal with configuration-driven behavior, roles and approvals, batch jobs, integrations and regular vendor updates.

Tip: Good to mention if applying to enterprise roles.`, 'D', 'M'],

["Behavioral", "Tell me about a critical defect you found.",
`**Sample answer:** "While testing a refund feature, I noticed refunds could exceed the original payment if you edited the cart after a partial refund. I reproduced it with exact steps and data. It would have let customers get more money back than they paid. It was fixed before release, and I added it to regression."

Tip: Business impact makes the story strong.`, 'B', 'E'],

["Behavioral", "How do you handle pressure to sign off a release with open defects?",
`**Answer:** Lay out the open defects, their severity and business impact, and options (fix, workaround, defer with monitoring). The business owner decides with full information; I document the decision. I don't hide or downgrade defects to make a release look clean.

Tip: Integrity plus helpfulness.`, 'B', 'M'],

["Behavioral", "How do you handle changing requirements late in a sprint?",
`**Answer:** Assess the testing impact, update tests, communicate the effect on scope or timeline, and prioritize the most important tests. Raise it in the retrospective if it keeps happening.

Tip: Flexible but transparent.`, 'B', 'E'],

["Behavioral", "Describe a time you improved a testing process.",
`**Sample answer:** "Regression took three days because test cases were duplicated and outdated. I cleaned the suite from 900 to 520 cases, tagged them by priority, and worked with an automation engineer to automate the top 150. Regression dropped to one day."

Tip: Numbers make it memorable.`, 'B', 'M'],

["Behavioral", "How do you work with developers?",
`**Answer:** Collaborate early (refinement, design discussions), share defects with clear evidence, pair on tricky issues, and respect their time. We share the goal of quality software.

Tip: "We're on the same team" mindset.`, 'B', 'E'],

["Career", "How do you plan to grow from manual testing?",
`**Answer:** Learn automation (Playwright or Selenium with a language like TypeScript, Java or Python), API testing and automation, SQL, CI/CD basics, and performance or security basics. Deepen domain knowledge (finance, healthcare, ERP). Certifications: ISTQB Foundation, then Advanced.

Tip: Show a concrete learning plan.`, 'B', 'E'],

["AI", "How is AI changing manual testing?",
`**Answer:** AI tools help generate test ideas and cases from requirements, create test data, summarize defects, and suggest regression scope. Testers still need judgment — understanding users, risks and edge cases — and must review AI output.

Tip: Show you use it as an assistant.`, 'D', 'M'],

["Closing", "Why should we hire you as a QA analyst?",
`**Sample answer:** "I'm thorough and practical — I test what matters most to users, write defects developers can act on quickly, and I've found serious issues before release. I'm comfortable with SQL and API testing and I'm growing my automation skills."

Tip: Thoroughness plus impact.`, 'B', 'E']
];

QB['qa-manual'] = (QB['qa-manual'] || []).concat([
["Test Design", "How would you test a login page?",
`**Answer:** Functional: valid login, invalid password, unknown user, empty fields, case sensitivity of username/password, "remember me", forgot password, account lockout after N failed attempts, logout and session timeout. Security: password masked, no credentials in URL, HTTPS, generic error messages ("invalid username or password"), brute-force protection, SQL injection attempts. Usability/accessibility: keyboard navigation, screen reader labels, error visibility. Compatibility: browsers and mobile.

Tip: Organize your answer by category — that's what interviewers look for.`, 'B', 'E']
]);
