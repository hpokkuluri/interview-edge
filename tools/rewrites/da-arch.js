// Rewritten Data & AI — Data Architect (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-arch-).
module.exports = {

'How would you design a modern data platform?':
`**Why they ask:** the core architecture question.

**Answer:**
"End to end: sources flow into ingestion — batch connectors, CDC and streaming — then storage, either a lakehouse with open table formats or a cloud warehouse. Then transformation layers — bronze, silver, gold, or staging and marts with dbt or Spark — a semantic layer, and consumption: BI, data science, ML, reverse ETL and APIs. Across all of it: orchestration, observability, catalog and lineage, security and governance."

Tip: Draw it end to end.`,

'Warehouse vs lakehouse — how do you decide?':
`**Why they ask:** a key platform decision.

**Answer:**
"Warehouses excel at SQL analytics with very little operations work. Lakehouses handle diverse data — structured and unstructured — plus ML and open formats, at lower storage cost. I weigh the workloads, team skills, existing investments, openness versus lock-in, and cost. In practice they're converging — Snowflake supports Iceberg, Databricks has SQL warehouses — so many architectures combine both."

Tip: Mention the convergence trend.`,

'What are open table formats and why do they matter?':
`**Why they ask:** modern architecture.

**Answer:**
"Apache Iceberg, Delta Lake and Hudi add ACID transactions, schema evolution, time travel and efficient updates to files in object storage. Most importantly, multiple engines — Spark, Snowflake, Trino — can share the same data without copying it or being locked into one vendor."

Tip: Interoperability.`,

'Kimball vs Inmon vs Data Vault?':
`**Why they ask:** modeling philosophy.

**Answer:**
"Kimball builds dimensional star schemas per business process — fast to deliver value. Inmon builds a normalized enterprise warehouse first, feeding data marts — very integrated, but slower. Data Vault uses hubs, links and satellites for auditable, flexible integration of many changing sources with full history, usually with dimensional marts on top for reporting."

Tip: Data Vault suits complex, changing sources.`,

'How do you design a canonical or enterprise data model?':
`**Why they ask:** enterprise consistency.

**Answer:**
"Identify the core business entities and their definitions with domain owners, model relationships and keys, set standards for naming, types and history, and use it to guide integration and marts — without forcing every source system to adopt it internally. A business glossary comes first."

Tip: Business glossary first.`,

'What does a data governance framework include?':
`**Why they ask:** governance leadership.

**Answer:**
"Roles — data owners, stewards and custodians — policies and standards, data quality management, metadata and a catalog, lineage, master data, privacy and security controls, access management, and an issue-resolution process. With measurable outcomes, so it's not governance for its own sake."

Tip: Roles and accountability.`,

'How do you make governance practical, not bureaucratic?':
`**Why they ask:** governance often fails.

**Answer:**
"Start with critical data elements, not everything. Automate controls — quality checks, access policies, lineage capture. Embed governance in the tools people already use, show value through trusted metrics, and use federated ownership with central standards. If governance means filling forms, people route around it."

Tip: Automate governance.`,

'What is master data management?':
`**Why they ask:** a core data discipline.

**Answer:**
"It creates a single trusted view of core entities — customer, product, supplier, employee — across systems, through matching, merging, survivorship rules that decide which source wins for each attribute, stewardship workflows, and synchronization back to systems. The styles are registry, consolidation, coexistence and centralized."

Tip: Explain survivorship rules.`,

'How do you design data quality at scale?':
`**Why they ask:** trust at scale.

**Answer:**
"Define quality dimensions — accuracy, completeness, consistency, timeliness, validity, uniqueness — for critical data. Then automated checks in pipelines, data contracts with producers, observability for anomalies, quality scorecards, and clear ownership for fixing issues."

Tip: Data contracts.`,

'How do you design data security and privacy?':
`**Why they ask:** risk management.

**Answer:**
"Data classification first, because it drives everything else. Then least-privilege RBAC or ABAC, row- and column-level security, masking and tokenization of PII, encryption, secure sharing, audit logging, retention and deletion policies, and privacy by design for GDPR, CCPA or HIPAA."

Tip: Classification drives controls.`,

'How do you choose integration patterns for data?':
`**Why they ask:** integration architecture.

**Answer:**
"Batch ELT for analytics where latency allows. CDC for near-real-time replication from operational databases. Streaming for event-driven use cases. APIs for application access. And secure data sharing — Snowflake or Delta Sharing — for partners. Required latency drives the choice."

Tip: Latency drives the choice.`,

'When would you design a streaming architecture?':
`**Why they ask:** avoiding over-engineering.

**Answer:**
"For genuinely real-time use cases — fraud detection, personalization, IoT monitoring, operational dashboards — using Kafka or cloud streaming, stream processing with Flink or Spark Structured Streaming, and serving stores for low-latency access. There has to be a real business need first."

Tip: Real business need first.`,

'What is data mesh and when does it fit?':
`**Why they ask:** organizational architecture.

**Answer:**
"Domain teams own their data as products, supported by a self-serve platform and federated computational governance. It fits large organizations where the central team has become a bottleneck. It needs mature domains, real product thinking and strong platform engineering — it's not for every company."

Tip: Not for every company.`,

'What makes a good data product?':
`**Why they ask:** product thinking.

**Answer:**
"A clear owner, documented purpose and schema, quality SLAs, discoverability in a catalog, access policies, versioning, and support for consumers. If nobody owns it, it's not a product."

Tip: Product mindset.`,

'Why is a data catalog important?':
`**Why they ask:** findability and trust.

**Answer:**
"It helps people find, understand and trust data — business definitions, owners, lineage, quality and usage. Tools include Collibra, Alation, Purview, Unity Catalog, DataHub and Atlan. The real challenge is adoption, not installation."

Tip: Adoption is the challenge.`,

'How do you approach a cloud data migration?':
`**Why they ask:** large program experience.

**Answer:**
"Inventory sources, workloads and dependencies; define the target architecture; prioritize by value and complexity; migrate in waves, choosing rehost or refactor per workload; validate data and performance; run in parallel; decommission legacy; and manage cost from day one."

Tip: Waves and validation.`,

'How do you design for cost efficiency?':
`**Why they ask:** cloud cost control.

**Answer:**
"Separate storage and compute, auto-scaling and auto-suspend, partitioning and clustering to reduce scans, tiered storage, workload isolation with budgets, and cost tagging with FinOps reporting so each team sees its spend."

Tip: Cost visibility by team.`,

'How should data architecture support AI and LLMs?':
`**Why they ask:** current priority.

**Answer:**
"High-quality, governed data. Pipelines for unstructured data — documents, chunking, embeddings. Vector search capabilities. Feature stores for ML. Lineage and access controls on data used by AI. And semantic layers so AI tools use the same definitions as everyone else."

Tip: Governed data for AI.`,

'Why does a semantic layer matter architecturally?':
`**Why they ask:** consistency.

**Answer:**
"It centralizes metric and entity definitions so BI tools, notebooks, applications and AI assistants all compute the same numbers. Without it, every tool reimplements 'revenue' slightly differently."

Tip: One definition of each metric.`,

'How do you avoid vendor lock-in?':
`**Why they ask:** long-term flexibility.

**Answer:**
"Open formats — Parquet, Iceberg or Delta — standard SQL, and portable transformation and orchestration with tools like dbt. Balanced against the productivity of managed services — avoiding all lock-in usually costs more than it saves."

Tip: Keep a balanced view.`,

'How do you design for query performance at scale?':
`**Why they ask:** performance architecture.

**Answer:**
"Appropriate modeling — star schemas and aggregates — partitioning and clustering, materialized views, caching, workload isolation so ETL doesn't slow dashboards, and engines suited to each workload."

Tip: Workload isolation.`,

"Describe a reference architecture you've implemented.":
`**Why they ask:** proof.

**Answer:**
"An Azure lakehouse: Data Factory and CDC landing in ADLS bronze, Databricks for silver and gold with Delta and Unity Catalog, dbt for marts, Power BI semantic models on Direct Lake, Purview for the catalog, and Event Hubs for streaming. It replaced three warehouses and cut costs 35%."

Tip: Concrete and measured.`,

'How do you align data architecture with business strategy?':
`**Why they ask:** strategic thinking.

**Answer:**
"Start from the business priorities — growth, efficiency, compliance, AI — map the data capabilities each needs, assess the gaps, and build a roadmap with clear value milestones, so every phase delivers something the business can see."

Tip: A value-driven roadmap.`,

'How do you document architecture decisions?':
`**Why they ask:** maintainability.

**Answer:**
"Architecture decision records — context, decision, alternatives and consequences — plus reference architectures, standards, and C4 diagrams, all kept current. ADRs answer the 'why did we do it this way?' question two years later."

Tip: Use ADRs.`,

'What data standards would you set?':
`**Why they ask:** consistency.

**Answer:**
"Naming conventions, data types, date and time handling in UTC, keys and identifiers, history handling, documentation requirements, quality checks, and security classification. Practical standards people actually follow."

Tip: Keep standards practical.`,

'How do regulations affect data architecture?':
`**Why they ask:** compliance by design.

**Answer:**
"Data residency requirements decide where data is stored. Retention and deletion rules, including the right to be forgotten, consent tracking, audit trails, and sector rules like HIPAA, SOX and PCI shape access controls and lineage."

Tip: Residency matters.`,

'Different departments report different revenue numbers. How do you fix it architecturally?':
`**Why they ask:** a classic problem.

**Answer:**
"Establish a governed definition with finance as the owner, build a certified revenue model in the transformation layer, expose it through the semantic layer, retire the departmental copies, and monitor usage to make sure people switch."

Tip: Certified datasets.`,

'The data platform costs doubled in a year. What do you do?':
`**Why they ask:** cost leadership.

**Answer:**
"Analyze cost by workload and team, find the top consumers — inefficient queries, unnecessary full refreshes, idle compute — fix them, set budgets and alerts, and introduce showback or chargeback so teams own their spend."

Tip: FinOps.`,

'Leadership wants real-time dashboards everywhere. How do you respond?':
`**Why they ask:** pragmatic architecture.

**Answer:**
"Clarify which decisions truly need real-time data, quantify the cost and complexity, provide streaming for those cases, and hourly or daily refresh for everything else. A monthly finance report doesn't need second-by-second data."

Tip: The right latency for each need.`,

'Tell me about a major data architecture you led.':
`**Why they ask:** proof at scale.

**Answer:**
"I led the consolidation of five regional warehouses into one lakehouse with shared governance, migrating 2,000 reports in waves. Report consistency issues dropped sharply, and the new platform enabled our first ML use cases."

Tip: Scale and impact.`,

'Tell me about a disagreement on architecture.':
`**Why they ask:** pragmatism and influence.

**Answer:**
"Engineering wanted a new streaming platform for all data. I showed that most use cases only needed daily data. We used streaming only for fraud and inventory, which saved significant cost and complexity."

Tip: Pragmatism.`,

'How do you guide data engineering teams?':
`**Why they ask:** architect influence.

**Answer:**
"Reference architectures, design reviews, standards and templates, mentoring — and staying hands-on enough that my designs stay practical."

Tip: Enable teams.`,

'What would you ask about our data landscape?':
`**Why they ask:** diagnostic thinking.

**Answer:**
"'What are the top business questions you can't answer today?' 'Where do your data quality issues come from?' 'What platforms exist, and why?' And 'How is data governed today?'"

Tip: Ask diagnostic questions.`,

'Why are you ready for a data architect role?':
`**Why they ask:** readiness.

**Answer:**
"I've designed and delivered enterprise data platforms, established governance, and translated business strategy into data roadmaps — the full scope of the role."

Tip: Give evidence.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I design data platforms that are trusted, cost-efficient and ready for AI. I've consolidated warehouses, cut costs 35%, and made governed data available across the business."

Tip: Proof.`,

'How do you capture lineage automatically?':
`**Why they ask:** practical governance.

**Answer:**
"Use tools that parse SQL and pipeline metadata — dbt, OpenLineage, Unity Catalog, Purview — rather than manual documentation, and integrate it with the catalog. Manual lineage is out of date the week after it's drawn."

Tip: Automate it.`,

'How do you design data retention and archival?':
`**Why they ask:** compliance and cost.

**Answer:**
"Define retention by data class and regulation, use tiered storage — hot, warm and cold — automate deletion and archival, and support legal holds that override deletion when needed."

Tip: Support legal holds.`,

'How do you share data securely with partners?':
`**Why they ask:** external data sharing.

**Answer:**
"Secure data sharing features — Snowflake Secure Data Sharing or Delta Sharing — clean rooms for privacy-preserving collaboration, authenticated APIs, and contracts defining permitted use."

Tip: Mention clean rooms.`,

'How do you serve data to applications with low latency?':
`**Why they ask:** serving architecture.

**Answer:**
"With operational data stores, caches like Redis, search engines, or real-time OLAP databases — Druid, Pinot, ClickHouse — fed by streams. Not by pointing high-concurrency app queries at the analytical warehouse."

Tip: The right engine for serving.`,

'How do you manage unstructured data?':
`**Why they ask:** growing data type.

**Answer:**
"Store it in object storage with good metadata, extract text and features with pipelines — OCR and NLP — index it for search and embeddings, and apply classification and access controls just like structured data."

Tip: Metadata is key.`,

"How do you ensure changes don't break downstream consumers?":
`**Why they ask:** change safety.

**Answer:**
"Data contracts, lineage-based impact analysis, CI with tests and data diffs, versioned datasets, and communication with consumers before breaking changes."

Tip: Contracts and lineage.`,

'How do you assess data maturity?':
`**Why they ask:** roadmap planning.

**Answer:**
"Across strategy, governance, quality, architecture, literacy and culture — rate the current level in each, set targets, and build a roadmap to close the gaps."

Tip: Use a maturity model.`,

'How do you improve data literacy in an organization?':
`**Why they ask:** culture.

**Answer:**
"Training programs, clear documentation and glossaries, office hours, data champions in each department, and celebrating decisions made with data."

Tip: It's about culture.`,

'How would you compare major data platforms?':
`**Why they ask:** platform judgment.

**Answer:**
"Snowflake is a managed warehouse with strong SQL, sharing and growing lakehouse support. Databricks is a lakehouse with strong Spark, ML and AI capabilities. Microsoft Fabric is an integrated SaaS tied closely to Power BI and the Microsoft ecosystem. I choose by workloads, skills, ecosystem and cost — fit over hype."

Tip: Fit over hype.`,

'How do you handle customer identity resolution?':
`**Why they ask:** a common MDM problem.

**Answer:**
"Deterministic matching on email or customer ID, probabilistic matching on name and address similarity, survivorship rules, a golden record, and privacy-compliant handling throughout."

Tip: Link it to MDM.`,

'How would you design for IoT data?':
`**Why they ask:** high-volume data.

**Answer:**
"Edge filtering and buffering, streaming ingestion, time-series storage — a time-series database or partitioned lakehouse tables — downsampling and retention policies, and real-time alerting. Managing volume is the core challenge."

Tip: Volume management.`,

'When do you normalize vs denormalize?':
`**Why they ask:** modeling fundamentals.

**Answer:**
"Normalize in operational systems and integration layers to avoid redundancy and update anomalies. Denormalize in analytical marts for simpler queries and better performance. Different layers have different goals."

Tip: Different layers, different goals.`,

'Managed connectors vs custom ingestion?':
`**Why they ask:** build versus buy.

**Answer:**
"Managed connectors — Fivetran, Airbyte, cloud-native tools — speed up common SaaS and database ingestion. Custom code suits unusual sources, very high volumes where per-row pricing gets expensive, or special logic. I compare cost per row, reliability and maintenance effort."

Tip: Watch cost at scale.`,

'What observability would you build into a data platform?':
`**Why they ask:** operational maturity.

**Answer:**
"Pipeline run monitoring, freshness and volume checks, schema change detection, quality scores, lineage-based impact alerts, cost dashboards and SLA tracking — end-to-end visibility."

Tip: End-to-end visibility.`,

};
