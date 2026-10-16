QB['cl-eng'] = (QB['cl-eng'] || []).concat([
["Compute", "What are spot/preemptible instances and when do you use them?",
`**Answer:** Spare capacity sold at large discounts (often 60–90%) that the provider can reclaim with short notice. Use for fault-tolerant, interruptible workloads — batch jobs, CI runners, stateless web tiers with mixed instance groups — with checkpointing and graceful handling of interruptions.

Tip: Mix spot with on-demand.`, 'B', 'M']
]);
