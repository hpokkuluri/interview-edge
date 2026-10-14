// Oracle Modules — General Ledger deep dive (part 1: Fusion GL). Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-gl'] = (QB['ora-mod-gl'] || []).concat([
['Fusion GL', 'Walk me through the key components you set up for a ledger in Fusion GL.',
`- **Chart of accounts** structure and instance (segments, value sets, segment labels: primary balancing, cost center, natural account, intercompany).
- **Accounting calendar** (period type, adjusting period for year-end).
- **Ledger currency** and **accounting method** (SLA).
- **Legal entities** and **balancing segment value assignments**.
- **Ledger options**: retained earnings account, suspense, rounding, cumulative translation adjustment (CTA), net income account, entered currency balancing, journal approval, intercompany balancing, revaluation/translation defaults, average balance processing.
- **Reporting currencies** / **secondary ledgers**.
- **Ledger sets** and **data access sets**.
- **Account hierarchies** published to the **GL balances cube**.`, 'D'],

['Fusion GL', 'What is the GL balances cube (Essbase) and why does it matter?',
`- Each **chart of accounts + calendar** combination gets an **Essbase balances cube** updated in real time when journals post.
- Powers **Smart View**, **Financial Reporting**, **Account Monitor/Inspector**, allocations (Calculation Manager) and **multidimensional analysis**.
- Dimensions include accounting period, ledger, each COA segment, currency, currency type, scenario (actual, budget), balance amount (period/QTD/YTD) and amount type.
- **Account hierarchies (trees)** must be **published** to the cube for roll-up reporting.
- If the cube is out of sync (e.g. after hierarchy changes), run **Create Cubes / Rebuild Dimension Members / Refresh** processes.`, 'D'],

['Fusion GL', 'How does year-end close work in Fusion GL?',
`- Post all adjustments, including an **adjusting period** (e.g. "Adj-24") if the calendar has one.
- Run final revaluation/translation, intercompany and allocations; reconcile.
- **Open the first period of the new year** — GL automatically rolls **P&L balances into the retained earnings account** (defined per ledger, by balancing segment) and carries balance sheet balances forward. No closing journal is needed.
- If late adjustments hit the prior year after the new year is open, **reopen** the prior period, post, and re-open the next year period to refresh retained earnings.
- Close/permanently close after audit.`, 'D'],

['Fusion GL', 'What are the journal reversal options in Fusion GL?',
`- **Reversal period**: next period, same period, or a specific period; **reversal date** for average-balance ledgers.
- **Reversal method**: **switch debit/credit** or **change sign** (negative amounts).
- Set by **journal category** (e.g. accruals auto-reverse) via **Manage Journal Reversal Criteria** and **AutoReverse** scheduling.
- Manual reversal from the journal page.
- Reversals keep a link to the original for audit.`, 'D'],

['Fusion GL', 'Explain reporting currency conversion levels: subledger, journal and balance.',
`- **Balance level**: translates period-end balances (like translation) — cheapest; no transaction detail in the reporting currency.
- **Journal level**: every posted GL journal is converted and posted to the reporting currency.
- **Subledger level**: subledger accounting creates entries directly in the reporting currency (most detail, highest volume) — needed when subledger-level reporting in the second currency matters.
- Choose based on detail required, volume and performance. Same rules apply to secondary ledgers.`, 'D'],

['Fusion GL', 'What are journal conversion rules and COA mappings for secondary ledgers?',
`- **Journal conversion rules** decide which journals (by source/category) are copied from the primary to the secondary/reporting ledger at journal level — e.g. exclude manual GAAP-specific adjustments that should only exist in one ledger.
- **Chart of accounts mapping** converts primary COA combinations into the secondary ledger's COA (segment rules or account rules), needed when the secondary ledger uses a **different COA** (e.g. a local statutory COA).
- Both are set on the **primary-to-secondary ledger relationship**.`, 'D'],

['Fusion GL', 'How do you set up revaluation in Fusion GL?',
`- **Define revaluation**: accounts to revalue (filters on account ranges — usually monetary balance sheet accounts: AR, AP, cash, intercompany, loans in foreign currency), rate type (e.g. period-end Corporate), unrealized gain and loss accounts, and whether to revalue **P&L accounts** (PTD/YTD).
- Run per ledger (or ledger set) per period; post the generated journal.
- Revaluation journals usually **auto-reverse** next period.
- Primary BSV can be kept from the source account for gain/loss.`, 'D'],

