QB['et-arch'] = (QB['et-arch'] || []).concat([
["Integration", "How do you choose between OIC and other iPaaS tools?",
`**Answer:** Consider existing enterprise standards, prebuilt adapters for Oracle and other apps, licensing and cost model, team skills, monitoring and governance capabilities, and non-Oracle integration needs. OIC fits Oracle-heavy landscapes; MuleSoft, Boomi or Azure Integration Services may already be enterprise standards.

Tip: Align with enterprise standards.`, 'D'],
["Events", "How would you use OCI Streaming in an Oracle architecture?",
`**Answer:** As a Kafka-compatible event backbone for high-volume, real-time data flows — e.g. publishing order and inventory events from Fusion (via OIC) to multiple consumers like analytics, WMS and e-commerce — decoupling producers and consumers.

Tip: Fan-out to many consumers.`, 'D'],
["Governance", "How do you prevent integration sprawl?",
`**Answer:** Integration catalog with owners, reusable services, design authority approval for new integrations, retirement of unused ones, and monitoring of usage.

Tip: Catalog and ownership.`, 'D']
]);
