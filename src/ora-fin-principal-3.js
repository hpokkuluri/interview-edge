// Part 3: cutover, hypercare, security, quarterly updates, expenses, AI and a behavioral question.
QB['ora-fin-principal'] = (QB['ora-fin-principal'] || []).concat([
['Cutover', 'How do you plan cutover for a Fusion Financials go-live?', `**Why they ask:** cutover is where Finance programs succeed or fail.

**Answer:**
"I build an hour-by-hour cutover plan with owners and checkpoints: legacy freeze dates for AP, AR and GL; final conversions with reconciliation sign-off; opening balances; setup validation; integrations switched on; and a go/no-go meeting with clear criteria. I rehearse it in a dress rehearsal and time each step. I also plan the first close and first payment run in the new system with extra support."

Tip: Mention the go/no-go criteria.`, 'D', 'S', null, {t:1, f:['What go/no-go criteria do you use?', 'UAT signed off, no open critical defects, conversions reconciled, users trained, support ready, and the bank and integrations tested.']}],
['Hypercare', 'What does a good hypercare period look like?', `**Why they ask:** shows you think beyond go-live.

**Answer:**
"Usually four to eight weeks, covering at least the first month-end close. Daily triage calls, a ticket process with severities, super users as first line, and a dashboard of tickets, payments and close status. I plan handover to the support team with documentation and knowledge transfer, and exit criteria for ending hypercare."

Tip: Tie the end of hypercare to a clean close.`, 'B', 'S', null, {f:['What are typical first-month issues?', 'Security roles missing access, approval routing, payment file rejects and SLA accounting surprises.']}],
['Security', 'How do you design Finance security roles in Fusion?', `**Why they ask:** security affects controls and go-live.

**Answer:**
"I start from Oracle's job roles, then copy and adjust only where needed, such as removing duties to fix SOD conflicts. Data access is set by ledger, business unit and data access sets. I build a role-to-user matrix with the business, check it for SOD conflicts, and test with real user IDs in UAT, not admin accounts."

Tip: Mention testing with real user roles.`, 'D', 'S', null, {f:['Why not just use admin roles in UAT?', 'Because they hide missing access, which then fails on day one of go-live.']}],
['Quarterly Updates', 'How do you manage Oracle Cloud quarterly updates for a Finance client?', `**Why they ask:** Cloud is never finished — every principal must handle updates.

**Answer:**
"I review the readiness documents each quarter for Finance changes, decide which features to adopt, and test in the test environment two weeks before production with a regression pack. I communicate changes to users and keep a feature roadmap so the client gets value from each release."

Tip: Mention automated regression if you've used it.`, 'B', 'S', null, {f:['What features have you adopted from an update?', 'Give a real example, such as Redwood pages or an AI feature in payables, and the benefit it gave.']}],
['Expenses', 'How do you set up Fusion Expenses with Payables?', `**Why they ask:** often part of a Finance scope.

**Answer:**
"I set up expense templates and types, policies with limits, corporate card integration, and approval rules. Approved expense reports go to Payables as invoices for payment, often by direct deposit. I make sure accounting uses the right cost center from the employee, and that audit rules flag reports for review."

Tip: Mention policies and audit selection.`, 'B', 'S', null, {f:['How do expense reports become payments?', 'The Process Expense Reimbursements and Cash Advances job creates invoices in Payables, which are paid in a payment run.']}],
['AI', 'How would you bring Oracle AI features into a Finance implementation?', `**Why they ask:** clients ask about AI, and principals must have a view.

**Answer:**
"I start with business problems, then match features: intelligent document recognition for invoices, AI agents for things like payables inquiries or close tasks, and predictive features for cash forecasting. I keep humans approving key steps, check data quality and controls, and measure results. I'd pilot one use case, prove value, then scale."

Tip: Name one AI feature you've seen or used.`, 'D', 'S', null, {t:1, f:['What risks do you watch with AI in Finance?', 'Accuracy, controls and audit trail — every AI action must be reviewable and traceable for SOX.']}],
['Behavioral', 'Tell me about a time you had to deliver difficult news to a client executive.', `**Why they ask:** principals must be trusted messengers.

**Answer (STAR):**
"Situation: a key integration vendor was going to miss the date for a bank interface. Task: tell the CFO without losing trust. Action: I met them early, explained the cause, the impact on go-live and three options with cost and risk, and recommended a manual interim process. Result: they approved the workaround, we went live on time, and the interface followed two weeks later."

Tip: Use your own story; show early communication and options.`, 'B', 'S', null, {f:['What would you do differently next time?', 'Raise vendor dependencies as risks earlier and put clearer milestones in the vendor contract.']}]
]);
