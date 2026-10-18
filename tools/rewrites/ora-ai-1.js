// Rewritten Oracle AI, Redwood and Fusion platform answers, part 1 (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'How would you architect AI agents in an Oracle Finance landscape responsibly?':
`**Why they ask:** finance leaders want AI, but not at the cost of control.

**Answer:**
"I'd build agents in Oracle AI Agent Studio, because they run on Fusion data with Fusion security. I'd pick use cases with clear value, like invoice exceptions, collections emails, reconciliation explanations and close insights. Guardrails: the agent acts only within the user's or a defined service role's access, and anything that posts to the ledger or pays money needs human approval. Every prompt, action and decision is logged for audit. No sensitive data goes to an outside model without approval. I'd measure accuracy, time saved and exceptions, and support finance users through the change."

Tip: Say "human approval for postings and payments" early. It's what the controller is listening for.`,

'Explain the architecture of an AI agent in Oracle AI Agent Studio.':
`**Why they ask:** a technical architecture question for anyone building agents.

**Answer:**
"An agent is instructions, topics, tools and an LLM, running natively in Fusion on OCI. Tools connect it to data and actions: Business Object tools for Fusion APIs, Document tools for retrieval over documents including external repositories, External REST and connectors, MCP, Email, Deep Link and User Session. Workflows add deterministic steps through nodes, like business object calls, code, email triggers, vector reads and writes, human approval and agent nodes, and they can be chained. Security uses identity propagation, so the agent acts with the user's Fusion roles, and a credential store holds keys for outside services. There's a monitoring dashboard for sessions, latency, errors and tokens, plus tracing and evaluations. Agents can be called from Fusion pages, Teams or external apps, and A2A and MCP connect them to agents and tools from other vendors."

Tip: Organize it as agent, tools, workflows, security, observability. It's easy to follow.`,

'When would you use a workflow agent instead of a free-form conversational agent?':
`**Why they ask:** choosing the right agent type is a key design decision.

**Answer:**
"I use a workflow when the steps are known and the result must be consistent and auditable, like routing invoice exceptions, preparing accruals or checking a new supplier. I add agent nodes only where judgment or interpretation is needed. I use a conversational agent for open questions, like policy Q&A or status inquiries. In finance, I lean toward workflows with human approval nodes for anything that changes financial data."

Tip: Say "agent nodes only where judgment is needed". It shows a controlled design mindset.`,

'How do RAG and document tools work in AI Agent Studio, and what should you watch for?':
`**Why they ask:** grounded answers depend on document quality.

**Answer:**
"Documents, like policies, contracts and procedures, are split into chunks and embedded. When someone asks a question, the agent retrieves the relevant chunks and uses them to ground its answer. Oracle supports multimodal content and external repositories like SharePoint. What I watch: document quality and versions, because a stale policy gives a confident wrong answer; access control on documents; citing sources with deep links; testing with tricky questions; and refreshing the index when documents change."

Tip: Lead the risks with stale documents. It's the most common real failure.`,

'How would you connect a Fusion agent to non-Oracle systems?':
`**Why they ask:** agents rarely live in one system.

**Answer:**
"For systems with APIs, like bank portals, tax engines or CRM, I use External REST or connector tools. Where the system exposes an MCP server, I use MCP tools. To work with agents on other platforms, A2A. For complex orchestration and transformations, OIC behind the scenes. Secrets go in the credential store, service accounts get least privilege, and failures are monitored."

Tip: Mention least-privilege service accounts. Security reviewers will ask.`,

'How do you choose the LLM for an agent?':
`**Why they ask:** model choice affects quality, speed and cost.

**Answer:**
"Oracle provides Fusion-optimized models, and premium models from several providers can be selected. I choose by task: reasoning-heavy exceptions need a stronger model; simple lookups don't. Then latency, cost, since premium models are charged by tokens, and any data residency requirements. I evaluate the candidates on the same evaluation set before deciding, and re-evaluate when models change."

Tip: Say you test on the same evaluation set. It shows you decide with evidence.`,

