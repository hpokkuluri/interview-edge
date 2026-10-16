// et-arch — generated from src/et-arch-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Technical Architect (15+ yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-arch'] = [
["Role", "What does an Oracle technical architect do?",
`**Why they ask:** distinguishes architecture from lead development.

**Answer:** Defines the target technical architecture around Oracle applications: integration architecture, extension strategy (SaaS + PaaS), data and analytics architecture, security and identity, environments and DevOps, non-functional requirements (performance, availability, resilience), and governance. Makes and documents key decisions, guides technical leads, and aligns with enterprise architecture.

Tip: Mention architecture decision records (ADRs).`, 'B'],

["Integration", "How do you define an integration architecture for Oracle Fusion?",
`**Answer:** Inventory systems and data flows; define patterns (API-led REST, event-driven via business events, bulk via ERP Integration Service/FBDI, analytics via BICC/FDI, file/SFTP); choose the platform (OIC, plus API Gateway, Streaming as needed); standardize canonical models, error handling, security and monitoring; and set governance through an integration catalog and design authority.

Tip: Draw a high-level diagram in interviews if allowed.`, 'D'],

["Integration", "What is API-led connectivity?",
`**Answer:** Layering APIs into system APIs (access to systems of record), process APIs (business logic/orchestration), and experience APIs (tailored to consumers like portals or mobile). It increases reuse and decouples consumers from back-end changes.

Tip: Useful framing even with OIC.`, 'D'],

["Integration", "When would you use events vs APIs vs batch?",
`**Answer:** **Events** for real-time notifications and decoupling (order approved → notify warehouse). **APIs** for request-response needs and lookups. **Batch** for high volumes where latency is acceptable (daily journals, bulk loads). Choose by volume, latency, consistency and coupling.

Tip: Trade-off thinking.`, 'D'],

["Extensions", "What is your extension strategy for Oracle SaaS?",
`**Answer:** Configure first; then in-app extensions (flexfields, Application Composer, VB Studio Redwood extensions, page composer, AI Agent Studio); then side-by-side PaaS extensions on OCI (Visual Builder apps, Autonomous Database, Functions) integrated via APIs and events. Never modify the SaaS core; keep extensions upgrade-safe.

Tip: "Clean core" equivalent for Oracle.`, 'D'],

["Data", "How do you design data and analytics architecture around Fusion?",
`**Answer:** Use Fusion Data Intelligence or BICC → Autonomous Data Warehouse → Oracle Analytics Cloud (or other analytics platforms), with incremental pipelines, master data governance, semantic models, and security aligned with Fusion roles. OTBI/BIP for operational reporting.

Tip: Separate operational vs analytical reporting.`, 'D'],

["Master Data", "How do you approach master data management?",
`**Answer:** Define systems of record for each domain (customers, suppliers, items, employees, chart of accounts), governance processes and data owners, quality rules, synchronization patterns, and tools (Fusion Product Hub, Customer Data Management, or MDM platforms).

Tip: Ownership before tools.`, 'D'],

["Security", "How do you design identity and access for Oracle Cloud?",
`**Answer:** SSO with the corporate IdP (Microsoft Entra ID, Okta) via SAML/OIDC, OCI IAM identity domains, automated user provisioning (SCIM or HCM-driven), role design with least privilege, SoD controls, integration users with OAuth, and audit logging.

Tip: Mention SoD tooling (Oracle Risk Management/Advanced Access Controls).`, 'D'],

["Security", "How do you protect sensitive data across integrations?",
`**Answer:** Encryption in transit (TLS) and at rest, field-level masking, tokenization for card data, least-privilege integration roles, data classification, secure key/credential management (OCI Vault), and non-production data masking.

Tip: Data classification first.`, 'D'],

["NFRs", "Which non-functional requirements do you define?",
`**Answer:** Performance (response times, batch windows), scalability (volumes, growth), availability and resilience, security, recoverability (RPO/RTO for PaaS components), maintainability, monitoring, and compliance.

Tip: Quantify each.`, 'D'],

