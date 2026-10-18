// Rewritten Oracle AI, Redwood and Fusion platform answers, part 2 (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'How would you design an AI agent for AP hold resolution?':
`**Why they ask:** a concrete agent design question in finance.

**Answer:**
"The goal is to cut the time invoices sit on hold. The workflow triggers on new holds. Business Object tools read the invoice, PO, receipts and tolerances. An agent node explains the cause and recommends an action, like 'receive the remaining 20 units' or 'price is 4% above the agreement'. Then it routes the case to the right person, buyer or requester, using the Email tool with a deep link to the record. People still release holds or change POs. I'd measure days on hold, holds per invoice and AP touches, pilot with the top suppliers, check accuracy, then scale."

Tip: Give the example explanations. They show what "useful" looks like to AP.`,

'How do you decide whether to use a delivered Oracle agent, a partner agent or build your own?':
`**Why they ask:** build vs buy, applied to agents.

**Answer:**
"Delivered agents and templates come first, because Oracle supports them and updates them with each release. A partner agent from the marketplace makes sense when a validated one fits a specific need. I build my own when the process is specific to the company or combines our data and policies. The criteria are fit, maintenance effort, security, cost including premium LLM tokens, and how each option affects controls."

Tip: Mention maintenance. Custom agents need care every release.`,

'How do you keep finance controls intact when introducing AI agents?':
`**Why they ask:** controls are the first thing finance leaders worry about.

**Answer:**
"Agents inherit Fusion roles and data access, and I never give a service account more access than it needs. No autonomous postings or payments: anything financial passes a human approval node. Traces and logs are kept, and agent actions are identifiable. For segregation of duties, actions count under the user who invoked the agent. Accuracy is checked with evaluations and periodic reviews. And internal audit is involved early, with the control design documented."

Tip: Say "involve internal audit early". It avoids a late surprise that stops the project.`,

'How would you measure the value of AI agents in Finance?':
`**Why they ask:** AI projects need to prove value.

**Answer:**
"I take a baseline before go-live: cycle times for invoice processing, hold resolution and close tasks; touches per transaction; questions handled; and errors. After go-live I track usage and adoption from the monitoring dashboard, quality through evaluation sets and user feedback, and cost, meaning token spend on premium models, against the time saved. I report monthly to the controller."

Tip: Say "baseline before go-live". Without it, value can't be proven.`,

'Where can AI help in Oracle SCM today?':
`**Why they ask:** a current knowledge question.

**Answer:**
"In procurement: agents for supplier onboarding, requisition help and contract analysis, plus spend classification. In planning: machine-learning demand forecasting and supply risk alerts. In order management: exception-handling agents and generated customer communications. In inventory: spotting unusual adjustments. In Product Hub: generated item descriptions and attribute enrichment. My approach is to start with high-volume, rules-based tasks, with people reviewing the output."

Tip: State your approach at the end. It shows judgment.`,

'How do you lead a Redwood transition across Procurement, Inventory and Order Management?':
`**Why they ask:** a leadership and planning question.

**Answer:**
"I build a roadmap from Oracle's readiness schedule: which SCM pages move when, and when classic retires. I assess impact by persona: requesters, buyers, receivers, warehouse staff and order administrators. I inventory personalizations and rebuild only valuable ones in Visual Builder Studio. Testing covers end-to-end flows plus mobile and scanning on the floor. Training happens on the floor with super users, away from peak periods. And there's hypercare after each switch."

Tip: Mention testing scanning on the floor. Warehouse issues show up there, not in a test script.`,

'What new capabilities in Redwood SCM pages would you highlight to the business?':
`**Why they ask:** to see if you can sell the change to users.

**Answer:**
"Guided buying and smarter search in requisitions. Redwood purchase order and agreement pages with clearer status and actions. Receiving and inventory pages that work better on tablets and phones. Product Management NIRs and change orders with better collaboration. AI help with summaries, suggested values and generated descriptions. And fewer clicks for common tasks."

Tip: Lead with what saves users time. That's what gets adoption.`,

'Design an AI agent workflow for supplier delivery delays.':
`**Why they ask:** a practical agent design in procurement.

**Answer:**
"It runs daily, or when a supplier's ASN or acknowledgment changes. Business Object tools find PO schedules at risk, past the promised date with no ASN, and check which sales or work orders depend on them. An agent node assesses the impact and drafts a follow-up email to the supplier and an internal summary. A human approval node lets the buyer review, edit and send it with the Email tool. The buyer records new promise dates, and planners see the impact. I'd measure on-time delivery, expedites and buyer time."

Tip: Show the buyer reviewing before sending. Suppliers shouldn't get unchecked AI emails.`,

