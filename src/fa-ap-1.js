// Accounts Payable (Specialist -> Manager). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ap'] = [
["Process", "Walk me through the end-to-end accounts payable process.",
`**Why they ask:** confirms you understand AP beyond data entry.

**Answer:**
1. **Receive the invoice** — email inbox, supplier portal, EDI or paper.
2. **Capture data** — OCR/AI capture or manual entry; validate supplier, invoice number, date, amount, tax.
3. **Match or approve** — PO invoices match to PO and receipt; non-PO invoices route for approval.
4. **Resolve exceptions** — price, quantity, missing receipt or tax holds.
5. **Post to the GL** — expense or inventory/accrual clearing, with the liability to AP.
6. **Schedule payment** by terms; run the payment batch (ACH, wire, check, card).
7. **Reconcile** AP subledger to GL and review aging at month-end.

Tip: Mention which ERP you did this in.`, 'B', 'E'],

["Matching", "Explain 2-way, 3-way and 4-way matching.",
`**Why they ask:** matching is the heart of AP control.

**Answer:**
- **2-way:** invoice vs purchase order — price and quantity.
- **3-way:** invoice vs PO vs **receipt** — confirms goods were actually received.
- **4-way:** adds **inspection/acceptance** — used for items that must pass quality checks.
Tolerances (e.g. ±2% price, ±5% quantity) allow small differences; anything outside places the invoice on hold.

**Example:** PO for 100 units at $10, receipt of 90, invoice for 100 → quantity hold until more is received or a credit is requested.

Tip: Say services are often 2-way or matched to a receipt of service.`, 'B', 'E'],

["Matching", "An invoice is on a price variance hold. How do you resolve it?",
`**Answer:** Compare invoice price to PO price. If the supplier billed incorrectly, request a credit memo or corrected invoice. If the price legitimately changed, the buyer updates the PO (with approval) and the hold releases on revalidation. If within an agreed tolerance policy, release with documented approval. I track repeat offenders and share with procurement.

Tip: AP shouldn't change PO prices — procurement owns that. Saying so shows control awareness.`, 'B', 'E'],

["Matching", "What do you do when goods are invoiced but not received?",
`**Answer:** The invoice stays on a receipt hold. I contact the requester or receiving team to confirm whether goods arrived. If they did, they enter the receipt and the hold clears. If not, I check with the supplier — it may be shipped late or billed early. I don't release the hold without a receipt or documented approval.

Tip: Mention the aging of receipt holds as a KPI you watch.`, 'B', 'E'],

["Vendors", "How do you set up a new supplier securely?",
`**Why they ask:** vendor master fraud is one of the biggest AP risks.

**Answer:**
- Collect **W-9** (US) or W-8 for foreign vendors; validate TIN with IRS TIN matching.
- Bank details on official documentation; **verify by calling a known contact**, never the number on the request.
- Sanctions/OFAC screening; duplicate vendor check.
- Setup done by a team **separate from invoice entry and payment**.
- Approval workflow for new vendors.

Tip: The independent call-back is the single most important control.`, 'B', 'E'],

["Vendors", "A supplier emails asking to change their bank account. What do you do?",
`**Why they ask:** business email compromise is a top fraud scheme.

**Answer:** Treat it as potentially fraudulent. Don't use contact details from the email. Call the supplier at a number already on file or from a known contract, confirm the request with someone we've dealt with before, and get written confirmation on letterhead. A second person approves the change, and the first payment to the new account is reviewed. Notify the supplier contact after the change.

Tip: Mention a fraud attempt you caught if you have one.`, 'B', 'E'],

["Vendors", "How do you keep the vendor master clean?",
`**Answer:** Periodic review for duplicates (same TIN, bank account or address), deactivate vendors inactive for 12–18 months, standard naming conventions, required fields enforced, and change logs reviewed monthly. Clean data reduces duplicate payments and fraud risk.

Tip: Cite a cleanup you did — e.g. deactivated 2,000 inactive vendors.`, 'D', 'M'],

