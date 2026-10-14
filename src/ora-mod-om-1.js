// Oracle Modules — Order Management & Pricing. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-om'] = (QB['ora-mod-om'] || []).concat([
['Setup', 'What are the main Order Management setups?',
`- **Order types/transaction types** and **document numbering**.
- **Orchestration processes** and **process assignment rules**.
- **Fulfillment** connectors (shipping, receiving, manufacturing, external).
- **Hold codes**, **processing constraints**, **business rules** (e.g. line defaults).
- **Pricing** setups (price lists, discount lists, strategies, segments).
- **Customer** and **item** prerequisites; **GOP** sourcing.`, 'B'],

['Orchestration', 'What is jeopardy in order orchestration?',
`- Each orchestration step has planned durations; **jeopardy** compares expected vs planned completion and flags lines as **low/medium/high** risk of missing the promised date.
- Order managers act on high-jeopardy lines (expedite, reschedule).`, 'D'],

['Orchestration', 'What are fulfillment lines?',
`- The unit orchestration works on — a sales order line can split into multiple **fulfillment lines** (e.g. partial shipments, different warehouses, configured components).
- Each has its own status, schedule and orchestration process instance.`, 'D'],

['Pricing', 'What are pricing segments and strategy assignments?',
`- **Pricing segment**: groups customers/orders for pricing (e.g. "Gold distributors").
- **Strategy assignment** rules assign a **pricing strategy** (price lists + discounts) to a segment or context (customer, BU, channel).
- Pricing algorithm uses the strategy to compute prices on orders.`, 'D'],

['Returns', 'How do you set up returns in Fusion OM?',
`- **Return orders** (RMA) referencing original orders.
- **Return reasons** and policies (e.g. credit only, replacement).
- Orchestration for returns: receive → inspect → credit.
- AR credit memo via billing; inventory receipt into return subinventory.`, 'B'],

['Integration', 'How do orders flow from a third-party e-commerce site into Fusion?',
`- **Sales order REST API** or **order import (FBDI/web services)** via OIC.
- Map customers, items, prices (frozen or re-priced), ship methods.
- Status updates back to e-commerce via business events/REST.
- Error handling and monitoring for failed imports.`, 'D'],

['Interview', 'What would you emphasize as an OM/O2C contractor?',
`- Orchestration design and change management.
- GOP and sourcing.
- Pricing setup experience.
- Integration with Shipping, AR and Revenue.
- Troubleshooting stuck orders (with a real story).`, 'B']
]);
