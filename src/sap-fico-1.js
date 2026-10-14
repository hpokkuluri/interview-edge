// SAP FICO Lead. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['sap-fico'] = (QB['sap-fico'] || []).concat([
['Org Structure', 'Explain the SAP FI organizational structure.',
`- **Client** — highest level (whole SAP system instance for a group).
- **Company code** — legal entity with its own balance sheet and P&L; smallest unit for external reporting.
- **Chart of accounts** — operating CoA assigned to company codes; optionally **group** and **country** CoAs.
- **Fiscal year variant**, **posting period variant**, **field status variant** assigned to company codes.
- **Business area / segment / profit center** — internal/segment reporting.
- **Controlling area** — CO organization; can include multiple company codes (same CoA and fiscal year variant).
- **Credit control area** for credit management.`, 'B'],

['Org Structure', 'What is the difference between a company code and a controlling area?',
`- **Company code**: legal entity for financial accounting (FI); statutory reporting.
- **Controlling area**: organization for management accounting (CO) — cost centers, internal orders, profit centers.
- One controlling area can contain **many company codes** (cross-company cost accounting) if they share the operating CoA and fiscal year variant.
- In S/4HANA, both are tied together via the **Universal Journal (ACDOCA)**.`, 'B'],

['S/4HANA Finance', 'What is the Universal Journal (ACDOCA) and why does it matter?',
`- In S/4HANA, **ACDOCA** is a single line-item table combining FI (GL), CO, Asset Accounting, Material Ledger and profitability (margin analysis) data.
- **No reconciliation** needed between FI and CO — one source of truth.
- **Cost elements** become **GL accounts** (primary/secondary cost element categories).
- **Faster reporting** on line items (HANA in-memory); totals tables removed/replaced by compatibility views.
- **Extensibility**: coding block fields available across FI/CO.`, 'B'],

['S/4HANA Finance', 'What is New GL / document splitting and when is it used?',
`- **Document splitting** splits line items by characteristics (profit center, segment, business area) so you can produce **balanced balance sheets** at those levels.
- E.g. a vendor invoice with expenses for two profit centers — the payable is split proportionally.
- Configured with **splitting methods**, **item categories**, **business transaction variants**, **zero balancing** with clearing accounts.
- Required for segment reporting (IFRS 8) and profit center balance sheets.
- In S/4HANA, enabling document splitting later is complex — design upfront.`, 'D'],

['General Ledger', 'What are ledgers in SAP S/4HANA and how do you handle parallel accounting?',
`- **Leading ledger (0L)** — the main ledger (e.g. IFRS or US GAAP).
- **Non-leading ledgers** for other accounting principles (local GAAP, tax) — **ledger approach**.
- **Extension ledgers** for adjustments without duplicating all postings (e.g. management adjustments).
- **Accounting principles** assigned to ledgers; postings with ledger-specific valuation (e.g. depreciation areas in AA).
- Alternative: **account approach** (parallel accounts in one ledger) — less common in S/4.`, 'D'],

['General Ledger', 'What is the field status group and why does it matter?',
`- Controls which fields are **required, optional, suppressed or displayed** during posting for a GL account (via the field status group on the account and posting key controls).
- E.g. a cost account requires cost center; a balance sheet account suppresses it.
- Ensures data quality and correct CO postings.
- Configured in **field status variant** assigned to company code.`, 'B'],

['General Ledger', 'Explain the period-end closing activities in SAP FI.',
`- **Open/close posting periods** (OB52) controlled by account types.
- **Accruals/deferrals** (manual or Accrual Engine).
- **Foreign currency valuation** (FAGL_FCV) of open items and balances.
- **Regrouping** of receivables/payables.
- **GR/IR clearing** and analysis.
- **Depreciation run** (AFAB), asset closing.
- **Intercompany reconciliation** and eliminations.
- **Allocations** (assessments/distributions) in CO; settlement of orders.
- **Balance carryforward** at year-end.
- **Financial statements** and reporting.
Manage via **Advanced Financial Closing** or Financial Closing Cockpit.`, 'D'],

['Accounts Payable', 'Walk me through the procure-to-pay process from an FI perspective.',
`- **PO** in MM (no accounting).
- **Goods receipt (MIGO)**: Dr Inventory/Expense, Cr **GR/IR clearing**.
- **Invoice receipt (MIRO)**: Dr GR/IR, Cr **Vendor**; price differences to PRD or the material.
- **Payment (F110 automatic payment program)**: Dr Vendor, Cr Bank clearing.
- **Bank statement**: Dr Bank clearing, Cr Bank.
- **GR/IR clearing** account reconciliation at period end.`, 'B'],

['Accounts Payable', 'How does the automatic payment program (F110) work?',
`- **Parameters**: run date, identification, company codes, payment methods, next payment date, vendors.
- **Proposal run** — selects due open items based on payment terms and methods; exceptions list.
- **Edit proposal** — block/unblock items.
- **Payment run** — posts payment documents.
- **Payment media** — DMEE formats (ACH, SEPA XML, checks).
- Configuration (FBZP): all company codes, paying company codes, payment methods per country/company code, bank determination (ranking, amounts).`, 'D'],

['Accounts Receivable', 'Explain order-to-cash from an FI perspective.',
`- **Sales order** (SD) — no accounting.
- **Goods issue (PGI)**: Dr COGS, Cr Inventory.
- **Billing (VF01)** posted to FI via account determination (VKOA): Dr Customer, Cr Revenue, Cr Tax.
- **Incoming payment**: Dr Bank, Cr Customer (clearing open items).
- **Dunning** for overdue items; **credit management**.
- **Revenue recognition** (RAR) where applicable.`, 'B'],

