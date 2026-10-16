// da-ae — generated from src/da-ae-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Analytics Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-ae'] = [
["Role", "What does an analytics engineer do?",
`**Why they ask:** the role sits between data engineering and analysis.

**Answer:** Transforms raw data into clean, tested, well-documented data models that analysts and business users can trust — typically with SQL and dbt in a cloud warehouse. Owns business logic definitions, metric consistency, data tests, documentation and the semantic layer, applying software engineering practices (version control, CI, code review) to analytics.

Tip: "Single source of truth for metrics."`, 'B', 'E'],

["dbt", "What are dbt models, sources and refs?",
`**Answer:** **Sources** declare raw tables loaded into the warehouse. **Models** are SELECT statements that dbt materializes as views or tables. **ref()** links models so dbt builds a dependency graph (DAG) and runs them in order; **source()** references raw data and enables freshness checks.

Tip: ref() enables lineage.`, 'B', 'E'],

["dbt", "What materializations does dbt support?",
`**Answer:** view (fast to build, computed at query time), table (rebuilt fully), incremental (only new/changed rows — for large tables), ephemeral (inlined CTE), and snapshots for SCD Type 2 history. Choose by size, freshness and query cost.

Tip: Incremental for big facts.`, 'B', 'M'],

["dbt", "How do incremental models work?",
`**Answer:** On first run, build the full table; afterward, process only new or changed records using is_incremental() filters (e.g. updated_at > max in target) and merge or append into the table. Handle late-arriving data with a lookback window and use unique_key for merges.

Tip: Lookback windows.`, 'D', 'M'],

["dbt", "How do you test data in dbt?",
`**Answer:** Generic tests (unique, not_null, accepted_values, relationships), packages like dbt-utils/dbt-expectations, custom singular tests (SQL returning failing rows), source freshness checks, and model contracts for enforced schemas.

Tip: Tests on primary keys at minimum.`, 'B', 'M'],

["dbt", "How do you structure a dbt project?",
`**Answer:** Layers: **staging** (one model per source table — renaming, casting, light cleaning), **intermediate** (business logic joins), **marts** (facts and dimensions for consumption, organized by domain). Consistent naming (stg_, int_, fct_, dim_), documentation and tests at each layer.

Tip: Staging is 1:1 with sources.`, 'B', 'M'],

["dbt", "What are dbt snapshots?",
`**Answer:** A way to capture changes in mutable source tables over time (SCD Type 2), adding dbt_valid_from and dbt_valid_to columns using timestamp or check strategies.

Tip: History of changing records.`, 'D', 'M'],

["Modeling", "How do you design fact and dimension tables?",
`**Answer:** Declare the fact table's grain (e.g. one row per order line), include foreign keys to dimensions and additive measures; dimensions hold descriptive attributes and handle history (SCD2) where needed. Conformed dimensions are shared across facts.

Tip: Grain first.`, 'B', 'M'],

["Modeling", "Wide tables vs star schemas — which do you prefer?",
`**Answer:** Star schemas are flexible and reduce duplication; wide, denormalized "one big tables" are easier for BI users and fast in columnar warehouses. Many teams build star schemas and expose wide marts for specific use cases.

Tip: Pragmatic balance.`, 'D', 'M'],

["Metrics", "What is a semantic layer?",
`**Answer:** A layer that defines metrics, dimensions and relationships once (e.g. dbt Semantic Layer/MetricFlow, LookML, Cube, Power BI semantic models) so every tool calculates "revenue" or "active users" the same way.

Tip: Consistent metrics everywhere.`, 'D', 'M'],

["Metrics", "How do you resolve conflicting metric definitions?",
`**Answer:** Bring stakeholders together, document each definition and its purpose, agree a canonical definition (with variants explicitly named if needed), implement it in the semantic layer or models, and communicate it in a metrics glossary.

Tip: Governance through documentation.`, 'B', 'M'],

["SQL", "What SQL patterns do you use most?",
`**Answer:** CTEs for readability, window functions (deduplication, running totals, sessionization), conditional aggregation (SUM(CASE WHEN...)), date spines for gap filling, and careful join logic to avoid fan-out.

Tip: Join fan-out awareness.`, 'B', 'M'],

["SQL", "What is join fan-out and how do you avoid it?",
`**Answer:** Joining tables at different grains duplicates rows and inflates sums (e.g. joining orders to order lines then summing order totals). Avoid by aggregating to the correct grain before joining and testing row counts/uniqueness.

Tip: Uniqueness tests catch it.`, 'D', 'M'],

["SQL", "How do you sessionize event data?",
`**Answer:** Order events per user, use LAG to compute time since previous event, flag a new session when the gap exceeds a threshold (e.g. 30 minutes), then use a running SUM of flags to assign session IDs.

Tip: Classic analytics engineering question.`, 'D', 'M'],

