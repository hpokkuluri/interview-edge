// hc-epic — generated from src/hc-epic-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Clinical Informatics / Epic Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['hc-epic'] = [
["Role", "What does an Epic analyst do?",
`**Why they ask:** module and scope.

**Answer:** Builds, configures, tests and supports Epic applications (e.g. ClinDoc, Orders, Ambulatory, ASAP, OpTime, Beaker, Willow, Resolute, Cadence): gathering requirements from clinicians, building records and workflows, testing, upgrades, troubleshooting tickets and training.

Tip: Name your certified modules.`, 'B', 'E'],

["Certification", "Why is Epic certification important?",
`**Answer:** Epic certification (sponsored by a customer organization or partner) validates build knowledge for specific applications and is usually required for build access.

Tip: Sponsorship needed.`, 'B', 'E'],

["Requirements", "How do you gather requirements from clinicians?",
`**Answer:** Observe workflows, interview end users, understand clinical goals and regulatory needs, review current state, prototype in the build environment, and validate with clinical leaders.

Tip: Observe workflows.`, 'B', 'E'],

["Build", "Walk through building a new order set.",
`**Answer:** Gather evidence-based content from clinical committee, build orders and panels in the SmartSet/order set editor, set defaults and restrictions, test in POC/TST environments, get clinical approval, migrate through environments, and educate users.

Tip: Governance approval.`, 'B', 'M'],

["Environments", "What environments does Epic use?",
`**Answer:** Typically POC (proof of concept), TST (testing), REL/PLY (training/playground), and PRD (production), with change control for migrations.

Tip: Change control.`, 'B', 'E'],

["Upgrades", "How do you handle Epic upgrades?",
`**Answer:** Review release notes and new features, assess impacts on build, update and test workflows (integrated testing), communicate changes, train users, and support go-live.

Tip: Integrated testing.`, 'B', 'M'],

["Testing", "What testing do you perform?",
`**Answer:** Unit testing of build, application testing, integrated testing across modules (e.g. orders to results to billing), regression testing, and user acceptance testing.

Tip: Integrated testing.`, 'B', 'E'],

["Tickets", "How do you troubleshoot a user's Epic issue?",
`**Answer:** Reproduce the issue, check user security and settings, review build records and logs, test in non-prod, fix or escalate to Epic (Sherlock tickets), and communicate resolution.

Tip: Reproduce first.`, 'B', 'E'],

["Security", "How does Epic security work?",
`**Answer:** User templates, security classes, provider records and linked roles control access to activities and data; break-the-glass for restricted records; audits for privacy.

Tip: Templates.`, 'D', 'M'],

["Reporting", "What reporting tools exist in Epic?",
`**Answer:** Reporting Workbench (operational reports), Radar dashboards, SlicerDicer (self-service analytics), and Clarity/Caboodle (data warehouse) for complex reporting.

Tip: Clarity vs Caboodle.`, 'B', 'M'],

["Interfaces", "How does Epic integrate with other systems?",
`**Answer:** HL7 v2 interfaces through Bridges, FHIR APIs, integration engines (Rhapsody, Cloverleaf), and Care Everywhere for health information exchange.

Tip: HL7 and FHIR.`, 'D', 'M'],

["HL7", "What are common HL7 message types?",
`**Answer:** ADT (admissions, discharges, transfers), ORM/OMG (orders), ORU (results), SIU (scheduling), DFT (charges), MDM (documents).

Tip: ADT.`, 'D', 'M'],

["FHIR", "What is FHIR and why does it matter?",
`**Answer:** Fast Healthcare Interoperability Resources — a modern API standard using RESTful resources (Patient, Observation, MedicationRequest) for interoperability, required by ONC/CMS rules for patient access.

Tip: Interoperability rules.`, 'D', 'M'],

["Clinical Decision Support", "How do you design effective clinical decision support?",
`**Answer:** Follow the "five rights" of CDS (right information, person, format, channel, time), avoid alert fatigue, base on evidence, monitor override rates and refine.

Tip: Alert fatigue.`, 'D', 'M'],

