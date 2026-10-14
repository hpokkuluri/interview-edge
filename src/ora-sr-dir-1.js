// Senior Director, ERP. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['ora-sr-dir'] = (QB['ora-sr-dir'] || []).concat([
['Role', 'How is the Senior Director role different from a Director in ERP?',
`- **Portfolio scope**: ERP plus adjacent platforms (EPM, HCM, procurement networks, integration, analytics) — often enterprise-wide.
- **Larger organization**: multiple directors/managers, 50–150 people incl. partners; budgets in the tens of millions.
- **Strategy and transformation** ownership; multi-year roadmaps.
- **Executive partnership** with CFO, COO, CHRO; board/audit committee exposure.
- **Operating model** design (product/platform teams).
- **Talent strategy** and leadership bench.`, 'B'],

['Strategy', 'How would you develop an enterprise applications strategy for the next 3–5 years?',
`- **Business strategy** inputs: growth, M&A, operating model (GBS), margin goals, risk.
- **Current state**: platforms, cost, technical debt, capability gaps, satisfaction.
- **Principles**: cloud-first, platform consolidation, standard processes, data as an asset, AI-enabled, secure by design.
- **Target architecture** and capability map.
- **Roadmap** with investment waves and value milestones.
- **Operating model** and talent plan.
- **Funding** and governance; KPIs.`, 'D'],

['Strategy', 'How do you align the ERP roadmap with business strategy?',
`- Translate **business objectives** into capabilities (e.g. "expand into 5 countries" → localizations, template rollout).
- **Joint planning** with business leaders annually and quarterly.
- **Value-based prioritization** with clear outcomes.
- **Portfolio view** across programs.
- **Track and report** benefits.`, 'B'],

['Operating Model', 'Would you organize enterprise applications by product/platform teams or by project? Why?',
`- **Product/platform model**: long-lived teams aligned to business capabilities (R2R, P2P, O2C, Plan, Hire-to-Retire) with product owners — continuous improvement, deep knowledge, accountability for outcomes.
- **Project model**: temporary teams for large programs — good for big transformations.
- Typical answer: **product model for run and evolve**, **program overlay** for major transformations, with shared platform teams (integration, data, security).
- Funding moves from projects to **capacity-based** product funding.`, 'D'],

['Operating Model', 'How do you design a Global Business Services–aligned enterprise applications team?',
`- **Process ownership** in GBS (business), **platform ownership** in IT, joint governance.
- **Shared roadmap** for automation (AI agents, workflow).
- **Service catalog** and SLAs.
- **Co-located or aligned** teams in GBS hubs.
- KPIs tied to GBS outcomes (cost per transaction, quality).`, 'D'],

['Finance', 'How do you manage a $30M enterprise applications budget?',
`- **Portfolio split**: run (licenses, support, infrastructure) vs change (projects) vs innovation.
- **Benchmark** costs (per user, per transaction) vs peers.
- **Optimize**: license rationalization, vendor consolidation, automation, location strategy.
- **Investment governance**: business cases, stage gates, benefits tracking.
- **Monthly** financial reviews; **variance** management; transparent reporting to CIO/CFO.`, 'D'],

['Finance', 'How do you negotiate a large Oracle renewal or expansion?',
`- **Know your usage** and needs (current and roadmap) — avoid shelfware.
- **Leverage timing** (Oracle fiscal year-end), competition, multi-year commitments.
- **Bundle** needed products (EPM, FDI, OIC) with price protections and caps on increases.
- **Contract terms**: flexibility to swap/reduce, support terms, SLAs.
- **Procurement and legal** partnership; executive sponsorship.`, 'D'],

['Vendors', 'How do you build a strategic partner ecosystem for enterprise applications?',
`- **Tiered partners**: strategic SI for transformation, AMS partner for run, niche specialists.
- **Clear roles** to avoid overlap and finger-pointing.
- **Performance management** with KPIs and QBRs.
- **Innovation** expectations (accelerators, AI).
- **Knowledge ownership** retained internally.
- **Competitive tension** without churn.`, 'B'],

['Transformation', 'How would you lead a global ERP transformation across 30 countries?',
`- **Executive sponsorship** (CFO/COO) and a clear **case for change**.
- **Global template** with process owners; design authority.
- **Phased rollout** (pilot, then waves) with a rollout factory.
- **Data and integration** programs started early.
- **Change management** at scale: country leads, super users, communications.
- **Program governance**: steering committees, PMO, risk management, benefits tracking.
- **Talent**: strong program leadership; retain key people.`, 'D'],

['Transformation', 'How do you manage organizational change and resistance in a large ERP transformation?',
`- **Leadership alignment**: leaders visibly champion the change.
- **Stakeholder mapping** and engagement plans.
- **Change network**: champions in each business area.
- **Communication**: why, what, when, how it affects me.
- **Training** role-based and timely.
- **Address resistance** by listening, involving, adjusting where reasonable, holding firm on principles.
- **Measure** readiness and adoption.`, 'B'],

