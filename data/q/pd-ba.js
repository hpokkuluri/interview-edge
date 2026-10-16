// pd-ba — generated from src/pd-ba-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Business Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['pd-ba'] = [
["Role", "What does a business analyst do?",
`**Why they ask:** baseline.

**Answer:** Bridges business and technology: understands business problems, elicits and documents requirements, analyzes processes and data, defines solutions with stakeholders, supports design and testing, and ensures delivered solutions meet business needs.

Tip: Mention domain (ERP, finance, healthcare).`, 'B', 'E'],

["Elicitation", "What elicitation techniques do you use?",
`**Answer:** Interviews, workshops (JAD), observation/job shadowing, surveys, document analysis, process mapping, prototyping, focus groups, and analysis of existing systems and data — chosen by stakeholder availability and complexity.

Tip: Match technique to situation.`, 'B', 'E'],

["Requirements", "What types of requirements are there?",
`**Answer:** Business requirements (goals), stakeholder/user requirements (needs), functional requirements (system behavior), non-functional requirements (performance, security, usability, availability), and transition requirements (data migration, training).

Tip: BABOK classification.`, 'B', 'E'],

["Requirements", "What makes a good requirement?",
`**Answer:** Clear, concise, testable, feasible, necessary, unambiguous, traceable and prioritized. Avoid vague words like "fast" or "user-friendly" without measures.

**Example:** "Search results return within 2 seconds for 95% of queries" instead of "search must be fast".

Tip: Measurable.`, 'B', 'E'],

["User Stories", "How do you write a good user story?",
`**Answer:** "As a [role], I want [capability], so that [benefit]" with acceptance criteria (often Given/When/Then), meeting INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.

**Example:** "As an AP clerk, I want to see duplicate invoice warnings so that we avoid paying twice." AC: Given an invoice with the same supplier, number and amount exists, when I save, then a warning appears.

Tip: Acceptance criteria are essential.`, 'B', 'E'],

["Process", "How do you map a business process?",
`**Answer:** Define scope and boundaries, identify roles, document the as-is process with swimlanes (BPMN), find pain points (delays, rework, handoffs), measure where possible, design the to-be process, and validate with stakeholders.

Tip: BPMN swimlanes.`, 'B', 'M'],

["Analysis", "How do you perform gap analysis?",
`**Answer:** Compare current state with desired state (or with a package's capabilities), identify gaps, assess impact, and recommend options: process change, configuration, customization or workaround.

Tip: Process change before customization.`, 'B', 'M'],

["Prioritization", "How do you prioritize requirements?",
`**Answer:** MoSCoW (Must, Should, Could, Won't), value vs effort matrices, WSJF, Kano model, or business value scoring — with stakeholder agreement.

Tip: MoSCoW is common.`, 'B', 'E'],

["Stakeholders", "How do you manage stakeholders?",
`**Answer:** Identify them, analyze influence and interest (power/interest grid), plan engagement and communication, involve them in decisions, and manage expectations transparently.

Tip: Power/interest grid.`, 'B', 'E'],

["Conflict", "How do you handle conflicting requirements?",
`**Answer:** Understand each party's underlying goals, find common ground, analyze impact, present options with trade-offs, and escalate to the decision owner if needed.

Tip: Goals behind positions.`, 'B', 'M'],

["Scope", "How do you handle scope creep?",
`**Answer:** Baseline scope, change control process, assess impact (time, cost, risk) of each change, and get sponsor decisions; in Agile, trade items in the backlog.

Tip: Trade-offs.`, 'B', 'M'],

["Traceability", "What is a requirements traceability matrix?",
`**Answer:** A table linking requirements to business objectives, design, test cases and defects, ensuring every requirement is built and tested, and assessing change impact.

Tip: Testing coverage.`, 'B', 'E'],

["Data", "What data analysis skills do BAs need?",
`**Answer:** SQL for querying, Excel (pivot tables, lookups), data profiling, data mapping for integrations and migrations, and visualization (Power BI, Tableau).

Tip: SQL is valuable.`, 'B', 'M'],

["SQL", "Write a query to find customers with no orders in the last 90 days.",
`**Answer:** SELECT c.customer_id, c.name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND o.order_date >= CURRENT_DATE - 90);

Tip: NOT EXISTS pattern.`, 'B', 'M'],

