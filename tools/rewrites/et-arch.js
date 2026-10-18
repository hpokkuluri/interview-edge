// Rewritten ERP Technical — Oracle Technical Architect answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'How do you define an integration architecture for Oracle Fusion?':
`**Why they ask:** the core architect question.

**Answer:**
"I start by inventorying the systems and data flows. Then I define a small set of patterns: API-led REST, event-driven through business events, bulk through the ERP Integration Service and FBDI, analytics through BICC or Fusion Data Intelligence, and file transfer over SFTP. I choose the platform, usually OIC, with API Gateway and Streaming where needed. I standardize canonical models, error handling, security and monitoring. And I govern it through an integration catalog and a design authority."

Tip: If they allow it, draw a high-level diagram. It shows clarity of thought.`,

'What is API-led connectivity?':
`**Why they ask:** a common architecture concept.

**Answer:**
"It layers APIs into three tiers. System APIs give access to systems of record. Process APIs hold business logic and orchestration. Experience APIs are tailored to consumers like portals or mobile apps. It increases reuse and shields consumers from back-end changes."

Tip: Say it's useful framing even when the platform is OIC.`,

'When would you use events vs APIs vs batch?':
`**Why they ask:** pattern selection.

**Answer:**
"Events are for real-time notifications and decoupling, for example order approved, notify the warehouse. APIs are for request-response needs and lookups. Batch is for high volumes where some delay is acceptable, like daily journals or bulk loads. I choose by volume, latency, consistency and coupling."

Tip: Show the trade-off thinking. It's what architects are paid for.`,

'What is your extension strategy for Oracle SaaS?':
`**Why they ask:** protecting upgradeability.

**Answer:**
"Configure first. Then in-app extensions: flexfields, Application Composer, VB Studio Redwood extensions and AI Agent Studio. Then side-by-side extensions on OCI, like Visual Builder apps, Autonomous Database and Functions, connected through APIs and events. I never modify the SaaS core, and every extension has to be upgrade-safe."

Tip: Call it Oracle's version of a "clean core". Interviewers recognize the idea.`,

'How do you design data and analytics architecture around Fusion?':
`**Why they ask:** analytics architecture.

**Answer:**
"Fusion Data Intelligence or BICC feeds Autonomous Data Warehouse, and Oracle Analytics Cloud or another analytics platform sits on top. Pipelines are incremental, with master data governance, semantic models, and security aligned with Fusion roles. OTBI and BIP stay for operational reporting."

Tip: Separate operational and analytical reporting. It's the key principle.`,

'How do you approach master data management?':
`**Why they ask:** MDM is foundational.

**Answer:**
"I define the system of record for each domain: customers, suppliers, items, employees and the chart of accounts. Then governance processes and data owners, quality rules, synchronization patterns, and the tools, like Fusion Product Hub, Customer Data Management, or an MDM platform."

Tip: Say "ownership before tools". It's where MDM succeeds or fails.`,

'How do you design identity and access for Oracle Cloud?':
`**Why they ask:** identity architecture.

**Answer:**
"SSO with the corporate identity provider, like Microsoft Entra ID or Okta, through SAML or OIDC, with OCI IAM identity domains. Automated provisioning through SCIM or driven from HCM. Least-privilege role design and SoD controls. Integration users authenticate with OAuth. And audit logging."

Tip: Mention SoD tooling like Advanced Access Controls.`,

'How do you protect sensitive data across integrations?':
`**Why they ask:** data protection.

**Answer:**
"Encryption in transit with TLS and at rest. Field-level masking. Tokenization for card data. Least-privilege integration roles. Data classification. Secure key and credential management in OCI Vault. And masking in non-production."

Tip: Say "data classification first". You protect what you've classified.`,

'Which non-functional requirements do you define?':
`**Why they ask:** NFRs are an architect's responsibility.

**Answer:**
"Performance, like response times and batch windows. Scalability for volumes and growth. Availability and resilience. Security. Recoverability, with RPO and RTO for PaaS components. Maintainability. Monitoring. And compliance."

Tip: Say you quantify each one. Vague NFRs can't be tested.`,

'How do you design resilient integrations?':
`**Why they ask:** integrations fail; design for it.

**Answer:**
"Retries with backoff for transient failures, idempotent processing, dead-letter handling, circuit breakers for failing targets, asynchronous decoupling with queues or streaming, monitoring and alerting, and the ability to replay."

Tip: Say "assume failures will happen". It's the architect's mindset.`,