'Explain the Redwood extension architecture vs classic Fusion customization.':
`**Why they ask:** extension skills are changing with Redwood.

**Answer:**
"Classic pages are ADF, extended with Page Composer and sandboxes, Application Composer in some areas, and Groovy. Redwood pages are built on Oracle JET and Visual Builder, and extended with Visual Builder Studio: page extensions for fields, layouts and rules, stored in Git and deployed through a pipeline. Flexfields are still how we add data. APIs and FBDI don't change, though deep-link formats can. As an architect, I plan for classic personalizations to retire and avoid fragile CSS or DOM tweaks, using Redwood design tokens and supported extension points instead."

Tip: Mention Git and pipelines. Redwood extensions are code, and that changes how teams work.`,

'How do you build a custom Redwood-style application for Finance users?':
`**Why they ask:** some gaps need a custom app.

**Answer:**
"I use Visual Builder Studio to build a Redwood app on Fusion REST APIs and Redwood components, so it looks native. It can be hosted as an extension or a standalone Visual Builder app, with SSO through Fusion identity. I'd use it for gaps like a custom reconciliation workbench or a guided intake form. And it goes into the extension inventory, the CI/CD pipeline and regression testing like any other extension."

Tip: Give a concrete gap you'd fill. It shows judgment about when to build.`,

'What changed in Fusion integration and data options recently that an architect should know?':
`**Why they ask:** to see if your integration knowledge is current.

**Answer:**
"Business events with OIC now support event-driven integration. REST APIs keep expanding across modules, while FBDI stays for bulk loads. BICC handles bulk extracts, and Fusion Data Intelligence is the analytics platform. AI Agent Studio tools reuse the same business objects and APIs. And Redwood page extensions are done in Visual Builder Studio. So I design new integrations around APIs and events, and keep FBDI for volume."

Tip: End with your design rule. It turns a list into a position.`,

'Where would you apply AI agents in a Fusion SCM landscape?':
`**Why they ask:** to see if you can find practical SCM use cases.

**Answer:**
"In procurement: a supplier onboarding agent, a requisition assistant, contract risk review, and drafts for PO change negotiations. In order management: triaging exceptions like holds and late lines, and customer communications. In planning: explaining forecast anomalies and helping planners with exceptions. In inventory and quality: spotting unusual adjustments and nonconformances. In product data: enrichment and classification. With guardrails: role-based access, human approval for commitments like POs and prices, and auditing of every agent action."

Tip: Pick one and describe it in detail if asked. Depth beats a long list.`,

'Design an agentic architecture for order exception management in Fusion SCM.':
`**Why they ask:** a hands-on agent design question.

**Answer:**
"Exceptions are detected from business events or scheduled checks: order holds, scheduling failures and late shipments. A workflow agent uses Business Object nodes to gather the order, supply from GOP, shipment and customer data, then an agent node classifies the exception and proposes actions: reschedule, split, substitute or expedite. Anything that affects the customer needs human approval, and Email and Deep Link tools notify the owner. External tools bring in carrier tracking through REST or MCP, and WMS status through a connector. I'd monitor exception volumes, resolution time and agent accuracy, with identity propagation and least-privilege tools for security."

Tip: Show where the human approves. It's the part reviewers check first.`,

'How would you use MCP and A2A in a supply chain landscape?':
`**Why they ask:** these protocols are new and interviewers want to see you understand them.

**Answer:**
"MCP lets Fusion agents call tools exposed by other systems, like WMS, TMS, supplier portals or planning tools, through a standard protocol. A2A lets a Fusion agent work with agents on other platforms, for example a logistics provider's agent for tracking or rebooking. The architecture work is around trust boundaries, credentials in the credential store, logging, rate limits, and a clear owner for each agent."

Tip: Explain the difference in one line each: MCP is tools, A2A is agents.`,

