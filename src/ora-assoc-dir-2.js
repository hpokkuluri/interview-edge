QB['ora-assoc-dir'] = (QB['ora-assoc-dir'] || []).concat([
['Delivery', 'How do you ensure quality in your team\'s deliverables?',
`- **Standards**: design templates, configuration workbooks, test evidence requirements.
- **Peer reviews** and design reviews before build.
- **Definition of done**: tested (including regression), documented, trained, approved.
- **Defect tracking** and root-cause analysis for escaped defects.
- **Automated tests** where possible.`, 'B'],

['Delivery', 'How do you handle a project that is slipping?',
`- **Diagnose**: scope growth, estimates, dependencies, resources, quality issues.
- **Options**: reduce scope (MVP), add resources (carefully), extend dates, change approach.
- **Re-plan** with the team; communicate to stakeholders with a recommendation.
- Track **leading indicators** going forward.`, 'B'],

['Delivery', 'What delivery methodology do you prefer for ERP enhancements?',
`- **Agile/iterative** for enhancements and continuous improvement: backlog, sprints, demos to business.
- **Hybrid** for larger programs: phase gates (design sign-off, UAT exit) with iterative build.
- **ERP specifics**: quarterly update cycles, month-end freeze periods, SOX change control.
- Pick what fits; focus on business engagement and quality.`, 'B'],

['Technical', 'How would you approach consolidating multiple approval workflows into a simpler design?',
`- **Inventory** current rules by transaction type and BU.
- **Analyze** actual approval data — who really approves, how often rules are used.
- **Design principles**: fewer rules, hierarchy-based with amount thresholds, exceptions by category.
- **Prototype** and test with business; document.
- **Communicate** and train approvers.
- Measure approval cycle time before/after.`, 'D'],

['Technical', 'How would you handle a request for a new report that finance needs urgently for an audit?',
`- Clarify **exact requirements** and deadline; check if a **standard report/OTBI** already covers it.
- Build quickly in **OTBI** (or BIP if formatting needed); validate completeness and accuracy with finance (**key report** validation if used as audit evidence).
- Document parameters and logic.
- Deliver and plan a proper version later if needed.`, 'B'],

['Technical', 'What is your approach to data quality in ERP master data (suppliers, customers, items)?',
`- **Ownership**: business data owners and stewards.
- **Entry controls**: required fields, validations, approval workflows (supplier registration, NIR).
- **Monitoring**: duplicate detection reports, completeness dashboards.
- **Cleanup** campaigns with targets.
- **Training** and feedback to requesters.`, 'B'],

['People', 'How do you manage a mixed team of employees, contractors and offshore partners?',
`- **One team culture**: shared goals, standups, recognition for all.
- **Clear roles**: who owns design, build, test, support.
- **Knowledge retention**: critical knowledge with employees; documentation.
- **Time zones**: overlap hours and handoffs.
- **Fair treatment** and inclusion in decisions.`, 'B'],

['People', 'How do you prevent burnout during go-lives and month-end crunches?',
`- **Plan** coverage and rotations; avoid single points of failure.
- **Realistic** schedules; defer non-critical work.
- **Recognize** extra effort; give time off after.
- Watch for signs and talk to people.
- Fix recurring crunch causes (automation, better processes).`, 'B'],

['People', 'How do you develop a future leader on your team?',
`- Identify potential: ownership, influence, judgment.
- **Delegate** leadership opportunities (lead a workstream, run a CRP, mentor juniors).
- **Coaching** on stakeholder management and decision-making.
- **Exposure** to senior meetings.
- **Feedback** and career conversations; sponsorship for promotion.`, 'B'],

['Stakeholders', 'How do you manage expectations when the business wants everything now?',
`- **Transparent backlog** and capacity.
- **Prioritization** with business owners against value.
- **Roadmap** with phased delivery.
- **Quick wins** where possible.
- Explain trade-offs openly; involve leaders in decisions.`, 'B'],

['Stakeholders', 'How do you handle an executive escalation about a system issue?',
`- **Acknowledge** quickly; understand impact.
- **Assign** owner and get facts.
- **Communicate** plan and timeline; update regularly.
- **Fix** and confirm with the executive.
- **Follow-up**: root cause and prevention; make sure the team learns, not panics.`, 'B'],

['Governance', 'How do you prioritize the backlog between business requests, technical debt and compliance?',
`- **Compliance/regulatory** and **security** first (non-negotiable dates).
- **Business value** scoring for requests.
- **Technical debt** allocated a fixed capacity (e.g. 15%).
- Transparent decisions with governance board.`, 'B'],

['Governance', 'How do you manage configuration changes safely in production?',
`- **Change request** with business approval.
- **Test** in non-production with evidence; regression for impacted areas.
- **Migration** via configuration packages or documented steps; segregation of duties.
- **Change window** outside close/payroll.
- **Validation** after deployment; rollback plan.`, 'D'],

['Technical', 'A key integration from a third-party system fails silently for three days. What do you change?',
`- **Monitoring**: alerts on failures and on **absence of expected data** (heartbeat checks).
- **Dashboards** visible to business owners.
- **Error handling** with notifications and retries.
- **Reconciliation** reports (source vs Oracle counts daily).
- **Runbook** and owners.`, 'D'],

['Technical', 'How would you approach a business request for AI automation in AP or procurement?',
`- Clarify the **problem and metric** (e.g. invoice processing time).
- Check **Oracle-native** capabilities (IDR, AI agents) first.
- **Pilot** with a defined scope, human review, measured outcomes.
- **Controls**: approvals, audit trail, security roles.
- **Scale** after success.`, 'D'],

['Strategy', 'How do you contribute to the ERP roadmap as Associate Director?',
`- Bring **business needs** from your area and **pain points** from support data.
- Evaluate **new Oracle features** relevant to your area.
- Propose initiatives with **value and effort** estimates.
- Align with the Director's priorities and enterprise strategy.`, 'B'],

['Behavioral', 'Tell me about a decision you made with incomplete information.',
`- **Situation**: whether to proceed with a quarterly update while one regression test was unresolved.
- **Action**: assessed risk (area impacted, workaround available), consulted business owner, agreed to proceed with a monitored workaround and Oracle SR.
- **Result**: no business impact; Oracle patch applied two weeks later.
- **Learning**: frame risk clearly and agree with the business owner.`, 'B'],

['Behavioral', 'What is your leadership style?',
`- Describe honestly with examples, e.g.: **coaching** and **empowering** — clear goals, trust the team to own solutions, step in during crises.
- High standards with **support**.
- **Transparent** communication.
- Adapt style to people and situations (more direction for new team members, more autonomy for experienced ones).`, 'B'],

['Behavioral', 'Why do you want to move into an Associate Director role?',
`- You've been leading informally (workstreams, mentoring) and want **broader impact** through a team.
- You enjoy **business partnership** and **developing people**.
- You still bring technical depth to keep delivery strong.
- Examples of results you achieved through others.`, 'B'],

['Behavioral', 'How do you handle a situation where your manager\'s direction conflicts with what the business wants?',
`- Understand both **perspectives** and the reasoning.
- Bring **data** on impacts.
- Discuss openly with your manager first; propose a path.
- If needed, facilitate a conversation between your manager and the business.
- Once decided, commit and execute.`, 'B'],

['Delivery', 'How do you measure the success of your ERP team?',
`- **Service**: SLA attainment, incident trends.
- **Delivery**: projects on time/scope, enhancement throughput.
- **Quality**: defects, failed changes.
- **Business outcomes**: e.g. close days, touchless rates.
- **Team**: engagement, retention, skills growth.
- **Stakeholder satisfaction**.`, 'B'],

['Technical', 'How would you approach a request to add a new business unit to Oracle?',
`- **Requirements**: legal entity, ledger, currency, tax, banking, processes.
- **Setup**: BU, functions, reference data, approvals, security, sequences, payment profiles.
- **Integrations** and reports updates.
- **Data**: suppliers/customers site assignments, open balances.
- **Testing** end-to-end; **training**; **go-live** plan.
- Use a **checklist/template** for repeatable onboarding.`, 'D'],

['Support', 'How do you reduce repeat incidents?',
`- **Problem management**: track recurring incidents, root-cause analysis.
- **Permanent fixes** (config, data, training, automation).
- **Knowledge articles** and user self-service.
- **Monitoring** for early detection.
- Review top incident categories monthly.`, 'B'],

['Behavioral', 'Describe a time you influenced a decision without formal authority.',
`- **Situation**: procurement wanted to keep manual PO approvals for all amounts.
- **Action**: analyzed 12 months of POs, showed 85% were under $2k with no rejections, proposed auto-approval under threshold with monthly review.
- **Result**: approved; PO cycle time dropped from 3 days to same day for most POs.`, 'B'],

['Strategy', 'What trends in ERP will matter most for your team in the next two years?',
`- **AI agents** in Fusion (AP, procurement, collections, close).
- **Redwood UX** adoption and extensions with Visual Builder.
- **Continuous close** and automation.
- **Data and analytics** (FDI).
- **Regulatory digitization** (e-invoicing).
- Skills shift: from configuration to automation and data.`, 'B'],

['Delivery', 'How do you run a successful UAT with business users?',
`- **Plan** scenarios with business owners; realistic data.
- **Train** testers; give clear scripts and support.
- **Daily triage** of defects; transparent status.
- **Exit criteria** agreed upfront.
- **Sign-off** formally.`, 'B']
]);
