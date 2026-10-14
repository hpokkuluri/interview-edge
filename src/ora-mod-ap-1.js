// Oracle Modules — Payables, Payments & Expenses. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-ap'] = (QB['ora-mod-ap'] || []).concat([
['Setup', 'What are the key Payables setups in Fusion?',
`- **Payables and Procurement options** (accounting options, prepayment, conversion rates).
- **Invoice options**, **payment options**, **tax and withholding**.
- **Invoice tolerances** and **hold/release names**.
- **Payment terms**, **distribution sets**.
- **Invoice approval** (BPM rules).
- **Payment methods**, **payment process profiles**, **disbursement bank accounts**.
- **Supplier** setups with sites and assignments.`, 'B'],

['Invoices', 'What are distribution sets and when do you use them?',
`- Templates that **automatically create invoice distributions** — full (fixed amounts/percentages) or skeleton (accounts only).
- Example: monthly utility invoice split 40/60 between two cost centers.
- Assigned to supplier sites as defaults.`, 'B'],

['Invoices', 'How do you match an invoice to a PO, a receipt and a consumption advice?',
`- **PO match**: match to PO schedules (quantity × price or amount).
- **Receipt match**: match to specific receipts (3-way), useful for price variance by receipt.
- **Consumption advice match**: for consignment inventory — matching to consumption.
- Matching option on the PO schedule determines whether AP must match to receipts or POs.`, 'D'],

['Invoices', 'What are quick credits and price corrections?',
`- **Price correction**: adjusts the unit price of a previously matched invoice without changing quantity (e.g. supplier increases price after original invoice).
- **Quick credit**: a credit memo that fully reverses an existing invoice (all lines) in one step.
- **Quantity correction** via credit memo matched to the original.`, 'D'],

['Holds', 'How do you set up hold resolution routing?',
`- Holds can route to owners via **holds resolution workflow** (e.g. price holds to buyer, quantity received holds to requester).
- Rules by hold type and attributes; notifications with actions (release, request info).
- Measure days on hold by type and owner.`, 'D'],

['Payments', 'Walk me through the components of the Fusion Payments setup.',
`- **Payment methods** (check, EFT, wire) with usage rules (by BU, currency, supplier).
- **Payment formats** (BI Publisher templates).
- **Payment process profiles**: format, transmission, grouping, limits, document numbering.
- **Payment system** and **transmission configurations** (SFTP, web service).
- **Disbursement bank accounts** and **payment documents** (check stock).
- **Funds disbursement process** run via PPRs.`, 'D'],

['Payments', 'How do you set up payment approval for large payment runs?',
`- Enable **payment approval** in payment options; define approval rules (BPM) by amount, currency, bank account.
- PPR stops for approval after build; approvers review and approve/reject payments.
- Also consider **"stop process for review"** settings for manual review of proposed payments.`, 'D'],

['Payments', 'How do you handle supplier refunds and outbound payments to non-suppliers?',
`- **Supplier refunds** (supplier pays you): record as a negative payment (refund) against a credit memo, or receipt in AR if appropriate.
- **Payment requests**: pay employees, customers (refunds) or one-time payees without creating suppliers — from AR refunds, Expenses or manual requests.`, 'D'],

['Expenses', 'How do corporate card expenses get from the card issuer to payment?',
`- Card issuer **transaction file** loaded daily → transactions matched to employees (card numbers).
- Employees add details/receipts and submit in expense reports.
- Approval and audit.
- **Payment**: company pays the card issuer (company pay) via AP invoice to the issuer; individual pay reimbursed to employees.`, 'D'],

['Expenses', 'How do expense audits work in Fusion?',
`- **Audit rules** select reports (by amount, policy violations, random sampling, specific employees/expense types).
- **Auditors** review receipts, adjust/reject lines, return to employees.
- **Receipt management**: track missing/received receipts; imaged receipts accepted.
- Audit list rules for repeat offenders.`, 'D'],

['Period Close', 'What is "sweep" in Payables close and when do you use it?',
`- At period close, unaccounted transactions (invoices/payments that can't be accounted in the period) can be **swept** to the next open period so the period can close.
- Use only after resolving what you can; review the swept list with accounting.`, 'B'],

['Interview', 'What is your approach to AP automation for a contract role?',
`- Assess current state: invoice channels, touchless rate, holds by type, cycle time, cost per invoice.
- Quick wins: tolerances, PO-level matching for BPAs, auto-approval of matched invoices, supplier data cleanup.
- Medium-term: IDR, supplier portal/e-invoicing, AI agents for hold triage and supplier inquiries.
- Measure monthly and report to the controller.`, 'B']
]);
