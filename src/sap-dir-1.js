// Director / VP, SAP Program. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['sap-dir'] = (QB['sap-dir'] || []).concat([
['Role', 'What does a Director/VP of an SAP program own?',
`- **Program outcomes**: business value, scope, timeline, budget, quality.
- **Governance**: steering committee, design authority, PMO, risk management.
- **Stakeholders**: executive sponsors, business process owners, country leaders.
- **Partners**: SI, SAP (RISE, MaxAttention/Enterprise Support), specialists.
- **People**: internal team leadership, change management, training.
- **Transition to run**: support model, CoE.`, 'B'],

['Strategy', 'How would you build the case for moving from ECC to S/4HANA?',
`- **Drivers**: ECC end of mainstream maintenance (2027), innovation (AI, real-time analytics), process simplification, cloud operating model.
- **Value**: efficiency, working capital, close speed, better planning, reduced custom code.
- **Costs**: RISE subscription, implementation, internal resources, change.
- **Approach** choice (greenfield/brownfield/SDT) affects cost and value.
- **Roadmap** and risk analysis.
- Present NPV and non-financial benefits.`, 'D'],

['Strategy', 'How do you evaluate RISE with SAP for your company?',
`- **Scope** of bundle: S/4 Private Cloud, infrastructure, technical managed services, BTP credits, Signavio, Business Network starter.
- **Cost comparison** vs current run costs (infrastructure, Basis, hosting) over 5+ years.
- **RACI** clarity: what SAP does vs you.
- **Contract terms**: FUE growth, price protections, exit, SLAs.
- **Hyperscaler** choice and data residency.
- Negotiate with clear requirements.`, 'D'],

['Governance', 'How do you structure governance for a global S/4 program?',
`- **Executive steering committee** (CFO/COO/CIO, SI and SAP executives) — monthly.
- **Program board** — weekly decisions.
- **Design authority** — template integrity, deltas.
- **Workstream leads** with business process owners.
- **PMO** — plan, RAID, financials, reporting.
- **Change control** board for scope.
- **Quality assurance** (SAP Value Assurance or independent QA).`, 'D'],

['Delivery', 'How do you choose and contract an SI for S/4?',
`- **RFP** with requirements, approach expectations (Activate, clean core), industry experience.
- **Evaluate** team quality (named key personnel), accelerators, references, price model.
- **Contract**: phase-based fixed price with clear deliverables, milestones tied to outcomes, quality gates, key personnel clauses, warranty/hypercare, IP for accelerators.
- **Shared risk/reward** where possible.`, 'D'],

['Delivery', 'What are the most common reasons S/4 programs fail and how do you prevent them?',
`- **Treating it as technical upgrade only** → business value case and process ownership.
- **Over-customization** → clean core and design authority.
- **Data quality** → early data program.
- **Underestimated testing** → automation and realistic SIT/UAT.
- **Weak change management** → dedicated OCM.
- **Unrealistic timelines** → realistic plan with contingency.
- **Partner issues** → strong governance and QA.`, 'B'],

['Delivery', 'How do you manage scope on an S/4 program?',
`- **Baseline scope** signed off (processes, countries, integrations, reports).
- **Change control** with impact analysis (cost, time, risk).
- **Deltas** backlog with value-based prioritization.
- **Phase 2** list for deferred requirements.
- Sponsor support for saying no.`, 'B'],

['Delivery', 'How do you manage a phased global rollout of S/4?',
`- **Global template** build and pilot.
- **Rollout factory**: repeatable process for localization, data, testing, training, cutover.
- **Wave planning** by region, complexity, business calendar.
- **Template governance** for changes during rollouts.
- **Lessons learned** after each wave.`, 'D'],

['Risk', 'What are the top risks you would track on an S/4 program?',
`- **Data quality** and migration.
- **Custom code** remediation (brownfield).
- **Integration** readiness (third parties).
- **Resource availability** (business SMEs).
- **Testing** completeness.
- **Cutover** timing.
- **Change adoption**.
- **Budget** overruns.
Each with mitigation and owner.`, 'B'],

['Finance', 'How do you manage a $50M+ SAP program budget?',
`- **Budget structure**: licenses/subscription, SI fees, internal costs, infrastructure, contingency.
- **Earned value** tracking or milestone-based tracking.
- **Monthly** forecast vs actuals; variance explanations.
- **Contingency governance** (who can release).
- **Benefits** tracking to justify spend.`, 'D'],

['Change', 'How do you drive user adoption for S/4HANA?',
`- **Change impact analysis** by role (new Fiori UX, new processes).
- **Change network** (champions/super users).
- **Communications** from leaders.
- **Role-based training** (SAP Enable Now, sandbox practice).
- **Readiness** assessments and go/no-go criteria.
- **Post go-live** support and adoption metrics (usage analytics).`, 'B'],

