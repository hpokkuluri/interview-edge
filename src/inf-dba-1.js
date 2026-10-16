// Database Administrator (SQL Server / PostgreSQL). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['inf-dba'] = [
["Role", "What does a DBA do?",
`**Why they ask:** baseline.

**Answer:** Keeps databases available, fast, secure and recoverable: installation and upgrades, backups and restores, high availability and DR, performance tuning, security and access, capacity planning, monitoring, and supporting developers with schema and query design.

Tip: Mention the platforms and the size of databases you've run.`, 'B', 'E'],

["Backup", "Explain SQL Server recovery models.",
`**Answer:** **Simple:** no log backups, so you can only restore to a full or differential backup. **Full:** log backups allow point-in-time recovery, and the log grows until it's backed up. **Bulk-logged:** minimal logging for bulk operations, with limited point-in-time restore during those operations.

Tip: Production OLTP usually uses Full.`, 'B', 'M'],

["Backup", "Design a backup strategy for a critical SQL Server database.",
`**Answer:** Weekly full, daily differential, and log backups every 15 minutes (RPO 15 minutes). Use backup checksums, keep copies offsite or immutable, set retention by policy, and run automated restore tests (to a test server, plus DBCC CHECKDB).

**Point-in-time restore order:** last full → latest differential → all log backups after it, with STOPAT.

Tip: Test restores, not just backups.`, 'B', 'M'],

["Backup", "How does PostgreSQL backup and point-in-time recovery work?",
`**Answer:** Logical backups with pg_dump/pg_dumpall (portable, slower for large databases). Physical base backups (pg_basebackup) plus continuous WAL archiving allow point-in-time recovery to a target time. Tools such as pgBackRest and Barman manage this.

Tip: Mention WAL archiving.`, 'B', 'M'],

["HA", "What HA options exist in SQL Server?",
`**Answer:** Always On Availability Groups (multiple databases fail over together, readable secondaries, synchronous or asynchronous replicas), Failover Cluster Instances (shared storage, instance-level failover), log shipping (simple DR), and replication for specific data distribution needs.

Tip: Sync for HA, async for DR distance.`, 'B', 'M'],

["HA", "How does PostgreSQL high availability work?",
`**Answer:** Streaming replication to standbys (synchronous or asynchronous), failover management with Patroni (plus etcd/Consul), connection routing through HAProxy or pgBouncer, or managed services (RDS/Aurora, Azure Flexible Server) with built-in failover.

Tip: Patroni is the common choice.`, 'D', 'M'],

["Performance", "A query suddenly became slow. How do you troubleshoot?",
`**Answer:** Compare current and previous execution plans (Query Store in SQL Server, pg_stat_statements plus EXPLAIN ANALYZE in Postgres). Look for parameter sniffing, stale statistics, missing or changed indexes, blocking, data growth and resource waits. Fix the cause: update statistics, add an index, rewrite the query, or force a known good plan as a stopgap.

Tip: Plan regression is a common cause.`, 'B', 'M'],

["Performance", "What is parameter sniffing?",
`**Answer:** SQL Server builds a plan using the first parameter values it sees. If later values have very different data distributions, the cached plan can perform poorly. Fixes include OPTION (RECOMPILE), OPTIMIZE FOR, plan guides or Query Store forcing, and SQL Server 2022's parameter-sensitive plan optimization.

Tip: Name PSP optimization in 2022.`, 'D', 'M'],

["Indexes", "Clustered vs non-clustered index?",
`**Answer:** A **clustered** index defines the physical order of table rows (one per table, usually the primary key). A **non-clustered** index is a separate structure with keys and row pointers, and you can have many. Covering indexes with INCLUDE columns avoid lookups.

Tip: Explain key lookups.`, 'B', 'E'],

