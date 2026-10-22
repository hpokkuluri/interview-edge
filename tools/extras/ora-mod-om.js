module.exports = {
top: [1, 2, 3, 6, 7],
fu: {
1: [`What happens when no orchestration assignment rule matches a line?`, `The line isn't assigned to a process and stays stuck. I always have a default process as a catch-all.`],
2: [`What should happen when a line goes to high jeopardy?`, `Order managers get alerted and act: expedite, change source, or notify the customer of a new date.`],
3: [`Why does splitting fulfillment lines matter for billing?`, `Each fulfillment line can ship and bill separately, so AR gets invoice lines per shipment rather than per order line.`],
4: [`How do you test a new pricing strategy?`, `Create test orders for each segment and confirm the price list and discounts that apply, using the pricing details view.`],
5: [`How is credit timed on a return?`, `Usually after receipt and inspection, so we don't credit for goods we never receive. Some trusted customers get credit at authorization.`],
6: [`How do you avoid duplicate orders from retries?`, `Use the source order number and source system as a unique key, so a retried call is rejected or updates the existing order.`],
7: [`Give an example of a stuck-order story.`, `Orders stuck after a failed fulfillment connector call, which I traced to an expired credential; fixing it and resubmitting cleared hundreds of lines.`],
}
};
