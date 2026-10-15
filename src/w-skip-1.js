// Skip-level with senior director. {placeholders} are filled from the saved My Role profile.
QB['w-skip'] = (QB['w-skip'] || []).concat([
['Intro', 'Tell me about yourself and what you do.',
`**Why they ask:** they may not see your work day to day.

**Sample answer:**
"I'm {title} on {team}. I'm accountable for {resp}. Right now my biggest focus is {projects}. A recent result I'm proud of is {wins}, which directly supports {priorities}."

Tip: 45–60 seconds, outcome first.`, 'B'],

['Team Health', 'How is the team doing?',
`**Why they ask:** skip-levels exist to hear what doesn't come through the normal chain.

**Sample answer:**
"The team is strong and committed. We've delivered a lot this year while keeping operations stable. The main strain is capacity — {challenges}. What would help most is backup coverage for our critical areas and clearer prioritization when new requests arrive. I've started on both."

Tip: Describe patterns and fixes, not individuals.`, 'B'],

['Team Health', 'What\'s working well, and what isn\'t?',
`**Why they ask:** looking for honest signal.

**Sample answer:**
"Working well: our weekly prioritization with the business — it's cut down surprise escalations a lot. Not working as well: urgent support work and project work compete for the same people, so projects get interrupted. Separating the two more clearly, with routine work going to our support partner, would help us deliver faster."

Tip: If something involves your manager, raise it with your manager first.`, 'D'],

['Manager', 'How is it working with your manager?',
`**Why they ask:** a normal check — and sometimes a probe.

**Sample answer:**
"Good. My manager gives me real ownership and supports me when I need decisions or escalations. One thing I'd like more of is exposure to senior stakeholders, and I've mentioned that to them as well."

Tip: Positive and brief. Never share what they told you privately.`, 'D'],

['Strategy', 'Do you understand where the organization is heading?',
`**Why they ask:** checking alignment.

**Sample answer:**
"My understanding is that our priorities are {priorities}. My work on {projects} supports that by making our systems reliable and ready for growth. One thing I'd value your view on: how do you see our function evolving over the next year or two?"`, 'D'],

['Ideas', 'If you were in my seat, what would you change?',
`**Why they ask:** testing leadership thinking.

**Sample answer:**
"I'd create a standard playbook for big changes — new business units, upgrades, major releases — covering design, testing, cutover and support. Each one would go faster and with less risk, and it frees senior people to work on improvements. I'd be happy to draft it."`, 'D'],

['Risks', 'What risks do you see that I might not hear about?',
`**Why they ask:** early warning.

**Sample answer:**
"Two. First, key-person risk — a few critical areas depend on one or two people; I'm addressing it with documentation and cross-training. Second, {challenges}, which could affect our dates if not managed. I have a plan for both and will flag early if anything changes."

Tip: Facts and plans, not gossip.`, 'D'],

['Career', 'What are your career goals?',
`**Why they ask:** retention and development.

**Sample answer:**
"My goal is {goals}. My scope has already grown well beyond my original role, and I'd like a clear path to formalize the next step. What would you want to see from someone ready for that level here?"

Tip: Ask for criteria — it turns ambition into a plan they can support.`, 'D'],

['Career', 'Are you happy here?',
`**Why they ask:** retention check.

**Sample answer:**
"Yes — I like the work and the team, and I want to grow here. The one thing I'd like is clarity on my next step, because I've been working toward it for a while."

Tip: Positive, honest, no ultimatum.`, 'B'],

['Support', 'What would help you do your best work?',
`**Why they ask:** genuinely looking for blockers they can remove.

**Sample answer:**
"Two things. Faster decisions from the business on scope and priorities — delays there push our dates. And visibility: a chance to present results directly to leadership, so the team's work is recognized."`, 'B'],

['Recognition', 'Who on the team deserves recognition?',
`**Why they ask:** looking for hidden stars — and how you lift others.

**Sample answer:**
"Several people stepped up on {projects}. In particular, one colleague took on difficult testing and cutover work over weekends and it made the difference for go-live. I'd love for that to be recognized."

Tip: Use real names and specifics.`, 'B'],

['Culture', 'Do people feel comfortable raising concerns?',
`**Why they ask:** testing psychological safety.

**Sample answer:**
"Mostly, yes. Where it's harder is when priorities change late — people hesitate to push back. A short regular retrospective would help people raise issues earlier."`, 'D'],

['Your questions', 'What should I ask in a skip-level?',
`- "What are the organization's top priorities this year?"
- "What do you wish our team did more of?"
- "What skills will matter most here in the next two years?"
- "What would you want to see from someone ready for the next level?"`, 'B'],

['Etiquette', 'How should I prepare for a skip-level?',
`- Three key updates with numbers, one risk with a plan, one idea.
- Tell your manager it's happening — no surprises.
- Be positive and solution-focused; never criticize colleagues.
- Follow up with a short thank-you and anything you promised.`, 'B']
]);
