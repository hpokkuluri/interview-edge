// ora-hcm — generated from src/ora-hcm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle HCM Cloud Lead (5–10 yrs). Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-hcm'] = (QB['ora-hcm'] || []).concat([
['Core HR', 'Explain the HCM enterprise structure: enterprise, legal employer, legislative data group, business unit, department.',
`- **Enterprise** — top level; one per Fusion instance typically.
- **Legal entity / legal employer** — the company that employs workers; payroll statutory unit (PSU) for payroll reporting; tax reporting units (TRUs).
- **Legislative data group (LDG)** — partitions payroll and related data by country (one per country/currency typically).
- **Business unit** — for setting reference data (jobs, positions, grades) and for some functions.
- **Department** — organization where workers are assigned; owns cost center in many designs.
- **Locations, jobs, positions, grades** — workforce structures.`, 'B'],

['Core HR', 'What is the difference between jobs, positions and grades?',
`- **Job** — generic role (e.g. Accountant) with job family, level, FLSA status.
- **Position** — a specific instance of a job in a department with headcount/FTE (e.g. Senior Accountant — Finance NY, 2 FTE). Used in **position management** for budgeted control.
- **Grade** — pay level with salary ranges via grade rates; grades can be assigned to jobs/positions as valid grades.

Decide early: **position-based** (headcount control, public sector, pharma) vs **job-based** (simpler) organizations.`, 'B'],

['Core HR', 'What is effective dating and why does it matter in HCM?',
`HCM objects (assignments, salaries, jobs, departments) keep **date-effective history**: each change creates a new row with start/end dates.
- **Correction** vs **update** — correcting a mistake vs recording a real change on a date.
- **Future-dated** changes (promotion effective next month) and **retroactive** changes (backdated pay increases → retro pay).
- Impacts payroll, reporting ("as of" date), integrations and HDL loads (must load history in date order).

Common error: correcting history when an update was needed — breaks payroll.`, 'B'],

['Core HR', 'What are the main person and employment records in Fusion HCM?',
`- **Person** — personal info (name, national ID, addresses, contacts).
- **Work relationship** — between person and legal employer (employee, contingent worker, nonworker, pending worker); hire/termination dates.
- **Employment terms** (optional) — contract-level terms.
- **Assignment** — job, position, department, location, manager, grade, working hours.
- One person can have multiple work relationships (different legal employers) and multiple assignments.`, 'B'],

['Data Loads', 'What is HCM Data Loader (HDL) and how do you use it?',
`HDL loads HCM data using **.dat files** with business object structure (e.g. Worker.dat with Worker, PersonName, WorkRelationship, Assignment components).
- Supports **create, update, delete** and **date-effective history**.
- Uses **source keys** (SourceSystemOwner/SourceSystemId) or GUIDs to identify records.
- Zip files uploaded to UCM and imported/loaded; errors reviewed in Data Exchange.
- **HSDL (spreadsheet loader)** for business users with templates.
- Order matters: departments, jobs, locations, grades before workers.`, 'B'],

['Data Loads', 'How do you convert worker history into Fusion HCM?',
`- Decide **history depth** (e.g. current record only, or 2–3 years of assignment and salary changes).
- Load **foundation data** first (orgs, jobs, positions, grades, locations).
- Load **workers** with each date-effective change in order (hire → changes → current).
- Load **salary history**, **element entries**, **balances** (payroll YTD balances for mid-year go-live), **absences** (accrual balances).
- Reconcile: headcount by org, salary totals, balances.
- Multiple mocks; HR signs off.`, 'D'],

['Payroll', 'Explain elements, element eligibility and balances in Fusion Payroll.',
`- **Elements** — earnings, deductions, information (e.g. Regular Salary, 401k, Bonus). Defined by **primary classification** (Standard Earnings, Pretax Deductions...).
- **Element eligibility** — which workers can get the element (by legal employer, department, job, payroll...).
- **Element entries** — values for a worker.
- **Balances** — accumulate run results (e.g. Gross Earnings, FIT Withheld) with **dimensions** (run, period-to-date, YTD).
- **Fast formulas** calculate complex values.`, 'D'],

