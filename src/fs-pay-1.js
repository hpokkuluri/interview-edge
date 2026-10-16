// Payroll Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-pay'] = [
["Role", "What does a payroll manager do?",
`**Why they ask:** scope of responsibility.

**Answer:** Ensures employees are paid accurately and on time while complying with tax and labor laws: manages payroll processing, taxes and filings, deductions and benefits, time and attendance integration, audits and controls, year-end (W-2s), payroll systems, and a payroll team.

Tip: Mention employee count, states/countries and systems.`, 'B', 'E'],

["Process", "Walk through a payroll cycle.",
`**Answer:** Collect inputs (new hires, terminations, changes, time, bonuses, deductions) → validate → calculate gross pay → pre-tax deductions → taxes → post-tax deductions → net pay → preview and audit reports → approve → fund and pay (direct deposit) → post GL journal → remit taxes and deductions → reconcile.

Tip: Controls at each step.`, 'B', 'E'],

["Taxes", "Which payroll taxes do employers handle in the US?",
`**Answer:** Federal income tax withholding, FICA (Social Security 6.2% up to the wage base and Medicare 1.45%, plus 0.9% additional Medicare above $200K withheld from employees), employer FICA match, FUTA, state income tax, SUTA, and local taxes — with filings like Form 941 quarterly and 940 annually.

Tip: Know the main forms.`, 'B', 'M'],

["FLSA", "What does the FLSA require?",
`**Answer:** Federal minimum wage, overtime at 1.5× regular rate for non-exempt employees over 40 hours/week, recordkeeping and child labor rules. Exempt status depends on salary level and duties tests.

Tip: Regular rate includes certain bonuses.`, 'B', 'M'],

["Overtime", "How do nondiscretionary bonuses affect overtime?",
`**Answer:** They must be included in the regular rate, requiring additional overtime pay for the period earned.

**Example:** 45 hours at $20, $90 production bonus → regular rate = ($900 + $90)/45 = $22; overtime premium = 5 × $11 = $55 extra.

Tip: Common compliance issue.`, 'D', 'M'],

["Multi-state", "What challenges come with multi-state payroll?",
`**Answer:** Different state income tax rules, reciprocity agreements, remote worker taxation, local taxes, state unemployment registration, paid leave laws, final pay timing rules, and pay frequency requirements.

Tip: Remote work complexity.`, 'D', 'M'],

["Deductions", "Pre-tax vs post-tax deductions?",
`**Answer:** **Pre-tax** (401(k) traditional, Section 125 health premiums, HSA, FSA) reduce taxable wages (some still subject to FICA, like 401(k)). **Post-tax** (Roth 401(k), garnishments, union dues, some insurance) are taken after taxes.

Tip: 401(k) is FICA taxable.`, 'B', 'M'],

["Garnishments", "How do you handle wage garnishments?",
`**Answer:** Follow court/agency orders, apply federal (CCPA) and state limits, priority rules (child support first), calculate disposable earnings, remit timely, and communicate with employees respectfully.

Tip: Priority and limits.`, 'D', 'M'],

["Controls", "What payroll controls do you implement?",
`**Answer:** Segregation of duties (HR changes vs payroll processing vs approval), pre- and post-payroll audit reports (variance, large payments, new hires, terminations), bank reconciliation, access controls, and change approvals.

Tip: Ghost employee prevention.`, 'B', 'M'],

["Audit Reports", "What do you review before approving payroll?",
`**Answer:** Gross-to-net variance vs prior period, employees with no pay or unusually high pay, new hires and terminations, negative net pays, tax changes, off-cycle checks, and deduction exceptions.

Tip: Variance thresholds.`, 'B', 'E'],

["Year-end", "What are payroll year-end tasks?",
`**Answer:** Reconcile wages and taxes (quarterly 941s vs W-2 totals), verify employee data (SSNs, addresses), taxable fringe benefits, W-2 and W-3 filing, state reconciliations, 1099s if applicable, and set up new-year tax rates and limits.

Tip: Reconciliation.`, 'B', 'M'],