['Fusion GL', 'How does translation work in Fusion GL and where does CTA go?',
`- Converts a ledger's **balances** into another currency for reporting/consolidation (translated balances, not journals).
- **Balance sheet** at period-end rate; **income statement** at average (PTD) rate; **equity/historical accounts** at **historical rates or amounts** (defined via Manage Historical Rates).
- The balancing difference goes to the **cumulative translation adjustment (CTA)** account defined on the ledger.
- Run after revaluation and all postings; rerun after late adjustments.
- Many groups now translate in **FCCS** instead and only use GL translation for local needs.`, 'D'],

['Fusion GL', 'Explain how intercompany balancing works when a journal crosses legal entities.',
`- If a journal has lines for **different primary balancing segment values** (legal entities), GL/SLA creates **intercompany receivable/payable** lines automatically.
- Rules are defined in **Manage Intercompany Balancing Rules** (by ledger, legal entity, source/category, chart of accounts) — e.g. "use account 1810 for IC receivable with BSV of the trading partner in the intercompany segment".
- **Clearing company** options if many entities are on one side (use a clearing BSV or a default).
- **Intracompany** balancing handles BSVs within the same legal entity.
- Results feed intercompany reconciliation and eliminations.`, 'D'],

['Fusion GL', 'What is a suspense account and when would you enable it?',
`- If a journal is **out of balance**, GL can post the difference to a **suspense account** instead of rejecting it.
- Enabled per ledger (with optional suspense by source/category).
- Most companies **disable** it for manual journals and integrations — better to fix the source.
- If used, reconcile and clear suspense every period; it's an audit flag.`, 'B'],

['Fusion GL', 'How do you load budgets into Fusion GL?',
`- **Budget scenarios** in the balances cube (Scenario dimension members).
- Load via **spreadsheet (Smart View / budget upload)** or **FBDI** budget template, by account and period.
- Or integrate from **EPM Planning** (preferred for real planning processes).
- Used for **budget vs actual** reports in Financial Reporting/Smart View.
- **Budgetary control** budgets are separate (control budgets) and enforce spending limits.`, 'D'],

['Fusion GL', 'What are statistical journals and statistical accounts used for?',
`- Record **non-monetary quantities** — headcount, square footage, units produced — in the ledger (STAT currency or statistical accounts).
- Used as **bases for allocations** (rent by square feet, IT cost by headcount) and KPIs (cost per head).
- Loaded each period by journal/spreadsheet or integration.`, 'B'],

['Fusion GL', 'How do allocations work in Fusion GL with Calculation Manager?',
`- **Allocation rules** built in **Calculation Manager** against the balances cube: **source** (pool to allocate), **basis** (driver — statistical or monetary), **target** (receiving accounts/cost centers), **offset** (credit back).
- **Rule sets** run several rules in sequence (step-down allocations).
- **Runtime prompts** (period, ledger) make rules reusable.
- **Generate General Ledger Allocations** creates journals, which then post (optionally auto-post).
- Test with known numbers; document drivers for audit.`, 'D'],

['Fusion GL', 'How do you troubleshoot a Smart View report that doesn\'t match the trial balance?',
`- Check **POV**: ledger, period, currency, **currency type** (entered vs total), **amount type** (PTD/YTD), scenario, balance type.
- Were journals **posted** after the last cube update? (Cube updates on posting — check for failed **Update Balances Cube** processes.)
- **Hierarchy version**: tree changed but not republished.
- **Data access** differences between users.
- Compare the trial balance report with the same parameters; drill into Account Inspector.`, 'D'],

['Fusion GL', 'Explain ledger sets and when you\'d use them.',
`- A **ledger set** groups ledgers sharing the **same COA and calendar** (currencies can differ).
- Lets you **open/close periods**, run **revaluation/translation/allocations**, report and grant **data access** across many ledgers at once.
- Typical: all European ledgers in one set; a global set for consolidated reporting in GL.`, 'B'],

['Fusion GL', 'What is a data access set and how does it differ from segment value security?',
`- **Data access set**: which **ledgers/ledger sets** and which **primary balancing segment values** (or management segment values) a user can access, read-only or read/write — controls journal entry, inquiry and period management.
- **Segment value security**: restricts **any segment's values** (e.g. cost centers) in entry and reporting.
- Typical design: data access sets for legal-entity scope; segment security only where truly needed (performance and complexity).`, 'D'],