['Accounts Receivable', 'How is revenue account determination (VKOA) configured?',
`- Uses a **condition technique**: access sequence with combinations like customer account assignment group + material account assignment group + account key.
- **Account keys** (ERL revenue, ERS discounts, MWS tax) from the pricing procedure.
- Determines GL accounts for revenue, discounts, freight.
- Test with billing documents and check FI documents.`, 'D'],

['Asset Accounting', 'Explain Asset Accounting in S/4HANA.',
`- **Chart of depreciation** with **depreciation areas** (book, tax, IFRS, local).
- **Asset classes** with account determination and default depreciation keys/useful lives.
- **Asset master** with time-dependent data (cost center).
- **Transactions**: acquisitions (integrated with AP/MM), transfers, retirements, write-ups.
- **Depreciation run (AFAB)** posts to GL.
- In S/4HANA: **New Asset Accounting** — real-time posting in all areas, ledger-specific postings for parallel accounting, no reconciliation ledger.`, 'D'],

['Asset Accounting', 'How do you handle assets under construction (AuC)?',
`- Create an **AuC asset** (asset class with AuC indicator) or use **WBS elements/internal orders** to collect costs.
- Costs collected via postings or **settlement** from projects/orders to AuC.
- **Final settlement** to final assets when completed (line item settlement or by distribution rule).
- AuC usually no depreciation (except special tax rules).`, 'D'],

['Bank Accounting', 'How do you set up electronic bank statement processing in SAP?',
`- **Bank master** and **house banks** with accounts (FI12 / Bank Account Management in S/4).
- **EBS configuration**: transaction types, external transactions mapped to posting rules (interpretation algorithms for clearing by reference).
- Formats: **MT940, BAI2, CAMT.053**.
- Import via FF_5 or Fiori app; post automatically; **post-processing** (FEBAN) for unmatched items.
- **Cash Management** (S/4) with bank account management and cash positioning.`, 'D'],

['Controlling', 'What are the main components of SAP Controlling (CO)?',
`- **Cost Element Accounting** (now GL accounts with cost element categories).
- **Cost Center Accounting** — overhead by department; planning; allocations.
- **Internal Orders** — temporary cost collectors (events, small projects).
- **Product Costing** — standard cost estimates (CK11N/CK40N), cost object controlling.
- **Profitability Analysis (CO-PA)** — margin analysis by market segments (account-based in S/4).
- **Profit Center Accounting** — integrated in GL in S/4.`, 'B'],

['Controlling', 'Explain assessment vs distribution in cost center accounting.',
`- **Assessment**: allocates costs using a **secondary cost element** (assessment cost element) — original cost element detail is lost on the receiver. Common for overhead (IT, HR costs).
- **Distribution**: allocates using **original primary cost elements** — receivers see original cost types. Only primary costs.
- Both use **cycles and segments** with tracing factors (statistical key figures, fixed %, amounts).
- Also **activity allocation** with activity types and prices.`, 'D'],

['Controlling', 'How does product costing work in SAP?',
`- **Costing variant** (costing type, valuation variant, date control).
- **BOM and routing** provide quantities and activities; **activity prices** from cost centers; **material prices** from purchase info records or valuation.
- **Cost estimate** (CK11N single, CK40N mass) with **cost component split**.
- **Mark and release** standard price to material master.
- **Overhead** via costing sheets.
- Used for inventory valuation and variance analysis in production orders.`, 'D'],

['Controlling', 'What is the Material Ledger and actual costing?',
`- **Material Ledger** (mandatory in S/4HANA) stores inventory values in **multiple currencies/valuations** (company code, group, profit center valuation).
- **Actual costing** (optional) calculates **periodic actual prices** by rolling up price and exchange-rate differences through the production structure.
- Revalues inventory and COGS at period end with actual costs.
- Useful for transfer pricing and accurate margins.`, 'D'],

['Controlling', 'What is CO-PA and how does account-based margin analysis differ from costing-based?',
`- **CO-PA** analyzes profitability by characteristics (customer, product, region, channel).
- **Costing-based** (legacy): value fields, own tables; can include calculated values (e.g. standard cost components at billing); reconciliation to FI needed.
- **Account-based** (S/4 margin analysis): uses GL accounts in ACDOCA — reconciled with FI by design; COGS split, real-time.
- S/4HANA recommends account-based; costing-based still available.`, 'D'],

['Integration', 'What is automatic account determination in MM (OBYC)?',
`- Determines GL accounts for **inventory movements** via **transaction keys** (BSX inventory, WRX GR/IR, PRD price differences, GBB offsetting entries, UMB revaluation).
- Depends on **valuation grouping code** (valuation area), **valuation class** (material), **account modifier** (movement type).
- Critical for correct FI postings from MM.`, 'D'],

['Tax', 'How is tax configured in SAP FI?',
`- **Tax procedure** assigned to country (e.g. TAXUSJ for US jurisdiction, TAXGB for UK VAT).
- **Tax codes** with rates and accounts (FTXP).
- **Jurisdiction codes** for US (or integration with Vertex/Avalara/Sabrix).
- **Tax determination** in SD (condition records) and MM.
- **Tax reports** (VAT returns, SAF-T, e-invoicing via SAP Document and Reporting Compliance).`, 'B'],

['Intercompany', 'How do you handle intercompany transactions in SAP?',
`- **Cross-company code postings** (FI): automatic intercompany payables/receivables via clearing accounts (OBYA).
- **Intercompany sales** (SD/MM): stock transfer orders, intercompany billing, internal payables via IDoc/EDI.
- **Intercompany reconciliation** (ICR / Intercompany Matching and Reconciliation in S/4).
- **Eliminations** in Group Reporting (S/4HANA Group Reporting).`, 'D']
]);
