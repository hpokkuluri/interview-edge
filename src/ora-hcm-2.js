QB['ora-hcm'] = (QB['ora-hcm'] || []).concat([
['Core HR', 'What are the main worker lifecycle actions in HCM?',
`- **Hire** (employee, contingent worker), **rehire**.
- **Promotion**, **transfer**, **change assignment**, **change manager**, **change location/working hours**.
- **Salary change** (and compensation).
- **Leave of absence** and return.
- **Global transfer / temporary assignment** (between legal employers).
- **Termination** (voluntary, involuntary) with reasons.
Each **action and reason** drives approvals, payroll, benefits life events and reporting.`, 'B'],

['Core HR', 'How do you handle global mobility (a worker moving to another country) in Fusion?',
`- **Global transfer**: ends the work relationship in the source legal employer and creates one in the destination (permanent move).
- **Global temporary assignment**: keeps home relationship; adds a host assignment for a period.
- Consider: payroll in both countries (shadow payroll), tax equalization, benefits, documents (visas), cost allocation.
- Localization: new legislative data group rules apply.`, 'D'],

['Core HR', 'What are flexfields in HCM and when do you use them?',
`- **Descriptive flexfields (DFF)** — extra attributes on objects (e.g. assignment, person) with contexts.
- **Extensible flexfields (EFF)** — multiple rows/ structured extra info (e.g. licenses on person, legislative info).
- **Key flexfields** — structured codes (job, grade, position names, people groups, costing).
Use for client-specific data needs; deploy flexfields after changes; consider reporting (OTBI exposure) and HDL loading.`, 'B'],

['Payroll', 'How do you set up a new deduction, for example a garnishment or a voluntary deduction?',
`- **Voluntary deduction**: create an element (e.g. Pretax or Voluntary Deductions classification) via the element template; eligibility; costing; balances; payroll testing.
- **Involuntary (garnishment)**: use seeded involuntary deduction elements (child support, tax levy, creditor debt) with **calculation cards** per worker capturing order details, limits and payee; priority rules and exemptions handled by payroll.
- Third-party payees and payment methods for remittance.
- Test with edge cases (insufficient net pay).`, 'D'],

['Payroll', 'What are payroll flows and checklists?',
`- **Payroll flows** sequence tasks (calculate payroll, verify, prepayments, archive, payments, costing, reports) with dependencies.
- **Flow patterns** can be copied and customized (e.g. add custom reports or extracts).
- **Payroll checklist** shows status of each task, owners, due dates.
- Supports scheduling and notifications; improves control and auditability.`, 'D'],

['Payroll', 'How do you handle a mid-year payroll go-live in the US?',
`- Load **YTD balances** for each employee (gross, taxes by jurisdiction, deductions) so Fusion produces correct W-2s and limits (e.g. 401k annual limits, Social Security wage base).
- **Balance initialization** via HDL (Initialize Balances).
- Reconcile loaded balances to the legacy payroll register and quarterly filings.
- Coordinate **quarterly tax filing** responsibilities for the split year.
- Consider a quarter-start go-live to simplify.`, 'D'],

['Payroll', 'What are the common causes of payroll errors and how do you prevent them?',
`- **Late or wrong HR data** (retro changes, terminations after cutoff).
- **Element entry errors** (duplicate bonuses).
- **Tax setup** issues (work/resident location).
- **Time/absence** data not approved in time.
- Prevention: **cutoff calendars**, validation reports pre-payroll, exception reports (net pay variance > X%), dual review, automated reconciliations, good change control on payroll setup.`, 'B'],

['Absence', 'How do you handle FMLA or statutory leave tracking in Fusion?',
`- Seeded **US FMLA** plans/rules where available, or configured **absence types** with **eligibility** (12 months/1,250 hours) and **entitlement** tracking (12 weeks in a rolling period).
- **Leave of absence** assignment status, linking to benefits (continuation) and payroll (unpaid/partial pay).
- **Documentation** via journeys.
- Reports for compliance and case management.`, 'D'],

['Benefits', 'How do you design benefits eligibility and life events?',
`- **Eligibility profiles** by worker attributes (employment category, location, hours, service).
- **Life events**: temporal (new hire, age changes) and explicit (marriage, birth) — with **enrollment windows** and default enrollments.
- **Collapsing and processing** rules for multiple events.
- **Waiting periods** and coverage start dates.
- Test scenarios end-to-end including carrier files and payroll deductions.`, 'D'],

['Talent', 'How would you configure a performance management process?',
`- **Performance templates** with sections (goals, competencies, overall rating), **process flows** (self-evaluation, manager evaluation, calibration, review meeting, acknowledgment).
- **Review periods** and eligibility.
- **Rating models** and calibration in **talent review**.
- **Feedback** (continuous, requested) and **check-ins**.
- Integration with compensation (ratings drive merit).
- Communication and training for managers.`, 'D'],

['Learning', 'How does Oracle Learning support compliance training?',
`- **Courses/offerings** (online, instructor-led, blended) and **specializations**.
- **Learning assignments** (required) by rules (job, location, new hire) with due dates and renewals.
- **Notifications** and manager dashboards for overdue learning.
- **Completion records** for audits (e.g. GxP training in pharma).
- Integration with content providers (LinkedIn Learning etc.).`, 'D'],

['Recruiting', 'How do you integrate background checks and onboarding into recruiting?',
`- **Background check partners** integrated via the recruiting partner framework (screening packages triggered at a candidate phase).
- Results return to the candidate record; selection process moves on completion.
- **Offer acceptance** creates a **pending worker**; **onboarding journey** assigned (documents, I-9, equipment).
- **Convert** pending worker to employee on start date.`, 'D'],

['Implementation', 'How do you plan an HCM Cloud implementation and what goes first?',
`- **Core HR** first (foundation: structures, workers, security, approvals) — everything else depends on it.
- Then **Payroll/Absence/Time** (or payroll interface), **Benefits**, **Talent/Compensation**, **Recruiting/Learning** — often in phases.
- **Data conversion** and **integrations** (payroll vendor, benefits carriers, IAM, ERP) planned early.
- **Parallel payroll** testing for payroll.
- **Change management** heavy: managers and employees use self-service.`, 'B'],

['Implementation', 'How do you design HCM for multiple countries?',
`- **Global design** for core HR, with **localizations** per country (legislative data groups, address formats, national identifiers, statutory info).
- Country payroll: Fusion global payroll where available, or **payroll interfaces** to local providers.
- **Data privacy**: GDPR, works council consultation (Europe), data residency.
- **Languages** and translations.
- **Rollout** by region with a global template.`, 'D'],

['Security', 'How do you protect sensitive HCM data like SSN, salary and health information?',
`- **Role-based access** — only specific roles see national identifiers, salary, medical info.
- **Masking** of national IDs in UI; restrict OTBI subject areas.
- **Audit** on sensitive data changes and access (where available).
- **Non-production masking** after P2T refreshes.
- **GDPR**: purpose limitation, retention policies, data subject requests.`, 'D'],

['Quarterly Updates', 'How do you manage HCM quarterly updates, especially payroll?',
`- Review **What's New** for HCM and **payroll legislative updates** (tax changes).
- **Regression**: core HR transactions, approvals, security, payroll runs compared against prior results (automated payroll comparison).
- **Statutory patches** (year-end) planned and tested.
- Extracts and integrations re-tested.
- Communication to HR users.`, 'B'],

['Behavioral', 'Tell me about a difficult payroll issue you solved under time pressure.',
`## Example (STAR)
- **Situation:** Two hours before payroll payments transmitted, net pay variances appeared for 300 employees.
- **Task:** As HCM lead, decide whether to proceed.
- **Action:** Traced to a retroactive change in a benefit rate loaded that afternoon; rolled back affected workers, corrected the rate effective date, re-ran payroll for them, reconciled.
- **Result:** Payroll paid on time; added a pre-payroll variance check and freeze window for benefit changes.`, 'B'],

['Behavioral', 'How do you work with HR business partners who aren\'t technical?',
`- Use their language — employee experience, compliance, cost.
- **Show** processes with their scenarios (a promotion, a leave).
- Explain the impact of data changes on payroll and approvals.
- Give them **self-service tools** (OTBI, HSDL) with training.
- Regular check-ins and quick feedback loops.`, 'B'],

['Behavioral', 'Why do you want to lead HCM implementations?',
`- HCM touches **every employee** — real impact on experience and trust (paying people correctly).
- You enjoy combining **compliance**, **process design** and **people change**.
- Examples of successful rollouts and outcomes (self-service adoption, payroll accuracy).
- You want to own the full HCM design and grow a team.`, 'B'],

['Core HR', 'What is position management and when should a company use it?',
`- **Position management** controls headcount through positions: hires fill approved positions; FTE and headcount budgets enforced.
- **Position hierarchy** can drive approvals and reporting.
- **Synchronization** of assignment attributes from position (job, department, location).
- Use when: budgeted headcount control is required (public sector, regulated industries, large enterprises).
- Trade-off: more administration — every org change needs position updates.`, 'D'],

['Payroll', 'How do you reconcile payroll to the general ledger and bank?',
`- **Payroll register** totals vs **costing results** vs **GL journals** by account/cost center.
- **Net pay** vs bank payment file totals and bank statement.
- **Tax liabilities** vs tax payments/filings.
- **Third-party payments** (deductions) vs remittances.
- Monthly sign-off with payroll and accounting; investigate suspense costing.`, 'D'],

['Integration', 'How do you handle employee data for Fusion Expenses and Procurement approvals?',
`- **Expenses** needs: assignment cost center (default expense account), manager, bank account for reimbursement (or payroll).
- **Procurement/Requisitions** needs: requester's BU and default charge account; approvals via supervisor hierarchy.
- Ensure **default expense account** on assignments is populated (HDL/rules).
- Terminated managers or missing supervisors break approvals — monitor with reports.`, 'D'],

['AI', 'How is AI being used in Oracle HCM?',
`- **Generative AI**: job descriptions, performance review summaries, goal suggestions, candidate outreach.
- **AI agents**: HR help desk answers (policies), benefits questions, onboarding assistance.
- **Recommendations**: skills-based job/learning recommendations, best candidates.
- **Guardrails**: bias checks, privacy, human review for decisions (hiring, ratings).`, 'D'],

['Implementation', 'What are key risks in HCM implementations?',
`- **Payroll accuracy** — mitigate with multiple parallel runs.
- **Data quality** (history, managers, cost centers).
- **Security** misconfiguration exposing sensitive data.
- **Change management** (manager self-service adoption).
- **Integrations** with benefits carriers, payroll vendors, IAM.
- **Works council/legal** approvals in some countries.`, 'B'],

['Talent', 'How do you set up succession planning?',
`- Identify **critical positions/roles**.
- **Talent reviews** with performance/potential (9-box), risk of loss, impact of loss.
- **Succession plans**: candidates with readiness levels.
- **Development plans** for successors (learning, assignments).
- Security: only HR and leadership see succession data.
- Reports on bench strength.`, 'D'],

['Payroll', 'What is the difference between Fusion Global Payroll and a payroll interface approach?',
`- **Global Payroll**: Fusion calculates pay (for supported countries like US, UK, Canada, India, etc.) with statutory rules updated by Oracle.
- **Payroll interface (Global Payroll Interface)**: Fusion is the HR source; a third-party provider (ADP, local bureau) calculates pay; Fusion sends changes via extracts and may receive results back.
- Decide by country support, complexity, cost and in-house payroll expertise.`, 'B']
]);