["Fringe Benefits", "How are taxable fringe benefits handled?",
`**Answer:** Add value to wages for taxation — e.g. personal use of company car, group term life over $50K, gift cards, certain relocation payments — and include on W-2.

Tip: GTL over $50K.`, 'D', 'M'],

["GL", "How do payroll journals work?",
`**Answer:** Dr salary/wages expense by cost center, Dr employer tax expense; Cr cash/net pay, Cr withholding liabilities, Cr benefits deductions payable. Reconcile liabilities monthly.

Tip: Liability reconciliations.`, 'B', 'M'],

["Accruals", "How do you calculate payroll accruals at month-end?",
`**Answer:** Accrue wages earned but unpaid (days worked since last pay date × daily payroll cost) plus employer taxes and benefits, reversing next month.

Tip: Days-based calculation.`, 'B', 'E'],

["Systems", "Which payroll systems have you used?",
`**Answer:** ADP (Workforce Now, Vantage), Workday Payroll, UKG, Paylocity, Oracle Payroll, SAP Payroll, Ceridian Dayforce.

Tip: Integration experience.`, 'B', 'E'],

["Implementation", "How do you lead a payroll system implementation?",
`**Answer:** Requirements, configuration (earnings, deductions, taxes), data conversion including YTD balances, integrations (HR, time, GL, benefits), multiple parallel payroll runs reconciling to the penny, training and cutover at a quarter or year start.

Tip: Parallel runs.`, 'D', 'M'],

["Global", "What's different about global payroll?",
`**Answer:** Country-specific tax and social security, statutory reporting, 13th-month pay, data privacy, currency and in-country providers or global payroll platforms (e.g. Deel, ADP Global).

Tip: Local compliance.`, 'D', 'M'],

["Final Pay", "What are final pay considerations?",
`**Answer:** State timing laws (some require immediate payment on termination), PTO payout rules, severance taxation (supplemental wages), and benefits deductions.

Tip: State timing laws.`, 'B', 'M'],

["Supplemental", "How are bonuses taxed?",
`**Answer:** As supplemental wages: flat 22% federal withholding (37% over $1 million) or aggregate method, plus FICA and state rules.

Tip: 22% flat rate.`, 'B', 'M'],

["Errors", "How do you handle a payroll error?",
`**Answer:** Assess impact, correct quickly (off-cycle payment for underpayment), handle overpayments per state laws, communicate transparently, document root cause and fix the process.

Tip: Speed and empathy.`, 'B', 'E'],

