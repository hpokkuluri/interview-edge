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
