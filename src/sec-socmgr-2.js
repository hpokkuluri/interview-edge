QB['sec-socmgr'] = (QB['sec-socmgr']||[]).concat([
["Severity", "How do you define incident severity levels?",
`**Answer:** A matrix combining impact (data sensitivity, number of systems or users, business process disruption) with confidence (suspected vs confirmed). Each level comes with response times, escalation contacts and communication requirements. Review the matrix yearly.

Tip: Severity drives who gets woken up.`, 'B', 'M'],
["Handover", "How do you make shift handovers reliable?",
`**Answer:** A standard handover template (open incidents, pending actions, watch items), a verbal briefing for critical cases, case ownership transferred explicitly in the ticketing system, and spot checks by leads.

Tip: Explicit ownership transfer.`, 'B', 'E'],
["Quality", "How do you run quality assurance on analyst work?",
`**Answer:** Weekly sampling of closed alerts, a scoring rubric (accuracy, evidence, documentation, timeliness), coaching feedback, and trends used to update training and playbooks.

Tip: Coach, don't punish.`, 'B', 'M'],
["Insider", "How does a SOC handle insider threat cases differently?",
`**Answer:** Restricted access to the case, coordination with HR and legal, privacy rules, careful evidence handling, and no tipping off the subject. Escalations go to a small named group.

Tip: Need-to-know.`, 'D', 'M'],
["Roadmap", "What would a 12-month SOC improvement roadmap include?",
`**Answer:**
- **Quarter 1:** baseline metrics, tune the noisiest rules, fix gaps in critical log sources.
- **Quarter 2:** SOAR enrichment, playbook refresh, tabletop exercises.
- **Quarter 3:** detection-as-code, ATT&CK coverage mapping, a hunting cadence.
- **Quarter 4:** purple team validation, career ladder, a review of the MDR contract.

Tip: Tie each quarter to a metric.`, 'D', 'M']
]);