["Alert Fatigue", "How do you reduce alert fatigue?",
`**Answer:** Analyze firing and override rates, retire low-value alerts, tier by severity, target to relevant roles, and use passive guidance where appropriate.

Tip: Override rates.`, 'B', 'M'],

["Workflow", "How do you optimize clinician workflows?",
`**Answer:** Measure time in EHR (Signal data), identify pain points, personalize tools (SmartPhrases, preference lists), streamline documentation, and offer training.

Tip: Signal data.`, 'B', 'M'],

["Physician Builder", "What is the physician builder program?",
`**Answer:** Training clinicians to build their own personalization tools and content, improving efficiency and adoption.

Tip: Engagement.`, 'D', 'M'],

["Go-live", "What is your role during a go-live?",
`**Answer:** Command center support, at-the-elbow assistance, triaging issues, quick fixes, communication and post-go-live optimization.

Tip: Command center.`, 'B', 'E'],

["Governance", "Why is governance important in EHR changes?",
`**Answer:** Ensures changes are clinically appropriate, prioritized, standardized and safe — through committees that review requests.

Tip: Standardization.`, 'B', 'M'],

["Regulatory", "Which regulations affect EHR work?",
`**Answer:** HIPAA, ONC information blocking rules, CMS Promoting Interoperability, quality reporting (eCQMs), and 21st Century Cures Act requirements.

Tip: Information blocking.`, 'D', 'M'],

["AI", "How is AI being used in Epic?",
`**Answer:** Ambient clinical documentation, generative AI drafts of in-basket replies, chart summarization, and predictive models (sepsis, deterioration) — requiring validation and governance.

Tip: Ambient documentation.`, 'B', 'M'],

["Behavioral", "Tell me about a build that improved care.",
`**Sample answer:** "I built a sepsis screening BPA with nursing triggers and a linked order set. Time to antibiotics improved 35 minutes and compliance with the bundle rose 20%."

Tip: Clinical outcome.`, 'B', 'M'],

["Behavioral", "Tell me about handling a difficult clinician request.",
`**Sample answer:** "A department wanted a custom documentation template conflicting with standards. I met them, showed the standard template could meet needs with personalization, and they adopted it."

Tip: Standardization.`, 'B', 'M'],

["Behavioral", "Tell me about an urgent production issue.",
`**Answer:** Example of quickly diagnosing a broken order or interface, communicating impact, fixing via emergency change, and root cause.

Tip: Calm response.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/principal analyst, team lead, or clinical informatics manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build Epic workflows clinicians actually like and that improve outcomes — like faster sepsis treatment — with solid testing and governance."

Tip: Proof.`, 'B', 'E'],

["Clinical Background", "How does clinical experience help an analyst?",
`**Answer:** Understanding workflows, terminology and priorities improves requirements, credibility with clinicians and safer build.

Tip: Credibility.`, 'B', 'E'],

["Documentation", "What documentation do you maintain?",
`**Answer:** Design documents, build specs, test scripts, change records and training materials.

Tip: Traceability.`, 'B', 'E'],

["Training", "How do you support end-user training?",
`**Answer:** Tip sheets, eLearning, classroom sessions, super-user networks and at-the-elbow support.

Tip: Super-users.`, 'B', 'E'],

["Data Quality", "How do you ensure data quality in the EHR?",
`**Answer:** Standardized discrete fields, validation rules, training, and data quality reports.

Tip: Discrete data.`, 'B', 'M'],

["Patient Portal", "What's involved in MyChart optimization?",
`**Answer:** Activation rates, self-scheduling, e-check-in, messaging workflows, proxy access and patient education.

Tip: Activation.`, 'B', 'M'],

["Revenue Integration", "How do clinical builds affect revenue?",
`**Answer:** Orders, documentation and charge capture build drive coding and billing — errors cause missed charges or denials.

Tip: Charge capture.`, 'D', 'M'],

["Downtime", "How do you plan for EHR downtime?",
`**Answer:** Downtime procedures, BCA (business continuity access) computers with read-only reports, paper forms, and recovery/back-entry processes.

Tip: BCA.`, 'B', 'M'],

