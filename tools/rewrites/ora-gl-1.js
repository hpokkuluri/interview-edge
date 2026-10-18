// Rewritten Oracle General Ledger answers, part 1 (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'Walk me through the key components you set up for a ledger in Fusion GL.':
`**Why they ask:** the ledger is the foundation of Fusion Financials. They want to hear that you've designed one, not just used one.

**Answer:**
"I think of a ledger as the four Cs: chart of accounts, calendar, currency and convention, meaning the accounting method. So first the chart of accounts structure and instance, with segment labels for primary balancing, cost center, natural account and intercompany. Then the accounting calendar, with an adjusting period for year-end. Then the ledger currency and the SLA accounting method. Then I assign legal entities and their balancing segment values. Then the ledger options: retained earnings, suspense, rounding, CTA and net income accounts, entered currency balancing, journal approval, intercompany balancing, revaluation and translation defaults, and average balances if needed. After that come reporting currencies or secondary ledgers, ledger sets and data access sets, and finally the account hierarchies published to the balances cube."

- **The four Cs:** chart of accounts, calendar, currency, accounting method.
- **Legal entities:** and their balancing segment values.
- **Ledger options:** retained earnings, suspense, rounding, CTA, approvals, intercompany.
- **Extensions:** reporting currencies, secondary ledgers, ledger sets, data access sets.
- **Reporting:** hierarchies published to the cube.

Tip: "The four Cs" is an easy hook that interviewers remember. Then walk the options in order.`,

'What is the GL balances cube (Essbase) and why does it matter?':
`**Why they ask:** the cube drives almost all Fusion GL reporting. When it's wrong, every report is wrong.

**Answer:**
"Every chart of accounts and calendar combination gets an Essbase balances cube, which updates in real time when journals post. Smart View, Financial Reporting, Account Monitor, Account Inspector and Calculation Manager allocations all read it. Its dimensions are accounting period, ledger, each COA segment, currency, currency type, scenario like actual or budget, balance amount like period, quarter or year to date, and amount type. Account hierarchies have to be published to the cube for roll-ups to work. If it gets out of sync, for example after a hierarchy change, I run Create Cubes, Rebuild Dimension Members or Refresh, depending on what changed."

Tip: Mention the fix when it's out of sync. Support teams spend real time on that.`,

'How does year-end close work in Fusion GL?':
`**Why they ask:** year-end is high pressure, and many people think they need a closing journal.

**Answer:**
"I post all year-end adjustments, including in the adjusting period if the calendar has one. I run the final revaluation, translation, intercompany and allocations, and reconcile. Then I open the first period of the new year. At that moment GL automatically rolls the P&L balances into the retained earnings account defined on the ledger, by balancing segment, and carries balance sheet balances forward. No closing journal is needed. If a late adjustment hits the prior year after the new year is open, I reopen the prior period, post it, and reopen the first period of the new year to refresh retained earnings. After the audit, the prior year is closed or permanently closed."

Tip: Say "no closing journal is needed" clearly. That's the point they're testing.`,

'What are the journal reversal options in Fusion GL?':
`**Why they ask:** accrual reversals are monthly work. They want to see you can automate them.

**Answer:**
"The reversal period can be the next period, the same period, or a specific period, and average balance ledgers also need a reversal date. The method is either switch debit and credit, or change sign, which posts negative amounts. I set reversal criteria by journal category in Manage Journal Reversal Criteria, so for example all accrual journals reverse automatically in the next period, and schedule AutoReverse. Users can still reverse a journal by hand from the journal page. Either way, the reversal stays linked to the original for audit."

Tip: Mention setting it by category. Automating accrual reversals is the practical win.`,

'Explain reporting currency conversion levels: subledger, journal and balance.':
`**Why they ask:** choosing the wrong level costs performance or detail. They want a reasoned choice.

**Answer:**
"Balance level converts period-end balances, like translation. It's the lightest, but you get no transaction detail in the reporting currency. Journal level converts every posted GL journal into the reporting currency, so you can see journals but not subledger detail. Subledger level has SLA create entries directly in the reporting currency for every subledger transaction. It gives the most detail but the most volume. I choose based on what the business needs to see: if the local tax authority needs invoice-level detail in a second currency, subledger level; if the group just needs a converted trial balance, balance level. The same three levels apply to secondary ledgers."

Tip: Tie the choice to a business need. That's what makes it a design answer.`,