'What makes a supply chain agent safe to deploy at scale?':
`**Why they ask:** pilots are easy; scaling safely is hard.

**Answer:**
"Deterministic workflows for the core steps, with agents only where judgment is needed. Draft-then-approve for commitments like POs and order changes. Evaluation sets that include edge cases and requests the agent must refuse. Tracing and dashboards, with alerts on error spikes. A gradual rollout by BU or site. And a fallback to the manual process when the agent or the LLM isn't available."

Tip: Mention the fallback. Operations can't stop because a model is down.`,

'How do Redwood and Visual Builder Studio change your extension strategy for SCM?':
`**Why they ask:** extension strategy has to change with Redwood.

**Answer:**
"Classic personalizations retire with classic pages, so I rebuild only what's valuable in Visual Builder Studio. I prefer configuration and rules in VBS over custom pages. For bigger needs, like a dock scheduling screen, I build a Redwood app in Visual Builder on Fusion REST APIs. And VBS assets are treated as code: Git, reviews, a pipeline, and regression every quarter."

Tip: Say "rebuild only what's valuable". It's a chance to simplify.`,

'What should you test when SCM pages switch to Redwood?':
`**Why they ask:** a practical testing question.

**Answer:**
"End-to-end flows: requisition to PO to receipt to invoice, order to ship to bill, transfers and counts. Mobile and tablet use on the warehouse floor, and barcode scanning. Printing of labels and documents, and notifications and deep links. VBS extensions and rules. Performance for high-volume users. And reports embedded on pages."

Tip: Mention barcode scanning. It's what breaks warehouse operations.`,

'How do you design integrations for Fusion SCM using business events?':
`**Why they ask:** event-driven integration is the modern approach.

**Answer:**
"In OIC I subscribe to events like PO approved, shipment confirmed, receipt created and item released, and push them to downstream systems, like supplier portals, WMS, e-commerce and analytics, in near real time. Events can repeat, so the integration has to be idempotent. Where order matters, I handle sequencing, and I add error queues and replay. Events often carry only keys, so I combine them with REST lookups for the full payload."

Tip: Mention idempotency. It's the issue that causes duplicate records.`,

"How would you plan your team's work for Oracle's move from classic to Redwood pages?":
`**Why they ask:** a planning and leadership question.

**Answer:**
"I'd inventory the affected pages and personalizations by module and estimate the VBS rebuild effort. Then plan waves by module, aligned to Oracle's retirement dates and avoiding close periods. Assign owners and build VBS skills in the team. Each wave gets regression testing and user training. And I'd report progress and risks to the director and business owners."

Tip: Mention avoiding close periods. Finance users will thank you.`,

'Your CFO asks: "What should we do with Oracle AI Agent Studio?" How do you respond?':
`**Why they ask:** a leadership communication question.

**Answer:**
"I'd explain it in one line: it's Oracle's tool for using delivered agents and building our own inside Fusion, with our existing security. Then propose two or three pilots with clear value, like AP inquiries and holds, expense policy help, and collections emails. I'd be clear on controls: human approval for financial actions and audit involved from the start. And I'd commit to measuring and reporting results in 90 days."

Tip: Keep it short and end with a 90-day commitment. CFOs want a plan, not a lecture on AI.`,

'How would you staff and run an AI agent pilot?':
`**Why they ask:** a practical delivery question.

**Answer:**
"A small team: a functional lead, a technical consultant for tools and APIs, a business owner, and a tester. One process in scope, with success metrics agreed up front. Build it, evaluate with real scenarios, then pilot with 5 to 10 users. Review weekly, and at the end decide to scale or stop."

Tip: Say you'd decide to scale or stop. Pilots without an end decision drift.`,

