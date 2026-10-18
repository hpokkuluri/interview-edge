// Rewritten Oracle HCM Lead questions (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'Explain the HCM enterprise structure: enterprise, legal employer, legislative data group, business unit, department.':
`**Why they ask:** the HCM foundation question.

**Answer:**
"The enterprise is the top level, usually one per Fusion instance. A legal entity that employs people is a legal employer; for payroll it also has a payroll statutory unit and tax reporting units. A legislative data group partitions payroll and related data by country, typically one per country and currency. A business unit sets reference data like jobs, positions and grades, and is used by some functions. A department is the organization workers are assigned to, and often owns the cost center. Around them sit the workforce structures: locations, jobs, positions and grades."

Tip: Mention that the department often carries the cost center. It's how HR links to finance.`,

'What is the difference between jobs, positions and grades?':
`**Why they ask:** a key design decision in every HCM project.

**Answer:**
"A job is a generic role, like Accountant, with a job family, level and FLSA status. A position is a specific instance of a job in a department with headcount or FTE, like 'Senior Accountant, Finance New York, 2 FTE', used in position management for budget control. A grade is a pay level with salary ranges through grade rates, and valid grades can be assigned to jobs or positions. The early decision is position-based, for headcount control in places like public sector or pharma, or job-based, which is simpler."

Tip: Raise the position vs job decision. It shapes the whole design.`,

'What is effective dating and why does it matter in HCM?':
`**Why they ask:** effective dating errors break payroll.

**Answer:**
"HCM objects like assignments, salaries, jobs and departments keep date-effective history, so each change creates a new row with start and end dates. There's an important difference between a correction, which fixes a mistake, and an update, which records a real change on a date. Changes can be future-dated, like a promotion next month, or retroactive, like a backdated raise that triggers retro pay. It affects payroll, as-of-date reporting, integrations, and HDL loads, which must load history in date order. The classic mistake is correcting history when an update was needed, which breaks payroll."

Tip: Explain correction vs update clearly. It's the point of the question.`,

'What are the main person and employment records in Fusion HCM?':
`**Why they ask:** a basic data model question.

**Answer:**
"The person record holds personal information: name, national ID, addresses and contacts. The work relationship links the person to a legal employer, as an employee, contingent worker, nonworker or pending worker, with hire and termination dates. Employment terms are optional and hold contract-level terms. The assignment holds the job, position, department, location, manager, grade and working hours. One person can have several work relationships with different legal employers, and several assignments."

Tip: Mention multiple work relationships. It's how global moves and dual roles work.`,

'What is HCM Data Loader (HDL) and how do you use it?':
`**Why they ask:** HDL is the main HCM load tool.

**Answer:**
"HDL loads HCM data using .dat files structured by business object, for example Worker.dat with Worker, PersonName, WorkRelationship and Assignment components. It supports create, update and delete, and date-effective history. Records are identified by source keys, SourceSystemOwner and SourceSystemId, or by GUIDs. Zip files are uploaded to UCM and imported and loaded, with errors reviewed in Data Exchange. HSDL, the spreadsheet loader, gives business users templates. And order matters: departments, jobs, locations and grades before workers."

Tip: Recommend source keys. They make later updates far easier.`,

'How do you convert worker history into Fusion HCM?':
`**Why they ask:** history conversion is a big HCM risk.

**Answer:**
"First decide history depth: current record only, or two to three years of assignment and salary changes. Load foundation data first: organizations, jobs, positions, grades and locations. Then workers, with each date-effective change in order: hire, then changes, then current. Then salary history, element entries, payroll year-to-date balances for a mid-year go-live, and absence accrual balances. Reconcile headcount by organization, salary totals and balances. Run multiple mocks, and HR signs off."

Tip: Mention payroll YTD balances for mid-year go-lives. Missing them breaks tax limits.`,

'Explain elements, element eligibility and balances in Fusion Payroll.':
`**Why they ask:** core payroll concepts.

**Answer:**
"Elements are earnings, deductions or information items, like Regular Salary, 401(k) or Bonus, defined by a primary classification such as Standard Earnings or Pretax Deductions. Element eligibility says which workers can get the element, by legal employer, department, job or payroll. Element entries hold the values for a worker. Balances accumulate run results, like Gross Earnings or Federal Income Tax Withheld, with dimensions such as run, period-to-date and year-to-date. Fast formulas calculate the complex values."

Tip: Give an example of a balance with a dimension. It shows you've read a payroll register.`,

