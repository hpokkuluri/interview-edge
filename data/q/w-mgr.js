// w-mgr — generated from src/w-mgr-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// 1:1 with my manager. {placeholders} are filled from the saved My Role profile.
QB['w-mgr'] = (QB['w-mgr'] || []).concat([
['Updates', 'What are you working on right now?',
`Lead with the one or two things that matter most to your manager, not a task list.

"My focus this week is {projects}. The most important piece is [the item tied to {priorities}] — it's on track for [date]. Smaller items are moving and I'll flag anything that slips."

Tip: Rank by business impact. End with "anything you want me to reprioritize?"`, 'B'],

['Updates', 'How is your main project going?',
`Use status → evidence → next step → ask.
- "Overall it's [green/amber]. We finished [milestone]; next is [milestone] by [date]."
- "One risk: {challenges}. My plan is [mitigation]."
- "Where I could use your help: [specific ask]."`, 'B'],

['Updates', 'What did you get done since we last met?',
`Pick 2–3 outcomes, not activities.
"Three things: [outcome 1], [outcome 2], and progress on {projects}. The one I'm proudest of is [result with a number]."`, 'B'],

['Priorities', 'What are your top priorities for the next two weeks?',
`"My top three are: 1) [deliverable on {projects}], 2) [item that supports {priorities}], 3) [maintenance/support item]. If something new lands, I'd drop [lowest priority] first — does that match what you'd want?"`, 'B'],

['Priorities', 'I need you to pick up something urgent. What can you drop?',
`Don't just say yes — show the trade-off.
"Happy to take it. Today I'm on {projects}. If I take this, [item] slips by about [time]. Option A: I pause [item]. Option B: [colleague] covers [part]. Which do you prefer?"`, 'D'],

['Blockers', 'Is anything blocking you?',
`Be specific and come with a proposed fix.
"Yes — {challenges}. I've tried [what you did]. What would unblock it is [decision/approval/intro from you] by [date]."
If nothing: "Nothing blocking right now. The thing I'm watching is [risk]."`, 'B'],

['Blockers', 'Why is this taking longer than planned?',
`Own it, explain briefly, give a new date and what changes.
"It's late by [time]. The main reason is [root cause]. I've [action taken]. New date is [date], and to protect it I'm [change]. Next time I'll flag earlier — I should have raised it at [point]."`, 'D'],

['Feedback', 'How do you think things are going for you?',
`Balanced and specific.
"Overall good. I've delivered {wins}. Where I want to get better is [one development area] — I'm working on it by [action]. I'd value your view: what should I do more of, and less of?"`, 'B'],

['Feedback', 'Do you have any feedback for me?',
`Make it safe and useful — one specific, constructive point.
"One thing that would help me: [e.g. earlier heads-up on priority changes / clearer decision owner on X]. Example: [situation]. It would let me [benefit]. And thanks for [something that genuinely helps]."`, 'D'],

['Feedback', 'Here\'s some critical feedback on your work.',
`Listen fully; don't defend in the moment.
"Thanks for telling me. To make sure I understand — is the concern [restate]? Can you give me an example? Here's what I'll change: [action]. Can we check in on it in [two weeks]?"`, 'D'],

['Workload', 'How is your workload?',
`Honest, with data.
"It's [manageable/heavy]. The biggest load is {projects} plus [support items]. I can sustain it through [date]. If more comes in, I'd need to drop or delay [item]."`, 'B'],

['Growth', 'Where do you want to be in a year or two?',
`"My goal is {goals}. To get there I want to build [skill/scope] — for example by leading [type of work]. Could we look for an opportunity like [specific idea] in the next quarter?"`, 'B'],

['Growth', 'What support do you need from me?',
`Ask for something concrete.
"Three things would help: visibility — a chance to present [work] to [leader]; scope — owning [area]; and feedback on [skill] after [meeting]."`, 'B'],

['Team', 'How is the team / collaboration with other teams going?',
`Positive first, then the real issue without blaming people.
"Working well with [team] on [item]. One friction point is [process issue] — it causes [impact]. I'd suggest [fix]; I can set up a quick sync if you agree."`, 'D'],

['Ideas', 'Any ideas to improve how we work?',
`Bring one idea tied to {priorities}.
"One idea: [improvement]. Today [pain] costs about [time/money]. A small pilot would take [effort]. If it works we could [scale]. Want me to draft a one-pager?"`, 'D'],

['Recognition', 'What are you most proud of recently?',
`"{wins}. What made it work was [your specific contribution], and it matters because it supports {priorities}."`, 'B'],

['Closing', 'Anything else on your mind?',
`Use this slot — don't waste it.
"Two quick things: [decision you need] and [heads-up on a risk]. And I'd like to set a goal for our next 1:1: [topic]."`, 'B'],

['Your questions', 'What should I ask my manager in a 1:1?',
`- "What's most on your plate this month, and how can I help?"
- "What would make you say I had a great quarter?"
- "Is there anything I'm doing that I should stop?"
- "What's coming up that I should get ahead of?"`, 'B']
]);
