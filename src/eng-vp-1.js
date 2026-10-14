// VP of Engineering. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['eng-vp'] = (QB['eng-vp'] || []).concat([
['Role', 'What is the role of a VP of Engineering vs a CTO?',
`- **VP Engineering**: runs the engineering organization — people, delivery, process, operations, budget, hiring, culture. Focus on **how** engineering executes.
- **CTO**: technology vision, architecture, external technology representation, innovation — **what** technology the company needs (varies by company; sometimes the CTO runs everything).
- Strong partnership between them is critical; define responsibilities explicitly.`, 'B'],

['Strategy', 'How do you build an engineering strategy aligned with the business?',
`- **Business strategy** (growth, markets, margins) → **product strategy** → **engineering strategy**.
- Pillars: e.g. scale the platform, improve velocity, reliability, security, cost efficiency, talent.
- **Multi-year roadmap** with investment allocations.
- **Metrics** for each pillar.
- **Communicate** to the org and executives; review quarterly.`, 'B'],

['Strategy', 'What would you do in your first 90 days as VP of Engineering?',
`- **Listen**: executives, product, engineering managers, ICs (skip-levels), customers.
- **Assess**: org structure, delivery, quality, architecture, culture, hiring, costs.
- **Quick wins**: fix obvious blockers.
- **Plan**: present findings and a 12-month plan to CEO/CTO.
- **Build relationships** and trust.`, 'B'],

['Org', 'How do you design an engineering organization of 200+ people?',
`- **Product-aligned groups** (directors) with stream-aligned teams.
- **Platform organization** (infrastructure, developer experience, data).
- **Architecture/principal engineers** across groups.
- **Security, reliability (SRE)**, quality as enabling functions.
- **TPM** function for cross-org programs.
- **Clear ownership** and minimal dependencies.`, 'D'],

['Org', 'How do you scale an engineering organization through hypergrowth?',
`- **Hiring engine** with high bar and fast process.
- **Leadership layers** added deliberately (hire and promote).
- **Onboarding** at scale.
- **Platform investments** to keep velocity.
- **Process** evolves (planning, architecture reviews) without bureaucracy.
- **Culture** codified and reinforced.`, 'D'],

['People', 'How do you build and lead your leadership team?',
`- **Hire** strong directors with complementary skills.
- **Shared goals** and team-first mindset.
- **Operating rhythm**: weekly staff meetings, quarterly offsites.
- **Coaching** and honest feedback.
- **Delegate** ownership; hold accountable.
- **Succession** planning.`, 'B'],

['People', 'How do you handle a senior leader who isn\'t working out?',
`- **Clear expectations** and feedback early.
- **Support** and time-bound plan.
- **Assess** fit honestly.
- **Act decisively** if needed; senior misfits damage organizations.
- **Communicate** transitions respectfully.`, 'B'],

['People', 'How do you shape engineering culture as VP?',
`- **Define** values with the org (ownership, quality, customer focus, learning).
- **Model** behaviors.
- **Embed** in hiring, promotion, recognition.
- **Address** misaligned behaviors at all levels.
- **Measure** via surveys and act.`, 'B'],

['Delivery', 'How do you ensure engineering delivers on company commitments?',
`- **Clear priorities** at company level.
- **Planning** discipline with realistic capacity.
- **Visibility** (roadmaps, progress dashboards).
- **Early risk** escalation culture.
- **Accountability** through directors.
- **Continuous improvement** of delivery capabilities.`, 'B'],

['Delivery', 'The CEO says engineering is too slow. How do you respond?',
`- **Understand** the perception (which projects, expectations).
- **Data**: delivery metrics, where time goes (unplanned work, dependencies, tech debt, unclear requirements).
- **Diagnose** root causes with teams.
- **Plan** improvements (priorities, platform, process, staffing) with metrics.
- **Communicate** progress regularly.
- Partner with product on scope and prioritization.`, 'D'],

['Finance', 'How do you manage the engineering budget?',
`- **Components**: headcount (largest), cloud/infrastructure, tools/licenses, contractors.
- **Plan** with finance using scenarios.
- **Unit economics** for cloud costs.
- **ROI** for investments.
- **Monthly** tracking and reforecasting.
- **Efficiency** initiatives (FinOps, tool consolidation).`, 'D'],

