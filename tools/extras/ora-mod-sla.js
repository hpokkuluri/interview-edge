module.exports = {
top: [1, 2, 3, 6, 8, 9, 14, 16],
fu: {
1: [`Why copy the seeded method instead of editing it?`, `Seeded methods can't be edited and are updated by Oracle. A copy lets you change rules without losing upgrades to the rest.`],
2: [`When would you use final without posting?`, `When GL posting is controlled by GL users, so entries go to GL unposted for review.`],
3: [`What happens if no condition in an ADR matches?`, `The rule has no value, so accounting errors out. I always include a default line without conditions at the end.`],
4: [`Why test a custom source in draft first?`, `To confirm the value flows correctly before it affects final accounting that can't be edited.`],
5: [`Where do accounting classes help in reconciliation?`, `Reconciliation reports filter by class, like Liability for AP, so you compare subledger and GL for the right lines.`],
6: [`Why not just post a GL journal to fix it?`, `A GL journal fixes the ledger but not the subledger, so the subledger and GL stay out of sync and reconciliation breaks.`],
7: [`Give an example of using supporting references.`, `Tracking balances by supplier on an accrual account, so you can see which supplier's receipt accrual is still open.`],
8: [`What's the most common SLA error you see?`, `Invalid account combinations from cross-validation rules or inactive segment values. The fix is the value or the rule, not the transaction.`],
9: [`What's tax determination used for?`, `Rules decide which regime, tax, status and rate apply based on parties, place of supply and product, so users don't pick tax manually.`],
10: [`How is non-recoverable VAT accounted?`, `It's added to the expense or asset cost of the line instead of going to input VAT.`],
11: [`What do you check before filing a VAT return?`, `That all transactions are accounted and in the tax reporting ledger for the period, and that the return reconciles to GL tax accounts.`],
12: [`When is withholding calculated at payment instead of invoice?`, `When local rules require withholding when payment is made, often the case in several Latin American and Asian countries.`],
13: [`How does Oracle support these mandates?`, `Through its e-invoicing features for some countries, or partner solutions connected through OIC, depending on the country and release.`],
14: [`What's the hardest part of an Accounting Hub implementation?`, `Defining the event model and sources with the source system team so every transaction carries what the rules need.`],
15: [`When would summarized journals be fine?`, `When the source has simple, stable accounting and nobody needs drill-down to transactions.`],
16: [`How did you prove the change didn't affect other suppliers?`, `I ran draft accounting for a mix of intercompany and third-party invoices and compared accounts before and after.`],
}
};