'What is your AI strategy for the ERP platform?':
`**Why they ask:** a leadership vision question.

**Answer:**
"Use Oracle's embedded AI first, agents, document recognition and predictions, because it's lower cost and risk. Prioritize use cases with measurable value: AP processing, collections, close insights and procurement assistance. Govern it with risk assessments, human-in-the-loop for financial actions, auditability and security. Run pilots with metrics and scale the ones that work. Upskill the team on AI Agent Studio and prompt design. And manage the change for users."

Tip: Start with "embedded first". It shows cost and risk awareness.`,

'How would you govern AI agents acting in Oracle ERP?':
`**Why they ask:** governance is what makes AI acceptable to audit.

**Answer:**
"Every agent use case goes through approval by the business owner, security and compliance. Agents get least-privilege roles and their actions are logged. Financial commitments need a human in the loop. I monitor accuracy, exceptions and drift. There's an incident process for wrong actions. And the policy follows the corporate AI governance."

Tip: Mention an incident process. It shows you've planned for things going wrong.`,

'What is your strategy for AI agents on the Oracle ERP platform?':
`**Why they ask:** a strategy question for senior roles.

**Answer:**
"Start with Oracle-delivered agents and AI Agent Studio, for native security and lower risk. Build a portfolio of use cases across AP, close, procurement, order management and HR, scored by value and risk. Govern with risk tiers, human approval for financial and commitment actions, evaluations, monitoring and audit involvement. Build a small agent team inside the ERP center of excellence. And measure value, like cycle times and productivity, against cost, including premium LLM tokens."

Tip: Mention scoring by value and risk. It's how you pick what to build first.`,

'How do you decide between Oracle AI Agent Studio and a general enterprise AI platform?':
`**Why they ask:** many companies have both, and overlap is a risk.

**Answer:**
"For processes centered on Fusion data, I use AI Agent Studio: it inherits Fusion security, uses business objects, has delivered templates, and Oracle supports it. For cross-system assistants and non-ERP use cases, the enterprise AI platform. I connect them with A2A, MCP and APIs instead of duplicating. I decide per use case, and I wouldn't build an ERP agent outside Fusion without a clear reason."

Tip: Say "connect, don't duplicate". It's the architecture principle.`,

'How do you fund and govern the Redwood transition?':
`**Why they ask:** Redwood work needs money and a plan.

**Answer:**
"I'd treat it as a program with a budget for VBS rebuilds, testing and training. I'd use it to simplify, retiring personalizations nobody needs. The timeline follows Oracle's classic retirement dates. Governance means change control for VBS extensions and automated regression testing."

Tip: Present it as a chance to simplify. It makes the budget easier to approve.`,

'What is the difference between Oracle E-Business Suite and Oracle Fusion Cloud ERP?':
`**Why they ask:** a basic question, but it shows whether you understand how the work changes.

**Answer:**
"EBS is on-premise or hosted. The customer owns the database, applies patches, and can customize code directly. It has a Forms UI, concurrent programs and responsibilities. Fusion Cloud ERP is SaaS: Oracle hosts it and upgrades it every quarter. There's no direct database access, so we extend through configuration, Visual Builder, OIC, BI Publisher and REST APIs. It has a browser UI, scheduled processes and role-based security. For a consultant, setups are done through Functional Setup Manager tasks, every quarterly update needs regression testing, and reporting uses OTBI, BI Publisher and Financial Reporting or Smart View."

Tip: If you've worked on both, give one task you did in each. It proves the experience.`,

'What is Functional Setup Manager and how do you use it?':
`**Why they ask:** FSM is how every Fusion setup is done.

**Answer:**
"FSM is the Fusion tool for all application setup. Offerings, like Financials, contain functional areas, like Payables, which contain setup tasks, like Manage Payables Options. You opt in to the offerings and features you need and work through the task list. Implementation projects group tasks so you can assign them and track status. Configuration packages export setups from one environment and import them into another, like test to production. And scope values let you set up a task for a specific BU or ledger."

Tip: Mention configuration packages. It shows you know how setups move between environments.`,

