// Director of Supply Chain. Format: [topic, question, answer, 'B'|'D']
QB['sc-dir'] = (QB['sc-dir'] || []).concat([
['Strategy', 'How do you align supply chain strategy with business strategy?',
`- Understand the competitive priority (cost, speed, flexibility, service).
- Design the supply chain accordingly (lean vs agile, network, inventory policy).
- Translate into targets and initiatives; review through S&OP.`, 'B'],

['S&OP', 'How do you make S&OP effective?',
`- Executive engagement and decision-making focus.
- One set of numbers; clear calendar and roles.
- Scenarios for gaps; integrated with financial plans (IBP).`, 'D'],

['Metrics', 'What supply chain metrics do you report to leadership?',
`- **OTIF/service level**, inventory (days/turns), total supply chain cost, forecast accuracy, cash-to-cash cycle, supplier performance.`, 'B'],

['Resilience', 'How do you make a supply chain more resilient?',
`- Map multi-tier suppliers; identify single points of failure.
- Dual sourcing, nearshoring, strategic inventory buffers.
- Risk monitoring; scenario planning and playbooks.`, 'D'],

['Digital', 'What digital tools would you invest in?',
`- Integrated planning (IBP), control towers/visibility, WMS/TMS, analytics and AI for forecasting and risk.
- Clean master data foundation.`, 'D'],

['Team', 'How do you build a strong supply chain team?',
`- Right structure (planning, procurement, logistics, operations).
- Skills in analytics and systems; development and succession.
- Cross-functional collaboration.`, 'B'],

['Behavioral', 'Tell me about a supply chain crisis you managed.',
`- Crisis, immediate actions, communication, recovery, longer-term changes.`, 'B']
]);
