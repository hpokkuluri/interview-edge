module.exports = {
top: [1, 3, 4, 5, 8, 10, 12],
fu: {
1: [`Why might one inventory org need more than one cost book?`, `For different reporting needs, like a primary book for US GAAP and a secondary book for IFRS or management costing with a different cost method.`],
2: [`How would you report freight separately from material in item cost?`, `Set up a freight cost element and assign landed cost charges to it, so valuation and margin reports show freight separately.`],
3: [`What's the first thing you check when transactions aren't costed?`, `Whether the transfer to costing and the cost processor ran without errors, then the error list for missing costs, like no standard cost published for the item.`],
4: [`What happens to on-hand inventory when you publish a new standard?`, `Fusion revalues on-hand quantity to the new standard and creates a revaluation adjustment to inventory and the offset account in the period of publication.`],
5: [`What happens if a return comes back at a different cost?`, `Under perpetual average, returns are usually at the current average cost, so the average doesn't jump. If receipt cost is used, it can shift the average.`],
6: [`Which variance tells you the buyer negotiated well?`, `Purchase price variance under standard costing: favorable PPV means the PO price was below standard.`],
7: [`What if the actual freight bill differs from the estimate?`, `The actual landed cost replaces the estimate, and the difference is adjusted into inventory value or COGS if the items were already consumed.`],
8: [`Where does the difference between PO price and invoice price go?`, `Invoice price variance, posted when the AP invoice is accounted, if the invoice price differs from the PO price within tolerance.`],
9: [`How does Fusion know when to move cost from deferred to COGS?`, `It matches the revenue recognition percentage from AR or Revenue Management, so if 40% of revenue is recognized, 40% of the cost moves to COGS.`],
10: [`What blocks a cost period from closing?`, `Uncosted transactions, pending transfers or open errors. I clear the error queue before close rather than forcing the period shut.`],
11: [`Which report do auditors usually ask for?`, `Perpetual inventory valuation at period end, reconciled to the GL inventory balance.`],
12: [`What manual GL entries most often cause this mismatch?`, `Reclass journals or accruals posted straight to inventory accounts in GL, which never appear in cost valuation. I restrict manual journals to inventory accounts for that reason.`],
}
};
