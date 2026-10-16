// en-elec — generated from src/en-elec-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Electrical Engineer (power / controls). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['en-elec'] = [
["Role", "What does an electrical engineer do?",
`**Why they ask:** EE is broad — power, controls, electronics.

**Answer:** Designs, analyzes and maintains electrical systems — power distribution, controls and automation, motors and drives, electronics and PCBs, or utility systems — producing schematics, calculations and specifications, ensuring code compliance and safety, and supporting installation and commissioning.

Tip: Name your specialty.`, 'B', 'E'],

["Fundamentals", "State Ohm's law and power formulas.",
`**Answer:** V = I × R. Power P = V × I = I²R = V²/R. AC power: real P = V × I × cos(φ) (watts), reactive Q = V × I × sin(φ) (VAR), apparent S = V × I (VA).

Tip: Power triangle.`, 'B', 'E'],

["Power Factor", "What is power factor and how do you correct it?",
`**Answer:** PF = real power / apparent power. Low PF (inductive loads like motors) increases current and losses; correct with capacitor banks or active correction.

**Example:** 100 kW at PF 0.8 → 125 kVA; correcting to 0.95 → 105 kVA.

Tip: Utility penalties.`, 'B', 'M'],

["Three-phase", "Explain three-phase power calculations.",
`**Answer:** P = √3 × V_L × I_L × PF. Line voltage = √3 × phase voltage in wye. Balanced loads reduce neutral current.

**Example:** 480 V, 100 A, PF 0.9 → P ≈ 74.8 kW.

Tip: √3.`, 'B', 'M'],

["Short Circuit", "Why perform short-circuit studies?",
`**Answer:** To determine available fault current so equipment interrupting ratings are adequate, and for protective device coordination and arc flash analysis.

Tip: Interrupting ratings.`, 'D', 'M'],

["Arc Flash", "What is arc flash analysis?",
`**Answer:** Calculates incident energy at equipment (IEEE 1584) to determine arc flash boundaries and PPE categories, with labels per NFPA 70E.

Tip: NFPA 70E.`, 'D', 'M'],

["Coordination", "What is protective device coordination?",
`**Answer:** Setting breakers and fuses so the device closest to a fault trips first, minimizing outage scope — verified with time-current curves.

Tip: Selectivity.`, 'D', 'M'],

["NEC", "How do you size conductors per the NEC?",
`**Answer:** Calculate load current, apply continuous load factor (125%), use ampacity tables (310.16) with temperature and conduit fill adjustments, check voltage drop (~3% branch, 5% total recommended), and size overcurrent protection.

Tip: 125% continuous.`, 'B', 'M'],

["Voltage Drop", "How do you calculate voltage drop?",
`**Answer:** Single-phase VD = 2 × K × I × L / CM; three-phase VD = √3 × K × I × L / CM (K ≈ 12.9 for copper).

Tip: Keep under limits.`, 'D', 'M'],

["Grounding", "Grounding vs bonding?",
`**Answer:** **Grounding** connects systems to earth for voltage stabilization and lightning; **bonding** connects metal parts to ensure low-impedance fault paths so breakers trip — key for safety.

Tip: Fault path.`, 'B', 'M'],

["Motors", "How do you select and protect a motor?",
`**Answer:** Determine load torque and speed, duty cycle, efficiency class, enclosure; protect with overload relays, short-circuit protection, and consider VFD or soft starter for starting current.

Tip: Starting current.`, 'B', 'M'],

["VFD", "What are the benefits and issues of VFDs?",
`**Answer:** Benefits: energy savings on variable torque loads, soft start, speed control. Issues: harmonics, motor insulation stress, bearing currents — mitigate with filters, inverter-duty motors and grounding brushes.

Tip: Harmonics.`, 'D', 'M'],

["Harmonics", "What problems do harmonics cause?",
`**Answer:** Overheating of transformers and neutrals, nuisance tripping, capacitor failures and interference; mitigate with filters, K-rated transformers and IEEE 519 compliance.

Tip: IEEE 519.`, 'D', 'M'],

["Transformers", "How do you size a transformer?",
`**Answer:** Sum connected loads with demand factors, account for growth (20–25%), harmonics (K-factor), and select kVA, voltage, impedance and cooling.

Tip: Demand factors.`, 'B', 'M'],

["Controls", "What PLC experience do you have?",
`**Answer:** Programming in ladder logic, function block and structured text (IEC 61131-3) on Allen-Bradley/Rockwell, Siemens; HMI/SCADA development; I/O design; and commissioning.

Tip: Platforms.`, 'B', 'M'],

["Controls", "Explain PID control.",
`**Answer:** Proportional (responds to current error), Integral (eliminates steady-state error), Derivative (anticipates change). Tune with Ziegler-Nichols or trial methods, balancing response speed and stability.

Tip: Tuning.`, 'B', 'M'],

["Safety", "What are key electrical safety practices?",
`**Answer:** Lockout/tagout, verify absence of voltage, NFPA 70E arc flash PPE, qualified persons only, energized work permits when unavoidable.

Tip: Verify zero voltage.`, 'B', 'E'],

["Functional Safety", "What is functional safety?",
`**Answer:** Ensuring safety systems perform correctly (IEC 61508, 61511, ISO 13849) — safety integrity levels (SIL) or performance levels (PL), risk assessments and safety-rated components.

Tip: SIL/PL.`, 'D', 'S'],

