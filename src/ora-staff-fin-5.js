// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio questions at principal level.
QB['ora-staff-fin'] = (QB['ora-staff-fin'] || []).concat([
['AI Agent Studio', 'How would you set up an enterprise operating model for AI agents on Oracle Fusion?',
`- **Intake and prioritization** of agent use cases with business owners (value, risk, feasibility).
- **Risk tiers**: informational agents (low), drafting/assisting (medium), agents that change records (high — human approval mandatory).
- **Standards**: instruction templates, tool usage rules, naming, evaluation-set requirements, monitoring thresholds.
- **Lifecycle**: build → evaluate → pilot → publish → monitor → re-evaluate on model/release changes.
- **Ownership**: each agent has a business owner and a technical owner.
- **Audit**: control documentation, traces retained, periodic review.`, 'D'],

['AI Agent Studio', 'How do you evaluate and monitor agent quality over time?',
`- **Evaluation sets** per agent: correctness, safety ("must refuse"), tone, tool-use correctness; run before each publish and after Oracle updates or LLM changes.
- **Monitoring dashboard**: sessions, latency, errors, token usage; alert on drift.
- **Tracing** to debug wrong answers (which tool returned what).
- **User feedback** loops.
- **Quarterly review** with owners; retire agents that don't deliver value.`, 'D'],

['AI Agent Studio', 'An agent gave a supplier the wrong payment date. How do you investigate?',
`- Pull the **trace** for that session: question, tools called, data returned, model output.
- Was the **data** wrong (payment schedule changed after), the **tool** wrong (filtered on the wrong field), or the **model** misread it?
- Fix accordingly: tool definition, instructions ("only quote dates from the scheduled payment record"), or add a **deep link** and caveat.
- Add the case to the **evaluation set**; re-run.
- Communicate with the supplier and AP.`, 'D'],

['AI Agent Studio', 'What is your view on letting agents post journals or release payments?',
`- Not autonomously in most organizations today. Agents can **prepare** (draft journals with support, recommend payment holds/releases), but posting and payment release stay with authorized humans via **approval nodes**.
- Revisit for low-risk, high-volume cases once accuracy is proven, controls are designed, and audit agrees (e.g. auto-clearing small reconciliation differences within policy).
- Document the decision in the control framework.`, 'D'],

['Redwood', 'How would you lead an enterprise-wide Redwood adoption program?',
`- **Roadmap** aligned with Oracle's classic retirement schedule; module waves.
- **Extension rationalization**: retire most personalizations; rebuild essentials in VBS with standards.
- **Regression automation** updated for Redwood.
- **Change management** at scale (role-based learning, super users).
- **Metrics**: adoption, ticket volumes, task times.
- **Engage Oracle** on gaps and bugs early.`, 'D'],

['Fusion Platform', 'How do you keep a Fusion Finance platform current with quarterly releases, Redwood and AI features?',
`- **Release governance**: assess every quarter (mandatory changes, Redwood pages, new AI features).
- **Opt-in decisions** with business owners; adoption roadmap.
- **Automated regression** (UI and API).
- **Sandbox** for evaluating new features and agents.
- **Communication** to users each release.
- Track value of adopted features.`, 'B'],

['Accounting', 'How would you design accounting controls around AI-assisted close tasks?',
`- AI prepares: **accrual proposals**, **reconciliation match suggestions**, **variance explanations**.
- Humans review/approve; postings go through normal **journal approval**.
- **Evidence**: agent outputs and traces attached to close tasks.
- **Thresholds**: materiality-based review levels.
- **Testing** of AI-assisted controls by internal audit.`, 'D'],

['Strategy', 'How do you build the business case for AI agents in Finance?',
`- **Baseline** volumes and effort (invoice exceptions, inquiries, reconciliations, collections emails).
- **Expected impact** from pilots (time per item, automation rate, error reduction).
- **Costs**: build/maintenance effort, premium LLM tokens, change management.
- **Risks and controls** cost.
- **Phased** value plan; measure actuals vs case.`, 'D'],

['Problem Solving', 'After a quarterly update, a Redwood page extension breaks month-end journal entry. What do you do?',
`- **Workaround**: users enter journals via **ADFdi spreadsheet** or (if still available) the classic page.
- **Diagnose** in test: VBS extension errors, changed components/events in the release.
- **Fix** the extension, test, publish; raise an **SR** if it's an Oracle regression.
- **Prevent**: add this flow to automated regression during the two-week test window; keep extensions on supported events and tokens.`, 'D'],

['Leadership', 'How do you build AI and Redwood skills across a Finance applications organization?',
`- **Skills matrix** and learning paths (AI Agent Studio, VBS, OIC, prompt/evaluation design).
- **Guilds** and internal demos.
- **Hands-on pilots** with real business problems.
- **Career paths** that reward these skills.
- External **certifications** and Oracle events.`, 'B']
]);
