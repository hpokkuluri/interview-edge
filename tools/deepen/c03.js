module.exports = {
'inf-sa': {
15: ["When would you use more than one database in a solution?", "When different parts have different needs — for example PostgreSQL for orders, Redis for sessions and caching, and a search engine for product search. Each extra store adds operational work, so justify it."],
20: ["How do you pick which applications move first?", "Start with low-risk, low-dependency apps to build skills and confidence, then group tightly connected systems into the same wave. Retire apps nobody uses before migrating anything."],
36: ["What happens to the user while a saga is in progress?", "The order shows a pending state until all steps complete, then confirmed or failed. Design the UI and notifications for eventual consistency instead of pretending it's instant."]
},
'inf-sys': {
8: ["What if gpresult shows the policy applied but the setting isn't there?", "Check for a conflicting policy with higher precedence, loopback processing, local settings overriding it, or the setting needing a reboot or logon to take effect."],
18: ["How do you handle a patch that breaks an application?", "Roll it back on affected servers, document the issue, work with the vendor and keep the app's servers in an exception group with a deadline and compensating controls."],
22: ["How do you check servers stay hardened?", "Configuration management to enforce the baseline, regular compliance scans against CIS benchmarks, and alerts when settings drift."],
27: ["How do you keep stakeholders updated during an outage?", "A short first message within 15 minutes and updates at set intervals — what's affected, what we're doing and the next update time — even when there's no change."],
42: ["What quick test tells you whether DNS is the issue?", "From a client, run nslookup for the domain's SRV records like _ldap._tcp.dc._msdcs.domain — if it fails, clients can't find domain controllers."],
43: ["How do you prevent time drift?", "Point domain controllers to a reliable external NTP source, let domain members sync from the PDC emulator hierarchy, and monitor for skew."],
46: ["How do you manage SSH keys at scale?", "Central management with short-lived certificates or a key management tool, regular key rotation, removing keys for leavers, and logging all SSH access."]
},
'lg-comp': {
3: ["How often should the risk assessment be updated?", "At least yearly, and whenever the business changes — new countries, acquisitions, new products or a significant incident — so the program follows the real risks."],
4: ["What's a facilitation payment, and is it allowed?", "A small payment to speed up routine government action. The FCPA has a narrow exception, but many countries ban them and most companies prohibit them entirely."],
5: ["What red flags appear in third-party due diligence?", "Government connections, requests for unusual payment terms or offshore accounts, high commissions for vague services, refusal to sign anti-corruption clauses and poor reputation."],
6: ["How do you handle gifts in cultures where they're expected?", "Allow modest, customary gifts with clear limits, require approval above thresholds and especially for officials, and record them in a register."],
7: ["How do you know employees trust the speak-up program?", "Report volumes compared with peers, the share of named versus anonymous reports, survey results on fear of retaliation and how quickly cases are closed."],
8: ["When should you use outside counsel for an investigation?", "When senior executives are involved, there's possible criminal exposure or government interest, or the company needs privilege and independence."],
9: ["How do you measure training effectiveness?", "Scenario-based assessments, fewer repeat issues in high-risk areas, hotline questions showing awareness and feedback from managers — not just completion rates."],
13: ["What's a common conflict of interest?", "An employee with a financial interest in a supplier they help select, or a family member working for a vendor. Disclosure lets the company manage it before it becomes a problem."],
15: ["What should the board hear in private session?", "Concerns about senior management, significant investigations and any pressure on compliance — with time without management present."],
34: ["What do you do with payments to the distributor during the investigation?", "Consider suspending commissions or payments with legal advice, keep the business running where possible and document the decision."],
35: ["What if the executive is the CEO?", "Escalate to the board or audit committee chair — compliance needs a direct line to the board for exactly this situation."],
50: ["What if due diligence finds the agent is related to the official?", "That's a serious bribery risk — don't engage the agent. If the business still wants to proceed, escalate to legal and senior leadership for a documented decision."]
},
'lg-counsel': {
3: ["How do you handle a leader who wants a yes or no?", "Give the bottom line first — 'Yes, if we change two terms' or 'No, but here's an alternative' — then the reasons briefly. Leaders want a decision they can act on."],
7: ["How do you decide which contracts lawyers must review?", "By value, risk and deviation from the template — for example any contract over $250,000, with uncapped liability or data processing — while routine contracts follow the playbook."],
8: ["What's the most common employment risk?", "Wrongful termination and retaliation claims, especially when a termination follows a complaint or leave. Consistent documentation and HR involvement reduce the risk."],
10: ["What happens without an IP assignment agreement?", "Contractors and some employees may own what they create, leaving the company without clear rights to its own product. Assignment terms should be in place before work starts."],
12: ["How do you decide whether to settle?", "Compare the expected outcome and cost of litigation — including management time and reputation — with the settlement amount, and consider precedent for other claims."],
13: ["How do you choose outside counsel for a matter?", "Expertise in the specific issue and jurisdiction, past results, the actual team, rates and how well they understand the business."],
14: ["When does privilege get lost?", "When legal advice is shared widely outside the need-to-know group, mixed with business advice, or forwarded to third parties."],
33: ["Which terms would you never accept?", "Unlimited liability, broad IP assignment of our core technology and indemnities for the customer's own negligence. Everything else can be weighed against the deal's value."],
34: ["What do you tell the manager?", "Don't discuss the claim with the employee or others, keep all documents and route any contact from the employee or their lawyer to legal."]
},
'ls-cra': {
3: ["What's the purpose of the site initiation visit?", "To train the site on the protocol, procedures, safety reporting and systems, confirm readiness and documents, and make sure the site can start enrolling."],
8: ["What makes a deviation 'important'?", "It may affect subject safety, rights or wellbeing, or the reliability of key data — like enrolling an ineligible subject or missing a primary endpoint assessment."],
19: ["What happened after you escalated?", "The sponsor assessed it, the site was retrained and a corrective plan put in place, and if needed regulators or the IRB were notified."],
29: ["What could the site do to prevent it?", "A second-person eligibility check before randomization, an eligibility checklist and confirming lab values are available before enrollment."],
31: ["What are the risks of low PI involvement?", "Poor safety oversight, delegation problems and inspection findings — the PI is responsible for the trial at the site even when tasks are delegated."],
50: ["What else do you check after finding an unreported SAE?", "Whether other events were missed, whether the site understands reporting rules and whether safety reports for that subject are complete."]
},
'ls-pv': {
5: ["What's dechallenge and rechallenge?", "Dechallenge is stopping the drug and seeing if the event improves; rechallenge is restarting it and seeing if it returns. Positive results strongly support causality."],
7: ["What's the risk of coding too broadly?", "Losing detail needed for signal detection — for example coding 'liver injury' when the report said 'acute hepatitis'. Code to the most specific lowest level term."],
8: ["What should a narrative avoid?", "Personal opinions, abbreviations a reader may not know and unnecessary patient-identifying details."],
12: ["What if follow-up changes the case to serious?", "The timeline for expedited reporting starts from when that new information was received, so submit it within 15 days."],
13: ["Why collect pregnancy cases without an adverse event?", "To follow the outcome — the baby's health — and build data on the drug's safety in pregnancy."],
23: ["Does the clock start for a partner company's report?", "Yes — the clock usually starts when the partner receives it, depending on the safety agreement, which is why agreements set short exchange timelines."],
33: ["What if the rep doesn't know the patient's name?", "They still report what they know — an identifiable patient can be described by initials, age or sex — and PV follows up for more details."],
34: ["How do you prevent late reporting?", "Find the cause — slow intake, partner delays, unclear training — and fix it with process changes, training and monitoring of timelines."],
50: ["How often should literature be searched?", "At least weekly for marketed products, with documented search strategies — regulators expect regular literature screening."]
},
'ls-qa': {
2: ["What's the difference between 210 and 211?", "Part 210 covers general GMP for drugs, and Part 211 sets detailed requirements for finished pharmaceuticals — facilities, equipment, production, testing, records and complaints."],
3: ["How do you classify a deviation?", "By impact on product quality and patient safety — minor, major or critical — which decides investigation depth and timelines."],
4: ["What questions get beyond 'human error'?", "Was the procedure clear? Was the person trained? Was the equipment or layout confusing? Were they rushed or interrupted? These point to system fixes."],
5: ["How do you verify CAPA effectiveness?", "Define a measure upfront — like no recurrence in six months or a lower error rate — and check it after the action is in place."],
7: ["What's an audit trail review?", "Reviewing electronic records' audit trails for changes, deletions or unusual activity — part of data integrity checks for GMP systems."],
8: ["What's a common GDP violation?", "Backdating entries, using correction fluid, leaving blank spaces or recording data on scrap paper."],
9: ["What's an emergency change?", "A change needed immediately — like a safety fix — made with minimum approvals and documented fully afterwards within a set time."],
10: ["What's continued process verification?", "Ongoing monitoring of process data during routine production to show the process stays in a state of control."],
12: ["What if the lab investigation finds no error?", "Move to a full-scale investigation into manufacturing, and don't release the batch based on retest results alone."],
18: ["What should staff do when an inspector asks a question?", "Answer honestly and only what's asked, don't guess, and say if you need to check — then follow up with the right person or document."],
32: ["What if leadership overrides QA?", "QA must have independent authority to release or reject. If overridden, document it and escalate to the head of quality — it may need regulatory reporting."],
33: ["What should you not do?", "Confront the person without HR, destroy or alter records, or keep it quiet — data falsification can lead to regulatory action against the company."],
50: ["How do you avoid this in future?", "Good document control, an index of key documents, a back room team during inspections and mock inspections."]
},
'ls-ra': {
2: ["When is a 505(b)(2) application used?", "When the application relies partly on data the applicant doesn't own — like published studies or an approved drug — for example a new formulation or dose form of an existing drug."],
3: ["What's a predicate device?", "A legally marketed device that a 510(k) shows substantial equivalence to — same intended use and similar technological characteristics."],
4: ["What's the difference between breakthrough therapy and fast track?", "Fast track is for serious conditions with unmet need and allows rolling review; breakthrough requires preliminary clinical evidence of substantial improvement and adds intensive FDA guidance."],
5: ["What's in Module 2?", "Summaries and overviews — quality overall summary, nonclinical and clinical overviews and summaries — the part reviewers read first."],
6: ["What types of FDA meetings are there?", "Type A for urgent or stalled programs, Type B for milestones like pre-IND and end-of-phase 2, Type C for other topics, and Type D for narrow questions."],
7: ["What's the risk of promotional claims beyond the label?", "Off-label promotion can lead to FDA warning letters and enforcement — marketing materials must match the approved labeling."],
9: ["What's a prior approval supplement?", "A filing for major changes that must be approved by FDA before the product made with the change is distributed."],
10: ["What happens if post-marketing commitments are late?", "FDA can take action, including publicly listing delays, and for required studies, enforcement action and penalties."],
15: ["What if you can't meet the deadline?", "Contact the FDA reviewer early, explain why and propose a realistic date — never miss it silently."],
33: ["What should the supplier agreement say?", "That suppliers must notify you of changes in advance and get approval for changes that could affect quality or registrations."],
50: ["What can speed up a launch?", "Reliance pathways that use another agency's approval, early meetings with the local agency and preparing dossiers in parallel."]
},
'pd-ba': {
6: ["How do you validate a process map?", "Walk through it with the people who do the work, compare it with real examples and data, and correct it until they agree it matches reality."],
8: ["What if stakeholders say everything is a must-have?", "Ask what happens if each item isn't delivered on day one, and tie priorities to business goals — must-haves should be things the solution can't work without."],
9: ["How do you handle a stakeholder who doesn't engage?", "Understand why — time, interest or disagreement — adjust communication to their needs and escalate to the sponsor if their input is critical."],
10: ["What if both requirements are equally important?", "Look for a solution that meets both partially, phase them, or take the trade-off to the sponsor with the impact of each option."],
11: ["How do you tell scope creep from a real need?", "Check it against the agreed objectives — if it's needed to meet them, it's a real gap; if it's a new idea, it goes through change control."],
12: ["How detailed should an RTM be?", "Enough to link each requirement to its design element and test cases. For agile projects, linking user stories to acceptance tests can do the same job."],
18: ["What do you do if UAT finds many defects?", "Triage them with the business, fix critical ones, retest and decide with the sponsor whether to delay go-live."]
},
'pd-pm': {
4: ["How do you handle a high-value item with low confidence?", "Run a quick discovery or experiment to raise confidence before committing a big build."],
5: ["How many customer interviews are enough?", "Often five to ten per segment reveal the main patterns — stop when you keep hearing the same things."],
7: ["What if the drop is real and in one segment?", "Find what changed for that segment — a release, pricing or a competitor — and decide whether to roll back or fix quickly."],
8: ["What's a guardrail metric?", "A metric you watch to make sure the change doesn't cause harm elsewhere — like retention or support tickets — even if the main metric improves."],
10: ["How do you share a roadmap with sales without committing dates?", "Show themes and time horizons — now, next, later — and explain that later items may change."],
11: ["What if the stakeholder is the CEO?", "Show the trade-off clearly and ask which priority should move — the decision belongs to them, but they should make it with the facts."],
12: ["How do you handle disagreements with engineering on scope?", "Discuss trade-offs openly — value versus effort — and look for a smaller version that still solves the problem."],
36: ["What's the 'aha moment'?", "The moment users first get real value — like sending their first invoice. Getting users there faster usually improves retention."],
37: ["What if leadership insists on building it?", "Build it with a clear scope, make the trade-off visible on the roadmap and look for ways to make it useful for other customers too."]
},
'pd-pmo': {
2: ["Which PMO type suits a company new to portfolio management?", "Usually a supportive PMO first — templates, coaching and reporting — then more control as maturity grows."],
3: ["How do you handle mandatory projects?", "Regulatory or compliance projects go to the top of the list, then the remaining capacity is ranked by value."],
4: ["What's a stage gate?", "A decision point where a project must meet criteria — like an approved business case — before moving to the next phase and getting more funding."],
5: ["What if demand is far above capacity?", "Show leaders the gap, ask them to rank priorities, and pause or delay lower-ranked projects rather than spreading people thin."],
7: ["How do you know governance is too heavy?", "Project managers spend more time on reports than managing, small projects wait weeks for approvals, or teams work around the PMO."],
9: ["What if benefits aren't being tracked by the business?", "Make benefit owners part of project approval, review benefits in steering committees and report them to executives."],
10: ["What's the most misleading PMO metric?", "Percentage of projects 'green' — status can be inaccurate. Benefits delivered and forecast accuracy are better."],
29: ["How do you run the force-ranking session?", "Use agreed criteria, prepare data on each project in advance and keep the session short, with the CEO or sponsor making the final call."],
30: ["What service would you offer first?", "Help with scheduling, risk workshops or escalation support — something that saves project managers time immediately."],
43: ["How do you show value in the first year?", "Faster decisions, fewer failed projects and a clear view of capacity — with examples executives recognize."],
49: ["What do you say to the sponsor?", "That accurate reporting protects them — surprises later are worse — and that you'll present the recovery plan with the red status."]
},
'pd-sm': {
5: ["What if the team's estimates are always wrong?", "Use past throughput for planning, break items into smaller pieces and review estimation in retrospectives."],
7: ["What if the impediment is outside the team's control?", "Escalate it to the person who can remove it, explain the impact on delivery and follow up regularly."],
9: ["What if the manager won't stop?", "Explain the purpose of the daily scrum, suggest other ways to get updates — like the sprint board — and involve their leader if needed."],
10: ["When do you involve HR or management?", "When the conflict becomes personal, involves harassment or doesn't improve after facilitation."],
11: ["Can a team combine Scrum and Kanban?", "Yes — 'Scrumban' uses sprints with WIP limits and flow metrics, which suits teams with both planned and unplanned work."],
16: ["What if the request is a true emergency?", "The product owner decides; if it's taken in, something of similar size comes out of the sprint, and the impact is discussed in the retrospective."],
28: ["What would you suggest measuring instead?", "Outcomes delivered, cycle time, predictability against sprint goals and quality."],
34: ["How do you help the team say no?", "Use past data in planning, coach the team to commit to a sprint goal and make unplanned work visible."],
50: ["What's a WIP limit?", "A maximum number of items in progress at once — it forces the team to finish work before starting new items."]
},
'pd-tpm': {
3: ["How do you plan when requirements are still unclear?", "Plan in phases — detailed for the next few weeks, rough for later — and set milestones to revisit the plan."],
4: ["How do you shorten the critical path?", "Run tasks in parallel, add resources to critical tasks, reduce scope or remove dependencies."],
5: ["What's the difference between a risk and an issue?", "A risk might happen; an issue already has. Risks need mitigation plans; issues need action plans."],
6: ["What do you do when a dependency slips?", "Assess the impact on the critical path, look for workarounds and escalate early if it affects the end date."],
7: ["How often do you report to executives?", "Usually every week or two, plus immediate escalation for major changes."],
8: ["What if leadership approves a scope increase without moving the date?", "Show the risk clearly, identify what would need to change — people or other scope — and document the decision."],
11: ["What should you clarify first in a system design question?", "The users, scale, key features and constraints like latency or availability."],
13: ["How do you decide when to roll back a migration wave?", "Agree rollback criteria in advance — like error rates or failed key processes — and act quickly if they're met."],
20: ["How do you stop escalations from becoming the norm?", "Give the stakeholder regular, honest updates and involve them in decisions before problems happen."],
34: ["What if leadership won't decide?", "Set a deadline, show the cost of delay and propose a default option if no decision is made."],
36: ["What would you need to pull the date in?", "More people with the right skills, reduced scope or accepting more risk — each with a clear impact."]
}
};
