// Performance review. {placeholders} from My Role profile.
QB['w-review'] = (QB['w-review'] || []).concat([
['Self-assessment', 'How would you rate your performance this period?',
`Confident and evidence-based.
"I'd say [exceeds/meets] expectations. Main reasons: {wins}; delivering {projects}; and [behavior, e.g. stepping up on {challenges}]."`, 'B'],

['Results', 'What were your key accomplishments?',
`3 accomplishments, each with result and business impact.
- "{wins} — impact: [number]."
- "[Accomplishment 2] — impact: [number]."
- "[Accomplishment 3, e.g. mentoring, process improvement]."`, 'B'],

['Results', 'Which goals did you not fully achieve, and why?',
`Own it without excuses.
"[Goal] is at [X%]. The main reason was [cause]. I learned [lesson], and the plan to close it is [action] by [date]."`, 'D'],

['Feedback', 'Here\'s an area where you need to improve.',
`Listen, clarify, commit.
"Thanks — can you share an example so I understand? I agree I can do better at [area]. My plan: [action 1], [action 2]. Could we review progress in [timeframe]?"`, 'D'],

['Feedback', 'What feedback do you have for me / the team?',
`One constructive, specific suggestion and one appreciation.
"What helps me: [practice]. One improvement: [suggestion] — it would help with [outcome]."`, 'B'],

['Development', 'What do you want to develop next year?',
`"I want to grow toward {goals}. That means building [skill 1] and [skill 2], through [project/training/mentoring]. Support I'd ask for: [specific]."`, 'B'],

['Goals', 'What should your goals be for next period?',
`Tie goals to {priorities}; make them measurable.
- "Deliver {projects} by [date] with [success measure]."
- "Improve [metric] from [X] to [Y]."
- "Develop [skill]; lead [initiative]."`, 'D'],

['Rating', 'Your rating is lower than you expected. What do you say?',
`Stay calm; seek understanding and a path.
"I appreciate you explaining. I saw it differently because of {wins}. Help me understand what would have made it [higher rating]. Can we agree on specific goals so I can get there next time, and check in quarterly?"`, 'D'],

['Prep', 'How should I prepare for my performance review?',
`- List results with numbers (keep a running "wins" log).
- Collect positive feedback from stakeholders.
- Know your development areas before they say them.
- Prepare your goals and asks (training, scope, promotion path).`, 'B'],

['Self-assessment', 'Write a short self-assessment summary.',
`"This period I delivered {wins} and drove {projects}, supporting {priorities}. I handled {challenges} by [action]. My focus next is [development area] as I work toward {goals}."`, 'B']
]);