['Executive', 'How do you report to the audit committee or board on ERP risk and programs?',
`- **Concise**: program status, top risks, controls status, cybersecurity posture, major incidents.
- **Business language**; implications for financial reporting and operations.
- **Mitigations** and decisions needed.
- **Prepared** with the CFO/CIO and internal audit; no surprises.`, 'D'],

['Executive', 'How do you build credibility with the C-suite?',
`- **Deliver** on commitments.
- **Understand** the business deeply (P&L, operations).
- **Bring insights** (data, benchmarks, opportunities).
- **Candor** about risks.
- **Concise communication**.
- **Relationships** beyond formal meetings.`, 'B'],

['People', 'How do you build a leadership bench in a large organization?',
`- **Identify** high-potentials; succession plans for key roles.
- **Development**: stretch assignments, rotations, coaching, leadership programs.
- **Delegate** real decisions.
- **Feedback** and sponsorship.
- **Diverse** pipeline.
- **Measure**: internal promotion rate, readiness of successors.`, 'B'],

['People', 'How do you shape culture in an enterprise applications organization?',
`- **Values** made concrete: customer focus (business), ownership, quality, learning, collaboration.
- **Leaders model** behaviors.
- **Rituals**: demos, retrospectives, recognition.
- **Hiring and promotion** reflect values.
- **Address** behaviors that conflict, even from high performers.`, 'B'],

['People', 'How would you restructure an organization that is siloed by technology rather than business process?',
`- **Design** teams around end-to-end business capabilities (e.g. P2P including procurement, AP, integrations).
- **Shared services** for platforms (integration, data, security).
- **Transition plan**: communicate rationale, involve leaders, phase changes, support people through role changes.
- **Measure** outcomes (cycle times, satisfaction).`, 'D'],

['Risk', 'How do you approach cybersecurity for ERP and enterprise applications?',
`- Partner with **CISO**: shared responsibility model for SaaS.
- **Identity**: SSO, MFA, privileged access management, joiner-mover-leaver automation.
- **Data protection**: encryption, masking, DLP.
- **Integration security**: OAuth, secret management, least privilege.
- **Monitoring**: logs to SIEM, anomaly detection.
- **Third-party risk** for partners with access.
- **Incident response** playbooks including ERP.`, 'D'],

['Risk', 'How do you prepare for a major ERP outage or ransomware scenario?',
`- **Business impact analysis**: critical processes and maximum tolerable downtime.
- **SaaS resilience** (Oracle DR) plus your **integrations, extensions, data exports**.
- **Manual workarounds** for payments, payroll, shipping.
- **Backup** of critical data and configurations outside the platform.
- **Tabletop exercises** with business and security.
- **Communication** plans.`, 'D'],

['AI', 'How would you lead an enterprise AI program for back-office processes?',
`- **Vision**: augment teams, automate routine work, improve insight.
- **Portfolio** of use cases across finance, procurement, supply chain, HR — scored by value and risk.
- **Platforms**: embedded AI in Oracle first; enterprise AI platform for cross-system use.
- **Governance**: responsible AI policy, risk tiers, human oversight, audit trails.
- **Data foundations**.
- **Workforce impact** planning and reskilling.
- **Value tracking**.`, 'D'],

['Data', 'How do you make enterprise data a strategic asset across ERP, HCM and SCM?',
`- **Data strategy** with business ownership.
- **Unified data platform** (FDI + enterprise lake) with governed models.
- **Master data management** across domains.
- **Data quality** and lineage.
- **Self-service analytics** with governance.
- **AI-readiness**: clean, accessible, secure data.`, 'B'],

['M&A', 'How do you prepare enterprise applications to support frequent acquisitions?',
`- **M&A playbook**: due diligence checklist, Day-1 requirements, integration options.
- **Template-based** onboarding for entities, data, integrations.
- **Dedicated integration team** or partner.
- **Reusable assets** and timelines (e.g. 90/180 days).
- **Synergy tracking** with finance.
- Lessons learned after each deal.`, 'D'],

['Transformation', 'How do you measure the success of a multi-year transformation?',
`- **Business outcomes**: cost reduction, working capital, close speed, service levels.
- **Platform outcomes**: legacy retired, stability, technical debt.
- **Adoption** and satisfaction.
- **Program health**: budget, schedule, scope.
- **Benefits realization** tracked against business case with finance validation.`, 'B'],

['Behavioral', 'Tell me about a time you had to make a tough call that was unpopular.',
`- **Situation**: e.g. stopping a regional custom billing system rebuild in favor of global template.
- **Reasoning**: cost, risk, strategic alignment.
- **Handling**: explained rationale, listened, offered support/alternatives, executive alignment.
- **Result**: long-term outcome (cost savings, standardization) and how relationships recovered.`, 'B'],

['Behavioral', 'How do you handle a peer executive who undermines your program?',
`- **Understand** their concerns and incentives privately.
- **Find common goals**; involve them in decisions.
- **Data and transparency** to address misconceptions.
- If needed, **escalate** constructively through the sponsor with facts.
- Keep professional; focus on outcomes.`, 'B']
]);
