QB['cl-sre'] = (QB['cl-sre'] || []).concat([
["SLOs", "How do you get teams to adopt SLOs?",
`**Answer:** Start with one critical user journey, define simple SLIs from existing data, set realistic targets from historical performance, build a dashboard, agree an error budget policy with product, and expand gradually.

Tip: Start small.`, 'D', 'M'],
["Capacity", "What is headroom and how much do you keep?",
`**Answer:** Spare capacity above expected peak to absorb spikes and failures — often N+1 (survive losing one instance/zone) or 20–40% over peak depending on scaling speed and criticality.

Tip: Zone failure planning.`, 'D', 'M']
]);
