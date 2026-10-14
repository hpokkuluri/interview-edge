// sap-dir — generated from src/sap-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['sap-dir'] = (QB['sap-dir'] || []).concat([
['Risk', 'How do you manage business continuity during S/4 cutover?',
`- **Business freeze** plan with operations (inventory, orders, shipping).
- **Manual workarounds** for critical processes during downtime.
- **Customer/supplier communication**.
- **Stock build-up** before go-live if needed.
- **Command center** during cutover and hypercare.
- **Rollback** decision points.`, 'D'],

['Risk', 'How do you handle data privacy and compliance in an SAP program?',
`- **Privacy by design**: data minimization, retention rules (SAP ILM).
- **Access controls** (GRC).
- **Data masking** in non-production.
- **Data residency** considerations (RISE regions).
- **GDPR** processes (data subject requests, blocking/deletion).`, 'D'],

['Finance', 'How would you handle a 20% budget overrun forecast mid-program?',
`- **Root cause**: scope growth, estimates, delays, rate changes.
- **Options**: de-scope or phase, renegotiate SI, optimize internal resources, use contingency, request additional funding with justification.
- **Present** to steering committee with impacts.
- **Tighten** change control and forecasting.`, 'D'],

['Delivery', 'How do you approach testing in a brownfield conversion?',
`- **Regression** focus: existing processes must still work.
- **Automated** tests where possible (Tricentis/Cloud ALM).
- **Custom code** remediation testing.
- **Financial reconciliation** testing of conversion.
- **Performance** testing on HANA.
- **Business UAT** for changed processes (Fiori, BP).`, 'B'],

['Delivery', 'How do you run fit-to-standard workshops efficiently at scale?',
`- **Prepared** best-practice systems and scripts.
- **Right participants**: process owners and SMEs with decision rights.
- **Timeboxed** sessions; parking lot for deep dives.
- **Deltas** captured with value justification.
- **Sign-off** per process area.`, 'B'],

['Operations', 'How do you plan for SAP upgrades and innovation after go-live?',
`- **Release calendar** (e.g. upgrade every 2 years in private cloud).
- **Budget** for upgrades and innovation adoption.
- **Clean core** to reduce effort.
- **Automated testing**.
- **Innovation roadmap** with business.`, 'B'],

['Change', 'How do you address fatigue in a multi-year SAP program?',
`- **Phased value delivery** to show progress.
- **Recognition** and celebration.
- **Rotation** and workload management.
- **Clear purpose** communication.
- **Leadership visibility**.`, 'B'],

['Strategy', 'How would you decide between SAP and Oracle for a new ERP?',
`- **Requirements fit** by industry and processes.
- **Ecosystem** (existing SAP/Oracle assets, partners, skills).
- **Deployment model** and cloud maturity.
- **TCO** over 7–10 years.
- **Roadmap** and innovation (AI).
- **References** from peers.
- Structured evaluation with demos using your scenarios.`, 'D'],

['Behavioral', 'Describe your leadership style on a large program.',
`- **Clear direction** and decision-making.
- **Empowered** workstream leads.
- **Transparent** communication.
- **High standards** with support.
- **Calm** under pressure.
- Examples from past programs.`, 'B'],

['People', 'How do you keep business SMEs available for the program?',
`- **Backfill** their day jobs (budgeted).
- **Executive commitment** to release them.
- **Plan** their involvement in advance.
- **Recognition** and career benefits.
- **Efficient** use of their time (prepared sessions).`, 'B'],

['Vendors', 'How do you enforce quality from an SI?',
`- **Quality gates** with acceptance criteria.
- **Independent QA** reviews.
- **Key personnel** continuity clauses.
- **Defect** and rework metrics.
- **Commercial levers** tied to milestones.`, 'B'],

['Strategy', 'What is GROW with SAP and who is it for?',
`- Offering for **S/4HANA Cloud Public Edition** targeted at mid-size and fast-growing companies (and subsidiaries).
- Bundles public cloud ERP, BTP, adoption services and community.
- Fast implementation with standardized processes.
- Suitable for two-tier models and greenfield companies.`, 'D'],

