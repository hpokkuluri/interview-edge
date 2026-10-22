module.exports = {
top: [1, 2, 3, 5],
fu: {
1: [`Which would a distribution company use most?`, `Replenishment Planning for stocking locations, fed by Demand Management forecasts, often without full Supply Planning.`],
2: [`How do planners avoid drowning in exceptions?`, `Filter by priority and value, and tune parameters like safety stock so noise exceptions disappear.`],
3: [`What happens if collections fail before a plan run?`, `The plan runs on stale data, so recommendations are wrong. I check collection status before every scheduled plan run.`],
4: [`What if an item has two work definitions?`, `The one with the highest priority is used by default, and planning or the user can pick an alternate.`],
5: [`What's the risk of backflushing?`, `If the BOM is inaccurate, on-hand gets wrong silently. Backflush only works with accurate BOMs and scrap factors.`],
6: [`How do quality issues connect to suppliers?`, `An issue on a received lot can be linked to the supplier, triggering a corrective action request and affecting their scorecard.`],
7: [`What planning data problem have you fixed?`, `Wrong lead times on hundreds of items, causing late POs. Updating them from actual supplier performance cut late replenishment exceptions significantly.`],
}
};
