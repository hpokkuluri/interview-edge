// Rewritten Cybersecurity — SOC Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-soc-).
module.exports = {

'What is the CIA triad?':
`**Why they ask:** a security fundamentals check.

**Answer:**
"Confidentiality means only authorized people can access data — encryption and access controls protect it. Integrity means data isn't altered improperly — hashing and change controls protect it. Availability means systems are there when needed — redundancy and backups protect it. Ransomware, for example, attacks availability, and with double extortion, confidentiality too."

Tip: Example of each.`,

'What is a SIEM and how do you use it?':
`**Why they ask:** the SOC's main tool.

**Answer:**
"A Security Information and Event Management platform collects and correlates logs from endpoints, servers, network devices, cloud and identity systems, fires alerts from detection rules, and lets us search during investigations. I've used Microsoft Sentinel with KQL day to day — for example, querying SigninLogs for one user's sign-ins by country and app over the past week — and Splunk with SPL in a previous role."

Tip: Name the query language you use (SPL, KQL).`,

'How do you triage an alert?':
`**Why they ask:** the core daily task.

**Answer:**
"First understand what the rule is detecting. Then gather context — the user, host, asset criticality, time, related alerts. Check threat intelligence for IP, domain or hash reputation. Look for corroborating evidence in logs and EDR. Decide true or false positive, assign severity, and escalate or close with clear notes. A failed-login alert on a test account is different from the same alert on the CFO's account followed by a success."

Tip: Context and corroboration.`,

'How do you reduce false positives?':
`**Why they ask:** noise kills SOCs.

**Answer:**
"Analyze which alerts keep coming back as false positives, tune the rule logic and thresholds, add allowlists carefully — documented and reviewed so they don't become blind spots — enrich alerts with context, and feed results back to detection engineering. One vulnerability scanner allowlist cut a rule's volume by 70%."

Tip: Document tuning decisions.`,

'How do you investigate a reported phishing email?':
`**Why they ask:** the most common SOC case.

**Answer:**
"Analyze the headers — sender, SPF, DKIM and DMARC results, return path. Detonate URLs and attachments in a sandbox and check reputation. Search for other recipients, then check whether anyone clicked or entered credentials using proxy and sign-in logs. Pull the email from all mailboxes, block the indicators, reset credentials for anyone who submitted them, and notify users. Scoping who else received it is the step people skip."

Tip: Scope: who else received it.`,

'An EDR alert shows suspicious PowerShell on a workstation. What do you do?':
`**Why they ask:** hands-on investigation.

**Answer:**
"Look at the full command line — encoded commands, download cradles like Invoke-WebRequest piped to IEX — the parent process, network connections and user context. If Word spawned PowerShell that downloaded something, that's almost certainly malicious. Then check for persistence and lateral movement, isolate the host if it's malicious, collect artifacts, search for the same indicators across the environment, and escalate per the playbook."

Tip: Process tree analysis.`,

'What are the phases of incident response?':
`**Why they ask:** process knowledge.

**Answer:**
"In NIST's model: Preparation; Detection and Analysis; Containment, Eradication and Recovery; and Post-Incident Activity — lessons learned. Evidence preservation and communication run throughout all of them."

Tip: NIST SP 800-61.`,

'How do you contain a compromised account?':
`**Why they ask:** a very common response action.

**Answer:**
"Disable or reset the account, revoke active sessions and tokens — a password reset alone doesn't kill existing sessions — require MFA re-registration if needed, and check for attacker persistence: inbox rules, OAuth app grants, new MFA methods. Then review recent activity and watch for re-compromise."

Tip: Session revocation and persistence checks.`,

'What is MITRE ATT&CK and how do you use it?':
`**Why they ask:** framework literacy.

**Answer:**
"A knowledge base of adversary tactics — goals like initial access, persistence, lateral movement, exfiltration — and the techniques used for each. We map detections and incidents to it, find coverage gaps — for example, no detection for scheduled-task persistence — and structure investigations around what the attacker likely did next."

Tip: Coverage mapping.`,

'What is the Cyber Kill Chain?':
`**Why they ask:** attack models.

**Answer:**
"Lockheed Martin's model of attack stages: reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. Breaking any stage stops the attack. It's more linear and high-level than ATT&CK, which goes deep on specific techniques."

Tip: Compare with ATT&CK.`,

'Which network concepts matter for SOC work?':
`**Why they ask:** network fundamentals.

**Answer:**
"TCP/IP, common ports and protocols — DNS 53, HTTP and HTTPS 80 and 443, SMB 445, RDP 3389, SSH 22 — NAT, proxies, firewalls, how DNS resolution works, TLS basics, and reading packet captures in Wireshark. RDP from a workstation to twenty servers stands out immediately if you know the ports."

Tip: Know common ports.`,

'What would make you suspicious in DNS logs?':
`**Why they ask:** detection instincts.

**Answer:**
"Long random-looking subdomains, which suggest domain generation algorithms or DNS tunneling; very high query volume to one domain; newly registered domains; queries to known malicious domains; and unusual TXT record usage, which tunneling tools often rely on."

Tip: DNS tunneling indicators.`,

'Which Windows event IDs do you watch?':
`**Why they ask:** Windows log literacy.

**Answer:**
"4624 and 4625 for successful and failed logons, 4648 for explicit credentials, 4672 for special privileges, 4688 for process creation, 4720 for account creation, 4732 for additions to a local group, 7045 for a new service installed, and 1102 for the audit log being cleared — plus Sysmon event 1 for process creation and 3 for network connections. A 1102 is a big red flag: attackers clear logs to hide."

Tip: Log clearing is a red flag.`,

'What signs suggest account compromise?':
`**Why they ask:** identity attack detection.

**Answer:**
"Impossible travel, sign-ins from unusual countries or anonymizing infrastructure, MFA fatigue — dozens of push requests in a few minutes — new MFA methods registered, suspicious inbox rules, mass downloads, and access at odd hours."

Tip: MFA fatigue.`,

'What are early signs of ransomware activity?':
`**Why they ask:** speed matters with ransomware.

**Answer:**
"Security tools being disabled, shadow copies deleted with vssadmin, credential dumping, remote management tools appearing, unusual SMB activity across many hosts, large outbound transfers before encryption for double extortion, and then mass file renames. Seeing any of the early signs means isolate immediately — don't wait for encryption."

Tip: Act fast — isolate.`,

'How do you use threat intelligence?':
`**Why they ask:** intel in practice.

**Answer:**
"Enrich alerts with reputation data for IPs, domains and hashes, track the tactics of threat actors who target our industry, prioritize vulnerabilities that are actively exploited using the CISA KEV catalog, and build detections from intelligence reports."

Tip: CISA KEV.`,

'What is threat hunting?':
`**Why they ask:** proactive skills.

**Answer:**
"Proactively searching for threats that existing alerts miss, starting from a hypothesis — like 'attackers may be using certutil to download payloads' — guided by ATT&CK techniques and data analysis. Whatever we find, malicious or not, becomes a new detection or a tuning improvement."

Tip: Hypothesis-driven.`,

'How do you write a good detection rule?':
`**Why they ask:** detection engineering basics.

**Answer:**
"Base it on attacker behavior rather than only indicators that change daily, test it against historical data for false positives, include context fields analysts need, map it to ATT&CK, document response steps, and review its performance regularly. Sigma rules make detections portable across SIEMs."

Tip: Behavior over IOCs.`,

'What does EDR provide?':
`**Why they ask:** endpoint tooling.

**Answer:**
"Continuous endpoint telemetry — processes, files, network, registry — behavioral detections, investigation timelines, and response actions like isolating a host, killing a process or collecting files. Examples are CrowdStrike, Microsoft Defender for Endpoint and SentinelOne. Host isolation is the action I use most."

Tip: Host isolation.`,

'What cloud security alerts might a SOC handle?':
`**Why they ask:** cloud coverage.

**Answer:**
"Suspicious API calls like disabling CloudTrail or creating access keys, public storage exposure, unusual console logins, crypto-mining instances, privilege escalation, and impossible travel in cloud identity logs. Anyone disabling logging gets treated as critical."

Tip: Disabling logs is critical.`,

'How do you preserve evidence during an incident?':
`**Why they ask:** forensic discipline.

**Answer:**
"Collect volatile data first — memory, network connections — then disk images or EDR collections, keep chain of custody, hash the evidence, avoid changing systems unnecessarily, and document every action with timestamps."

Tip: Chain of custody.`,

'What should an incident ticket include?':
`**Why they ask:** documentation quality.

**Answer:**
"Alert source, timeline, affected assets and users, indicators, analysis steps and evidence, severity, actions taken, escalation, and the final determination — written so another analyst can pick it up and follow every step."

Tip: Others should follow your work.`,

'How do you assign incident severity?':
`**Why they ask:** prioritization.

**Answer:**
"Using our severity matrix: asset criticality, data sensitivity, scope — how many systems and users — whether compromise is confirmed or suspected, and business impact. A confirmed compromise of a domain controller is critical; a blocked malware download on one laptop is low."

Tip: Severity matrix.`,

'What is SOAR?':
`**Why they ask:** automation awareness.

**Answer:**
"Security Orchestration, Automation and Response — platforms that automate enrichment and response playbooks: checking URL reputation, quarantining an email from all mailboxes, disabling an account. It takes repetitive work off analysts so they focus on judgment."

Tip: Automation examples.`,

"What's the difference between a vulnerability, threat and risk?":
`**Why they ask:** fundamentals.

**Answer:**
"A vulnerability is a weakness, like an unpatched VPN. A threat is something that could exploit it, like a ransomware group. Risk is the likelihood and impact of that threat exploiting that vulnerability."

Tip: Simple definitions.`,

'How do you communicate an incident to non-technical managers?':
`**Why they ask:** communication.

**Answer:**
"What happened, the business impact, what we've done, the current risk, next steps, and what we need from them — in plain language. 'One finance mailbox was accessed by an attacker; no payments went out; we've locked the account and are checking whether anyone else was targeted.'"

Tip: Business impact first.`,

'How do you handle shift handovers?':
`**Why they ask:** continuity.

**Answer:**
"A written summary of open incidents, ongoing investigations and pending actions, plus a verbal briefing on anything critical so nothing gets lost between shifts."

Tip: Nothing lost between shifts.`,

'Tell me about an incident you investigated.':
`**Why they ask:** proof.

**Answer:**
"A sign-in alert showed impossible travel for a finance user. I found a new inbox rule forwarding invoices externally and a suspicious OAuth app grant. We revoked sessions, removed the rule and app, reset credentials and blocked the sender domain — which stopped a payment fraud attempt before any money moved."

Tip: Investigation steps and outcome.`,

'Tell me about improving a SOC process.':
`**Why they ask:** initiative.

**Answer:**
"Phishing triage took about 20 minutes per report. I built a SOAR playbook to extract and check URLs and attachments automatically, cutting triage to around 5 minutes."

Tip: Time saved.`,

'How do you handle alert fatigue?':
`**Why they ask:** sustainability.

**Answer:**
"Prioritize by severity and asset criticality, push for tuning of noisy rules with evidence, automate repetitive enrichment, and take short breaks to stay sharp — tired analysts miss real attacks."

Tip: Tuning feedback.`,

'Which certifications are useful for SOC analysts?':
`**Why they ask:** credentials.

**Answer:**
"CompTIA Security+ and CySA+, GIAC GCIH and GCIA, Microsoft SC-200, Splunk certifications and Blue Team Level 1 — plus hands-on labs like TryHackMe or Blue Team Labs."

Tip: Hands-on labs matter too.`,

'How is AI changing SOC work?':
`**Why they ask:** current trends.

**Answer:**
"AI copilots summarize alerts and incidents, write queries and suggest next steps; analysts validate the output and focus on judgment. Attackers use AI too — better-written phishing — so detection has to keep evolving."

Tip: Validate AI output.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward tier 2 or 3 analyst, incident responder, threat hunter or detection engineer."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I investigate thoroughly and document clearly, I know SIEM and EDR tools hands-on, and I've stopped real threats like invoice fraud through quick, accurate triage."

Tip: Proof.`,

'What are SPF, DKIM and DMARC?':
`**Why they ask:** email security basics.

**Answer:**
"SPF lists the servers allowed to send mail for a domain. DKIM signs emails cryptographically so receivers can verify they weren't altered. DMARC tells receivers what to do when checks fail — none, quarantine or reject — and sends reports. Together they reduce spoofing of our domain."

Tip: DMARC policy levels.`,

'How do you detect lateral movement?':
`**Why they ask:** detecting attacker spread.

**Answer:**
"Unusual remote logons via RDP, SMB, WinRM or PsExec, admin tools run from workstations, new service installations, one host authenticating to many others in a short time, and pass-the-hash indicators like NTLM anomalies or logon type 9."

Tip: One-to-many connections.`,

'How do you detect data exfiltration?':
`**Why they ask:** protecting data.

**Answer:**
"Large or unusual outbound transfers, uploads to personal cloud storage, DNS tunneling, archiving or compressing files right before a transfer, sensitive data access outside normal patterns, and DLP alerts — all compared against a baseline of normal behavior."

Tip: Baseline normal behavior.`,

'What are living-off-the-land binaries?':
`**Why they ask:** stealthy attacker techniques.

**Answer:**
"Legitimate system tools — PowerShell, certutil, rundll32, mshta, wmic — that attackers abuse to blend in with normal activity. We detect them through unusual command lines, parent processes and network connections, like certutil downloading a file from the internet. The LOLBAS project catalogs them."

Tip: LOLBAS project.`,

'What log sources are most valuable for a SOC?':
`**Why they ask:** prioritization.

**Answer:**
"Identity logs from Entra ID and AD, EDR, email security, firewall, proxy and DNS, cloud audit logs like CloudTrail and Azure Activity, VPN, critical application logs, and Sysmon on Windows. Identity and endpoint first."

Tip: Identity and endpoint first.`,

'Why are file hashes used in investigations?':
`**Why they ask:** IOC understanding.

**Answer:**
"A SHA-256 hash uniquely identifies a file, so we can check its reputation, search for it across all endpoints and share it as an indicator. But attackers change a single byte to get a new hash, so behavior-based detection is still needed."

Tip: Limits of IOCs.`,

'How do you investigate a suspected insider threat?':
`**Why they ask:** sensitive investigations.

**Answer:**
"Coordinate with HR and legal from the start, follow strict confidentiality and privacy rules, review access and activity logs — data access, transfers, printing — preserve evidence, and avoid tipping off the person."

Tip: Legal/HR coordination.`,

'When do you use a sandbox?':
`**Why they ask:** malware analysis basics.

**Answer:**
"To safely detonate suspicious files or URLs and watch their behavior — processes spawned, network calls, file changes — without risking production. Some malware detects sandboxes and stays quiet, so a clean result isn't proof of safety."

Tip: Evasion awareness.`,

'Which SOC metrics matter?':
`**Why they ask:** performance measurement.

**Answer:**
"Mean time to detect, mean time to respond, alert volume and false-positive rate, escalation rate, and detection coverage against ATT&CK. Quality over volume — closing 500 alerts a day means nothing if the real one was missed."

Tip: Quality over volume.`,

'You see a successful login from a foreign country for an executive. What do you do?':
`**Why they ask:** judgment under ambiguity.

**Answer:**
"Check travel status and VPN use, the device and user agent, MFA details and what happened after the sign-in. Contact the executive through a trusted channel — not the possibly compromised email. If it's suspicious, revoke sessions and reset credentials, and escalate quickly given the VIP status."

Tip: Verify via trusted channel.`,

'Multiple hosts start encrypting files. What do you do?':
`**Why they ask:** crisis response.

**Answer:**
"Escalate immediately, isolate affected hosts through EDR, disable compromised accounts, block indicators, protect the backups, activate the incident response plan and preserve evidence. Speed of containment decides whether it's ten machines or ten thousand."

Tip: Speed of containment.`,

'How do SOC teams respond to a critical new vulnerability?':
`**Why they ask:** zero-day readiness.

**Answer:**
"Identify exposed assets, check logs for exploitation attempts, work with IT on mitigations or emergency patches, deploy detections for the exploit, and monitor closely."

Tip: Exposure first.`,

'What would you do if you accidentally accessed sensitive data during an investigation?':
`**Why they ask:** ethics.

**Answer:**
"Use only what's needed for the investigation, never share it, document the access according to policy, and tell my lead if required."

Tip: Need-to-know.`,

'What signs point to business email compromise?':
`**Why they ask:** a costly attack type.

**Answer:**
"Requests to change bank details, urgency and secrecy, look-alike domains, reply-to addresses that don't match the sender, new inbox rules that hide replies, and sign-ins from unusual locations on finance or executive accounts. My first call is to finance to stop any pending payment, then contain the account and check for other targets."

Tip: Payment verification by phone is the key business control.`,

};
