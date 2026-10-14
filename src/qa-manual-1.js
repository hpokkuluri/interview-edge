// QA Analyst / Manual Tester. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['qa-manual'] = (QB['qa-manual'] || []).concat([
['Fundamentals', 'What is the difference between QA, QC and testing?',
`- **Quality Assurance**: process-focused — preventing defects through standards, reviews and good practices.
- **Quality Control**: product-focused — finding defects in the product (inspections, testing).
- **Testing**: an activity within QC — executing the software to find defects and check requirements.`, 'B', 'E'],

['Fundamentals', 'Explain the STLC (software testing life cycle).',
`- **Requirement analysis** (testable requirements, questions).
- **Test planning** (scope, approach, resources, schedule, risks).
- **Test case design** (cases, data, traceability).
- **Environment setup**.
- **Test execution** (run, log defects, retest).
- **Test closure** (reports, metrics, lessons).`, 'B', 'E'],

['Fundamentals', 'What are the levels and types of testing?',
`- **Levels**: unit, integration, system, acceptance (UAT).
- **Functional types**: smoke, sanity, regression, end-to-end, exploratory.
- **Non-functional**: performance, security, usability, accessibility, compatibility.
- **White-box vs black-box** approaches.`, 'B', 'E'],

['Fundamentals', 'What is the difference between smoke and sanity testing?',
`- **Smoke**: a quick, broad check that the build's critical functions work and it's stable enough to test further.
- **Sanity**: a quick, narrow check of a specific fix or feature after a change.
Both are shallow; regression is broad and deep.`, 'B', 'E'],

['Test Design', 'Explain equivalence partitioning and boundary value analysis.',
`- **Equivalence partitioning**: divide inputs into groups that should behave the same; test one value per group (valid and invalid).
- **Boundary value analysis**: test at and around the edges (min−1, min, max, max+1) where defects cluster.
- Example: age field 18–65 → test 17, 18, 65, 66, plus a middle value.`, 'B', 'E'],

['Test Design', 'What other test design techniques do you use?',
`- **Decision tables** for combinations of business rules.
- **State transition** testing for workflows (e.g. order statuses).
- **Pairwise** testing to reduce combinations.
- **Use case/scenario** testing for end-to-end flows.
- **Error guessing** and **exploratory testing** based on experience.`, 'D', 'M'],

['Test Cases', 'What makes a good test case?',
`- Clear **title and objective**, linked to a requirement.
- **Preconditions** and **test data**.
- Numbered **steps** with **expected results** for each.
- Independent and repeatable; one purpose per case.
- Priority and tags (regression, smoke).`, 'B', 'E'],

['Defects', 'What should a good defect report include?',
`- Short, specific **title** (what, where).
- **Steps to reproduce**, test data, environment/build.
- **Expected vs actual** result.
- **Severity and priority**, screenshots/logs/video.
- Link to test case/requirement.`, 'B', 'E'],

['Defects', 'What is the difference between severity and priority?',
`- **Severity**: impact on the system (critical crash vs cosmetic).
- **Priority**: how soon it must be fixed (business urgency).
- Example: company logo misspelled on the home page — low severity, high priority. A crash in a rarely used admin report — high severity, lower priority.`, 'B', 'E'],

['Defects', 'Describe the defect life cycle.',
`- **New** → **Assigned/Open** → **In progress/Fixed** → **Ready for retest** → **Retest** → **Closed** (or **Reopened**).
- Other states: **Rejected/Not a bug**, **Duplicate**, **Deferred**.
- Triage meetings decide priority and ownership.`, 'B', 'E'],

['Agile', 'How does testing work in an agile/scrum team?',
`- Testers join **refinement** to clarify acceptance criteria.
- Test during the sprint, not after; pair with developers.
- Automate regression where possible; exploratory testing for new stories.
- Definition of done includes tests passing.
- Demo and retrospective participation.`, 'B', 'M'],

['Agile', 'What are acceptance criteria and how do you test them?',
`- Conditions a story must meet to be accepted (often Given/When/Then).
- Derive test cases from each criterion, plus negative and edge cases.
- Clarify ambiguous criteria with the product owner before development.`, 'B', 'E'],

['Regression', 'How do you decide what to include in a regression suite?',
`- Critical business flows, high-risk areas, frequently changing modules, past defect areas.
- Areas touched by the change (impact analysis).
- Keep the suite **prioritized** (P1 smoke, P2 core, P3 extended) and automate stable, repetitive cases.`, 'D', 'M'],

['SQL', 'Why do testers need SQL? Give an example query.',
`- To **verify data** behind the UI, set up test data and investigate defects.
- Example: check that an order saved correctly — \`SELECT status, total FROM orders WHERE order_id = 1001;\`
- Joins to verify related records; counts to compare before/after a batch job.`, 'B', 'E'],

['API', 'How do you test an API manually?',
`- Use **Postman** (or similar): send requests with different methods, headers, auth and payloads.
- Check **status codes**, response body, schema, error messages, response time.
- Negative tests: missing fields, invalid values, unauthorized access.
- Save collections for reuse and later automation.`, 'B', 'M'],

['Exploratory', 'What is exploratory testing and how do you structure it?',
`- Simultaneous learning, test design and execution.
- Use **charters** (mission, time box, area), take notes, log defects and questions.
- Good for new features, complex UIs and finding unexpected issues.
- Debrief findings with the team.`, 'D', 'M'],

['UAT', 'What is UAT and how is it different from system testing?',
`- **System testing**: QA verifies the system against requirements.
- **UAT**: business users verify it supports their real work before go-live.
- QA supports UAT: environments, scripts, data, defect triage.`, 'B', 'E'],

['Tools', 'What tools have you used for test management and defects?',
`- **Jira** (with Xray/Zephyr), **Azure DevOps Test Plans**, **TestRail**, **ALM/Quality Center**.
- Traceability from requirements to tests to defects; dashboards for status.`, 'B', 'E'],

['Behavioral', 'Tell me about a critical defect you found.',
`- What you tested and how you noticed something wrong.
- How you reproduced and documented it.
- Impact if it had gone live, and how it was fixed.`, 'B', 'E'],

['Behavioral', 'A developer says your defect is "not a bug". What do you do?',
`- Re-check against requirements/acceptance criteria.
- Provide clear evidence (steps, screenshots, data).
- Discuss with the product owner/BA if requirements are unclear.
- Accept the decision and document it; no personal arguments.`, 'B', 'E'],

['Behavioral', 'How do you handle testing when requirements are unclear or changing?',
`- Ask questions early; document assumptions.
- Use exploratory testing and risk-based priorities.
- Keep test cases lightweight until stable.
- Communicate impact of late changes on test effort.`, 'B', 'M'],

['Career', 'How do you plan to grow from manual testing?',
`- Learn **automation** (Selenium/Playwright with a language like Java, Python or TypeScript), **API testing**, **SQL**, CI basics.
- Domain expertise (e.g. ERP, banking).
- Certifications (ISTQB Foundation, then advanced).`, 'B', 'E']
]);
