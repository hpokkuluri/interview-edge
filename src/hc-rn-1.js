// Registered Nurse. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['hc-rn'] = [
["Intro", "Why did you choose nursing?",
`**Why they ask:** motivation and fit.

**Sample answer:** "I saw how a nurse calmed my grandmother during a hospital stay and explained everything clearly. I want to combine clinical skill with that kind of patient advocacy — and I've found ICU nursing lets me do both."

Tip: Genuine story plus specialty interest.`, 'B', 'E'],

["Prioritization", "How do you prioritize care for multiple patients?",
`**Answer:** Use ABCs (airway, breathing, circulation), Maslow's hierarchy, acute vs chronic, unstable vs stable, and actual vs potential problems. Assess quickly, address life-threatening issues first, delegate appropriately, and reassess frequently.

Tip: ABCs.`, 'B', 'E'],

["Prioritization", "You have four patients: one with chest pain, one needing pain meds, one requesting discharge papers, one with a blood sugar of 60. Who first?",
`**Answer:** Chest pain first (potential MI — assess, ECG, notify provider per protocol) — but the hypoglycemic patient is also urgent; if alert, quickly give fast-acting glucose per protocol or delegate if allowed, then assess chest pain. Then pain meds, then discharge.

Tip: Explain reasoning.`, 'B', 'M'],

["Deterioration", "How do you recognize a deteriorating patient?",
`**Answer:** Changes in vital signs (early warning scores like NEWS/MEWS), mental status changes, decreased urine output, increased oxygen needs, new pain, and family concerns. Escalate early using SBAR and activate rapid response if criteria met.

Tip: Early warning scores.`, 'B', 'M'],

["Communication", "What is SBAR?",
`**Answer:** Situation, Background, Assessment, Recommendation — a structured format for communicating with providers and handoffs.

**Example:** "Dr. Lee, Mr. Smith in 12 has BP 82/50, down from 120/70. He's post-op day 1 from bowel surgery. I'm concerned about bleeding or sepsis. I'd like you to evaluate him now and consider fluids and labs."

Tip: Give an example.`, 'B', 'E'],

["Safety", "How do you prevent medication errors?",
`**Answer:** Rights of medication administration (right patient, drug, dose, route, time, documentation, reason, response), two identifiers, barcode scanning, independent double checks for high-alert meds, avoiding interruptions, and questioning unclear orders.

Tip: High-alert meds.`, 'B', 'E'],

["Safety", "What would you do if you made a medication error?",
`**Answer:** Assess the patient immediately, notify the provider, follow orders for monitoring or intervention, report through the incident system, inform the charge nurse, and be honest per disclosure policy — focus on learning, not blame.

Tip: Patient first, transparency.`, 'B', 'E'],

["Difficult Patient", "How do you handle a difficult or angry patient?",
`**Answer:** Stay calm, listen and acknowledge feelings, explain clearly, involve the patient in decisions, set respectful boundaries, and escalate to charge nurse or security if safety is at risk.

Tip: De-escalation.`, 'B', 'E'],

["Family", "How do you handle a family member who is upset about care?",
`**Answer:** Listen privately, acknowledge concerns, explain care within HIPAA limits, involve the provider or charge nurse, and follow up.

Tip: HIPAA boundaries.`, 'B', 'E'],

["Teamwork", "Tell me about a conflict with a coworker.",
`**Sample answer:** "A colleague often left tasks undone at shift change. I spoke privately, learned she was overwhelmed with assignments, and we agreed on a handoff checklist; our charge nurse adjusted assignments."

Tip: Private, solution-focused.`, 'B', 'E'],

["Physician", "What if you disagree with a physician's order?",
`**Answer:** Clarify the order and rationale, share your assessment and concerns using SBAR, consult pharmacy or charge nurse, and escalate through the chain of command if patient safety is at risk. Don't carry out an unsafe order.

Tip: Chain of command.`, 'B', 'M'],

["Infection", "How do you prevent hospital-acquired infections?",
`**Answer:** Hand hygiene, standard and transmission-based precautions, CLABSI and CAUTI bundles, early catheter removal, aseptic technique, and patient education.

Tip: Bundles.`, 'B', 'E'],

