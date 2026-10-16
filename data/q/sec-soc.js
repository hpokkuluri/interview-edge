// sec-soc — generated from src/sec-soc-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// SOC Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-soc'] = [
["Role", "What does a SOC analyst do?",
`**Why they ask:** baseline understanding.

**Answer:** Monitors security alerts from SIEM, EDR and other tools; triages and investigates them; distinguishes true incidents from false positives; escalates and contains threats following playbooks; documents findings; and helps tune detections. Tier 1 triages, tier 2 investigates deeper, tier 3 hunts and handles complex incidents.

Tip: Mention which tier you've worked.`, 'B', 'E'],

["Fundamentals", "What is the CIA triad?",
`**Answer:** **Confidentiality** (only authorized access), **Integrity** (data isn't altered improperly), **Availability** (systems and data accessible when needed). Security controls protect one or more of these.

Tip: Example of each.`, 'B', 'E'],

["SIEM", "What is a SIEM and how do you use it?",
`**Answer:** Security Information and Event Management collects and correlates logs from endpoints, servers, network devices, cloud and identity systems, generating alerts from detection rules and supporting investigation with search. Examples: Splunk, Microsoft Sentinel, QRadar, Elastic, Google SecOps.

Tip: Name the query language you use (SPL, KQL).`, 'B', 'E'],

["Triage", "How do you triage an alert?",
`**Answer:** Understand what the rule detects, gather context (user, host, asset criticality, time, related alerts), check threat intelligence (IP/domain/hash reputation), look for corroborating evidence in logs and EDR, decide true/false positive, assign severity, and escalate or close with documentation.

Tip: Context and corroboration.`, 'B', 'E'],

["Triage", "How do you reduce false positives?",
`**Answer:** Analyze recurring false positives, tune rule logic and thresholds, add allowlists with care (documented and reviewed), enrich alerts with context, and feed results back to detection engineering.

Tip: Document tuning decisions.`, 'B', 'M'],

["Phishing", "How do you investigate a reported phishing email?",
`**Answer:** Analyze headers (sender, SPF/DKIM/DMARC results, return path), URLs and attachments in a sandbox, check reputation, search for other recipients, check whether anyone clicked or entered credentials (proxy logs, sign-in logs), remove emails from mailboxes, block indicators, reset credentials if compromised, and notify users.

Tip: Scope: who else received it.`, 'B', 'E'],

["Malware", "An EDR alert shows suspicious PowerShell on a workstation. What do you do?",
`**Answer:** Review the command line (encoded commands, download cradles), parent process, network connections, and user context; check for persistence and lateral movement; isolate the host if malicious; collect artifacts; search for the same indicators across the environment; and escalate per playbook.

Tip: Process tree analysis.`, 'D', 'M'],

["Incident Response", "What are the phases of incident response?",
`**Answer:** NIST: Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity (lessons learned). Emphasize evidence preservation and communication throughout.

Tip: NIST SP 800-61.`, 'B', 'E'],

["Incident Response", "How do you contain a compromised account?",
`**Answer:** Disable or reset the account, revoke active sessions and tokens, require MFA re-registration if needed, check for mailbox rules, OAuth app grants and new MFA methods added by the attacker, review recent activity, and monitor for re-compromise.

Tip: Session revocation and persistence checks.`, 'D', 'M'],

["Frameworks", "What is MITRE ATT&CK and how do you use it?",
`**Answer:** A knowledge base of adversary tactics (goals like initial access, persistence, lateral movement, exfiltration) and techniques. SOC teams map detections and incidents to it, find coverage gaps and structure investigations.

Tip: Coverage mapping.`, 'B', 'M'],

["Frameworks", "What is the Cyber Kill Chain?",
`**Answer:** Lockheed Martin's model of attack stages: reconnaissance, weaponization, delivery, exploitation, installation, command and control, actions on objectives. Disrupting any stage stops the attack.

Tip: Compare with ATT&CK.`, 'B', 'E'],

