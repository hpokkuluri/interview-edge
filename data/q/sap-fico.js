// sap-fico — generated from src/sap-fico-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['sap-fico'] = (QB['sap-fico'] || []).concat([
['Group Reporting', 'What is SAP S/4HANA Group Reporting?',
`- SAP's consolidation solution built on S/4HANA (successor to BPC/EC-CS for many customers).
- **Data collection**: integrated from ACDOCA (real-time) or flexible upload for non-SAP entities.
- **Currency translation**, **intercompany matching and eliminations**, **consolidation of investments**, group journals.
- **Consolidation units, groups**, versions.
- Reporting via Fiori/analytics.`, 'D'],

['Revenue', 'What is SAP Revenue Accounting and Reporting (RAR)?',
`- Supports **IFRS 15 / ASC 606**: contract identification, performance obligations, SSP allocation, recognition over time or at a point in time.
- **Integration** with SD (and other sources) via adapter reuse layer.
- Posts **contract assets/liabilities** and revenue to GL.
- In newer S/4 versions, RAR is integrated (Revenue Accounting in S/4 core).`, 'D'],

['Credit Management', 'How does credit management work in S/4HANA (FSCM)?',
`- **SAP Credit Management (FIN-FSCM-CR)**: business partner credit profiles, credit limits by segment, scoring rules, risk classes.
- **Credit check** in SD order/delivery triggers blocks (VKM1 release).
- **Credit exposure** includes open orders, deliveries, billing, receivables.
- **Credit limit requests** with workflow.
- Mandatory approach in S/4 (classic FD32 replaced).`, 'D'],

['Business Partner', 'What is the Business Partner approach in S/4HANA for customers and vendors?',
`- In S/4HANA, **Business Partner (BP)** is the single entry point for customers and suppliers (**CVI — Customer Vendor Integration**).
- BP roles: FLCU00 (FI customer), FLCU01 (SD customer), FLVN00 (FI vendor), FLVN01 (purchasing vendor).
- Conversion from ECC requires **CVI synchronization** and data cleansing before migration.
- Benefit: one person/org record with multiple roles.`, 'B'],

['Migration', 'What are the S/4HANA migration approaches?',
`- **Greenfield (new implementation)**: re-design processes, migrate master data and open items/balances.
- **Brownfield (system conversion)**: convert existing ECC to S/4 keeping configuration and history; requires simplification item checks, custom code adaptation, CVI, financial data migration.
- **Selective data transition / hybrid (bluefield)**: carve out data/processes selectively (e.g. using SNP, Datavard/ Natuvion tools).
- Choose based on process fit, history needs, customizations, timeline and budget.`, 'B'],

['Migration', 'What are key finance steps in an ECC to S/4HANA system conversion?',
`- **Pre-checks**: simplification item checks, custom code checks, CVI, open period checks, reconciliations (FI-CO, AA, ML).
- **Financial data migration**: activate new GL if needed, migrate to ACDOCA, asset accounting migration, material ledger migration, house bank migration to BAM.
- **Reconciliation** before and after (balances, open items, asset values).
- **Business sign-off**.
- Test multiple dry runs with production copies.`, 'D'],

['Migration', 'How do you migrate finance data in a greenfield S/4 implementation?',
`- **SAP S/4HANA Migration Cockpit** with templates/staging tables (GL balances, open items AR/AP, fixed assets, bank, cost centers, profit centers).
- Sequence: org/config → master data (GL, cost centers, BPs, assets) → open items → balances → reconciliation.
- **Mapping** legacy to new structures.
- **Mock loads** with reconciliation and sign-off.`, 'B'],

['Fiori', 'What Fiori apps do finance users rely on in S/4HANA?',
`- **Manage Journal Entries**, **Post General Journal Entries**, **Display Line Items in General Ledger**.
- **Manage Supplier/Customer Line Items**, **Process Receivables (collections)**.
- **Manage Automatic Payments**, **Manage Bank Accounts**, **Cash Position**.
- **Asset Accounting** apps, **Trial Balance**, **Financial Statements**.
- **Close tasks** (Advanced Financial Closing).
Embedded analytics with real-time data.`, 'B'],