'Walk me through a payroll cycle in Fusion.':
`**Why they ask:** the core payroll process.

**Answer:**
"Before payroll, changes are entered: new hires, terminations, element entries, time and absences, and retro notifications. Then calculate payroll to create run results. Verify with the payroll register, reconciliations and exception reports. Correct with rollback or retry for individual workers. Then calculate prepayments by payment method and archive periodic payroll results. Make payments by direct deposit, NACHA in the US, and checks. Generate payslips. Calculate costing and transfer to GL. And run statutory reports for tax filings. Payroll flows automate the sequence with a checklist."

Tip: Mention payroll flows. It shows you run payroll with controls, not by hand.`,

'How does payroll costing work and integrate with the General Ledger?':
`**Why they ask:** finance depends on payroll costing.

**Answer:**
"Costing is set up at several levels: payroll, element eligibility, department, job or position, assignment and element entry, with priority rules deciding which level fills each COA segment. After payroll, Calculate Costing runs and the results are reviewed. Transfer to Subledger Accounting creates GL journals, often summarized. Partial period accruals handle month-end. And the payroll register is reconciled to GL by account and cost center."

Tip: Mention the priority rules per segment. It's the part people misunderstand.`,

'What is retroactive pay and how does Fusion handle it?':
`**Why they ask:** retro pay is a common source of payroll errors.

**Answer:**
"When a change is backdated, for example a raise effective two months ago, payroll has to recalculate past periods. Event rules create retro notifications when retro-relevant data changes. The Recalculate Payroll for Retroactive Changes process works out the differences and creates retro element entries paid in the current period. Only elements flagged as retro-relevant are recalculated. And I review the retro results before the regular payroll run."

Tip: Say you review retro results first. Surprises at payroll time are expensive.`,

'What is a Fast Formula and when would you write one?':
`**Why they ask:** fast formulas are a key HCM skill.

**Answer:**
"Fast Formulas are Oracle's rules language, used in Payroll, Absences, Benefits, Time, Compensation and more. They use database items and input values and return results to the calling process. Examples are a custom overtime calculation, absence accrual rules, eligibility rules, or validating entries. I write one only when seeded options can't meet the rule, and I keep it simple, documented and tested with edge cases."

Tip: Say "only when seeded can't meet the rule". It shows restraint.`,

'How do you test a payroll implementation?':
`**Why they ask:** payroll must be right on day one.

**Answer:**
"Unit tests for elements and formulas. Then parallel payroll runs: Fusion and legacy for the same two or three periods with the same inputs, comparing gross, taxes, deductions and net by employee. Every difference over a tolerance, say a dollar, is explained. Special scenarios: new hires, terminations, retro, bonuses, garnishments and multi-state taxes. Payment testing with the bank, and GL costing reconciliation. And year-end scenarios like W-2s if relevant."

Tip: Lead with parallel runs. They're the gold standard for payroll testing.`,

'How do you set up absence plans and accruals?':
`**Why they ask:** absence setup is detailed and policy-heavy.

**Answer:**
"Absence types, like vacation, sick and FMLA, link to absence plans. Accrual plans define rates by service or grade, the frequency, per payroll, monthly or annual, ceilings, carryover limits, vesting or waiting periods, and proration on hire and termination. Eligibility profiles control who gets each plan. Qualification plans handle paid leave bands, like sick pay or maternity. Payroll integration covers paid absences and the liability. And opening balances are converted."

Tip: Mention proration on hire and termination. It's where accrual bugs hide.`,

'What does Fusion Time and Labor do and how does it connect to payroll and projects?':
`**Why they ask:** time feeds both payroll and projects.

**Answer:**
"It handles time entry by web, mobile or time clocks, with layouts and time entry rules for validation. Time calculation rules handle overtime and shift premiums using time categories. Time goes through approval workflow. Approved time transfers to Payroll as elements and to Project Costing for project time. It also manages schedules and work patterns. Time clocks integrate through APIs or HDL."

Tip: Mention both destinations, payroll and projects. It shows end-to-end thinking.`,

'How are benefits structured in Fusion HCM?':
`**Why they ask:** benefits has its own structure.

**Answer:**
"Benefits go program, plan type, plan, option, for example Medical, then PPO, then Employee plus Family. Eligibility profiles decide who qualifies. Life events, like new hire, marriage or birth, open enrollment windows. Rates and coverages are calculated, including flex credits. Open enrollment runs as a process. Carrier integrations send 834 files through benefits extracts. And employee contributions become payroll deductions."

Tip: Mention 834 files. It shows you've integrated with carriers.`,

