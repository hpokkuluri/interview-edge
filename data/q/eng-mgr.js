// eng-mgr — generated from src/eng-mgr-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Engineering Manager. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['eng-mgr'] = (QB['eng-mgr'] || []).concat([
['Role', 'What does a great engineering manager do?',
`- **People**: hires well, grows engineers, gives clear feedback, builds a healthy team.
- **Delivery**: team ships reliably with quality; removes blockers; manages scope.
- **Technical judgment**: enough depth to guide decisions and assess risk.
- **Partnership**: works with product, design and stakeholders on priorities.
- **Process**: lightweight practices that help, not hinder.
- **Culture**: psychological safety, ownership, learning.`, 'B'],

['Role', 'How hands-on should an engineering manager be?',
`- Depends on team size and stage: small teams may need some coding; larger teams need full-time management.
- Stay **technically credible**: review designs, understand architecture, occasionally pair or fix small things.
- **Avoid** being on the critical path for features — it blocks the team and your management duties.`, 'B'],

['People', 'How do you run effective 1:1s?',
`- **Weekly or biweekly**, owned by the engineer's agenda.
- Topics: wellbeing, blockers, feedback (both ways), career growth, context sharing.
- **Listen** more than talk; take notes; follow up on commitments.
- Don't turn them into status meetings.`, 'B'],

['People', 'How do you give difficult feedback?',
`- **Timely and private**.
- **Specific behavior** and **impact** (SBI model), not personality.
- Ask for their perspective.
- Agree on **next steps** and support.
- Follow up; recognize improvement.`, 'B'],

['People', 'How do you handle an underperforming engineer?',
`- **Clarify expectations** and gaps with examples.
- **Diagnose causes**: skills, motivation, personal issues, unclear goals, wrong role.
- **Support plan** with measurable goals and timeline (coaching, pairing, training).
- **Document** progress.
- If no improvement, **formal performance plan** with HR; respectful exit if needed.
- Protect the team's standards.`, 'B'],

['People', 'How do you grow engineers\' careers?',
`- **Career ladders** with clear expectations.
- **Development plans** aligned to their goals.
- **Stretch assignments**, mentoring, sponsorship.
- **Regular career conversations** separate from performance.
- **Promotion cases** built with evidence over time.`, 'B'],

['People', 'How do you hire for your team?',
`- **Define** the role and competencies.
- **Structured interviews** with rubrics: coding, system design (for seniors), behavioral, collaboration.
- **Diverse panels** and reduce bias.
- **Candidate experience**: timely, respectful, informative.
- **Calibrate** decisions; hire for team gaps and growth potential.
- **Onboarding** plan ready.`, 'B'],

['People', 'How do you retain top engineers?',
`- **Meaningful work** and autonomy.
- **Growth** opportunities and recognition.
- **Fair compensation** — advocate with data.
- **Good team culture** and manager relationship.
- **Stay conversations** to catch risks early.`, 'B'],

['Delivery', 'How do you ensure your team delivers predictably?',
`- **Clear priorities** with product.
- **Small batches** and incremental delivery.
- **Estimates as ranges**; track throughput rather than story points obsessively.
- **Limit WIP**; manage dependencies early.
- **Risks surfaced** early with options.
- **Retrospectives** to improve.`, 'B'],

['Delivery', 'Your team is going to miss a committed deadline. What do you do?',
`- **Confirm** facts and reasons.
- **Options**: cut scope (MVP), add time, accept quality trade-offs (rarely), get help.
- **Communicate early** to stakeholders with recommendation.
- **Learn** — estimation, dependencies, interruptions.
- Avoid burning the team out to hit an arbitrary date.`, 'B'],

['Delivery', 'How do you balance feature work, tech debt and operational work?',
`- **Visible allocation** (e.g. 70/20/10) agreed with product.
- **Tie tech debt** to business outcomes (velocity, incidents).
- **On-call/ops** load measured; reduce toil.
- Adjust allocation based on incident trends and roadmap needs.`, 'B'],

['Delivery', 'Which metrics do you use to understand team health and performance?',
`- **DORA**: deployment frequency, lead time, change failure rate, MTTR.
- **Flow**: cycle time, WIP, throughput.
- **Quality**: escaped defects, incidents.
- **Team health**: engagement surveys, on-call load, attrition.
- Use metrics for learning, not punishment; avoid individual productivity metrics.`, 'D'],

