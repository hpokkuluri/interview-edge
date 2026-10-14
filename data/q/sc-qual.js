// sc-qual — generated from src/sc-qual-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Quality Engineer / Quality Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-qual'] = (QB['sc-qual'] || []).concat([
['QMS', 'What are the key elements of ISO 9001?',
`- Process approach and **risk-based thinking**.
- Leadership commitment, quality policy and objectives.
- Documented processes, competence, customer focus.
- Monitoring, **internal audits**, management review, **corrective action**, continual improvement.`, 'B', 'E'],

['CAPA', 'Explain the CAPA process.',
`- **Corrective action**: fix the root cause of an existing nonconformance.
- **Preventive action**: prevent potential problems.
- Steps: identify → contain → investigate root cause → action plan → implement → **verify effectiveness** → close.`, 'B', 'E'],

['Root Cause', 'Which root cause tools do you use?',
`- **5 Whys**, **fishbone (Ishikawa)**, Pareto, fault tree, **8D** for customer complaints, is/is-not analysis.`, 'B', 'E'],

['SPC', 'What is SPC and what are control charts?',
`- **Statistical process control** monitors process variation.
- Control charts (X-bar/R, p-charts) show **common cause** vs **special cause** variation.
- **Cpk** measures process capability vs specification (≥1.33 often required).`, 'D', 'M'],

['Supplier Quality', 'How do you manage supplier quality?',
`- Supplier qualification and audits; PPAP (automotive) or first article inspection.
- Incoming inspection based on risk; scorecards (PPM defects).
- SCARs (supplier corrective action requests).`, 'D', 'M'],

['Tools', 'What is FMEA?',
`- **Failure mode and effects analysis**: identify potential failures, rate severity, occurrence, detection → prioritize actions (RPN or action priority).
- Design FMEA and process FMEA.`, 'D', 'M'],

['Audits', 'How do you prepare for a customer or certification audit?',
`- Internal audit first; fix gaps.
- Documents and records current; team briefed.
- Escort plan; handle findings promptly with CAPA.`, 'B', 'M'],

['Behavioral', 'Tell me about a quality problem you solved.',
`- Problem and impact (scrap, complaints), investigation, root cause, fix, verification, result.`, 'B', 'M']
]);
