module.exports = {
'hr-chro': {
13: "Promotion readiness of the people in the program, engagement scores of the leaders' teams, retention of high-potential leaders and the business results their units deliver. Track graduates over two or three years, not just satisfaction with the course.",
40: "Workforce cost and headcount plans, productivity, compensation and bonus budgets, and organizational changes like reorganizations or acquisitions. Agreeing one workforce plan with the CFO each year avoids arguments about numbers later."
},
'hr-hrbp': {
6: "Close the PIP formally in writing, recognize the improvement and keep giving regular feedback so performance doesn't slip back. Some companies set a follow-up check at 90 days to confirm the change has lasted.",
10: "Development plans with specific stretch assignments, mentoring or sponsorship from a senior leader, and regular check-ins on progress. Tell them they're valued — high potentials who don't feel seen are often the first to leave.",
14: "Adoption of the new process or behavior, survey and pulse feedback from employees, and the business results the change was meant to improve. Measure before and after, and adjust the plan if adoption stalls.",
34: "Document them carefully with dates and examples, apply the same standards used for others, and consider timing with legal advice. If the issues predate the complaint and are well documented, action may still be appropriate."
},
'hr-ta': {
5: "Low offer acceptance rates, or a high drop-out of candidates at one particular stage — for example many withdrawing after a long technical assignment. Stage-by-stage conversion rates show exactly where the process loses good people.",
6: "Typically after six months to a year, combining the manager's rating, the new hire's performance and whether they stayed. Comparing results by source and interviewer shows which channels and interviewers pick the best people.",
7: "Short training on the questions, scoring rubrics and common biases, then shadowing an experienced interviewer and being shadowed before interviewing alone. Calibration sessions keep interviewers scoring consistently over time.",
8: "Short surveys after interviews and offers, feedback from candidates who declined, and review sites like Glassdoor. Track response times too — how quickly candidates hear back is one of the biggest drivers of their experience.",
9: "Pay below expectations, a slow process that lets other offers arrive first, or a poor interview experience. Asking declined candidates why — and tracking the answers — shows which of these to fix.",
10: "Thank them, keep the relationship warm — many come back within a year when the counteroffer doesn't fix the underlying issue — and move quickly to the next candidate so the role isn't delayed further.",
15: "Bias in screening or ranking, data privacy, and transparency with candidates about how AI is used. Test tools for adverse impact, keep humans in hiring decisions and check local laws like NYC's rules on automated hiring tools.",
35: "Stay in touch regularly until the start date, address concerns quickly, prepare them for a counteroffer, and involve the hiring manager — a welcome call or lunch makes a renege much less likely."
},
'inf-net': {
16: "Mismatched encryption domains — the interesting traffic or proxy IDs — transform sets, PFS settings or SA lifetimes between the two peers. Comparing both sides' phase 2 settings line by line usually finds the mismatch quickly."
},
'inf-sa': {
8: "Failover drills in production-like environments, chaos testing that kills instances or zones on purpose, and measuring actual recovery times against the targets. An HA design that's never been tested is only a theory.",
14: "Eventual consistency — data is briefly out of sync between services — and harder debugging, because a business flow is spread across many services and events. Good tracing, idempotent consumers and clear event contracts reduce the pain."
},
'pd-sm': {
28: "Outcomes delivered to customers, cycle time, predictability against sprint goals and quality, like escaped defects. These can be compared across teams fairly, unlike velocity, which depends on each team's own estimation scale."
},
'pd-tpm': {
7: "Usually every week or two in a short written update, plus a monthly steering review, and immediately for major changes like a slipped milestone or new critical risk. Executives should never learn about a problem from someone else first.",
11: "The users, scale, key features and constraints like latency, availability and budget. Then outline the main components and data flows, and talk through trade-offs — interviewers look for structured thinking rather than deep implementation detail."
},
'sap-basis': {
28: "Data volume — the more data to migrate and convert, the longer the downtime. Archiving old data, cleaning up unused data and running several rehearsals to tune parallel processing can cut the downtime window significantly."
},
'sc-prod': {
12: "Explain why it can't be done now, thank them and, if possible, ask them to help find another way. People keep suggesting ideas when they see every idea taken seriously, even the ones that aren't used."
},
'sc-supply': {
29: "Cutting safety stock across the board — it causes shortages on the critical, variable items while barely touching the real excess. Target slow movers and items with too many months of supply instead."
},
'sc-vp': {
13: "Support for investments with strong returns, agreement on working capital and cost targets, and shared ownership of the numbers. When the CFO trusts supply chain's baseline, approvals for network or systems investments come much faster."
},
'sec-cloud': {
32: "Serve it through a CDN with origin access controls rather than making buckets public, so content is reachable but the storage itself isn't exposed. Keep public content in separate, clearly labeled buckets or accounts.",
36: "Session Manager or a bastion host with MFA and logging, or just-in-time access tools, so developers can reach instances without opening SSH to the internet. Make the secure option as easy as the risky one."
},
'sec-grc': {
15: "Fix the root cause rather than just the symptom, assign a named control owner, and monitor the control regularly — for example monthly evidence checks — so a gap is caught in weeks rather than at the next audit."
},
'sec-iam': {
10: "A periodic review — often quarterly for sensitive systems — where managers or application owners confirm each person's access is still needed, and remove what isn't. Good certifications show context like last use, so reviewers don't rubber-stamp.",
15: "Monitoring and auditing what privileged users actually do, deterring misuse, and giving evidence when investigating incidents. Recordings are kept for a set period and reviewed for high-risk systems or when alerts fire."
},
'sec-soc': {
5: "Track its true-positive rate and whether it has ever led to a real incident or useful investigation. Rules with thousands of alerts and no real findings should be tuned or removed so analysts can focus.",
9: "Mail forwarding rules to external addresses, new OAuth app consents with mailbox access, and extra MFA methods registered by the attacker. Check and remove all of them when containing a compromised account.",
15: "Logins from two locations too far apart to travel between in the time between them — for example New York and Singapore an hour apart. VPNs can cause false positives, so check the IP and device context.",
37: "Remote desktop, PsExec, WMI, PowerShell remoting and stolen credentials — often legitimate admin tools, which is why baselining normal admin behavior is key to spotting misuse."
},
'sec-socmgr': {
5: "Quality measures like escalation accuracy, missed detections found later, time to contain and the share of alerts that turned into real incidents. They reward careful investigation instead of closing tickets fast.",
6: "Automating repetitive steps — enrichment, ticket creation, blocking indicators, isolating hosts with approval — so analysts spend their time on investigation and judgment instead of copying data between tools.",
7: "Run it against historical data to check alert volume and false positives, then against simulated attacks — with tools like Atomic Red Team — to confirm it fires. Only then promote it to production with a runbook.",
11: "Clear SLAs for detection and notification, escalation paths, which response actions they may take on their own, regular reporting and reviews, and the right to test them with simulated attacks.",
15: "Wrong conclusions trusted too easily — an AI summary can miss or invent details. Analysts must review AI suggestions, and sensitive data should only go into approved tools.",
16: "Rising errors, more sick days, disengagement in team meetings and higher turnover. Regular one-to-ones and workload data help spot it early, before people leave.",
22: "Red and blue teams working together — the red team runs attack techniques while defenders watch what's detected — so gaps are found and fixed in the same session instead of in a report weeks later.",
27: "Isolation steps for hosts and accounts, who decides on shutting systems down, communication with executives, legal and insurers, backup recovery steps and decision points like whether to engage law enforcement."
},
'sm-ae': {
2: "Either qualify it properly — find the pain, budget, decision process and decision-maker — or move it out of the forecast. Keeping unqualified deals in pipeline makes coverage look healthy when it isn't.",
6: "Share useful insights regularly — industry benchmarks, relevant customer stories — stay in touch with several contacts, and know when their contract renews. When their needs change, you're the first call.",
7: "A coach gives you information about the account; a champion has influence and actively sells for you internally, even when you're not in the room. Test a champion by asking them to get you access to the economic buyer.",
11: "A longer contract term, a faster signature date, a case study or reference, or a larger volume or more users. Each concession you give should come with something of similar value in return.",
14: "A shared document with the buyer listing every step to a signed deal — evaluation, security review, legal, procurement, signature — with owners and dates. It keeps both sides accountable and shows early when a deal is slipping."
},
'sm-csm': {
3: "Compare it against actual renewals and churn over the past year — if customers who churned had good scores, the weights are wrong. Adjust until the score predicts outcomes, then review it every few quarters.",
9: "Low or falling usage, budget cuts, a lost champion, unresolved support issues, a merger or a new competitor being evaluated. Flag these early so there's time to act before the renewal date.",
10: "Fix the root cause with the product or support team, tell the customer what changed, and check in afterward to confirm the problem hasn't come back. Repeat problems are the fastest way to lose trust.",
12: "Active users of the key features that drive value, compared with licensed users — for example 70% of seats using the main workflow weekly. Usage of features that predict renewal matters more than logins.",
24: "Engage the executive sponsor, run a value review to remind them what the product delivers, and identify the most engaged users as potential champions. Build relationships with several people so one departure isn't fatal.",
25: "Confirm with the customer and historical data — for example usage always drops in August — then monitor. If it doesn't recover when expected, treat it as a real risk.",
35: "Escalate to product leadership with the business case and revenue at risk, explore workarounds or partners, and be honest about what's realistic. Promising a feature you can't deliver damages trust more than saying no."
},
'sm-mkt': {
2: "Between interest and conversion — weak landing pages, slow follow-up on leads or unclear offers. Measuring conversion rates at each stage shows exactly where the funnel leaks.",
5: "Google's 1–10 rating of ad relevance, expected click-through rate and landing page experience. Higher scores lower your cost per click and improve ad position, so better relevance saves money.",
6: "When performance drops — frequency rises and click-through falls — which on social platforms is often every few weeks. Keep a pipeline of new creative ready so you can rotate before fatigue sets in.",
7: "Improve titles, content and internal links on pages already ranking on page two for valuable keywords — a small improvement can move them onto page one, where most clicks happen.",
9: "Sending to old or purchased lists, high spam complaints, high bounce rates and missing authentication like SPF, DKIM and DMARC. Clean lists and authentication are the foundation of inbox placement.",
10: "Measuring how many conversions happen because of a campaign — not just after it — by comparing an exposed group with a holdout control group. It shows which channels truly add sales.",
11: "Enough to detect the expected difference with confidence — calculated before the test from your baseline conversion rate and the minimum lift you care about. Small effects need much larger samples.",
12: "Allocate a small test budget, set clear success criteria like target CAC, run long enough to learn, and scale only if it meets them. Most new channels fail, so keep tests cheap.",
33: "Look at channel spend and performance, campaign or targeting changes, website changes like a broken form, and seasonality compared with last year. Usually one of these explains most of the drop.",
35: "An agreement on lead definitions, the volume marketing will deliver, and how quickly sales will follow up — for example within 24 hours — with both sides reporting against it.",
50: "Improving conversion rates — landing pages, offers, follow-up speed — and cutting spend on channels with poor returns. Growing referrals and organic traffic also lowers blended CAC over time."
},
'sm-sdir': {
7: "Usually 60 to 90 days with a clear, written plan, specific targets — like pipeline created and stage conversion — and weekly coaching. If they improve, great; if not, make the decision rather than letting it drag.",
8: "The quota may be set too high or territories may be unbalanced. Review the quota model against market potential and history — when most reps miss, it's usually the plan, not the people.",
10: "Too many measures, which confuses reps and dilutes focus. Keep it to two or three measures tied to company goals, so reps can calculate their pay easily.",
12: "Time to first closed deal and time to reach full quota productivity, plus early activity like meetings booked. Comparing new hires by these metrics shows which onboarding methods work.",
25: "Heavy discounting that hurts margin and trains customers to wait until quarter end. Pull forward real deals with fair incentives, but protect pricing discipline.",
26: "Show the cost to team morale, collaboration and retention — for example other reps leaving or refusing to work with them. One toxic top performer can cost more revenue than they bring.",
38: "Deals stuck at late stages near quarter end, then closing on day one of the next quarter, or reps whose forecast is consistently far below results. Talk to the rep and remove incentives that reward it."
},
'ss-ehs': {
12: "Regulatory update services, industry associations, agency newsletters and regular compliance audits. Keep a register of applicable requirements and review it whenever regulations or site activities change.",
20: "New or modified equipment, new chemicals, process changes, changes to operating limits, and significant staffing or organizational changes — anything that could introduce new hazards.",
22: "Near-miss reporting — as more near misses were reported and fixed, hazards were removed before they caused injuries, and recordable injuries followed down."
},
'ss-mfgeng': {
20: "Integration with existing equipment and systems, operator training, maintenance and spare parts, and the production lost during installation and ramp-up. Leaving them out makes payback look better than it is.",
24: "Involved them in designing it from the start, tested it with them on the line, and showed how it made their jobs easier or safer. Operators support changes they helped build."
},
'ss-rel': {
13: "Standardize parts across similar equipment so fewer different spares are needed, and share critical spares between sites or with suppliers through consignment agreements.",
20: "Repairing the same asset again and again without looking at total lifecycle cost and reliability — sometimes replacement is cheaper once downtime and repeat repairs are counted."
},
'ss-sop': {
2: "Usually about three to four weeks each month — data gathering in week one, demand review in week two, supply review in week three, then the pre-S&OP and executive meeting at the end of the month.",
7: "Leaders who can make decisions — the general manager or CEO, and the heads of sales, operations, supply chain and finance. If decision-makers send delegates, decisions get pushed back a month.",
16: "Shorten the meeting, focus it on decisions instead of data review, and show the impact of past decisions — like avoided shortages or inventory saved — so leaders see why it's worth their time."
},
'ss-trade': {
29: "Review shipping models, duty and brokerage costs, and pricing for low-value shipments, and consider consolidating shipments or using bonded warehouses. Rules continue to change, so check current CBP guidance regularly.",
31: "A provision in the EAR that allows export of certain items without a license under specific conditions — for example limited-value shipments or temporary exports. Each exception has conditions that must be documented."
},
'swe-fe': {
17: "Faster first load and better SEO, because the server sends ready HTML — but more server cost, complexity and slower time-to-first-byte under load. Use it for personalized or frequently changing pages where those benefits matter."
},
'swe-fs': {
2: "Behind a feature flag, released to a small group of users first, with monitoring of errors and key metrics. If something goes wrong, turn the flag off instead of rolling back the whole deployment.",
6: "Showing cached data immediately while fetching fresh data in the background, then updating the UI when it arrives. Users get instant screens without seeing stale data for long."
},
'swe-mob': {
10: "State flows down to the UI and user events flow up to the ViewModel or store, which produces new state. Every change goes through one path, so bugs are easier to trace and screens easier to test."
},
'swe-staff': {
12: "Show its impact on delivery speed and incidents in business terms — for example 'this flaky deployment process costs each team half a day a week'. Product leaders support debt work when they see the cost.",
33: "Other teams adopt your designs, tools or standards without being asked, and hard problems across teams get solved because you were involved. Engineers you mentored grow into bigger roles."
}
};
