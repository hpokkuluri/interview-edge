// Rewritten Engineering — Electrical Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix en-elec-).
module.exports = {

"State Ohm's law and power formulas.":
`**Why they ask:** fundamentals check.

**Answer:**
"V equals I times R, and power is V times I, which also equals I squared R or V squared over R. A 10-ohm heater on 120 volts draws 12 amps and uses 1,440 watts. In AC, real power is V times I times cos φ in watts, reactive power is V times I times sin φ in VAR, and apparent power is V times I in VA — the three sides of the power triangle."

Tip: Power triangle.`,

'What is power factor and how do you correct it?':
`**Why they ask:** practical power system knowledge.

**Answer:**
"Power factor is real power over apparent power. Inductive loads like motors lower it, which raises current and losses for the same useful work. A 100 kW load at 0.8 PF needs 125 kVA; correcting to 0.95 drops that to about 105 kVA. Reactive power goes from 75 kVAR to about 33, so I'd add roughly 42 kVAR of capacitors — or active correction where harmonics are a concern. Utilities often penalize PF below about 0.9."

Tip: Utility penalties.`,

'Explain three-phase power calculations.':
`**Why they ask:** daily calculation in power work.

**Answer:**
"P equals root 3 times line voltage times line current times PF. At 480 volts, 100 amps and 0.9 PF: 1.732 times 480 times 100 times 0.9 is about 74.8 kW. In a wye system line voltage is root 3 times phase voltage — 480 line-to-line gives 277 line-to-neutral. Balanced loads keep neutral current near zero."

Tip: √3.`,

'Why perform short-circuit studies?':
`**Why they ask:** safety and equipment ratings.

**Answer:**
"To find the available fault current at each bus, so equipment interrupting and withstand ratings are adequate — a breaker rated 22 kA on a bus with 35 kA available can explode instead of clearing. The results also feed protective device coordination and arc flash analysis."

Tip: Interrupting ratings.`,

'What is arc flash analysis?':
`**Why they ask:** worker safety.

**Answer:**
"Calculating incident energy at each piece of equipment using IEEE 1584, from fault current and clearing time, to set arc flash boundaries and PPE requirements, with labels per NFPA 70E. Faster clearing — like a maintenance mode switch — is often the best way to reduce incident energy."

Tip: NFPA 70E.`,

'What is protective device coordination?':
`**Why they ask:** reliability design.

**Answer:**
"Setting breakers and fuses so the device closest to a fault trips first, limiting the outage to that circuit instead of the whole building. I verify it with time-current curves in ETAP or SKM, making sure upstream curves stay clear of downstream ones. Hospitals and emergency systems require selective coordination by code."

Tip: Selectivity.`,

'How do you size conductors per the NEC?':
`**Why they ask:** code-based design.

**Answer:**
"Calculate load current and apply 125% for continuous loads — a 40-amp continuous load needs 50 amps of ampacity, so 8 AWG copper at 75°C. Then apply temperature and conduit fill adjustment factors from the ampacity tables, check voltage drop — about 3% for branch circuits and 5% total recommended — and size the overcurrent protection to match."

Tip: 125% continuous.`,

'How do you calculate voltage drop?':
`**Why they ask:** practical design calc.

**Answer:**
"Single-phase: 2 times K times I times L over circular mils. Three-phase: root 3 times K times I times L over circular mils, with K about 12.9 for copper. For 100 amps over 200 feet on 1/0 copper, 105,600 circular mils: 1.732 times 12.9 times 100 times 200, over 105,600, is about 4.2 volts — under 1% on 480 volts, so it's fine."

Tip: Keep under limits.`,

'Grounding vs bonding?':
`**Why they ask:** a commonly confused safety concept.

**Answer:**
"Grounding connects the system to earth to stabilize voltage and handle lightning and surges. Bonding connects metal parts together and back to the source to create a low-impedance fault path, so enough current flows to trip the breaker. Earth alone is too high impedance to trip a breaker — bonding is what actually clears faults."

Tip: Fault path.`,

'How do you select and protect a motor?':
`**Why they ask:** industrial design.

**Answer:**
"Match the load's torque and speed, duty cycle, efficiency class and enclosure. Protect with overload relays set to nameplate current, short-circuit protection, and consider a VFD or soft starter to limit starting current, which can be 6 to 8 times full load."

Tip: Starting current.`,

'What are the benefits and issues of VFDs?':
`**Why they ask:** practical drives knowledge.

**Answer:**
"On fans and pumps, power varies with the cube of speed, so running at 80% speed uses about half the power — huge savings. VFDs also give soft starting and speed control. The issues are harmonics, insulation stress from fast voltage edges, and bearing currents — mitigated with line reactors or filters, inverter-duty motors and shaft grounding rings."

Tip: Harmonics.`,

'What problems do harmonics cause?':
`**Why they ask:** power quality.

**Answer:**
"Overheating of transformers and neutrals — triplen harmonics add in the neutral rather than cancel — nuisance tripping, capacitor failures and interference. Mitigation includes filters, K-rated transformers, oversized neutrals and meeting IEEE 519 limits at the point of common coupling."

Tip: IEEE 519.`,

'How do you size a transformer?':
`**Why they ask:** distribution design.

**Answer:**
"Sum connected loads, apply demand factors, add 20 to 25% for growth, and account for harmonics with a K-factor if needed. With 400 kVA of demand load plus 25% growth, I'd pick a 500 kVA unit, then specify voltage, impedance — which affects fault current downstream — and cooling."

Tip: Demand factors.`,

'What PLC experience do you have?':
`**Why they ask:** controls depth.

**Answer:**
"Ladder logic, function block and structured text under IEC 61131-3 on Allen-Bradley with Studio 5000 and Siemens with TIA Portal, plus HMI and SCADA screens, I/O design and commissioning on packaging and conveyor lines."

Tip: Platforms.`,

'Explain PID control.':
`**Why they ask:** control theory basics.

**Answer:**
"Proportional responds to the current error, integral eliminates steady-state offset by accumulating past error, and derivative anticipates change by reacting to the error's rate. For a tank temperature loop, too much P causes oscillation and too much I causes overshoot. I tune with Ziegler-Nichols as a starting point, then adjust for the balance of speed and stability."

Tip: Tuning.`,

'What are key electrical safety practices?':
`**Why they ask:** safety culture.

**Answer:**
"Lockout/tagout, verifying absence of voltage with a tested meter — test the meter before and after — NFPA 70E arc flash PPE, qualified persons only, and energized work permits only when de-energizing truly isn't feasible."

Tip: Verify zero voltage.`,

'What is functional safety?':
`**Why they ask:** safety systems design.

**Answer:**
"Making sure safety systems work correctly when needed, under IEC 61508, 61511 for process plants, or ISO 13849 for machinery. You assess risk, assign a required SIL or performance level, then design with safety-rated components, redundancy and diagnostics to meet it."

Tip: SIL/PL.`,

'What do you know about solar and battery systems?':
`**Why they ask:** renewable energy knowledge.

**Answer:**
"PV array design, inverter selection, interconnection requirements under IEEE 1547, battery energy storage, NEC Articles 690 and 706, and utility interconnection studies, which often drive the schedule more than the design."

Tip: Interconnection.`,

'What is a load flow study?':
`**Why they ask:** system analysis.

**Answer:**
"Analysis of voltages, currents and power flows under normal and contingency operating conditions to verify equipment loading and voltage levels — using ETAP, SKM or PSS/E."

Tip: Tools.`,

'How do you design backup power?':
`**Why they ask:** critical systems.

**Answer:**
"Identify critical loads, size the generator including motor starting — the largest motor's inrush often drives size more than running load — add automatic transfer switches, UPS for sensitive loads, fuel storage, and testing per NFPA 110."

Tip: Motor starting.`,

'What PCB design practices do you follow?':
`**Why they ask:** electronics design.

**Answer:**
"Solid ground and power planes, trace widths sized for current, controlled impedance for high-speed signals, decoupling capacitors close to IC pins, EMC-aware layout, thermal management and design for manufacturability."

Tip: Ground planes.`,

'How do you address EMI/EMC issues?':
`**Why they ask:** compliance knowledge.

**Answer:**
"Start with layout and grounding — short return paths fix most problems — then shielding, filtering and cable management, and pre-compliance testing against FCC and CISPR limits before formal testing."

Tip: Layout first.`,

'Tell me about an electrical project you led.':
`**Why they ask:** scale and ownership.

**Answer:**
"I designed power distribution for a 200,000-square-foot distribution center — a 4,000-amp service with coordination and arc flash studies. It came in on budget and passed inspection the first time."

Tip: Scale and outcome.`,

'Tell me about troubleshooting a difficult issue.':
`**Why they ask:** diagnostic skill.

**Answer:**
"A plant had nuisance breaker trips nobody could explain. Power quality monitoring showed high harmonics from newly installed VFDs. Adding line reactors brought distortion down and the trips stopped."

Tip: Data-driven.`,

'How do you work with contractors in the field?':
`**Why they ask:** construction support.

**Answer:**
"Clear drawings, fast RFI responses, regular site visits and practical solutions — if a conduit route is blocked, I'd rather approve a reasonable alternate the same day than delay the job."

Tip: RFIs.`,

'Is a PE important?':
`**Why they ask:** licensure plans.

**Answer:**
"Yes, for stamping power and building designs. I've passed the FE and am on track for the PE once I complete the required experience."

Tip: Stamping.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward lead engineer and project engineer, and eventually engineering manager."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I deliver safe, code-compliant electrical designs and solve tough field problems — like eliminating harmonic trips at a plant."

Tip: Proof.`,

'Which tools do you use?':
`**Why they ask:** tooling fit.

**Answer:**
"AutoCAD Electrical, Revit MEP, ETAP and SKM for studies, EPLAN, Altium and KiCad for PCBs, MATLAB and Simulink, and Studio 5000 and TIA Portal for controls."

Tip: Specialty tools.`,

'What goes into lighting design?':
`**Why they ask:** building systems knowledge.

**Answer:**
"Illuminance targets from IES — around 30 to 50 footcandles for offices — fixture selection, controls to meet energy codes like occupancy sensors and daylight harvesting, and emergency lighting."

Tip: Energy codes.`,

'Which energy codes apply to buildings?':
`**Why they ask:** compliance.

**Answer:**
"ASHRAE 90.1 and the IECC — lighting power density limits, required controls and metering."

Tip: 90.1.`,

'What instrumentation have you specified?':
`**Why they ask:** process controls.

**Answer:**
"Pressure, temperature, flow and level transmitters on 4–20 mA with HART, plus analyzers, with loop diagrams and calibration sheets. The 4 mA live zero lets you tell a real zero reading from a broken wire."

Tip: 4–20 mA.`,

'What is SCADA?':
`**Why they ask:** systems knowledge.

**Answer:**
"Supervisory Control and Data Acquisition — HMIs, historians, communications and alarms to monitor and control distributed processes like water systems or substations — with cybersecurity under IEC 62443 a major concern."

Tip: OT security.`,

'Which industrial protocols do you know?':
`**Why they ask:** integration skills.

**Answer:**
"EtherNet/IP, Modbus TCP and RTU, PROFINET, OPC UA and DeviceNet. OPC UA is increasingly the bridge between plant floor and IT systems."

Tip: OPC UA.`,

'What happens during commissioning?':
`**Why they ask:** startup experience.

**Answer:**
"Verify installation against drawings, insulation resistance and continuity tests, point-to-point I/O checks, functional testing of controls and safety systems, and documentation."

Tip: Functional tests.`,

'A motor keeps overheating. What do you check?':
`**Why they ask:** troubleshooting.

**Answer:**
"Load against nameplate rating, voltage imbalance — even 2% imbalance can raise winding temperature substantially — ventilation, bearing condition, duty cycle and starts per hour, VFD settings and harmonics."

Tip: Voltage imbalance.`,

'A facility wants to add 500 kW of load. What do you evaluate?':
`**Why they ask:** system planning.

**Answer:**
"Service and transformer capacity, distribution equipment ratings, fault current changes, coordination, utility requirements and physical space. At 480 volts and 0.9 PF, 500 kW is about 670 amps — a significant addition, so I'd engage the utility early."

Tip: Utility coordination.`,

'How do you protect facilities from lightning and surges?':
`**Why they ask:** protection design.

**Answer:**
"Lightning protection systems per NFPA 780, surge protective devices at the service and key panels, and a solid grounding system."

Tip: SPDs.`,

'What drawings do you produce?':
`**Why they ask:** deliverables.

**Answer:**
"One-line diagrams, panel schedules, schematics, wiring diagrams, layouts and cable schedules. The one-line is the backbone everything else references."

Tip: One-line.`,

'What considerations exist for EV charging installations?':
`**Why they ask:** emerging loads.

**Answer:**
"Load calculations and load management, service capacity, NEC Article 625, charger levels — Level 2 versus DC fast — and utility coordination. Load management lets 20 chargers share capacity instead of requiring a service upgrade."

Tip: Load management.`,

'How do you improve power reliability?':
`**Why they ask:** reliability engineering.

**Answer:**
"Redundancy like N+1, maintenance including infrared scans and breaker testing, selective coordination, and monitoring to catch problems early."

Tip: N+1.`,

'What would you ask in an interview?':
`**Why they ask:** due diligence.

**Answer:**
"What project types will I work on? Which design tools? How do you support the PE? What's the field versus office balance, and how is the team structured?"

Tip: Field time.`,

'How do you perform a building load calculation?':
`**Why they ask:** service sizing.

**Answer:**
"List connected loads — lighting, receptacles, HVAC, motors, equipment — and apply NEC Article 220 demand factors. Add 25% of the largest motor, apply continuous load factors and spare capacity, then size the service and feeders."

Tip: NEC Article 220.`,

'What breaker types do you specify?':
`**Why they ask:** protection knowledge.

**Answer:**
"Thermal-magnetic for general use, electronic trip units with LSIG — long, short, instantaneous and ground — for adjustable coordination, GFCI for personnel protection, AFCI for dwelling circuits, and ground fault protection on large services, required at 1,000 amps and above on 480 volt wye systems."

Tip: LSIG.`,

"What's unique about data center electrical design?":
`**Why they ask:** mission-critical design.

**Answer:**
"Very high reliability targets by Tier level, redundancy like 2N or N+1, UPS and generators, power distribution units, detailed monitoring, and efficiency measured as PUE — total facility power over IT power."

Tip: Redundancy.`,

'Why does motor starting matter?':
`**Why they ask:** system impact.

**Answer:**
"Inrush is often 6 to 8 times full-load current, causing voltage dips that can drop out contactors and computers. Soft starters, VFDs or reduced-voltage starting help, and generators must be sized for starting kVA, not just running load."

Tip: Generator sizing.`,

'What electrical maintenance practices matter?':
`**Why they ask:** reliability and safety.

**Answer:**
"Infrared thermography, breaker testing and exercising, torque checks, insulation resistance testing, cleaning, and following NFPA 70B, which is now an enforceable standard rather than just a recommended practice."

Tip: NFPA 70B.`,

'Why does OT cybersecurity matter for control engineers?':
`**Why they ask:** current risk.

**Answer:**
"Connected PLCs and SCADA systems can be attacked, with physical consequences. I design for network segmentation, secure remote access, patching, least privilege and IEC 62443 practices."

Tip: Segmentation.`,

'A new production line causes lights to flicker plant-wide. What do you do?':
`**Why they ask:** power quality troubleshooting.

**Answer:**
"Put a power quality meter on it to measure voltage sags, flicker and harmonics, identify the large starting or cyclic loads, then mitigate — soft starts, a dedicated feeder or transformer, or filters."

Tip: Power quality meter.`,

};
