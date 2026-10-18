// Rewritten Oracle General Ledger answers, part 3: GL basics, close, intercompany, accounting design (Why they ask → Answer → Tip).
module.exports = {

'Walk me through the life of a manual journal entry in Fusion GL.':
`**Why they ask:** a basic GL question that shows whether you know the controls along the way.

**Answer:**
"It starts with creating the journal, either on the Create Journal page or by uploading the ADFdi spreadsheet, with batch, journal, ledger, period, category and lines. As lines are entered, cross-validation rules check every account combination and reject invalid ones. If journal approval is on for that source, it routes through the BPM rules, usually by amount. Once approved, it's posted, either by hand or by AutoPost, and posting updates the balances and the cube. If it's an accrual, it's set to reverse automatically in the next period."

Tip: Mention the spreadsheet upload. Most finance teams enter journals that way, and it shows you've worked with them.`,

'What are cross-validation rules?':
`**Why they ask:** a basic COA control that every GL consultant sets up.

**Answer:**
"Cross-validation rules stop invalid combinations of segment values from being created. For example, 'balance sheet accounts, 1000 to 3999, must use cost center 000'. Each rule has a condition filter, which says when it applies, a validation filter, which says what's allowed, and an error message the user sees. One thing to know: they only stop new combinations. Combinations that already exist have to be disabled separately. So I set them up before transactions start, and test them with real account strings."

Tip: Make the point that they only block new combinations. It's the follow-up question.`,

'How do you open and close GL periods, and what statuses can a period have?':
`**Why they ask:** a basic close question.

**Answer:**
"The statuses are Never Opened, Future Enterable, Open, Closed and Permanently Closed. I open the next period in Manage Accounting Periods or with the Open Period process. In a Future Enterable period, journals can be entered but not posted. I close the period once all subledgers have transferred and all journals are posted and reconciled. A Closed period can be reopened; Permanently Closed can't, so I only use it after audit sign-off. Subledgers like AP, AR and Assets have their own periods, and they close before GL."

Tip: Explain when you'd use Permanently Closed. It shows care with irreversible steps.`,

'What is the difference between a primary ledger, a secondary ledger and a reporting currency?':
`**Why they ask:** a core design question.

**Answer:**
"The primary ledger is the main book of record for a legal entity. A secondary ledger is a parallel ledger that can differ in chart of accounts, calendar, currency or accounting method. It's used for local GAAP vs IFRS or US GAAP, or for a different statutory chart, and it can be kept at subledger, journal or balance level. A reporting currency has the same chart, calendar and method as the primary; only the currency is different. So my rule of thumb: if only the currency differs, it's a reporting currency; if anything else differs, it's a secondary ledger."

Tip: Give the rule of thumb. It answers the question in one sentence.`,

'Explain revaluation and translation in GL.':
`**Why they ask:** people often confuse the two.

**Answer:**
"Revaluation adjusts foreign-currency balances to the period-end rate. For example, a EUR bank account in a USD ledger is revalued, and the difference goes to unrealized gain or loss, usually reversed next period. Translation converts the whole ledger's balances into another currency for reporting or consolidation: balance sheet at the period-end rate, P&L at the average rate, equity at historical rates, and the difference goes to CTA. Revaluation comes first, after all foreign-currency transactions are posted, then translation."

Tip: State the order: revalue, then translate. It's what they want to hear.`,

'How would you set up a recurring allocation, for example rent allocated by headcount?':
`**Why they ask:** a practical allocation question.

**Answer:**
"In Fusion I'd build it as a Calculation Manager allocation rule. The source, or pool, is the rent account balance for the period. The basis is a statistical account holding headcount by cost center, loaded every month from HR. The target is rent expense on each receiving cost center, in proportion to headcount. The offset is a credit back to the source cost center. It generates each month, on a schedule or by hand, and someone reviews it before posting. In EBS the equivalent is MassAllocations. I test it first with a small set of numbers I can check by hand."

Tip: Mention testing with numbers you can check by hand. It shows care with allocations.`,

'What steps would you follow to close the Payables period?':
`**Why they ask:** a practical close question for finance consultants.

**Answer:**
"I make sure all invoices for the period are entered and validated, and holds that matter are resolved. I finish the period's payment runs. I run Create Accounting, transfer to GL, and clear any accounting errors. I review the unaccounted transactions and exception reports. If there are transactions that can't be accounted in time, I sweep them to the next period where that's appropriate. Then I close the Payables period, open the next one, and reconcile the AP trial balance to GL."

Tip: Mention the sweep option. It shows you've closed a period under pressure.`,

'What is the typical order of closing subledgers before GL?':
`**Why they ask:** close sequence errors cause rework.

**Answer:**
"Purchasing and receiving first, so receipts and accruals are complete. Then Payables, with invoices and payments accounted. Then Receivables. Then Cash Management, with bank statements reconciled. Then Assets, which needs Payables done first so additions come through, followed by depreciation. Then Projects, Inventory and Cost if they're used. GL closes last: post, revalue, translate, consolidate and close."

Tip: Say why Assets follows Payables. Dependencies are the point of the question.`,

'What are journal categories and sources used for?':
`**Why they ask:** sources and categories drive approvals, reporting and automation.

**Answer:**
"The journal source says where a journal came from, like Manual, Payables, Receivables, Spreadsheet, or a custom source for an integration. The category says what kind of entry it is, like Accrual, Adjustment, Purchase Invoices or Receipts. They're used in journal approval rules, in reporting and audit, for example showing all manual journals, in reversal options, in AutoPost criteria and in document sequencing."

Tip: Recommend a custom source per integration. It makes audit and reconciliation much easier.`,

'What is the difference between Smart View and Financial Reporting Studio?':
`**Why they ask:** to see if you know which reporting tool to suggest.

**Answer:**
"Smart View is an Excel add-in that queries the GL balances cube. It's great for ad-hoc analysis, pivoting and building Excel reports with live data and drill-down. Financial Reporting Studio and the Financial Reporting Center produce formatted, governed reports like the P&L and balance sheet for many users, though Oracle is moving those toward Narrative Reporting and Smart View-based reports. Both read the same Essbase cube, which updates when journals post."

Tip: Mention Oracle's move away from FR Studio. It shows you're current.`,

'What is the difference between a journal batch, a journal and a journal line?':
`**Why they ask:** a basic GL structure question.

**Answer:**
"A batch is a group of journals posted together, like one month's accruals. A journal belongs to one ledger, period, category and currency, and must balance. A line is one debit or credit to an account combination, with a description and amount. Approval and posting usually happen at batch level, and reversals can be done per journal."

Tip: Keep it short and clear. It's a basic question, so a crisp answer is best.`,

'How do recurring journals work?':
`**Why they ask:** recurring journals save time every month.

**Answer:**
"They're for entries that repeat each period with the same or a calculated amount, like rent, amortization or standard accruals. In Fusion I build them with Calculation Manager formula rules or the recurring journal option, then generate and post them each period. Amounts can be fixed or calculated from balances, for example one-twelfth of a prepaid account. I schedule generation right after the period opens so they're never forgotten."

Tip: Mention scheduling after period open. It's the practical detail.`,

'Walk me through how you would design the enterprise structure for a multi-country Fusion Financials implementation.':
`**Why they ask:** a senior design question. They want a method and building blocks.

**Answer:**
"I start from how the business is organized legally, managerially and for tax, not from the org chart. The building blocks are legal entities, one per registered company; primary ledgers, one per unique combination of the four Cs, where countries that share all four can share a ledger with a balancing value per entity; business units where transactions happen, with service-provider relationships if a shared services center processes for many BUs; reference data sets to share setups like payment terms across BUs; and secondary or reporting currency ledgers for other GAAPs or group currency. My approach is workshops with finance, tax and legal to confirm entities, currencies and statutory needs by country, then design the chart for group consolidation first, with local needs handled by secondary ledgers or mapping. And I prototype in a sandbox with real transactions and a close before locking it in, because this is the hardest thing to change later."

Tip: Add a real example: how many ledgers, and why you chose secondary ledgers or reporting currencies.`,

'How do you design a chart of accounts for a global company, and what mistakes have you seen?':
`**Why they ask:** COA design shapes reporting for years.

**Answer:**
"A good chart answers reporting questions with segments, not with thousands of natural accounts. Typical segments are company for balancing, cost center, natural account, intercompany, product or line of business, and a future segment, each with a clear owner. Segments should be independent, one meaning each, with no codes that pack two things together. I leave room in number ranges, use hierarchies for roll-ups instead of summary values, and set up cross-validation rules early. The mistakes I see are copying the legacy chart one-for-one with all its workarounds, using cost centers to track projects or customers, having too many segments, and leaving out the intercompany segment, which makes eliminations painful."

Tip: Give a before-and-after, like cutting 4,000 natural accounts to 900 by moving detail into segments and hierarchies.`,

'How do you run and improve the month-end close in Oracle Financials?':
`**Why they ask:** every finance leader wants a faster, cleaner close.

**Answer:**
"I run the close as a sequenced checklist with owners, cut-off times and reconciliations. Procurement and AP first: receipts, accruals, invoices accounted, AP closed. Then AR, then Assets with depreciation, then Cash Management reconciliations. GL last: post journals, revalue and translate, intercompany and allocations, reconcile subledgers to GL, close and consolidate. To improve it, I make status visible with the Close Monitor and task lists, move work earlier with daily accounting and continuous reconciliation, and automate accruals. On one program we went from 8 working days to 5 by automating accruals and bank reconciliation and moving intercompany settlement to weekly."

Tip: Lead with the number, days to close before and after, then explain what you changed.`,

'A CFO wants to shorten the close from 10 days to 5. What would you do?':
`**Why they ask:** a business-outcome question. They want a diagnosis first, then levers.

**Answer:**
"I'd start by mapping the current close: every task, owner, dependency and duration, to find the critical path. Then I'd pull the levers that shorten that path: continuous accounting with daily Create Accounting, daily bank reconciliation and weekly intercompany settlement; automated accruals, recurring journals and allocations; earlier AP and AR cut-offs with estimates for the last days; automatic reconciliation of balance sheet accounts; a standard close checklist in a task tool so everyone sees status; and fixing data problems upstream so close days aren't spent on corrections. Then I'd measure days to close and post-close adjustments every month and keep improving."

Tip: Say "find the critical path first". Cutting tasks that aren't on it won't shorten the close.`,

'What is a third-party control account in SLA?':
`**Why they ask:** a key control that keeps subledger and GL in sync.

**Answer:**
"It's a natural account flagged so that only subledger transactions with a supplier or customer can post to it, like the AP liability or AR receivable account. That stops manual GL journals hitting those accounts, makes third-party balance reports available from SLA, and keeps the subledger-to-GL reconciliation clean. It's set on the natural account value, with Third Party Control Account set to Supplier or Customer."

Tip: Tie it to reconciliation. That's why controllers want it.`,

'How do you handle suspense accounts and journal imports from external systems?':
`**Why they ask:** integrations are a big source of GL errors.

**Answer:**
"Journals from external systems come in through FBDI with the journal import template, GL REST, or OIC. Each system gets its own journal source for traceability, approval and reporting. Suspense posting can be turned on to accept unbalanced journals, but I'd keep it off and fix imbalances at the source. I validate account combinations before sending, and use dynamic combination creation carefully. Then I monitor import errors every day and reconcile each source system to GL by source."

Tip: Recommend keeping suspense off. It shows a control mindset.`,

'What is average daily balancing and when is it used?':
`**Why they ask:** a specialist question, mostly for banking clients.

**Answer:**
"Average balance processing keeps daily balances and calculates averages: period to date, quarter to date and year to date. Banks and other financial institutions need it for regulatory reporting and interest calculations. It's enabled on the ledger, and journals then carry effective dates. Fusion supports average daily balances in GL with its own reporting. I'd mention it only if the client is in financial services."

Tip: If you've worked with a bank or insurer, say so here. It's a good place to show breadth.`,

'How would you use Fusion features to automate intercompany and close tasks?':
`**Why they ask:** to see if you use what's in the product before building custom tools.

**Answer:**
"For intercompany: automatic balancing rules, intercompany transactions with automatic invoicing, and the reconciliation reports. For close: allocations and recurring journals in Calculation Manager on a schedule, automatic reversal of accruals, AutoPost criteria, and scheduled revaluation and translation. The Close Monitor gives status, and where available, AI agents give close insights. Together these take a lot of manual steps out of the close."

Tip: Name what you'd schedule. Scheduling is where most of the time savings come from.`,

'How do you configure journal approval in Fusion GL?':
`**Why they ask:** journal approval is a key financial control.

**Answer:**
"I enable journal approval on the ledger and on the journal sources that need it, like Manual and Spreadsheet. The rules are set in BPM through Manage Journal Approval Rules: by journal amount, for example over $50,000 goes to the controller; by ledger or category; and by supervisor hierarchy or approval groups. I test the edge cases: amounts exactly at the threshold, journals across ledgers, and self-approval prevention. Subledger journals usually don't need approval, because they're controlled upstream."

Tip: Mention testing at the threshold amount. It's the case that usually breaks.`,

'What is AutoPost and when would you use it?':
`**Why they ask:** AutoPost keeps GL current without manual effort.

**Answer:**
"AutoPost automatically posts journals that match criteria sets, by ledger, source, category, period and priority. I use it for subledger journals from Payables, Receivables and Assets, and for trusted integrations, so finance doesn't post them by hand. It runs on a schedule. I leave out sources that need review, like manual journals. Combined with Create Accounting's transfer and post options, GL stays current every day."

Tip: Say which sources you'd exclude. That's the control part of the answer.`,

'How do segment value security rules work?':
`**Why they ask:** security design affects users and performance.

**Answer:**
"Segment value security limits which values of a segment a user can see or use, for example a regional accountant can only use cost centers in their region. I enable security on the value set, create data security policies with the value conditions, and grant them through roles in the Security Console. It applies to entry, inquiry and reporting, and works alongside data access sets, which control ledger and balancing segment access. I'm careful with it, because too many rules slow things down and confuse users."

Tip: Mention the performance cost. It shows you've seen it go wrong.`,

'What is a data access set?':
`**Why they ask:** a basic GL security question.

**Answer:**
"A data access set controls which ledgers or ledger sets, and which primary balancing segment values, a user can access in GL, and whether it's read-only or read and write. It can give full ledger access or only specific values, like companies 101 to 110. It's assigned to users with their GL roles through Manage Data Access for Users. With a ledger set, one data access set can cover many ledgers that share a chart and calendar."

Tip: Give the example of a company range. It makes the answer concrete.`,

'How does Fusion Intercompany work?':
`**Why they ask:** intercompany is complex, and Fusion has two parts that people confuse.

**Answer:**
"There are two parts. Intercompany balancing is automatic: when a journal crosses balancing values, GL or SLA creates due-to and due-from lines based on the intercompany balancing rules. Intercompany transactions use the Intercompany module: one entity creates a transaction, like a management fee, the partner approves it, and it creates journals in both ledgers and, if needed, AR and AP invoices to settle it. The setup includes intercompany organizations, transaction types, receivables and payables assignments, and the intercompany reconciliation report."

Tip: Separate the two parts clearly. It's what the question is testing.`,

'How do you reconcile intercompany balances at month end?':
`**Why they ask:** intercompany differences delay consolidation.

**Answer:**
"I run the Intercompany Reconciliation report, which compares due-to and due-from between each pair of entities. Then I investigate the differences: timing, where one side booked in the next period; FX rate differences; missing transactions; and manual journals with the wrong intercompany segment. Having an intercompany segment in the chart makes it possible to report balances by trading partner. I agree a cut-off date and a settlement process, usually netting. Eliminations happen in consolidation, in FCCS or with GL elimination rules."

Tip: List the causes in order of how often you see them. Timing is usually first.`,

'What is budgetary control and encumbrance accounting?':
`**Why they ask:** important in public sector, higher education and some corporates.

**Answer:**
"Budgetary control checks spending against budgets in real time. Requisitions, POs and invoices are stopped if they go over the available funds with absolute control, or just warned with advisory control. Encumbrance reserves the funds as spending moves along: a requisition encumbrance, then a PO encumbrance, then the actual on the invoice, with each step relieving the one before. Setup includes control budgets, budgetary control rules, control levels by segment, and loading the budgets. A funds check only validates; a funds reserve actually uses up the funds."

Tip: Explain funds check vs funds reserve. It's the detail that proves hands-on work.`,

'How do you use the Close Monitor and close tasks in Fusion?':
`**Why they ask:** close visibility is what controllers want.

**Answer:**
"The Close Monitor shows period status across subledgers and ledgers in one view, so you can see which are open, closed or pending, and drill into each. Many companies use the task manager in EPM Financial Consolidation and Close, or a tool like BlackLine, for the close checklist, with owners, dependencies and due dates. I set the checklist up to follow the real close sequence, with evidence attached for audit."

Tip: Mention attaching evidence. Auditors ask for it every quarter.`,

'How do you handle period-end accruals for received but not invoiced (RNI) goods?':
`**Why they ask:** RNI accruals are a common audit area.

**Answer:**
"There are two methods. Accrue at receipt, common for inventory and many expense items, books the accrual when goods are received and clears it when the invoice is matched. Period-end accrual, used for some expense items, runs the accrual process at period end, and the entry reverses next period. Either way, I review the accrual reconciliation report for old or wrong accruals and write them off with approval. Finance decides which method applies by item and destination type."

Tip: Mention reviewing old accruals. Stale RNI balances are a classic audit finding.`,

'How are exchange rates managed and used in Oracle?':
`**Why they ask:** missing rates block accounting.

**Answer:**
"There are rate types, like Corporate, Spot and User. Daily rates are loaded by hand, by spreadsheet, or through an integration from a provider like Reuters, Bloomberg or a bank. Transactions use the rate for their date and rate type, and User rate types let someone type a rate. Revaluation uses period-end rates, and translation uses period-end, average and historical rates. The key operational point is that rates must be loaded before processing, because a missing rate stops accounting."

Tip: End with the missing-rate point. It's the problem everyone has hit once.`,

'How do realized gains and losses arise in AP and AR?':
`**Why they ask:** a basic multi-currency accounting question.

**Answer:**
"A realized gain or loss happens when a foreign-currency invoice is paid or receipted at a different rate than the invoice rate. For example, a EUR 1,000 supplier invoice booked at 1.10 is $1,100. If we pay it when the rate is 1.12, it costs $1,120, so that's a $20 realized loss. SLA books it to the realized gain or loss account at payment or receipt. Unrealized gains and losses are different: they come from revaluing open balances at period end."

Tip: Work the example out loud. It makes the answer stick.`,

'How do you design account hierarchies for reporting?':
`**Why they ask:** hierarchies drive every GL report.

**Answer:**
"I build trees for the natural account, assets, liabilities, equity, revenue and expense with sub-levels, and for cost centers, department to division to company. They follow the financial statement lines and management reporting. Tree versions are date-effective; I audit and flatten them, then publish to the Essbase cube. The same hierarchies are used in allocations, Financial Reporting and Smart View. And changes are governed: someone owns the tree, and changes go through change control."

Tip: Mention publishing to the cube. Forgetting it is why reports don't roll up.`,

'What is a ledger set and why use one?':
`**Why they ask:** a basic question about managing many ledgers.

**Answer:**
"A ledger set groups ledgers that share the same chart of accounts and calendar. With it I can open and close periods for many ledgers at once, run revaluation, translation, allocations and reports across them, and give access with one data access set. The ledgers can have different currencies. It's very useful for companies with many country ledgers."

Tip: Give a scale example, like closing 20 European ledgers in one step.`,

'How do you handle a journal posted to the wrong period?':
`**Why they ask:** a common real-world mistake.

**Answer:**
"If the wrong period is still open, I reverse the journal in that same period and re-enter it in the right one. If the wrong period is closed, I reverse it in the current open period, or reopen if policy allows, and post it correctly, with documentation for audit. Then I check whether allocations, revaluation or reports already used the wrong balance. And I fix the cause, often the default period on a spreadsheet upload, or a training gap."

Tip: Mention checking downstream effects like allocations. It shows thoroughness.`,

'Explain how you would design accounting for a complex revenue arrangement with variable consideration.':
`**Why they ask:** variable consideration is one of the hardest revenue topics.

**Answer:**
"Under ASC 606 and IFRS 15, variable consideration, like rebates, usage fees or penalties, is estimated using expected value or most likely amount, and constrained so a large reversal isn't likely later. In Oracle, Revenue Management handles allocation and recognition, and variable consideration goes in as estimates that adjust the transaction price, with true-ups as actuals come in. Rebates and chargebacks are handled through channel revenue management or accruals via SLA or GL. The accounting covers contract assets and liabilities, revenue and accrued rebates. Estimates are reviewed every quarter with a documented method, and disclosures cover remaining performance obligations and disaggregation."

Tip: Explain the constraint. It's the part of 606 interviewers test.`,

'How do you handle Pillar Two / global minimum tax data requirements in the ERP landscape?':
`**Why they ask:** Pillar Two is a current topic, and tax depends on ERP data.

**Answer:**
"Pillar Two, the 15% global minimum tax, needs data by jurisdiction: GloBE income, covered taxes and deferred taxes for each constituent entity. The ERP's job is a clean legal entity structure, entity-level trial balances, account mapping to the GloBE adjustments, and intercompany detail. The calculation usually happens in Tax Reporting in EPM or a specialist tax tool fed from GL and FCCS. I'd design data lineage and controls, because tax data is audited too, and work with the tax team early, since changes to the chart or entity mapping may be needed."

Tip: Say "work with tax early". Late changes to entity mapping are expensive.`,

'How would you design accounting for intercompany loans and interest across entities?':
`**Why they ask:** a treasury and accounting design question.

**Answer:**
"Treasury owns the loan agreements, in a treasury system or in Fusion with a defined process. Interest is accrued monthly by agreement, using the rate and day-count, with journals in both entities, interest income for the lender and expense for the borrower, using the intercompany segment. Foreign-currency loans are revalued, and some may qualify as a net investment. Cross-border interest may need withholding tax. Settlement is by netting or cash. Reconciliation and elimination happen in FCCS. And transfer pricing documentation supports the arm's-length rates."

Tip: Mention withholding tax and transfer pricing. They're where cross-border loans get complicated.`,

'How would you support IFRS 17 or similar complex accounting standards with Oracle?':
`**Why they ask:** a specialist question that shows whether you can design for complex standards.

**Answer:**
"For IFRS 17, the calculations, like the contractual service margin, risk adjustment and cohorts, usually run in actuarial or specialist engines. Fusion Accounting Hub then turns the calculation outputs into accounting under IFRS 17 and local GAAP, with multiple methods and ledgers. I'd design data lineage and reconciliation from policy systems to the engine to Accounting Hub to GL. Detailed dimensions, like portfolio and cohort, go in supporting references rather than COA segments. Disclosures come from a data warehouse. The same pattern works for any complex standard: a specialist calculation, then Accounting Hub, then GL."

Tip: End with the general pattern. It shows you can apply it beyond insurance.`,

'What is your approach to multi-ledger, multi-currency design for treasury-heavy companies?':
`**Why they ask:** a senior design question for global companies.

**Answer:**
"First, the functional currency per entity, decided with accounting under ASC 830 or IAS 21. Reporting currencies where the group needs daily balances in its currency. Revaluation rules by account range, monetary items only, with gain and loss accounts by entity. Hedge accounting runs in the treasury system, with journals to GL, including cash flow hedge reserves in OCI. Translation happens in FCCS with CTA. Daily rates come from a market data provider, with controls on the rates."

Tip: Say "functional currency first, decided with accounting". The design depends on it.`,

'How do you approach a request to restate prior-period accounting in Oracle?':
`**Why they ask:** restatements are sensitive. They want a careful process.

**Answer:**
"First I confirm the accounting decision with finance and audit, and which periods are affected. The usual option is adjusting entries in the current period; reopening prior periods is possible only if allowed and they haven't been reported. For subledger errors, I correct the source and re-account where possible; otherwise manual journals with clear references. Then I rerun revaluation, translation and consolidation for the affected periods. Everything is documented for audit, and I add a control so it doesn't happen again."

Tip: Start with "confirm the accounting decision first". The system work follows the decision.`,

'How would you design accounting controls around AI-assisted close tasks?':
`**Why they ask:** AI is entering the close, and auditors will ask how it's controlled.

**Answer:**
"AI can prepare accrual proposals, reconciliation match suggestions and variance explanations. People still review and approve, and anything posted goes through normal journal approval. The AI's outputs and traces are attached to the close task as evidence. Review levels are set by materiality thresholds. And internal audit tests the AI-assisted controls like any other control. The principle is that AI prepares and people decide."

Tip: Close with "AI prepares, people decide". It's the line controllers want to hear.`,

};
