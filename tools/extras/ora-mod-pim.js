module.exports = {
top: [1, 2, 4, 5, 7, 12],
fu: {
1: [`Why set most attributes at the master org?`, `So they're consistent everywhere; only attributes that truly differ by site, like planning, are controlled at the item org.`],
2: [`When would you add an extensible attribute instead of using a descriptive flexfield?`, `When it's product data the business manages and searches by, like voltage or color, with grouping and security by item class.`],
3: [`What's the risk of manual item numbering?`, `Inconsistent formats and duplicates. Sequences or rules give predictable numbers and reduce errors.`],
4: [`How do you stop NIRs from stalling at definition?`, `Assign by role or group rather than named people, and set due dates with reminders so overdue steps get escalated.`],
5: [`When would you use a change order instead of editing the item directly?`, `When the change needs approval or an audit trail, like a structure change or switching an approved manufacturer.`],
6: [`What's the difference between engineering and primary structures?`, `Engineering structures are for design, before release. The primary structure is what manufacturing uses to build.`],
7: [`What if a duplicate gets through anyway?`, `Inactivate one item, move on-hand and open documents to the surviving item, and add a cross-reference so old numbers still find it.`],
8: [`Give an example of an assignment rule.`, `If the item class is Fasteners, set the default planning method to Min-Max, so planners don't have to set it per item.`],
9: [`How do downstream systems learn about new items?`, `Business events trigger an OIC flow that sends the item to the WMS or e-commerce site once it reaches an approved status.`],
10: [`How do you let engineers edit design attributes but not costing?`, `Grant their role edit on the engineering attribute group only, and view access on the rest.`],
11: [`Would you turn on AI-generated descriptions right away?`, `I'd pilot it on one item class and review results first, since descriptions drive search and must follow the naming standard.`],
12: [`How would you measure success after go-live?`, `Cycle time from request to active item, number of rejected requests, and duplicate or incomplete items found later.`],
}
};