['Payroll', 'Walk me through a payroll cycle in Fusion.',
`- **Pre-payroll**: changes entered (new hires, terminations, element entries, time and absences), retro notifications.
- **Calculate payroll** — run results.
- **Verify**: payroll register, reconciliations, exceptions reports.
- **Corrections** — rollback/retry workers.
- **Calculate prepayments** (payment methods), **archive periodic payroll results**.
- **Payments**: direct deposit (NACHA), checks.
- **Payslips** generated.
- **Costing**: calculate costing and **transfer to GL**.
- **Statutory reports** (tax filings).
Use **payroll flows** to automate the sequence with checklists.`, 'D'],

['Payroll', 'How does payroll costing work and integrate with the General Ledger?',
`- **Costing setups** at levels: payroll, element eligibility, department, job/position, assignment, element entry — with **priority** rules for each COA segment.
- **Calculate costing** after payroll; results reviewed.
- **Transfer to Subledger Accounting / GL**: creates journals in GL (often summarized).
- Also **partial period accruals** for month-end.
- Reconcile payroll register to GL by account and cost center.`, 'D'],

['Payroll', 'What is retroactive pay and how does Fusion handle it?',
`When a change is backdated (e.g. raise effective 2 months ago), payroll must recalculate past periods.
- **Retro notifications** created by event rules when retro-relevant data changes.
- **Recalculate payroll for retroactive changes** process computes differences and creates **retro element entries** paid in the current period.
- Only elements flagged as retro-relevant are recalculated.
- Review retro results before the regular payroll.`, 'D'],

['Payroll', 'What is a Fast Formula and when would you write one?',
`**Fast Formulas** are Oracle's rules language used in Payroll, Absences, Benefits, Time, Compensation, etc.
- Uses **database items (DBIs)** and **input values**; returns values to the calling process.
- Examples: custom overtime calculation, absence accrual rules, eligibility rules, validation of entries.
- Write when seeded options can't meet the rule; keep them simple, documented, and tested with edge cases.`, 'D'],

['Payroll', 'How do you test a payroll implementation?',
`- **Unit tests** of elements and formulas.
- **Parallel payroll runs**: run Fusion and legacy for the same periods (2–3 cycles) with the same inputs; compare gross, taxes, deductions, net by employee.
- **Tolerance** analysis (e.g. differences > $1 explained).
- **Special scenarios**: new hires, terminations, retro, bonuses, garnishments, multi-state taxes.
- **Payments** testing with the bank; **GL costing** reconciliation.
- **Year-end** scenarios (W-2) if relevant.`, 'D'],

['Absence', 'How do you set up absence plans and accruals?',
`- **Absence types** (vacation, sick, FMLA) linked to **absence plans**.
- **Accrual plans**: accrual rates (by service, grade), frequency (per payroll, monthly, annual), ceilings, carryover limits, vesting/waiting periods, proration on hire/termination.
- **Eligibility** profiles.
- **Qualification plans** for paid leave (e.g. sick pay bands, maternity).
- Payroll integration for paid absences and liability.
- Conversion of opening balances.`, 'D'],

['Time and Labor', 'What does Fusion Time and Labor do and how does it connect to payroll and projects?',
`- **Time entry** (web, mobile, time clocks) with **layouts** and **time entry rules** (validation).
- **Time calculation rules** (overtime, shift premiums) and **time categories**.
- **Approvals** via workflow.
- Transfer to **Payroll** (elements) and to **Project Costing** (project time).
- **Schedules** and work patterns.
Integration with time clocks via APIs/HDL.`, 'D'],

['Benefits', 'How are benefits structured in Fusion HCM?',
`- **Programs → Plan types → Plans → Options** (e.g. Medical → PPO → Employee + Family).
- **Eligibility profiles**, **life events** (new hire, marriage, birth) opening enrollment windows.
- **Rates and coverages** calculated (standard rates, flex credits).
- **Open enrollment** processes.
- **Carrier integrations** (834 files) via benefits extracts.
- **Payroll deductions** for employee contributions.`, 'D'],

