// inf-sys — generated from src/inf-sys-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Systems Administrator / Systems Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['inf-sys'] = [
["Role", "What does a systems administrator do?",
`**Why they ask:** baseline and scope.

**Answer:** Builds, maintains and secures servers and core services (Windows Server, Linux, Active Directory, DNS, DHCP, virtualization, storage, backups), patches and monitors systems, automates routine tasks, handles escalated incidents, and documents the environment.

Tip: Say how many servers and which platforms you've run.`, 'B', 'E'],

["Linux", "How do you troubleshoot a slow Linux server?",
`**Answer:** Check load and CPU (top/htop, uptime), memory and swap (free -h, vmstat), disk I/O (iostat, iotop), disk space (df -h, du), network (ss, iftop), and logs (journalctl, /var/log). Find the process causing it, then whether it's demand, a leak, or a misconfiguration.

Tip: Work through the USE method: Utilization, Saturation, Errors.`, 'B', 'M'],

["Linux", "Explain Linux file permissions.",
`**Answer:** Read (4), write (2) and execute (1) for owner, group and others. For example, 750 = owner rwx, group r-x, others none. Special bits are setuid, setgid and the sticky bit (on /tmp). Change them with chmod and chown; ACLs give finer control.

Tip: Explain why 777 is dangerous.`, 'B', 'E'],

["Linux", "What is systemd and how do you manage services?",
`**Answer:** The init system and service manager on most modern distros. Commands: systemctl start/stop/restart/enable/status, logs with journalctl -u service, and custom unit files in /etc/systemd/system.

Tip: Know how enable differs from start.`, 'B', 'E'],

["Linux", "A disk is full on a production server. What do you do?",
`**Answer:** Find what's large (du -sh /* | sort -h, ncdu). Check for deleted files still held open (lsof +L1). Clear or rotate logs safely, move data, extend the volume if it's LVM or a cloud disk, then fix the cause (logrotate, monitoring alerts at 80%).

Tip: Deleted-but-open files are a classic trap.`, 'B', 'M'],

["Windows", "What are the key Active Directory components?",
`**Answer:** Domains, forests and trusts; domain controllers; organizational units; users, groups and computers; Group Policy; DNS integration; FSMO roles; sites and replication; and Kerberos authentication.

Tip: Name the five FSMO roles.`, 'B', 'M'],

["Windows", "What are FSMO roles?",
`**Answer:** Five operations master roles. Forest-wide: Schema Master and Domain Naming Master. Domain-wide: RID Master, PDC Emulator (time source, password changes, lockouts) and Infrastructure Master.

Tip: The PDC Emulator is the most critical day to day.`, 'D', 'M'],

["Windows", "How do you troubleshoot a Group Policy not applying?",
`**Answer:** Run gpresult /r or rsop.msc on the client and check which OU the user or computer sits in. Then check security filtering and WMI filters, inheritance blocking and enforcement, replication (repadmin), and DNS. Force it with gpupdate /force and read the event logs.

Tip: Wrong OU and security filtering cause most failures.`, 'B', 'M'],

["Windows", "How do you troubleshoot AD replication problems?",
`**Answer:** repadmin /replsummary and /showrepl, dcdiag, DNS health, time sync, network connectivity between sites, and event logs. Fix the root cause before forcing replication.

Tip: DNS is behind many AD problems.`, 'D', 'M'],

["DNS", "Explain how DNS resolution works.",
`**Answer:** The client checks its local cache, then queries a recursive resolver. The resolver asks a root server, then the TLD server, then the authoritative server for the domain, caches the answer for the TTL, and returns it. Common record types: A, AAAA, CNAME, MX, TXT, NS, PTR, SRV.

Tip: AD relies on SRV records.`, 'B', 'E'],

["DHCP", "How does DHCP work?",
`**Answer:** DORA: the client sends a Discover, the server Offers an address, the client Requests it, and the server Acknowledges. The lease includes the IP, subnet mask, gateway, DNS servers and lease duration. Relay agents (IP helpers) forward requests across subnets.

Tip: Mention DHCP failover.`, 'B', 'E'],

