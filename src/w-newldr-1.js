// First meeting with a new leader. {placeholders} are filled from the saved My Role profile.
QB['w-newldr'] = (QB['w-newldr'] || []).concat([
["Introduction", "Tell me about yourself and your role.",
`**Why they ask:** a new leader is building a mental map of the organization. You have about 60 seconds to be memorable.

**Sample answer:**
"I'm {title} on {team}. I own {resp}. Right now my main focus is {projects}. A recent result I'm proud of is {wins}. Outside of the day-to-day, I'm looking to grow toward {goals}."

Tip: Role, scope, current focus, one win — then stop and let them ask.`, 'B'],

["Introduction", "What does your team do, in one sentence?",
`**Why they ask:** they'll repeat your description to others.

**Sample answer:**
"We keep the business systems running and evolving — {resp} — so operations, finance and customers can work without disruption."

Tip: Describe the business value, not the technology.`, 'B'],

["Value", "What value does your area bring to the business?",
`**Why they ask:** new leaders decide where to invest and what to cut.

**Sample answer:**
"Three things: stability (critical processes run every day), speed (we deliver changes the business needs, like {projects}), and risk reduction (audits and controls). A concrete example is {wins}."

Tip: Use business language — money, risk, speed, customers.`, 'B'],

["Priorities", "What are your top priorities right now?",
`**Why they ask:** to see if your priorities match theirs.

**Sample answer:**
"First, {projects}. Second, keeping operations stable during the change. Third, building team depth so we're not dependent on one or two people. I'd like to hear your priorities so we can align."

Tip: Share three and invite their view.`, 'B'],

["Listening", "What should I know that I might not hear from others?",
`**Why they ask:** they want honest insight without politics.

**Sample answer:**
"Our team is strong, but we carry a lot of single points of knowledge, which is a risk. Also, the business values responsiveness highly — {challenges} is the area where they feel the most pain right now."

Tip: Be candid about systems and risks. Don't criticize individuals.`, 'D'],

["Challenges", "What are the biggest challenges you face?",
`**Why they ask:** to understand risks and where they can help.

**Sample answer:**
"The main challenge is {challenges}. We're managing it through clear priorities and phased delivery. Where your support would help most is in aligning business stakeholders on what comes first."

Tip: Name the challenge, your plan, and where they can help.`, 'B'],

["Their Priorities", "What questions should I ask a new leader?",
`**Why they ask:** (your own question) good questions build the relationship.

**Sample answer (questions to ask):**
- "What are your top priorities for the first 90 days?"
- "What does success look like for our area in a year?"
- "How do you like to receive updates and escalations?"
- "What would you like me to keep doing, and what should change?"

Tip: Listen more than you talk in this first meeting.`, 'B'],

["Their Priorities", "What do you think my priorities should be?",
`**Why they ask:** a new leader may test your perspective on the business.

**Sample answer:**
"From where I sit, I'd focus on three things: getting {projects} over the line, reducing operational risk, and clarifying how teams prioritize requests. I'm curious how that compares with what you've heard so far."

Tip: Offer a view tied to business outcomes, humbly.`, 'D'],

["Working Style", "How do you like to work?",
`**Why they ask:** setting up the relationship.

**Sample answer:**
"I like clear priorities and room to execute. I send a short weekly update and raise risks early with options. I value direct feedback. How do you prefer to work and communicate?"

Tip: Share briefly, then adapt to them.`, 'B'],

["Working Style", "How often should we meet?",
`**Why they ask:** to establish cadence.

**Sample answer:**
"A 30-minute 1:1 every two weeks would work well, plus a short written update weekly. If you prefer more frequent check-ins during your first months, I'm happy to do weekly."

Tip: Suggest a cadence and stay flexible.`, 'B'],

["Team", "Tell me about your team.",
`**Why they ask:** talent assessment and where to invest.

**Sample answer:**
"We have strong depth in our core areas, and two people who are ready for more responsibility. Our gaps are in newer technologies and backup coverage. Morale is good, especially after {wins}."

Tip: Highlight strengths and stars; be constructive about gaps.`, 'D'],

["Wins", "What are you most proud of recently?",
`**Why they ask:** a quick read on your impact.

**Sample answer:**
"{wins}. What made it work was early alignment with the business and disciplined testing. It reduced issues and freed the business team to focus on customers."

Tip: One win with business impact and what made it work.`, 'B'],

["Problems", "What isn't working that I should fix?",
`**Why they ask:** new leaders want quick wins.

**Sample answer:**
"Request intake and prioritization across teams. Today urgent requests interrupt planned work, so delivery feels unpredictable. A single intake with clear priority rules would help everyone."

Tip: Suggest systemic fixes, not complaints about people.`, 'D'],

["Previous Leader", "How did things work under my predecessor?",
`**Why they ask:** context, but it can be a trap.

**Sample answer:**
"We had clear quarterly priorities and regular reviews, which worked well. One thing we could improve is faster decisions on cross-team trade-offs. I'm open to whatever approach you prefer."

Tip: Stay positive and factual. Never criticize the previous leader.`, 'D'],

["Career", "What are your career goals?",
`**Why they ask:** succession planning and engagement.

**Sample answer:**
"I'm aiming for {goals}. I'm excited to learn from your experience, and I'd value your view on what I'd need to demonstrate to get there."

Tip: Share goals briefly; don't make the first meeting about promotion.`, 'B'],

["Ideas", "If you had my job, what would you do first?",
`**Why they ask:** to hear ideas and assess strategic thinking.

**Sample answer:**
"I'd spend the first weeks listening to key stakeholders, then pick two quick wins — probably clearer prioritization and visible progress on {projects} — while building a longer-term roadmap tied to {priorities}."

Tip: Balance listening with action-oriented ideas.`, 'D'],

["Stakeholders", "Who are the key people I should meet?",
`**Why they ask:** you can help them navigate.

**Sample answer:**
"I'd suggest the heads of the main business teams we support, our key vendor partner, and the people who run critical operations day to day. Happy to set up introductions."

Tip: Offer introductions — it builds goodwill.`, 'B'],

["Risks", "What could go wrong in the next six months?",
`**Why they ask:** risk awareness.

**Sample answer:**
"The biggest risk is {challenges} colliding with year-end activity. Second is losing key knowledge if someone leaves. We're mitigating with a phased plan and cross-training."

Tip: Name risks with mitigation.`, 'D'],

["Follow-up", "How should I follow up after the first meeting?",
`**Why they ask:** (your own question) follow-up shows reliability.

**Sample answer (what to send):**
"Thank you for the time today. As discussed: I'll send a one-page overview of our scope and current priorities by Friday, and set up introductions with the business leads. Looking forward to working together."

Tip: Send within 24 hours with concrete next steps.`, 'B'],

["One-pager", "What should my one-page overview for a new leader include?",
`**Why they ask:** (your own question) a crisp summary is valuable to them.

**Sample answer (contents):**
- Scope: {resp}.
- Team structure and key people.
- Current priorities: {projects}.
- Recent wins: {wins}.
- Top risks and asks: {challenges}.
- Key metrics.

Tip: Keep it to one page with facts and numbers.`, 'B'],

["Change", "Are you open to changes in how we work?",
`**Why they ask:** new leaders often bring changes.

**Sample answer:**
"Absolutely. I'd appreciate understanding the goals behind any changes so I can help the team adopt them. I'll also share what's worked well so we keep the strengths."

Tip: Be open and constructive.`, 'B'],

["Concerns", "Do you have any concerns about the leadership change?",
`**Why they ask:** to surface worries early.

**Sample answer:**
"My main interest is continuity on {projects} and clarity on decision-making during the transition. Beyond that, I'm looking forward to it."

Tip: Raise practical concerns, not personal anxiety.`, 'D'],

["Metrics", "How do you measure success in your area?",
`**Why they ask:** data-driven leaders want metrics.

**Sample answer:**
"We track service stability (incidents and resolution times), delivery against plan, stakeholder satisfaction and audit findings. Recent trends are positive — for example {wins}."

Tip: Bring three or four metrics and trends.`, 'B'],

["Budget", "What resources does your area have?",
`**Why they ask:** understanding costs and constraints.

**Sample answer:**
"We have our internal team plus a support partner for routine work. Spending is mostly people and licenses. The constraint is capacity during peaks like {projects}."

Tip: Be factual and highlight constraints.`, 'D'],

["Expectations", "What do you need from me?",
`**Why they ask:** a partnership mindset.

**Sample answer:**
"Clarity on priorities, quick decisions on cross-team trade-offs, and support with stakeholders when we need to say 'not now'. In return, you'll get transparent updates and no surprises."

Tip: Ask for a few clear things and offer something in return.`, 'B'],

["Tone", "How do I make a strong first impression?",
`**Why they ask:** (your own question) first impressions stick.

**Sample answer (approach):**
- Come prepared with your one-pager.
- Be concise and positive.
- Show you understand the business, not just your tasks.
- Ask good questions and listen.
- Follow up quickly.

Tip: Confidence plus curiosity.`, 'B'],

["Politics", "What if the new leader asks about a difficult colleague?",
`**Why they ask:** a test of professionalism.

**Sample answer:**
"We've had different views on priorities at times, which is natural with competing demands. We've found ways to work through it, and clearer prioritization rules would help both teams."

Tip: Stay factual and constructive; avoid gossip.`, 'D'],

["Reorganization", "Will my role change under the new leader?",
`**Why they ask:** (your own question) uncertainty is common after leadership changes.

**Sample answer (what to say):**
"I'm excited to support your priorities. If you're considering changes to structure or roles, I'd value hearing early, and I'm keen to contribute where I can add the most value — especially around {resp}."

Tip: Show flexibility and highlight your value.`, 'D'],

["Quick Wins", "What quick wins can you deliver?",
`**Why they ask:** new leaders want early momentum.

**Sample answer:**
"In the next 30 days: finish the next milestone of {projects}, publish a simple dashboard of our key metrics, and clean up the request backlog with business owners."

Tip: Offer specific, achievable 30-day wins.`, 'B'],

["Long-term", "Where should this area be in two years?",
`**Why they ask:** strategic thinking.

**Sample answer:**
"Highly automated operations, a modern platform that supports {priorities}, strong business partnership, and a team with depth and growth paths."

Tip: Paint a clear, business-aligned picture.`, 'D'],

["Customer", "What do our business customers say about your team?",
`**Why they ask:** reputation check.

**Sample answer:**
"They value our responsiveness and expertise, especially after {wins}. The main feedback is wanting more visibility on when requests will be done, which we're improving with a shared roadmap."

Tip: Share praise and constructive feedback.`, 'B'],

["Personal", "What's something people don't know about you?",
`**Why they ask:** building rapport.

**Sample answer:**
"Outside work I enjoy cricket and cooking for family gatherings. And professionally, I've worked across both business and technical roles, which helps me bridge the two."

Tip: Something light and genuine, plus a professional angle.`, 'B'],

["Escalation", "When should I bring things to you?",
`**Why they ask:** setting decision rights early.

**Sample answer:**
"I'll handle day-to-day decisions within my scope. I'll bring you risks to commitments, cross-team conflicts, customer-impacting issues and anything needing budget. Tell me if you want to adjust that."

Tip: Propose clear rules.`, 'B'],

["Skip-level", "Should I meet my new leader's boss too?",
`**Why they ask:** (your own question) navigating levels.

**Sample answer (approach):**
Build the relationship with your direct leader first. If senior leaders invite you, prepare a short summary, stay aligned with your leader's messages, and tell your leader about the conversation.

Tip: Never go around your new leader.`, 'D'],

["Trust", "How do I earn a new leader's trust quickly?",
`**Why they ask:** (your own question) trust is built through reliability.

**Sample answer (approach):**
Deliver on small commitments quickly, communicate proactively, bring solutions with problems, be honest about risks, and support their priorities publicly.

Tip: Reliability beats brilliance early on.`, 'B'],

["Feedback", "What feedback would you give the organization?",
`**Why they ask:** candid perspective.

**Sample answer:**
"We're strong at solving urgent problems but less consistent at planning ahead. More predictable prioritization and investment in team depth would make a big difference."

Tip: Constructive and systemic.`, 'D'],

["Closing", "Anything else you'd like me to know?",
`**Why they ask:** a final open door.

**Sample answer:**
"Just that I'm committed to making your first months smooth. I'll send the overview and introductions this week, and I'm here if you need context on anything."

Tip: End with support and next steps.`, 'B'],

["Remote", "How do I connect with a new leader I only see on video?",
`**Why they ask:** (your own question) remote relationships need intention.

**Sample answer (approach):**
Camera on, concise written updates, occasional informal check-ins, and meeting in person when possible.

Tip: Be visible in writing.`, 'B'],

["Values", "What do you value in a leader?",
`**Why they ask:** understanding what motivates you.

**Sample answer:**
"Clear direction, trust to execute, honest feedback and support when things get tough. I do my best work with a leader who sets priorities and removes obstacles."

Tip: Positive and specific.`, 'B'],

["Transition", "How can you help me during my transition?",
`**Why they ask:** offers of help are noticed.

**Sample answer:**
"I can brief you on systems and history, introduce you to stakeholders, and keep key work stable while you get up to speed. Just tell me where you'd like context first."

Tip: Make concrete offers.`, 'B'],

["Strategy", "What's our biggest opportunity?",
`**Why they ask:** strategic insight.

**Sample answer:**
"Using the platform we're building with {projects} to automate manual work and give leaders better data. That directly supports {priorities}."

Tip: Tie opportunity to business goals.`, 'D'],

["Wrap-up", "What would make this partnership successful?",
`**Why they ask:** aligning on expectations.

**Sample answer:**
"Regular communication, shared priorities, quick decisions, and mutual honesty — including feedback in both directions."

Tip: Simple and sincere.`, 'B'],

["Avoid", "What should I avoid saying in the first meeting?",
`**Why they ask:** (your own question) common mistakes.

**Sample answer (avoid):**
- Complaints about colleagues or the previous leader.
- Immediately asking for promotion or a raise.
- Long technical details.
- Overpromising.

Tip: Positive, concise and business-focused.`, 'B'],

["Learning", "How do I learn what my new leader cares about?",
`**Why they ask:** (your own question) alignment.

**Sample answer (approach):**
Ask directly, read their communications and town hall messages, notice what they ask about in meetings, and confirm in 1:1s.

Tip: Listen for repeated themes.`, 'B'],

["Visibility", "How do I make my team visible to the new leader?",
`**Why they ask:** (your own question) recognition and support.

**Sample answer (approach):**
Invite them to a team meeting, share a short wins summary crediting individuals, and offer a demo of key work.

Tip: Credit the team specifically.`, 'B'],

["Context", "What history should I understand about this area?",
`**Why they ask:** context helps them avoid mistakes.

**Sample answer:**
"Key history: the platform has evolved over several years, we've completed major upgrades, and the current focus is {projects}. Past lessons — involving the business early and phasing big changes — still apply."

Tip: Brief history plus lessons.`, 'D'],

["Confidence", "How do I stay confident if the new leader is very senior?",
`**Why they ask:** (your own question) nerves are normal.

**Sample answer (approach):**
Prepare your one-pager, know your numbers, remember you're the expert on your area, and treat it as a conversation.

Tip: Preparation builds confidence.`, 'B']
]);
