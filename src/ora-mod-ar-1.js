// Oracle Modules — Receivables, Collections & Revenue. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-ar'] = (QB['ora-mod-ar'] || []).concat([
['Setup', 'What are the key Receivables setups in Fusion?',
`- **Receivables system options** per BU (accounting, tax, AutoInvoice, matching).
- **Transaction sources** (batch sources) — manual/imported, numbering, validation.
- **Transaction types** — invoice, credit memo, debit memo, chargeback, deposit; posting and open receivables flags.
- **AutoAccounting** / SLA rules for revenue, receivable, tax, freight.
- **Payment terms**, **receipt classes and methods** (manual/automatic, remittance banks).
- **Customer profile classes** (credit, statements, dunning, collector).
- **Receivables activities** for adjustments and misc cash.`, 'B'],

['AutoInvoice', 'How do grouping rules and line ordering rules work in AutoInvoice?',
`- **Grouping rules**: which interface lines combine into one transaction — mandatory attributes (currency, bill-to, transaction type, source) plus optional ones (sales order number, PO).
- **Line ordering rules**: sort lines within the invoice (e.g. by sales order line).
- Wrong grouping → too many invoices or mixed orders on one invoice.`, 'D'],

['AutoInvoice', 'How do you resolve AutoInvoice errors?',
`- Review the **AutoInvoice execution report** and **interface errors** (Manage AutoInvoice Lines).
- Typical errors: invalid customer/site, missing GL date/open period, tax setup, invalid item/UOM, invalid payment terms, revenue scheduling rules.
- Fix in the interface (or source), resubmit.
- Prevent with validation upstream (OM/integration).`, 'D'],

['Receipts', 'Explain receipt classes, receipt methods and remittance banks.',
`- **Receipt class**: creation method (manual/automatic), whether receipts need **confirmation**, **remittance** and **clearance** steps.
- **Receipt method**: belongs to a class; defines numbering, remittance bank accounts, and accounting.
- **Remittance bank accounts**: where receipts are deposited, with GL accounts (cash, remittance, unapplied, on-account, unidentified).`, 'D'],

['Receipts', 'How do automatic receipts (direct debit) work?',
`- Customers with **automatic receipt methods** and bank accounts; invoices selected by due date.
- **Create Automatic Receipts** → (optional) approval/confirmation → **remittance** to the bank (direct debit file) → **clearance** on bank statement.
- Mandates (SEPA) and pre-notifications as required.`, 'D'],

['Receipts', 'How do you handle a customer short payment?',
`- Apply the receipt; the remaining balance stays open, or
- **Write off** small differences within tolerance (receipt write-off activity, approval limits), or
- Create a **chargeback/deduction** for disputed amounts and route to sales/collections.
- Track deduction reasons for root causes.`, 'D'],

['Receipts', 'How do you reverse a receipt and when?',
`- **Reverse** when the receipt was wrong or the payment bounced (NSF) — choose a reason; the applied invoices reopen.
- **Debit memo reversal** when the receipt is in a closed period or to charge fees.
- Accounting reverses cash and receivable entries.`, 'B'],

['Collections', 'How does Fusion Advanced Collections assign work to collectors?',
`- **Collectors** assigned via customer profiles or **territories**.
- **Strategies** (e.g. low-risk vs high-risk) define tasks: dunning letters, calls, escalations.
- **Scoring** ranks customers by risk.
- The **Collections work area** shows delinquent customers, promises to pay, disputes, payment history.
- **Dunning** plans send reminders automatically.`, 'D'],

['Collections', 'How do disputes and credit memo requests work?',
`- Collector/customer service creates a **dispute** on invoice lines (reason, amount).
- It routes for **approval** (credit memo request workflow by amount/reason).
- On approval, a **credit memo** is created automatically.
- Dispute reasons analyzed to fix root causes (pricing, delivery, quality).`, 'D'],

['Credit', 'How do you set up credit checking for sales orders?',
`- **Credit Management**: credit profiles and limits (customer/account), credit check enabled on order types/BUs.
- OM triggers credit checks at booking/scheduling; **credit holds** applied if exposure > limit.
- Exposure includes open receivables, uninvoiced orders and (optionally) overdue tolerance.
- Credit analysts review via case folders and release holds or raise limits.`, 'D'],

['Revenue', 'What is the difference between AR revenue scheduling rules and Revenue Management?',
`- **Revenue scheduling rules (AR)**: spread revenue over periods for an invoice (e.g. 12 months) — simple deferrals.
- **Revenue Management**: ASC 606/IFRS 15 engine — contracts across sources, performance obligations, SSP allocation, satisfaction events.
- Use Revenue Management when bundles/allocation matter; scheduling rules for simple subscriptions.`, 'D'],

['Revenue', 'What are revenue contingencies?',
`- Conditions that **defer revenue** recognition until resolved — e.g. customer acceptance, cancellation clause, extended payment terms, doubtful collectibility.
- Assigned by rules (e.g. by customer or item); removed by events (acceptance date, payment, expiration).
- Integrated with COGS matching for deferred COGS.`, 'D'],

['Reporting', 'Which AR reports do you use at month end?',
`- **Aging** by customer and bucket.
- **Receivables to Ledger Reconciliation**.
- **Unapplied/on-account receipts** report.
- **Account analysis** for receivable accounts.
- **Transaction register** and **adjustment register**.
- **Collections effectiveness/DSO** analysis.`, 'B'],

['Data Migration', 'How do you convert open AR at go-live?',
`- Load **open invoices/credit memos** via AutoInvoice (FBDI) with original numbers, dates, due dates and remaining amounts; offset to a **conversion clearing account**.
- Load **unapplied/on-account receipts** separately.
- Customers first (with sites, profiles, bank accounts for direct debit).
- Reconcile aging totals by customer and bucket; sign-off.`, 'D'],

['Interview', 'What makes a strong AR/O2C contractor answer in interviews?',
`- Show **end-to-end O2C** knowledge (OM → AutoInvoice → receipts → collections → revenue → GL).
- Quantify outcomes (DSO, auto-cash rate, unapplied cash reduction).
- Explain **controls** (credit, adjustments approvals, write-off limits).
- Be ready for an AutoInvoice error scenario and a cash application design question.`, 'B']
]);
