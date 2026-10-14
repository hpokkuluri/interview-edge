// eng-dir — generated from src/eng-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Director of Engineering. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['eng-dir'] = (QB['eng-dir'] || []).concat([
['Role', 'How is a Director of Engineering different from an Engineering Manager?',
`- **Scope**: multiple teams (often 3–8 managers, 30–80 engineers) and a product area.
- **Managers of managers**: develop EMs, build leadership bench.
- **Org design** and planning across teams.
- **Technical strategy** for the area with architects/principals.
- **Cross-functional leadership** with product, design, operations.
- **Budget and headcount** planning.`, 'B'],

['Strategy', 'How do you set engineering strategy for your area?',
`- **Business goals** and product strategy as inputs.
- **Current state**: architecture, reliability, velocity, team capabilities.
- **Strategy**: priorities (e.g. platform modernization, reliability, developer productivity), principles, roadmap.
- **Align** with product and leadership; communicate widely.
- **Measure** progress and adjust.`, 'B'],

['Org Design', 'How do you organize teams for effectiveness?',
`- **Stream-aligned teams** owning customer-facing value streams; **platform teams** for shared capabilities; **enabling teams** for coaching; **complicated subsystem** teams when needed (Team Topologies).
- **Team size** 5–9; clear ownership.
- **Minimize dependencies** (Conway's law).
- Evolve as the product evolves.`, 'D'],

['Org Design', 'When and how would you reorganize your teams?',
`- **Triggers**: misaligned ownership, too many dependencies, growth, strategy change.
- **Design** with data (dependency maps, team surveys).
- **Involve** managers and senior engineers.
- **Communicate** clearly the why, what changes, timeline.
- **Support** people through transitions; measure outcomes after.
- Avoid frequent reorgs.`, 'D'],

['People', 'How do you develop engineering managers?',
`- **Clear expectations** for EM role.
- **Coaching** in 1:1s and feedback.
- **Management training** and peer learning circles.
- **Delegated decisions** with support.
- **Skip-levels** for insights.
- Build succession for each EM.`, 'B'],

['People', 'How do you use skip-level meetings?',
`- Understand **team health** and morale directly.
- Hear **ideas and concerns** that may not surface otherwise.
- **Build trust** without undermining managers (share themes, not individuals).
- Regular cadence.`, 'B'],

['People', 'How do you handle an underperforming engineering manager?',
`- **Specific feedback** on gaps (team health, delivery, communication).
- **Coaching** plan with milestones.
- **Support** (training, mentor).
- **Consider** fit — some prefer IC path.
- **Act** if no improvement; teams suffer under weak managers.`, 'B'],

['Planning', 'How do you run headcount and budget planning?',
`- **Inputs**: roadmap, operational load, attrition, productivity.
- **Scenarios** (base, growth, constrained) with trade-offs.
- **Prioritize** investments with product leadership.
- **Hiring plan** with timelines and locations.
- **Track** vs budget; adjust quarterly.`, 'B'],

['Planning', 'How do you coordinate quarterly planning across multiple teams?',
`- **Company/product priorities** cascaded.
- **Team proposals** with capacity.
- **Dependency mapping** and negotiation.
- **Final plan** with clear commitments and stretch goals.
- **Mid-quarter** checkpoints.`, 'B'],

['Delivery', 'How do you improve delivery speed across your organization?',
`- **Measure** DORA and flow metrics.
- **Remove bottlenecks**: CI/CD speed, environments, approvals, dependencies.
- **Platform investments** (developer experience).
- **Smaller batches** and trunk-based development.
- **Clear priorities** to reduce context switching.`, 'D'],

['Delivery', 'How do you manage a large cross-team initiative?',
`- **Single accountable** lead (technical program manager or director).
- **Clear goals** and milestones.
- **Architecture** agreed early.
- **Dependency** tracking and regular syncs.
- **Risk** management and escalation paths.
- **Communicate** progress to stakeholders.`, 'B'],

