// cl-devops — generated from src/cl-devops-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// DevOps Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cl-devops'] = [
["Culture", "What is DevOps?",
`**Why they ask:** to see if you understand it as culture plus practice, not just tools.

**Answer:** A culture and set of practices that bring development and operations together to deliver software faster and more reliably: shared ownership, automation (CI/CD, infrastructure as code), continuous feedback through monitoring, small frequent releases, and learning from failures. Tools support it but don't define it.

Tip: Mention DORA metrics as how you measure it.`, 'B', 'E'],

["Metrics", "What are the DORA metrics?",
`**Answer:** Deployment frequency, lead time for changes, change failure rate, and time to restore service (MTTR) — research-backed measures of delivery performance. Recent DORA reports also add reliability and deployment rework rate.

Tip: Show your team's numbers.`, 'B', 'M'],

["CI/CD", "Explain CI vs continuous delivery vs continuous deployment.",
`**Answer:** **Continuous integration:** developers merge small changes frequently; every change is automatically built and tested. **Continuous delivery:** every change that passes the pipeline is releasable, with deployment to production by a manual approval. **Continuous deployment:** passing changes deploy to production automatically.

Tip: Clear distinctions.`, 'B', 'E'],

["CI/CD", "What stages would you put in a CI/CD pipeline?",
`**Answer:** Checkout → lint and static analysis → unit tests → build artifact/container → security scans (SAST, dependencies, container image) → integration tests → deploy to staging → smoke/acceptance tests → approval (if needed) → progressive production deploy (canary/blue-green) → post-deploy verification and automatic rollback.

Tip: Fast feedback early in the pipeline.`, 'B', 'M'],

["CI/CD", "Which CI/CD tools have you used?",
`**Sample answer:** "GitHub Actions and GitLab CI for most pipelines, Jenkins on a legacy platform, Azure DevOps Pipelines in a Microsoft shop, and Argo CD for GitOps deployments to Kubernetes."

Tip: Name what you built.`, 'B', 'E'],

["Deployments", "Blue-green vs canary vs rolling deployments?",
`**Answer:** **Rolling:** replace instances gradually. **Blue-green:** run new version alongside old, switch traffic at once, quick rollback by switching back. **Canary:** route a small percentage of traffic to the new version, watch metrics, then expand. Feature flags decouple deployment from release.

Tip: Canary with automated analysis.`, 'B', 'M'],

["Deployments", "How do you roll back a bad deployment?",
`**Answer:** Automated rollback on failed health checks or error-rate thresholds, redeploy the previous artifact (immutable versions), switch traffic back (blue-green), or disable via feature flag. Database changes must be backward compatible for rollback to work.

Tip: Backward-compatible migrations.`, 'B', 'M'],

["GitOps", "What is GitOps?",
`**Answer:** Using Git as the source of truth for infrastructure and application configuration; an agent (Argo CD, Flux) continuously reconciles the cluster state with the repository. Changes happen through pull requests, giving audit trails and easy rollback.

Tip: Pull-based deployment.`, 'D', 'M'],

["Git", "What branching strategy do you prefer?",
`**Answer:** Trunk-based development with short-lived feature branches and feature flags for continuous delivery; GitFlow for scheduled releases with multiple versions. Trunk-based correlates with better DORA performance.

Tip: Short-lived branches.`, 'B', 'M'],

["IaC", "Why infrastructure as code?",
`**Answer:** Repeatable, versioned, reviewed infrastructure; faster environment creation; drift prevention; and disaster recovery. Tools: Terraform/OpenTofu, CloudFormation, Bicep, Pulumi, plus configuration management (Ansible).

Tip: Mention drift detection.`, 'B', 'E'],

["IaC", "Terraform vs Ansible?",
`**Answer:** Terraform is declarative provisioning of infrastructure with state. Ansible is primarily configuration management and orchestration (installing software, configuring servers) using agentless SSH. They complement each other.

Tip: Provisioning vs configuration.`, 'B', 'M'],

["Containers", "What is Docker and why use it?",
`**Answer:** Packaging applications with their dependencies into images that run consistently anywhere. Benefits: environment consistency, isolation, fast startup, and easy scaling with orchestrators.

Tip: Image best practices.`, 'B', 'E'],

["Containers", "How do you write a good Dockerfile?",
`**Answer:** Small, trusted base images (distroless/alpine/slim), multi-stage builds to keep build tools out of the final image, layer ordering for caching (dependencies before source), run as non-root, pin versions, no secrets in images, and add health checks.

Tip: Multi-stage builds.`, 'B', 'M'],

["Kubernetes", "Explain core Kubernetes objects.",
`**Answer:** Pods (smallest unit), Deployments (desired replicas and rolling updates), Services (stable networking), Ingress/Gateway (HTTP routing), ConfigMaps and Secrets (configuration), StatefulSets (stateful apps), DaemonSets (one pod per node), Jobs/CronJobs, and namespaces for isolation.

Tip: Deployment vs StatefulSet.`, 'B', 'M'],

