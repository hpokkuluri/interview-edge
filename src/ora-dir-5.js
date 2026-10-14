// Added Oct 2026: Redwood and AI Agent Studio questions for leaders.
QB['ora-dir'] = (QB['ora-dir'] || []).concat([
['AI Agent Studio', 'What is your strategy for AI agents on the Oracle ERP platform?',
`- **Start with Oracle-delivered agents** and AI Agent Studio (native security, lower risk).
- **Use-case portfolio** across AP, close, procurement, order management, HR — scored by value and risk.
- **Governance**: risk tiers, human approval for financial/commitment actions, evaluations, monitoring, audit involvement.
- **Skills**: build a small agent team in the ERP CoE.
- **Measure** value (cycle times, productivity) and cost (premium LLM tokens).`, 'D'],
['AI Agent Studio', 'How do you decide between Oracle AI Agent Studio and a general enterprise AI platform?',
`- **Oracle AI Agent Studio** for processes centered on Fusion data — inherits Fusion security, uses business objects, delivered templates, Oracle supports it.
- **Enterprise AI platform** for cross-system assistants and non-ERP use cases.
- Connect them via **A2A/MCP** and APIs instead of duplicating.
- Decide per use case; avoid building ERP agents outside Fusion without a reason.`, 'D'],
['Redwood', 'How do you fund and govern the Redwood transition?',
`- Treat it as a **program** with a budget: VBS rebuilds, testing, training.
- Use it to **simplify**: retire unneeded personalizations.
- **Timeline** driven by Oracle's classic retirement dates.
- **Governance**: change control for VBS extensions; regression automation.`, 'D'],
['Risk', 'What new risks do AI agents add to ERP, and how do you manage them?',
`- **Wrong actions or answers** → workflows, approvals, evaluations.
- **Data exposure** → least privilege, inherited security, credential store for external access.
- **Audit/compliance** → traces, control documentation.
- **Cost overruns** → token monitoring.
- **Dependency on vendors/models** → periodic re-evaluation.`, 'D'],
['Business Partnership', 'How would you present AI agent results to the CFO after a pilot?',
`- **Problem** and baseline.
- **Results**: time saved, cycle time, accuracy, user feedback.
- **Costs and risks**, control design.
- **Recommendation**: scale, adjust or stop; next use cases.`, 'B']
]);
