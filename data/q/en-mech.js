// en-mech — generated from src/en-mech-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Mechanical Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['en-mech'] = [
["Role", "What does a mechanical engineer do in product development?",
`**Why they ask:** context.

**Answer:** Designs and develops mechanical components and systems: concept and detailed design in CAD, engineering analysis (stress, thermal, fluids), material selection, prototyping and testing, drawings with GD&T, design for manufacturing, supplier collaboration, and supporting production and field issues.

Tip: Industry and products.`, 'B', 'E'],

["Stress", "Explain stress, strain and Young's modulus.",
`**Answer:** Stress σ = force / area (Pa). Strain ε = change in length / original length. In the elastic region, σ = E × ε where E is Young's modulus (steel ~200 GPa, aluminum ~69 GPa).

**Example:** 10 kN on a 100 mm² rod → σ = 100 MPa; steel strain = 100/200,000 = 0.0005.

Tip: Units.`, 'B', 'E'],

["Failure", "What failure theories do you use?",
`**Answer:** Von Mises (distortion energy) for ductile materials, Tresca (maximum shear) as conservative alternative, maximum normal stress (Rankine) or Mohr theories for brittle materials.

Tip: Ductile vs brittle.`, 'B', 'M'],

["Safety Factor", "How do you choose a factor of safety?",
`**Answer:** Based on load uncertainty, material variability, consequences of failure, standards and analysis accuracy — typically 1.5–3 for static loads, higher for uncertain or critical applications.

Tip: Justify it.`, 'B', 'M'],

["Fatigue", "What is fatigue and how do you design against it?",
`**Answer:** Failure under cyclic loading below yield strength. Design with S-N curves and endurance limits, Goodman/Gerber criteria for mean stress, reduce stress concentrations (fillets, surface finish), and consider shot peening.

Tip: Stress concentrations.`, 'D', 'M'],

["Materials", "How do you select materials?",
`**Answer:** Requirements (strength, stiffness, weight, temperature, corrosion, fatigue), manufacturability, cost and availability — using Ashby charts and trade-off matrices.

Tip: Ashby charts.`, 'B', 'M'],

["GD&T", "What is GD&T and why use it?",
`**Answer:** Geometric Dimensioning and Tolerancing (ASME Y14.5) defines allowable variation in form, orientation, location and runout relative to datums — communicating design intent precisely and enabling functional gauging.

Tip: Datums.`, 'B', 'M'],

["Tolerances", "How do you perform tolerance stack-up analysis?",
`**Answer:** Worst-case (sum of all tolerances) guarantees fit but may be costly; statistical (root sum square) assumes normal distribution for more realistic results.

**Example:** three parts ±0.1 mm → worst-case ±0.3 mm; RSS ±0.17 mm.

Tip: Show both.`, 'D', 'M'],

["FEA", "How do you validate FEA results?",
`**Answer:** Check boundary conditions and loads, mesh convergence study, compare with hand calculations, sanity check stresses and deflections, and validate with physical testing.

Tip: Hand calcs.`, 'B', 'M'],

["Heat Transfer", "What are the modes of heat transfer?",
`**Answer:** Conduction (q = kAΔT/L), convection (q = hAΔT), and radiation (q = εσA(T⁴ − T∞⁴)).

Tip: Formulas.`, 'B', 'E'],

["Thermodynamics", "Explain the first and second laws of thermodynamics.",
`**Answer:** First law: energy is conserved (ΔU = Q − W). Second law: entropy of an isolated system increases; heat flows from hot to cold; no engine can be 100% efficient (Carnot limit: 1 − Tc/Th).

Tip: Carnot.`, 'B', 'E'],

["Fluids", "What is Reynolds number?",
`**Answer:** Re = ρvD/μ — ratio of inertial to viscous forces; pipe flow is laminar below ~2,300 and turbulent above ~4,000.

Tip: Flow regime.`, 'B', 'E'],

["Fluids", "How do you calculate pressure drop in a pipe?",
`**Answer:** Darcy-Weisbach: ΔP = f × (L/D) × (ρv²/2), with friction factor f from Moody chart or Colebrook equation, plus minor losses from fittings.

Tip: Minor losses.`, 'D', 'M'],

