QB['ora-sfc-scm'] = (QB['ora-sfc-scm'] || []).concat([
['Procurement', 'How do you handle requisitions that fail automatic PO creation?',
`- Check the requisition line in **Process Requisitions** — the reason is usually shown (no source agreement, supplier site inactive, agreement expired, price/UOM mismatch, missing procurement BU access).
- Fix the root data: renew the agreement, add the site assignment, correct the UOM conversion.
- Re-submit or let the buyer create the PO manually.
- Track repeat failures in a report so the root cause (e.g. expired agreements) is fixed before it hits users.`, 'B'],

['Inventory', 'What are the key inventory organization parameters you set?',
`- **Item master org**, schedule (calendar), **default subinventory/locator controls**.
- **Lot and serial** number generation and uniqueness.
- **Negative balances allowed** or not.
- **Picking and putaway** defaults (picking rule, allocation).
- **ATP and reservations** settings.
- **Shipping/receiving** parameters, interorg transfer defaults.
- **Costing**: linked cost org, default accounts.

Decisions like negative balances need business agreement — they affect controls and costing.`, 'D']
]);