["Virtualization", "What virtualization platforms have you managed?",
`**Answer:** VMware vSphere (ESXi, vCenter, vMotion, DRS, HA), Microsoft Hyper-V, Nutanix AHV, and cloud VMs. Since Broadcom bought VMware, many companies are reviewing licensing costs and alternatives.

Tip: Be ready to talk about the VMware licensing changes.`, 'B', 'M'],

["Virtualization", "What are VMware HA and DRS?",
`**Answer:** **HA** restarts VMs on other hosts when a host fails. **DRS** balances VM load across hosts automatically using vMotion. Both need shared storage and a cluster setup.

Tip: HA means a restart, not zero downtime.`, 'B', 'M'],

["Storage", "SAN vs NAS vs object storage?",
`**Answer:** **SAN** is block storage over Fibre Channel or iSCSI (databases, VMs). **NAS** is file storage over NFS or SMB (shared files). **Object storage** (S3-style) holds unstructured data and backups at scale over HTTP APIs.

Tip: Match each to a workload.`, 'B', 'E'],

["Storage", "What RAID levels do you know?",
`**Answer:** RAID 0 (striping, no redundancy), RAID 1 (mirroring), RAID 5 (striping with parity, survives one disk failure), RAID 6 (two parity, survives two), RAID 10 (mirroring plus striping, best performance with redundancy). RAID is not a backup.

Tip: Say "RAID is not a backup."`, 'B', 'E'],

["Backup", "How do you design a backup strategy?",
`**Answer:** Follow 3-2-1-1-0: three copies, two media types, one offsite, one immutable or offline, and zero errors on verified restores. Set RPO and RTO per system, schedule full and incremental backups, encrypt them, and test restores regularly.

Tip: Untested backups don't count.`, 'B', 'M'],

["Backup", "RPO vs RTO?",
`**Answer:** **RPO** (recovery point objective) is how much data loss is acceptable, measured in time. **RTO** (recovery time objective) is how quickly the system must be restored. They drive backup frequency and recovery design.

**Example:** RPO 1 hour means backing up or replicating at least hourly.

Tip: Give an example.`, 'B', 'E'],

["Patching", "How do you manage patching across servers?",
`**Answer:** Inventory, then patch in rings (test → pilot → production), using maintenance windows, WSUS/SCCM/Intune/Azure Update Manager for Windows and Ansible or Satellite for Linux. Have rollback plans, verify after patching, prioritize exploited vulnerabilities, and report compliance.

Tip: Rings reduce risk.`, 'B', 'M'],

["Automation", "What do you automate and with which tools?",
`**Answer:** PowerShell for Windows/AD tasks, Bash/Python for Linux, Ansible for configuration management, and Terraform for infrastructure. Typical jobs: user provisioning, server builds, patch reports, log cleanup, health checks.

Tip: Name one automation and the time it saved.`, 'B', 'M'],

["Automation", "Write a PowerShell approach to find inactive AD users.",
`**Answer:**
- Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly
- Or Get-ADUser -Filter {LastLogonTimeStamp -lt $date} -Properties LastLogonTimeStamp
- Export with Export-Csv, review with managers, then disable and move to a disabled OU before deleting.

Tip: Disable before you delete.`, 'B', 'M'],

["Monitoring", "What do you monitor on servers?",
`**Answer:** Availability, CPU, memory, disk space and I/O, service status, event and log errors, backup success, certificate expiry, and application health checks. Alert on symptoms that need action, with thresholds that avoid noise. Tools include Zabbix, PRTG, SolarWinds, Datadog and Azure Monitor.

Tip: Certificate expiry alerts prevent outages.`, 'B', 'E'],

["Security", "How do you harden a server?",
`**Answer:** Minimal installed roles and packages, CIS benchmark settings, timely patching, disabling unused services and ports, least-privilege admin access, host firewall, SSH key auth (no root login), EDR, logging to a SIEM, and disk encryption where needed.

Tip: Cite CIS benchmarks.`, 'B', 'M'],

