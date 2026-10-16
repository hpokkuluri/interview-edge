// en-civil — generated from src/en-civil-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Civil / Structural Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['en-civil'] = [
["Role", "What does a civil/structural engineer do?",
`**Why they ask:** specialty focus.

**Answer:** Designs and analyzes infrastructure and buildings — structural systems, site/civil (grading, drainage, utilities), transportation or geotechnical — preparing calculations, drawings and specifications, ensuring code compliance, coordinating with architects and contractors, and providing construction support.

Tip: Specialty and project types.`, 'B', 'E'],

["Loads", "What loads do you consider in structural design?",
`**Answer:** Dead, live, snow, wind, seismic, rain, soil and hydrostatic, thermal — combined per ASCE 7 load combinations (LRFD e.g. 1.2D + 1.6L).

Tip: ASCE 7.`, 'B', 'E'],

["LRFD", "LRFD vs ASD?",
`**Answer:** **LRFD** applies load factors and resistance factors (φ) for strength design; **ASD** uses service loads with allowable stresses (safety factor Ω). Both are permitted by AISC.

Tip: Factors.`, 'B', 'M'],

["Beams", "How do you design a steel beam?",
`**Answer:** Determine loads and moments/shears, select a section with adequate flexural strength (φMn considering lateral-torsional buckling and unbraced length), shear capacity, deflection limits (L/360 live load), and connections — per AISC 360.

Tip: Lateral bracing.`, 'B', 'M'],

["Concrete", "How do you design a reinforced concrete beam?",
`**Answer:** Calculate factored moment, determine required steel area using ACI 318 (Mn = As fy (d − a/2)), check minimum and maximum steel, shear reinforcement (stirrups), development lengths, and deflection/cracking.

Tip: Tension-controlled.`, 'B', 'M'],

["Seismic", "How do you approach seismic design?",
`**Answer:** Determine site class and seismic design category, select lateral system (moment frames, braced frames, shear walls) with R factor, calculate base shear (equivalent lateral force or modal analysis), detail for ductility, and check drift.

Tip: Ductility.`, 'D', 'M'],

["Wind", "How do you calculate wind loads?",
`**Answer:** ASCE 7: basic wind speed, exposure category, topography and importance, velocity pressure qz = 0.00256 Kz Kzt Kd Ke V², then pressures for MWFRS and components and cladding.

Tip: Exposure category.`, 'D', 'M'],

["Foundations", "How do you choose a foundation type?",
`**Answer:** Based on geotechnical report (bearing capacity, settlement), loads, groundwater and cost — spread footings, mat foundations, or deep foundations (piles, drilled shafts).

Tip: Geotech report.`, 'B', 'M'],

["Geotech", "What's in a geotechnical report?",
`**Answer:** Soil borings and lab tests, allowable bearing pressure, settlement estimates, groundwater, seismic site class, foundation and earthwork recommendations.

Tip: Recommendations.`, 'B', 'E'],

["Retaining", "How do you design a retaining wall?",
`**Answer:** Determine lateral earth pressures (active, at-rest, surcharge, water), check overturning, sliding and bearing, design stem and footing reinforcement, and provide drainage.

Tip: Drainage.`, 'D', 'M'],

["Stormwater", "How do you design stormwater management?",
`**Answer:** Calculate runoff (Rational Method Q = CiA or TR-55), size pipes and inlets, detention/retention to meet release rates, water quality BMPs, and comply with local regulations.

Tip: Rational method.`, 'B', 'M'],

["Grading", "What are site grading considerations?",
`**Answer:** Drainage away from buildings, ADA accessible slopes (≤ 5% walks, ≤ 8.33% ramps, ≤ 2% cross slope), earthwork balance, and erosion control.

Tip: ADA slopes.`, 'B', 'M'],

["Transportation", "What goes into roadway design?",
`**Answer:** Design speed, horizontal and vertical alignment, cross sections, sight distance, pavement design, drainage and traffic control — per AASHTO and state DOT standards.

Tip: AASHTO.`, 'D', 'M'],

["Pavement", "How do you design pavement?",
`**Answer:** Traffic loading (ESALs), subgrade strength (CBR/resilient modulus), material selection, and thickness design using AASHTO or mechanistic-empirical methods.

Tip: ESALs.`, 'D', 'M'],

