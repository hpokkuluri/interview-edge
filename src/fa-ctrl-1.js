// Accounting Manager / Controller. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ctrl'] = (QB['fa-ctrl'] || []).concat([
['Role', 'What are a controller\'s main responsibilities?',
`- Accurate, timely **financial reporting** and close.
- **Internal controls** and SOX compliance.
- Accounting policies and technical accounting.
- External **audit** coordination.
- Team leadership; partnership with FP&A, tax, treasury and the business.`, 'B', 'S'],

['Close', 'How would you run a faster, cleaner close?',
`- Close calendar with dependencies and owners; daily close stand-ups.
- Pre-close activities; automated and recurring entries; reconciliation tools.
- Materiality thresholds; fix recurring adjustments at the source.
- Track metrics (days to close, post-close adjustments).`, 'D', 'M'],

['Controls', 'How do you design and assess internal controls?',
`- Start from **risks** (what could go wrong in each process).
- Design preventive and detective controls; key controls documented (risk control matrix).
- Test design and operating effectiveness; remediate gaps.
- Frameworks: **COSO 2013**.`, 'D', 'M'],

['Audit', 'How do you prepare for and manage an external audit?',
`- Agree timeline and PBC (prepared-by-client) list early.
- Clean reconciliations and documentation; technical accounting memos for significant judgments.
- One coordinator; track requests; resolve proposed adjustments quickly.
- Debrief and improve for next year.`, 'B', 'M'],

['Technical Accounting', 'How do you handle a complex accounting question?',
`- Research the standard (ASC/IFRS), interpretive guidance (Big 4 guides).
- Write a **position memo** (facts, issue, analysis, conclusion).
- Discuss with auditors early; document approvals.`, 'D', 'S'],

['Reporting', 'What do you include in a monthly management reporting pack?',
`- P&L vs budget/forecast/prior year with commentary.
- Balance sheet and cash flow highlights; key ratios and KPIs.
- Working capital (DSO, DPO, inventory days).
- Risks and one-offs.`, 'B', 'M'],

['Consolidation', 'What are the key steps in consolidation?',
`- Collect subsidiary results (local GAAP → group GAAP adjustments).
- **Currency translation** (CTA to OCI).
- **Intercompany eliminations**; minority interest; consolidation entries.
- Tools: Oracle FCCS, OneStream, HFM, SAP Group Reporting.`, 'D', 'S'],

['Systems', 'You are implementing a new ERP. What is the controller\'s role?',
`- Define **chart of accounts**, close and reporting requirements.
- Ensure controls are built into the system (approvals, SoD).
- Data migration validation and reconciliation; UAT sign-off.
- Parallel close or cutover readiness; train the team.`, 'D', 'S'],

['People', 'How do you develop your accounting team?',
`- Clear roles and backup coverage (cross-training).
- Rotations, CPA support, technical training.
- Regular feedback; recognize good work; manage workload around close.`, 'B', 'M'],

['Scenario', 'Your auditor proposes a material adjustment you disagree with. What do you do?',
`- Understand their basis; review the standard and facts.
- Present your analysis with documentation.
- Escalate to CFO/audit committee if needed; accept if their position is correct.
- Learn and adjust process.`, 'D', 'S'],

['Behavioral', 'Tell me about a control deficiency you found and fixed.',
`- Deficiency (e.g. manual JE without review), risk, remediation (workflow approval, thresholds), testing and result.`, 'B', 'S']
]);
