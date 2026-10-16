// Product Manager / Product Owner. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['pd-pm'] = [
["Role", "What does a product manager do?",
`**Why they ask:** to see if you think about outcomes, not just features.

**Answer:** Owns the product's success: understands customers and market, defines vision and strategy, prioritizes what to build, works with engineering and design to deliver, measures outcomes, and aligns stakeholders. The PM decides "what and why"; engineering decides "how".

Tip: Outcomes over output.`, 'B', 'E'],

["Role", "Product manager vs product owner?",
`**Answer:** **Product owner** is a Scrum role accountable for maximizing value through backlog management. **Product manager** is a broader job covering discovery, strategy, market and go-to-market. In many companies one person does both.

Tip: Overlap depends on company.`, 'B', 'E'],

["Product Sense", "How would you improve a product you use daily?",
`**Answer:** Structure: pick the product and a target user, identify their goals and pain points, brainstorm solutions, prioritize by impact and effort, define the MVP, and set success metrics.

**Example:** Google Maps for commuters — pain: unpredictable parking at destination; solution: parking availability predictions; metric: reduction in time-to-park reported, feature adoption.

Tip: User-centered structure.`, 'B', 'M'],

["Prioritization", "How do you prioritize a roadmap?",
`**Answer:** Align to strategy and goals, assess customer value and business impact, effort and risk, use frameworks (RICE = Reach × Impact × Confidence / Effort, value vs effort, Kano), consider dependencies, and communicate trade-offs.

**RICE example:** Reach 5,000 users, Impact 2, Confidence 80%, Effort 4 person-months → 5,000×2×0.8/4 = 2,000.

Tip: Show your math.`, 'B', 'M'],

["Discovery", "How do you do product discovery?",
`**Answer:** Customer interviews, data analysis, competitor research, problem framing, assumption mapping, prototypes and experiments to test value, usability, feasibility and viability before building.

Tip: Test riskiest assumptions first.`, 'B', 'M'],

["Metrics", "How do you define success metrics?",
`**Answer:** Choose a north star metric reflecting customer value, plus input metrics (activation, engagement, retention) and guardrail metrics (performance, churn, support tickets). Use frameworks like HEART or AARRR.

Tip: North star + guardrails.`, 'B', 'M'],

["Metrics", "A key metric dropped 15% this week. How do you investigate?",
`**Answer:** Check data accuracy (tracking changes), segment by platform, region, cohort, and channel, look at recent releases and external events, check the funnel to find where the drop happens, form hypotheses, and act.

Tip: Validate data first.`, 'B', 'M'],

["Experimentation", "How do you run an A/B test?",
`**Answer:** Hypothesis, primary metric and guardrails, sample size and duration calculated for statistical power, random assignment, avoid peeking, analyze significance and practical impact, then decide.

Tip: Pre-define success.`, 'D', 'M'],

["Strategy", "How do you build a product strategy?",
`**Answer:** Understand the market, customers, competitors and company goals; define target segments, value proposition and differentiation; set goals and key bets; and translate into a roadmap of outcomes.

Tip: Where to play, how to win.`, 'D', 'M'],

["Roadmap", "What makes a good roadmap?",
`**Answer:** Outcome-focused themes (now/next/later), tied to strategy, flexible to learning, communicated by audience, and not a fixed list of features with dates.

Tip: Now/next/later.`, 'B', 'M'],

["Stakeholders", "How do you say no to stakeholders?",
`**Answer:** Understand the request's goal, explain priorities and trade-offs with data, offer alternatives or timing, and keep relationships positive.

Tip: "Not now" with reasons.`, 'B', 'M'],

["Engineering", "How do you work with engineering?",
`**Answer:** Share the problem and context early, involve engineers in discovery, respect estimates, collaborate on scope trade-offs, protect the team from churn, and celebrate outcomes.

Tip: Partnership.`, 'B', 'E'],

["Design", "How do you work with designers?",
`**Answer:** Co-own discovery, share research, define problems not solutions, review prototypes with users, and balance usability with feasibility.

Tip: Problem framing.`, 'B', 'E'],

["Backlog", "How do you manage the backlog?",
`**Answer:** Keep it ordered and refined, top items ready (clear acceptance criteria, sized), remove stale items, and link items to goals.

Tip: Prune regularly.`, 'B', 'E'],

["MVP", "What is an MVP?",
`**Answer:** The smallest product that lets you learn whether you're solving a real problem in a valuable way — not a low-quality product. It tests key assumptions with real users.

Tip: Learning goal.`, 'B', 'E'],

["Launch", "How do you launch a product?",
`**Answer:** Define target customers and positioning, readiness (sales, support, documentation, marketing), phased rollout or beta, monitoring metrics, feedback loops, and post-launch review.

Tip: Phased rollout.`, 'B', 'M'],

["Pricing", "How do you think about pricing?",
`**Answer:** Value-based pricing, customer willingness to pay research, competitor benchmarks, packaging tiers, and testing; align with costs and business model.

Tip: Value-based.`, 'D', 'M'],

["Technical", "How technical should a PM be?",
`**Answer:** Enough to understand architecture trade-offs, APIs, data and feasibility, earn engineering trust and make informed decisions — without designing the solution.

Tip: Credibility.`, 'B', 'M'],

["B2B", "How is B2B product management different?",
`**Answer:** Buyers and users differ, longer sales cycles, customer-specific requests, integrations, security and compliance requirements, and enterprise contracts influence roadmaps.

Tip: Avoid becoming a feature factory for one client.`, 'D', 'M'],

["AI", "How do you manage AI-powered products?",
`**Answer:** Define the user problem first, measure quality with evaluations, handle uncertainty and errors in UX, monitor cost and latency, address privacy and safety, and iterate with real usage data.

Tip: Evaluations.`, 'D', 'M'],

