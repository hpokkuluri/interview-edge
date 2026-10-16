// da-arch — generated from src/da-arch-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Data Architect. Format: [topic, question, answer, 'B'|'D']
QB['da-arch'] = [
["Role", "What does a data architect do?",
`**Why they ask:** confirms strategic scope.

**Answer:** Designs the organization's data landscape: target architecture (ingestion, storage, processing, serving), data models and standards, integration patterns, governance (quality, metadata, lineage, security, privacy), platform selection, and roadmaps aligned to business strategy — guiding data engineers and partnering with enterprise architecture and business leaders.

Tip: Business alignment.`, 'B'],

["Architecture", "How would you design a modern data platform?",
`**Answer:** Sources → ingestion (batch connectors, CDC, streaming) → storage (lakehouse with open table formats or cloud warehouse) → transformation layers (bronze/silver/gold or staging/marts with dbt/Spark) → semantic layer → consumption (BI, data science, ML, reverse ETL, APIs), with orchestration, observability, catalog and lineage, security and governance across all layers.

Tip: Draw it end to end.`, 'D'],

["Architecture", "Warehouse vs lakehouse — how do you decide?",
`**Answer:** Warehouses excel at SQL analytics with minimal ops; lakehouses handle diverse data (structured and unstructured), ML and open formats at lower storage cost. Consider workloads, skills, existing investments, openness/lock-in, and cost. Many architectures combine both or converge (Iceberg in Snowflake, SQL warehouses in Databricks).

Tip: Convergence trend.`, 'D'],

["Architecture", "What are open table formats and why do they matter?",
`**Answer:** Apache Iceberg, Delta Lake and Hudi add ACID transactions, schema evolution, time travel and efficient updates to files in object storage — enabling multiple engines to share the same data without lock-in.

Tip: Interoperability.`, 'D'],

["Modeling", "Kimball vs Inmon vs Data Vault?",
`**Answer:** **Kimball:** dimensional models (star schemas) built per business process, delivering value quickly. **Inmon:** a normalized enterprise data warehouse feeding data marts — integrated but slower. **Data Vault:** hubs, links and satellites for auditable, flexible integration of many sources with history, usually with dimensional marts on top.

Tip: Data Vault for complex, changing sources.`, 'D'],

["Modeling", "How do you design a canonical or enterprise data model?",
`**Answer:** Identify core business entities and definitions with domain owners, model relationships and keys, define standards for naming, types and history, and use it to guide integration and marts — without forcing every system to adopt it internally.

Tip: Business glossary first.`, 'D'],

["Governance", "What does a data governance framework include?",
`**Answer:** Roles (data owners, stewards, custodians), policies and standards, data quality management, metadata and catalog, lineage, master data, privacy and security controls, access management, and issue resolution processes — with measurable outcomes.

Tip: Roles and accountability.`, 'D'],

["Governance", "How do you make governance practical, not bureaucratic?",
`**Answer:** Focus on critical data elements first, automate controls (quality checks, access policies, lineage capture), embed governance in workflows and tools, show value through trusted metrics, and use federated ownership with central standards.

Tip: Automate governance.`, 'D'],

["MDM", "What is master data management?",
`**Answer:** Creating a single trusted view of core entities (customer, product, supplier, employee) across systems through matching, merging, survivorship rules, stewardship workflows and synchronization. Styles: registry, consolidation, coexistence, centralized.

Tip: Survivorship rules.`, 'D'],

["Quality", "How do you design data quality at scale?",
`**Answer:** Define quality dimensions (accuracy, completeness, consistency, timeliness, validity, uniqueness) for critical data, implement automated checks in pipelines, data contracts with producers, observability for anomalies, quality scorecards, and clear ownership for remediation.

Tip: Data contracts.`, 'D'],

["Security", "How do you design data security and privacy?",
`**Answer:** Data classification, least-privilege RBAC/ABAC, row- and column-level security, masking and tokenization of PII, encryption, secure sharing, audit logging, retention and deletion policies, and privacy-by-design for GDPR/CCPA/HIPAA.

Tip: Classification drives controls.`, 'D'],

["Integration", "How do you choose integration patterns for data?",
`**Answer:** Batch ELT for analytics where latency allows, CDC for near-real-time replication from operational databases, streaming for event-driven use cases, APIs for application access, and data sharing (Snowflake/Delta Sharing) for partners.

Tip: Latency drives choice.`, 'D'],

["Streaming", "When would you design a streaming architecture?",
`**Answer:** For real-time use cases — fraud detection, personalization, IoT monitoring, operational dashboards — using Kafka or cloud streaming services, stream processing (Flink, Spark Structured Streaming), and serving stores for low-latency access.

Tip: Real business need first.`, 'D'],

["Data Mesh", "What is data mesh and when does it fit?",
`**Answer:** Domain-oriented ownership of data as products, self-serve data platform, and federated computational governance. Fits large organizations where a central team bottlenecks; requires mature domains, clear product thinking and strong platform engineering.

Tip: Not for every company.`, 'D'],

["Data Products", "What makes a good data product?",
`**Answer:** Clear owner, documented purpose and schema, quality SLAs, discoverability in a catalog, access policies, versioning, and consumer support.

Tip: Product mindset.`, 'D'],

["Metadata", "Why is a data catalog important?",
`**Answer:** It helps people find, understand and trust data — business definitions, owners, lineage, quality and usage. Tools: Collibra, Alation, Purview, Unity Catalog, DataHub, Atlan.

Tip: Adoption is the challenge.`, 'D'],

["Cloud", "How do you approach a cloud data migration?",
`**Answer:** Inventory sources, workloads and dependencies; define the target architecture; prioritize by value and complexity; migrate in waves (rehost vs refactor); validate data and performance; run in parallel; decommission legacy; and manage cost from day one.

Tip: Waves and validation.`, 'D'],

["Cost", "How do you design for cost efficiency?",
`**Answer:** Separate storage and compute, auto-scaling and auto-suspend, partitioning and clustering to reduce scans, tiered storage, workload isolation with budgets, cost tagging and FinOps reporting.

Tip: Cost visibility by team.`, 'D'],

["AI", "How should data architecture support AI and LLMs?",
`**Answer:** High-quality governed data, pipelines for unstructured data (documents, chunking, embeddings), vector search capabilities, feature stores for ML, lineage and access controls on data used by AI, and semantic layers so AI tools use consistent definitions.

Tip: Governed data for AI.`, 'D'],

["Semantic Layer", "Why does a semantic layer matter architecturally?",
`**Answer:** It centralizes metric and entity definitions so BI tools, notebooks, applications and AI assistants all compute the same numbers, reducing duplication and inconsistency.

Tip: Single definition of metrics.`, 'D'],

["Interoperability", "How do you avoid vendor lock-in?",
`**Answer:** Open formats (Parquet, Iceberg/Delta), standard SQL, abstraction layers for orchestration and transformation (dbt), and portable architecture — balanced against the productivity benefits of managed services.

Tip: Balanced view.`, 'D'],

["Performance", "How do you design for query performance at scale?",
`**Answer:** Appropriate modeling (star schemas, aggregates), partitioning and clustering, materialized views, caching, workload isolation, and choosing engines suited to workloads.

Tip: Workload isolation.`, 'D'],

["Reference Architecture", "Describe a reference architecture you've implemented.",
`**Sample answer:** "Azure-based lakehouse: ADF and CDC into ADLS bronze, Databricks for silver/gold with Delta and Unity Catalog, dbt for marts, Power BI semantic models with Direct Lake, Purview for catalog, and Event Hubs for streaming. It replaced three warehouses and cut costs 35%."

Tip: Concrete and measured.`, 'B'],

["Stakeholders", "How do you align data architecture with business strategy?",
`**Answer:** Start from business priorities (growth, efficiency, compliance, AI), map required data capabilities, assess gaps, and build a roadmap with clear value milestones.

Tip: Value-driven roadmap.`, 'B'],

["Decisions", "How do you document architecture decisions?",
`**Answer:** Architecture decision records (context, decision, alternatives, consequences), reference architectures and standards, and diagrams (C4) — kept current.

Tip: ADRs.`, 'B'],

["Standards", "What data standards would you set?",
`**Answer:** Naming conventions, data types, date/time handling (UTC), keys and identifiers, history handling, documentation requirements, quality checks, and security classification.

Tip: Practical standards.`, 'B'],

["Regulation", "How do regulations affect data architecture?",
`**Answer:** Data residency requirements, retention and deletion (right to be forgotten), consent tracking, audit trails, and sector-specific rules (HIPAA, SOX, PCI) shape storage location, access controls and lineage.

Tip: Residency.`, 'D'],

["Scenario", "Different departments report different revenue numbers. How do you fix it architecturally?",
`**Answer:** Establish governed definitions with finance as owner, build a certified revenue model in the transformation layer, expose it through a semantic layer, retire departmental copies, and monitor usage.

Tip: Certified datasets.`, 'D'],

["Scenario", "The data platform costs doubled in a year. What do you do?",
`**Answer:** Analyze cost by workload and team, find top consumers (inefficient queries, full refreshes, idle compute), apply optimizations, set budgets and alerts, and introduce chargeback/showback.

Tip: FinOps.`, 'D'],

["Scenario", "Leadership wants real-time dashboards everywhere. How do you respond?",
`**Answer:** Clarify which decisions truly need real-time data, quantify cost and complexity, provide streaming for those cases and hourly/daily refresh for the rest.

Tip: Right latency for each need.`, 'D'],

["Behavioral", "Tell me about a major data architecture you led.",
`**Sample answer:** "I led consolidation of five regional warehouses into one lakehouse with shared governance, migrating 2,000 reports in waves. Report consistency issues dropped sharply, and the platform enabled our first ML use cases."

Tip: Scale and impact.`, 'B'],

["Behavioral", "Tell me about a disagreement on architecture.",
`**Sample answer:** "Engineering wanted a new streaming platform for all data. I showed most use cases needed daily data; we used streaming only for fraud and inventory, saving significant cost and complexity."

Tip: Pragmatism.`, 'B'],

["Leadership", "How do you guide data engineering teams?",
`**Answer:** Reference architectures, design reviews, standards and templates, mentoring, and staying hands-on enough to keep designs practical.

Tip: Enable teams.`, 'B'],

["Interview", "What would you ask about our data landscape?",
`**Answer:** "What are the top business questions you can't answer today?", "Where do data quality issues come from?", "What platforms exist and why?", "How is data governed today?"

Tip: Diagnostic.`, 'B'],

["Career", "Why are you ready for a data architect role?",
`**Sample answer:** "I've designed and delivered enterprise data platforms, established governance, and translated business strategy into data roadmaps."

Tip: Evidence.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design data platforms that are trusted, cost-efficient and ready for AI — I've consolidated warehouses, cut costs 35% and made governed data available across the business."

Tip: Proof.`, 'B'],

["Lineage", "How do you capture lineage automatically?",
`**Answer:** Use tools that parse SQL and pipeline metadata (dbt, OpenLineage, Unity Catalog, Purview) rather than manual documentation; integrate with the catalog.

Tip: Automation.`, 'D'],

["Retention", "How do you design data retention and archival?",
`**Answer:** Define retention by data class and regulation, use tiered storage (hot, warm, cold), automate deletion and archival, and support legal holds.

Tip: Legal holds.`, 'D'],

["Sharing", "How do you share data securely with partners?",
`**Answer:** Secure data sharing features (Snowflake Secure Data Sharing, Delta Sharing), clean rooms for privacy-preserving collaboration, APIs with authentication, and contracts defining permitted use.

Tip: Clean rooms.`, 'D'],

["Real-time Serving", "How do you serve data to applications with low latency?",
`**Answer:** Operational data stores, caches (Redis), search engines, or real-time OLAP databases (Druid, Pinot, ClickHouse) fed by streams — not analytical warehouses directly for high-concurrency app queries.

Tip: Right engine for serving.`, 'D'],

["Unstructured", "How do you manage unstructured data?",
`**Answer:** Store in object storage with metadata, extract text and features with pipelines (OCR, NLP), index for search and embeddings, and apply classification and access controls.

Tip: Metadata is key.`, 'D'],

["Testing", "How do you ensure changes don't break downstream consumers?",
`**Answer:** Data contracts, lineage-based impact analysis, CI with tests and data diffs, versioning of datasets, and communication with consumers.

Tip: Contracts and lineage.`, 'D'],

["Maturity", "How do you assess data maturity?",
`**Answer:** Across strategy, governance, quality, architecture, literacy and culture — rate current levels, set targets and build a roadmap.

Tip: Maturity model.`, 'D'],

["Literacy", "How do you improve data literacy in an organization?",
`**Answer:** Training programs, clear documentation and glossaries, office hours, champions in each department, and celebrating data-driven decisions.

Tip: Culture.`, 'B'],

["Fabric vs Databricks vs Snowflake", "How would you compare major data platforms?",
`**Answer:** Snowflake: managed warehouse with strong SQL, sharing and growing lakehouse support. Databricks: lakehouse with strong Spark, ML and AI capabilities. Microsoft Fabric: integrated SaaS tied to Power BI and Microsoft ecosystem. Choose by workloads, skills, ecosystem and cost.

Tip: Fit over hype.`, 'D'],

["Identity", "How do you handle customer identity resolution?",
`**Answer:** Deterministic matching (email, customer ID) and probabilistic matching (name, address similarity), survivorship rules, a golden record, and privacy-compliant handling.

Tip: MDM link.`, 'D'],

["IoT", "How would you design for IoT data?",
`**Answer:** Edge filtering and buffering, streaming ingestion, time-series storage (time-series databases or partitioned lakehouse tables), downsampling and retention policies, and real-time alerting.

Tip: Volume management.`, 'D']
];

QB['da-arch'] = (QB['da-arch'] || []).concat([
["Modeling", "When do you normalize vs denormalize?",
`**Answer:** Normalize in operational systems and integration layers to avoid redundancy and update anomalies; denormalize in analytical marts for query simplicity and performance.

Tip: Different layers, different goals.`, 'B'],
["Ingestion", "Managed connectors vs custom ingestion?",
`**Answer:** Managed connectors (Fivetran, Airbyte, cloud-native) speed up common SaaS and database ingestion; custom code suits unusual sources, high volumes with cost constraints, or special logic. Consider cost per row, reliability and maintenance.

Tip: Cost at scale.`, 'D'],
["Observability", "What observability would you build into a data platform?",
`**Answer:** Pipeline run monitoring, freshness and volume checks, schema change detection, quality scores, lineage-based impact alerts, cost dashboards and SLA tracking.

Tip: End-to-end visibility.`, 'D']
]);
