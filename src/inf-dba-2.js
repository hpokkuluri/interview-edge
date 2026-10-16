QB['inf-dba'] = (QB['inf-dba']||[]).concat([
["Query Store", "How do you use Query Store?",
`**Answer:** It captures query plans and runtime statistics over time. Use it to find regressed queries, compare plans, force a good plan, and analyze workload changes after upgrades. Enable it on all production databases (it's on by default in SQL Server 2022).

Tip: Plan forcing as a quick fix.`, 'B', 'M'],
["Postgres", "How do you find blocking in PostgreSQL?",
`**Answer:** Query pg_stat_activity with pg_blocking_pids(pid) to see who blocks whom, check the wait_event types, and terminate a session with pg_terminate_backend if needed. Set lock_timeout and statement_timeout to prevent long waits.

Tip: pg_blocking_pids.`, 'D', 'M'],
["Sizing", "How do you size memory for a SQL Server?",
`**Answer:** Leave memory for the OS (for example 4–6 GB, or about 10% on large servers) and set max server memory to the rest. Monitor Page Life Expectancy trends, memory grants and buffer pool usage.

Tip: Never leave max memory at the default.`, 'D', 'M']
]);
