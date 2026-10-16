QB['pd-tpm'] = (QB['pd-tpm']||[]).concat([
["Charter", "What goes in a project charter?",
`**Answer:** Purpose and business case, objectives and success criteria, scope and exclusions, key milestones, budget, stakeholders and sponsor, high-level risks and assumptions, and the project manager's authority.

Tip: The sponsor signs it.`, 'B', 'E'],
["WBS", "What is a work breakdown structure?",
`**Answer:** A hierarchical decomposition of the total scope into deliverables and work packages small enough to estimate and assign. It is the basis for schedule, cost and responsibility (RACI).

Tip: The 100% rule.`, 'B', 'E'],
["RACI", "What is a RACI matrix?",
`**Answer:** It defines roles for each activity or decision: **Responsible** (does the work), **Accountable** (one owner who signs off), **Consulted**, **Informed**. It prevents confusion about ownership.

Tip: Only one A per row.`, 'B', 'E'],
["Release", "How do you coordinate a multi-team release?",
`**Answer:** A release calendar, feature readiness tracking, integration testing windows, code freeze criteria, release notes, go/no-go, deployment runbook and rollback, and post-release monitoring.

Tip: Freeze criteria.`, 'B', 'M'],
["Incidents", "What is a TPM's role during a major production incident?",
`**Answer:** Often the incident coordinator: run communications, keep the timeline, coordinate teams, keep stakeholders updated, and drive the post-incident review and follow-up actions.

Tip: Coordination.`, 'B', 'M'],
["Security", "How do you include security and compliance in programs?",
`**Answer:** Involve security architects early, add security reviews and pen tests to milestones, track compliance requirements (SOX, privacy) as deliverables, and build lead time into the plan.

Tip: Plan for the lead time.`, 'D', 'M'],
["Agile at Scale", "How do you track progress across many agile teams?",
`**Answer:** Feature and epic burn-ups, PI objectives, dependency boards, flow metrics, and milestone-based roll-ups for leadership, without forcing teams into identical processes.

Tip: Roll-up without micromanaging.`, 'D', 'M'],
["Data Migration", "How do you manage data migration risk?",
`**Answer:** Early data profiling, cleansing ownership by the business, multiple mock loads with reconciliation, defined acceptance criteria, cutover rehearsals, and fallback plans.

Tip: Multiple mock loads.`, 'D', 'M']
]);
