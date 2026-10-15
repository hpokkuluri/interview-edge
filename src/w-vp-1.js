// 1:1 with a VP (often a skip-level). {placeholders} are filled from the saved My Role profile.
QB['w-vp'] = (QB['w-vp'] || []).concat([
['Opening', 'So, how are things going?',
`**Why they ask:** an open door. What you choose to say first shows what you think matters.

**Sample answer:**
"Things are busy but in good shape. As {title}, my focus is {projects}. Day-to-day operations are stable, and the biggest recent result is {wins}. The one thing I'm watching closely is {challenges} — I'll walk you through how I'm handling it."

Tip: Lead with business outcomes in the first 30 seconds. Never open with a complaint.`, 'B'],

['Opening', 'Remind me what you own today.',
`**Why they ask:** VPs see many people; they want your scope in one breath.

**Sample answer:**
"I'm {title} on {team}. I own {resp}. In practice that means I'm the person accountable when the business needs something from these systems — whether it's an outage, a change or a new initiative like {projects}."

Tip: Describe accountability, not tasks.`, 'B'],

['Workload', 'With everything on your plate, how is the workload?',
`**Why they ask:** to check burnout and whether delivery is at risk. "I'm overwhelmed" signals you can't handle scope; "everything's fine" sounds unaware.

**Sample answer:**
"It's a full plate, and it's manageable because I've put structure around it: a fixed weekly triage of incoming work, clear priority rules agreed with the business, and a release calendar so changes don't collide. The real pressure point is timing — {challenges}. I've already planned for it, and if priorities shift I'll come to you with options rather than surprises."

Tip: Show control plus one honest risk with a plan.`, 'B'],

['Workload', 'Is the team stretched too thin?',
`**Why they ask:** retention and delivery risk.

**Sample answer:**
"We're stretched, but not breaking. The team has absorbed a lot — {projects} on top of normal support. What would make it sustainable is backup coverage for our most critical areas and moving routine work to our support partner, so the core team can focus on the projects that matter most for {priorities}. I'm working on both."

Tip: Name the fix, not just the strain.`, 'D'],

['Impact', 'What business difference has your work made this year?',
`**Why they ask:** to understand your value in a leader's language — money, risk, speed, customers.

**Sample answer:**
"Three things. First, {wins}. Second, operations stayed stable through every major change this year, which matters most during close and peak periods. Third, {projects} is setting us up for {priorities}. In short: fewer disruptions for the business, faster delivery of what they ask for, and lower risk."

Tip: Bring one or two real numbers (tickets, SLA %, days saved, dollars).`, 'B'],

['Status', 'Where are we on your biggest initiative?',
`**Why they ask:** quick health check; it may be reported upward.

**Sample answer:**
"Overall it's on track. The design and build work is done, testing is underway, and we're holding the go-live date. The main risk is {challenges}; we've mitigated it with extra testing cycles and a clear cutover plan. The only thing I'd ask from you is help keeping business decisions on schedule — if decisions slip, the date slips."

Tip: Status, risk with mitigation, one clear ask. Under 45 seconds.`, 'B'],

['Vendor', 'Is our support vendor / managed services partner giving us value?',
`**Why they ask:** vendors are a big cost line; the VP wants a candid owner's view.

**Sample answer:**
"Better than six months ago. We now review open items with them weekly, track response and resolution against SLA, and escalate anything aging. Resolution times have improved. Where I'm still pushing is first-time fix quality and getting them to own more of the routine work end to end, so our internal team spends its time on projects. If that doesn't improve by next quarter, I'd recommend we revisit the scope in the renewal."

Tip: Owners talk about value and accountability, not just ticket counts.`, 'D'],

['Risks', 'What keeps you up at night?',
`**Why they ask:** to see if you think like a leader — ahead of problems.

**Sample answer:**
"Two things. First, {challenges} — my plan is to protect the critical dates with extra coverage and early testing. Second, key-person risk: a few areas depend on one or two people. I'm addressing it with documentation and cross-training over the next quarter. Neither needs action from you today, but I want you to know they're on my radar."

Tip: A risk with a plan shows maturity; a risk without one sounds like worry.`, 'D'],

['Team', 'How is the team\'s morale?',
`**Why they ask:** especially after someone else raised concerns — the VP is checking whether it's widespread.

**Sample answer:**
"The team is committed and proud of what they've delivered. People are busy, and what keeps morale up is seeing a clear path — clear priorities, recognition and growth. Recognizing the team's effort on {projects} would go a long way."

Tip: Speak for the work, not for other people's private feelings.`, 'D'],

['Manager', 'How is it working with your manager?',
`**Why they ask:** the VP may be checking on your manager, especially after a recent difficult conversation.

**Sample answer:**
"It works well. My manager gives me ownership, trusts me with the business directly, and backs me when I escalate. We're aligned on priorities."

Tip: Keep it short and positive. Never repeat what your manager told you privately, and don't comment on their career plans — that's their conversation to have.`, 'D'],

['Career', 'How do you feel about your role? Are you happy here?',
`**Why they ask:** retention check. This is your best opening to raise your career goal calmly.

**Sample answer:**
"I like the work and I want to grow here, so I'll be open with you. My goal is {goals}. Over the last couple of years my scope has grown well beyond the role I was hired into — today I'm accountable for {resp}, plus {projects}. I'm effectively operating at the next level, and I'd like to make it official. What would you need to see from me, and what timeline is realistic?"

Tip: Ask for criteria and a timeline, not a yes or no. Calm and factual — no frustration, no comparisons with others.`, 'D'],

['Career', 'Are you thinking about leaving?',
`**Why they ask:** a direct retention check — especially if someone else recently signaled frustration.

**Sample answer:**
"No, I'm not looking. I want to build my career here — that's exactly why I'm raising my growth path with you. I'd like a clear plan so that we both know what the next step looks like."

Tip: Say it once, calmly, then stop. No hints, no ultimatums. Threats only work if you are ready to leave tomorrow.`, 'D'],

['Career', 'What would the next level look like for you?',
`**Why they ask:** to see whether you understand the bigger job, not just a bigger title.

**Sample answer:**
"Owning the outcome for the whole function, not just the work in front of me: setting priorities with business leaders, managing the vendor relationship as a strategic partner, building a repeatable approach for big changes like {projects}, and developing people so the team doesn't depend on me. I already do parts of this; the next level is doing all of it, formally, with the authority to match."`, 'D'],

['Strategy', 'Where should we be investing next year?',
`**Why they ask:** testing whether you think beyond your queue.

**Sample answer:**
"Three places. First, a repeatable playbook for big changes — onboarding new business units or upgrades — so each one is faster and cheaper than the last. Second, automation and AI for routine support, so skilled people spend time on improvements. Third, reporting the business can serve itself, which removes a whole category of requests. Each supports {priorities}."`, 'D'],

['Ideas', 'If you were in my seat, what would you change?',
`**Why they ask:** a chance to show leadership thinking — and a test of judgment.

**Sample answer:**
"I'd be clearer about where routine work goes versus project work. Today the same people do both, so urgent tickets keep interrupting strategic projects. Splitting the two — routine work to our support partner with clear SLAs, a small core team protected for projects — would speed up delivery without adding headcount. I'd be glad to put a short proposal together."

Tip: One idea, its payoff, and an offer to own it.`, 'D'],

['Pushback', 'I\'m not sure I agree with that.',
`**Why they ask:** VPs test conviction and composure.

**Sample answer:**
"That's fair — help me understand your concern. Is it cost, timing or risk? The data I'm relying on is our ticket trends and the project timeline. If the concern is cost, one option is to pilot it for a quarter and measure the result before committing. I'm happy to go with your call either way."

Tip: Curious, calm, data-based — and willing to be overruled.`, 'D'],

['Closing', 'Anything else you want to tell me?',
`**Why they ask:** a last open door — use it.

**Sample answer:**
"Two quick things. Thank you for the time — it's valuable to hear your priorities directly. And to recap the career point: I'd appreciate your support for the next level, and I'll follow up with a short note on the criteria we discussed."`, 'B'],

['Your questions', 'What should I ask the VP?',
`Pick two:
- "What are your top priorities for our area over the next year?"
- "What gap do you see between where I am and the next level?"
- "If I meet those criteria, would you support me in the next promotion cycle?"
- "As we grow, how do you see this function being structured?"`, 'B'],

['Prep', 'How do I prepare for a VP skip-level?',
`- Write your three biggest updates with one number each.
- One risk with your plan; one idea with its payoff.
- Your career ask in two sentences — criteria and timeline.
- Tell your manager it's happening, so nothing surprises them.
- Afterwards, send a short thank-you note recapping key points and anything they asked for.`, 'B'],

['Avoid', 'What should I avoid saying in a VP skip-level?',
`- "My manager and I both feel overlooked" — sounds like a group complaint.
- "If I don't get promoted I'll have to look elsewhere" — an ultimatum.
- "I'm overwhelmed" — sounds like you can't handle the scope. Say "we need to structure this to scale."
- Anything your manager told you in confidence.
- Long technical detail — keep it at business-outcome level.`, 'B']
]);
