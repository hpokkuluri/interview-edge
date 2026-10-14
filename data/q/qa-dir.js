// qa-dir — generated from src/qa-dir-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Director of Quality Engineering. Format: [topic, question, answer, 'B'|'D']
QB['qa-dir'] = (QB['qa-dir'] || []).concat([
['Strategy', 'What is your vision for quality engineering in a modern organization?',
`- Quality is **everyone's job**; QE provides platforms, standards and expertise.
- **Shift-left and shift-right**: testability in design, automation in CI, observability and fast rollback in production.
- **Data-driven**: DORA metrics, escaped defects, customer-impacting incidents.
- **AI-assisted** testing with governance.`, 'B'],

['Org Design', 'How would you organize a QE organization of 40 people?',
`- **Embedded QE engineers** in product teams (SDET/automation).
- **Central QE platform team**: frameworks, test infrastructure, tooling, performance/security testing centers of excellence.
- **Practice leads** for standards and career development.
- Clear career ladder (QA analyst → SDET → staff QE).`, 'D'],

['Metrics', 'How do you measure the value of QE to executives?',
`- **Escaped defects** and customer-impacting incidents trend.
- **Change failure rate** and MTTR (DORA).
- **Release frequency** and lead time enabled by automation.
- **Cost of quality** (rework, incidents) vs investment.`, 'D'],

['Tooling', 'How do you choose and standardize QE tools?',
`- Criteria: fit for tech stack, maintainability, CI integration, cost, skills, vendor viability.
- Proofs of concept; standard "golden path" with room for justified exceptions.
- Retire redundant tools.`, 'B'],

['Transformation', 'How would you move an organization from manual-heavy testing to automation-first?',
`- Assess current state and ROI.
- Upskill manual testers (training, pairing); hire automation leaders.
- Prioritize automation of high-value regression and APIs.
- CI integration and quality gates.
- Track progress (automation coverage, cycle time) and celebrate wins.
- Handle people change with care.`, 'D'],

['Risk', 'How do you balance speed of delivery with quality?',
`- Risk-based quality gates; progressive delivery (feature flags, canaries).
- Strong automation reduces the trade-off.
- Clear ownership and fast feedback loops.
- Agreed error budgets with product.`, 'D'],

['Stakeholders', 'How do you partner with engineering and product leadership?',
`- Shared quality goals and metrics.
- QE input in planning and architecture.
- Transparent risk reporting for releases.
- Joint postmortems and improvements.`, 'B'],

['AI', 'What is your strategy for AI in testing?',
`- Use cases: test generation, test maintenance (self-healing), test data, defect clustering/triage, log analysis.
- Testing **AI features** themselves (evaluation, safety, drift).
- Governance: tool approval, data privacy, human review.
- Measure productivity and quality impact.`, 'D'],

['Behavioral', 'Tell me about a quality transformation you led.',
`- Starting point (release frequency, escaped defects, manual effort).
- Actions (org, tooling, process, culture).
- Results with numbers; lessons learned.`, 'B'],

['Behavioral', 'Why should we hire you as Director of QE?',
`- Track record scaling QE teams and automation.
- Measurable quality and speed improvements.
- Leadership and partnership style.
- Vision for their context.`, 'B']
]);
