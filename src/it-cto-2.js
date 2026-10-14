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
