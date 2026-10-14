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