["Software", "Which software do you use?",
`**Answer:** Civil 3D, AutoCAD, Revit, ETABS, SAP2000, RISA, RAM Structural System, STAAD, HEC-RAS, and Bluebeam.

Tip: Specialty tools.`, 'B', 'E'],

["Codes", "Which codes govern your work?",
`**Answer:** IBC, ASCE 7, ACI 318, AISC 360, NDS (wood), TMS 402 (masonry), AASHTO LRFD Bridge Design, and local amendments.

Tip: Local amendments.`, 'B', 'E'],

["Construction", "What is your role during construction?",
`**Answer:** Respond to RFIs, review submittals and shop drawings, site observations, address field changes, and inspect special conditions.

Tip: Submittals.`, 'B', 'E'],

["QA", "How do you check your calculations?",
`**Answer:** Independent peer review, hand checks of software results, sanity checks of reactions and deflections, and checklists.

Tip: Peer review.`, 'B', 'E'],

["Wood", "What are key considerations in wood design?",
`**Answer:** Adjustment factors (load duration, moisture, size), connections, shear walls and diaphragms for lateral loads, and fire protection.

Tip: Adjustment factors.`, 'D', 'M'],

["Steel Connections", "How do you design steel connections?",
`**Answer:** Determine forces, choose bolted or welded connections, check bolt shear and bearing, weld strength, block shear, and prying action per AISC.

Tip: Block shear.`, 'D', 'M'],

["Permits", "How do you manage permitting?",
`**Answer:** Understand jurisdiction requirements, prepare complete submissions, respond to comments promptly, and coordinate with agencies early.

Tip: Early coordination.`, 'B', 'E'],

["Sustainability", "How do you incorporate sustainability?",
`**Answer:** Efficient structural systems, low-carbon materials (mass timber, recycled steel, SCMs in concrete), green infrastructure and LEED/Envision credits.

Tip: Embodied carbon.`, 'B', 'M'],

["Behavioral", "Tell me about a challenging project.",
`**Sample answer:** "On a mid-rise over a podium, a late architectural change moved columns. I re-analyzed transfer beams overnight and coordinated with the contractor, avoiding a 3-week delay."

Tip: Problem-solving.`, 'B', 'M'],

["Behavioral", "Tell me about a design error you caught.",
`**Answer:** Describe a peer review catching an error, correcting it before construction, and improving checklists.

Tip: QA culture.`, 'B', 'E'],

["Behavioral", "How do you work with architects?",
`**Answer:** Early collaboration on structural systems, clear communication of constraints, and creative solutions supporting design intent.

Tip: Collaboration.`, 'B', 'E'],

["Licensure", "What is the path to PE/SE?",
`**Answer:** ABET degree, FE exam, ~4 years experience under a PE, PE exam; SE license (16-hour exam) for significant structures in some states.

Tip: SE in some states.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Project engineer/manager, principal, or technical specialist.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I produce accurate, code-compliant designs and solve field issues fast — keeping projects on schedule."

Tip: Proof.`, 'B', 'E'],

["Deflection", "Why do deflection limits matter?",
`**Answer:** Excessive deflection causes cracking of finishes, ponding, vibration discomfort and serviceability problems even if strength is adequate.

Tip: Serviceability.`, 'B', 'E'],

["Vibration", "How do you check floor vibration?",
`**Answer:** AISC Design Guide 11 for walking-induced vibration; natural frequency and acceleration checks against human comfort criteria.

Tip: DG 11.`, 'D', 'S'],

["Bridges", "What are key bridge design considerations?",
`**Answer:** AASHTO LRFD loads (HL-93), girder design, bearings, expansion joints, scour, fatigue and inspection access.

Tip: HL-93.`, 'D', 'M'],

["Water", "How do you design a water distribution system?",
`**Answer:** Demand calculations, fire flow requirements, pipe sizing for pressure (minimum ~20 psi in fire conditions), hydraulic modeling (WaterCAD/EPANET), valves and hydrants.

Tip: Fire flow.`, 'D', 'M'],

["Sewer", "How do you design sanitary sewers?",
`**Answer:** Flow estimates with peaking factors, minimum slopes for self-cleansing velocity (~2 ft/s), manhole spacing and pipe materials.

Tip: Minimum velocity.`, 'D', 'M'],