'Which OCI services complement Oracle Fusion?':
`**Why they ask:** platform breadth.

**Answer:**
"OIC for integration, Visual Builder for apps, Autonomous Database and ADW for data, Object Storage for files, Functions for serverless logic, API Gateway, Streaming for events, Vault for secrets, Logging and Monitoring, and OCI Generative AI and AI services."

Tip: Describe one solution that combines several. It shows design, not a list.`,

'How do you architect AI solutions with Oracle applications?':
`**Why they ask:** current architecture skills.

**Answer:**
"For in-app agents, I use Fusion's embedded AI and AI Agent Studio, which inherit Fusion security. For custom AI, I use OCI Generative AI or other LLMs with retrieval over approved data, tools exposed through secure APIs, guardrails, evaluation and monitoring, and human review for sensitive decisions."

Tip: Lead with governance and security. That's what clients worry about.`,

'How do you design CI/CD for Oracle extensions and integrations?':
`**Why they ask:** delivery maturity.

**Answer:**
"Git repositories, VB Studio pipelines for extensions and apps, automated OIC project export and import through its REST APIs, automated tests, environment configuration management, approvals and release notes."

Tip: Say "automate repeatable deployments". Manual moves cause errors.`,

'How do you plan Fusion environments?':
`**Why they ask:** environment strategy.

**Answer:**
"Production and test pods, plus more non-production environments as needed for development, training or UAT. A refresh calendar, production-to-test and test-to-test, aligned with project phases. The quarterly update cadence. And matching PaaS environments."

Tip: Say "refresh planning affects testing". Stale test data hides problems.`,

'How do you architect an EBS-to-Fusion migration?':
`**Why they ask:** a common architecture engagement.

**Answer:**
"I assess the EBS footprint and customizations, define the target architecture and phasing, big bang or phased by module or region, and design coexistence integrations. The data migration architecture is extract, transform and load with reconciliation. Customizations are retired where possible, extensions planned, and EBS is decommissioned with its data archived."

Tip: Mention the archive strategy. Historical data needs a home.`,

'How do you handle historical data in a migration?':
`**Why they ask:** a cost and compliance decision.

**Answer:**
"I migrate only open transactions and balances, plus limited history if the business needs it. The rest goes into a read-only archive or reporting warehouse, kept for legal retention."

Tip: Say "avoid migrating everything". It's expensive and rarely needed.`,

'How do you design coexistence between EBS and Fusion?':
`**Why they ask:** phased migration design.

**Answer:**
"I define the system of record for each process. Master data and transactions integrate through OIC, using the EBS adapter with the connectivity agent and the ERP Cloud adapter. Charts of accounts and calendars are aligned. And I plan reconciliation and the eventual cutover."

Tip: Say "minimize coexistence duration". It's costly to run.`,

'How do you integrate Fusion ERP, HCM and SCM with other platforms?':
`**Why they ask:** enterprise integration design.

**Answer:**
"The Fusion pillars share a common platform, so external integrations follow standard patterns. For example, HCM feeds identity provisioning, ERP connects to banks, SCM connects to WMS, TMS and 3PLs, and ERP connects to CRM like Salesforce, with OIC as the hub."

Tip: Contrast hub-and-spoke with point-to-point. Hub-and-spoke scales.`,

'How do you run a design authority?':
`**Why they ask:** governance practice.

**Answer:**
"Regular reviews of designs against principles and standards, decision records, a process for exceptions, reuse checks, and alignment with enterprise architecture."

Tip: Say "lightweight but consistent". Heavy governance gets bypassed.`,

'What architecture principles do you set for Oracle programs?':
`**Why they ask:** principles guide every decision.

**Answer:**
"Adopt standard functionality first. Extend, don't customize. API-first and event-driven where appropriate. One source of truth for master data. Security by design. Automated deployments. And design for supportability and quarterly updates."

Tip: Say "principles guide decisions". It's why you set them early.`,

'How do you approach performance architecture?':
`**Why they ask:** performance by design.

**Answer:**
"Volume modeling, bulk patterns for high volumes, asynchronous processing, caching reference data, scheduling heavy jobs off-peak, and performance testing in SIT."

Tip: Say "model volumes early". It decides the patterns.`,

'How do you design observability for the Oracle landscape?':
`**Why they ask:** operations.

**Answer:**
"Centralized logging and monitoring with OIC monitoring, OCI Logging and Monitoring, and APM. Business transaction tracking. Dashboards for integration health and SLAs. Alerts into support tools like ServiceNow. And reconciliation reports."

Tip: Say "business-level observability". Technical green doesn't mean business green.`,

