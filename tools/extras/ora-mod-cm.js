module.exports = {
top: [1, 2, 4, 5, 8, 9, 15],
fu: {
1: [`What breaks if a bank account isn't granted to the right business units?`, `AP or AR in those business units can't use it, so payment process profiles or receipt methods fail to find it. I check account uses and business unit access whenever a payment run can't pick a bank.`],
2: [`What do you do when the statement file arrives but doesn't load?`, `Check the import report for format or mapping errors, like an unmapped transaction code or a bank account number mismatch. I fix the mapping and reload; I never key the statement by hand except as a last resort.`],
3: [`Give an example of a parse rule you've built.`, `Extracting a customer reference after the text REF in the ACH addenda, so incoming receipts match to AR receipts by that reference instead of amount alone.`],
4: [`Why order rule sets from strictest to loosest?`, `So exact matches by reference and amount happen first, and looser matches like amount and date only apply to what's left. That reduces false matches.`],
5: [`How do you handle a bank fee deducted from a wire?`, `Use a tolerance rule that allows the difference and creates an external transaction for the fee, or a transaction creation rule, so the payment reconciles and the fee is booked to bank charges.`],
6: [`What if the lockbox deposit total doesn't equal the receipts?`, `Find whether a receipt is missing, duplicated or in a different batch, using the lockbox transmission report. Reconcile only once the batch total matches; never force it.`],
7: [`What accounting does a transaction creation rule create?`, `An external cash transaction, accounted through SLA, for example debit bank charges expense and credit cash for a monthly fee line.`],
8: [`Why do some companies skip the cash clearing step?`, `Smaller companies that don't need to know uncleared items in the GL book payments straight to cash. Using clearing gives a more accurate cash balance, because cash only drops when the bank confirms.`],
9: [`How accurate does cash positioning need to be?`, `Treasury usually aims to be within a small percentage of actual day-end balances. If forecasts keep missing, I look at which source, like expected AR receipts, is unreliable and adjust it.`],
10: [`How do you account a transfer between bank accounts in different currencies?`, `Each side is recorded in its own currency at the actual rate, and any difference between expected and actual rates goes to realized gain or loss.`],
11: [`What happens when the bank rejects one payment in a file?`, `The acknowledgment updates that payment as rejected, and AP voids it or reissues after fixing the cause, often wrong bank details. The rest of the file stays paid.`],
12: [`What does payee positive pay add over standard positive pay?`, `It also checks the payee name, so a stolen check with an altered name fails even if number and amount match.`],
13: [`How do you reconcile the first statement after go-live?`, `Match it against the converted open items and new Fusion transactions. If conversion was right, opening uncleared items clear naturally in the first weeks.`],
14: [`What integration is needed between Fusion and a TMS?`, `Bank statements and positions to the TMS, forecasts from AP and AR, and treasury deals and settlements back to Fusion GL, usually through journals or OIC.`],
15: [`Your auto-reconciliation rate is 70%. What do you look at first?`, `The unmatched lines by type. Usually a few patterns, like fees, truncated references or batch deposits, cause most misses, and a new parse or matching rule fixes them.`],
}
};
