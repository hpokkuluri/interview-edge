// Oracle Modules — General Ledger deep dive (part 3: FCCS consolidation and close). Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-gl'] = (QB['ora-mod-gl'] || []).concat([
['FCCS', 'What is Oracle FCCS and how does it fit with Fusion GL?',
`- **Financial Consolidation and Close (FCCS)** is Oracle's cloud **EPM** application for **group consolidation and close**: currency translation, intercompany eliminations, ownership/NCI, consolidation journals, cash flow, and close task management.
- **Fusion GL** remains the book of record for each ledger; FCCS receives **trial balances** (by entity, account, period, currency, often with intercompany partner and movement) via **Data Integration**, with **drill-through** back to Fusion.
- Reporting via **Financial Reports, Smart View and Narrative Reporting**.`, 'B'],

['FCCS', 'What are the standard dimensions in FCCS?',
`- **Account**, **Entity**, **Period**, **Years**, **Scenario** (Actual, Budget…), **View** (Periodic, YTD, QTD), **Currency**, **Consolidation**, **Intercompany**, **Data Source**, **Movement**.
- Optional **Multi-GAAP** dimension and **custom dimensions** (e.g. Product, Cost Center) — limited in number, so choose carefully.
- **Consolidation** dimension tracks the stages (entity input, proportion, elimination, contribution); **Data Source** tracks where data came from (data input, journals, supplemental data, calculations).`, 'D'],

['FCCS', 'Walk me through the FCCS consolidation process.',
`- **Load** trial balances (and supplemental data) for each entity.
- **Calculate** entity-level rules (configurable calculations).
- **Translate** to parent currency using **average/ending rates** and historical overrides; **FX/CTA** calculated through the Movement dimension.
- **Proportionalize** by ownership/consolidation method.
- **Eliminate** intercompany balances and investments (equity elimination) at the first common parent.
- **Contribute** results to the parent; repeat up the hierarchy.
- **Journals** for top-side adjustments; **approvals** through the approval unit hierarchy.
- **Review** calculation status (OK, Impacted, System Changed) and reports.`, 'D'],

['FCCS', 'How does intercompany elimination work in FCCS?',
`- Intercompany balances are loaded with the **Intercompany (partner) dimension** populated (from the GL intercompany segment).
- **Intercompany matching reports** compare receivable vs payable (and revenue vs expense) between partner pairs, with tolerances.
- On consolidation, balances are eliminated at the **first common parent**, with differences posted to a **plug (elimination difference) account**.
- Root cause of mismatches: timing, FX rates, missing partner segment, misposted accounts — fix in GL where possible.`, 'D'],

['FCCS', 'How does FCCS handle currency translation and CTA?',
`- **Exchange rates** entered by period for rate accounts: **Average** and **Ending**; historical rates/amounts via **overrides** for equity and investments.
- P&L translated at average (periodic) rates; balance sheet at ending; equity at historical.
- **FX on opening balances** and **FX on movements** calculated in the **Movement** dimension; the difference flows to **CTA** (OCI).
- **Currency dimension** shows entity currency, translated (parent) currency and adjustments.
- Supports translation methods for hyperinflation with configuration.`, 'D'],

['FCCS', 'How does ownership management and NCI work in FCCS?',
`- **Ownership settings** per entity and parent: **% ownership**, **% control**, and **consolidation method** — Holding, Subsidiary (full consolidation), Proportional, Equity, Discontinued, etc.
- FCCS calculates **non-controlling interest** for partially owned subsidiaries and performs **investment/equity eliminations**.
- Ownership can change by period (acquisitions, disposals).
- Mention configurable consolidation rules for special cases.`, 'D'],

['FCCS', 'How do you integrate Fusion GL with FCCS?',
`- **Data Integration (Data Exchange)** with a **Fusion GL source connection**: select ledgers/balance types, periods.
- **Mappings**: GL account → FCCS account; BSV/legal entity → Entity; intercompany segment → Intercompany; currency; optional cost center/product → custom dimensions.
- **Period and category** mappings; **load rules** run per period (scheduled during close).
- **Validation** checks and **drill-through** to Fusion GL balances/journals.
- **Write-back** of FCCS journals to GL is possible but usually not needed.`, 'D'],