'How do you manage costs in Oracle cloud architecture?':
`**Why they ask:** FinOps awareness.

**Answer:**
"I right-size OIC message packs and PaaS services, schedule non-production environments to shut down when idle, monitor usage, avoid unnecessary data extracts, and review subscriptions regularly."

Tip: Mention FinOps. It's a growing expectation of architects.`,

'How do you evaluate third-party tools around Oracle?':
`**Why they ask:** tool selection judgment.

**Answer:**
"Fit to requirements and the architecture, integration capability, security and compliance, total cost, vendor viability and support, and references."

Tip: Say "avoid tool sprawl". Every tool adds integration and skills cost.`,

'How do you communicate architecture to executives?':
`**Why they ask:** executive communication.

**Answer:**
"I talk about business outcomes, the risks and costs of each option, with simple diagrams and a clear recommendation, and avoid technical detail unless they ask."

Tip: Say "business language". It's the skill.`,

'How do you handle disagreement with enterprise architecture?':
`**Why they ask:** working within an organization.

**Answer:**
"I make sure I understand their standards and reasoning, present the trade-offs with data, propose options, and if needed, take it to the design authority for a decision."

Tip: Say "constructive negotiation". It shows maturity.`,

"The business wants a custom feature Oracle doesn't support. What do you do?":
`**Why they ask:** protecting the platform while serving the business.

**Answer:**
"I challenge the requirement and its value, check Oracle's roadmap and standard alternatives, and consider a process change. If it's still needed, I design a side-by-side extension that won't break on upgrades."

Tip: Balance value with upgrade safety. That's the answer.`,

'Integration failures are causing month-end delays. How do you fix it?':
`**Why they ask:** systemic problem solving.

**Answer:**
"I analyze the failure patterns and root causes. Then I redesign the fragile integrations with idempotency, retries and validation upstream. I add monitoring and reconciliation. And I schedule critical integrations with buffer time before close."

Tip: Say "systemic fix". Patching each failure won't solve it.`,

"An acquisition needs to be onboarded to your Oracle instance in 90 days. What's your approach?":
`**Why they ask:** M&A architecture.

**Answer:**
"I assess the acquired company's processes and data, decide the enterprise structure changes, new legal entities, ledgers and BUs, and configure from our template. I prioritize the integrations that matter on day one, like banks and payroll. I migrate open items and balances, set up security roles, and go live in phases."

Tip: Say "a template approach accelerates onboarding". It's the key.`,

'Tell me about an architecture you designed.':
`**Why they ask:** proof of architecture experience.

**Answer (example):**
"I designed the integration architecture for a global Fusion rollout: an OIC hub with 60 integrations, event-driven order flows to the WMS, BICC to ADW for analytics, SSO with Entra ID and automated provisioning from HCM. It supported four regional go-lives using the same patterns, with low support effort."

Tip: Give scope and the principles behind it.`,

"Tell me about a decision you made that didn't work out.":
`**Why they ask:** honesty and learning.

**Answer (example):**
"We used point-to-point REST calls for a high-volume item sync, and it hit API limits. We moved to batch FBDI loads with deltas. Now I model volumes before choosing a pattern."

Tip: State the lesson clearly. It's what they're listening for.`,

'How do you keep technical leads aligned with architecture?':
`**Why they ask:** influence across teams.

**Answer:**
"Clear principles and reference designs, design reviews, regular architecture forums, and being easy to reach for guidance."

Tip: Say "enable, don't police". It keeps leads on your side.`,

'How do you build an Oracle technology roadmap?':
`**Why they ask:** strategy.

**Answer:**
"I align to business strategy, assess the current state, and identify gaps, like Redwood adoption, AI agents, analytics and integration modernization. Then I prioritize initiatives by value and dependency and plan them in quarterly increments."

Tip: Tie it to quarterly update features. It keeps the roadmap realistic.`,

'What is the architectural impact of Redwood?':
`**Why they ask:** current architecture changes.

**Answer:**
"UI extensions move to VB Studio, there's a new personalization model, test automation and training need to change, and there's an opportunity for a consistent UX across custom Visual Builder apps using Redwood components."

Tip: Say "plan the extension migration". It's real work.`,

'How do you design for SOX and audit requirements?':
`**Why they ask:** compliance by design.

**Answer:**
"Controls in system configuration, like approvals and SoD. Change management for extensions and integrations. Audit trails. IPE validation of reports used in controls. And access reviews."

Tip: Say "built-in compliance". It's cheaper than bolting it on.`,

