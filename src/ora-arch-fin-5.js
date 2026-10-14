// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio architecture questions.
QB['ora-arch-fin'] = (QB['ora-arch-fin'] || []).concat([
['AI Agent Studio', 'Explain the architecture of an AI agent in Oracle AI Agent Studio.',
`- **Agent**: instructions + topics + tools + an LLM, running natively in Fusion on OCI.
- **Tools** connect the agent to data and actions: Business Object (Fusion APIs), Document (RAG over documents, including external repositories), External REST/Connector, MCP, Email, Deep Link, User Session.
- **Workflows**: nodes (business object, code, email trigger, vector DB read/write, human approval, agent nodes) for deterministic, auditable processes; can be chained.
- **Security**: identity propagation — agents act with the user's Fusion roles; a **credential store** holds keys for external services.
- **Observability**: monitoring dashboard (sessions, latency, errors, tokens), tracing, evaluations.
- **Interoperability**: invoked from Fusion pages, Teams, external apps; **A2A** and **MCP** for cross-vendor agents and tools.`, 'D'],

['AI Agent Studio', 'When would you use a workflow agent instead of a free-form conversational agent?',
`- **Workflow** when steps are known, outcomes must be consistent and auditable (invoice exception routing, accrual preparation, supplier onboarding checks). Add **agent nodes** only where judgment/interpretation is needed.
- **Conversational** for open questions and help (policy Q&A, status inquiries).
- Finance generally favors workflows with **human approval nodes** for anything that changes financial data.`, 'D'],

['AI Agent Studio', 'How do RAG and document tools work in AI Agent Studio, and what should you watch for?',
`- **Document tool / vector DB nodes**: documents (policies, contracts, procedures) are chunked and embedded; the agent retrieves relevant pieces to ground answers. Oracle supports multimodal content and external repositories (e.g. SharePoint).
- **Watch for**: document quality and versioning (stale policies), access control on documents, citing sources/deep links, testing with tricky questions, and refreshing indexes when documents change.`, 'D'],

['AI Agent Studio', 'How would you connect a Fusion agent to non-Oracle systems?',
`- **External REST / Connector tools** for systems with APIs (bank portals, tax engines, CRM).
- **MCP tools** where the external system exposes an MCP server.
- **A2A** to collaborate with agents on other platforms.
- **OIC** behind the scenes for complex orchestration and transformations.
- **Credential store** for secrets; least-privilege service accounts; monitoring of failures.`, 'D'],

['AI Agent Studio', 'How do you choose the LLM for an agent?',
`- Oracle provides **Fusion-optimized models**, and you can choose premium models from several providers (OpenAI, Anthropic, Google, Meta, Cohere, xAI as announced).
- Choose by **task**: reasoning-heavy exceptions vs simple lookups; latency; cost (token usage for premium models); data/residency requirements.
- **Evaluate** candidates with the same evaluation set before deciding; re-evaluate when models change.`, 'D'],

['Redwood', 'Explain the Redwood extension architecture vs classic Fusion customization.',
`- **Classic (ADF)** pages: Page Composer/sandboxes, Application Composer in some areas, Groovy.
- **Redwood** pages: built on Oracle JET/Visual Builder; extended with **Visual Builder Studio** — page extensions (fields, layouts, rules in JavaScript-based events), stored in Git, deployed via pipeline.
- **Flexfields** remain the data extension mechanism.
- **APIs/FBDI unchanged**; deep-link formats can change.
- Architects should plan the **retirement of classic personalizations** and avoid fragile CSS/DOM tweaks — use Redwood design tokens and supported extension points.`, 'D'],

['Redwood', 'How do you build a custom Redwood-style application for Finance users?',
`- **Visual Builder Studio** to create a Redwood app using Fusion REST APIs (Business Objects) and Redwood components — looks native.
- Host as an extension or standalone VB app; SSO with Fusion identity.
- Use for gaps like a custom reconciliation workbench or a guided intake form.
- Include in the extension inventory, CI/CD and regression testing.`, 'D'],

['Fusion Platform', 'What changed in Fusion integration and data options recently that an architect should know?',
`- **Business events** + OIC for event-driven integration.
- **REST APIs** expanding across modules; FBDI remains for bulk.
- **BICC** for bulk extracts; **Fusion Data Intelligence** as the analytics platform.
- **AI Agent Studio** tools reuse the same business objects/APIs.
- **Redwood** page extensions via VBS.
Design new integrations around APIs and events; keep FBDI for volume.`, 'D'],

['Architecture', 'How would you redesign an AP process end to end using Fusion AI capabilities?',
`- **Intake**: e-invoicing + **IDR** for PDFs; agent handles supplier email questions.
- **Validation**: matching, tolerances, duplicate checks.
- **Exceptions**: workflow agent explains holds and routes to owners with recommended actions.
- **Approval**: rule-based; auto-approve matched invoices.
- **Payment**: optimized runs; agent answers payment status queries.
- **Controls**: human approvals for financial changes, audit traces, SoD.
- **KPIs**: touchless rate, days on hold, cost per invoice.`, 'D'],

['Accounting', 'How do you design SLA rules for a new revenue stream without disrupting existing accounting?',
`- Identify **event classes** and sources affected.
- **Copy and version** the accounting method; add new journal line rules/ADRs with conditions specific to the new stream.
- Use **supporting references** for reporting the new stream.
- Test with an **accounting matrix** including reversals and adjustments.
- Activate at a period start; reconcile the first close carefully.`, 'D'],

['Architecture', 'What does an "AI-ready" Finance platform need?',
`- **Clean master data** (suppliers, customers, COA, hierarchies).
- **Current releases and Redwood** adoption (AI features arrive there first).
- **APIs and events** documented; minimal custom code.
- **Security model** that's tight and well-understood (agents inherit it).
- **Governance**: AI use-case intake, evaluation, monitoring, audit involvement.
- **Data platform** (FDI) for analytics and model grounding.`, 'D']
]);