['FCCS', 'What is the Movement dimension and why is it useful?',
`- Captures **roll-forward detail** for balance sheet accounts: opening balance, increases, decreases, acquisitions, disposals, FX on opening, FX on movement, closing.
- Drives the **automated cash flow statement** (indirect method) and roll-forward disclosures (PP&E, equity).
- Requires GL data with movement detail (via mappings or supplemental data) or calculated movements.`, 'D'],

['FCCS', 'What is the Multi-GAAP dimension used for?',
`- Stores **local GAAP**, **IFRS/US GAAP adjustments** and the **total** for another GAAP within the same application.
- E.g. load local GAAP trial balances, enter or calculate IFRS adjustments, and report IFRS consolidated results.
- Alternative is separate scenarios; Multi-GAAP keeps reconciliations visible.`, 'D'],

['FCCS', 'How do journals work in FCCS and when would you use them?',
`- **Consolidation journals** for **top-side adjustments**: reclassifications, consolidation entries, IFRS adjustments, late adjustments that shouldn't go back to the local ledger.
- Journals have **workflow** (submit, approve, post), can be recurring, auto-reversing, and are posted to specific Consolidation/Data Source members.
- Good practice: minimize top-side journals; correct at source (GL) where possible for audit trail.`, 'D'],

['FCCS', 'What is Task Manager / Close Manager in FCCS?',
`- Manages the **close calendar**: tasks, owners, dependencies, due dates, integrations (e.g. a data load task), approvals, and evidence.
- Dashboards show status across entities.
- Helps shorten and control close; used alongside **Account Reconciliation (ARCS)** for balance sheet reconciliations.`, 'B'],

['FCCS', 'What is Supplemental Data Manager and Enterprise Journals?',
`- **Supplemental Data Manager**: collects detailed data not in the GL (e.g. debt schedules, lease details, intercompany transaction detail, disclosure data) via forms with workflow; can feed consolidation accounts.
- **Enterprise Journals**: manage journals with workflow and post them to ERP or FCCS — useful for controlled top-side and recurring entries.`, 'D'],

['FCCS', 'What does the approval unit hierarchy do?',
`- Defines **who prepares, reviews and approves** each entity's data (by entity/scenario/period), with **promotion** through levels.
- Locks data once approved; prevents changes after sign-off.
- Supports a controlled, auditable close process.`, 'B'],

['FCCS', 'What is the calculation status and why do you care?',
`- Each entity/period shows a status: **OK** (consolidated and current), **Impacted** (data changed since last consolidation), **System Changed** (metadata/rates changed), **No Data**.
- Before reporting, ensure entities are **OK** — rerun consolidation if impacted.
- Common interview trick: "numbers differ between two reports" → check calc status and rates.`, 'B'],

['FCCS', 'How would you design the entity and account hierarchies in FCCS?',
`- **Entity hierarchy** reflects legal ownership (for consolidation/NCI) and possibly alternate hierarchies for management or regions (shared members).
- **Account hierarchy** aligned to financial statements, with **system accounts** FCCS requires (e.g. FCCS_Total Balance Sheet, Income Statement), plus rate and ownership accounts.
- **Map** from the GL COA with clear ownership of mappings.
- Keep custom dimensions minimal for performance.`, 'D'],

['FCCS', 'How does FCCS produce the cash flow statement?',
`- Uses the **Movement** dimension: for each balance sheet account, movements are tagged (e.g. increases/decreases, acquisitions, non-cash, FX).
- Cash flow accounts are calculated from these movements (indirect method), with FX effect on cash shown separately.
- Requires good movement data from GL mappings or supplemental data.`, 'D'],

['FCCS', 'What are common FCCS implementation challenges?',
`- **Mapping quality** from GL (accounts, entities, intercompany partner).
- **Intercompany** discipline in source ledgers.
- **Movement data** availability for cash flow.
- **Ownership** complexity and historical rates for equity.
- **Performance** with many custom dimensions.
- **Change management** for finance users moving from spreadsheets or HFM.`, 'D'],