["Estimation", "Estimate the market size for project management software for small businesses in the US.",
`**Answer:** ~33 million small businesses; maybe 30% have teams that manage projects (~10M); assume 20% adopt paid tools (~2M businesses); average $20/user × 5 users × 12 months = $1,200/year → ~$2.4B market. State assumptions clearly.

Tip: Structured assumptions.`, 'D', 'M'],

["Behavioral", "Tell me about a product you launched.",
`**Sample answer:** "I launched a self-service invoice portal for suppliers. Discovery showed 40% of AP calls were status inquiries. After launch, inquiry calls dropped 55% and supplier satisfaction rose."

Tip: Problem, solution, outcome.`, 'B', 'M'],

["Behavioral", "Tell me about a failed product decision.",
`**Sample answer:** "We built a dashboard customization feature few used. I hadn't validated demand. I now test interest with prototypes and fake-door tests before building."

Tip: Learning.`, 'B', 'M'],

["Behavioral", "Tell me about handling disagreement with engineering.",
`**Sample answer:** "Engineering wanted to rewrite a service before adding features. We quantified tech debt impact on velocity and agreed on a phased refactor alongside features."

Tip: Data-driven compromise.`, 'B', 'M'],

["Behavioral", "Tell me about using data to make a decision.",
`**Sample answer:** "Usage data showed 70% of users dropped at step 3 of onboarding. We simplified it and completion rose from 45% to 68%."

Tip: Data to action.`, 'B', 'M'],

["Certifications", "Are PM certifications valuable?",
`**Answer:** CSPO, PSPO, Pragmatic Institute and AIPMM help, but portfolio of outcomes matters more.

Tip: Outcomes > certificates.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior PM, group PM, or director of product.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I find real customer problems, prioritize ruthlessly and deliver measurable outcomes — like cutting supplier inquiry calls 55% and raising onboarding completion by 23 points."

Tip: Proof.`, 'B', 'E'],

["Favorite Product", "What's your favorite product and why?",
`**Answer:** Choose one, explain who it serves, what problem it solves, why it's well designed (with specifics), and one improvement you'd make.

Tip: Show product thinking.`, 'B', 'E'],

["Customer Feedback", "How do you handle customer feedback?",
`**Answer:** Collect from many channels, tag and quantify themes, understand the underlying problem, connect to strategy and close the loop with customers.

Tip: Themes not individual requests.`, 'B', 'E'],

["Tech Debt", "How do you balance features with technical debt?",
`**Answer:** Make debt visible and quantify its impact, allocate capacity (e.g. 20%) for maintenance, and prioritize debt that blocks goals.

Tip: Capacity allocation.`, 'B', 'M'],

["OKRs", "How do you use OKRs?",
`**Answer:** Objectives are qualitative goals; key results are measurable outcomes; teams align initiatives to key results and review progress regularly.

**Example:** Objective: delight new users. KR: increase 30-day retention from 35% to 45%.

Tip: Outcome KRs.`, 'B', 'M'],

["Competition", "How do you analyze competitors?",
`**Answer:** Feature and positioning comparison, pricing, customer reviews, win/loss analysis, and focusing on differentiation rather than copying.

Tip: Win/loss interviews.`, 'B', 'M'],

["Personas", "How do you use personas?",
`**Answer:** Research-based archetypes of users' goals, behaviors and pain points to guide decisions — kept updated with evidence.

Tip: Evidence-based.`, 'B', 'E'],

["Jobs to be Done", "What is Jobs to be Done?",
`**Answer:** A framework focusing on the progress customers want to make ("job") in a circumstance, rather than demographics — guiding innovation and positioning.

Tip: Circumstance matters.`, 'D', 'M'],

["Retention", "How would you improve retention?",
`**Answer:** Analyze cohorts to find when users churn, understand reasons (interviews, surveys), improve activation and the "aha" moment, build habits and value, and fix friction.

Tip: Activation drives retention.`, 'D', 'M'],

["Scenario", "Sales demands a feature for a big deal. What do you do?",
`**Answer:** Understand the customer need, assess fit with strategy and value to other customers, evaluate cost, explore alternatives, and decide with leadership transparently.

Tip: Strategy fit.`, 'B', 'M'],

["Scenario", "Your launch is slipping. What do you do?",
`**Answer:** Understand causes, re-scope to protect core value, communicate early with stakeholders, and adjust plans.

Tip: Cut scope, not quality.`, 'B', 'M'],

["Communication", "How do you write a product requirements doc?",
`**Answer:** Problem and context, goals and metrics, users, scope and non-goals, requirements/user stories, design links, open questions, and launch plan.

Tip: Non-goals.`, 'B', 'E'],

["Platform", "How is platform product management different?",
`**Answer:** Customers are internal developers or partners; success means adoption, developer experience, reliability and API quality.

Tip: Developer experience.`, 'D', 'M'],

["Growth", "What is product-led growth?",
`**Answer:** Using the product itself (free trials, freemium, self-serve onboarding, virality) as the primary driver of acquisition, conversion and expansion.

Tip: Time to value.`, 'D', 'M'],

["Accessibility", "Why does accessibility matter to PMs?",
`**Answer:** It expands reach, is often legally required, and improves usability for everyone.

Tip: Include in definition of done.`, 'B', 'E'],

["Ethics", "How do you handle a feature that may harm users' trust?",
`**Answer:** Evaluate privacy and user impact, consult legal and stakeholders, and choose transparent, user-respecting designs.

Tip: Trust is a long-term asset.`, 'B', 'M'],

["Vision", "How do you communicate product vision?",
`**Answer:** A concise narrative of the future for customers, why it matters, and how we'll get there — repeated consistently.

Tip: Storytelling.`, 'B', 'M']
];