['Reporting', 'What reporting options exist for SAP Finance?',
`- **Embedded analytics** (CDS views, Fiori analytical apps, query browser).
- **SAP Analytics Cloud (SAC)** for planning and dashboards.
- **BW/4HANA or Datasphere** for enterprise data warehousing.
- **Financial statement versions** for statutory statements.
- **Group Reporting** for consolidated reporting.`, 'B'],

['Planning', 'How is financial planning done in S/4HANA landscapes?',
`- **SAP Analytics Cloud planning** integrated with S/4 (successor to BPC for many) — P&L, cost center, profitability planning.
- Plans written back to ACDOCP (plan table) for plan/actual comparisons.
- Legacy: BPC, CO planning transactions (KP06).`, 'D'],

['Controls', 'How do you implement SOX controls in SAP FI?',
`- **Access controls** with SAP GRC Access Control (SoD rulesets, firefighter for emergency access).
- **Configuration controls**: tolerance groups for posting limits (OBA4), payment approvals (BCM), dual control for vendor master changes (sensitive fields).
- **Change management** (transports via CTS/ChaRM).
- **Process Control** for automated monitoring.
- **Audit trails** (change documents).`, 'D'],

['Payments', 'What is Bank Communication Management (BCM)?',
`- Manages payment file approval and transmission: payment batches from F110 grouped by rules, **approval workflows** (single/dual signatures), status monitoring.
- Integration with banks via **SAP Multi-Bank Connectivity** or host-to-host.
- Reconciles bank acknowledgments.
- Strong control for payments.`, 'D'],

['Treasury', 'What does SAP Treasury and Risk Management cover?',
`- **Transaction management**: money market, FX, derivatives, securities.
- **Market risk** analysis, **hedge accounting**.
- **Cash management** and liquidity forecasting.
- **In-house cash** for intercompany netting and payments-on-behalf.
- Integration with FI postings.`, 'D'],

['Accounts Payable', 'How do you handle GR/IR clearing account issues?',
`- **GR/IR** reflects goods received not invoiced (credit) or invoiced not received (debit).
- **Analysis**: MR11 (maintain GR/IR clearing account) to clear small differences or old items; FAGL_GR_IR or Fiori apps for monitoring.
- **Regrouping** at period end (F.19 / in S/4 FAGLF101 equivalents) to show as liability or asset.
- **Root causes**: quantity differences, price differences, late invoices, wrong POs.`, 'D'],

['Accounts Receivable', 'How does dunning work in SAP?',
`- **Dunning procedure** (FBMP): dunning levels, intervals, minimum amounts, charges, forms.
- Assigned to customer master.
- **Dunning run (F150)**: parameters, proposal, edit, print.
- In S/4, also **Collections Management** (FSCM) for worklists and strategies.`, 'B'],

['Controlling', 'What are internal orders used for and how are they settled?',
`- **Internal orders** collect costs for specific purposes (marketing campaigns, events, small capital projects, R&D).
- **Order types** control number ranges, settlement profile, budget.
- **Budgeting** with availability control.
- **Settlement** to cost centers, GL accounts, assets, profitability segments using settlement rules.`, 'B'],

['Controlling', 'How do you analyze production order variances?',
`- After goods receipt and confirmations: **WIP calculation** (KKAX) at period end for open orders.
- **Variance calculation** (KKS2) for delivered/technically complete orders: input price, usage, resource usage, lot size, output price variances.
- **Settlement** (KO88) to CO-PA/GL.
- Analyze with reports (KKBC_ORD) to find root causes.`, 'D'],

['Behavioral', 'Tell me about a complex SAP FICO issue you solved.',
`## Example (STAR)
- **Situation**: After an upgrade, foreign currency valuation posted incorrect amounts for some customers.
- **Action**: Analyzed valuation methods and exchange rate types, found a change in key date logic for open items in a specific document type; corrected valuation area settings, reversed and re-ran valuation, added a regression test.
- **Result**: Accurate valuation for close; no audit impact.`, 'B'],

