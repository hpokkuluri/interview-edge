// Accounts Receivable, Credit & Collections. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ar'] = [
["Process", "Walk me through the order-to-cash process.",
`**Why they ask:** AR roles sit in the middle of O2C; they want the full picture.

**Answer:**
1. Customer onboarding and **credit check**; credit limit and terms set.
2. **Sales order** entered; credit check against the limit.
3. **Fulfillment** — pick, pack, ship (or service delivered).
4. **Invoice** generated and sent (email, portal, EDI).
5. **Collections** — reminders, calls, dispute handling.
6. **Cash application** — match payments to invoices.
7. **Reconcile** AR to GL; report DSO and aging.

Tip: Point out where AR depends on other teams — billing accuracy depends on sales and shipping data.`, 'B', 'E'],

["Cash Application", "What is cash application and what makes it difficult?",
`**Answer:** Matching incoming payments to open invoices so customer balances are accurate. Difficulties: remittances missing or in separate emails, one payment covering many invoices, short payments and deductions, payments from a parent company for subsidiaries, and wrong invoice references.

**How I handle it:** lockbox and bank files imported daily, auto-matching rules (invoice number, amount, customer), then manual work on exceptions, with unapplied cash cleared within a few days.

Tip: Mention your auto-match rate and how you improved it.`, 'B', 'E'],

["Cash Application", "A customer pays $48,500 against invoices totaling $50,000. What do you do?",
`**Answer:** Apply the $48,500 to the invoices and record the $1,500 short payment as a **deduction/dispute** with a reason code, not a write-off. Contact the customer for the reason — pricing, damaged goods, promotion, early-pay discount taken late. Route to the owner (sales, logistics). If valid, issue a credit memo; if not, collect it.

Tip: Never leave the short pay buried in unapplied cash.`, 'B', 'E'],

["Cash Application", "How do you handle unapplied and unidentified cash?",
`**Answer:** Unapplied cash (customer known, invoice unknown) — contact the customer for remittance. Unidentified cash (customer unknown) — research bank details, amount patterns and open invoices, and ask sales. Track both daily with aging and clear quickly; old unapplied balances distort aging and DSO.

Tip: Mention a target like "cleared within 5 business days".`, 'B', 'E'],

["Collections", "How do you prioritize your collections work?",
`**Answer:** Segment the portfolio:
- **Largest and oldest** past-due balances first.
- **Risk** — customers with deteriorating payment patterns or credit scores.
- **Promises to pay** due today.
- Small balances handled through automated dunning emails.
I keep a daily worklist and log every contact.

Tip: Mention using collection software (HighRadius, Billtrust, Oracle Advanced Collections) if you have.`, 'B', 'E'],

["Collections", "Describe your approach to a collections call.",
`**Answer:** Prepare: invoices, history, prior promises. On the call, confirm the customer received the invoice and has no dispute, ask when it will be paid, and get a **specific amount and date**. Be polite but firm. Send an email confirming the commitment and follow up the day after the promised date if payment hasn't arrived.

Tip: "Specific commitment and written follow-up" is what interviewers listen for.`, 'B', 'E'],

["Collections", "What is your escalation path for a seriously overdue account?",
`**Answer:** Reminder → call → second call with manager → involve the sales account owner → **credit hold** on new orders → formal demand letter → payment plan negotiation → collections agency or legal action → write-off as last resort. At each step document everything.

Tip: Mention coordinating with sales before credit hold — it protects the relationship.`, 'D', 'M'],

["Collections", "A customer says they can't pay right now. What do you do?",
`**Answer:** Understand the situation — temporary cash issue or something more serious? Propose a **payment plan** with dates and amounts, possibly secured by stopping further credit or requiring prepayment on new orders. Get it in writing, monitor closely, and escalate if they miss a payment. Assess whether a reserve is needed.

Tip: Showing flexibility plus protection is the right balance.`, 'D', 'M'],

["KPIs", "What is DSO and how do you calculate it?",
`**Answer:** Days sales outstanding = (Accounts receivable ÷ credit sales for the period) × days in period.
**Example:** AR $3M, quarterly credit sales $9M, 90 days → DSO = 30 days.
Also track **best possible DSO** (current AR only), **CEI** (collection effectiveness index), and the % of AR over 60/90 days.

Tip: Note that DSO can be distorted by seasonal sales — use trends.`, 'B', 'E'],

["KPIs", "What is the collection effectiveness index (CEI)?",
`**Answer:** CEI = (Beginning AR + credit sales − ending total AR) ÷ (beginning AR + credit sales − ending current AR) × 100. It measures how much of the collectible AR was actually collected in the period. Closer to 100% is better. It's less affected by sales swings than DSO.

Tip: Mentioning CEI shows depth beyond DSO.`, 'D', 'M'],