["Falls", "How do you prevent patient falls?",
`**Answer:** Fall risk assessment (e.g. Morse scale), bed alarms, low beds, non-slip socks, hourly rounding, toileting schedules, call light within reach and medication review.

Tip: Hourly rounding.`, 'B', 'E'],

["Pressure Injuries", "How do you prevent pressure injuries?",
`**Answer:** Braden scale assessment, repositioning every 2 hours, pressure-relieving surfaces, skin inspection, moisture management and nutrition.

Tip: Braden scale.`, 'B', 'E'],

["Sepsis", "How do you recognize and respond to sepsis?",
`**Answer:** Screen for infection plus signs like fever or hypothermia, tachycardia, tachypnea, hypotension, altered mental status, elevated lactate. Notify provider immediately and initiate sepsis bundle per protocol (cultures, lactate, antibiotics, fluids).

Tip: Time-critical.`, 'B', 'M'],

["Documentation", "Why is documentation important?",
`**Answer:** Communicates care, ensures continuity, supports legal protection and billing, and demonstrates quality. Document accurately, timely and objectively — "if it wasn't documented, it wasn't done."

Tip: Timely and objective.`, 'B', 'E'],

["EHR", "Which EHR systems have you used?",
`**Answer:** Epic, Cerner (Oracle Health), Meditech — charting, medication administration with barcode scanning, and order management.

Tip: Epic is common.`, 'B', 'E'],

["Patient Education", "How do you educate patients effectively?",
`**Answer:** Assess readiness and health literacy, use plain language, teach-back method, written materials in the patient's language, and involve family.

Tip: Teach-back.`, 'B', 'E'],

["Ethics", "What would you do if you suspected a colleague was impaired at work?",
`**Answer:** Ensure patient safety first, report to the charge nurse or supervisor per policy — it protects patients and the colleague.

Tip: Patient safety.`, 'B', 'M'],

["Stress", "How do you handle stress and avoid burnout?",
`**Answer:** Team support, debriefing after difficult events, exercise and rest, boundaries, and using employee assistance resources.

Tip: Healthy habits.`, 'B', 'E'],

["Code", "Describe your role in a code blue.",
`**Answer:** Depending on role: start CPR, call for help, bring crash cart, attach defibrillator, document timeline, administer medications as ordered, manage airway support — following ACLS and communicating clearly.

Tip: ACLS.`, 'B', 'M'],

["Delegation", "How do you delegate to nursing assistants?",
`**Answer:** Use the five rights of delegation: right task, circumstance, person, direction/communication, and supervision — RNs keep accountability for assessment and evaluation.

Tip: Five rights.`, 'B', 'M'],

["Handoff", "What makes a good shift handoff?",
`**Answer:** Structured (SBAR or I-PASS), at bedside when possible, covering status, plans, pending results, safety concerns and patient preferences.

Tip: Bedside handoff.`, 'B', 'E'],

["Pain", "How do you assess and manage pain?",
`**Answer:** Use appropriate scales (numeric, FACES, behavioral scales for nonverbal), assess location, quality, intensity and duration, administer meds as ordered, use non-pharmacological methods, and reassess.

Tip: Reassess.`, 'B', 'E'],

["Cultural", "How do you provide culturally competent care?",
`**Answer:** Respect beliefs and preferences, use interpreters for language barriers, avoid assumptions and adapt care plans.

Tip: Interpreters.`, 'B', 'E'],

["HIPAA", "How do you protect patient privacy?",
`**Answer:** Share information only with those involved in care, secure screens and records, avoid discussions in public areas, and never post about patients on social media.

Tip: Minimum necessary.`, 'B', 'E'],

["Behavioral", "Tell me about a time you advocated for a patient.",
`**Sample answer:** "A post-op patient seemed confused, which was dismissed as normal. I pushed for evaluation; labs showed severe hyponatremia, and early treatment prevented a seizure."

Tip: Advocacy.`, 'B', 'E'],

