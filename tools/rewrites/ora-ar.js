// Rewritten Oracle Receivables answers (Why they ask → Answer → Tip). Apply with:
// node -e "require('fs').writeFileSync('/tmp/r.json', JSON.stringify(require('./tools/rewrites/ora-ar.js')))" && node tools/rewrite.js /tmp/r.json ora-
module.exports = {

'What are the key Receivables setups in Fusion?':
`**Why they ask:** to check that you have configured Receivables yourself, not only processed transactions in it.

**Answer:**
"I build them in layers. First the business-unit level: Receivables system options for accounting, AutoInvoice, tax and matching. Second the transaction side: transaction sources that control numbering and validation, transaction types for invoices, credit memos, debit memos, chargebacks and deposits, and AutoAccounting with SLA for the revenue, receivable, tax and freight accounts. Third the cash side: receipt classes, receipt methods and remittance bank accounts. Fourth the customer side: payment terms and customer profile classes, which carry credit, statement, dunning and collector settings. And I finish with receivables activities, because every adjustment, write-off and miscellaneous receipt needs one."

- **System options (per BU):** accounting, AutoInvoice, tax, matching.
- **Transactions:** transaction sources, transaction types, AutoAccounting.
- **Cash:** receipt classes and methods, remittance banks.
- **Customers:** payment terms, profile classes.
- **Activities:** adjustments, write-offs, misc cash, refunds.

Tip: Give the setups as a build order. Ending on receivables activities shows you've hit the "no activity defined" error on a real project.`,

'How do grouping rules and line ordering rules work in AutoInvoice?':
`**Why they ask:** grouping is the most common reason invoices come out wrong, and only people who have tuned AutoInvoice know it well.

**Answer:**
"Grouping rules decide which interface lines combine into one invoice. Some attributes are always mandatory, like currency, bill-to customer, transaction type and transaction source, so lines that differ on those can never be on the same invoice. Then I add optional attributes. For example, if the business wants one invoice per sales order, I add the sales order number; if a customer wants one invoice per PO, I add the customer PO number. Line ordering rules then sort the lines inside each invoice, usually by sales order line number, so the printed invoice reads in the same order as the order. When grouping is wrong you see one of two complaints: a customer gets fifty tiny invoices, or two different orders end up on one invoice and the customer can't match it to their PO."

Tip: Tie the answer to a customer complaint you fixed. "Too many invoices" or "mixed orders" makes it real.`,

'How do you resolve AutoInvoice errors?':
`**Why they ask:** AutoInvoice errors land on the consultant's desk every month-end. They want a method, not guesswork.

**Answer:**
"I start with the AutoInvoice execution report, which gives counts of lines processed and rejected, then open Manage AutoInvoice Lines to see each error. The usual causes are a bill-to or ship-to site that's inactive or missing, the GL date in a closed period, tax setup missing for a new ship-to state, an invalid item or unit of measure, bad payment terms, or a revenue scheduling rule that needs a duration and doesn't have one. I fix the data, either in the interface lines or in the setup, and resubmit. Then I fix the cause upstream. For example, if Order Management lets an order through with an inactive bill-to site, I add a validation there so the error never reaches AR again. At one client, about 70% of the rejections were inactive sites from a CRM sync, and one integration fix cleared most of them."

Tip: End with prevention. Interviewers want to hear that you stop the same error from coming back.`,

'Explain receipt classes, receipt methods and remittance banks.':
`**Why they ask:** this three-level setup confuses many people, and it decides how cash is accounted.

**Answer:**
"The receipt class sets the process. It says whether receipts are created manually or automatically, and whether they go through confirmation, remittance and clearance. A manual cheque receipt might need only remittance and clearance; a direct debit needs automatic creation. Under the class sit one or more receipt methods. A receipt method has the numbering and is linked to one or more remittance bank accounts. The remittance bank account is where the money is deposited, and it carries the GL accounts: cash, remittance, confirmation, unapplied, on-account and unidentified. So if I want US lockbox cheques and EU SEPA direct debits, that's two classes, each with its own method and bank."

- **Receipt class:** creation method and steps (confirm, remit, clear).
- **Receipt method:** numbering, linked banks.
- **Remittance bank account:** where cash lands, plus its GL accounts.

Tip: Give one example with two classes. It proves you understand why there are three levels.`,

'How do automatic receipts (direct debit) work?':
`**Why they ask:** direct debit is common in Europe and for subscription businesses; they want to know you can run the full cycle.

**Answer:**
"The customer is set up with an automatic receipt method and a bank account, and for SEPA a signed mandate. Their invoices use a transaction type and terms that make them eligible. Then the cycle is: run Create Automatic Receipts, which picks invoices by due date and creates receipts; if the class needs confirmation, someone confirms them; then Create Receipt Remittance Batch builds the direct debit file that goes to the bank; finally the receipts clear when the bank statement comes in through Cash Management. If a debit is returned, we reverse the receipt and the invoice reopens. For SEPA we also send pre-notifications a few days before the debit."

Tip: Mention mandates and returned debits. They are the two things that go wrong in real direct debit projects.`,

'How do you handle a customer short payment?':
`**Why they ask:** short payments are daily work for AR teams. They want to see you know the options and the controls.

**Answer:**
"It depends on why it's short and how much. If the difference is small, say under $25, and within the write-off tolerance, I apply the receipt and write off the difference using a receipt write-off activity, limited by user approval limits. If the customer took a deduction on purpose, like a pricing dispute or a damaged-goods claim, I create a chargeback or a deduction so the original invoice closes and the disputed amount sits on its own item, owned by collections and sales. If there's no reason, I leave the balance open on the invoice and the collector follows up. The important part is the reason code, because once you track deductions by reason, you find the root cause, like one product line always short-shipped."

Tip: Give a tolerance amount and name the reason codes. That's the difference between doing it and knowing it.`,

'How do you reverse a receipt and when?':
`**Why they ask:** a basic AR task, but they want to see you choose the right type of reversal.

**Answer:**
"I reverse a receipt when it was entered wrong, applied to the wrong customer, or the payment bounced, for example a cheque returned for insufficient funds. A standard reversal needs a reason and a reversal date; it backs out the cash and receivable accounting and reopens every invoice it was applied to, so collections sees the balance again. If the receipt is in a closed period or I want to charge a returned-cheque fee, I use a debit memo reversal instead, which leaves the original receipt and creates a new debit memo for the amount. One thing to check first: if the receipt is already reconciled in Cash Management, I unreconcile it before reversing."

Tip: Explain the two types and when you'd pick each. Mentioning the reconciliation check shows real experience.`,

'How does Fusion Advanced Collections assign work to collectors?':
`**Why they ask:** collections setup is often handed to the AR consultant. They want to know you can design it, not just log in.

**Answer:**
"Each customer gets a collector, either from the customer profile or through territories. Then strategies decide what work gets created. For example, a low-risk strategy might send a reminder email at 5 days late and a dunning letter at 30, while a high-risk strategy adds a phone call task at day 1 and escalation to the credit manager at day 15. Scoring formulas rank customers by risk, using things like days late and payment history, and that score picks the strategy. Collectors then work from the Collections work area, where they see the customer's aging, record promises to pay, log disputes and send correspondence. Dunning plans send reminders automatically for anything the strategy doesn't cover by hand."

Tip: Give one example of a low-risk vs high-risk strategy. It shows you designed one.`,

'How do disputes and credit memo requests work?':
`**Why they ask:** disputes link collections, customer service and billing. A good answer shows you know the approval flow and why it matters.

**Answer:**
"A collector or customer service rep creates a dispute against the invoice, either on specific lines or on tax or freight, with a reason like pricing error or damaged goods and the disputed amount. That creates a credit memo request, which routes for approval through BPM rules, usually by amount and reason, for example a sales manager approves pricing disputes under $5,000 and the controller approves above that. When the last approver signs off, Fusion creates the credit memo automatically and applies it. While the dispute is open, that amount is excluded from dunning so we don't chase the customer for it. Every month I'd report disputes by reason, because if half are pricing errors the fix is in the price lists, not in AR."

Tip: Mention that disputed amounts are left out of dunning. It's a detail that only comes from running it.`,

'How do you set up credit checking for sales orders?':
`**Why they ask:** credit checking crosses AR and Order Management, so they want to see you understand both sides.

**Answer:**
"In Credit Management I set up credit profiles with limits at the customer or account level, and enable credit checking for the business unit. In Order Management, credit check happens at booking and again before shipment if needed. Fusion calculates exposure, which is open receivables plus uninvoiced orders, and if the new order pushes exposure over the limit, or the customer has invoices past the overdue tolerance, the order goes on credit hold. Credit analysts then review it, often through a credit case folder that pulls in aging, payment history and an external score, and either release the hold or raise the limit through an approval. I always agree with sales which statuses count toward exposure, because that one decision drives how many holds they see."

Tip: Explain what exposure includes. Getting that agreement with sales is where real projects spend their time.`,

'What is the difference between AR revenue scheduling rules and Revenue Management?':
`**Why they ask:** to see if you know when simple deferral is enough and when you need the ASC 606 engine.

**Answer:**
"Revenue scheduling rules live on the AR invoice line. They spread one line's revenue over periods, for example a $12,000 annual support invoice recognized at $1,000 a month. That works when each invoice line is its own obligation. Revenue Management is the ASC 606 and IFRS 15 engine. It takes source documents from order management, AR and other systems, builds customer contracts with performance obligations, allocates the price using standalone selling prices, and recognizes revenue when each obligation is satisfied. So if a customer buys a bundle, say hardware, installation and a year of support at a discount, I need Revenue Management to allocate the discount across the three. If it's a simple subscription billed monthly, scheduling rules are enough."

Tip: Use a bundle example. Allocation is the reason Revenue Management exists.`,

'What are revenue contingencies?':
`**Why they ask:** contingencies show whether you understand revenue timing beyond billing.

**Answer:**
"A contingency is a condition that stops revenue from being recognized even though the invoice exists. Common ones are customer acceptance, a cancellation clause, extended payment terms beyond the normal limit, and doubtful collectibility. They're assigned by rules, for example every order for a certain customer or item gets an acceptance contingency. Revenue sits in deferred revenue until an event removes the contingency: the acceptance date is recorded, the payment arrives, or the cancellation period expires. Then revenue is released. They also link to costing, so cost of goods sold for that shipment is deferred too and recognized at the same time as the revenue."

Tip: Name the removal event for each contingency. Mentioning deferred COGS shows you see the full picture.`,

'Which AR reports do you use at month end?':
`**Why they ask:** a quick test of whether you've actually closed AR.

**Answer:**
"I run them in the order of the close. First the aging by customer and bucket, so collections and finance see what's outstanding. Then the Receivables to Ledger Reconciliation report, which is the key control: it ties the AR subledger to the GL receivable account and shows what's unaccounted or posted manually. Then the unapplied and on-account receipts report, because those are the balances that hide problems. Then the transaction and adjustment registers for review of what was booked and written off. Finally account analysis for the receivable accounts, and a DSO and collections effectiveness view for management."

Tip: Say the reconciliation report is the control, not just one more report. That's what controllers want to hear.`,

'How do you convert open AR at go-live?':
`**Why they ask:** conversion is where projects slip. They want to see the sequence and the reconciliation.

**Answer:**
"Customers go first, with accounts, sites, site uses, profiles, and bank accounts for anyone on direct debit. Then I load open invoices and credit memos through AutoInvoice with FBDI, keeping the original transaction numbers, transaction dates and due dates so aging and dunning stay correct, but loading only the remaining balance. The offset goes to a conversion clearing account, not revenue. Unapplied and on-account receipts are loaded separately as receipts. Then I reconcile: aging by customer and bucket in the legacy system against Fusion, the clearing account to zero once the GL balances are loaded, and finance signs off. We did three mock conversions on my last project, and the third one tied to the cent."

Tip: Mention the clearing account and keeping original due dates. Those two details prevent the classic go-live mistakes.`,

'What makes a strong AR/O2C contractor answer in interviews?':
`**Why they ask:** sometimes a recruiter or hiring manager asks this directly to see how you sell yourself.

**Answer:**
"Three things. First, show the whole order-to-cash chain, not just AR: order, AutoInvoice, receipts, collections, revenue and accounting to GL, and where each one breaks. Second, give numbers. For example, 'I took auto-applied receipts from 45% to 80%' or 'we cut DSO by 6 days'. Third, talk about controls: credit limits, approval limits on adjustments and write-offs, and the AR-to-GL reconciliation. And be ready for two classic scenarios: an AutoInvoice error you fixed, and how you'd design cash application for a high-volume customer."

Tip: Keep two numbers ready before every interview. They do more than any list of modules.`,

'How would you architect revenue recognition for a company with products, services and subscriptions?':
`**Why they ask:** an architect-level question. They want a design that separates billing from revenue timing.

**Answer:**
"I'd let each business process use the system built for it, and have all of them feed one revenue engine. Product orders come through Order Management, subscriptions through Subscription Management, and professional services through Project Billing. All of them send source documents into Revenue Management, which builds the contracts and performance obligations. Finance owns the standalone selling price tables and updates them each quarter. Billing stays in AR through AutoInvoice and follows the contract terms, independent of when revenue is recognized. Accounting gives us contract assets, contract liabilities and revenue, and I'd build a monthly deferred revenue roll-forward and the remaining performance obligations report for the disclosures."

- **Sources:** OM, Subscription Management, Project Billing.
- **Engine:** Revenue Management for contracts, obligations, SSP allocation.
- **Billing:** AR, separate from revenue timing.
- **Reporting:** deferred revenue roll-forward, RPO disclosure.

Tip: Say "billing and revenue are separate" early. It's the key design idea.`,

'Explain the Order-to-Cash flow and where AR fits in.':
`**Why they ask:** a warm-up question for every finance or O2C role.

**Answer:**
"It starts with the customer set up with an account and bill-to and ship-to sites. Sales books an order in Order Management and the warehouse ships it. The shipment flows to AR through AutoInvoice and becomes an invoice. The customer pays, and we record the receipt manually, through lockbox, or from the bank statement, then apply it to the invoice. Anything unpaid goes to collections. Finally Create Accounting sends the entries to GL. AR owns the middle of that chain: invoicing, cash application and collections."

Accounting:
- Invoice: Dr Receivable, Cr Revenue, Cr Tax.
- Receipt: Dr Cash, Cr Receivable.

Tip: Give the two journal entries at the end. It shows you think like an accountant, not only a system user.`,

'What is AutoInvoice?':
`**Why they ask:** AutoInvoice is the main way invoices get into AR. Every AR interview touches it.

**Answer:**
"AutoInvoice is the program that imports billing lines from other systems and turns them into invoices, credit memos and debit memos. In Fusion the lines come from Order Management, Projects, or a file through FBDI; in EBS they go into RA_INTERFACE_LINES_ALL. The transaction source controls validation and defaults. Grouping rules decide which lines become one invoice, and line ordering rules sort them. AutoAccounting, together with SLA in Fusion, derives the revenue and receivable accounts. Lines that fail stay in the interface with an error, and you fix them and resubmit. On a busy project it's normal to process tens of thousands of lines a night, so the error handling is as important as the setup."

Tip: Cover source, grouping, accounting and errors. Those are the four follow-up questions they'll ask.`,

'What is the customer structure in Oracle (party, account, site)?':
`**Why they ask:** a basic question, but bad customer data causes most AR errors, so they want to see you understand the model.

**Answer:**
"Oracle uses the Trading Community Architecture. The party is the real company or person, say ACME Corp. The customer account is our business relationship with that party, with terms, a profile and credit settings, and one party can have several accounts, for example one for ACME's US business and one for Canada. Each account has sites, which are addresses, and each site has site uses, like bill-to and ship-to. The customer profile carries the credit limit, collector, statement and dunning settings. Because the party is shared, the same company can be both a customer and a supplier."

- **Party:** the real-world entity.
- **Account:** the relationship (terms, credit).
- **Site and site use:** the address and what it's for.
- **Profile:** credit, collector, dunning.

Tip: Give the one-party-two-accounts example. It shows you've designed customer data, not just entered it.`,

'How do you apply a receipt, and what happens with unapplied or on-account cash?':
`**Why they ask:** cash application is core AR work. They want to hear the different states of cash and why they matter.

**Answer:**
"I create the receipt against a receipt method and bank account, manually, from lockbox or from the bank statement, then apply it to one or more open invoices. If it covers only part, the invoice stays open for the rest. Any money I can't match yet is unapplied: we know the customer but not which invoices. On-account is a deliberate choice to leave the money on the customer's account, like a deposit or an overpayment we'll use later. Unidentified means we don't even know the customer yet. In Fusion, AutoMatch uses the remittance details to apply receipts automatically, so people only work the exceptions."

- **Unapplied:** customer known, invoices not yet.
- **On-account:** parked on purpose.
- **Unidentified:** customer unknown.

Tip: Explaining the three states cleanly is the whole answer. Add that you'd watch the unapplied balance every week.`,

'What is the difference between an adjustment and a credit memo?':
`**Why they ask:** people often mix these up. The right choice affects revenue, tax and what the customer sees.

**Answer:**
"A credit memo corrects the billing. It's a transaction document, usually sent to the customer, and it reverses revenue and tax, for example for a return or a pricing error. An adjustment changes the invoice balance without saying the billing was wrong, for small write-offs, bad debt or rounding. It uses a receivables activity for the GL account and is limited by the user's approval limit. So if we billed $1,000 but should have billed $900, that's a credit memo. If we billed correctly but the customer paid $998 and we won't chase $2, that's an adjustment."

Tip: The rule of thumb: billing was wrong → credit memo; the money won't be collected → adjustment. Say it in one line.`,

'What is the purpose of receivables activities and transaction types?':
`**Why they ask:** these two setups drive most AR accounting. They want to see you know which does what.

**Answer:**
"Transaction types classify the documents: invoice, credit memo, debit memo, chargeback, deposit. They control whether a transaction posts to GL, whether it shows in open receivables, the default receivable and revenue accounts, and which credit memo type is used when you credit it. Receivables activities are for postings that aren't invoices: adjustments, write-offs, finance charges, miscellaneous receipts, bank charges and refunds. Each one points to its own GL account. For example, a 'Small Balance Write-off' activity posts to a bad-debt expense account, and the user's approval limit controls how much they can write off."

Tip: Give one example of an activity and its account. It turns a definition into experience.`,

'How do collections and dunning work in Oracle?':
`**Why they ask:** they want to see you understand the collector's day, not just the setup screens.

**Answer:**
"In Fusion, Advanced Collections assigns each customer to a collector from the customer profile. The collector works a prioritized list in the Collections work area: they see aging, record promises to pay, log disputes and send correspondence. Scoring ranks customers by risk, and strategies decide the tasks, like a call at 10 days late for high-risk customers. Dunning sends reminder letters automatically based on aging and the dunning plan, getting firmer as the invoice gets older. Disputes create credit memo requests that route for approval. The KPIs I'd report are DSO, percent current, and collector effectiveness."

Tip: Name the KPIs. Hiring managers measure collections by numbers.`,

'What is a customer statement vs a dunning letter?':
`**Why they ask:** a basic AR question, often for junior roles.

**Answer:**
"A statement is a summary of everything open on a customer's account, plus recent payments, sent on a regular cycle, like monthly. It's informational. A dunning letter is a reminder about overdue items only, and it usually gets firmer the later the payment is, for example a friendly reminder at 15 days, a firmer letter at 45 days, and a final notice at 90. In Fusion, statements come from Receivables and dunning comes from Collections, and both can be printed or emailed."

Tip: Give the escalation example. It shows you understand why dunning exists.`,

'How do you design the cash application process to reduce unapplied cash?':
`**Why they ask:** a design question with a clear business outcome. They want a method and a result.

**Answer:**
"The biggest lever is remittance data, so I start there: lockbox files from the bank, bank statements in BAI2 or CAMT.053, and remittance emails, which can be captured with Intelligent Document Recognition. Then I set up AutoMatch and lockbox matching to look for invoice number, PO number, amount and customer reference, with tolerances for small differences. Application exception rules decide what happens to under- and over-payments within tolerance, like write off below $10 or put on account. Anything left goes to a work queue with a named owner and an ageing target. Where the business agrees, AutoCash rules apply receipts with no remittance to the oldest invoice first. I measure auto-application rate, unapplied and on-account balances, and days to apply. On one rollout we moved auto-applied receipts from about 45% to 80% by adding customer-reference matching and cleaning customer data."

Tip: Close with the bank reconciliation in Cash Management. It shows the process ends with the cash proven, not just applied.`,

'How would you design billing for a subscription or services business in Oracle?':
`**Why they ask:** they want to see you pick the right tool for the billing model, not force everything into AR.

**Answer:**
"I'd choose by how complex the billing is. For recurring billing with renewals, upgrades and usage charges, Subscription Management is the right tool. For services billed against projects, time and materials or milestones, Project Billing. If an outside billing system already does the rating, AR with AutoInvoice is enough. Whatever bills, Revenue Management handles ASC 606 allocation and over-time recognition. The design points I'd settle early are invoice frequency, proration for mid-cycle changes, upgrades and downgrades, and usage rating. On top sit collections and credit management, and an integration with CRM or CPQ so contracts flow in cleanly."

Tip: Say "I'd choose based on the billing model" up front. It answers the real question.`,

'What are the common causes of AR-to-GL reconciliation differences and how do you prevent them?':
`**Why they ask:** reconciliation is a control. They want causes and prevention, not just "I run a report".

**Answer:**
"The common causes are: transactions not yet accounted or not transferred and posted; manual journals posted straight to the receivable account in GL; transactions accounted in a different period than the aging date; misunderstanding the unapplied and on-account cash accounts; and revaluation entries that the aging doesn't show. To prevent them, I set the receivable accounts as third-party control accounts so nobody can post a manual journal to them, schedule Create Accounting daily, and make the Receivables to Ledger Reconciliation report a sign-off step on the close checklist. With those three in place, differences become rare and easy to explain."

Tip: The control-account setting is the key prevention step. Name it.`,

'How would you reduce DSO using Oracle?':
`**Why they ask:** a business-outcome question. They want levers, not features.

**Answer:**
"I'd look at the whole cycle, because DSO starts before collections. First, invoice fast and correctly: fix AutoInvoice errors and missing PO numbers that delay invoices. Second, deliver faster with e-invoicing or a customer portal. Third, collect smarter: strategies with prioritized worklists, automatic dunning and promise-to-pay tracking. Fourth, stop risky orders with credit management. Fifth, apply cash fast with AutoMatch and lockbox, because an unapplied payment still shows as overdue. Sixth, manage disputes with reason codes so we fix root causes. And I'd put DSO, aging buckets and collector productivity on a dashboard reviewed every week."

Tip: Start with "DSO starts at invoicing". Most candidates jump straight to collections.`,

'How would you handle unapplied cash that keeps growing?':
`**Why they ask:** a real problem many AR teams have. They want an investigation, then a fix.

**Answer:**
"I'd first analyze the balance by customer and by age to find the pattern. Usually a few causes explain most of it: missing remittance details, short payments, deductions nobody is working, or receipts posted to the wrong customer. Then I fix each cause. For missing remittance, improve capture with lockbox or email remittance processing. For matching, tune AutoMatch and the application exception rules. For deductions, set up a dispute process with sales so they get resolved. Finally I'd run a weekly review with the collectors, with a target for unapplied cash, so it doesn't creep back."

Tip: Start with "analyze first". It shows you solve the cause, not the symptom.`,

'How do you set up Lockbox processing?':
`**Why they ask:** lockbox is the main high-volume cash channel in the US. They want the steps.

**Answer:**
"I define the lockbox with the bank's transmission format, usually BAI2 or a custom format the bank provides, and map the file fields to Oracle fields. Then I set the matching rules: match on transaction number, PO number, sales order or consolidated bill number. AutoCash rules handle receipts where nothing matches. The process runs import, validate, then post QuickCash and apply. In Fusion that's one program, Process Receipts Through Lockbox. The KPI I'd track is the percentage of lockbox receipts applied automatically. Getting that from 60% to 85% usually takes better customer references, not more setup."

Tip: Name the format and the KPI. It shows you've worked with a bank file, not just the setup screen.`,

'How does Fusion Revenue Management support ASC 606 / IFRS 15?':
`**Why they ask:** revenue is a high-risk area. They want to know you understand the accounting as well as the module.

**Answer:**
"Revenue Management follows the five steps of ASC 606. Source documents, like sales orders, contracts and AR invoices, come in and are grouped into customer contracts, which is step one. The lines become performance obligations, step two. The transaction price, step three, is allocated across the obligations by relative standalone selling price, which finance sets by item or item class, step four. Revenue is then recognized when each obligation is satisfied, step five, either at a point in time, like shipment or acceptance, or over time, like ratably over a support period. The accounting gives contract assets, contract liabilities for deferred revenue, and revenue. It also handles contract changes and discounts."

Tip: Walk through the five steps and say which part of the module does each. That's the best answer they'll hear.`,

'How does credit management work in Fusion?':
`**Why they ask:** credit links AR to sales. They want the flow from limit to hold release.

**Answer:**
"Customers get credit profiles with a limit and a review cycle. When an order is booked in Order Management, a credit check compares exposure, which is open receivables plus uninvoiced orders, to the limit. If it's over, the order goes on credit hold. Analysts then work a credit review in a case folder, which pulls in aging, payment history and external scores like D&B. They recommend releasing the hold or changing the limit, and the change routes for approval. Once approved, the hold is released and the order moves on."

Tip: Describe the path order → check → hold → review → release. It's what they're listening for.`,

'How do you set up AutoMatch for receipts?':
`**Why they ask:** AutoMatch is how Fusion automates cash application. They want to see you can tune it.

**Answer:**
"I create AutoMatch rule sets that tell Fusion how to match receipt remittance references to open transactions. The key settings are the thresholds: the customer recommendation threshold, the combined weighted threshold, and how many days of closed invoices to consider. Fusion scores each possible match using exact and partial string matching and weights them. Then application exception rules decide what to do with small differences, like writing off under $5 or putting overpayments on account. After go-live I watch the results for a few weeks and adjust the thresholds. Too strict and nothing applies; too loose and receipts go to the wrong invoices."

Tip: Explain the trade-off of strict vs loose thresholds. It shows you've tuned it, not only set it up.`,

'How does an on-account credit memo differ from a regular credit memo?':
`**Why they ask:** a basic question to check you know where credits sit.

**Answer:**
"A regular credit memo is applied to a specific invoice and reduces that invoice's balance, for example crediting one damaged line. An on-account credit memo isn't tied to any invoice. It sits on the customer's account as a credit, like a goodwill credit or a rebate, and can be applied later to any invoice or refunded. Both reduce the customer's balance and create accounting through SLA. The thing to watch is that on-account credits don't sit for months; I'd include them in the weekly unapplied review."

Tip: Add the point about reviewing old on-account credits. It shows control thinking.`,

};
