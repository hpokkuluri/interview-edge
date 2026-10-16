// Data Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-eng'] = [
["Role", "What does a data engineer do?",
`**Why they ask:** baseline scope.

**Answer:** Builds and operates the systems that move, store and prepare data: ingestion from sources (databases, APIs, files, streams), pipelines and transformations (batch and streaming), data warehouses and lakehouses, data quality and testing, orchestration, performance and cost optimization, security and governance — so analysts, data scientists and applications get reliable data.

Tip: Mention reliability and data quality, not just pipelines.`, 'B', 'E'],

["ETL", "ETL vs ELT?",
`**Answer:** **ETL** transforms data before loading into the warehouse (traditional, when warehouse compute was expensive). **ELT** loads raw data first and transforms inside the warehouse (Snowflake, BigQuery, Databricks) using SQL/dbt — more flexible, keeps raw history, and scales with cloud compute.

Tip: ELT with dbt is the modern default.`, 'B', 'E'],

["Architecture", "Data warehouse vs data lake vs lakehouse?",
`**Answer:** **Warehouse:** structured, modeled data optimized for SQL analytics (Snowflake, Redshift, BigQuery, Synapse). **Lake:** cheap storage of raw data in any format (S3, ADLS). **Lakehouse:** lake storage with warehouse features — ACID tables, schema enforcement, time travel — via open table formats (Delta Lake, Apache Iceberg, Hudi) on Databricks, Snowflake or others.

Tip: Mention Iceberg/Delta.`, 'B', 'M'],

["Architecture", "What is the medallion architecture?",
`**Answer:** Layers of data refinement: **bronze** (raw ingested data), **silver** (cleaned, conformed, deduplicated), **gold** (business-level aggregates and models for reporting and ML).

Tip: Common in Databricks.`, 'B', 'M'],

["Modeling", "Explain dimensional modeling.",
`**Answer:** Kimball approach: **fact tables** store measurable events (sales, clicks) at a defined grain; **dimension tables** store descriptive context (customer, product, date). Star schemas are simple and fast for BI. Choose the grain carefully first.

Tip: "Declare the grain."`, 'B', 'M'],

["Modeling", "What are slowly changing dimensions?",
`**Answer:** Ways to handle changes in dimension attributes: **Type 1** overwrite (no history), **Type 2** add a new row with effective dates and current flag (full history), **Type 3** add a column for previous value (limited history). Type 2 is most common for analytics history.

Tip: SCD2 with valid_from/valid_to.`, 'B', 'M'],

["SQL", "How do you write efficient SQL for large datasets?",
`**Answer:** Filter early, select only needed columns (columnar storage), use partition and cluster pruning, avoid SELECT *, avoid unnecessary DISTINCT and cross joins, pre-aggregate, use window functions instead of self-joins, and check query plans/profiles.

Tip: Partition pruning.`, 'B', 'M'],

["Pipelines", "How do you design a reliable data pipeline?",
`**Answer:** Idempotent loads (rerunnable without duplicates — merge/upsert, partition overwrite), incremental processing with watermarks, schema validation, data quality checks, retries with alerting, backfill capability, lineage and logging, and SLAs for freshness.

Tip: Idempotency is key.`, 'D', 'M'],

["Pipelines", "How do you handle incremental loads?",
`**Answer:** Track a high-water mark (updated_at timestamp or ID), or use change data capture; load only new/changed records; MERGE into targets; handle late-arriving data and deletes (soft deletes or CDC delete events).

Tip: Deletes are often missed.`, 'D', 'M'],

["CDC", "What is change data capture?",
`**Answer:** Capturing inserts, updates and deletes from source databases as they happen, typically by reading transaction logs (Debezium, Fivetran, AWS DMS, GoldenGate), then streaming changes to a warehouse or lake. Low impact on sources and near-real-time.

Tip: Log-based CDC.`, 'D', 'M'],

["Orchestration", "What is Airflow and how do you use it?",
`**Answer:** Apache Airflow orchestrates workflows as DAGs (directed acyclic graphs) of tasks with dependencies, schedules, retries, alerting and backfills. Keep tasks idempotent, avoid heavy processing in the scheduler, and use sensors carefully. Alternatives: Dagster, Prefect, cloud-native tools (ADF, Step Functions).

Tip: Mention Dagster's asset-based approach.`, 'B', 'M'],

["dbt", "What is dbt and why is it popular?",
`**Answer:** dbt (data build tool) lets you write transformations as SQL SELECT models, managing dependencies, tests (unique, not_null, relationships, custom), documentation, lineage and incremental models, with version control and CI. It brings software engineering practices to analytics.

Tip: Tests and lineage.`, 'B', 'M'],