["Payments", "How does a payment run work?",
`**Answer:** Select invoices due by a date (by terms and discount dates), review the proposal for exceptions (holds, unusual amounts, new bank accounts), get approval, generate the payment file (ACH/NACHA, wire, ISO 20022 XML) or checks, transmit to the bank securely, and send remittance advice. Afterward, confirm the bank processed it and reconcile.

Tip: Mention positive pay for checks and dual approval in the bank portal.`, 'B', 'E'],

["Payments", "What are early payment discounts and are they worth it?",
`**Answer:** Terms like **2/10 net 30** give 2% off if paid in 10 days instead of 30. The annualized return is about 2/98 × 365/20 ≈ **37%** — far above most companies' borrowing cost, so usually worth taking. AP needs fast approvals and payment scheduling to capture them.

Tip: Showing the math impresses interviewers.`, 'B', 'M'],

["Payments", "What is positive pay?",
`**Answer:** A bank fraud control: the company sends the bank a file of checks issued (number, date, amount, sometimes payee). The bank only pays checks that match; mismatches are flagged for the company to approve or reject. ACH positive pay / debit blocks protect against unauthorized ACH debits.

Tip: Mention you've worked exception reports from the bank.`, 'B', 'M'],

["Payments", "Compare ACH, wire, check and virtual card payments.",
`**Answer:**
- **ACH:** low cost, 1–2 days, standard for domestic vendors.
- **Wire:** same day, higher fees, used for urgent or international payments.
- **Check:** slow, costly to process, highest fraud risk — reduce where possible.
- **Virtual card:** fast, can earn rebates for the company; suppliers pay a fee so not all accept.

Tip: Mention a project moving vendors from check to ACH or card.`, 'D', 'M'],

["Duplicates", "How do you prevent duplicate payments?",
`**Answer:**
- ERP duplicate checks on supplier + invoice number + amount + date.
- Invoice numbering standards (no extra characters or spaces).
- Matching to POs (a PO can't be over-invoiced).
- Periodic duplicate audits or recovery audit tools.
- Statement reconciliation with key suppliers.

Tip: Mention typical causes: re-sent invoices, "copy" invoices, same invoice from email and portal.`, 'B', 'E'],

["Duplicates", "You discover a duplicate payment of $40,000. What do you do?",
`**Answer:** Confirm it's a true duplicate, notify my manager, and contact the supplier for a refund or credit against open invoices. Record the receivable or credit memo correctly. Then find the root cause — a missed duplicate check, two intake channels, a manual override — and fix it.

Tip: Recovery plus prevention is the full answer.`, 'B', 'M'],

["Month-End", "What does AP do at month-end?",
`**Answer:**
- Enter and account all invoices received by cut-off.
- Accrue goods/services received but not invoiced.
- Run create accounting / transfer to GL.
- Reconcile AP subledger to the GL control account.
- Review aging, debit balances and long-outstanding holds.
- Report KPIs (volume, holds, discounts, DPO).

Tip: Mention the "received not invoiced" accrual report.`, 'B', 'E'],

["Month-End", "How do you reconcile AP to the general ledger?",
`**Answer:** Compare the AP trial balance or aging at period end to the GL liability account. Differences usually come from manual journals posted directly to the AP account, invoices/payments not accounted, period mismatches or FX revaluation. I fix the source, document remaining timing items, and get review sign-off.

Tip: Restricting manual journals to the AP control account prevents most issues.`, 'D', 'M'],

["Accruals", "What is the received-not-invoiced (RNI) accrual?",
`**Answer:** A liability for goods or services received against POs that haven't been invoiced yet. The ERP calculates it from receipts minus matched invoices (period-end accrual or receipt accrual). AP and accounting review it for stale receipts and incorrect receipts before posting.

Tip: In Oracle, mention the Uninvoiced Receipts report and accrual reconciliation.`, 'D', 'M'],

