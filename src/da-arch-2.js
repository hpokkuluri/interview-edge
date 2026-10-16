QB['da-arch'] = (QB['da-arch'] || []).concat([
["Modeling", "When do you normalize vs denormalize?",
`**Answer:** Normalize in operational systems and integration layers to avoid redundancy and update anomalies; denormalize in analytical marts for query simplicity and performance.

Tip: Different layers, different goals.`, 'B'],
["Ingestion", "Managed connectors vs custom ingestion?",
`**Answer:** Managed connectors (Fivetran, Airbyte, cloud-native) speed up common SaaS and database ingestion; custom code suits unusual sources, high volumes with cost constraints, or special logic. Consider cost per row, reliability and maintenance.

Tip: Cost at scale.`, 'D'],
["Observability", "What observability would you build into a data platform?",
`**Answer:** Pipeline run monitoring, freshness and volume checks, schema change detection, quality scores, lineage-based impact alerts, cost dashboards and SLA tracking.

Tip: End-to-end visibility.`, 'D']
]);
