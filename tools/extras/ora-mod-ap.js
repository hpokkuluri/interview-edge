module.exports = {
top: [1, 3, 5, 6, 7, 11, 12],
fu: {
1: [`Which setup do you get wrong most often in new implementations?`, `Payables options at the business unit, especially the liability and prepayment defaults and invoice tolerances. If tolerances are too tight, every small price difference becomes a hold and AP drowns in exceptions.`],
2: [`What's the risk of using a skeleton distribution set for everything?`, `Users still key the amounts, so errors and inconsistent coding creep in. I use full sets for recurring fixed splits and skeleton sets only where the amounts genuinely vary.`],
3: [`What happens if a receipt-match PO is invoiced before goods are received?`, `The invoice goes on a quantity received hold. Once the receiver enters the receipt, rerunning validation releases the hold automatically, so the fix belongs to receiving, not AP.`],
4: [`When would you use a quick credit instead of a regular credit memo?`, `When the supplier credits a whole invoice, like a duplicate bill. A quick credit reverses all lines of the original invoice in one step, without matching line by line.`],
5: [`How do you measure whether hold routing is working?`, `Track hold aging by hold type and owner. If price holds sit with buyers more than a few days, I escalate through the workflow and look for the root cause, like stale PO prices.`],
6: [`Where do you set which bank account a payment run uses?`, `In the payment process profile and the payment process request, where disbursement bank account and profile are chosen, often defaulted by business unit and currency rules.`],
7: [`What do you do if an approver rejects one payment in a large run?`, `I remove or dismiss that payment from the run, which returns the invoice to unpaid, and let the rest of the run continue. The rejected invoice is investigated separately.`],
8: [`How do you pay a one-time non-supplier, like a refund to a member of the public?`, `I'd create a payment request through Payables from the originating module or a one-time supplier setup, so the payee and bank details are controlled and the payment goes through normal approvals.`],
9: [`What controls stop personal spend on corporate cards?`, `Card policies flag personal transactions, employees must mark them as personal, and the company recovers them by payroll deduction or employee payment. Audits sample high-risk categories.`],
10: [`How big should the random audit sample be?`, `Usually a small percentage of reports, often 5 to 10%, enough that employees know any report might be checked, while auditors focus most time on rule-based high-risk reports.`],
11: [`Why is sweeping not a fix for every close blocker?`, `Sweeping only moves accounting to the next period; it doesn't resolve the hold or error. If a large invoice belongs in this period, I'd fix it and account it now so expenses aren't understated.`],
12: [`What quick win usually gives the biggest touchless improvement?`, `Fixing price and quantity tolerances and enforcing receipt entry on time. Most holds in typical AP shops are tolerance or missing receipts, not complex issues.`],
}
};
