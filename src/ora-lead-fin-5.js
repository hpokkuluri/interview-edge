// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-lead-fin'] = (QB['ora-lead-fin'] || []).concat([
['Redwood', 'You lead the Finance workstream and Oracle is retiring the classic pages you use. How do you plan it?',
`- **Track Oracle's schedule** in the quarterly readiness material — which Finance pages become Redwood and when classic is retired.
- **Impact assessment** by role: AP clerks, accountants, approvers, expense users.
- **Personalization inventory** and a rebuild plan in **Visual Builder Studio** (keep only what matters).
- **Regression test pack** updated for Redwood flows.
- **Change management**: super users, short videos, "what moved where" guides.
- **Sequence** by module outside close; measure tickets and cycle times after each switch.`, 'D'],

['Redwood', 'What governance would you put around Visual Builder Studio changes?',
`- Treat VBS changes like code: **workspaces in a Git repository**, peer review, testing in a test pod, and controlled **publish** by authorized admins.
- Naming standards and documentation of each extension.
- **SOX change management** evidence for controlled pages (approvals, testing).
- Regression on every quarterly update.
- Limit who has Visual Builder administrator roles.`, 'D'],

['AI Agent Studio', 'How would you design an AI agent for AP hold resolution?',
`- **Goal**: cut time invoices sit on hold.
- **Workflow**: triggered for new holds → **Business Object tools** read the invoice, PO, receipts, tolerances → **agent node** explains the cause and recommends an action (e.g. "receive remaining 20 units", "price differs from agreement by 4%") → routes to the right person (buyer, requester) with an **Email tool** and **Deep Link**.
- **Human in the loop**: people release holds or change POs.
- **Measure**: days on hold, holds per invoice, AP touches.
- **Pilot** with top suppliers; evaluate accuracy; scale.`, 'D'],

['AI Agent Studio', 'How do you decide whether to use a delivered Oracle agent, a partner agent or build your own?',
`- **Delivered agents/templates first** — supported by Oracle, updated with releases.
- **Marketplace (partner) agents** — when a validated partner agent fits a specific need.
- **Build your own** — when the process is specific to your company or combines your data and policies.
- Criteria: fit, maintenance effort, security, cost (premium LLM token usage), and how each affects controls.`, 'D'],

['AI Agent Studio', 'How do you keep finance controls intact when introducing AI agents?',
`- Agents inherit **Fusion roles and data access**; never give broader service access than needed.
- **No autonomous postings/payments** — human approval nodes for anything financial.
- **Audit trail**: traces and logs kept; agent actions identifiable.
- **SoD**: agent actions count under the user who invoked them.
- **Evaluations** and periodic review of accuracy.
- Involve **internal audit** early; document the control design.`, 'D'],

['AI Agent Studio', 'How would you measure the value of AI agents in Finance?',
`- **Before/after** baselines: cycle time (invoice processing, hold resolution, close tasks), touches per transaction, tickets/questions handled, errors.
- **Usage** and adoption from the monitoring dashboard.
- **Quality**: accuracy from evaluation sets and user feedback.
- **Cost**: token usage for premium LLMs vs time saved.
Report monthly to the controller.`, 'D'],

['Period Close', 'How would you use Fusion features to automate intercompany and close tasks?',
`- **Intercompany**: automatic balancing rules; intercompany transactions with auto-invoicing; reconciliation reports.
- **Allocations** and **recurring journals** in Calculation Manager, scheduled.
- **Auto-reversal** of accruals; **AutoPost** criteria.
- **Revaluation/translation** scheduled.
- **Close monitor** for status; AI agents for close insights where available.`, 'D'],

['Accounts Payable', 'How would you design approvals for non-PO invoices across 15 business units?',
`- Base routing on **cost center manager hierarchy** (from HCM) with **amount tiers**.
- BU-specific approval groups only where needed.
- **Auto-approval** for small amounts/trusted suppliers with post-review.
- **Fallback approver** when hierarchy data is missing.
- Monitor approval cycle time and rejection rates; fix HCM data issues fast.`, 'D'],

['Accounts Receivable', 'How would you handle unapplied cash that keeps growing?',
`- **Analyze** by customer and age; find causes: missing remittance, short payments, deductions, wrong customer.
- **Remittance capture** improvements (lockbox, email remittance with IDR/AI).
- **AutoMatch tuning** and application exception rules.
- **Deduction/dispute** process with sales.
- Weekly review with collectors; KPI target.`, 'D'],

['Tax', 'How would you manage US sales tax exemptions in Fusion?',
`- Capture **exemption certificates** per customer and jurisdiction (in Fusion Tax or the partner engine, e.g. Vertex/Avalara).
- Link exemptions to customer tax profiles; effective dates.
- **Audit** expiring certificates; reminders to customers.
- Test transactions with exempt and taxable lines.`, 'D'],

['Leadership', 'How do you upskill your team on Redwood and AI Agent Studio?',
`- Oracle **learning paths** and certifications (Fusion AI Agent Studio foundations, Visual Builder Studio).
- **Sandbox** practice: each consultant builds one agent and one VBS extension.
- **Show-and-tell** sessions weekly.
- Pair functional consultants with a technical lead for VBS/integration topics.
- Add these skills to development plans.`, 'B']
]);
