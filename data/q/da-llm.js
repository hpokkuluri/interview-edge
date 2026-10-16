// da-llm — generated from src/da-llm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// AI / LLM Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-llm'] = [
["Role", "What does an AI/LLM engineer do?",
`**Why they ask:** a newer role with varied definitions.

**Answer:** Builds applications on large language models: designing prompts and system instructions, retrieval-augmented generation (RAG), tool use and agents, evaluation pipelines, guardrails and safety, cost and latency optimization, and integrating AI features into products with monitoring — usually using hosted model APIs and sometimes fine-tuned or self-hosted models.

Tip: Emphasize evaluation and production reliability.`, 'B', 'E'],

["LLM Basics", "How do LLMs work at a high level?",
`**Answer:** Transformer neural networks trained on large text corpora to predict the next token. Pretraining builds general knowledge; post-training (instruction tuning, reinforcement learning from feedback) makes them follow instructions and behave safely. They generate text token by token based on probabilities.

Tip: Mention tokens and context windows.`, 'B', 'E'],

["LLM Basics", "What are tokens and context windows?",
`**Answer:** Tokens are chunks of text (roughly 3–4 characters of English on average) that models process. The context window is the maximum tokens the model can consider at once (prompt + output). Cost and latency scale with tokens, so manage context carefully.

Tip: Cost awareness.`, 'B', 'E'],

["LLM Basics", "What do temperature and top-p control?",
`**Answer:** They control randomness in sampling. Low temperature gives more deterministic, focused outputs (extraction, classification); higher values give more varied outputs (creative writing). Top-p limits sampling to the most probable tokens up to a cumulative probability.

Tip: Low temperature for structured tasks.`, 'B', 'M'],

["Prompting", "What makes a good prompt?",
`**Answer:** Clear role and task, relevant context, explicit constraints and output format (e.g. JSON schema), examples (few-shot) when helpful, step-by-step instructions for complex tasks, and guidance for edge cases ("if the answer isn't in the documents, say so").

Tip: Show a before/after prompt.`, 'B', 'M'],

["Prompting", "How do you get reliable structured output?",
`**Answer:** Use model features for structured outputs or tool/function calling with JSON schemas, validate output with a schema (Pydantic, Zod), retry or repair on failure, and keep temperature low.

Tip: Schema validation.`, 'B', 'M'],

["RAG", "Explain retrieval-augmented generation.",
`**Answer:** Instead of relying only on the model's training knowledge, retrieve relevant documents from your data at query time and include them in the prompt so the model answers grounded in that context. Steps: ingest and chunk documents, embed and index them, retrieve top matches for a query (vector, keyword or hybrid search), optionally rerank, and generate with citations.

Tip: Citations build trust.`, 'B', 'M'],

["RAG", "How do you improve RAG quality?",
`**Answer:** Better chunking (semantic boundaries, overlap, metadata), hybrid search (BM25 + vectors), rerankers, query rewriting or decomposition, metadata filters, permission-aware retrieval, good prompts that require citing sources, and evaluation of retrieval (recall@k) separately from generation.

Tip: Evaluate retrieval and generation separately.`, 'D', 'M'],

["RAG", "How do you handle document permissions in RAG?",
`**Answer:** Store access control metadata with chunks and filter retrieval by the user's permissions at query time (or use per-tenant indexes), so the model never sees documents the user can't access.

Tip: Critical for enterprise.`, 'D', 'S'],

["Embeddings", "How do you choose an embedding model?",
`**Answer:** Evaluate on your own data and queries (retrieval benchmarks), consider dimension size (storage and speed), language and domain coverage, cost, hosting (API vs self-hosted) and maximum input length.

Tip: Benchmark on your data.`, 'D', 'M'],

["Agents", "What is an AI agent?",
`**Answer:** A system where an LLM decides which actions to take — calling tools (APIs, search, code execution, databases) in a loop, observing results, and continuing until the goal is met. Agents need clear tools, limits on steps and permissions, error handling, and human approval for consequential actions.

Tip: Guardrails on actions.`, 'B', 'M'],

