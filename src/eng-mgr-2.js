QB['eng-mgr'] = (QB['eng-mgr'] || []).concat([
['People', 'How do you onboard a new engineer effectively?',
`- **Pre-boarding**: accounts, laptop, access ready on day one.
- **Buddy** assigned.
- **30/60/90-day plan** with learning goals and a first small production change in week one or two.
- **Context**: architecture overview, team norms, customers.
- **Regular check-ins**; gather feedback to improve onboarding.`, 'B'],

['People', 'How do you manage remote or distributed teams?',
`- **Overlap hours** and async communication norms (written docs, recorded demos).
- **Clear goals** and outcomes rather than presence.
- **Rituals** for connection (virtual coffees, offsites).
- **Inclusive** meeting practices across time zones.
- **Documentation** culture.`, 'B'],

['People', 'How do you support engineer wellbeing and prevent burnout?',
`- **Sustainable pace**; realistic commitments.
- **Watch signals** (overtime, irritability, disengagement).
- **Encourage** time off; managers model it.
- **Reduce toil** and interruptions.
- **Talk openly** in 1:1s.`, 'B'],

['People', 'How do you handle compensation conversations?',
`- **Know** the company bands and process.
- **Advocate** with data (market, performance, impact).
- **Be transparent** about how decisions are made.
- **Don't promise** what you can't deliver.
- Separate compensation discussion from routine feedback.`, 'B'],

['Technical', 'How do you evaluate the technical health of a team\'s systems?',
`- **Incident trends** and on-call load.
- **Deployment metrics** (DORA).
- **Test coverage** of critical paths and flaky tests.
- **Dependency freshness** and security vulnerabilities.
- **Architecture** pain points from engineers.
- **Cost** trends.`, 'B'],

['Technical', 'How would you approach a major refactor or rewrite request from your team?',
`- **Understand** the pain and business impact.
- **Prefer incremental** refactoring (strangler) over rewrites.
- **Business case**: velocity, reliability, cost.
- **Plan** milestones that deliver value along the way.
- **Agree** with product and leadership on capacity.`, 'D'],

['Delivery', 'How do you manage cross-team dependencies?',
`- **Identify early** during planning.
- **Agree** interfaces and timelines with other teams.
- **Track** in shared boards; regular syncs.
- **Decouple** where possible (contracts, mocks, feature flags).
- **Escalate** conflicts in priorities.`, 'B'],

['Delivery', 'What does agile mean to you in practice?',
`- **Deliver value in small increments**, get feedback, adapt.
- Lightweight ceremonies that serve the team (planning, standups, demos, retros).
- **Customer focus** and collaboration over rigid process.
- Continuous improvement.
- Avoid process for its own sake.`, 'B'],

['Stakeholders', 'How do you communicate engineering progress to non-technical leaders?',
`- **Outcomes** (customer impact) over tasks.
- **Simple status**: on track/at risk with reasons.
- **Visuals** (roadmaps, milestones).
- **Risks** with options.
- Regular cadence.`, 'B'],

['Stakeholders', 'How do you handle pressure to cut corners on quality?',
`- **Make trade-offs explicit** (risk of incidents, rework cost).
- **Propose** scope reduction instead of quality reduction.
- **Agree** on any temporary debt with a payback plan.
- **Protect** security and data integrity — non-negotiable.`, 'B'],

['Culture', 'How do you build an inclusive team?',
`- **Diverse hiring** pipelines and structured interviews.
- **Fair** distribution of high-visibility work.
- **Inclusive** meetings and decision-making.
- **Address** non-inclusive behavior promptly.
- **Measure** engagement across groups.`, 'B'],

['Culture', 'How do you encourage learning and innovation?',
`- **Time** for learning (e.g. hack days, learning budget).
- **Share** knowledge (tech talks, writing).
- **Safe experiments** with feature flags.
- **Celebrate** learning from failures.`, 'B'],

['AI', 'How would you introduce AI tools into your team\'s workflow?',
`- **Pilot** coding assistants with volunteers; measure (cycle time, quality, satisfaction).
- **Guidelines**: security, IP, review requirements.
- **Training** and sharing tips.
- **Look beyond code**: test generation, documentation, incident summaries.
- Watch for over-reliance and quality issues.`, 'D'],

['Behavioral', 'Tell me about a project that failed and what you learned.',
`- Honest example with your role.
- What went wrong (scope, assumptions, dependencies).
- How you responded.
- Concrete changes you made afterwards.`, 'B'],

['Behavioral', 'Describe a time you had to make an unpopular decision for your team.',
`- **Example**: moving the team to on-call ownership of their services.
- **Why**: reliability and ownership.
- **How**: involved the team in designing the rotation, fixed noisy alerts first, added compensation and runbooks.
- **Result**: incident response improved; acceptance grew.`, 'B'],

['Behavioral', 'How do you handle a high performer who is toxic to the team?',
`- **Address behavior** directly with examples and impact.
- **Clear expectations**: how results are achieved matters.
- **Support** (coaching) with timeline.
- **Consequences** if no change — the team's health is more important than one individual.`, 'B'],

['Behavioral', 'How do you manage your own time as an engineering manager?',
`- **Prioritize** people and team-level impact.
- **Block** focus time for planning and strategy.
- **Delegate** and grow leads.
- **Limit** meetings; prefer async updates.
- **Weekly review** of priorities.`, 'B'],

['Operations', 'How do you reduce operational toil?',
`- **Measure** toil (repetitive manual work).
- **Automate** frequent tasks.
- **Fix** root causes of recurring incidents.
- **Self-service** for common requests.
- Allocate capacity to toil reduction.`, 'B'],

['Delivery', 'How do you use OKRs with your team?',
`- **Objectives** aligned to company/product goals.
- **Key results** measurable outcomes (not task lists).
- **Team input** in setting them.
- **Review** progress regularly; adjust.
- Don't tie them directly to individual performance ratings.`, 'B'],

['Technical', 'How do you handle security vulnerabilities in your team\'s services?',
`- **Scanning** in CI (dependencies, containers, code).
- **Triage** by severity and exploitability with SLAs.
- **Patch** promptly; automate dependency updates.
- **Learn** from incidents.
- Work with security team.`, 'B'],

['People', 'How do you identify and develop a tech lead?',
`- Look for **ownership, technical judgment, communication, helping others**.
- Give **leadership opportunities** (lead a project, run design reviews).
- **Coach** on influence and delegation.
- **Clarify** the tech lead role vs manager role.
- Provide feedback and support.`, 'B'],

['Stakeholders', 'How do you handle a product manager who keeps changing priorities mid-sprint?',
`- **Understand** the reasons (customer escalations, unclear strategy).
- **Show impact** of churn on delivery.
- **Agree** on a process for urgent changes (with trade-offs).
- **Improve** planning together.
- Escalate if systemic.`, 'B'],

['Behavioral', 'What would your team say about you as a manager?',
`- Aim for: supportive, clear, fair, technically credible, protects the team, helps them grow.
- Support with real feedback examples.
- Mention an area you're improving.`, 'B'],

['Delivery', 'How do you scope an MVP with product?',
`- Start from the **customer problem** and success metrics.
- **Smallest** set of functionality to learn or deliver value.
- **Cut** nice-to-haves; keep quality/security.
- **Instrument** to learn.
- Plan iterations.`, 'B'],

['People', 'How do you conduct performance reviews fairly?',
`- **Evidence** collected throughout the year.
- **Clear criteria** from the career ladder.
- **Peer feedback**.
- **Calibration** across managers.
- **Separate** growth feedback from rating rationale; no surprises.`, 'B']
]);
