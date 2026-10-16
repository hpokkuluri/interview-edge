// Data Scientist. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-sci'] = [
["Role", "What does a data scientist do?",
`**Why they ask:** roles vary widely — show you understand business impact.

**Answer:** Uses statistics, machine learning and experimentation to answer business questions and build predictive or decision models: framing the problem, exploring data, engineering features, building and validating models, running experiments, and communicating results — then working with engineers to deploy and monitor models that drive decisions.

Tip: Emphasize business outcomes over algorithms.`, 'B', 'E'],

["ML Basics", "Supervised vs unsupervised learning?",
`**Answer:** **Supervised** learns from labeled examples to predict outcomes — classification (churn yes/no) and regression (price). **Unsupervised** finds structure in unlabeled data — clustering (customer segments), dimensionality reduction (PCA), anomaly detection. Semi-supervised and reinforcement learning are other types.

Tip: Business example for each.`, 'B', 'E'],

["ML Basics", "Explain the bias-variance trade-off.",
`**Answer:** **Bias** is error from overly simple models that underfit; **variance** is error from overly complex models that overfit training data. Good models balance both. Reduce variance with more data, regularization, simpler models or ensembling; reduce bias with richer features or more flexible models.

Tip: Link to over/underfitting.`, 'B', 'M'],

["ML Basics", "How do you prevent overfitting?",
`**Answer:** Cross-validation, holdout test sets, regularization (L1/L2, dropout), simpler models, early stopping, more data, feature selection, and ensembling. Always evaluate on data the model hasn't seen.

Tip: Mention data leakage too.`, 'B', 'M'],

["ML Basics", "What is data leakage?",
`**Answer:** When information unavailable at prediction time leaks into training — e.g. using a "cancellation date" feature to predict churn, or scaling with statistics from the full dataset before splitting. It produces unrealistically good offline results that fail in production. Prevent with time-based splits and careful feature review.

Tip: A real example impresses.`, 'D', 'M'],

["Evaluation", "Which metrics do you use for classification?",
`**Answer:** Accuracy (misleading with imbalance), precision (of predicted positives, how many are right), recall (of actual positives, how many we catch), F1 (balance), ROC-AUC and PR-AUC, log loss, and calibration. Choose based on business costs of false positives vs false negatives.

**Example:** fraud detection prioritizes recall; spam filtering may prioritize precision.

Tip: Tie metrics to costs.`, 'B', 'M'],

["Evaluation", "How do you handle imbalanced classes?",
`**Answer:** Use appropriate metrics (PR-AUC, recall at fixed precision), class weights, resampling (undersampling, oversampling, SMOTE with care), threshold tuning based on business costs, and stratified splits.

Tip: Threshold tuning is often the biggest lever.`, 'D', 'M'],

["Evaluation", "Which metrics do you use for regression?",
`**Answer:** MAE (average absolute error, robust), RMSE (penalizes large errors), MAPE (percentage, problematic near zero), R² (variance explained). Choose based on what matters to the business.

Tip: MAE vs RMSE trade-off.`, 'B', 'M'],

["Models", "How does a random forest work?",
`**Answer:** An ensemble of decision trees trained on bootstrap samples with random feature subsets at each split; predictions are averaged (regression) or voted (classification). Reduces variance compared with single trees, handles non-linearity, and gives feature importance.

Tip: Bagging concept.`, 'B', 'M'],

["Models", "What is gradient boosting?",
`**Answer:** Builds trees sequentially, each correcting the errors of the previous ones by fitting residuals/gradients. Implementations like XGBoost, LightGBM and CatBoost are top performers on tabular data. Tune learning rate, depth, number of trees and regularization; use early stopping.

Tip: Often the best choice for tabular data.`, 'B', 'M'],

["Models", "Explain logistic regression.",
`**Answer:** A linear model for binary classification that passes a weighted sum of features through the sigmoid function to output probabilities. Coefficients are interpretable as log-odds changes. Simple, fast and a strong baseline.

Tip: Interpretability.`, 'B', 'E'],

["Models", "When would you choose a simple model over a complex one?",
`**Answer:** When interpretability matters (regulated decisions, stakeholder trust), data is limited, latency or cost constraints exist, or the complex model's gain is marginal. Start simple as a baseline.

Tip: "Baseline first."`, 'B', 'M'],

["Features", "What is feature engineering? Give examples.",
`**Answer:** Creating informative inputs from raw data: aggregates (purchases in last 30 days), ratios, time since last event, encodings for categories (one-hot, target encoding with care), text features, interactions, and date features (day of week, seasonality).

Tip: Domain knowledge drives features.`, 'B', 'M'],

["Validation", "How do you validate a model properly?",
`**Answer:** Train/validation/test splits or cross-validation; time-based splits for temporal data; check performance by segment; compare to baselines; and validate on recent out-of-time data before deployment.

Tip: Time-based splits for forecasting/churn.`, 'B', 'M'],

