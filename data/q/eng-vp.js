// eng-vp — generated from src/eng-vp-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['eng-vp'] = (QB['eng-vp'] || []).concat([
['People', 'How do you build a strong engineering employer brand?',
`- **Interesting problems** and impact communicated publicly (blog, talks, open source).
- **Great candidate experience**.
- **Strong culture** reflected in reviews.
- **Engineers as ambassadors**.
- **Competitive** compensation and growth.`, 'B'],

['People', 'How do you retain senior engineering talent?',
`- **Challenging work** and autonomy.
- **Career growth** (staff/principal paths).
- **Recognition** and visibility.
- **Compensation** reviews and equity refreshes.
- **Strong managers**.
- **Stay interviews** and acting on feedback.`, 'B'],

['People', 'How do you handle attrition spikes?',
`- **Analyze** exit interviews and surveys for causes (managers, compensation, workload, culture, strategy).
- **Act** on root causes quickly.
- **Retention** plans for critical people.
- **Communicate** transparently.
- Track monthly.`, 'B'],

['Delivery', 'How do you set up planning processes for a large engineering organization?',
`- **Annual** strategy and investment themes.
- **Quarterly** planning with OKRs.
- **Lightweight** cross-team dependency management.
- **Roadmap** visibility for stakeholders.
- **Flexibility** for change with clear trade-off process.`, 'B'],

['Delivery', 'What engineering metrics do you report to the executive team?',
`- **Delivery**: roadmap progress, cycle time, deployment frequency.
- **Quality/reliability**: availability, incidents, change failure rate.
- **Efficiency**: cloud cost per unit, engineering spend as % of revenue.
- **People**: headcount, attrition, hiring, engagement.
- **Security**: vulnerability SLAs.
Keep a small, stable set.`, 'D'],

['Technical', 'How do you ensure architectural coherence across many teams?',
`- **Architecture council** of principals.
- **Technical strategy** and principles.
- **Reference architectures** and golden paths.
- **RFC/review** process for major changes.
- **Tech radar**.
- Balance team autonomy with standards.`, 'B'],

['Technical', 'How do you lead a cloud migration at scale?',
`- **Business case** (agility, cost, resilience).
- **Assessment** and migration strategies (rehost, replatform, refactor).
- **Landing zone** and platform team.
- **Waves** with teams; migration factory.
- **FinOps** from the start.
- **Decommission** on-prem and track savings.`, 'D'],

['Reliability', 'How do you lead during a major customer-impacting outage?',
`- **Incident command** structure; you support, don't micromanage.
- **Customer communication** with support/marketing.
- **Executive updates**.
- **After**: blameless postmortem, systemic fixes, customer follow-up.
- **Protect** the team from blame.`, 'B'],

['Stakeholders', 'How do you handle a conflict with the CTO on technical direction?',
`- **Private** discussion with data and options.
- **Understand** their vision.
- **Agree** on decision rights.
- **Commit** publicly to decisions.
- Escalate to CEO only for fundamental disagreements affecting the business.`, 'B'],

['Stakeholders', 'How do you handle sales commitments made without engineering input?',
`- **Assess** feasibility and impact.
- **Discuss** with sales/product leadership.
- **Options**: partial delivery, timeline, alternatives.
- **Process fix**: engineering/product input before commitments; deal desk for custom requests.`, 'B'],

['Finance', 'How do you reduce engineering costs without hurting delivery?',
`- **Cloud optimization** (FinOps).
- **Tool consolidation**.
- **Location** mix.
- **Contractor** reduction where internal capability exists.
- **Productivity** improvements (platform, automation).
- **Stop** low-value projects.`, 'D'],

['Strategy', 'How do you balance innovation with operational excellence?',
`- **Portfolio** allocation (e.g. 70% core, 20% adjacent, 10% exploratory).
- **Strong operations** foundation enables innovation.
- **Innovation** processes (experiments, hack weeks, incubation teams).
- **Measure** both.`, 'B'],

['Strategy', 'How do you handle build vs buy at the company level?',
`- **Core competencies** → build.
- **Commodity** capabilities → buy/SaaS.
- **TCO**, time to market, vendor risk.
- **Integration** strategy.
- Governance for major decisions.`, 'B'],

['Culture', 'How do you create accountability without fear?',
`- **Clear ownership** and expectations.
- **Blameless** learning from failures.
- **High standards** with support.
- **Leaders own** failures publicly.
- **Recognize** both outcomes and good decisions.`, 'B'],

['Culture', 'How do you keep startup agility as the company grows?',
`- **Small autonomous teams**.
- **Minimal process** — add only when it solves a problem.
- **Fast decision-making** with clear decision rights.
- **Platform** to reduce friction.
- **Customer** closeness for engineers.`, 'B'],

['AI', 'How do you prepare the engineering organization for AI-driven change?',
`- **Upskilling** at scale.
- **Platforms** for AI development (model gateways, evaluation, guardrails).
- **Policies** for AI usage.
- **Role evolution** (more design, review, orchestration).
- **Experiments** and sharing.`, 'D'],

['Behavioral', 'Tell me about a time you had to rebuild trust with the business.',
`- Situation: repeated missed launches.
- Actions: transparent assessment, realistic re-planning, regular updates, delivered smaller milestones, improved predictability metrics.
- Result: restored confidence; process changes.`, 'B'],

['Behavioral', 'How do you develop yourself as an executive?',
`- **Coach/mentor**.
- **Peer networks** of other VPs/CTOs.
- **Feedback** (360s).
- **Reading** and learning.
- **Reflection** on decisions.`, 'B'],

['Behavioral', 'What is your leadership philosophy?',
`- Concise, authentic, with examples. E.g.:
- **Clarity**: everyone knows priorities and why.
- **Empowerment**: trust teams with ownership.
- **Standards**: high bar with support.
- **People first**: growth and wellbeing drive results.`, 'B'],

['Org', 'When do you introduce new leadership layers?',
`- When **span of control** exceeds what managers can support (e.g. >8 direct reports).
- When **complexity** requires dedicated leadership.
- Introduce gradually; promote internally when ready; communicate rationale.`, 'B'],

['Hiring', 'What do you look for when hiring engineering directors?',
`- **Track record** of leading managers and delivering outcomes.
- **People leadership** (developing managers, culture).
- **Technical judgment**.
- **Cross-functional** partnership.
- **Strategic** thinking.
- **Values** alignment.`, 'B'],

['Strategy', 'How do you approach technology risk (vendor lock-in, legacy, security)?',
`- **Risk register** with likelihood/impact.
- **Mitigations** (multi-vendor where it matters, modernization roadmap, security investments).
- **Regular** review with executives.
- **Incident** preparedness.`, 'B'],

['Delivery', 'How do you ensure engineering supports a major product launch?',
`- **Cross-functional** launch plan.
- **Readiness** reviews (scalability, reliability, security, support).
- **Feature flags** and gradual rollout.
- **War room** and monitoring.
- **Post-launch** review.`, 'B'],

['Behavioral', 'Describe a time you scaled yourself through delegation.',
`- Identified areas to delegate (e.g. hiring process, operational reviews).
- Developed leaders to own them.
- Focused own time on strategy and executive partnership.
- Result: org scaled; leaders grew.`, 'B'],

['Behavioral', 'What would your team say is your biggest weakness?',
`- Honest and real, with mitigation. e.g. "I can move too fast on decisions; I now explicitly ask for dissent and give time for input on big calls."`, 'B']
]);
