QB['ora-vp'] = (QB['ora-vp'] || []).concat([
['Strategy', 'How do you decide the pace of transformation an organization can absorb?',
`- **Change capacity** assessment: other initiatives, leadership bandwidth, past change success.
- **Business calendar** constraints (peak seasons, year-end).
- **Risk tolerance** of executives.
- **Phasing** to show early value while limiting disruption.
- **Readiness checks** before each wave.`, 'B'],

['Strategy', 'How do you approach platform consolidation versus best-of-breed at the enterprise level?',
`- **Principle**: consolidate on core platforms (ERP, HCM) for scale and data consistency; best-of-breed where it creates competitive advantage or fills significant gaps.
- **Evaluation**: TCO, integration, user experience, vendor roadmap, risk.
- **Governance**: architecture review for new tools.
- Regular portfolio review.`, 'B'],

['Executive', 'How would you handle a CEO demand to cut the ERP program budget by 30% mid-stream?',
`- **Understand** the driver (cash, priorities).
- **Options analysis**: de-scope (defer lower-value modules/countries), phase differently, renegotiate vendor terms, slow pace — with impact on benefits and risk.
- **Protect** critical-path and risk-reducing activities.
- **Present** options with clear trade-offs and recommendation.
- **Re-baseline** and communicate.`, 'D'],

['Executive', 'How do you handle disagreement with your boss (CIO or CFO) on a major decision?',
`- **Private, candid** discussion with data and alternatives.
- **Understand** their perspective and constraints.
- **Propose** a path (pilot, phased decision).
- **Commit** once decided; document risks if significant.
- Never undermine in public.`, 'B'],

['Executive', 'What metrics would you put on an executive dashboard for enterprise systems?',
`- **Business outcomes**: days to close, cost per transaction, DSO/DPO, inventory turns, order cycle time, payroll accuracy.
- **Transformation**: milestones, budget, benefits realized.
- **Operations**: availability of critical processes, P1 incidents, change failure rate.
- **Risk/compliance**: audit findings, SoD violations, security incidents.
- **People**: engagement, attrition, critical skills coverage.
- **Financials**: spend vs budget, run vs change ratio.`, 'D'],

['Transformation', 'How do you keep a multi-year program from losing momentum and sponsorship?',
`- **Deliver value early** and often (quick wins, phased releases).
- **Communicate success** stories with metrics.
- **Refresh** the case for change as leadership changes.
- **Engage sponsors** regularly with decisions, not just status.
- **Celebrate** teams; manage fatigue.
- **Adapt** the roadmap to business changes.`, 'B'],

['Transformation', 'How do you decide between big-bang and phased ERP deployment?',
`- **Big-bang**: fewer interim integrations, faster single cutover — higher risk; suits smaller, tightly integrated organizations.
- **Phased** (by module, region, or business): lower risk per wave, learning curve, but coexistence costs and longer timeline.
- Decide on: complexity, interdependencies, risk appetite, resource capacity, business calendar.
- Most large enterprises: **pilot + waves**.`, 'D'],

['Risk', 'How do you prepare the organization for an Oracle SaaS outage on a critical day?',
`- **Business continuity plans** per critical process (payments, payroll, shipping, close).
- **Manual workarounds** documented and rehearsed.
- **Communication protocols** with Oracle and internally.
- **Integration buffering** (queues) to avoid data loss.
- **Post-incident** service credit and review with Oracle.`, 'B'],

['Risk', 'How do you manage key-person risk in a specialized ERP organization?',
`- **Identify** critical knowledge holders.
- **Documentation**, pairing, rotation.
- **Succession** planning for key roles.
- **Retention** incentives for critical people.
- **Partner backup** for specialized areas.`, 'B'],

['People', 'How do you build a high-trust leadership culture?',
`- **Transparency** about strategy, challenges and decisions.
- **Consistency** between words and actions.
- **Empowerment** with accountability.
- **Admit mistakes** publicly.
- **Care** for people's growth and wellbeing.`, 'B'],

['People', 'How do you deal with a leadership team member who is not performing?',
`- **Clear expectations** and specific gaps.
- **Support**: coaching, resources, time-bound plan.
- **Decide** promptly if no improvement — the cost of a weak leader is high across the organization.
- **Respectful** transition.`, 'B'],

['AI', 'How do you build an AI-ready enterprise systems organization?',
`- **Skills**: AI agent design, prompt engineering, data engineering, model governance.
- **Roles**: AI product owners, AI platform team, responsible AI lead.
- **Processes**: use-case intake, risk review, testing, monitoring.
- **Partnerships**: vendors (Oracle, hyperscalers), academia.
- **Culture**: experimentation with guardrails.`, 'D'],

['AI', 'How would you measure the value of AI in back-office operations?',
`- **Productivity**: transactions per FTE, hours saved, capacity redeployed.
- **Cycle time**: invoice processing, close, order exceptions.
- **Quality**: error rates, exception rates.
- **Financial**: cost reduction, working capital improvements.
- **Experience**: employee and supplier/customer satisfaction.
- **Risk**: control effectiveness.
Baseline before deployment; attribute carefully.`, 'D'],

['Strategy', 'How do you make the enterprise systems landscape resilient to business model changes?',
`- **Modular architecture**: SaaS core + integration layer + data platform.
- **Standard processes** that can scale.
- **Configurable** structures (new entities, products, channels).
- **Data foundations** for new analytics needs.
- **Flexible contracts** with vendors.
- **Scenario planning** with business strategy.`, 'B'],

['Finance', 'How do you think about capitalizing vs expensing ERP costs?',
`- SaaS implementation costs: under ASC 350-40 (cloud computing arrangements), certain implementation costs can be **capitalized** and amortized over the term; training, data conversion (in many cases) and post-implementation costs are expensed.
- **Coordinate** with finance/accounting policy and auditors.
- **Track** costs by category from the start.
- Impacts budget presentation (opex vs capex) and business case.
(Not accounting advice — confirm with your accounting team.)`, 'D'],

['Vendors', 'How do you avoid vendor lock-in risks while committing to Oracle as the core?',
`- **Data portability**: regular extracts to the enterprise data platform.
- **Integration layer** with standard APIs, not point-to-point.
- **Contract terms**: price caps, exit assistance, data return.
- **Skills** in-house, not only with partners.
- Accept some lock-in as the price of a strong platform; manage it consciously.`, 'D'],

['Behavioral', 'What is your leadership philosophy?',
`- Share a concise philosophy with examples, e.g.:
- **Clarity** of direction and priorities.
- **Empower** teams; hold high standards.
- **Business outcomes** over activity.
- **Integrity and transparency**.
- **Develop people** as a core responsibility.`, 'B'],

['Behavioral', 'Tell me about a transformation where you changed how the business operated, not just the systems.',
`- **Example**: moving to a global business services model enabled by ERP standardization — process redesign, organization changes, new KPIs.
- Your role in **business change** (process owners, leadership alignment).
- **Outcomes**: cost, quality, speed.
- **Lessons** on people and change.`, 'B'],

['Behavioral', 'How do you handle failure on a high-profile program?',
`- **Own it** publicly.
- **Stabilize** the business impact first.
- **Understand** root causes without blame.
- **Fix** and communicate the plan.
- **Learn** institutionally.
- Show resilience and maintain team morale.`, 'B'],

['Behavioral', 'Why do you want to be our VP of ERP Systems?',
`- **Connect** your experience to their strategy and challenges (research them).
- **Results** at scale you've delivered.
- **Leadership** style fit with their culture.
- **Vision** for what you'd build with them.
- Genuine motivation (mission, industry, transformation stage).`, 'B'],

['Strategy', 'What would you do if you inherited a failing ERP implementation?',
`- **Rapid assessment** (2–4 weeks): independent review of scope, design quality, data, testing, vendor, team, sponsorship.
- **Stabilize**: stop non-critical work, fix governance.
- **Reset**: re-baseline scope/timeline/budget with executives; change leadership or partners if needed.
- **Quick wins** to rebuild confidence.
- **Transparent** reporting to the board/executives.`, 'D'],

['Strategy', 'How do you position enterprise systems to support sustainability (ESG) reporting?',
`- **Data capture** in ERP/SCM: energy, emissions factors on spend/activities, supplier ESG data.
- **Reporting platforms** for CSRD/SEC climate disclosures with auditability.
- **Controls** similar to financial reporting.
- **Partnership** with sustainability and finance leaders.
- Roadmap aligned to regulatory deadlines.`, 'D'],

['Executive', 'How do you represent enterprise systems in executive strategy discussions?',
`- Bring **business perspective**: how systems enable or constrain strategy.
- **Options** and implications for strategic choices (M&A, new markets, new business models).
- **Data insights**.
- **Concise** and solution-oriented.
- Build reputation as a business leader, not just a technologist.`, 'B'],

['Operating Model', 'How do you balance centralized control and business unit autonomy for systems?',
`- **Federated model**: central platforms, standards, architecture and governance; business units own process outcomes and local priorities within guardrails.
- **Clear decision rights** (RACI).
- **Funding model** reflecting shared vs specific needs.
- **Regular forums** for alignment.`, 'B'],

['People', 'How do you ensure your organization has the skills needed for the next five years?',
`- **Strategic workforce planning**: future capabilities vs current.
- **Build** (training, rotations), **buy** (hiring), **borrow** (partners), **bot** (automation).
- **Career paths** for emerging skills (AI, data, product management).
- **Measure** skills coverage and progress annually.`, 'B']
]);