['Behavioral', 'How do you lead a FICO team on an S/4HANA program?',
`- **Design authority** for finance with process owners.
- **Work allocation** by sub-module; daily stand-ups; design reviews.
- **Integration** with SD/MM/PP teams via cross-functional sessions.
- **Testing** and data migration readiness.
- **Coaching** junior consultants on S/4 changes (ACDOCA, BP, new AA).`, 'B'],

['Behavioral', 'Why SAP FICO and what keeps you current?',
`- Passion for finance processes and the integration challenge.
- Keep current with SAP release notes, **SAP Learning Hub**, certifications (S/4HANA Finance), community (SAP Community), hands-on with new features (Fiori apps, Joule/AI).`, 'B'],

['S/4HANA Finance', 'What simplifications in S/4HANA Finance affect consultants most?',
`- **ACDOCA** universal journal; cost elements as GL accounts.
- **Business Partner** mandatory.
- **New Asset Accounting** mandatory.
- **Material Ledger** mandatory.
- **Credit management** via FSCM.
- **Bank account management**.
- **Account-based CO-PA** recommended.
- **Fiori** UX and embedded analytics.`, 'B'],

['Closing', 'What is Advanced Financial Closing?',
`- SAP's cloud-based tool (on BTP) to **plan, execute and monitor** close tasks across systems.
- **Task lists** with dependencies, scheduling of jobs (e.g. FX valuation, depreciation) and manual tasks.
- **Approvals**, monitoring dashboards, audit trail.
- Successor to the Financial Closing Cockpit.`, 'D'],

['AI', 'How is AI being used in SAP Finance?',
`- **Joule** copilot across S/4HANA for queries and actions.
- **Cash application** with machine learning matching.
- **Intercompany matching** with AI.
- **GR/IR reconciliation** suggestions.
- **Anomaly detection** in journals.
- **Document information extraction** for invoices.`, 'D'],

['Migration', 'How do you reconcile financial data after migration?',
`- **Trial balance** by company code and account (legacy vs S/4).
- **Open items** AR/AP by customer/vendor (count and amount).
- **Asset values** (acquisition cost, accumulated depreciation, NBV) by class.
- **Inventory values** vs GL.
- **Cost center/profit center** balances where relevant.
- Sign-off by finance; audit trail of reconciliations.`, 'B'],

['Integration', 'How does SAP integrate with non-SAP systems for finance postings?',
`- **IDocs** (ACC_DOCUMENT, FIDCCP02) for journal postings.
- **BAPIs** (BAPI_ACC_DOCUMENT_POST).
- **APIs** (OData/SOAP) in S/4HANA, **SAP Integration Suite** (BTP) as middleware.
- **Central Finance** for replicating postings from other ERPs into S/4.
- Error handling via monitoring (AIF – Application Interface Framework).`, 'D'],

['Central Finance', 'What is SAP Central Finance?',
`- A **central S/4HANA instance** receiving real-time financial postings (via SLT replication) from multiple source ERPs (SAP and non-SAP).
- **Mapping** of master data and organizational units (MDG for mapping).
- **Use cases**: unified reporting, central payments, stepping stone to S/4 consolidation.
- **Central Payments** and **Central Processes** (e.g. central GR/IR).`, 'D'],

['Business Partner', 'How do you manage master data governance for finance in SAP?',
`- **SAP Master Data Governance (MDG)** for GL accounts, cost centers, profit centers, business partners.
- **Workflows** for creation/change with approvals.
- **Data quality rules** and duplicate checks.
- **Distribution** to other systems.`, 'D']
]);

QB['sap-fico'] = (QB['sap-fico'] || []).concat([
['General Ledger', 'What is a financial statement version and how is it used?',
`- Defines the **hierarchy of GL accounts** for balance sheet and P&L presentation (OB58).
- Nodes for assets, liabilities, revenue, expenses; debit/credit balance shifts (e.g. bank overdrafts).
- Used in standard reports (F.01, Fiori Financial Statements) and Group Reporting mapping.
- Multiple versions for local/group reporting.`, 'B']
]);