'How would you use an AI agent with Product Management (item data)?':
`**Why they ask:** item data is a strong AI use case.

**Answer:**
"An item creation assistant can propose the item class, attributes and description from a request or a supplier spec sheet using the Document tool. A data quality agent can find duplicates or missing attributes and suggest fixes. An NIR helper can summarize pending NIRs and what's blocking them. Approvals stay in the NIR workflow: agents propose, people approve."

Tip: End with "agents propose, people approve". It's the governance line.`,

'What risks do AI agents bring to supply chain processes and how do you manage them?':
`**Why they ask:** a balanced risk question.

**Answer:**
"Wrong actions, like ordering the wrong item or quantity: I keep agents to drafts with human approval before commitments. Data exposure: Fusion security inheritance and least-privilege tools. Made-up answers to customers: ground answers in business objects, use evaluation sets, and show sources and deep links. Cost: monitor token usage on premium models. And change: train users to review outputs critically."

Tip: Pair each risk with its control. That's the structure they want.`,

"How do you manage Oracle's quarterly updates?":
`**Why they ask:** every Fusion customer lives with quarterly updates.

**Answer:**
"I read the release readiness and What's New documents for our modules, and identify opt-in features worth enabling and mandatory changes. Updates reach test two weeks before production, so I run the regression pack, ideally automated, for key flows: P2P, O2C, close, payments, integrations and reports. Issues are logged and service requests raised early. And users get release notes and training."

Tip: Mention the two-week window. It shows you know the real timeline.`,

'How do you plan the move from classic to Redwood pages for a Finance module?':
`**Why they ask:** a hands-on planning question.

**Answer:**
"I list the pages users rely on, like AP invoices, journals, expenses and receipts, and which are Redwood in the current release. I find classic Page Composer personalizations, since they don't migrate, and decide which to rebuild in Visual Builder Studio. I enable Redwood in a test environment through profile options or opt-ins and run test scripts end to end, including reports and deep links in emails. Then short role-based training and job aids, and the switch module by module outside month-end while watching tickets. Classic pages are being retired, so it's better to plan than wait."

Tip: Mention testing deep links in approval emails. They often break.`,

'How would you add a required field and a validation to a Redwood Payables page?':
`**Why they ask:** a hands-on VBS question.

**Answer:**
"If it's new data, I create a descriptive flexfield segment and deploy it. In Visual Builder Studio I open the Payables page extension in a workspace, add the field to the layout, make it required, and add a rule, for example required only when the invoice type is Standard and the amount is over $10,000. I preview, test in the test environment, then publish. And I update integrations and reports to include the new field."

Tip: Mention updating integrations. A new required field breaks FBDI loads otherwise.`,

'What happens to OTBI reports, BIP reports and integrations when pages move to Redwood?':
`**Why they ask:** clients worry about breaking reports and integrations.

**Answer:**
"REST and SOAP APIs, FBDI and the data model don't change, so integrations generally keep working. OTBI and BIP reports keep working too, though analytics embedded on pages may look or behave differently, so I test them. Deep links in approval emails or reports can change format, so I test notification links. And personalizations have to be rebuilt in Visual Builder Studio."

Tip: Start with the reassurance: APIs and data don't change.`,

'Walk me through creating an AI agent in AI Agent Studio.':
`**Why they ask:** a hands-on question for anyone claiming agent experience.

**Answer:**
"I start from a delivered template, or the agent builder assistant where I describe what I want in plain words, or from scratch. I write clear instructions: role, goal, boundaries and tone. I add topics to scope what it handles. Then tools: for example a Business Object tool to read invoices and holds, a Document tool for policies, an Email tool, and a Deep Link tool to open the record in Fusion. I choose the LLM. I test in the studio with sample questions and review the trace of tool calls. Then I publish it and make it available to the right roles and pages."

Tip: Mention reviewing traces. It's how you know the agent used the right data.`,

