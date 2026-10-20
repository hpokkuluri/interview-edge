// Rewritten Product & Delivery — Product Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix pd-pm-).
module.exports = {

'Product manager vs product owner?':
`**Why they ask:** role clarity.

**Answer:**
"Product owner is a Scrum accountability: maximizing the value the team delivers through backlog management. Product manager is a broader job: discovery, strategy, market understanding and go-to-market. In many companies one person does both — I've done both, spending mornings with customers and afternoons refining the backlog with engineering."

Tip: Overlap depends on company.`,

'How would you improve a product you use daily?':
`**Why they ask:** product thinking in action.

**Answer:**
"I'd pick Google Maps for daily commuters. Their goal is arriving on time with less stress; a real pain is not knowing whether there's parking near the destination, so the drive ends with 10 minutes circling. I'd brainstorm options, prioritize parking availability predictions for the destination, since Maps already has location data to infer it, and launch it as an MVP in a few dense cities. Success metrics: feature adoption, and a drop in post-arrival circling detected through location data."

Tip: User-centered structure.`,

'How do you prioritize a roadmap?':
`**Why they ask:** prioritization judgment.

**Answer:**
"Start with strategy and goals, then assess customer value, business impact, effort and risk, using frameworks like RICE, value versus effort, or Kano, plus dependencies. RICE is reach times impact times confidence divided by effort: reach of 5,000 users, impact 2, 80% confidence and 4 person-months gives 5,000 times 2 times 0.8 divided by 4 — 2,000. Frameworks inform the decision; I still communicate the trade-offs openly."

Tip: Show your math.`,

'How do you do product discovery?':
`**Why they ask:** building the right thing.

**Answer:**
"Customer interviews, data analysis, competitor research, problem framing, then assumption mapping to find the riskiest beliefs, and prototypes or experiments that test value, usability, feasibility and viability before we build. If the riskiest assumption is 'finance teams will trust automated matching', we test that with a prototype before writing production code."

Tip: Test riskiest assumptions first.`,

'How do you define success metrics?':
`**Why they ask:** outcome orientation.

**Answer:**
"A north star metric that reflects customer value — say, invoices processed without manual touch — plus input metrics like activation, engagement and retention, and guardrail metrics like performance, churn and support tickets, so we don't win one number by damaging another. HEART and AARRR are useful frameworks."

Tip: North star + guardrails.`,

'A key metric dropped 15% this week. How do you investigate?':
`**Why they ask:** analytical thinking.

**Answer:**
"First check the data is real — a tracking change or broken event is the most common cause. Then segment by platform, region, cohort and channel, look at recent releases and external events like a holiday, walk the funnel to find where the drop happens, form hypotheses and act. If it's only Android and only since Tuesday's release, I know where to look."

Tip: Validate data first.`,

'How do you run an A/B test?':
`**Why they ask:** experimentation rigor.

**Answer:**
"Write a hypothesis, choose a primary metric and guardrails, calculate sample size and duration for adequate statistical power, randomize assignment, avoid peeking and stopping early, then analyze both statistical significance and practical impact before deciding. Success criteria are agreed before the test starts."

Tip: Pre-define success.`,

'How do you build a product strategy?':
`**Why they ask:** strategic depth.

**Answer:**
"Understand the market, customers, competitors and company goals; choose target segments, the value proposition and how we'll differentiate; set goals and a few key bets; and translate that into a roadmap of outcomes. In short: where we'll play, and how we'll win there."

Tip: Where to play, how to win.`,

'What makes a good roadmap?':
`**Why they ask:** planning philosophy.

**Answer:**
"Outcome-focused themes arranged as now, next and later, tied to strategy, flexible as we learn, and communicated differently for each audience. Not a fixed list of features with dates a year out, which becomes a list of broken promises."

Tip: Now/next/later.`,

'How do you say no to stakeholders?':
`**Why they ask:** stakeholder management.

**Answer:**
"Understand what the request is really trying to achieve, explain priorities and trade-offs with data, offer alternatives or a timeframe, and keep the relationship positive. Usually it's 'not now, and here's why' — and sometimes an existing feature already solves the underlying problem."

Tip: "Not now" with reasons.`,

'How do you work with engineering?':
`**Why they ask:** collaboration.

**Answer:**
"Share the problem and context early, involve engineers in discovery, respect their estimates, collaborate on scope trade-offs, protect the team from churn, and celebrate outcomes together. Engineers who understand the customer problem often propose better solutions than I would."

Tip: Partnership.`,

'How do you work with designers?':
`**Why they ask:** collaboration.

**Answer:**
"Co-own discovery, share research, define problems rather than prescribing solutions, test prototypes with users together, and balance usability with feasibility."

Tip: Problem framing.`,

'How do you manage the backlog?':
`**Why they ask:** execution discipline.

**Answer:**
"Keep it ordered and refined, with the top items ready — clear acceptance criteria, sized — remove stale items regularly, and link every item to a goal. A 600-item backlog nobody reads is just a graveyard."

Tip: Prune regularly.`,

'What is an MVP?':
`**Why they ask:** a commonly misused concept.

**Answer:**
"The smallest product that lets us learn whether we're solving a real problem in a valuable way. It's not a low-quality product — it's a narrow one that tests key assumptions with real users."

Tip: Learning goal.`,

'How do you launch a product?':
`**Why they ask:** go-to-market skills.

**Answer:**
"Define target customers and positioning, make sure sales, support, documentation and marketing are ready, roll out in phases or through a beta, monitor metrics, set up feedback loops, and run a post-launch review."

Tip: Phased rollout.`,

'How do you think about pricing?':
`**Why they ask:** business acumen.

**Answer:**
"Value-based pricing grounded in willingness-to-pay research, competitor benchmarks, packaging into tiers, and testing — aligned with costs and the business model. Price on the value customers get, not on what it cost us to build."

Tip: Value-based.`,

'How technical should a PM be?':
`**Why they ask:** credibility with engineering.

**Answer:**
"Technical enough to understand architecture trade-offs, APIs, data and feasibility, to earn engineering's trust and make informed decisions — without designing the solution myself."

Tip: Credibility.`,

'How is B2B product management different?':
`**Why they ask:** context awareness.

**Answer:**
"Buyers and users are different people, sales cycles are long, customers ask for specific features, integrations matter, security and compliance requirements are heavy, and contracts influence the roadmap. The risk is becoming a feature factory for one big client."

Tip: Avoid becoming a feature factory for one client.`,

'How do you manage AI-powered products?':
`**Why they ask:** current product reality.

**Answer:**
"Start from the user problem, not the technology. Measure quality with evaluation sets, design UX for uncertainty and errors — letting users verify and correct — monitor cost and latency, address privacy and safety, and iterate with real usage data."

Tip: Evaluations.`,

'Estimate the market size for project management software for small businesses in the US.':
`**Why they ask:** structured estimation.

**Answer:**
"There are roughly 33 million small businesses in the US. Maybe 30% have teams that actually manage projects — about 10 million. Assume 20% of those pay for a tool — 2 million businesses. At $20 per user for 5 users, times 12 months, that's $1,200 a year each, so about $2.4 billion. I'd sanity-check the assumptions against public revenue of the main players."

Tip: Structured assumptions.`,

'Tell me about a product you launched.':
`**Why they ask:** proof.

**Answer:**
"I launched a self-service invoice status portal for suppliers. Discovery showed 40% of AP calls were status questions. After launch, those calls dropped 55% and supplier satisfaction rose."

Tip: Problem, solution, outcome.`,

'Tell me about a failed product decision.':
`**Why they ask:** learning from failure.

**Answer:**
"We built a dashboard customization feature that few people used. I hadn't validated demand. Now I test interest with prototypes and fake-door tests before building anything substantial."

Tip: Learning.`,

'Tell me about handling disagreement with engineering.':
`**Why they ask:** conflict resolution.

**Answer:**
"Engineering wanted to rewrite a service before adding features. We quantified how much the tech debt was slowing velocity and agreed on a phased refactor alongside feature work."

Tip: Data-driven compromise.`,

'Tell me about using data to make a decision.':
`**Why they ask:** data fluency.

**Answer:**
"Usage data showed 70% of users dropped at step 3 of onboarding. We simplified that step, and completion rose from 45% to 68%."

Tip: Data to action.`,

'Are PM certifications valuable?':
`**Why they ask:** credentials view.

**Answer:**
"CSPO, PSPO, Pragmatic Institute and AIPMM help with foundations, but a track record of outcomes matters far more."

Tip: Outcomes > certificates.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior PM, group PM, then director of product."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I find real customer problems, prioritize ruthlessly and deliver measurable outcomes — like cutting supplier inquiry calls 55% and raising onboarding completion by 23 points."

Tip: Proof.`,

"What's your favorite product and why?":
`**Why they ask:** product sense.

**Answer:**
"Figma. It serves design teams who need to collaborate, and it solved the 'which file is the latest version?' problem by putting everything in the browser with live multiplayer editing. Details like seeing teammates' cursors make collaboration feel natural. One improvement: better handoff to developers for large design systems, where finding the right component variant is still slow."

Tip: Show product thinking.`,

'How do you handle customer feedback?':
`**Why they ask:** customer focus.

**Answer:**
"Collect it from many channels, tag and quantify themes, dig for the underlying problem behind each request, connect it to strategy, and close the loop with customers so they know they were heard."

Tip: Themes not individual requests.`,

'How do you balance features with technical debt?':
`**Why they ask:** sustainable delivery.

**Answer:**
"Make debt visible and quantify its impact, allocate steady capacity — around 20% — for maintenance, and prioritize debt that blocks goals."

Tip: Capacity allocation.`,

'How do you use OKRs?':
`**Why they ask:** goal setting.

**Answer:**
"Objectives are qualitative goals; key results are measurable outcomes; initiatives align to key results and progress is reviewed regularly. For example, objective: delight new users; key result: raise 30-day retention from 35% to 45%."

Tip: Outcome KRs.`,

'How do you analyze competitors?':
`**Why they ask:** market awareness.

**Answer:**
"Feature and positioning comparisons, pricing, customer reviews, and win-loss interviews — focused on how we differentiate rather than copying their roadmap."

Tip: Win/loss interviews.`,

'How do you use personas?':
`**Why they ask:** user focus.

**Answer:**
"As research-based archetypes of users' goals, behaviors and pain points that guide decisions — kept updated with fresh evidence, not invented once and forgotten."

Tip: Evidence-based.`,

'What is Jobs to be Done?':
`**Why they ask:** framework knowledge.

**Answer:**
"A framework focused on the progress a customer is trying to make in a particular circumstance — the job — rather than their demographics. Nobody wants an expense app; they want to get reimbursed quickly without saving paper receipts."

Tip: Circumstance matters.`,

'How would you improve retention?':
`**Why they ask:** growth thinking.

**Answer:**
"Analyze cohorts to see when users churn, learn why through interviews and surveys, improve activation and the 'aha' moment, build habits and ongoing value, and remove friction. Retention problems often start in onboarding."

Tip: Activation drives retention.`,

'Sales demands a feature for a big deal. What do you do?':
`**Why they ask:** strategic discipline.

**Answer:**
"Understand the customer's actual need, check strategic fit and value to other customers, estimate the cost, explore alternatives, and decide with leadership transparently. If it helps 30 other prospects too, it may move up; if it's a one-off, a services solution may be better."

Tip: Strategy fit.`,

'Your launch is slipping. What do you do?':
`**Why they ask:** execution under pressure.

**Answer:**
"Understand the causes, re-scope to protect the core value, communicate early with stakeholders, and adjust the plan. Cut scope, not quality."

Tip: Cut scope, not quality.`,

'How do you write a product requirements doc?':
`**Why they ask:** communication craft.

**Answer:**
"Problem and context, goals and metrics, users, scope and non-goals, requirements or user stories, design links, open questions and the launch plan. Non-goals prevent a lot of scope creep."

Tip: Non-goals.`,

'How is platform product management different?':
`**Why they ask:** product range.

**Answer:**
"Customers are internal developers or partners, so success means adoption, developer experience, reliability and API quality rather than end-user engagement."

Tip: Developer experience.`,

'What is product-led growth?':
`**Why they ask:** growth models.

**Answer:**
"Using the product itself — free trials, freemium, self-serve onboarding, virality — as the main driver of acquisition, conversion and expansion. Time to value is everything: users should get value in minutes, before any sales call."

Tip: Time to value.`,

'Why does accessibility matter to PMs?':
`**Why they ask:** inclusive product thinking.

**Answer:**
"It expands reach, it's often legally required, and it improves usability for everyone — captions help people in noisy places too. I put it in the definition of done."

Tip: Include in definition of done.`,

"How do you handle a feature that may harm users' trust?":
`**Why they ask:** ethics and judgment.

**Answer:**
"Evaluate privacy and user impact, consult legal and other stakeholders, and choose transparent, user-respecting designs even if a short-term metric suffers. Trust is a long-term asset."

Tip: Trust is a long-term asset.`,

'How do you communicate product vision?':
`**Why they ask:** leadership.

**Answer:**
"A concise narrative of the future for customers, why it matters, and how we'll get there — repeated consistently until the team can tell it themselves."

Tip: Storytelling.`,

'How would you analyze a conversion funnel?':
`**Why they ask:** analytical skill.

**Answer:**
"Define the steps — visit, sign-up, activation, purchase — measure conversion between each, segment by source, device and cohort, find the biggest drop-off, research why with session recordings and surveys, and test fixes. For example: 10,000 visits, 1,000 sign-ups at 10%, 300 activated at 30%, 60 paid at 20%. Lifting activation from 30% to 40% adds 20 paying customers — the biggest lever."

Tip: Find the biggest lever.`,

'What are CAC and LTV?':
`**Why they ask:** unit economics.

**Answer:**
"CAC, customer acquisition cost, is sales and marketing spend divided by new customers. LTV, lifetime value, is roughly average revenue per customer times gross margin times average lifetime. A healthy SaaS benchmark is LTV to CAC of at least 3, with CAC payback under 12 to 18 months."

Tip: Know the benchmarks.`,

'How do you run a good customer interview?':
`**Why they ask:** discovery craft.

**Answer:**
"Ask about past behavior, not hypothetical futures — 'tell me about the last time you did this' — use open questions, don't pitch, listen far more than I talk, dig into why, and capture quotes and patterns across interviews. People are bad at predicting what they'd use and good at describing what they did."

Tip: The Mom Test principles.`,

'How do you sunset a feature?':
`**Why they ask:** product lifecycle.

**Answer:**
"Analyze usage and cost, find out who depends on it, offer alternatives, communicate early with a clear timeline, support migration, and monitor feedback."

Tip: Communicate early.`,

'Speed vs quality — how do you decide?':
`**Why they ask:** judgment.

**Answer:**
"It depends on reversibility and risk. Move fast on reversible, low-risk experiments; be careful with irreversible decisions like data models, security, pricing and core architecture. And always keep a minimum quality bar."

Tip: One-way vs two-way doors.`,

'Engagement is up but revenue is flat. What do you investigate?':
`**Why they ask:** business thinking.

**Answer:**
"Whether the engaged users are in paying segments, whether pricing and packaging capture the value, the conversion path to paid, churn among paying customers, and whether engagement reflects real value or vanity activity."

Tip: Value capture.`,

};