["Behavioral", "Tell me about improving payroll accuracy.",
`**Sample answer:** "Errors averaged 1.2% of checks. I introduced pre-payroll variance audits and automated time integration validations. Errors dropped to 0.1% within six months."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about a difficult payroll situation.",
`**Sample answer:** "A bank file failed on payday. I coordinated with the bank to resend, communicated with employees hourly, and arranged emergency payments for affected employees — and added file confirmation checks."

Tip: Calm under pressure.`, 'B', 'M'],

["Behavioral", "How do you keep up with changing regulations?",
`**Answer:** Payroll associations (PayrollOrg), vendor updates, IRS and state notices, legal counsel and newsletters.

Tip: PayrollOrg.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** CPP (Certified Payroll Professional) and FPC (Fundamental Payroll Certification) from PayrollOrg.

Tip: CPP.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Payroll director, global payroll lead, or HR operations leadership.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I run accurate, compliant payroll with strong controls — I cut errors from 1.2% to 0.1% and led clean system implementations."

Tip: Proof.`, 'B', 'E'],

["Time", "How does time and attendance integrate with payroll?",
`**Answer:** Approved time flows with pay codes (regular, overtime, PTO, shift differential) into payroll; validate missing punches and approvals before processing.

Tip: Approval deadlines.`, 'B', 'E'],

["PTO", "How do you handle PTO accruals and payout?",
`**Answer:** Accrual rules by policy and tenure, caps and carryover, state laws (some treat accrued vacation as wages payable at termination) and balance sheet liability.

Tip: State payout laws.`, 'B', 'M'],

["Paid Leave", "How do state paid leave programs affect payroll?",
`**Answer:** States like NJ, NY, CA, WA, MA and others have paid family/medical leave or disability programs funded via payroll contributions with specific rates and wage caps.

Tip: State contributions.`, 'D', 'M'],

["Benefits", "How do you reconcile benefit deductions?",
`**Answer:** Compare payroll deductions to carrier invoices and enrollment records, investigate differences, and correct missed or incorrect deductions.

Tip: Monthly reconciliation.`, 'B', 'M'],

["401k", "What are 401(k) payroll responsibilities?",
`**Answer:** Correct deferrals and employer match, timely remittance (as soon as administratively feasible), annual limits, catch-up contributions, and data feeds to the recordkeeper.

Tip: Timely deposits.`, 'B', 'M'],

["Reporting", "Which payroll reports go to finance and HR?",
`**Answer:** Labor cost by department, overtime trends, headcount and turnover inputs, tax liability reports, and accrual support.

Tip: Overtime trends.`, 'B', 'E'],

["Security", "How do you protect payroll data?",
`**Answer:** Role-based access, MFA, encryption, verified direct deposit change processes (to prevent fraud), and audits.

Tip: Direct deposit fraud.`, 'B', 'M'],

["Fraud", "How do you prevent direct deposit fraud?",
`**Answer:** Require changes through authenticated self-service with MFA, notify employees of changes, verify suspicious requests by phone, and hold first payments to new accounts when risky.

Tip: Phishing targets payroll.`, 'B', 'M'],

["Scenario", "An employee says their paycheck is wrong on payday. What do you do?",
`**Answer:** Listen and gather details, check pay stub vs time and rates, fix quickly with an off-cycle payment if underpaid, explain clearly and document.

Tip: Empathy and speed.`, 'B', 'E'],

["Scenario", "A state tax notice arrives with a penalty. What do you do?",
`**Answer:** Review the notice, reconcile filings and payments, respond by deadline with documentation, request penalty abatement if appropriate, and fix the root cause.

Tip: Respond on time.`, 'B', 'M'],

["Contractors", "Employee vs contractor classification?",
`**Answer:** Based on control, financial relationship and integration — IRS common-law tests, DOL economic reality test and stricter state tests (e.g. ABC test in CA, NJ). Misclassification leads to taxes and penalties.

Tip: ABC test.`, 'D', 'M'],

["Retro Pay", "How do you calculate retro pay?",
`**Answer:** Difference between new and old rate × hours worked during the retro period, including overtime recalculation, taxed as supplemental or regular wages.

Tip: Include overtime.`, 'B', 'M'],

["Off-cycle", "When do you run off-cycle payrolls?",
`**Answer:** For corrections, terminations requiring immediate pay, bonuses and commissions — with the same controls.

Tip: Same controls.`, 'B', 'E'],

["Escheatment", "What is escheatment for payroll?",
`**Answer:** Uncashed paychecks must be reported and remitted to the state as unclaimed property after dormancy periods.

Tip: Unclaimed property.`, 'D', 'M'],

["Team", "How do you manage a payroll team?",
`**Answer:** Clear calendars and checklists, cross-training, backup coverage, quality reviews and development.

Tip: Cross-training.`, 'B', 'E'],

["Automation", "What payroll processes have you automated?",
`**Answer:** Input validations, audit reports, GL journal uploads, reconciliations, and employee self-service for changes.

Tip: Validation automation.`, 'B', 'M'],

["Communication", "How do you communicate payroll changes to employees?",
`**Answer:** Advance notice, clear explanations (e.g. benefit rate changes), FAQs and a support channel.

Tip: Advance notice.`, 'B', 'E'],

["Calendar", "Why is a payroll calendar critical?",
`**Answer:** It aligns input deadlines, processing, approval, funding and tax deadlines across pay groups and holidays.

Tip: Holiday adjustments.`, 'B', 'E']
];