'What are journal conversion rules and COA mappings for secondary ledgers?':
`**Why they ask:** secondary ledgers fail if these aren't designed carefully.

**Answer:**
"Journal conversion rules decide which journals, by source and category, are copied from the primary to the secondary ledger at journal level. For example, I'd exclude manual IFRS-only adjustments so they don't land in the US GAAP ledger. A chart of accounts mapping converts primary account combinations into the secondary ledger's chart, using segment rules or account rules. That's needed when the secondary ledger uses a different chart, like a local statutory chart in France. Both are set on the relationship between the primary and secondary ledger."

Tip: Give the French statutory chart example. It's the most common real case.`,

'How do you set up revaluation in Fusion GL?':
`**Why they ask:** revaluation is a monthly step for any multi-currency company.

**Answer:**
"I define the revaluation with the accounts to revalue, usually monetary balance sheet accounts held in foreign currency: AR, AP, cash, intercompany and loans. I set the rate type, often a period-end Corporate rate, the unrealized gain and loss accounts, and whether to revalue P&L accounts as well. I can keep the primary balancing segment from the source account so the gain or loss lands in the right entity. It runs per ledger or ledger set each period, I post the journal it creates, and that journal usually reverses automatically next period."

Tip: Say which accounts are monetary. It shows you understand the accounting behind it.`,

'How does translation work in Fusion GL and where does CTA go?':
`**Why they ask:** translation is core to consolidation, and CTA confuses many people.

**Answer:**
"Translation converts a ledger's balances, not its journals, into another currency for reporting. Balance sheet accounts use the period-end rate, income statement accounts use the average rate for the period, and equity and other historical accounts use historical rates or amounts, set up in Manage Historical Rates. Because different rates are used, the translated trial balance doesn't balance, and that difference goes to the cumulative translation adjustment account defined on the ledger. I run translation after revaluation and all postings, and rerun it after any late adjustment. Many groups now translate in FCCS and use GL translation only for local needs."

Tip: Explain why CTA exists: different rates for different accounts. That's the real question.`,

'Explain how intercompany balancing works when a journal crosses legal entities.':
`**Why they ask:** intercompany is one of the hardest parts of a multi-entity close.

**Answer:**
"If a journal has lines for different primary balancing segment values, meaning different legal entities, Fusion adds intercompany receivable and payable lines automatically so each entity balances. The rules come from Manage Intercompany Balancing Rules, by ledger, legal entity, source, category or chart of accounts. For example, a rule might say use account 1810 for intercompany receivables and put the trading partner's balancing value in the intercompany segment. If there are many entities on one side, clearing company options decide which one balances against which. Intracompany balancing handles balancing values inside the same legal entity. These lines then feed intercompany reconciliation and eliminations."

Tip: Mention the intercompany segment holding the partner. It's what makes reconciliation and elimination work.`,

'What is a suspense account and when would you enable it?':
`**Why they ask:** a basic control question.

**Answer:**
"If a journal doesn't balance, GL can post the difference to a suspense account instead of rejecting it. It's enabled per ledger, and you can have different suspense accounts by source and category. Most companies leave it off for manual journals and integrations, because it's better to fix the source than to hide the error. If it is on, the suspense balance has to be reconciled and cleared every period, because auditors will ask about it."

Tip: Say you'd generally keep it off. It shows control thinking.`,

'How do you load budgets into Fusion GL?':
`**Why they ask:** budget vs actual reporting is something every finance team wants.

**Answer:**
"Budgets live as scenarios in the balances cube. I can load them by spreadsheet through Smart View or the budget upload, or with the FBDI budget template, by account and period. For a real planning process, EPM Planning is better, and it sends the approved budget into GL. Once loaded, budget vs actual reports run in Financial Reporting or Smart View. Budgetary control budgets are a different thing: they're control budgets that check and block spending, not just report against it."

Tip: Separate reporting budgets from control budgets. Interviewers often follow up on it.`,