["Design Process", "Walk through your design process.",
`**Answer:** Requirements and specifications, concept generation and selection (Pugh matrix), detailed design and analysis, DFMEA, prototyping, testing and validation, design reviews, release to manufacturing.

Tip: Design reviews.`, 'B', 'E'],

["DFMEA", "What is a DFMEA?",
`**Answer:** Design Failure Mode and Effects Analysis identifies potential design failure modes, effects, causes and controls, rating severity, occurrence and detection to prioritize actions.

Tip: Early in design.`, 'B', 'M'],

["DFM", "What design-for-manufacturing principles do you apply?",
`**Answer:** Minimize part count, standard components, appropriate tolerances, consider process capabilities (molding draft angles, uniform wall thickness, machining access), and design for assembly.

Tip: Process-specific rules.`, 'B', 'M'],

["Manufacturing", "Which manufacturing processes do you know?",
`**Answer:** Machining (milling, turning), injection molding, casting, sheet metal fabrication, welding, additive manufacturing, extrusion and forging.

Tip: Design implications.`, 'B', 'E'],

["Additive", "When would you use 3D printing?",
`**Answer:** Prototypes, complex geometries, low volume custom parts, tooling and lightweighting — considering material properties and cost per part.

Tip: Volume economics.`, 'B', 'M'],

["CAD", "Which CAD tools do you use?",
`**Answer:** SolidWorks, Creo, Siemens NX, CATIA, Inventor, Fusion 360 — plus PDM/PLM systems (Windchill, Teamcenter).

Tip: PLM.`, 'B', 'E'],

["Testing", "How do you plan validation testing?",
`**Answer:** Derive tests from requirements and risks, define acceptance criteria, sample sizes, environmental and life testing (HALT/HASS), document results and address failures.

Tip: Requirements traceability.`, 'B', 'M'],

["Root Cause", "How do you investigate a field failure?",
`**Answer:** Gather failed parts and usage data, failure analysis (visual, fractography, metallurgy), compare against design assumptions, test hypotheses, implement corrective action and verify.

Tip: Fractography.`, 'B', 'M'],

["Vibration", "How do you address vibration problems?",
`**Answer:** Identify natural frequencies (modal analysis) and excitation sources, avoid resonance by changing stiffness/mass, add damping or isolation.

Tip: Resonance.`, 'D', 'M'],

["Fasteners", "How do you design a bolted joint?",
`**Answer:** Determine loads, choose bolt size and grade, calculate preload (often 75% of proof load), joint stiffness, check for separation, fatigue and thread stripping, and specify torque.

Tip: Preload.`, 'D', 'M'],

["HVAC", "What are key HVAC design considerations?",
`**Answer:** Heating and cooling load calculations, ventilation rates (ASHRAE 62.1), equipment sizing, ductwork design, energy efficiency and controls.

Tip: ASHRAE.`, 'D', 'M'],

["Standards", "Which standards have you worked with?",
`**Answer:** ASME (Y14.5, BPVC), ISO standards, ASTM material standards, ASHRAE, UL safety standards — depending on industry.

Tip: Industry-specific.`, 'B', 'E'],

["Cost", "How do you reduce product cost?",
`**Answer:** Value engineering, part consolidation, material and process changes, tolerance relaxation where possible, standardization and supplier collaboration.

Tip: Value engineering.`, 'B', 'M'],

