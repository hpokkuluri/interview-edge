QB['en-elec'] = (QB['en-elec']||[]).concat([
["Load Calculation", "How do you perform a building load calculation?",
`**Answer:** List the connected loads (lighting, receptacles, HVAC, motors, equipment) and apply NEC demand factors (Article 220). Add 125% of the largest motor, plus continuous load factors and spare capacity, to size the service and feeders.

Tip: NEC Article 220.`, 'B', 'M'],
["Breakers", "What breaker types do you specify?",
`**Answer:** Thermal-magnetic for general use, electronic trip units (LSIG settings) for adjustable coordination, GFCI for personnel protection, AFCI for dwelling circuits, and ground fault protection on large services (above 1,000 A at 480 V).

Tip: LSIG.`, 'D', 'M'],
["Data Centers", "What's unique about data center electrical design?",
`**Answer:** High reliability (Tier levels), redundancy (2N, N+1), UPS and generators, power distribution units, monitoring, and efficiency metrics like PUE.

Tip: Redundancy.`, 'D', 'M'],
["Motor Starting", "Why does motor starting matter?",
`**Answer:** Inrush current (often 6–8× full load) causes voltage dips affecting other equipment. Use soft starters, VFDs or reduced-voltage starting, and size generators for starting kVA.

Tip: Generator sizing.`, 'B', 'M'],
["Maintenance", "What electrical maintenance practices matter?",
`**Answer:** Infrared thermography, breaker testing and exercising, torque checks, insulation resistance testing, cleaning, and following NFPA 70B (now a standard).

Tip: NFPA 70B.`, 'B', 'M'],
["Cybersecurity", "Why does OT cybersecurity matter for control engineers?",
`**Answer:** Connected PLCs and SCADA systems can be attacked. Use segmentation, secure remote access, patching, least privilege and IEC 62443 practices.

Tip: Segmentation.`, 'D', 'M'],
["Scenario", "A new production line causes lights to flicker plant-wide. What do you do?",
`**Answer:** Measure power quality (voltage sags, flicker, harmonics), identify the large starting or cyclic loads, and mitigate with soft starts, dedicated feeders, transformer changes or filters.

Tip: Power quality meter.`, 'D', 'M']
]);
