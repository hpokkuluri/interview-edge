// Rewritten Oracle General Ledger answers, part 2: IFRS, FCCS, enterprise structures (Why they ask → Answer → Tip).
module.exports = {

'How are borrowing costs and investment property treated under IFRS?':
`**Why they ask:** two IFRS areas that change how assets are accounted for in the ERP.

**Answer:**
"Under IAS 23, borrowing costs directly tied to a qualifying asset, one that takes a long time to get ready, like a plant or a building under construction, must be capitalized. In Oracle I'd capitalize that interest into CIP, either through Projects or by journal. Under IAS 40, investment property, like a building held for rent, can use the fair value model, where changes go to P&L and there's no depreciation, or the cost model with fair value disclosed. US GAAP has no separate investment property model; it stays at cost, except for investment companies."

Tip: Give an example of a qualifying asset. It makes the rule easy to picture.`,

'What is IFRS 15 and how do you support it in Oracle?':
`**Why they ask:** revenue recognition is high-risk, and they want to know you can link the standard to the system.

**Answer:**
"IFRS 15 has five steps: identify the contract, identify the performance obligations, set the transaction price including variable consideration, allocate it by relative standalone selling price, and recognize revenue when or as each obligation is satisfied. It's largely the same as ASC 606, with small differences in some practical expedients, licenses and onerous contracts, which IFRS handles under IAS 37. In Oracle, Revenue Management handles contracts, obligations, SSP, allocation and recognition, integrated with Order Management, AR and Projects, and SLA sends the accounting to GL, including contract assets and liabilities."

Tip: Map each of the five steps to what Revenue Management does. It's the strongest version of this answer.`,

'What disclosures does IFRS 8 operating segments require, and what does it mean for the COA?':
`**Why they ask:** segment reporting is designed into the chart of accounts.

**Answer:**
"IFRS 8 uses the management approach: segments are what the chief operating decision maker reviews. The company discloses segment profit or loss, segment assets if they're reviewed, reconciliations to the totals, and entity-wide information on products, geographies and major customers. For the ERP, that means a segment in the chart of accounts, like business unit or product line, and if balance sheet by segment is needed, balancing by that segment too. The hierarchies must match management reporting so the segment numbers come straight from the ledger."

Tip: Say "design the segment into the COA from day one". Adding it later is expensive.`,

'How do you keep IFRS and US GAAP books reconciled?':
`**Why they ask:** multi-GAAP only works if differences are tracked and explained.

**Answer:**
"I keep a GAAP difference register that lists each difference, its accounts, amounts and owner. Each period I produce an equity and net income bridge between the two ledgers or scenarios. Adjustment-only entries need approval and documentation. Where a difference repeats every month, I automate it, through SLA rules, separate asset books or Lease Accounting, so it's not a manual journal. In FCCS, the Multi-GAAP dimension shows the adjustments separately and totals both views."

Tip: Mention the difference register. It's the document auditors ask for first.`,

'A client moving from US GAAP to IFRS asks what changes in their ERP. What do you tell them?':
`**Why they ask:** a consulting question. They want you to lead the client through it in order.

**Answer:**
"I'd tell them the policy decisions come first, before any configuration: the PP&E model, component depreciation, development costs, leases, provisions, expected credit loss, and inventory costing without LIFO. Then the ledger strategy, primary and secondary, and the asset book design. Then SLA rule changes for the treatments that differ. Then COA and hierarchies for the new presentation, including IFRS 18 from 2027. Then the opening balance conversion under IFRS 1 and the comparatives. And last, reporting templates, FCCS rules, and training for the accountants."

Tip: Start with "policy decisions first". It's what separates a consultant from a configurator.`,

'Which IFRS standards have changed recently or are coming that a GL consultant should watch?':
`**Why they ask:** to see if you keep up to date.

**Answer:**
"The big one is IFRS 18, presentation and disclosure, effective 1 January 2027 with restated comparatives. IFRS 19, reduced disclosures for subsidiaries without public accountability, is also effective in 2027. The IAS 12 Pillar Two amendments added a temporary exception for deferred taxes on the global minimum tax, plus disclosures. The IAS 21 amendments on lack of exchangeability took effect in 2025. And the IFRS 9 and IFRS 7 amendments on classification and measurement apply from 2026. I follow the IASB work plan and the client's auditor updates to stay current."

Tip: Say how you stay current. It matters as much as the list.`,

'What is Oracle FCCS and how does it fit with Fusion GL?':
`**Why they ask:** many GL roles now include consolidation.

**Answer:**
"FCCS, Financial Consolidation and Close, is Oracle's cloud EPM application for group consolidation and close. It handles currency translation, intercompany eliminations, ownership and non-controlling interest, consolidation journals, the cash flow statement and close task management. Fusion GL stays the book of record for each ledger. FCCS receives trial balances by entity, account, period and currency, often with intercompany partner and movement, through Data Integration, with drill-through back to Fusion. Reporting is in Financial Reports, Smart View and Narrative Reporting."

Tip: Say "GL is the book of record". It shows you understand who owns what.`,

'What are the standard dimensions in FCCS?':
`**Why they ask:** dimension design is the core of any FCCS project.

**Answer:**
"The standard dimensions are Account, Entity, Period, Years, Scenario, View, Currency, Consolidation, Intercompany, Data Source and Movement. There's an optional Multi-GAAP dimension and a small number of custom dimensions, like Product or Cost Center, which have to be chosen carefully because there's a limit and they affect performance. The Consolidation dimension tracks the stages, entity input, proportion, elimination and contribution, and Data Source tracks where the data came from, like a data load, a journal, supplemental data or a calculation."

Tip: Mention the limit on custom dimensions. It's the design decision that matters most.`,

'Walk me through the FCCS consolidation process.':
`**Why they ask:** they want to see you understand the whole flow, not just individual features.

**Answer:**
"It starts with loading trial balances and supplemental data for each entity. Then entity-level calculations run. Then translation into the parent's currency, using average and ending rates with historical overrides, and FX and CTA calculated through the Movement dimension. Then proportionalization by ownership and consolidation method. Then eliminations of intercompany balances and investments at the first common parent. Then each entity contributes its results to the parent, and the process repeats up the hierarchy. Top-side adjustments go in as journals, approvals move through the approval unit hierarchy, and before anyone reports I check the calculation status, OK, Impacted or System Changed."

Tip: End with the calculation status check. It's the step that prevents wrong numbers in reports.`,

'How does intercompany elimination work in FCCS?':
`**Why they ask:** intercompany is the most common source of consolidation problems.

**Answer:**
"Intercompany balances are loaded with the Intercompany dimension filled in, which comes from the GL intercompany segment. Intercompany matching reports compare receivables to payables, and revenue to expense, between each pair of partners, with tolerances. During consolidation, the balances are eliminated at the first common parent, and any difference goes to a plug account. When pairs don't match, the usual causes are timing, different FX rates, a missing partner segment, or a posting to the wrong account, and I fix those in GL where possible rather than with a top-side journal."

Tip: Say "fix it at the source in GL". Auditors prefer it, and so do controllers.`,

'How does FCCS handle currency translation and CTA?':
`**Why they ask:** translation is where consolidation numbers get questioned.

**Answer:**
"Exchange rates are entered by period, average and ending, and historical rates or amounts are set as overrides for equity and investments. The P&L is translated at average rates, the balance sheet at ending rates, and equity at historical rates. FCCS calculates FX on opening balances and FX on movements in the Movement dimension, and the difference flows to CTA in OCI. The Currency dimension shows entity currency, parent currency and adjustments. It can also be configured for hyperinflation translation methods."

Tip: Mention FX on opening vs FX on movement. It shows you understand how CTA is built.`,

'How does ownership management and NCI work in FCCS?':
`**Why they ask:** partial ownership is where consolidation gets complex.

**Answer:**
"Each entity has ownership settings under its parent: ownership percentage, control percentage, and a consolidation method, like holding, subsidiary for full consolidation, proportional, equity or discontinued. For partially owned subsidiaries, FCCS calculates non-controlling interest and performs the investment and equity eliminations. Ownership can change by period for acquisitions and disposals, and configurable consolidation rules handle special cases."

Tip: Give a simple example, like 80% owned means 20% NCI in equity and profit.`,

'How do you integrate Fusion GL with FCCS?':
`**Why they ask:** a practical integration question.

**Answer:**
"I use Data Integration with a Fusion GL source connection, choosing the ledgers, balance types and periods. Then the mappings: GL account to FCCS account, balancing segment or legal entity to Entity, intercompany segment to Intercompany, currency, and optionally cost center or product to custom dimensions. Period and category mappings follow, and load rules run per period on a schedule during close. Validation checks catch unmapped members, and drill-through goes back to Fusion GL balances and journals. Writing FCCS journals back to GL is possible but usually not needed."

Tip: Name the key mapping, intercompany segment to the Intercompany dimension. It's what makes eliminations work.`,

'What is the Movement dimension and why is it useful?':
`**Why they ask:** movement data drives the cash flow statement.

**Answer:**
"The Movement dimension holds the roll-forward of each balance sheet account: opening balance, increases, decreases, acquisitions, disposals, FX on opening, FX on movement, and closing. It drives the automated cash flow statement using the indirect method, and roll-forward disclosures like PP&E and equity. To work, it needs movement detail from the GL through mappings or supplemental data, or calculated movements."

Tip: Say it drives the cash flow. That's why it matters to the business.`,

'What is the Multi-GAAP dimension used for?':
`**Why they ask:** to see if you know how FCCS supports more than one accounting standard.

**Answer:**
"It stores local GAAP, the IFRS or US GAAP adjustments, and the total for the other GAAP in the same application. For example, I load local GAAP trial balances, enter or calculate the IFRS adjustments, and report IFRS consolidated results. The other option is separate scenarios, but Multi-GAAP keeps the adjustments visible and easy to reconcile."

Tip: Give the local GAAP to IFRS example. It's the common case.`,

'How do journals work in FCCS and when would you use them?':
`**Why they ask:** too many top-side journals is a warning sign in any close.

**Answer:**
"FCCS journals are for top-side adjustments: reclassifications, consolidation entries, IFRS adjustments, and late adjustments that shouldn't go back to the local ledger. They have workflow, submit, approve, post, and can be recurring or auto-reversing, posted to specific Consolidation and Data Source members. My rule is to keep top-side journals to a minimum and correct at source in GL wherever possible, because that keeps the audit trail clean."

Tip: Say you minimize top-side journals. It's a sign of a well-run close.`,

'What is Task Manager / Close Manager in FCCS?':
`**Why they ask:** close management is part of most FCCS projects.

**Answer:**
"Task Manager runs the close calendar: tasks, owners, dependencies, due dates, integration tasks like a data load, approvals and evidence. Dashboards show status across all entities, so the controller sees what's late. It helps shorten and control the close, and it's often used with Account Reconciliation for balance sheet reconciliations."

Tip: Mention dependencies. They're what make it more than a checklist.`,

'What is Supplemental Data Manager and Enterprise Journals?':
`**Why they ask:** these tools fill the gaps between GL and consolidation.

**Answer:**
"Supplemental Data Manager collects detail that isn't in the GL, like debt schedules, lease details, intercompany transaction detail and disclosure data, through forms with workflow, and it can feed consolidation accounts. Enterprise Journals manages journals with workflow and posts them to the ERP or to FCCS, which is useful for controlled top-side and recurring entries."

Tip: Give one example for each. Debt schedules for supplemental data is easy to remember.`,

'What does the approval unit hierarchy do?':
`**Why they ask:** close controls depend on it.

**Answer:**
"It defines who prepares, reviews and approves each entity's data, by entity, scenario and period, and data moves up through the levels as it's promoted. Once approved, the data is locked, so nobody can change it after sign-off. It gives a controlled and auditable close."

Tip: Mention the lock after approval. That's the control auditors care about.`,

'What is the calculation status and why do you care?':
`**Why they ask:** a classic FCCS trick question.

**Answer:**
"Each entity and period has a status: OK means consolidated and current; Impacted means data changed since the last consolidation; System Changed means metadata or rates changed; No Data means nothing's there. Before anyone reports, every entity should be OK, and if not, I rerun consolidation. If someone says two reports show different numbers, the first thing I check is the calculation status and the rates."

Tip: Give the two-reports-differ scenario. It's often the exact interview question.`,

'How would you design the entity and account hierarchies in FCCS?':
`**Why they ask:** hierarchies decide how consolidation and reporting work.

**Answer:**
"The entity hierarchy follows legal ownership, because that drives consolidation and NCI, with alternate hierarchies for management views or regions using shared members. The account hierarchy follows the financial statements and includes the system accounts FCCS needs, like total balance sheet and income statement, plus rate and ownership accounts. Mappings from the GL chart of accounts have clear owners. And I keep custom dimensions to a minimum for performance."

Tip: Say the entity hierarchy follows legal ownership. It's the rule that makes NCI correct.`,

'How does FCCS produce the cash flow statement?':
`**Why they ask:** automated cash flow is one of the main reasons companies buy FCCS.

**Answer:**
"It uses the Movement dimension. For each balance sheet account, movements are tagged, like increases, decreases, acquisitions, non-cash and FX. The cash flow accounts are calculated from those movements using the indirect method, with the FX effect on cash shown separately. It only works as well as the movement data, so I make sure the GL mappings or supplemental data provide it."

Tip: Say it depends on movement data quality. That's the honest part interviewers respect.`,

'What are common FCCS implementation challenges?':
`**Why they ask:** to see if you've lived through an FCCS project.

**Answer:**
"The common ones are mapping quality from the GL, especially accounts, entities and intercompany partner; intercompany discipline in the source ledgers; getting movement data for the cash flow; ownership complexity and historical rates for equity; performance when there are too many custom dimensions; and change management for finance users moving from spreadsheets or HFM. In my experience, intercompany discipline is the one that decides whether the project succeeds."

Tip: Pick one as the biggest and say why. It shows judgment, not just a list.`,

'How does FCCS compare to Hyperion Financial Management (HFM)?':
`**Why they ask:** many FCCS projects are HFM migrations.

**Answer:**
"FCCS is the cloud successor to HFM. It comes with built-in consolidation logic, dimensions and reports, and Oracle updates it every quarter. It needs much less custom rules coding, using configurable calculations instead of HFM rules files. It has close management, supplemental data and integrations built in. A migration means redesigning the dimensions and rules, not copying HFM as it is."

Tip: Say "not a lift and shift". It's the key message for an HFM client.`,

'What is the difference between consolidating in Fusion GL and in FCCS?':
`**Why they ask:** to see if you can recommend the right tool.

**Answer:**
"Fusion GL can consolidate with ledger sets, translation, intercompany balancing and elimination journals, which is fine for simpler groups. FCCS is a full consolidation engine: ownership and NCI, equity eliminations, multi-GAAP, movement-based cash flow, journals with workflow and close tasks. My rule of thumb: many entities, partial ownership, or statutory consolidated reporting means FCCS."

Tip: Give the rule of thumb. It answers "which would you choose?" before they ask.`,

'How do you reconcile FCCS to Fusion GL?':
`**Why they ask:** if FCCS doesn't tie to GL, nobody trusts it.

**Answer:**
"I run the data load validation reports, totals by entity and account against the GL trial balance, and drill through to GL for any difference. Then I check mapping changes, unmapped members, and period and category mappings. Then top-side journals in FCCS, which the Data Source dimension shows separately. And each entity signs off through the approval process."

Tip: Mention the Data Source dimension. It's the fastest way to see what changed after the load.`,

'Explain the Consolidation dimension members.':
`**Why they ask:** understanding these is how you explain parent numbers to finance.

**Answer:**
"Entity Input is the data loaded or entered for the entity. Entity Consolidation, or Entity Total, is that data after entity-level calculations and adjustments. Proportion is the entity's data multiplied by the ownership percentage. Elimination holds intercompany and investment eliminations. Contribution is what the entity adds to its parent: proportion plus eliminations plus contribution adjustments. When someone asks why the parent isn't the sum of its children, the answer is in these members."

Tip: End with the parent-vs-children question. It's the real use of this knowledge.`,

'How do you handle an acquisition mid-year in FCCS?':
`**Why they ask:** acquisitions test whether you can handle real consolidation events.

**Answer:**
"I add the new entity to the hierarchy with ownership effective from the acquisition period. I load its opening balance sheet at acquisition, with fair values and goodwill through journals or supplemental data. Acquisition movements are recorded for the balance sheet and cash flow. If ownership is partial, NCI is calculated. Translation and consolidation start from the acquisition date, and prior periods stay unchanged."

Tip: Mention acquisition movements in the cash flow. It's the detail most people miss.`,

'How do Fusion GL and FCCS work together during month-end close?':
`**Why they ask:** they want the full close sequence across both systems.

**Answer:**
"In Fusion, subledgers close, then GL adjustments, revaluation and intercompany, and GL is closed or soft-closed. Then a scheduled data load sends the trial balances to FCCS. Entities review their data, translation and consolidation run, top-side journals are posted, approvals move up, and reporting follows. Task Manager orchestrates both systems, and Account Reconciliation runs in parallel. If a late GL adjustment comes in, we reload and reconsolidate, and the calculation status shows which entities are impacted."

Tip: Mention late adjustments and calc status. It's the real-world part.`,

'Give a 60-second summary of your GL, IFRS and FCCS experience for this interview.':
`**Why they ask:** they want a clear, confident summary to anchor the rest of the interview.

**Answer (template, fill in your own facts):**
"I'm an Oracle Financials [title] with [N] years in EBS and Fusion GL and subledgers. I've designed multi-ledger structures with primary, secondary and reporting currency ledgers, for example for [client: industry, number of ledgers]. I led an IFRS program for [client], because [why IFRS was needed]. I know the IFRS and US GAAP differences that drive ledger and SLA design, and I know the close end to end: revaluation, translation, intercompany, allocations and consolidation in FCCS. As a contractor, I learn the close quickly and fix what slows it down."

Tip: Practice it out loud until it takes under a minute. Every fact should be one you can expand on.`,

'What questions should you ask the client at the end of a GL/IFRS/FCCS interview?':
`**Why they ask:** good questions show you're already thinking like part of their team.

**Answer:**
"I'd ask: How many ledgers and entities do you have, and which GAAPs do you report under? Is consolidation in FCCS today, or are you moving from HFM or spreadsheets? What are the biggest close pain points, like days to close, intercompany or top-side journals? Is IFRS 18 or any other standard change in scope? And what would success look like in the first 90 days of this contract?"

Tip: Always ask the 90-day question. It tells you what they'll judge you on.`,

'Design the enterprise structure for a company with 40 legal entities in 15 countries, a US parent reporting in USD under US GAAP.':
`**Why they ask:** a senior architecture question. They want clear choices and trade-offs.

**Answer:**
"For ledgers, I'd create primary ledgers per country and currency, using one global chart of accounts where possible. For each non-USD ledger, I'd add a USD reporting currency if the business needs daily USD visibility; otherwise translation in consolidation is enough. Secondary ledgers only where local GAAP differs materially and must be kept in Oracle; otherwise local adjustments go in a statutory tool. Ledger sets by region make period management easier. Legal entities get balancing segment values; business units go by country or region, with shared services BUs providing AP and AR. FCCS handles group consolidation, eliminations and minority interests. The trade-offs I'd walk the client through are a global vs local chart, the number of ledgers vs close effort, and the translation approach."

Tip: State the trade-offs at the end. Architects are judged on how they explain choices.`,

'When would you put multiple legal entities in one ledger and when would you separate them?':
`**Why they ask:** a key design decision in every Fusion project.

**Answer:**
"Entities can share a ledger when they share the four Cs: chart of accounts, calendar, currency and accounting method. Then each entity gets its own balancing segment values. That means fewer ledgers to close, simpler intercompany and shared reporting. I'd separate them when any of the four Cs differ, or when statutory reporting or local auditors need strict separation, when close timelines differ, when security is easier at ledger level, or when a divestiture is planned and a clean carve-out matters. The trade-off with many entities in one ledger is that intercompany balancing rules and security by balancing segment need careful design."

Tip: Mention the divestiture case. It shows you think beyond the setup screen.`,

'How do Oracle EPM modules fit with Fusion Financials?':
`**Why they ask:** finance architects need to see the whole Oracle finance stack.

**Answer:**
"Planning handles budgets and forecasts, and approved budgets can go to GL for budgetary control or reporting. FCCS handles consolidation and close. Account Reconciliation handles balance sheet reconciliations and transaction matching. Narrative Reporting builds management and board packages. Tax Reporting does the income tax provision. Profitability and Cost Management handles allocations and profitability. They connect to Fusion through Data Integration, sending GL balances to EPM with drill-back to Fusion. The key is designing accounts and entities consistently across GL and EPM."

Tip: End with consistent dimensions. It's the architect's real job here.`,

'A client wants to add a new segment to the COA two years after go-live. How do you respond?':
`**Why they ask:** a real consulting situation. They want you to push back with options, not just say no.

**Answer:**
"First I'd ask what reporting is missing, because often it can be done without a new segment: hierarchies, supporting references, descriptive flexfields, projects or an EPM dimension. If a segment really is needed, Fusion doesn't let you just add a segment to a chart that's in use. The options are a new chart and new ledgers with a COA mapping and balance migration, or using a spare future segment if one was designed in. The impact is wide: integrations, SLA rules, reports, EPM, security, cross-validation rules and training. So I'd recommend a business case and doing it at a fiscal year boundary. And the lesson for every new design is to include a future segment."

Tip: Lead with "what reporting is missing?" It shows you solve the need, not the request.`,

'What makes a chart of accounts "future-proof"?':
`**Why they ask:** COA design is a long-term decision.

**Answer:**
"Each segment has one clear purpose, no overloaded segments. Value ranges have room to grow, and there's at least one future segment with a default value. Reporting uses hierarchies instead of hard-coded roll-ups. There's an intercompany segment from day one. Values are consistent globally, with controlled local extensions. There's governance for adding values: owners, approval and naming rules. And it lines up with EPM dimensions and consolidation."

Tip: Say "one purpose per segment". It's the rule that prevents most COA problems.`,

'How would you design an end-to-end intercompany solution?':
`**Why they ask:** intercompany crosses procurement, finance, tax and treasury. They want the full picture.

**Answer:**
"I'd start by listing the types of flows: goods through supply chain financial orchestration, services and management fees through Fusion Intercompany, financing loans through treasury, and cost allocations through GL allocations with intercompany balancing. The chart has an intercompany segment and balancing rules by legal entity pair. For each country I decide whether intercompany needs a real invoice or just a journal, because tax and statutory rules often require invoices. Then settlement, usually monthly netting through treasury. Then reconciliation, with Fusion intercompany reconciliation or transaction matching in Account Reconciliation. Elimination happens in FCCS. And transfer pricing policy is agreed with tax."

Tip: Mention invoice vs journal-only by country. It's the decision that tax teams care about.`,

'How would you architect a "continuous close" for a large enterprise?':
`**Why they ask:** a forward-looking architect question.

**Answer:**
"The idea is to do close work every day, not just at month-end. Subledgers account and post continuously, hourly or daily. Reconciliations are automated, with daily bank reconciliations and transaction matching in Account Reconciliation. Accruals and allocations run on schedules. Close tasks are managed in FCCS or Account Reconciliation with dependencies and dashboards. AI anomaly detection flags unusual journals and balances. Monthly is a soft close, with a hard close quarterly where it makes sense. And I'd track close KPIs and improve them every cycle."

Tip: Open with "close work every day". It explains the concept in one line.`,

'How do you design SLA rules for a new revenue stream without disrupting existing accounting?':
`**Why they ask:** changes to live accounting are risky. They want a safe method.

**Answer:**
"I identify the event classes and sources the new stream touches. I copy and version the accounting method, and add new journal line rules and account derivation rules with conditions that only fire for the new stream, so existing transactions aren't affected. I use supporting references to report the new stream. I test with an accounting matrix that includes reversals and adjustments. Then I activate it at the start of a period and reconcile the first close carefully."

Tip: Say "conditions that only fire for the new stream". That's how you avoid disrupting existing accounting.`,

'Design the SCM structure for a company with 5 plants, 12 DCs, central procurement and 3 selling entities.':
`**Why they ask:** a cross-functional design question that tests whether you understand SCM structures from finance's side.

**Answer:**
"I'd create one inventory org per plant and per DC, plus an item master org. Cost orgs by plant using standard cost, and DCs grouped into cost orgs using average or standard, with cost books for primary and management views. Procurement is one central procurement BU, with requisitioning BUs for each operating entity and rules for the sold-to legal entity. Each selling entity gets an order management BU, and fulfillment can come from any DC through sourcing rules. Supply chain financial orchestration handles the flows: central procurement to plants, and plants to selling entities with transfer pricing. Planning is one global supply plan with demand by selling entity or region. Shipping networks connect the DCs for rebalancing with transfer orders. And I'd validate the legal flows and tax with finance before configuring anything."

Tip: End with "validate with finance and tax first". It shows you know where these designs go wrong.`,

'What are the "4 Cs" of a ledger in Oracle?':
`**Why they ask:** a basic question that every Oracle Financials consultant should answer quickly.

**Answer:**
"A ledger is defined by four things: the chart of accounts, which is the account structure; the calendar, which defines the periods, like monthly or 4-4-5; the currency; and the accounting method, which is the Subledger Accounting method that tells subledgers how to create journals. Two legal entities can share a primary ledger only if all four are the same. If any one differs, they need separate ledgers."

Tip: Add the rule about sharing a ledger. It turns a definition into a design point.`,

'What is a balancing segment and why is it important?':
`**Why they ask:** balancing segments drive entity reporting and intercompany.

**Answer:**
"The balancing segment is the chart of accounts segment, usually company, for which Oracle makes sure debits equal credits on every journal. If a journal crosses two balancing values, say company 101 and 102, Oracle adds intercompany balancing lines automatically using the intercompany rules. Balancing values are usually assigned to legal entities, so you can produce a balance sheet for each entity. Fusion supports up to three balancing segments, for example company and cost center, if the business needs a balance sheet at that level too."

Tip: Mention the three balancing segments. It's a Fusion detail that shows current knowledge.`,

};
