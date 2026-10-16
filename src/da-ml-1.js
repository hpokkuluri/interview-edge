// Machine Learning Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-ml'] = [
["Role", "How is an ML engineer different from a data scientist?",
`**Why they ask:** clarifies your focus.

**Answer:** Data scientists focus on framing problems, exploring data and building models. ML engineers focus on making models work reliably in production: training pipelines, feature pipelines, serving infrastructure, scalability, latency, monitoring, CI/CD for models (MLOps), and collaboration with software engineers. Many roles overlap.

Tip: Emphasize production reliability.`, 'B', 'E'],

["MLOps", "What is MLOps?",
`**Answer:** Practices for reliable ML lifecycle management: versioned data, code and models; automated training and evaluation pipelines; model registry; CI/CD for deployment; monitoring of data drift, performance and infrastructure; and automated retraining with governance.

Tip: Mention tools — MLflow, Kubeflow, SageMaker, Vertex AI, Databricks.`, 'B', 'M'],

["Serving", "Batch vs real-time inference — how do you choose?",
`**Answer:** **Batch** scores many records on a schedule (daily churn scores) — cheaper, simpler. **Real-time** serves predictions per request with low latency (fraud checks, recommendations) — needs online features and scalable serving. **Streaming** inference processes events continuously.

Tip: Latency and freshness requirements decide.`, 'B', 'M'],

["Serving", "How do you serve a model with low latency?",
`**Answer:** Optimized model format (ONNX, TorchScript, TensorRT), efficient serving frameworks (Triton, TorchServe, BentoML, KServe), batching requests, caching, precomputed features from an online feature store, autoscaling, GPU/CPU right-sizing, and model compression (quantization, distillation).

Tip: Quantization.`, 'D', 'M'],

["Features", "What is a feature store?",
`**Answer:** A system that manages features for training and serving: offline store for historical training data (point-in-time correct) and online store for low-latency serving, ensuring training-serving consistency and reuse. Examples: Feast, Tecton, Databricks/SageMaker/Vertex feature stores.

Tip: Point-in-time correctness.`, 'D', 'M'],

["Features", "What is training-serving skew?",
`**Answer:** Differences between how features are computed in training vs production, causing worse live performance. Prevent with shared feature code, feature stores, logging serving features for training, and validation checks.

Tip: Common production failure.`, 'D', 'M'],

["Pipelines", "How do you build a training pipeline?",
`**Answer:** Data extraction and validation, feature engineering, training with tracked parameters, evaluation against baselines and thresholds, model registration, and approval for deployment — orchestrated with Airflow, Kubeflow Pipelines, SageMaker Pipelines or similar, reproducible and versioned.

Tip: Automated quality gates.`, 'D', 'M'],

["Monitoring", "What do you monitor for production models?",
`**Answer:** Infrastructure (latency, throughput, errors, resource use), data quality and drift in inputs, prediction distribution shifts, model performance once labels arrive, and business KPIs. Alert on significant degradation.

Tip: Delayed labels are a challenge.`, 'D', 'M'],

["Deployment", "How do you deploy a new model version safely?",
`**Answer:** Shadow deployment (score but don't act), canary release to a small share of traffic, A/B testing against the current model, automated rollback on metric degradation, and versioned registry.

Tip: Shadow mode.`, 'D', 'M'],

["Scaling", "How do you train models on large datasets?",
`**Answer:** Distributed data processing (Spark, Ray), distributed training (data parallelism with PyTorch DDP/FSDP, DeepSpeed), efficient data loading, mixed precision, checkpointing, and choosing the right instance types.

Tip: Mixed precision and checkpointing.`, 'D', 'S'],

["Deep Learning", "Explain how backpropagation works.",
`**Answer:** The network computes predictions in a forward pass, calculates loss, then propagates gradients backward using the chain rule to compute how each weight affects the loss; an optimizer (SGD, Adam) updates weights to reduce loss.

Tip: Chain rule.`, 'B', 'M'],

["Deep Learning", "What are common techniques to improve neural network training?",
`**Answer:** Proper initialization, normalization (batch/layer norm), learning rate schedules and warmup, regularization (dropout, weight decay), data augmentation, early stopping, gradient clipping, and mixed precision.

Tip: Learning rate is the most important hyperparameter.`, 'D', 'M'],

["Transformers", "Explain the transformer architecture briefly.",
`**Answer:** Uses self-attention to weigh relationships between all tokens in a sequence, with multi-head attention, feed-forward layers, residual connections and layer normalization, plus positional information. It parallelizes well and underlies modern LLMs and many vision models.

Tip: Self-attention is the core idea.`, 'D', 'M'],

