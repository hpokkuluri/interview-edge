// fa-ar — generated from src/fa-ar-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Accounts Receivable, Credit & Collections. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ar'] = (QB['fa-ar'] || []).concat([
['Process', 'Describe the order-to-cash process.',
`- Customer order → **credit check** → fulfillment/shipment → **invoice** → collections → **cash application** → reconciliation and reporting.
- Disputes and deductions handled along the way.`, 'B', 'E'],

['Cash Application', 'What is cash application and what makes it hard?',
`- Matching incoming payments to open invoices.
- Challenges: missing/unclear remittances, short payments, multiple invoices in one payment, deductions, lockbox data quality.
- Tools: lockbox files, bank statement auto-matching, AI cash-app tools.`, 'B', 'E'],

['Collections', 'How do you prioritize collections?',
`- By **amount and age** (biggest, oldest first), customer risk, and promised-to-pay dates.
- Segment customers; automated reminders for small balances.
- Escalation path: reminder → call → manager → credit hold → collections agency/legal.`, 'B', 'E'],

['KPIs', 'What is DSO and how do you calculate it?',
`- **Days sales outstanding** = (Accounts receivable ÷ Credit sales) × days in period.
- Measures how fast you collect. Also watch **aging buckets**, **CEI** (collection effectiveness index), and **best possible DSO**.`, 'B', 'E'],

['Credit', 'How do you set a credit limit for a new customer?',
`- Credit application, trade references, bank references.
- Credit reports (D&B, Experian), financial statements (liquidity, leverage).
- Expected order volume and payment terms.
- Start conservative; review after payment history.`, 'D', 'M'],

['Disputes', 'How do you handle customer disputes and deductions?',
`- Log with reason codes (pricing, quantity, damages, promotions).
- Route to the owner (sales, logistics, quality); set deadlines.
- Resolve: credit memo if valid, or re-bill/collect if invalid.
- Analyze root causes to prevent repeats.`, 'B', 'M'],

['Accounting', 'How do you estimate the allowance for doubtful accounts?',
`- **Aging method** (percentages by aging bucket) and specific reserves for known risks.
- Under **CECL** (ASC 326), include expected losses with forward-looking information.
- Entry: Dr Bad debt expense / Cr Allowance; write-offs: Dr Allowance / Cr AR.`, 'D', 'M'],

['Month-End', 'What does AR do at month-end?',
`- Ensure all invoices and cash are posted by cut-off.
- Reconcile AR subledger to GL; review unapplied cash and credit balances.
- Aging review and allowance update; report DSO and past-due.`, 'B', 'E'],

['Communication', 'How do you approach a collections call?',
`- Be prepared (invoices, history, contacts).
- Polite and firm; confirm receipt of invoice and any issues.
- Get a **specific commitment** (amount, date) and follow up in writing.`, 'B', 'E'],

['Improvement', 'How would you reduce DSO by 10 days?',
`- Invoice accurately and promptly (e-invoicing).
- Clear terms; credit checks; electronic payment options.
- Proactive reminders before due date; segment collection strategies.
- Fix dispute root causes; align sales incentives with collections.`, 'D', 'S'],

['Behavioral', 'Tell me about a difficult collection you resolved.',
`- Situation (large overdue balance, dispute), actions (root cause, escalation, payment plan), result (cash collected, relationship preserved).`, 'B', 'M']
]);