["Behavioral", "Tell me about a time you made a mistake.",
`**Answer:** Choose a real but non-catastrophic example, explain what you did immediately, what you learned and changed.

Tip: Ownership.`, 'B', 'E'],

["Behavioral", "Tell me about handling a busy shift.",
`**Sample answer:** "We were short-staffed with two admissions. I prioritized using ABCs, delegated vitals and ambulation, communicated with the charge nurse, and ensured critical meds were on time."

Tip: Prioritization.`, 'B', 'E'],

["Certifications", "Which certifications do you hold or plan?",
`**Answer:** BLS, ACLS, PALS (pediatrics), specialty certifications like CCRN (critical care), CEN (emergency), MEDSURG-BC, or OCN.

Tip: Specialty certs.`, 'B', 'E'],

["Career", "Where do you see yourself in five years?",
`**Answer:** Specialty certification, charge nurse or educator role, or advanced practice (NP) — showing growth commitment.

Tip: Growth.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I'm a calm, thorough nurse who catches changes early and communicates clearly — and I care deeply about patient safety and teamwork."

Tip: Strengths.`, 'B', 'E'],

["Death", "How do you handle the death of a patient?",
`**Answer:** Provide compassionate care to the family, follow post-mortem procedures, and seek support through debriefing or colleagues.

Tip: Compassion and self-care.`, 'B', 'E'],

["Restraints", "When are restraints appropriate?",
`**Answer:** Only as a last resort for safety after less restrictive alternatives fail, with a provider order, time limits, frequent monitoring and documentation per policy and regulations.

Tip: Least restrictive.`, 'B', 'M'],

["Blood", "What do you monitor during a blood transfusion?",
`**Answer:** Verify patient and product with two nurses, baseline vitals, stay with patient first 15 minutes, monitor for reactions (fever, chills, hives, dyspnea, back pain) and stop transfusion immediately if a reaction occurs.

Tip: First 15 minutes.`, 'B', 'M'],

["Discharge", "How do you prepare patients for discharge?",
`**Answer:** Start planning on admission, medication reconciliation, education with teach-back, follow-up appointments, equipment needs and clear warning signs to return.

Tip: Start early.`, 'B', 'E'],

["Quality", "What quality measures do nurses influence?",
`**Answer:** HCAHPS patient experience scores, falls, pressure injuries, CAUTI/CLABSI, readmissions and medication errors.

Tip: HCAHPS.`, 'B', 'E'],

["Evidence", "How do you use evidence-based practice?",
`**Answer:** Follow protocols based on research, stay updated through journals and education, and participate in unit practice councils.

Tip: Practice councils.`, 'B', 'E'],

["Scenario", "A patient refuses medication. What do you do?",
`**Answer:** Respect autonomy, explore reasons, educate on benefits and risks, notify the provider, and document.

Tip: Autonomy.`, 'B', 'E'],

["Scenario", "You're assigned a patient outside your specialty. What do you do?",
`**Answer:** Communicate concerns to charge nurse, ask for resources or mentor support, review protocols, and never perform tasks beyond your competence.

Tip: Safe practice.`, 'B', 'M'],

["Scenario", "A patient is suddenly short of breath. What do you do?",
`**Answer:** Assess airway and breathing, raise head of bed, check oxygen saturation and vitals, apply oxygen per protocol, call for help/rapid response, notify provider with SBAR.

Tip: ABCs.`, 'B', 'M'],

["Technology", "How do you use technology to improve care?",
`**Answer:** EHR alerts, barcode medication administration, smart pumps, telemetry monitoring and patient portals.

Tip: Smart pumps.`, 'B', 'E'],

["Teamwork", "What does good teamwork look like on a unit?",
`**Answer:** Helping colleagues with heavy assignments, clear communication, respect, and shared accountability for patient outcomes.

Tip: Helping hands.`, 'B', 'E'],

["Questions", "What questions should you ask a hiring nurse manager?",
`**Answer:** Nurse-to-patient ratios, orientation length and preceptorship, unit culture and turnover, scheduling, and professional development support.

Tip: Ratios and orientation.`, 'B', 'E']
];