'What is Oracle Redwood and how is it different from the classic Fusion pages?':
`**Why they ask:** Redwood is changing how users work.

**Answer:**
"Redwood is Oracle's new user experience and design system for Fusion. Classic pages are built on older ADF technology, with dense forms and many tabs. Redwood pages are rebuilt with cleaner layouts, guided flows, smart defaults, better search, mobile support and built-in AI help like summaries and suggestions. Oracle is moving modules to Redwood release by release and retiring the classic pages over time, so consultants need to know both for now. Redwood pages are extended with Visual Builder Studio, not Page Composer."

Tip: Name the Redwood pages you've used, like Payables invoices or Manage Journals.`,

'How do you turn on a Redwood page in Fusion?':
`**Why they ask:** a practical admin question.

**Answer:**
"Many Redwood pages are enabled with profile options in Manage Administrator Profile Values, usually named after the page and set at site level. Some come as opt-in features in Functional Setup Manager, and newer ones become the default in a later release. I always enable them in a test environment first, run the test scripts, check personalizations and reports, and train users before switching production."

Tip: Mention checking the quarterly What's New documents. That's where you learn what changed.`,

'A user says a field they always used is missing on the new Redwood page. What do you do?':
`**Why they ask:** a common support scenario after a Redwood switch.

**Answer:**
"First I check whether the field just moved, because Redwood often groups fields differently or puts them in a drawer or under Show More. Then I check if it was a Page Composer personalization on the classic page, because those don't carry over. If it's needed, an admin adds it back with Visual Builder Studio, showing the field, making it required or setting a default, tested in a test environment first. And I confirm integrations and reports still populate it."

Tip: Start with "it may have moved". It solves half these tickets in a minute.`,

'What is Oracle AI Agent Studio?':
`**Why they ask:** a basic AI question for any Fusion consultant.

**Answer:**
"AI Agent Studio is the tool inside Fusion for creating, configuring, testing and managing AI agents. Oracle delivers ready-made agents and templates, for example for payables, procurement and HR questions, that you can use or adjust. You can build your own with instructions, topics and tools that let the agent read or act on Fusion data, documents, email and outside systems. Agents follow Fusion security, acting with the user's roles and data access. And you can choose the LLM and monitor usage and quality."

Tip: Give one use case in your own area. Nobody expects a junior consultant to be an expert.`,

'What is the difference between an AI agent and a simple chatbot?':
`**Why they ask:** a basic concept question.

**Answer:**
"A chatbot answers questions from a script or knowledge base. An AI agent can reason about a goal and take actions with tools: look up an invoice, check a PO, draft an email, create or update a record, within rules about what it may do. In Fusion, agents run inside the application's security and can require human approval before important actions. For example, 'why is this invoice on hold?' — an agent reads the holds, PO and receipts, explains the cause and suggests the next step."

Tip: Use the invoice hold example. It shows the difference in one scenario.`,

'Give an example of how an AI agent could help an AP team.':
`**Why they ask:** a practical use case question.

**Answer:**
"An invoice question agent: a supplier or internal user asks 'When will invoice 123 be paid?' and the agent reads the status, holds and next payment run and answers. A hold resolution helper explains why an invoice is on hold and who needs to act. An intake agent reads emailed invoices with document recognition and prepares them for review. People still approve payments and changes; the agent saves time on lookups and routine steps."

Tip: Say people still approve payments. It's the line AP managers need to hear.`,

'What is Oracle Redwood and what changes for SCM users?':
`**Why they ask:** SCM users feel Redwood changes on the floor.

**Answer:**
"Redwood replaces the older ADF classic pages module by module. For SCM there are Redwood pages for requisitions, purchase orders, receipts, inventory transactions and Product Management items. They're cleaner and guided, with better search, mobile use and AI help like summaries and suggestions. Classic personalizations don't carry over, so Redwood pages are extended with Visual Builder Studio. Users need short training because screens and navigation change."

Tip: Name a Redwood SCM page you've used.`,

