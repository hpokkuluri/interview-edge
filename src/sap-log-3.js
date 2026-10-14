QB['sap-log'] = (QB['sap-log'] || []).concat([
['SD', 'What is the difference between a standard order, rush order and cash sale?',
`- **Standard order (OR)**: delivery and billing processed separately later.
- **Rush order (SO)**: delivery created immediately on saving; billing later.
- **Cash sale (BV)**: delivery created immediately and a cash invoice printed; payment at time of sale.
- Each has its own document type controls.`, 'B'],

['MM', 'How do you design purchasing approvals with flexible workflow in S/4HANA?',
`- **Flexible workflow** (Fiori "Manage Workflows") replaces classic release strategies for PRs/POs in S/4.
- Conditions (amount, material group, plant) and **step sequences** with agents (manager, role, specific user).
- Easier to maintain by business users; supports multiple steps and deadlines.
- Migrate from classic release strategy during S/4 programs where appropriate.`, 'D'],

['Integration', 'How does SAP IBP integrate with S/4HANA?',
`- **IBP** (Integrated Business Planning, cloud) for demand, supply, inventory optimization, S&OP.
- Master and transactional data from S/4 via **Cloud Integration for Data Services (CI-DS)** or **RTI** (real-time integration for order-based planning).
- Plans returned to S/4 (planned orders, purchase requisitions, stock transfers).
- Aligns tactical planning with execution.`, 'D']
]);
