// Part 5: topics from Hari's Nov 25 voice session, written from a construction company's point of view.
QB['ora-mod-ppm'] = (QB['ora-mod-ppm'] || []).concat([
['PPM Basics', 'A construction job has just been created in Fusion. Walk me through what happens to it from setup to close-out.', `**Why they ask:** shows you can see the whole life of a job, not just one module.

**Answer:**
"The job is created from a template with tasks, the owning organization, dates and chargeable, billable or capitalizable flags, and a budget is approved in Project Control. Then people charge to it from their own modules: subcontractor invoices in Payables, POs and receipts, material issues, time and expenses. Requisitions and POs show as commitments. Actual costs land as unprocessed costs, and Import Costs turns them into expenditure items. Projects applies labor rates and burden and accounts only what it owns. On billable jobs, Project Billing recognizes revenue, usually percent complete, and invoices go to Receivables with retention held back. Each month project managers update forecasts and Finance reconciles to GL and reviews the WIP schedule. At the end, final billing, retention release and close-out."

Tip: Summarize it in one line: create, budget, collect cost, account, bill and recognize, control monthly, close.`, 'B', 'M', null, {t:1, f:['Which step most often causes month-end problems on construction jobs?', 'Costs not imported before revenue runs, usually from import exceptions or late subcontractor invoices, which understates percent-complete revenue.']}],
['Capital Projects', 'Is a capital asset built in Projects or in Fixed Assets, and which module owns the asset categories and books?', `**Why they ask:** a common point of confusion between Projects and FA.

**Answer:**
"It's built in Projects and flows one way to Fixed Assets. The capital project collects cost as CIP. A project asset is defined in Projects, but its book, category, location, asset key and depreciation account are picked from Fixed Assets lists — FA owns them, Projects doesn't keep its own copy. The placed-in-service date is entered in Projects; Generate Asset Lines groups the costs; Transfer to Fixed Assets sends them to Mass Additions; FA posts the asset, depreciation starts and CIP is relieved. A late invoice after capitalization flows through the same steps as an adjustment to the existing asset."

Tip: FA owns what the asset is; Projects owns how cost builds up and when it's sent.`, 'D', 'S', null, {t:1, f:['What capital setup does Projects own?', 'Capitalizable project types, capitalizable flags on tasks and costs, asset line grouping rules, and optionally capitalized interest.']}],
['Labor Costing', 'How are labor cost rates set up when my rate differs from my manager\'s, and the company has 200 job roles?', `**Why they ask:** tests real setup knowledge of labor costing.

**Answer:**
"In Projects setup, you create a labor cost rate schedule, either person-based, where each person has a rate, or job-based, where everyone in a job like Superintendent or Project Engineer shares a rate. One schedule holds all 200 jobs as lines, each with an effective date. You only add schedules when rates differ by country, currency or business unit. A labor costing rule says whether to use person or job rates, and it's assigned with the schedule to the employee's organization by date. Hours are costed at the rate in effect on the work date, using the job on the person's HCM assignment. Rate changes add new dated lines, so old time keeps old rates; a wrong rate can be fixed by re-costing."

Tip: Mention loading the 200 lines by spreadsheet, not by hand.`, 'D', 'S', null, {t:1, f:['Why do many clients prefer job rates over person rates?', 'Less maintenance and no individual pay visible on projects; person rates suit firms that bill or cost each person differently.']}],
['Labor Costing', 'How is actual payroll cost brought into projects instead of standard rates?', `**Why they ask:** construction firms often want true labor cost on jobs.

**Answer:**
"With Oracle Payroll, Labor Cost Management takes the actual payroll cost and distributes it across projects using time cards or a labor schedule, like 60% on one job and 40% on another, then sends it to Project Costing. With a third-party payroll such as ADP, payroll cost is exported, mapped to project and task, and loaded through FBDI or an OIC integration each pay period. A common pattern is costing hours at standard rates during the month, then truing up to actual payroll, with the difference adjusted to the jobs or kept as a variance."

Tip: Mention the standard-then-true-up pattern.`, 'D', 'S', null, {f:['What is the downside of actual payroll on projects?', 'Individual pay can become visible to project managers, and costs arrive only after payroll runs, so jobs look under-costed mid-month.']}],
['Labor Costing', 'The client doesn\'t use Oracle Time and Labor. How does labor reach projects?', `**Why they ask:** many construction firms use field timekeeping apps or UKG.

**Answer:**
"Time and Labor is part of HCM and a separate license. Without it, approved hours come from the client's system — UKG, Workday or a field timekeeping app — each week or pay period. The file carries person, project, task, expenditure type, date and hours, and is loaded by spreadsheet for small volumes or FBDI or OIC with the REST API for regular loads. It lands as unprocessed costs, Import Costs validates it, and Projects applies the rate schedule just like native time. If the outside system already has the cost, it can be sent with the hours and used as is."

Tip: The Projects side doesn't change; only the source does.`, 'B', 'M', null, {f:['What validations matter most on an external time load?', 'Valid person and assignment, open project and chargeable task, work date inside task dates, and no duplicate loads for the same period.']}],
['Commitments', 'Are commitments charged costs? How do POs, receipts and invoices become actual cost on a job?', `**Why they ask:** distinguishes commitment from actual and tests receipt accrual knowledge.

**Answer:**
"Commitments aren't charged costs; there's no accounting and nothing reaches GL. They show promised spend, so available budget equals budget minus actuals minus commitments. When goods are received or the invoice is matched, the amount moves from commitment to actual, so nothing is counted twice. Inventory items are always accrued at receipt and reach the job when material is issued. Expense items are accrued at receipt or period end by setup; project-heavy clients usually choose receipt so the job sees cost when goods arrive. With budgetary control on, the requisition or PO is checked against the project budget when created."

Tip: Write the formula: budget − actuals − commitments = available.`, 'D', 'M', null, {f:['If an expense PO is accrued at receipt, what does the AP invoice do?', 'It clears the receipt accrual; only the price difference, if any, adds cost.']}],
['Commitments', 'A subcontractor did work this month on a two-way matched PO with no receipt, and the invoice hasn\'t arrived. How does the job get the cost?', `**Why they ask:** a real month-end gap on construction jobs.

**Answer:**
"Nothing is accrued automatically: period-end accrual needs a receipt, and two-way matching has none, so cost appears only when the invoice is accounted. Two fixes. First, a month-end accrual entered in Projects as a miscellaneous cost, reversed next month, so both the job and GL get it — a plain GL journal wouldn't reach the job. Second, and better for construction, require receipts for services, where the superintendent confirms work done or percent complete, so receipt accruals pick up the cost on time and percent-complete revenue is right."

Tip: Tie it to revenue — missing cost understates percent complete.`, 'D', 'S', null, {t:1, f:['Who should confirm the service receipt on a construction job?', 'The superintendent or project manager who sees the work done, often based on the subcontractor\'s progress against the schedule of values.']}],
['Burdening', 'What are fringe benefits and overhead, and how do they become part of a job\'s cost?', `**Why they ask:** checks you understand the business behind burdening.

**Answer:**
"Fringe is what an employee costs beyond wages: health insurance, payroll taxes, the employer's 401(k) match and paid time off. Overhead is the cost of running the place where work happens: rent, utilities, IT, equipment, supervisors and admin. G&A is company-wide functions like finance, HR and executives. These are booked in GL as normal expense. The company divides total fringe by total labor cost to get a rate, say 30%, and burdening adds that to every labor hour, so each job carries its fair share. Only the employer's 401(k) contribution counts; the employee's own savings come out of wages."

Tip: Mention cost-plus and government contracts, where the customer pays burdened cost.`, 'B', 'M', null, {t:1, f:['How often are burden rates reviewed?', 'Usually annually with provisional rates, then adjusted to actual rates at year end, especially on government contracts.']}],
['Burdening', 'Is burden added manually? Walk me through how it is calculated and accounted with an example.', `**Why they ask:** tests whether you know it's automated and how it posts.

**Answer:**
"It's automatic once set up in Projects. The burden structure defines cost bases, for example labor gets fringe and overhead while materials get only a handling charge. The burden schedule holds rates by organization and date. The project type sets the default schedule, and a contract can override it. Example: 10 hours at $100 is $1,000 of labor; fringe 30% and overhead 20% add $500, so the job shows $1,500. The burden appears on the same expenditure item or as separate lines. Projects accounts it: debit project cost, credit overhead absorption. Finance compares overhead absorbed with actual overhead in GL each month."

Tip: Give the numeric example — interviewers remember it.`, 'D', 'S', null, {f:['What does a big gap between absorbed and actual overhead tell you?', 'The burden rates are wrong or labor volume differs from plan, so rates may need adjusting.']}],
['Project Control', 'Are project budgets the same as GL budgets?', `**Why they ask:** a common mix-up.

**Answer:**
"No. Project budgets live in Project Control, by project, task and resource such as labor, material and subcontract, with versions and approval; budgetary control can check requisitions and POs against them. GL budgets are by account and cost center for the ledger, usually loaded from EPM Planning for financial reporting. They are separate; the only link is planning, when a client plans projects in EPM and sends the approved budget to Project Control."

Tip: Say project budget = by job; GL budget = by account and cost center.`, 'B', 'M', null, {f:['Where would a construction company\'s bid estimate go?', 'Into the original project budget version in Project Control, so actuals and forecasts are compared to the bid.']}],
['Construction', 'How are equipment costs charged to construction jobs?', `**Why they ask:** equipment is a major cost in construction.

**Answer:**
"Owned equipment is charged as usage: the crew records hours of each piece of equipment against the job, and Projects costs it with a usage cost rate per hour, like $85 an hour for an excavator. The credit goes to an equipment recovery account that offsets ownership costs like depreciation, fuel and repairs in GL. Rented equipment comes through POs and AP invoices with project details, like any supplier cost."

Tip: Mention recovery versus actual equipment cost — the same idea as burden absorption.`, 'D', 'S', null, {f:['How do you set equipment usage rates?', 'From expected ownership and operating cost divided by expected usage hours, reviewed at least annually.']}],
['Monthly Control', 'From a construction controller\'s point of view, what does the monthly project control cycle look like?', `**Why they ask:** shows you can run the Finance side of a project business.

**Answer:**
"Cut off AP, receipts, material issues and time. Import costs from every source and clear import exceptions. Run burdening. Project managers compare budget, actuals and commitments, then update and approve the forecast, giving estimate to complete and estimate at completion. With costs and forecast final, generate percent-complete revenue and progress invoices with retention, and send them to Receivables. Create accounting and transfer to GL. Finance reconciles Projects to GL, reviews the WIP schedule for over- and under-billing, checks margin fade and books loss provisions. Then close the project period, then GL."

Tip: Stress that costs and forecasts must be final before revenue runs.`, 'D', 'S', null, {t:1, f:['What do you do if a project manager doesn\'t update the forecast?', 'Escalate before revenue runs; a stale forecast means wrong percent complete, so revenue for that job waits or uses the last approved forecast with a review flag.']}]
]);