'How would you prepare warehouse users for a switch to Redwood receiving or inventory pages?':
`**Why they ask:** warehouse change management is practical and time-sensitive.

**Answer:**
"I'd enable the Redwood page in test first and run receiving and transfer scenarios. I'd note the differences: field locations, the scanning flow and defaults. Rebuild needed personalizations in Visual Builder Studio. Create a one-page job aid with screenshots and train super users first. Then switch production at a quiet time, not month-end or a peak shipping day, with support on the floor."

Tip: Mention support on the floor. Warehouse users won't read emails mid-shift.`,

'What is Visual Builder Studio used for in Redwood?':
`**Why they ask:** VBS is the new extension tool.

**Answer:**
"Visual Builder Studio is how you extend and adjust Redwood pages. You can show, hide or reorder fields, make them required or read-only, set defaults, and add rules, like showing a field only for a certain item type. You can add custom fields through flexfields. Changes are made in a workspace, previewed, then published, usually by an admin or technical consultant. Page Composer is only for classic pages."

Tip: Give one rule example. It shows you know what's possible.`,

'Give an SCM example where an AI agent helps users.':
`**Why they ask:** a practical use case question.

**Answer:**
"A requisition assistant: an employee says 'I need 5 laptops for new hires', and the agent finds the catalog item, fills the requisition and submits it for approval. An order status agent: customer service asks 'Where is order 5521?', and the agent checks the order, shipment and tracking. A supplier quote agent reads an emailed quote and drafts requisition or PO lines for a buyer to review. People still approve purchases and commitments; the agent removes lookups and typing."

Tip: Keep the human approval in every example.`,

'What does "the agent follows Fusion security" mean in practice?':
`**Why they ask:** security is the first question any auditor asks about agents.

**Answer:**
"The agent runs with the identity and roles of the person using it, or a defined service role. If a buyer can only see POs for their BU, the agent only sees those too. Actions like creating a requisition go through the same approvals as when a person does it. So data access and controls like SOX and segregation of duties stay intact."

Tip: Use the buyer example. It makes the concept concrete.`,

'How do you manage HCM quarterly updates, especially payroll?':
`**Why they ask:** payroll mistakes are very visible.

**Answer:**
"I review What's New for HCM and the payroll legislative updates for tax changes. Regression covers core HR transactions, approvals, security, and payroll runs compared to prior results with automated payroll comparison. Statutory patches, like year-end, are planned and tested. Extracts and integrations are retested. And HR users get a short summary of what changed."

Tip: Mention parallel payroll comparison. It's the test that catches real errors.`,

'How is AI being used in Oracle HCM?':
`**Why they ask:** HCM is an active area for AI.

**Answer:**
"Generative AI writes job descriptions, summarizes performance reviews, suggests goals and drafts candidate outreach. AI agents answer HR help desk questions about policies and benefits and help with onboarding. Recommendations suggest jobs and learning based on skills, and the best candidates. The guardrails are bias checks, privacy, and human review for decisions like hiring and ratings."

Tip: Stress human review for hiring and ratings. It's the ethical and legal line.`,

'What changes for HCM users and admins with Redwood?':
`**Why they ask:** HCM moved to Redwood early.

**Answer:**
"HCM was one of the first areas in Redwood: person, employment, journeys, goals, performance, learning and recruiting pages. Transactions are designed with Transaction Design Studio and Visual Builder Studio, controlling fields, sections and rules by action and role; classic Page Composer personalizations don't carry over. Approvals and security stay the same. Managers and HR need training because self-service screens look different."

Tip: Mention Transaction Design Studio. It's the HCM-specific tool.`,

'How would you hide or require a field on a Redwood HCM action like Promote?':
`**Why they ask:** a hands-on HCM configuration question.

**Answer:**
"I use Transaction Design Studio, or VBS for Redwood pages, to create a rule for the Promote action, optionally by legal employer or role. I set the field to required, hidden or read-only, and add any defaults. Then I test with different users and countries, publish, and document the rule for support."

Tip: Mention testing across countries. Rules by legal employer often surprise people.`,

