// Staff / Senior Accountant (GL & Close). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-acct'] = (QB['fa-acct'] || []).concat([
['Fundamentals', 'Explain debits and credits and the accounting equation.',
`- **Assets = Liabilities + Equity.**
- **Debits** increase assets and expenses; decrease liabilities, equity and revenue.
- **Credits** increase liabilities, equity and revenue; decrease assets and expenses.
- Every journal entry balances (total debits = total credits).`, 'B', 'E'],

['Fundamentals', 'What is the difference between cash and accrual accounting?',
`- **Cash basis**: record revenue/expense when cash moves.
- **Accrual basis** (required under US GAAP/IFRS for most companies): record revenue when earned and expenses when incurred, regardless of cash timing.
- Accruals, deferrals and prepaid entries bridge the two.`, 'B', 'E'],

['Fundamentals', 'How do the three financial statements link together?',
`- **Net income** from the income statement flows into retained earnings (balance sheet) and is the start of operating cash flow.
- Balance sheet changes (receivables, payables, inventory, fixed assets, debt) drive the **cash flow statement**.
- Ending cash on the cash flow statement = cash on the balance sheet.`, 'B', 'E'],

['Journals', 'Give examples of an accrual, a prepaid and a deferred revenue entry.',
`- **Accrued expense**: Dr Utilities expense / Cr Accrued liabilities (service used, invoice not yet received).
- **Prepaid**: Dr Prepaid insurance / Cr Cash; then monthly Dr Insurance expense / Cr Prepaid.
- **Deferred revenue**: Dr Cash / Cr Deferred revenue on receipt; Dr Deferred revenue / Cr Revenue as earned.`, 'B', 'E'],

['Close', 'Walk me through your month-end close process.',
`- Cut-off of subledgers (AP, AR, inventory, fixed assets, payroll).
- Post **accruals, prepaids, depreciation, allocations**, intercompany.
- **Reconcile** balance sheet accounts; investigate and clear items.
- **Flux/variance analysis** of P&L and balance sheet.
- Review and approve; close the period; report.
- Track on a **close checklist** with owners and due dates (e.g. day 1–5).`, 'B', 'E'],

['Reconciliations', 'How do you perform an account reconciliation?',
`- Compare the GL balance to supporting evidence (bank statement, subledger, schedule, third-party confirmation).
- Identify and explain differences (timing vs errors).
- Book correcting entries; document; preparer and reviewer sign-off.
- Aged reconciling items get escalated.`, 'B', 'E'],

['Reconciliations', 'Walk me through a bank reconciliation.',
`- Start with the bank statement balance; adjust for **deposits in transit** and **outstanding checks** → adjusted bank balance.
- Start with the book balance; adjust for **bank fees, interest, NSF checks, errors** → adjusted book balance.
- They must match; book entries for book-side items.`, 'B', 'E'],

['Fixed Assets', 'How do you account for fixed assets?',
`- **Capitalize** cost (purchase price + costs to get it ready for use) above the capitalization threshold.
- **Depreciate** over useful life (straight-line most common).
- Record disposals (remove cost and accumulated depreciation, recognize gain/loss).
- Test for **impairment** when indicators exist.`, 'B', 'E'],

['Revenue', 'Summarize ASC 606 / IFRS 15 revenue recognition.',
`Five steps:
1. Identify the **contract**.
2. Identify **performance obligations**.
3. Determine the **transaction price** (including variable consideration).
4. **Allocate** the price to obligations (standalone selling prices).
5. Recognize revenue **when (or as) obligations are satisfied** — point in time or over time.`, 'D', 'M'],

['Leases', 'How are leases accounted for under ASC 842?',
`- Lessees record a **right-of-use asset** and **lease liability** for most leases over 12 months.
- **Operating leases**: single straight-line lease cost in the P&L.
- **Finance leases**: amortization + interest expense (front-loaded).
- IFRS 16 has a single model (all like finance leases) for lessees.`, 'D', 'M'],

['Intercompany', 'How do you handle intercompany transactions at close?',
`- Record both sides consistently (receivable/payable, revenue/expense).
- Reconcile intercompany balances between entities; resolve differences before consolidation.
- **Eliminate** intercompany balances and profit on consolidation.
- Settle regularly; consider FX and transfer pricing.`, 'D', 'M'],

['Analysis', 'How do you perform a flux analysis?',
`- Compare current period to prior period/budget by account.
- Investigate variances above thresholds (e.g. >10% and >$X).
- Explain drivers (volume, price, one-offs, timing, errors).
- Fix errors; document explanations for reviewers.`, 'B', 'M'],

['Controls', 'What controls are important in the GL and close?',
`- Journal entry **review and approval** (segregation of preparer and approver).
- **Account reconciliations** with review.
- Restricted access to post and to open/close periods.
- Manual JE thresholds; recurring JE templates; close checklist sign-offs.`, 'D', 'M'],

['Systems', 'Which ERP and tools have you used for accounting?',
`- ERPs: **Oracle Fusion/EBS, SAP, NetSuite, Dynamics, QuickBooks**.
- Close/recon tools: **BlackLine, FloQast, Trintech**.
- Excel (pivot tables, XLOOKUP, SUMIFS), reporting tools.
Mention what you did in each (journals, recs, reports).`, 'B', 'E'],

['Excel', 'Which Excel skills do you use every day?',
`- **XLOOKUP/VLOOKUP, INDEX-MATCH, SUMIFS, IF**, pivot tables, conditional formatting.
- Data cleanup (text functions, Power Query).
- Building reconciliation and accrual schedules with clear tie-outs.`, 'B', 'E'],

['Process Improvement', 'How have you shortened the close?',
`- Standardized checklists and templates; recurring and automated journals.
- Reconciliation tools (auto-matching).
- Moving accruals and analysis earlier (pre-close).
- Fixing root causes of late adjustments.
- Example: close from 10 days to 6.`, 'D', 'S'],

['Behavioral', 'Tell me about an error you found in the financials.',
`- How you spotted it (reconciliation, flux).
- Root cause; correction; communication to your manager.
- Control or process change to prevent it recurring.`, 'B', 'E'],

['Behavioral', 'How do you handle tight close deadlines?',
`- Prioritize by impact and dependencies; communicate early on risks.
- Prepare in advance (pre-close tasks).
- Ask for help/trade tasks rather than missing deadlines silently.`, 'B', 'E'],

['Leadership', 'As a senior accountant, how do you review a junior\'s work?',
`- Check support ties to the GL; reasonableness of balances; correct accounts and periods.
- Give specific, constructive feedback; explain the why.
- Document review evidence (for audit).`, 'B', 'S']
]);