'What are statistical journals and statistical accounts used for?':
`**Why they ask:** statistics drive allocations, and allocations drive management reporting.

**Answer:**
"They record non-money quantities in the ledger, like headcount, square footage or units produced, either in the STAT currency or in statistical accounts. The main use is as a basis for allocations, for example allocating rent by square feet or IT cost by headcount, and for KPIs like cost per employee. They're loaded each period by journal, spreadsheet or integration, often from HR for headcount."

Tip: Give the rent by square feet example. It's the classic use.`,

'How do allocations work in Fusion GL with Calculation Manager?':
`**Why they ask:** allocations replace a lot of spreadsheet work at month-end.

**Answer:**
"Allocation rules are built in Calculation Manager against the balances cube. Each rule has a source, which is the pool to allocate, like total IT cost; a basis, which is the driver, like headcount by department; a target, the accounts and cost centers that receive it; and an offset, which credits the pool back. Rule sets run several rules in order for step-down allocations. Runtime prompts for period and ledger make the rules reusable every month. Generate General Ledger Allocations creates the journals, which can post automatically. I always test with known numbers first and document the drivers for audit."

Tip: Walk source, basis, target, offset in that order. It's the structure they expect.`,

"How do you troubleshoot a Smart View report that doesn't match the trial balance?":
`**Why they ask:** this happens constantly during close. They want a method.

**Answer:**
"First I check the point of view: ledger, period, currency, currency type like entered or total, amount type like period or year to date, scenario and balance type. Most differences end there. Second, timing: were journals posted after the cube last updated, or did an Update Balances Cube process fail? Third, the hierarchy: maybe a tree changed but wasn't republished. Fourth, data access: two users with different access see different numbers. Then I run the trial balance with exactly the same parameters and drill into Account Inspector to find the difference."

Tip: Start with the point of view. It solves most cases and shows you've done this.`,

'Explain ledger sets and when you\'d use them.':
`**Why they ask:** ledger sets save a lot of time in multi-entity companies.

**Answer:**
"A ledger set groups ledgers that share the same chart of accounts and calendar; the currencies can be different. With a ledger set I can open and close periods, run revaluation, translation and allocations, report, and grant data access across many ledgers at once. A typical setup is one set for all European ledgers and a global set for consolidated reporting in GL."

Tip: Mention the same chart and calendar requirement. It's the rule they check.`,

'What is a data access set and how does it differ from segment value security?':
`**Why they ask:** GL security design affects performance and audit.

**Answer:**
"A data access set controls which ledgers or ledger sets a user can work in, and which primary balancing segment values, or management segment values, with read-only or read-write access. It drives journal entry, inquiry and period management. Segment value security restricts the values of any segment, like cost center, in entry and reporting. My usual design is data access sets for legal entity scope, and segment security only where it's really needed, because it adds complexity and can slow reports."

Tip: Recommend data access sets first. Showing restraint with segment security is a senior point.`,

'How does journal import from external systems work, and how do you make it robust?':
`**Why they ask:** integrations into GL fail silently if they aren't designed well.

**Answer:**
"Journals come in through FBDI with the journal import template, through the ERP Integration Service from OIC, or through REST for small volumes. They load into GL_INTERFACE, then Import Journals runs by ledger, source and group ID, with optional AutoPost. To make it robust I give each system its own journal source, use a group ID per batch, validate account combinations before sending, send control totals, set up alerts on errors, make the load safe against double sending, and run a reconciliation report per source every period."

Tip: Mention protection against double loads. It's the failure that hurts most.`,

'What is the difference between Account Monitor, Account Inspector and Financial Reports?':
`**Why they ask:** to see if you know which tool to give which user.

**Answer:**
"Account Monitor watches key account balances on the GL dashboard, with thresholds, and lets you drill down. Account Inspector is for ad-hoc analysis: pivot by any segment or hierarchy and drill to journals and subledger detail. Financial Reporting and Smart View are for formatted statements and Excel-based analysis. All three read the same Essbase cube, so they agree with each other."

Tip: Say they all read the same cube. It shows you understand the architecture.`,