["Kubernetes", "How do you troubleshoot a pod in CrashLoopBackOff?",
`**Answer:** kubectl describe pod (events), kubectl logs --previous, check resource limits (OOMKilled), liveness probe configuration, config/secrets, image and command, and dependencies the app needs at startup.

Tip: OOMKilled and probes are common.`, 'B', 'M'],

["Kubernetes", "What are liveness, readiness and startup probes?",
`**Answer:** **Readiness** decides if a pod receives traffic. **Liveness** restarts a container if it's stuck. **Startup** delays other probes for slow-starting apps. Misconfigured liveness probes cause restart loops.

Tip: Readiness vs liveness.`, 'B', 'M'],

["Kubernetes", "How do you manage Kubernetes manifests?",
`**Answer:** Helm charts for templated packages, Kustomize for overlays per environment, and GitOps tools to deploy. Keep values per environment and validate with linting and policy checks.

Tip: Helm vs Kustomize.`, 'D', 'M'],

["Monitoring", "How do you set up monitoring and alerting?",
`**Answer:** Metrics (Prometheus, CloudWatch, Datadog), logs (ELK/OpenSearch, Loki, Splunk), traces (OpenTelemetry, Jaeger), dashboards (Grafana), and alerts on SLO-based symptoms with runbooks — avoiding alert fatigue.

Tip: Runbooks with alerts.`, 'B', 'M'],

["Security", "What is DevSecOps?",
`**Answer:** Integrating security into the delivery pipeline: SAST, dependency/SCA scanning, secrets scanning, container image scanning, IaC scanning, DAST, policy as code, signed artifacts and SBOMs — shifting security left while keeping speed.

Tip: Supply chain security.`, 'B', 'M'],

["Security", "How do you manage secrets in pipelines?",
`**Answer:** Store secrets in a vault (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) or the CI's secret store, use OIDC federation to cloud providers instead of long-lived keys, mask secrets in logs, scope access narrowly, and rotate.

Tip: OIDC federation.`, 'D', 'M'],

["Security", "What is software supply chain security?",
`**Answer:** Protecting the build and dependency chain: verified dependencies, lockfiles, SBOMs, signed artifacts (Sigstore/cosign), provenance (SLSA), protected branches, least-privilege CI runners and scanning for malicious packages.

Tip: SLSA framework.`, 'D', 'S'],

["Testing", "How do you keep pipelines fast?",
`**Answer:** Parallelize jobs, cache dependencies and build layers, run only affected tests in monorepos, use faster runners, split slow tests to later stages, and fix flaky tests.

Tip: Caching and parallelism.`, 'B', 'M'],

["Incidents", "How do you handle a production incident?",
`**Answer:** Detect and acknowledge, assess impact, communicate (status page, stakeholders), mitigate quickly (rollback, scale, failover), resolve root cause, and run a blameless postmortem with action items.

Tip: Mitigate first.`, 'B', 'M'],

["Postmortems", "What makes a good blameless postmortem?",
`**Answer:** Timeline, impact, contributing factors (technical and process), what went well, what didn't, and tracked action items — focusing on systems, not individuals.

Tip: Track action items to completion.`, 'B', 'M'],

["Automation", "What tasks have you automated?",
`**Answer:** Environment provisioning, deployments, certificate renewals, backups and restores tests, scaling, patching, user onboarding, and cost cleanup of idle resources.

Tip: Time saved.`, 'B', 'E'],

["Scripting", "Which scripting languages do you use?",
`**Answer:** Bash for system tasks, Python for automation and APIs, PowerShell in Windows/Azure environments, and Go for tooling occasionally.

Tip: Practical examples.`, 'B', 'E'],

["Linux", "Which Linux skills matter for DevOps?",
`**Answer:** Processes and services (systemd), file permissions, networking tools (ss, curl, dig, tcpdump), logs (journalctl), package management, disk and memory troubleshooting (df, du, free, top), and shell scripting.

Tip: Troubleshooting commands.`, 'B', 'E'],

["Networking", "How do you troubleshoot slow network calls between services?",
`**Answer:** Check DNS resolution time, latency with traces, TLS handshakes, connection pooling, load balancer health and limits, packet loss, and service mesh configuration.

Tip: Tracing shows where time goes.`, 'D', 'M'],

["Artifacts", "How do you manage build artifacts?",
`**Answer:** Versioned, immutable artifacts stored in registries (container registries, Artifactory, Nexus, cloud artifact registries), built once and promoted through environments, with retention policies.

Tip: Build once, deploy many.`, 'B', 'M'],

["Environments", "How do you manage multiple environments?",
`**Answer:** Infrastructure as code with environment parameters, consistent configuration management, ephemeral preview environments for pull requests, and promotion pipelines.

Tip: Preview environments.`, 'B', 'M'],

["Feature Flags", "How do feature flags help DevOps?",
`**Answer:** Deploy code without releasing features, gradual rollouts, A/B tests, kill switches for problems, and trunk-based development.

Tip: Separate deploy from release.`, 'B', 'M'],

["Database", "How do you handle database changes in CI/CD?",
`**Answer:** Version-controlled migrations run in the pipeline, backward-compatible expand/contract patterns, automated testing on copies of data, backups before production migrations, and monitoring after.

Tip: Expand/contract.`, 'D', 'M'],