['FCCS', 'How does FCCS compare to Hyperion Financial Management (HFM)?',
`- FCCS is the **cloud successor** to HFM: prebuilt consolidation logic, dimensions and reports; quarterly Oracle updates.
- **Less custom rules coding** (configurable calculations vs HFM rules files).
- Built-in **close management**, supplemental data and integrations.
- Migration involves redesigning dimensions and rules, not lifting HFM as-is.`, 'D'],

['FCCS', 'What is the difference between consolidating in Fusion GL and in FCCS?',
`- **Fusion GL**: ledger sets, translation, intercompany balancing, elimination journals — fine for simpler groups.
- **FCCS**: full consolidation engine — ownership and NCI, equity eliminations, multi-GAAP, movement-based cash flow, journals with workflow, close tasks.
- Rule of thumb: many entities, partial ownership, statutory consolidated reporting → FCCS.`, 'B'],

['FCCS', 'How do you reconcile FCCS to Fusion GL?',
`- **Data load validation** reports (totals by entity/account vs GL trial balance).
- **Drill-through** to GL for differences.
- Check **mapping** changes, **unmapped** members, period/category mappings.
- Check **top-side journals** in FCCS (Data Source dimension shows their effect).
- Sign-off per entity in the approval process.`, 'D'],

['FCCS', 'Explain the Consolidation dimension members.',
`- **Entity Input**: data loaded/entered for the entity.
- **Entity Consolidation / Entity Total**: entity data after entity-level calculations and adjustments.
- **Proportion**: entity data proportionalized by the ownership percentage.
- **Elimination**: intercompany and investment eliminations.
- **Contribution**: the entity's total contribution to the parent (proportion + elimination + contribution adjustments).
Understanding these is key to explaining "why does the parent number differ from the sum of children".`, 'D'],

['FCCS', 'How do you handle an acquisition mid-year in FCCS?',
`- Add the entity to the hierarchy with **effective ownership** from the acquisition period.
- Load opening balance sheet at acquisition (fair values, goodwill via journals/supplemental data).
- **Movement**: acquisition movements for balance sheet and cash flow.
- **NCI** if partial ownership.
- Translate and consolidate from the acquisition date; prior periods unaffected.`, 'D'],

['FCCS', 'How do Fusion GL and FCCS work together during month-end close?',
`- GL: subledgers close → GL adjustments, revaluation, intercompany → GL closed/soft-closed.
- **Data load** to FCCS (scheduled task) → entity reviews → translation/consolidation → top-side journals → approvals → reporting.
- **Task Manager** orchestrates both; **ARCS** reconciliations in parallel.
- Late GL adjustments trigger reload and reconsolidation (calc status Impacted).`, 'B'],

['Interview Prep', 'Give a 60-second summary of your GL, IFRS and FCCS experience for this interview.',
`Shape it like this (tailor the facts):
- "I'm an Oracle Financials [your title] with [N] years in EBS and Fusion GL and subledgers."
- "I've designed **multi-ledger** structures with **primary, secondary and reporting-currency ledgers** — for example [your client: industry, number of ledgers, reporting ledgers], and an **IFRS** program for [your client and why IFRS was needed]."
- "I know the **IFRS vs US GAAP** differences that drive ledger and SLA design, and the **close**: revaluation, translation, intercompany, allocations and consolidation in **FCCS**."
- "As a contractor I come in, learn the close quickly, and fix what slows it down."`, 'B'],

['Interview Prep', 'What questions should you ask the client at the end of a GL/IFRS/FCCS interview?',
`- How many ledgers/entities, and which GAAPs do you report under?
- Is consolidation in FCCS today, or moving from HFM/spreadsheets?
- What are the biggest close pain points (days to close, intercompany, top-side journals)?
- Any IFRS 18 or other standard changes in scope?
- What does success look like in the first 90 days of this contract?`, 'B']
]);
