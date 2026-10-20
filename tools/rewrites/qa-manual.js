// Rewritten QA & Testing — Manual QA Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix qa-manual-).
module.exports = {

'Explain the software testing life cycle (STLC).':
`**Why they ask:** testing process fundamentals.

**Answer:**
"Six phases. Requirement analysis — understand what to test and raise questions on anything unclear. Test planning — scope, approach, resources, schedule, risks, entry and exit criteria. Test design — test cases, test data, traceability to requirements. Environment setup — test environment and data ready. Execution — run tests, log defects, retest fixes. Closure — summary report, metrics, lessons learned. In agile, all of these happen inside each sprint rather than as long separate phases."

Tip: Mention that in agile these phases happen inside each sprint.`,

'What are the levels of testing?':
`**Why they ask:** basic structure of testing.

**Answer:**
"Unit testing of individual functions, usually by developers. Integration testing of interfaces between modules or systems — say, checkout calling the payment service. System testing of the complete application against requirements, mostly by QA. And acceptance testing, where business users confirm it meets their needs."

Tip: Mention who usually owns each level.`,

'What is the difference between functional and non-functional testing?':
`**Why they ask:** testing scope.

**Answer:**
"Functional testing checks what the system does — features, business rules, calculations. For example, an order total includes the right sales tax. Non-functional testing checks how well it does it — performance, security, usability, accessibility, compatibility, reliability. For example, checkout still responds in under 2 seconds with 500 users at once."

Tip: Give one example of each from a real project.`,

'Smoke vs sanity vs regression testing?':
`**Why they ask:** a classic definitions question.

**Answer:**
"Smoke is a quick, broad check that a new build's critical functions work — is it stable enough to test at all? Sanity is a quick, narrow check that a specific fix or change works. Regression is broad re-testing to make sure changes didn't break existing features. After a login bug fix: I sanity-test login, smoke-test the build's main flows, and run regression before release. Smoke and the core regression are the ones worth automating."

Tip: Mention which of these you automate.`,

'Verification vs validation?':
`**Why they ask:** quality concepts.

**Answer:**
"Verification asks 'are we building the product right?' — reviews and inspections of documents and code against specifications. Validation asks 'are we building the right product?' — testing the working software against what users actually need."

Tip: A short, crisp answer is enough.`,

'Black-box, white-box and grey-box testing?':
`**Why they ask:** testing approaches.

**Answer:**
"Black-box tests inputs and outputs without knowing the code. White-box tests with knowledge of the code — paths, branches, conditions. Grey-box is partial knowledge — for example, I test through the UI but check the database afterward to confirm the order status and total were saved correctly."

Tip: Mention you use grey-box techniques like checking the database after a UI action.`,

'Explain equivalence partitioning and boundary value analysis.':
`**Why they ask:** the most common test design question.

**Answer:**
"Equivalence partitioning splits inputs into groups that should behave the same, so I test one value per group, valid and invalid. Boundary value analysis tests the edges, where defects cluster. Take an age field accepting 18 to 65: the partitions are below 18, 18 to 65, and above 65, so I might test 10, 40 and 70. The boundaries are 17, 18, 65 and 66 — 17 and 66 should be rejected, 18 and 65 accepted. A developer writing 'greater than 18' instead of 'greater than or equal' fails exactly at 18."

Tip: Do the example out loud — it's the most common test design question.`,

'What is a decision table and when do you use it?':
`**Why they ask:** systematic testing of rules.

**Answer:**
"A table listing combinations of conditions and the expected outcome for each — ideal for business rules. For discounts based on membership and order size: member and over $100 gets 15%, member only gets 10%, over $100 only gets 5%, neither gets 0%. Four columns, four test cases, and no combination gets forgotten."

Tip: It shows you test logic systematically, not randomly.`,

'What is state transition testing?':
`**Why they ask:** workflow testing.

**Answer:**
"Testing how a system moves between states based on events, including transitions that shouldn't be allowed. An order goes Draft, Submitted, Approved, Shipped, Closed. I test each valid transition and the invalid ones — can a Draft jump straight to Shipped? Can someone edit a Closed order? It's great for approvals, tickets and orders."

Tip: Great for workflows like approvals, tickets and orders.`,

'What is pairwise testing?':
`**Why they ask:** efficient coverage.

**Answer:**
"Testing every pair of input values at least once instead of every combination, which cuts test cases dramatically while catching most interaction bugs. Three browsers, three operating systems and three languages make 27 combinations; pairwise covers every pair in 9 tests. Tools like PICT generate the set. I use it for compatibility and configuration testing."

Tip: Mention it for compatibility testing.`,

'What is exploratory testing and how do you structure it?':
`**Why they ask:** skill beyond scripts.

**Answer:**
"Learning, designing and executing tests at the same time, guided by the tester's skill. I structure it with a charter — a mission like 'explore checkout with expired and declined cards' — a time box of 60 to 90 minutes, notes of what I tried, and a debrief of bugs, questions and risks. It finds things scripted tests miss, especially in new features."

Tip: Mention it finds issues scripted tests miss — especially in new features.`,

'What is error guessing?':
`**Why they ask:** tester intuition.

**Answer:**
"Using experience to anticipate where bugs hide — empty fields, special characters, very long input, double-clicking submit, pressing back after paying, losing network mid-action, time zones, leap years. Once, double-clicking 'Place order' created two orders because the button wasn't disabled; no written test case covered that."

Tip: Give a real bug you found this way.`,

'What makes a good test case?':
`**Why they ask:** core craft.

**Answer:**
"A clear title and objective linked to a requirement, preconditions and test data, numbered steps with an expected result for each, independent and repeatable, one purpose per case, and a priority or tag like smoke or regression. For example: 'Checkout — applies 10% member discount on orders over $100.' Someone else should be able to run it without asking me anything."

Tip: Mention you write cases someone else can run without asking you.`,

'How do you write test cases when there are no detailed requirements?':
`**Why they ask:** real projects often lack documentation.

**Answer:**
"Talk to the product owner, BA and developers; use the existing application, user stories, designs and similar features as references; write high-level scenarios first; document my assumptions and get them confirmed; and use exploratory testing to learn the behavior. Confirmed assumptions become the requirements."

Tip: "Document assumptions and confirm them" is the key phrase.`,

'What is a requirements traceability matrix?':
`**Why they ask:** coverage control.

**Answer:**
"A table mapping each requirement to its test cases and often its defects. It proves coverage — every requirement has tests — and shows impact — which tests to rerun when a requirement changes. Jira with Xray or Zephyr, or Azure DevOps, maintains it automatically when tests are linked to stories."

Tip: Mention tools that do this automatically (Jira with Xray/Zephyr, Azure DevOps).`,

'What should a good defect report include?':
`**Why they ask:** communication quality.

**Answer:**
"A specific title — what fails and where — steps to reproduce, test data, environment and build, expected versus actual result, severity and priority, and evidence like screenshots, logs or a short video. For example: 'Checkout: 500 error when applying a discount code to a cart containing a zero-priced item.' A developer should be able to reproduce it without contacting me."

Tip: A developer should reproduce it without contacting you.`,

'What is the difference between severity and priority?':
`**Why they ask:** a classic question.

**Answer:**
"Severity is the impact on the system; priority is how urgently it must be fixed. A misspelled company name on the home page is low severity but high priority — it's embarrassing. A crash in a rarely used admin report is high severity but lower priority. Payments failing for everyone is high on both."

Tip: The examples are what interviewers want.`,

'Explain the defect life cycle.':
`**Why they ask:** process knowledge.

**Answer:**
"New, then Assigned or Open, In Progress, Fixed, Ready for Retest, then Closed — or Reopened if it still fails. Other outcomes are Rejected if it's not a bug, Duplicate, Deferred to a later release, and Cannot Reproduce. Priority usually gets agreed in a triage meeting with product and development."

Tip: Mention triage meetings where priority is agreed.`,

"A developer says your defect is 'not a bug'. What do you do?":
`**Why they ask:** professionalism.

**Answer:**
"Recheck the requirement or acceptance criteria first. If I'm right, I share clear evidence — steps, screenshots, the requirement text. If the requirement is unclear, I bring in the product owner to decide what the behavior should be. Then I accept the decision and document it. It's about the product, not about being right."

Tip: Calm, evidence-based, and let the product owner decide.`,

"What do you do if you can't reproduce a defect?":
`**Why they ask:** investigation skills.

**Answer:**
"Check environment differences — browser, data, user role, build — look at logs and timing, and narrow the conditions. If it still won't reproduce, I document everything I tried, keep it as 'cannot reproduce' with monitoring, and capture more evidence next time. Intermittent bugs usually come down to data, timing or two things happening at once."

Tip: Intermittent bugs often relate to data, timing or concurrency.`,

'How does testing work in an agile team?':
`**Why they ask:** modern ways of working.

**Answer:**
"I join refinement to clarify acceptance criteria, design tests while the code is being written, test stories within the sprint, pair with developers, automate regression where possible, and help define the definition of done. Quality is the whole team's responsibility, and testing is part of the sprint, not something that happens after it."

Tip: "Testing is part of the sprint, not after it."`,

'What are acceptance criteria and how do you test them?':
`**Why they ask:** story-level testing.

**Answer:**
"They're the conditions a story must meet to be accepted, often in Given/When/Then form: 'Given a member with an order over $100, when they check out, then a 10% discount is applied.' I derive a positive test from each criterion, then negative and edge cases — exactly $100, a non-member, an expired membership. I also help write them during refinement."

Tip: Mention you help write acceptance criteria during refinement.`,

'What is the definition of done and how does QA contribute?':
`**Why they ask:** process maturity.

**Answer:**
"The team's agreed checklist for a story to count as complete — code reviewed, unit tests passing, acceptance tests passed, no open high-severity defects, documentation updated. QA makes sure the testing criteria are in it and actually met before a story is closed."

Tip: Shows process maturity.`,

'What is shift-left testing?':
`**Why they ask:** prevention mindset.

**Answer:**
"Moving testing earlier — reviewing requirements, testing APIs before the UI exists, writing tests alongside code, static analysis. Bugs found early are far cheaper to fix. In one refinement I asked what happens if a coupon expires during checkout; nobody had decided, and settling it then saved a defect later."

Tip: Give an example of a requirement gap you caught in refinement.`,

'How do you decide what goes into a regression suite?':
`**Why they ask:** prioritization.

**Answer:**
"Critical business flows, high-risk and frequently changed areas, past defect hotspots and integrations. I tier them — P1 smoke, P2 core regression, P3 extended — automate the stable, repetitive ones, and review the suite regularly to remove obsolete tests. For each release, impact analysis tells me which tiers to run."

Tip: Mention impact analysis for each release.`,

'You have one day to test a release that normally takes a week. What do you do?':
`**Why they ask:** risk-based thinking.

**Answer:**
"Risk-based testing: find out exactly what changed and what it touches, prioritize critical business flows and the changed areas, run the automated regression, do focused exploratory testing on new features, and clearly communicate what wasn't tested and the remaining risk, so the release decision is informed."

Tip: Transparency about risk is the key point.`,

'Why do testers need SQL? Give examples.':
`**Why they ask:** a key technical skill for testers.

**Answer:**
"To verify data behind the UI, set up test data and investigate defects. To check an order saved correctly: SELECT status, total FROM orders WHERE order_id = 1001. To find duplicate users: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1. And joins to confirm related records match — like the order total equaling the sum of its order lines."

Tip: Be ready to write a JOIN and GROUP BY on a whiteboard.`,

'Write a query to find customers with no orders.':
`**Why they ask:** a common SQL test.

**Answer:**
"SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id WHERE o.order_id IS NULL. The LEFT JOIN keeps every customer; customers with no matching order get NULLs in the order columns, and the WHERE keeps just those. NOT EXISTS with a subquery is an equally good alternative."

Tip: Mention NOT EXISTS as an alternative.`,

'How do you test an API manually?':
`**Why they ask:** API testing basics.

**Answer:**
"With Postman: send requests with different methods, headers, auth and payloads, then check status codes, response body and schema, error messages and response times. Negative tests: missing or invalid fields, wrong data types, no token or another user's token, oversized payloads. I chain requests — create, get, update, delete — and save collections with environments so anyone can rerun them."

Tip: Mention chaining requests (create → get → update → delete).`,

'What HTTP status codes should a tester know?':
`**Why they ask:** API fluency.

**Answer:**
"200 OK, 201 Created, 204 No Content; 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable; 429 Too Many Requests; 500 Internal Server Error, and 502, 503 and 504 for gateway and availability problems. 401 means 'we don't know who you are'; 403 means 'we know, and you're not allowed.'"

Tip: Explain 401 vs 403 — a common follow-up.`,

'What is UAT and how does QA support it?':
`**Why they ask:** stakeholder collaboration.

**Answer:**
"User acceptance testing is where business users confirm the system supports their real work. QA supports it by preparing environments and data, providing scenarios or scripts, training users on logging defects, triaging what they find, and tracking sign-off. UAT shouldn't repeat system testing — it's about fitness for real use."

Tip: Mention UAT is not a repeat of system testing.`,

'What is different about testing mobile apps?':
`**Why they ask:** mobile coverage.

**Answer:**
"Device and OS fragmentation, screen sizes and rotation, interruptions like calls and notifications, network changes and offline mode, battery and performance, permissions, gestures, and app store rules. I use real devices plus device clouds like BrowserStack, and always test upgrading from the previous app version, not just fresh installs."

Tip: Mention testing upgrades from the previous app version.`,

'How do you do cross-browser testing?':
`**Why they ask:** compatibility.

**Answer:**
"Pick target browsers and versions from analytics, test key flows on each — Chrome, Safari, Edge, Firefox and mobile browsers — use cloud tools for coverage, and watch for layout, JavaScript and date-handling differences. Safari is usually the odd one out."

Tip: Prioritize by user traffic.`,

'What is accessibility testing?':
`**Why they ask:** inclusive quality.

**Answer:**
"Checking that people with disabilities can use the product — screen readers, keyboard-only navigation, color contrast, text alternatives for images, captions, logical focus order. The standard is WCAG 2.1 or 2.2 at level AA. I use axe, Lighthouse and WAVE, plus manual testing with NVDA and VoiceOver. It's a legal requirement in many places."

Tip: Mention it's a legal requirement in many contexts.`,

'What basic security checks can a manual tester do?':
`**Why they ask:** security awareness.

**Answer:**
"Change the ID in a URL — /orders/1001 to /orders/1002 — to see if I can view someone else's data; open pages without logging in; try script injection in input fields; check passwords and sensitive data don't appear in URLs or logs; verify session timeout and logout; and confirm error messages don't reveal stack traces. Those map to the OWASP Top 10."

Tip: Mention OWASP Top 10 awareness.`,

'Which test management and defect tools have you used?':
`**Why they ask:** tool experience.

**Answer:**
"Jira with Xray for test cases and defects, Azure DevOps Test Plans on another project, and TestRail for a client. In Jira I built dashboards showing execution progress and defect trends for the team's stand-ups."

Tip: Mention what you did with each tool.`,

'Which testing metrics do you report?':
`**Why they ask:** reporting skills.

**Answer:**
"Execution progress — planned versus executed, pass and fail — defects by severity and status, defect trends of opened versus closed, requirements coverage, and defect leakage into production. At release, a short go/no-go summary. Metrics guide decisions; they're never for blaming people."

Tip: Mention a go/no-go summary.`,

'What do you do when the test environment is unstable?':
`**Why they ask:** handling blockers.

**Answer:**
"Report the impact clearly — '14 tests blocked, 9 hours lost this week' — work with DevOps on the root cause, use mocks or stubs where possible, prioritize tests that can still run, and update the plan and timeline so the risk is visible."

Tip: Quantify the impact.`,

'How do you manage test data?':
`**Why they ask:** a common bottleneck.

**Answer:**
"Prepare data for each scenario — valid, invalid and edge cases — create it repeatably with scripts or APIs, keep any production-derived data masked, and reset data between runs where possible. Test data is often the biggest bottleneck, so I plan it as early as the test cases."

Tip: Mention test data is often the biggest bottleneck.`,

'How is testing an ERP or business application different?':
`**Why they ask:** enterprise testing awareness.

**Answer:**
"You test end-to-end business processes across modules — order-to-cash, procure-to-pay — verify the accounting and reports, deal with behavior driven by configuration, roles and approvals, background batch jobs, integrations, and regular vendor updates that need regression."

Tip: Good to mention if applying to enterprise roles.`,

'Tell me about a critical defect you found.':
`**Why they ask:** proof of impact.

**Answer:**
"Testing a refund feature, I found that if you edited the cart after a partial refund, the next refund could exceed what the customer originally paid. I reproduced it with exact steps and data. Customers could have been refunded more than they spent. It was fixed before release, and I added the scenario to regression."

Tip: Business impact makes the story strong.`,

'How do you handle pressure to sign off a release with open defects?':
`**Why they ask:** integrity.

**Answer:**
"I lay out the open defects, their severity and business impact, and the options — fix, workaround, or defer with monitoring. The business owner decides with full information, and I document the decision. I never hide or downgrade defects to make a release look clean."

Tip: Integrity plus helpfulness.`,

'How do you handle changing requirements late in a sprint?':
`**Why they ask:** flexibility.

**Answer:**
"Assess the testing impact, update the tests, tell the team how it affects scope or timeline, and prioritize the most important tests. If it keeps happening, I raise it in the retrospective."

Tip: Flexible but transparent.`,

'Describe a time you improved a testing process.':
`**Why they ask:** initiative.

**Answer:**
"Regression took three days because test cases were duplicated and outdated. I cleaned the suite from 900 cases to 520, tagged them by priority, and worked with an automation engineer to automate the top 150. Regression dropped to one day."

Tip: Numbers make it memorable.`,

'How do you work with developers?':
`**Why they ask:** teamwork.

**Answer:**
"Collaborate early in refinement and design discussions, share defects with clear evidence, pair on tricky issues, and respect their time. We share the same goal — software that works for users."

Tip: "We're on the same team" mindset.`,

'How do you plan to grow from manual testing?':
`**Why they ask:** growth mindset.

**Answer:**
"I'm learning Playwright with TypeScript and automating our smoke tests, plus API automation and CI/CD basics, building on my SQL. Next I want performance and security basics, and deeper domain knowledge in finance. I passed ISTQB Foundation and plan to take the Advanced level."

Tip: Show a concrete learning plan.`,

'How is AI changing manual testing?':
`**Why they ask:** current awareness.

**Answer:**
"AI tools help generate test ideas and cases from requirements, create test data, summarize defects and suggest regression scope. Testers still bring judgment — understanding users, risks and edge cases — and must review the output, because AI-generated cases often miss the business-specific edge cases."

Tip: Show you use it as an assistant.`,

'Why should we hire you as a QA analyst?':
`**Why they ask:** your closing pitch.

**Answer:**
"I'm thorough and practical — I test what matters most to users, write defects developers can act on quickly, and I've found serious issues before release. I'm comfortable with SQL and API testing, and I'm actively building my automation skills."

Tip: Thoroughness plus impact.`,

'How would you test a login page?':
`**Why they ask:** the most common test design question.

**Answer:**
"I'd organize by category. Functional: valid login, wrong password, unknown user, empty fields, case sensitivity, 'remember me', forgot password, lockout after five failed attempts, logout and session timeout. Security: password masked, no credentials in the URL, HTTPS only, a generic 'invalid username or password' message so attackers can't discover valid usernames, brute-force protection, and SQL injection attempts. Usability and accessibility: keyboard navigation, screen reader labels, visible errors. Compatibility: major browsers and mobile."

Tip: Organize your answer by category — that's what interviewers look for.`,

};