["Spark", "What is Apache Spark and when do you use it?",
`**Answer:** A distributed processing engine for large-scale batch and streaming data (DataFrames, Spark SQL). Use it when data or computation exceeds a single machine or warehouse SQL is not suitable (complex transformations, ML feature engineering). Common on Databricks, EMR, Synapse.

Tip: Know when SQL is enough.`, 'B', 'M'],

["Spark", "How do you optimize a slow Spark job?",
`**Answer:** Check the Spark UI for skewed or slow stages, reduce shuffles (broadcast small tables in joins), handle data skew (salting, AQE), right-size partitions, cache reused data, use columnar formats (Parquet) with partition pruning, and avoid Python UDFs where native functions exist.

Tip: Skew and shuffle.`, 'D', 'S'],

["Streaming", "Batch vs streaming — when do you choose streaming?",
`**Answer:** Streaming when low latency matters — fraud detection, real-time dashboards, personalization, alerts. Batch is simpler and cheaper for daily reporting. Tools: Kafka, Kinesis, Flink, Spark Structured Streaming. Consider exactly-once semantics, late data and windowing.

Tip: "Don't stream if daily is fine."`, 'D', 'M'],

["Streaming", "How do you handle late-arriving data in streaming?",
`**Answer:** Use event time (not processing time), watermarks that define how late data can be accepted, windowed aggregations that update when late events arrive, and a reconciliation batch for very late data.

Tip: Event time vs processing time.`, 'D', 'S'],

["Kafka", "What are Kafka topics, partitions and consumer groups?",
`**Answer:** A topic is a named stream of events split into partitions for parallelism; order is guaranteed within a partition. Consumer groups share partitions so each message is processed by one consumer in the group. Retention allows replay.

Tip: Partition key determines ordering.`, 'D', 'M'],

["Data Quality", "How do you ensure data quality?",
`**Answer:** Tests at ingestion and transformation (schema, nulls, uniqueness, ranges, referential integrity, freshness, volume anomalies) using dbt tests, Great Expectations or Soda; data contracts with producers; monitoring and alerting; and clear ownership.

Tip: Data contracts.`, 'B', 'M'],

["Data Contracts", "What is a data contract?",
`**Answer:** An agreement between data producers and consumers defining schema, semantics, quality expectations and SLAs for a dataset, enforced in CI or at ingestion — preventing upstream changes from silently breaking pipelines.

Tip: Shift-left data quality.`, 'D', 'S'],

["File Formats", "Why use Parquet?",
`**Answer:** Columnar storage with compression and encoding — queries read only needed columns, reducing I/O and cost. Supports predicate pushdown and schema. Better than CSV/JSON for analytics.

Tip: Columnar benefits.`, 'B', 'E'],

["Table Formats", "What do Delta Lake and Iceberg provide?",
`**Answer:** ACID transactions on data lake files, schema enforcement and evolution, time travel, efficient upserts/deletes (MERGE), and partition evolution — making lakes reliable for analytics.

Tip: Open table formats.`, 'D', 'M'],

["Cloud", "Which cloud data services have you used?",
`**Sample answer:** "On AWS: S3, Glue, Redshift and Kinesis; on Azure: ADLS, Data Factory and Synapse/Fabric; plus Snowflake and Databricks across clouds."

Tip: Name what you built.`, 'B', 'M'],

["Snowflake", "What are key Snowflake concepts?",
`**Answer:** Separation of storage and compute; virtual warehouses that scale independently; micro-partitions and clustering; time travel and zero-copy cloning; data sharing; and pay-per-second compute — manage cost with auto-suspend and right-sizing.

Tip: Cost control.`, 'D', 'M'],

["Cost", "How do you control data platform costs?",
`**Answer:** Right-size and auto-suspend compute, partition/cluster to reduce scanned data, incremental models instead of full rebuilds, lifecycle policies on storage, monitor expensive queries, and tag costs by team.

Tip: FinOps for data.`, 'D', 'M'],

["Security", "How do you secure data platforms?",
`**Answer:** Role-based access control and least privilege, column/row-level security and masking for sensitive data, encryption in transit and at rest, secrets management, audit logging, and compliance with GDPR/HIPAA as relevant.

Tip: Masking PII.`, 'B', 'M'],

["Governance", "What is data lineage and why does it matter?",
`**Answer:** Tracking where data comes from and how it's transformed to where it's used. It helps impact analysis, debugging, trust and compliance. Tools: dbt docs, OpenLineage, Unity Catalog, Purview, data catalogs.

Tip: Impact analysis before changes.`, 'D', 'M'],

["Testing", "How do you test data pipelines?",
`**Answer:** Unit tests for transformation logic, data tests on outputs, integration tests with sample data, CI that runs dbt builds on changed models, and comparing outputs before and after changes (data diff).

Tip: Data diff in CI.`, 'D', 'M'],

