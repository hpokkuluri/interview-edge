// QA Lead / Test Manager. Format: [topic, question, answer, 'B'|'D']
QB['qa-lead'] = (QB['qa-lead'] || []).concat([
['Strategy', 'What goes into a test strategy vs a test plan?',
`- **Test strategy** (organization/program level): approach, test levels and types, tools, environments, automation approach, roles, metrics, risk approach.
- **Test plan** (project/release level): scope, schedule, resources, entry/exit criteria, deliverables, risks for a specific release.`, 'B'],

['Strategy', 'How do you apply risk-based testing?',
`- Identify risks by **business impact × likelihood** (complex code, new features, critical flows, past defects).
- Allocate test depth and order accordingly.
- Communicate residual risk at release.`, 'D'],

['Estimation', 'How do you estimate testing effort?',
`- Work breakdown (test design, execution, defect retest, regression, automation).
- Use historical metrics (cases per day, defects per feature).
- Add environment/data setup and contingency.
- Three-point estimates for uncertainty; review with the team.`, 'D'],

['Metrics', 'Which QA metrics do you report to management?',
`- Test execution progress and pass rate.
- Defects: open by severity, arrival/closure trends, defect leakage (escaped to production).
- Requirements coverage.
- Automation coverage and stability.
- Cycle time from build to test complete.
Use metrics for decisions, not blame.`, 'B'],

['Release', 'How do you make a go/no-go recommendation?',
`- Against **exit criteria**: critical tests passed, no open critical/high defects (or approved workarounds), coverage achieved, performance/security results.
- State residual risks clearly; business decides with your input.`, 'D'],

['People', 'How do you build and lead a QA team?',
`- Mix of skills (manual, automation, performance, domain).
- Clear roles, career paths, training.
- Pairing and code reviews for automation.
- Recognition; healthy relationships with developers.`, 'B'],

['Process', 'How do you shift testing left?',
`- QA in refinement and design reviews; testable acceptance criteria.
- Unit and API tests by developers; QA guidance.
- Automation in CI; early environments.
- Static analysis and code reviews.`, 'D'],

['Environments', 'How do you manage test environments and data?',
`- Environment calendar and ownership; stable builds.
- Refresh strategy; masking.
- Automated data setup; environment health checks.
- Service virtualization for unavailable dependencies.`, 'D'],

['Stakeholders', 'Development wants to skip regression to meet a deadline. What do you do?',
`- Quantify the risk (what's untested, impact).
- Offer options: risk-based subset, automated smoke, extra people, staggered release.
- Escalate the decision to the business owner with clear risk statement; document.`, 'B'],

['Vendors', 'How do you manage an outsourced testing vendor?',
`- Clear SOW, deliverables, SLAs (defect detection, execution productivity).
- Knowledge transfer and documentation.
- Quality reviews of their test cases and defects.
- Regular governance meetings and metrics.`, 'D'],

['Behavioral', 'Tell me about a release where quality issues escaped to production.',
`- What escaped and why (coverage gap, environment difference, late change).
- Immediate response and root cause.
- Process improvements (new regression tests, earlier involvement).`, 'B'],

['AI', 'How would you introduce AI into your QA process?',
`- Pilot AI for test case generation from requirements, test data creation, self-healing automation, defect triage.
- Measure quality and time saved; keep human review.
- Guidelines for data privacy and tool approval.`, 'D']
]);