["Behavioral", "Tell me about a design you're proud of.",
`**Sample answer:** "I redesigned a pump housing from a 5-part weldment to a single casting, cutting cost 32% and leaks to zero, validated by pressure and life testing."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about a design failure.",
`**Sample answer:** "A bracket cracked in vibration testing. I'd missed a resonance near operating frequency. Adding a stiffening rib shifted the mode; now I always run modal analysis early."

Tip: Learning.`, 'B', 'M'],

["Behavioral", "How do you work with manufacturing?",
`**Answer:** Involve them early in design reviews, visit the floor, use their feedback on DFM, and support production ramp.

Tip: Early involvement.`, 'B', 'E'],

["Licensure", "Do you have or plan a PE license?",
`**Answer:** FE exam then PE after experience — important for roles signing off designs (e.g. HVAC, building systems, public safety).

Tip: When required.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/lead engineer, technical specialist, or engineering manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design reliable, manufacturable products backed by solid analysis and testing — cutting cost 32% on a key part while eliminating failures."

Tip: Proof.`, 'B', 'E'],

["Beams", "What's the maximum deflection of a simply supported beam with a central point load?",
`**Answer:** δ = PL³ / (48EI); maximum moment M = PL/4.

Tip: Know classic formulas.`, 'B', 'M'],

["Buckling", "How do you check column buckling?",
`**Answer:** Euler's critical load P = π²EI / (KL)², with effective length factor K depending on end conditions; check slenderness and use Johnson formula for intermediate columns.

Tip: End conditions.`, 'D', 'M'],

["Gears", "What do you consider in gear design?",
`**Answer:** Gear ratio, tooth strength (Lewis/AGMA bending), contact stress (pitting), materials and heat treatment, lubrication and backlash.

Tip: AGMA.`, 'D', 'M'],

["Bearings", "How do you select a bearing?",
`**Answer:** Loads (radial/axial), speed, life requirements (L10 life), environment, lubrication and mounting.

Tip: L10 life.`, 'D', 'M'],

["Corrosion", "How do you prevent corrosion?",
`**Answer:** Material selection, coatings and plating, avoiding galvanic couples, drainage design, cathodic protection and inhibitors.

Tip: Galvanic series.`, 'B', 'M'],

["Pressure Vessels", "What governs pressure vessel design?",
`**Answer:** ASME Boiler and Pressure Vessel Code Section VIII: wall thickness calculations, materials, welding, inspection and hydrostatic testing.

Tip: Hoop stress = PD/2t.`, 'D', 'M'],

["Thermal", "How do you manage heat in electronics enclosures?",
`**Answer:** Heat sinks, thermal interface materials, airflow design, fans, heat pipes and thermal simulation.

Tip: Thermal simulation.`, 'B', 'M'],

["Prototyping", "How do you decide prototype fidelity?",
`**Answer:** Match to what you need to learn — 3D printed for form/fit, machined for function, production tooling for validation.

Tip: Learning goals.`, 'B', 'E'],

["Change", "How do you manage engineering changes?",
`**Answer:** ECR/ECO process with impact analysis (cost, inventory, validation, suppliers), approvals, documentation updates and effectivity dates.

Tip: Effectivity.`, 'B', 'M'],

["Requirements", "How do you handle unclear requirements?",
`**Answer:** Clarify with stakeholders, document assumptions, propose measurable specs, and confirm before detailed design.

Tip: Measurable specs.`, 'B', 'E'],

["Sustainability", "How do you design for sustainability?",
`**Answer:** Lightweighting, recyclable materials, energy efficiency, longer life and repairability, and life-cycle assessment.

Tip: LCA.`, 'B', 'M'],

["Scenario", "A part is failing in production at 5%. What do you do?",
`**Answer:** Contain, gather data (which features, suppliers, lots), compare to drawing and tolerances, check process capability, determine root cause and fix design or process.

Tip: Data first.`, 'B', 'M'],

["Scenario", "You're asked to cut weight 20% without losing strength. How?",
`**Answer:** Topology optimization, material changes (aluminum, composites), geometry optimization (ribs instead of solid sections), and validate with FEA and testing.

Tip: Topology optimization.`, 'D', 'M'],

["Simulation", "What simulation tools have you used?",
`**Answer:** ANSYS, Abaqus, SolidWorks Simulation, COMSOL, Fluent/CFD tools.

Tip: Validation.`, 'B', 'E'],

["Documentation", "What makes a good engineering drawing?",
`**Answer:** Clear views, complete dimensions with GD&T, tolerances, materials, finishes, notes and revision control.

Tip: Manufacturable.`, 'B', 'E'],

["Teamwork", "How do you work with electrical and software engineers?",
`**Answer:** Shared requirements, interface control documents, regular integration reviews and early collaboration on packaging.

Tip: Interface control.`, 'B', 'E'],

["Questions", "What would you ask in an interview?",
`**Answer:** Products and development process, tools, testing facilities, team structure and growth opportunities.

Tip: Process.`, 'B', 'E']
];

QB['en-mech'] = (QB['en-mech']||[]).concat([
["Welding", "What do you consider when designing welded joints?",
`**Answer:** Joint type and weld size based on loads, weld symbols (AWS A2.4), access for welding, distortion and residual stresses, fatigue at weld toes, inspection methods, and AWS D1.1 for structural steel.

Tip: Fatigue at weld toes.`, 'D', 'M']
]);