["Renewables", "What do you know about solar and battery systems?",
`**Answer:** PV array design, inverters, interconnection requirements (IEEE 1547), battery energy storage, NEC Article 690/706, and utility interconnection studies.

Tip: Interconnection.`, 'D', 'M'],

["Power Systems", "What is a load flow study?",
`**Answer:** Analysis of voltages, currents and power flows under operating conditions to verify equipment loading and voltage levels — using ETAP, SKM or PSS/E.

Tip: Tools.`, 'D', 'M'],

["Backup Power", "How do you design backup power?",
`**Answer:** Identify critical loads, generator sizing (including motor starting), automatic transfer switches, UPS for sensitive loads, fuel storage and testing per NFPA 110.

Tip: Motor starting.`, 'D', 'M'],

["Electronics", "What PCB design practices do you follow?",
`**Answer:** Proper grounding and power planes, trace width for current, impedance control for high-speed signals, decoupling capacitors, EMC considerations, thermal management and DFM.

Tip: Ground planes.`, 'D', 'M'],

["EMC", "How do you address EMI/EMC issues?",
`**Answer:** Good layout and grounding, shielding, filtering, cable management, and pre-compliance testing to standards (FCC, CISPR).

Tip: Layout first.`, 'D', 'M'],

["Behavioral", "Tell me about an electrical project you led.",
`**Sample answer:** "I designed the power distribution for a 200,000 sq ft distribution center — 4,000 A service, coordination and arc flash studies — delivered on budget and passed inspection first time."

Tip: Scale and outcome.`, 'B', 'M'],

["Behavioral", "Tell me about troubleshooting a difficult issue.",
`**Sample answer:** "Nuisance breaker trips plagued a plant. Power quality monitoring showed harmonics from new VFDs; adding line reactors fixed it."

Tip: Data-driven.`, 'B', 'M'],

["Behavioral", "How do you work with contractors in the field?",
`**Answer:** Clear drawings, timely RFI responses, site visits, and practical solutions.

Tip: RFIs.`, 'B', 'E'],

["Licensure", "Is a PE important?",
`**Answer:** Yes for stamping power and building designs; FE exam then PE after experience.

Tip: Stamping.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/lead engineer, project engineer, or engineering manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver safe, code-compliant electrical designs and solve tough field problems — like eliminating harmonic trips at a plant."

Tip: Proof.`, 'B', 'E'],

["Tools", "Which tools do you use?",
`**Answer:** AutoCAD Electrical, Revit MEP, ETAP/SKM, EPLAN, Altium/KiCad (PCBs), MATLAB/Simulink, and Studio 5000/TIA Portal.

Tip: Specialty tools.`, 'B', 'E'],

["Lighting", "What goes into lighting design?",
`**Answer:** Illuminance levels (IES), fixture selection, controls for energy codes (occupancy sensors, daylight harvesting), and emergency lighting.

Tip: Energy codes.`, 'B', 'M'],

["Energy Codes", "Which energy codes apply to buildings?",
`**Answer:** ASHRAE 90.1 and IECC — lighting power density, controls, and metering requirements.

Tip: 90.1.`, 'D', 'M'],

["Instrumentation", "What instrumentation have you specified?",
`**Answer:** Pressure, temperature, flow and level transmitters (4–20 mA, HART), analyzers, with loop diagrams and calibration.

Tip: 4–20 mA.`, 'B', 'M'],

["SCADA", "What is SCADA?",
`**Answer:** Supervisory Control and Data Acquisition systems monitor and control distributed processes — HMIs, historians, communications, alarms — with cybersecurity (IEC 62443) concerns.

Tip: OT security.`, 'D', 'M'],

["Communication", "Which industrial protocols do you know?",
`**Answer:** EtherNet/IP, Modbus TCP/RTU, PROFINET, OPC UA, DeviceNet.

Tip: OPC UA.`, 'D', 'M'],

["Commissioning", "What happens during commissioning?",
`**Answer:** Verify installation against drawings, insulation and continuity tests, I/O checks, functional testing of controls and safety systems, and documentation.

Tip: Functional tests.`, 'B', 'M'],

["Scenario", "A motor keeps overheating. What do you check?",
`**Answer:** Load vs rating, voltage imbalance, ventilation, bearing condition, duty cycle, VFD settings and harmonics.

Tip: Voltage imbalance.`, 'B', 'M'],

["Scenario", "A facility wants to add 500 kW of load. What do you evaluate?",
`**Answer:** Service and transformer capacity, distribution equipment ratings, fault current changes, coordination, utility requirements and space.

Tip: Utility coordination.`, 'D', 'M'],

["Lightning", "How do you protect facilities from lightning and surges?",
`**Answer:** Lightning protection systems (NFPA 780), surge protective devices at service and panels, and good grounding.

Tip: SPDs.`, 'B', 'M'],

["Documentation", "What drawings do you produce?",
`**Answer:** One-line diagrams, panel schedules, schematics, wiring diagrams, layouts, and cable schedules.

Tip: One-line.`, 'B', 'E'],

["EV", "What considerations exist for EV charging installations?",
`**Answer:** Load calculations and load management, service capacity, NEC Article 625, charger levels, and utility coordination.

Tip: Load management.`, 'D', 'M'],

["Reliability", "How do you improve power reliability?",
`**Answer:** Redundancy (N+1), maintenance (infrared scans, breaker testing), selective coordination, and monitoring.

Tip: N+1.`, 'B', 'M'],

["Questions", "What would you ask in an interview?",
`**Answer:** Project types, design tools, PE support, field vs office balance, and team structure.

Tip: Field time.`, 'B', 'E']
];

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
