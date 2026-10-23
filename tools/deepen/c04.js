module.exports = {
'sap-arch': {
2: ["What's the business benefit of clean core?", "Faster, cheaper upgrades and quicker access to SAP innovation — a clean system can take new releases in weeks rather than months of retesting custom code."],
8: ["What's a good example of a side-by-side extension?", "A customer portal or mobile app on BTP that reads and writes S/4 data through released APIs, without changing the core system."],
10: ["Who decides when a gap justifies custom development?", "The design authority, with business process owners — based on business value, legal need and long-term cost."],
21: ["What's the risk of waiting until 2027?", "SI capacity shortages, rushed projects and higher costs. Starting early gives time for proper planning and data cleanup."],
25: ["What benefit is most often overstated?", "Productivity savings from new UX. Benefits tied to specific processes — faster close, lower inventory — are more credible."],
37: ["Why would a company use Central Finance?", "To get group-wide reporting and a common finance system quickly, while source ERPs are replaced gradually."]
},
'sap-basis': {
10: ["When wouldn't you use DMO?", "When the source database is already HANA — then a standard SUM upgrade is enough."],
19: ["What do you do after service is restored?", "Root cause analysis, a post-incident report and actions like monitoring improvements or configuration fixes."],
27: ["What does the readiness check tell you?", "Simplification items affecting the system, custom code impact, add-on compatibility and data volume — the starting point for the conversion plan."],
28: ["What's the biggest driver of conversion downtime?", "Data volume — archiving and cleaning data beforehand reduces migration time significantly."]
},
'sap-dir': {
4: ["How often should the steering committee meet?", "Monthly for decisions and risks, with more frequent meetings during critical phases like cutover."],
7: ["How do you handle a country that needs something different?", "Allow it only for legal or strong business reasons, documented and approved by the design authority."],
13: ["What if a country leader keeps blocking?", "Escalate to the executive sponsor with the impact, while keeping the country involved in solving the issue."],
19: ["What signs told you the program was in trouble?", "Missed milestones, rising defects, unclear decisions and a plan that didn't match reality."],
28: ["What do you tell the CFO?", "The causes, the options to recover and the forecast with each option — early and honestly."],
33: ["What role does the partner ecosystem play?", "Availability of skilled partners and talent in your regions affects cost, risk and long-term support."],
45: ["What would you avoid in the first month?", "Making big changes before understanding the program, and blaming the previous leadership publicly."],
47: ["What's a typical S/4 timeline?", "Often 18 to 36 months for large global programs, depending on scope, countries and approach."]
},
'sap-fico': {
9: ["What do you check in the payment proposal?", "Unusual or large payments, blocked items, exceptions and that the bank accounts are correct before running the payment."]
},
'sap-log': {
18: ["What's back-order processing?", "Re-checking availability for open orders when stock is short or new supply arrives, so the most important orders get confirmed first."]
},
'sc-buyer': {
10: ["How do you stop it happening again?", "Review the supplier's performance, add a second source or safety stock for the part, and set up early warning on supplier delivery dates."],
21: ["How do you find which items are critical?", "Look at the impact of a shortage — production stoppage, revenue lost — and the number of available suppliers."]
},
'sc-cat': {
15: ["How do you use the scorecard with the supplier?", "Review it quarterly, agree improvement actions for weak areas and link good performance to more business."]
},
'sc-demand': {
9: ["What should the demand planner bring to the meeting?", "The demand plan versus last month and budget, key changes and assumptions, risks and opportunities, and decisions needed."],
12: ["How do you handle history affected by stockouts?", "Estimate the lost demand using similar periods or locations, so the forecast doesn't learn that demand was lower."],
14: ["How do you update the launch forecast after launch?", "Track early sales weekly against the forecast and adjust quickly — early weeks are the best signal."],
16: ["How do you measure promotion forecast accuracy?", "Compare forecast with actual lift for each promotion and use the results to improve future forecasts."]
},
'sc-dir': {
34: ["What's needed before AI works in supply chain?", "Clean, connected data — master data, lead times, inventory — and planners who trust the outputs."]
},
'sc-inv': {
13: ["Who approves the reserve?", "Finance, with input from operations and sales on future demand and disposal plans."],
17: ["Which items need the most protection?", "High-value, small items that are easy to resell — like electronics — with caged storage and frequent counts."],
18: ["What do you do differently for A items?", "Count them more often, review their parameters regularly and give them the most planning attention."]
},
'sc-prod': {
12: ["How do you respond to an idea you can't implement?", "Explain why and thank them — people keep suggesting when they see ideas taken seriously."],
23: ["How do you find the bottleneck?", "Look for the step with the longest queue in front of it, or the highest utilization."]
},
'sc-supply': {
11: ["What do you do once production is protected?", "Find the root cause of the shortage and fix it — planning parameters, supplier performance or data accuracy."],
21: ["How do you check BOM accuracy?", "Audit BOMs against what's actually used on the line and compare backflush variances."],
28: ["How do you show leadership this problem?", "A chart of inventory by item with service levels — showing excess on some items and shortages on others."],
29: ["What would you avoid?", "Cutting safety stock across the board — it causes shortages on critical items."]
},
'sc-vp': {
13: ["What do you need from the CFO?", "Support for investments with strong returns and agreement on working capital targets."],
21: ["What's the risk of extending supplier payment terms?", "Hurting smaller suppliers, which can increase prices or supply risk — supply chain finance can help."],
29: ["What's missing if you only track those metrics?", "Leading indicators like forecast accuracy and supplier performance, which predict problems before they hit service."]
},
'sc-wh': {
10: ["How do you measure safety culture?", "Near-miss reporting rates, safety observations and employee survey results — not just injury rates."],
13: ["How do you keep temporary workers safe and productive?", "Short, focused training, clear work instructions, buddy systems and simple tasks at the start."],
20: ["What's the biggest risk in automation projects?", "Underestimating integration and process changes — automation works only with stable processes and good data."]
},
'sec-arch': {
6: ["What does identity as the perimeter mean in practice?", "Strong authentication, conditional access and least-privilege access to every application, regardless of network location."],
12: ["What's a security champion?", "A developer in each team trained in security, who helps spread secure practices and acts as the link to the security team."],
13: ["What's broken object-level authorization?", "When an API lets a user access another user's data by changing an ID — the most common API vulnerability."],
18: ["How do you avoid security becoming a bottleneck?", "Automate checks, provide secure templates and reserve manual reviews for high-risk changes."],
36: ["What's just-in-time access?", "Granting elevated rights only when needed, for a limited time, with approval — removing standing admin rights."]
},
'sec-ciso': {
3: ["How do you prioritize investments in the strategy?", "By risk reduction per dollar — address the biggest risks first, like identity and ransomware resilience."],
6: ["What do you do if the budget is rejected?", "Explain which risks remain unaddressed and get leadership to formally accept them."],
8: ["What's the benefit of quantifying risk?", "It lets executives compare cyber risk with other business risks in money terms and make better investment decisions."],
11: ["Who should lead communication during an incident?", "Communications and legal, with the CISO providing accurate technical information."],
12: ["What should be decided before an incident happens?", "Who decides on paying, the role of insurers and law enforcement, and backup and recovery plans."],
17: ["What's shadow AI?", "Employees using unapproved AI tools — often with company data. Offering approved tools reduces it."],
35: ["How do you show readiness to the board?", "Results of exercises and tests, time to detect and recover, and progress on the top risks."]
},
'sec-cloud': {
4: ["What's a service control policy?", "An organization-level policy in AWS that sets maximum permissions for accounts — for example blocking certain regions or disabling logging changes."],
10: ["What's the difference between provider-managed and customer-managed keys?", "Customer-managed keys give more control — like rotation and access policies — and can be required by regulations."],
15: ["How do you find how the credentials leaked?", "Check code repositories, CI logs, developer machines and third-party tools for exposed keys."],
16: ["How do you stop it from happening again?", "Remove long-lived keys, enforce MFA, add budget and anomaly alerts, and use guardrails to block unusual instance types or regions."],
19: ["What's a break-glass account?", "An emergency admin account kept secure and monitored, used only when normal access fails."],
32: ["What if a team needs public content?", "Use a CDN with controlled access rather than making buckets public."],
36: ["How do you give developers secure access instead?", "Session Manager or a bastion host with MFA and logging."],
44: ["How do you enforce IMDSv2?", "Require it in launch templates and account settings, and use policies to block instances without it."]
},
'sec-eng': {
12: ["What other factors besides CVSS help prioritize?", "Whether it's being exploited — like CISA's KEV list — exploit prediction scores, and how critical the asset is."],
16: ["How do you stop security tools from slowing delivery?", "Run fast checks on every commit, heavier scans nightly, and block only on high-severity findings."],
47: ["Why is SSRF dangerous in the cloud?", "Attackers can reach the instance metadata service and steal cloud credentials, then access other resources."]
},
'sec-grc': {
6: ["How do you rate likelihood and impact consistently?", "Use defined scales with examples — like impact by financial loss bands — so different people rate the same way."],
12: ["How many samples should you test?", "It depends on how often the control runs — for example 25 for daily controls, 2 for quarterly ones — following audit guidance."],
15: ["How do you prevent the same finding next year?", "Fix the root cause, assign an owner and monitor the control regularly."],
25: ["What do executives want from a risk report?", "The top risks, whether they're getting better or worse and what decisions are needed."]
},
'sec-iam': {
10: ["What's an access certification?", "A periodic review where managers confirm their team's access is still needed."],
15: ["What's session recording for?", "Monitoring and auditing privileged activity, and investigating incidents."],
19: ["Why are non-human identities a growing risk?", "They often outnumber humans, have broad access and long-lived secrets, and are rarely reviewed."]
},
'sec-soc': {
5: ["How do you know a rule is worth keeping?", "Track its true-positive rate and whether it has ever led to a real incident."],
7: ["What makes PowerShell activity suspicious?", "Encoded commands, downloads from the internet, disabling security tools or running from unusual parent processes like Office."],
9: ["What persistence do attackers often leave in email accounts?", "Mail forwarding rules, new OAuth app consents and additional MFA methods."],
10: ["What's a coverage gap?", "An attacker technique with no detection in your environment — found by mapping rules to ATT&CK."],
15: ["What's impossible travel?", "Logins from two locations too far apart to travel between in the time between them."],
16: ["Why is ransomware often caught late?", "Early signs look like normal admin activity, and encryption usually starts at night or on weekends."],
24: ["What's a severity 1 incident?", "An active attack affecting critical systems or data, like ransomware spreading or confirmed data theft."],
37: ["What tools do attackers use for lateral movement?", "Remote desktop, PsExec, WMI and stolen credentials."]
},
'sec-socmgr': {
5: ["What metric would you use instead?", "Quality measures like escalation accuracy, missed detections and time to contain."],
6: ["What's the role of SOAR?", "Automating repetitive steps like enrichment and containment, so analysts focus on investigation."],
7: ["How do you test a new detection?", "Run it against historical data and simulated attacks before putting it into production."],
9: ["What's the first decision in a major incident?", "Containment — isolating systems or accounts to stop the spread — balanced against business impact."],
11: ["What should an MDR contract include?", "Clear SLAs, escalation paths, response actions allowed and regular reporting."],
13: ["What logs should you keep regardless of cost?", "Identity, endpoint, cloud audit and critical system logs — the ones investigations need most."],
15: ["What's the risk of AI in the SOC?", "Wrong conclusions trusted too easily — analysts must review AI suggestions."],
16: ["What sign shows burnout?", "Rising errors, sick days and turnover."],
22: ["What's purple teaming?", "Red and blue teams working together to test and improve detections."],
27: ["What should ransomware playbooks include?", "Isolation steps, communication, backup recovery and decision points."]
},
'sm-ae': {
2: ["What do you do with an unqualified deal?", "Either qualify it properly or move it out of the forecast."],
6: ["How do you stay relevant if they're not ready to switch?", "Share useful insights regularly, and be ready when their contract or needs change."],
7: ["What's the difference between a coach and a champion?", "A coach gives information; a champion has influence and actively sells for you."],
11: ["What's a good concession to ask for?", "A longer contract, faster signature, case study or larger volume."],
14: ["What's a mutual action plan?", "A shared document with the buyer listing steps, owners and dates to a signed deal."],
36: ["What if the customer threatens to walk?", "Check whether the value is still there, offer a smaller, trade-based concession, and accept losing a deal that isn't profitable."]
},
'sm-csm': {
3: ["How do you validate the health score?", "Compare it against actual renewals and churn — adjust weights until it predicts outcomes."],
9: ["What's a renewal risk?", "Low usage, budget cuts, a lost champion or unresolved issues."],
10: ["How do you prevent the same issue?", "Fix the root cause with product or support and update the customer."],
12: ["What's a good adoption metric?", "Active users of key features compared with licensed users."],
24: ["What if there's no obvious new champion?", "Engage the executive sponsor, run a value review and identify engaged users."],
25: ["What if the drop is seasonal?", "Confirm with the customer and historical data, then monitor."],
35: ["What if it's a big customer?", "Escalate to product leadership with the business case — but avoid promising a feature you can't deliver."]
},
'sm-mkt': {
2: ["Where do most funnels leak?", "Between interest and conversion — weak landing pages, slow follow-up or unclear offers."],
5: ["What's Quality Score?", "Google's rating of ad relevance, expected click-through and landing page experience — higher scores lower costs."],
6: ["How often should you refresh creative?", "When performance drops — often every few weeks on social platforms."],
7: ["What's a quick SEO win?", "Improving titles and content on pages already ranking on page two."],
9: ["What hurts deliverability?", "Sending to old lists, high spam complaints and missing authentication like SPF and DKIM."],
10: ["What's incrementality testing?", "Measuring how many conversions happen because of a campaign, using control groups."],
11: ["What sample size do you need?", "Enough to detect the expected difference with confidence — calculated before the test."],
12: ["How do you test a new channel?", "Allocate a small budget, set success criteria and scale if it meets them."],
33: ["What if tracking is fine?", "Look at channel spend, campaign changes, website changes and seasonality."],
35: ["What's an SLA between marketing and sales?", "An agreement on lead definitions, volumes and how quickly sales follows up."],
50: ["What reduces CAC fastest?", "Improving conversion rates and cutting spend on poor-performing channels."]
},
'sm-sdir': {
5: ["What's a stale deal?", "One with no activity or next step for a long time, or a close date that keeps moving."],
7: ["How long do you give a rep to improve?", "Usually 60 to 90 days with a clear plan and support."],
8: ["What if most reps miss quota?", "The quota may be too high or territories unbalanced — review the model."],
10: ["What's a common comp plan mistake?", "Too many measures, which confuses reps."],
12: ["What's a good ramp metric?", "Time to first closed deal and time to reach full quota."],
25: ["What should you avoid at quarter end?", "Heavy discounting that hurts margin and trains customers to wait."],
26: ["What if leadership wants to keep them because of revenue?", "Show the cost to team morale and retention."],
38: ["How do you spot sandbagging?", "Deals stuck at late stages near quarter end, then closing on day one of the next quarter."]
},
'ss-ehs': {
12: ["How do you keep up with regulatory changes?", "Regulatory update services, industry groups and regular compliance audits."],
20: ["What changes need MOC?", "New equipment, chemicals, processes or significant staffing changes."],
22: ["What leading indicator helped most?", "Near-miss reporting — it showed hazards before injuries."]
},
'ss-mfgeng': {
20: ["What costs are often missed?", "Integration, training, maintenance and downtime during installation."],
24: ["How did you get operators to adopt it?", "Involved them in designing it and showed how it made their jobs easier."]
},
'ss-rel': {
13: ["How do you reduce spare parts cost?", "Standardize parts across equipment and share spares between sites."],
20: ["What's a common mistake?", "Repairing again and again without looking at total cost and reliability."]
},
'ss-sop': {
2: ["How long does the cycle take?", "Usually about three to four weeks each month."],
7: ["Who should attend?", "Leaders who can make decisions — sales, operations, finance and the general manager."],
16: ["What if leaders stop attending?", "Shorten the meeting, focus on decisions and show the impact of past decisions."]
},
'ss-trade': {
5: ["What's a tariff engineering option?", "Changing the product or where it's processed so it qualifies for a lower duty — legally and with documentation."],
29: ["How should businesses respond?", "Review shipping models, duty costs and pricing for low-value shipments."],
31: ["What's a license exception?", "A provision allowing export without a license under certain conditions."]
},
'swe-fe': {
17: ["What's the main trade-off of SSR?", "Faster first load and better SEO, but more server cost and complexity."]
},
'swe-fs': {
2: ["How do you release safely?", "Behind a feature flag, to a small group first, with monitoring."],
6: ["What's stale-while-revalidate?", "Showing cached data immediately while fetching fresh data in the background."]
},
'swe-mob': {
10: ["What's unidirectional data flow?", "State flows down to the UI and events flow up — making changes easier to trace."]
},
'swe-staff': {
12: ["How do you get product buy-in for debt work?", "Show its impact on delivery speed and incidents in business terms."],
33: ["What's a sign of staff-level impact?", "Other teams adopt your designs or standards without being asked."]
}
};
