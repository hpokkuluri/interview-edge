// Rewritten Product & Delivery — Business Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix pd-ba-).
module.exports = {

'What elicitation techniques do you use?':
`**Why they ask:** core BA craft.

**Answer:**
"Interviews, facilitated workshops, observation and job shadowing, surveys, document analysis, process mapping, prototyping, focus groups, and analysis of existing systems and data. I choose by situation: shadowing reveals the workarounds people never mention in interviews — on one project I watched AP clerks keep a separate spreadsheet of disputed invoices that nobody had listed as a requirement."

Tip: Match technique to situation.`,

'What types of requirements are there?':
`**Why they ask:** BABOK fundamentals.

**Answer:**
"Business requirements — the goals, like reducing invoice cycle time by half. Stakeholder or user requirements — what each group needs. Functional requirements — what the system does. Non-functional requirements — performance, security, usability, availability. And transition requirements — data migration, training and cutover — which are temporary but often forgotten."

Tip: BABOK classification.`,

'What makes a good requirement?':
`**Why they ask:** quality of your output.

**Answer:**
"Clear, concise, testable, feasible, necessary, unambiguous, traceable and prioritized. Vague words like 'fast' or 'user-friendly' need a measure: not 'search must be fast' but 'search returns results within 2 seconds for 95% of queries.' If a tester can't write a pass/fail test for it, it isn't finished."

Tip: Measurable.`,

'How do you write a good user story?':
`**Why they ask:** agile requirements.

**Answer:**
"'As a [role], I want [capability], so that [benefit]', with acceptance criteria — often Given/When/Then — and meeting INVEST: independent, negotiable, valuable, estimable, small, testable. For example: 'As an AP clerk, I want duplicate invoice warnings, so we avoid paying twice.' Acceptance criteria: given an invoice already exists with the same supplier, number and amount, when I save a new one, then a warning appears showing the original."

Tip: Acceptance criteria are essential.`,

'How do you map a business process?':
`**Why they ask:** process analysis skill.

**Answer:**
"Define scope and boundaries, identify the roles, document the as-is process in BPMN swimlanes, find pain points — delays, rework, handoffs — measure them where possible, design the to-be process and validate it with the people who do the work. Swimlanes make handoffs visible; one invoice process had seven handoffs between three departments, which explained the 12-day cycle time."

Tip: BPMN swimlanes.`,

'How do you perform gap analysis?':
`**Why they ask:** analysis method.

**Answer:**
"Compare the current state with the desired state — or with a package's standard capabilities — identify gaps, assess each gap's impact, and recommend an option: change the process, configure, customize, or work around. Process change comes before customization, because customizations cost money at every upgrade."

Tip: Process change before customization.`,

'How do you prioritize requirements?':
`**Why they ask:** prioritization skill.

**Answer:**
"MoSCoW — Must, Should, Could, Won't — value versus effort matrices, WSJF, the Kano model, or business value scoring, always agreed with stakeholders. MoSCoW is the most common; the discipline is keeping 'Must' honest — if everything is a Must, nothing is."

Tip: MoSCoW is common.`,

'How do you manage stakeholders?':
`**Why they ask:** influence and communication.

**Answer:**
"Identify them, map influence and interest on a power-interest grid, plan engagement — manage closely the high-power, high-interest ones, keep satisfied the high-power, low-interest ones — involve them in decisions, and manage expectations transparently."

Tip: Power/interest grid.`,

'How do you handle conflicting requirements?':
`**Why they ask:** facilitation and negotiation.

**Answer:**
"Understand the goal behind each position, find common ground, analyze the impact of each option, present trade-offs, and escalate to the decision owner if needed. Sales wanted orders to ship immediately; finance wanted a credit check first. The shared goal was 'no bad debt without slowing good customers', so we designed automatic approval below a credit threshold."

Tip: Goals behind positions.`,

'How do you handle scope creep?':
`**Why they ask:** delivery discipline.

**Answer:**
"Baseline the scope, run a change control process, assess every change's impact on time, cost and risk, and get the sponsor to decide. In agile, new items go into the backlog and something of similar size comes out — it's a trade, not an addition."

Tip: Trade-offs.`,

'What is a requirements traceability matrix?':
`**Why they ask:** coverage and impact.

**Answer:**
"A table linking each requirement to business objectives, design, test cases and defects. It proves every requirement is built and tested, and when a requirement changes, it shows exactly which designs and tests are affected."

Tip: Testing coverage.`,

'What data analysis skills do BAs need?':
`**Why they ask:** analytical depth.

**Answer:**
"SQL for querying, Excel — pivot tables, lookups, Power Query — data profiling, data mapping for integrations and migrations, and visualization in Power BI or Tableau. SQL lets me validate assumptions myself instead of waiting days for someone to pull data."

Tip: SQL is valuable.`,

'Write a query to find customers with no orders in the last 90 days.':
`**Why they ask:** practical SQL.

**Answer:**
"SELECT c.customer_id, c.name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND o.order_date >= CURRENT_DATE - 90). NOT EXISTS returns customers for whom no recent order exists, and unlike a LEFT JOIN it won't duplicate rows. Date syntax varies slightly by database."

Tip: NOT EXISTS pattern.`,

'Which diagrams do you use?':
`**Why they ask:** communication tools.

**Answer:**
"BPMN process flows, use case diagrams, context diagrams, data flow diagrams, ERDs, sequence diagrams for integrations, state diagrams, and wireframes — chosen for the audience. Executives get a context diagram; developers get sequence diagrams."

Tip: Choose for the audience.`,

'How does a BA work in Agile?':
`**Why they ask:** ways of working.

**Answer:**
"I work with the product owner to refine the backlog, write stories and acceptance criteria, answer questions during sprints, support testing and demos, and keep documentation just enough — what the team actually needs, not a 100-page specification."

Tip: Just-enough documentation.`,

"What is the BA's role in testing?":
`**Why they ask:** quality ownership.

**Answer:**
"Define acceptance criteria, review test cases for coverage, plan and support UAT, triage defects by business impact, and sign off. The BA knows what 'correct' means for the business."

Tip: UAT ownership.`,

'How do you run UAT?':
`**Why they ask:** delivery experience.

**Answer:**
"Define scope and scenarios from real business processes, prepare data and environments, train the business testers, track execution and defects, run daily triage, and get sign-off against exit criteria. Real scenarios matter — 'process this week's actual supplier invoices' finds more than scripted happy paths."

Tip: Real business scenarios.`,

'What documents do BAs produce?':
`**Why they ask:** deliverables.

**Answer:**
"Business requirements documents, functional specifications, user stories, process maps, data mappings, use cases and UAT plans — tailored to the methodology. A waterfall ERP project needs a signed-off BRD; an agile product team needs well-refined stories."

Tip: Tailored to methodology.`,

'How do you find root causes?':
`**Why they ask:** analytical rigor.

**Answer:**
"5 Whys, fishbone diagrams, Pareto analysis on data, and observing the process. Pareto often shows 80% of errors come from a couple of causes — in one case, 70% of invoice exceptions came from two suppliers sending wrong PO numbers."

Tip: Data supports conclusions.`,

'How do you build a business case?':
`**Why they ask:** business acumen.

**Answer:**
"Problem statement, options, quantified costs and benefits, ROI and payback, risks, and a recommendation. For example: automation costing $120,000 that saves three FTEs worth $240,000 a year pays back in six months."

Tip: Quantify benefits.`,

"What's special about BA work on ERP projects?":
`**Why they ask:** enterprise experience.

**Answer:**
"Fit-gap against standard processes, configuration decisions, data migration mapping, integration requirements, reporting needs and strong change management — and constantly resisting unnecessary customization. The best ERP BAs help the business adopt standard processes rather than rebuilding the old system."

Tip: Standard first.`,

'How can AI help business analysts?':
`**Why they ask:** current tools.

**Answer:**
"Drafting user stories and acceptance criteria, summarizing interview transcripts, generating test scenarios, analyzing data, and creating first-draft diagrams. I validate everything for accuracy and context — AI doesn't know that 'active customer' means something different in finance than in sales."

Tip: Validate outputs.`,

'How do you support change management?':
`**Why they ask:** adoption.

**Answer:**
"Impact analysis by role — what changes for an AP clerk versus a buyer — input for communications, training materials, process documentation, and gathering feedback after go-live."

Tip: Role impact.`,

'Tell me about a requirement you got wrong.':
`**Why they ask:** self-awareness.

**Answer:**
"I documented a report requirement without confirming what 'active customer' meant. UAT revealed sales meant ordered in 12 months and finance meant has an open balance. Since then I keep a glossary and confirm every definition with real data examples."

Tip: Learning.`,

'Tell me about a process improvement you led.':
`**Why they ask:** proof.

**Answer:**
"Invoice approvals averaged 12 days. I mapped the process, found unnecessary approval steps and manual routing, and designed automated workflow rules. Cycle time dropped to 3 days."

Tip: Measured.`,

'Tell me about handling a difficult stakeholder.':
`**Why they ask:** relationship skills.

**Answer:**
"A finance director dismissed the project. I met him to understand his concerns about reporting accuracy, involved him in designing the reconciliation reports, and he became one of our strongest champions."

Tip: Turn critics into allies.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"IIBA's ECBA, CCBA and CBAP, PMI-PBA, agile product certifications like PSPO or CSPO, and domain certifications."

Tip: CBAP for senior.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior BA, product owner or product manager, or solution architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn messy business problems into clear, testable requirements, and I've delivered measurable improvements — like cutting invoice approval from 12 days to 3 — by bridging business and IT."

Tip: Proof.`,

'How do you gather non-functional requirements?':
`**Why they ask:** often-missed requirements.

**Answer:**
"Checklists covering performance, security, availability, scalability, usability, compliance and audit; specific scenario questions — 'how many people use this at month-end?' — and measurable targets agreed with stakeholders."

Tip: Checklists.`,

'Use cases vs user stories?':
`**Why they ask:** technique knowledge.

**Answer:**
"Use cases describe detailed interactions with main and alternate flows — good for complex systems and regulated environments. User stories are short and conversation-focused with acceptance criteria — suited to agile. Both are valid; I sometimes write a use case for a complex flow and split it into stories."

Tip: Both valid.`,

'Why use prototypes or wireframes?':
`**Why they ask:** validation methods.

**Answer:**
"They make requirements visible, uncover misunderstandings early and speed up agreement. Ten minutes with a clickable wireframe can replace an hour of debating a written requirement."

Tip: Seeing is believing.`,

'Why maintain a glossary?':
`**Why they ask:** precision.

**Answer:**
"Different teams use the same words differently — 'order date' might mean when it was placed or when it shipped. A glossary ensures shared understanding and prevents defects that come purely from definitions."

Tip: Definitions matter.`,

'How do you create a data mapping document?':
`**Why they ask:** integration and migration work.

**Answer:**
"Source field, target field, data types, transformation rules, default values, validation rules and examples — like legacy status 'A' maps to 'Active', and blank country defaults to 'US' — reviewed with both business and technical teams."

Tip: Examples.`,

'How do you run an effective requirements workshop?':
`**Why they ask:** facilitation skill.

**Answer:**
"Clear objectives and agenda, the right attendees, prework sent in advance, facilitation techniques to involve quieter people, a parking lot for off-topic items, decisions and actions recorded, and a follow-up summary within 24 hours."

Tip: Follow up fast.`,

"How do you measure a solution's success?":
`**Why they ask:** outcome focus.

**Answer:**
"KPIs defined up front in the business case — cycle time, error rate, cost, adoption — measured after go-live against the baseline captured before the project."

Tip: Baselines.`,

'A stakeholder keeps changing requirements. What do you do?':
`**Why they ask:** managing churn.

**Answer:**
"Understand why — often they're discovering what they need as they see it — document each change with its impact, use prototypes to validate earlier, and agree a change control approach with the sponsor."

Tip: Impact visibility.`,

'Developers say a requirement is technically impossible. What do you do?':
`**Why they ask:** problem-solving.

**Answer:**
"Understand the constraint, go back to the business goal behind the requirement, explore alternatives that still meet the need, and bring options to stakeholders. 'Real-time' often turns out to mean 'within 15 minutes', which is easy."

Tip: Goal over solution.`,

'How do you handle assumptions and constraints?':
`**Why they ask:** risk awareness.

**Answer:**
"Document them, validate assumptions early, track them as risks in case they prove false, and communicate constraints clearly to stakeholders."

Tip: Validate early.`,

'How do you learn a new business domain quickly?':
`**Why they ask:** adaptability.

**Answer:**
"Read the documentation, shadow users, ask subject matter experts lots of questions, map the core processes, and learn the data model and key metrics. Shadowing a user for a day teaches more than a week of reading."

Tip: Shadow users.`,

'How do you gather reporting requirements?':
`**Why they ask:** reporting skills.

**Answer:**
"Start with what decisions the report supports, then metrics and their definitions, filters, frequency, audience, data sources and security. A report nobody uses to make a decision is a report nobody needs."

Tip: Decisions first.`,

'How do you document integration requirements?':
`**Why they ask:** technical BA skills.

**Answer:**
"The systems involved, triggers, frequency, data elements and mappings, error handling, volumes, security and SLAs — often with a sequence diagram. Error handling is the part business stakeholders forget: what happens when the ERP rejects an order at 2 a.m.?"

Tip: Error handling.`,

'What soft skills matter most for BAs?':
`**Why they ask:** self-awareness.

**Answer:**
"Active listening, questioning, facilitation, clear writing, negotiation and critical thinking. Listening most of all — the real requirement is often in what people mention in passing."

Tip: Listening.`,

'When do you use SWOT or PESTLE analysis?':
`**Why they ask:** strategic analysis tools.

**Answer:**
"SWOT — strengths, weaknesses, opportunities, threats — assesses an organization's or initiative's position. PESTLE — political, economic, social, technological, legal, environmental — scans external factors. Both help frame strategy and business cases, mostly early on."

Tip: Mostly used early in a strategy or business case.`,

'Which Excel skills do you use most as a BA?':
`**Why they ask:** practical tools.

**Answer:**
"XLOOKUP, pivot tables, COUNTIFS and SUMIFS, conditional formatting, data validation, Power Query for cleaning and merging data from several sources, and charts to present findings."

Tip: Power Query stands out.`,

'What is a decision table?':
`**Why they ask:** rule analysis.

**Answer:**
"A grid of conditions and the resulting actions that captures complex business rules completely — like discounts by customer type and order size. It exposes missing or conflicting rules — 'what happens for a wholesale customer under $500?' — and each column becomes a test case."

Tip: Good for complex rules.`,

'How do you interview a stakeholder who gives vague answers?':
`**Why they ask:** elicitation skill.

**Answer:**
"Ask for specific examples — 'walk me through the last time that happened' — show prototypes or sample data, use follow-up questions like what, why, how often and what happens if, and play back my understanding to confirm."

Tip: Concrete examples.`,

'How do you validate requirements before development?':
`**Why they ask:** quality prevention.

**Answer:**
"Walkthroughs with stakeholders, prototype reviews, agreed acceptance criteria, traceability back to objectives, and a review with developers and testers for feasibility and testability — the three amigos."

Tip: Three amigos: business, dev and test.`,

"You're given a project with no documentation. Where do you start?":
`**Why they ask:** practical starting point.

**Answer:**
"Identify the stakeholders and the sponsor's goals, interview key users, observe the current process, look at the system and its data, draft a context diagram and a process map, and validate them quickly with the people who know."

Tip: Context diagram first.`,

};