['Talent', 'What is in Oracle Talent Management?',
`- **Goals** management and **performance** documents (templates, review periods, ratings, calibration).
- **Career development** and **talent profiles** (skills, competencies).
- **Talent review** and **succession** planning (9-box).
- **Learning** (courses, assignments, compliance training).
- **Recruiting** (requisitions, candidates, offers, onboarding).
- **Compensation** (workforce compensation cycles, individual compensation).`, 'B'],

['Compensation', 'How do you configure an annual compensation cycle (merit and bonus)?',
`- **Workforce Compensation plan** with **components** (merit, lump sum, bonus, stock).
- **Eligibility** and **budgets** (pool by manager), **guidelines** (merit matrix by performance rating and compa-ratio).
- **Worksheet** configuration for managers; **approvals** hierarchy.
- **Data from performance** ratings.
- **Transfer** results to HR (salary changes) and Payroll (bonus element entries) with effective dates.
- **Compensation statements** to employees.`, 'D'],

['Recruiting', 'Describe the Oracle Recruiting Cloud flow.',
`- **Job requisition** created and approved (from position or job).
- **Posting** to career sites and job boards.
- **Candidate applications**, screening questions, **candidate selection process** (phases/states).
- **Interviews** scheduling and feedback.
- **Offer** creation, approval, e-signature.
- **Pre-employment** checks (background check integrations).
- **Hire** → pending worker → onboarding **journeys**.`, 'D'],

['Journeys', 'What are HCM Journeys and how have you used them?',
`**Journeys** guide workers through tasks for events: onboarding, offboarding, relocation, leave of absence.
- **Templates** with tasks (documents, e-signatures, videos, I-9, IT provisioning tasks, surveys).
- Assigned automatically by events or manually.
- Task owners can be the worker, manager, HR, IT.
- Integration tasks can call external systems.
Benefit: consistent experience and compliance.`, 'B'],

['Security', 'How is data security configured in Fusion HCM?',
`- **Job roles** with function privileges (HR Specialist, Line Manager).
- **Data roles / security profiles**: **person security profiles** (who they can see), **organization**, **position**, **legislative data group**, **payroll** profiles.
- **Areas of responsibility (AOR)** to assign HR reps to populations dynamically.
- **Manager hierarchy** security for line managers.
- **Sensitive data** (SSN, salary, health) restricted further.
- Provisioning rules (role mappings) based on assignment attributes.`, 'D'],

['Approvals', 'How do HCM approvals work and how do you troubleshoot routing issues?',
`- **Approval rules** per transaction (hire, promotion, salary change, termination) in **Transaction Console / Approval Rules**.
- Routing by **supervisor hierarchy**, **position hierarchy**, **approval groups**, **AOR (HR rep)**, or custom user.
- Troubleshooting: check manager assignments (vacant or terminated managers), rule conditions, delegations; use **Transaction Console** to view and recover stuck transactions.`, 'D'],

['Integration', 'How would you integrate Fusion HCM with a third-party payroll provider like ADP?',
`- **Outbound**: worker data, assignments, compensation, deductions — via **HCM Extracts** (delta/changes-only) to the provider format; scheduled each pay period.
- **Inbound**: payroll results/costing back (for GL and reporting) via HDL or GL journals.
- **Cutoff** alignment with payroll calendars.
- **Reconciliation** reports (headcount, pay changes).
- **Security** (encrypted SFTP), error handling.
- Alternative: **Global Payroll Interface** in Fusion.`, 'D'],

['Integration', 'What are HCM Extracts?',
`HCM Extracts is the tool to **extract HCM data** for interfaces and reports.
- Define **blocks, records, data elements** (database items/user entities), **criteria** and **delivery options** (BIP template formatting, SFTP/UCM).
- **Changes only** extracts with baseline.
- Scheduled flows.
Used for benefits carriers, payroll vendors, identity management, downstream systems.`, 'D'],

