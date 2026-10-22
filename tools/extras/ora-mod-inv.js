module.exports = {
top: [1, 2, 4, 6, 7],
fu: {
1: [`Which locator control would you choose for a busy warehouse?`, `Prespecified, so stock only goes to valid, defined locations. Dynamic entry is fast but tends to create messy, misspelled locators.`],
2: [`What happens if a replenishment move order isn't allocated?`, `There may not be enough stock in the source, or picking rules exclude it. I check on-hand and picking rules before releasing again.`],
3: [`How do reasons help with shrinkage?`, `Adjustments coded as damage, theft or count error show which causes drive losses, so the warehouse can fix the right problem.`],
4: [`Why freeze transactions during a physical count?`, `So movement during counting doesn't distort the comparison between snapshot and count. If you can't freeze, you need careful cutoff handling.`],
5: [`What happens to rejected items after inspection?`, `They're returned to the supplier or moved to a quarantine subinventory, and the supplier is charged back through a debit memo or credit.`],
6: [`What if ship confirm fails for a delivery?`, `Usually a reservation or on-hand issue, like lots not available, or a missing ship method. I check the exception message and on-hand before retrying.`],
7: [`Who owns stock in transit under FOB shipping point?`, `The receiving org, from the moment it ships, so it's valued in their in-transit inventory.`],
8: [`What's a good inventory accuracy metric to quote?`, `Cycle count accuracy, for example raising it from 92% to 98% by count tolerance tuning and root-cause analysis.`],
}
};
