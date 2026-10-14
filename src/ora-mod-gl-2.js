// Oracle Modules — General Ledger deep dive (part 2: IFRS and multi-GAAP). Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-gl'] = (QB['ora-mod-gl'] || []).concat([
['IFRS', 'What are the key differences between IFRS and US GAAP that affect the General Ledger?',
`- **Inventory**: IFRS (IAS 2) prohibits **LIFO**; write-downs can be **reversed**. US GAAP allows LIFO; no reversal.
- **PP&E**: IFRS (IAS 16) allows the **revaluation model** and requires **component depreciation**. US GAAP: cost model only.
- **Impairment**: IFRS (IAS 36) one-step test at **CGU** level, **reversals allowed** (except goodwill). US GAAP: two-step for long-lived assets, no reversals.
- **Development costs**: capitalized under IFRS (IAS 38) when criteria are met; expensed under US GAAP (except certain software).
- **Leases**: IFRS 16 single lessee model; ASC 842 finance vs operating.
- **Provisions**: IFRS "probable" = more likely than not, best estimate (midpoint of a range); US GAAP higher threshold, low end of a range.
- **Financial instruments**: IFRS 9 expected credit loss (3 stages) vs US GAAP CECL (lifetime from day one).
- **Consolidation**: IFRS 10 single control model; US GAAP voting interest + VIE models.
Each difference becomes an **accounting method/secondary ledger or adjustment** decision in Oracle.`, 'D'],

['IFRS', 'How do you support IFRS and local GAAP in Oracle Fusion?',
`- **Primary ledger** in one GAAP, **secondary ledger** in the other:
- **Subledger level**: SLA creates entries for both GAAPs from the same transaction using **different accounting methods** — for systematic differences.
- **Journal/adjustment-only level**: copy GL journals (with conversion rules) and post GAAP-only adjustments in the secondary ledger.
- **Fixed Assets**: separate corporate books (or depreciation differences) per GAAP.
- **Lease Accounting**: IFRS 16 vs ASC 842 treatments per ledger.
- **COA mapping** when the statutory COA differs.
- Reporting via **ledger sets** and FCCS Multi-GAAP.`, 'D'],

['IFRS', 'Explain IFRS 16 lease accounting and how it differs from ASC 842.',
`- **IFRS 16 (lessee)**: virtually all leases on balance sheet — **right-of-use asset** and **lease liability** (PV of payments). P&L shows **depreciation + interest** (front-loaded expense). Exemptions: **short-term** (≤12 months) and **low-value** assets.
- **ASC 842**: also on balance sheet, but **dual model**: **finance leases** (like IFRS 16) and **operating leases** with a **single straight-line lease cost**. No low-value exemption.
- **Oracle**: Fusion **Lease Accounting** calculates ROU and liability, amortization schedules, and accounting per ledger/GAAP; payments flow to AP.
- Interview point: EBITDA is higher under IFRS 16 because lease cost moves below EBITDA (depreciation/interest).`, 'D'],

['IFRS', 'Explain IAS 21 foreign currency: functional currency, transactions and translation.',
`- **Functional currency**: currency of the primary economic environment (sales prices, costs, financing) — determined per entity.
- **Transactions** in foreign currency: recorded at spot rate; **monetary items** retranslated at closing rate each period (**exchange differences in P&L**); non-monetary items at historical rate.
- **Translation to presentation currency**: assets/liabilities at **closing rate**, income/expenses at **transaction (average) rates**, differences to **OCI (foreign currency translation reserve)**; recycled to P&L on disposal of the foreign operation.
- **Oracle**: revaluation in GL for monetary items; translation in GL (CTA) or FCCS.`, 'D'],

['IFRS', 'What is IAS 29 hyperinflation and how would you handle it in Oracle?',
`- For entities whose functional currency is **hyperinflationary** (e.g. cumulative 3-year inflation near 100%, as in Argentina or Türkiye in recent years), financial statements are **restated** using a general price index; non-monetary items are indexed; gain/loss on net monetary position goes to P&L; then translated at the **closing rate** (including P&L).
- **Oracle**: often handled with a **separate ledger/secondary ledger or adjustment process** and index-based adjustments (spreadsheets or EPM), with translation in FCCS using closing rates for P&L.
- Mention that the hyperinflation list should be checked each reporting period.`, 'D'],