['Fusion GL', 'How does journal import from external systems work, and how do you make it robust?',
`- **FBDI journal import** (JournalImportTemplate) or **ERP Integration Service** (importBulkData) from OIC; also REST for small volumes.
- Process: load to **GL_INTERFACE** → **Import Journals** (by ledger, source, group ID) → optional **AutoPost**.
- Robustness: a dedicated **journal source** per system, **group IDs** per batch, **cross-validation** before sending, **control totals**, callbacks/alerts on errors, idempotency to avoid double loads, reconciliation reports per source.`, 'D'],

['Fusion GL', 'What is the difference between Account Monitor, Account Inspector and Financial Reports?',
`- **Account Monitor**: watch key account balances (with thresholds) on the GL dashboard; drill down.
- **Account Inspector**: ad-hoc pivot/drill on the balances cube by any segment and hierarchy, down to journals and subledger detail.
- **Financial Reporting / Smart View**: formatted statements and Excel-based analysis.
- All read the same Essbase cube.`, 'B'],

['Fusion GL', 'How do you set up journal approval and what are common issues?',
`- Enable at **ledger** and **journal source** level; rules in **BPM (Manage Journal Approval Rules)** — e.g. by maximum line amount, ledger, category, approval hierarchy (supervisor/position/approval groups).
- **Issues**: missing approvers (terminated supervisors), self-approval, approvals routed for subledger sources unintentionally, slow approvals at close.
- **Fixes**: fallback approvers, delegation, exclude subledger sources, monitor pending approvals during close.`, 'D'],

['Fusion GL', 'How do you handle a mid-year change to the chart of accounts, such as splitting a cost center?',
`- Create the new value(s), update **hierarchies**, publish trees.
- Update **defaults**: HCM assignments, supplier/customer defaults, SLA mapping sets, allocations, cross-validation rules, security.
- **Reclass** existing balances with a journal (or keep history and start fresh — agree with FP&A).
- End-date the old value (disable after a transition).
- Re-test integrations and reports; communicate the effective date.`, 'D'],

['Fusion GL', 'What GL reports and checks are part of your month-end close?',
`- **Trial balance** by ledger/legal entity.
- **Unposted journals** and **journals pending approval**.
- **Subledger to GL reconciliations** (AP, AR, FA, Inventory).
- **Intercompany reconciliation**.
- **Suspense and clearing account** balances.
- **Revaluation/translation** results; CTA movement.
- **Variance analysis** vs prior period/budget.
- **Journal entry review** for manual/top-side entries.`, 'B'],

['Fusion GL', 'How would you design the GL for a company reporting under IFRS at group level and US GAAP for a US parent filing?',
`- Pick the **primary ledger GAAP** as the one with most transactions/legal requirement in each entity (often local GAAP or IFRS).
- **Secondary ledgers** for the other GAAP: **subledger-level** if many transactions differ (leases, revenue, assets); **adjustment-only** if few.
- **Fixed Assets**: separate corporate books per GAAP linked to each ledger.
- **Ledger sets** per GAAP for close and reporting.
- **FCCS** with the **Multi-GAAP** dimension (or separate scenarios) for consolidated IFRS and US GAAP.
- Document **GAAP differences** and the accounts used for adjustments.`, 'D'],

['Fusion GL', 'What is an adjusting period and when do you use it?',
`- An extra calendar period that overlaps the year-end date (e.g. "Adj-24" dated Dec 31) used for **audit and year-end adjustments** without reopening December.
- Balances roll into year-end reporting; retained earnings are recalculated when the new year is opened.
- Keeps December's operational results separate from audit adjustments.`, 'B'],

['Behavioral', 'Tell me about a difficult GL close issue you resolved as a contractor.',
`Structure (STAR), keep it specific:
- **Situation**: e.g. intercompany out of balance by $1.2M across 8 entities on day 3 of close.
- **Task**: find and fix before the consolidation deadline.
- **Action**: ran IC reconciliation by trading partner, traced to manual journals with the wrong intercompany segment and FX timing differences; corrected entries; added an IC segment cross-validation rule and a weekly IC matching review.
- **Result**: close met; IC differences dropped to near zero the following months.`, 'B'],

['Behavioral', 'As a GL contractor, how do you get productive in the first two weeks?',
`- **Read**: enterprise structure, COA, ledger setup, close calendar, recent audit findings, open tickets.
- **Shadow** a month-end close.
- **Map** integrations and journal sources feeding GL.
- **Meet** the controller, GL accountants, FP&A, IT/support.
- **Quick win**: fix a recurring close pain point.
- Keep a running **issues and recommendations log**.`, 'B']
]);
