// Skip-level with senior director — additional questions.
QB['w-skip'] = (QB['w-skip'] || []).concat([
["Team Health", "How is morale on the team?",
`**Why they ask:** skip-levels are an early warning system for leaders.

**Sample answer:**
"Morale is generally good — people are proud of {wins}. The pressure point is workload during {projects}. Recognition from leadership when we hit the next milestone would go a long way."

Tip: Be honest and constructive, never personal.`, 'B'],

["Team Health", "Is anyone at risk of leaving?",
`**Why they ask:** retention of key people.

**Sample answer:**
"I don't want to speak for individuals, but in general people want clear growth paths and fair workload. Investing in development and backup coverage would reduce that risk."

Tip: Protect confidences; talk about themes.`, 'D'],

["Manager", "How is your manager doing?",
`**Why they ask:** a direct check on leadership — handle it carefully.

**Sample answer:**
"{manager} has been very supportive — especially in shielding the team during escalations and backing our priorities. One thing that would help us even more is earlier visibility of leadership priorities, which I think depends on information flowing down to both of us."

Tip: Lead with genuine positives. Frame suggestions as system improvements, not criticism.`, 'D'],

["Manager", "What could your manager do better?",
`**Why they ask:** they may be gathering feedback — or testing your loyalty.

**Sample answer:**
"I'd frame it as what would help the team: clearer prioritization across competing requests. That's something {manager} and I are already working on together."

Tip: Never undermine your manager. Show partnership.`, 'D'],

["Working", "What's working well?",
`**Why they ask:** to reinforce good practices.

**Sample answer:**
"Our collaboration with the business on {projects} — regular reviews and quick decisions have kept us on track. Also, our incident response has improved; recurring issues are down."

Tip: Specific examples with outcomes.`, 'B'],

["Not Working", "What's not working?",
`**Why they ask:** they want problems surfaced early.

**Sample answer:**
"Request intake across teams. Urgent requests arrive through many channels and disrupt planned work. A single intake and a monthly priority review with business leaders would make delivery more predictable."

Tip: One systemic issue with a solution.`, 'B'],

["Ideas", "If you were in my role, what would you change?",
`**Why they ask:** strategic thinking.

**Sample answer:**
"I'd invest in automation of routine operations and cross-training, so the team spends more time on {priorities} and less on manual work."

Tip: Business-level ideas.`, 'D'],

["Strategy", "Do you understand our strategy?",
`**Why they ask:** alignment check.

**Sample answer:**
"My understanding is we're focused on {priorities}. Our work on {projects} supports that directly. Is there anything changing that I should prepare the team for?"

Tip: Restate it, connect your work, ask a question.`, 'B'],

["Career", "How do you see your growth here?",
`**Why they ask:** talent planning at the next level up.

**Sample answer:**
"I want to grow toward {goals}. {manager} and I have a development plan. From your perspective, what experiences would make someone ready at that level?"

Tip: Show alignment with your manager and seek advice.`, 'B'],

["Career", "How can I mention promotion in a skip-level?",
`**Why they ask:** (your own question) delicate.

**Sample answer (what to say):**
"I'm working toward the next level with {manager}. What would you want to see from someone ready for that role?"

Tip: Ask for criteria, don't lobby. Tell your manager afterward.`, 'D'],

["Visibility", "What are you working on that I should know about?",
`**Why they ask:** visibility into impact.

**Sample answer:**
"{projects}, which supports {priorities}. A recent milestone was {wins}. The next phase lands next quarter and will reduce manual effort for the business."

Tip: Business outcomes first.`, 'B'],

["Risks", "What risks keep you up at night?",
`**Why they ask:** risk awareness.

**Sample answer:**
"Single points of knowledge on critical systems, and the timing of {challenges}. We're addressing both with cross-training and phased plans."

Tip: Risks with mitigation.`, 'D'],

["Customers", "What are our business customers saying?",
`**Why they ask:** voice of the customer.

**Sample answer:**
"They appreciate responsiveness and the results on {wins}. Their main request is more predictability on when changes will land."

Tip: Balanced.`, 'B'],

["Support", "What can I do to help your team?",
`**Why they ask:** senior leaders can remove bigger obstacles.

**Sample answer:**
"Help align business leaders on priorities at your level, so conflicting urgent requests get resolved earlier. And recognition for the team after {wins} would mean a lot."

Tip: Ask for things only they can do.`, 'B'],

["Culture", "How would you describe our culture?",
`**Why they ask:** cultural insight.

**Sample answer:**
"Collaborative and committed — people go above and beyond during critical moments. The opportunity is better planning so heroics aren't needed as often."

Tip: Honest and constructive.`, 'D'],

["Process", "Where do you see waste in how we work?",
`**Why they ask:** improvement ideas.

**Sample answer:**
"Duplicate status reporting and manual data pulls. A shared dashboard could save several hours per person per week."

Tip: Quantify.`, 'B'],

["Cross-team", "How is collaboration with other teams?",
`**Why they ask:** organizational friction.

**Sample answer:**
"Good with most teams. With one partner team, priorities sometimes conflict. Clear escalation rules and a shared roadmap would help."

Tip: Systemic, not personal.`, 'B'],

["Preparation", "What should I bring to a skip-level?",
`**Why they ask:** (your own question) preparation shows respect.

**Sample answer (checklist):**
- Three wins with business impact.
- One improvement idea with a solution.
- One question about strategy.
- Your career goal (briefly).
- Tell your manager it's happening and share key points afterward.

Tip: Never use it to complain about your manager.`, 'B'],

["Loyalty", "Are you planning to leave?",
`**Why they ask:** retention risk, sometimes asked directly.

**Sample answer:**
"No — I'm committed to the work and the team. Like anyone, I want to keep growing, and I'm working with {manager} on a path toward {goals}."

Tip: Reassure, then link to growth.`, 'D'],

["Feedback", "What feedback do you have for leadership?",
`**Why they ask:** upward feedback.

**Sample answer:**
"Town halls are helpful. More context on why priorities change would help teams adapt faster and feel included."

Tip: Respectful and specific.`, 'B'],

["Recognition", "Who on your team deserves recognition?",
`**Why they ask:** leaders want to know stars.

**Sample answer:**
"A team member led the testing that made {wins} possible. A note from you would be very motivating."

Tip: Name names generously.`, 'B'],

["Change", "How is the team handling recent changes?",
`**Why they ask:** change readiness.

**Sample answer:**
"People understand the direction but want clarity on roles and timelines. Regular updates from leadership would reduce uncertainty."

Tip: Constructive.`, 'B'],

["Confidentiality", "Will what I say get back to my manager?",
`**Why they ask:** (your own question) understanding norms.

**Sample answer (approach):**
Assume themes may be shared. Speak in a way you'd be comfortable with your manager hearing.

Tip: No surprises for your manager.`, 'D'],

["After", "What should I do after the skip-level?",
`**Why they ask:** (your own question) close the loop.

**Sample answer (approach):**
Send a short thank-you note with any follow-ups, and brief your manager on topics discussed.

Tip: Transparency with your manager.`, 'B'],

["Industry", "What trends do you see affecting our area?",
`**Why they ask:** broader perspective.

**Sample answer:**
"AI-assisted operations, cloud platform changes and tighter security expectations. We should build skills now so we're ready to support {priorities}."

Tip: Connect trends to action.`, 'D'],

["Wins", "What are you most proud of?",
`**Why they ask:** impact and values.

**Sample answer:**
"{wins} — especially how the team pulled together and how we kept the business informed throughout."

Tip: Credit the team.`, 'B'],

["Growth", "What skills are you developing?",
`**Why they ask:** development mindset.

**Sample answer:**
"Executive communication and strategic planning, plus skills related to {priorities}. I'm taking on a cross-team initiative to practise."

Tip: Show action.`, 'B'],

["Questions", "What should I ask a senior director?",
`**Why they ask:** (your own question) good questions build rapport.

**Sample answer (questions):**
- "What are your top priorities for the next year?"
- "What would make our team even more valuable to you?"
- "What do you see as our biggest risk?"
- "What advice would you give someone growing toward {goals}?"

Tip: Strategic and curious.`, 'B'],

["Conflicts", "What if I disagree with a decision from above?",
`**Why they ask:** maturity.

**Sample answer:**
"I'd share concerns with data through the right channel, and once a decision is made, I'd support it fully with my team."

Tip: Disagree and commit.`, 'D'],

["Tone", "How formal should a skip-level be?",
`**Why they ask:** (your own question) calibration.

**Sample answer (approach):**
Professional but conversational: prepared, concise, and open. Treat it as a relationship-building conversation.

Tip: Prepared, not scripted.`, 'B'],

["Resources", "Does your team have what it needs?",
`**Why they ask:** resource planning.

**Sample answer:**
"Mostly. Our gap is backup coverage on critical systems and capacity during peaks like {projects}."

Tip: Specific gaps.`, 'B'],

["Engagement", "What motivates you?",
`**Why they ask:** retention and fit.

**Sample answer:**
"Solving meaningful business problems, seeing the impact of our work, and growing people on the team."

Tip: Genuine.`, 'B'],

["Remote", "How do you keep the team connected?",
`**Why they ask:** team cohesion.

**Sample answer:**
"Regular stand-ups, a weekly win-sharing slot and occasional in-person sessions. Recognition keeps energy up."

Tip: Concrete practices.`, 'B'],

["Hard Truth", "What's something leadership doesn't want to hear?",
`**Why they ask:** candor test.

**Sample answer:**
"That we're relying on heroics during peak periods. It works, but it isn't sustainable — investing in automation and coverage would reduce risk."

Tip: Honest, solution-oriented.`, 'D'],

["Closing", "Anything else on your mind?",
`**Why they ask:** a final open door.

**Sample answer:**
"Just thank you for the time. I'm excited about {projects} and happy to help with anything that supports {priorities}."

Tip: End positively.`, 'B'],

["Follow-through", "How do I show I acted on their advice?",
`**Why they ask:** (your own question) follow-through builds credibility.

**Sample answer (approach):**
At the next interaction, reference their advice and what you did: "You suggested X; I've done Y, and here's the result."

Tip: Closes the loop.`, 'B']
]);