["Cost", "How can DevOps reduce cloud costs?",
`**Answer:** Auto-scaling, scheduled shutdown of non-prod, right-sizing, spot instances for CI runners, cleaning unused resources automatically, and cost visibility in dashboards.

Tip: Spot runners.`, 'B', 'M'],

["Behavioral", "Tell me about improving a delivery pipeline.",
`**Sample answer:** "Deployments took two hours and happened weekly with frequent failures. I containerized the services, built GitHub Actions pipelines with tests and canary deploys via Argo Rollouts. We now deploy multiple times a day in 12 minutes, and change failure rate dropped from 20% to 5%."

Tip: DORA improvements.`, 'B', 'M'],

["Behavioral", "Tell me about an incident you led.",
`**Sample answer:** "A config change caused 502s across services. I led rollback within 9 minutes, then we added config validation in CI and staged rollouts for config changes."

Tip: Speed and prevention.`, 'B', 'M'],

["Behavioral", "How do you get developers to adopt new tools or practices?",
`**Answer:** Solve their pain points, make the new way easier (templates, docs), pilot with willing teams, share results, and support them during adoption.

Tip: Make the right way easy.`, 'B', 'M'],

["AI", "How is AI used in DevOps?",
`**Answer:** AI assistants for writing pipelines and IaC, incident summarization and root-cause suggestions (AIOps), log anomaly detection, and code review assistance — with human verification.

Tip: AIOps.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior DevOps, SRE or platform engineering — building self-service platforms and reliability practices.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I improve delivery speed and reliability together — I've moved teams from weekly to daily deployments with lower failure rates through CI/CD, IaC and observability."

Tip: Proof.`, 'B', 'M'],

["Observability", "Monitoring vs observability?",
`**Answer:** Monitoring tracks known metrics and alerts on predefined conditions. Observability is the ability to understand unknown problems from telemetry (logs, metrics, traces) — asking new questions without shipping new code.

Tip: Known vs unknown unknowns.`, 'B', 'M'],

["Runbooks", "What makes a good runbook?",
`**Answer:** Clear trigger (which alert), diagnosis steps, mitigation actions, escalation contacts, and links to dashboards — kept current and ideally automated.

Tip: Automate runbook steps.`, 'B', 'M'],

["Config", "How do you manage application configuration?",
`**Answer:** Externalized config (environment variables, ConfigMaps, parameter stores), secrets separately in vaults, validated config schemas, and config changes deployed through pipelines.

Tip: Validate config in CI.`, 'B', 'M'],

["Service Mesh", "What is a service mesh?",
`**Answer:** Infrastructure (Istio, Linkerd) that manages service-to-service communication — mTLS, retries, timeouts, traffic splitting and observability — via sidecars or ambient mode, without changing application code.

Tip: Use only if complexity justifies it.`, 'D', 'S'],

["Compliance", "How do you meet compliance requirements in DevOps?",
`**Answer:** Automated evidence (pipeline logs, approvals, test results), change management through pull requests, access controls, audit logging, and policy-as-code checks.

Tip: Compliance as code.`, 'D', 'M'],

["On-call", "How do you make on-call sustainable?",
`**Answer:** Reduce noisy alerts, good runbooks, fair rotations, follow-the-sun where possible, compensating time off, and fixing recurring issues.

Tip: Alert hygiene.`, 'B', 'M'],

["Scenario", "Builds are failing randomly. What do you do?",
`**Answer:** Identify flaky tests or infrastructure issues from failure patterns, quarantine flaky tests, fix shared state or timing issues, stabilize runners, and track flake rates.

Tip: Flake tracking.`, 'B', 'M'],

["Scenario", "A team wants to deploy manually because pipelines are 'too slow'. How do you respond?",
`**Answer:** Measure where time goes, speed up the pipeline (caching, parallelism), keep safety checks, and show manual deployments' risks. Make the pipeline the fastest path.

Tip: Fix the pipeline.`, 'B', 'M'],

["Platform", "What is the difference between DevOps and platform engineering?",
`**Answer:** DevOps is a culture and set of practices; platform engineering builds internal developer platforms that provide self-service golden paths, so product teams can practice DevOps without each building their own tooling.

Tip: Platform as product.`, 'B', 'M']
];

QB['cl-devops'] = (QB['cl-devops'] || []).concat([
["Testing", "What is shift-left testing in DevOps?",
`**Answer:** Moving testing and quality checks earlier — unit and contract tests on every commit, static analysis and security scans in pull requests, and ephemeral environments for integration tests — so problems are caught when cheapest to fix.

Tip: Faster feedback.`, 'B', 'M'],
["Kubernetes", "How do you manage resource requests and limits for deployments?",
`**Answer:** Set requests from observed usage (with VPA recommendations or monitoring), memory limits to prevent runaway usage, be cautious with CPU limits to avoid throttling, and review regularly as workloads change.

Tip: Requests drive scheduling and cost.`, 'D', 'M']
]);