['Delivery', 'How do you manage integration readiness with dozens of third parties?',
`- **Integration inventory** with owners and partner contacts.
- **Early engagement** with partners; test environments.
- **Integration testing schedule** within SIT.
- **Cutover sequencing** and switch-over plan.
- **Monitoring** in hypercare.`, 'B'],

['Governance', 'How do you prevent template erosion during rollouts?',
`- **Design authority** for every change.
- **Local requirement** process with strict criteria.
- **Template releases** managed centrally.
- **Monitoring** of custom objects and configuration variations.
- **Executive support** for standardization.`, 'B'],

['AI', 'How would you use AI to accelerate the SAP program itself?',
`- **Code analysis and remediation** assistance for custom code.
- **Test case generation** and automation.
- **Documentation** generation (specs, training materials).
- **Data quality** profiling and matching.
- **Process mining** insights.
- Govern use for accuracy and IP.`, 'D'],

['Behavioral', 'Describe a time you had to deliver bad news to a CEO or board.',
`- **Situation**: go-live delay due to data readiness.
- **Approach**: early, factual, options with impacts, recommendation, recovery plan.
- **Outcome**: board accepted delay; successful go-live later.
- **Learning**: transparency builds trust.`, 'B'],

['Strategy', 'How do you plan the decommissioning of legacy systems after S/4?',
`- **Inventory** legacy systems and data.
- **Archive** required data (legal retention) in accessible format (ILM, archive solutions).
- **Reporting access** for history.
- **License and infrastructure** termination schedule.
- **Savings** tracked in business case.`, 'B'],

['Operations', 'How do you measure the success of the SAP support organization?',
`- **Stability** (incidents, availability).
- **SLA** attainment.
- **Change delivery** throughput and quality.
- **User satisfaction**.
- **Innovation** adoption.
- **Cost** efficiency.`, 'B'],

['Risk', 'How do you approach cybersecurity in RISE/SAP cloud?',
`- **Shared responsibility** understanding with SAP and hyperscaler.
- **Identity**: SSO, MFA, privileged access.
- **Roles and SoD** via GRC.
- **Monitoring** and SIEM integration (SAP ETD, partner tools).
- **Patching** coordination.
- **Incident response** plans with SAP.`, 'D'],

['Behavioral', 'What do you do in the first 30 days leading an in-flight SAP program?',
`- **Meet** sponsors, leads, SI, SAP.
- **Review** plan, budget, RAID, design status, test/data readiness.
- **Assess** team and governance.
- **Identify** top risks and quick fixes.
- **Communicate** observations and plan to sponsors.`, 'B'],

['Strategy', 'How do you approach industry cloud solutions and partner add-ons in an SAP landscape?',
`- **Evaluate** SAP Industry Cloud and partner solutions on BTP for specific needs.
- **Prefer** solutions that respect clean core.
- **Vendor viability** and support model.
- **Integration** and data considerations.
- **Business case** per solution.`, 'D'],

['Delivery', 'How do you set realistic timelines for an S/4 program?',
`- **Benchmarks** from similar programs (size, complexity, approach).
- **Bottom-up** estimates with SI.
- **Dependencies** (data, integrations, business calendar).
- **Contingency** (10–20%).
- **Phase gates** to recalibrate.
- Resist pressure to commit to unrealistic dates without scope trade-offs.`, 'B'],

['Change', 'How do you measure business readiness before go-live?',
`- **Training completion** and proficiency checks.
- **Readiness surveys** by role and site.
- **Process owner sign-offs**.
- **Support readiness** (super users, help desk).
- **Dress rehearsals** (day-in-the-life).
- Go/no-go criteria include readiness thresholds.`, 'B'],

['Behavioral', 'Where do you see enterprise SAP landscapes in five years?',
`- **Cloud ERP** with clean cores; **BTP** for innovation; **AI agents** handling routine processes; **Business Data Cloud** for analytics/AI; process mining for continuous improvement; smaller, product-oriented IT teams.`, 'B']
]);

QB['sap-dir'] = (QB['sap-dir'] || []).concat([
['Stakeholders', 'How do you align IT and business on S/4 program priorities?',
`- **Joint governance** with shared KPIs.
- **Business-led** process ownership; IT-led platform decisions.
- **Transparent** backlog and capacity.
- **Value-based** prioritization framework.
- **Regular** joint reviews.`, 'B']
]);
