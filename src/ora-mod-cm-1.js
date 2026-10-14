// Oracle Modules — Cash Management & Treasury. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-cm'] = (QB['ora-mod-cm'] || []).concat([
['Setup', 'What are the main Cash Management setups in Fusion?',
`- **Banks, branches and bank accounts** (owner legal entity, currency, GL cash and cash clearing accounts, use for payables/receivables/payroll, BU access).
- **Bank statement transaction codes** (map bank codes to transaction types).
- **Parse rules** to extract references from statement text.
- **Reconciliation matching rules**, **tolerance rules** and **rule sets**.
- **Transaction creation rules** for bank charges/interest.
- **Bank statement processing profiles** and transmission configurations.`, 'B'],

['Bank Statements', 'How do you load bank statements automatically?',
`- Configure **transmission** (SFTP/bank connectivity) and **Retrieve Electronic Bank Statements**, or upload files.
- Formats: **BAI2, MT940, CAMT.053 (ISO 20022)**, EDIFACT FINSTA, or custom via mapping.
- **Load and Import Bank Statement** process → statements appear for reconciliation.
- Use **prior-day** statements for reconciliation and **intraday** (camt.052/BAI intraday) for cash positioning.`, 'D'],

['Bank Statements', 'What are parse rules and why are they useful?',
`- Parse rules extract values (e.g. **invoice number, check number, customer reference**) from the statement line's **addenda/description** text into structured fields.
- Matching rules then use those fields — big improvement in auto-reconciliation rates when banks put references in free text.`, 'D'],

['Reconciliation', 'Explain matching rules, tolerance rules and rule sets.',
`- **Matching rules**: how statement lines match system transactions — one-to-one, one-to-many, many-to-one, many-to-many — on fields like reference, amount, date, counterparty.
- **Tolerance rules**: allowed differences in **amount** (absolute/percent) and **date** ranges; amount differences can create external transactions (e.g. bank fees).
- **Rule sets** combine rules in **priority order** and are assigned to bank accounts.
- Start strict (exact reference + amount), then looser rules.`, 'D'],

['Reconciliation', 'Why might autoreconciliation miss a payment that clearly cleared?',
`- Reference on the statement doesn't match (bank truncated it, different format).
- Amount differs (bank fees deducted, FX).
- Date outside tolerance.
- Payment **not accounted** or not in a reconcilable status (voided, not cleared).
- Payments grouped by the bank (one debit for many payments) but rules only do one-to-one.
Fix rules/parse rules and resend references in payment files.`, 'D'],

['Reconciliation', 'How do you reconcile ACH batch deposits or lockbox totals?',
`- Banks often post **one deposit line** for many receipts.
- Use **many-to-one** matching rules (sum of receipts in a batch = statement line), grouped by **receipt batch/deposit number** or date.
- Ensure receipts are **remitted/batched** consistently with bank deposits.`, 'D'],

['External Transactions', 'What are external cash transactions and transaction creation rules?',
`- **External transactions**: cash items not originating from AP/AR/Payroll (bank fees, interest, sweeps, wire charges, taxes).
- **Transaction creation rules**: when a statement line matches a pattern (transaction code, description), Oracle **creates the external transaction automatically** with the right accounts and reconciles it.
- Reduces manual journals for recurring bank items.`, 'B'],

['Cash Clearing', 'Explain cash clearing accounting at payment and at reconciliation.',
`- Payment issued: **Dr AP Liability, Cr Cash Clearing**.
- When reconciled to the bank statement: **Dr Cash Clearing, Cr Cash** (accounting on clearing).
- Clearing account balance = issued but not yet cleared payments — reconcile regularly.
- Some companies account payments directly to cash (no clearing) — then reconciliation has no accounting.`, 'D'],

['Cash Positioning', 'How does cash positioning work in Fusion?',
`- Starting point: **bank statement balances** (prior-day/intraday).
- Add expected **inflows/outflows**: AP payments scheduled, AR receipts expected, payroll, external transactions, forecasts.
- View by **bank account, legal entity, currency**; plan funding and investments.
- **Cash forecasting** extends to future periods using subledger data and external sources.`, 'D'],

['Bank Account Transfers', 'How do you handle transfers between bank accounts?',
`- **Bank account transfers** in Cash Management: from/to account, amount, date; settlement via payment file (if bank) or manual.
- Accounting: Dr destination cash (or clearing), Cr source cash.
- **Ad hoc payments** and **cash pooling** (sweeps) may come from bank statements via transaction creation rules.
- Intercompany transfers create intercompany balances.`, 'D'],

['Payments', 'How do payment acknowledgments and status files work?',
`- Banks return **acknowledgment files** (e.g. ISO 20022 **pain.002**) for accepted/rejected payment files and individual payments.
- Fusion can import them to update **payment status** (e.g. rejected payments to be voided/reissued).
- Monitor rejections daily; root causes: invalid bank details, missing data, format errors.`, 'D'],

['Banking', 'How would you set up Positive Pay and check fraud controls?',
`- Positive pay file of issued and voided checks sent to the bank after each check run (automated transmission).
- **Payee positive pay** (payee name match) where banks support it.
- Restrict **check stock** and printing; signatures; segregate check printing from AP entry.
- Stale-dated checks process (void and escheat as required).`, 'B'],

['Data Migration', 'What do you convert for Cash Management at go-live?',
`- **Banks, branches, accounts** with GL mappings and uses.
- **Outstanding (uncleared) payments** and deposits, so they can be reconciled after go-live (often loaded as AP payments/receipts or external transactions).
- **Opening statement balances**.
- Reconcile book vs bank at cutover; finance signs off.`, 'D'],

['Treasury', 'When would a company use a dedicated treasury management system with Fusion?',
`- Complex **liquidity**: many banks/countries, **in-house bank**, netting, cash pooling.
- **Investments, debt, FX hedging**, risk management and hedge accounting.
- **Bank connectivity** hubs and SWIFT.
- Integration: TMS sends **journals** to GL and payment instructions to/from Fusion; Fusion sends AP/AR forecasts and bank statements.`, 'D'],

['Interview', 'What metrics show a healthy Cash Management process?',
`- **Auto-reconciliation rate** (e.g. >90%).
- **Unreconciled items** count and age.
- **Days to complete bank reconciliation** after month-end.
- **Payment rejection** rate.
- **Accuracy of cash forecasts** vs actuals.`, 'B']
]);
