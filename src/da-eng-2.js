QB['da-eng'] = (QB['da-eng'] || []).concat([
["Pipelines", "How do you design a pipeline SLA?",
`**Answer:** Agree on freshness (data available by 7 a.m.), completeness and quality thresholds with consumers; monitor each stage; alert before the SLA is missed; and document escalation and recovery steps.

Tip: Alert on predicted misses.`, 'D', 'M'],
["Architecture", "What is the Lambda vs Kappa architecture?",
`**Answer:** **Lambda** runs a batch layer and a speed (streaming) layer in parallel and merges results — accurate but duplicates logic. **Kappa** uses only streaming with replay from the log for reprocessing — simpler code paths. Modern lakehouses often blur these with unified batch/stream engines.

Tip: Duplication trade-off.`, 'D', 'S'],
["SQL", "How do you implement an upsert (MERGE) in a warehouse?",
`**Answer:** \`MERGE INTO target t USING staging s ON t.id = s.id WHEN MATCHED THEN UPDATE SET ... WHEN NOT MATCHED THEN INSERT ...\` — deduplicate staging first so each key appears once, and handle deletes with a flag or WHEN MATCHED AND s.is_deleted THEN DELETE.

Tip: Deduplicate the source first.`, 'B', 'M'],
["Orchestration", "How do you handle dependencies between pipelines owned by different teams?",
`**Answer:** Data-aware scheduling (trigger on dataset updates rather than fixed times), sensors or events, published SLAs and contracts, and shared lineage so owners see downstream impact.

Tip: Dataset-triggered scheduling.`, 'D', 'M'],
["Behavioral", "How do you prioritize data engineering requests?",
`**Answer:** By business impact, number of consumers, urgency and effort; maintain a visible backlog; reserve capacity for reliability work; and agree priorities with stakeholders regularly.

Tip: Protect reliability work.`, 'B', 'M']
]);