["Networking", "Which network concepts matter for SOC work?",
`**Answer:** TCP/IP, common ports and protocols (DNS 53, HTTP/S 80/443, SMB 445, RDP 3389, SSH 22), NAT, proxies, firewalls, DNS resolution, TLS basics, and reading packet captures.

Tip: Know common ports.`, 'B', 'E'],

["Networking", "What would make you suspicious in DNS logs?",
`**Answer:** Long random-looking subdomains (DGA or DNS tunneling), high query volume to one domain, newly registered domains, queries to known malicious domains, and unusual TXT record usage.

Tip: DNS tunneling indicators.`, 'D', 'M'],

["Windows", "Which Windows event IDs do you watch?",
`**Answer:** 4624/4625 (successful/failed logon), 4648 (explicit credentials), 4672 (special privileges), 4688 (process creation), 4720 (account created), 4732 (added to group), 7045 (service installed), 1102 (audit log cleared), plus Sysmon events (1 process creation, 3 network connection).

Tip: Log clearing is a red flag.`, 'B', 'M'],

["Identity", "What signs suggest account compromise?",
`**Answer:** Impossible travel, sign-ins from unusual countries or anonymizing infrastructure, MFA fatigue (many push requests), new MFA methods, suspicious inbox rules, mass downloads, and access at unusual times.

Tip: MFA fatigue.`, 'B', 'M'],

["Ransomware", "What are early signs of ransomware activity?",
`**Answer:** Disabling security tools, deleting shadow copies (vssadmin), mass file renames/encryption, unusual SMB activity, credential dumping, remote management tool use, and large data transfers before encryption (double extortion).

Tip: Act fast — isolate.`, 'D', 'M'],

["Threat Intel", "How do you use threat intelligence?",
`**Answer:** Enrich alerts with reputation data (IPs, domains, hashes), track threat actor TTPs relevant to your industry, prioritize vulnerabilities being exploited (CISA KEV), and create detections from intelligence reports.

Tip: CISA KEV.`, 'B', 'M'],

["Threat Hunting", "What is threat hunting?",
`**Answer:** Proactively searching for threats not caught by existing alerts, using hypotheses (e.g. "attackers may use living-off-the-land binaries"), ATT&CK techniques and data analysis, then turning findings into detections.

Tip: Hypothesis-driven.`, 'D', 'M'],

["Detection", "How do you write a good detection rule?",
`**Answer:** Base it on attacker behavior (not only indicators), test against historical data for false positives, include context fields, map to ATT&CK, document response steps, and review performance regularly. Sigma rules help portability.

Tip: Behavior over IOCs.`, 'D', 'M'],

["EDR", "What does EDR provide?",
`**Answer:** Endpoint detection and response: continuous endpoint telemetry (processes, files, network, registry), behavioral detections, investigation timelines, and response actions (isolate host, kill process, collect files). Examples: CrowdStrike, Microsoft Defender for Endpoint, SentinelOne.

Tip: Host isolation.`, 'B', 'E'],

["Cloud", "What cloud security alerts might a SOC handle?",
`**Answer:** Suspicious API calls (disabling logging, creating access keys), public storage exposure, unusual console logins, crypto-mining instances, privilege escalation, and impossible travel in cloud identity logs.

Tip: Disabling logs is critical.`, 'D', 'M'],

["Evidence", "How do you preserve evidence during an incident?",
`**Answer:** Collect volatile data first (memory, network connections), take disk images or EDR collections, maintain chain of custody, hash evidence, avoid altering systems unnecessarily, and document every action with timestamps.

Tip: Chain of custody.`, 'D', 'M'],

["Documentation", "What should an incident ticket include?",
`**Answer:** Alert source, timeline, affected assets and users, indicators, analysis steps and evidence, severity, actions taken, escalation, and final determination.

Tip: Others should follow your work.`, 'B', 'E'],

