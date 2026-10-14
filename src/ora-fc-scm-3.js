QB['ora-fc-scm'] = (QB['ora-fc-scm'] || []).concat([
['Inventory', 'What is ABC classification and how is it used?',
`ABC analysis ranks items by value (usually annual usage value = quantity × cost):
- **A items** — roughly 10–20% of items, ~70–80% of value. Counted most often, tightest control.
- **B items** — middle.
- **C items** — many items, little value. Counted least often.

In Oracle you **compile an ABC analysis** for an org, assign classes, and use them in **cycle count** frequency and planning policies.`, 'B'],

['Procurement', 'What is the difference between a requisitioning BU, procurement BU and sold-to legal entity?',
`- **Requisitioning BU** — where the requester works; owns the requisition and the expense/charge accounts.
- **Procurement BU** — the purchasing team that creates and manages the PO and supplier relationship; can serve many requisitioning BUs.
- **Sold-to legal entity** — the legal entity that is financially liable for the purchase (and appears on the PO).
- The **bill-to BU** processes the invoice in AP.

This model supports centralized procurement for many BUs in Fusion.`, 'D']
]);
