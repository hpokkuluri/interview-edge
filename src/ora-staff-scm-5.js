// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio questions at principal level.
QB['ora-staff-scm'] = (QB['ora-staff-scm'] || []).concat([
['AI Agent Studio', 'How would you build a roadmap of AI agents for a global supply chain?',
`- **Wave 1 (assist)**: order and PO status agents, policy/procedure Q&A, item description generation.
- **Wave 2 (prepare)**: supplier quote/email intake to draft requisitions, order exception triage, supplier delay follow-up drafts.
- **Wave 3 (act with guardrails)**: automated rescheduling within rules, auto-creation of low-value POs under agreements, with monitoring and approval thresholds.
- Each wave: value cases, evaluation, controls, change management.`, 'D'],

['AI Agent Studio', 'How do you govern agents across Fusion and other platforms (WMS, TMS, partners)?',
`- **Registry** of agents (owner, purpose, tools, data, risk tier).
- **Interoperability standards**: MCP for tools, A2A for agent-to-agent, credential store for secrets.
- **Security**: least privilege, identity propagation, logging across platforms.
- **Monitoring** in one view where possible; incident process for agent errors.
- **Contracts** with partners covering agent behavior and data use.`, 'D'],

['AI Agent Studio', 'An order exception agent is rescheduling lines incorrectly for one region. How do you approach it?',
`- **Pause** autonomous actions for that region (switch to draft/approval).
- **Traces**: which data and rules led to the decision; compare with correct cases.
- Typical causes: regional sourcing rules, calendars, time zones, units of measure, incomplete data in tools.
- Fix tools/instructions/data; add regional cases to **evaluation sets**; re-enable gradually.`, 'D'],

['Redwood', 'How would you manage Redwood adoption across 30 warehouses and plants?',
`- **Pilot site** first with floor testing (devices, scanners, printers).
- **Wave plan** avoiding peaks; site readiness checklists.
- **Standard VBS extensions** for all sites; no site-specific variants without approval.
- **Training kits** and site champions.
- **Monitoring** of task times and errors after each wave.`, 'D'],

['Fusion Platform', 'How do you balance adopting Oracle\'s new SCM AI features vs third-party tools?',
`- **Embedded first** when it covers the need — security, data and upgrades handled by Oracle.
- **Third-party** when there is a clear capability gap (e.g. advanced optimization, specialized WMS AI).
- **Evaluate** with real data and the same KPIs.
- Consider integration cost, data duplication and lock-in.`, 'B'],

['Strategy', 'How would you measure ROI of AI in supply chain?',
`- **Service**: OTIF, order cycle time, promise accuracy.
- **Productivity**: buyer/planner/CS time per transaction.
- **Cost**: expedites, freight, inventory carrying cost.
- **Quality**: data errors, exceptions per order.
- **Cost of AI**: tokens, build/maintenance.
- Attribution via pilots vs control groups.`, 'D'],

['Product Hub', 'How would you use AI to clean a large legacy item master before migration?',
`- **Duplicate detection** with AI matching on descriptions, manufacturer part numbers, attributes.
- **Classification** into new item classes.
- **Attribute extraction** from descriptions and spec sheets.
- **Steward review** of proposals with confidence scores.
- Load clean data via import; track accuracy.`, 'D'],

['Compliance', 'How do AI agents fit into GxP-regulated SCM processes?',
`- Treat agents as part of the **validated system**: risk assessment, intended use, testing evidence (evaluation sets as test scripts).
- **Human decisions** for GxP actions (QA release, deviations).
- **Audit trails** of agent outputs and traces.
- **Change control** when instructions, tools or models change.
- Periodic review of performance.`, 'D'],

['Leadership', 'How do you get skeptical supply chain leaders to trust AI agents?',
`- Start with **low-risk, visible wins** (status questions, drafting emails).
- Show **traces and sources** — explainability.
- Keep **humans in control** of commitments.
- Share **metrics** from pilots.
- Involve leaders in defining guardrails.`, 'B'],

['Problem Solving', 'After moving to Redwood receiving pages, receiving throughput dropped 20%. What do you do?',
`- **Observe** on the floor: extra clicks, scanning issues, page load times, device problems.
- **Quick fixes** in VBS: defaults, hidden fields, field order.
- **Device/browser** settings; network checks.
- **Training** refreshers.
- Raise **Oracle SR/enhancement** for product gaps; measure until throughput recovers.`, 'D']
]);
