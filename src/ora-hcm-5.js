// Added Oct 2026: Redwood and AI Agent Studio questions for HCM.
QB['ora-hcm'] = (QB['ora-hcm'] || []).concat([
['Redwood', 'What changes for HCM users and admins with Redwood?',
`- HCM was one of the first areas moved to **Redwood**: Person, Employment, Journeys, Goals, Performance, Learning, Recruiting pages.
- **Transaction design**: Redwood uses **Transaction Design Studio** and **Visual Builder Studio** to control fields, sections and rules by action/role — classic Page Composer personalizations don't carry over.
- **Approvals** and security are unchanged.
- Plan training for managers and HR because self-service screens look different.`, 'D'],
['Redwood', 'How would you hide or require a field on a Redwood HCM action like Promote?',
`- Use **Transaction Design Studio** (or VBS for Redwood pages) to create a rule for the **action** (Promote), optionally by legal employer or role.
- Set the field to **required/hidden/read-only**; add defaults.
- Test with different users and countries; then publish.
- Document the rule for support.`, 'D'],
['AI Agent Studio', 'Give examples of AI agents useful in HCM.',
`- **Policy/benefits Q&A agent** grounded on HR documents (Document tool).
- **Employee self-service agent**: "update my address", "how many vacation days do I have?" using HCM business objects with the employee's own access.
- **Manager assistant**: summarize team absences, upcoming reviews, drafts of performance feedback.
- **Recruiting assistant**: draft job descriptions, summarize candidates.
Keep humans responsible for hiring, pay and performance decisions.`, 'D'],
['AI Agent Studio', 'What extra care do HCM agents need?',
`- **Sensitive data** (salary, health, national IDs) — strict role-based access; agents inherit HCM security.
- **Bias and fairness** in recruiting/performance uses — human decisions, testing for bias.
- **Privacy/GDPR** and works council requirements in some countries.
- **Clear disclosure** to employees that they're using an AI assistant.`, 'D'],
['Fusion Platform', 'How do you keep HCM extracts and integrations safe during Redwood changes?',
`- HCM Extracts, HDL and APIs are not affected by UI changes, but **new fields** added through Redwood/VBS flexfields must be added to extracts.
- Re-test **approval notifications** and deep links.
- Regression test payroll-related transactions after each quarterly update.`, 'B']
]);
