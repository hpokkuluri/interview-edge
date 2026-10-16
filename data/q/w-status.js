// w-status — generated from src/w-status-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Status update & escalating a risk. {placeholders} are filled from the saved My Role profile.
QB['w-status'] = (QB['w-status'] || []).concat([
["Status", "Give me a status update on your project.",
`**Why they ask:** leaders need a 30-second picture they can trust and repeat.

**Sample answer:**
"{projects} is amber overall. Done this week: design sign-off and test environment ready. Next milestone: system testing complete by the end of the month. Main risk: {challenges} — we've added a second test cycle to mitigate it. Ask: a decision on scope for phase two by Friday."

Tip: Status color, done, next, risk, ask — in that order.`, 'B'],

["Status", "Why is it amber?",
`**Why they ask:** to understand the cause and whether you're in control.

**Sample answer:**
"It's amber because testing found more defects than planned, mainly in one integration. If unresolved, go-live slips two weeks. We've added two developers and daily defect reviews. To get back to green we need the business testers available next week."

Tip: Cause, impact if unresolved, actions, what's needed.`, 'B'],

["Status", "Why is it red?",
`**Why they ask:** red means a commitment is at risk; leaders need options.

**Sample answer:**
"It's red: we will miss the committed date unless we change something. The vendor delivery slipped three weeks. Options: A) go live with core scope on time and deliver the rest a month later; B) move the date three weeks. I recommend A because it protects the business deadline for {priorities}."

Tip: Red should always come with options and a recommendation.`, 'D'],

["RAG", "How should I define red, amber and green?",
`**Why they ask:** (your own question) consistent definitions prevent 'watermelon' reporting.

**Sample answer (definitions):**
- **Green:** on track for scope, schedule and budget.
- **Amber:** risk to a commitment, with a credible recovery plan within the team's control.
- **Red:** commitment will be missed without leadership decision or help.

Tip: Agree definitions with your leader upfront.`, 'B'],

["Escalation", "How do I escalate a risk without looking like I can't handle it?",
`**Why they ask:** (your own question) early escalation is good judgment.

**Sample answer (what to say):**
"I'm raising this early so we have options. Risk: {challenges}. Impact: a possible two-week delay to go-live. Options: add temporary resources, or reduce scope for phase one. I recommend reducing scope. I need your decision by Thursday."

Tip: Early, with options, recommendation and a decision date.`, 'D'],

["Escalation", "Why didn't you tell me sooner?",
`**Why they ask:** trust has been dented.

**Sample answer:**
"You're right — I should have flagged it when the vendor first signaled delays. I tried to resolve it first. Going forward, I'll raise anything that could affect a committed date within a day. Here's where we are and the recovery plan."

Tip: Own it briefly, commit to a change, move to the plan.`, 'D'],

["Bad News", "How do I deliver bad news to a leader?",
`**Why they ask:** (your own question) delivery matters as much as content.

**Sample answer (what to say):**
"I have bad news first: the go-live for {projects} will slip by two weeks. The cause is a data conversion issue found in testing. We've already started fixing it, and I'll give you a confirmed date by Wednesday."

Tip: First sentence carries the news. No long preamble.`, 'B'],

["Options", "What are our options?",
`**Why they ask:** leaders decide between trade-offs.

**Sample answer:**
"Three options. A: keep the date, cut two non-critical features. B: keep scope, move the date two weeks. C: keep both and add budget for extra resources ($40K). I recommend A — it protects the business deadline with minimal impact."

Tip: Two to three options with cost, risk and recommendation.`, 'D'],

["Recommendation", "What do you recommend?",
`**Why they ask:** they want your judgment, not just data.

**Sample answer:**
"I recommend going live with core scope on the planned date and delivering the remaining reports two weeks later. It protects {priorities} and the risk is low because the reports aren't needed until month-end."

Tip: Recommend clearly and explain why.`, 'B'],

["Executive Update", "How do I write a status update for executives?",
`**Why they ask:** (your own question) executives skim.

**Sample answer (format):**
- Line 1: overall status and headline ("Amber — on track for go-live, one risk").
- Progress: two or three bullets.
- Risks and mitigation.
- Decisions or help needed.
- Next milestone and date.

Tip: Five lines they can read in 30 seconds.`, 'B'],

["Weekly Report", "What should go into my weekly status report?",
`**Why they ask:** (your own question) consistent reporting builds trust.

**Sample answer (format):**
Accomplishments, next week's plan, risks and issues (with owners), decisions needed, and key metrics. Keep the format the same every week.

Tip: Consistency makes changes stand out.`, 'B'],

["Metrics", "How are we tracking against plan?",
`**Why they ask:** facts beat feelings.

**Sample answer:**
"We're 80% complete against 85% planned — about a week behind. Budget is on track at 78% spent. Testing: 240 of 300 cases passed, 12 open defects, none critical."

Tip: Use numbers and compare against plan.`, 'B'],

["Issues vs Risks", "What's the difference between a risk and an issue?",
`**Why they ask:** (your own question) precision in reporting.

**Sample answer (explanation):**
A **risk** might happen (vendor could deliver late). An **issue** is happening now (vendor is late). Risks need mitigation plans; issues need resolution actions.

Tip: Label them correctly.`, 'B'],

["Ownership", "Who owns fixing this?",
`**Why they ask:** accountability.

**Sample answer:**
"I own the overall resolution. The integration team owns the defect fix by Wednesday, and the business owner owns re-testing Thursday. I'll confirm completion Friday."

Tip: Name owners and dates for every action.`, 'B'],

["Surprises", "How do I avoid surprising my leader?",
`**Why they ask:** (your own question) no-surprises is a core expectation.

**Sample answer (approach):**
Share risks early (even if uncertain), use consistent status definitions, send short updates when things change, and preview bad news before group meetings.

Tip: Leaders hate hearing bad news first from others.`, 'B'],

["Pre-wiring", "Should I warn my leader before a status meeting?",
`**Why they ask:** (your own question) pre-wiring prevents public surprises.

**Sample answer (what to say):**
"Quick heads-up before the steering meeting: I'll report the project as amber because of testing delays. Here's the plan — wanted you to hear it from me first."

Tip: Always pre-wire bad news.`, 'B'],

["Steering Committee", "How do I present at a steering committee?",
`**Why they ask:** (your own question) senior forums need crisp content.

**Sample answer (approach):**
One slide with status, milestones, risks and decisions needed. Send a pre-read. Spend most time on decisions, not progress details.

Tip: Decisions, not a recital of activity.`, 'D'],

["Decision", "What decision do you need from me?",
`**Why they ask:** leaders want clear asks.

**Sample answer:**
"I need approval to move two reports to phase two, so we can protect the go-live date for {projects}. If I have your approval today, I'll communicate it to stakeholders tomorrow."

Tip: One clear decision, with the deadline and consequences.`, 'B'],

["Help", "What help do you need?",
`**Why they ask:** escalation should come with specific asks.

**Sample answer:**
"Two things: ask the business lead to commit three testers next week, and help unblock the vendor contract change through procurement."

Tip: Ask for actions only they can take.`, 'B'],

["Confidence", "How confident are you in the new date?",
`**Why they ask:** credibility check after a slip.

**Sample answer:**
"About 85% confident. The remaining risk is data conversion; we'll know after the mock run on Tuesday. I'll confirm or adjust by Wednesday."

Tip: Give a confidence level and when you'll know more.`, 'D'],

["Repeated Slips", "This is the second delay. Why should I trust the plan?",
`**Why they ask:** credibility is at stake.

**Sample answer:**
"Fair question. The first delay came from vendor dependencies we didn't control. We've since added buffer, daily checkpoints, and an independent review of the plan. I'll report progress against these checkpoints weekly so you can see the trend early."

Tip: Explain what's different this time, then prove it with checkpoints.`, 'D'],

["Budget", "We're over budget. How do I report it?",
`**Why they ask:** (your own question) budget news needs context.

**Sample answer (what to say):**
"We're projecting 8% over budget ($60K) due to additional testing and vendor change requests. Options: absorb it from contingency, reduce scope, or request additional funds. I recommend using contingency."

Tip: Variance, cause, options, recommendation.`, 'D'],

["Scope Creep", "How do I report scope creep?",
`**Why they ask:** (your own question) uncontrolled scope is a common cause of failure.

**Sample answer (what to say):**
"Since kickoff, we've received 14 new requests. Accepting all would add six weeks. I propose we prioritize three critical ones and move the rest to phase two. Can we confirm in the steering meeting?"

Tip: Make the cumulative impact visible.`, 'D'],

["Dependencies", "How do I report a dependency on another team?",
`**Why they ask:** (your own question) cross-team risks need visibility.

**Sample answer (what to say):**
"We depend on the integration team delivering the API by the 15th. They've signaled risk. If it slips, our testing slips one-for-one. I've agreed weekly check-ins with their lead and may need your help to prioritize it."

Tip: Name the dependency, impact and escalation path.`, 'D'],

["Production Incident", "How do I update leadership during an outage?",
`**Why they ask:** (your own question) crisis communication.

**Sample answer (what to say):**
"Update at 10:30: order processing is down since 9:45. Impact: orders are queuing but no data loss. Cause under investigation; likely a failed interface. Next update at 11:00 or sooner if resolved."

Tip: Regular cadence, impact, actions, next update time — even with no news.`, 'B'],

["Post-incident", "How do I report after an incident?",
`**Why they ask:** (your own question) closure and prevention.

**Sample answer (format):**
Summary, timeline, impact, root cause, what went well, what didn't, and preventive actions with owners and dates.

Tip: Blameless and action-focused.`, 'B'],

["Escalation Path", "When should I escalate above my manager?",
`**Why they ask:** (your own question) respecting hierarchy.

**Sample answer (approach):**
Only through agreed paths (steering committees, incident processes) or with your manager's knowledge, except for urgent safety, legal or ethics issues covered by company policy.

Tip: Keep your manager informed.`, 'D'],

["Tone", "How do I stay calm delivering bad news?",
`**Why they ask:** (your own question) composure builds confidence.

**Sample answer (approach):**
Prepare facts and options in advance, state the news plainly, avoid blame, focus on actions, and keep your tone steady.

Tip: Preparation creates calm.`, 'B'],

["Blame", "Another team caused the delay. How do I report it without blaming?",
`**Why they ask:** (your own question) diplomacy.

**Sample answer (what to say):**
"The delay comes from a dependency on the integration deliverable, which took longer due to complexity we didn't foresee. We're working together on a recovery plan."

Tip: Describe facts and focus on the joint plan.`, 'D'],

["Optimism", "How do I avoid being too optimistic in status reports?",
`**Why they ask:** (your own question) optimism bias hurts credibility.

**Sample answer (approach):**
Report against evidence (test results, completed milestones), use agreed RAG definitions, and flag uncertainty openly.

Tip: Evidence over hope.`, 'B'],

["Good News", "How do I report good news?",
`**Why they ask:** wins deserve visibility too.

**Sample answer:**
"Good news: {projects} reached its milestone a week early. Testing passed with no critical defects. Thanks to the business team for quick sign-off. Next: deployment planning."

Tip: Share wins briefly and credit people.`, 'B'],

["Ask for Time", "How do I ask for more time?",
`**Why they ask:** (your own question) timelines often need adjusting.

**Sample answer (what to say):**
"To deliver the full scope with quality, we need two more weeks. The alternative is to deliver core scope on time and the rest later. I recommend the phased option. Which would you prefer?"

Tip: Offer the alternative.`, 'B'],

["Resource Request", "How do I ask for more people?",
`**Why they ask:** (your own question) resource asks need justification.

**Sample answer (what to say):**
"We're at capacity with {projects} and daily operations. Adding one contractor for three months ($45K) protects the go-live date and reduces the risk of operational issues. Without it, we'd need to delay phase two."

Tip: Cost versus impact of not doing it.`, 'D'],

["Visual", "What visuals help status updates?",
`**Why they ask:** (your own question) visuals speed understanding.

**Sample answer (examples):**
Milestone timeline with status, burn-up chart, defect trend, RAG table by workstream, and a risk heat map.

Tip: One visual per message.`, 'B'],

["Frequency", "How often should I send updates?",
`**Why they ask:** (your own question) cadence.

**Sample answer (approach):**
Weekly for normal progress, immediately for material changes, and more frequently during critical phases like go-live.

Tip: Agree the cadence upfront.`, 'B'],

["Stakeholders", "How do I tailor updates to different audiences?",
`**Why they ask:** (your own question) executives and teams need different detail.

**Sample answer (approach):**
Executives: outcomes, risks, decisions. Business users: what changes for them and when. Project team: detailed tasks and dependencies.

Tip: Same facts, different depth.`, 'B'],

["Escalation Email", "Write an escalation email.",
`**Why they ask:** (your own question) written escalations need structure.

**Sample answer (email):**
"Subject: Decision needed by Thu — {projects} go-live risk
Summary: risk to the go-live date due to delayed vendor delivery.
Impact: two-week slip if unresolved.
Options: A) phase scope (recommended); B) move date.
Ask: your decision by Thursday."

Tip: Put the ask and deadline in the subject line.`, 'B'],

["Follow-up", "How do I follow up after escalating?",
`**Why they ask:** (your own question) close the loop.

**Sample answer (approach):**
Confirm the decision in writing, communicate it to stakeholders, update the plan, and report progress at the next checkpoint.

Tip: Written confirmation.`, 'B'],

["Ethics", "I'm asked to report green when it's really red. What do I do?",
`**Why they ask:** (your own question) integrity.

**Sample answer (what to say):**
"I'm not comfortable reporting green because we'll miss the date without a decision. I'd rather report it accurately with our recovery plan — it protects everyone."

Tip: Accurate reporting protects you and the business.`, 'D'],

["Late Discovery", "We discovered a major issue the day before go-live. What do I say?",
`**Why they ask:** go/no-go judgment.

**Sample answer:**
"We found a data issue affecting invoices. I recommend a no-go: going live risks incorrect billing. We can fix and re-test in three days. I'll confirm a new date by tomorrow."

Tip: Protect the business over the date.`, 'D'],

["Go/No-go", "How do I run a go/no-go decision?",
`**Why they ask:** (your own question) structured launch decisions.

**Sample answer (approach):**
Pre-agreed criteria (testing complete, no critical defects, data validated, support ready, rollback tested), review each with evidence, and record the decision and owners.

Tip: Agree criteria in advance.`, 'D'],

["Rollback", "Should I mention the rollback plan in updates?",
`**Why they ask:** (your own question) confidence in risk management.

**Sample answer (what to say):**
"If go-live issues exceed agreed thresholds, we'll roll back within two hours — tested in rehearsal."

Tip: Reassures leaders.`, 'B'],

["Vendor", "How do I escalate a vendor problem?",
`**Why they ask:** (your own question) vendor accountability.

**Sample answer (approach):**
Document impacts against contract terms, escalate through the vendor's account manager, request a recovery plan with dates, and involve your leadership and procurement if needed.

Tip: Use the contract.`, 'D'],

["Leadership Questions", "Leadership asks a question I can't answer. What do I say?",
`**Why they ask:** credibility under pressure.

**Sample answer:**
"I don't have that number with me — I'll confirm it by end of day."

Tip: Never guess. Follow up quickly.`, 'B'],

["Confidence Building", "How do I build a reputation for reliable updates?",
`**Why they ask:** (your own question) trust compounds.

**Sample answer (approach):**
Consistent format and timing, accurate status, early risks, and following through on commitments.

Tip: Reliability builds influence.`, 'B'],

["Summary", "Give me the one-line summary.",
`**Why they ask:** executives often want only the headline.

**Sample answer:**
"{projects} is on track for go-live on the planned date; one risk on testing capacity, with a plan in place."

Tip: Practise one-line summaries.`, 'B'],

["Closing", "What happens next?",
`**Why they ask:** to confirm the plan.

**Sample answer:**
"Testing finishes Friday, go/no-go meeting Monday, and I'll send the next update Wednesday."

Tip: Next steps with dates.`, 'B']
]);

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