['Stakeholders', 'How do you keep executive sponsors engaged?',
`- **Decision-focused** meetings, not status theater.
- **Business outcomes** in reports.
- **Early warning** of risks with options.
- **Visibility** in town halls; shared ownership of milestones.
- **Regular one-on-ones**.`, 'B'],

['Stakeholders', 'How do you handle resistance from country leaders to the global template?',
`- **Involve** them in template design early (country representatives).
- **Legitimate local requirements** handled via localization layer.
- **Explain** benefits (shared services, reporting, lower costs).
- **Escalate** to executive sponsor for non-compliance.
- **Celebrate** early adopters.`, 'B'],

['Operations', 'How do you transition from program to run (support)?',
`- **Support model** defined early (CoE, AMS partner, SAP).
- **Knowledge transfer** plan with documentation and shadowing.
- **Hypercare** exit criteria.
- **Service management** processes (ITSM integration).
- **Continuous improvement** backlog and roadmap.`, 'B'],

['Operations', 'What should an SAP Center of Excellence look like after go-live?',
`- **Roles**: process experts, solution architects, BTP/integration developers, Basis/RISE management, data/MDG, security/GRC, release/test management.
- **Services**: enhancements, releases/upgrades, innovation adoption, template governance.
- **KPIs**: stability, delivery speed, adoption, value.
- **Partnership** with SAP (Enterprise Support/MaxAttention).`, 'D'],

['Vendors', 'How do you manage the relationship with SAP itself?',
`- **Executive sponsor** at SAP; account team cadence.
- **Support offerings** (Enterprise Support, MaxAttention) used effectively (safeguarding sessions, value assurance).
- **Roadmap** influence (customer influence programs, user groups).
- **Commercial** negotiations aligned to needs.`, 'B'],

['AI', 'How do you incorporate AI into the S/4 program roadmap?',
`- **Foundation**: S/4 cloud editions, clean core, BTP, data platform (Business Data Cloud).
- **Early scenarios**: Joule, finance automation (cash application, invoice extraction), procurement assistance.
- **Governance** and value tracking.
- **Phase** AI after stabilization; avoid overloading go-live scope.`, 'D'],

['People', 'How do you build an internal SAP team while relying on partners?',
`- **Retain critical roles** internally (architecture, process ownership, PMO leadership).
- **Pair** internal staff with SI consultants for knowledge transfer.
- **Hire** key skills early.
- **Training** and certifications.
- **Career paths** to retain talent post-program.`, 'B'],

['Behavioral', 'Tell me about an SAP program you rescued or turned around.',
`- **Situation**: program behind schedule, budget overrun, low confidence.
- **Actions**: independent assessment, re-scoping, leadership changes, governance reset, partner renegotiation, realistic plan.
- **Result**: go-live with stable operations; benefits tracking.
- **Lessons**.`, 'B'],

['Behavioral', 'How do you make go/no-go decisions?',
`- **Pre-agreed criteria**: testing, data, cutover rehearsal, business readiness, support readiness.
- **Evidence-based** review; risk assessment of open items.
- **Business owners** confirm readiness.
- **Decision documented**; contingency ready.
- Willing to delay when criteria aren't met.`, 'B'],

['Behavioral', 'How do you handle conflict between the SI and internal teams?',
`- **Clarify** roles and responsibilities (RACI).
- **Facts-based** discussions on issues.
- **Joint** problem solving; shared goals.
- **Escalation** through governance if needed.
- Build one-team culture (co-location, shared ceremonies).`, 'B'],

['Strategy', 'How do you sequence S/4 with other initiatives (e.g. SuccessFactors, Ariba, data platform)?',
`- **Dependencies**: master data, integration platform, identity.
- **Business capacity** for change.
- **Value timing**.
- Often: integration/identity foundations → S/4 core → LoB cloud apps → analytics/AI enhancements.
- Integrated roadmap with joint governance.`, 'D'],

['Delivery', 'What metrics show an S/4 program is on track?',
`- **Milestones** achieved vs plan.
- **Burn rate** vs budget.
- **Design deltas** trend.
- **Test execution and defect** trends.
- **Data quality** scores per mock.
- **Training completion** and readiness surveys.
- **Risk** trends.`, 'B'],

['Strategy', 'How do you measure value after S/4 go-live?',
`- **KPIs** from business case (close days, DSO, inventory, process cycle times, automation rates).
- **Process mining** to see actual performance.
- **Benefit owners** report quarterly.
- **Value roadmap** for further improvements.`, 'B'],

['Behavioral', 'Why are you the right leader for our SAP program?',
`- **Track record** of similar programs (scale, industry, approach).
- **Leadership** of complex stakeholder groups and partners.
- **Business focus** and value delivery.
- **Calm** under pressure; candid communication.
- Tailor to their situation and challenges.`, 'B']
]);