["Agents", "How do you design tools for an agent?",
`**Answer:** Clear names and descriptions, well-defined parameter schemas, focused single-purpose tools, informative error messages, least-privilege access, idempotency for actions, and logging of every call.

Tip: Tool descriptions matter as much as prompts.`, 'D', 'M'],

["Agents", "What is the Model Context Protocol (MCP)?",
`**Answer:** An open protocol for connecting AI applications to tools and data sources through standardized servers, so the same integrations can be reused across different AI clients and models.

Tip: Interoperability.`, 'D', 'M'],

["Agents", "When should you use an agent vs a fixed workflow?",
`**Answer:** Use fixed workflows (chains with defined steps) when the process is predictable — more reliable and cheaper. Use agents when steps vary and require dynamic decisions. Often a workflow with a few LLM decision points is the best middle ground.

Tip: "Simplest thing that works."`, 'D', 'M'],

["Evaluation", "How do you evaluate an LLM application?",
`**Answer:** Build a test set of realistic inputs with expected behaviors; define criteria (correctness, groundedness/faithfulness, relevance, completeness, safety, format, tone); score with code-based checks, LLM-as-judge (calibrated against human ratings) and human review; track results per version; and run regression evals on every prompt, model or retrieval change.

Tip: "Evals are your test suite."`, 'B', 'M'],

["Evaluation", "What is LLM-as-a-judge and its pitfalls?",
`**Answer:** Using a model to grade outputs against criteria. Pitfalls: position and verbosity bias, self-preference, inconsistent scoring. Mitigate with clear rubrics, pairwise comparisons, calibration against human labels, and spot checks.

Tip: Calibrate with humans.`, 'D', 'S'],

["Hallucination", "How do you reduce hallucinations?",
`**Answer:** Ground answers in retrieved sources, instruct the model to answer only from context and say when it doesn't know, require citations, use lower temperature for factual tasks, add verification steps, and evaluate groundedness.

Tip: Allowing "I don't know."`, 'B', 'M'],

["Safety", "What is prompt injection and how do you defend against it?",
`**Answer:** Malicious instructions hidden in user input or retrieved content (web pages, documents, emails) that try to override system instructions or trigger unwanted tool actions. Defenses: treat retrieved content as untrusted data, separate instructions from data, least-privilege tools, human confirmation for sensitive actions, output filtering, and monitoring. No defense is perfect, so limit blast radius.

Tip: Limit what tools can do.`, 'D', 'M'],

["Safety", "What guardrails do you put around an LLM feature?",
`**Answer:** Input validation and moderation, output filters (PII, harmful content), schema validation, topic restrictions, rate limits, tool permission controls, human review for high-risk outputs, and audit logs.

Tip: Layered defenses.`, 'D', 'M'],

["Privacy", "How do you handle sensitive data with LLM APIs?",
`**Answer:** Check provider data usage and retention terms, minimize and redact PII where possible, use enterprise agreements or private deployments when required, encrypt in transit, and log carefully without storing sensitive prompts unnecessarily.

Tip: Data processing agreements.`, 'D', 'M'],

["Cost", "How do you control LLM costs?",
`**Answer:** Choose the smallest model that meets quality (route simple tasks to cheaper models), trim prompts and context, prompt caching where supported, cache responses for repeated queries, batch APIs for offline jobs, limit output length, and monitor cost per feature and per user.

Tip: Model routing.`, 'B', 'M'],

["Latency", "How do you reduce latency in LLM apps?",
`**Answer:** Stream responses, use smaller/faster models for simple steps, parallelize independent calls, reduce prompt size, cache, and precompute retrieval where possible.

Tip: Streaming improves perceived speed.`, 'B', 'M'],

["Fine-tuning", "When should you fine-tune a model?",
`**Answer:** When prompting and RAG can't achieve the required format, style or task performance; when you need a smaller cheaper model to match a larger one on a narrow task; or for consistent domain behavior. Requires quality training data and evaluation. Parameter-efficient methods (LoRA) reduce cost.

Tip: Try prompting and RAG first.`, 'D', 'S'],

