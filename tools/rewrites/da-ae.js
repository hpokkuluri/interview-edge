// Rewritten Data & AI — Analytics Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-ae-).
module.exports = {

'What are dbt models, sources and refs?':
`**Why they ask:** dbt fundamentals.

**Answer:**
"Sources declare the raw tables loaded into the warehouse. Models are SELECT statements that dbt materializes as views or tables. ref() links models to each other, so dbt builds a dependency graph and runs everything in the right order. source() references raw data and enables freshness checks. Using ref() everywhere is what gives you lineage."

Tip: ref() enables lineage.`,

'What materializations does dbt support?':
`**Why they ask:** performance and cost choices.

**Answer:**
"View — fast to build, computed at query time. Table — rebuilt fully each run. Incremental — processes only new or changed rows, for large tables. Ephemeral — inlined as a CTE. And snapshots for SCD Type 2 history. I choose by size, freshness needs and query cost — incremental for big fact tables."

Tip: Incremental for big facts.`,

'How do incremental models work?':
`**Why they ask:** large table handling.

**Answer:**
"On the first run, dbt builds the full table. After that, the is_incremental() block filters to only new or changed records — for example, updated_at greater than the max already in the target — and merges or appends them. I set a unique_key for merges and use a lookback window, like three days, to catch late-arriving data."

Tip: Use lookback windows.`,

'How do you test data in dbt?':
`**Why they ask:** quality discipline.

**Answer:**
"Generic tests — unique, not_null, accepted_values, relationships — packages like dbt-utils and dbt-expectations, custom singular tests that return failing rows, source freshness checks, and model contracts that enforce schemas. At a minimum, every model's primary key gets unique and not_null tests."

Tip: Test primary keys at minimum.`,

'How do you structure a dbt project?':
`**Why they ask:** maintainability.

**Answer:**
"Three layers. Staging — one model per source table, just renaming, casting and light cleaning. Intermediate — business logic and joins. Marts — facts and dimensions for consumption, organized by domain. With consistent naming — stg_, int_, fct_, dim_ — and documentation and tests at each layer."

Tip: Staging is one-to-one with sources.`,

'What are dbt snapshots?':
`**Why they ask:** history tracking.

**Answer:**
"They capture changes in mutable source tables over time as SCD Type 2, adding dbt_valid_from and dbt_valid_to columns, using either a timestamp strategy or a check strategy on chosen columns. They're how you keep history of records the source system overwrites."

Tip: History of changing records.`,

'How do you design fact and dimension tables?':
`**Why they ask:** dimensional modeling.

**Answer:**
"First declare the fact table's grain — say one row per order line. Then include foreign keys to dimensions and additive measures. Dimensions hold descriptive attributes and track history with SCD2 where needed. Conformed dimensions, like customer and date, are shared across facts so reports line up."

Tip: Grain first.`,

'Wide tables vs star schemas — which do you prefer?':
`**Why they ask:** pragmatism.

**Answer:**
"Star schemas are flexible and reduce duplication. Wide, denormalized 'one big tables' are easier for BI users and fast in columnar warehouses. Many teams, including mine, build a star schema underneath and expose wide marts for specific use cases."

Tip: A pragmatic balance.`,

'What is a semantic layer?':
`**Why they ask:** metric consistency.

**Answer:**
"A layer that defines metrics, dimensions and relationships once — dbt's Semantic Layer with MetricFlow, LookML, Cube, or Power BI semantic models — so every tool calculates 'revenue' or 'active users' the same way. No more three versions of revenue in three dashboards."

Tip: Consistent metrics everywhere.`,

'How do you resolve conflicting metric definitions?':
`**Why they ask:** a constant analytics problem.

**Answer:**
"Bring the stakeholders together, document each definition and why it exists, agree a canonical definition — with variants explicitly named if they're really needed, like 'gross revenue' and 'net revenue' — implement it in the semantic layer or models, and publish it in a metrics glossary."

Tip: Governance through documentation.`,

'What SQL patterns do you use most?':
`**Why they ask:** practical SQL depth.

**Answer:**
"CTEs for readability, window functions for deduplication, running totals and sessionization, conditional aggregation with SUM(CASE WHEN ...), date spines for gap filling, and careful join logic to avoid fan-out."

Tip: Know join fan-out.`,

'What is join fan-out and how do you avoid it?':
`**Why they ask:** a classic data bug.

**Answer:**
"It's when joining tables at different grains duplicates rows and inflates sums. For example, joining orders to order lines and then summing the order total counts each order once per line. I avoid it by aggregating to the right grain before joining, and testing row counts and uniqueness after joins."

Tip: Uniqueness tests catch it.`,

'How do you sessionize event data?':
`**Why they ask:** a classic analytics engineering question.

**Answer:**
"Order each user's events by time, use LAG to get the time since their previous event, and flag a new session when the gap is over a threshold — say 30 minutes. Then a running SUM of those flags per user gives each event a session number."

Tip: A classic question — practice it.`,

'How do you use Git in analytics engineering?':
`**Why they ask:** engineering practice.

**Answer:**
"Feature branches, pull requests with code review, CI that builds only the changed models and their dependents — slim CI using state comparison — and deployments through environments, dev to prod."

Tip: Mention slim CI.`,

'What should dbt CI check?':
`**Why they ask:** quality gates.

**Answer:**
"That the project compiles, that modified models and their downstream dependents build and pass tests in a CI schema, SQL linting with SQLFluff, documentation coverage, and optionally a data diff against production to catch unintended logic changes."

Tip: Data diffs catch logic changes.`,

'How do you optimize slow models?':
`**Why they ask:** cost and speed.

**Answer:**
"Incremental materialization, filtering early, removing unnecessary DISTINCT and cross joins, using partitioning and clustering in the warehouse, pre-aggregating, and reading the query profile to find the expensive step."

Tip: Analyze the query profile.`,

'How do you document data models?':
`**Why they ask:** usability.

**Answer:**
"YAML descriptions for models and columns, doc blocks for shared definitions, generated dbt docs with lineage, and a data catalog. And I write descriptions for business users, not just engineers — 'Revenue after refunds, in USD, recognized at shipment.'"

Tip: Business-friendly descriptions.`,

'How do you handle data quality issues from sources?':
`**Why they ask:** source reality.

**Answer:**
"Test at the staging layer, alert the owners, quarantine bad records where it makes sense, tell consumers about the impact before they find it, and work with source teams on data contracts."

Tip: Communication matters.`,

'How do you support BI tools?':
`**Why they ask:** serving the end user.

**Answer:**
"Clean marts with clear grain and naming, consistent metric definitions, row-level security where needed, and performance tuning for the queries dashboards actually run."

Tip: Design for the end user.`,

'How do you gather requirements for a new data model?':
`**Why they ask:** building the right thing.

**Answer:**
"I start from the questions stakeholders need answered and the decisions they'll make, then pin down metrics and definitions, granularity, refresh frequency and access needs. Then prototype and iterate with them."

Tip: Start from questions.`,

'How does analytics engineering support operational tools?':
`**Why they ask:** data activation.

**Answer:**
"By building trusted models — customer health scores, segments — that reverse ETL tools sync into CRM, marketing and support systems, so teams act on the data inside the tools they use."

Tip: Activation.`,

'How do you handle PII in models?':
`**Why they ask:** privacy.

**Answer:**
"Mask or hash sensitive columns, restrict access with roles and row or column policies, keep PII in a few limited models, and document the data classifications."

Tip: Least privilege.`,

'Which warehouses have you used and what differs?':
`**Why they ask:** platform depth.

**Answer:**
"Snowflake — separate compute warehouses, easy scaling. BigQuery — serverless, billed per bytes scanned, so partitioning and clustering directly control cost. Redshift — cluster-based, with distribution and sort keys. Databricks SQL — lakehouse. Each is optimized differently because the cost models differ."

Tip: Cost models differ.`,

'How do you control warehouse cost from dbt?':
`**Why they ask:** cost ownership.

**Answer:**
"Incremental models, the right materializations, avoiding unnecessary full refreshes, sensible job scheduling, right-sized warehouses, query tagging to track cost by model, and removing models nobody uses — they still cost money every run."

Tip: Unused models cost money.`,

'How do you schedule dbt runs?':
`**Why they ask:** orchestration.

**Answer:**
"dbt Cloud jobs, or an orchestrator — Airflow, Dagster, Prefect — that triggers dbt after ingestion finishes, with source freshness checks, retries and alerts. Triggering on data arrival beats a fixed clock time."

Tip: Trigger on data arrival.`,

"What's the difference between data tests and unit tests in dbt?":
`**Why they ask:** testing depth.

**Answer:**
"Data tests validate the actual data in tables — uniqueness, nulls, relationships. Unit tests, available since dbt 1.8, validate model logic using mocked input rows and expected outputs, independent of production data. I use unit tests for complex logic like revenue allocation."

Tip: Unit tests for complex logic.`,

'Tell me about a data model you built that had impact.':
`**Why they ask:** proof.

**Answer:**
"Finance and sales were reporting different revenue numbers. I built a unified revenue mart in dbt, with tested logic for refunds, discounts and currency, documented in the semantic layer. Monthly reconciliation dropped from three days to one hour."

Tip: Trust and time saved.`,

'Tell me about catching a data issue before stakeholders did.':
`**Why they ask:** proactive quality.

**Answer:**
"A relationships test failed after a source added a new customer type, which would have dropped 8% of orders from the dashboards. I fixed the mapping before the morning refresh and added an accepted_values test on that field."

Tip: Proactive quality.`,

'How do you balance speed with rigor?':
`**Why they ask:** pragmatism.

**Answer:**
"Prototype quickly, with clear caveats on the output. Then, for any model used for real decisions, harden it with tests and documentation before releasing it widely. And label prototypes clearly so nobody mistakes them for certified data."

Tip: Label prototypes.`,

'How does AI affect analytics engineering?':
`**Why they ask:** current awareness.

**Answer:**
"AI assistants generate SQL and documentation, and natural-language BI depends heavily on well-modeled, well-documented data and semantic layers. So analytics engineering becomes more important — an AI answer is only as trustworthy as the model underneath it."

Tip: Semantic layers matter for AI.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior analytics engineer or data architecture — semantic layers, governance and data product strategy."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build trusted, tested data models that end metric debates — my revenue mart cut reconciliation from three days to an hour — and I bring software engineering discipline to analytics."

Tip: Proof.`,

'How do you use Jinja and macros in dbt?':
`**Why they ask:** dbt depth.

**Answer:**
"Jinja adds logic to SQL — loops, conditionals and variables. Macros are reusable SQL functions — currency conversion, date spines, grant statements. I keep macros simple and documented, because over-abstracted SQL is hard for the next person to read."

Tip: Don't over-abstract.`,

'Which dbt packages do you use?':
`**Why they ask:** practical tooling.

**Answer:**
"dbt-utils for generic helpers, dbt-expectations for richer tests, dbt-date, codegen for scaffolding, and audit_helper for comparing results during refactors."

Tip: Practical tools.`,

'What is a date spine and why use it?':
`**Why they ask:** gap filling.

**Answer:**
"A table of continuous dates used to fill gaps — so a day with no orders shows zero sales instead of disappearing, and daily averages and running totals are correct."

Tip: Gap filling.`,

'What are dbt exposures?':
`**Why they ask:** impact analysis.

**Answer:**
"Declarations of downstream uses — dashboards, ML models, apps — inside dbt, so they appear in the lineage graph. Before changing a model, I can see exactly which dashboards it feeds."

Tip: Impact analysis.`,

'What are dbt model contracts?':
`**Why they ask:** protecting consumers.

**Answer:**
"Enforced schemas — column names, data types and constraints — on a model. If the output doesn't match, the build fails, which protects downstream consumers from silent breaking changes."

Tip: Data contracts in dbt.`,

'Why do naming conventions matter?':
`**Why they ask:** maintainability.

**Answer:**
"Consistent prefixes — stg_, int_, fct_, dim_ — and clear column names — is_ and has_ for booleans, _at for timestamps, _id for keys — make models discoverable and reduce mistakes, especially as the team grows."

Tip: Consistency.`,

'What is dbt Mesh?':
`**Why they ask:** scaling dbt.

**Answer:**
"A way to split a large dbt project into multiple projects owned by different teams, with cross-project references, model access levels, versions and contracts — so a finance team can depend on a marketing team's model without one giant monolith."

Tip: Scaling dbt.`,

'How do you handle time zones in models?':
`**Why they ask:** a common daily-reporting bug.

**Answer:**
"Store timestamps in UTC, convert to local time in the marts where it matters, and document which time zone each date field uses. Otherwise an order at 11 p.m. Eastern lands on the next day in UTC reporting."

Tip: Watch daily boundaries.`,

'How do you handle multi-currency reporting?':
`**Why they ask:** global data.

**Answer:**
"Store the transaction currency and amount, join to daily or monthly exchange rates, and provide reporting-currency columns with the rate logic documented — and use the same rate type finance uses, or numbers won't reconcile."

Tip: Rate type consistency.`,

'How do you assign ownership of data models?':
`**Why they ask:** accountability.

**Answer:**
"Define owners per domain or mart in metadata, route alerts to those owners, and show ownership in the documentation and catalog."

Tip: Accountability.`,

'Why lint SQL?':
`**Why they ask:** code quality.

**Answer:**
"Consistent style makes SQL easier to read and review. Tools like SQLFluff enforce the rules automatically in CI, so reviews focus on logic, not formatting."

Tip: Automate style.`,

'How do you refactor legacy SQL into dbt?':
`**Why they ask:** migration experience.

**Answer:**
"Inventory the existing queries, rebuild them in layers with tests, compare outputs against the legacy results with audit_helper, migrate consumers over, and then retire the old queries."

Tip: Compare outputs.`,

'How do you model subscription revenue (MRR)?':
`**Why they ask:** a common SaaS model.

**Answer:**
"Build a subscription-level model with start and end dates and amounts, explode it to monthly grain with a date spine, then classify each customer-month's movement: new, expansion, contraction, churn or reactivation. And test that the movements reconcile exactly to the change in total MRR."

Tip: Add a reconciliation test.`,

'What is a surrogate key and when do you use it?':
`**Why they ask:** modeling fundamentals.

**Answer:**
"A system-generated key — often a hash of the business keys using dbt_utils.generate_surrogate_key — used as a model's primary key. It's stable across sources and useful for SCD2 rows or composite natural keys."

Tip: A hash of business keys.`,

'How do you work with data engineers?':
`**Why they ask:** team boundaries.

**Answer:**
"Data engineers own ingestion and platform reliability; analytics engineers own business transformations and definitions. We agree on raw data contracts, freshness SLAs and where each kind of logic lives."

Tip: Clear boundaries.`,

'How do you decide between views and tables in marts?':
`**Why they ask:** cost and latency.

**Answer:**
"Views for lightweight or rarely queried logic; tables or incremental models for heavy joins and marts that dashboards query constantly, so the compute isn't repeated on every query. I measure query costs and dashboard latency to decide."

Tip: Cost and latency.`,

'How do you explain a metric change to business users?':
`**Why they ask:** change management.

**Answer:**
"Explain clearly what changed — the definition or the data — show old and new values side by side, explain why the new version is more accurate, and communicate it before the release, not after people notice."

Tip: No surprises.`,

};
