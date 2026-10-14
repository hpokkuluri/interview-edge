// Internal Auditor / SOX Compliance. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-audit'] = (QB['fa-audit'] || []).concat([
['Fundamentals', 'What is the difference between internal and external audit?',
`- **Internal audit**: independent function within the company, reports to the audit committee; covers risks, controls, operations, compliance.
- **External audit**: independent firm giving an opinion on the financial statements (and ICFR for public companies).`, 'B', 'E'],

['SOX', 'What is SOX 404?',
`- Management must assess and report on **internal control over financial reporting (ICFR)**.
- For larger public companies, the external auditor also attests (404(b)).
- Requires documented key controls, testing and deficiency evaluation.`, 'B', 'E'],

['Controls', 'How do you test a control?',
`- Understand the control (walkthrough) and test **design**.
- Test **operating effectiveness**: select a sample per frequency (e.g. 25 for daily, 2 for quarterly), inspect evidence, reperform where possible.
- Document results and exceptions.`, 'B', 'E'],

['Deficiencies', 'Explain control deficiency, significant deficiency and material weakness.',
`- **Deficiency**: control doesn't prevent/detect misstatements timely.
- **Significant deficiency**: less severe than a material weakness but merits attention of those charged with governance.
- **Material weakness**: reasonable possibility of a **material misstatement** not being prevented or detected — must be disclosed.`, 'D', 'M'],

['ITGC', 'What are ITGCs?',
`- **IT general controls** supporting application controls and reports:
  - Access to programs and data (provisioning, reviews, privileged access).
  - Program changes (testing, approval, segregation).
  - Computer operations (jobs, backups, incidents).
  - Program development.`, 'D', 'M'],

['Risk', 'How do you build a risk-based audit plan?',
`- Risk assessment across the business (interviews, prior findings, strategy changes, regulations).
- Score likelihood and impact; prioritize high-risk areas.
- Align with audit committee; flexibility for emerging risks.`, 'D', 'S'],

['Findings', 'How do you write a good audit finding?',
`- **Condition** (what you found), **criteria** (what it should be), **cause**, **effect/risk**, **recommendation**.
- Agreed **management action plan** with owner and date.`, 'B', 'M'],

['Fraud', 'What are red flags of fraud?',
`- Override of controls, unusual journal entries (round amounts, weekends, top-side).
- Vendors with no address or matching employee details.
- Lifestyle changes, reluctance to take leave.
- Fraud triangle: **pressure, opportunity, rationalization**.`, 'B', 'M'],

['Data', 'How do you use data analytics in audit?',
`- Full-population testing (duplicate payments, SoD conflicts, JE analysis).
- Tools: ACL/Galvanize, IDEA, SQL, Python, Power BI.
- Continuous monitoring of key risks.`, 'D', 'M'],

['Behavioral', 'Management disagrees with your finding. How do you handle it?',
`- Revisit evidence objectively; listen to their context.
- Adjust if facts change; otherwise explain risk clearly.
- Escalate per audit charter; report management's view if unresolved.`, 'B', 'M']
]);