["Indexes", "How do you decide which indexes to create?",
`**Answer:** Base it on the actual workload: frequent WHERE, JOIN and ORDER BY columns, selectivity, and the read/write balance (indexes slow writes). Use missing-index DMVs as hints, not orders. Remove unused or duplicate indexes and test the impact.

Tip: Don't blindly add every missing-index suggestion.`, 'D', 'M'],

["Indexes", "What index types does PostgreSQL offer?",
`**Answer:** B-tree (default), Hash, GIN (full-text, JSONB, arrays), GiST (geospatial, ranges), BRIN (very large naturally ordered tables), plus partial and expression indexes.

Tip: GIN for JSONB.`, 'D', 'M'],

["Maintenance", "What maintenance do SQL Server databases need?",
`**Answer:** Integrity checks (DBCC CHECKDB), index maintenance based on fragmentation and page density (less important on SSDs than it used to be), statistics updates, backup verification, and cleanup of history tables. Ola Hallengren's scripts are widely used.

Tip: Statistics matter more than fragmentation.`, 'B', 'M'],

["Maintenance", "What is VACUUM in PostgreSQL?",
`**Answer:** Because of MVCC, updates and deletes leave dead tuples. VACUUM reclaims that space for reuse and updates visibility maps, and ANALYZE updates statistics. Autovacuum does this automatically, but it may need tuning on busy tables. VACUUM also prevents transaction ID wraparound.

Tip: Wraparound is a serious risk.`, 'B', 'M'],

["Concurrency", "Explain locking, blocking and deadlocks.",
`**Answer:** Locks protect data consistency. **Blocking** happens when one session waits for another's lock. A **deadlock** is a cycle in which each session waits for the other, and the engine kills one as the victim. Reduce them with short transactions, consistent access order, proper indexes, and row-versioning isolation (RCSI).

Tip: Read deadlock graphs.`, 'B', 'M'],

["Concurrency", "What are isolation levels?",
`**Answer:** Read uncommitted (dirty reads), read committed (default in SQL Server and Postgres), repeatable read, serializable, and snapshot / read committed snapshot (row versioning, so readers don't block writers).

Tip: RCSI reduces blocking.`, 'D', 'M'],

["Security", "How do you secure databases?",
`**Answer:** Least-privilege roles, no shared or sa logins in applications, Windows/Entra authentication where possible, encryption in transit (TLS) and at rest (TDE), Always Encrypted or column encryption for sensitive fields, auditing, patching, network restrictions, and dynamic data masking for non-production use.

Tip: Mask data in lower environments.`, 'B', 'M'],

["Monitoring", "What do you monitor on database servers?",
`**Answer:** Availability, CPU, memory, disk latency and space, wait statistics, blocking, long-running queries, log usage, replication/AG lag, backup success, failed logins and job failures.

Tip: Wait statistics show where time goes.`, 'B', 'M'],

["Waits", "What are common SQL Server wait types?",
`**Answer:** PAGEIOLATCH (disk reads), WRITELOG (log write latency), CXPACKET/CXCONSUMER (parallelism), LCK_M_* (blocking), SOS_SCHEDULER_YIELD (CPU pressure), RESOURCE_SEMAPHORE (memory grants).

Tip: Waits point you to the bottleneck.`, 'D', 'M'],

["Configuration", "Which SQL Server settings do you change after installation?",
`**Answer:** Max server memory (leave memory for the OS), MAXDOP and cost threshold for parallelism, tempdb with multiple data files on fast storage, instant file initialization, backup compression, optimize for ad hoc workloads, and alerts for critical errors.

Tip: Cost threshold default of 5 is low.`, 'D', 'M'],

["Postgres", "Which PostgreSQL settings commonly need tuning?",
`**Answer:** shared_buffers (~25% RAM), effective_cache_size, work_mem (careful: it's per operation), maintenance_work_mem, max_connections (use pgBouncer pooling), WAL settings (max_wal_size, checkpoint_timeout), and autovacuum parameters.

Tip: Connection pooling matters.`, 'D', 'M'],