'What is in Oracle Talent Management?':
`**Why they ask:** a breadth question.

**Answer:**
"Goals and performance documents, with templates, review periods, ratings and calibration. Career development and talent profiles with skills and competencies. Talent review and succession planning with the 9-box. Learning for courses, assignments and compliance training. Recruiting for requisitions, candidates, offers and onboarding. And compensation for workforce compensation cycles and individual compensation."

Tip: Say which ones you've implemented. Breadth is good, depth wins.`,

'How do you configure an annual compensation cycle (merit and bonus)?':
`**Why they ask:** compensation cycles are high-visibility.

**Answer:**
"I set up a workforce compensation plan with components like merit, lump sum, bonus and stock. Eligibility and budgets, pooled by manager, and guidelines, like a merit matrix by performance rating and compa-ratio. The manager worksheet is configured, with an approval hierarchy. Performance ratings feed in. Results transfer to HR as salary changes and to Payroll as bonus element entries with the right effective dates. And employees get compensation statements."

Tip: Mention the merit matrix. It's the heart of most cycles.`,

'Describe the Oracle Recruiting Cloud flow.':
`**Why they ask:** a process walkthrough.

**Answer:**
"A job requisition is created from a position or job and approved. It's posted to career sites and job boards. Candidates apply and answer screening questions, and move through the candidate selection process phases and states. Interviews are scheduled and feedback captured. An offer is created, approved and e-signed. Pre-employment checks run through background check integrations. Then the hire creates a pending worker, and onboarding journeys start."

Tip: End with pending worker and journeys. It shows the hand-off to HR.`,

'What are HCM Journeys and how have you used them?':
`**Why they ask:** journeys are a modern HCM feature.

**Answer:**
"Journeys guide workers through the tasks for an event, like onboarding, offboarding, relocation or a leave of absence. Templates include tasks like documents, e-signatures, videos, I-9, IT provisioning and surveys. They're assigned automatically by events or manually. Task owners can be the worker, manager, HR or IT, and integration tasks can call outside systems. The benefit is a consistent experience and compliance. For example, I've built an onboarding journey that [describe your own example]."

Tip: Add a real journey you built. It makes the answer yours.`,

'How is data security configured in Fusion HCM?':
`**Why they ask:** HCM data is the most sensitive in the company.

**Answer:**
"Job roles, like HR Specialist or Line Manager, give function privileges. Data roles and security profiles control data: person security profiles for who they can see, plus organization, position, legislative data group and payroll profiles. Areas of responsibility assign HR reps to populations dynamically. Line managers see their people through manager hierarchy security. Sensitive data like SSN, salary and health is restricted further. And provisioning rules map roles from assignment attributes."

Tip: Mention areas of responsibility. They scale HR security without manual upkeep.`,

'How do HCM approvals work and how do you troubleshoot routing issues?':
`**Why they ask:** approval issues are common HCM tickets.

**Answer:**
"Each transaction, like hire, promotion, salary change or termination, has approval rules, managed in the Transaction Console and approval rules. Routing can use the supervisor hierarchy, position hierarchy, approval groups, the HR rep through areas of responsibility, or a specific user. To troubleshoot, I check manager assignments for vacant or terminated managers, rule conditions, and delegations, and I use the Transaction Console to view and recover stuck transactions."

Tip: Mention vacant or terminated managers. It's the most common cause.`,

'How would you integrate Fusion HCM with a third-party payroll provider like ADP?':
`**Why they ask:** many companies outsource payroll.

**Answer:**
"Outbound, HCM Extracts send worker data, assignments, compensation and deductions in the provider's format, as changes-only deltas each pay period. Inbound, payroll results and costing come back for GL and reporting, through HDL or GL journals. Extract timing is aligned with the payroll calendar cutoffs. Reconciliation reports cover headcount and pay changes. Files go over encrypted SFTP with error handling. The alternative is Fusion's Global Payroll Interface."

Tip: Mention cutoff alignment. Changes after cutoff are the usual source of errors.`,

'What are HCM Extracts?':
`**Why they ask:** extracts drive most HCM outbound integrations.

**Answer:**
"HCM Extracts is the tool for extracting HCM data for interfaces and reports. You define blocks, records and data elements from database items or user entities, plus criteria and delivery options, with BIP templates for formatting and delivery to SFTP or UCM. It supports changes-only extracts against a baseline, and runs as scheduled flows. It's used for benefits carriers, payroll vendors, identity management and other downstream systems."

Tip: Mention changes-only extracts. Full files every time overload partners.`,