["Security", "What is LAPS?",
`**Answer:** Local Administrator Password Solution (now Windows LAPS) gives every machine a unique, rotating local admin password stored in AD or Entra ID. This prevents lateral movement through shared local admin passwords.

Tip: Lateral movement prevention.`, 'B', 'M'],

["Networking", "Which network basics should a sysadmin know?",
`**Answer:** IP addressing and subnetting, VLANs, routing and default gateways, DNS and DHCP, firewalls and ports, NAT, load balancers, and tools like ping, traceroute, nslookup/dig, netstat/ss, and tcpdump.

Tip: Be able to subnet quickly.`, 'B', 'E'],

["Cloud", "How has cloud changed the sysadmin role?",
`**Answer:** More infrastructure as code, managed services, identity-centric security, cost awareness, and automation, while hybrid environments (on-prem AD plus Entra ID, VMs plus Azure/AWS) still need traditional skills.

Tip: Hybrid skills are valuable.`, 'B', 'M'],

["Microsoft 365", "What M365 administration have you done?",
`**Answer:** Exchange Online (mail flow, connectors, retention), Entra ID users and groups, licensing, Teams and SharePoint policies, conditional access, Intune device management, and hybrid identity sync.

Tip: Hybrid Exchange experience stands out.`, 'B', 'M'],

["Incident", "How do you handle a production outage?",
`**Answer:** Acknowledge, assess impact, communicate early, restore service first (failover, rollback, restart) and preserve evidence. Escalate if needed, keep updating stakeholders, then do a root cause analysis and preventive actions.

Tip: Restore first, then root cause.`, 'B', 'E'],

["Change", "How do you manage changes safely?",
`**Answer:** Change requests with risk assessment, testing, peer review, implementation and rollback plans, approved windows (CAB for high-risk changes), and post-change verification.

Tip: Always have a rollback plan.`, 'B', 'E'],

["Documentation", "What documentation do you keep?",
`**Answer:** Network and server diagrams, runbooks, build standards, an asset inventory/CMDB, a password vault, a DR plan, and change history.

Tip: Runbooks reduce on-call stress.`, 'B', 'E'],

["Certificates", "How do you manage SSL/TLS certificates?",
`**Answer:** Inventory all certificates, automate renewal (ACME/Let's Encrypt, internal PKI auto-enrollment), monitor expiry, and protect private keys. Public certificate lifetimes are getting shorter (heading to 47 days by 2029), so automation is essential.

Tip: Automation is now mandatory.`, 'D', 'M'],

["DR", "How do you test disaster recovery?",
`**Answer:** Scheduled DR tests: restore critical systems in a DR site or isolated environment, measure actual RTO/RPO against targets, update runbooks, and fix gaps. Include identity systems (AD) in tests.

Tip: Test AD recovery.`, 'D', 'M'],

["Linux", "How do you find which process is listening on a port?",
`**Answer:** ss -tulpn | grep :8080, lsof -i :8080, or netstat -tulpn on older systems.

Tip: Quick and precise.`, 'B', 'E'],

["Linux", "What are LVM benefits?",
`**Answer:** Logical Volume Manager lets you resize volumes, span disks, take snapshots and add storage without repartitioning. For example, lvextend -r -L +20G /dev/vg/lv grows the volume and the filesystem together.

Tip: The -r flag resizes the filesystem.`, 'D', 'M'],

["Linux", "How do you schedule tasks on Linux?",
`**Answer:** cron (crontab -e, five time fields), systemd timers for more control and logging, and at for one-off jobs.

Tip: Know the cron syntax.`, 'B', 'E'],

["Windows", "How do you troubleshoot a server that won't boot?",
`**Answer:** Check console output or the hypervisor console, recent changes (patches, drivers), boot into recovery or safe mode, check disk health and space, restore from snapshot or backup if needed, then find the root cause.

Tip: Ask what changed.`, 'B', 'M'],

