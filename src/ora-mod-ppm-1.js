// Projects Integration for Finance — what a Finance lead must know about Fusion Project Financial Management.
// Part 1: suite basics, chart of accounts, costing sources and accounting.
QB['ora-mod-ppm'] = (QB['ora-mod-ppm'] || []).concat([
['PPM Basics', 'What is in Oracle Fusion Project Financial Management, and how does it connect to Financials?', `**Why they ask:** a Finance lead on a construction or project client must know the suite even without implementing it.

**Answer:**
"The suite has Project Foundation for project types, templates, expenditure types and rates; Project Costing, which collects every cost by project, task and expenditure type; Project Control for budgets, forecasts and commitments; Project Contracts and Billing for invoices and revenue; and Project Asset Management for capital projects. It connects to Financials at every step: costs come from Payables, Receipt Accounting, Cost Accounting, Expenses and Time; invoices go to Receivables; revenue and burden accounting go to GL through Subledger Accounting; and capital projects send assets to Fixed Assets."

Tip: Draw it as a hub: costs in from AP, receipts, inventory and time; invoices out to AR; accounting to GL; assets to FA.`, 'B', 'M', null, {t:1, f:['Which of these modules create their own accounting?', 'Project Costing accounts burden costs and its own adjustments; Project Billing accounts revenue and invoices. Costs from AP, receipts or inventory are accounted by those modules, not again by Projects.']}],
['Project vs SCM Costing', 'How is Project Costing different from SCM Cost Accounting?', `**Why they ask:** people mix them up, especially in construction and engineer-to-order.

**Answer:**
"They answer different questions. SCM Cost Accounting asks what an item costs: it values inventory in a cost organization and cost book using standard, average or FIFO, and handles receipts, work in process, cost of goods sold and variances. Project Costing asks what a job has cost so far: it collects cost by project, task and expenditure type from any source, adds burden, compares to budget and feeds billing, revenue and capitalization. Where they meet, material issued to a project is valued by Cost Accounting and then transferred to Project Costing. Each cost is accounted once, by the module that created it."

Tip: One line to remember: Cost Accounting values the item; Project Costing totals the job.`, 'B', 'M', null, {t:1, f:['Does Project Costing create revenue?', 'No. Project Costing is cost only. Revenue and invoices come from Project Billing working with Project Contracts; together they give margin by job.']}],
['PPM Basics', 'Explain expenditure item, expenditure type, expenditure category and transaction source.', `**Why they ask:** basic vocabulary every Projects conversation uses.

**Answer:**
"An expenditure item is one cost line on a project: project, task, expenditure type, organization, date, quantity and amount. The expenditure type describes the cost, like Subcontractor, Material or Labor, and usually drives the natural account. Expenditure categories group types, such as Labor or Materials, for budgets and reporting. Revenue categories group types for revenue. The transaction source tells you where the cost came from, such as Payables, Receipt Accounting, Inventory or Time, and whether it was already accounted."

Tip: Mention that expenditure type usually decides the natural account in SLA.`, 'B', 'M', null, {f:['Why does the transaction source matter for accounting?', 'It tells Projects whether the cost is already accounted. Payables or receipt costs are imported as accounted, so Projects does not post them again.']}],
['PPM Basics', 'What do project types and templates control from a Finance point of view?', `**Why they ask:** these settings decide what gets capitalized, billed and burdened.

**Answer:**
"The project type decides whether a project is billable, capitalizable, sponsored or indirect, and whether burdening applies and which burden schedule. Templates hold defaults like organization, tasks, billable and capitalizable flags, and transaction controls that limit which expenditure types can be charged. For Finance this matters because it drives whether costs go to WIP, CIP or expense, whether they can be billed, and how overhead is applied."

Tip: Mention transaction controls. They prevent wrong costs hitting a job.`, 'B', 'M', null, {f:['Who should own project types and templates?', 'Finance and the PMO together, with changes controlled, because they drive accounting, billing and capitalization.']}],
['Chart of Accounts', 'Is a project segment required in the chart of accounts? Why or why not?', `**Why they ask:** a classic design question for project-heavy clients.

**Answer:**
"Usually not. Projects already stores every cost, bill and revenue line by project and task, and you can drill from GL to the project transaction. A project segment means a new value, hierarchy update and cross-validation upkeep for every job, and hundreds of short-lived jobs bloat code combinations and the balances cube. Instead I keep the chart for stable dimensions and carry the project number as an SLA supporting reference. I'd only add a job segment, or job as a second balancing segment, if there's a statutory or joint-venture need for a balance sheet by job; even then, a project type or line-of-business segment is often enough."

Tip: Say the principle: the chart holds what's stable; volatile detail lives in the subledger.`, 'D', 'S', null, {t:1, f:['But cost centers and accounts also run into hundreds. Why is project different?', 'Cost centers and accounts are long-lived and slow to change. Jobs open and close every week, so the upkeep and the growth of code combinations never stop.']}],
['Chart of Accounts', 'Finance wants a trial balance by project. How do you deliver it without a project segment?', `**Why they ask:** the natural follow-up to the segment question.

**Answer:**
"I define Project as an SLA supporting reference, derived from the source transaction, and attach it to journal line rules for Project Costing, Project Billing, Payables, Receivables and Cost Management, with balances maintained. SLA then keeps balances by account and project and carries balance sheet accounts forward. The Supporting Reference Balances and Account Analysis by Supporting Reference reports give a trial balance by project for every project-related account: cost, WIP or CIP, revenue, unbilled, billings in excess, AR, retention and AP. It won't net to zero by job because cash and equity aren't tracked by job; if they need self-balancing books by job, that's when job becomes a balancing segment."

Tip: Clarify first: project P&L plus project balances, or truly self-balancing books by job?`, 'D', 'S', null, {t:1, f:['What about manual GL journals for a project?', 'Plain GL journals bypass SLA, so they can\'t carry the reference. Project adjustments should be entered in Projects as miscellaneous costs, adjustments or transfers so they flow through SLA with the project.']}],
['Costing Sources', 'How does an AP invoice cost reach Project Costing?', `**Why they ask:** the most common integration a Finance lead supports.

**Answer:**
"The invoice distribution carries project, task, expenditure type, expenditure organization and expenditure item date. Payables validates and accounts the invoice, so the GL entry comes from AP. Then Import Costs, with Payables as the source, brings the distributions into Project Costing as expenditure items. Because they arrive already accounted, Projects doesn't post them again; it only adds project detail and any burden on top."

Tip: Say "accounted once, by the module that created it."`, 'B', 'M', null, {t:1, f:['An AP cost is missing from the project. What do you check?', 'Whether the invoice is validated and accounted, whether Import Costs ran for Payables, and the import exceptions for errors like a closed task or a transaction control blocking the expenditure type.']}],
['Costing Sources', 'How do requisitions and purchase orders show up in Projects?', `**Why they ask:** tests the difference between commitments and actuals.

**Answer:**
"Requisitions and POs with project details aren't costs; Projects reads them as commitments, so the project sees what is ordered but not yet spent. That feeds budget versus actual, forecasts and budgetary control. Actual cost comes later: for expense items accrued at receipt, the receipt accrual from Receipt Accounting is imported; for period-end accrual or no-receipt items, the AP invoice is imported; for inventory items, cost moves to the project only when material is issued to the job."

Tip: Commitments plus actuals versus budget is how project managers judge exposure.`, 'D', 'M', null, {f:['Why do commitments matter to Finance?', 'They show future cost already promised, so forecasts and estimate-at-completion are realistic, and budgetary control can stop overspending.']}],
['Costing Sources', 'How do inventory and manufacturing costs reach a project?', `**Why they ask:** key for construction and engineer-to-order clients.

**Answer:**
"Material is received into project-specific inventory, so stock bought for one job isn't used by another. Cost Accounting values the receipt and later the issue to the job or to a project work order at the item's cost. A transfer process then sends those issued costs to Project Costing as expenditure items, already accounted by Cost Accounting. So the project sees material alongside AP, labor and expense costs."

Tip: Mention project-specific inventory. It shows you understand engineer-to-order.`, 'D', 'S', null, {f:['What happens to variances in a standard-cost organization?', 'Variances are accounted in Cost Accounting; whether they flow to the project depends on setup, so agree with Finance how project margin should treat them.']}],
['Costing Sources', 'How are labor costs brought into projects?', `**Why they ask:** labor is often the largest project cost.

**Answer:**
"Time cards in Time and Labor carry project and task. Project Costing imports them and applies a cost rate from labor costing rules or rate schedules, by person, job or organization. Projects then accounts the labor cost, typically debiting project cost and crediting a labor clearing account that is reconciled to payroll. Some clients bring actual payroll cost instead through Payroll costing distribution."

Tip: Mention reconciling labor clearing to payroll.`, 'D', 'M', null, {f:['Why use standard cost rates instead of actual payroll?', 'They are available immediately and stable for billing and forecasting; the difference to payroll stays in a clearing account that Finance reconciles.']}],
['Burdening', 'What is burdening and how is it accounted?', `**Why they ask:** overhead recovery on projects is a Finance topic.

**Answer:**
"Burdening adds indirect costs, such as fringe, overhead and G&A, to direct costs. A burden structure defines cost bases and the burden cost codes; burden schedules hold the rates by organization and date; the project type decides which schedule applies. Projects calculates burden on eligible expenditure items and can show it on the same line or as separate burden lines. Burden costs are accounted by Projects through SLA, typically debiting project cost and crediting an overhead absorption account."

Tip: Mention reconciling overhead absorbed versus actual overhead in GL.`, 'D', 'S', null, {f:['Burdening or GL allocations — when do you use which?', 'Burdening when overhead must sit on the project for billing, revenue or capitalization. GL allocations when overhead is only needed at management-reporting level.']}],
['Costing Sources', 'How do expense reports charge to projects?', `**Why they ask:** a smaller but common flow.

**Answer:**
"Employees enter project and task on the expense report. After approval and audit, the expense report becomes a Payables invoice and is accounted there. Import Costs brings the expense lines into Project Costing, already accounted. Transaction controls stop charges to closed or non-chargeable tasks."

Tip: Keep it short; it follows the AP path.`, 'B', 'M', null, {f:['Where do you stop wrong project charges on expenses?', 'At entry, using transaction controls and task chargeable flags, so errors don\'t reach AP or Projects.']}],
['Adjustments', 'A cost was charged to the wrong project. How do you fix it?', `**Why they ask:** tests whether you keep Projects and GL in sync.

**Answer:**
"I fix it in Projects, not GL: transfer the expenditure item to the right project and task, or adjust it. Projects reverses the original and creates the new item, and SLA creates the matching accounting if the account changes. This keeps the project view, the supporting reference balances and GL consistent. A GL-only journal would correct the account but leave the project wrong."

Tip: The rule: project adjustments go through Projects.`, 'B', 'M', null, {f:['What if the project is already billed?', 'Billing has to be adjusted too, through invoice credit or rebilling, and revenue recalculated. Check with the project accountant before transferring.']}],
['Capital Projects', 'How do capital projects send costs to Fixed Assets?', `**Why they ask:** CIP and capitalization are core Finance.

**Answer:**
"Capital projects collect costs as construction in process. Project assets are defined with category, book and location. When an asset is placed in service, Generate Asset Lines creates lines grouped by asset and Transfer to Fixed Assets sends them to Mass Additions. FA posts them and starts depreciation; CIP is relieved. I reconcile CIP in GL to capital project costs not yet capitalized every close."

Tip: Mention CIP reconciliation — auditors ask for it.`, 'D', 'S', null, {t:1, f:['How do you handle costs that shouldn\'t be capitalized?', 'Mark the expenditure items or tasks as non-capitalizable so they go to expense, or exclude them when generating asset lines.']}],
['SLA', 'How is the account derived for project costs and revenue?', `**Why they ask:** shows you understand the Finance engine under Projects.

**Answer:**
"Subledger Accounting builds the account from project attributes. Account rules use sources like expenditure type to derive the natural account, the project or expenditure organization to derive the cost center, and project type or capitalizable flag to choose expense, WIP or CIP. Mapping sets translate values, for example expenditure type to natural account. Users never type the account on project costs; they pick project, task and expenditure type."

Tip: Give one example: expenditure type Subcontractor maps to the subcontract cost account.`, 'D', 'S', null, {t:1, f:['How would you fill a cost center when project organizations don\'t match cost centers one to one?', 'Use a mapping set from organization to cost center, with a default value and an exception report, maintained as part of organization setup.']}],
['Close', 'How do Projects periods work with GL periods, and what is the close sequence?', `**Why they ask:** close coordination across modules.

**Answer:**
"Projects has accounting periods aligned with GL, and project accounting periods can be more granular if needed. The sequence is: close AP, receipts and Cost Accounting cut-off; import all costs into Projects; run burdening; generate revenue and invoices; create accounting for Projects and transfer to GL; review exceptions and reconcile; then close the project period before GL. Late costs go into the next open period."

Tip: Mention that revenue runs after all costs are in.`, 'D', 'S', null, {f:['Why must all costs be imported before revenue runs?', 'Percent-complete revenue uses cost to date; missing costs would understate revenue for the period.']}]
]);
