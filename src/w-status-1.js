// Status update & escalating a risk. {placeholders} from My Role profile.
QB['w-status'] = (QB['w-status'] || []).concat([
['Status', 'Give me a status update on your project.',
`RAG + milestones + risks + asks.
"Status: [green/amber/red]. Done: [milestones]. Next: [milestone] by [date]. Risk: {challenges} — mitigation [plan]. Ask: [decision/support]."`, 'B'],

['Status', 'Why is it amber/red?',
`"It's [amber] because [specific cause]. Impact if unresolved: [date slip/cost/quality]. We're doing [actions]. To get back to green I need [support] by [date]."`, 'B'],

['Escalation', 'How do I escalate a risk without looking like I can\'t handle it?',
`Escalate early with options — that's good judgment, not weakness.
"Raising early so we have options. Issue: [risk]. Impact: [impact] by [date]. Options: A) [option], B) [option]. I recommend [A] because [reason]. I need your decision by [date]."`, 'D'],

['Escalation', 'Why didn\'t you tell me sooner?',
`Own it briefly, then focus forward.
"You're right, I should have raised it at [point] — I was trying to resolve it first. Going forward I'll flag risks as soon as they could affect [date/cost]. Here's where we are and the plan."`, 'D'],

['Bad News', 'How do I deliver bad news to a leader?',
`- Say it in the first sentence.
- Give impact and what you're already doing.
- Offer options and a recommendation.
- Commit to the next update time.
"Bad news first: [issue]. Impact: [impact]. We've already [action]. Recommendation: [option]. Next update [time]."`, 'D'],

['Dependencies', 'Another team is blocking your work. What do you say?',
`Facts and a joint fix, not blame.
"We're waiting on [team] for [item], needed by [date]. I've [contacted X, offered Y]. If not resolved by [date], [impact]. Could you help by [specific escalation]?"`, 'D'],

['Scope', 'Can you add this feature and still hit the date?',
`Show trade-offs.
"We can do it with one of: move the date by [time], drop [item], or add [resource]. My recommendation is [option]."`, 'D'],

['Writing', 'Write a weekly status email.',
`Subject: {projects} — status [green/amber/red]
- **Summary:** one line.
- **Done this week:** 2–3 bullets.
- **Next week:** 2–3 bullets.
- **Risks & mitigation:** {challenges}.
- **Asks:** decisions needed and by when.`, 'B'],

['Executive', 'Summarize this for the VP in two lines.',
`"[Project] is [status]; [milestone] lands [date]. One risk — [risk] — mitigated by [plan]; need [decision] by [date]."`, 'B']
]);
