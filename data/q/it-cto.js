// it-cto — generated from src/it-cto-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['it-cto'] = (QB['it-cto'] || []).concat([
['Architecture', 'How do you think about technical debt at the CTO level?',
`- **Debt is a tool** when taken consciously; problematic when invisible.
- **Inventory** and measure impact (velocity, incidents).
- **Strategic** paydown tied to business goals.
- **Capacity** allocation.
- **Prevent** with standards and platforms.`, 'B'],

['Architecture', 'How do you choose a cloud provider or decide on multi-cloud?',
`- **Services** fit (data, AI, managed services).
- **Cost** and commercial terms.
- **Customer** requirements (some require specific clouds).
- **Team** skills.
- **Multi-cloud** for customer reach or resilience only when worth the complexity.`, 'B'],

['Architecture', 'What is your approach to APIs and platform ecosystems?',
`- **API-first** design; public APIs as products.
- **Developer experience** (docs, SDKs, sandbox).
- **Versioning** and stability commitments.
- **Partner** ecosystem and marketplace.
- **Security** and rate limiting.`, 'D'],

['Architecture', 'How do you design for global scale and data residency?',
`- **Regional** deployments (cells) with data residency.
- **Global** control plane vs regional data planes.
- **Latency** optimization (CDN, edge).
- **Compliance** with local regulations.
- **Operational** consistency across regions.`, 'D'],

['Engineering', 'How do you organize teams around a platform and products?',
`- **Product teams** owning customer-facing domains.
- **Platform teams** providing shared capabilities as products.
- **Clear** interfaces and ownership.
- **Team Topologies** principles.`, 'B'],

['Engineering', 'How do you attract top engineering talent?',
`- **Hard, meaningful** problems.
- **Strong** engineering brand (open source, talks).
- **Great** leaders and peers.
- **Growth** and autonomy.
- **Competitive** compensation.`, 'B'],

['Engineering', 'How do you develop technical leaders (staff/principal engineers)?',
`- **Clear** expectations for IC leadership.
- **Opportunities** for cross-org impact.
- **Sponsorship** and visibility.
- **Architecture** forums led by them.
- **Recognition** equal to management track.`, 'B'],

['Security', 'How do you respond to a major security vulnerability in your product?',
`- **Assess** severity and exposure.
- **Patch** quickly with coordinated release.
- **Communicate** to customers responsibly.
- **Check** for exploitation.
- **Postmortem** and process improvements.`, 'D'],

['Security', 'How do you approach software supply chain security?',
`- **SBOMs** for all products.
- **Dependency** scanning and pinning.
- **Signed** builds and artifacts (SLSA framework).
- **Least privilege** CI/CD.
- **Vendor** assessments.`, 'D'],

['AI', 'How do you handle responsible AI in product development?',
`- **Principles** (fairness, transparency, privacy, safety, accountability).
- **Risk assessments** per feature.
- **Guardrails** and content filtering.
- **Human oversight** where needed.
- **Documentation** (model cards).
- **Compliance** with regulations (EU AI Act).`, 'D'],

['AI', 'Build or buy foundation models?',
`- **Buy/API** for most use cases — fastest, best capability.
- **Open models** for control, cost or privacy needs (self-hosted).
- **Fine-tune** when domain specificity matters.
- **Train from scratch** rarely — only with unique data and scale.
- Abstract the model layer to switch providers.`, 'D'],

['AI', 'How will AI change software engineering in your organization?',
`- **AI-assisted** coding, testing, documentation, operations.
- **Engineers** focus more on design, review and system thinking.
- **Faster** iteration; new quality risks.
- **Upskilling** and new roles.
- **Measure** and adapt processes.`, 'D'],

['Data', 'How do you ensure privacy in a data-driven product?',
`- **Privacy by design** (minimization, purpose limitation).
- **Consent** management.
- **Anonymization/pseudonymization**.
- **Access** controls and auditing.
- **Compliance** (GDPR, CCPA).`, 'B'],

['Stakeholders', 'How do you handle disagreements with the CEO on technical timelines?',
`- **Data** on estimates and risks.
- **Options** (scope trade-offs).
- **Transparent** about uncertainty.
- **Commit** to realistic plans.
- **Build trust** through delivery.`, 'B'],

['Stakeholders', 'How do you explain complex technical topics to non-technical executives?',
`- **Analogies** and simple visuals.
- **Focus** on impact (customers, revenue, risk).
- **Avoid** jargon.
- **Answer** "so what?"
- **Check** understanding.`, 'B'],

['Finance', 'How do you justify a large platform investment to the board?',
`- **Strategic** necessity (scale, new markets, competitive advantage).
- **Financials** (cost savings, revenue enablement).
- **Risks** of not investing.
- **Milestones** and metrics.
- **Benchmarks**.`, 'D'],

['Behavioral', 'Describe a time you had to make a difficult trade-off between speed and quality.',
`- Situation (e.g. competitive launch), options, decision (launch with feature flags and limited scope), mitigations, outcome.`, 'B'],

['Behavioral', 'How do you handle conflict between product and engineering?',
`- **Shared** goals and metrics.
- **Facilitate** discussion with data.
- **Joint** decision-making forums.
- **Address** root causes (unclear priorities, capacity).`, 'B'],

['Strategy', 'How do you build a technology roadmap that investors trust?',
`- **Clear** link to market strategy.
- **Realistic** milestones.
- **Track record** of delivery.
- **Risk** awareness.
- **Metrics** showing progress.`, 'B'],

['Engineering', 'How do you set reliability standards for a SaaS product?',
`- **SLAs** to customers backed by internal **SLOs**.
- **Error budgets**.
- **Incident** management and communication.
- **Investment** in SRE and observability.
- **Chaos** and DR testing.`, 'B'],

['Engineering', 'How do you approach open source strategy?',
`- **Consume** responsibly (license compliance, security).
- **Contribute** back where strategic.
- **Open-source** your own projects for brand/community when it aligns with business.
- **Governance** (OSPO).`, 'D'],

['Behavioral', 'What is your leadership philosophy as CTO?',
`- Concise, authentic: e.g. technical excellence, customer focus, empowerment, clarity, learning culture — with examples.`, 'B'],

['Strategy', 'How do you prepare the company technically for an IPO or acquisition?',
`- **Scalable** architecture and documentation.
- **Security** and compliance certifications.
- **IP** cleanliness (licenses, ownership).
- **Engineering** metrics and processes.
- **Key person** risk mitigation.`, 'D'],

['Behavioral', 'How do you build trust with engineers as a new CTO?',
`- **Listen** first; learn the systems.
- **Respect** past decisions' context.
- **Remove** obstacles quickly.
- **Be transparent** about direction.
- **Show** technical credibility.`, 'B'],

['Engineering', 'How do you decide on build systems, languages and frameworks across teams?',
`- **Paved roads**: recommended stacks with support.
- **Allow** exceptions with justification.
- **Consider** talent, ecosystem, performance, maintainability.
- **Avoid** fragmentation that hurts mobility and operations.`, 'B']
]);