["Severity", "How do you assign incident severity?",
`**Answer:** Based on asset criticality, data sensitivity, scope (number of systems/users), confirmed vs suspected compromise, and business impact — using the organization's severity matrix.

Tip: Severity matrix.`, 'B', 'E'],

["SOAR", "What is SOAR?",
`**Answer:** Security Orchestration, Automation and Response — platforms that automate enrichment and response playbooks (e.g. auto-check URL reputation, quarantine email, disable account) to reduce analyst workload.

Tip: Automation examples.`, 'B', 'M'],

["Vulnerabilities", "What's the difference between a vulnerability, threat and risk?",
`**Answer:** A **vulnerability** is a weakness; a **threat** is something that could exploit it; **risk** is the likelihood and impact of the threat exploiting the vulnerability.

Tip: Simple definitions.`, 'B', 'E'],

["Communication", "How do you communicate an incident to non-technical managers?",
`**Answer:** What happened, business impact, what we've done, current risk, next steps, and what we need from them — plain language, no jargon.

Tip: Business impact first.`, 'B', 'E'],

["Shift Work", "How do you handle shift handovers?",
`**Answer:** Written summaries of open incidents, ongoing investigations and pending actions, plus a verbal briefing for critical items.

Tip: Nothing lost between shifts.`, 'B', 'E'],

["Behavioral", "Tell me about an incident you investigated.",
`**Sample answer:** "A sign-in alert showed impossible travel for a finance user. I found a new inbox rule forwarding invoices externally and an OAuth app grant. We revoked sessions, removed the rule and app, reset credentials and blocked the sender domain — preventing a payment fraud attempt."

Tip: Investigation steps and outcome.`, 'B', 'E'],

["Behavioral", "Tell me about improving a SOC process.",
`**Sample answer:** "Phishing triage took 20 minutes per report. I built a SOAR playbook to extract and check URLs and attachments automatically, cutting triage to 5 minutes."

Tip: Time saved.`, 'B', 'M'],

["Behavioral", "How do you handle alert fatigue?",
`**Answer:** Prioritize by severity and asset criticality, push for tuning of noisy rules, use automation for repetitive enrichment, and take breaks to stay sharp.

Tip: Tuning feedback.`, 'B', 'E'],

["Certifications", "Which certifications are useful for SOC analysts?",
`**Answer:** CompTIA Security+ and CySA+, GIAC GCIH/GCIA, Microsoft SC-200, Splunk certifications, and Blue Team Level 1.

Tip: Hands-on labs matter too.`, 'B', 'E'],

