// Rewritten Data & AI — Data Scientist (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-sci-).
module.exports = {

'Supervised vs unsupervised learning?':
`**Why they ask:** a basic ML check.

**Answer:**
"Supervised learning learns from labeled examples to predict an outcome — classification, like will this customer churn, or regression, like predicting a house price. Unsupervised learning finds structure in unlabeled data — clustering customers into segments, reducing dimensions with PCA, or detecting anomalies. There's also semi-supervised and reinforcement learning."

Tip: Give a business example for each.`,

'Explain the bias-variance trade-off.':
`**Why they ask:** core ML theory.

**Answer:**
"Bias is error from a model that's too simple and underfits — a straight line through curved data. Variance is error from a model that's too complex and overfits the training data's noise. Good models balance both. I reduce variance with more data, regularization, simpler models or ensembling, and reduce bias with richer features or more flexible models."

Tip: Link it to over- and underfitting.`,

'How do you prevent overfitting?':
`**Why they ask:** practical model building.

**Answer:**
"Cross-validation, a holdout test set, regularization like L1, L2 or dropout, simpler models, early stopping, more data, feature selection and ensembling. And always evaluating on data the model hasn't seen. I'd add: check for data leakage, because that makes a model look great offline for the wrong reasons."

Tip: Mention data leakage too.`,

'What is data leakage?':
`**Why they ask:** a common real-world failure.

**Answer:**
"It's when information that won't be available at prediction time leaks into training. Using a 'cancellation date' feature to predict churn is the classic example — the model is learning from the answer. Another is scaling with statistics from the full dataset before splitting. It gives unrealistically good offline results that fail in production. I prevent it with time-based splits and reviewing each feature's availability."

Tip: A real example impresses.`,

'Which metrics do you use for classification?':
`**Why they ask:** metric choice reflects business sense.

**Answer:**
"Accuracy — misleading with imbalanced classes. Precision — of predicted positives, how many are right. Recall — of actual positives, how many we catch. F1 balances them. ROC-AUC and PR-AUC, log loss, and calibration. I choose based on the business cost of false positives versus false negatives. Fraud detection usually prioritizes recall; a spam filter may prioritize precision so real email isn't lost."

Tip: Tie metrics to business costs.`,

'How do you handle imbalanced classes?':
`**Why they ask:** a common challenge.

**Answer:**
"Use the right metrics — PR-AUC, or recall at a fixed precision — class weights, resampling like undersampling or oversampling, SMOTE used carefully, threshold tuning based on business costs, and stratified splits. Threshold tuning is often the biggest lever — the default 0.5 is rarely the right cutoff."

Tip: Threshold tuning is often the biggest lever.`,

'Which metrics do you use for regression?':
`**Why they ask:** metric judgment.

**Answer:**
"MAE — average absolute error, robust and easy to explain. RMSE — penalizes large errors more. MAPE — percentage error, but it breaks near zero. And R², variance explained. If a few big misses are very costly, RMSE fits; if every unit of error costs the same, MAE."

Tip: Explain the MAE versus RMSE trade-off.`,

'How does a random forest work?':
`**Why they ask:** a common algorithm.

**Answer:**
"It's an ensemble of decision trees, each trained on a bootstrap sample of the data with a random subset of features considered at each split. Predictions are averaged for regression or voted for classification. That reduces variance compared with a single tree, handles non-linearity, and gives feature importance. It's bagging."

Tip: Explain bagging.`,

'What is gradient boosting?':
`**Why they ask:** the workhorse of tabular ML.

**Answer:**
"It builds trees sequentially, each one correcting the errors of the previous ones by fitting the residuals or gradients. XGBoost, LightGBM and CatBoost are the top performers on tabular data. I tune learning rate, depth, number of trees and regularization, and use early stopping on a validation set."

Tip: Often the best choice for tabular data.`,

'Explain logistic regression.':
`**Why they ask:** a fundamental model.

**Answer:**
"It's a linear model for binary classification. It takes a weighted sum of features and passes it through the sigmoid function to output a probability between 0 and 1. Coefficients are interpretable as changes in log-odds. It's simple, fast and a strong baseline — and regulators like that it's explainable."

Tip: Highlight interpretability.`,

'When would you choose a simple model over a complex one?':
`**Why they ask:** pragmatism.

**Answer:**
"When interpretability matters — regulated decisions or stakeholder trust — when data is limited, when latency or cost is constrained, or when the complex model only adds a marginal gain. I always start with a simple baseline, and the complex model has to earn its place."

Tip: 'Baseline first.'`,

'What is feature engineering? Give examples.':
`**Why they ask:** where most model value comes from.

**Answer:**
"It's creating informative inputs from raw data: aggregates like purchases in the last 30 days, ratios, time since the last event, category encodings — one-hot, or target encoding used carefully — text features, interactions, and date features like day of week and seasonality. Domain knowledge drives the best features."

Tip: Domain knowledge drives features.`,

'How do you validate a model properly?':
`**Why they ask:** trustworthy evaluation.

**Answer:**
"Train, validation and test splits or cross-validation; time-based splits for anything temporal; checking performance by segment, not just overall; comparing to baselines; and validating on recent out-of-time data before deployment."

Tip: Time-based splits for forecasting and churn.`,

'What is a p-value and its common misinterpretation?':
`**Why they ask:** statistical literacy.

**Answer:**
"It's the probability of observing data at least as extreme as ours if the null hypothesis were true. The common mistake is reading it as the probability that the null is true — it isn't. And it doesn't measure effect size. So I always pair it with a confidence interval and practical significance."

Tip: The correct interpretation matters.`,

'Explain Type I and Type II errors.':
`**Why they ask:** testing fundamentals.

**Answer:**
"A Type I error is a false positive — concluding an effect exists when it doesn't; its rate is alpha. A Type II error is a false negative — missing a real effect; its rate is beta, and power is one minus beta. In business terms: Type I means shipping a feature that does nothing; Type II means killing one that worked."

Tip: Use business framing.`,

'How do you design an A/B test?':
`**Why they ask:** experimentation rigor.

**Answer:**
"Define the hypothesis, primary metric and guardrails. Calculate sample size from the baseline, minimum detectable effect, alpha and power. Randomize at the right unit — user, not session, usually. Run for full business cycles, don't peek — or use sequential methods — check for sample ratio mismatch, analyze with confidence intervals, and decide on pre-registered criteria."

Tip: Check for sample ratio mismatch.`,

"What do you do when you can't run an A/B test?":
`**Why they ask:** causal inference depth.

**Answer:**
"Use causal inference methods: difference-in-differences, regression discontinuity, synthetic control, instrumental variables, or propensity score matching. Each has assumptions — like parallel trends for difference-in-differences — so I state them clearly and run sensitivity checks."

Tip: Name methods and their assumptions.`,

'What is CUPED?':
`**Why they ask:** advanced experimentation.

**Answer:**
"It's a variance reduction technique that uses pre-experiment data — like each user's prior spend — as a covariate to remove noise from the experiment metric. Less noise means smaller samples or faster tests for the same power."

Tip: Shows advanced experimentation knowledge.`,

'How does k-means work and how do you choose k?':
`**Why they ask:** clustering basics.

**Answer:**
"It assigns each point to the nearest of k centroids, then moves each centroid to the mean of its points, and repeats until stable. I choose k using the elbow method, silhouette scores, and — most importantly — whether the clusters are useful to the business. Features must be scaled first, and k-means assumes roughly spherical clusters."

Tip: Business interpretability of clusters.`,

'How do you forecast a time series?':
`**Why they ask:** a common task.

**Answer:**
"Explore trend, seasonality and anomalies first. Start with baselines — naive and seasonal naive — then try ETS, ARIMA, Prophet, or gradient boosting with lag features. Validate with rolling-origin backtests, and always provide prediction intervals, not just a single line."

Tip: Backtesting.`,

'How would you build a text classification model today?':
`**Why they ask:** current NLP judgment.

**Answer:**
"Start with a baseline — TF-IDF and logistic regression. Then either fine-tune a pretrained transformer, or use embeddings from a foundation model with a lightweight classifier on top. For very little labeled data, prompting an LLM can work. I compare all of them on quality, cost and latency — an LLM call per document can be expensive at scale."

Tip: Weigh cost and latency.`,

'How do you explain model predictions?':
`**Why they ask:** trust and adoption.

**Answer:**
"Globally, with feature importance and partial dependence plots. Locally, for individual predictions, with SHAP values or LIME. Then I translate into business terms — 'customers whose logins dropped in the last month are three times more likely to churn.'"

Tip: SHAP is standard.`,

'How do you take a model to production?':
`**Why they ask:** beyond notebooks.

**Answer:**
"Package the model and its preprocessing together so training and serving match, version data and models with something like MLflow, deploy as batch scoring or a real-time API, monitor performance, data drift and latency, and set up retraining. I work with ML engineers on the infrastructure."

Tip: Training-serving consistency.`,

'What is model drift?':
`**Why they ask:** production reality.

**Answer:**
"Data drift is when input distributions change. Concept drift is when the relationship between inputs and outcomes changes — like customer behavior after a price change. I monitor feature distributions with PSI, prediction distributions, and actual performance once labels arrive, and retrain when it degrades."

Tip: Mention PSI.`,

'How do you frame a business problem as a data science problem?':
`**Why they ask:** problem framing.

**Answer:**
"Understand the decision and its value, define the target and how predictions will be used, identify data and constraints, define success metrics for both the business and the model, and plan how to measure impact. For example, 'reduce churn' becomes 'predict 60-day churn probability to prioritize retention offers,' measured with a controlled test."

Tip: Decision-first framing.`,

'How do you estimate the business value of a model?':
`**Why they ask:** ROI thinking.

**Answer:**
"Translate model performance into outcomes. Say targeting the top 10% churn-risk customers catches 40% of churners. If 10,000 customers would churn, that's 4,000 reached; with a 20% save rate that's 800 saved, at $500 a year each — $400,000 — minus the cost of offers. Then validate it with an experiment."

Tip: Show the math.`,

'Which Python libraries do you use?':
`**Why they ask:** tool depth.

**Answer:**
"pandas or Polars, NumPy, scikit-learn, XGBoost and LightGBM, statsmodels, matplotlib, seaborn and plotly, PyTorch for deep learning, and MLflow for experiment tracking."

Tip: Show depth in scikit-learn.`,

'Why do data scientists need strong SQL?':
`**Why they ask:** practical skill.

**Answer:**
"Most data lives in warehouses. Extracting and aggregating features efficiently in SQL — window functions, joins — saves a lot of time and avoids errors from pulling raw data into Python. I expect SQL questions in any data science interview."

Tip: Expect SQL questions.`,

'How do you explain a model to executives?':
`**Why they ask:** communication.

**Answer:**
"Focus on the decision it improves, the expected impact in dollars or KPIs, how reliable it is, the key drivers in plain language, and the risks and how we monitor them. No jargon — 'AUC of 0.82' means nothing to most executives."

Tip: No jargon.`,

'How do you ensure models are fair?':
`**Why they ask:** responsible AI.

**Answer:**
"Check performance and outcomes across groups, avoid features that act as proxies for protected attributes — like zip code standing in for race — use fairness metrics appropriate to the use case, document limitations, and involve legal and compliance for high-stakes decisions like lending or hiring."

Tip: Responsible AI.`,

'How would you build a recommendation system?':
`**Why they ask:** a common product problem.

**Answer:**
"Start with popularity and simple rules as a baseline. Then collaborative filtering like matrix factorization, content-based features, or two-tower embedding models. Handle cold start for new users and items. Evaluate offline with precision at k or NDCG, then online with an A/B test on click-through and revenue — offline gains don't always transfer."

Tip: Offline versus online evaluation.`,

'Tell me about a model that drove business impact.':
`**Why they ask:** proof.

**Answer:**
"I built a churn model with gradient boosting on usage and support features. Targeting the top decile with retention offers in a controlled test reduced churn by 12% in that segment — worth about $1.8 million a year."

Tip: Measured impact.`,

'Tell me about a project that failed.':
`**Why they ask:** learning.

**Answer:**
"A demand model performed well offline but failed live, because a key feature arrived a day late in production — so the model never had it at prediction time. Now I validate when each feature is actually available before building with it."

Tip: Show the learning.`,

'How do you handle stakeholders who want a model when a simple analysis would do?':
`**Why they ask:** pragmatism.

**Answer:**
"Clarify the decision they're trying to make, show that a simpler analysis or rule answers it, and propose a model only if it adds measurable value. Sometimes a well-chosen threshold beats a three-month ML project."

Tip: Be pragmatic.`,

'How has generative AI changed data science work?':
`**Why they ask:** current view.

**Answer:**
"LLMs handle many text tasks with little training data, speed up coding and analysis, and enable new products like RAG assistants. Data scientists now evaluate LLM outputs, design prompts and retrieval, and measure quality and cost. But classic ML still dominates structured prediction — churn, fraud, forecasting."

Tip: Keep a balanced view.`,

'How do you evaluate an LLM application?':
`**Why they ask:** a new core skill.

**Answer:**
"Build a representative test set, define criteria — correctness, groundedness, relevance, safety and format — score with automated checks and an LLM-as-judge that's been calibrated against human ratings, and run the evaluation on every change to prompts, models or retrieval."

Tip: Evaluation sets are key.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior or staff data scientist — owning high-impact problem areas, experimentation strategy and mentoring."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I combine rigorous statistics and ML with business sense — my models have delivered measured impact like a 12% churn reduction — and I communicate clearly with stakeholders."

Tip: Proof.`,

'What is the central limit theorem?':
`**Why they ask:** statistical foundation.

**Answer:**
"The distribution of sample means approaches a normal distribution as the sample size grows, no matter what the underlying distribution looks like — as long as variance is finite. That's why we can build confidence intervals and run t-tests on skewed data like revenue per user, given enough samples."

Tip: Give the practical implication.`,

'What is Bayesian vs frequentist thinking?':
`**Why they ask:** statistical philosophy.

**Answer:**
"Frequentist statistics treats parameters as fixed and reasons about long-run frequencies — p-values and confidence intervals. Bayesian statistics treats parameters as distributions and updates prior beliefs with data to get a posterior. Bayesian results are intuitive for decisions — 'there's a 92% chance B beats A' — which is why some experimentation platforms use them."

Tip: Use case examples.`,

'L1 vs L2 regularization?':
`**Why they ask:** model tuning.

**Answer:**
"L1, or lasso, penalizes the absolute size of coefficients and can shrink some to exactly zero, so it does feature selection. L2, or ridge, penalizes squared coefficients and shrinks them smoothly without zeroing. Elastic net combines both."

Tip: L1 does feature selection.`,

'What is k-fold cross-validation?':
`**Why they ask:** validation method.

**Answer:**
"Split the data into k folds, train on k minus one and validate on the remaining fold, rotate k times, and average the results. It's more reliable than a single split. I use stratified folds for classification and time-series splits for temporal data."

Tip: Stratify for classification.`,

'When would you use deep learning?':
`**Why they ask:** tool selection.

**Answer:**
"For unstructured data — images, audio, text — and very large datasets where neural networks excel. For tabular business data, gradient boosting usually wins with less effort and cost."

Tip: Right tool for the data.`,

'How do you deal with limited labeled data?':
`**Why they ask:** a common constraint.

**Answer:**
"Transfer learning, pretrained embeddings, data augmentation, active learning to label the most useful examples, weak supervision, LLM-assisted labeling with human review, or simpler models that need less data."

Tip: Mention LLM-assisted labeling.`,

'What is lift and how is it used?':
`**Why they ask:** a business-friendly metric.

**Answer:**
"Lift is how much better a model's targeted group performs than random selection. If the top 10% of scores contains three times the average churn rate, that's a lift of 3. We use it to decide how deep to target — where lift drops off, the offers stop paying."

Tip: A business-friendly metric.`,

'How do you make your work reproducible?':
`**Why they ask:** engineering discipline.

**Answer:**
"Version control for code, tracked experiments in MLflow, versioned data snapshots, fixed random seeds, environment files, and documented decisions. Anyone should be able to rerun my model and get the same result."

Tip: MLflow tracking.`,

'How does a decision tree decide splits?':
`**Why they ask:** algorithm understanding.

**Answer:**
"It picks the feature and threshold that best separate the target — maximizing information gain using entropy, or minimizing Gini impurity, for classification, and minimizing variance or MSE for regression. Depth limits and minimum leaf sizes stop it from overfitting."

Tip: Gini versus entropy.`,

'What is uplift modeling?':
`**Why they ask:** advanced targeting.

**Answer:**
"It predicts the incremental effect of an action — like a discount — on each individual: who will respond because of the treatment, not who would respond anyway. It targets the 'persuadables' and avoids wasting offers on 'sure things' who'd buy regardless. It needs experimental data to train."

Tip: Persuadables versus sure things.`,

'How do you write up an analysis for stakeholders?':
`**Why they ask:** communication.

**Answer:**
"An executive summary with the recommendation first, then the business question, the approach in plain terms, key findings with visuals, expected impact, limitations and next steps — with technical details in an appendix."

Tip: Recommendation first.`,

};