['Technical', 'How do you ensure good architecture decisions across teams?',
`- **Principal/staff engineers** as technical leaders.
- **RFC process** and architecture reviews for cross-cutting changes.
- **Standards** and golden paths.
- **Tech radar** for technology choices.
- Balance autonomy with consistency.`, 'B'],

['Technical', 'How do you approach a platform modernization program?',
`- **Business case**: velocity, reliability, cost, talent.
- **Incremental** strategy (strangler) with milestones delivering value.
- **Platform team** enabling migrations.
- **Migration tooling** and support.
- **Track** progress and decommission old systems.`, 'D'],

['Reliability', 'How do you build a reliability culture across teams?',
`- **SLOs** for key services; error budgets.
- **Incident management** process and postmortems.
- **Reliability reviews** for new services.
- **Investment** in observability.
- **Recognition** for reliability work.`, 'B'],

['Stakeholders', 'How do you partner with product leadership?',
`- **Joint strategy** and roadmap.
- **Shared metrics** (customer outcomes).
- **Regular** leadership syncs.
- **Constructive tension**: engineering perspective on feasibility, quality, tech investments.
- **Unified** messaging to teams.`, 'B'],

['Stakeholders', 'How do you communicate with executives about engineering?',
`- **Business impact** language.
- **Concise** updates: progress, risks, decisions needed.
- **Metrics** that matter to them (delivery, reliability, cost).
- **Proactive** about problems.`, 'B'],

['Culture', 'How do you scale culture as the organization grows?',
`- **Explicit values** and behaviors.
- **Hiring** and onboarding aligned to culture.
- **Leaders model** behaviors.
- **Rituals** (demos, all-hands, recognition).
- **Feedback loops** (surveys) and action.`, 'B'],

['Culture', 'How do you foster collaboration between teams?',
`- **Shared goals** and incentives.
- **Communities of practice** (guilds).
- **Inner source** contributions.
- **Clear interfaces** and ownership to reduce friction.
- **Celebrate** cross-team wins.`, 'B'],

['Hiring', 'How do you scale hiring while maintaining the bar?',
`- **Structured interview** process with trained interviewers.
- **Calibration** sessions.
- **Hiring committees** or bar raisers.
- **Pipeline** sources (referrals, recruiting partnerships).
- **Onboarding** capacity planning.
- **Metrics**: time to hire, quality of hire, diversity.`, 'B'],

['Behavioral', 'Tell me about a time you turned around a struggling organization.',
`- **Situation**: missed deadlines, low morale, high attrition.
- **Actions**: listened (skip-levels), clarified priorities with product, fixed team structure, invested in CI/CD and on-call health, coached managers.
- **Result**: delivery predictability up, attrition down, engagement improved.`, 'B'],

['Behavioral', 'How do you make decisions when your managers disagree?',
`- Hear **each perspective** and the data.
- Clarify **decision criteria** aligned with goals.
- **Decide** (or delegate decision) and explain rationale.
- Ensure **commitment** and follow-up.`, 'B'],

['Behavioral', 'Describe a strategic bet you made as a leader.',
`- e.g. investing in a developer platform team instead of more feature teams.
- Reasoning, risks, how you measured, outcome (deployment frequency up, onboarding time down).`, 'B'],

['AI', 'How would you lead AI adoption across your engineering organization?',
`- **Strategy**: productivity tools + AI features in products.
- **Pilots** with metrics.
- **Guidelines** (security, IP, quality).
- **Upskilling** programs.
- **Platform** for AI features (model access, evaluation, guardrails).
- Share learnings across teams.`, 'D'],

['Finance', 'How do you manage cloud costs across teams?',
`- **Visibility**: cost per team/service (tagging, FinOps tools).
- **Accountability**: teams own their costs.
- **Optimization**: right-sizing, reserved/savings plans, autoscaling, storage lifecycle.
- **Unit economics** (cost per transaction/customer).
- **Review** monthly.`, 'D'],

