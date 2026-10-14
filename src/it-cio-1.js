// Chief Information Officer. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-cio'] = (QB['it-cio'] || []).concat([
['Role', 'How do you define the role of a modern CIO?',
`- **Business strategist** who uses technology to drive growth, efficiency and resilience.
- **Owner** of enterprise technology: applications, infrastructure, data, (often) security, digital workplace.
- **Executive team member** shaping company strategy.
- **Risk steward** (cyber, compliance, operational).
- **Talent and culture** leader for technology.
- **Value accountability** for technology spend.`, 'B'],

['Strategy', 'Walk us through how you would build a technology strategy for our company.',
`- **Understand** business strategy, customers, competitors, financials.
- **Assess** current technology, capabilities, risks, spend, talent.
- **Define** vision and principles.
- **Prioritize** strategic themes (e.g. digital customer experience, operational excellence/ERP modernization, data & AI, cyber resilience, talent).
- **Roadmap** with investments and value.
- **Operating model** and governance.
- **Communicate** to board, executives, employees.`, 'B'],

['Strategy', 'What would your first 100 days as CIO look like?',
`- **Listen**: CEO, executive team, board members, business leaders, customers, IT teams, key vendors.
- **Assess** quickly: risks (cyber, outages, compliance), major programs, budget, talent, culture.
- **Stabilize** urgent issues.
- **Quick wins** with visible business impact.
- **Build** relationships and credibility.
- **Present** a strategy and 12-month plan.`, 'B'],

['Strategy', 'How do you align IT investments with business value?',
`- **Value framework**: revenue growth, cost reduction, risk reduction, customer/employee experience.
- **Portfolio governance** with business leaders.
- **Business cases** and benefit owners.
- **Value tracking** and reporting.
- **Kill** underperforming investments.`, 'B'],

['Strategy', 'How do you approach digital transformation?',
`- **Start** from customer and business outcomes, not technology.
- **Modernize** core platforms (ERP, CRM, data).
- **Digitize** customer and employee experiences.
- **Automate** processes (AI, workflow).
- **Data-driven** decisions.
- **Culture** and operating model change.
- **Iterative** delivery with measurable value.`, 'B'],

['Board', 'How do you report to the board on technology and cyber risk?',
`- **Business context** and strategy progress.
- **Cyber posture**: threats, maturity (NIST CSF), incidents, investments, third-party risk.
- **Major programs** status and risks.
- **Key metrics** and benchmarks.
- **Clear, non-technical** language; decisions needed.
- Coordinate with CISO and audit committee.`, 'D'],

['Board', 'A board member asks: "Are we secure?" How do you answer?',
`- No organization is 100% secure; the right question is whether risk is managed to an acceptable level.
- Share **maturity** vs framework and peers, **top risks** and mitigation progress, **incident readiness** (response plans, exercises, insurance), **investment** priorities.
- Offer regular deep-dives and independent assessments.`, 'D'],

['Operating Model', 'How would you organize the IT function?',
`- **Business-aligned** product/portfolio teams (customer, operations, finance, people).
- **Platform** teams (cloud, data, integration, security, digital workplace).
- **Enterprise architecture** and governance.
- **Business relationship** leaders.
- **Strategic partners** for scale.
- **Product operating model** where suitable.`, 'D'],

['Operating Model', 'How do you move IT from a project model to a product model?',
`- **Define products** around business capabilities/customer journeys.
- **Product owners** with business partners.
- **Persistent teams** funded by capacity.
- **Outcome metrics**.
- **Finance** partnership to change funding processes.
- **Pilot** and scale.`, 'D'],

['Finance', 'How do you manage IT spend at enterprise level?',
`- **Transparency** of spend by category, business unit, run/change.
- **Benchmarks** (IT spend as % of revenue).
- **Optimization**: vendors, licenses, cloud (FinOps), application rationalization.
- **Investment** governance.
- **Value** reporting.`, 'B'],

['Finance', 'The CEO asks you to cut IT spend by 20%. What do you do?',
`- **Understand** context (margin pressure, priorities).
- **Analyze** spend and identify levers: vendor renegotiation, license reduction, app rationalization, cloud optimization, project deferrals, organizational efficiency, automation.
- **Protect** security and strategic investments.
- **Present** options with risks and impacts.
- **Execute** with clear tracking.`, 'D'],