["Credit", "How do you set a credit limit for a new customer?",
`**Answer:** Gather a credit application, trade references and bank references; pull a credit report (D&B, Experian, Creditsafe); review financial statements for liquidity and leverage when the exposure is large. Set the limit based on expected orders × terms, then adjust with payment history. Higher risk → lower limit, shorter terms, deposit or letter of credit.

**Example:** expected $50,000/month on net 30 → limit around $75,000 to cover overlap.

Tip: Mention a credit policy with approval levels.`, 'D', 'M'],

["Credit", "What do you look at in a customer's financial statements?",
`**Answer:** Liquidity (current ratio, quick ratio), leverage (debt to equity), profitability trends, cash flow from operations, and their own payment behavior (days payable). Red flags: falling cash, rising payables, losses, going concern notes.

Tip: You don't need to be an analyst — know the key ratios.`, 'D', 'S'],

["Credit", "What is a credit hold and when do you use it?",
`**Answer:** A block on new orders when a customer exceeds their credit limit or has seriously past-due balances. It protects the company from growing exposure. Releases require approval from credit management, often with sales input. Overusing it hurts sales, so I apply it based on clear policy rules.

Tip: Mention working with sales on releases for strategic customers.`, 'B', 'M'],

["Disputes", "How do you manage disputes and deductions?",
`**Answer:** Log every dispute with a reason code (pricing, quantity, damage, promotion, tax, proof of delivery). Route to the responsible team with a deadline. Resolve with a credit memo if valid or re-bill/collect if invalid. Report disputes by root cause monthly and work with sales, logistics and billing to stop repeat issues.

Tip: Root-cause reporting is what separates good AR from great AR.`, 'B', 'M'],

["Disputes", "Pricing disputes keep coming from one large customer. How do you fix it?",
`**Answer:** Pull the last few months of disputes and compare invoiced prices with the customer contract and price lists in the system. Usually the price list or contract isn't updated in the ERP, or promotions aren't set up. Fix the master data with sales ops, credit affected invoices, and set up a check before invoicing for that customer.

Tip: Turning a recurring dispute into a master data fix is a strong story.`, 'D', 'M'],

["Accounting", "How do you estimate the allowance for doubtful accounts?",
`**Answer:** Use the **aging method** — apply loss rates to each aging bucket based on history (e.g. 1% current, 5% 31–60, 20% 61–90, 50% over 90) — plus **specific reserves** for known problem customers. Under **CECL (ASC 326)**, include forward-looking information about expected losses.

Entries: Dr Bad debt expense / Cr Allowance. Write-off: Dr Allowance / Cr AR. Recovery: reverse the write-off and record cash.

Tip: Mention IFRS 9's expected credit loss model if the company reports under IFRS.`, 'D', 'M'],

["Accounting", "What are the journal entries for a sale, collection and credit memo?",
`**Answer:**
- **Invoice:** Dr Accounts receivable / Cr Revenue (and Cr Sales tax payable).
- **Collection:** Dr Cash / Cr Accounts receivable.
- **Credit memo for returned goods:** Dr Sales returns (or Revenue) / Cr Accounts receivable.
- **Early pay discount taken:** Dr Sales discounts / Cr AR.

Tip: Mention that a return of physical goods also reverses COGS and inventory.`, 'B', 'E'],

["Month-End", "What does AR do at month-end?",
`**Answer:** Ensure all invoices and cash are posted by cut-off, clear unapplied cash, run create accounting / transfer to GL, reconcile AR subledger to the GL, review aging and credit balances, update the allowance, and report DSO, past-due and top risks.

Tip: Mention reconciling the cash receipts to the bank.`, 'B', 'E'],

["Month-End", "How do you reconcile AR to the general ledger?",
`**Answer:** Compare the AR aging total to the GL receivables account. Differences usually come from manual journals posted directly to AR, unaccounted transactions, FX revaluation or timing. Restrict manual entries to the control account and resolve differences before close.

Tip: In Oracle, the "Receivables to General Ledger Reconciliation" report helps.`, 'D', 'M'],

["Billing", "What causes invoice errors and how do you prevent them?",
`**Answer:** Wrong prices or contracts in the system, wrong bill-to address or PO number, missing proof of delivery, tax errors, and billing before shipment. Prevention: accurate master data, required customer PO on orders, validation before invoices are sent, and e-invoicing for large customers.

Tip: Accurate invoices are the fastest way to lower DSO.`, 'B', 'E'],