["Resilience", "How do you design resilient integrations?",
`**Answer:** Retries with backoff for transient failures, idempotent processing, dead-letter handling, circuit breakers for failing targets, asynchronous decoupling with queues/streaming, monitoring and alerting, and replay capability.

Tip: Assume failures will happen.`, 'D'],

["OCI", "Which OCI services complement Oracle Fusion?",
`**Answer:** OIC (integration), Visual Builder (apps), Autonomous Database and ADW (data), Object Storage (files), Functions (serverless logic), API Gateway, Streaming (events), Vault (secrets), Logging and Monitoring, OCI Generative AI and AI services.

Tip: Name a solution combining several.`, 'D'],

["AI", "How do you architect AI solutions with Oracle applications?",
`**Answer:** Use embedded Fusion AI features and AI Agent Studio for in-app agents with Fusion security; for custom AI, use OCI Generative AI or other LLMs with retrieval (RAG) over approved data, tools exposed via secure APIs, guardrails, evaluation, monitoring, and human review for sensitive decisions.

Tip: Governance and security.`, 'D'],

["DevOps", "How do you design CI/CD for Oracle extensions and integrations?",
`**Answer:** Git repositories, VB Studio pipelines for extensions and apps, OIC project export/import automation (via REST APIs), automated tests, environment configuration management, approvals, and release notes.

Tip: Automate repeatable deployments.`, 'D'],

["Environments", "How do you plan Fusion environments?",
`**Answer:** Production and test pods (plus additional non-prod as needed for development, training, UAT), refresh (P2T/T2T) calendar aligned to project phases, quarterly update cadence, and matching PaaS environments.

Tip: Refresh planning affects testing.`, 'D'],

["Migration", "How do you architect an EBS-to-Fusion migration?",
`**Answer:** Assess EBS footprint and customizations, define target architecture and phasing (big bang vs phased by module/region), coexistence integrations, data migration architecture (extract-transform-load with reconciliation), retire customizations, plan extensions, and decommissioning/archival of EBS data.

Tip: Archive strategy for historical data.`, 'D'],

["Migration", "How do you handle historical data in a migration?",
`**Answer:** Migrate only open transactions and balances (plus limited history if required), archive history in a read-only data store or reporting warehouse, and keep legal retention compliance.

Tip: Avoid migrating everything.`, 'D'],

["Coexistence", "How do you design coexistence between EBS and Fusion?",
`**Answer:** Define systems of record per process, integrate master data and transactions via OIC (EBS adapter with connectivity agent and ERP Cloud adapter), align charts of accounts and calendars, and plan for reconciliation and eventual cutover.

Tip: Minimize coexistence duration.`, 'D'],

["Multi-pillar", "How do you integrate Fusion ERP, HCM and SCM with other platforms?",
`**Answer:** Fusion pillars share a common platform; external integrations follow standard patterns. For example, HCM → identity provisioning, ERP ↔ banks, SCM ↔ WMS/TMS/3PL, ERP ↔ CRM (Salesforce), with OIC as hub.

Tip: Hub-and-spoke vs point-to-point.`, 'D'],

["Governance", "How do you run a design authority?",
`**Answer:** Regular reviews of designs against principles and standards, decision logs (ADRs), exception handling, reuse checks, and alignment with enterprise architecture.

Tip: Lightweight but consistent.`, 'D'],

["Principles", "What architecture principles do you set for Oracle programs?",
`**Answer:** Adopt standard functionality first; extend, don't customize; API-first and event-driven where appropriate; single source of truth for master data; security by design; automate deployments; design for supportability and quarterly updates.

Tip: Principles guide decisions.`, 'D'],

["Performance", "How do you approach performance architecture?",
`**Answer:** Volume modeling, bulk patterns for high volumes, asynchronous processing, caching reference data, scheduling heavy jobs off-peak, and performance testing in SIT.

Tip: Model volumes early.`, 'D'],