["Behavioral", "Tell me about a major outage you resolved.",
`**Sample answer:** "A storage controller failure took down 60 VMs. I failed over to the secondary array, prioritized critical apps and restored service in 90 minutes. Afterwards we added firmware monitoring and quarterly failover tests."

Tip: Recovery time and prevention.`, 'B', 'M'],

["Behavioral", "Tell me about an automation that saved time.",
`**Sample answer:** "New server builds took 4 hours manually. I created Ansible playbooks and VM templates, cutting builds to 20 minutes with consistent hardening."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "How do you prioritize multiple urgent tickets?",
`**Answer:** By business impact and number of users affected, communicate expected timelines, and escalate or delegate when needed.

Tip: Impact first.`, 'B', 'E'],

["Certifications", "Which certifications are useful?",
`**Answer:** Microsoft (AZ-104, AZ-800/801 Windows Server Hybrid), Red Hat RHCSA/RHCE, CompTIA Linux+/Server+, VMware VCP, and AWS SysOps.

Tip: RHCSA is respected.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Cloud or platform engineering, infrastructure architecture, or infrastructure management.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep systems stable and secure, automate repetitive work, and restore service fast when things break. I cut server build time by over 90% and improved patch compliance to 98%."

Tip: Proof.`, 'B', 'E'],

["Scenario", "Users can't log in across the company. What do you check?",
`**Answer:** Domain controller health and availability, DNS, time sync (Kerberos needs clocks within 5 minutes), network connectivity, recent changes (GPOs, patches, certificates), and Entra ID/IdP status for cloud apps.

Tip: DNS and time first.`, 'B', 'M'],

["Scenario", "A server's clock is off by 10 minutes. Why does it matter?",
`**Answer:** Kerberos authentication fails beyond 5 minutes of skew, logs become hard to correlate, certificates may appear invalid, and scheduled jobs misfire. Fix NTP configuration (the PDC emulator syncs from an external source; members sync from the domain).

Tip: Time hierarchy.`, 'B', 'M'],

["Email", "How do you troubleshoot email delivery problems?",
`**Answer:** Message trace, check MX records, SPF/DKIM/DMARC results, blacklists, connectors and transport rules, quarantine, and the recipient side's bounce messages.

Tip: Message trace first.`, 'B', 'M'],

["Inventory", "Why is a CMDB or asset inventory important?",
`**Answer:** You can't patch, secure or support what you don't know about. Inventory supports change impact analysis, licensing, incident response and audits.

Tip: Security foundation.`, 'B', 'E'],

["SSH", "How do you secure SSH?",
`**Answer:** Key-based authentication, disable root and password login, restrict users and source IPs, change defaults where useful, fail2ban, MFA or bastion/session manager, and logging.

Tip: Prefer session managers over open SSH.`, 'B', 'M'],

["Licensing", "Why do sysadmins need to understand licensing?",
`**Answer:** Windows Server core licensing, CALs, VMware and Microsoft 365 licensing affect cost and compliance. Mistakes can lead to audit penalties.

Tip: Cost awareness.`, 'D', 'M'],

["On-call", "How do you handle on-call responsibilities?",
`**Answer:** Clear runbooks, good alerting, escalation paths, proper handovers, and follow-up fixes to reduce repeat pages.

Tip: Fix repeat alerts.`, 'B', 'E']
];

QB['inf-sys'] = (QB['inf-sys']||[]).concat([
["Intune", "How do you manage endpoints with Intune?",
`**Answer:** Enroll devices with Autopilot, apply compliance and configuration profiles, deploy apps, manage Windows Update rings, require compliant devices through conditional access, and wipe or retire lost devices remotely.

Tip: Autopilot for zero-touch provisioning.`, 'B', 'M'],
["Linux", "How do you check and manage logs on Linux?",
`**Answer:** journalctl (-u service, -f, --since), files in /var/log (syslog/messages, auth.log/secure), logrotate for rotation and retention, and forwarding to a central system (rsyslog or an agent to a SIEM).

Tip: Centralize logs.`, 'B', 'E']
]);