["Improvement", "How would you reduce DSO by 10 days?",
`**Answer:**
- Invoice accurately and immediately (e-invoicing, no billing delays).
- Collect proactively: reminders before due dates.
- Make paying easy: ACH, card, customer portal.
- Fix dispute root causes.
- Enforce terms and credit holds consistently.
- Align sales incentives with collections, not just bookings.

Tip: Quantify — 10 days of DSO on $100M annual sales frees about $2.7M of cash.`, 'D', 'S'],

["Improvement", "How do you improve the cash application auto-match rate?",
`**Answer:** Analyze unmatched items: missing invoice numbers, consolidated payments, short pays. Ask large customers to send remittances electronically (EDI 820, portal), configure better matching rules (amount combinations, customer reference patterns), use AI-based remittance capture, and keep customer bank account mapping up to date.

Tip: A before/after rate (e.g. 45% → 80%) makes the answer strong.`, 'D', 'M'],

["Automation", "How is AI changing AR?",
`**Answer:** AI predicts which customers will pay late so collectors focus early, drafts collection emails, extracts remittance data from any format for cash application, and suggests dispute owners and resolutions. Tools like HighRadius and AI features in Oracle and SAP are used. Collectors spend more time on relationships and complex cases.

Tip: Show you'd adopt it with clear measurement.`, 'D', 'S'],

["Systems", "Which AR systems have you used?",
`**Sample answer:** "Oracle Fusion Receivables for invoicing, receipts, lockbox and adjustments; Advanced Collections for work queues; and Excel for aging analysis. I've also used Billtrust for customer portals and payments."

Tip: Name what you did in each system.`, 'B', 'E'],

["Oracle", "How do AutoInvoice and lockbox work in Oracle Receivables?",
`**Answer:** **AutoInvoice** imports billing lines from Order Management or external systems into Receivables, validates them, and creates invoices, credit memos and accounting. Errors appear in the interface for correction. **Lockbox** imports bank payment files, matches receipts to invoices using matching rules, and creates receipts automatically; exceptions go to a queue.

Tip: Mention you've fixed AutoInvoice errors (e.g. missing customer, invalid tax) if true.`, 'D', 'M'],

["Customer", "How do you balance collecting money with keeping a good customer relationship?",
`**Answer:** Be respectful and consistent, assume good intent first, and solve problems that block payment (wrong invoices, missing POs). Coordinate with sales before escalating major accounts. Firmness about terms protects the relationship — customers respect clear expectations.

Tip: A story where you collected and kept the customer happy works well.`, 'B', 'E'],

["Customer", "A customer refuses to pay until a quality issue is fixed. What do you do?",
`**Answer:** Log it as a dispute, notify the quality and sales teams with the details, and agree a timeline. Ask the customer to pay the undisputed portion now. Once resolved, issue a credit if warranted and collect the rest. Track the item until closed.

Tip: "Pay the undisputed portion" is a key move.`, 'B', 'M'],

["Write-offs", "When do you write off a receivable?",
`**Answer:** When collection is no longer reasonably expected — bankruptcy, a closed business, exhausted collection efforts, or legal advice. Write-offs follow approval limits (e.g. manager under $5,000, controller above) and are charged to the allowance. Small-balance write-offs follow a policy threshold.

Tip: Mention filing a proof of claim in bankruptcies.`, 'D', 'M'],

["Bankruptcy", "A customer files for bankruptcy. What happens next?",
`**Answer:** Stop shipments on credit, file a proof of claim, stop collection activity (the automatic stay), reserve or write off as appropriate, and watch for preference claims (payments received in the 90 days before filing may be challenged). Work with legal.

Tip: Mentioning the automatic stay and preference risk shows expertise.`, 'D', 'S'],

["Revenue", "How does revenue recognition relate to AR?",
`**Answer:** AR is created when the company has an unconditional right to payment — usually when invoiced after delivery. Under ASC 606, revenue may be recognized before invoicing (contract asset / unbilled receivable) or cash may be received before revenue (deferred revenue / contract liability). AR must align with these.

Tip: Mention unbilled receivables if you've worked with project billing.`, 'D', 'M'],

["Controls", "What are the key AR controls?",
`**Answer:** Segregation between cash receipt handling and AR posting, approval for credit memos and write-offs, credit limit approvals, daily cash reconciliation to bank, AR-to-GL reconciliation, and review of customer master changes.

Tip: Note that the person who applies cash shouldn't also approve credit memos.`, 'D', 'M'],

["Fraud", "What AR fraud risks do you watch for?",
`**Answer:** **Lapping** (using one customer's payment to cover another's stolen payment), unauthorized credit memos or write-offs to hide theft, fictitious customers or sales, and diverted payments. Controls: segregation of duties, credit memo approvals, customer confirmations, and mandatory vacation/rotation.

Tip: Naming lapping signals real knowledge.`, 'D', 'M'],