['Integration', 'How does HCM feed identity management and other Fusion modules?',
`- **Workers** are the source for **user accounts** (auto-provisioning) and **role provisioning** rules.
- **SSO/IAM** (Okta, Azure AD/Entra) sync with HCM for joiners-movers-leavers.
- **Managers and hierarchies** drive approvals in Financials and Procurement.
- **Employee data** used by Expenses (cost center, bank accounts), Procurement (requesters).
Accuracy of HCM directly affects ERP approvals.`, 'B'],

['Reporting', 'What reporting options exist in Fusion HCM?',
`- **OTBI** HCM subject areas (Workforce Management, Payroll, Absence, Talent) for ad-hoc analysis, respecting security.
- **BI Publisher** for formatted reports and complex queries.
- **HCM Extracts** for data feeds.
- **Fusion Data Intelligence (HCM analytics)** for workforce analytics with history.
- **Infolets and dashboards**.`, 'B']
]);

QB["ora-hcm"] = (QB["ora-hcm"] || []).concat([
["Core HR", "What are the main worker lifecycle actions in HCM?", "- **Hire** (employee, contingent worker), **rehire**.\n- **Promotion**, **transfer**, **change assignment**, **change manager**, **change location/working hours**.\n- **Salary change** (and compensation).\n- **Leave of absence** and return.\n- **Global transfer / temporary assignment** (between legal employers).\n- **Termination** (voluntary, involuntary) with reasons.\nEach **action and reason** drives approvals, payroll, benefits life events and reporting.", "B"],
["Core HR", "How do you handle global mobility (a worker moving to another country) in Fusion?", "- **Global transfer**: ends the work relationship in the source legal employer and creates one in the destination (permanent move).\n- **Global temporary assignment**: keeps home relationship; adds a host assignment for a period.\n- Consider: payroll in both countries (shadow payroll), tax equalization, benefits, documents (visas), cost allocation.\n- Localization: new legislative data group rules apply.", "D"],
["Core HR", "What are flexfields in HCM and when do you use them?", "- **Descriptive flexfields (DFF)** — extra attributes on objects (e.g. assignment, person) with contexts.\n- **Extensible flexfields (EFF)** — multiple rows/ structured extra info (e.g. licenses on person, legislative info).\n- **Key flexfields** — structured codes (job, grade, position names, people groups, costing).\nUse for client-specific data needs; deploy flexfields after changes; consider reporting (OTBI exposure) and HDL loading.", "B"],
["Payroll", "How do you set up a new deduction, for example a garnishment or a voluntary deduction?", "- **Voluntary deduction**: create an element (e.g. Pretax or Voluntary Deductions classification) via the element template; eligibility; costing; balances; payroll testing.\n- **Involuntary (garnishment)**: use seeded involuntary deduction elements (child support, tax levy, creditor debt) with **calculation cards** per worker capturing order details, limits and payee; priority rules and exemptions handled by payroll.\n- Third-party payees and payment methods for remittance.\n- Test with edge cases (insufficient net pay).", "D"],
["Payroll", "What are payroll flows and checklists?", "- **Payroll flows** sequence tasks (calculate payroll, verify, prepayments, archive, payments, costing, reports) with dependencies.\n- **Flow patterns** can be copied and customized (e.g. add custom reports or extracts).\n- **Payroll checklist** shows status of each task, owners, due dates.\n- Supports scheduling and notifications; improves control and auditability.", "D"],
["Payroll", "How do you handle a mid-year payroll go-live in the US?", "- Load **YTD balances** for each employee (gross, taxes by jurisdiction, deductions) so Fusion produces correct W-2s and limits (e.g. 401k annual limits, Social Security wage base).\n- **Balance initialization** via HDL (Initialize Balances).\n- Reconcile loaded balances to the legacy payroll register and quarterly filings.\n- Coordinate **quarterly tax filing** responsibilities for the split year.\n- Consider a quarter-start go-live to simplify.", "D"],
["Payroll", "What are the common causes of payroll errors and how do you prevent them?", "- **Late or wrong HR data** (retro changes, terminations after cutoff).\n- **Element entry errors** (duplicate bonuses).\n- **Tax setup** issues (work/resident location).\n- **Time/absence** data not approved in time.\n- Prevention: **cutoff calendars**, validation reports pre-payroll, exception reports (net pay variance > X%), dual review, automated reconciliations, good change control on payroll setup.", "B"],
["Absence", "How do you handle FMLA or statutory leave tracking in Fusion?", "- Seeded **US FMLA** plans/rules where available, or configured **absence types** with **eligibility** (12 months/1,250 hours) and **entitlement** tracking (12 weeks in a rolling period).\n- **Leave of absence** assignment status, linking to benefits (continuation) and payroll (unpaid/partial pay).\n- **Documentation** via journeys.\n- Reports for compliance and case management.", "D"],
["Benefits", "How do you design benefits eligibility and life events?", "- **Eligibility profiles** by worker attributes (employment category, location, hours, service).\n- **Life events**: temporal (new hire, age changes) and explicit (marriage, birth) — with **enrollment windows** and default enrollments.\n- **Collapsing and processing** rules for multiple events.\n- **Waiting periods** and coverage start dates.\n- Test scenarios end-to-end including carrier files and payroll deductions.", "D"],
["Talent", "How would you configure a performance management process?", "- **Performance templates** with sections (goals, competencies, overall rating), **process flows** (self-evaluation, manager evaluation, calibration, review meeting, acknowledgment).\n- **Review periods** and eligibility.\n- **Rating models** and calibration in **talent review**.\n- **Feedback** (continuous, requested) and **check-ins**.\n- Integration with compensation (ratings drive merit).\n- Communication and training for managers.", "D"],
["Learning", "How does Oracle Learning support compliance training?", "- **Courses/offerings** (online, instructor-led, blended) and **specializations**.\n- **Learning assignments** (required) by rules (job, location, new hire) with due dates and renewals.\n- **Notifications** and manager dashboards for overdue learning.\n- **Completion records** for audits (e.g. GxP training in pharma).\n- Integration with content providers (LinkedIn Learning etc.).", "D"],
["Recruiting", "How do you integrate background checks and onboarding into recruiting?", "- **Background check partners** integrated via the recruiting partner framework (screening packages triggered at a candidate phase).\n- Results return to the candidate record; selection process moves on completion.\n- **Offer acceptance** creates a **pending worker**; **onboarding journey** assigned (documents, I-9, equipment).\n- **Convert** pending worker to employee on start date.", "D"],
["Implementation", "How do you plan an HCM Cloud implementation and what goes first?", "- **Core HR** first (foundation: structures, workers, security, approvals) — everything else depends on it.\n- Then **Payroll/Absence/Time** (or payroll interface), **Benefits**, **Talent/Compensation**, **Recruiting/Learning** — often in phases.\n- **Data conversion** and **integrations** (payroll vendor, benefits carriers, IAM, ERP) planned early.\n- **Parallel payroll** testing for payroll.\n- **Change management** heavy: managers and employees use self-service.", "B"],
["Implementation", "How do you design HCM for multiple countries?", "- **Global design** for core HR, with **localizations** per country (legislative data groups, address formats, national identifiers, statutory info).\n- Country payroll: Fusion global payroll where available, or **payroll interfaces** to local providers.\n- **Data privacy**: GDPR, works council consultation (Europe), data residency.\n- **Languages** and translations.\n- **Rollout** by region with a global template.", "D"],
["Security", "How do you protect sensitive HCM data like SSN, salary and health information?", "- **Role-based access** — only specific roles see national identifiers, salary, medical info.\n- **Masking** of national IDs in UI; restrict OTBI subject areas.\n- **Audit** on sensitive data changes and access (where available).\n- **Non-production masking** after P2T refreshes.\n- **GDPR**: purpose limitation, retention policies, data subject requests.", "D"],
["Quarterly Updates", "How do you manage HCM quarterly updates, especially payroll?", "**Why they ask:** payroll mistakes are very visible.\n\n**Answer:**\n\"I review What's New for HCM and the payroll legislative updates for tax changes. Regression covers core HR transactions, approvals, security, and payroll runs compared to prior results with automated payroll comparison. Statutory patches, like year-end, are planned and tested. Extracts and integrations are retested. And HR users get a short summary of what changed.\"\n\nTip: Mention parallel payroll comparison. It's the test that catches real errors.", "B"],
["Behavioral", "Tell me about a difficult payroll issue you solved under time pressure.", "## Example (STAR)\n- **Situation:** Two hours before payroll payments transmitted, net pay variances appeared for 300 employees.\n- **Task:** As HCM lead, decide whether to proceed.\n- **Action:** Traced to a retroactive change in a benefit rate loaded that afternoon; rolled back affected workers, corrected the rate effective date, re-ran payroll for them, reconciled.\n- **Result:** Payroll paid on time; added a pre-payroll variance check and freeze window for benefit changes.", "B"],
["Behavioral", "How do you work with HR business partners who aren't technical?", "- Use their language — employee experience, compliance, cost.\n- **Show** processes with their scenarios (a promotion, a leave).\n- Explain the impact of data changes on payroll and approvals.\n- Give them **self-service tools** (OTBI, HSDL) with training.\n- Regular check-ins and quick feedback loops.", "B"],
["Behavioral", "Why do you want to lead HCM implementations?", "- HCM touches **every employee** — real impact on experience and trust (paying people correctly).\n- You enjoy combining **compliance**, **process design** and **people change**.\n- Examples of successful rollouts and outcomes (self-service adoption, payroll accuracy).\n- You want to own the full HCM design and grow a team.", "B"],
["Core HR", "What is position management and when should a company use it?", "- **Position management** controls headcount through positions: hires fill approved positions; FTE and headcount budgets enforced.\n- **Position hierarchy** can drive approvals and reporting.\n- **Synchronization** of assignment attributes from position (job, department, location).\n- Use when: budgeted headcount control is required (public sector, regulated industries, large enterprises).\n- Trade-off: more administration — every org change needs position updates.", "D"],
["Payroll", "How do you reconcile payroll to the general ledger and bank?", "- **Payroll register** totals vs **costing results** vs **GL journals** by account/cost center.\n- **Net pay** vs bank payment file totals and bank statement.\n- **Tax liabilities** vs tax payments/filings.\n- **Third-party payments** (deductions) vs remittances.\n- Monthly sign-off with payroll and accounting; investigate suspense costing.", "D"],
["Integration", "How do you handle employee data for Fusion Expenses and Procurement approvals?", "- **Expenses** needs: assignment cost center (default expense account), manager, bank account for reimbursement (or payroll).\n- **Procurement/Requisitions** needs: requester's BU and default charge account; approvals via supervisor hierarchy.\n- Ensure **default expense account** on assignments is populated (HDL/rules).\n- Terminated managers or missing supervisors break approvals — monitor with reports.", "D"],
["AI", "How is AI being used in Oracle HCM?", "**Why they ask:** HCM is an active area for AI.\n\n**Answer:**\n\"Generative AI writes job descriptions, summarizes performance reviews, suggests goals and drafts candidate outreach. AI agents answer HR help desk questions about policies and benefits and help with onboarding. Recommendations suggest jobs and learning based on skills, and the best candidates. The guardrails are bias checks, privacy, and human review for decisions like hiring and ratings.\"\n\nTip: Stress human review for hiring and ratings. It's the ethical and legal line.", "D"],
["Implementation", "What are key risks in HCM implementations?", "- **Payroll accuracy** — mitigate with multiple parallel runs.\n- **Data quality** (history, managers, cost centers).\n- **Security** misconfiguration exposing sensitive data.\n- **Change management** (manager self-service adoption).\n- **Integrations** with benefits carriers, payroll vendors, IAM.\n- **Works council/legal** approvals in some countries.", "B"],
["Talent", "How do you set up succession planning?", "- Identify **critical positions/roles**.\n- **Talent reviews** with performance/potential (9-box), risk of loss, impact of loss.\n- **Succession plans**: candidates with readiness levels.\n- **Development plans** for successors (learning, assignments).\n- Security: only HR and leadership see succession data.\n- Reports on bench strength.", "D"],
["Payroll", "What is the difference between Fusion Global Payroll and a payroll interface approach?", "- **Global Payroll**: Fusion calculates pay (for supported countries like US, UK, Canada, India, etc.) with statutory rules updated by Oracle.\n- **Payroll interface (Global Payroll Interface)**: Fusion is the HR source; a third-party provider (ADP, local bureau) calculates pay; Fusion sends changes via extracts and may receive results back.\n- Decide by country support, complexity, cost and in-house payroll expertise.", "B"]
]);

