QB['sap-basis'] = (QB['sap-basis'] || []).concat([
['Operations', 'What is the difference between a client copy and a system copy?',
`- **Client copy**: copies client-specific data (customizing, master/transaction data, users) within or between systems (SCCL local, SCC9 remote, SCC8/SCC7 export/import). Profiles control what is copied.
- **System copy**: copies the whole system (all clients, repository) — homogeneous (same DB/OS) or heterogeneous; used for refreshes and migrations.
- Client copies are slow for large data; system copies preferred for production refreshes.`, 'B'],
['HANA', 'What are HANA savepoints and redo logs?',
`- **Savepoints**: periodic (default 5 minutes) persistence of changed in-memory data to the data volume — a consistent image.
- **Redo logs**: every committed change written to the log volume, ensuring durability between savepoints.
- On restart, HANA loads the last savepoint and replays logs.
- Log backups protect against data loss (point-in-time recovery).`, 'D']
]);