["1099", "What is 1099 reporting?",
`**Answer:** US companies must report certain payments to non-corporate vendors — independent contractors, rents, legal fees, royalties — on Form **1099-NEC** or **1099-MISC**, filed with the IRS and sent to vendors by January 31 (1099-NEC). It requires correct W-9 data and 1099 flags on vendors and invoices. Backup withholding (24%) applies if a vendor doesn't provide a valid TIN.

Tip: Mention year-end 1099 review and corrections.`, 'B', 'M'],

["Tax", "How does sales/use tax affect AP?",
`**Answer:** If a vendor charges sales tax, AP verifies it's correct. If a taxable item is bought without sales tax (e.g. out-of-state vendor), the company may owe **use tax** and must self-assess. Tax engines (Vertex, Avalara) calculate this on invoices. Exemption certificates must be on file when the company buys tax-exempt.

Tip: Mention VAT recovery for international entities if relevant.`, 'D', 'M'],

["Employee Expenses", "How do you control employee expense reports?",
`**Answer:** Clear T&E policy, receipts required above a threshold, manager approval, automated policy checks in tools like Concur or Expensify, corporate card reconciliation, audit sampling for high-risk items (alcohol, gifts, weekend spend), and duplicate detection between cards and reimbursements.

Tip: Mention a policy violation trend you helped reduce.`, 'B', 'E'],

["KPIs", "Which AP metrics do you track?",
`**Answer:**
- Cost per invoice and invoices per FTE.
- Invoice cycle time (receipt to approval).
- First-pass match / touchless rate.
- Holds count and aging.
- Discounts captured vs available; late payment rate.
- Duplicate payment rate.
- **DPO** (days payable outstanding).

Tip: Pair each metric with an action you took to improve it.`, 'D', 'M'],

["KPIs", "What is DPO and how is it calculated?",
`**Answer:** Days payable outstanding = (Accounts payable ÷ Cost of goods sold) × days in the period. Higher DPO keeps cash longer, but too high damages supplier relationships and can lose discounts. Treasury and procurement often set target terms (e.g. net 60).

Tip: Mention balancing DPO against discount capture.`, 'D', 'M'],

["Automation", "How would you automate AP?",
`**Answer:**
- **Invoice capture** with OCR/AI and supplier portals or e-invoicing.
- **Automated matching** with tolerances; workflow approvals by amount/cost center.
- **Electronic payments** (ACH, virtual card) instead of checks.
- **Supplier self-service** for invoice/payment status.
- Dashboards for holds and aging.

Tip: Quantify — e.g. touchless rate from 20% to 65%.`, 'D', 'M'],

["Automation", "How is AI being used in AP?",
`**Answer:** AI reads invoices of any layout, codes non-PO invoices to GL accounts based on history, predicts and routes exceptions, flags anomalies (possible duplicates, unusual bank changes) and answers supplier status questions. Oracle Fusion, SAP and specialist tools offer AI-assisted invoice processing. Humans still review exceptions and approve payments.

Tip: Show you see AI as reducing manual work, not removing controls.`, 'D', 'S'],

["Controls", "What are the key AP controls?",
`**Answer:**
- Segregation of duties: vendor setup, invoice entry, payment approval.
- Approval limits and workflow.
- Matching and tolerances.
- Vendor master change review and call-back verification.
- Payment run review and dual approval; positive pay.
- AP-to-GL reconciliation.

Tip: Mention you've supported SOX testing for these.`, 'D', 'M'],

["Holds", "How do you reduce invoice holds?",
`**Answer:** Analyze holds by type and root cause. Common fixes: buyers keep PO prices current, receiving is entered on time, suppliers include PO numbers on invoices, tolerances are realistic, and tax setups are correct. Report holds by buyer/requester so owners act.

Tip: A Pareto of hold reasons is a strong concrete detail.`, 'D', 'M'],

["Statements", "Why reconcile supplier statements?",
`**Answer:** Supplier statements reveal invoices we never received (unrecorded liabilities), payments not applied by the supplier, credits we haven't taken, and duplicates. I reconcile key suppliers monthly or quarterly.

Tip: Mention recovering unused credits as a win.`, 'B', 'E'],