["Optimization", "How do you reduce inference cost?",
`**Answer:** Quantization (INT8/4-bit), pruning, knowledge distillation into smaller models, batching, caching frequent results, efficient hardware, autoscaling to demand, and choosing smaller models when quality allows.

Tip: Distillation.`, 'D', 'S'],

["Data", "How do you manage training data versions?",
`**Answer:** Versioned datasets (Delta/Iceberg time travel, DVC, lakeFS), metadata linking models to data versions, and immutable snapshots for reproducibility.

Tip: Reproducibility.`, 'D', 'M'],

["Testing", "How do you test ML systems?",
`**Answer:** Unit tests for feature code, data validation tests (schema, ranges — Great Expectations, TFDV), model evaluation tests against thresholds, behavioral tests (invariance, directional expectations), integration tests for serving, and load tests.

Tip: Behavioral tests.`, 'D', 'M'],

["Infrastructure", "How do you use Kubernetes for ML?",
`**Answer:** Containerized training jobs and serving with autoscaling, GPU scheduling, Kubeflow or KServe for ML workflows and serving, and resource quotas. Managed alternatives: SageMaker, Vertex AI, Azure ML.

Tip: Managed services reduce ops burden.`, 'D', 'M'],

["Recommendation", "How would you design a recommendation system at scale?",
`**Answer:** Two-stage architecture: candidate generation (embedding retrieval with approximate nearest neighbors — FAISS, ScaNN) then ranking with a richer model; features from a feature store; real-time signals; evaluation offline (recall@k, NDCG) and online (A/B tests); and feedback loops.

Tip: Retrieval + ranking.`, 'D', 'S'],

["Fraud", "How would you build a real-time fraud detection system?",
`**Answer:** Streaming features (transaction velocity, device, location) computed with Flink/Kafka Streams, a low-latency model (gradient boosting) served with strict latency budgets, rules for known patterns, thresholds tuned to business cost, human review queues, and continuous retraining as fraud evolves.

Tip: Adversarial drift.`, 'D', 'S'],

["LLMs", "How do you deploy LLM applications in production?",
`**Answer:** Choose hosted APIs or self-hosted models (vLLM, TGI) based on cost, privacy and latency; implement RAG with vector search; manage prompts and versions; add guardrails, caching and rate limiting; monitor latency, cost and quality; and run evaluations on changes.

Tip: vLLM for self-hosting.`, 'D', 'S'],

["LLMs", "When would you fine-tune vs use RAG?",
`**Answer:** RAG when the model needs up-to-date or private knowledge — retrieval grounds answers and is easier to update. Fine-tuning (including LoRA) when you need specific style, format or behavior, or domain-specific tasks where prompting falls short. They can combine.

Tip: Knowledge vs behavior.`, 'D', 'S'],

["Vector Search", "What is a vector database?",
`**Answer:** A store optimized for similarity search over embeddings using approximate nearest neighbor indexes (HNSW, IVF). Options: Pinecone, Weaviate, Milvus, Qdrant, pgvector, and vector features in Elasticsearch, OpenSearch and cloud databases.

Tip: pgvector for simple setups.`, 'D', 'M'],

["Responsible AI", "How do you build responsible ML systems?",
`**Answer:** Fairness evaluation across groups, explainability for high-stakes decisions, privacy protection (minimization, anonymization), human oversight, documentation (model cards), security against adversarial inputs, and compliance with regulations like the EU AI Act.

Tip: Model cards.`, 'D', 'M'],

["Coding", "How do you write production-quality ML code?",
`**Answer:** Modular code (not just notebooks), type hints, tests, configuration management, logging, reproducible environments (containers), and code reviews.

Tip: Notebooks to packages.`, 'B', 'M'],

["Experiment Tracking", "Why track experiments?",
`**Answer:** To compare runs, reproduce results and know which data, code and parameters produced a model. Tools: MLflow, Weights & Biases.

Tip: Reproducibility.`, 'B', 'E'],

["Cost", "How do you manage GPU costs?",
`**Answer:** Right-size instances, spot/preemptible instances for training with checkpointing, autoscaling for inference, batching, sharing GPUs, and monitoring utilization.

Tip: Spot instances with checkpoints.`, 'D', 'M'],

["Edge", "How do you deploy models on edge devices?",
`**Answer:** Compress models (quantization, pruning), convert to mobile formats (Core ML, TensorFlow Lite, ONNX Runtime), test latency and memory on target devices, and plan model updates.

Tip: Hardware constraints.`, 'D', 'M'],

