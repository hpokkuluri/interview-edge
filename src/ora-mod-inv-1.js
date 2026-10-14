// Oracle Modules — Inventory, Receiving & Logistics. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-inv'] = (QB['ora-mod-inv'] || []).concat([
['Setup', 'What is the difference between locator control options?',
`- **No locator control**, **prespecified** (locators must exist), **dynamic entry** (created on the fly), **item level** (follow item attribute).
- Set at org, subinventory or item level (most restrictive wins depending on settings).
- Prespecified is common for controlled warehouses.`, 'D'],

['Transactions', 'What is a move order and when is it used?',
`- A **request to move material** within an org: replenishment, material issue requests, pick wave (sales order picking), work order component picking.
- Approval possible; allocation to source locators; transaction on completion.`, 'D'],

['Transactions', 'What are transaction reasons and why use them?',
`- Codes explaining **why** a transaction happened (damage, count correction, sample, scrap).
- Used for reporting, approvals, and root-cause analysis of adjustments.`, 'B'],

['Counts', 'What is a physical inventory and its key steps in Fusion?',
`- **Define** physical inventory (subinventories, freeze options).
- **Take snapshot** of on-hand.
- **Generate tags**, **count**, enter tag counts.
- **Review and approve** adjustments (tolerances).
- **Post adjustments**; reconcile value with finance.`, 'B'],

['Receiving', 'What is the Receiving inbound flow with ASNs and inspection?',
`- Supplier sends **ASN**; receipts created against ASN lines (expected receipts).
- **Inspection** routing → accept/reject (quality integration).
- **Put away/delivery** to subinventory/locator.
- Exceptions: over/under receipts (tolerances), damaged goods returns.`, 'B'],

['Shipping', 'What happens at ship confirm?',
`- Deliveries are **confirmed** as shipped (quantities, lots/serials, carrier, tracking).
- **Inventory issued** (sales order issue) → cost accounting (COGS/deferred COGS).
- **Order lines updated** (shipped), triggering **billing** in orchestration.
- Documents produced (BOL, packing slip, ASN to customer).
- Backorders created for short shipments.`, 'D'],

['Logistics', 'How do you handle in-transit inventory between orgs?',
`- **In-transit shipping network**: shipment from source org creates in-transit inventory (owned by sender or receiver based on FOB/ownership settings).
- Receipt at destination completes the transfer.
- Accounting via in-transit accounts; intercompany if legal entities differ.
- Monitor aging in-transit.`, 'D'],

['Interview', 'What should an inventory contractor be ready to discuss?',
`- Org/subinventory/locator design and lot/serial control decisions.
- Cycle count and accuracy programs.
- Receiving, shipping and transfer flows and their accounting.
- Data conversion of on-hand with lots/serials.
- A real troubleshooting story (negative on-hand, uncosted transactions, stuck move orders).`, 'B']
]);
