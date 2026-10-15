// Skip-level with senior director. {placeholders} from My Role profile.
QB['w-skip'] = (QB['w-skip'] || []).concat([
['Intro', 'Tell me about yourself and what you do.',
`60 seconds, impact-focused.
"I'm {title} on {team}. I own {resp}. Right now I'm focused on {projects}. Recently {wins} — which helps with {priorities}."`, 'B'],

['Team Health', 'How is the team doing?',
`Honest and constructive; describe patterns, not people.
"Overall the team is [committed/stretched]. Strengths: [e.g. strong collaboration, quick turnarounds]. The main strain is {challenges}. One thing that would help is [fix]."`, 'B'],

['Team Health', 'What\'s working well, and what isn\'t?',
`"Working well: [process/practice] — it got us [result]. Not working as well: [process issue], which causes [impact]. I'd suggest [specific improvement]."
Tip: Keep it about process. If you'd criticize your manager, say it to your manager first.`, 'D'],

['Manager', 'How is it working with your manager?',
`Be fair and positive; raise concerns carefully and constructively.
"Good — [something they do well, e.g. clear priorities, protects the team]. One thing that would help me grow is [e.g. more exposure to senior stakeholders] — I've mentioned it to them too."`, 'D'],

['Strategy', 'Do you understand where the org is heading and how your work fits?',
`"My understanding is our focus is {priorities}. My work on {projects} supports that by [link]. Where I'd like more clarity is [question] — how do you see it?"`, 'D'],

['Ideas', 'If you were in my seat, what would you change?',
`One thoughtful idea with business value.
"I'd look at [area]. Today [pain] costs [time/money/risk]. A change like [idea] could [benefit]. I'd be happy to help pilot it."`, 'D'],

['Risks', 'What risks do you see that I might not hear about?',
`Surface facts, not gossip.
"Two I'd watch: {challenges}, and [risk, e.g. key-person dependency or upcoming deadline]. If nothing changes, the impact could be [impact]. A step that would help: [mitigation]."`, 'D'],

['Career', 'What are your career goals?',
`"{goals}. I'm building toward it through {projects} and [skill]. Your perspective would help: what do people at the next level do differently here?"`, 'B'],

['Career', 'What would help you do your best work?',
`"[Clearer decision rights on X / tools / headcount / visibility]. For example, [situation] took [time] because [reason]. With [change], we'd [benefit]."`, 'B'],

['Recognition', 'Who on the team deserves recognition?',
`Name people and specifics — it reflects well on you.
"[Name] did excellent work on [item] — they [specific action] and it [result]."`, 'B'],

['Culture', 'Do you feel comfortable raising concerns?',
`Honest; if not fully, suggest how to improve.
"Mostly yes. Where it's harder is [context]. Something like [regular retro/open forum] would help people speak up earlier."`, 'D'],

['Your questions', 'What should I ask in a skip-level?',
`- "What are the top priorities for the org this year?"
- "What do you wish our team did more of?"
- "What skills will matter most here in the next two years?"
- "What would you want to see from someone aiming for {goals}?"`, 'B'],

['Etiquette', 'How should I prepare for a skip-level?',
`- Know your 3 key updates and 1–2 ideas.
- Tell your manager it's happening; no surprises.
- Be positive and solution-oriented; never trash colleagues.
- Follow up with a short thank-you and any promised items.`, 'B']
]);
