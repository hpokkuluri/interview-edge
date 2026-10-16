QB['ea-d365'] = (QB['ea-d365']||[]).concat([
["Posting", "What are posting profiles in D365 F&O?",
`**Answer:** Configurations that map subledger transactions (customers, vendors, inventory, fixed assets) to main accounts, such as the AR summary account for a customer group, or inventory receipt and issue accounts per item group.

Tip: The foundation of GL integration.`, 'D', 'M'],
["CE", "What are model-driven apps vs canvas apps?",
`**Answer:** **Model-driven apps** are built from Dataverse data (forms, views, business process flows) with consistent UI, and are what D365 CE apps use. **Canvas apps** are pixel-designed apps connecting to many data sources, good for task-specific mobile apps.

Tip: Know when to use each.`, 'B', 'M'],
["CE", "What are business process flows?",
`**Answer:** Guided stages and steps displayed on records (for example lead to opportunity stages: Qualify, Develop, Propose, Close) to standardize processes and require key data at each stage.

Tip: Stage gating.`, 'B', 'E'],
["Environments", "What environments do you need in an F&O project?",
`**Answer:** Development (cloud-hosted or unified developer), build, test/UAT (sandbox tier 2+), performance testing (higher tier), and production, with database movement operations to refresh test environments.

Tip: Refresh UAT from production.`, 'D', 'M'],
["Cutover", "What does a D365 go-live cutover include?",
`**Answer:** Freeze legacy systems, final data migration (open AR/AP, open orders, on-hand inventory, GL balances), reconciliation and sign-off, configuration validation, integration switch-over, user access checks, and hypercare support.

Tip: Reconciliation sign-off.`, 'B', 'M']
]);
