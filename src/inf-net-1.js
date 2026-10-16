// Network Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['inf-net'] = [
["Fundamentals", "Explain the OSI model.",
`**Why they ask:** shared vocabulary for troubleshooting.

**Answer:** 7 layers: 1 Physical (cables, signals), 2 Data Link (MAC, switches, VLANs), 3 Network (IP, routing), 4 Transport (TCP/UDP, ports), 5 Session, 6 Presentation (encoding, encryption), 7 Application (HTTP, DNS). The TCP/IP model collapses these into 4 layers.

Tip: Use it to structure troubleshooting from the bottom up.`, 'B', 'E'],

["Fundamentals", "TCP vs UDP?",
`**Answer:** **TCP** is connection-oriented, reliable and ordered, with flow and congestion control (three-way handshake SYN, SYN-ACK, ACK). Used for web, email and file transfer. **UDP** is connectionless and low-overhead with no delivery guarantee. Used for DNS, VoIP, video and gaming. QUIC (HTTP/3) runs over UDP.

Tip: Mention QUIC.`, 'B', 'E'],

["Subnetting", "How many usable hosts are in a /26, and what is the subnet mask?",
`**Answer:** /26 = 255.255.255.192, 64 addresses per subnet, 62 usable (minus network and broadcast).

**Worked example:** 192.168.1.0/26 → network .0, usable .1–.62, broadcast .63. The next subnet starts at .64.

Tip: Practice quick subnetting.`, 'B', 'E'],

["Switching", "What is a VLAN and why use it?",
`**Answer:** A virtual LAN splits a switch into separate broadcast domains. It segments traffic by function or security zone. Trunks (802.1Q) carry multiple VLANs between switches, and inter-VLAN routing goes through a layer-3 switch or firewall.

Tip: Segmentation for security.`, 'B', 'E'],

["Switching", "What is Spanning Tree Protocol?",
`**Answer:** STP (802.1D) prevents layer-2 loops by blocking redundant paths and electing a root bridge. RSTP (802.1w) converges faster, and MSTP maps VLANs to instances. Protect it with BPDU Guard, Root Guard and PortFast on edge ports.

Tip: Loops cause broadcast storms.`, 'B', 'M'],

["Routing", "Compare OSPF and BGP.",
`**Answer:** **OSPF** is a link-state interior gateway protocol using areas and cost metrics, converges quickly inside an organization. **BGP** is a path-vector exterior gateway protocol used between autonomous systems (internet, ISPs, cloud connectivity, large WANs), with policy-based path selection using attributes (local preference, AS path, MED).

Tip: BGP is policy; OSPF is shortest path.`, 'B', 'M'],

["Routing", "How does BGP choose the best path?",
`**Answer:** In order, roughly: highest weight (Cisco), highest local preference, locally originated, shortest AS path, lowest origin type, lowest MED, eBGP over iBGP, lowest IGP metric to next hop, then tiebreakers (oldest route, lowest router ID).

Tip: Remember "weight, local pref, AS path, MED."`, 'D', 'M'],

["Routing", "What is administrative distance?",
`**Answer:** How much a router trusts each route source when several protocols offer the same prefix. Lower is preferred: connected 0, static 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, iBGP 200.

Tip: Know the common values.`, 'B', 'M'],

["Troubleshooting", "A user can't reach a website. How do you troubleshoot?",
`**Answer:** Bottom up: physical link and IP address (ipconfig/ip a), gateway ping, DNS resolution (nslookup), reach the site's IP (ping/traceroute), check port access (Test-NetConnection/curl), proxy and firewall rules, then whether others are affected.

Tip: Scope: one user or many?`, 'B', 'E'],

["Troubleshooting", "How do you troubleshoot intermittent packet loss?",
`**Answer:** Run continuous pings and MTR to find where loss starts, check interface errors and CRCs, duplex mismatches, utilization and drops, QoS policies, wireless interference, and ISP issues. Correlate with time patterns.

Tip: Interface counters tell the story.`, 'D', 'M'],

["Firewalls", "Stateful vs stateless firewalls?",
`**Answer:** **Stateful** firewalls track connection state and automatically allow return traffic. **Stateless** filters (ACLs) evaluate each packet independently. Next-generation firewalls add application awareness, user identity, IPS and TLS inspection.

Tip: Palo Alto, Fortinet, Cisco experience.`, 'B', 'E'],

["Firewalls", "How do you manage firewall rules well?",
`**Answer:** Least privilege, documented business justification and owners, regular rule reviews to remove unused and shadowed rules, change control, logging, and object naming standards.

Tip: Rule hygiene.`, 'B', 'M'],

["NAT", "Explain NAT and PAT.",
`**Answer:** NAT translates private IPs to public ones. PAT (overload) maps many internal hosts to one public IP using different source ports. Static NAT maps one-to-one for inbound services.

Tip: PAT is what home routers do.`, 'B', 'E'],