["Behavioral", "Tell me about a model you put into production.",
`**Sample answer:** "I productionized a demand forecasting model: feature pipelines in Spark, training in SageMaker Pipelines, batch scoring nightly for 2M SKU-store combinations, and drift monitoring. Forecast error dropped 18% vs the old system, cutting inventory by $6M."

Tip: Scale and impact.`, 'B', 'M'],

["Behavioral", "Tell me about a production ML failure.",
`**Sample answer:** "A recommendation model's CTR dropped after a catalog change because new items lacked embeddings. We added a cold-start fallback and alerts on feature coverage."

Tip: Root cause and safeguard.`, 'B', 'M'],

["Behavioral", "How do you collaborate with data scientists?",
`**Answer:** Agree on interfaces early (feature definitions, model formats), provide templates and platforms, review code for production readiness, and share monitoring results.

Tip: Enablement.`, 'B', 'E'],

["Architecture", "Design an ML platform for a company.",
`**Answer:** Data lake/warehouse, feature store, experiment tracking and model registry, orchestrated pipelines, scalable training compute, serving infrastructure (batch and online), monitoring and observability, access control and governance — with self-service templates.

Tip: Platform as product.`, 'D', 'S'],

["Metrics", "How do you connect model metrics to business metrics?",
`**Answer:** Define the business KPI first, link model improvements to it via offline estimates, and validate with online experiments.

Tip: Online validation.`, 'B', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/staff ML engineer or ML platform lead — scaling ML systems and LLM infrastructure.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I take models from notebooks to reliable production systems — pipelines, serving and monitoring — and I've delivered measurable gains like an 18% forecast improvement worth $6M."

Tip: Proof.`, 'B', 'M'],

["Embeddings", "What are embeddings?",
`**Answer:** Dense vector representations capturing semantic similarity — words, sentences, images, users or items — learned by models. Similar items are close in vector space, enabling search, recommendations and clustering.

Tip: Use cases.`, 'B', 'M'],

["Hyperparameters", "How do you tune hyperparameters efficiently?",
`**Answer:** Random search or Bayesian optimization (Optuna, Hyperopt) over grid search, early stopping of poor trials, and sensible ranges based on experience.

Tip: Optuna mention.`, 'D', 'M'],

["Data Quality", "How do you validate data before training?",
`**Answer:** Schema and range checks, missing value thresholds, distribution comparisons with previous data, label quality checks, and blocking training if checks fail.

Tip: Quality gates.`, 'B', 'M'],

["Latency", "What contributes to inference latency?",
`**Answer:** Feature retrieval, preprocessing, model compute, network overhead, and serialization. Profile each part and optimize the largest contributor.

Tip: Feature lookup often dominates.`, 'D', 'M'],

["CI/CD", "What does CI/CD for ML look like?",
`**Answer:** CI: code tests, data validation, training on sample data. CD: automated training on full data, evaluation gates, registry promotion, staged deployment and monitoring. Plus continuous training triggered by drift or schedules.

Tip: Continuous training.`, 'D', 'M'],

["Security", "What security risks exist for ML systems?",
`**Answer:** Data poisoning, model theft, adversarial examples, prompt injection for LLMs, leakage of training data, and insecure model artifacts (pickle files). Mitigate with access controls, validation, safe formats (safetensors) and monitoring.

Tip: Safetensors.`, 'D', 'S'],

["GPU", "When do you need GPUs?",
`**Answer:** Deep learning training and inference with large models; most classical ML (gradient boosting, linear models) runs well on CPUs.

Tip: Cost awareness.`, 'B', 'M'],

["Ray", "What is Ray used for?",
`**Answer:** A distributed computing framework for scaling Python — distributed training, hyperparameter tuning (Ray Tune), batch inference, and model serving (Ray Serve).

Tip: Python-native scaling.`, 'D', 'M'],

["Labels", "How do you get labels for training data?",
`**Answer:** Historical outcomes, human annotation (internal or vendors), weak supervision rules, user feedback signals, and LLM-assisted labeling with human verification.

Tip: Label quality.`, 'B', 'M'],

["Model Registry", "What is a model registry?",
`**Answer:** A central repository of model versions with metadata, lineage, stage transitions (staging, production) and approvals.

Tip: Governance.`, 'B', 'M'],

["Explainability", "How do you provide explanations in a real-time system?",
`**Answer:** Compute SHAP values efficiently (TreeSHAP for tree models), cache explanations, or provide reason codes derived from top contributing features — important for regulated decisions like credit.

Tip: Reason codes.`, 'D', 'S']
];
