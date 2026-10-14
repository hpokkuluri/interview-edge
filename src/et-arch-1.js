// Oracle Technical Architect (15+ yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-arch'] = (QB['et-arch'] || []).concat([
['Architecture', 'Describe the integration architecture you would set up for Oracle Fusion in a large enterprise.',
`- **One integration platform** (OIC or enterprise iPaaS) with API-led and event-driven patterns.
- **Inbound**: REST for real-time, FBDI via ERP Integration Service for bulk, HDL for HCM.
- **Outbound**: business events (near real-time), BICC to object storage for analytics, BIP extracts for formatted files.
- **Master data** ownership per domain; canonical models.
- **Security**: OAuth via identity domains, integration users, secrets in vault, network controls.
- **Observability**: central logging, dashboards, alerting, reprocessing.
- **Governance**: standards, reviews, versioning, CI/CD.`, 'D'],

['Architecture', 'How do you design extensions on Oracle SaaS while keeping upgrades safe?',
`- Use only **supported extension points**: flexfields, VB Studio (Redwood), OIC, BIP/OTBI, REST APIs, AI Agent Studio.
- **Side-by-side apps** on OCI (VB, APEX, Functions, Autonomous DB) for larger needs.
- No dependence on undocumented internals; automated regression each quarter.
- Extension inventory with owners and retirement reviews.`, 'D'],

['OCI', 'What OCI services complement Oracle Fusion?',
`- **OIC** (integration), **Visual Builder**, **APEX on Autonomous Database** (custom apps, staging).
- **Object Storage** (BICC extracts, file exchange), **Functions** (serverless logic), **API Gateway**, **Streaming/Queue**.
- **Vault** (secrets), **Identity Domains** (SSO/OAuth), **Logging/Monitoring**.
- **OCI Generative AI** and AI services for custom AI.
- **Data Integration / Autonomous Data Warehouse / Fusion Data Intelligence** for analytics.`, 'D'],

['Migration', 'How would you architect an EBS to Fusion migration technically?',
`- **Inventory** EBS customizations, integrations, reports, data volumes.
- Map to Fusion: retire, standard features, or extensions (OIC/VBS/BIP).
- **Data migration factory**: extracts from EBS, transformation layer (Autonomous DB/ODI/OCI Data Integration), FBDI/HDL loads, reconciliation.
- **Coexistence integrations** during phases; plan retirement.
- **Historical data**: archive/reporting store.
- **Identity and security** redesign; integration platform rebuild.`, 'D'],

['Security', 'How do you architect identity and security for Fusion and its integrations?',
`- **SSO** via OCI Identity Domains federated with corporate IdP (Entra ID/Okta), MFA.
- **Provisioning** automated from HCM or IAM; role mappings.
- **OAuth** for APIs; JWT/client credentials for integrations; no shared passwords.
- **Least privilege** custom roles; SoD analysis.
- **Network**: allowlists, private endpoints for OIC agents to on-prem systems.
- **Audit** logging and monitoring to SIEM.`, 'D'],

['Data', 'How would you build an analytics architecture on Fusion data?',
`- **Fusion Data Intelligence (FDI)** for prebuilt ERP/SCM/HCM analytics on Autonomous Data Warehouse, extended with custom data.
- Or **BICC** incremental extracts → Object Storage → ADW/Snowflake/Databricks.
- Semantic models, governed KPIs, data quality checks.
- Avoid heavy BIP/REST extracts for analytics.`, 'D'],

['Performance', 'How do you design for high-volume transaction loads into Fusion?',
`- Prefer **FBDI** for bulk; size batches; parallelize by BU/ledger.
- Schedule around close and quarterly updates.
- Pre-validate data to reduce import failures.
- Monitor ESS job times and queue; work with Oracle for capacity if needed.
- Performance test with production volumes before go-live.`, 'D'],

['AI', 'How would you architect AI capabilities around Oracle Fusion?',
`- **Oracle AI Agent Studio** for agents on Fusion data (tools: business objects, documents, REST/MCP, email; workflows with human approval).
- **OCI Generative AI** for custom use cases (RAG on enterprise documents) integrated via OIC/APIs.
- **Data foundation**: clean master data, FDI/lakehouse.
- **Governance**: security propagation, evaluation, monitoring, audit.`, 'D'],

['Resilience', 'How do you design integrations to be resilient?',
`- **Asynchronous** patterns with queues; retries with backoff; dead-letter handling.
- **Idempotency** keys; replay capability.
- **Circuit breakers**/timeouts for external partners.
- **Monitoring** with business-level alerts.
- **DR** for integration platform (multi-region OIC, backups of configurations).`, 'D'],

['Governance', 'How do you govern technical design across multiple vendors and teams?',
`- **Architecture principles** and standards published.
- **Design authority** reviews for significant designs.
- **Reference implementations** and templates.
- **Tooling**: shared Git, CI/CD, monitoring.
- **Metrics**: incidents per integration, defect escape rates.`, 'D'],

['DevOps', 'What CI/CD can you implement around Oracle SaaS extensions?',
`- **VB Studio** built-in Git and pipelines for VB apps and page extensions.
- **OIC** export/import via REST APIs in pipelines; config per environment.
- **BIP** catalog objects in Git with deployment scripts.
- **Automated tests**: API tests, UI tests (Redwood), report comparisons.
- Environment strategy aligned to Fusion pods and refreshes.`, 'D'],

['Strategy', 'What is your view on custom-building vs buying third-party add-ons for Fusion?',
`- **Buy** when the add-on is mature, supported, and solves a common need (tax engines, bank connectivity, testing tools).
- **Build** for differentiating or company-specific needs, on supported extension points.
- Evaluate TCO, upgrade risk, security, vendor viability.`, 'B'],

['Stakeholders', 'How do you explain a technical architecture decision to a CFO?',
`- Business framing: cost, risk, speed, flexibility.
- Two or three options with a recommendation.
- One simple diagram.
- What happens if we don't decide.`, 'B'],

['Behavioral', 'Tell me about an architecture you designed that scaled well — or didn\'t.',
`- Context and design choices.
- What happened at scale; how you adapted.
- Lessons (e.g. event-driven beats polling; bulk loads beat chatty APIs).`, 'B'],

['Behavioral', 'How do you stay current with Oracle\'s technical platform?',
`- Quarterly release notes (Fusion, OIC, VBS, AI Agent Studio).
- OCI certifications; Oracle blogs and Customer Connect.
- Sandbox experiments with new features.
- Community/user groups.`, 'B'],

['Migration', 'How do you plan for retiring classic Fusion customizations as Redwood rolls out?',
`- Inventory Page Composer personalizations and classic extensions.
- Decide what to rebuild in **VB Studio**; retire the rest.
- Align with Oracle's Redwood timeline per module.
- Regression tests and training.`, 'D'],

['Integration', 'How do you handle master data synchronization across Fusion and other systems?',
`- **System of record** per domain; avoid bidirectional edits.
- **Event-driven** propagation (business events → OIC → targets).
- **Cross-reference** tables for IDs.
- **Data quality** checks and reconciliation jobs.
- Consider MDM tools for complex hierarchies.`, 'D'],

['Architecture', 'How do you document architecture for an Oracle program?',
`- **Context and container diagrams** (C4 style).
- **Integration catalog** with patterns and SLAs.
- **ADRs** for key decisions.
- **Security architecture** and data flows (PII).
- Living documentation in a wiki/repo.`, 'B']
]);