["Monitoring", "How do you design observability for the Oracle landscape?",
`**Answer:** Centralized logging and monitoring (OIC monitoring, OCI Logging/Monitoring, APM), business transaction tracking, dashboards for integration health and SLAs, alerting to support tools (ServiceNow), and reconciliation reports.

Tip: Business-level observability.`, 'D'],

["Cost", "How do you manage costs in Oracle cloud architecture?",
`**Answer:** Right-size OIC message packs and PaaS services, schedule non-prod environments, monitor usage, avoid unnecessary data extracts, and review subscriptions regularly.

Tip: FinOps awareness.`, 'D'],

["Vendors", "How do you evaluate third-party tools around Oracle?",
`**Answer:** Fit to requirements and architecture, integration capability, security and compliance, total cost, vendor viability and support, and references.

Tip: Avoid tool sprawl.`, 'D'],

["Stakeholders", "How do you communicate architecture to executives?",
`**Answer:** Business outcomes, risks and costs of options, simple diagrams, and clear recommendations — avoiding technical detail unless asked.

Tip: Business language.`, 'B'],

["Stakeholders", "How do you handle disagreement with enterprise architecture?",
`**Answer:** Understand their standards and reasoning, present trade-offs with data, propose options, and escalate to a design authority decision if needed.

Tip: Constructive negotiation.`, 'D'],

["Scenario", "The business wants a custom feature Oracle doesn't support. What do you do?",
`**Answer:** Challenge the requirement and its value, check roadmap and standard alternatives, consider process change, and if still needed, design a side-by-side extension that doesn't break upgrades.

Tip: Value and upgrade safety.`, 'D'],

["Scenario", "Integration failures are causing month-end delays. How do you fix it?",
`**Answer:** Analyze failure patterns and root causes, redesign fragile integrations (idempotency, retries, validation upstream), add monitoring and reconciliation, and schedule critical integrations with buffers before close.

Tip: Systemic fix.`, 'D'],

["Scenario", "An acquisition needs to be onboarded to your Oracle instance in 90 days. What's your approach?",
`**Answer:** Assess the acquired company's processes and data, decide enterprise structure changes (new legal entities, ledgers, BUs), template-based configuration, prioritized integrations (banks, payroll), data migration of open items and balances, security roles, and phased go-live.

Tip: Template approach accelerates onboarding.`, 'D'],

["Behavioral", "Tell me about an architecture you designed.",
`**Sample answer:** "I designed the integration architecture for a global Fusion rollout: OIC hub with 60 integrations, event-driven order flows to WMS, BICC to ADW for analytics, SSO with Entra ID and automated provisioning from HCM. It supported four regional go-lives with standard patterns and low support effort."

Tip: Scope and principles.`, 'B'],

["Behavioral", "Tell me about a decision you made that didn't work out.",
`**Sample answer:** "We used point-to-point REST calls for a high-volume item sync; it hit API limits. We moved to batch FBDI with deltas. Now I model volumes before choosing patterns."

Tip: Learning.`, 'B'],

["Behavioral", "How do you keep technical leads aligned with architecture?",
`**Answer:** Clear principles and reference designs, design reviews, regular architecture forums, and being accessible for guidance.

Tip: Enable, don't police.`, 'B'],

["Strategy", "How do you build an Oracle technology roadmap?",
`**Answer:** Align to business strategy, assess current state, identify gaps (Redwood adoption, AI agents, analytics, integration modernization), prioritize initiatives by value and dependency, and plan quarterly increments.

Tip: Tie to quarterly update features.`, 'D'],

["Redwood", "What is the architectural impact of Redwood?",
`**Answer:** Shift of UI extensions to VB Studio, new personalization model, changes to test automation and training, and opportunities for consistent UX across custom VB apps using Redwood components.

Tip: Plan extension migration.`, 'D'],

["Compliance", "How do you design for SOX and audit requirements?",
`**Answer:** Controls in system configuration (approvals, SoD), change management for extensions and integrations, audit trails, IPE validation of reports used in controls, and access reviews.

Tip: Built-in compliance.`, 'D'],