["Reporting", "What does a good AR report for leadership include?",
`**Answer:** DSO trend, aging buckets with % past due, top 10 past-due customers with action plans, disputes by reason, cash collected vs forecast, and bad debt/allowance changes. Short commentary on risks.

Tip: Leadership wants actions, not just numbers.`, 'B', 'M'],

["Forecasting", "How does AR support cash forecasting?",
`**Answer:** AR provides expected collections by week based on due dates, customer payment patterns and promises to pay. Comparing forecast vs actual each week improves accuracy. Treasury uses it in the 13-week cash forecast.

Tip: Mention using historical average days-to-pay per customer.`, 'D', 'M'],

["Behavioral", "Tell me about a difficult collection you resolved.",
`**Sample answer:** "A distributor was $380,000 past due and had stopped returning calls. I involved our sales director, set up a meeting, and found $90,000 was disputed over damaged shipments. We resolved the damage claim in a week, agreed a 60-day payment plan for the rest, and they paid on schedule. The account is still a customer."

Tip: Root cause, partnership, numbers, relationship preserved.`, 'B', 'M'],

["Behavioral", "Describe a time you improved an AR process.",
`**Sample answer:** "Unapplied cash averaged $1.2M because remittances came in separate emails. I set up a shared remittance inbox, asked our top 20 customers to send remittance details with ACH payments, and added auto-match rules. Unapplied cash fell to under $200,000 within two months."

Tip: A before/after metric is essential.`, 'B', 'M'],

["Behavioral", "How do you handle a rude or aggressive customer?",
`**Answer:** Stay calm and professional, acknowledge their frustration, focus on facts and solutions, and don't take it personally. If it becomes abusive, end the call politely and involve my manager or the sales owner.

Tip: Emotional control is the skill they're testing.`, 'B', 'E'],

["Management", "As AR manager, how would you structure the team?",
`**Answer:** Split by function (billing, cash application, collections, credit) or by customer segment (strategic accounts get a dedicated collector). Clear KPIs per role, backups, daily huddles for priorities, and automation for low-value work.

Tip: Mention growth paths for team members.`, 'D', 'S'],

["Management", "How do you set collector targets?",
`**Answer:** Based on portfolio — e.g. % of past-due collected per month, promises kept, contacts made, dispute resolution time. Targets should be achievable and tied to cash outcomes, not just call counts.

Tip: Balance activity metrics with results.`, 'D', 'S'],

["Policy", "What should a credit and collections policy include?",
`**Answer:** Credit approval process and limits by approval level, standard terms, required documents, dunning schedule, escalation and credit hold rules, dispute handling timelines, write-off authority, and reserve methodology.

Tip: Mention policy reviewed annually.`, 'D', 'S'],

["International", "What's different about international receivables?",
`**Answer:** Foreign currency invoices and FX revaluation, longer payment terms in some countries, letters of credit or export credit insurance for risky markets, local tax (VAT) on invoices, and cross-border bank fees causing short payments.

Tip: Mention handling bank-fee short payments with a small tolerance policy.`, 'D', 'M'],

["Technical", "What is a letter of credit?",
`**Answer:** A bank's guarantee that the seller will be paid if they present compliant documents (invoice, bill of lading, etc.). Common in international trade with new or risky customers. It reduces credit risk but adds cost and paperwork.

Tip: Show you know when to use it — high risk, high value, cross-border.`, 'D', 'S'],

["Technical", "What is credit insurance?",
`**Answer:** An insurance policy that pays a percentage of receivables if customers fail to pay due to insolvency or political risk. It lets a company offer more credit and sometimes improves financing terms.

Tip: Mention it alongside letters of credit as risk tools.`, 'D', 'S'],

["Technical", "What is factoring?",
`**Answer:** Selling receivables to a third party (factor) at a discount to get cash early. With recourse, the seller still bears credit risk; without recourse, the factor does. Accounting depends on whether control transfers (ASC 860).

Tip: Mention it's a working-capital tool, often used by growing companies.`, 'D', 'S'],

["Career", "Why do you want a career in credit and collections?",
`**Sample answer:** "Cash is what keeps a business alive, and AR directly turns sales into cash. I like solving problems with customers and internal teams, and I want to grow into a credit manager role where I can shape policy and risk decisions."

Tip: Tie it to business impact.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I collect consistently while keeping customer relationships strong, I fix root causes of disputes instead of just chasing them, and I'm comfortable with ERP AR modules and reporting. In my last role I helped lower DSO by 8 days."

Tip: Results plus approach.`, 'B', 'E']
];