'How does HCM feed identity management and other Fusion modules?':
`**Why they ask:** HCM data drives the rest of the ERP.

**Answer:**
"Workers are the source for user accounts through auto-provisioning, and for role provisioning rules. SSO and IAM tools like Okta or Entra sync with HCM for joiners, movers and leavers. Managers and hierarchies drive approvals in Financials and Procurement. And employee data is used by Expenses, for cost center and bank accounts, and by Procurement for requesters. So HCM accuracy directly affects ERP approvals."

Tip: End with the approvals point. Finance teams feel bad HCM data first.`,

'What reporting options exist in Fusion HCM?':
`**Why they ask:** reporting tool choice.

**Answer:**
"OTBI HCM subject areas, like Workforce Management, Payroll, Absence and Talent, for ad-hoc analysis that respects security. BI Publisher for formatted reports and complex queries. HCM Extracts for data feeds. Fusion Data Intelligence HCM analytics for workforce analytics with history. And infolets and dashboards."

Tip: Mention that OTBI respects HCM security automatically. It matters for sensitive data.`,

'What are the main worker lifecycle actions in HCM?':
`**Why they ask:** a basic HCM process question.

**Answer:**
"Hire, for employees and contingent workers, and rehire. Promotion, transfer, change assignment, change manager, and change location or working hours. Salary change and other compensation changes. Leave of absence and return. Global transfer or temporary assignment between legal employers. And termination, voluntary or involuntary, with reasons. Each action and reason drives approvals, payroll, benefits life events and reporting."

Tip: Mention that action reasons drive downstream processes. It's why they must be set correctly.`,

'How do you handle global mobility (a worker moving to another country) in Fusion?':
`**Why they ask:** global moves are complex.

**Answer:**
"A global transfer is a permanent move: it ends the work relationship with the source legal employer and creates one with the destination. A global temporary assignment keeps the home relationship and adds a host assignment for a period. I consider payroll in both countries, including shadow payroll, tax equalization, benefits, documents like visas, and cost allocation. And the new country's legislative data group rules apply."

Tip: Separate permanent and temporary moves clearly. It's the first decision.`,

'What are flexfields in HCM and when do you use them?':
`**Why they ask:** flexfields are how HCM is extended.

**Answer:**
"Descriptive flexfields add extra attributes to objects like assignment or person, with contexts. Extensible flexfields hold multiple rows or structured extra information, like licenses on a person or legislative information. Key flexfields are structured codes for job, grade and position names, people groups and costing. I use them for client-specific data, deploy them after changes, and think about OTBI exposure and HDL loading up front."

Tip: Mention planning for reporting and loading. Flexfields nobody can report on are wasted.`,

'How do you set up a new deduction, for example a garnishment or a voluntary deduction?':
`**Why they ask:** a hands-on payroll question.

**Answer:**
"For a voluntary deduction, I create an element with the element template in the right classification, like pretax or voluntary deductions, then set eligibility, costing and balances, and test in payroll. For an involuntary deduction like a garnishment, I use the seeded involuntary deduction elements for child support, tax levy or creditor debt, with calculation cards per worker capturing the order details, limits and payee; payroll handles priority rules and exemptions. Third-party payees and payment methods handle remittance. And I test edge cases like insufficient net pay."

Tip: Mention insufficient net pay. It's the edge case that matters for garnishments.`,

'What are payroll flows and checklists?':
`**Why they ask:** payroll control.

**Answer:**
"Payroll flows sequence the tasks, calculate payroll, verify, prepayments, archive, payments, costing and reports, with dependencies. Flow patterns can be copied and customized, for example to add custom reports or extracts. The payroll checklist shows each task's status, owner and due date. Flows can be scheduled and send notifications, which improves control and auditability."

Tip: Mention auditability. Payroll is a SOX area in many companies.`,

'How do you handle a mid-year payroll go-live in the US?':
`**Why they ask:** mid-year go-lives are risky.

**Answer:**
"I load year-to-date balances for each employee, gross, taxes by jurisdiction and deductions, so Fusion produces correct W-2s and respects limits like the 401(k) annual limit and the Social Security wage base. Balances are initialized through HDL with Initialize Balances. Loaded balances are reconciled to the legacy payroll register and quarterly filings. Responsibilities for quarterly tax filings in the split year are agreed. And I'd suggest a quarter-start go-live to simplify."

Tip: Recommend a quarter start. It cuts the tax filing complexity.`,

