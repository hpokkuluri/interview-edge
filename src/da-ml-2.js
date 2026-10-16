QB['da-ml'] = (QB['da-ml'] || []).concat([
["Serving", "How do you handle model versioning in an API?",
`**Answer:** Version models in a registry, include version in responses and logs, support routing by version for A/B tests, and keep the previous version deployable for rollback.

Tip: Log the version with every prediction.`, 'B', 'M'],
["Data", "How do you log predictions for future training?",
`**Answer:** Log inputs (features as served), predictions, model version and timestamps, then join with outcomes later to build training data that matches production — avoiding training-serving skew.

Tip: Feature logging.`, 'D', 'M'],
["Architecture", "When would you choose managed ML platforms vs open source?",
`**Answer:** Managed platforms (SageMaker, Vertex AI, Azure ML, Databricks) reduce operational burden and integrate with the cloud; open source (Kubeflow, MLflow, Feast) offers flexibility and portability. Choose by team size, skills, scale and lock-in tolerance.

Tip: Team capacity decides.`, 'D', 'M'],
["Reliability", "What fallback do you use when a model service fails?",
`**Answer:** Return a safe default (rules-based or cached prediction), degrade gracefully, use timeouts so callers aren't blocked, and alert on fallback rates.

Tip: Graceful degradation.`, 'D', 'M'],
["Behavioral", "How do you push back on deploying a model that isn't ready?",
`**Answer:** Show evaluation gaps and risks with data (segment performance, failure cases), propose a shadow or limited rollout, and agree on the criteria needed for full launch.

Tip: Criteria-based decisions.`, 'B', 'M']
]);