["WAN", "What is SD-WAN?",
`**Answer:** Software-defined WAN uses multiple transports (broadband, MPLS, LTE/5G) with centralized policy, application-aware routing, and simpler branch deployment. It often lowers costs compared with MPLS and integrates with SASE security.

Tip: Application-aware routing.`, 'B', 'M'],

["WAN", "MPLS vs internet VPN?",
`**Answer:** **MPLS** is a provider-managed private network with predictable performance and SLAs, but costly. **Internet VPN** (IPsec) is cheaper and flexible but has variable performance. SD-WAN blends the two.

Tip: Cost vs predictability.`, 'B', 'M'],

["VPN", "How does an IPsec VPN work?",
`**Answer:** IKE phase 1 sets up a secure channel (authentication, key exchange). Phase 2 negotiates IPsec SAs for the data. ESP encrypts and authenticates packets. Mismatched parameters (encryption, hashing, DH group, lifetimes, proxy IDs) are common failure causes.

Tip: Phase 1 vs phase 2 troubleshooting.`, 'D', 'M'],

["Wireless", "What matters in enterprise Wi-Fi design?",
`**Answer:** Site surveys, channel planning (5/6 GHz preferred), AP density for capacity not just coverage, WPA3-Enterprise with 802.1X, roaming support, guest isolation, and Wi-Fi 6/6E/7 capabilities.

Tip: Design for capacity.`, 'D', 'M'],

["Security", "What is 802.1X / NAC?",
`**Answer:** Port-based network access control. Devices authenticate (via RADIUS, using certificates or credentials) before getting network access, and can be placed in VLANs based on identity and posture. Tools include Cisco ISE, Aruba ClearPass and Forescout.

Tip: Certificate-based auth.`, 'D', 'M'],

["Load Balancing", "How do load balancers work?",
`**Answer:** They distribute traffic across servers using algorithms (round robin, least connections, hash), health checks, session persistence and TLS termination. Layer 4 balancing works on IP/port; layer 7 on HTTP content. Examples: F5, NetScaler, HAProxy, cloud ALB/NLB.

Tip: L4 vs L7.`, 'B', 'M'],

["QoS", "What is QoS and when do you use it?",
`**Answer:** Quality of Service prioritizes traffic (voice and video) using classification and marking (DSCP), queuing and shaping/policing, so critical apps work during congestion.

Tip: Voice uses EF (DSCP 46).`, 'D', 'M'],

["Cloud", "How do you connect on-prem to the cloud?",
`**Answer:** Site-to-site VPN (quick, internet-based) or dedicated connections (AWS Direct Connect, Azure ExpressRoute, GCP Interconnect) for predictable bandwidth, with BGP routing, redundancy and hub-and-spoke designs (Transit Gateway, Virtual WAN).

Tip: Redundant paths.`, 'B', 'M'],

["Cloud", "How does cloud networking differ from on-prem?",
`**Answer:** Software-defined VPCs/VNets, security groups instead of physical firewalls, no layer-2 broadcast, routing tables per subnet, managed load balancers, and everything defined in code.

Tip: No broadcast or multicast by default.`, 'B', 'M'],

["Automation", "How do you automate network tasks?",
`**Answer:** Python (Netmiko, NAPALM, Nornir), Ansible network modules, APIs on modern platforms, Git for configs, and templates (Jinja2). Uses include config backups, compliance checks, bulk changes and inventory.

Tip: Config backups are a good first win.`, 'B', 'M'],

["Monitoring", "How do you monitor networks?",
`**Answer:** SNMP and streaming telemetry for device health and interface utilization, NetFlow/sFlow for traffic analysis, syslog, synthetic tests, and tools like SolarWinds, PRTG, LibreNMS, Datadog or ThousandEyes.

Tip: Flow data for capacity and security.`, 'B', 'M'],

["Design", "How would you design a resilient campus network?",
`**Answer:** Core/distribution/access tiers (or collapsed core), redundant links and devices, first-hop redundancy (HSRP/VRRP), link aggregation, fast convergence, segmentation with VLANs/VRFs, and out-of-band management.

Tip: Out-of-band management.`, 'D', 'M'],

["Redundancy", "What is HSRP/VRRP?",
`**Answer:** First-hop redundancy protocols that give hosts a virtual gateway IP shared by two or more routers. If the active one fails, the standby takes over.

Tip: Gateway redundancy.`, 'B', 'M'],

["DNS", "What network issues does DNS cause?",
`**Answer:** Wrong records, stale caching (TTL), split-horizon misconfigurations, resolver outages, and DNSSEC failures, all of which look like "network down" to users.

Tip: "It's always DNS."`, 'B', 'E'],

["IPv6", "What should you know about IPv6?",
`**Answer:** 128-bit addresses, no NAT needed, SLAAC and DHCPv6, neighbor discovery instead of ARP, dual-stack deployments, and security policies that cover IPv6 traffic too.

Tip: Don't forget IPv6 firewall rules.`, 'D', 'M'],

