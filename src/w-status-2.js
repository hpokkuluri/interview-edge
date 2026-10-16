// Top-up. {placeholders} from the saved My Role profile.
QB['w-status'] = (QB['w-status'] || []).concat([
["Uncertainty", "We don't know yet whether we'll hit the date. What do I report?",
`**Why they ask:** (your own question) uncertainty must be reported honestly.

**Sample answer (what to say):**
"Status is amber. We'll know by Wednesday whether the data conversion passes. If it does, we're on track; if not, the date slips about a week. I'll update you Wednesday afternoon either way."

Tip: State what you know, what you don't, and when you'll know.`, 'B'],
["Recovery", "Show me the recovery plan.",
`**Why they ask:** leaders want confidence that red can become green.

**Sample answer:**
"Three actions: add two testers this week, run daily defect triage with the vendor, and move two low-priority features to phase two. With these, we expect to be back to green within two weeks; I'll report against each action every Friday."

Tip: Specific actions, owners, dates and a target status.`, 'D'],
["Escalation Fatigue", "How do I avoid escalating too often?",
`**Why they ask:** (your own question) escalations lose impact if overused.

**Sample answer (approach):**
Solve what's within your authority, batch minor issues into regular updates, and escalate only when commitments, customers or money are at risk — always with options.

Tip: Escalate decisions, not noise.`, 'B']
]);
