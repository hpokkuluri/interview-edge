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
