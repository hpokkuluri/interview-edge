QB['swe-be'] = (QB['swe-be'] || []).concat([
["Databases", "What is connection pooling and why does it matter?",
`**Answer:** Opening database connections is expensive, so a pool keeps a set of open connections that requests reuse. Size the pool to the database's capacity (too many connections hurt performance), release connections promptly, and use external poolers (PgBouncer) for many app instances or serverless.

Tip: Pool exhaustion is a common outage cause.`, 'D', 'M'],
["Architecture", "What is event sourcing and when would you use it?",
`**Answer:** Storing state as an append-only sequence of events instead of current values; state is rebuilt by replaying events. Useful for audit-heavy domains (finance, ledgers) and temporal queries, often combined with CQRS. Adds complexity — use only when the benefits are clear.

Tip: Balanced view.`, 'D', 'S']
]);