['IFRS', 'What is IFRS 18 and how could it affect ERP and reporting?',
`- **IFRS 18 Presentation and Disclosure in Financial Statements** replaces IAS 1, effective for annual periods beginning on or after **1 January 2027** (with comparatives restated).
- **New P&L structure**: income and expenses classified into **operating, investing, financing** (plus income taxes and discontinued operations) categories, with required subtotals **operating profit** and **profit before financing and income taxes**.
- **Management-defined performance measures (MPMs)** disclosed and reconciled in the notes.
- More guidance on **aggregation/disaggregation**.
- **ERP impact**: COA attributes or hierarchies to classify accounts into the new categories; FX and interest classification reviews; reporting templates (FR/FCCS/Narrative Reporting) redesigned; comparatives need restated mapping.`, 'D'],

['IFRS', 'How are provisions and contingent liabilities treated under IAS 37?',
`- **Provision** recognized when: present obligation from a past event, **probable outflow** (more likely than not), and a **reliable estimate**.
- Measured at the **best estimate** (expected value for large populations; most likely outcome for single obligations; midpoint of a range when all points are equally likely); discounted if material.
- **Contingent liabilities**: disclosed, not recognized (unless remote). **Contingent assets**: disclosed when probable, recognized when virtually certain.
- **Onerous contracts** and **restructuring** provisions have specific rules.
- GL: provision accounts, monthly review and true-ups, audit documentation.`, 'D'],

['IFRS', 'Explain IAS 36 impairment testing.',
`- Assess **indicators** at each reporting date; **goodwill and indefinite-life intangibles** tested at least annually.
- **Recoverable amount** = higher of **fair value less costs of disposal** and **value in use** (discounted cash flows).
- Test at **cash-generating unit (CGU)** level; goodwill allocated to CGUs.
- Loss = carrying amount − recoverable amount; allocated to goodwill first, then other assets pro rata.
- **Reversals** allowed (not for goodwill) up to the carrying amount without the impairment.
- In Oracle: **Assets impairment** functionality or journals; FCCS for goodwill at group level.`, 'D'],

['IFRS', 'What is component depreciation under IAS 16 and how do you set it up in Oracle Assets?',
`- Significant parts of an asset with **different useful lives** are depreciated separately (e.g. aircraft body vs engines vs interiors; building structure vs roof vs HVAC).
- In Oracle Assets: separate **assets (components)** linked via **parent-child/asset hierarchy**, each with its own category and life; or use separate asset lines.
- US GAAP books may keep a single asset — handle via separate corporate books per GAAP.`, 'D'],

['IFRS', 'How does the IAS 16 revaluation model work and how would you account for it?',
`- PP&E class carried at **fair value** at revaluation date less subsequent depreciation/impairment; revaluations regular enough that carrying amount doesn't differ materially from fair value.
- **Increase** → OCI (revaluation surplus) unless reversing a previous decrease in P&L.
- **Decrease** → P&L, unless reversing a previous surplus (then OCI).
- Surplus can be transferred to retained earnings as the asset is used/disposed.
- Oracle Assets supports **revaluation** (with options to revalue accumulated depreciation, amortize reserve).`, 'D'],

['IFRS', 'Explain IFRS 9 expected credit loss for receivables.',
`- **ECL model** replaces incurred loss: recognize expected losses from the start.
- **Simplified approach** for trade receivables/contract assets: **lifetime ECL** using a **provision matrix** (loss rates by ageing bucket adjusted for forward-looking information).
- **General approach** (loans): Stage 1 12-month ECL; Stage 2 lifetime ECL after significant increase in credit risk; Stage 3 credit-impaired.
- **Oracle**: AR ageing feeds an allowance calculation (often in spreadsheets/EPM) posted to GL; document the methodology.
- US GAAP CECL: lifetime losses from day one for all in-scope assets.`, 'D'],

['IFRS', 'What does IFRS 10 say about control and consolidation?',
`- An investor **controls** an investee when it has: **power** over relevant activities, **exposure to variable returns**, and the **ability to use its power** to affect those returns.
- Control (not just >50% votes) drives consolidation — includes de facto control, potential voting rights, structured entities.
- **Non-controlling interests (NCI)** presented in equity.
- Changes in ownership without loss of control → equity transactions; loss of control → remeasure retained interest, gain/loss in P&L.
- **Associates** (IAS 28, significant influence) → equity method; **joint ventures** (IFRS 11) → equity method; joint operations → share of assets/liabilities.`, 'D'],

['IFRS', 'How does IAS 12 deferred tax work and how do you support it from the GL?',
`- Deferred tax on **temporary differences** between carrying amounts and tax bases (e.g. depreciation differences, provisions, leases).
- **DTA** recognized to the extent future taxable profit is **probable**; **DTL** generally recognized.
- Tax rates enacted or substantively enacted.
- **GL support**: tax book vs corporate book in Assets, account attributes for tax-relevant accounts, reports by entity; often calculated in **Tax Reporting (TRCS)** or tax provision tools and booked as journals.
- **Pillar Two** (global minimum tax) adds data needs and IAS 12 disclosures.`, 'D'],