["Upgrades", "How do you plan a database upgrade?",
`**Answer:** Check compatibility (deprecated features, the Data Migration Assistant for SQL Server, extension versions in Postgres), test with production-like data, benchmark performance, plan the method (in-place, side-by-side, pg_upgrade, logical replication for minimal downtime), have a rollback plan, and set the compatibility level gradually.

Tip: Compatibility level as a safety net.`, 'D', 'M'],

["Cloud", "What changes when databases move to the cloud?",
`**Answer:** Managed services (Azure SQL, RDS, Aurora, Cloud SQL) handle patching, backups and HA. The DBA focuses on performance, cost (right-sizing, reserved capacity), security, architecture and automation. Some features and access are limited compared with on-prem.

Tip: Cost becomes a DBA concern.`, 'B', 'M'],

["Migration", "How do you migrate a large database with minimal downtime?",
`**Answer:** Initial full load, then continuous sync (log shipping, AG seeding, logical replication, or AWS DMS/Azure DMS), validate the data, plan a short cutover (stop writes, final sync, switch connection strings), and keep a rollback path.

Tip: Rehearse the cutover.`, 'D', 'M'],

["Capacity", "How do you plan database capacity?",
`**Answer:** Track growth trends for data, log, tempdb and backups, plus CPU/memory/IO trends, forecast 12–18 months ahead, and plan archiving, partitioning or scaling before limits are reached.

Tip: Trend-based.`, 'B', 'M'],

["Partitioning", "When do you use table partitioning?",
`**Answer:** For very large tables, to manage data lifecycle (switch out or drop old partitions quickly), improve maintenance, and sometimes get query benefits through partition elimination. It isn't automatically faster, so test it.

Tip: Lifecycle management benefit.`, 'D', 'M'],

["Replication", "What is logical replication in PostgreSQL?",
`**Answer:** Publishes changes for selected tables to subscribers using logical decoding. It works across versions, so it's useful for upgrades, migrations and data distribution, unlike physical streaming replication which copies the whole cluster.

Tip: Version upgrades.`, 'D', 'M'],

["Tempdb", "Why does tempdb matter in SQL Server?",
`**Answer:** It holds temp tables, sorts, hashes, version store and spills. Contention or space problems affect the whole instance. Configure multiple equal-size data files, fast storage and monitoring.

Tip: Multiple data files.`, 'B', 'M'],

["Corruption", "What do you do if DBCC CHECKDB reports corruption?",
`**Answer:** Don't panic or run repair_allow_data_loss first. Identify the affected objects, check the hardware and storage, restore from clean backups (page-level restore if possible), and use repair only as a last resort while understanding the data loss.

Tip: Restore over repair.`, 'D', 'M'],

["SQL", "How do you find the top resource-consuming queries?",
`**Answer:** SQL Server: Query Store or sys.dm_exec_query_stats ordered by total CPU/reads/duration. PostgreSQL: pg_stat_statements ordered by total_exec_time.

Tip: Total, not just average.`, 'B', 'M'],

["DevOps", "How do DBAs support DevOps?",
`**Answer:** Database changes in source control, migration tools (Flyway, Liquibase, SSDT), automated deployments with review, test data management, and performance checks in pipelines.

Tip: Migrations as code.`, 'D', 'M'],

["Behavioral", "Tell me about a performance problem you solved.",
`**Sample answer:** "Month-end reports took 3 hours. I found a non-sargable date filter and a missing covering index. After rewriting the predicate and adding the index, the run time dropped to 8 minutes."

Tip: Root cause and before/after.`, 'B', 'M'],

["Behavioral", "Tell me about a database recovery you performed.",
`**Sample answer:** "A developer deleted rows in production. I restored the database side by side to a point just before the delete using log backups and copied the missing rows back within an hour, with no downtime."

Tip: Point-in-time skills.`, 'B', 'M'],

["Behavioral", "How do you work with developers?",
`**Answer:** Review schema and queries early, share performance guidelines, give them read access to Query Store or monitoring, and pair on tuning instead of just rejecting changes.

Tip: Partnership.`, 'B', 'E'],

