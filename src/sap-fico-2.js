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
