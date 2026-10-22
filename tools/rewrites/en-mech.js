// Rewritten Engineering — Mechanical Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix en-mech-).
module.exports = {

"Explain stress, strain and Young's modulus.":
`**Why they ask:** mechanics fundamentals.

**Answer:**
"Stress is force over area, in pascals. Strain is change in length over original length, dimensionless. In the elastic region they're linear: stress equals E times strain, where E is Young's modulus — about 200 GPa for steel and 69 for aluminum. Ten kilonewtons on a 100 square millimeter steel rod gives 100 MPa, and strain is 100 over 200,000, or 0.0005 — half a millimeter per meter."

Tip: Units.`,

'What failure theories do you use?':
`**Why they ask:** analysis judgment.

**Answer:**
"For ductile materials, von Mises — distortion energy — which matches test data well, with Tresca, maximum shear, as a slightly more conservative option. For brittle materials like cast iron, maximum normal stress or Mohr theories, since they fail in tension rather than shear."

Tip: Ductile vs brittle.`,

'How do you choose a factor of safety?':
`**Why they ask:** engineering judgment.

**Answer:**
"Based on load uncertainty, material variability, consequences of failure, governing standards and how accurate the analysis is. Typically 1.5 to 3 for static loads with well-known materials — higher where loads are uncertain or failure would hurt someone, and codes like ASME often set it for you. Whatever I pick, I document why."

Tip: Justify it.`,

'What is fatigue and how do you design against it?':
`**Why they ask:** the most common real-world failure mode.

**Answer:**
"Failure under cyclic loading at stresses below yield. I design with S-N curves and endurance limits — for steel roughly half the ultimate strength — use Goodman or Gerber criteria to account for mean stress, reduce stress concentrations with generous fillets and good surface finish, and consider shot peening to add compressive surface stress. Most fatigue cracks start at a sharp corner or a weld toe."

Tip: Stress concentrations.`,

'How do you select materials?':
`**Why they ask:** design trade-off thinking.

**Answer:**
"Start with requirements — strength, stiffness, weight, temperature, corrosion, fatigue — then manufacturability, cost and availability. Ashby charts help compare families, like stiffness per weight, and a weighted trade-off matrix makes the final choice explicit. For a lightweight bracket, aluminum 6061 might beat steel on weight while titanium wins technically but loses on cost."

Tip: Ashby charts.`,

'What is GD&T and why use it?':
`**Why they ask:** drawing literacy.

**Answer:**
"Geometric Dimensioning and Tolerancing per ASME Y14.5 defines allowable variation in form, orientation, location and runout relative to datums. A position tolerance with a circular zone gives 57% more area than the equivalent square plus-or-minus zone, so more good parts pass, and it communicates exactly how the part functions and gets inspected."

Tip: Datums.`,

'How do you perform tolerance stack-up analysis?':
`**Why they ask:** fit and function.

**Answer:**
"Worst case adds all tolerances — guarantees fit but can force tight, expensive tolerances. Statistical root-sum-square assumes normal distributions and is more realistic. Three parts at plus or minus 0.1 millimeters give plus or minus 0.3 worst case, but RSS gives the square root of 0.03, about plus or minus 0.17. I show both and choose based on volume and risk."

Tip: Show both.`,

'How do you validate FEA results?':
`**Why they ask:** analysis credibility.

**Answer:**
"Check boundary conditions and loads first — most errors are there — run a mesh convergence study, compare with hand calculations, sanity-check stresses and deflections, and validate with physical testing using strain gauges where it matters. If FEA says 40 MPa and the hand calc says 400, something's wrong."

Tip: Hand calcs.`,

'What are the modes of heat transfer?':
`**Why they ask:** thermal fundamentals.

**Answer:**
"Conduction, q equals kA delta-T over L; convection, q equals hA delta-T; and radiation, q equals emissivity times Stefan-Boltzmann constant times A times the difference of T to the fourth. For 10 square meters of insulation with k of 0.04, 10 centimeters thick and a 20-degree difference, conduction is 0.04 times 10 times 20 over 0.1 — 80 watts."

Tip: Formulas.`,

'Explain the first and second laws of thermodynamics.':
`**Why they ask:** fundamentals.

**Answer:**
"The first law is energy conservation: change in internal energy equals heat in minus work out. The second says entropy of an isolated system increases — heat flows hot to cold and no engine can be 100% efficient. The Carnot limit is 1 minus Tc over Th in kelvin, so an engine between 600 K and 300 K can't exceed 50%."

Tip: Carnot.`,

'What is Reynolds number?':
`**Why they ask:** fluid fundamentals.

**Answer:**
"Re equals rho v D over mu — the ratio of inertial to viscous forces. Pipe flow is laminar below about 2,300 and turbulent above about 4,000. Water at 2 meters per second in a 50 millimeter pipe gives 1,000 times 2 times 0.05 over 0.001 — 100,000, clearly turbulent."

Tip: Flow regime.`,

'How do you calculate pressure drop in a pipe?':
`**Why they ask:** applied fluids.

**Answer:**
"Darcy-Weisbach: delta-P equals f times L over D times rho v squared over 2, with f from the Moody chart or Colebrook equation, plus minor losses from fittings and valves. For 100 meters of 50 millimeter pipe, water at 2 meters per second and f of 0.02: 0.02 times 2,000 times 2,000 pascals — about 80 kPa before fittings."

Tip: Minor losses.`,

'Walk through your design process.':
`**Why they ask:** structured engineering.

**Answer:**
"Requirements and specifications first, then concept generation and selection with a Pugh matrix, detailed design and analysis, DFMEA, prototyping, testing and validation, design reviews at each gate, and release to manufacturing."

Tip: Design reviews.`,

'What is a DFMEA?':
`**Why they ask:** risk-based design.

**Answer:**
"Design Failure Mode and Effects Analysis identifies potential failure modes, their effects, causes and current controls, rating severity, occurrence and detection to prioritize actions. It's most valuable early, when changing the design is still cheap."

Tip: Early in design.`,

'What design-for-manufacturing principles do you apply?':
`**Why they ask:** practical design.

**Answer:**
"Minimize part count, use standard components, set tolerances no tighter than function requires, and respect process rules — draft angles and uniform walls for molding, tool access for machining, bend radii for sheet metal — plus design for assembly, like self-locating features."

Tip: Process-specific rules.`,

'Which manufacturing processes do you know?':
`**Why they ask:** design-to-process understanding.

**Answer:**
"Machining — milling and turning — injection molding, casting, sheet metal, welding, additive manufacturing, extrusion and forging. Each changes how I design: a molded part needs draft, a cast part needs generous radii."

Tip: Design implications.`,

'When would you use 3D printing?':
`**Why they ask:** process selection.

**Answer:**
"For prototypes, complex geometries, low-volume custom parts, fixtures and tooling, and lightweighting with lattices. At high volume, molding wins on cost per part once tooling is amortized, so I compare the crossover point."

Tip: Volume economics.`,

'Which CAD tools do you use?':
`**Why they ask:** tooling fit.

**Answer:**
"SolidWorks and Creo mostly, with exposure to NX and CATIA, plus PDM and PLM systems like Windchill and Teamcenter."

Tip: PLM.`,

'How do you plan validation testing?':
`**Why they ask:** verification rigor.

**Answer:**
"Derive tests from requirements and risks, define acceptance criteria and statistically justified sample sizes, include environmental and life testing — HALT to find weaknesses, HASS to screen production — document results and address every failure."

Tip: Requirements traceability.`,

'How do you investigate a field failure?':
`**Why they ask:** root cause skills.

**Answer:**
"Gather the failed parts and usage data, do failure analysis — visual, fractography, metallurgy — compare against design assumptions, test hypotheses, then implement and verify the corrective action. Beach marks on a fracture surface tell you it was fatigue, not overload."

Tip: Fractography.`,

'How do you address vibration problems?':
`**Why they ask:** dynamics.

**Answer:**
"Identify natural frequencies with modal analysis and the excitation sources, then avoid resonance by changing stiffness or mass — natural frequency scales with the square root of k over m — or add damping or isolation."

Tip: Resonance.`,

'How do you design a bolted joint?':
`**Why they ask:** a common design element.

**Answer:**
"Determine loads, choose bolt size and grade, set preload — often 75% of proof load for reusable joints — calculate joint stiffness so I know how much external load the bolt actually sees, check for separation, fatigue and thread stripping, and specify the torque. Proper preload is what keeps joints from loosening and fatiguing."

Tip: Preload.`,

'What are key HVAC design considerations?':
`**Why they ask:** building systems.

**Answer:**
"Heating and cooling load calculations, ventilation rates per ASHRAE 62.1, equipment sizing, duct design, energy efficiency and controls. Oversizing is as bad as undersizing — short cycling hurts humidity control and efficiency."

Tip: ASHRAE.`,

'Which standards have you worked with?':
`**Why they ask:** industry fit.

**Answer:**
"ASME Y14.5 for drawings and the Boiler and Pressure Vessel Code, ISO standards, ASTM material specs, ASHRAE and UL safety standards — depending on the product."

Tip: Industry-specific.`,

'How do you reduce product cost?':
`**Why they ask:** business awareness.

**Answer:**
"Value engineering, part consolidation, material and process changes, relaxing tolerances where function allows, standardization and early supplier collaboration — suppliers often know a cheaper way to make the same function."

Tip: Value engineering.`,

"Tell me about a design you're proud of.":
`**Why they ask:** measurable impact.

**Answer:**
"I redesigned a pump housing from a five-part weldment into a single casting. It cut cost 32% and eliminated leaks, validated through pressure and life testing."

Tip: Measured.`,

'Tell me about a design failure.':
`**Why they ask:** learning mindset.

**Answer:**
"A bracket cracked in vibration testing. I'd missed a resonance near the operating frequency. Adding a stiffening rib shifted the mode well above it, and now I always run modal analysis early."

Tip: Learning.`,

'How do you work with manufacturing?':
`**Why they ask:** collaboration.

**Answer:**
"Involve them early in design reviews, spend time on the floor, act on their DFM feedback, and support the production ramp — the best manufacturing input comes before the drawing is released."

Tip: Early involvement.`,

'Do you have or plan a PE license?':
`**Why they ask:** licensure plans.

**Answer:**
"I've passed the FE and plan to sit for the PE once I have the experience. It matters most for roles signing off designs, like HVAC, building systems or public safety."

Tip: When required.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward lead engineer, and then either technical specialist or engineering manager."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I design reliable, manufacturable products backed by solid analysis and testing — cutting cost 32% on a key part while eliminating failures."

Tip: Proof.`,

"What's the maximum deflection of a simply supported beam with a central point load?":
`**Why they ask:** classic formula recall.

**Answer:**
"Deflection is PL cubed over 48EI, and maximum moment is PL over 4, both at midspan. Because deflection goes with L cubed, doubling the span increases deflection eight times."

Tip: Know classic formulas.`,

'How do you check column buckling?':
`**Why they ask:** stability analysis.

**Answer:**
"Euler's critical load is pi squared EI over KL squared. K depends on end conditions: 1 for pinned-pinned, 0.5 for fixed-fixed, 2 for fixed-free — so a fixed-free column carries a quarter of the pinned-pinned load. I check slenderness and use the Johnson formula for intermediate columns, where Euler overpredicts."

Tip: End conditions.`,

'What do you consider in gear design?':
`**Why they ask:** machine design.

**Answer:**
"Gear ratio, tooth bending strength using Lewis or AGMA equations, contact stress for pitting resistance, materials and heat treatment, lubrication and backlash."

Tip: AGMA.`,

'How do you select a bearing?':
`**Why they ask:** component selection.

**Answer:**
"Radial and axial loads, speed, life, environment, lubrication and mounting. For ball bearings, L10 life in millions of revolutions is C over P cubed: with a dynamic rating of 20 kN and a 5 kN load, that's 64 million revolutions — about 1,070 hours at 1,000 rpm."

Tip: L10 life.`,

'How do you prevent corrosion?':
`**Why they ask:** durability.

**Answer:**
"Material selection, coatings and plating, avoiding galvanic couples — or isolating them, like stainless fasteners in aluminum — design for drainage so water doesn't sit, cathodic protection and inhibitors."

Tip: Galvanic series.`,

'What governs pressure vessel design?':
`**Why they ask:** code knowledge.

**Answer:**
"ASME BPVC Section VIII: wall thickness, materials, welding, inspection and hydrostatic testing. Hoop stress is PD over 2t — at 2 MPa, 1,000 millimeter diameter and 10 millimeter wall, that's 100 MPa — and it's twice the longitudinal stress, which is why vessels split lengthwise."

Tip: Hoop stress = PD/2t.`,

'How do you manage heat in electronics enclosures?':
`**Why they ask:** thermal design.

**Answer:**
"Heat sinks, thermal interface materials, airflow paths, fans, heat pipes and thermal simulation to find hot spots before building hardware."

Tip: Thermal simulation.`,

'How do you decide prototype fidelity?':
`**Why they ask:** efficient development.

**Answer:**
"Match it to what I need to learn: 3D printed for form and fit, machined for function, production tooling for final validation."

Tip: Learning goals.`,

'How do you manage engineering changes?':
`**Why they ask:** configuration control.

**Answer:**
"Through the ECR and ECO process with impact analysis on cost, inventory, validation and suppliers, approvals, documentation updates and clear effectivity dates — so everyone knows which serial numbers or lots get the change."

Tip: Effectivity.`,

'How do you handle unclear requirements?':
`**Why they ask:** stakeholder management.

**Answer:**
"Clarify with stakeholders, document assumptions, propose measurable specs — 'withstand a 1-meter drop onto concrete' instead of 'durable' — and confirm before detailed design."

Tip: Measurable specs.`,

'How do you design for sustainability?':
`**Why they ask:** modern priorities.

**Answer:**
"Lightweighting, recyclable materials, energy efficiency in use, longer life and repairability, and life-cycle assessment to find where the real impact is."

Tip: LCA.`,

'A part is failing in production at 5%. What do you do?':
`**Why they ask:** problem-solving.

**Answer:**
"Contain first, then gather data — which features fail, which suppliers, lots and machines. Compare failures against the drawing and tolerances, check process capability — a Cpk below 1.33 points to the process — find the root cause, and fix either the design or the process."

Tip: Data first.`,

"You're asked to cut weight 20% without losing strength. How?":
`**Why they ask:** optimization thinking.

**Answer:**
"Topology optimization to remove material where stress is low, material changes like aluminum or composites, and geometry changes — ribs instead of solid sections, I-beams instead of rectangles. Then validate with FEA and testing."

Tip: Topology optimization.`,

'What simulation tools have you used?':
`**Why they ask:** analysis tooling.

**Answer:**
"ANSYS Mechanical and Fluent, Abaqus, SolidWorks Simulation and COMSOL — always validated against hand calculations or test data."

Tip: Validation.`,

'What makes a good engineering drawing?':
`**Why they ask:** communication quality.

**Answer:**
"Clear views, complete dimensions with GD&T, tolerances, material, finish, notes and revision control — so any shop can make and inspect the part without calling me."

Tip: Manufacturable.`,

'How do you work with electrical and software engineers?':
`**Why they ask:** multidisciplinary collaboration.

**Answer:**
"Shared requirements, interface control documents, regular integration reviews and early collaboration on packaging, so the board fits and gets cooled."

Tip: Interface control.`,

'What would you ask in an interview?':
`**Why they ask:** due diligence.

**Answer:**
"What products and development process? Which tools and testing facilities? How is the team structured, and what growth opportunities are there?"

Tip: Process.`,

'What do you consider when designing welded joints?':
`**Why they ask:** fabrication design.

**Answer:**
"Joint type and weld size for the loads, weld symbols per AWS A2.4, access for the welder, distortion and residual stresses, fatigue at weld toes, inspection methods, and AWS D1.1 for structural steel."

Tip: Fatigue at weld toes.`,

};
