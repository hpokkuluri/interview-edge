QB['inf-net'] = (QB['inf-net']||[]).concat([
["Subnetting", "Split 10.0.0.0/24 into four equal subnets.",
`**Answer:** Borrow 2 bits to get /26 subnets of 64 addresses each: 10.0.0.0/26 (.1–.62), 10.0.0.64/26 (.65–.126), 10.0.0.128/26 (.129–.190), 10.0.0.192/26 (.193–.254).

Tip: Explain the borrowed bits.`, 'B', 'E'],
["SASE", "How does SASE change the network engineer's role?",
`**Answer:** Security moves to cloud points of presence. Engineers manage SD-WAN plus SSE policies (SWG, ZTNA, CASB), focus on identity-based access and internet performance, and backhaul less traffic to the data center.

Tip: Identity-based policy.`, 'D', 'M'],
["DHCP Snooping", "What are DHCP snooping and Dynamic ARP Inspection?",
`**Answer:** **DHCP snooping** blocks rogue DHCP servers on untrusted ports and builds a binding table. **DAI** uses that table to drop spoofed ARP packets, preventing man-in-the-middle attacks on the LAN.

Tip: Layer-2 security.`, 'D', 'M'],
["Behavioral", "Tell me about automating a network process.",
`**Sample answer:** "Config backups were manual and often missed. I wrote a Python/Netmiko job that backs up 300 devices nightly to Git and flags changes, which gave us an audit trail and faster rollback."

Tip: Measured value.`, 'B', 'M']
]);