// Added Oct 2026: Redwood and AI Agent Studio questions for HCM.
QB["ora-hcm"] = (QB["ora-hcm"] || []).concat([
["Redwood", "What changes for HCM users and admins with Redwood?", "**Why they ask:** HCM moved to Redwood early.\n\n**Answer:**\n\"HCM was one of the first areas in Redwood: person, employment, journeys, goals, performance, learning and recruiting pages. Transactions are designed with Transaction Design Studio and Visual Builder Studio, controlling fields, sections and rules by action and role; classic Page Composer personalizations don't carry over. Approvals and security stay the same. Managers and HR need training because self-service screens look different.\"\n\nTip: Mention Transaction Design Studio. It's the HCM-specific tool.", "D"],
["Redwood", "How would you hide or require a field on a Redwood HCM action like Promote?", "**Why they ask:** a hands-on HCM configuration question.\n\n**Answer:**\n\"I use Transaction Design Studio, or VBS for Redwood pages, to create a rule for the Promote action, optionally by legal employer or role. I set the field to required, hidden or read-only, and add any defaults. Then I test with different users and countries, publish, and document the rule for support.\"\n\nTip: Mention testing across countries. Rules by legal employer often surprise people.", "D"],
["AI Agent Studio", "Give examples of AI agents useful in HCM.", "**Why they ask:** a use case question.\n\n**Answer:**\n\"A policy and benefits Q&A agent, grounded on HR documents. An employee self-service agent: 'update my address' or 'how many vacation days do I have?', using HCM business objects with the employee's own access. A manager assistant that summarizes team absences and upcoming reviews and drafts feedback. A recruiting assistant that drafts job descriptions and summarizes candidates. Humans stay responsible for hiring, pay and performance decisions.\"\n\nTip: End with who stays responsible. It shows judgment.", "D"],
["AI Agent Studio", "What extra care do HCM agents need?", "**Why they ask:** HCM data is the most sensitive in the ERP.\n\n**Answer:**\n\"Sensitive data, like salary, health and national IDs, needs strict role-based access, which agents inherit from HCM security. Recruiting and performance uses need bias and fairness testing, with humans making the decisions. Privacy rules like GDPR, and works council requirements in some countries, apply. And employees should be told clearly when they're using an AI assistant.\"\n\nTip: Mention works councils. It shows global HCM experience.", "D"],
["Fusion Platform", "How do you keep HCM extracts and integrations safe during Redwood changes?", "**Why they ask:** UI changes can still affect integrations.\n\n**Answer:**\n\"HCM Extracts, HDL and APIs aren't affected by UI changes. But new fields added through Redwood or VBS flexfields need to be added to the extracts. I retest approval notifications and deep links. And payroll-related transactions get a regression test after every quarterly update.\"\n\nTip: Mention new flexfields missing from extracts. It's the real risk.", "B"]
]);