["Erosion", "What is an erosion and sediment control plan?",
`**Answer:** Measures during construction (silt fences, inlet protection, stabilized entrances, sediment basins) to meet NPDES permits.

Tip: SWPPP.`, 'B', 'M'],

["Existing Buildings", "How do you assess an existing structure?",
`**Answer:** Review drawings, site investigation, material testing, analysis for current loads and codes (IEBC), and recommendations for repair or strengthening.

Tip: IEBC.`, 'D', 'M'],

["Scenario", "Field crews found a beam installed in the wrong location. What do you do?",
`**Answer:** Assess structural impact with analysis, propose fix or approve if adequate, document via field directive, and update records.

Tip: Analyze, don't guess.`, 'B', 'M'],

["Scenario", "The contractor wants to substitute materials to save cost. What do you do?",
`**Answer:** Evaluate equivalency for strength, durability and code compliance; approve, reject or request more information formally.

Tip: Equivalency.`, 'B', 'E'],

["Load Path", "What is a continuous load path?",
`**Answer:** A complete path transferring loads from roof to foundation through connections and members — critical for wind and seismic resistance.

Tip: Connections matter.`, 'B', 'M'],

["Diaphragms", "What is a diaphragm?",
`**Answer:** Horizontal elements (floors, roofs) that transfer lateral loads to vertical lateral systems — flexible or rigid behavior affects distribution.

Tip: Rigid vs flexible.`, 'D', 'M'],

["Fees", "How do you estimate design effort?",
`**Answer:** Break down by phases and deliverables, compare similar projects, include coordination and construction support.

Tip: Construction support hours.`, 'B', 'E'],

["BIM", "How do you use BIM?",
`**Answer:** Revit models for coordination, clash detection with MEP, quantity takeoffs and better documentation.

Tip: Clash detection.`, 'B', 'E'],

["Safety", "How do engineers contribute to construction safety?",
`**Answer:** Design for constructability and safety, temporary works considerations, clear sequencing notes, and responding to field concerns.

Tip: Constructability.`, 'B', 'E'],

["Questions", "What would you ask in an interview?",
`**Answer:** Project types, mentoring and PE support, software, field exposure, and growth path.

Tip: PE support.`, 'B', 'E']
];

QB['en-civil'] = (QB['en-civil']||[]).concat([
["Concrete Mix", "What affects concrete strength and durability?",
`**Answer:** Water-cement ratio (lower means stronger and more durable), cement and SCM content, aggregates, air entrainment for freeze-thaw, curing, and admixtures. Specify f'c, exposure classes and test cylinders.

Tip: Water-cement ratio.`, 'B', 'M'],
["Post-tensioning", "What is post-tensioned concrete?",
`**Answer:** Tendons are tensioned after the concrete cures to precompress the members. This allows longer spans and thinner slabs with less cracking, but needs careful detailing and attention to penetrations.

Tip: Thinner slabs.`, 'D', 'M'],
["Mass Timber", "What are considerations for mass timber buildings?",
`**Answer:** CLT and glulam systems, fire ratings through charring, connections, moisture protection during construction, the lateral system (often concrete cores), and IBC Type IV-A/B/C allowances.

Tip: Type IV.`, 'D', 'M'],
["Floodplain", "How do floodplains affect site design?",
`**Answer:** FEMA flood maps, base flood elevation requirements, no-rise analysis for floodway encroachments, and elevation or floodproofing of structures.

Tip: BFE.`, 'D', 'M'],
["Inspection", "What are special inspections?",
`**Answer:** IBC Chapter 17 requires special inspections for critical work (concrete, steel connections, soils, masonry). The engineer prepares a statement of special inspections and reviews the reports.

Tip: Chapter 17.`, 'B', 'M'],
["Communication", "How do you explain structural issues to non-engineers?",
`**Answer:** Plain language, simple sketches, focus on safety and cost impacts, and clear options.

Tip: Sketches.`, 'B', 'E'],
["Scenario", "A tenant wants to add heavy equipment on an existing floor. What do you do?",
`**Answer:** Get the equipment loads and footprint, review the existing drawings and capacity, analyze the members, and recommend reinforcement or load spreading if needed.

Tip: Verify capacity.`, 'B', 'M']
]);