["Modeling", "Which diagrams do you use?",
`**Answer:** Process flows (BPMN), use case diagrams, context diagrams, data flow diagrams, ERDs, sequence diagrams for integrations, state diagrams, and wireframes.

Tip: Choose for the audience.`, 'B', 'E'],

["Agile", "How does a BA work in Agile?",
`**Answer:** Collaborates with the product owner to refine the backlog, writes stories and acceptance criteria, clarifies questions during sprints, supports testing and demos, and maintains just-enough documentation.

Tip: Just-enough documentation.`, 'B', 'E'],

["Testing", "What is the BA's role in testing?",
`**Answer:** Define acceptance criteria, review test cases, support UAT planning and execution, triage defects with business impact, and sign off.

Tip: UAT ownership.`, 'B', 'E'],

["UAT", "How do you run UAT?",
`**Answer:** Define scope and scenarios from business processes, prepare data and environments, train testers, track execution and defects, hold daily triage, and obtain sign-off against exit criteria.

Tip: Real business scenarios.`, 'B', 'M'],

["Documentation", "What documents do BAs produce?",
`**Answer:** Business requirements documents (BRD), functional specifications (FRD), user stories, process maps, data mappings, use cases, and UAT plans.

Tip: Tailored to methodology.`, 'B', 'E'],

["Root Cause", "How do you find root causes?",
`**Answer:** 5 Whys, fishbone (Ishikawa) diagrams, Pareto analysis on data, and process observation.

Tip: Data supports conclusions.`, 'B', 'M'],

["Business Case", "How do you build a business case?",
`**Answer:** Problem statement, options, costs and benefits (quantified), ROI/payback, risks, and recommendation.

**Example:** automation costing $120K saving 3 FTE ($240K/year) pays back in 6 months.

Tip: Quantify benefits.`, 'B', 'M'],

["ERP", "What's special about BA work on ERP projects?",
`**Answer:** Fit-gap against standard processes, configuration decisions, data migration mapping, integration requirements, reporting needs, and strong change management — resisting unnecessary customization.

Tip: Standard first.`, 'D', 'M'],

["AI", "How can AI help business analysts?",
`**Answer:** Drafting user stories and acceptance criteria, summarizing interviews, generating test scenarios, analyzing data, and creating diagrams — with the BA validating accuracy and context.

Tip: Validate outputs.`, 'B', 'M'],

["Change", "How do you support change management?",
`**Answer:** Impact analysis by role, communication input, training materials, process documentation, and gathering feedback after go-live.

Tip: Role impact.`, 'B', 'E'],

["Behavioral", "Tell me about a requirement you got wrong.",
`**Sample answer:** "I documented a report requirement without confirming the definition of 'active customer'. UAT revealed mismatch. Since then, I create a glossary and confirm definitions with data examples."

Tip: Learning.`, 'B', 'M'],

