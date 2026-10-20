// Rewritten Infrastructure — Systems Administrator (Why they ask → Answer → Tip). Apply with rewrite.js (prefix inf-sys-).
module.exports = {

'How do you troubleshoot a slow Linux server?':
`**Why they ask:** core troubleshooting.

**Answer:**
"I work through the resources: uptime and top for load and CPU, free -h and vmstat for memory and swap, iostat and iotop for disk I/O, df -h and du for space, ss and iftop for network, and journalctl and /var/log for errors. Then find the process responsible and whether it's genuine demand, a leak or a misconfiguration. A load of 12 on a 4-core box with low CPU and high iowait points to disk, not CPU."

Tip: Work through the USE method: Utilization, Saturation, Errors.`,

'Explain Linux file permissions.':
`**Why they ask:** fundamentals and security.

**Answer:**
"Read is 4, write 2, execute 1, for owner, group and others. So 750 means owner read-write-execute, group read-execute, others nothing. Special bits are setuid, setgid and the sticky bit, which on /tmp stops users deleting each other's files. chmod and chown change them, and ACLs give finer control. 777 means anyone on the box can modify or replace the file — including an attacker who gets in through a web app."

Tip: Explain why 777 is dangerous.`,

'What is systemd and how do you manage services?':
`**Why they ask:** daily Linux administration.

**Answer:**
"The init system and service manager on most modern distributions. systemctl start, stop, restart and status manage a service now; enable makes it start at boot — a common mistake is starting a service but not enabling it, so it's gone after the next reboot. journalctl -u nginx shows its logs, and custom unit files go in /etc/systemd/system."

Tip: Know how enable differs from start.`,

'A disk is full on a production server. What do you do?':
`**Why they ask:** a classic incident.

**Answer:**
"Find what's big with du -sh across directories sorted by size, or ncdu. Check for deleted files still held open by a process with lsof +L1 — the space isn't freed until that process restarts or the file handle is truncated. Then clear or rotate logs safely, move data, extend the volume if it's LVM or a cloud disk, and fix the cause: logrotate configured properly and an alert at 80%."

Tip: Deleted-but-open files are a classic trap.`,

'What are the key Active Directory components?':
`**Why they ask:** Windows infrastructure knowledge.

**Answer:**
"Domains, forests and trusts; domain controllers; organizational units; users, groups and computers; Group Policy; DNS integration; the five FSMO roles; sites and replication; and Kerberos authentication."

Tip: Name the five FSMO roles.`,

'What are FSMO roles?':
`**Why they ask:** AD depth.

**Answer:**
"Five operations master roles. Forest-wide: Schema Master and Domain Naming Master. Per domain: RID Master, which hands out pools of IDs for new objects; PDC Emulator, the authoritative time source that also handles password changes and account lockouts; and Infrastructure Master. The PDC Emulator matters most day to day — if it's down, time sync and lockout processing suffer quickly."

Tip: The PDC Emulator is the most critical day to day.`,

'How do you troubleshoot a Group Policy not applying?':
`**Why they ask:** a frequent AD issue.

**Answer:**
"Run gpresult /r or rsop.msc on the client and confirm which OU the user or computer is in — wrong OU is the most common cause. Then security filtering and WMI filters, blocked inheritance or enforcement, replication with repadmin, and DNS. Force a refresh with gpupdate /force and check the Group Policy event logs."

Tip: Wrong OU and security filtering cause most failures.`,

'How do you troubleshoot AD replication problems?':
`**Why they ask:** AD health.

**Answer:**
"repadmin /replsummary and /showrepl to see which DCs are failing and with what error, dcdiag, DNS health, time sync, network connectivity between sites, and event logs. Fix the root cause — usually DNS — before forcing replication."

Tip: DNS is behind many AD problems.`,

'Explain how DNS resolution works.':
`**Why they ask:** networking fundamentals.

**Answer:**
"The client checks its local cache, then asks a recursive resolver. The resolver asks a root server, which points to the TLD server for .com, which points to the domain's authoritative server, which returns the answer. The resolver caches it for the TTL and returns it. Common records: A, AAAA, CNAME, MX, TXT, NS, PTR and SRV — and Active Directory depends on SRV records to locate domain controllers."

Tip: AD relies on SRV records.`,

'How does DHCP work?':
`**Why they ask:** fundamentals.

**Answer:**
"DORA: the client broadcasts a Discover, the server Offers an address, the client Requests it, and the server Acknowledges. The lease includes the IP, subnet mask, gateway, DNS servers and duration. Relay agents — IP helpers on routers — forward requests across subnets, and DHCP failover between two servers keeps addressing working if one fails."

Tip: Mention DHCP failover.`,

'What virtualization platforms have you managed?':
`**Why they ask:** platform experience.

**Answer:**
"VMware vSphere — ESXi, vCenter, vMotion, DRS and HA — Microsoft Hyper-V, Nutanix AHV, and cloud VMs. Since Broadcom acquired VMware and moved to subscription bundles, many companies have seen large license increases and are evaluating Hyper-V, Nutanix or moving workloads to cloud — I've helped scope that comparison."

Tip: Be ready to talk about the VMware licensing changes.`,

'What are VMware HA and DRS?':
`**Why they ask:** virtualization depth.

**Answer:**
"HA restarts VMs on surviving hosts when a host fails — so there's a few minutes of downtime while they boot, not zero downtime. DRS balances load across hosts automatically using vMotion. Both need a cluster with shared storage. For true zero downtime you'd need Fault Tolerance or application-level clustering."

Tip: HA means a restart, not zero downtime.`,

'SAN vs NAS vs object storage?':
`**Why they ask:** storage fundamentals.

**Answer:**
"A SAN provides block storage over Fibre Channel or iSCSI — for databases and VM datastores. NAS provides file storage over NFS or SMB — for shared departmental files. Object storage, S3-style, holds unstructured data and backups at huge scale over HTTP APIs."

Tip: Match each to a workload.`,

'What RAID levels do you know?':
`**Why they ask:** storage basics.

**Answer:**
"RAID 0 stripes with no redundancy. RAID 1 mirrors. RAID 5 stripes with parity and survives one disk failure. RAID 6 has double parity and survives two. RAID 10 mirrors and stripes, giving the best performance with redundancy — common for databases. And RAID is not a backup: if someone deletes a file or ransomware encrypts it, RAID faithfully protects the damage."

Tip: Say "RAID is not a backup."`,

'How do you design a backup strategy?':
`**Why they ask:** data protection.

**Answer:**
"3-2-1-1-0: three copies, on two media types, one offsite, one immutable or offline, and zero errors on verified restores. RPO and RTO set per system, full plus incremental schedules, encryption, and regular restore tests. An untested backup is just a hope."

Tip: Untested backups don't count.`,

'RPO vs RTO?':
`**Why they ask:** recovery planning concepts.

**Answer:**
"RPO — recovery point objective — is how much data loss is acceptable, measured in time. RTO — recovery time objective — is how fast the system must be back. An RPO of one hour means backing up or replicating at least hourly; an RTO of four hours means the restore process must finish within four hours, including finding the right person at 2 a.m."

Tip: Give an example.`,

'How do you manage patching across servers?':
`**Why they ask:** security operations.

**Answer:**
"Start from an inventory, then patch in rings — test, pilot, production — in maintenance windows, using WSUS, SCCM, Intune or Azure Update Manager for Windows, and Ansible or Satellite for Linux. Rollback plans and snapshots, post-patch verification, emergency patching for actively exploited vulnerabilities, and compliance reporting. Rings mean a bad patch hits ten test servers, not five hundred."

Tip: Rings reduce risk.`,

'What do you automate and with which tools?':
`**Why they ask:** efficiency mindset.

**Answer:**
"PowerShell for Windows and AD, Bash and Python for Linux, Ansible for configuration management, Terraform for infrastructure. Typical jobs: user provisioning, server builds, patch reports, log cleanup and health checks. Automating new-user setup across AD, M365 and group membership saved the helpdesk about six hours a week."

Tip: Name one automation and the time it saved.`,

'Write a PowerShell approach to find inactive AD users.':
`**Why they ask:** practical scripting.

**Answer:**
"Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly finds users with no logon in 90 days. Alternatively, Get-ADUser with a filter on LastLogonTimeStamp and that property loaded. Pipe the results to Export-Csv, review the list with managers, then disable the accounts and move them to a disabled OU — and only delete after a holding period."

Tip: Disable before you delete.`,

'What do you monitor on servers?':
`**Why they ask:** proactive operations.

**Answer:**
"Availability, CPU, memory, disk space and I/O, service status, event and log errors, backup success, certificate expiry and application health checks — with alerts only on things needing action, and thresholds tuned to avoid noise. Zabbix, PRTG, SolarWinds, Datadog or Azure Monitor. Certificate expiry alerts alone have prevented several outages for me."

Tip: Certificate expiry alerts prevent outages.`,

'How do you harden a server?':
`**Why they ask:** security baseline.

**Answer:**
"Minimal roles and packages, CIS benchmark settings, timely patching, unused services and ports disabled, least-privilege admin access, a host firewall, SSH keys with root login disabled, EDR, logs forwarded to the SIEM, and disk encryption where needed."

Tip: Cite CIS benchmarks.`,

'What is LAPS?':
`**Why they ask:** a specific high-value control.

**Answer:**
"Local Administrator Password Solution — now Windows LAPS — gives every machine a unique, automatically rotated local admin password stored in AD or Entra ID. Without it, one shared local admin password lets an attacker move from one compromised laptop to every machine."

Tip: Lateral movement prevention.`,

'Which network basics should a sysadmin know?':
`**Why they ask:** cross-domain skills.

**Answer:**
"IP addressing and subnetting, VLANs, routing and default gateways, DNS and DHCP, firewalls and ports, NAT, load balancers, and tools like ping, traceroute, nslookup or dig, ss, and tcpdump."

Tip: Be able to subnet quickly.`,

'How has cloud changed the sysadmin role?':
`**Why they ask:** evolution of the role.

**Answer:**
"More infrastructure as code, managed services, identity-centric security, cost awareness and automation. But hybrid environments — on-prem AD synced to Entra ID, VMs alongside Azure or AWS — still need traditional skills, so people who bridge both are valuable."

Tip: Hybrid skills are valuable.`,

'What M365 administration have you done?':
`**Why they ask:** common responsibilities.

**Answer:**
"Exchange Online — mail flow, connectors, retention — Entra ID users and groups, licensing, Teams and SharePoint policies, conditional access, Intune device management, and hybrid identity sync. I also ran a hybrid Exchange migration of 1,500 mailboxes."

Tip: Hybrid Exchange experience stands out.`,

'How do you handle a production outage?':
`**Why they ask:** incident handling.

**Answer:**
"Acknowledge, assess impact, communicate early, restore service first — fail over, roll back, restart — while preserving evidence. Escalate if needed, keep stakeholders updated on a schedule, then do root cause analysis and preventive actions afterward."

Tip: Restore first, then root cause.`,

'How do you manage changes safely?':
`**Why they ask:** change discipline.

**Answer:**
"Change requests with a risk assessment, testing, peer review, implementation and rollback plans, approved windows — CAB for high-risk changes — and post-change verification. Every change has a written rollback before it starts."

Tip: Always have a rollback plan.`,

'What documentation do you keep?':
`**Why they ask:** operational maturity.

**Answer:**
"Network and server diagrams, runbooks, build standards, an asset inventory or CMDB, a password vault, the DR plan and change history. Good runbooks let whoever's on call fix common issues without waking someone else."

Tip: Runbooks reduce on-call stress.`,

'How do you manage SSL/TLS certificates?':
`**Why they ask:** a common outage cause.

**Answer:**
"Keep an inventory of every certificate, automate renewal — ACME with Let's Encrypt, or internal PKI auto-enrollment — monitor expiry, and protect private keys. Public certificate lifetimes are shrinking under CA/Browser Forum rules, heading to 47 days by 2029, so manual renewal simply won't scale."

Tip: Automation is now mandatory.`,

'How do you test disaster recovery?':
`**Why they ask:** recovery readiness.

**Answer:**
"Scheduled DR tests: restore critical systems in the DR site or an isolated environment, measure actual RTO and RPO against targets, update runbooks, and fix the gaps. And include Active Directory — if identity can't be recovered, nothing else can log in."

Tip: Test AD recovery.`,

'How do you find which process is listening on a port?':
`**Why they ask:** quick practical skill.

**Answer:**
"ss -tulpn piped to grep :8080, or lsof -i :8080, or netstat -tulpn on older systems. On Windows, netstat -ano then match the PID in Task Manager or Get-Process."

Tip: Quick and precise.`,

'What are LVM benefits?':
`**Why they ask:** Linux storage management.

**Answer:**
"Logical Volume Manager lets you resize volumes, span multiple disks, take snapshots, and add storage without repartitioning. For example, lvextend -r -L +20G on the logical volume grows it by 20 GB and resizes the filesystem in one step — the -r flag is the part people forget."

Tip: The -r flag resizes the filesystem.`,

'How do you schedule tasks on Linux?':
`**Why they ask:** fundamentals.

**Answer:**
"cron with crontab -e and its five time fields — minute, hour, day of month, month, day of week — so 0 2 * * 1 runs at 2 a.m. every Monday. systemd timers give more control and logging, and at handles one-off jobs."

Tip: Know the cron syntax.`,

"How do you troubleshoot a server that won't boot?":
`**Why they ask:** recovery skills.

**Answer:**
"Check the console output through the hypervisor or iLO/iDRAC, ask what changed — patches, drivers, fstab edits — boot into recovery or safe mode, check disk health and space, restore from snapshot or backup if needed, then find the root cause. A bad fstab entry after adding a disk is a common culprit on Linux."

Tip: Ask what changed.`,

'Tell me about a major outage you resolved.':
`**Why they ask:** proof under pressure.

**Answer:**
"A storage controller failure took down 60 VMs. I failed over to the secondary array, prioritized critical applications, and restored service in 90 minutes. Afterwards we added firmware monitoring and quarterly failover tests."

Tip: Recovery time and prevention.`,

'Tell me about an automation that saved time.':
`**Why they ask:** automation proof.

**Answer:**
"New server builds took about four hours by hand. I created Ansible playbooks and VM templates that cut builds to 20 minutes, with consistent hardening every time."

Tip: Measured.`,

'How do you prioritize multiple urgent tickets?':
`**Why they ask:** judgment under pressure.

**Answer:**
"By business impact and number of users affected — the payroll server beats one person's printer — communicate expected timelines, and escalate or delegate when I can't cover everything."

Tip: Impact first.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"Microsoft AZ-104 and AZ-800 and AZ-801 for Windows Server Hybrid, Red Hat RHCSA and RHCE, CompTIA Linux+ and Server+, VMware VCP, and AWS SysOps Administrator."

Tip: RHCSA is respected.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward cloud or platform engineering, infrastructure architecture, or infrastructure management."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I keep systems stable and secure, automate repetitive work, and restore service fast when things break. I cut server build time by over 90% and raised patch compliance to 98%."

Tip: Proof.`,

"Users can't log in across the company. What do you check?":
`**Why they ask:** incident triage.

**Answer:**
"Domain controller health, DNS, time sync — Kerberos fails when clocks are more than 5 minutes apart — network connectivity, recent changes like GPOs, patches or expiring certificates, and the Entra ID or identity provider status for cloud apps. DNS and time first."

Tip: DNS and time first.`,

"A server's clock is off by 10 minutes. Why does it matter?":
`**Why they ask:** understanding dependencies.

**Answer:**
"Kerberos authentication fails beyond 5 minutes of skew, logs become hard to correlate during an investigation, certificates can appear not yet valid or expired, and scheduled jobs misfire. The fix is NTP done properly: the PDC Emulator syncs from a reliable external source, and members sync from the domain hierarchy."

Tip: Time hierarchy.`,

'How do you troubleshoot email delivery problems?':
`**Why they ask:** common support issue.

**Answer:**
"Message trace first to see where the message went, then MX records, SPF, DKIM and DMARC results, blocklists, connectors and transport rules, quarantine, and the bounce message from the recipient's side."

Tip: Message trace first.`,

'Why is a CMDB or asset inventory important?':
`**Why they ask:** foundational practice.

**Answer:**
"You can't patch, secure or support what you don't know exists. Inventory supports change impact analysis, licensing, incident response and audits — the forgotten server under a desk is usually the one that gets compromised."

Tip: Security foundation.`,

'How do you secure SSH?':
`**Why they ask:** Linux security.

**Answer:**
"Key-based authentication, root and password login disabled, allowed users and source IPs restricted, fail2ban, MFA or a bastion or session manager, and logging. Better still, use a session manager like AWS SSM so port 22 isn't open at all."

Tip: Prefer session managers over open SSH.`,

'Why do sysadmins need to understand licensing?':
`**Why they ask:** cost and compliance awareness.

**Answer:**
"Windows Server core-based licensing and CALs, VMware subscriptions and Microsoft 365 licensing all affect cost and compliance. A VM sprawl on the wrong licensing model can turn into a large audit penalty."

Tip: Cost awareness.`,

'How do you handle on-call responsibilities?':
`**Why they ask:** reliability and sustainability.

**Answer:**
"Clear runbooks, good alerting, defined escalation paths, proper handovers, and following up on every repeat page with a permanent fix so the rotation gets quieter over time."

Tip: Fix repeat alerts.`,

'How do you manage endpoints with Intune?':
`**Why they ask:** modern endpoint management.

**Answer:**
"Enroll devices with Autopilot so a laptop shipped straight to a new hire configures itself, apply compliance and configuration profiles, deploy apps, manage Windows Update rings, require compliant devices through conditional access, and wipe or retire lost devices remotely."

Tip: Autopilot for zero-touch provisioning.`,

'How do you check and manage logs on Linux?':
`**Why they ask:** troubleshooting basics.

**Answer:**
"journalctl with -u for a service, -f to follow and --since for a time range; files in /var/log like syslog or messages and auth.log or secure; logrotate for rotation and retention; and forwarding to a central system with rsyslog or an agent feeding the SIEM, so logs survive if the server doesn't."

Tip: Centralize logs.`,

};
