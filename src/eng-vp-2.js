QB['eng-vp'] = (QB['eng-vp'] || []).concat([
['People', 'How do you build a strong engineering employer brand?',
`- **Interesting problems** and impact communicated publicly (blog, talks, open source).
- **Great candidate experience**.
- **Strong culture** reflected in reviews.
- **Engineers as ambassadors**.
- **Competitive** compensation and growth.`, 'B'],

['People', 'How do you retain senior engineering talent?',
`- **Challenging work** and autonomy.
- **Career growth** (staff/principal paths).
- **Recognition** and visibility.
- **Compensation** reviews and equity refreshes.
- **Strong managers**.
- **Stay interviews** and acting on feedback.`, 'B'],

['People', 'How do you handle attrition spikes?',
`- **Analyze** exit interviews and surveys for causes (managers, compensation, workload, culture, strategy).
- **Act** on root causes quickly.
- **Retention** plans for critical people.
- **Communicate** transparently.
- Track monthly.`, 'B'],

['Delivery', 'How do you set up planning processes for a large engineering organization?',
`- **Annual** strategy and investment themes.
- **Quarterly** planning with OKRs.
- **Lightweight** cross-team dependency management.
- **Roadmap** visibility for stakeholders.
- **Flexibility** for change with clear trade-off process.`, 'B'],

['Delivery', 'What engineering metrics do you report to the executive team?',
`- **Delivery**: roadmap progress, cycle time, deployment frequency.
- **Quality/reliability**: availability, incidents, change failure rate.
- **Efficiency**: cloud cost per unit, engineering spend as % of revenue.
- **People**: headcount, attrition, hiring, engagement.
- **Security**: vulnerability SLAs.
Keep a small, stable set.`, 'D'],

['Technical', 'How do you ensure architectural coherence across many teams?',
`- **Architecture council** of principals.
- **Technical strategy** and principles.
- **Reference architectures** and golden paths.
- **RFC/review** process for major changes.
- **Tech radar**.
- Balance team autonomy with standards.`, 'B'],

['Technical', 'How do you lead a cloud migration at scale?',
`- **Business case** (agility, cost, resilience).
- **Assessment** and migration strategies (rehost, replatform, refactor).
- **Landing zone** and platform team.
- **Waves** with teams; migration factory.
- **FinOps** from the start.
- **Decommission** on-prem and track savings.`, 'D'],

['Reliability', 'How do you lead during a major customer-impacting outage?',
`- **Incident command** structure; you support, don't micromanage.
- **Customer communication** with support/marketing.
- **Executive updates**.
- **After**: blameless postmortem, systemic fixes, customer follow-up.
- **Protect** the team from blame.`, 'B'],

['Stakeholders', 'How do you handle a conflict with the CTO on technical direction?',
`- **Private** discussion with data and options.
- **Understand** their vision.
- **Agree** on decision rights.
- **Commit** publicly to decisions.
- Escalate to CEO only for fundamental disagreements affecting the business.`, 'B'],

['Stakeholders', 'How do you handle sales commitments made without engineering input?',
`- **Assess** feasibility and impact.
- **Discuss** with sales/product leadership.
- **Options**: partial delivery, timeline, alternatives.
- **Process fix**: engineering/product input before commitments; deal desk for custom requests.`, 'B'],

['Finance', 'How do you reduce engineering costs without hurting delivery?',
`- **Cloud optimization** (FinOps).
- **Tool consolidation**.
- **Location** mix.
- **Contractor** reduction where internal capability exists.
- **Productivity** improvements (platform, automation).
- **Stop** low-value projects.`, 'D'],

['Strategy', 'How do you balance innovation with operational excellence?',
`- **Portfolio** allocation (e.g. 70% core, 20% adjacent, 10% exploratory).
- **Strong operations** foundation enables innovation.
- **Innovation** processes (experiments, hack weeks, incubation teams).
- **Measure** both.`, 'B'],

['Strategy', 'How do you handle build vs buy at the company level?',
`- **Core competencies** → build.
- **Commodity** capabilities → buy/SaaS.
- **TCO**, time to market, vendor risk.
- **Integration** strategy.
- Governance for major decisions.`, 'B'],

['Culture', 'How do you create accountability without fear?',
`- **Clear ownership** and expectations.
- **Blameless** learning from failures.
- **High standards** with support.
- **Leaders own** failures publicly.
- **Recognize** both outcomes and good decisions.`, 'B'],

['Culture', 'How do you keep startup agility as the company grows?',
`- **Small autonomous teams**.
- **Minimal process** — add only when it solves a problem.
- **Fast decision-making** with clear decision rights.
- **Platform** to reduce friction.
- **Customer** closeness for engineers.`, 'B'],

['AI', 'How do you prepare the engineering organization for AI-driven change?',
`- **Upskilling** at scale.
- **Platforms** for AI development (model gateways, evaluation, guardrails).
- **Policies** for AI usage.
- **Role evolution** (more design, review, orchestration).
- **Experiments** and sharing.`, 'D'],

['Behavioral', 'Tell me about a time you had to rebuild trust with the business.',
`- Situation: repeated missed launches.
- Actions: transparent assessment, realistic re-planning, regular updates, delivered smaller milestones, improved predictability metrics.
- Result: restored confidence; process changes.`, 'B'],

['Behavioral', 'How do you develop yourself as an executive?',
`- **Coach/mentor**.
- **Peer networks** of other VPs/CTOs.
- **Feedback** (360s).
- **Reading** and learning.
- **Reflection** on decisions.`, 'B'],

['Behavioral', 'What is your leadership philosophy?',
`- Concise, authentic, with examples. E.g.:
- **Clarity**: everyone knows priorities and why.
- **Empowerment**: trust teams with ownership.
- **Standards**: high bar with support.
- **People first**: growth and wellbeing drive results.`, 'B'],

['Org', 'When do you introduce new leadership layers?',
`- When **span of control** exceeds what managers can support (e.g. >8 direct reports).
- When **complexity** requires dedicated leadership.
- Introduce gradually; promote internally when ready; communicate rationale.`, 'B'],

['Hiring', 'What do you look for when hiring engineering directors?',
`- **Track record** of leading managers and delivering outcomes.
- **People leadership** (developing managers, culture).
- **Technical judgment**.
- **Cross-functional** partnership.
- **Strategic** thinking.
- **Values** alignment.`, 'B'],

['Strategy', 'How do you approach technology risk (vendor lock-in, legacy, security)?',
`- **Risk register** with likelihood/impact.
- **Mitigations** (multi-vendor where it matters, modernization roadmap, security investments).
- **Regular** review with executives.
- **Incident** preparedness.`, 'B'],

['Delivery', 'How do you ensure engineering supports a major product launch?',
`- **Cross-functional** launch plan.
- **Readiness** reviews (scalability, reliability, security, support).
- **Feature flags** and gradual rollout.
- **War room** and monitoring.
- **Post-launch** review.`, 'B'],

['Behavioral', 'Describe a time you scaled yourself through delegation.',
`- Identified areas to delegate (e.g. hiring process, operational reviews).
- Developed leaders to own them.
- Focused own time on strategy and executive partnership.
- Result: org scaled; leaders grew.`, 'B'],

['Behavioral', 'What would your team say is your biggest weakness?',
`- Honest and real, with mitigation. e.g. "I can move too fast on decisions; I now explicitly ask for dissent and give time for input on big calls."`, 'B']
]);