["Behavioral", "Tell me about a process improvement you led.",
`**Sample answer:** "Invoice approvals averaged 12 days. I mapped the process, found unnecessary approval steps and manual routing, and designed automated workflow rules. Cycle time dropped to 3 days."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about handling a difficult stakeholder.",
`**Sample answer:** "A finance director dismissed the project. I met to understand his concerns about reporting accuracy, involved him in designing reconciliation reports, and he became a champion."

Tip: Turn critics into allies.`, 'B', 'M'],

["Certifications", "Which certifications are useful?",
`**Answer:** IIBA ECBA/CCBA/CBAP, PMI-PBA, Agile certifications (PSPO, CSPO), and domain certifications.

Tip: CBAP for senior.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior BA, product owner/manager, or solution architect.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn messy business problems into clear, testable requirements, and I've delivered measurable process improvements by bridging business and IT."

Tip: Proof.`, 'B', 'E'],

["Non-functional", "How do you gather non-functional requirements?",
`**Answer:** Use checklists (performance, security, availability, scalability, usability, compliance, audit), ask stakeholders with specific scenarios, and set measurable targets.

Tip: Checklists.`, 'B', 'M'],

["Use Cases", "Use cases vs user stories?",
`**Answer:** **Use cases** describe detailed interactions with main and alternate flows — good for complex systems. **User stories** are short, conversation-focused and paired with acceptance criteria — suited to Agile.

Tip: Both valid.`, 'B', 'E'],

["Wireframes", "Why use prototypes or wireframes?",
`**Answer:** They make requirements visible, uncover misunderstandings early and speed agreement.

Tip: Seeing is believing.`, 'B', 'E'],

["Glossary", "Why maintain a glossary?",
`**Answer:** Different teams use terms differently; a glossary ensures shared understanding and avoids defects.

Tip: Definitions matter.`, 'B', 'E'],

["Data Mapping", "How do you create a data mapping document?",
`**Answer:** Source field, target field, data types, transformation rules, default values, validation rules and examples — reviewed with business and technical teams.

Tip: Examples.`, 'B', 'M'],

["Workshops", "How do you run an effective requirements workshop?",
`**Answer:** Clear objectives and agenda, the right attendees, prework, facilitation techniques, parking lot, decisions and actions recorded, and follow-up within 24 hours.

Tip: Follow up fast.`, 'B', 'E'],

["Metrics", "How do you measure a solution's success?",
`**Answer:** KPIs defined upfront in the business case (cycle time, error rate, cost, adoption), measured after go-live and compared to baselines.

Tip: Baselines.`, 'B', 'M'],

["Scenario", "A stakeholder keeps changing requirements. What do you do?",
`**Answer:** Understand why, document changes with impact, use prototypes to validate early, and agree on change control with the sponsor.

Tip: Impact visibility.`, 'B', 'E'],

["Scenario", "Developers say a requirement is technically impossible. What do you do?",
`**Answer:** Understand constraints, revisit the business goal, explore alternatives that meet the need, and bring options to stakeholders.

Tip: Goal over solution.`, 'B', 'M'],

["Assumptions", "How do you handle assumptions and constraints?",
`**Answer:** Document them, validate assumptions early, track risks if they prove false, and communicate constraints to stakeholders.

Tip: Validate early.`, 'B', 'E'],

["Domain", "How do you learn a new business domain quickly?",
`**Answer:** Read documentation, shadow users, ask SMEs, map processes, learn the data model and key metrics.

Tip: Shadow users.`, 'B', 'E'],

["Reporting", "How do you gather reporting requirements?",
`**Answer:** Ask what decisions the report supports, metrics and definitions, filters, frequency, audience, data sources and security.

Tip: Decisions first.`, 'B', 'M'],

["Integration", "How do you document integration requirements?",
`**Answer:** Systems involved, triggers, frequency, data elements and mapping, error handling, volumes, security and SLAs — often with sequence diagrams.

Tip: Error handling.`, 'D', 'M'],

["Soft Skills", "What soft skills matter most for BAs?",
`**Answer:** Active listening, questioning, facilitation, writing, negotiation and critical thinking.

Tip: Listening.`, 'B', 'E']
];

QB['pd-ba'] = (QB['pd-ba']||[]).concat([
["SWOT", "When do you use SWOT or PESTLE analysis?",
`**Answer:** **SWOT** (strengths, weaknesses, opportunities, threats) assesses an organization's or initiative's position. **PESTLE** (political, economic, social, technological, legal, environmental) scans external factors. Both help frame strategy and business cases.

Tip: Mostly used early in a strategy or business case.`, 'B', 'E'],
["Excel", "Which Excel skills do you use most as a BA?",
`**Answer:** XLOOKUP/VLOOKUP, pivot tables, COUNTIFS/SUMIFS, conditional formatting, data validation, Power Query for cleansing and merging data, and charts for findings.

Tip: Power Query stands out.`, 'B', 'E'],
["Decision Tables", "What is a decision table?",
`**Answer:** A grid of conditions and resulting actions that captures complex business rules completely. For example, discount rules by customer type and order size. It exposes missing or conflicting rules and drives test cases.

Tip: Good for complex rules.`, 'B', 'M'],
["Elicitation", "How do you interview a stakeholder who gives vague answers?",
`**Answer:** Ask for specific examples ("walk me through the last time…"), show prototypes or sample data, use follow-up questions (what, why, how often, what happens if), and confirm understanding by playing it back.

Tip: Concrete examples.`, 'B', 'E'],
["Validation", "How do you validate requirements before development?",
`**Answer:** Walkthroughs with stakeholders, prototype reviews, acceptance criteria agreement, traceability checks to objectives, and review with developers and testers for feasibility and testability.

Tip: Three amigos: business, dev and test.`, 'B', 'M'],
["Scenario", "You're given a project with no documentation. Where do you start?",
`**Answer:** Identify stakeholders and the sponsor's goals, interview key users, observe the current process, examine the system and data, draft a context diagram and process map, and validate them quickly.

Tip: Context diagram first.`, 'B', 'M']
]);