["Disaster Recovery", "How do you approach DR for an Oracle SaaS landscape?",
`**Answer:** Oracle manages SaaS DR per its service descriptions; architects must plan DR for PaaS components (OIC, databases, VB apps) with defined RPO/RTO, backups, cross-region options, and runbooks; and business continuity procedures for integration outages.

Tip: Shared responsibility model.`, 'D'],

["Testing", "How do you ensure testability in architecture?",
`**Answer:** Modular integrations, mockable endpoints, test data strategies, automated regression for quarterly updates, and environment parity.

Tip: Design for testing.`, 'D'],

["Interview", "What questions would you ask in an architect interview?",
`**Answer:** "What's the current integration landscape and pain points?", "How many customizations exist?", "What's the governance model?", "What are the strategic priorities — AI, analytics, M&A?"

Tip: Diagnostic.`, 'B'],

["Career", "Why are you ready for an architect role?",
`**Sample answer:** "I've designed and governed integration and extension architectures for multi-country Fusion programs, led technical teams, and partnered with business and enterprise architecture."

Tip: Proof.`, 'B'],

["Closing", "Why should we hire you as Oracle technical architect?",
`**Sample answer:** "I bring deep Oracle SaaS and PaaS expertise, proven integration and extension architectures, strong security and governance practices, and a business-first mindset that keeps solutions upgrade-safe."

Tip: Value statement.`, 'B'],

["Patterns", "What is the strangler pattern and when is it useful?",
`**Answer:** Gradually replacing parts of a legacy system by routing functionality to new services until the old system can be retired — useful for phased EBS or legacy decommissioning.

Tip: Migration strategy.`, 'D'],

["Patterns", "What is a canonical data model?",
`**Answer:** A common, system-independent representation of business entities (customer, order) used in integrations so each system maps to the canonical model instead of to every other system.

Tip: Reduces mapping complexity.`, 'D'],

["Documentation", "What architecture artifacts do you produce?",
`**Answer:** Context and integration diagrams, solution architecture documents, ADRs, integration catalog, security architecture, NFR specifications, and environment/deployment diagrams.

Tip: Keep them current.`, 'B'],

["Analytics", "OTBI, BIP, FDI or OAC — how do you choose?",
`**Answer:** OTBI for real-time operational self-service; BIP for formatted documents and extracts; FDI for prebuilt cross-pillar analytics and KPIs with historical data; OAC for broader enterprise analytics and visualization across sources.

Tip: Use-case driven.`, 'D'],

["Identity", "How do you automate user provisioning in Fusion?",
`**Answer:** Drive provisioning from HCM (new hire → user account and role mapping rules), or from the corporate IdP via SCIM; automate deprovisioning on termination; and periodic access certification.

Tip: Joiner-mover-leaver process.`, 'D'],

["Leadership", "How do you mentor future architects?",
`**Answer:** Involve them in design decisions, explain trade-offs, review their designs, and give them ownership of architecture domains.

Tip: Build capability.`, 'B']
];

QB['et-arch'] = (QB['et-arch'] || []).concat([
["Integration", "How do you choose between OIC and other iPaaS tools?",
`**Answer:** Consider existing enterprise standards, prebuilt adapters for Oracle and other apps, licensing and cost model, team skills, monitoring and governance capabilities, and non-Oracle integration needs. OIC fits Oracle-heavy landscapes; MuleSoft, Boomi or Azure Integration Services may already be enterprise standards.

Tip: Align with enterprise standards.`, 'D'],
["Events", "How would you use OCI Streaming in an Oracle architecture?",
`**Answer:** As a Kafka-compatible event backbone for high-volume, real-time data flows — e.g. publishing order and inventory events from Fusion (via OIC) to multiple consumers like analytics, WMS and e-commerce — decoupling producers and consumers.

Tip: Fan-out to many consumers.`, 'D'],
["Governance", "How do you prevent integration sprawl?",
`**Answer:** Integration catalog with owners, reusable services, design authority approval for new integrations, retirement of unused ones, and monitoring of usage.

Tip: Catalog and ownership.`, 'D']
]);