["AI", "How is AI changing SOC work?",
`**Answer:** AI copilots summarize alerts and incidents, write queries, and suggest next steps; analysts validate outputs and focus on judgment. Attackers also use AI for better phishing, so detection must evolve.

Tip: Validate AI output.`, 'B', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Tier 2/3 analyst, incident responder, threat hunter or detection engineer.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I investigate thoroughly and document clearly, I know SIEM and EDR tools hands-on, and I've stopped real threats like invoice fraud through quick, accurate triage."

Tip: Proof.`, 'B', 'E'],

["Email", "What are SPF, DKIM and DMARC?",
`**Answer:** **SPF** lists servers allowed to send for a domain. **DKIM** signs emails cryptographically. **DMARC** tells receivers how to handle failures (none, quarantine, reject) and provides reporting — together reducing spoofing.

Tip: DMARC policy levels.`, 'B', 'E'],

["Lateral Movement", "How do you detect lateral movement?",
`**Answer:** Unusual remote logons (RDP, SMB, WinRM, PsExec), admin tool use from workstations, new service installations, authentication from one host to many, and pass-the-hash indicators (logon type 9/NTLM anomalies).

Tip: One-to-many connections.`, 'D', 'M'],

["Exfiltration", "How do you detect data exfiltration?",
`**Answer:** Large or unusual outbound transfers, uploads to personal cloud storage, DNS tunneling, compression/archiving before transfer, access to sensitive data outside normal patterns, and DLP alerts.

Tip: Baseline normal behavior.`, 'D', 'M'],

["Living off the Land", "What are living-off-the-land binaries?",
`**Answer:** Legitimate system tools (PowerShell, certutil, rundll32, mshta, wmic) abused by attackers to blend in. Detect via unusual command lines, parent processes and network connections.

Tip: LOLBAS project.`, 'D', 'M'],

["Logs", "What log sources are most valuable for a SOC?",
`**Answer:** Identity (Entra ID/AD), EDR, email security, firewall/proxy/DNS, cloud audit logs (CloudTrail, Azure Activity), VPN, critical application logs, and Sysmon on Windows.

Tip: Identity and endpoint first.`, 'B', 'M'],

["Hashes", "Why are file hashes used in investigations?",
`**Answer:** Hashes (SHA-256) uniquely identify files to check reputation, search across endpoints and share indicators — but attackers can change files easily, so behavior-based detection is also needed.

Tip: Limits of IOCs.`, 'B', 'E'],

["Insider", "How do you investigate a suspected insider threat?",
`**Answer:** Coordinate with HR and legal, follow strict confidentiality and privacy rules, review access and activity logs (data access, transfers, prints), preserve evidence, and avoid tipping off the subject.

Tip: Legal/HR coordination.`, 'D', 'M'],

["Sandbox", "When do you use a sandbox?",
`**Answer:** To safely detonate suspicious files or URLs and observe behavior (processes, network, file changes) without risking production systems.

Tip: Evasion awareness.`, 'B', 'E'],

["Metrics", "Which SOC metrics matter?",
`**Answer:** Mean time to detect (MTTD), mean time to respond (MTTR), alert volume and false-positive rate, escalation rate, and detection coverage against ATT&CK.

Tip: Quality over volume.`, 'B', 'M'],

["Scenario", "You see a successful login from a foreign country for an executive. What do you do?",
`**Answer:** Check travel status and VPN usage, device and user agent, MFA details, subsequent activity; contact the user through a trusted channel; if suspicious, revoke sessions and reset credentials; escalate given the VIP status.

Tip: Verify via trusted channel.`, 'B', 'M'],

["Scenario", "Multiple hosts start encrypting files. What do you do?",
`**Answer:** Escalate immediately, isolate affected hosts via EDR, disable compromised accounts, block indicators, protect backups, activate the incident response plan, and preserve evidence.

Tip: Speed of containment.`, 'D', 'M'],

["Vulnerability Alerts", "How do SOC teams respond to a critical new vulnerability?",
`**Answer:** Identify exposed assets, check for exploitation attempts in logs, apply mitigations or emergency patches with IT, deploy detections, and monitor closely.

Tip: Exposure first.`, 'B', 'M'],

["Ethics", "What would you do if you accidentally accessed sensitive data during an investigation?",
`**Answer:** Use only what's needed for the investigation, don't share it, document access according to policy, and inform your lead if required.

Tip: Need-to-know.`, 'B', 'E']
];

QB['sec-soc'] = (QB['sec-soc']||[]).concat([
["Cloud Identity", "How do you investigate a suspicious OAuth app grant in Microsoft 365?",
`**Why they ask:** consent phishing is a common way into mailboxes.

**Answer:** Identify the app, publisher, permissions granted (Mail.Read, offline_access) and which users consented. Review the app's sign-in and API activity. Revoke the grant and the tokens, disable the app, block it tenant-wide, and restrict user consent going forward.

Tip: Mention that offline_access keeps access alive after a password reset.`, 'D', 'M'],
["Business Email Compromise", "What signs point to business email compromise?",
`**Answer:** Requests to change bank details, urgency and secrecy, look-alike domains, reply-to mismatches, new inbox rules that hide replies, and sign-ins from unusual locations on finance or executive accounts.

**What to do:** contact finance to stop payments, contain the account, and check for other targets.

Tip: Payment verification by phone is the key business control.`, 'B', 'M']
]);