["Data Center", "What is spine-leaf architecture?",
`**Answer:** Every leaf switch connects to every spine switch, giving predictable low latency and easy scale-out for east-west traffic. It is often paired with VXLAN/EVPN overlays.

Tip: East-west traffic.`, 'D', 'M'],

["VXLAN", "What is VXLAN/EVPN?",
`**Answer:** VXLAN encapsulates layer-2 frames in UDP to extend segments across a layer-3 fabric with 16 million segment IDs. EVPN (a BGP control plane) distributes MAC/IP information efficiently.

Tip: Modern DC fabrics.`, 'D', 'S'],

["Change", "How do you make network changes safely?",
`**Answer:** Change control, pre-checks and post-checks, config backups, rollback commands (commit confirmed on Juniper, reload in on Cisco), maintenance windows, and peer review.

Tip: Commit confirmed.`, 'B', 'M'],

["Behavioral", "Tell me about a network outage you fixed.",
`**Sample answer:** "A spanning-tree loop from an unauthorized switch took down a floor. I traced it through MAC flapping logs, shut the port, restored service in 15 minutes, then enabled BPDU Guard on all access ports."

Tip: Root cause and prevention.`, 'B', 'M'],

["Behavioral", "Tell me about a network project you delivered.",
`**Sample answer:** "I led an SD-WAN migration for 45 branches, replacing MPLS. We cut WAN costs 38% and improved application performance with dynamic path selection."

Tip: Cost and performance.`, 'B', 'M'],

["Behavioral", "How do you handle 'the network is slow' complaints?",
`**Answer:** Get specifics (which app, where, when), measure (latency, loss, utilization), check whether it's network, server or application, and share evidence.

Tip: Data over opinions.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** Cisco CCNA/CCNP/CCIE, Juniper JNCIA/JNCIP, Palo Alto PCNSE, Fortinet NSE, AWS Advanced Networking, and Azure Network Engineer.

Tip: CCNP is a strong mid-level signal.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Network architect, cloud networking, or network security.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design resilient networks, troubleshoot fast with data, and automate repetitive work. I cut WAN costs 38% and eliminated recurring layer-2 outages."

Tip: Proof.`, 'B', 'E'],

["ARP", "What is ARP?",
`**Answer:** Address Resolution Protocol maps IPv4 addresses to MAC addresses on a local network. ARP spoofing is a related attack, prevented with Dynamic ARP Inspection.

Tip: Layer 2/3 link.`, 'B', 'E'],

["MTU", "What problems do MTU mismatches cause?",
`**Answer:** Fragmentation or dropped packets, especially over VPN tunnels. The symptom is small packets working while large transfers hang. Fix with proper MTU/MSS clamping and test with ping -f -l (Windows) or ping -M do -s (Linux).

Tip: Classic VPN issue.`, 'D', 'M'],

["Link Aggregation", "What is LACP?",
`**Answer:** Link Aggregation Control Protocol (802.3ad) bundles multiple physical links into one logical link for bandwidth and redundancy.

Tip: Hashing determines distribution.`, 'B', 'M'],

["Packet Capture", "When do you use packet captures?",
`**Answer:** For deep troubleshooting: TCP handshake failures, retransmissions, TLS issues and application behavior, using Wireshark or tcpdump on the right capture points.

Tip: Capture both sides.`, 'B', 'M'],

["Segmentation", "What is a VRF?",
`**Answer:** Virtual Routing and Forwarding creates separate routing tables on one device, isolating networks (for example tenants or guest vs corporate) at layer 3.

Tip: Layer-3 segmentation.`, 'D', 'M'],

["Scenario", "A branch office is down. What do you check?",
`**Answer:** Circuit status with the ISP, router reachability through the backup path or LTE, power at the site, recent changes, VPN/SD-WAN tunnel state, and local contacts for physical checks.

Tip: Out-of-band access helps.`, 'B', 'E'],

["Scenario", "Users report slow Microsoft 365 performance at one site. What do you check?",
`**Answer:** Local internet breakout vs backhauling through HQ, proxy/TLS inspection of M365 traffic (it should usually be bypassed), DNS location, bandwidth utilization, and Microsoft connectivity tests.

Tip: Local breakout.`, 'D', 'M'],

["Documentation", "What network documentation do you keep?",
`**Answer:** Topology diagrams (physical and logical), IP address management (IPAM), circuit inventory, config backups, and runbooks.

Tip: IPAM.`, 'B', 'E'],

["Security", "How do you secure network devices?",
`**Answer:** AAA with TACACS+/RADIUS, SSH only, management ACLs, out-of-band management networks, firmware updates, logging, and disabling unused services.

Tip: Management plane protection.`, 'B', 'M']
];
