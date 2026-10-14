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
