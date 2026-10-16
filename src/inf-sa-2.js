QB['inf-sa'] = (QB['inf-sa']||[]).concat([
["Well-Architected", "What is the Well-Architected Framework?",
`**Answer:** AWS (and Azure's similar framework) guidance for reviewing workloads against pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. Use it in design reviews to find risks.

Tip: Name the pillars.`, 'B', 'M'],
["Multi-tenancy", "How do you design a multi-tenant SaaS application?",
`**Answer:** Choose an isolation model: pooled (shared database with a tenant ID), bridge (schema per tenant), or silo (database or stack per tenant). Enforce tenant context in every query (row-level security), meter per-tenant usage, and plan noisy-neighbor controls. Large or regulated customers can get dedicated silos.

Tip: Row-level security.`, 'D', 'S'],
["Disaster Recovery", "What DR strategies exist and how do they compare?",
`**Answer:** From cheapest and slowest to most expensive and fastest: backup and restore (hours to days), pilot light (core components running, minutes to hours), warm standby (scaled-down copy), and multi-site active/active (near-zero RTO). Choose based on the RTO/RPO and the budget.

Tip: Match it to the business impact analysis.`, 'B', 'M'],
["Batch vs Real-time", "How do you decide between batch and real-time processing?",
`**Answer:** Use real-time (streaming/events) when business decisions need fresh data in seconds, such as fraud detection or inventory availability. Batch is simpler and cheaper for reporting and reconciliations. Many solutions combine the two.

Tip: Ask how fresh the data needs to be.`, 'B', 'M'],
["Performance", "How do you validate performance before go-live?",
`**Answer:** Define targets (latency percentiles, throughput), run load and stress tests with realistic data and traffic patterns, find bottlenecks, tune, re-test, and set up production monitoring against the same targets.

Tip: Use percentiles, not averages.`, 'B', 'M'],
["Data Migration", "How do you plan a data migration in a solution?",
`**Answer:** Profile and cleanse the source data, map and transform it, run trial migrations, reconcile counts and balances, get business sign-off, and rehearse the cutover with rollback plans.

Tip: Reconciliation sign-off.`, 'B', 'M']
]);
