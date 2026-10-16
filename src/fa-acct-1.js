// Staff / Senior Accountant (GL & Close). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
// Quality bar: why they ask -> full answer with a worked example -> tip.
QB['fa-acct'] = [
["Fundamentals", "Walk me through debits and credits.",
`**Why they ask:** a quick check that your foundation is solid.

**Answer:** Every transaction affects at least two accounts and total debits always equal total credits. The rule follows the accounting equation, Assets = Liabilities + Equity:
- **Debits increase** assets and expenses (and dividends/drawings).
- **Credits increase** liabilities, equity and revenue.
- Each does the opposite to the other side.

**Example:** buying $5,000 of supplies on credit — Dr Supplies 5,000 / Cr Accounts Payable 5,000. Paying the bill later — Dr Accounts Payable 5,000 / Cr Cash 5,000.

Tip: Answer in one breath, then give a real example. Interviewers want speed and confidence here, not a lecture.`, 'B', 'E'],

["Fundamentals", "What is the difference between cash and accrual accounting?",
`**Why they ask:** accruals drive most of the month-end work you'll do.

**Answer:** Cash basis records revenue and expenses when cash moves. Accrual basis records revenue when it's earned and expenses when they're incurred, regardless of when cash is received or paid. US GAAP and IFRS require accrual accounting for most companies because it matches costs to the revenue they generate.

**Example:** a consultant works in December and is paid in January. Accrual basis: December revenue (Dr AR / Cr Revenue). Cash basis: January revenue.

Tip: Mention the matching principle — it shows you understand why accruals exist.`, 'B', 'E'],

["Fundamentals", "How do the three financial statements connect?",
`**Why they ask:** shows whether you see the whole picture, not just your accounts.

**Answer:**
- **Net income** from the income statement flows into **retained earnings** on the balance sheet.
- Net income is also the starting line of the **cash flow statement** (indirect method), adjusted for non-cash items like depreciation and for changes in working capital.
- The **ending cash** on the cash flow statement equals cash on the balance sheet.

**Example:** depreciation of $100 reduces net income by $100, is added back in operating cash flow, and reduces fixed assets on the balance sheet by $100.

Tip: The depreciation example is a favorite follow-up — have it ready.`, 'B', 'E'],

["Fundamentals", "What are the main accounting principles you rely on daily?",
`**Why they ask:** tests whether your judgments are grounded.

**Answer:**
- **Accrual / matching:** expenses recorded in the period of the related revenue.
- **Revenue recognition:** revenue when performance obligations are satisfied.
- **Historical cost:** most assets recorded at what was paid.
- **Consistency:** same methods period to period.
- **Materiality:** small items can be treated practically.
- **Conservatism / prudence:** don't overstate assets or income.

Tip: Tie one principle to a real decision, e.g. "materiality is why we expense items under our $2,500 capitalization threshold."`, 'B', 'E'],

["Journals", "Give an example of an accrued expense entry and its reversal.",
`**Why they ask:** accruals are the core of close work.

**Answer:** At month-end, the company used $3,000 of consulting services but hasn't received the invoice.
- **Month-end:** Dr Consulting expense 3,000 / Cr Accrued liabilities 3,000.
- **First day of next month (auto-reversal):** Dr Accrued liabilities 3,000 / Cr Consulting expense 3,000.
- **When the invoice is entered in AP:** Dr Consulting expense 3,000 / Cr Accounts payable 3,000.
Net effect: expense lands in the right month, and the reversal prevents double counting.

Tip: Mention how you estimate accruals — POs received but not invoiced, contracts, or historical run-rate.`, 'B', 'E'],

["Journals", "How do you account for a prepaid expense?",
`**Why they ask:** common close task and a check on amortization.

**Answer:** Pay $12,000 in January for a 12-month insurance policy.
- **Payment:** Dr Prepaid insurance 12,000 / Cr Cash 12,000.
- **Each month:** Dr Insurance expense 1,000 / Cr Prepaid insurance 1,000.
I keep a prepaid schedule (vendor, amount, start/end dates, monthly amortization, remaining balance) and reconcile it to the GL every month.

Tip: Say you review the schedule for items that are fully amortized or were cancelled early.`, 'B', 'E'],

["Journals", "How do you record deferred revenue?",
`**Why they ask:** it's the revenue-side mirror of a prepaid.

**Answer:** A customer pays $24,000 upfront for a 12-month subscription.
- **Cash received:** Dr Cash 24,000 / Cr Deferred revenue 24,000.
- **Each month as service is delivered:** Dr Deferred revenue 2,000 / Cr Revenue 2,000.
Deferred revenue is a liability because the company still owes the service.

Tip: Mention that invoicing in advance without cash is Dr AR / Cr Deferred revenue — a common follow-up.`, 'B', 'E'],

["Journals", "What is a reversing entry and when do you use one?",
`**Why they ask:** shows you understand close mechanics and avoiding double counting.

**Answer:** A reversing entry automatically flips an accrual on the first day of the next period. It's used for estimates that will be replaced by actual transactions — accrued expenses, accrued payroll, unbilled revenue. It keeps the process clean: the real invoice posts normally without anyone needing to remember to clear the accrual.

**Don't** reverse entries for things like depreciation or prepaid amortization — those are permanent.

Tip: Most ERPs (Oracle, SAP, NetSuite) support auto-reversal by journal category or flag; mention you use it.`, 'D', 'E'],

["Journals", "What makes a good journal entry from an audit point of view?",
`**Why they ask:** auditors test journals; sloppy ones create findings.

**Answer:**
- Clear **description** — what, why, which period.
- **Support attached** — calculation, invoice, contract or email approval.
- Correct **accounts, cost centers and period**.
- **Preparer and approver are different people**, with approval evidenced.
- Manual entries above a threshold get extra review.

Tip: Say "someone who has never seen this should understand it from the description and support alone."`, 'B', 'E'],

["Close", "Walk me through your month-end close.",
`**Why they ask:** the single most common question for this role.

**Answer:** I work from a close checklist with owners and due dates:
- **Day -2 to 0:** subledger cut-offs (AP, AR, inventory, payroll), review open POs for accruals.
- **Day 1–2:** post accruals, prepaid amortization, depreciation, payroll and allocations; intercompany entries.
- **Day 2–3:** balance sheet reconciliations; investigate and clear reconciling items.
- **Day 3–4:** flux analysis of P&L and balance sheet against prior month and budget; correct errors.
- **Day 4–5:** review and sign-off, close the period, reporting package.

Tip: Mention a close you helped speed up and by how many days.`, 'B', 'E'],

["Close", "How do you make sure nothing is missed at month-end?",
`**Why they ask:** close reliability matters more than heroics.

**Answer:** A detailed close checklist in a tool like BlackLine, FloQast or a shared tracker — every task has an owner, reviewer and deadline. Recurring and auto-reversing journals reduce manual work. I also run completeness checks: open POs received-not-invoiced, unrecorded liabilities search after period end, and a review of recurring vendors with no invoice this month.

Tip: The "recurring vendor with no invoice" check catches many missed accruals — a nice concrete detail.`, 'D', 'M'],

["Close", "What is cut-off and why does it matter?",
`**Why they ask:** cut-off errors misstate both periods.

**Answer:** Cut-off means recording transactions in the correct period. Goods shipped on March 31 belong to March revenue; an invoice for February services received in March is a February expense. Errors move profit between periods and can mislead decision-makers and auditors.

**How I control it:** shipping and receiving reports at period end, accruals for received-not-invoiced, review of invoices received in the first week of the new month.

Tip: Mention shipping terms (FOB shipping point vs destination) for revenue cut-off.`, 'B', 'E'],

["Reconciliations", "How do you reconcile a balance sheet account?",
`**Why they ask:** reconciliations are a key control and daily work.

**Answer:**
1. Pull the GL balance at period end.
2. Compare to independent support — bank statement, subledger, schedule or third-party confirmation.
3. Identify differences and classify them: timing (will clear) or errors (need correction).
4. Book corrections, document explanations, attach support.
5. Preparer signs; a reviewer approves. Items older than 60–90 days get escalated.

Tip: Say what you do with old unreconciled items — that's what reviewers look for.`, 'B', 'E'],

["Reconciliations", "Walk me through a bank reconciliation.",
`**Why they ask:** classic test of reconciling skill.

**Answer:**
- **Bank side:** statement balance + deposits in transit − outstanding checks ± bank errors = adjusted bank balance.
- **Book side:** GL balance + interest/collections by bank − bank fees − NSF checks ± book errors = adjusted book balance.
- The two must agree. Only the **book-side items** need journal entries.

**Example:** bank $50,000, deposit in transit $4,000, outstanding checks $6,000 → $48,000. Books $48,150, bank fee $150 → $48,000. Entry: Dr Bank fees 150 / Cr Cash 150.

Tip: Mention auto-matching tools in the ERP or BlackLine if you've used them.`, 'B', 'E'],

["Reconciliations", "You find a $25,000 unexplained difference on a reconciliation. What do you do?",
`**Why they ask:** problem solving under close pressure.

**Answer:**
1. Check the obvious: wrong period, wrong account, duplicates, transposed numbers (differences divisible by 9 suggest transposition), one-sided entries.
2. Compare activity, not just balances — roll forward from the last reconciled month to find which month the difference started.
3. Look at manual journals into the account and subledger-to-GL posting errors.
4. If not resolved by deadline, document what I know, escalate to my manager with the impact, and keep working it — never plug it.

Tip: "Never plug" is the line they want to hear.`, 'D', 'M'],

["Reconciliations", "How do you reconcile the AP or AR subledger to the GL?",
`**Why they ask:** subledger differences are a common audit issue.

**Answer:** Run the subledger aging or trial balance at period end and compare to the GL control account. Differences usually come from manual journals posted directly to the control account, transactions not transferred/accounted to GL, period mismatches or FX revaluation. I prevent them by restricting manual entries to control accounts and running "create accounting" / transfer-to-GL processes before close.

Tip: In Oracle, mention the Open Payables/Receivables reports versus the GL account analysis.`, 'D', 'M'],

["Fixed Assets", "How do you decide whether to capitalize or expense a cost?",
`**Why they ask:** capitalization errors distort profit.

**Answer:** Capitalize when the cost provides benefits beyond one year, is above the capitalization threshold, and is needed to get the asset ready for use — purchase price, freight, installation, testing. Expense repairs and maintenance that only keep the asset in its current condition. Upgrades that extend life or capacity are capitalized.

**Example:** $40,000 for a new machine plus $3,000 installation → capitalize $43,000. $2,000 routine servicing → expense.

Tip: State your company's threshold policy as an example, e.g. $2,500 or $5,000.`, 'B', 'E'],

["Fixed Assets", "Walk me through depreciation and a disposal entry.",
`**Why they ask:** fixed assets touch the P&L, balance sheet and cash flow.

**Answer:** Straight-line: (cost − salvage) ÷ useful life. A $60,000 asset, $0 salvage, 5 years → $12,000 per year: Dr Depreciation expense / Cr Accumulated depreciation.

**Disposal after 3 years for $30,000 cash:** book value is 60,000 − 36,000 = 24,000.
Dr Cash 30,000, Dr Accumulated depreciation 36,000 / Cr Asset 60,000, Cr Gain on disposal 6,000.

Tip: Mention you reconcile the fixed asset register to the GL each month.`, 'B', 'E'],

["Fixed Assets", "What is impairment?",
`**Why they ask:** a judgment area that comes up in senior roles.

**Answer:** An asset is impaired when its carrying amount can't be recovered. Under US GAAP (ASC 360), if indicators exist (damage, obsolescence, declining cash flows), compare carrying value to undiscounted future cash flows; if lower, write down to fair value. Under IFRS (IAS 36), compare to recoverable amount (higher of fair value less costs to sell and value in use). Goodwill is tested at least annually.

Tip: Note IFRS allows reversal of impairment (except goodwill); US GAAP doesn't.`, 'D', 'S'],

["Revenue", "Explain ASC 606 / IFRS 15 in simple terms.",
`**Why they ask:** revenue is the highest-risk number in most audits.

**Answer:** Five steps:
1. Identify the **contract**.
2. Identify **performance obligations** (distinct promises).
3. Determine the **transaction price**, including variable consideration like discounts or rebates.
4. **Allocate** the price to each obligation using standalone selling prices.
5. Recognize revenue **when or as** each obligation is satisfied.

**Example:** $120,000 for software ($80,000 standalone value) plus one year of support ($40,000). Software revenue at delivery; support recognized $3,333 a month.

Tip: A simple bundled example shows real understanding.`, 'D', 'M'],

["Leases", "How are leases recorded under ASC 842?",
`**Why they ask:** leases moved onto the balance sheet; many companies still struggle.

**Answer:** For leases over 12 months, lessees record a **right-of-use asset** and a **lease liability** at the present value of lease payments.
- **Operating lease:** a single straight-line lease cost in the P&L.
- **Finance lease:** amortization of the ROU asset plus interest on the liability (higher expense early).
Under IFRS 16, lessees treat almost all leases like finance leases.

Tip: Mention short-term (under 12 months) and low-value practical expedients.`, 'D', 'M'],

["Intercompany", "How do you handle intercompany transactions?",
`**Why they ask:** a frequent cause of close delays in multi-entity companies.

**Answer:** Both entities record matching entries — receivable/payable, revenue/expense — with the same amount and period. At month-end I reconcile intercompany balances between each pair of entities, resolve differences (timing, FX, missing entries) before consolidation, then eliminate them in consolidation. Regular settlement keeps balances from growing.

Tip: Mention intercompany modules (Oracle Intercompany, SAP ICR) or a matching tool if you've used one.`, 'D', 'M'],

["Foreign Currency", "How do you handle foreign currency transactions and revaluation?",
`**Why they ask:** relevant in any company with global vendors or entities.

**Answer:** Transactions are recorded at the exchange rate on the transaction date. At month-end, open monetary items (receivables, payables, cash, loans in foreign currency) are **revalued** at the closing rate, with gains/losses in the P&L. Non-monetary items (inventory, fixed assets) stay at historical rates. When consolidating foreign subsidiaries, assets/liabilities translate at closing rates, P&L at average rates, with the difference in CTA (other comprehensive income).

Tip: Distinguish revaluation (remeasurement) from translation — a common follow-up.`, 'D', 'S'],

["Analysis", "How do you perform a flux analysis?",
`**Why they ask:** shows whether you understand the business behind the numbers.

**Answer:** Compare each account to prior month, prior year and budget. Investigate variances above thresholds (for example, more than 10% and more than $25,000). For each, explain the driver — volume, price, timing, one-off, reclass or error — with evidence. Errors get corrected before close; explanations go into the review package.

**Example:** "Utilities up $40,000 vs last month — the January invoice was accrued at last year's rate; actual rate increased 18%; no error."

Tip: Good explanations name the cause, not just "increased due to higher activity".`, 'B', 'M'],

["Analysis", "Expenses are up 30% vs budget this month. How do you investigate?",
`**Why they ask:** analytical thinking under pressure.

**Answer:** Break the variance down by account, cost center and vendor. Check for timing (an expense booked early, a missing reversal), duplicates, misclassification (capex expensed), one-off items and real volume increases. Confirm with the budget owner. Then summarize: what drove it, whether it's recurring, and whether any correction is needed.

Tip: Start by ruling out accounting errors before calling it a business trend.`, 'B', 'M'],

["Controls", "What are the key controls in the GL and close process?",
`**Why they ask:** SOX awareness matters even for staff roles.

**Answer:**
- Journal entry review and approval, with segregation of duties.
- Account reconciliations prepared and reviewed on time.
- Restricted access to post journals and to open/close periods.
- Manual journals above thresholds get extra approval.
- Close checklist sign-offs; flux review by management.
- Chart of accounts changes controlled.

Tip: Mention you've supported SOX testing and kept evidence ready for auditors.`, 'D', 'M'],

["Controls", "What is segregation of duties and why does it matter?",
`**Why they ask:** a basic fraud-prevention concept.

**Answer:** No single person should control all parts of a transaction — authorizing, recording and handling the asset. For example, the person who creates vendors shouldn't approve invoices or release payments, and the person who prepares a journal shouldn't approve it. It reduces the risk of fraud and undetected errors.

Tip: If the team is small, mention compensating controls like management review of reports.`, 'B', 'E'],

["Audit", "How do you support external auditors?",
`**Why they ask:** audits go smoothly or painfully depending on the accounting team.

**Answer:** Keep reconciliations and support organized during the year so the PBC (prepared-by-client) list is mostly ready. Respond to requests quickly and completely, explain unusual items clearly, and escalate disagreements to my manager rather than arguing. After the audit, fix any recurring requests or findings in our process.

Tip: Share an example of an audit request you resolved quickly.`, 'B', 'E'],

["Accruals", "How do you estimate accruals when you have no invoice?",
`**Why they ask:** estimation judgment is a key skill.

**Answer:** Sources in order of reliability:
1. Receipts against purchase orders (received-not-invoiced report).
2. Contracts with fixed fees.
3. Usage data (utility meters, timesheets).
4. Vendor confirmations by email.
5. Historical run-rate as a last resort.
Then compare to actual invoices the next month and adjust the approach if estimates are consistently off.

Tip: Mentioning "true-up" analysis shows maturity.`, 'D', 'M'],

["Payroll", "What are the journal entries for payroll?",
`**Why they ask:** payroll is a big, recurring close item.

**Answer:** Gross pay $100,000, employee withholdings $25,000, employer taxes $7,650.
- Dr Salaries expense 100,000 / Cr Withholdings payable 25,000 / Cr Cash (or Net pay payable) 75,000.
- Dr Payroll tax expense 7,650 / Cr Payroll taxes payable 7,650.
If the pay period crosses month-end, accrue the earned but unpaid days, plus related taxes and benefits.

Tip: Mention accrued vacation/PTO and bonus accruals as related items.`, 'D', 'M'],

["Inventory", "How does inventory affect the financial statements?",
`**Why they ask:** relevant for manufacturing and distribution companies.

**Answer:** Inventory is an asset until sold, then it becomes cost of goods sold. Costing method (FIFO, weighted average, standard cost) affects COGS and margins. Inventory must be written down to the lower of cost and net realizable value when it's obsolete or damaged. Physical counts and cycle counts verify quantities; differences go to inventory adjustments.

Tip: If you've worked with standard costing, mention purchase price and usage variances.`, 'D', 'M'],

["Systems", "Which ERP and close tools have you used, and for what?",
`**Why they ask:** practical fit with their stack.

**Answer (example):** "In Oracle Fusion I posted and reviewed journals, ran create accounting and period close, and used account inspector and Smart View for analysis. I've used BlackLine for reconciliations and task management, and Excel heavily for schedules — XLOOKUP, SUMIFS, pivot tables and Power Query."

Tip: Name what you actually did in each system, not just the logo.`, 'B', 'E'],

["Excel", "Which Excel functions do you use most and why?",
`**Why they ask:** Excel is still the accountant's main tool.

**Answer:**
- **XLOOKUP / INDEX-MATCH** — matching subledger detail to GL.
- **SUMIFS / COUNTIFS** — summarizing by account, entity or period.
- **Pivot tables** — flux analysis and quick summaries.
- **IF / IFERROR**, text functions for cleanup.
- **Power Query** — refreshable imports of ERP extracts.

Tip: Mention building schedules with tie-out checks that show zero when everything reconciles.`, 'B', 'E'],

["Excel", "How do you make your workpapers easy to review?",
`**Why they ask:** reviewers' time is precious.

**Answer:** Clear title and purpose, source data on its own tab, no hard-coded numbers in calculations, totals that tie to the GL with a visible check, color coding for inputs vs formulas, and a short explanation of any judgment. Someone else should be able to reperform it.

Tip: "Reperformable" is the word auditors love.`, 'B', 'E'],

["Errors", "What do you do if you discover an error in a closed period?",
`**Why they ask:** integrity and judgment.

**Answer:** Tell my manager right away with the amount, cause and accounts affected. If immaterial, correct it in the current open period with clear documentation. If material, management decides with auditors whether to restate or reopen the period. Then fix the root cause so it doesn't repeat.

Tip: Never quietly fix it — transparency is the point of the question.`, 'B', 'E'],

["Errors", "Tell me about a mistake you made and how you handled it.",
`**Why they ask:** honesty and learning.

**Sample answer:** "Early in my career I booked a $15,000 accrual to the wrong cost center, and it showed up in a department's flux as an unexplained spike. I spotted it during the review, told my manager, reclassed it the same day, and added a cost-center check to our accrual template. It hasn't happened since."

Tip: Pick a real but recoverable mistake, show the fix and the prevention.`, 'B', 'E'],

["Process Improvement", "How have you improved or shortened the close?",
`**Why they ask:** they want someone who makes the close better, not just survives it.

**Sample answer:** "We closed in 8 days. I converted 30 manual accruals into recurring auto-reversing journals, moved prepaid and depreciation entries to day 1, and set up reconciliation templates in BlackLine with auto-matching for bank and intercompany. Within two quarters we closed in 5 days with fewer post-close adjustments."

Tip: Numbers make this answer memorable.`, 'D', 'M'],

["Process Improvement", "How would you reduce manual journal entries?",
`**Why they ask:** automation is a priority for most finance teams.

**Answer:** Analyze manual journals by type and frequency. Move recurring ones to recurring or allocation templates, fix the subledger setups that force manual corrections, use ERP allocation rules for cost allocations, and automate imports (spreadsheet uploads like ADFdi in Oracle or journal upload templates) for high-volume entries.

Tip: Start with a Pareto — 20% of journal types usually make up 80% of manual volume.`, 'D', 'S'],

["Consolidation", "What happens in a consolidation?",
`**Why they ask:** relevant for multi-entity groups.

**Answer:** Each subsidiary closes its books; results are translated into the parent's reporting currency; intercompany balances, revenues, expenses and profit in inventory are eliminated; minority interests are recorded; and consolidated statements are produced. Tools include Oracle FCCS, OneStream, HFM or spreadsheets for smaller groups.

Tip: Mention any consolidation tool you've supported.`, 'D', 'S'],

["Reporting", "What goes into a month-end reporting package?",
`**Why they ask:** shows you think about the end user.

**Answer:** Income statement, balance sheet and cash flow versus prior period and budget; flux commentary on key variances; KPIs such as gross margin, DSO and opex by department; and notes on one-off items or risks. Short, visual and consistent month to month.

Tip: Say you write commentary that a non-accountant can understand.`, 'B', 'M'],

["Behavioral", "How do you handle tight close deadlines?",
`**Sample answer:** "I prepare before the close — reviewing open POs, prepaid schedules and recurring items in the last week of the month — so day 1 is just posting. During close, I work in priority order: items others depend on first. If I see something slipping, I tell my manager early with a plan rather than at the deadline."

Tip: Early communication is what managers value most.`, 'B', 'E'],

["Behavioral", "Describe a time you disagreed with your manager on an accounting treatment.",
`**Sample answer:** "My manager wanted to expense a $60,000 software implementation cost. I thought part of it qualified for capitalization as internal-use software. I pulled the guidance, split the costs into application-development vs training, and showed $42,000 qualified. We discussed it with the controller, agreed, and capitalized it. I kept it factual and was ready to accept either outcome."

Tip: Show respect, evidence, and willingness to accept the decision.`, 'D', 'M'],

["Behavioral", "Tell me about a time you worked with a non-finance team to fix a problem.",
`**Sample answer:** "Purchasing was creating POs after invoices arrived, which caused hundreds of AP holds and accrual misses. I showed the purchasing manager the impact — late payments and $200,000 of unrecorded accruals in one month — and we agreed a 'no PO, no pay' rule with exceptions. Holds dropped by 60% in two months."

Tip: Impact on the other team, not just accounting, makes the story land.`, 'B', 'M'],

["Leadership", "As a senior accountant, how do you review a junior's work?",
`**Why they ask:** senior roles include review and coaching.

**Answer:** Check that totals tie to the GL and support, amounts are reasonable, accounts and periods are correct, and explanations make sense. I give specific feedback and explain the why, so they learn rather than just fix. I document my review (sign-off, comments) for audit evidence.

Tip: Mention a junior you helped grow.`, 'B', 'S'],

["Leadership", "How do you train a new team member on the close?",
`**Answer:** Start with the close calendar and how their tasks connect to others. Give documented procedures for each task, pair on the first close, let them lead the second with my review, and have them update the procedure afterward. Cross-training builds backup for vacations.

Tip: Mention that updated documentation is part of the training — it also helps audits.`, 'B', 'S'],

["Technical", "What is the difference between a provision and an accrual?",
`**Answer:** Both are liabilities recorded before payment. An **accrual** is for goods or services already received where the amount is fairly certain (e.g. utilities). A **provision** is a liability of uncertain timing or amount (e.g. warranty, legal claims, restructuring), recorded when probable and reasonably estimable (US GAAP) or probable with a reliable estimate (IFRS IAS 37).

Tip: Give one example of each.`, 'D', 'M'],

["Technical", "What are contingent liabilities?",
`**Answer:** Possible obligations that depend on a future event — for example a lawsuit. Under US GAAP (ASC 450): record if probable and estimable; disclose if reasonably possible; ignore if remote. IFRS uses similar logic with "more likely than not" for provisions.

Tip: Mention that legal letters during audit help assess these.`, 'D', 'S'],

["Technical", "What is the difference between capital and operating expenditures?",
`**Answer:** Capex buys or improves long-term assets and is capitalized and depreciated (equipment, buildings, capitalized software). Opex covers day-to-day running costs and is expensed immediately (salaries, rent, utilities, maintenance). The split affects profit, EBITDA and budgets.

Tip: Note that cloud software subscriptions are usually opex, though some implementation costs can be capitalized under ASC 350-40.`, 'B', 'E'],

["Ethics", "Your manager asks you to book an entry you think is wrong. What do you do?",
`**Why they ask:** integrity matters more than technical skill.

**Answer:** Ask for the rationale and support — there may be information I don't have. If it still looks wrong, explain my concern with the guidance. If they insist and it would misstate the financials, I'd escalate to the controller or follow the company's ethics hotline process. I wouldn't post an entry I believe misstates the books.

Tip: Calm, respectful and firm.`, 'B', 'E'],

["Career", "Where do you see yourself in a few years?",
`**Sample answer:** "Growing into a senior accountant or accounting manager role, owning a larger part of the close and reporting, and helping automate processes. I'm working on my CPA and deepening my ERP skills so I can contribute to system improvements."

Tip: Ambition aligned with the role you're applying for.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I bring a reliable close — accurate reconciliations, clean journals and clear flux explanations — plus a habit of improving the process. In my last role I helped cut the close from 8 to 5 days. I'm comfortable in your ERP, and I work well with auditors and business teams."

Tip: Three proof points, one number.`, 'B', 'E']
];
