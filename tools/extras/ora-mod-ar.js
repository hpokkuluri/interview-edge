module.exports = {
top: [1, 2, 3, 6, 8, 11, 13, 14],
fu: {
1: [`Which AR setup decides whether invoices create accounting correctly?`, `AutoAccounting rules or SLA mappings, plus the transaction types with their receivable and revenue accounts. If those aren't right, every invoice lands in the wrong account.`],
2: [`How would you combine all of one customer's daily orders into one invoice?`, `Add sales order number to the grouping rule only as optional, not mandatory, and keep bill-to, currency and type the same. Lines with matching mandatory attributes then group into one invoice per customer per run.`],
3: [`How do you stop the same AutoInvoice error from recurring?`, `Fix it at the source: correct customer site data or mapping in the upstream system, add validation before lines reach the interface, and report errors daily so they don't pile up at month end.`],
4: [`Why separate remittance and clearance steps for a receipt class?`, `It lets you account cash in stages: receipt confirmed, remitted to the bank, then cleared. Companies that want cash only booked when the bank confirms use clearance; simple cheque processes can skip it.`],
5: [`What happens when a direct debit is rejected by the bank?`, `The receipt is reversed with a reason like insufficient funds, the invoice reopens, and collections follows up. With SEPA, the mandate rules also govern how and when you can collect again.`],
6: [`What if a customer short pays by $5,000 for a disputed price?`, `Apply the receipt and leave the balance open, then create a dispute or credit memo request for the $5,000. That's far beyond write-off tolerance, so it needs investigation and approval.`],
7: [`What's the difference between a standard reversal and a debit memo reversal?`, `A standard reversal reopens the original applications. A debit memo reversal creates a new debit memo for the amount, used when the receipt was applied to closed invoices or across periods.`],
8: [`How do you prioritize a collector's daily work?`, `By amount and risk: strategies create tasks, and the worklist is sorted by overdue value and customer risk score, so the biggest exposures get attention first.`],
9: [`Who approves a credit memo request?`, `It routes through approval rules, often by amount and reason: the collector or manager for small amounts and finance leadership above thresholds. Once approved, the credit memo is created automatically.`],
10: [`What happens to an order that fails credit check?`, `It goes on credit hold, and the credit team reviews it: release it, raise the limit, or ask for a prepayment. Order management can recheck automatically when payments arrive.`],
11: [`Give an example where you'd need Revenue Management instead of scheduling rules.`, `A bundle of software, implementation and support sold together, where revenue must be allocated across the parts by standalone selling price. Scheduling rules can't reallocate between invoice lines.`],
12: [`How is a customer acceptance contingency released?`, `When acceptance is recorded, either by the user or an automatic expiration date, the contingency is removed and the deferred revenue is recognized.`],
13: [`What do you do if the Receivables to Ledger Reconciliation shows a difference?`, `I check unposted subledger accounting, transactions accounted but not transferred, and manual journals to AR accounts in GL. The report drills down to show which category holds the difference.`],
14: [`How do you prove the AR conversion is complete?`, `Reconcile total open AR by customer and aging bucket to the legacy aging report, and tie the total to the GL control account at cutover. Any difference is investigated before go-live sign-off.`],
15: [`What number would you lead with in an AR interview?`, `Something like auto-application rate or DSO change, for example lifting lockbox auto-application from 60% to 90%, because it shows real business impact.`],
}
};