["Models", "How do you choose between models?",
`**Answer:** Evaluate on your tasks for quality, latency, cost, context length, tool-use reliability, safety, data privacy terms, and availability. Keep an abstraction so you can switch models.

Tip: Benchmark on your use case.`, 'B', 'M'],

["Architecture", "Design a customer support assistant using LLMs.",
`**Answer:** RAG over help articles and policies with permission filtering, tools for order lookup and ticket creation (with authentication), conversation memory, escalation to humans when confidence is low or customers ask, guardrails on refunds and sensitive topics, evaluation set from real tickets, analytics on resolution rates, and feedback loops.

Tip: Human escalation path.`, 'D', 'S'],

["Architecture", "What does an LLM gateway do?",
`**Answer:** A central layer for model access — routing across providers, authentication, rate limiting, caching, cost tracking, logging, fallback when a provider fails, and policy enforcement.

Tip: Central control.`, 'D', 'S'],

["Observability", "What do you monitor in production LLM apps?",
`**Answer:** Latency, token usage and cost, error rates, tool call success, user feedback (thumbs up/down), quality samples with automated evals, safety events, and drift in query types.

Tip: Tracing tools (LangSmith, Langfuse, Arize).`, 'D', 'M'],

["Frameworks", "What frameworks and tools have you used?",
`**Sample answer:** "Provider SDKs directly for most production work, LangChain/LlamaIndex for prototyping RAG, pgvector and OpenSearch for retrieval, Pydantic for structured outputs, and Langfuse for tracing and evals."

Tip: Show you understand what frameworks abstract.`, 'B', 'M'],

["Memory", "How do you handle conversation memory?",
`**Answer:** Keep recent turns in context, summarize older history, store important facts in structured memory with user consent, and retrieve relevant memories when needed — while respecting privacy and context limits.

Tip: Summarization.`, 'D', 'M'],

["Multimodal", "How do you use multimodal models?",
`**Answer:** For document understanding (invoices, forms), image analysis, charts and screenshots, and voice interfaces — with evaluation for accuracy and fallbacks for low-confidence results.

Tip: Document extraction use case.`, 'D', 'M'],

["Testing", "How do you test non-deterministic outputs?",
`**Answer:** Test properties rather than exact text (contains required facts, valid schema, no forbidden content), use evaluation scores with thresholds, run multiple samples for variance, and fix temperature for tests where possible.

Tip: Property-based checks.`, 'D', 'M'],

["Behavioral", "Tell me about an LLM feature you shipped.",
`**Sample answer:** "I built a RAG assistant for internal policy questions with hybrid search, reranking and citations. Our eval set of 300 real questions reached 92% correct with citations; HR tickets dropped 35% in two months."

Tip: Eval numbers and business impact.`, 'B', 'M'],

["Behavioral", "Tell me about a problem you found through evaluation.",
`**Sample answer:** "Evals showed the assistant invented policy numbers when documents were missing. We added a 'not found' instruction and retrieval confidence threshold; groundedness rose from 81% to 96%."

Tip: Evaluation-driven improvement.`, 'B', 'M'],

["Behavioral", "How do you explain AI limitations to stakeholders?",
`**Answer:** Be honest about accuracy, show eval results and failure examples, explain safeguards, and set expectations with human-in-the-loop designs where needed.

Tip: Trust through transparency.`, 'B', 'M'],

["Governance", "How should companies govern AI use?",
`**Answer:** AI use policy, inventory of AI systems, risk classification, approval process for high-risk uses, evaluation and monitoring requirements, data protections, vendor review, and compliance with laws like the EU AI Act.

Tip: Risk-based governance.`, 'D', 'S'],