'What tool types can an agent use in AI Agent Studio?':
`**Why they ask:** a technical knowledge question.

**Answer:**
"Business Object tools read or act on Fusion objects through APIs, like invoices, suppliers, POs and journals. Document tools answer from uploaded documents using retrieval. External REST and connector tools call outside systems. MCP tools connect to tools exposed through the Model Context Protocol. Email tools send emails. Deep Link tools give the user a link straight to the Fusion page. User session tools use context about the signed-in user. I give each agent only the tools it needs."

Tip: End with "only the tools it needs". It's the security principle.`,

'How would you test an agent before giving it to AP users?':
`**Why they ask:** testing is what separates a demo from production.

**Answer:**
"I build an evaluation set of 20 to 50 realistic questions with expected answers: holds, payment dates, policy questions, edge cases, and things it must refuse. I run it in the studio and review traces to see which tools were called and what came back. I check security by testing with users from different BUs. I check tone and accuracy and tighten the instructions. Then a pilot with a few users, watching the dashboard for sessions, errors, latency and token use."

Tip: Mention "must refuse" cases. They test the boundaries, not just the happy path.`,

'Which Finance processes are good candidates for AI agents, and which are not?':
`**Why they ask:** a judgment question.

**Answer:**
"Good candidates are high-volume questions and lookups, like invoice and payment status, policy questions and expense help; exception triage, like explaining holds, suggesting fixes and drafting supplier or customer emails; document intake for invoices, remittances and receipts; and reconciliation help, suggesting matches with explanations. Poor candidates without strong controls are approving payments, posting journals and changing bank details, which keep human approval, and judgment-heavy accounting decisions."

Tip: Name bank detail changes as off-limits. It shows fraud awareness.`,

'How do you approach quarterly update testing for SCM?':
`**Why they ask:** a practical release question.

**Answer:**
"I review What's New for Procurement, Inventory, Order Management, Costing and Product Hub. I run an automated regression pack for P2P, O2C, transfers, cost close and key integrations, including OIC and B2B. I check custom BIP and OTBI reports, Visual Builder extensions and REST API changes. Opt-in features are tested in a sandbox first. And there's a quick smoke test after the production update weekend."

Tip: Mention the post-update smoke test. It catches surprises before users do.`,

'How do you roll out Redwood pages for Procurement and Inventory?':
`**Why they ask:** a practical rollout question.

**Answer:**
"I list the classic pages in use and which have Redwood versions, like requisitions, POs, receipts, transfers and item pages. I find personalizations on classic pages and decide which to rebuild in Visual Builder Studio. I enable Redwood in test, run P2P and inventory scenarios, and check reports, notifications and deep links. I train buyers, requesters and warehouse users with short role-based guides. Then I switch by area, away from month-end and peak shipping, and watch tickets closely for two weeks."

Tip: Say "watch tickets for two weeks". It shows you plan for after the switch.`,

'How would you add a rule on the Redwood requisition page — for example, require a justification above $5,000?':
`**Why they ask:** a hands-on VBS question with a design twist.

**Answer:**
"In Visual Builder Studio I open the requisition page extension in a workspace. I use the justification field, or add a flexfield. Then a rule: required when the requisition amount is over $5,000, or by category. I preview with test data, test in the test environment, then publish. But I'd also ask whether this belongs in approval rules instead: approval rules decide who approves, page rules decide what must be entered."

Tip: The approval rules vs page rules point is what makes this answer senior.`,

'What is the Redwood Product Management experience and how does it affect item creation?':
`**Why they ask:** item creation is changing with Redwood.

**Answer:**
"Redwood has pages for items, item classes, New Item Requests and change orders. Item creation is guided by item class, with templates and required attributes. NIR workflows have definition and approval steps assigned to teams. Search is better and AI helps, for example with generated descriptions. Pages are extended with Visual Builder Studio, and classic personalizations need to be rebuilt."

Tip: Mention guided creation by item class. It's the biggest user-facing change.`,

'How would you build an agent that turns supplier quote emails into requisitions?':
`**Why they ask:** a concrete agent build question.

**Answer:**
"An email trigger or inbound mailbox starts an agent workflow. A Document tool extracts the supplier, items, quantities and prices from the PDF. A Business Object tool finds the supplier, catalog items or agreements. Then it creates a draft requisition, not a submitted one. A human approval node lets the buyer review and submit. The Email tool notifies the buyer with a deep link to the draft. I'd test with real quotes and monitor errors and accuracy."

Tip: Stress "draft, not submit". It's the control that makes it safe.`,

