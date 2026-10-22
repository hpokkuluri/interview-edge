module.exports = {
top: [2, 3, 5, 6, 9],
fu: {
1: [`Why create a separate document style for services?`, `It hides goods-only fields and enables features like fixed-price service lines, making service POs easier for buyers.`],
2: [`What breaks if categories are used inconsistently?`, `Buyer assignment and approvals route wrongly, and spend reports can't be trusted.`],
3: [`What if the requester has no default expense account?`, `The requisition can't be submitted without a manual account. I fix the HCM assignment rather than letting users key accounts.`],
4: [`Which destination type would you use for maintenance spares?`, `Inventory if they're stocked and tracked, expense if they're used immediately and not valued.`],
5: [`How do you get requisitions to convert to POs automatically?`, `Use a blanket agreement with the item and price, plus automatic sourcing, so approved requisitions create POs without buyer touch.`],
6: [`How do you prevent this from happening again?`, `Use approval groups or positions instead of named people, and keep the HCM supervisor hierarchy clean.`],
7: [`Why route bank account changes for approval?`, `Bank changes are a common fraud route, so a second person should verify them, often with a callback.`],
8: [`What if the highest-scoring supplier isn't the cheapest?`, `That's the point of weighted scoring; I document the rationale for the award so it can be defended in audit.`],
9: [`How do you deal with non-PO spend?`, `Classify it with AI spend classification, then push recurring non-PO spend onto agreements or catalogs.`],
10: [`What metric would you quote?`, `Touchless PO rate or percentage of spend under agreements, for example from 40% to 70%.`],
}
};