["Enterprise", "How do enterprise apps like Oracle or Salesforce embed AI agents?",
`**Answer:** Vendors provide embedded AI features and agent builders (e.g. Oracle AI Agent Studio, Salesforce Agentforce, ServiceNow AI Agents) that use the application's data, security and workflows — engineers configure tools, prompts and guardrails within those platforms.

Tip: Platform-native agents.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior AI engineer or AI architect — agent systems, evaluation platforms and AI product strategy.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build LLM features that work reliably — grounded RAG, safe agents and rigorous evals — and I've shipped assistants that measurably reduced support volume while controlling cost."

Tip: Proof.`, 'B', 'M'],

["Chunking", "How do you choose a chunking strategy?",
`**Answer:** Split by document structure (headings, sections) rather than fixed characters when possible, size chunks to balance context and precision (often a few hundred tokens), add overlap, and include metadata (title, section, date). Evaluate retrieval quality to tune.

Tip: Structure-aware chunking.`, 'D', 'M'],

["Reranking", "What does a reranker do?",
`**Answer:** Takes the top retrieved candidates and reorders them with a more accurate (cross-encoder) model, improving relevance before passing context to the LLM.

Tip: Cheap quality boost.`, 'D', 'M'],

["Hybrid Search", "Why use hybrid search?",
`**Answer:** Vector search captures meaning; keyword search (BM25) captures exact terms like product codes and names. Combining them (e.g. reciprocal rank fusion) improves recall.

Tip: Exact identifiers.`, 'D', 'M'],

["Caching", "What is semantic caching?",
`**Answer:** Caching LLM responses keyed by embedding similarity of queries, so similar questions reuse answers — saving cost and latency, with care for personalization and freshness.

Tip: Watch for stale or personalized answers.`, 'D', 'M'],

["Reasoning", "How do you handle complex multi-step tasks?",
`**Answer:** Break tasks into steps (decomposition), use reasoning-capable models or extended thinking for hard problems, verify intermediate results, and use tools for calculations or lookups instead of relying on the model's memory.

Tip: Use tools for math.`, 'D', 'M'],

["Data", "How do you build a good evaluation dataset?",
`**Answer:** Sample real user queries (anonymized), include edge cases and adversarial examples, write expected answers or criteria with domain experts, and keep it updated as usage changes.

Tip: Real queries.`, 'D', 'M'],

["Human-in-the-loop", "When do you require human review?",
`**Answer:** For high-impact actions (payments, account changes, legal or medical advice), low-confidence outputs, and new features during rollout.

Tip: Risk-based.`, 'B', 'M'],

["Cost Example", "Estimate the monthly cost of an LLM feature.",
`**Answer:** Requests per month × (input tokens × input price + output tokens × output price). **Example:** 100,000 requests × (2,000 input + 300 output tokens) at $3 per million input and $15 per million output ≈ 100k × ($0.006 + $0.0045) ≈ $1,050/month — before caching.

Tip: Show the formula; check current prices.`, 'D', 'M'],

["Versioning", "How do you manage prompt versions?",
`**Answer:** Store prompts in version control or a prompt registry, tie versions to evaluation results, roll out changes gradually, and log which version produced each output.

Tip: Prompts are code.`, 'B', 'M']
];

QB['da-llm'] = (QB['da-llm'] || []).concat([
["Prompting", "What is few-shot prompting and when does it help?",
`**Answer:** Including a few input-output examples in the prompt to show the desired behavior or format. It helps with consistent formatting, classification boundaries and tone; choose diverse, representative examples and watch token cost.

Tip: Diverse examples.`, 'B', 'M'],
["RAG", "How do you keep a RAG index up to date?",
`**Answer:** Incremental ingestion triggered by document changes, re-embedding only changed chunks, deleting removed documents, tracking source versions and timestamps, and periodic full reindexing when embedding models change.

Tip: Handle deletions.`, 'D', 'M'],
["Product", "How do you measure the business success of an AI feature?",
`**Answer:** Define outcome metrics before launch — resolution rate, time saved, conversion, satisfaction — alongside quality metrics and cost per task, and use A/B tests or before/after comparisons with controls.

Tip: Outcomes, not just usage.`, 'B', 'M']
]);