['Behavioral', 'Why do you want to be a Director of Engineering here?',
`- **Mission and product** interest.
- **Scale and challenges** match your experience.
- **Leadership philosophy** fit.
- **What you'll bring** (examples).`, 'B']
]);

QB['eng-dir'] = (QB['eng-dir'] || []).concat([
['People', 'How do you build a leadership bench?',
`- **Identify** potential managers and technical leaders.
- **Opportunities**: lead projects, act as interim manager, run initiatives.
- **Training** and mentoring.
- **Succession plans** for each key role.
- **Diverse** pipeline.`, 'B'],

['People', 'How do you handle layoffs or restructuring?',
`- **Clear rationale** from leadership; legal/HR guidance.
- **Fair and consistent** criteria.
- **Respectful** communication; support for affected people (severance, references, outplacement).
- **Support** remaining team: transparency, re-planning workloads, reset priorities.
- Rebuild trust over time.`, 'D'],

['People', 'How do you balance IC and manager career paths?',
`- **Dual ladders** with equivalent levels and recognition.
- **Clear expectations** for staff/principal roles (impact, influence).
- **Allow movement** between paths.
- **Celebrate** IC leaders publicly.`, 'B'],

['Delivery', 'How do you know if your organization is productive?',
`- **Outcomes** delivered vs goals (customer impact).
- **DORA** and flow metrics trends.
- **Quality** and reliability.
- **Developer experience** surveys (friction points).
- Avoid vanity metrics (lines of code, story points across teams).`, 'D'],

['Delivery', 'How do you handle a project that\'s significantly behind schedule across several teams?',
`- **Assess** root causes (scope, dependencies, staffing, technical issues).
- **Re-plan**: cut scope, re-sequence, add focused help.
- **Communicate** with stakeholders early.
- **Daily/weekly** cross-team syncs for recovery.
- **Learn** for future planning.`, 'B'],

['Technical', 'How do you manage technical debt at the organization level?',
`- **Inventory** with impact assessment.
- **Strategic themes** (e.g. retire legacy auth, upgrade frameworks).
- **Capacity allocation** per team plus org-level initiatives.
- **Track** progress and benefits.`, 'B'],

['Technical', 'How do you decide build vs buy for engineering tools and components?',
`- **Core differentiation?** Build. Commodity? Buy.
- **TCO** including maintenance.
- **Time to value**.
- **Integration** and vendor risk.
- Revisit decisions as needs change.`, 'B'],

['Security', 'How do you embed security in engineering processes?',
`- **Secure SDLC**: threat modeling, SAST/DAST, dependency scanning, secrets scanning.
- **Security champions** in teams.
- **SLAs** for vulnerabilities.
- **Training**.
- **Partnership** with security team; shared metrics.`, 'B'],

['Reliability', 'How do you handle repeated incidents in one team\'s area?',
`- **Analyze** postmortems for patterns.
- **Invest** in fixes (capacity reallocation).
- **Reliability goals** with SLOs.
- **Support** the team (expertise, tooling).
- Track improvement.`, 'B'],

['Stakeholders', 'How do you handle conflict with another director over priorities or ownership?',
`- **Understand** their goals.
- **Data** on impact.
- **Find** a win-win or escalate jointly to the shared leader with options.
- **Keep** the relationship professional and collaborative.`, 'B'],

['Stakeholders', 'How do you work with sales or customer success on escalations?',
`- **Clear escalation** process and SLAs.
- **Triage** by customer impact.
- **Communicate** status and timelines.
- **Feed** recurring issues into roadmap.
- Protect teams from constant interruptions (rotating support duty).`, 'B'],

['Culture', 'How do you maintain engineering quality standards across teams?',
`- **Shared standards** (testing, code review, observability).
- **Paved paths** making the right thing easy.
- **Reviews** and audits (lightweight).
- **Recognition** of quality.
- **Metrics** (incidents, escaped defects).`, 'B'],

['Culture', 'How do you encourage innovation while delivering on commitments?',
`- **Time** for innovation (hack weeks, 10% time).
- **Experiment** framework for promising ideas.
- **Path to production** for successful prototypes.
- **Balance** with roadmap commitments.`, 'B'],

['Hiring', 'How do you build a diverse engineering organization?',
`- **Diverse pipelines** (partnerships, referrals).
- **Inclusive job descriptions**.
- **Structured interviews** with calibrated rubrics.
- **Diverse panels**.
- **Retention**: inclusive culture, fair promotions, mentorship.`, 'B'],

['Finance', 'How do you justify engineering investments to finance leadership?',
`- **Business outcomes**: revenue enablement, cost savings, risk reduction.
- **Quantify** (e.g. reduced incidents → reduced churn).
- **Benchmark** costs.
- **Track** results post-investment.`, 'D'],

['Behavioral', 'Tell me about the most difficult people decision you\'ve made.',
`- Real example (e.g. removing a long-tenured manager).
- Your reasoning, how you handled it humanely, outcome for the team.
- What you learned.`, 'B'],

['Behavioral', 'How do you stay technical as a director?',
`- **Architecture reviews** participation.
- **Reading** design docs and postmortems.
- **Occasional** hands-on (prototyping, tooling) without blocking teams.
- **Learning** new technologies.
- **Conversations** with principals.`, 'B'],

['Org Design', 'How do you structure platform vs product teams?',
`- **Platform teams** provide self-service capabilities (infra, CI/CD, observability, data) as products with clear APIs.
- **Product teams** consume them, focusing on customer value.
- **Feedback loops** and roadmaps for platform.
- **Avoid** platform teams becoming ticket queues.`, 'D'],

['Strategy', 'How do you align engineering with company OKRs?',
`- **Translate** company objectives into engineering key results.
- **Teams** set OKRs contributing to them.
- **Visibility** of alignment.
- **Regular** reviews and adjustments.`, 'B'],

['AI', 'How would you measure the impact of AI coding tools on your org?',
`- **Before/after** baselines: cycle time, PR throughput, review time, defect rates.
- **Developer surveys** (satisfaction, perceived productivity).
- **Quality**: incidents, security findings.
- **Cost** vs benefit.
- Watch for confounders; use cohorts.`, 'D'],

['Behavioral', 'Describe how you\'ve grown an engineering organization rapidly.',
`- Example: 20 → 70 engineers in 18 months.
- **Hiring machine** (process, interviewers, recruiting partnership).
- **Onboarding** program.
- **Org design** evolution.
- **Leadership** hires and promotions.
- **Culture** preservation.
- Results and lessons.`, 'B'],

['Delivery', 'How do you handle technical program management?',
`- **TPMs** for complex cross-team programs.
- **Clear charters**, milestones, dependency tracking.
- **Risk** management and stakeholder updates.
- Engineering leaders remain accountable for outcomes.`, 'B'],

['Reliability', 'How do you prepare for peak events (e.g. Black Friday, product launches)?',
`- **Capacity planning** and load testing.
- **Code freezes** or change restrictions.
- **Runbooks** and war rooms.
- **Feature flags** for degradation.
- **On-call** staffing.
- **Post-event** review.`, 'B'],

['Stakeholders', 'How do you build trust with a new CTO or VP?',
`- **Understand** their priorities and style.
- **Deliver** early wins.
- **Transparent** about challenges.
- **Bring** solutions, not just problems.
- **Align** your org's plans with their vision.`, 'B'],

['Behavioral', 'What leadership lessons have shaped you most?',
`- Share 2–3 genuine lessons with stories, e.g.:
- "Clarity beats charisma" — teams need clear priorities.
- "Hire slow, act fast on problems."
- "Your team watches what you do under pressure."`, 'B']
]);