["Python", "Which Python skills matter for data engineering?",
`**Answer:** pandas/polars for smaller data, PySpark, writing robust ingestion scripts (APIs, pagination, retries), packaging and testing (pytest), and type hints.

Tip: Polars is gaining adoption.`, 'B', 'M'],

["APIs", "How do you ingest data from a REST API reliably?",
`**Answer:** Handle authentication, pagination, rate limits (backoff), incremental extraction (updated_since), retries, schema changes, and land raw responses before transforming. Consider managed connectors (Fivetran, Airbyte).

Tip: Land raw first.`, 'B', 'M'],

["Backfills", "How do you run a backfill safely?",
`**Answer:** Make pipelines parameterized by date range and idempotent, run in batches, monitor resource usage and cost, validate results, and avoid overwhelming source systems.

Tip: Idempotency enables backfills.`, 'D', 'M'],

["Behavioral", "Tell me about a pipeline you built.",
`**Sample answer:** "I built CDC pipelines from 12 PostgreSQL databases into Snowflake using Debezium and Kafka, with dbt models for silver and gold layers. Data freshness went from daily to 10 minutes, and finance reporting moved off spreadsheets."

Tip: Scale and impact.`, 'B', 'M'],

["Behavioral", "Tell me about a data quality incident.",
`**Sample answer:** "A source system changed a status code, so revenue dashboards dropped 30%. I added accepted-values tests and volume anomaly alerts, set up a data contract with the source team, and fixed the mapping."

Tip: Detection and prevention.`, 'B', 'M'],

["Behavioral", "How do you work with analysts and data scientists?",
`**Answer:** Understand their use cases and SLAs, provide well-documented models, self-service access, and quick feedback loops for issues.

Tip: Data as a product.`, 'B', 'E'],

["AI", "How do data engineers support AI and LLM projects?",
`**Answer:** Build pipelines for unstructured data (documents, chunking, embeddings), vector stores or vector search in existing platforms, feature pipelines for ML, data quality and lineage for training data, and governance of what data AI can access.

Tip: Unstructured data pipelines.`, 'D', 'S'],

["Data Mesh", "What is data mesh?",
`**Answer:** An organizational approach where domain teams own their data as products, supported by a self-service platform and federated governance. It addresses central team bottlenecks but requires mature teams.

Tip: Socio-technical, not a tool.`, 'D', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Senior or staff data engineer / data platform architect — streaming, platform design and governance.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build reliable, cost-efficient data platforms — CDC pipelines, dbt models and data quality checks — and I've cut freshness from a day to minutes while lowering warehouse costs 30%."

Tip: Proof.`, 'B', 'M'],

["SQL", "How do you deduplicate records in a pipeline?",
`**Answer:** Use ROW_NUMBER() OVER (PARTITION BY business_key ORDER BY updated_at DESC) and keep rn = 1, or MERGE with the latest record; define the business key carefully.

Tip: Business key clarity.`, 'B', 'M'],

["Partitioning", "How do you choose partition keys?",
`**Answer:** Based on common query filters (often date), balanced partition sizes (avoid too many small files), and data arrival patterns. Combine with clustering/sort keys for other filters.

Tip: Small files problem.`, 'D', 'M'],

["Small Files", "What is the small files problem?",
`**Answer:** Many tiny files in a data lake slow queries and metadata operations. Fix with compaction (OPTIMIZE in Delta, rewrite in Iceberg), appropriate batch sizes, and partition design.

Tip: Compaction jobs.`, 'D', 'M'],

["Observability", "What is data observability?",
`**Answer:** Monitoring data health — freshness, volume, schema changes, distribution anomalies and lineage — to detect issues before users do. Tools: Monte Carlo, Bigeye, Soda, or custom checks.

Tip: Five pillars.`, 'D', 'M'],

["Reverse ETL", "What is reverse ETL?",
`**Answer:** Syncing modeled data from the warehouse back into operational tools (CRM, marketing platforms, support systems) so teams act on analytics. Tools: Hightouch, Census.

Tip: Operational analytics.`, 'D', 'M'],

["Schema Evolution", "How do you handle schema changes in sources?",
`**Answer:** Detect changes automatically, allow additive changes with schema evolution, alert on breaking changes, version contracts, and coordinate with source owners.

Tip: Contracts and alerts.`, 'D', 'M'],

["Fabric", "What is Microsoft Fabric?",
`**Answer:** Microsoft's unified analytics SaaS combining data engineering, data factory, warehousing, real-time analytics, data science and Power BI on OneLake (a single lake with Delta format).

Tip: Relevant in Microsoft shops.`, 'D', 'M'],

["Databricks", "What is Unity Catalog?",
`**Answer:** Databricks' unified governance layer for data and AI assets — centralized access control, lineage, auditing and discovery across workspaces.

Tip: Governance in lakehouse.`, 'D', 'M']
];