'How do you set up journal approval and what are common issues?':
`**Why they ask:** journal approval often slows down the close.

**Answer:**
"I enable approval at the ledger and journal source level, and the rules live in BPM through Manage Journal Approval Rules, for example by maximum line amount, ledger or category, using the supervisor hierarchy, positions or approval groups. The common problems are missing approvers because a supervisor left, people approving their own journals, subledger sources routed for approval by mistake, and slow approvals during close. The fixes are fallback approvers, delegation, excluding subledger sources, and watching pending approvals every day of close."

Tip: Give the problems and their fixes as pairs. It sounds like real support experience.`,

'How do you handle a mid-year change to the chart of accounts, such as splitting a cost center?':
`**Why they ask:** COA changes touch everything. They want a full checklist.

**Answer:**
"I create the new values, update the hierarchies and publish the trees. Then I update everything that defaults or uses the old value: HCM assignments, supplier and customer defaults, SLA mapping sets, allocations, cross-validation rules and security. For history, I agree with FP&A whether to reclass existing balances with a journal or keep history on the old value and start fresh. I end-date the old value after a transition period, retest integrations and reports, and tell everyone the effective date."

Tip: Mention agreeing the history approach with FP&A. It's the decision that causes arguments later.`,

'What GL reports and checks are part of your month-end close?':
`**Why they ask:** a practical check of whether you've run a close.

**Answer:**
"I check unposted journals and journals pending approval first, because nothing else is final until those are done. Then the subledger-to-GL reconciliations for AP, AR, Assets and Inventory, and intercompany reconciliation. Then suspense and clearing account balances, and the revaluation and translation results, including the CTA movement. Then the trial balance by ledger and legal entity, a variance analysis against last period and budget, and a review of manual and top-side journals."

Tip: Order matters. Starting with unposted and pending journals shows you've run real closes.`,

'How would you design the GL for a company reporting under IFRS at group level and US GAAP for a US parent filing?':
`**Why they ask:** a senior multi-GAAP design question.

**Answer:**
"For each entity, the primary ledger uses the GAAP with the most transactions or the legal requirement, often local GAAP or IFRS. The other GAAP sits in a secondary ledger: subledger level if many transactions differ, like leases, revenue and assets; adjustment-only if the differences are few. Fixed Assets gets separate corporate books for each GAAP, each linked to its ledger. I'd set up ledger sets per GAAP for close and reporting. Consolidation happens in FCCS, using the Multi-GAAP dimension or separate scenarios for IFRS and US GAAP. And I'd document every GAAP difference and the accounts used for the adjustments."

Tip: Explain when you'd choose subledger level vs adjustment-only. That choice is the core of the answer.`,

'What is an adjusting period and when do you use it?':
`**Why they ask:** a basic GL calendar question.

**Answer:**
"An adjusting period is an extra period in the calendar that overlaps the year-end date, like Adj-24 dated December 31. It's used for audit and year-end adjustments without reopening December. The balances roll into the year-end numbers, and retained earnings are recalculated when the new year is opened. The benefit is that December's operating results stay separate from audit adjustments."

Tip: State the benefit: December stays clean. That's why companies use it.`,

'Tell me about a difficult GL close issue you resolved as a contractor.':
`**Why they ask:** a behavioral question to see how you work under close pressure.

**Answer (example, adjust to your own story):**
"On day three of a quarter-end close, intercompany was out of balance by $1.2 million across eight entities, and consolidation was due the next day. I ran intercompany reconciliation by trading partner and traced most of it to manual journals with the wrong intercompany segment value, plus some FX timing differences. I corrected the entries with the entity accountants, and we met the deadline. Then I fixed the cause: I added a cross-validation rule so the intercompany segment had to match a valid trading partner, and set up a weekly intercompany matching review. In the following months intercompany differences were close to zero."

Tip: Use STAR and always end with the permanent fix. Contractors are hired to stop problems coming back.`,

'As a GL contractor, how do you get productive in the first two weeks?':
`**Why they ask:** contractors are expected to deliver fast. They want a plan.

**Answer:**
"In the first days I read: the enterprise structure, the chart of accounts, the ledger setup, the close calendar, recent audit findings and open tickets. I shadow a month-end close if the timing allows. I map every integration and journal source that feeds GL. I meet the controller, the GL accountants, FP&A, and IT support. By the end of week two I aim for one quick win, like fixing a recurring close problem, and I keep a running log of issues and recommendations that I share with the manager."

Tip: Mention the quick win. Managers hire contractors who make an early difference.`,

