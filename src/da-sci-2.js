QB['da-sci'] = (QB['da-sci'] || []).concat([
["Models", "How does a decision tree decide splits?",
`**Answer:** It chooses the feature and threshold that best separate the target — maximizing information gain (entropy) or minimizing Gini impurity for classification, or minimizing variance/MSE for regression. Depth limits and minimum leaf sizes prevent overfitting.

Tip: Gini vs entropy.`, 'B', 'M'],
["Uplift", "What is uplift modeling?",
`**Answer:** Predicting the incremental effect of an action (e.g. a discount) on each individual — who will respond because of the treatment — rather than who will respond at all. It targets persuadable customers and avoids wasting offers. Requires experimental data.

Tip: Persuadables vs sure things.`, 'D', 'S'],
["Communication", "How do you write up an analysis for stakeholders?",
`**Answer:** Executive summary with the recommendation first, the business question, approach in plain terms, key findings with visuals, expected impact, limitations and next steps — with technical details in an appendix.

Tip: Recommendation first.`, 'B', 'M']
]);
