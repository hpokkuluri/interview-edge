// Rewritten Healthcare — Epic / Clinical Applications Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix hc-epic-).
module.exports = {

'Why is Epic certification important?':
`**Why they ask:** credential reality in the Epic world.

**Answer:**
"Epic certification validates build knowledge for specific applications — Ambulatory, ClinDoc, Willow, Beaker and so on — and most organizations require it before granting build access in production. You can't self-enroll; a customer organization or partner has to sponsor you, so I keep my certifications current through project work and new-version updates."

Tip: Sponsorship needed.`,

'How do you gather requirements from clinicians?':
`**Why they ask:** clinician partnership.

**Answer:**
"Observe the workflow first — shadowing a nurse for a shift shows what interviews miss — then interview end users, understand the clinical goal and any regulatory needs, review the current build, prototype in POC so they can react to something real, and validate with clinical leadership. Clinicians respond much better to a working mock-up than a requirements document."

Tip: Observe workflows.`,

'Walk through building a new order set.':
`**Why they ask:** core build skill.

**Answer:**
"Get evidence-based content approved by the clinical committee, build the orders and panels in the order set editor, set sensible defaults and restrictions, test in POC and TST — including that each order routes and results correctly — get clinical sign-off, migrate through environments under change control, and educate users before go-live. Skipping governance approval is how order sets become unsafe."

Tip: Governance approval.`,

'What environments does Epic use?':
`**Why they ask:** change control knowledge.

**Answer:**
"Typically POC for proof of concept, TST for testing, a training and playground environment, and PRD for production, with build moved between them through a controlled migration process. Nothing goes to production without passing testing and change approval."

Tip: Change control.`,

'How do you handle Epic upgrades?':
`**Why they ask:** upgrade experience.

**Answer:**
"Review the release notes and new features, assess the impact on our build, update and test workflows — especially integrated testing across modules — communicate changes, train users and support go-live. Epic's quarterly versions mean upgrades are routine, so having good regression scripts saves weeks."

Tip: Integrated testing.`,

'What testing do you perform?':
`**Why they ask:** quality and safety.

**Answer:**
"Unit testing of my build, application testing, integrated testing across modules — an order placed in Ambulatory flowing to the lab, resulting back, and dropping a charge — regression testing and user acceptance testing. Integrated testing catches the issues that hurt patients and revenue."

Tip: Integrated testing.`,

"How do you troubleshoot a user's Epic issue?":
`**Why they ask:** support skills.

**Answer:**
"Reproduce it first, ideally logged in with a test user on the same template. Then check the user's security and settings, review the build records involved, test a fix in non-production, fix it or escalate to Epic through a Sherlock ticket, and close the loop with the user."

Tip: Reproduce first.`,

'How does Epic security work?':
`**Why they ask:** access and privacy.

**Answer:**
"User templates, security classes, provider records and linked roles control which activities and data a user can reach. Break-the-glass protects restricted records like VIP or behavioral health charts, requiring a reason to access, and access audits support privacy monitoring."

Tip: Templates.`,

'What reporting tools exist in Epic?':
`**Why they ask:** reporting knowledge.

**Answer:**
"Reporting Workbench for operational lists and reports, Radar dashboards, SlicerDicer for self-service population analytics, and the Clarity and Caboodle databases for complex reporting. Clarity is the relational reporting database extracted nightly; Caboodle is the dimensional data warehouse built on top for analytics."

Tip: Clarity vs Caboodle.`,

'How does Epic integrate with other systems?':
`**Why they ask:** interoperability.

**Answer:**
"HL7 v2 interfaces through Epic Bridges, FHIR APIs, integration engines like Rhapsody or Cloverleaf in between, and Care Everywhere for exchanging records with other organizations."

Tip: HL7 and FHIR.`,

'What are common HL7 message types?':
`**Why they ask:** interface literacy.

**Answer:**
"ADT for admissions, discharges and transfers; ORM or OMG for orders; ORU for results; SIU for scheduling; DFT for charges; and MDM for documents. ADT is the backbone — if ADT messages fail, downstream systems don't even know the patient exists."

Tip: ADT.`,

'What is FHIR and why does it matter?':
`**Why they ask:** modern interoperability.

**Answer:**
"Fast Healthcare Interoperability Resources — a modern API standard using RESTful resources like Patient, Observation and MedicationRequest. ONC and CMS rules require FHIR APIs for patient access, so apps patients choose can retrieve their records."

Tip: Interoperability rules.`,

'How do you design effective clinical decision support?':
`**Why they ask:** patient safety and usability.

**Answer:**
"Follow the five rights of CDS — the right information, to the right person, in the right format, through the right channel, at the right time — base it on evidence, avoid interruptive alerts where passive guidance works, and monitor override rates after go-live to refine it."

Tip: Alert fatigue.`,

'How do you reduce alert fatigue?':
`**Why they ask:** a major EHR problem.

**Answer:**
"Analyze firing and override rates, retire low-value alerts, tier by severity, target only the roles that can act, and use passive guidance where possible. An alert overridden 95% of the time isn't protecting anyone — it's training clinicians to click through everything."

Tip: Override rates.`,

'How do you optimize clinician workflows?':
`**Why they ask:** clinician satisfaction.

**Answer:**
"Measure time in the EHR with Signal data, find the pain points — often in-basket and documentation — personalize tools like SmartPhrases and preference lists, streamline documentation templates, and offer targeted training. Personalization alone often saves physicians 20 or 30 minutes a day."

Tip: Signal data.`,

'What is the physician builder program?':
`**Why they ask:** engagement strategies.

**Answer:**
"A program that trains clinicians to build their own personalization tools and content, like SmartPhrases and order preferences. It improves efficiency and adoption, and physician builders become credible champions with their peers."

Tip: Engagement.`,

'What is your role during a go-live?':
`**Why they ask:** go-live experience.

**Answer:**
"Command center support, at-the-elbow help on the units, triaging issues, quick fixes through emergency change control, clear communication, and then post-go-live optimization once things stabilize."

Tip: Command center.`,

'Why is governance important in EHR changes?':
`**Why they ask:** safe change.

**Answer:**
"It makes sure changes are clinically appropriate, prioritized, standardized and safe, through committees that review requests. Without it you get ten versions of the same workflow and clinicians floating between departments make mistakes."

Tip: Standardization.`,

'Which regulations affect EHR work?':
`**Why they ask:** regulatory awareness.

**Answer:**
"HIPAA, the ONC information blocking rules under the 21st Century Cures Act, CMS Promoting Interoperability, and quality reporting through eCQMs. Information blocking means notes and results generally must be released to patients promptly, which changed many workflows."

Tip: Information blocking.`,

'How is AI being used in Epic?':
`**Why they ask:** current trends.

**Answer:**
"Ambient clinical documentation that drafts notes from the visit conversation, generative AI drafts of in-basket replies, chart summarization, and predictive models like sepsis and deterioration — all requiring validation, monitoring and governance before and after rollout."

Tip: Ambient documentation.`,

'Tell me about a build that improved care.':
`**Why they ask:** proof of clinical impact.

**Answer:**
"I built a sepsis screening BPA triggered by nursing vitals and linked to a sepsis order set. Time to antibiotics improved by 35 minutes, and bundle compliance rose 20%."

Tip: Clinical outcome.`,

'Tell me about handling a difficult clinician request.':
`**Why they ask:** influence.

**Answer:**
"A department wanted a custom documentation template that conflicted with our standards. I met with them, showed how the standard template plus personalization met their needs, and they adopted it."

Tip: Standardization.`,

'Tell me about an urgent production issue.':
`**Why they ask:** composure.

**Answer:**
"After a migration, a commonly used lab order stopped routing to the lab. I confirmed the impact within minutes, alerted the command center so nurses could call orders in, found a mis-set performing department on the order record, fixed it through an emergency change, and validated with test orders. The root cause review added that field to our migration checklist."

Tip: Calm response.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward principal analyst, team lead, or clinical informatics manager."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build Epic workflows clinicians actually like and that improve outcomes — like faster sepsis treatment — with solid testing and governance."

Tip: Proof.`,

'How does clinical experience help an analyst?':
`**Why they ask:** background value.

**Answer:**
"Understanding workflows, terminology and clinical priorities improves requirements, earns credibility with clinicians and makes build safer — you anticipate how a nurse will actually use the screen at 3 a.m."

Tip: Credibility.`,

'What documentation do you maintain?':
`**Why they ask:** traceability.

**Answer:**
"Design documents, build specifications, test scripts, change records and training materials, so anyone can trace why a build exists and how it was validated."

Tip: Traceability.`,

'How do you support end-user training?':
`**Why they ask:** adoption.

**Answer:**
"Tip sheets, eLearning, classroom sessions, a super-user network on every unit, and at-the-elbow support during go-lives."

Tip: Super-users.`,

'How do you ensure data quality in the EHR?':
`**Why they ask:** data integrity.

**Answer:**
"Standardized discrete fields rather than free text where data is reported, validation rules, training, and data quality reports that flag gaps. Free text can't feed a quality measure."

Tip: Discrete data.`,

"What's involved in MyChart optimization?":
`**Why they ask:** patient engagement.

**Answer:**
"Activation rates, self-scheduling, e-check-in, messaging workflows that don't overwhelm clinicians, proxy access for parents and caregivers, and patient education content."

Tip: Activation.`,

'How do clinical builds affect revenue?':
`**Why they ask:** financial awareness.

**Answer:**
"Orders, documentation and charge capture build drive coding and billing. A procedure documented without its charge trigger is lost revenue; a missing diagnosis link becomes a denial."

Tip: Charge capture.`,

'How do you plan for EHR downtime?':
`**Why they ask:** continuity.

**Answer:**
"Downtime procedures, business continuity access computers with read-only reports like the medication administration record, paper forms, and recovery and back-entry processes once the system returns."

Tip: BCA.`,

'How do you prioritize many requests?':
`**Why they ask:** prioritization.

**Answer:**
"Patient safety and regulatory requirements first, then strategic priorities and impact, decided through governance rather than whoever emails loudest."

Tip: Safety first.`,

'A physician says the EHR is slowing them down. What do you do?':
`**Why they ask:** user empathy.

**Answer:**
"Shadow them during a clinic session, check their personalization — preference lists, SmartPhrases, filters — provide efficiency training, and identify build improvements. Signal data before and after shows whether it helped."

Tip: Observe.`,

"Results aren't showing in the chart. What do you check?":
`**Why they ask:** interface troubleshooting.

**Answer:**
"Interface engine queues and errors, message mapping, patient matching — a result can't file if the MRN doesn't match — result routing configuration, and any recent changes."

Tip: Interface logs.`,

'What is clinical informatics?':
`**Why they ask:** field understanding.

**Answer:**
"Using data and information technology to improve healthcare delivery — combining clinical knowledge with information and computer science."

Tip: Interdisciplinary.`,

'What about experience with other EHRs?':
`**Why they ask:** transferable skills.

**Answer:**
"Oracle Health, formerly Cerner, Meditech and athenahealth share concepts like order catalogs, documentation templates, security roles and HL7 interfaces, so the skills transfer well even though the build tools differ."

Tip: Transferable.`,

'How do you protect privacy as an analyst?':
`**Why they ask:** HIPAA mindset.

**Answer:**
"Access only what I need for the work in front of me, follow audit policies, use test patients for testing, and report any suspected breach immediately."

Tip: Test patients.`,

'What would you ask in an Epic analyst interview?':
`**Why they ask:** due diligence.

**Answer:**
"Which modules and how big is the team? What's the upgrade cadence? How does governance work? What are the on-call expectations? And what's the remote work policy?"

Tip: On-call.`,

'What are master files and records in Epic?':
`**Why they ask:** build fundamentals.

**Answer:**
"Epic stores build in master files — EAP for procedures, ERX for medications, SER for providers, DEP for departments — each containing records analysts configure. Troubleshooting often means following the chain: an order record points to a department, which points to a location."

Tip: Know key master files.`,

'What are SmartTools?':
`**Why they ask:** documentation efficiency.

**Answer:**
"SmartPhrases, SmartTexts, SmartLists and SmartLinks that speed documentation by inserting standardized text and pulling data like vitals or medications straight from the chart."

Tip: Efficiency tools.`,

'What is a Best Practice Advisory?':
`**Why they ask:** CDS build.

**Answer:**
"Epic's clinical decision support alert, triggered by criteria built in rules — like a sepsis screen or an overdue vaccine reminder — to guide clinicians. It needs careful design so it fires only when it's actionable."

Tip: Rules engine.`,

'Why do Epic analysts care about interface mappings?':
`**Why they ask:** integration safety.

**Answer:**
"Order, result and department codes must map correctly between systems. A mapping error can mean a missing result, a wrong charge, or a result filing to the wrong test — a patient safety issue."

Tip: Mapping validation.`,

'What is an EHR optimization sprint?':
`**Why they ask:** optimization practice.

**Answer:**
"A focused engagement with one department to personalize and streamline workflows through training and build changes over a few weeks, measured with Signal data before and after."

Tip: Measured with Signal.`,

'How do you scope a change request?':
`**Why they ask:** delivery discipline.

**Answer:**
"Clarify the problem and desired outcome, identify the affected workflows and modules, estimate effort, assess risks, check whether governance approval is needed, and agree acceptance criteria."

Tip: Acceptance criteria.`,

'How do you communicate EHR changes to users?':
`**Why they ask:** change communication.

**Answer:**
"Release notes, tip sheets, department huddles, in-system messages and super-user briefings — all before go-live, not after people discover the change mid-shift."

Tip: Before go-live.`,

'How do you handle on-call support?':
`**Why they ask:** support maturity.

**Answer:**
"Triage by patient impact, use runbooks, escalate when needed, keep stakeholders updated, and document the fix and any follow-up work."

Tip: Patient impact first.`,

'How do Epic builds support quality measures?':
`**Why they ask:** quality reporting.

**Answer:**
"Capture discrete data for eCQMs, build registries and dashboards, and design workflows so routine documentation meets measure specifications without extra clicks."

Tip: Discrete data.`,

'Two departments want conflicting builds for the same workflow. What do you do?':
`**Why they ask:** standardization judgment.

**Answer:**
"Bring both to governance with an impact analysis, look for a standard approach with personalization options, and document the decision."

Tip: Governance.`,

};
