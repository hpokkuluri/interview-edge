// Oracle Technical Lead (10–15 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-lead'] = (QB['et-lead'] || []).concat([
['Leadership', 'What does a technical lead own on an Oracle program?',
`- **Technical design authority** for RICEW objects: reports, interfaces, conversions, extensions, workflows.
- **Standards**: naming, logging, error handling, security, source control, deployment.
- **Team**: assigning work, reviewing designs/code, mentoring, unblocking.
- **Estimates and plan** for the technical workstream.
- **Integration with functional leads**, testing, cutover and support handover.`, 'B'],

['Leadership', 'How do you run code and design reviews for an Oracle technical team?',
`- **Design review** before build: approach, APIs/objects used, error handling, performance, security.
- **Code review** checklist: standards, logging, idempotency, bind variables/efficient SQL, no hard-coding, comments.
- **OIC review**: fault handling, tracking fields, connection security, lookups not hard-coded values.
- Make reviews teaching moments; track common issues and update standards.`, 'B'],

['Estimation', 'How do you estimate and plan a RICEW inventory of 150 objects?',
`- Classify each by **type and complexity**; use reference effort (design/build/unit test/docs).
- Add **integration testing**, defect fixing, data migration mocks, cutover.
- Sequence by **dependencies** and test cycles (SIT dates drive priorities).
- Balance load across the team; identify specialists (OIC, VBS, HDL).
- Track burn-down weekly; re-plan with functional leads.`, 'D'],

['Integration', 'How do you define integration standards for a Fusion program?',
`- **Patterns**: event-driven (business events), scheduled batch (FBDI), real-time REST, outbound extracts (BICC/BIP).
- **Naming** (integrations, connections, lookups), **versioning**.
- **Error handling** framework: common error logging, notifications, resubmission.
- **Tracking fields** with business keys; **idempotency**.
- **Security**: OAuth, integration users, least privilege.
- **Documentation** templates and runbooks.`, 'D'],

['Integration', 'How do you manage integration testing with external partners (banks, 3PLs, payroll)?',
`- Agree **specs and test scenarios** early; exchange sample files.
- Book partner **test windows**; set up test endpoints/SFTP.
- Track defects jointly; certification sign-off.
- Plan cutover switch-over with the partner (dates, contacts, fallback).`, 'D'],

['Data Migration', 'How do you lead technical data migration?',
`- Migration **framework**: staging, transformation, validation rules, load automation, reconciliation reports.
- **Mock schedule** (3+) with timing; improve each run.
- Error reports to data owners; track data quality KPIs.
- Cutover run book with sequence and checkpoints.`, 'D'],

['DevOps', 'How do you manage source control and deployments for Oracle objects?',
`- **Git** for SQL/PL/SQL, BIP catalog exports, OIC IAR/packages, VBS (Git-native), scripts.
- Branching strategy per release; pull requests with reviews.
- Deployment **checklists or pipelines** (e.g. OIC packages via REST APIs, VBS pipelines).
- Environment tracking: which version is where.
- No manual changes in production.`, 'D'],

['Performance', 'What do you do when integrations slow down at month-end?',
`- Monitor volumes and timings; find bottlenecks (Fusion import jobs, OIC connections, partner endpoints).
- Spread schedules; batch bigger with FBDI instead of many REST calls.
- Parallelize where safe; tune queries in extracts.
- Agree a **close calendar** for integrations with finance.`, 'D'],

['Support', 'How do you hand over technical objects to support?',
`- **Runbooks** per integration/report: purpose, schedule, dependencies, common errors and fixes, contacts.
- Monitoring dashboards and alert routing.
- Knowledge transfer sessions with recordings.
- Hypercare period with joint ownership.`, 'B'],

['Quarterly Updates', 'How do you manage technical regression for quarterly Fusion updates?',
`- Inventory of custom objects with owners.
- **Automated regression** (integrations with test payloads, report comparisons).
- Review release notes for API/view changes and Redwood impacts on VBS extensions.
- Track issues and SRs; sign off before production update.`, 'D'],

['Stakeholders', 'How do you push back on a functional request that creates technical risk?',
`- Understand the business need.
- Explain risk in business terms (upgrade breakage, performance, support cost).
- Offer alternatives (standard feature, simpler report, OIC instead of custom UI).
- Escalate to the design authority with options if needed.`, 'B'],

['People', 'How do you grow junior developers into seniors?',
`- Stretch assignments with support.
- Pairing on complex designs; ownership of whole objects.
- Teach troubleshooting and performance tuning.
- Feedback in reviews; certifications (OIC, Fusion).`, 'B'],

['Security', 'What security review do you perform before go-live?',
`- Integration users and roles (least privilege).
- Credential storage and rotation; OAuth where possible.
- BIP reports with data security.
- PII in logs and files; encryption in transit (SFTP/PGP).
- Access to OIC/VBS restricted.`, 'D'],

['Behavioral', 'Describe a time your team missed a deadline. What did you do?',
`- Be honest about cause (late specs, underestimated complexity).
- Actions: re-prioritized, added help, simplified scope with functional leads, daily tracking.
- Result and lessons (earlier design reviews, better estimates).`, 'B'],

['Behavioral', 'How do you handle disagreements between technical team members?',
`- Bring options and criteria (performance, maintainability, standards).
- Prototype if needed; decide; document.
- Keep focus on the outcome, not personalities.`, 'B'],

['AI', 'How do you see AI changing Oracle technical work?',
`- **AI-assisted coding** for SQL, PL/SQL, OIC mappings, test data.
- **AI Agent Studio** building agents on top of Fusion APIs — new skill set for technical teams.
- More focus on **design, security, evaluation** and integration of agents.
- Need governance: review generated code, protect data.`, 'D'],

['Architecture', 'When would you push for a VB Studio extension vs an OIC-based solution?',
`- **VBS** for user-facing changes on Fusion pages (fields, rules, guided UI).
- **OIC** for system-to-system integration and orchestration.
- Many solutions combine them (UI captures data → OIC processes).`, 'B'],

['Cutover', 'What are the technical cutover tasks for an Oracle go-live?',
`- Freeze code; final deployments to production.
- Integration configuration (endpoints, credentials, schedules) switched to production.
- Data loads in sequence with reconciliation.
- Enable schedules and monitoring; smoke tests.
- Rollback plan per step.`, 'D'],

['Design', 'How do you choose between FBDI, REST and HDL for a load?',
`- **FBDI**: high-volume ERP/SCM loads, batch.
- **REST**: real-time or low-volume, needs immediate response.
- **HDL**: HCM objects (only option for many).
- Consider error handling, volume, frequency and available services.`, 'B'],

['Behavioral', 'Why should we hire you as a technical lead?',
`- Depth across Oracle technical stack (SQL, BIP, OIC, VBS, FBDI/HDL, EBS if relevant).
- Programs delivered and team size led.
- Standards and quality improvements you introduced.
- Calm problem solving during go-lives.`, 'B']
]);
