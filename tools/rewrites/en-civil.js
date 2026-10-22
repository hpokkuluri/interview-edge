// Rewritten Engineering — Civil / Structural Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix en-civil-).
module.exports = {

'What loads do you consider in structural design?':
`**Why they ask:** the starting point of every design.

**Answer:**
"Dead, live, snow, wind, seismic, rain, soil and hydrostatic pressure, and thermal effects — combined using the ASCE 7 load combinations. For strength design, a floor with 50 psf dead and 80 psf live gives 1.2 times 50 plus 1.6 times 80, which is 188 psf, and I check that against 1.4D and the wind and seismic combinations to find the governing case."

Tip: ASCE 7.`,

'LRFD vs ASD?':
`**Why they ask:** design philosophy fundamentals.

**Answer:**
"LRFD factors the loads up and the resistance down with φ factors, and checks that factored load is at most φ times nominal strength. ASD uses unfactored service loads against allowable strength — nominal strength divided by a safety factor Ω. AISC permits both and they're calibrated to give similar results; LRFD gives more consistent reliability when dead and live load ratios vary."

Tip: Factors.`,

'How do you design a steel beam?':
`**Why they ask:** a core structural skill.

**Answer:**
"Find the loads, moments and shears — a 30-foot simple span with 2 kips per foot factored gives wL squared over 8, 225 kip-feet. Select a section with φMn at least that, accounting for lateral-torsional buckling based on the unbraced length — bracing at the deck changes everything. Then check shear, live load deflection against L/360, which is 1 inch on 30 feet, and design the connections per AISC 360."

Tip: Lateral bracing.`,

'How do you design a reinforced concrete beam?':
`**Why they ask:** concrete design fundamentals.

**Answer:**
"Calculate the factored moment, then size the steel per ACI 318. For a 12-inch-wide beam with d of 20 inches, 3 square inches of Grade 60 steel and 4 ksi concrete: a equals As fy over 0.85 f'c b, which is 180 over 40.8, about 4.4 inches. Mn is 180 times 20 minus 2.2, about 3,200 kip-inches or 267 kip-feet, so φMn is about 240 kip-feet. Then check minimum and maximum steel so it's tension-controlled, stirrups for shear, development lengths, and deflection and cracking."

Tip: Tension-controlled.`,

'How do you approach seismic design?':
`**Why they ask:** life-safety design.

**Answer:**
"Determine the site class and seismic design category, select the lateral system — moment frames, braced frames or shear walls — with its R factor, and calculate base shear. With the equivalent lateral force method, Cs is SDS over R over Ie: SDS of 1.0 with R of 8 gives 0.125, so a 10,000-kip building sees 1,250 kips base shear. Then detail for ductility and check story drift."

Tip: Ductility.`,

'How do you calculate wind loads?':
`**Why they ask:** a common lateral load calc.

**Answer:**
"Using ASCE 7: basic wind speed, exposure category, topography and importance, then velocity pressure qz equals 0.00256 Kz Kzt Kd Ke V squared. At 115 mph, V squared is 13,225, times 0.00256 is about 34 psf; with Kz of 0.85 and Kd of 0.85 that's about 24.5 psf. Then I apply pressure coefficients separately for the main wind force resisting system and for components and cladding, which see higher local pressures."

Tip: Exposure category.`,

'How do you choose a foundation type?':
`**Why they ask:** geotechnical judgment.

**Answer:**
"Based on the geotech report — bearing capacity and settlement — plus loads, groundwater and cost. Good soil with modest loads means spread footings. Heavy loads or settlement concerns may mean a mat. Weak or compressible soil near the surface means deep foundations: driven piles or drilled shafts to competent layers."

Tip: Geotech report.`,

"What's in a geotechnical report?":
`**Why they ask:** coordination with geotechnical engineers.

**Answer:**
"Soil borings and lab test results, allowable bearing pressure, settlement estimates, groundwater levels, seismic site class, and recommendations for foundations, earthwork, slabs and retaining walls."

Tip: Recommendations.`,

'How do you design a retaining wall?':
`**Why they ask:** applied geotechnical-structural design.

**Answer:**
"Determine lateral earth pressures — active, at-rest, surcharge and water. For a 10-foot wall with 120 pcf soil and Ka of one-third, the active force is half times Ka times gamma times H squared — 2,000 pounds per foot acting at H over 3. Then check overturning, sliding and bearing, typically with factors of safety of at least 1.5, design the stem and footing reinforcement, and provide drainage so water pressure doesn't build up."

Tip: Drainage.`,

'How do you design stormwater management?':
`**Why they ask:** site civil skill.

**Answer:**
"Calculate runoff — for small sites the Rational Method, Q equals CiA. A 2-acre parking lot with C of 0.9 and 4 inches per hour intensity gives 7.2 cfs. Then size pipes and inlets, design detention or retention to meet allowed release rates, add water quality BMPs, and comply with local regulations. Larger watersheds call for TR-55 or hydrograph methods."

Tip: Rational method.`,

'What are site grading considerations?':
`**Why they ask:** practical site design.

**Answer:**
"Drain away from buildings, keep ADA slopes — walks at 5% or less, ramps at 8.33% or less, cross slopes at 2% or less — balance cut and fill to limit import or export, and control erosion."

Tip: ADA slopes.`,

'What goes into roadway design?':
`**Why they ask:** transportation knowledge.

**Answer:**
"Design speed drives everything: horizontal and vertical alignment, cross sections, stopping sight distance, pavement design, drainage and traffic control — following AASHTO and the state DOT standards."

Tip: AASHTO.`,

'How do you design pavement?':
`**Why they ask:** pavement engineering basics.

**Answer:**
"Traffic loading expressed in ESALs — trucks dominate, since damage rises roughly with the fourth power of axle load — subgrade strength through CBR or resilient modulus, material selection, and thickness design with AASHTO 93 or mechanistic-empirical methods."

Tip: ESALs.`,

'Which software do you use?':
`**Why they ask:** tooling fit.

**Answer:**
"Civil 3D and AutoCAD for site work, Revit for models, ETABS, SAP2000, RISA and RAM for structural analysis, HEC-RAS for hydraulics, and Bluebeam for reviews."

Tip: Specialty tools.`,

'Which codes govern your work?':
`**Why they ask:** code literacy.

**Answer:**
"The IBC, ASCE 7 for loads, ACI 318 for concrete, AISC 360 for steel, NDS for wood, TMS 402 for masonry, AASHTO LRFD for bridges — and always the local amendments, which can change things like snow loads or seismic requirements."

Tip: Local amendments.`,

'What is your role during construction?':
`**Why they ask:** construction administration.

**Answer:**
"Respond to RFIs, review submittals and shop drawings, perform site observations, address field changes, and inspect special conditions. Fast, clear RFI responses keep the contractor from guessing."

Tip: Submittals.`,

'How do you check your calculations?':
`**Why they ask:** quality control.

**Answer:**
"Independent peer review, hand checks of software results, and sanity checks — total reactions should equal total applied load, and deflections should look right for the span. Plus checklists for common misses."

Tip: Peer review.`,

'What are key considerations in wood design?':
`**Why they ask:** material-specific knowledge.

**Answer:**
"Adjustment factors for load duration, moisture, size and temperature; connections, which often govern; shear walls and diaphragms for lateral loads; and fire protection."

Tip: Adjustment factors.`,

'How do you design steel connections?':
`**Why they ask:** connection detailing.

**Answer:**
"Determine the forces, choose bolted or welded, then check bolt shear and bearing, weld strength, block shear — where a chunk of the connected plate tears out along shear and tension planes — and prying action, per AISC."

Tip: Block shear.`,

'How do you manage permitting?':
`**Why they ask:** project delivery.

**Answer:**
"Understand the jurisdiction's requirements, prepare complete submissions, respond to comments quickly, and coordinate with agencies early — a pre-application meeting often saves a full review cycle."

Tip: Early coordination.`,

'How do you incorporate sustainability?':
`**Why they ask:** modern design priorities.

**Answer:**
"Efficient structural systems that use less material, low-carbon materials — mass timber, recycled steel, supplementary cementitious materials like fly ash or slag in concrete — green infrastructure for stormwater, and LEED or Envision credits."

Tip: Embodied carbon.`,

'Tell me about a challenging project.':
`**Why they ask:** problem-solving under pressure.

**Answer:**
"On a mid-rise over a concrete podium, a late architectural change moved columns. I re-analyzed the transfer beams overnight and coordinated revised details with the contractor, avoiding a three-week delay."

Tip: Problem-solving.`,

'Tell me about a design error you caught.':
`**Why they ask:** quality culture.

**Answer:**
"During peer review I found a footing designed for service loads instead of factored loads — undersized by about 30%. We corrected it before construction, and I added a load-basis check to our review checklist."

Tip: QA culture.`,

'How do you work with architects?':
`**Why they ask:** collaboration.

**Answer:**
"Collaborate early on structural systems, explain constraints clearly, and look for creative solutions that support design intent — like using a transfer truss so they keep an open lobby."

Tip: Collaboration.`,

'What is the path to PE/SE?':
`**Why they ask:** career progression.

**Answer:**
"An ABET-accredited degree, the FE exam, about four years of experience under a PE, then the PE exam. Some states require the SE license — a 16-hour exam — for significant structures like hospitals and schools."

Tip: SE in some states.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward project engineer and project manager, and eventually principal — while staying technically strong."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I produce accurate, code-compliant designs and solve field issues fast — keeping projects on schedule."

Tip: Proof.`,

'Why do deflection limits matter?':
`**Why they ask:** serviceability awareness.

**Answer:**
"A beam can be strong enough and still fail in use: excessive deflection cracks finishes and partitions, causes ponding on roofs, and makes floors feel bouncy. Limits like L/360 for live load keep it serviceable."

Tip: Serviceability.`,

'How do you check floor vibration?':
`**Why they ask:** advanced serviceability.

**Answer:**
"Using AISC Design Guide 11 for walking-induced vibration — calculate the floor's natural frequency and peak acceleration and compare against human comfort criteria, like 0.5% of g for offices. Long-span, light floors are the usual problems."

Tip: DG 11.`,

'What are key bridge design considerations?':
`**Why they ask:** bridge knowledge.

**Answer:**
"AASHTO LRFD loads, including the HL-93 truck and lane loading, girder design, bearings, expansion joints, scour at piers, fatigue of steel details, and access for inspection."

Tip: HL-93.`,

'How do you design a water distribution system?':
`**Why they ask:** municipal engineering.

**Answer:**
"Calculate demands and fire flow, size pipes to keep pressure — at least 20 psi during fire flow — model hydraulics in WaterCAD or EPANET, and lay out valves and hydrants. Fire flow usually governs pipe size."

Tip: Fire flow.`,

'How do you design sanitary sewers?':
`**Why they ask:** utility design.

**Answer:**
"Estimate flows with peaking factors, set minimum slopes for self-cleansing velocity — about 2 feet per second when flowing full — space manholes per standards, and select pipe materials."

Tip: Minimum velocity.`,

'What is an erosion and sediment control plan?':
`**Why they ask:** environmental compliance.

**Answer:**
"Construction-phase measures — silt fence, inlet protection, stabilized construction entrances, sediment basins — documented in a SWPPP to meet the NPDES permit."

Tip: SWPPP.`,

'How do you assess an existing structure?':
`**Why they ask:** renovation work.

**Answer:**
"Review existing drawings, investigate the site, test materials if needed, analyze for the new loads and code requirements under the IEBC, and recommend repair or strengthening."

Tip: IEBC.`,

'Field crews found a beam installed in the wrong location. What do you do?':
`**Why they ask:** field judgment.

**Answer:**
"Analyze the structural impact before deciding anything. If it works as installed, approve it; if not, propose a fix like adding a beam or reinforcement. Document it through a field directive and update the record drawings."

Tip: Analyze, don't guess.`,

'The contractor wants to substitute materials to save cost. What do you do?':
`**Why they ask:** substitution evaluation.

**Answer:**
"Evaluate equivalency for strength, durability and code compliance, then formally approve, reject or request more information. Savings are welcome, but the burden of showing equivalence is on the contractor."

Tip: Equivalency.`,

'What is a continuous load path?':
`**Why they ask:** structural fundamentals.

**Answer:**
"A complete path that carries loads from the roof down to the foundation through members and connections. In a hurricane, roofs come off at missing connections, not because the rafters are weak."

Tip: Connections matter.`,

'What is a diaphragm?':
`**Why they ask:** lateral systems.

**Answer:**
"Floors and roofs acting as horizontal beams that carry lateral loads to the vertical system. A rigid diaphragm, like a concrete slab, distributes by relative stiffness; a flexible one, like wood sheathing, distributes by tributary area."

Tip: Rigid vs flexible.`,

'How do you estimate design effort?':
`**Why they ask:** project management.

**Answer:**
"Break it down by phase and deliverable, compare with similar past projects, and include coordination and construction support — which is often underestimated."

Tip: Construction support hours.`,

'How do you use BIM?':
`**Why they ask:** digital workflows.

**Answer:**
"Revit models for coordination, clash detection with MEP in Navisworks, quantity takeoffs, and better documentation. Finding a duct running through a beam in the model costs nothing; in the field it costs weeks."

Tip: Clash detection.`,

'How do engineers contribute to construction safety?':
`**Why they ask:** responsibility.

**Answer:**
"Design for constructability, consider temporary conditions and stability during erection, add clear sequencing notes, and respond quickly to field concerns."

Tip: Constructability.`,

'What would you ask in an interview?':
`**Why they ask:** due diligence.

**Answer:**
"What project types will I work on? How do you support PE licensure and mentoring? Which software, how much field exposure, and what's the growth path?"

Tip: PE support.`,

'What affects concrete strength and durability?':
`**Why they ask:** materials knowledge.

**Answer:**
"Water-cement ratio most of all — lower is stronger and more durable. Also cement and SCM content, aggregates, air entrainment for freeze-thaw, curing and admixtures. I specify f'c, exposure classes and cylinder testing."

Tip: Water-cement ratio.`,

'What is post-tensioned concrete?':
`**Why they ask:** structural systems.

**Answer:**
"Tendons tensioned after the concrete cures to precompress members. It allows longer spans and thinner slabs with less cracking, but needs careful detailing — and nobody can core a slab later without locating tendons first."

Tip: Thinner slabs.`,

'What are considerations for mass timber buildings?':
`**Why they ask:** emerging systems.

**Answer:**
"CLT and glulam systems, fire resistance through charring, connections, moisture protection during construction, the lateral system — often concrete cores — and the IBC Type IV-A, B and C height allowances."

Tip: Type IV.`,

'How do floodplains affect site design?':
`**Why they ask:** regulatory site constraints.

**Answer:**
"Check FEMA flood maps, set floors relative to the base flood elevation plus local freeboard, do no-rise analysis for encroachments into the floodway, and elevate or floodproof structures."

Tip: BFE.`,

'What are special inspections?':
`**Why they ask:** quality during construction.

**Answer:**
"IBC Chapter 17 requires special inspections for critical work — concrete, steel connections, soils, masonry. The engineer prepares the statement of special inspections and reviews the reports."

Tip: Chapter 17.`,

'How do you explain structural issues to non-engineers?':
`**Why they ask:** communication.

**Answer:**
"Plain language, simple sketches, a focus on safety and cost impact, and clear options — 'we can add a steel beam for about $15,000, or move the equipment six feet to sit over the existing girder for nothing.'"

Tip: Sketches.`,

'A tenant wants to add heavy equipment on an existing floor. What do you do?':
`**Why they ask:** practical assessment.

**Answer:**
"Get the equipment weight and footprint, review existing drawings and the design live load, analyze the affected members, and recommend reinforcement or load-spreading if capacity isn't adequate."

Tip: Verify capacity.`,

};