["Prioritization", "How do you prioritize many requests?",
`**Answer:** Patient safety and regulatory first, then strategic priorities and impact, via governance.

Tip: Safety first.`, 'B', 'E'],

["Scenario", "A physician says the EHR is slowing them down. What do you do?",
`**Answer:** Observe their workflow, check personalization, provide efficiency training, and identify build improvements.

Tip: Observe.`, 'B', 'E'],

["Scenario", "Results aren't showing in the chart. What do you check?",
`**Answer:** Interface engine queues and errors, message mapping, patient matching, result routing configuration, and recent changes.

Tip: Interface logs.`, 'D', 'M'],

["Informatics", "What is clinical informatics?",
`**Answer:** Using data and information technology to improve healthcare delivery, combining clinical, information and computer science.

Tip: Interdisciplinary.`, 'B', 'E'],

["Cerner", "What about experience with other EHRs?",
`**Answer:** Oracle Health (Cerner), Meditech and athenahealth share concepts like order catalogs, documentation templates and interfaces — transferable skills.

Tip: Transferable.`, 'B', 'E'],

["Privacy", "How do you protect privacy as an analyst?",
`**Answer:** Access only what's needed for work, follow audit policies, use test patients for testing, and report breaches.

Tip: Test patients.`, 'B', 'E'],

["Questions", "What would you ask in an Epic analyst interview?",
`**Answer:** Modules and team size, upgrade cadence, governance, on-call expectations, and remote work policy.

Tip: On-call.`, 'B', 'E']
];

QB['hc-epic'] = (QB['hc-epic']||[]).concat([
["Records", "What are master files and records in Epic?",
`**Answer:** Epic stores build in master files (e.g. EAP for procedures, ERX for medications, SER for providers, DEP for departments) with records configured by analysts. Understanding master file relationships is key to build and troubleshooting.

Tip: Know key master files.`, 'D', 'M'],
["SmartTools", "What are SmartTools?",
`**Answer:** SmartPhrases, SmartTexts, SmartLists and SmartLinks that speed up documentation by inserting standardized text and pulling data from the chart.

Tip: Efficiency tools.`, 'B', 'E'],
["BPA", "What is a Best Practice Advisory?",
`**Answer:** Epic's clinical decision support alert, triggered by criteria (rules) to guide clinicians, for example sepsis screening or a vaccine reminder. Design it carefully to avoid alert fatigue.

Tip: Rules engine.`, 'B', 'M'],
["Translation Tables", "Why do Epic analysts care about interface mappings?",
`**Answer:** Codes for orders, results and departments must map correctly between systems. Mapping errors cause missing results, wrong charges or patient safety issues.

Tip: Mapping validation.`, 'D', 'M'],
["Optimization", "What is an EHR optimization sprint?",
`**Answer:** A focused engagement with a department to personalize and streamline workflows through training and build changes, measured with Signal data before and after.

Tip: Measured with Signal.`, 'D', 'M'],
["Change Requests", "How do you scope a change request?",
`**Answer:** Clarify the problem and the desired outcome, identify the affected workflows and modules, estimate the effort, assess risks, check governance needs, and confirm acceptance criteria.

Tip: Acceptance criteria.`, 'B', 'E'],
["Communication", "How do you communicate EHR changes to users?",
`**Answer:** Release notes, tip sheets, department huddles, in-system messages and super-user briefings before go-live.

Tip: Before go-live.`, 'B', 'E'],
["On-call", "How do you handle on-call support?",
`**Answer:** Triage by patient impact, use the runbooks, escalate when needed, communicate status, and document the fix and follow-up actions.

Tip: Patient impact first.`, 'B', 'E'],
["Quality Reporting", "How do Epic builds support quality measures?",
`**Answer:** Capture discrete data for eCQMs, build registries and dashboards, and design workflows so documentation meets measure specifications.

Tip: Discrete data.`, 'D', 'M'],
["Scenario", "Two departments want conflicting builds for the same workflow. What do you do?",
`**Answer:** Bring both to governance with an analysis of the impacts, look for a standard approach with personalization options, and document the decision.

Tip: Governance.`, 'B', 'M']
]);