['IFRS', 'What are the main IFRS vs US GAAP differences in cash flow statements?',
`- **IAS 7 (current)**: choice of classification for **interest and dividends** paid/received (operating, investing or financing).
- **IFRS 18 amendments to IAS 7** (from 2027): for most entities, **interest paid → financing**, **interest and dividends received → investing**, and the **indirect method starts from operating profit**.
- **US GAAP**: interest paid and received, and dividends received → **operating**; dividends paid → financing.
- **ERP impact**: account mapping/hierarchies for the cash flow, movement accounts or FCCS **Movement dimension**.`, 'D'],

['IFRS', 'What is IFRS 1 and when does it matter in an ERP implementation?',
`- **IFRS 1 First-time Adoption**: rules for a company moving to IFRS — opening IFRS balance sheet at the transition date, retrospective application with **optional exemptions** (deemed cost for PP&E, cumulative translation differences reset to zero, business combinations) and mandatory exceptions.
- **ERP**: converting balances to IFRS at transition (secondary ledger or adjustment ledger), comparative periods, mapping of accounts, documentation of elections.`, 'D'],

['IFRS', 'How are borrowing costs and investment property treated under IFRS?',
`- **IAS 23**: borrowing costs directly attributable to a **qualifying asset** (takes substantial time to get ready) must be **capitalized**. In Oracle: capitalize interest to CIP/assets via projects or journals.
- **IAS 40 investment property**: choose **fair value model** (changes in P&L, no depreciation) or **cost model** (with fair value disclosure). US GAAP has no separate investment property model (cost) except for investment companies.`, 'D'],

['IFRS', 'What is IFRS 15 and how do you support it in Oracle?',
`- **Five steps**: identify the contract → performance obligations → transaction price (including variable consideration) → allocate by relative **standalone selling price** → recognize revenue when/as obligations are satisfied.
- Largely converged with **ASC 606**; some differences (e.g. some practical expedients, licenses, onerous contract guidance in IAS 37).
- **Oracle**: **Revenue Management** (contracts, POs, SSP, allocation, recognition) integrated with OM/AR/Projects; accounting via SLA to GL; contract assets/liabilities.`, 'D'],

['IFRS', 'What disclosures does IFRS 8 operating segments require, and what does it mean for the COA?',
`- Segments based on the **management approach** — what the chief operating decision maker (CODM) reviews.
- Disclose segment profit/loss, assets (if reviewed), reconciliations to totals, entity-wide info (products, geographies, major customers).
- **COA/ERP**: a segment (business unit/product line) or **document splitting/balancing by segment** so profit (and possibly balance sheet) can be reported by segment; hierarchies aligned with management reporting.`, 'D'],

['IFRS', 'How do you keep IFRS and US GAAP books reconciled?',
`- **GAAP difference register**: each difference, accounts, amounts, owners.
- **Reconciliation reports**: equity and net income bridge between the two ledgers/scenarios each period.
- **Controls** over adjustment-only entries (approval, documentation).
- **Automate** recurring differences (SLA rules, FA books, lease accounting).
- **FCCS Multi-GAAP** shows the adjustments separately and totals both views.`, 'D'],

['IFRS', 'A client moving from US GAAP to IFRS asks what changes in their ERP. What do you tell them?',
`- **Policy decisions first** (PP&E model, components, development costs, leases, provisions, ECL, inventory costing without LIFO).
- **Ledger strategy** (primary/secondary) and FA book design.
- **SLA rule changes** for differing treatments.
- **COA/hierarchies** for new presentation (and IFRS 18 from 2027).
- **Opening balance** conversion (IFRS 1) and comparatives.
- **Reporting** templates, FCCS rules, training for accountants.`, 'D'],

['IFRS', 'Which IFRS standards have changed recently or are coming that a GL consultant should watch?',
`- **IFRS 18** (presentation and disclosure) — effective 1 January 2027, with restated comparatives.
- **IFRS 19** (subsidiaries without public accountability: reduced disclosures) — effective 1 January 2027.
- **IAS 12 Pillar Two** amendments (global minimum tax — temporary exception for deferred taxes plus disclosures).
- **IAS 21 lack of exchangeability** amendments (effective 2025).
- **IFRS 9/IFRS 7** amendments on classification and measurement (effective 2026).
Tip: say you check the IASB work plan and your client's auditor updates.`, 'D']
]);