['Risk', 'How do you approach enterprise technology risk management?',
`- **Risk framework** aligned to ERM.
- **Key risks**: cyber, outages, compliance, third-party, technical debt, talent.
- **Risk appetite** agreed with executives.
- **Mitigation** plans and KRIs.
- **Reporting** to executives and board.`, 'B'],

['Risk', 'How do you prepare the company for a major cyber incident?',
`- **Incident response plan** with executive roles (CEO, legal, communications).
- **Tabletop exercises** with leadership.
- **External partners** on retainer (IR, legal, PR).
- **Cyber insurance**.
- **Backups and recovery** capabilities.
- **Communication** templates (customers, regulators).`, 'D'],

['Data', 'How do you make the company data-driven?',
`- **Data strategy** with business ownership.
- **Modern data platform**.
- **Governance** (quality, privacy, definitions).
- **Analytics** and self-service.
- **Data literacy** programs.
- **Leadership** using data in decisions.`, 'B'],

['AI', 'What is your AI strategy as CIO?',
`- **Vision**: AI to augment employees, improve customer experience, and automate operations.
- **Governance**: responsible AI principles, risk tiers, security, privacy, regulatory compliance (EU AI Act etc.).
- **Platforms**: enterprise copilots, embedded AI in SaaS, AI platform for custom use cases.
- **Data foundations**.
- **Use case portfolio** with value tracking.
- **Workforce** upskilling and change.`, 'D'],

['AI', 'How do you manage risks of generative AI in the enterprise?',
`- **Policies** for acceptable use.
- **Enterprise tools** with data protection.
- **Risk assessment** of use cases.
- **Human oversight** for high-impact decisions.
- **Monitoring** for misuse and quality.
- **Legal** review (IP, privacy, regulation).`, 'D'],

['Talent', 'How do you build and retain technology talent?',
`- **Compelling mission** and modern technology.
- **Career growth** and learning.
- **Culture** of trust and innovation.
- **Competitive** rewards and flexibility.
- **Leadership** development.
- **Diversity** and inclusion.`, 'B'],

['Talent', 'How do you build your IT leadership team?',
`- **Assess** current leaders against future needs.
- **Hire** complementary strengths.
- **Develop** and coach.
- **Shared** goals and accountability.
- **Succession** planning.`, 'B'],

['Vendors', 'How do you manage strategic technology partners?',
`- **Partner tiers** and strategy.
- **Executive relationships**.
- **Joint roadmaps** and innovation.
- **Performance** management.
- **Commercial** leverage.
- **Risk** (concentration, lock-in).`, 'B'],

['Business Partnership', 'How do you build credibility with the CEO and executive team?',
`- **Deliver** on commitments.
- **Speak** business, not technology.
- **Bring** ideas that move business KPIs.
- **Be candid** about risks.
- **Support** peers' agendas.`, 'B'],

['M&A', 'What is the CIO\'s role in M&A?',
`- **Due diligence**: technology, cyber risk, integration costs.
- **Integration planning**: Day 1, synergies, TSAs.
- **Execution** of integration.
- **Divestitures**: separation planning.
- **Value** capture tracking.`, 'D'],

['Behavioral', 'Tell me about the most significant transformation you led as a technology executive.',
`- Context, vision, execution, challenges, results (business metrics), lessons.`, 'B'],

['Behavioral', 'Describe a time you disagreed with the CEO.',
`- Situation, how you raised it (privately, with data), outcome, and how you supported the final decision.`, 'B'],

['Behavioral', 'How do you lead through a crisis?',
`- **Calm** and visible leadership.
- **Clear** command structure.
- **Frequent** communication.
- **Focus** on people and customers.
- **Learn** afterwards.`, 'B'],

['Behavioral', 'Why do you want to be our CIO?',
`- **Connection** to their mission and strategy.
- **Relevant** experience and results.
- **Vision** for technology's role in their success.
- **Leadership** style fit.`, 'B']
]);
