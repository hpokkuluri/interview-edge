// Rewritten IT Leadership — CTO leftovers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix it-cto-).
module.exports = {

'How do you decide build vs buy?':
`**Why they ask:** engineering focus.

**Answer:**
"Build what differentiates the product; buy or use open source for commodity capabilities — authentication, payments, observability. Then check total cost of ownership, integration effort and lock-in. Every engineer working on a commodity login system is an engineer not working on what customers pay us for."

Tip: Focus engineering on differentiation.`,

'How do you lead security engineering?':
`**Why they ask:** security is the CTO's responsibility.

**Answer:**
"A secure development lifecycle — threat modeling, code scanning, dependency management. Identity and secrets management, least privilege, infrastructure as code with policy checks, incident response, and a security champions program inside each team. The goal is making the secure way the easy way."

Tip: Make secure the easy path.`,

'How do you hire great engineers?':
`**Why they ask:** talent is the constraint.

**Answer:**
"Clear role definitions and leveling, structured interviews that test real-world skills rather than puzzles, a strong employer brand, a fast process, diverse sourcing, and a consistently high bar. Great candidates have several offers — a three-week process loses them."

Tip: Speed and candidate experience matter.`,

'What engineering culture do you build?':
`**Why they ask:** culture fit.

**Answer:**
"Ownership, high standards, blameless learning, close collaboration with product and design, continuous improvement and psychological safety. You can see the real culture in how an incident review goes — whether people talk about systems or about who to blame."

Tip: Culture shows in how incidents are handled.`,

'How do you design engineering career paths?':
`**Why they ask:** retention of senior talent.

**Answer:**
"Dual tracks — an individual contributor path through senior, staff and principal, and a management path — with clear expectations for scope, impact and leadership at each level. A strong IC track keeps great engineers from becoming unhappy managers."

Tip: A strong IC track retains top engineers.`,

'How do you work with the product leader?':
`**Why they ask:** a critical partnership.

**Answer:**
"Shared goals and a shared roadmap, joint prioritization that balances features, quality and platform investment, engineers involved early in discovery, and open trade-off discussions. It's a partnership, not order-taking."

Tip: Partnership, not order-taking.`,

'How do you manage cloud costs?':
`**Why they ask:** cloud spend grows fast.

**Answer:**
"FinOps practices: cost visibility by team, tagging, right-sizing, reserved and committed-use discounts, autoscaling, architectural optimization, and treating cost as an engineering metric. When each team sees its own bill, costs drop on their own."

Tip: Make teams see their costs.`,

'How do you handle a major outage?':
`**Why they ask:** incident leadership.

**Answer:**
"An incident commander process with clear roles, customer communication, fast mitigation — rollback or failover — and regular executive updates. Afterward, a blameless postmortem with tracked action items. Restore first, analyze after."

Tip: Restore first, analyze after.`,

'Tell me about scaling a team and platform.':
`**Why they ask:** proof of scale.

**Answer:**
"I grew engineering from 25 to 120 people while traffic grew eight times. We reorganized into domain teams, built a platform team for CI/CD and observability, and introduced SLOs. Deployment frequency went from weekly to several times a day, and availability improved to 99.97%."

Tip: Team and system results together.`,

'Tell me about a technical decision you regret.':
`**Why they ask:** honest learning.

**Answer:**
"We moved to microservices too early with a small team, and it slowed us down — too much operational overhead for 15 engineers. We consolidated some services back into a modular monolith. I learned to match architecture to team size and actual scaling needs, not to what big companies do."

Tip: Show honest learning.`,

'Tell me about pushing back on the CEO.':
`**Why they ask:** courage with options.

**Answer:**
"The CEO wanted a major feature in four weeks. I showed the reliability risk and proposed a smaller first version in four weeks with full rollout in ten. We launched the MVP on time, customers got value, and we avoided an outage."

Tip: Options, not refusals.`,

'Why do you want to be our CTO?':
`**Why they ask:** genuine fit.

**Answer:**
"Your product is at the stage where the architecture that got you here won't get you to the next ten times of scale, and the team needs to grow from one layer to several. I've led exactly that transition, and your mission and market are where I want to spend the next several years."

Tip: Research their product, stage and architecture.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I've scaled platforms and engineering teams through rapid growth while improving both reliability and speed, and I partner closely with product and business leaders."

Tip: Proof.`,

'What does a CTO look at in technical due diligence?':
`**Why they ask:** M&A and investor context.

**Answer:**
"Architecture and scalability, code quality and technical debt, security posture, infrastructure and costs, team capability and key-person risk, and IP and open-source license compliance. Key-person risk is the one most often overlooked — one engineer who understands the billing system is a deal risk."

Tip: Key-person risk is often overlooked.`,

'What makes a good internal developer platform?':
`**Why they ask:** velocity at scale.

**Answer:**
"Self-service environments, golden paths for common services, CI/CD, observability, security built in, good documentation, and treating developers as customers. If spinning up a new service takes a day instead of two weeks, velocity follows."

Tip: Developer experience drives velocity.`,

'How do you build data architecture for a product company?':
`**Why they ask:** data foundations.

**Answer:**
"Operational databases owned by each service domain, event streaming for integration between them, a lakehouse data platform for analytics and ML, and governance and privacy controls across it. Events decouple systems so teams can move independently."

Tip: Events decouple systems.`,

'How do you ensure software quality at speed?':
`**Why they ask:** speed versus quality.

**Answer:**
"An automated testing pyramid, code reviews, CI with quality gates, feature flags for safe releases, canary deployments and monitoring. Feature flags especially — you can ship code dark and turn it on gradually."

Tip: Feature flags reduce release risk.`,

'Which engineering metrics do you track?':
`**Why they ask:** measuring engineering well.

**Answer:**
"The DORA metrics — deployment frequency, lead time, change failure rate, time to restore — plus SLO attainment, incident trends, developer satisfaction, cost per transaction, and delivery against the roadmap. I avoid individual productivity metrics like lines of code; they reward the wrong behavior."

Tip: Avoid individual productivity metrics.`,

'How do you lead distributed engineering teams?':
`**Why they ask:** remote reality.

**Answer:**
"A written culture — design docs and architecture decision records — clear ownership, overlapping hours for collaboration, async communication, and periodic in-person gatherings. If a decision isn't written down, distributed teams can't find it."

Tip: Write decisions down.`,

'How do you manage open-source risk?':
`**Why they ask:** supply chain security.

**Answer:**
"Dependency scanning, license compliance policies, SBOMs — software bills of materials — regular update practices, and contribution guidelines. When a vulnerability like Log4Shell hits, an SBOM tells you in minutes where you're exposed."

Tip: Mention SBOMs.`,

'How do you balance innovation with stability?':
`**Why they ask:** a core tension.

**Answer:**
"Protect time for innovation, run experiments behind feature flags, and keep stability governed by SLOs. Error budgets decide: if we're inside budget, ship faster; if we've burned it, focus on reliability."

Tip: Use error budgets.`,

'How do you communicate technology to the board?':
`**Why they ask:** executive communication.

**Answer:**
"Business-relevant metrics — reliability, security, delivery speed and costs — the key risks, and the investments needed. No jargon."

Tip: Business language.`,

'How do you choose technology vendors?':
`**Why they ask:** vendor judgment.

**Answer:**
"Fit with our architecture, total cost, scalability, security, vendor viability and exit options — validated with a proof of concept, not just a demo."

Tip: Check exit options.`,

'How do you handle underperforming engineering managers?':
`**Why they ask:** leadership accountability.

**Answer:**
"Clear expectations, coaching, feedback from their teams, and support. If there's no improvement, a timely decision — managers multiply impact in both directions, so a struggling manager affects a whole team."

Tip: Managers multiply impact.`,

'How do you handle SOC 2 or similar compliance?':
`**Why they ask:** enterprise sales requirement.

**Answer:**
"Build the controls into engineering workflows — access, change management and logging — automate evidence collection, and treat compliance as part of quality rather than a separate project before each audit."

Tip: Automate evidence.`,

'Your platform keeps having outages. What do you do?':
`**Why they ask:** reliability leadership.

**Answer:**
"Stabilize with focused reliability work — pausing some feature work if needed — analyze incidents for patterns, add observability, fix the top causes, and introduce SLOs and on-call improvements. A dedicated stability sprint often breaks the cycle."

Tip: Run a stability sprint.`,

'The CEO says engineering is too slow. What do you do?':
`**Why they ask:** responding with data.

**Answer:**
"Measure the delivery pipeline end to end, find the bottlenecks — planning, dependencies, testing, deployment — fix them, and report the improvement with DORA metrics. Often the slowness is in decisions and handoffs, not coding."

Tip: A data-driven response.`,

'A key architect resigns. What do you do?':
`**Why they ask:** key-person risk.

**Answer:**
"Make sure knowledge transfers during the notice period, distribute ownership across the team, document critical decisions, promote or hire, and reduce key-person dependencies going forward so it doesn't happen again."

Tip: Documentation and shared ownership.`,

'What makes a good API strategy?':
`**Why they ask:** platform thinking.

**Answer:**
"Consistent design standards, versioning, documentation, security with OAuth, a developer portal, and treating APIs as products with owners and roadmaps."

Tip: APIs as products.`,

"What's your leadership philosophy?":
`**Why they ask:** fit.

**Answer:**
"Hire great people, give them clear context and ownership, remove obstacles, and keep a high bar for quality and learning."

Tip: Be authentic.`,

'How do you decide what not to build?':
`**Why they ask:** focus.

**Answer:**
"Focus on differentiation and customer value, say no to features without clear impact, and buy commodity capabilities. Saying no is half of engineering strategy."

Tip: Focus.`,

'How does the CTO role change from startup to scale-up?':
`**Why they ask:** stage awareness.

**Answer:**
"At a startup, the CTO is hands-on — building and iterating fast. At a scale-up, the job becomes building teams, processes, architecture for scale, and leadership layers. The hardest part is letting go of writing the code."

Tip: Adapt to the stage.`,

'Why does developer experience matter?':
`**Why they ask:** productivity and retention.

**Answer:**
"It directly affects productivity, quality and retention — fast builds, good tools, clear docs and low friction. I measure developer satisfaction regularly."

Tip: Measure developer satisfaction.`,

'How do you approach ethical technology decisions?':
`**Why they ask:** responsible engineering.

**Answer:**
"Privacy by design, transparency in AI features, security, accessibility, and a clear escalation path when engineers have concerns. Ethics should be part of design reviews, not an afterthought."

Tip: Build ethics into reviews.`,

'What would you ask in a CTO interview?':
`**Why they ask:** your priorities.

**Answer:**
"'What are the biggest technical risks today?' 'How do product and engineering decide priorities?' And 'What does the board expect from technology in two years?'"

Tip: Strategic and practical.`,

'What does good observability look like?':
`**Why they ask:** operational maturity.

**Answer:**
"Correlated metrics, logs and traces, service-level dashboards, alerts tied to SLOs and user impact, and tools for fast diagnosis. Alert on what users feel, not on every CPU spike."

Tip: Alert on user impact.`,

'How do you modernize a legacy platform?':
`**Why they ask:** a common challenge.

**Answer:**
"The strangler pattern — replace pieces incrementally behind stable interfaces, starting with the highest-value areas, with parallel running and data sync. Big-bang rewrites almost always run late and over budget."

Tip: No big-bang rewrites.`,

'How do you measure team health?':
`**Why they ask:** sustainability.

**Answer:**
"Engagement surveys, retention, on-call load, incident trends, and qualitative feedback from skip-level meetings. Heavy on-call load is one of the fastest ways to lose good engineers."

Tip: On-call load matters.`,

'How do engineers stay close to customers?':
`**Why they ask:** customer focus.

**Answer:**
"Customer interviews, support rotations, usage analytics, and joint discovery with product. An engineer who spends a day answering support tickets builds very different software afterward."

Tip: Support rotations build empathy.`,

'What legacy do you want to leave as CTO?':
`**Why they ask:** long-term thinking.

**Answer:**
"A scalable platform, a strong engineering culture, and leaders who can carry it forward without me."

Tip: Lasting impact.`,

};
