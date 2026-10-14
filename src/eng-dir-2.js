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
