QB['da-ae'] = (QB['da-ae'] || []).concat([
["Modeling", "How do you model subscription revenue (MRR)?",
`**Answer:** Build a subscription-level model with start/end dates and amounts, explode to monthly grain with a date spine, then classify movements per customer month: new, expansion, contraction, churn, reactivation. Test that movements reconcile to MRR changes.

Tip: Reconciliation test.`, 'D', 'M'],
["Modeling", "What is a surrogate key and when do you use it?",
`**Answer:** A system-generated key (often a hash of business keys via dbt_utils.generate_surrogate_key) used as the primary key in models — stable across sources and useful for SCD2 rows or composite natural keys.

Tip: Hash of business keys.`, 'B', 'M'],
["Collaboration", "How do you work with data engineers?",
`**Answer:** Engineers own ingestion and platform reliability; analytics engineers own business transformations and definitions. Agree on raw data contracts, freshness SLAs and where logic lives.

Tip: Clear boundaries.`, 'B', 'E'],
["Performance", "How do you decide between views and tables in marts?",
`**Answer:** Views for lightweight, rarely queried or fast logic; tables (or incremental) for heavy joins and frequently queried marts to avoid repeated compute. Measure query costs and dashboard latency.

Tip: Cost and latency.`, 'B', 'M'],
["Stakeholders", "How do you explain a metric change to business users?",
`**Answer:** Show the definition change or data change clearly, compare old vs new values side by side, explain why the new version is more accurate, and communicate before the release.

Tip: No surprises.`, 'B', 'M']
]);