['Finance', 'How do you think about engineering efficiency and headcount growth?',
`- **Output per engineer** isn't the goal — **business outcomes per dollar** are.
- **Remove friction** before adding people (developer experience, platform).
- **Location strategy** (hubs).
- **Right mix** of seniority.
- **Growth** tied to strategic priorities and revenue.`, 'D'],

['Reliability', 'How do you set the reliability bar for the company?',
`- **SLOs** for customer-facing services aligned with business needs.
- **Incident management** standards across teams.
- **Executive reporting** on availability and incidents.
- **Investment** in SRE and observability.
- **Error budget** policies agreed with product.`, 'B'],

['Security', 'How do you ensure engineering meets security and compliance requirements?',
`- **Partnership** with CISO.
- **Secure SDLC** and automation.
- **Compliance** programs (SOC 2, ISO 27001, PCI, HIPAA as needed) integrated into engineering processes.
- **Accountability** for vulnerability SLAs.
- **Training** and culture.`, 'B'],

['Stakeholders', 'How do you partner with the CPO (product)?',
`- **Joint planning** and strategy.
- **Shared OKRs**.
- **Unified** messaging to teams.
- **Regular** 1:1s and leadership syncs.
- **Healthy debate** on trade-offs (tech investments vs features).`, 'B'],

['Stakeholders', 'How do you represent engineering at the executive table?',
`- **Business language**: outcomes, risks, costs.
- **Proactive** insights (technology opportunities).
- **Transparent** about constraints.
- **Concise** updates.
- **Advocate** for engineering needs with data.`, 'B'],

['Stakeholders', 'How do you report engineering to the board?',
`- **Key metrics**: delivery against roadmap, reliability, security posture, team growth/attrition, costs.
- **Major initiatives** and risks.
- **Benchmarks** where helpful.
- **Clear asks** if any.`, 'D'],

['M&A', 'How do you integrate an acquired engineering team?',
`- **Retain** key people (communication, roles, incentives).
- **Understand** their systems and culture.
- **Integration plan**: tooling, processes, security, architecture.
- **Respect** what works in their culture.
- **Clear** leadership and reporting lines.
- **Measure** retention and integration milestones.`, 'D'],

['AI', 'What is your AI strategy for engineering and the product?',
`- **Developer productivity**: AI assistants, test generation, code review, incident analysis — with guardrails.
- **Product**: AI features where they create customer value; platform for models, evaluation, safety.
- **Talent**: upskill engineers; hire ML/AI specialists where needed.
- **Governance**: security, privacy, responsible AI.
- **Metrics** on value and cost.`, 'D'],

['Behavioral', 'Tell me about the hardest leadership challenge you\'ve faced.',
`- Real example (e.g. major outage affecting customers, layoffs, failed launch).
- How you led (communication, decisions, people care).
- Outcome and lessons.`, 'B'],

['Behavioral', 'Describe how you\'ve changed an engineering culture.',
`- e.g. from blame to blameless, or from siloed to collaborative.
- Actions: leadership modeling, process changes, recognition, hiring.
- Metrics showing change (engagement, incident learning).`, 'B'],

['Behavioral', 'How do you make high-stakes decisions?',
`- **Clarify** the decision and its reversibility.
- **Gather** input from experts and stakeholders.
- **Consider** options and risks.
- **Decide** in a timely manner; communicate rationale.
- **Review** outcomes.`, 'B'],

['Behavioral', 'Why do you want to be our VP of Engineering?',
`- **Mission** and product excitement.
- **Stage and challenges** match your experience (scaling, turnaround, platform).
- **Leadership** fit with the CEO/CTO.
- **What you'll deliver** in first year.`, 'B'],

['Strategy', 'How do you decide when to invest in a platform rewrite vs incremental improvement?',
`- **Pain**: velocity, reliability, scale limits, talent.
- **Incremental** is lower risk; **rewrite** only when architecture blocks strategy.
- **Business case** with milestones and value delivery during transition.
- **Exec alignment** on costs and timeline.`, 'D'],

['Org', 'How do you think about location strategy and distributed teams?',
`- **Talent availability** and cost.
- **Time zone** collaboration.
- **Hubs** vs fully remote — choose consciously.
- **Ownership** of whole areas by locations (avoid splitting teams across many zones).
- **Culture** and inclusion across locations.`, 'B']
]);