["Version Control", "How do you use Git in analytics engineering?",
`**Answer:** Feature branches, pull requests with code review, CI running dbt build on changed models (slim CI with state comparison), and deployments through environments (dev → prod).

Tip: Slim CI.`, 'B', 'M'],

["CI", "What should dbt CI check?",
`**Answer:** Compilation, building and testing modified models and their downstream dependents in a CI schema, linting SQL (SQLFluff), documentation coverage, and optionally data diffs comparing results with production.

Tip: Data diffs catch logic changes.`, 'D', 'M'],

["Performance", "How do you optimize slow models?",
`**Answer:** Incremental materialization, filtering early, avoiding unnecessary DISTINCT and cross joins, partitioning/clustering in the warehouse, pre-aggregating, and checking query profiles.

Tip: Query profile analysis.`, 'D', 'M'],

["Documentation", "How do you document data models?",
`**Answer:** YAML descriptions for models and columns in dbt, doc blocks for shared definitions, generated dbt docs with lineage, and a data catalog. Write descriptions for business users, not just engineers.

Tip: Business-friendly descriptions.`, 'B', 'E'],

["Data Quality", "How do you handle data quality issues from sources?",
`**Answer:** Test at staging, alert owners, quarantine bad records where appropriate, communicate impact to consumers, and work with source teams on data contracts.

Tip: Communication matters.`, 'B', 'M'],

["BI", "How do you support BI tools?",
`**Answer:** Provide clean marts with clear grain and naming, consistent metric definitions, row-level security where needed, and performance tuning for dashboard queries.

Tip: Design for the end user.`, 'B', 'M'],

["Stakeholders", "How do you gather requirements for a new data model?",
`**Answer:** Understand the questions stakeholders need answered, decisions they'll make, metrics and definitions, granularity, refresh frequency, and access needs — then prototype and iterate.

Tip: Start from questions.`, 'B', 'M'],

["Reverse ETL", "How does analytics engineering support operational tools?",
`**Answer:** Build trusted models (customer health scores, segments) that reverse ETL tools sync into CRM, marketing and support systems.

Tip: Activation.`, 'D', 'M'],

["Governance", "How do you handle PII in models?",
`**Answer:** Mask or hash sensitive columns, restrict access via roles and row/column policies, keep PII in limited models, and document classifications.

Tip: Least privilege.`, 'B', 'M'],

["Warehouses", "Which warehouses have you used and what differs?",
`**Answer:** Snowflake (separate compute warehouses, easy scaling), BigQuery (serverless, pay per bytes scanned — partition/cluster to control cost), Redshift (cluster-based, distribution/sort keys), Databricks SQL (lakehouse). Optimize differently for each.

Tip: Cost models differ.`, 'D', 'M'],

["Cost", "How do you control warehouse cost from dbt?",
`**Answer:** Incremental models, appropriate materializations, avoiding full refreshes, scheduling jobs sensibly, right-sized warehouses, query tagging to track cost by model, and removing unused models.

Tip: Unused models cost money.`, 'D', 'M'],

["Orchestration", "How do you schedule dbt runs?",
`**Answer:** dbt Cloud jobs, or orchestrators (Airflow, Dagster, Prefect) triggering dbt after ingestion completes, with source freshness checks, retries and alerts.

Tip: Trigger on data arrival.`, 'B', 'M'],

["Testing", "What's the difference between data tests and unit tests in dbt?",
`**Answer:** Data tests validate actual data in tables (uniqueness, nulls). Unit tests (dbt 1.8+) validate model logic with mocked input rows and expected outputs, independent of production data.

Tip: Unit tests for complex logic.`, 'D', 'M'],

["Behavioral", "Tell me about a data model you built that had impact.",
`**Sample answer:** "Finance and sales used different revenue numbers. I built a unified revenue mart in dbt with tested logic for refunds, discounts and currency, documented in the semantic layer. Monthly reconciliation time dropped from three days to one hour."

Tip: Trust and time saved.`, 'B', 'M'],

["Behavioral", "Tell me about catching a data issue before stakeholders did.",
`**Sample answer:** "A relationships test failed after a source added a new customer type, which would have dropped 8% of orders from dashboards. I fixed the mapping before the morning refresh and added accepted_values tests."

Tip: Proactive quality.`, 'B', 'M'],

["Behavioral", "How do you balance speed with rigor?",
`**Answer:** Prototype quickly with clear caveats, then harden models used for decisions with tests and documentation before wide release.

Tip: Label prototypes.`, 'B', 'M'],

