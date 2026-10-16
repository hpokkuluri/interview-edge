QB['et-stc-fus'] = (QB['et-stc-fus'] || []).concat([
["Integrations", "How do you design a supplier master integration with Fusion?",
`**Answer:** Decide the system of record, use the Suppliers REST API for real-time creates/updates (or FBDI Supplier Import for bulk), handle sites, addresses, contacts and bank accounts in the correct order, map business unit site assignments, validate tax IDs, handle duplicates by external key, and secure bank data handling.

Tip: Bank account changes need extra controls.`, 'D'],
["Performance", "How do you avoid hitting OIC and Fusion limits in high-volume integrations?",
`**Answer:** Batch records, prefer bulk import over row-by-row REST, use parallel processing carefully within concurrency limits, schedule off-peak, and monitor OIC message consumption against your message pack subscription.

Tip: Message packs drive OIC cost.`, 'D']
]);