["Credits", "How do you handle supplier credit memos and debit balances?",
`**Answer:** Apply credit memos against open invoices for the same supplier. Review debit balances monthly — request refunds if no future invoices are expected. Don't let credits sit for months; they're cash owed to the company.

Tip: Mention escheatment rules for long-unclaimed balances if you know them.`, 'B', 'E'],

["Vendor Relations", "A supplier calls angry that they haven't been paid. What do you do?",
`**Sample answer:** "I listen, then look up the invoice: was it received, is it on hold, is it scheduled? If it's on hold for a missing receipt or approval, I chase the internal owner and give the supplier a realistic date. I follow up when it's paid. If it's our delay, I own it; if their invoice was wrong, I explain what's needed."

Tip: Calm, factual and a clear next step.`, 'B', 'E'],

["Vendor Relations", "How do you handle supplier inquiries at volume?",
`**Answer:** A shared mailbox with categorization, a supplier portal for self-service status, standard response templates, and SLAs (e.g. respond within 2 business days). Track inquiry reasons to fix root causes — like missing PO numbers on invoices.

Tip: Reducing inquiries is better than answering faster.`, 'D', 'M'],

["Non-PO", "How do you handle non-PO invoices?",
`**Answer:** Route them to the right approver based on cost center and amount, ensure GL coding is correct, and track the categories. Many should move to POs or contracts. A "no PO, no pay" policy (with exceptions like utilities and rent) improves control and accruals.

Tip: Mention the percentage of non-PO spend you helped reduce.`, 'D', 'M'],

["Systems", "Which AP systems have you used?",
`**Sample answer:** "Oracle Fusion Payables for invoice entry, matching, holds and payment process requests; Coupa for invoice capture and approvals; and Concur for expenses. I'm comfortable with ERP reports like invoice aging, holds and unaccounted transactions."

Tip: Describe what you did, not just the tool names.`, 'B', 'E'],

["Oracle", "How does invoice validation and accounting work in Oracle Payables?",
`**Answer:** After entry, the invoice is **validated**, which checks matching, tolerances, tax and distributions and applies holds if needed. Once valid and approved, **Create Accounting** generates subledger journal entries (liability and expense/accrual) via Subledger Accounting, which transfer to the GL. Payments follow the payment process request and are accounted similarly (liability to cash/clearing).

Tip: For blanket POs, mention the invoice match option (PO vs receipt) setting.`, 'D', 'M'],

["Prepayments", "How do you handle supplier prepayments?",
`**Answer:** Record the prepayment as an asset (Dr Prepayment / Cr Cash). When the final invoice arrives, apply the prepayment against it, which reduces the amount due. Track unapplied prepayments monthly and follow up on any older than expected.

Tip: In Oracle, prepayment application is a standard step — say you've done it.`, 'D', 'M'],

["International", "What's different about paying international suppliers?",
`**Answer:** Foreign currency invoices and FX rates, wires or international ACH (SEPA in Europe), bank details like IBAN and SWIFT/BIC, withholding taxes in some countries, W-8 forms for US tax, and sanctions screening. FX gains/losses arise between invoice and payment dates.

Tip: Mention VAT invoice requirements for EU suppliers if relevant.`, 'D', 'M'],

["Fraud", "What AP fraud schemes do you watch for?",
`**Answer:** Fake vendors (often matching an employee's address or bank), bank detail change scams, duplicate or inflated invoices, kickbacks with real vendors, and invoice splitting to stay under approval limits. Controls: vendor master review, data analytics, approval limits, segregation of duties.

Tip: Mention running an employee-to-vendor address/bank match.`, 'D', 'M'],

["Audit", "What do auditors test in AP?",
`**Answer:** Completeness of liabilities (search for unrecorded liabilities — payments after year-end that relate to the prior year), existence of payables, cut-off, approval and matching controls, vendor master changes, and payment controls. AP should have support and approval evidence ready.

Tip: The unrecorded liabilities search is the classic test.`, 'D', 'M'],

