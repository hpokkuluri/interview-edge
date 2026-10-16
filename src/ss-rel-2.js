QB['ss-rel'] = (QB['ss-rel']||[]).concat([
["Failure Patterns", "What are the six failure patterns?",
`**Answer:** From airline studies: A (bathtub), B (wear-out), C (gradual increase), D (low then rising), E (random) and F (infant mortality then random). Most failures in complex equipment are random or infant mortality, so time-based overhauls often don't help and can introduce failures.

Tip: Supports condition-based maintenance.`, 'D', 'S'],
["Alignment", "Why is shaft alignment important?",
`**Answer:** Misalignment increases vibration, bearing and seal wear, coupling failures and energy use. Use laser alignment to tolerances, correct soft foot, and check thermal growth.

Tip: Laser alignment.`, 'B', 'M'],
["Bearings", "What causes premature bearing failure?",
`**Answer:** Poor lubrication (the leading cause), contamination, misalignment, improper installation (impact damage), overloading, and electrical fluting from VFDs.

Tip: Lubrication and contamination.`, 'B', 'M'],
["Defect Elimination", "What is defect elimination?",
`**Answer:** A systematic process where teams identify recurring defects, analyze causes and remove them permanently, instead of repeatedly repairing them. Track defects eliminated as a metric.

Tip: Permanent fixes.`, 'D', 'M'],
["Root Cause", "Physical vs human vs latent root causes?",
`**Answer:** **Physical** is the material cause (a fatigued shaft). **Human** is the action that triggered it (incorrect installation). **Latent** is the system weakness that allowed it (no procedure or training). Lasting fixes address latent causes.

Tip: System fixes.`, 'D', 'M'],
["Reliability Block", "How do redundancy and series systems affect reliability?",
`**Answer:** Series systems multiply reliabilities (0.95 × 0.95 = 0.9025). Parallel redundancy improves it: 1 − (1 − 0.95)² = 0.9975.

Tip: Show the calculation.`, 'D', 'M'],
["Spare Parts Math", "How do you set spares for slow-moving critical parts?",
`**Answer:** Use failure rates and lead time with a Poisson model to find the stock level that meets a target availability, weighing the downtime cost against holding cost. Even one spare can be justified for long-lead critical items.

Tip: Downtime cost.`, 'D', 'S'],
["Digital Twin", "What is a digital twin in maintenance?",
`**Answer:** A virtual model of an asset fed with real-time data to simulate performance, predict failures and test maintenance strategies.

Tip: Simulation.`, 'D', 'M'],
["Training", "How do you build maintenance technician skills?",
`**Answer:** Skills matrices, structured on-the-job training, precision maintenance training, certifications, and mentoring by senior technicians.

Tip: Skills matrix.`, 'B', 'E']
]);
