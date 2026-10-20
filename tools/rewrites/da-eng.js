// Rewritten Data & AI — Data Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-eng-).
module.exports = {

'ETL vs ELT?':
`**Why they ask:** a foundational architecture choice.

**Answer:**
"ETL transforms data before loading it into the warehouse — the traditional approach when warehouse compute was expensive. ELT loads raw data first and transforms inside the warehouse — Snowflake, BigQuery, Databricks — usually with SQL and dbt. ELT is more flexible, keeps the raw history so you can rebuild models, and scales with cloud compute. It's the modern default."

Tip: ELT with dbt is the modern default.`,

'Data warehouse vs data lake vs lakehouse?':
`**Why they ask:** platform understanding.

**Answer:**
"A warehouse holds structured, modeled data optimized for SQL analytics — Snowflake, Redshift, BigQuery, Synapse. A lake is cheap storage for raw data in any format — S3 or ADLS. A lakehouse puts warehouse features on lake storage — ACID tables, schema enforcement, time travel — using open table formats like Delta Lake, Apache Iceberg or Hudi, on Databricks, Snowflake or others."

Tip: Mention Iceberg and Delta.`,

'What is the medallion architecture?':
`**Why they ask:** a common pattern.

**Answer:**
"It's layers of data refinement. Bronze is raw ingested data, as it arrived. Silver is cleaned, conformed and deduplicated. Gold is business-level models and aggregates for reporting and ML. Keeping bronze means you can always rebuild silver and gold if logic changes."

Tip: Common in Databricks.`,

'Explain dimensional modeling.':
`**Why they ask:** analytics modeling.

**Answer:**
"It's the Kimball approach. Fact tables store measurable events — sales, clicks — at a defined grain. Dimension tables store the descriptive context — customer, product, date. Star schemas are simple and fast for BI. The first step is always declaring the grain — for example, one row per order line — because everything else depends on it."

Tip: 'Declare the grain.'`,

'What are slowly changing dimensions?':
`**Why they ask:** history handling.

**Answer:**
"Ways to handle changes in dimension attributes. Type 1 overwrites — no history. Type 2 adds a new row with effective dates and a current flag — full history. Type 3 adds a column for the previous value — limited history. Type 2 is most common for analytics, so if a customer moves region, past sales stay with the old region."

Tip: SCD2 with valid_from and valid_to.`,

'How do you write efficient SQL for large datasets?':
`**Why they ask:** cost and performance.

**Answer:**
"Filter early, select only the columns I need — columnar storage only reads those — use partition and cluster pruning, avoid SELECT star, unnecessary DISTINCT and accidental cross joins, pre-aggregate, use window functions instead of self-joins, and check the query profile. Filtering on the partition column can turn a terabyte scan into gigabytes."

Tip: Partition pruning.`,

'How do you design a reliable data pipeline?':
`**Why they ask:** reliability is the job.

**Answer:**
"Idempotent loads — rerunnable without duplicates, using MERGE or partition overwrite. Incremental processing with watermarks. Schema validation and data quality checks. Retries with alerting. Backfill capability. Lineage and logging. And agreed SLAs for freshness. Idempotency matters most — it makes every recovery safe."

Tip: Idempotency is key.`,

'How do you handle incremental loads?':
`**Why they ask:** efficiency.

**Answer:**
"Track a high-water mark — an updated_at timestamp or an ID — or use change data capture. Load only new or changed records, MERGE them into the target, and handle late-arriving data and deletes, either as soft deletes or CDC delete events. Deletes are the part most often missed."

Tip: Deletes are often missed.`,

'What is change data capture?':
`**Why they ask:** a common ingestion pattern.

**Answer:**
"It captures inserts, updates and deletes from source databases as they happen, usually by reading the transaction log, with tools like Debezium, Fivetran, AWS DMS or GoldenGate, and streams the changes to a warehouse or lake. Log-based CDC has very low impact on the source and gives near-real-time data."

Tip: Log-based CDC.`,

'What is Airflow and how do you use it?':
`**Why they ask:** orchestration.

**Answer:**
"Apache Airflow orchestrates workflows as DAGs of tasks with dependencies, schedules, retries, alerting and backfills. I keep tasks idempotent, avoid heavy processing in the scheduler, and use sensors carefully. Alternatives include Dagster, with its asset-based approach, Prefect, and cloud tools like Azure Data Factory or Step Functions."

Tip: Mention Dagster's asset-based approach.`,

'What is dbt and why is it popular?':
`**Why they ask:** a standard modern tool.

**Answer:**
"dbt lets you write transformations as SQL SELECT models. It manages dependencies between them, tests — unique, not_null, relationships, custom — documentation, lineage and incremental models, all in version control with CI. It brings software engineering practices to analytics work."

Tip: Tests and lineage.`,

'What is Apache Spark and when do you use it?':
`**Why they ask:** distributed processing.

**Answer:**
"A distributed engine for large-scale batch and streaming data, with DataFrames and Spark SQL. I use it when data or computation is too big for a single machine, or warehouse SQL isn't suitable — complex transformations or ML feature engineering. Common on Databricks, EMR and Synapse. But if warehouse SQL can do it, that's usually simpler."

Tip: Know when SQL is enough.`,

'How do you optimize a slow Spark job?':
`**Why they ask:** practical Spark skill.

**Answer:**
"Check the Spark UI for skewed or slow stages. Reduce shuffles — broadcast small tables in joins. Handle data skew with salting or adaptive query execution. Right-size partitions, cache data that's reused, use Parquet with partition pruning, and replace Python UDFs with native functions. Skew and shuffles cause most slow jobs."

Tip: Skew and shuffle.`,

'Batch vs streaming — when do you choose streaming?':
`**Why they ask:** architecture judgment.

**Answer:**
"Streaming when low latency really matters — fraud detection, real-time dashboards, personalization, alerting. Batch is simpler and cheaper for daily reporting. Streaming tools include Kafka, Kinesis, Flink and Spark Structured Streaming, with extra complexity — exactly-once semantics, late data and windowing. Don't stream if daily is fine."

Tip: 'Don't stream if daily is fine.'`,

'How do you handle late-arriving data in streaming?':
`**Why they ask:** streaming depth.

**Answer:**
"Use event time, not processing time. Set watermarks that define how late data can still be accepted, use windowed aggregations that update when late events arrive, and run a reconciliation batch for anything very late."

Tip: Event time versus processing time.`,

'What are Kafka topics, partitions and consumer groups?':
`**Why they ask:** streaming basics.

**Answer:**
"A topic is a named stream of events, split into partitions for parallelism. Order is guaranteed only within a partition, so the partition key decides ordering — for example, keying by customer ID keeps each customer's events in order. Consumer groups share the partitions so each message is processed by one consumer in the group. Retention allows replay."

Tip: The partition key determines ordering.`,

'How do you ensure data quality?':
`**Why they ask:** trust in data.

**Answer:**
"Tests at ingestion and transformation — schema, nulls, uniqueness, ranges, referential integrity, freshness and volume anomalies — using dbt tests, Great Expectations or Soda. Data contracts with producers. Monitoring and alerting. And clear ownership of each dataset."

Tip: Data contracts.`,

'What is a data contract?':
`**Why they ask:** shift-left quality.

**Answer:**
"An agreement between data producers and consumers defining a dataset's schema, meaning, quality expectations and SLAs, enforced in CI or at ingestion. It stops an upstream team from renaming a column and silently breaking ten pipelines."

Tip: Shift-left data quality.`,

'Why use Parquet?':
`**Why they ask:** storage formats.

**Answer:**
"It's columnar, with compression and encoding, so queries read only the columns they need — much less I/O and cost. It supports predicate pushdown and carries its schema. For analytics it's far better than CSV or JSON."

Tip: Columnar benefits.`,

'What do Delta Lake and Iceberg provide?':
`**Why they ask:** lakehouse foundations.

**Answer:**
"ACID transactions on data lake files, schema enforcement and evolution, time travel, efficient upserts and deletes with MERGE, and partition evolution. They make a data lake reliable enough for analytics — no more half-written files."

Tip: Open table formats.`,

'Which cloud data services have you used?':
`**Why they ask:** platform experience.

**Answer:**
"On AWS: S3, Glue, Redshift and Kinesis. On Azure: ADLS, Data Factory and Synapse, now Fabric. Plus Snowflake and Databricks across clouds."

Tip: Name what you built — swap in your own stack.`,

'What are key Snowflake concepts?':
`**Why they ask:** a popular platform.

**Answer:**
"Separation of storage and compute; virtual warehouses that scale independently; micro-partitions and clustering; time travel and zero-copy cloning; secure data sharing; and per-second compute billing. Cost control comes from auto-suspend, right-sizing warehouses and watching expensive queries."

Tip: Cost control.`,

'How do you control data platform costs?':
`**Why they ask:** data costs grow fast.

**Answer:**
"Right-size compute and use auto-suspend, partition and cluster to reduce data scanned, use incremental models instead of full rebuilds, apply storage lifecycle policies, monitor the most expensive queries, and tag costs by team so each team sees its own spend."

Tip: FinOps for data.`,

'How do you secure data platforms?':
`**Why they ask:** data protection.

**Answer:**
"Role-based access with least privilege, column- and row-level security and masking for sensitive data, encryption in transit and at rest, secrets management, audit logging, and compliance with GDPR or HIPAA as relevant. Masking PII by default is the single biggest win."

Tip: Mask PII.`,

'What is data lineage and why does it matter?':
`**Why they ask:** trust and change safety.

**Answer:**
"It tracks where data comes from, how it's transformed, and where it's used. It helps impact analysis before changes, debugging, trust and compliance. Tools include dbt docs, OpenLineage, Unity Catalog, Purview and data catalogs."

Tip: Impact analysis before changes.`,

'How do you test data pipelines?':
`**Why they ask:** engineering rigor.

**Answer:**
"Unit tests for transformation logic, data tests on outputs, integration tests with sample data, CI that builds and tests changed dbt models, and comparing outputs before and after a change with a data diff."

Tip: Data diff in CI.`,

'Which Python skills matter for data engineering?':
`**Why they ask:** coding depth.

**Answer:**
"pandas or Polars for smaller data, PySpark for big data, writing robust ingestion scripts that handle APIs, pagination and retries, plus packaging, testing with pytest, and type hints."

Tip: Polars is gaining adoption.`,

'How do you ingest data from a REST API reliably?':
`**Why they ask:** a common task.

**Answer:**
"Handle authentication, pagination, rate limits with exponential backoff, incremental extraction using something like updated_since, retries and schema changes. And land the raw responses before transforming, so I can reprocess without calling the API again. Managed connectors like Fivetran or Airbyte are often worth it."

Tip: Land raw first.`,

'How do you run a backfill safely?':
`**Why they ask:** operational maturity.

**Answer:**
"Pipelines parameterized by date range and idempotent, run in batches, with resource usage and cost monitored, results validated, and care not to overwhelm source systems — backfilling a year at once can take down a production database."

Tip: Idempotency enables backfills.`,

'Tell me about a pipeline you built.':
`**Why they ask:** proof.

**Answer:**
"I built CDC pipelines from 12 PostgreSQL databases into Snowflake using Debezium and Kafka, with dbt models for the silver and gold layers. Data freshness went from daily to about 10 minutes, and finance reporting moved off spreadsheets."

Tip: Scale and impact.`,

'Tell me about a data quality incident.':
`**Why they ask:** detection and prevention.

**Answer:**
"A source system changed a status code, and revenue dashboards dropped 30% overnight. I fixed the mapping, then added accepted-values tests and volume anomaly alerts, and set up a data contract with the source team so changes come with notice."

Tip: Detection and prevention.`,

'How do you work with analysts and data scientists?':
`**Why they ask:** collaboration.

**Answer:**
"I understand their use cases and SLAs, provide well-documented models, give them self-service access, and keep fast feedback loops for issues. I treat datasets as products with users."

Tip: Data as a product.`,

'How do data engineers support AI and LLM projects?':
`**Why they ask:** current relevance.

**Answer:**
"By building pipelines for unstructured data — document parsing, chunking and embeddings — vector stores or vector search in existing platforms, feature pipelines for ML, data quality and lineage for training data, and governance over what data AI systems can access."

Tip: Unstructured data pipelines.`,

'What is data mesh?':
`**Why they ask:** organizational architecture.

**Answer:**
"An organizational approach where domain teams own their data as products, supported by a self-service platform and federated governance. It addresses the central data team bottleneck, but needs mature domain teams. It's socio-technical, not a tool you buy."

Tip: Socio-technical, not a tool.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior or staff data engineer, or data platform architect — streaming, platform design and governance."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build reliable, cost-efficient data platforms — CDC pipelines, dbt models and data quality checks. I've cut freshness from a day to minutes while lowering warehouse costs 30%."

Tip: Proof.`,

'How do you deduplicate records in a pipeline?':
`**Why they ask:** a common task.

**Answer:**
"ROW_NUMBER() OVER (PARTITION BY business_key ORDER BY updated_at DESC), keeping row number 1 — the latest version of each key — or a MERGE with the latest record. The key step is defining the business key correctly."

Tip: Business key clarity.`,

'How do you choose partition keys?':
`**Why they ask:** performance design.

**Answer:**
"Based on the most common query filters — usually date — with balanced partition sizes to avoid lots of tiny files, and matching how data arrives. Then add clustering or sort keys for other common filters."

Tip: Watch the small files problem.`,

'What is the small files problem?':
`**Why they ask:** lake performance.

**Answer:**
"Lots of tiny files in a data lake slow down queries and metadata operations. I fix it with compaction — OPTIMIZE in Delta or rewrite in Iceberg — sensible batch sizes and better partition design."

Tip: Run compaction jobs.`,

'What is data observability?':
`**Why they ask:** proactive monitoring.

**Answer:**
"Monitoring data health — freshness, volume, schema changes, distribution anomalies and lineage — so problems are caught before users notice. Tools include Monte Carlo, Bigeye, Soda, or custom checks."

Tip: Know the five pillars.`,

'What is reverse ETL?':
`**Why they ask:** operational analytics.

**Answer:**
"Syncing modeled data from the warehouse back into operational tools — CRM, marketing platforms, support systems — so teams act on analytics where they work. Tools include Hightouch and Census. For example, pushing a churn-risk score into Salesforce."

Tip: Operational analytics.`,

'How do you handle schema changes in sources?':
`**Why they ask:** pipeline resilience.

**Answer:**
"Detect them automatically, allow additive changes through schema evolution, alert on breaking changes, version the contracts, and coordinate with source owners."

Tip: Contracts and alerts.`,

'What is Microsoft Fabric?':
`**Why they ask:** Microsoft platform awareness.

**Answer:**
"Microsoft's unified analytics SaaS — data engineering, Data Factory, warehousing, real-time analytics, data science and Power BI — all on OneLake, a single lake using Delta format."

Tip: Relevant in Microsoft shops.`,

'What is Unity Catalog?':
`**Why they ask:** lakehouse governance.

**Answer:**
"Databricks' unified governance layer for data and AI assets — centralized access control, lineage, auditing and discovery across workspaces."

Tip: Governance in the lakehouse.`,

'How do you design a pipeline SLA?':
`**Why they ask:** reliability commitments.

**Answer:**
"Agree with consumers on freshness — say data available by 7 a.m. — plus completeness and quality thresholds. Monitor each stage, alert before the SLA is missed rather than after, and document escalation and recovery steps."

Tip: Alert on predicted misses.`,

'What is the Lambda vs Kappa architecture?':
`**Why they ask:** architecture patterns.

**Answer:**
"Lambda runs a batch layer and a streaming speed layer in parallel and merges the results — accurate, but you maintain the logic twice. Kappa uses only streaming and replays the log for reprocessing — one code path. Modern lakehouse engines that unify batch and streaming blur the line."

Tip: The duplication trade-off.`,

'How do you implement an upsert (MERGE) in a warehouse?':
`**Why they ask:** a core load pattern.

**Answer:**
"MERGE INTO target t USING staging s ON t.id = s.id WHEN MATCHED THEN UPDATE SET the columns WHEN NOT MATCHED THEN INSERT the row. I deduplicate the staging data first so each key appears only once — otherwise the MERGE fails or picks randomly — and handle deletes with a flag or a WHEN MATCHED AND s.is_deleted THEN DELETE clause."

Tip: Deduplicate the source first.`,

'How do you handle dependencies between pipelines owned by different teams?':
`**Why they ask:** cross-team coordination.

**Answer:**
"Data-aware scheduling — triggering on dataset updates instead of fixed times — sensors or events, published SLAs and contracts, and shared lineage so owners see who's downstream."

Tip: Dataset-triggered scheduling.`,

'How do you prioritize data engineering requests?':
`**Why they ask:** workload management.

**Answer:**
"By business impact, number of consumers, urgency and effort. I keep a visible backlog, reserve capacity for reliability work, and agree priorities with stakeholders regularly."

Tip: Protect reliability work.`,

};