'What are the key differences between IFRS and US GAAP that affect the General Ledger?':
`**Why they ask:** global companies need consultants who can turn GAAP differences into system design.

**Answer:**
"I'd group the main ones. Inventory: IFRS bans LIFO and allows write-downs to be reversed; US GAAP allows LIFO and no reversal. Fixed assets: IFRS allows the revaluation model and requires component depreciation; US GAAP is cost only. Impairment: IFRS is a one-step test at cash-generating unit level with reversals allowed except goodwill; US GAAP is two-step for long-lived assets with no reversal. Development costs: capitalized under IFRS when criteria are met, expensed under US GAAP except some software. Leases: IFRS 16 has one lessee model; ASC 842 has finance and operating. Provisions: IFRS uses more-likely-than-not and the midpoint of a range; US GAAP has a higher threshold and uses the low end. Credit losses: IFRS 9 three stages; US GAAP CECL lifetime from day one. Consolidation: IFRS 10 single control model; US GAAP voting interest and VIE models. Each one becomes a decision in Oracle: a separate accounting method, a secondary ledger, or an adjustment."

Tip: End by saying each difference becomes a system decision. That's what makes you the ERP person in the room.`,

'How do you support IFRS and local GAAP in Oracle Fusion?':
`**Why they ask:** a practical design question for global rollouts.

**Answer:**
"The primary ledger runs in one GAAP and a secondary ledger in the other. For systematic differences, I use subledger level, where SLA creates entries for both GAAPs from the same transaction using different accounting methods. For a few differences, journal or adjustment-only level, where GL journals are copied with conversion rules and GAAP-only adjustments are posted in the secondary ledger. Fixed Assets uses separate corporate books per GAAP, Lease Accounting applies IFRS 16 or ASC 842 per ledger, and a chart of accounts mapping handles a different statutory chart. Reporting runs through ledger sets and FCCS Multi-GAAP."

Tip: Explain when you use each level. It's the decision they want to hear you make.`,

'Explain IFRS 16 lease accounting and how it differs from ASC 842.':
`**Why they ask:** leases are a big area where the standards differ, and it affects EBITDA.

**Answer:**
"Under IFRS 16, lessees put almost all leases on the balance sheet as a right-of-use asset and a lease liability, the present value of the payments. The P&L shows depreciation plus interest, which front-loads the expense. There are exemptions for short-term leases of 12 months or less and low-value assets. ASC 842 also puts leases on the balance sheet, but has two models: finance leases, which work like IFRS 16, and operating leases, which show one straight-line lease cost. There's no low-value exemption. In Oracle, Fusion Lease Accounting calculates the ROU asset, liability, schedules and accounting per ledger and GAAP, and payments go to AP. A point I always add: EBITDA is higher under IFRS 16, because lease cost moves below EBITDA into depreciation and interest."

Tip: The EBITDA point is the one interviewers remember. Don't leave it out.`,

'Explain IAS 21 foreign currency: functional currency, transactions and translation.':
`**Why they ask:** foreign currency drives revaluation and translation setup in GL.

**Answer:**
"Each entity has a functional currency, the currency of its main economic environment, where it sells, buys and borrows. Foreign currency transactions are recorded at the spot rate. Monetary items, like receivables, payables and loans, are retranslated at the closing rate each period, and the differences go to P&L. Non-monetary items stay at the historical rate. To translate into a presentation currency, assets and liabilities use the closing rate, income and expenses use transaction or average rates, and the difference goes to OCI as the translation reserve, which is recycled to P&L if the foreign operation is sold. In Oracle, GL revaluation handles the monetary items, and translation runs in GL with CTA, or in FCCS."

Tip: Link each part of IAS 21 to the Oracle process. That's what an ERP interviewer wants.`,

