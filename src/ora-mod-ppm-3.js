// Part 3: SLA in depth, intercompany and cross-charges, GL allocations, reporting, reconciliation, conversions and integrations.
QB['ora-mod-ppm'] = (QB['ora-mod-ppm'] || []).concat([
['SLA', 'Explain how Subledger Accounting is built: event classes, sources, rules and methods.', `**Why they ask:** a Finance lead must explain SLA clearly, especially for Projects.

**Answer:**
"Each subledger raises accounting events, grouped into event classes and types, such as Labor Cost or Revenue in Projects. Sources are the data fields the event provides, like project, expenditure type or organization. Account rules use sources and conditions to build accounts, or segment values, often through mapping sets. Journal line rules define debit or credit, the accounting class and supporting references. Description rules build journal text. These are combined in a journal entry rule set per event class, and the rule sets roll up into the subledger accounting method assigned to the ledger."

Tip: Use the order: events → sources → rules → JLT → rule set → method → ledger.`, 'D', 'S', null, {t:1, f:['What is the difference between an account rule and a mapping set?', 'An account rule decides how an account or segment is built; a mapping set is a lookup table it can use, like expenditure type to natural account.']}],
['SLA', 'How would you change SLA so project costs derive the cost center from the project organization?', `**Why they ask:** a practical SLA design question.

**Answer:**
"I copy the seeded Projects accounting method, because seeded components can't be edited. I create a mapping set from project organization to cost center, then a segment rule for the cost center segment using that mapping set. I attach the rule to the relevant journal entry rule sets, for example labor and miscellaneous cost, activate them, and assign the new method to the ledger. Then I test with Create Accounting in draft against an expected-entries matrix before final."

Tip: Mention copying seeded rules — interviewers check for it.`, 'D', 'S', null, {f:['What happens if the mapping set has no value?', 'Use a default value or let accounting fail into an error report; defaults are safer, with a report to catch them.']}],
['SLA', 'How does Projects accounting get to GL — create accounting, summarization and drill-down?', `**Why they ask:** practical knowledge of the posting flow.

**Answer:**
"Create Accounting for Projects runs by process category, like costs or revenue, in draft or final mode. Final entries are transferred to GL and can be posted automatically. Journal import can summarize lines by account to keep GL small, but the detail stays in SLA, so users drill from GL journal to the subledger entry and then to the expenditure item or invoice."

Tip: Say summarization doesn't lose detail — it stays in SLA.`, 'B', 'M', null, {f:['How do you check what hasn\'t been accounted yet?', 'Run the subledger period close exceptions report and unaccounted transactions reports before closing the period.']}],
['Intercompany', 'What is the difference between intercompany balancing rules and intercompany transactions in Fusion?', `**Why they ask:** a common confusion and a must-know for Finance.

**Answer:**
"Balancing rules work automatically inside one journal: when a journal hits two primary balancing segment values, GL or SLA adds due-to and due-from lines so each balances. Intercompany transactions are actual business transactions between legal entities, like charges for services, created in the Intercompany module with approval, and optionally turned into AR and AP invoices when the entities need formal invoices for tax or legal reasons."

Tip: Balancing = automatic in a journal; transactions = formal, between entities.`, 'D', 'S', null, {t:1, f:['When must you use AR and AP invoicing instead of just balancing?', 'When entities are separate legal companies that need invoices for tax, VAT or transfer pricing, or settle cash between them.']}],
['Intercompany', 'How are intercompany balancing rules built and which one wins?', `**Why they ask:** tests how the setup actually works.

**Answer:**
"Rules can be defined at four levels: primary balancing segment, legal entity, ledger, and chart of accounts. Each rule gives the receivable and payable accounts, by source and category or for all. Fusion checks the most specific rule first: primary balancing segment value rules, then legal entity, then ledger, then chart of accounts, so a chart-level rule acts as the default. If an entity also uses clearing company options, those decide which entity is the counterparty when a journal has many balancing values."

Tip: Remember the order: segment → legal entity → ledger → chart.`, 'D', 'S', null, {t:1, f:['What is a clearing company?', 'A balancing value used as the counterparty when one journal crosses many entities, so you don\'t get many-to-many due-to and due-from lines.']}],
['Intercompany', 'How do you set up intercompany transactions in Fusion?', `**Why they ask:** the module setup steps.

**Answer:**
"Define intercompany system options such as minimum amount, currency, conversion rate type and whether invoicing is required; create intercompany organizations linked to legal entities and receivables and payables business units; define transaction types with approval and invoicing flags; set intercompany accounts; and open intercompany periods. Users then create a batch, the receiver approves, and the system creates GL journals or AR and AP invoices."

Tip: Mention receiver approval — it reduces disputes.`, 'D', 'S', null, {f:['How do you reduce intercompany disputes at month-end?', 'Receiver approval, agreed cut-off dates, and reconciling by counterparty before close.']}],
['Intercompany', 'How do project cross-charges work when one business unit charges another business unit\'s project?', `**Why they ask:** Projects plus intercompany is common in large companies.

**Answer:**
"Cross-charge happens when a resource from one business unit or legal entity works on a project owned by another. Options are: no cross-charge; borrowed and lent accounting, which moves cost between organizations in the same legal entity; or intercompany billing, where the provider issues an internal invoice to the receiver through Project Billing, AR and AP, because they're different legal entities. Transfer price rules set the markup."

Tip: Borrowed and lent within a legal entity; intercompany billing across legal entities.`, 'D', 'S', null, {t:1, f:['Why not just use balancing rules for cross-charges between legal entities?', 'Because separate legal entities often need a real invoice and a transfer-price markup for tax; balancing rules only create due-to and due-from entries.']}],
['Intercompany', 'How do you reconcile intercompany balances?', `**Why they ask:** a key close control.

**Answer:**
"I run the Intercompany Reconciliation Report, which matches receivable and payable balances by entity pair, and drill to differences. Typical causes are timing, currency rates, one side not approved or posted, or wrong accounts. Reconciliation is a close step before consolidation, with agreed tolerances and owners."

Tip: Mention doing it before consolidation, not after.`, 'B', 'M', null, {f:['What is the most common cause of differences?', 'Timing: one entity has booked the charge and the other hasn\'t, often around cut-off.']}],
['Allocations', 'How are allocation rules built in Fusion GL?', `**Why they ask:** allocations are named often in Finance interviews.

**Answer:**
"Allocations use Calculation Manager against the GL balances cube. A rule has a point of view for fixed dimensions like ledger, period and scenario; a source, the pool to allocate, such as IT cost center expenses; a basis, the driver such as headcount or square feet, often from statistical accounts; a target, where amounts go; and an offset, which credits the source. Rules can use run-time prompts for period and are grouped into rule sets, run in sequence for step-down allocations. Generate General Ledger Allocations creates the journal, which can post automatically."

Tip: Remember: point of view, source, basis, target, offset.`, 'D', 'S', null, {t:1, f:['How do you keep allocation drivers current?', 'Load statistical balances like headcount each month before running allocations, with a check report.']}],
['Allocations', 'Give an example of an allocation rule you would build.', `**Why they ask:** they want to see you apply it.

**Answer:**
"Allocating IT costs to business cost centers by headcount. Point of view: ledger, current period, actual. Source: all IT cost center expense accounts. Basis: statistical headcount by cost center. Target: each cost center, to an IT allocation expense account. Offset: an IT allocation credit account in the IT cost center. I test in a test period, check the source nets to zero and targets add up, then schedule it in the close calendar."

Tip: Mention checking that source equals targets.`, 'B', 'M', null, {f:['How would you do a step-down allocation?', 'Order the rules in a rule set so the first pool allocates, then the next pool includes what it received, run in sequence.']}],
['Allocations', 'When do you use GL allocations versus project burdening?', `**Why they ask:** shows judgment across modules.

**Answer:**
"Burdening applies overhead at the expenditure-item level, so it lands on the project and affects billing, revenue and capitalization, which is right for cost-plus contracts or government work. GL allocations work on balances at summary level and are right for management reporting of shared costs. If overhead must reach the job, use burdening; otherwise, allocations are simpler."

Tip: Ask: does the overhead need to be on the job?`, 'D', 'S', null, {f:['Can you use both?', 'Yes — burdening for project overhead recovery and GL allocations for remaining shared costs, with a reconciliation of overhead absorbed.']}],
['Reconciliation', 'How do you reconcile Projects to GL?', `**Why they ask:** a control Finance owns.

**Answer:**
"By period, I compare project cost, revenue, unbilled and billings in excess in Projects against the GL control accounts, using supporting reference balances and Projects-to-GL reconciliation reports. Before close I clear unaccounted transactions and import exceptions. Differences are usually GL manual journals or costs not yet imported."

Tip: Mention both unaccounted transactions and import exceptions.`, 'D', 'S', null, {t:1, f:['Why might AP cost be in GL but not in Projects?', 'The invoice was accounted in AP but Import Costs hasn\'t run or failed for those distributions.']}],
['Reporting', 'What project reports does Finance usually need, and where do they come from?', `**Why they ask:** practical reporting knowledge.

**Answer:**
"Job cost by task and expenditure type, budget versus actual and forecast, commitments, revenue and billing, WIP and over/under-billing, margin by job, retention, and capital project CIP. They come from OTBI Projects subject areas for self-service, BIP for formatted reports, and Construction Intelligence or Fusion Data Intelligence for trends and dashboards, reconciled to GL."

Tip: Name the WIP schedule first for construction clients.`, 'B', 'M', null, {f:['Which reports would you show a CFO?', 'WIP schedule, margin by job and fade trends, backlog, and cash: billings, collections and retention.']}],
['Conversion', 'How would you convert open projects from a legacy system into Fusion?', `**Why they ask:** conversions often fall to the Finance lead.

**Answer:**
"I load project structures and contracts with FBDI or APIs, then summarized cost to date by task and expenditure type as accounted cost, so it doesn't post again to GL; revenue and billing to date; open AR invoices and retention; budgets and forecasts; and open commitments. GL balances convert separately. I reconcile project totals to legacy and to GL after each mock conversion."

Tip: Converted costs come in as already accounted — say so.`, 'D', 'S', null, {f:['Do you convert transaction-level history?', 'Usually not; summarized cost by task and type is enough, with detail kept in an archive.']}],
['Integration', 'How would you integrate Primavera with Fusion Projects?', `**Why they ask:** common on construction and engineering programs.

**Answer:**
"Through OIC, with Oracle's prebuilt integrations where available. Fusion creates the project and financial task structure, which is sent to Primavera; Primavera builds the detailed schedule and sends progress or percent complete back to Fusion for revenue and billing; Fusion sends committed and actual cost to Primavera for earned value. I agree the task mapping level, frequency and error handling."

Tip: Agree who owns the WBS before designing the interface.`, 'D', 'S', null, {f:['What usually breaks this integration?', 'Task structures getting out of sync when one side adds or renames tasks without the other.']}],
['Security', 'How is data access secured in Projects?', `**Why they ask:** controls and SOX.

**Answer:**
"Job roles like project accountant, billing specialist and project manager give functions. Data access is by business unit for financial roles and by project role for project managers, so managers see their projects. I check segregation of duties, such as the same person creating contracts and approving invoices, and test with real users in UAT."

Tip: Mention project manager access by project role.`, 'B', 'M', null, {f:['Which SOD conflict matters most in Project Billing?', 'One person creating contract billing terms and also approving and releasing invoices.']}],
['Situational', 'Project costs are in Projects but not in GL. How do you troubleshoot?', `**Why they ask:** a real support scenario.

**Answer:**
"I check whether the costs come from a source Projects accounts, like labor or burden; if so, run Create Accounting for Projects and check errors in the output and unaccounted transactions report. Common causes are account rule failures, closed GL periods, or cross-validation errors. If the costs came from AP or receipts, they're accounted in those modules instead, so I check there."

Tip: Start by asking which module should have accounted the cost.`, 'B', 'M', null, {f:['What is the fix for a cross-validation error in project accounting?', 'Correct the account rule or mapping set so it builds a valid combination, then rerun accounting.']}],
['Role Fit', 'You are a Finance lead, not a Projects consultant. Why does Projects knowledge matter to you?', `**Why they ask:** they want confidence that you can work across the line.

**Answer:**
"In a project-driven business, most of the GL is fed by Projects: cost, revenue, unbilled and billings in excess, retention and CIP. I need to design the chart, SLA, intercompany and reporting so Projects and Finance reconcile, and run a close that depends on Projects processes. I don't configure Projects, but I own how it lands in Finance and I partner with the Projects lead on everything that touches accounting."

Tip: Use "I own how Projects lands in Finance."`, 'B', 'S', null, {t:1, f:['Where would you draw the line with the Projects consultant?', 'They own project setup, billing rules and planning; I own accounting rules, GL, intercompany, reconciliation and close, and we co-own revenue and capitalization design.']}]
]);