["AI", "How does AI affect analytics engineering?",
`**Answer:** AI assistants generate SQL and documentation, and natural-language BI depends heavily on well-modeled, well-documented data and semantic layers — making analytics engineering more important for trustworthy AI answers.

Tip: Semantic layer for AI.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior analytics engineer or data platform/architecture roles — semantic layers, governance and data product strategy.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build trusted, tested data models that end metric debates — my revenue mart cut reconciliation from three days to an hour — and I bring software engineering discipline to analytics."

Tip: Proof.`, 'B', 'M'],

["Jinja", "How do you use Jinja and macros in dbt?",
`**Answer:** Jinja templates add logic (loops, conditionals, variables) to SQL; macros create reusable SQL functions (e.g. currency conversion, date spines, grant statements). Keep macros simple and documented.

Tip: Don't over-abstract.`, 'D', 'M'],

["Packages", "Which dbt packages do you use?",
`**Answer:** dbt-utils (generic helpers), dbt-expectations (rich tests), dbt-date, codegen (scaffolding), and audit helpers for comparing results.

Tip: Practical tools.`, 'B', 'M'],

["Date Spine", "What is a date spine and why use it?",
`**Answer:** A table of continuous dates used to fill gaps — e.g. showing zero sales on days with no orders and computing daily metrics accurately.

Tip: Gap filling.`, 'B', 'M'],

["Exposures", "What are dbt exposures?",
`**Answer:** Declarations of downstream uses (dashboards, ML models, apps) in dbt, adding them to lineage so you know what breaks when models change.

Tip: Impact analysis.`, 'D', 'M'],

["Contracts", "What are dbt model contracts?",
`**Answer:** Enforced schemas (column names, types, constraints) for models; builds fail if the output doesn't match — protecting downstream consumers.

Tip: Data contracts in dbt.`, 'D', 'M'],

["Naming", "Why do naming conventions matter?",
`**Answer:** Consistent prefixes (stg_, int_, fct_, dim_), clear column names (is_, has_, _at for timestamps, _id for keys) make models discoverable and reduce errors.

Tip: Consistency.`, 'B', 'E'],

["Mesh", "What is dbt Mesh?",
`**Answer:** A way to split large dbt projects into multiple projects owned by different teams, with cross-project references, model access levels, versions and contracts.

Tip: Scaling dbt.`, 'D', 'S'],

["Timezones", "How do you handle time zones in models?",
`**Answer:** Store timestamps in UTC, convert to local time in marts where needed, and document which time zone each date field uses — especially for daily reporting.

Tip: Daily boundaries.`, 'B', 'M'],

["Currency", "How do you handle multi-currency reporting?",
`**Answer:** Store transaction currency and amount, join to daily or monthly exchange rates, and provide reporting-currency columns with documented rate logic.

Tip: Rate type consistency.`, 'D', 'M'],

["Ownership", "How do you assign ownership of data models?",
`**Answer:** Define owners per domain or mart in metadata, set up alerting to owners, and include ownership in documentation and catalog.

Tip: Accountability.`, 'B', 'M'],

["Linting", "Why lint SQL?",
`**Answer:** Consistent style improves readability and reviews; tools like SQLFluff enforce rules automatically in CI.

Tip: Automate style.`, 'B', 'E'],

["Refactoring", "How do you refactor legacy SQL into dbt?",
`**Answer:** Inventory existing queries, rebuild in layers with tests, compare outputs against legacy results (audit helper), migrate consumers, then retire old queries.

Tip: Compare outputs.`, 'D', 'M']
];

QB['da-ae'] = (QB['da-ae'] || []).concat([
["Modeling", "How do you model subscription revenue (MRR)?",
`**Answer:** Build a subscription-level model with start/end dates and amounts, explode to monthly grain with a date spine, then classify movements per customer month: new, expansion, contraction, churn, reactivation. Test that movements reconcile to MRR changes.

Tip: Reconciliation test.`, 'D', 'M'],
["Modeling", "What is a surrogate key and when do you use it?",
`**Answer:** A system-generated key (often a hash of business keys via dbt_utils.generate_surrogate_key) used as the primary key in models — stable across sources and useful for SCD2 rows or composite natural keys.

Tip: Hash of business keys.`, 'B', 'M'],
["Collaboration", "How do you work with data engineers?",
`**Answer:** Engineers own ingestion and platform reliability; analytics engineers own business transformations and definitions. Agree on raw data contracts, freshness SLAs and where logic lives.

Tip: Clear boundaries.`, 'B', 'E'],
["Performance", "How do you decide between views and tables in marts?",
`**Answer:** Views for lightweight, rarely queried or fast logic; tables (or incremental) for heavy joins and frequently queried marts to avoid repeated compute. Measure query costs and dashboard latency.

Tip: Cost and latency.`, 'B', 'M'],
["Stakeholders", "How do you explain a metric change to business users?",
`**Answer:** Show the definition change or data change clearly, compare old vs new values side by side, explain why the new version is more accurate, and communicate before the release.

Tip: No surprises.`, 'B', 'M']
]);
