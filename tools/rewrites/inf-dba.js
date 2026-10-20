// Rewritten Infrastructure — Database Administrator (Why they ask → Answer → Tip). Apply with rewrite.js (prefix inf-dba-).
module.exports = {

'Explain SQL Server recovery models.':
`**Why they ask:** recovery fundamentals.

**Answer:**
"Simple recovery has no log backups, so you can only restore to the last full or differential backup — fine for dev or a reporting copy. Full recovery keeps the log until it's backed up, which allows point-in-time restore, but the log grows if you forget log backups. Bulk-logged minimally logs bulk operations, and you lose point-in-time restore inside those operations. Production OLTP databases should be in Full."

Tip: Production OLTP usually uses Full.`,

'Design a backup strategy for a critical SQL Server database.':
`**Why they ask:** a core DBA responsibility.

**Answer:**
"Start from the RPO and RTO. For a 15-minute RPO: weekly full backups, daily differentials, and log backups every 15 minutes, all with checksums, copies offsite or on immutable storage, and retention set by policy. Then automated restore tests to a separate server with DBCC CHECKDB, because a backup you haven't restored is a hope. For a point-in-time restore the order is the last full, the latest differential, then every log backup after it, with STOPAT on the final one."

Tip: Test restores, not just backups.`,

'How does PostgreSQL backup and point-in-time recovery work?':
`**Why they ask:** Postgres depth.

**Answer:**
"Logical backups with pg_dump and pg_dumpall are portable but slow for big databases. For production, physical base backups with pg_basebackup plus continuous WAL archiving let you replay WAL to any target time — restore the base backup and set a recovery target time like 14:32, just before the bad delete. pgBackRest and Barman manage this with compression, retention and parallelism."

Tip: Mention WAL archiving.`,

'What HA options exist in SQL Server?':
`**Why they ask:** high availability design.

**Answer:**
"Always On Availability Groups — groups of databases that fail over together, with readable secondaries and synchronous or asynchronous replicas. Failover Cluster Instances — shared storage with instance-level failover. Log shipping for simple DR, and replication for specific data distribution. Typically a synchronous AG replica in the same region for HA, and an asynchronous one in another region for DR, because synchronous commit across distance adds latency to every transaction."

Tip: Sync for HA, async for DR distance.`,

'How does PostgreSQL high availability work?':
`**Why they ask:** Postgres HA.

**Answer:**
"Streaming replication to standbys, synchronous or asynchronous, with failover managed by Patroni using etcd or Consul for consensus, and connections routed through HAProxy or pgBouncer so applications follow the primary. Or managed services — RDS, Aurora, Azure Flexible Server — with built-in failover. Patroni is the most common self-managed choice."

Tip: Patroni is the common choice.`,

'A query suddenly became slow. How do you troubleshoot?':
`**Why they ask:** practical troubleshooting.

**Answer:**
"Compare the current execution plan with the previous one — Query Store in SQL Server, pg_stat_statements plus EXPLAIN ANALYZE in Postgres. Then look for parameter sniffing, stale statistics, a missing or changed index, blocking, data growth and resource waits, and fix the actual cause: update statistics, add an index, rewrite the query, or force the known good plan as a stopgap. Most 'it was fine yesterday' cases are plan regressions."

Tip: Plan regression is a common cause.`,

'What is parameter sniffing?':
`**Why they ask:** a classic SQL Server issue.

**Answer:**
"SQL Server builds a plan using the parameter values from the first execution and caches it. If the first call was for a customer with 5 orders, the plan uses an index seek; when a customer with 2 million orders runs the same cached plan, it's terrible. Fixes are OPTION (RECOMPILE), OPTIMIZE FOR, forcing a plan in Query Store, and SQL Server 2022's parameter-sensitive plan optimization, which keeps multiple plans per query."

Tip: Name PSP optimization in 2022.`,

'Clustered vs non-clustered index?':
`**Why they ask:** indexing fundamentals.

**Answer:**
"A clustered index defines the order the table's rows are stored in — one per table, usually the primary key. A non-clustered index is a separate structure with its keys and a pointer back to the row, and you can have many. If a query uses a non-clustered index but needs columns not in it, SQL Server does a key lookup for each row; adding those columns with INCLUDE makes it a covering index and removes the lookups."

Tip: Explain key lookups.`,

'How do you decide which indexes to create?':
`**Why they ask:** indexing judgment.

**Answer:**
"From the actual workload: columns used often in WHERE, JOIN and ORDER BY, their selectivity, and the read-write balance, since every index slows inserts and updates. Missing-index DMVs are hints, not orders — they often suggest overlapping indexes. I also remove unused and duplicate indexes and test the impact on both reads and writes."

Tip: Don't blindly add every missing-index suggestion.`,

'What index types does PostgreSQL offer?':
`**Why they ask:** Postgres depth.

**Answer:**
"B-tree by default; Hash; GIN for full-text, JSONB and arrays; GiST for geospatial and range types; BRIN for very large tables with naturally ordered data like time-series; plus partial indexes — say only active orders — and expression indexes like LOWER(email)."

Tip: GIN for JSONB.`,

'What maintenance do SQL Server databases need?':
`**Why they ask:** operational discipline.

**Answer:**
"Integrity checks with DBCC CHECKDB, index maintenance based on fragmentation and page density — less critical on SSDs than it used to be — statistics updates, backup verification, and cleaning up history tables. Ola Hallengren's maintenance solution is the common standard. In practice, fresh statistics matter more than fragmentation."

Tip: Statistics matter more than fragmentation.`,

'What is VACUUM in PostgreSQL?':
`**Why they ask:** Postgres-specific operations.

**Answer:**
"Because of MVCC, updates and deletes leave dead tuples behind. VACUUM reclaims that space for reuse and updates the visibility map; ANALYZE refreshes statistics. Autovacuum handles it automatically but often needs tuning on busy tables. VACUUM also freezes old transaction IDs — if that falls behind, you risk transaction ID wraparound, which can force the database into protective shutdown."

Tip: Wraparound is a serious risk.`,

'Explain locking, blocking and deadlocks.':
`**Why they ask:** concurrency troubleshooting.

**Answer:**
"Locks protect consistency. Blocking is one session waiting for another's lock — normal if brief. A deadlock is a cycle: session A holds a lock B needs while B holds one A needs, so the engine kills one as the victim. I reduce them with short transactions, accessing tables in a consistent order, good indexes so fewer rows get locked, and row-versioning isolation like RCSI. Deadlock graphs show exactly which resources were involved."

Tip: Read deadlock graphs.`,

'What are isolation levels?':
`**Why they ask:** consistency trade-offs.

**Answer:**
"Read uncommitted allows dirty reads; read committed — the default in SQL Server and Postgres — prevents them; repeatable read; serializable; and snapshot or read committed snapshot, which use row versions so readers don't block writers. Turning on RCSI often eliminates most reader-writer blocking in SQL Server."

Tip: RCSI reduces blocking.`,

'How do you secure databases?':
`**Why they ask:** data protection.

**Answer:**
"Least-privilege roles, no shared or sa logins for applications, Windows or Entra authentication where possible, TLS in transit and TDE at rest, Always Encrypted or column encryption for sensitive fields, auditing, patching, network restrictions, and masked data in non-production environments."

Tip: Mask data in lower environments.`,

'What do you monitor on database servers?':
`**Why they ask:** proactive operations.

**Answer:**
"Availability, CPU, memory, disk latency and space, wait statistics, blocking, long-running queries, log usage, replication or AG lag, backup success, failed logins and job failures. Wait statistics are the most telling — they show where queries actually spend their time."

Tip: Wait statistics show where time goes.`,

'What are common SQL Server wait types?':
`**Why they ask:** diagnosis skill.

**Answer:**
"PAGEIOLATCH means waiting on disk reads; WRITELOG is log write latency; CXPACKET and CXCONSUMER relate to parallelism; LCK_M waits are blocking; SOS_SCHEDULER_YIELD points to CPU pressure; and RESOURCE_SEMAPHORE means queries are waiting for memory grants. High WRITELOG with a slow log disk is fixed by storage, not by query tuning."

Tip: Waits point you to the bottleneck.`,

'Which SQL Server settings do you change after installation?':
`**Why they ask:** configuration best practices.

**Answer:**
"Max server memory, leaving room for the OS; MAXDOP and cost threshold for parallelism — the default threshold of 5 is far too low for modern hardware, I usually start around 50; tempdb with multiple equal-size data files on fast storage; instant file initialization; backup compression; optimize for ad hoc workloads; and alerts for severity 17 to 25 errors."

Tip: Cost threshold default of 5 is low.`,

'Which PostgreSQL settings commonly need tuning?':
`**Why they ask:** Postgres tuning.

**Answer:**
"shared_buffers at about 25% of RAM, effective_cache_size, work_mem — carefully, because it's per sort or hash operation, so 64 MB times many operations times many connections adds up fast — maintenance_work_mem, max_connections with pgBouncer for pooling, WAL settings like max_wal_size and checkpoint_timeout, and autovacuum parameters."

Tip: Connection pooling matters.`,

'How do you plan a database upgrade?':
`**Why they ask:** change management.

**Answer:**
"Check compatibility — deprecated features through the Data Migration Assistant for SQL Server, extension versions for Postgres — test with production-like data, benchmark performance, choose the method — in-place, side-by-side, pg_upgrade, or logical replication for minimal downtime — and have a rollback plan. In SQL Server I keep the old compatibility level at first and raise it after testing, as a safety net for plan changes."

Tip: Compatibility level as a safety net.`,

'What changes when databases move to the cloud?':
`**Why they ask:** cloud-era DBA role.

**Answer:**
"Managed services — Azure SQL, RDS, Aurora, Cloud SQL — take over patching, backups and HA. The DBA shifts to performance, cost — right-sizing and reserved capacity — security, architecture and automation. Some features and OS-level access aren't available, and cost becomes a daily DBA concern: an oversized instance is now a monthly bill."

Tip: Cost becomes a DBA concern.`,

'How do you migrate a large database with minimal downtime?':
`**Why they ask:** migration experience.

**Answer:**
"An initial full load, then continuous sync — log shipping, AG seeding, logical replication, or AWS or Azure DMS — data validation with row counts and checksums, then a short cutover: stop writes, final sync, switch connection strings. Keep a rollback path and rehearse the cutover at least once so the timing is known."

Tip: Rehearse the cutover.`,

'How do you plan database capacity?':
`**Why they ask:** forward planning.

**Answer:**
"Track growth for data, log, tempdb and backups, plus CPU, memory and IO trends, forecast 12 to 18 months ahead, and plan archiving, partitioning or scaling before hitting limits. If data grows 40 GB a month on a 2 TB volume that's 60% full, I have about 20 months — but backups and maintenance headroom shorten that."

Tip: Trend-based.`,

'When do you use table partitioning?':
`**Why they ask:** large table management.

**Answer:**
"For very large tables, mainly for data lifecycle — switching out or dropping a month of old data instantly instead of a huge DELETE — easier maintenance, and sometimes partition elimination in queries. It's not automatically faster; queries that don't filter on the partition key can get slower, so I test it."

Tip: Lifecycle management benefit.`,

'What is logical replication in PostgreSQL?':
`**Why they ask:** Postgres replication options.

**Answer:**
"It publishes changes for selected tables to subscribers using logical decoding. Unlike physical streaming replication, which copies the whole cluster byte for byte and needs the same major version, logical replication works across versions — so it's ideal for near-zero-downtime upgrades, migrations and selective data distribution."

Tip: Version upgrades.`,

'Why does tempdb matter in SQL Server?':
`**Why they ask:** instance-wide performance.

**Answer:**
"It holds temp tables, sorts, hashes, the version store for snapshot isolation, and spills from queries that ran out of memory. Contention or running out of space affects every database on the instance. Multiple equal-size data files, fast storage and monitoring prevent most issues."

Tip: Multiple data files.`,

'What do you do if DBCC CHECKDB reports corruption?':
`**Why they ask:** crisis judgment.

**Answer:**
"Don't panic, and don't run REPAIR_ALLOW_DATA_LOSS first — the name says it all. Identify the affected objects — sometimes it's just a non-clustered index that can be rebuilt — check hardware and storage logs, restore from clean backups, using page-level restore if possible, and use repair only as a last resort, understanding exactly what data is lost."

Tip: Restore over repair.`,

'How do you find the top resource-consuming queries?':
`**Why they ask:** tuning prioritization.

**Answer:**
"In SQL Server, Query Store or sys.dm_exec_query_stats ordered by total CPU, reads or duration. In PostgreSQL, pg_stat_statements ordered by total_exec_time. Total matters more than average: a 50-millisecond query run a million times a day costs far more than a 30-second report run once."

Tip: Total, not just average.`,

'How do DBAs support DevOps?':
`**Why they ask:** modern ways of working.

**Answer:**
"Database changes in source control, migration tools like Flyway, Liquibase or SSDT, automated deployments with review, test data management, and performance checks in pipelines — so schema changes go through the same process as code."

Tip: Migrations as code.`,

'Tell me about a performance problem you solved.':
`**Why they ask:** proof.

**Answer:**
"Month-end reports took three hours. I found a non-sargable date filter and a missing covering index. After rewriting the predicate and adding the index, the run time dropped to 8 minutes."

Tip: Root cause and before/after.`,

'Tell me about a database recovery you performed.':
`**Why they ask:** recovery skills under pressure.

**Answer:**
"A developer deleted rows in production. I restored the database side by side to a point just before the delete using log backups, and copied the missing rows back within an hour — with no downtime for the live database."

Tip: Point-in-time skills.`,

'How do you work with developers?':
`**Why they ask:** collaboration.

**Answer:**
"Review schemas and queries early, share performance guidelines, give them read access to Query Store or monitoring, and pair on tuning instead of just rejecting changes."

Tip: Partnership.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"Microsoft DP-300 for Azure database administration, EDB PostgreSQL certifications, Oracle OCP for Oracle DBAs, and cloud architect certifications since AWS retired its Database Specialty exam."

Tip: DP-300 for SQL.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward database architect, data platform engineer, or cloud database specialist."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I keep databases fast and recoverable. I've tuned critical reports from hours to minutes, built tested HA and DR, and recovered data quickly when mistakes happened."

Tip: Proof.`,

'What makes a predicate non-sargable?':
`**Why they ask:** practical tuning knowledge.

**Answer:**
"Wrapping an indexed column in a function or calculation — WHERE YEAR(OrderDate) = 2026 or WHERE col + 1 = 5 — or implicit type conversions, all of which prevent index seeks. The fix is a range on the bare column: WHERE OrderDate >= '2026-01-01' AND OrderDate < '2027-01-01'."

Tip: Show the rewrite.`,

'Explain execution plan operators you watch for.':
`**Why they ask:** plan reading skill.

**Answer:**
"Scans on large tables, key lookups with high execution counts, hash and sort spill warnings, big differences between estimated and actual rows — which usually means bad statistics — and implicit conversion warnings. An estimate of 10 rows against an actual of 2 million explains most bad plans."

Tip: Estimates vs actuals.`,

'Why does a transaction log grow uncontrollably?':
`**Why they ask:** a common incident.

**Answer:**
"Usually Full recovery without log backups, a long-running open transaction, replication or an AG secondary falling behind, or large index rebuilds. The log_reuse_wait_desc column in sys.databases tells you exactly what's preventing log reuse."

Tip: log_reuse_wait_desc.`,

'Why use connection pooling?':
`**Why they ask:** scalability.

**Answer:**
"Opening connections is expensive, so pooling reuses them, reducing overhead and protecting the database from connection storms. It matters even more in PostgreSQL, where each connection is a separate process — 2,000 direct connections can exhaust memory, while pgBouncer can serve them with 100."

Tip: pgBouncer.`,

'The database server CPU is at 100%. What do you do?':
`**Why they ask:** live incident response.

**Answer:**
"Find the top CPU consumers right now with sys.dm_exec_requests or pg_stat_activity, check for plan changes or a recent deployment, kill a runaway query if necessary, then fix the plan or index and review parallelism settings. The question is always 'what changed?'"

Tip: Find what changed.`,

'An AG secondary is falling behind. What do you check?':
`**Why they ask:** HA troubleshooting.

**Answer:**
"Network bandwidth and latency, the redo queue size and how fast the redo thread is applying changes, disk performance on the secondary, large transactions or index rebuilds on the primary, and whether it's in synchronous or asynchronous mode."

Tip: Redo queue.`,

'How do you protect production data in test environments?':
`**Why they ask:** privacy compliance.

**Answer:**
"Masking or synthetic data, restricted access, and refresh processes that scrub sensitive fields every time production is copied down, to stay compliant with privacy rules."

Tip: Masking.`,

'What DBA tasks do you automate?':
`**Why they ask:** efficiency.

**Answer:**
"Backups and restore tests, health checks, index and statistics maintenance, user provisioning, alerting and inventory reports — using PowerShell with dbatools, SQL Agent, cron or Ansible. dbatools alone turned our monthly restore-test chore into a scheduled job."

Tip: dbatools.`,

'When would you suggest NoSQL instead of relational?':
`**Why they ask:** architectural judgment.

**Answer:**
"For flexible schemas, massive scale-out with simple access patterns, key-value caching, or document-centric data. Relational is better for complex transactions and joins. Many systems use both — Postgres for orders, Redis for sessions."

Tip: Fit the access pattern.`,

'How do you audit database access?':
`**Why they ask:** compliance.

**Answer:**
"SQL Server Audit or Extended Events, pgAudit for PostgreSQL, monitoring privileged activity, and sending audit logs to the SIEM where the database admins can't alter them."

Tip: pgAudit.`,

"What's the difference between HA and DR for databases?":
`**Why they ask:** resilience concepts.

**Answer:**
"HA handles local failures — a server or zone — with automatic failover and minimal downtime, usually within a site or region. DR recovers from losing a whole site or region, often with asynchronous replication and a defined RPO and RTO. You need both."

Tip: Both are needed.`,

'How do you use Query Store?':
`**Why they ask:** modern SQL Server tooling.

**Answer:**
"It captures query plans and runtime statistics over time. I use it to find regressed queries, compare plans, force a good plan as a quick fix, and analyze workload changes after upgrades. It's on by default for new databases in SQL Server 2022, and I enable it on every production database."

Tip: Plan forcing as a quick fix.`,

'How do you find blocking in PostgreSQL?':
`**Why they ask:** Postgres troubleshooting.

**Answer:**
"Query pg_stat_activity together with pg_blocking_pids(pid) to see who's blocking whom, check wait_event types, and terminate a session with pg_terminate_backend if needed. Setting lock_timeout and statement_timeout prevents sessions waiting forever."

Tip: pg_blocking_pids.`,

'How do you size memory for a SQL Server?':
`**Why they ask:** configuration basics.

**Answer:**
"Leave memory for the OS — around 4 to 6 GB, or about 10% on large servers — and set max server memory to the rest. On a 128 GB server I'd start around 115 GB. Then watch Page Life Expectancy trends, memory grants and buffer pool usage."

Tip: Never leave max memory at the default.`,

};