'What is the difference between a workflow agent and a hierarchical (supervisor) agent?':
`**Why they ask:** a design concept question.

**Answer:**
"A workflow agent is a defined sequence of nodes: business object, code, email trigger, human approval and agent nodes. It's predictable and auditable, so it's best for business-critical processes. A hierarchical or supervisor agent decides which specialist agents to call, which is more flexible but less predictable. Oracle has been moving toward workflows, with agent nodes inside them for steps that need judgment. I choose workflows when the steps are known and controls matter."

Tip: Say which you'd choose for finance and why.`,

'How do you control what an SCM agent is allowed to do?':
`**Why they ask:** control design for agents.

**Answer:**
"Security: the agent uses the user's roles and data access through identity propagation, with no extra access. Tools: only the ones needed, read-only where possible. Instructions with clear boundaries, like 'never submit a PO, create drafts only'. Human approval nodes before commitments. Monitoring with traces and dashboards, and review of exceptions. And evaluations that include must-refuse cases."

Tip: Give the "drafts only" instruction example. It's concrete and memorable.`,

'How would you lead an enterprise AI program for back-office processes?':
`**Why they ask:** an executive-level question.

**Answer:**
"I'd set the vision: augment teams, automate routine work and improve insight. Build a portfolio of use cases across finance, procurement, supply chain and HR, scored by value and risk. Use embedded Oracle AI first, and an enterprise AI platform for cross-system use. Govern with a responsible AI policy, risk tiers, human oversight and audit trails. Fix data foundations. Plan the workforce impact and reskilling. And track value."

Tip: Mention workforce planning. Leaders want to see you've thought about people.`,

'How do you address workforce concerns about AI replacing jobs in finance and operations?':
`**Why they ask:** a people leadership question.

**Answer:**
"I'd be open about the goal: augment teams and move capacity to higher-value work. I'd involve the teams in designing the use cases, because they know the work best. I'd offer reskilling in analysis, exception handling and supervising AI. I'd measure and share the results honestly. And I'd work with HR on workforce planning."

Tip: Say "involve the teams in design". It builds trust and better solutions.`,

'What risks do you see with AI in enterprise applications and how do you mitigate them?':
`**Why they ask:** a balanced risk question.

**Answer:**
"Accuracy and made-up answers: human review, grounding in enterprise data and testing. Security and privacy: data access controls, no leakage of sensitive data, and vendor assessments. Compliance and auditability: logging and explainability. Bias in HR use cases: testing and oversight. Over-reliance: process controls that still check the work. And cost: usage monitoring."

Tip: Pair each risk with its mitigation. It shows structured thinking.`,

'How would you scale AI agents across ERP, HCM and SCM portfolios?':
`**Why they ask:** a scaling and operating model question.

**Answer:**
"I'd set up an enterprise agent operating model: intake, risk tiers, standards, evaluation, monitoring and ownership. Platform choices: AI Agent Studio for Fusion-centered agents, an enterprise AI platform for cross-domain ones, connected through A2A and MCP. A value portfolio validated by finance. A workforce plan to reskill teams in finance, procurement and HR operations. And regular reporting to the board and audit on AI risk and value."

Tip: Mention finance validating the value. It keeps the numbers honest.`,

'How do you think about the workforce impact of agents in finance and procurement operations?':
`**Why they ask:** leaders need a clear view on people impact.

**Answer:**
"Agents take over lookups, routine drafting and triage, so people focus on exceptions, judgment, and supplier and customer relationships. I'd plan how freed capacity is redeployed with HR, not just treat it as cuts. Reskilling covers exception handling, data analysis and supervising agents. And open communication keeps trust."

Tip: Say "redeploy, not just cut". It's the message that keeps teams engaged.`,

'Why does Redwood matter strategically, beyond new screens?':
`**Why they ask:** to see if you think strategically about the platform.

**Answer:**
"Redwood is the foundation for Oracle's AI features, and new capabilities ship on Redwood pages first. Classic pages are being retired, so it's mandatory, and delaying adds risk and cost. It's also a chance to simplify customizations and improve user productivity. So I'd plan it as part of the platform roadmap, not as IT housekeeping."

Tip: Lead with "AI ships on Redwood first". It changes how executives see it.`,

