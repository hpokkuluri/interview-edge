// Rewritten Data & AI — Machine Learning Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-ml-).
module.exports = {

'What is MLOps?':
`**Why they ask:** the core of the role.

**Answer:**
"MLOps is the set of practices for running the ML lifecycle reliably: versioned data, code and models; automated training and evaluation pipelines; a model registry; CI/CD for deployment; monitoring of drift, performance and infrastructure; and automated retraining with governance. Tools include MLflow, Kubeflow, SageMaker, Vertex AI and Databricks."

Tip: Name tools you've used.`,

'Batch vs real-time inference — how do you choose?':
`**Why they ask:** a key design decision.

**Answer:**
"Batch scores many records on a schedule — like nightly churn scores — and it's cheaper and simpler. Real-time serves a prediction per request with low latency — fraud checks or recommendations — and needs online features and scalable serving. Streaming inference processes events continuously. The latency and freshness the business actually needs decides it."

Tip: Latency and freshness requirements decide.`,

'How do you serve a model with low latency?':
`**Why they ask:** production performance.

**Answer:**
"An optimized model format — ONNX, TorchScript or TensorRT — an efficient serving framework like Triton, TorchServe, BentoML or KServe, request batching, caching, precomputed features from an online feature store, autoscaling, right-sized CPU or GPU, and model compression through quantization or distillation."

Tip: Mention quantization.`,

'What is a feature store?':
`**Why they ask:** production ML infrastructure.

**Answer:**
"It manages features for both training and serving. The offline store holds historical data for training, with point-in-time correctness so we never use future data. The online store serves features with low latency. Together they keep training and serving consistent and let teams reuse features. Examples are Feast, Tecton, and the Databricks, SageMaker and Vertex feature stores."

Tip: Point-in-time correctness.`,

'What is training-serving skew?':
`**Why they ask:** a common production failure.

**Answer:**
"It's a difference between how features are computed in training versus production, so the live model performs worse than offline. For example, training used a 30-day average from the warehouse but serving calculates it from a cache that only has 7 days. I prevent it with shared feature code, a feature store, logging served features for future training, and validation checks."

Tip: A very common production failure.`,

'How do you build a training pipeline?':
`**Why they ask:** automation.

**Answer:**
"Data extraction and validation, feature engineering, training with tracked parameters, evaluation against baselines and thresholds, model registration, and approval for deployment — orchestrated with Airflow, Kubeflow Pipelines or SageMaker Pipelines, reproducible and versioned. Automated quality gates stop a worse model from reaching production."

Tip: Automated quality gates.`,

'What do you monitor for production models?':
`**Why they ask:** operational ownership.

**Answer:**
"Infrastructure — latency, throughput, errors and resource use. Data quality and drift in inputs. Shifts in the prediction distribution. Model performance once labels arrive. And the business KPIs it's meant to move. With alerts on significant degradation. Delayed labels are the hard part — for fraud, true labels may take weeks — so drift monitoring is the early warning."

Tip: Delayed labels are a challenge.`,

'How do you deploy a new model version safely?':
`**Why they ask:** risk management.

**Answer:**
"Shadow deployment first — score live traffic but don't act on it. Then a canary release to a small share of traffic, an A/B test against the current model, automated rollback if metrics degrade, and a versioned registry so rollback is one step."

Tip: Use shadow mode.`,

'How do you train models on large datasets?':
`**Why they ask:** scale.

**Answer:**
"Distributed data processing with Spark or Ray, distributed training — data parallelism with PyTorch DDP or FSDP, or DeepSpeed — efficient data loading, mixed precision, checkpointing so a failure doesn't lose hours of work, and the right instance types."

Tip: Mixed precision and checkpointing.`,

'Explain how backpropagation works.':
`**Why they ask:** deep learning fundamentals.

**Answer:**
"The network computes predictions in a forward pass and calculates the loss. Then it propagates gradients backward through the layers using the chain rule, working out how much each weight contributed to the loss. An optimizer like SGD or Adam then updates the weights to reduce the loss, and the cycle repeats."

Tip: It's the chain rule.`,

'What are common techniques to improve neural network training?':
`**Why they ask:** practical training skill.

**Answer:**
"Proper initialization, normalization — batch or layer norm — learning rate schedules with warmup, regularization like dropout and weight decay, data augmentation, early stopping, gradient clipping and mixed precision. The learning rate is the single most important hyperparameter."

Tip: Learning rate matters most.`,

'Explain the transformer architecture briefly.':
`**Why they ask:** modern AI foundation.

**Answer:**
"Transformers use self-attention, so every token weighs its relationship to every other token in the sequence. Multi-head attention captures different kinds of relationships, with feed-forward layers, residual connections, layer normalization and positional information. It parallelizes well on GPUs, and it underlies modern LLMs and many vision models."

Tip: Self-attention is the core idea.`,

'How do you reduce inference cost?':
`**Why they ask:** cost at scale.

**Answer:**
"Quantization to INT8 or 4-bit, pruning, knowledge distillation into a smaller model, batching, caching frequent results, efficient hardware, autoscaling to demand, and using smaller models when quality allows. Distillation often gives most of the quality at a fraction of the cost."

Tip: Distillation.`,

'How do you manage training data versions?':
`**Why they ask:** reproducibility.

**Answer:**
"Versioned datasets — Delta or Iceberg time travel, DVC or lakeFS — metadata that links each model to its exact data version, and immutable snapshots. So I can always answer 'what data trained the model that's in production?'"

Tip: Reproducibility.`,

'How do you test ML systems?':
`**Why they ask:** quality in ML.

**Answer:**
"Unit tests for feature code, data validation tests on schema and ranges with Great Expectations or TFDV, model evaluation tests against thresholds, behavioral tests — invariance and directional expectations, like 'more late payments shouldn't lower the risk score' — integration tests for serving, and load tests."

Tip: Behavioral tests.`,

'How do you use Kubernetes for ML?':
`**Why they ask:** infrastructure skills.

**Answer:**
"Containerized training jobs and serving with autoscaling, GPU scheduling, Kubeflow or KServe for ML workflows and serving, and resource quotas so one training job can't starve the cluster. Managed alternatives like SageMaker, Vertex AI and Azure ML reduce the operational burden."

Tip: Managed services reduce ops burden.`,

'How would you design a recommendation system at scale?':
`**Why they ask:** a classic system design.

**Answer:**
"A two-stage architecture. Candidate generation retrieves a few hundred items from millions using embeddings and approximate nearest-neighbor search — FAISS or ScaNN. Then a richer ranking model orders them, with features from a feature store and real-time signals. Evaluate offline with recall at k and NDCG, then online with A/B tests, and watch feedback loops."

Tip: Retrieval plus ranking.`,

'How would you build a real-time fraud detection system?':
`**Why they ask:** a classic real-time design.

**Answer:**
"Streaming features — transaction velocity, device and location — computed with Flink or Kafka Streams. A low-latency model, usually gradient boosting, served within a strict latency budget, plus rules for known patterns. Thresholds tuned to business cost, a human review queue for the gray zone, and frequent retraining because fraudsters adapt."

Tip: Mention adversarial drift.`,

'How do you deploy LLM applications in production?':
`**Why they ask:** current skills.

**Answer:**
"Choose hosted APIs or self-hosted models — with vLLM or TGI — based on cost, privacy and latency. Implement RAG with vector search, manage prompts and their versions, add guardrails, caching and rate limiting, monitor latency, cost and quality, and run evaluations on every change."

Tip: vLLM for self-hosting.`,

'When would you fine-tune vs use RAG?':
`**Why they ask:** LLM architecture judgment.

**Answer:**
"RAG when the model needs up-to-date or private knowledge — retrieval grounds the answers and is easy to update. Fine-tuning, including LoRA, when you need a specific style, format or behavior, or a domain task where prompting falls short. They combine well: fine-tune for behavior, RAG for knowledge."

Tip: Knowledge versus behavior.`,

'What is a vector database?':
`**Why they ask:** RAG infrastructure.

**Answer:**
"A store optimized for similarity search over embeddings using approximate nearest-neighbor indexes like HNSW or IVF. Options include Pinecone, Weaviate, Milvus, Qdrant, pgvector, and vector features in Elasticsearch, OpenSearch and cloud databases. For a simple setup, pgvector in an existing Postgres is often enough."

Tip: pgvector for simple setups.`,

'How do you build responsible ML systems?':
`**Why they ask:** responsible AI.

**Answer:**
"Fairness evaluation across groups, explainability for high-stakes decisions, privacy protection through minimization and anonymization, human oversight, documentation like model cards, security against adversarial inputs, and compliance with regulations like the EU AI Act."

Tip: Mention model cards.`,

'How do you write production-quality ML code?':
`**Why they ask:** engineering discipline.

**Answer:**
"Modular code in packages, not just notebooks, with type hints, tests, configuration management, logging, reproducible environments in containers, and code reviews."

Tip: Notebooks to packages.`,

'Why track experiments?':
`**Why they ask:** reproducibility.

**Answer:**
"To compare runs, reproduce results, and know exactly which data, code and parameters produced a model. Tools like MLflow or Weights & Biases make it automatic."

Tip: Reproducibility.`,

'How do you manage GPU costs?':
`**Why they ask:** GPUs are expensive.

**Answer:**
"Right-size instances, use spot or preemptible instances for training with checkpointing so interruptions don't lose work, autoscale inference, batch requests, share GPUs, and monitor utilization — idle GPUs are expensive."

Tip: Spot instances with checkpoints.`,

'How do you deploy models on edge devices?':
`**Why they ask:** constrained deployment.

**Answer:**
"Compress the model with quantization and pruning, convert it to a mobile format — Core ML, TensorFlow Lite or ONNX Runtime — test latency and memory on the actual target devices, and plan how model updates will be delivered."

Tip: Respect hardware constraints.`,

'Tell me about a model you put into production.':
`**Why they ask:** proof.

**Answer:**
"I productionized a demand forecasting model: Spark feature pipelines, training in SageMaker Pipelines, nightly batch scoring for 2 million SKU-store combinations, and drift monitoring. Forecast error dropped 18% versus the old system, which cut inventory by about $6 million."

Tip: Scale and impact.`,

'Tell me about a production ML failure.':
`**Why they ask:** learning.

**Answer:**
"A recommendation model's click-through dropped after a catalog change, because new items had no embeddings and were never recommended. We added a cold-start fallback and alerts on feature coverage."

Tip: Root cause and safeguard.`,

'How do you collaborate with data scientists?':
`**Why they ask:** team dynamics.

**Answer:**
"Agree on interfaces early — feature definitions and model formats — provide templates and platform tools, review code for production readiness, and share monitoring results back. My job is to make their models easy to ship."

Tip: Enablement.`,

'Design an ML platform for a company.':
`**Why they ask:** platform thinking.

**Answer:**
"A data lake or warehouse, a feature store, experiment tracking and a model registry, orchestrated pipelines, scalable training compute, serving infrastructure for both batch and online, monitoring and observability, and access control and governance — with self-service templates so a data scientist can go from notebook to production without filing tickets."

Tip: Treat the platform as a product.`,

'How do you connect model metrics to business metrics?':
`**Why they ask:** value focus.

**Answer:**
"Define the business KPI first, link model improvements to it with offline estimates, and validate with online experiments. A better AUC only matters if it moves revenue or cost."

Tip: Validate online.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior or staff ML engineer, or ML platform lead — scaling ML systems and LLM infrastructure."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I take models from notebooks to reliable production systems — pipelines, serving and monitoring — and I've delivered measurable gains, like an 18% forecast improvement worth $6 million."

Tip: Proof.`,

'What are embeddings?':
`**Why they ask:** a core concept.

**Answer:**
"Dense vector representations that capture semantic similarity — for words, sentences, images, users or items — learned by models. Similar things end up close together in vector space, which powers search, recommendations and clustering."

Tip: Give use cases.`,

'How do you tune hyperparameters efficiently?':
`**Why they ask:** practical efficiency.

**Answer:**
"Random search or Bayesian optimization with tools like Optuna or Hyperopt rather than grid search, early stopping of poor trials, and sensible ranges based on experience. Bayesian optimization usually finds good settings in far fewer runs."

Tip: Mention Optuna.`,

'How do you validate data before training?':
`**Why they ask:** quality gates.

**Answer:**
"Schema and range checks, thresholds on missing values, distribution comparisons with previous data, label quality checks — and the pipeline blocks training if they fail."

Tip: Quality gates.`,

'What contributes to inference latency?':
`**Why they ask:** performance debugging.

**Answer:**
"Feature retrieval, preprocessing, model compute, network overhead and serialization. I profile each part and optimize the biggest one — and it's often the feature lookup, not the model."

Tip: Feature lookup often dominates.`,

'What does CI/CD for ML look like?':
`**Why they ask:** automation maturity.

**Answer:**
"CI runs code tests, data validation, and training on a small sample. CD runs full training, evaluation gates, registry promotion, staged deployment and monitoring. Plus continuous training, triggered by drift or on a schedule."

Tip: Continuous training.`,

'What security risks exist for ML systems?':
`**Why they ask:** ML security.

**Answer:**
"Data poisoning, model theft, adversarial examples, prompt injection for LLMs, leakage of training data, and insecure model artifacts like pickle files that can execute code. Mitigations include access controls, validation, safe formats like safetensors, and monitoring."

Tip: Mention safetensors.`,

'When do you need GPUs?':
`**Why they ask:** cost awareness.

**Answer:**
"For deep learning training and for inference with large models. Most classical ML — gradient boosting, linear models — runs perfectly well on CPUs, much more cheaply."

Tip: Cost awareness.`,

'What is Ray used for?':
`**Why they ask:** distributed Python.

**Answer:**
"It's a distributed computing framework for scaling Python — distributed training, hyperparameter tuning with Ray Tune, batch inference, and model serving with Ray Serve."

Tip: Python-native scaling.`,

'How do you get labels for training data?':
`**Why they ask:** data is the bottleneck.

**Answer:**
"Historical outcomes, human annotation — internal or vendors — weak supervision rules, user feedback signals, and LLM-assisted labeling with human verification. Label quality matters more than quantity."

Tip: Label quality matters.`,

'What is a model registry?':
`**Why they ask:** governance.

**Answer:**
"A central repository of model versions with metadata, lineage, stage transitions — staging and production — and approvals."

Tip: It's about governance.`,

'How do you provide explanations in a real-time system?':
`**Why they ask:** regulated use cases.

**Answer:**
"Compute SHAP values efficiently — TreeSHAP for tree models — cache explanations where possible, or provide reason codes from the top contributing features. That's essential for regulated decisions like credit, where adverse action notices need reasons."

Tip: Reason codes.`,

'How do you handle model versioning in an API?':
`**Why they ask:** operability.

**Answer:**
"Version models in a registry, include the version in responses and logs, support routing by version for A/B tests, and keep the previous version deployable for instant rollback."

Tip: Log the version with every prediction.`,

'How do you log predictions for future training?':
`**Why they ask:** closing the loop.

**Answer:**
"Log the inputs exactly as served, the prediction, the model version and timestamps. Then join with outcomes later to build training data that matches production — which avoids training-serving skew."

Tip: Log features as served.`,

'When would you choose managed ML platforms vs open source?':
`**Why they ask:** platform judgment.

**Answer:**
"Managed platforms — SageMaker, Vertex AI, Azure ML, Databricks — reduce operational burden and integrate with the cloud. Open source — Kubeflow, MLflow, Feast — offers flexibility and portability. Team size and skills, scale, and tolerance for lock-in decide it."

Tip: Team capacity decides.`,

'What fallback do you use when a model service fails?':
`**Why they ask:** resilience.

**Answer:**
"Return a safe default — a rules-based or cached prediction — degrade gracefully, use timeouts so callers aren't blocked, and alert when the fallback rate rises."

Tip: Graceful degradation.`,

"How do you push back on deploying a model that isn't ready?":
`**Why they ask:** judgment under pressure.

**Answer:**
"Show the evaluation gaps and risks with data — weak segment performance and specific failure cases — propose a shadow or limited rollout, and agree on clear criteria for full launch. That turns 'not ready' into a plan."

Tip: Criteria-based decisions.`,

};
