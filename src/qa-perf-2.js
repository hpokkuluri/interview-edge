QB['qa-perf'] = (QB['qa-perf'] || []).concat([
["Analysis", "What is the difference between latency and throughput?",
`**Answer:** **Latency** is how long a single request takes (e.g. 250 ms). **Throughput** is how many requests are handled per unit of time (e.g. 800 requests/second). They interact: as throughput approaches capacity, queues form and latency rises sharply.

Tip: Draw the response-time curve "knee" if you can.`, 'B', 'E'],
["Analysis", "How do you compare two test runs fairly?",
`**Answer:** Same workload, data, environment configuration and duration; warm-up period excluded; compare percentiles, throughput and errors at steady state; and run more than once to account for variance.

Tip: Consistency makes comparisons meaningful.`, 'D', 'M']
]);