["Statistics", "What is a p-value and its common misinterpretation?",
`**Answer:** The probability of observing data at least as extreme as yours if the null hypothesis were true. It's not the probability the null is true, and it doesn't measure effect size. Combine with confidence intervals and practical significance.

Tip: Correct interpretation matters.`, 'B', 'M'],

["Statistics", "Explain Type I and Type II errors.",
`**Answer:** Type I (false positive): rejecting a true null — concluding an effect exists when it doesn't (rate α). Type II (false negative): missing a real effect (rate β; power = 1 − β).

Tip: Business framing.`, 'B', 'M'],

["Experimentation", "How do you design an A/B test?",
`**Answer:** Define hypothesis, primary metric and guardrails; calculate sample size (baseline, minimum detectable effect, α, power); randomize at the right unit (user vs session); run for full business cycles; avoid peeking (or use sequential methods); check sample ratio mismatch; analyze with confidence intervals; and decide based on pre-registered criteria.

Tip: Sample ratio mismatch check.`, 'D', 'M'],

["Experimentation", "What do you do when you can't run an A/B test?",
`**Answer:** Use causal inference methods: difference-in-differences, regression discontinuity, synthetic control, instrumental variables, or propensity score matching — with clear assumptions and sensitivity checks.

Tip: Name methods and assumptions.`, 'D', 'S'],

["Experimentation", "What is CUPED?",
`**Answer:** A variance reduction technique using pre-experiment data (e.g. prior spend) as a covariate to reduce noise in experiment metrics, allowing smaller samples or faster tests.

Tip: Advanced experimentation knowledge.`, 'D', 'S'],

["Clustering", "How does k-means work and how do you choose k?",
`**Answer:** Assigns points to the nearest of k centroids and updates centroids iteratively. Choose k with the elbow method, silhouette scores, and business usefulness. Scale features first; k-means assumes roughly spherical clusters.

Tip: Business interpretability of clusters.`, 'B', 'M'],

["Time Series", "How do you forecast a time series?",
`**Answer:** Explore trend, seasonality and anomalies; start with baselines (naive, seasonal naive); then exponential smoothing/ETS, ARIMA, Prophet, or gradient boosting with lag features; validate with rolling-origin backtests; and provide prediction intervals.

Tip: Backtesting.`, 'D', 'M'],

["NLP", "How would you build a text classification model today?",
`**Answer:** Start with a baseline (TF-IDF + logistic regression), then fine-tune a pretrained transformer or use embeddings from a foundation model with a lightweight classifier; or prompt an LLM for low-data cases — comparing quality, cost and latency.

Tip: Cost/latency trade-offs.`, 'D', 'M'],

["Interpretability", "How do you explain model predictions?",
`**Answer:** Global: feature importance, partial dependence plots. Local: SHAP values, LIME. Communicate in business terms ("customers with declining logins are 3× more likely to churn").

Tip: SHAP is standard.`, 'D', 'M'],

["Deployment", "How do you take a model to production?",
`**Answer:** Package the model and preprocessing together, version data and models (MLflow), deploy as batch scoring or real-time API, monitor performance, data drift and latency, and set up retraining. Work with ML engineers on infrastructure.

Tip: Training-serving consistency.`, 'D', 'M'],

["Monitoring", "What is model drift?",
`**Answer:** **Data drift**: input distributions change. **Concept drift**: the relationship between inputs and outcomes changes. Monitor feature distributions (PSI), prediction distributions and actual performance when labels arrive; retrain when degraded.

Tip: PSI mention.`, 'D', 'M'],

["Business", "How do you frame a business problem as a data science problem?",
`**Answer:** Understand the decision and its value, define the target and how predictions will be used, identify available data and constraints, define success metrics (business and model), and plan how to measure impact (experiment).

**Example:** "Reduce churn" → predict 60-day churn probability to prioritize retention offers; measure via a controlled test.

Tip: Decision-first framing.`, 'B', 'M'],

["Business", "How do you estimate the business value of a model?",
`**Answer:** Translate model performance into outcomes: e.g. targeting the top 10% churn-risk customers catches 40% of churners; with a 20% save rate and $500 annual value, that's revenue saved minus offer costs. Validate with an experiment.

Tip: Show the math.`, 'D', 'M'],

["Python", "Which Python libraries do you use?",
`**Answer:** pandas/polars, NumPy, scikit-learn, XGBoost/LightGBM, statsmodels, matplotlib/seaborn/plotly, PyTorch for deep learning, and MLflow for tracking.

Tip: Depth in scikit-learn.`, 'B', 'E'],

["SQL", "Why do data scientists need strong SQL?",
`**Answer:** Most data lives in warehouses; extracting and aggregating features efficiently in SQL (window functions, joins) saves time and avoids errors.

Tip: Expect SQL questions.`, 'B', 'E'],

