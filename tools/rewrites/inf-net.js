// Rewritten Infrastructure — Network Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix inf-net-).
module.exports = {

'TCP vs UDP?':
`**Why they ask:** networking fundamentals.

**Answer:**
"TCP is connection-oriented, reliable and ordered, with flow and congestion control, starting with the three-way handshake — SYN, SYN-ACK, ACK. It carries web, email and file transfer. UDP is connectionless and low-overhead with no delivery guarantee, so it suits DNS, VoIP, video and gaming, where a late packet is useless anyway. QUIC, used by HTTP/3, runs over UDP and builds its own reliability on top."

Tip: Mention QUIC.`,

'How many usable hosts are in a /26, and what is the subnet mask?':
`**Why they ask:** subnetting fluency.

**Answer:**
"A /26 leaves 6 host bits, so 2 to the 6th is 64 addresses, minus the network and broadcast addresses — 62 usable hosts. The mask is 255.255.255.192. For 192.168.1.0/26: network .0, usable .1 through .62, broadcast .63, and the next subnet starts at .64."

Tip: Practice quick subnetting.`,

'What is a VLAN and why use it?':
`**Why they ask:** segmentation basics.

**Answer:**
"A virtual LAN splits one switch into separate broadcast domains, so we can segment traffic by function or security zone — users, voice, printers, servers — without separate hardware. 802.1Q trunks carry multiple VLANs between switches, and traffic between VLANs goes through a layer-3 switch or a firewall, which is where segmentation policy is enforced."

Tip: Segmentation for security.`,

'What is Spanning Tree Protocol?':
`**Why they ask:** layer-2 stability.

**Answer:**
"STP, 802.1D, prevents layer-2 loops by electing a root bridge and blocking redundant paths. RSTP, 802.1w, converges in seconds instead of 30 to 50, and MSTP maps groups of VLANs to instances. I protect it with BPDU Guard and PortFast on edge ports and Root Guard where the root must never move. Without it, a loop causes a broadcast storm that takes the network down in seconds."

Tip: Loops cause broadcast storms.`,

'Compare OSPF and BGP.':
`**Why they ask:** routing protocol knowledge.

**Answer:**
"OSPF is a link-state interior gateway protocol: routers share link states within areas and compute shortest paths by cost, converging fast inside an organization. BGP is a path-vector exterior gateway protocol used between autonomous systems — the internet, ISPs, cloud connectivity, large WANs — and picks paths by policy using attributes like local preference, AS path and MED. OSPF answers 'what's shortest?'; BGP answers 'what does our policy prefer?'"

Tip: BGP is policy; OSPF is shortest path.`,

'How does BGP choose the best path?':
`**Why they ask:** BGP depth.

**Answer:**
"Roughly in order: highest weight on Cisco, highest local preference, locally originated routes, shortest AS path, lowest origin type, lowest MED, eBGP over iBGP, lowest IGP metric to the next hop, then tiebreakers like oldest route and lowest router ID. To make one ISP primary for outbound traffic, I'd raise local preference on routes from that ISP; to influence inbound, AS path prepending on the backup."

Tip: Remember "weight, local pref, AS path, MED."`,

'What is administrative distance?':
`**Why they ask:** route selection.

**Answer:**
"How much a router trusts each route source when several offer the same prefix — lower wins. Connected is 0, static 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, iBGP 200. That's why a floating static route with distance 250 makes a good backup that only activates when the dynamic route disappears."

Tip: Know the common values.`,

"A user can't reach a website. How do you troubleshoot?":
`**Why they ask:** structured troubleshooting.

**Answer:**
"First scope it — one user or many? Then bottom up: link and IP address with ipconfig or ip a, ping the gateway, check DNS with nslookup, reach the site's IP with ping and traceroute, test the port with Test-NetConnection or curl, then proxy and firewall rules. If DNS returns the wrong address, it's not a routing problem, and I've saved an hour."

Tip: Scope: one user or many?`,

'How do you troubleshoot intermittent packet loss?':
`**Why they ask:** hard real-world issues.

**Answer:**
"Continuous pings and MTR to find the hop where loss starts, then interface errors and CRCs, duplex mismatches, utilization and output drops, QoS policies, wireless interference and ISP issues — correlated with time patterns. Rising CRC errors on one port usually means a bad cable or optic."

Tip: Interface counters tell the story.`,

'Stateful vs stateless firewalls?':
`**Why they ask:** firewall fundamentals.

**Answer:**
"Stateful firewalls track connection state, so return traffic for an allowed outbound session is permitted automatically. Stateless filters like router ACLs judge each packet independently, so return traffic needs its own rules. Next-generation firewalls add application awareness, user identity, IPS and TLS inspection — I've worked mostly with Palo Alto and Fortinet."

Tip: Palo Alto, Fortinet, Cisco experience.`,

'How do you manage firewall rules well?':
`**Why they ask:** rule hygiene.

**Answer:**
"Least privilege, a documented business justification and owner for every rule, regular reviews to remove unused and shadowed rules — hit counts make that easy — change control, logging, and consistent object naming. In one cleanup we removed 40% of rules with zero hits in a year."

Tip: Rule hygiene.`,

'Explain NAT and PAT.':
`**Why they ask:** addressing basics.

**Answer:**
"NAT translates private addresses to public ones. PAT, or NAT overload, maps many internal hosts to one public IP by giving each session a different source port — that's what a home router does. Static NAT maps one private address to one public address for inbound services like a web server."

Tip: PAT is what home routers do.`,

'What is SD-WAN?':
`**Why they ask:** modern WAN design.

**Answer:**
"Software-defined WAN uses multiple transports — broadband, MPLS, LTE or 5G — under centralized policy, with application-aware routing that sends voice over the best-performing link in real time, and much simpler branch rollout. It usually cuts costs compared with all-MPLS and integrates with SASE security."

Tip: Application-aware routing.`,

'MPLS vs internet VPN?':
`**Why they ask:** WAN trade-offs.

**Answer:**
"MPLS is a provider-managed private network with predictable performance and SLAs, but it's expensive. An internet IPsec VPN is cheap and flexible, but performance varies. SD-WAN blends the two, using internet links most of the time with policy-based failover."

Tip: Cost vs predictability.`,

'How does an IPsec VPN work?':
`**Why they ask:** VPN troubleshooting knowledge.

**Answer:**
"IKE phase 1 builds a secure channel — authentication and key exchange. Phase 2 negotiates the IPsec security associations for the actual traffic, and ESP encrypts and authenticates the packets. Most failures are mismatches: encryption or hash algorithms, DH groups, lifetimes, or proxy IDs and traffic selectors. Phase 1 up but phase 2 down usually points to proxy ID mismatches."

Tip: Phase 1 vs phase 2 troubleshooting.`,

'What matters in enterprise Wi-Fi design?':
`**Why they ask:** wireless design.

**Answer:**
"Site surveys, channel planning favoring 5 and 6 GHz, AP density for capacity rather than just coverage — a conference room of 80 laptops needs more than one AP — WPA3-Enterprise with 802.1X, fast roaming support, guest isolation, and Wi-Fi 6, 6E or 7 capabilities."

Tip: Design for capacity.`,

'What is 802.1X / NAC?':
`**Why they ask:** access control.

**Answer:**
"Port-based network access control: devices authenticate through RADIUS — ideally with certificates — before getting network access, and can be placed into VLANs based on identity and posture. A corporate laptop gets the employee VLAN; an unknown device lands in guest or is blocked. Cisco ISE, Aruba ClearPass and Forescout are common."

Tip: Certificate-based auth.`,

'How do load balancers work?':
`**Why they ask:** application delivery.

**Answer:**
"They distribute traffic across servers using algorithms — round robin, least connections, hashing — with health checks, session persistence and TLS termination. Layer 4 balancing works on IP and port; layer 7 inspects HTTP and can route /api to one pool and /images to another. F5, NetScaler, HAProxy and cloud ALB and NLB are the usual platforms."

Tip: L4 vs L7.`,

'What is QoS and when do you use it?':
`**Why they ask:** traffic prioritization.

**Answer:**
"Quality of Service prioritizes traffic like voice and video through classification and DSCP marking, queuing, and shaping or policing, so critical applications keep working during congestion. Voice is marked EF, DSCP 46, and placed in a priority queue. It only matters when links are congested, which is exactly when it matters most."

Tip: Voice uses EF (DSCP 46).`,

'How do you connect on-prem to the cloud?':
`**Why they ask:** hybrid networking.

**Answer:**
"Site-to-site VPN for quick, internet-based connectivity, or dedicated connections — AWS Direct Connect, Azure ExpressRoute, GCP Interconnect — for predictable bandwidth, with BGP routing, redundant paths and hub-and-spoke designs like Transit Gateway or Virtual WAN. A common pattern is a dedicated link as primary with VPN as backup."

Tip: Redundant paths.`,

'How does cloud networking differ from on-prem?':
`**Why they ask:** cloud awareness.

**Answer:**
"Networks are software-defined VPCs or VNets, security groups replace much of the physical firewalling, there's no layer-2 broadcast or multicast by default, routing tables are per subnet, load balancers are managed services, and everything is defined in code. Tricks that rely on layer 2, like gratuitous ARP failover, don't work."

Tip: No broadcast or multicast by default.`,

'How do you automate network tasks?':
`**Why they ask:** modern network engineering.

**Answer:**
"Python with Netmiko, NAPALM or Nornir, Ansible network modules, APIs on modern platforms, Git for configurations, and Jinja2 templates. Typical uses: config backups, compliance checks, bulk changes and inventory. Config backups are the best first win — easy, safe and immediately useful."

Tip: Config backups are a good first win.`,

'How do you monitor networks?':
`**Why they ask:** operational visibility.

**Answer:**
"SNMP and streaming telemetry for device health and interface utilization, NetFlow or sFlow for traffic analysis, syslog, synthetic tests, and tools like SolarWinds, PRTG, LibreNMS, Datadog or ThousandEyes. Flow data answers 'who's using the bandwidth?' and helps with security investigations too."

Tip: Flow data for capacity and security.`,

'How would you design a resilient campus network?':
`**Why they ask:** design skills.

**Answer:**
"Core, distribution and access tiers — or a collapsed core for smaller sites — with redundant links and devices, first-hop redundancy like HSRP or VRRP, link aggregation, fast convergence, segmentation with VLANs and VRFs, and an out-of-band management network so we can still reach devices when the production network is broken."

Tip: Out-of-band management.`,

'What is HSRP/VRRP?':
`**Why they ask:** gateway redundancy.

**Answer:**
"First-hop redundancy protocols that give hosts a virtual gateway IP shared by two or more routers. Hosts always point to the virtual address; if the active router fails, the standby takes over in seconds and nobody reconfigures anything. HSRP is Cisco-proprietary; VRRP is the open standard."

Tip: Gateway redundancy.`,

'What network issues does DNS cause?':
`**Why they ask:** practical experience.

**Answer:**
"Wrong records, stale caching because of long TTLs, split-horizon misconfiguration where internal users get the external address, resolver outages, and DNSSEC validation failures — all of which look like 'the network is down' to users. Lowering TTLs a day before a migration avoids a lot of pain."

Tip: "It's always DNS."`,

'What should you know about IPv6?':
`**Why they ask:** modern addressing.

**Answer:**
"128-bit addresses, no NAT needed, SLAAC and DHCPv6 for addressing, neighbor discovery instead of ARP, dual-stack deployments, and security policies that cover IPv6 too. Hosts often have IPv6 enabled by default, so a firewall policy that ignores IPv6 can leave an open path."

Tip: Don't forget IPv6 firewall rules.`,

'What is spine-leaf architecture?':
`**Why they ask:** data center design.

**Answer:**
"Every leaf switch connects to every spine switch, so any server is the same number of hops from any other — predictable low latency and easy scale-out for east-west traffic between servers. Need more capacity? Add a spine or a leaf. It's usually paired with a VXLAN/EVPN overlay."

Tip: East-west traffic.`,

'What is VXLAN/EVPN?':
`**Why they ask:** modern DC fabrics.

**Answer:**
"VXLAN encapsulates layer-2 frames in UDP to stretch segments across a layer-3 fabric, with about 16 million segment IDs instead of 4,094 VLANs. EVPN is a BGP-based control plane that distributes MAC and IP information efficiently, instead of flooding to learn addresses."

Tip: Modern DC fabrics.`,

'How do you make network changes safely?':
`**Why they ask:** change discipline.

**Answer:**
"Change control, pre-checks and post-checks, config backups, a rollback plan — commit confirmed on Juniper or reload in on Cisco, so a change that cuts off my access reverts automatically — maintenance windows, and peer review."

Tip: Commit confirmed.`,

'Tell me about a network outage you fixed.':
`**Why they ask:** proof under pressure.

**Answer:**
"A spanning-tree loop from an unauthorized switch took down a floor. I traced it through MAC flapping logs, shut the port, restored service in 15 minutes, then enabled BPDU Guard on all access ports so it couldn't happen again."

Tip: Root cause and prevention.`,

'Tell me about a network project you delivered.':
`**Why they ask:** delivery.

**Answer:**
"I led an SD-WAN migration for 45 branches, replacing MPLS. We cut WAN costs 38% and improved application performance through dynamic path selection."

Tip: Cost and performance.`,

"How do you handle 'the network is slow' complaints?":
`**Why they ask:** communication and diagnosis.

**Answer:**
"Get specifics — which application, where, since when — measure latency, loss and utilization, determine whether it's network, server or application, and share the evidence. Often the data shows the network is fine and the application server is at 100% CPU."

Tip: Data over opinions.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"Cisco CCNA, CCNP and CCIE, Juniper JNCIA and JNCIP, Palo Alto PCNSE, Fortinet NSE, AWS Advanced Networking, and Azure Network Engineer."

Tip: CCNP is a strong mid-level signal.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward network architect, cloud networking or network security."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I design resilient networks, troubleshoot fast with data, and automate repetitive work. I cut WAN costs 38% and eliminated recurring layer-2 outages."

Tip: Proof.`,

'What is ARP?':
`**Why they ask:** layer-2/3 basics.

**Answer:**
"Address Resolution Protocol maps an IPv4 address to a MAC address on the local network — 'who has 10.0.0.1? tell me your MAC.' ARP spoofing abuses it to intercept traffic, which Dynamic ARP Inspection prevents."

Tip: Layer 2/3 link.`,

'What problems do MTU mismatches cause?':
`**Why they ask:** a classic VPN issue.

**Answer:**
"Fragmentation or dropped packets, especially over VPN tunnels where encapsulation adds overhead. The symptom is that small things work — ping, login pages — while large transfers hang. Fix it with the right MTU and TCP MSS clamping, and test with ping -f -l on Windows or ping -M do -s on Linux to find the largest size that passes."

Tip: Classic VPN issue.`,

'What is LACP?':
`**Why they ask:** link aggregation.

**Answer:**
"Link Aggregation Control Protocol, 802.3ad, bundles several physical links into one logical link for bandwidth and redundancy. Traffic is spread by a hash of addresses or ports, so a single flow still uses only one link — four 1 Gb links don't make one 4 Gb file transfer."

Tip: Hashing determines distribution.`,

'When do you use packet captures?':
`**Why they ask:** deep troubleshooting.

**Answer:**
"For deep troubleshooting — TCP handshake failures, retransmissions, TLS problems, application behavior — with Wireshark or tcpdump at the right points. Capturing on both sides of a firewall shows immediately whether packets are being dropped in between."

Tip: Capture both sides.`,

'What is a VRF?':
`**Why they ask:** layer-3 segmentation.

**Answer:**
"Virtual Routing and Forwarding creates separate routing tables on one device, isolating networks at layer 3 — tenants, or guest versus corporate — even if they use overlapping IP ranges."

Tip: Layer-3 segmentation.`,

'A branch office is down. What do you check?':
`**Why they ask:** incident response.

**Answer:**
"Circuit status with the ISP, router reachability through a backup path or LTE out-of-band, power at the site, recent changes, VPN or SD-WAN tunnel state, and a local contact who can check lights on the equipment."

Tip: Out-of-band access helps.`,

'Users report slow Microsoft 365 performance at one site. What do you check?':
`**Why they ask:** SaaS performance.

**Answer:**
"Whether the site breaks out locally to the internet or backhauls through HQ, whether a proxy is TLS-inspecting M365 traffic — Microsoft recommends bypassing it for optimize-category endpoints — DNS resolving to a nearby front door, bandwidth utilization, and Microsoft's connectivity test tool."

Tip: Local breakout.`,

'What network documentation do you keep?':
`**Why they ask:** operational maturity.

**Answer:**
"Physical and logical topology diagrams, IP address management, circuit inventory with provider contacts, config backups, and runbooks for common incidents."

Tip: IPAM.`,

'How do you secure network devices?':
`**Why they ask:** management plane security.

**Answer:**
"AAA with TACACS+ or RADIUS so every login is individual and logged, SSH only, management ACLs, an out-of-band management network, firmware updates, logging, and disabling unused services like HTTP management."

Tip: Management plane protection.`,

'Split 10.0.0.0/24 into four equal subnets.':
`**Why they ask:** subnetting practice.

**Answer:**
"Borrowing 2 bits gives four /26 subnets of 64 addresses each: 10.0.0.0/26 with hosts .1 to .62, 10.0.0.64/26 with .65 to .126, 10.0.0.128/26 with .129 to .190, and 10.0.0.192/26 with .193 to .254."

Tip: Explain the borrowed bits.`,

"How does SASE change the network engineer's role?":
`**Why they ask:** future direction.

**Answer:**
"Security moves to cloud points of presence. Engineers manage SD-WAN plus SSE policies — secure web gateway, ZTNA, CASB — focus on identity-based access and internet performance, and backhaul far less traffic to the data center."

Tip: Identity-based policy.`,

'What are DHCP snooping and Dynamic ARP Inspection?':
`**Why they ask:** layer-2 security.

**Answer:**
"DHCP snooping blocks rogue DHCP servers on untrusted ports and builds a binding table of which IP belongs to which MAC and port. Dynamic ARP Inspection uses that table to drop spoofed ARP replies, preventing man-in-the-middle attacks on the LAN."

Tip: Layer-2 security.`,

'Tell me about automating a network process.':
`**Why they ask:** automation proof.

**Answer:**
"Config backups were manual and often missed. I wrote a Python and Netmiko job that backs up 300 devices nightly to Git and flags any changes. That gave us an audit trail and much faster rollback."

Tip: Measured value.`,

};
