// fa-ap — generated from src/fa-ap-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Accounts Payable. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ap'] = (QB['fa-ap'] || []).concat([
['Process', 'Describe the end-to-end accounts payable process.',
`- Receive invoice (paper, email, portal, EDI) → capture data (OCR/manual).
- **Match** to PO and receipt (2-way/3-way) or route non-PO invoices for approval.
- Resolve exceptions (price/quantity variances, missing receipts).
- Post to GL; schedule by **payment terms**.
- Payment run (ACH, wire, check, virtual card); remittance to vendor.
- Reconcile AP subledger to GL at month-end.`, 'B', 'E'],

['Matching', 'What is 2-way, 3-way and 4-way matching?',
`- **2-way**: invoice vs PO (price, quantity).
- **3-way**: invoice vs PO vs **receipt** (goods received).
- **4-way**: adds **inspection/acceptance**.
- Tolerances allow small variances; outside tolerance → hold.`, 'B', 'E'],

['Vendors', 'How do you set up a new vendor and prevent fraud?',
`- Collect **W-9** (US) or tax documents, bank details on company letterhead, verify via independent call-back.
- Check sanctions lists; avoid duplicates.
- **Segregation of duties**: vendor setup separate from invoice entry and payment.
- Changes to bank details verified by phone with known contact.`, 'B', 'E'],

['Payments', 'How do you take advantage of early payment discounts?',
`- Terms like **2/10 net 30**: 2% discount if paid within 10 days.
- Annualized return ≈ 2/98 × 365/20 ≈ **37%**, usually worth taking if cash allows.
- Fast invoice approval and payment scheduling make it possible.`, 'B', 'M'],

['Duplicates', 'How do you prevent duplicate payments?',
`- ERP **duplicate invoice checks** (vendor + invoice number + amount + date).
- Standard invoice numbering rules (no extra characters).
- Post-payment audits or duplicate-detection tools.
- Recover duplicates via vendor credits.`, 'B', 'E'],

['Month-End', 'What does AP do at month-end?',
`- Enter all received invoices by cut-off.
- **Accrue** received-not-invoiced goods and services.
- Reconcile AP subledger to GL; review aged payables and debit balances.
- Report on open holds and unmatched receipts.`, 'B', 'E'],

['1099', 'What is 1099 reporting?',
`- In the US, companies report payments to certain non-corporate vendors (contractors, rents, legal fees) on **Form 1099-NEC / 1099-MISC**.
- Requires correct W-9 data and 1099 flags on vendors and payments.
- Filed annually with the IRS and sent to vendors by the deadline.`, 'B', 'M'],

['KPIs', 'Which AP metrics do you track?',
`- Cost per invoice; invoices per FTE.
- Invoice cycle time; % touchless/first-pass match.
- Discounts captured vs available; late payments.
- **DPO** (days payable outstanding); duplicate payment rate.`, 'D', 'M'],

['Automation', 'How would you automate AP?',
`- Invoice capture with **OCR/AI** and supplier portals/e-invoicing.
- Automated matching and approval workflows.
- Electronic payments (ACH, virtual card).
- Vendor self-service for status queries.`, 'D', 'M'],

['Controls', 'What are key AP controls?',
`- Segregation of duties (vendor master, invoice entry, payment approval).
- Approval limits; matching tolerances; positive pay with the bank.
- Vendor master change reviews; payment run approvals.`, 'D', 'M'],

['Vendor Relations', 'A vendor calls angry that they haven\'t been paid. What do you do?',
`- Listen; look up invoice status (received? on hold? scheduled?).
- Explain clearly and give a realistic date; fix internal blocks (approval, receipt).
- Follow up as promised; note any process gaps.`, 'B', 'E'],

['Management', 'How would you reduce AP processing cost as AP manager?',
`- Increase PO compliance (fewer non-PO invoices).
- E-invoicing and automation; fewer paper checks.
- Clean vendor master; standard terms.
- Measure and report KPIs; team training.`, 'D', 'S']
]);