["Certifications", "Which certifications are useful?",
`**Answer:** Microsoft DP-300 (Azure Database Administrator), AWS Database Specialty (retired; Solutions Architect instead), EDB PostgreSQL certifications, and Oracle OCP for Oracle DBAs.

Tip: DP-300 for SQL.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Database architect, data platform engineer, or cloud database specialist.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep databases fast and recoverable. I've tuned critical reports from hours to minutes, built tested HA/DR, and recovered data quickly when mistakes happened."

Tip: Proof.`, 'B', 'E'],

["SQL", "What makes a predicate non-sargable?",
`**Answer:** Wrapping indexed columns in functions or calculations, for example WHERE YEAR(OrderDate) = 2026 or WHERE col + 1 = 5, or implicit conversions. These prevent index seeks.

**Fix:** WHERE OrderDate >= '2026-01-01' AND OrderDate < '2027-01-01'.

Tip: Show the rewrite.`, 'B', 'M'],

["SQL", "Explain execution plan operators you watch for.",
`**Answer:** Table/index scans on large tables, key lookups with high counts, hash/sort spills (warnings), large estimated vs actual row differences (bad statistics), and implicit conversion warnings.

Tip: Estimates vs actuals.`, 'D', 'M'],

["Log", "Why does a transaction log grow uncontrollably?",
`**Answer:** In Full recovery without log backups, because of long-running open transactions, replication or AG secondaries falling behind, or large index rebuilds. Check log_reuse_wait_desc in sys.databases.

Tip: log_reuse_wait_desc.`, 'B', 'M'],

["Connections", "Why use connection pooling?",
`**Answer:** Opening connections is expensive. Pooling reuses them, reducing overhead and protecting the database from too many connections, which is especially important in PostgreSQL where each connection is a process.

Tip: pgBouncer.`, 'B', 'M'],

["Scenario", "The database server CPU is at 100%. What do you do?",
`**Answer:** Identify the top CPU queries right now (sys.dm_exec_requests or pg_stat_activity), check for plan changes or new deployments, kill runaway queries if needed, fix plans or indexes, and check parallelism settings.

Tip: Find what changed.`, 'B', 'M'],

["Scenario", "An AG secondary is falling behind. What do you check?",
`**Answer:** Network bandwidth and latency, redo queue size and redo thread speed, disk performance on the secondary, large transactions or index rebuilds on the primary, and the synchronous vs asynchronous mode.

Tip: Redo queue.`, 'D', 'M'],

["Data", "How do you protect production data in test environments?",
`**Answer:** Masking or synthetic data, access restrictions, and refresh processes that remove sensitive fields, to stay compliant with privacy rules.

Tip: Masking.`, 'B', 'M'],

["Automation", "What DBA tasks do you automate?",
`**Answer:** Backups and restore tests, health checks, index/statistics maintenance, user provisioning, alerting, and inventory reports, using PowerShell (dbatools), SQL Agent, cron, or Ansible.

Tip: dbatools.`, 'B', 'M'],

["NoSQL", "When would you suggest NoSQL instead of relational?",
`**Answer:** For flexible schemas, massive scale-out with simple access patterns, key-value caching, or document-centric data. Relational is better for complex transactions and joins. Many systems use both.

Tip: Fit the access pattern.`, 'D', 'M'],

["Audit", "How do you audit database access?",
`**Answer:** SQL Server Audit or Extended Events, pgAudit for PostgreSQL, monitoring privileged activity, and sending logs to a SIEM.

Tip: pgAudit.`, 'D', 'M'],

["DR", "What's the difference between HA and DR for databases?",
`**Answer:** HA handles local failures with automatic failover and minimal downtime, usually within a site or region. DR recovers from site or region loss, often asynchronously with a defined RPO/RTO.

Tip: Both are needed.`, 'B', 'E']
];