'How do you approach DR for an Oracle SaaS landscape?':
`**Why they ask:** resilience.

**Answer:**
"Oracle manages SaaS disaster recovery under its service descriptions. Architects plan DR for the PaaS components, OIC, databases and Visual Builder apps, with defined RPO and RTO, backups, cross-region options and runbooks, plus business continuity procedures for integration outages."

Tip: Name the shared responsibility model. It frames the answer.`,

'How do you ensure testability in architecture?':
`**Why they ask:** quality by design.

**Answer:**
"Modular integrations, endpoints that can be mocked, a test data strategy, automated regression for quarterly updates, and environment parity."

Tip: Say "design for testing". It saves months later.`,

'What questions would you ask in an architect interview?':
`**Why they ask:** shows how you diagnose.

**Answer:**
"I'd ask: What's the current integration landscape and its pain points? How many customizations exist? What's the governance model? And what are the strategic priorities, AI, analytics or M&A?"

Tip: Ask diagnostic questions. They show how you think.`,

'Why are you ready for an architect role?':
`**Why they ask:** readiness.

**Answer (sample):**
"I've designed and governed integration and extension architectures for multi-country Fusion programs, led technical teams, and worked closely with business leaders and enterprise architecture."

Tip: Back it with proof. Readiness claims need evidence.`,

'Why should we hire you as Oracle technical architect?':
`**Why they ask:** a closing question.

**Answer (sample):**
"I bring deep Oracle SaaS and PaaS expertise, proven integration and extension architectures, strong security and governance practices, and a business-first mindset that keeps solutions upgrade-safe."

Tip: End with business-first. It separates architects from engineers.`,

'What is the strangler pattern and when is it useful?':
`**Why they ask:** migration strategy.

**Answer:**
"The strangler pattern gradually replaces parts of a legacy system by routing functions to new services, until the old system can be retired. It's useful for phased EBS or legacy decommissioning."

Tip: Tie it to EBS migration. It's the practical use.`,

'What is a canonical data model?':
`**Why they ask:** integration design.

**Answer:**
"A canonical data model is a common, system-independent representation of business entities, like customer or order. Each system maps to the canonical model instead of to every other system, which cuts mapping complexity."

Tip: Explain the math: N systems, N mappings instead of N squared.`,

'What architecture artifacts do you produce?':
`**Why they ask:** documentation practice.

**Answer:**
"Context and integration diagrams, solution architecture documents, decision records, the integration catalog, security architecture, NFR specifications, and environment and deployment diagrams."

Tip: Say "keep them current". Outdated diagrams mislead.`,

'OTBI, BIP, FDI or OAC — how do you choose?':
`**Why they ask:** analytics tool selection.

**Answer:**
"OTBI for real-time operational self-service. BIP for formatted documents and extracts. FDI for prebuilt cross-pillar analytics and KPIs with history. OAC for broader enterprise analytics and visualization across many sources."

Tip: Say "use-case driven". The tool follows the need.`,

'How do you automate user provisioning in Fusion?':
`**Why they ask:** identity lifecycle.

**Answer:**
"Provisioning is driven from HCM, a new hire creates a user account and role mapping rules assign roles, or from the corporate identity provider through SCIM. Deprovisioning is automated on termination. And there's periodic access certification."

Tip: Call it the joiner-mover-leaver process. It's the standard term.`,

'How do you mentor future architects?':
`**Why they ask:** building capability.

**Answer:**
"I involve them in design decisions, explain the trade-offs, review their designs, and give them ownership of architecture domains."

Tip: Mention ownership of a domain. It's how architects grow.`,

'How do you choose between OIC and other iPaaS tools?':
`**Why they ask:** platform selection.

**Answer:**
"I consider existing enterprise standards, prebuilt adapters for Oracle and other apps, licensing and cost, team skills, monitoring and governance capabilities, and non-Oracle integration needs. OIC fits Oracle-heavy landscapes; MuleSoft, Boomi or Azure Integration Services may already be the enterprise standard."

Tip: Say "align with enterprise standards". Fighting them rarely pays.`,

'How would you use OCI Streaming in an Oracle architecture?':
`**Why they ask:** event architecture.

**Answer:**
"As a Kafka-compatible event backbone for high-volume, real-time data. For example, publishing order and inventory events from Fusion through OIC to several consumers, like analytics, the WMS and e-commerce, so producers and consumers are decoupled."

Tip: Mention fan-out to many consumers. It's the main reason to use it.`,

'How do you prevent integration sprawl?':
`**Why they ask:** governance at scale.

**Answer:**
"An integration catalog with owners, reusable services, design authority approval for new integrations, retiring unused ones, and monitoring usage."

Tip: Say "catalog and ownership". They're the foundation.`,

};