['Technical', 'How do you make technical decisions with your team?',
`- **Empower** senior engineers/tech leads to drive decisions.
- **Design docs/RFCs** for significant changes; reviews.
- **Criteria** clear (requirements, constraints).
- **Disagree and commit** after discussion.
- Step in when risk is high or the team is stuck.`, 'B'],

['Technical', 'How do you maintain quality in a fast-moving team?',
`- **Automated testing** and CI gates.
- **Code reviews** with standards.
- **Observability** and alerting.
- **Incident learning** (postmortems).
- **Definition of done** includes tests, docs, monitoring.
- Celebrate quality work, not just features.`, 'B'],

['Operations', 'How do you run on-call sustainably?',
`- **Fair rotation** with enough people; primary/secondary.
- **Actionable alerts** only; reduce noise.
- **Runbooks** for common issues.
- **Compensation/time off** after heavy shifts.
- **Postmortems** to eliminate recurring incidents.
- Track on-call load as a health metric.`, 'B'],

['Operations', 'Walk me through how you handle a major production incident.',
`- **Incident commander** assigned; roles (communications, technical lead).
- **Mitigate first** (rollback, feature flag, scale).
- **Communicate** regularly to stakeholders.
- **Resolve** and verify.
- **Blameless postmortem** with action items.
- Follow through on actions.`, 'B'],

['Stakeholders', 'How do you work with product managers?',
`- **Shared goals** and roadmap; joint planning.
- **Engineering input** early (feasibility, tech opportunities).
- **Clear roles**: PM owns what/why, eng owns how/when (with collaboration).
- **Healthy tension** resolved through data and customer focus.
- Regular syncs.`, 'B'],

['Stakeholders', 'How do you say no to a stakeholder request?',
`- Understand the **underlying need**.
- Explain **trade-offs** (what would be delayed).
- Offer **alternatives** or a smaller version.
- Use **prioritization frameworks** with product.
- Escalate to leadership for priority conflicts.`, 'B'],

['Culture', 'How do you build psychological safety in a team?',
`- **Model** vulnerability (admit mistakes).
- **Blameless** culture for incidents.
- **Encourage** questions and dissent; respond with curiosity.
- **Inclusive** meetings (everyone heard).
- **Act** on feedback.`, 'B'],

['Culture', 'How do you foster ownership in your team?',
`- **Clear areas** of ownership (services, features).
- **Autonomy** in how they solve problems.
- **Accountability** for outcomes, including operations ("you build it, you run it").
- **Recognition** of initiative.
- **Context sharing** so they can make good decisions.`, 'B'],

['Behavioral', 'Tell me about a time you resolved conflict between engineers.',
`- **Situation**: two seniors disagreed on database choice, slowing the project.
- **Action**: had each write a short comparison against agreed criteria; facilitated a discussion; decided with the tech lead; documented the decision.
- **Result**: moved forward; relationship preserved; introduced lightweight RFC process.`, 'B'],

['Behavioral', 'Tell me about a hire you regret and what you learned.',
`- Be honest: e.g. hired for technical brilliance despite collaboration concerns.
- What happened, how you handled it.
- **Learning**: structured evaluation of collaboration; trust signals from references; stronger onboarding expectations.`, 'B'],

['Behavioral', 'Why do you want to be an engineering manager?',
`- **Multiply impact** through others.
- **Enjoy** growing people and building teams.
- **Experience** leading informally (tech lead, mentoring).
- **Understand** the trade-off: less coding, more people work — and you want that.`, 'B'],

['Behavioral', 'How do you handle a team member who wants a promotion they\'re not ready for?',
`- **Listen** and acknowledge ambition.
- **Be specific** about gaps vs the next level's expectations.
- **Create a plan** with opportunities to demonstrate those behaviors.
- **Follow up** regularly; advocate when ready.`, 'B'],

['Delivery', 'How do you plan a quarter with your team?',
`- **Inputs**: company/product goals, customer needs, tech debt, ops load.
- **Capacity** realistic (vacations, on-call).
- **Prioritize** outcomes (OKRs) with product.
- **Break down** into milestones; identify dependencies and risks.
- **Leave buffer** for unplanned work.
- Review mid-quarter.`, 'B']
]);

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