'What are the common causes of payroll errors and how do you prevent them?':
`**Why they ask:** prevention matters more than fixing.

**Answer:**
"Late or wrong HR data, like retro changes or terminations after cutoff. Element entry errors, like duplicate bonuses. Tax setup problems with work or resident location. Time and absence not approved in time. To prevent them: cutoff calendars, pre-payroll validation reports, exception reports like net pay variance over a percentage, dual review, automated reconciliations and good change control on payroll setup."

Tip: Mention the net pay variance report. It catches most errors before payment.`,

'How do you handle FMLA or statutory leave tracking in Fusion?':
`**Why they ask:** a compliance question.

**Answer:**
"I use the seeded US FMLA plans and rules where available, or configure absence types with eligibility, 12 months and 1,250 hours, and entitlement tracking, 12 weeks in a rolling period. The leave of absence assignment status links to benefits continuation and to payroll for unpaid or partial pay. Documentation runs through journeys. And reports support compliance and case management."

Tip: Give the eligibility numbers. They show you know the rule.`,

'How do you design benefits eligibility and life events?':
`**Why they ask:** eligibility drives benefits accuracy.

**Answer:**
"Eligibility profiles use worker attributes like employment category, location, hours and service. Life events are temporal, like new hire or age changes, or explicit, like marriage or birth, each with enrollment windows and default enrollments. Collapsing and processing rules handle multiple events at once. Waiting periods set coverage start dates. And I test end to end, including carrier files and payroll deductions."

Tip: Mention collapsing rules. Multiple events at once is where benefits break.`,

'How would you configure a performance management process?':
`**Why they ask:** a talent configuration question.

**Answer:**
"I set up performance templates with sections, goals, competencies and overall rating, and process flows: self-evaluation, manager evaluation, calibration, review meeting and acknowledgment. Review periods and eligibility. Rating models, with calibration in talent review. Feedback, continuous and requested, and check-ins. Integration with compensation so ratings drive merit. And communication and training for managers."

Tip: Mention training managers. The process fails if managers don't use it well.`,

'How does Oracle Learning support compliance training?':
`**Why they ask:** compliance training is required in regulated industries.

**Answer:**
"Courses and offerings can be online, instructor-led or blended, grouped in specializations. Required learning assignments are created by rules, by job, location or new hire, with due dates and renewals. Notifications and manager dashboards flag overdue learning. Completion records support audits, for example GxP training in pharma. And it integrates with content providers like LinkedIn Learning."

Tip: Mention renewals. Compliance training expires.`,

'How do you integrate background checks and onboarding into recruiting?':
`**Why they ask:** a hand-off process question.

**Answer:**
"Background check partners integrate through the recruiting partner framework, with screening packages triggered at a candidate phase. Results come back to the candidate record, and the selection process moves on when they're complete. Offer acceptance creates a pending worker, and an onboarding journey is assigned with documents, I-9 and equipment. The pending worker converts to an employee on the start date."

Tip: Mention the pending worker. It's how onboarding starts before day one.`,

'How do you plan an HCM Cloud implementation and what goes first?':
`**Why they ask:** sequencing matters in HCM.

**Answer:**
"Core HR goes first, because everything depends on it: structures, workers, security and approvals. Then payroll, absence and time, or a payroll interface, then benefits, talent and compensation, recruiting and learning, often in phases. Data conversion and integrations, to the payroll vendor, benefits carriers, IAM and ERP, are planned early. Payroll needs parallel testing. And change management is heavy, because managers and employees use self-service."

Tip: Say "Core HR first". It's the foundation everything else needs.`,

'How do you design HCM for multiple countries?':
`**Why they ask:** global HCM design.

**Answer:**
"A global design for core HR, with localizations per country: legislative data groups, address formats, national identifiers and statutory information. Country payroll uses Fusion Global Payroll where it's available, or payroll interfaces to local providers. Data privacy covers GDPR, works council consultation in Europe, and data residency. Languages and translations. And rollout by region with a global template."

Tip: Mention works councils. In Europe they can decide your timeline.`,

'How do you protect sensitive HCM data like SSN, salary and health information?':
`**Why they ask:** data protection is critical in HCM.

**Answer:**
"Role-based access, so only specific roles see national identifiers, salary and medical information. National IDs are masked in the UI and sensitive OTBI subject areas are restricted. Changes and access are audited where available. Non-production is masked after every refresh. And GDPR principles: purpose limitation, retention policies and handling data subject requests."

Tip: Mention masking after refreshes. Test environments are a common leak.`,