["Behavioral", "Tell me about a process improvement you made in AP.",
`**Sample answer:** "About 35% of our invoices were going on receipt holds because warehouse receipts were entered days late. I worked with the warehouse lead to receive on the day of delivery and set up a daily hold report by receiver. Receipt holds fell 50% and we started capturing $8,000 a month more in early payment discounts."

Tip: Root cause, partner, number.`, 'B', 'M'],

["Behavioral", "How do you handle a high invoice volume at quarter-end?",
`**Sample answer:** "I prioritize by due dates and discount dates, batch similar invoices, and chase approvals early in the week. I flag anything likely to miss cut-off to accounting so they can accrue it. Clear communication keeps quarter-end calm."

Tip: Mention accrual coordination — it shows you understand the close.`, 'B', 'E'],

["Behavioral", "Tell me about catching an error or fraud attempt.",
`**Sample answer:** "We received an email from a long-time vendor asking to change bank details. The email domain was off by one letter. I called our known contact, who confirmed they hadn't sent it. We blocked the change and reported it to IT security, preventing a $120,000 payment from being diverted."

Tip: Real fraud stories are memorable — use one if you have it.`, 'B', 'E'],

["Management", "As AP manager, how would you reduce processing cost?",
`**Answer:** Increase PO compliance, move suppliers to e-invoicing and portals, raise touchless matching, move payments from checks to ACH/card, clean the vendor master, and track KPIs weekly with the team. Benchmark cost per invoice against industry ranges.

Tip: Mention a target and timeline.`, 'D', 'S'],

["Management", "How do you manage and motivate an AP team?",
`**Answer:** Clear roles and backups, daily or weekly priorities, KPIs visible to the team, recognition for accuracy and improvements, cross-training, and involving the team in automation so they move to higher-value exception work.

Tip: Address fear of automation — reskilling message.`, 'B', 'S'],

["Management", "How do you prepare AP for a new ERP implementation?",
`**Answer:** Document current processes and pain points, clean vendor master data before migration, define approval and matching rules, test end-to-end P2P scenarios (including holds and payments), validate payment file formats with banks, and train users before go-live.

Tip: Data cleanup before conversion saves months of trouble.`, 'D', 'S'],

["Technical", "What is the journal entry when an invoice is matched to a receipt?",
`**Answer:** At receipt (period-end or receipt accrual): Dr Inventory or Expense / Cr Accrued liability (receipt accrual / AP accrual).
When the invoice is matched: Dr Accrued liability / Cr Accounts payable. Any price difference goes to a price variance (IPV) account.
At payment: Dr Accounts payable / Cr Cash.

Tip: Mention invoice price variance — it shows depth.`, 'D', 'M'],

["Technical", "What is withholding tax and when does AP apply it?",
`**Answer:** Some payments require the payer to withhold tax and remit it to the government — e.g. US backup withholding when a vendor has no valid TIN, payments to foreign vendors (W-8, treaty rates), and withholding tax in many countries for services or royalties. AP withholds at payment and the tax team files.

Tip: Mention W-8BEN-E for foreign entities.`, 'D', 'M'],

["Escheat", "What is escheatment (unclaimed property)?",
`**Answer:** If payments like checks go uncashed for a set period (often 1–5 years depending on the state), the company must report and remit the funds to the state as unclaimed property after due diligence letters. AP tracks uncashed checks and voids/reissues where appropriate.

Tip: Shows broad AP knowledge.`, 'D', 'S'],

["Career", "Why do you want to work in AP?",
`**Sample answer:** "AP touches every supplier and most of the company's spend, so getting it right protects cash, controls and relationships. I like the mix of detail and process improvement, and I want to grow toward AP or P2P leadership."

Tip: Positive and forward-looking.`, 'B', 'E'],

["Closing", "Why should we hire you for this AP role?",
`**Sample answer:** "I process accurately at volume, I know how to resolve holds quickly, and I'm careful with vendor and payment controls — I've stopped at least one fraud attempt. I also look for root causes, like cutting receipt holds by half in my last role."

Tip: Accuracy, control, improvement — with proof.`, 'B', 'E']
];