'What is IAS 29 hyperinflation and how would you handle it in Oracle?':
`**Why they ask:** a specialist question for companies with operations in places like Argentina or Türkiye.

**Answer:**
"IAS 29 applies when an entity's functional currency is hyperinflationary, with cumulative three-year inflation around 100%, as in Argentina and Türkiye in recent years. The financial statements are restated using a general price index: non-monetary items are indexed, and the gain or loss on the net monetary position goes to P&L. Then the statements are translated at the closing rate, including the P&L. Oracle doesn't do this natively, so it's usually handled with a separate or secondary ledger, or an adjustment process with index-based calculations in spreadsheets or EPM, and translation in FCCS using closing rates for the P&L. I'd also check the hyperinflation list every reporting period, because countries move on and off it."

Tip: Mention checking the list each period. It shows you've dealt with it, not just read about it.`,

'What is IFRS 18 and how could it affect ERP and reporting?':
`**Why they ask:** IFRS 18 is coming soon, and they want to know you're ahead of it.

**Answer:**
"IFRS 18, Presentation and Disclosure in Financial Statements, replaces IAS 1 for annual periods starting on or after 1 January 2027, with comparatives restated. It changes the P&L structure: income and expenses are classified as operating, investing or financing, plus income taxes and discontinued operations, with required subtotals for operating profit and profit before financing and income taxes. Management-defined performance measures must be disclosed and reconciled in the notes, and there's more guidance on aggregation. For the ERP, that means classifying accounts into the new categories through COA attributes or hierarchies, reviewing where FX and interest are classified, redesigning report templates in Financial Reporting, FCCS or Narrative Reporting, and restating the mapping for comparatives."

Tip: Mention the comparatives. Restating the prior year is the work that companies underestimate.`,

'How are provisions and contingent liabilities treated under IAS 37?':
`**Why they ask:** provisions are judgment-heavy, and GL teams book and track them.

**Answer:**
"A provision is recognized when there's a present obligation from a past event, an outflow is probable, meaning more likely than not, and the amount can be estimated reliably. It's measured at the best estimate: expected value for large populations, the most likely outcome for a single obligation, or the midpoint when all points in a range are equally likely, and discounted if material. Contingent liabilities are disclosed but not recognized, unless remote, in which case nothing is disclosed. Contingent assets are disclosed when probable and recognized only when virtually certain. Onerous contracts and restructuring have their own rules. In GL that means dedicated provision accounts, a monthly review and true-up, and documentation for audit."

Tip: Give the measurement options clearly. It's where IFRS differs from US GAAP.`,

'Explain IAS 36 impairment testing.':
`**Why they ask:** impairment is a big judgment area, and finance systems need to support it.

**Answer:**
"At each reporting date you look for impairment indicators, and goodwill and indefinite-life intangibles are tested at least once a year. The recoverable amount is the higher of fair value less costs of disposal and value in use, which is discounted cash flows. Testing is done at the cash-generating unit level, and goodwill is allocated to CGUs. The loss is the carrying amount minus the recoverable amount, allocated first to goodwill, then to the other assets pro rata. Reversals are allowed, except for goodwill, up to what the carrying amount would have been without the impairment. In Oracle, I use the Assets impairment functionality or journals, and FCCS for goodwill at group level."

Tip: Mention the order of allocation: goodwill first. It's the detail that shows real understanding.`,

'What is component depreciation under IAS 16 and how do you set it up in Oracle Assets?':
`**Why they ask:** component depreciation is an IFRS requirement that changes asset design.

**Answer:**
"Under IAS 16, significant parts of an asset with different useful lives are depreciated separately, for example an aircraft's body, engines and interior, or a building's structure, roof and HVAC. In Oracle Assets I set each component up as its own asset, linked through a parent-child hierarchy, with its own category and life. If the US GAAP book keeps it as one asset, I use separate corporate books for each GAAP, so each book holds the structure its standard needs."

Tip: Give the building example with lives, like 40 years for the structure and 15 for HVAC.`,

'How does the IAS 16 revaluation model work and how would you account for it?':
`**Why they ask:** revaluation is only allowed under IFRS, so it's a test of global experience.

**Answer:**
"A class of property, plant and equipment is carried at fair value on the revaluation date, less later depreciation and impairment, and revaluations must be regular enough that the carrying amount stays close to fair value. An increase goes to OCI as revaluation surplus, unless it reverses an earlier decrease that went to P&L. A decrease goes to P&L, unless it reverses an earlier surplus, in which case it reduces OCI. The surplus can be moved to retained earnings as the asset is used or sold. Oracle Assets supports revaluation, with options to revalue accumulated depreciation and to amortize the reserve."

Tip: Explain the "unless it reverses" rule both ways. It's what they're listening for.`,