'Tell me about a difficult payroll issue you solved under time pressure.':
`**Why they ask:** pressure handling in a critical process.

**Answer (example):**
"Two hours before payroll payments were due to transmit, net pay variances appeared for 300 employees. As HCM lead, I had to decide whether to proceed. I traced it to a retroactive change in a benefit rate loaded that afternoon. I rolled back the affected workers, corrected the rate's effective date, reran payroll for them and reconciled. Payroll paid on time, and afterwards we added a pre-payroll variance check and a freeze window for benefit changes."

Tip: End with the prevention. That's what makes it a lead-level story.`,

"How do you work with HR business partners who aren't technical?":
`**Why they ask:** HCM success depends on HR partners.

**Answer:**
"I use their language: employee experience, compliance and cost. I show processes with their scenarios, like a promotion or a leave. I explain how data changes affect payroll and approvals. I give them self-service tools, OTBI and HSDL, with training. And I keep regular check-ins with quick feedback."

Tip: Show processes with their scenarios. It makes the system real to them.`,

'Why do you want to lead HCM implementations?':
`**Why they ask:** motivation.

**Answer:**
"HCM touches every employee, so it has real impact on experience and trust, especially paying people correctly. I enjoy combining compliance, process design and people change. I've led rollouts with outcomes like [self-service adoption or payroll accuracy, use your own]. And I want to own the full HCM design and grow a team."

Tip: Fill in a real outcome. It turns motivation into evidence.`,

'What is position management and when should a company use it?':
`**Why they ask:** a key design decision.

**Answer:**
"Position management controls headcount through positions: hires fill approved positions, and FTE and headcount budgets are enforced. The position hierarchy can drive approvals and reporting. Assignment attributes like job, department and location sync from the position. Companies should use it when they need budgeted headcount control, like the public sector, regulated industries and large enterprises. The trade-off is more administration, because every org change needs position updates."

Tip: Name the trade-off. It shows balanced advice.`,

'How do you reconcile payroll to the general ledger and bank?':
`**Why they ask:** payroll reconciliation is a finance control.

**Answer:**
"I compare the payroll register totals to the costing results to the GL journals by account and cost center. Net pay against the bank payment file totals and the bank statement. Tax liabilities against tax payments and filings. Third-party deductions against remittances. Payroll and accounting sign off monthly, and suspense costing is investigated."

Tip: Mention suspense costing. It's where missing cost centers hide.`,

'How do you handle employee data for Fusion Expenses and Procurement approvals?':
`**Why they ask:** HCM data quality affects finance.

**Answer:**
"Expenses needs the assignment cost center for the default expense account, the manager, and a bank account for reimbursement, or payroll. Requisitions need the requester's BU and default charge account, and approvals use the supervisor hierarchy. So I make sure the default expense account on assignments is populated, through HDL or rules. And terminated managers or missing supervisors break approvals, so I monitor them with reports."

Tip: Mention monitoring missing supervisors. It prevents stuck approvals.`,

'What are key risks in HCM implementations?':
`**Why they ask:** risk awareness.

**Answer:**
"Payroll accuracy, mitigated with multiple parallel runs. Data quality in history, managers and cost centers. Security misconfiguration exposing sensitive data. Change management, especially manager self-service adoption. Integrations with benefits carriers, payroll vendors and IAM. And works council or legal approvals in some countries."

Tip: Pair each risk with a mitigation if asked. It shows you've managed them.`,

'How do you set up succession planning?':
`**Why they ask:** a talent configuration question.

**Answer:**
"I identify critical positions or roles. Talent reviews assess performance and potential on the 9-box, plus risk of loss and impact of loss. Succession plans list candidates with readiness levels. Successors get development plans with learning and assignments. Only HR and leadership see succession data. And reports show bench strength."

Tip: Mention securing succession data. It's highly sensitive.`,

'What is the difference between Fusion Global Payroll and a payroll interface approach?':
`**Why they ask:** a key payroll strategy decision.

**Answer:**
"With Global Payroll, Fusion calculates pay for supported countries, like the US, UK, Canada and India, and Oracle updates the statutory rules. With a payroll interface, Fusion is the HR source and a third party, like ADP or a local bureau, calculates pay; Fusion sends changes through extracts and may receive results back. I decide by country support, complexity, cost and the in-house payroll expertise."

Tip: Mention in-house expertise. Running payroll in-house needs skilled people.`,

};
