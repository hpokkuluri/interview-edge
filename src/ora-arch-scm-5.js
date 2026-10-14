// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio architecture questions.
QB['ora-arch-scm'] = (QB['ora-arch-scm'] || []).concat([
['AI Agent Studio', 'Design an agentic architecture for order exception management in Fusion SCM.',
`- **Events**: order holds, scheduling failures, late shipments (business events / scheduled checks).
- **Workflow agent**: Business Object nodes gather order, supply (GOP), shipment and customer data → agent node classifies the exception and proposes actions (reschedule, split, substitute, expedite).
- **Human approval** for customer-impacting changes; Email/Deep Link tools notify owners.
- **External tools**: carrier tracking via REST/MCP; WMS status via connector.
- **Monitoring**: exception volumes, resolution time, agent accuracy.
- **Security**: identity propagation and least-privilege tools.`, 'D'],

['AI Agent Studio', 'How would you use MCP and A2A in a supply chain landscape?',
`- **MCP tools** let Fusion agents call tools exposed by other systems (WMS, TMS, supplier portals, planning tools) through a standard protocol.
- **A2A** lets a Fusion agent collaborate with agents on other platforms (e.g. a logistics provider's agent for tracking or rebooking).
- Architect: trust boundaries, credentials in the credential store, logging, rate limits, and clear ownership of each agent.`, 'D'],

['AI Agent Studio', 'What makes a supply chain agent safe to deploy at scale?',
`- **Deterministic workflows** for core steps; agents only where judgment is needed.
- **Draft-then-approve** for commitments (POs, order changes).
- **Evaluation sets** including edge cases and "must refuse" requests.
- **Tracing** and dashboards; alerting on error spikes.
- **Gradual rollout** by BU/site.
- **Fallback** to manual process when the agent or LLM is unavailable.`, 'D'],

['Redwood', 'How do Redwood and Visual Builder Studio change your extension strategy for SCM?',
`- Classic personalizations (Page Composer) will retire with classic pages — **rebuild only what's valuable** in VBS.
- Prefer **configuration and rules** in VBS over custom pages.
- For bigger needs (e.g. a dock scheduling screen), build a **Redwood app in Visual Builder** on Fusion REST APIs.
- Treat VBS assets as code (Git, reviews, pipeline, regression each quarter).`, 'D'],

['Redwood', 'What should you test when SCM pages switch to Redwood?',
`- End-to-end flows: requisition → PO → receipt → invoice; order → ship → bill; transfers; counts.
- **Mobile/tablet** use on the warehouse floor and **barcode scanning** behavior.
- **Printing** (labels, documents) and **notifications/deep links**.
- **VBS extensions** and rules.
- **Performance** for high-volume users.
- Reports embedded on pages.`, 'D'],

['Fusion Platform', 'How do you design integrations for Fusion SCM using business events?',
`- Subscribe in **OIC** to events like PO approved, shipment confirmed, receipt created, item released.
- Push to downstream systems (supplier portal, WMS, e-commerce, analytics) in near real time.
- **Idempotency** (events can repeat), ordering where needed, error queues and replay.
- Combine with REST lookups for full payloads.`, 'D'],

['Architecture', 'How would you architect supplier collaboration combining Fusion, portals and AI?',
`- **Supplier Portal** for POs, acknowledgments, ASNs, invoices.
- **B2B/EDI** for high-volume suppliers.
- **AI agent** to handle supplier emails (quotes, delays, invoice questions) — reads documents, updates drafts, answers status with deep links.
- **Supplier qualification** and risk data integrated.
- One supplier master; clear channel rules per supplier tier.`, 'D'],

['Planning', 'Where does AI help most in Fusion planning, and what are the limits?',
`- **ML forecasting** and demand sensing; anomaly detection in history.
- **Exception prioritization** and explanations for planners.
- **Scenario summaries** for S&OP.
- **Limits**: poor master data (lead times, BOMs) still breaks plans; planners must understand and own decisions; explainability matters for trust.`, 'D'],

['Architecture', 'How do you prepare an SCM landscape to adopt Oracle\'s AI features quickly?',
`- Stay **current on releases** and Redwood pages.
- **Clean data**: items, suppliers, customers, lead times.
- **API-first integrations** (so agents can reuse them).
- **Security model** reviewed — agents inherit it.
- **AI governance** and evaluation practice.
- **Pilot backlog** prioritized with business owners.`, 'B'],

['Product Hub', 'How would you architect item master governance with Redwood Product Management and AI?',
`- **Item classes, templates and rules** as the backbone.
- **NIR/change order workflows** in Redwood with team-based steps.
- **AI** for description generation, attribute enrichment from spec sheets, duplicate detection — proposals reviewed by stewards.
- **Events** publish released items to WMS, e-commerce, MES.
- Data quality KPIs on dashboards.`, 'D'],

['Order Management', 'How would you design order capture from multiple channels with agent support?',
`- **APIs** for e-commerce/CPQ/EDI orders into OM.
- **Agent** for email/PDF purchase orders: extracts lines, matches customer items, creates **draft orders** for review.
- **Validation** rules and pricing in OM.
- **Human review** queue for low-confidence extractions.
- Monitor extraction accuracy and order cycle time.`, 'D']
]);