'Explain IFRS 9 expected credit loss for receivables.':
`**Why they ask:** the bad debt allowance is a monthly GL entry, and IFRS 9 changed how it's calculated.

**Answer:**
"IFRS 9 replaced the incurred loss model with expected credit loss, so you recognize expected losses from the start. For trade receivables and contract assets, the simplified approach uses lifetime ECL, usually with a provision matrix: loss rates by ageing bucket, adjusted for forward-looking information. For loans there's the general approach in three stages: 12-month ECL in stage 1, lifetime ECL in stage 2 after a significant increase in credit risk, and stage 3 for credit-impaired assets. In Oracle, the AR aging feeds an allowance calculation, often in a spreadsheet or EPM, which is posted to GL, with the method documented. Under US GAAP, CECL requires lifetime losses from day one for everything in scope."

Tip: Describe the provision matrix with an example, like 1% current, 5% over 30 days, 50% over 90.`,

'What does IFRS 10 say about control and consolidation?':
`**Why they ask:** consolidation scope drives the entity and ledger design.

**Answer:**
"Under IFRS 10, an investor controls an investee when it has power over the relevant activities, exposure to variable returns, and the ability to use its power to affect those returns. Control, not just more than 50% of votes, decides consolidation, so it includes de facto control, potential voting rights and structured entities. Non-controlling interests are shown in equity. Changes in ownership that keep control are equity transactions; losing control means remeasuring any retained interest and taking a gain or loss to P&L. Associates under IAS 28 and joint ventures under IFRS 11 use the equity method, while joint operations record their share of assets and liabilities."

Tip: Name the three elements of control first. It's the core of the standard.`,

'How does IAS 12 deferred tax work and how do you support it from the GL?':
`**Why they ask:** the tax provision needs good data from the ERP.

**Answer:**
"Deferred tax arises from temporary differences between an item's carrying amount and its tax base, like depreciation differences, provisions and leases. Deferred tax assets are recognized to the extent future taxable profit is probable; deferred tax liabilities are generally recognized. Rates used are the ones enacted or substantively enacted. From the GL side, I support it with tax books against corporate books in Assets, account attributes that flag tax-relevant accounts, and reports by entity. The calculation is usually done in Tax Reporting in EPM or a tax provision tool and booked back as journals. Pillar Two, the global minimum tax, now adds more data needs and IAS 12 disclosures."

Tip: Mention Pillar Two. It's current and shows you follow changes.`,

'What are the main IFRS vs US GAAP differences in cash flow statements?':
`**Why they ask:** cash flow classification affects account mapping and reporting.

**Answer:**
"Under the current IAS 7, companies choose where to classify interest and dividends paid and received: operating, investing or financing. The IFRS 18 amendments to IAS 7, from 2027, remove most of that choice: for most entities interest paid goes to financing, interest and dividends received go to investing, and the indirect method starts from operating profit. Under US GAAP, interest paid and received and dividends received are operating, and dividends paid are financing. For the ERP, that means account mapping or hierarchies for the cash flow, movement accounts, or the Movement dimension in FCCS."

Tip: Mention the 2027 change. It shows you're current.`,

'What is IFRS 1 and when does it matter in an ERP implementation?':
`**Why they ask:** a company moving to IFRS often does it with an ERP project.

**Answer:**
"IFRS 1 covers first-time adoption. The company prepares an opening IFRS balance sheet at the transition date and applies IFRS backwards, with some optional exemptions, like deemed cost for property, plant and equipment, resetting cumulative translation differences to zero, and not restating past business combinations, plus some mandatory exceptions. For the ERP, it means converting balances to IFRS at the transition date in a secondary or adjustment ledger, handling comparative periods, mapping accounts, and documenting every exemption the company chose."

Tip: Name one or two exemptions. It shows you know the standard, not just its name.`,

};
