// Chief Technology Officer. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-cto'] = (QB['it-cto'] || []).concat([
['Role', 'How do you define the CTO role?',
`- Depends on company type:
- **Product/tech company**: owns technology vision, architecture, engineering organization (sometimes with a VP Eng), R&D, technical brand.
- **Enterprise**: emerging technology, architecture, innovation, sometimes product engineering — partnered with CIO for internal IT.
- Common: **technology strategy**, **architecture**, **innovation**, **technical talent**, **external representation**.`, 'B'],

['Strategy', 'How do you build a technology vision for a product company?',
`- **Business and product strategy** as inputs (markets, customers, growth).
- **Technology bets** that create advantage (platforms, data, AI).
- **Architecture** direction (scalability, modularity, multi-tenancy).
- **Engineering** capabilities and culture.
- **Roadmap** of investments.
- **Communicate** compellingly to engineers, executives, investors.`, 'B'],

['Strategy', 'How do you balance innovation and stability?',
`- **Portfolio** approach (core, adjacent, transformational).
- **Strong platforms** enable safe innovation.
- **Experiments** with clear success criteria.
- **Reliability** standards (SLOs, error budgets) as guardrails.`, 'B'],

['Architecture', 'How do you make platform architecture decisions that last?',
`- **Principles** (modularity, APIs, data ownership, security by design).
- **Evolutionary** architecture — fitness functions, reversible decisions.
- **Avoid** premature complexity.
- **Architecture decision records**.
- **Review** with senior engineers.`, 'D'],

['Architecture', 'When would you re-architect a core product platform?',
`- **Signals**: scaling limits, velocity collapse, reliability issues, inability to support strategy.
- **Business case**.
- **Incremental** approach (strangler) with milestones.
- **Dedicated** team plus migration plan.
- **Communicate** trade-offs to the business.`, 'D'],

['Architecture', 'How do you approach multi-tenant SaaS architecture?',
`- **Tenancy model** (pooled vs siloed) by tier and compliance needs.
- **Tenant isolation** (data, compute, noisy neighbors).
- **Scalability** and cost per tenant.
- **Customization** via configuration/extensibility.
- **Data residency** options.
- **Observability** per tenant.`, 'D'],

['AI', 'What is your strategy for AI in the product?',
`- **Customer problems** where AI creates real value.
- **Build vs buy** (foundation models via APIs, open models, fine-tuning).
- **Data advantage** and feedback loops.
- **AI platform**: model gateway, evaluation, guardrails, observability, cost control.
- **Responsible AI**: safety, privacy, bias, transparency.
- **Talent** (ML engineers, AI product managers).`, 'D'],

['AI', 'How do you evaluate LLM-based features before launch?',
`- **Eval datasets** representing real use cases.
- **Metrics**: accuracy/quality, hallucination rate, latency, cost, safety.
- **Human review** and red teaming.
- **A/B tests** and staged rollouts.
- **Monitoring** in production with feedback.`, 'D'],

['AI', 'How do you manage AI costs at scale?',
`- **Model selection** by task (small models where possible).
- **Caching**, prompt optimization, batching.
- **Routing** between models.
- **Usage** limits and pricing alignment.
- **Monitor** unit economics.`, 'D'],

['Engineering', 'How do you build a world-class engineering culture?',
`- **Ownership** and autonomy.
- **High bar** for quality and craft.
- **Learning** and psychological safety.
- **Customer** obsession.
- **Leaders** who model behaviors.
- **Hiring** for values and talent.`, 'B'],

['Engineering', 'How do you measure engineering effectiveness?',
`- **DORA** metrics.
- **Developer experience** surveys.
- **Product outcomes**.
- **Reliability** (SLOs).
- **Avoid** individual productivity metrics.`, 'B'],

['Engineering', 'How do you scale engineering from 50 to 500?',
`- **Org design** with clear ownership.
- **Leadership layers** (hire and grow).
- **Platform** investments.
- **Hiring** engine and onboarding.
- **Processes** that scale (planning, architecture review).
- **Culture** preservation.`, 'D'],

['Security', 'How do you embed security in product development?',
`- **Secure SDLC** with automated tooling.
- **Threat modeling** for new features.
- **Security champions**.
- **Bug bounty** and pen testing.
- **Compliance** (SOC 2, ISO) as product requirements.
- **Incident** readiness.`, 'B'],

['Data', 'How do you build a data strategy for the product?',
`- **Data as product** — instrumentation, quality, ownership.
- **Analytics** for product decisions.
- **Data for AI** features.
- **Privacy** and consent management.
- **Platform** (lakehouse, streaming).`, 'D'],

['Stakeholders', 'How do you work with the CEO and the board as CTO?',
`- **Translate** technology into business impact.
- **Candid** about risks and timelines.
- **Strategic** input on product and market.
- **Technical due diligence** support for fundraising/M&A.
- **Regular** updates.`, 'B'],

['Stakeholders', 'How do you partner with the CPO?',
`- **Shared** vision and roadmap.
- **Joint** prioritization of tech investments and features.
- **Aligned** teams (product-engineering pods).
- **Healthy** debate; unified decisions.`, 'B'],

['Stakeholders', 'How do you represent technology to customers and the market?',
`- **Customer** advisory boards and executive briefings.
- **Thought leadership** (talks, blogs).
- **Technical** sales support for large deals.
- **Partner** ecosystem relationships.`, 'B'],

['M&A', 'How do you run technical due diligence for an acquisition?',
`- **Architecture** and scalability.
- **Code quality** and technical debt.
- **Security** posture and incidents.
- **IP** and open-source license compliance.
- **Team** quality and key people.
- **Integration** effort and costs.`, 'D'],

['Finance', 'How do you manage R&D spend and cloud costs?',
`- **Investment** allocation aligned to strategy.
- **Unit economics** (cost to serve per customer).
- **FinOps** discipline.
- **Capitalization** of software development with finance.
- **ROI** tracking.`, 'D'],

['Behavioral', 'Tell me about a major technology decision you got right.',
`- Context, options, reasoning, execution, outcome with metrics.`, 'B'],

['Behavioral', 'Tell me about a technology decision you got wrong.',
`- Honest example, how you recognized it, how you corrected, lessons.`, 'B'],

['Behavioral', 'How do you stay technical as a CTO?',
`- **Architecture** reviews and design discussions.
- **Prototyping** and hands-on exploration.
- **Reading** and conferences.
- **Conversations** with engineers.
- **Advisors** and peer networks.`, 'B'],

['Behavioral', 'Why do you want to be our CTO?',
`- **Mission** and product excitement.
- **Technical** challenges that match your strengths.
- **Stage** of company and your experience.
- **Vision** for their technology.`, 'B'],

['Strategy', 'How do you decide which emerging technologies to invest in?',
`- **Customer and business** relevance.
- **Maturity** and ecosystem.
- **Competitive** dynamics.
- **Small bets** to learn, scale winners.
- **Avoid** hype cycles without clear value.`, 'B'],

['Engineering', 'How do you handle a large outage that damages customer trust?',
`- **Immediate** response and transparent communication (status page, customer updates).
- **Executive** ownership.
- **Root cause** and public postmortem where appropriate.
- **Reliability** investments.
- **Customer** remediation (credits, follow-up).`, 'D']
]);
