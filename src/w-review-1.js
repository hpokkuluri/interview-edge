// Performance review. {placeholders} are filled from the saved My Role profile.
QB['w-review'] = (QB['w-review'] || []).concat([
["Self-assessment", "How would you summarize your year?",
`**Why they ask:** your opening frames the whole review.

**Sample answer:**
"It was a strong year. As {title}, I delivered {wins}, kept operations stable while we worked on {projects}, and grew in {goals}. The biggest challenge was {challenges}, and I handled it through phased planning and close work with the business."

Tip: Three outcomes, one challenge handled, in under a minute.`, 'B'],

["Self-assessment", "How do I write a strong self-assessment?",
`**Why they ask:** (your own question) many managers copy from it.

**Sample answer (structure):**
- Results against each goal, with numbers (time saved, cost, incidents reduced).
- Key projects: {projects} — your role and impact.
- How you worked: collaboration, leadership, values.
- Growth: what you learned and areas you're developing.
- Next-year goals.

Tip: Use specific examples and numbers. Keep a running wins document all year.`, 'B'],

["Results", "Which goals did you meet, and which did you miss?",
`**Why they ask:** honesty and ownership.

**Sample answer:**
"I met three of four goals: {wins}, stable operations, and the milestone on {projects}. I missed the automation goal by a quarter because we prioritized the urgent business request. It's now on track for next quarter."

Tip: Own misses with reasons and a recovery plan — no excuses.`, 'B'],

["Impact", "What's your biggest accomplishment this year?",
`**Why they ask:** to understand your impact in business terms.

**Sample answer:**
"{wins}. The business impact was fewer escalations and faster processing for the teams we support. My role was leading the plan, aligning stakeholders and making sure we tested thoroughly."

Tip: Situation, your actions, measurable outcome.`, 'B'],

["Impact", "How did you contribute beyond your job description?",
`**Why they ask:** to see readiness for bigger roles.

**Sample answer:**
"I mentored two team members, led a cross-team improvement on request intake, and represented our area in leadership reviews. These go beyond {resp} and show the scope I'm ready for."

Tip: Show leadership behaviors at the next level.`, 'D'],

["Development", "What are your development areas?",
`**Why they ask:** self-awareness.

**Sample answer:**
"Two areas. First, delegating more so I can focus on strategy — I've started by handing off daily triage. Second, executive communication — I'm practicing shorter, outcome-first updates. I'd value your feedback on both."

Tip: Real areas, with actions already in progress.`, 'B'],

["Feedback", "Here's feedback you might not agree with. How do you respond?",
`**Why they ask:** maturity in hard conversations.

**Sample answer:**
"Thank you. Can you help me understand specific examples? … I see your point on the first one. On the second, I'd like to share some context. Either way, I'll take the feedback seriously and we can review progress next quarter."

Tip: Listen, seek examples, add context calmly, commit to action.`, 'D'],

["Rating", "What rating do you think you deserve?",
`**Why they ask:** to calibrate expectations.

**Sample answer:**
"Based on delivering {wins}, meeting most goals, and taking on extra leadership, I believe I've exceeded expectations. I'd like to understand how you see it and what would distinguish the top rating."

Tip: State your view with evidence, then listen.`, 'D'],

["Rating", "I received a lower rating than I expected. What do I say?",
`**Why they ask:** (your own question) reacting well matters.

**Sample answer (what to say):**
"I was hoping for a higher rating, so I'd like to understand the gap. Which outcomes or behaviors would have earned it? Could we agree specific goals so I'm clearly on track next year?"

Tip: Stay calm, ask for specifics, and turn it into a plan. Escalate only through proper channels if facts are wrong.`, 'D'],

["Rating", "How do I challenge a rating that's factually wrong?",
`**Why they ask:** (your own question) disagreement must be evidence-based.

**Sample answer (what to say):**
"I'd like to revisit one point. The review says the project missed its date, but we delivered on the revised date agreed in March. Here's the email confirming that. Could we update the record?"

Tip: Use facts and documentation, not emotion.`, 'D'],

["Goals", "What are your goals for next year?",
`**Why they ask:** alignment and ambition.

**Sample answer:**
"Three goals: complete {projects} with measurable business benefits, reduce recurring issues by 25%, and develop toward {goals} by leading a cross-team initiative. Each supports {priorities}."

Tip: Measurable, business-aligned, with one growth goal.`, 'B'],

["Values", "How did you demonstrate our company values?",
`**Why they ask:** many reviews score behaviors as well as results.

**Sample answer:**
"Customer focus: I worked directly with the business to solve their top pain point. Collaboration: I partnered across teams on {projects}. Integrity: I raised a risk early even though it meant delaying a date."

Tip: Map one example to each value.`, 'B'],

["Collaboration", "How did you work with other teams?",
`**Why they ask:** cross-functional effectiveness.

**Sample answer:**
"On {projects} I set up regular reviews with business and technical teams, agreed clear owners for each decision, and resolved conflicts quickly. Stakeholders gave positive feedback in the mid-year survey."

Tip: Show structure and outcomes.`, 'B'],

["Leadership", "How have you developed others?",
`**Why they ask:** leaders are measured on the team they build.

**Sample answer:**
"I mentored two junior team members — one now leads incident triage independently. I created knowledge-sharing sessions that reduced single points of failure."

Tip: Name outcomes for people you developed.`, 'D'],

["Challenges", "What was your biggest challenge and how did you handle it?",
`**Why they ask:** resilience and problem-solving.

**Sample answer:**
"{challenges}. I broke the work into phases, negotiated priorities with the business, and added weekly risk reviews. We delivered the critical parts on time and moved the rest to the next phase."

Tip: Challenge, actions, result, lesson.`, 'B'],

["Mistakes", "Tell me about a mistake this year.",
`**Why they ask:** ownership and learning.

**Sample answer:**
"I underestimated the testing time for one change, which caused a short issue after release. I owned it, fixed it the same day, and introduced a testing checklist that has prevented repeats."

Tip: Choose a real but contained example, with prevention.`, 'B'],

["Career", "Where do you want your career to go?",
`**Why they ask:** development planning and retention.

**Sample answer:**
"I'm working toward {goals}. Next year I'd like experiences that build toward that — broader scope and more exposure to senior stakeholders. Can we include that in my development plan?"

Tip: Tie aspirations to concrete development actions.`, 'B'],

["Promotion", "How do I connect my review to promotion?",
`**Why they ask:** (your own question) reviews are evidence for promotion cases.

**Sample answer (what to say):**
"I'd like this review to reflect progress toward the next level. Which of my accomplishments demonstrate next-level performance, and what gaps remain? Can we agree a timeline?"

Tip: Ask for criteria, evidence and a timeline.`, 'D'],

["Compensation", "How do I discuss pay during a review?",
`**Why they ask:** (your own question) reviews often link to pay.

**Sample answer (what to say):**
"Given the results this year — {wins} and expanded scope in {resp} — I'd like to understand how my pay compares to the market and the range for my role. What can we do in this cycle?"

Tip: Base the case on scope, results and market data.`, 'D'],

["Peer Feedback", "Your peers said you can be too direct. How do you respond?",
`**Why they ask:** self-awareness and growth.

**Sample answer:**
"That's useful feedback. I value directness for speed, but I can adjust how I deliver it. I'll ask more questions first and acknowledge others' views before giving my position, and I'll check in with peers in a few months."

Tip: Acknowledge, adjust behavior, follow up.`, 'D'],

["Strengths", "What are your key strengths?",
`**Why they ask:** to confirm what to leverage.

**Sample answer:**
"Ownership — I see things through, like {wins}. Problem-solving under pressure. And building trust with business stakeholders. I'd like to use these more in leading cross-team work."

Tip: Three strengths with evidence.`, 'B'],

["Support", "What support do you need next year?",
`**Why they ask:** managers want to enable success.

**Sample answer:**
"Clear priorities from leadership, backup coverage to free time for {projects}, and a stretch assignment toward {goals}. A training budget for one targeted course would also help."

Tip: Specific, reasonable asks.`, 'B'],

["Manager Feedback", "Do you have feedback for me as your manager?",
`**Why they ask:** a two-way relationship.

**Sample answer:**
"Your support during escalations made a real difference. One request: more context on leadership priorities earlier, so I can plan the team's work ahead of changes."

Tip: Appreciation plus one constructive request.`, 'B'],

["Preparation", "How should I prepare for my review meeting?",
`**Why they ask:** (your own question) preparation drives better outcomes.

**Sample answer (checklist):**
- Re-read your goals and self-assessment.
- List three top wins with numbers.
- Prepare one growth area with actions.
- Decide your ask (rating, development, pay, promotion path).
- Prepare questions about next year.

Tip: Walk in knowing the one outcome you want.`, 'B'],

["Mid-year", "How do I use a mid-year review well?",
`**Why they ask:** (your own question) mid-year is the time to correct course.

**Sample answer (what to say):**
"Here's progress on each goal. Two are on track, one is at risk because priorities shifted toward {priorities}. Should we adjust that goal? What would make my year-end review outstanding?"

Tip: Adjust goals and ask what 'outstanding' looks like.`, 'B'],

["Metrics", "How do you measure your own performance?",
`**Why they ask:** results orientation.

**Sample answer:**
"Business-facing metrics — stability, delivery against plan, stakeholder satisfaction — plus project milestones for {projects} and my team's growth."

Tip: Metrics that leadership cares about.`, 'B'],

["Recognition", "Who helped you succeed this year?",
`**Why they ask:** humility and collaboration.

**Sample answer:**
"Our business partners were critical on {projects}, and two team members carried a lot of the delivery. I'd like them recognized in this cycle as well."

Tip: Credit others generously.`, 'B'],

["Improvement", "What would you do differently this year?",
`**Why they ask:** reflection.

**Sample answer:**
"I'd involve stakeholders earlier on scope decisions, and delegate more operational work sooner. Both would have reduced pressure during {challenges}."

Tip: Specific, actionable reflections.`, 'B'],

["Calibration", "How do calibration meetings affect my rating?",
`**Why they ask:** (your own question) understanding the process.

**Sample answer (explanation):**
Managers compare ratings across teams to make them consistent. Your manager advocates for you with evidence. Give them clear, quantified wins and examples of impact beyond your team to strengthen your case.

Tip: Equip your manager with evidence before calibration.`, 'D'],

["Visibility", "Leadership doesn't know my work. How do I fix that before reviews?",
`**Why they ask:** (your own question) visibility affects ratings.

**Sample answer (approach):**
Send monthly outcome summaries to your manager, present at a leadership meeting, ask stakeholders to share feedback with your manager, and credit your team publicly.

Tip: Visibility is part of the job.`, 'D'],

["Underperformance", "My manager says I'm not meeting expectations. What do I do?",
`**Why they ask:** (your own question) a critical moment.

**Sample answer (what to say):**
"I want to fix this. Which specific expectations am I missing, and what does success look like? Can we agree a 60-day plan with check-ins every two weeks?"

Tip: Get specifics, agree a plan in writing, and over-deliver on it.`, 'D'],

["Ambiguity", "How did you handle unclear priorities this year?",
`**Why they ask:** judgment.

**Sample answer:**
"When priorities were unclear, I proposed an order based on business impact, confirmed it with you, and shared it with stakeholders. That kept {projects} moving."

Tip: Show initiative plus alignment.`, 'B'],

["Innovation", "What improvements did you introduce?",
`**Why they ask:** initiative.

**Sample answer:**
"I introduced a recurring issue review and automated two manual reports, saving about six hours a week and reducing repeat incidents."

Tip: Quantify the benefit.`, 'B'],

["Stakeholder Feedback", "What would your stakeholders say about you?",
`**Why they ask:** external perspective.

**Sample answer:**
"That I'm responsive, I understand their business, and I deliver what I commit to. They'd also say I push back when something is too risky — which I see as part of the job."

Tip: Back it with a quote or survey result if you have one.`, 'B'],

["Work-life", "How do you manage the demands of your role?",
`**Why they ask:** sustainability.

**Sample answer:**
"Clear priorities, protected focus time, delegation and planning around peak periods like {projects}. I raise workload concerns early rather than letting them build up."

Tip: Show sustainable habits.`, 'B'],

["Future Role", "What would you need to succeed in a bigger role?",
`**Why they ask:** readiness.

**Sample answer:**
"Experience leading larger cross-functional initiatives, deeper financial acumen, and more exposure to executive decision-making. I'd like a development plan that builds those."

Tip: Name gaps honestly with a plan.`, 'D'],

["Follow-up", "What should I do after my review?",
`**Why they ask:** (your own question) turning the review into action.

**Sample answer (approach):**
Send a short summary of agreed goals, development actions and timelines. Schedule quarterly check-ins and keep updating your wins document.

Tip: Written follow-up creates accountability.`, 'B'],

["Training", "What training would help you most?",
`**Why they ask:** development planning.

**Sample answer:**
"Leadership and executive communication training, plus a certification related to {priorities}. Both directly support my goals and our roadmap."

Tip: Tie training to business needs.`, 'B'],

["Teamwork", "How did you handle a disagreement with a colleague?",
`**Why they ask:** collaboration under tension.

**Sample answer:**
"We disagreed on timing for a release. I set up a short meeting to compare risks, we agreed a phased approach, and we delivered without issues. Our working relationship is stronger now."

Tip: Focus on resolution and outcome.`, 'B'],

["Self-promotion", "How do I talk about my achievements without bragging?",
`**Why they ask:** (your own question) many people undersell themselves.

**Sample answer (approach):**
Focus on facts and outcomes: "I led X, which resulted in Y." Credit the team where appropriate, but be clear about your role.

Tip: Facts aren't bragging.`, 'B'],

["Remote", "How did you stay effective working remotely?",
`**Why they ask:** remote accountability.

**Sample answer:**
"Weekly written updates, clear deliverables, proactive communication with stakeholders, and keeping response times fast."

Tip: Visibility in writing.`, 'B'],

["Long-term", "What do you want to be known for?",
`**Why they ask:** your professional brand.

**Sample answer:**
"Reliability and impact — someone who delivers business results, develops people and makes hard problems simpler."

Tip: Short and memorable.`, 'B'],

["Closing", "Anything else you'd like to discuss?",
`**Why they ask:** final chance.

**Sample answer:**
"Just to confirm: next year's goals, the development plan toward {goals}, and a check-in on my promotion path at mid-year. Thanks for the feedback."

Tip: Recap agreements.`, 'B'],

["Low Points", "What was the lowest point of your year?",
`**Why they ask:** resilience.

**Sample answer:**
"Mid-year, when {challenges} peaked. I reset the plan with stakeholders, asked for support, and we recovered. I learned to escalate earlier."

Tip: Show recovery and learning.`, 'D'],

["Scope", "Has your role grown this year?",
`**Why they ask:** evidence for level and pay.

**Sample answer:**
"Yes. In addition to {resp}, I took on {projects} and more stakeholder management. My scope today is significantly broader than when the goals were set."

Tip: Document scope growth explicitly.`, 'D'],

["Documentation", "Why keep a wins document?",
`**Why they ask:** (your own question) memory fades by review time.

**Sample answer (approach):**
Every week or two, add wins, metrics, feedback received and challenges handled. It makes self-assessments and promotion cases easy.

Tip: Five minutes every Friday.`, 'B'],

["Recognition", "How do I ask for recognition for my team in reviews?",
`**Why they ask:** (your own question) good leaders advocate.

**Sample answer (what to say):**
"Two team members drove much of the success on {projects}. I'd like that reflected in their reviews, and I've written examples for each."

Tip: Provide specific examples.`, 'B'],

["Next Year", "What will be different next year?",
`**Why they ask:** forward thinking.

**Sample answer:**
"More focus on strategic work as I delegate operations, completing {projects} with clear benefits, and stepping up in leadership toward {goals}."

Tip: Clear forward plan.`, 'B']
]);