'How would you set up an enterprise operating model for AI agents on Oracle Fusion?':
`**Why they ask:** a senior governance design question.

**Answer:**
"Intake and prioritization of agent use cases with business owners, scored on value, risk and feasibility. Risk tiers: informational agents are low risk, drafting and assisting are medium, and agents that change records are high, with human approval mandatory. Standards for instructions, tool use, naming, evaluation sets and monitoring thresholds. A life cycle: build, evaluate, pilot, publish, monitor, and re-evaluate on model or release changes. Each agent has a business owner and a technical owner. And for audit: control documentation, retained traces and periodic review."

Tip: Explain the three risk tiers. It's the most useful part of the model.`,

'How do you evaluate and monitor agent quality over time?':
`**Why they ask:** agents drift as models and data change.

**Answer:**
"Each agent has an evaluation set covering correctness, safety with must-refuse cases, tone and correct tool use. It runs before each publish and after Oracle updates or LLM changes. The monitoring dashboard tracks sessions, latency, errors and token use, with alerts on drift. Tracing helps debug wrong answers by showing which tool returned what. User feedback flows back in. And owners review each agent quarterly and retire ones that don't deliver value."

Tip: Mention re-running evaluations after model changes. It's when quality usually slips.`,

'An agent gave a supplier the wrong payment date. How do you investigate?':
`**Why they ask:** an incident response question.

**Answer:**
"I pull the trace for that session: the question, the tools called, the data returned and the model's output. Then I decide where it went wrong: the data, for example the payment schedule changed afterwards; the tool, for example it filtered on the wrong field; or the model misread the data. I fix the right thing: the tool definition, the instructions, like 'only quote dates from the scheduled payment record', or add a deep link and a caveat. I add the case to the evaluation set and rerun it. And I let the supplier and AP know."

Tip: Separate data, tool and model causes. It's the structured approach they want.`,

'What is your view on letting agents post journals or release payments?':
`**Why they ask:** a judgment question on autonomy.

**Answer:**
"Not autonomously in most organizations today. Agents can prepare, for example draft journals with support or recommend payment holds and releases, but posting and releasing payments stay with authorized people through approval nodes. I'd revisit it for low-risk, high-volume cases once accuracy is proven, controls are designed and audit agrees, for example auto-clearing small reconciliation differences within policy. And the decision is documented in the control framework."

Tip: Give a clear position and the conditions for changing it. That's leadership judgment.`,

'How would you lead an enterprise-wide Redwood adoption program?':
`**Why they ask:** a program leadership question.

**Answer:**
"A roadmap aligned with Oracle's classic retirement schedule, in module waves. Rationalize extensions: retire most personalizations and rebuild the essentials in VBS with standards. Update regression automation for Redwood. Change management at scale with role-based learning and super users. Measure adoption, ticket volumes and task times. And engage Oracle early on gaps and bugs."

Tip: Mention engaging Oracle early. Gaps found late delay waves.`,

'How do you keep a Fusion Finance platform current with quarterly releases, Redwood and AI features?':
`**Why they ask:** platform ownership question.

**Answer:**
"Release governance that assesses every quarter: mandatory changes, Redwood pages and new AI features. Opt-in decisions made with business owners, feeding an adoption roadmap. Automated regression for both UI and APIs. A sandbox for trying new features and agents. Communication to users every release. And tracking the value of the features we adopt."

Tip: Mention tracking value of adopted features. It justifies the effort.`,

'How would you lead AI adoption in supply chain operations?':
`**Why they ask:** a leadership question in SCM.

**Answer:**
"I'd build a use-case portfolio by value and feasibility: better forecasts, PO exception handling, supplier communication, order exception triage and quality anomaly detection. Data readiness comes first. Pilots have clear metrics and a human in the loop. Governance covers approvals, auditability and model monitoring. Planners and buyers co-design the solutions. And we scale what works and stop what doesn't."

Tip: Say "planners and buyers co-design". Adoption depends on it.`,

'How would you build a roadmap of AI agents for a global supply chain?':
`**Why they ask:** a roadmap question that shows maturity.

**Answer:**
"Wave one assists: order and PO status agents, policy and procedure Q&A, and item description generation. Wave two prepares: turning supplier quotes and emails into draft requisitions, order exception triage, and drafts for supplier delay follow-ups. Wave three acts with guardrails: automatic rescheduling within rules and automatic low-value POs under agreements, with monitoring and approval thresholds. Every wave has value cases, evaluation, controls and change management."

Tip: The assist, prepare, act structure is easy to remember. Use it.`,