["Communication", "How do you explain a model to executives?",
`**Answer:** Focus on the decision it improves, expected impact in dollars or KPIs, how reliable it is, key drivers in plain language, risks and how it's monitored.

Tip: No jargon.`, 'B', 'M'],

["Ethics", "How do you ensure models are fair?",
`**Answer:** Check performance and outcomes across groups, avoid proxies for protected attributes, use fairness metrics appropriate to the use case, document limitations, and involve legal/compliance for high-stakes decisions.

Tip: Responsible AI.`, 'D', 'M'],

["Recommendation", "How would you build a recommendation system?",
`**Answer:** Start with popularity and simple rules as baselines, then collaborative filtering (matrix factorization), content-based features, or two-tower embedding models; handle cold start; evaluate offline (precision@k, NDCG) and online (A/B test CTR, revenue).

Tip: Offline vs online evaluation.`, 'D', 'S'],

["Behavioral", "Tell me about a model that drove business impact.",
`**Sample answer:** "I built a churn model with gradient boosting on usage and support features. Targeting the top decile with retention offers in a controlled test reduced churn by 12% in that segment, worth about $1.8M annually."

Tip: Measured impact.`, 'B', 'M'],

["Behavioral", "Tell me about a project that failed.",
`**Sample answer:** "A demand model performed well offline but failed live because a key feature arrived a day late in production. I now validate feature availability timing before building models."

Tip: Learning.`, 'B', 'M'],

["Behavioral", "How do you handle stakeholders who want a model when a simple analysis would do?",
`**Answer:** Clarify the decision, show that a simpler analysis or rule answers it, and propose a model only if it adds measurable value.

Tip: Pragmatism.`, 'B', 'M'],

["GenAI", "How has generative AI changed data science work?",
`**Answer:** LLMs handle many text tasks with little training data, speed up coding and analysis, and enable new products (RAG assistants). Data scientists now evaluate LLM outputs, design prompts and retrieval, and measure quality and cost — while classic ML still dominates structured prediction.

Tip: Balanced view.`, 'D', 'M'],

["GenAI", "How do you evaluate an LLM application?",
`**Answer:** Build a representative test set, define criteria (correctness, groundedness, relevance, safety, format), score with automated checks and LLM-as-judge calibrated against human ratings, and run evaluations on every change.

Tip: Evaluation sets are key.`, 'D', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/staff data scientist — owning high-impact problem areas, experimentation strategy and mentoring.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I combine rigorous statistics and ML with business sense — my models have delivered measured impact like a 12% churn reduction — and I communicate clearly with stakeholders."

Tip: Proof.`, 'B', 'M'],

["Statistics", "What is the central limit theorem?",
`**Answer:** The distribution of sample means approaches a normal distribution as sample size grows, regardless of the population's distribution (with finite variance). It justifies many confidence intervals and tests.

Tip: Practical implication.`, 'B', 'M'],

["Statistics", "What is Bayesian vs frequentist thinking?",
`**Answer:** Frequentist statistics treats parameters as fixed and uses long-run frequencies (p-values, confidence intervals). Bayesian statistics treats parameters as distributions, updating prior beliefs with data to get posteriors — intuitive for decision-making.

Tip: Use case examples.`, 'D', 'S'],

["Regularization", "L1 vs L2 regularization?",
`**Answer:** L1 (lasso) adds absolute coefficient penalties and can shrink some to zero (feature selection). L2 (ridge) adds squared penalties, shrinking coefficients smoothly. Elastic net combines both.

Tip: Feature selection with L1.`, 'B', 'M'],

["Cross-validation", "What is k-fold cross-validation?",
`**Answer:** Splitting data into k folds, training on k−1 and validating on the remaining fold, rotating k times and averaging results — giving a more reliable estimate than a single split. Use time-series CV for temporal data.

Tip: Stratified for classification.`, 'B', 'E'],

["Deep Learning", "When would you use deep learning?",
`**Answer:** For unstructured data (images, audio, text) and very large datasets where neural networks excel; for tabular data, gradient boosting often wins with less effort.

Tip: Right tool for the data.`, 'B', 'M'],

["Data", "How do you deal with limited labeled data?",
`**Answer:** Transfer learning, pretrained embeddings, data augmentation, active learning, weak supervision, LLM-assisted labeling with human review, or simpler models.

Tip: LLM-assisted labeling.`, 'D', 'M'],

["Metrics", "What is lift and how is it used?",
`**Answer:** How much better a model's targeted group performs vs random selection — e.g. top 10% of scores containing 3× the average churn rate (lift of 3). Used to decide targeting depth.

Tip: Business-friendly metric.`, 'D', 'M'],

["Process", "How do you make your work reproducible?",
`**Answer:** Version control for code, tracked experiments (MLflow), versioned data snapshots, fixed random seeds, environment files, and documented decisions.

Tip: MLflow tracking.`, 'B', 'M']
];
