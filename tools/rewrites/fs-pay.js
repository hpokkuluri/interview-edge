// Rewritten Finance Specialists — Payroll Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fs-pay-).
module.exports = {

'Walk through a payroll cycle.':
`**Why they ask:** the core process.

**Answer:**
"Collect the inputs — new hires, terminations, changes, time, bonuses and deductions — and validate them. Calculate gross pay, then pre-tax deductions, taxes, post-tax deductions and net pay. Run preview and audit reports, get approval, fund and pay by direct deposit, post the GL journal, remit taxes and deductions, and reconcile. Each step has a control — for example, nothing is approved until the variance report is reviewed."

Tip: Name controls at each step.`,

'Which payroll taxes do employers handle in the US?':
`**Why they ask:** a compliance basic.

**Answer:**
"Federal income tax withholding. FICA — Social Security at 6.2% up to the wage base and Medicare at 1.45%, plus the additional 0.9% Medicare withheld from employees above $200,000 — and the employer's matching FICA. FUTA, state income tax, SUTA, and local taxes. Key filings are Form 941 quarterly and Form 940 annually."

Tip: Know the main forms.`,

'What does the FLSA require?':
`**Why they ask:** wage and hour compliance.

**Answer:**
"The federal minimum wage, overtime at one and a half times the regular rate for non-exempt employees over 40 hours a week, recordkeeping, and child labor rules. Exempt status depends on both a salary level test and a duties test — job title alone doesn't make someone exempt. And the regular rate includes certain bonuses, which trips up a lot of companies."

Tip: The regular rate includes certain bonuses.`,

'How do nondiscretionary bonuses affect overtime?':
`**Why they ask:** a common compliance miss.

**Answer:**
"They must be included in the regular rate, which means extra overtime pay for the period they were earned. Say someone works 45 hours at $20 and earns a $90 production bonus. Total straight-time pay is $900 plus $90 — $990 over 45 hours, so the regular rate is $22. They're owed an extra half-time premium of $11 on the 5 overtime hours — $55 — not just $10 per hour based on the $20 rate."

Tip: A common compliance issue.`,

'What challenges come with multi-state payroll?':
`**Why they ask:** remote work complexity.

**Answer:**
"Different state income tax rules, reciprocity agreements, taxing remote workers, local taxes, state unemployment registration, paid leave laws, final pay timing rules, and pay frequency requirements. Remote work multiplied all of this — one hire in a new state means a new set of registrations and rules."

Tip: Remote work adds complexity.`,

'Pre-tax vs post-tax deductions?':
`**Why they ask:** gross-to-net accuracy.

**Answer:**
"Pre-tax deductions — traditional 401(k), Section 125 health premiums, HSA and FSA — reduce taxable wages. But they're not all the same: 401(k) still counts for FICA, while Section 125 deductions are exempt from FICA too. Post-tax deductions — Roth 401(k), garnishments, union dues, some insurance — come out after taxes."

Tip: 401(k) is still FICA-taxable.`,

'How do you handle wage garnishments?':
`**Why they ask:** legal compliance.

**Answer:**
"Follow the court or agency order, apply the federal CCPA limits and any stricter state limits, follow priority rules — child support comes first — calculate disposable earnings correctly, remit on time, and handle it respectfully with the employee, because it's a sensitive situation."

Tip: Know priority and limits.`,

'What payroll controls do you implement?':
`**Why they ask:** payroll is a fraud target.

**Answer:**
"Segregation of duties — HR makes changes, payroll processes, someone else approves. Pre- and post-payroll audit reports — variances, large payments, new hires, terminations. Bank reconciliation, access controls and approved changes. These together prevent ghost employees and unauthorized pay."

Tip: Ghost employee prevention.`,

'What do you review before approving payroll?':
`**Why they ask:** quality control.

**Answer:**
"The gross-to-net variance against the prior period, employees with no pay or unusually high pay, new hires and terminations, negative net pay, tax changes, off-cycle checks and deduction exceptions. I set variance thresholds — any employee whose pay moved more than, say, 20% gets a look."

Tip: Use variance thresholds.`,

'What are payroll year-end tasks?':
`**Why they ask:** a high-pressure period.

**Answer:**
"Reconcile wages and taxes — the quarterly 941s against W-2 totals — verify employee data like SSNs and addresses, add taxable fringe benefits, file W-2s and the W-3, do state reconciliations and any 1099s, and set up the new year's tax rates and limits."

Tip: Reconciliation is the core.`,

'How are taxable fringe benefits handled?':
`**Why they ask:** a common gap.

**Answer:**
"Their value is added to wages for taxation — personal use of a company car, group term life coverage above $50,000, gift cards, certain relocation payments — and reported on the W-2. Gift cards are always taxable, no matter how small."

Tip: Mention group term life over $50,000.`,

'How do payroll journals work?':
`**Why they ask:** accounting link.

**Answer:**
"Debit salary and wages expense by cost center and debit employer tax expense. Credit cash for net pay, and credit the liabilities for withholdings and benefit deductions. Those liabilities get reconciled every month so nothing sits uncleared."

Tip: Reconcile liabilities monthly.`,

'How do you calculate payroll accruals at month-end?':
`**Why they ask:** close support.

**Answer:**
"Accrue wages earned but not yet paid — days worked since the last pay date times the daily payroll cost — plus employer taxes and benefits, and reverse it next month. If the month ends four working days after the last pay date on a $500,000 biweekly payroll, that's 4/10 of $500,000 — $200,000 plus taxes."

Tip: Use a days-based calculation.`,

'Which payroll systems have you used?':
`**Why they ask:** tool familiarity.

**Answer:**
"ADP Workforce Now and Vantage, Workday Payroll, UKG, Paylocity, Oracle Payroll, SAP Payroll and Ceridian Dayforce. I've also built the integrations between payroll, time, benefits and the GL."

Tip: Highlight integration experience.`,

'How do you lead a payroll system implementation?':
`**Why they ask:** high-risk projects.

**Answer:**
"Gather requirements, configure earnings, deductions and taxes, convert data including year-to-date balances, and build integrations to HR, time, GL and benefits. Then run multiple parallel payrolls, reconciling to the penny against the old system, train people, and cut over at a quarter or year start to keep tax reporting clean."

Tip: Parallel runs are essential.`,

"What's different about global payroll?":
`**Why they ask:** international scope.

**Answer:**
"Country-specific tax and social security, statutory reporting, things like 13th-month pay, strict data privacy rules, currency, and in-country providers or global payroll platforms like Deel or ADP Global. Local compliance drives everything."

Tip: Local compliance.`,

'What are final pay considerations?':
`**Why they ask:** state law risk.

**Answer:**
"State timing laws — some, like California, require immediate payment at termination. PTO payout rules. Severance, taxed as supplemental wages. And benefits deductions. Missing a state final-pay deadline can trigger penalties of a day's wages per day late."

Tip: Know state timing laws.`,

'How are bonuses taxed?':
`**Why they ask:** supplemental wages.

**Answer:**
"As supplemental wages — either a flat 22% federal withholding, or 37% on the amount over $1 million in a year — or the aggregate method. Plus FICA and state rules."

Tip: The 22% flat rate.`,

'How do you handle a payroll error?':
`**Why they ask:** speed and empathy.

**Answer:**
"Assess the impact, and correct quickly — an off-cycle payment for an underpayment, often the same day. Overpayments are recovered following state laws. I communicate transparently, document the root cause and fix the process."

Tip: Speed and empathy.`,

'Tell me about improving payroll accuracy.':
`**Why they ask:** proof.

**Answer:**
"Errors averaged 1.2% of checks. I introduced pre-payroll variance audits and automated validations on the time integration. Errors dropped to 0.1% within six months."

Tip: Measured results.`,

'Tell me about a difficult payroll situation.':
`**Why they ask:** calm under pressure.

**Answer:**
"A bank file failed on payday. I worked with the bank to resend it, updated employees every hour, and arranged emergency payments for anyone who needed money immediately. Afterward, I added a file confirmation check so we'd know within minutes if it failed again."

Tip: Calm under pressure.`,

'How do you keep up with changing regulations?':
`**Why they ask:** constant change.

**Answer:**
"PayrollOrg — formerly the American Payroll Association — vendor updates, IRS and state notices, legal counsel and newsletters."

Tip: PayrollOrg.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"The CPP — Certified Payroll Professional — and the FPC — Fundamental Payroll Certification — from PayrollOrg."

Tip: CPP.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward payroll director, global payroll lead, or HR operations leadership."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I run accurate, compliant payroll with strong controls — I cut errors from 1.2% to 0.1% and led clean system implementations."

Tip: Proof.`,

'How does time and attendance integrate with payroll?':
`**Why they ask:** a common error source.

**Answer:**
"Approved time flows into payroll with pay codes — regular, overtime, PTO, shift differential. Before processing, I validate missing punches and unapproved timecards, with firm approval deadlines for managers."

Tip: Enforce approval deadlines.`,

'How do you handle PTO accruals and payout?':
`**Why they ask:** liability and law.

**Answer:**
"Accrual rules by policy and tenure, caps and carryover, and state laws — some states treat accrued vacation as wages that must be paid at termination. It's also a balance sheet liability that finance needs each month."

Tip: Know state payout laws.`,

'How do state paid leave programs affect payroll?':
`**Why they ask:** growing state programs.

**Answer:**
"States like New Jersey, New York, California, Washington, Massachusetts and others run paid family or medical leave and disability programs funded through payroll contributions, each with its own rates and wage caps, which change every year."

Tip: State contributions change yearly.`,

'How do you reconcile benefit deductions?':
`**Why they ask:** a common leak.

**Answer:**
"Compare payroll deductions to carrier invoices and enrollment records every month, investigate differences, and correct missed or wrong deductions before they pile up."

Tip: Reconcile monthly.`,

'What are 401(k) payroll responsibilities?':
`**Why they ask:** ERISA risk.

**Answer:**
"Correct deferrals and employer match, timely remittance — as soon as administratively feasible, which the DOL treats strictly — annual limits, catch-up contributions, and accurate data feeds to the recordkeeper."

Tip: Deposit on time.`,

'Which payroll reports go to finance and HR?':
`**Why they ask:** business partnering.

**Answer:**
"Labor cost by department, overtime trends, headcount and turnover inputs, tax liability reports, and accrual support. Overtime trends are often an early sign of staffing problems."

Tip: Overtime trends.`,

'How do you protect payroll data?':
`**Why they ask:** sensitive data.

**Answer:**
"Role-based access, MFA, encryption, a verified process for direct deposit changes to prevent fraud, and regular access audits."

Tip: Watch direct deposit fraud.`,

'How do you prevent direct deposit fraud?':
`**Why they ask:** a common attack.

**Answer:**
"Changes only through authenticated self-service with MFA, automatic notification to the employee when a change is made, phone verification of suspicious requests, and holding the first payment to a new account when it looks risky. Phishing emails asking payroll to 'update my bank account' are one of the most common scams."

Tip: Payroll is a phishing target.`,

'An employee says their paycheck is wrong on payday. What do you do?':
`**Why they ask:** service and accuracy.

**Answer:**
"Listen and get the details, then check the pay stub against their time and rate. If they're underpaid, fix it quickly with an off-cycle payment. Explain clearly what happened and document it."

Tip: Empathy and speed.`,

'A state tax notice arrives with a penalty. What do you do?':
`**Why they ask:** compliance handling.

**Answer:**
"Review the notice, reconcile our filings and payments, and respond by the deadline with documentation. Request penalty abatement if it's appropriate, and fix the root cause so it doesn't recur."

Tip: Respond on time.`,

'Employee vs contractor classification?':
`**Why they ask:** misclassification risk.

**Answer:**
"It depends on control, the financial relationship and integration into the business — the IRS common-law test, the DOL economic reality test, and stricter state tests like the ABC test in California and New Jersey. Misclassification leads to back taxes and penalties."

Tip: Know the ABC test.`,

'How do you calculate retro pay?':
`**Why they ask:** a common calculation.

**Answer:**
"The difference between the new rate and the old rate, times hours worked in the retro period — including recalculated overtime at the new rate. It's taxed as supplemental or regular wages."

Tip: Include overtime.`,

'When do you run off-cycle payrolls?':
`**Why they ask:** control discipline.

**Answer:**
"For corrections, terminations that need immediate pay, and bonuses or commissions. They go through the same controls as regular payroll — off-cycle runs are where fraud likes to hide."

Tip: Same controls apply.`,

'What is escheatment for payroll?':
`**Why they ask:** unclaimed property.

**Answer:**
"Uncashed paychecks must be reported and remitted to the state as unclaimed property after the dormancy period, after due-diligence letters to the employee."

Tip: It's unclaimed property.`,

'How do you manage a payroll team?':
`**Why they ask:** leadership.

**Answer:**
"Clear calendars and checklists, cross-training so every task has a backup, quality reviews and development. Payroll can never miss, so no one person can be a single point of failure."

Tip: Cross-training.`,

'What payroll processes have you automated?':
`**Why they ask:** efficiency.

**Answer:**
"Input validations, audit reports, GL journal uploads, reconciliations, and employee self-service for changes. The validations saved the most — they catch errors before payroll runs."

Tip: Validation automation.`,

'How do you communicate payroll changes to employees?':
`**Why they ask:** employee experience.

**Answer:**
"Advance notice, a clear explanation — for example, why a benefit rate is changing — FAQs and a support channel. Surprises on a paycheck generate a flood of tickets."

Tip: Give advance notice.`,

'Why is a payroll calendar critical?':
`**Why they ask:** operational discipline.

**Answer:**
"It aligns input deadlines, processing, approval, funding and tax deposit deadlines across all pay groups, and adjusts for holidays — a bank holiday on payday has to be planned weeks ahead."

Tip: Plan for holidays.`,

'Walk through a gross-to-net calculation.':
`**Why they ask:** a hands-on test.

**Answer:**
"Say gross pay is $4,000 biweekly, with a 6% 401(k) — $240 — and $150 of medical premiums. Federal taxable wages are $3,610, because both are removed. FICA wages are $3,850, because only the Section 125 medical is removed — 401(k) is still subject to FICA. Social Security at 6.2% is $238.70 and Medicare at 1.45% is $55.83. Then federal income tax from the W-4 and tables, state tax, and post-tax deductions. Net pay is gross minus all of these."

Tip: 401(k) still has FICA.`,

'How has the W-4 changed?':
`**Why they ask:** current rules.

**Answer:**
"Since 2020 there are no withholding allowances. Employees enter their filing status, multiple jobs, dependent credits and other adjustments, and payroll uses the methods in IRS Publication 15-T."

Tip: No more allowances.`,

'How are tips and commissions handled?':
`**Why they ask:** special wage types.

**Answer:**
"Reported tips are taxable wages subject to withholding and FICA, and tip credit rules apply in some states. Commissions are supplemental or regular wages depending on how they're paid. Recent federal legislation created new deductions for qualified tips and overtime with new reporting requirements, so I'd check the current rules."

Tip: Stay current on recent changes.`,

'What are federal tax deposit schedules?':
`**Why they ask:** deposit compliance.

**Answer:**
"Employers are monthly or semiweekly depositors based on their lookback period, and deposit through EFTPS. And under the $100,000 next-day rule, if liability reaches $100,000 on any day, it's due the next business day."

Tip: Know the next-day rule.`,

'How do you prepare for a payroll audit?':
`**Why they ask:** audit readiness.

**Answer:**
"Have the documentation ready — registers, tax filings, reconciliations, approvals, change logs and control evidence. Test samples internally first and resolve exceptions before the auditors find them."

Tip: Self-test first.`,

'Payroll needs to support a new state where the company hired remote employees. What do you do?':
`**Why they ask:** practical expansion.

**Answer:**
"Register for state withholding and unemployment accounts, configure state and local tax setup, review the state's wage laws — pay frequency, final pay, paid leave contributions — and update the onboarding forms. All before the first payroll, because registrations can take weeks."

Tip: Register before the first payroll.`,

};