'How do you govern agents across Fusion and other platforms (WMS, TMS, partners)?':
`**Why they ask:** cross-platform governance is new territory.

**Answer:**
"A registry of every agent with its owner, purpose, tools, data and risk tier. Interoperability standards: MCP for tools, A2A for agent-to-agent, and the credential store for secrets. Security with least privilege, identity propagation and logging across platforms. Monitoring in one view where possible, and an incident process for agent errors. And contracts with partners covering how their agents behave and use our data."

Tip: Mention partner contracts. It's often forgotten.`,

'An order exception agent is rescheduling lines incorrectly for one region. How do you approach it?':
`**Why they ask:** an incident handling question.

**Answer:**
"First I pause autonomous actions for that region and switch it to draft-and-approve. Then I review traces to see which data and rules led to the decisions, comparing with correct cases from other regions. Typical causes are regional sourcing rules, calendars, time zones, units of measure, or incomplete data in the tools. I fix the tools, instructions or data, add regional cases to the evaluation set, and re-enable gradually."

Tip: Start with "pause for that region". Containment comes before diagnosis.`,

'How would you manage Redwood adoption across 30 warehouses and plants?':
`**Why they ask:** a multi-site rollout question.

**Answer:**
"A pilot site first, testing on the floor with real devices, scanners and printers. Then a wave plan that avoids peaks, with a readiness checklist per site. Standard VBS extensions for every site, with no site-specific variants unless approved. Training kits and a champion at each site. And monitoring task times and errors after each wave."

Tip: Mention no site-specific variants. It keeps 30 sites supportable.`,

"How do you balance adopting Oracle's new SCM AI features vs third-party tools?":
`**Why they ask:** a build-vs-buy question for AI.

**Answer:**
"Embedded first when it covers the need, because Oracle handles security, data and upgrades. Third-party when there's a clear capability gap, like advanced optimization or specialized warehouse AI. I evaluate both with real data and the same KPIs. And I consider integration cost, data duplication and lock-in."

Tip: Say "same KPIs, real data". It's how a fair comparison is made.`,

'How do you build an AI-ready enterprise systems organization?':
`**Why they ask:** an organizational leadership question.

**Answer:**
"Skills: agent design, prompt engineering, data engineering and model governance. Roles: AI product owners, an AI platform team and a responsible AI lead. Processes: use-case intake, risk review, testing and monitoring. Partnerships with vendors like Oracle and the cloud providers, and with universities. And a culture of experimenting with guardrails."

Tip: Mention a responsible AI lead. It shows governance is built in.`,

'How would you measure the value of AI in back-office operations?':
`**Why they ask:** value measurement for AI.

**Answer:**
"Productivity: transactions per person, hours saved and capacity redeployed. Cycle time: invoice processing, close and order exceptions. Quality: error and exception rates. Financial: cost reduction and working capital improvements. Experience: employee, supplier and customer satisfaction. And risk: whether controls are still effective. I take a baseline before deployment and am careful about attributing results."

Tip: Mention careful attribution. Not every improvement is from AI.`,

'How would you explain Oracle AI Agent Studio to the board?':
`**Why they ask:** executive communication.

**Answer:**
"I'd say: 'Oracle now lets us run AI agents inside our ERP, using our existing security, to handle routine work like invoice questions, exception triage and procurement requests.' The value is faster processes, lower cost per transaction and better service. The controls are that people approve financial actions and everything is logged. And the plan is pilots, then scale, with measured results and risk oversight."

Tip: Keep it to four sentences. Boards want clarity, not detail.`,

'What metrics would you report to the executive team on AI agents?':
`**Why they ask:** executive reporting.

**Answer:**
"Adoption: active users and sessions. Productivity: hours saved, cycle times and automation rates. Quality: accuracy, escalations and incidents. Cost: LLM and token spend against savings. And risk: control exceptions and audit findings."

Tip: Include cost against savings. Executives always ask about spend.`,

'How do you position the Redwood transition with executives?':
`**Why they ask:** executive communication on a mandatory change.

**Answer:**
"It's mandatory, because classic pages are being retired, so it needs a plan and funding. It's an opportunity: better user productivity, the foundation for AI features, and simpler customizations. And delay is a risk: rushed changes and disruption at close or peak times."

Tip: Frame it as mandatory, opportunity, risk. Three points executives remember.`,

};