'Give examples of AI agents useful in HCM.':
`**Why they ask:** a use case question.

**Answer:**
"A policy and benefits Q&A agent, grounded on HR documents. An employee self-service agent: 'update my address' or 'how many vacation days do I have?', using HCM business objects with the employee's own access. A manager assistant that summarizes team absences and upcoming reviews and drafts feedback. A recruiting assistant that drafts job descriptions and summarizes candidates. Humans stay responsible for hiring, pay and performance decisions."

Tip: End with who stays responsible. It shows judgment.`,

'What extra care do HCM agents need?':
`**Why they ask:** HCM data is the most sensitive in the ERP.

**Answer:**
"Sensitive data, like salary, health and national IDs, needs strict role-based access, which agents inherit from HCM security. Recruiting and performance uses need bias and fairness testing, with humans making the decisions. Privacy rules like GDPR, and works council requirements in some countries, apply. And employees should be told clearly when they're using an AI assistant."

Tip: Mention works councils. It shows global HCM experience.`,

'How do you keep HCM extracts and integrations safe during Redwood changes?':
`**Why they ask:** UI changes can still affect integrations.

**Answer:**
"HCM Extracts, HDL and APIs aren't affected by UI changes. But new fields added through Redwood or VBS flexfields need to be added to the extracts. I retest approval notifications and deep links. And payroll-related transactions get a regression test after every quarterly update."

Tip: Mention new flexfields missing from extracts. It's the real risk.`,

'How are AI and agents being used in Oracle Fusion Financials?':
`**Why they ask:** a current knowledge question for finance consultants.

**Answer:**
"Intelligent Document Recognition reads invoices. AI agents in AI Agent Studio cover things like payables agents that process invoices, ledger agents for close insights, and collections agents that draft customer communications. Generative AI writes narratives like variance explanations, supplier communications and help. Predictive features include payment time predictions, anomaly detection in journals and expense auditing. All of it is configured with guardrails and human approval. In my view, AI helps most in high-volume, rules-based work, and controls still need people."

Tip: Give your view on where it helps. Judgment matters more than a feature list.`,

'How do you set up governance for continuous Oracle Cloud releases?':
`**Why they ask:** quarterly updates need a routine.

**Answer:**
"A release management process: review the readiness documents each quarter, assess impact and decide on opt-ins. Regression automation for core flows, with Oracle's testing tools or third-party ones like Opkey or Worksoft. A change advisory board to approve configuration changes and new features. A roadmap of features to adopt, tied to business priorities. And short release notes for users."

Tip: Mention automated regression. Manual regression doesn't scale every quarter.`,

'You lead the Finance workstream and Oracle is retiring the classic pages you use. How do you plan it?':
`**Why they ask:** a leadership planning question.

**Answer:**
"I track Oracle's schedule in the quarterly readiness material to see which finance pages move and when classic retires. I assess impact by role: AP clerks, accountants, approvers and expense users. I inventory personalizations and plan rebuilds in Visual Builder Studio, keeping only what matters. I update the regression test pack for Redwood flows. Change management uses super users, short videos and 'what moved where' guides. I sequence by module, outside close, and measure tickets and cycle times after each switch."

Tip: Mention measuring tickets after each switch. It proves the change landed.`,

'What governance would you put around Visual Builder Studio changes?':
`**Why they ask:** VBS changes affect controlled pages.

**Answer:**
"I treat VBS changes like code: workspaces in a Git repository, peer review, testing in a test environment, and publishing only by authorized admins. Naming standards and documentation for each extension. SOX change management evidence, approvals and testing, for controlled pages. Regression on every quarterly update. And very few people with the Visual Builder administrator role."

Tip: Mention SOX evidence. Finance auditors will ask for it.`,

};
