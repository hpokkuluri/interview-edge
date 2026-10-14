// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-lead-scm'] = (QB['ora-lead-scm'] || []).concat([
['Redwood', 'How do you lead a Redwood transition across Procurement, Inventory and Order Management?',
`- **Roadmap** from Oracle's readiness schedule: which SCM pages move when, and when classic pages are retired.
- **Impact by persona**: requesters, buyers, receivers, warehouse staff, order administrators.
- **Personalizations** inventory → rebuild in **Visual Builder Studio** only where valuable.
- **Testing** of end-to-end flows plus mobile/scanning use on the floor.
- **Training** on the floor with super users; avoid peak periods.
- **Hypercare** after each switch.`, 'D'],

['Redwood', 'What new capabilities in Redwood SCM pages would you highlight to the business?',
`- **Guided buying** and smarter search in requisitions.
- **Redwood purchase order and agreement** pages with clearer status and actions.
- **Redwood receiving/inventory** pages that are easier on tablets and mobile.
- **Product Management** NIR and change orders with better collaboration.
- **AI assistance**: summaries, suggested values, generated descriptions.
- Fewer clicks for common tasks.`, 'B'],

['AI Agent Studio', 'Design an AI agent workflow for supplier delivery delays.',
`- **Trigger**: scheduled daily or on supplier ASN/acknowledgment changes.
- **Business Object tools**: find PO schedules at risk (past promised date, no ASN), check affected sales/work orders.
- **Agent node**: assess impact and draft a supplier follow-up email and an internal summary.
- **Human approval node**: buyer reviews/edits and sends (Email tool).
- **Updates**: buyer records new promise dates; planners see impact.
- **Measure**: on-time delivery, expedites, buyer time.`, 'D'],

['AI Agent Studio', 'How would you use an AI agent with Product Management (item data)?',
`- **Item creation assistant**: proposes item class, attributes and description from a request or supplier spec sheet (Document tool).
- **Data quality agent**: finds duplicates or missing attributes and suggests fixes.
- **NIR helper**: summarizes pending NIRs and what's blocking them.
- Keep **approvals** in the NIR workflow; agents propose, people approve.`, 'D'],

['AI Agent Studio', 'What risks do AI agents bring to supply chain processes and how do you manage them?',
`- **Wrong actions** (ordering wrong items/quantities) → draft-only, human approval before commitments.
- **Data exposure** → Fusion security inheritance, least-privilege tools.
- **Hallucinated answers** to customers → ground answers in business objects; evaluation sets; show sources/deep links.
- **Cost** → monitor token usage for premium LLMs.
- **Change** → train users to review outputs critically.`, 'D'],

['Procurement', 'How would you improve requisition-to-PO cycle time in Fusion?',
`- Catalog and agreement coverage for top categories → **automatic PO creation**.
- **Smart forms** for common non-catalog requests.
- Simpler **approval rules**.
- **AI requisition assistant** for requesters.
- Measure and review weekly by category and BU.`, 'D'],

['Order Management', 'How would you design order hold management with AI assistance?',
`- **Holds** applied by rules (credit, pricing, compliance).
- **Agent** summarizes each held order: reason, customer history, recommended action.
- Credit analysts/order admins decide and release (human in the loop).
- Track hold duration and reasons; fix recurring root causes.`, 'D'],

['Inventory', 'How would you reduce cycle count adjustments at a DC?',
`- Analyze adjustments by item, locator, user and reason.
- Fix root causes: receiving delays, picking errors, UOM confusion, unrecorded scrap.
- **Scanning** and locator control.
- Tighten tolerances for A items; recount before approval.
- Weekly review with warehouse leads.`, 'D'],

['Costing', 'How do you explain a large purchase price variance to the business?',
`- Break PPV down by **item, supplier, category** and period.
- Causes: price increases, spot buys off-contract, outdated standards, currency movements, freight in price.
- Actions: update standards, negotiate agreements, enforce catalog buying.
- Present with trend charts and the top 10 drivers.`, 'D'],

['Product Hub', 'How would you design NIR workflows for a regulated company?',
`- Item classes with **required attributes** for regulated items (lot/shelf life, quality, storage).
- **Definition steps** for engineering, quality, procurement, planning, costing.
- **Approval steps** with electronic signatures where required.
- **Change orders** for any later change; audit trail.
- SLAs and dashboards for NIR cycle time.`, 'D'],

['Leadership', 'How do you prepare your SCM team for Oracle\'s AI roadmap?',
`- Oracle **learning paths** for AI Agent Studio; hands-on sandbox builds.
- Identify 3 pilot use cases with business owners.
- Pair functional and technical people.
- Share results and lessons in team sessions.
- Add AI skills to career plans.`, 'B']
]);
