// Rewritten Cloud & DevOps — DevOps Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix cl-devops-).
module.exports = {

'What are the DORA metrics?':
`**Why they ask:** they're the standard measure of delivery performance.

**Answer:**
"Four research-backed measures: deployment frequency, lead time for changes, change failure rate, and time to restore service. Recent DORA reports add reliability and deployment rework rate. On my last team we went from weekly deploys with a two-day lead time and a 20% change failure rate to several deploys a day, under four hours lead time, and about 5% failures."

Tip: Show your team's numbers.`,

'Explain CI vs continuous delivery vs continuous deployment.':
`**Why they ask:** terms people blur.

**Answer:**
"Continuous integration means developers merge small changes often and every change is automatically built and tested. Continuous delivery means every change that passes the pipeline is releasable — production deployment is one approval click away. Continuous deployment removes the click: every passing change goes to production automatically."

Tip: Clear distinctions.`,

'What stages would you put in a CI/CD pipeline?':
`**Why they ask:** pipeline design.

**Answer:**
"Checkout, lint and static analysis, unit tests, build the artifact or container, security scans — SAST, dependencies, the image — integration tests, deploy to staging, smoke and acceptance tests, an approval gate if needed, a progressive production deploy with canary or blue-green, then post-deploy verification with automatic rollback. The cheap, fast checks go first so developers get feedback in minutes."

Tip: Fast feedback early in the pipeline.`,

'Which CI/CD tools have you used?':
`**Why they ask:** hands-on breadth.

**Answer:**
"GitHub Actions and GitLab CI for most pipelines, Jenkins on a legacy platform, Azure DevOps Pipelines in a Microsoft shop, and Argo CD for GitOps deployments to Kubernetes. The one I'm proudest of is a reusable GitHub Actions workflow that 30 services now share."

Tip: Name what you built.`,

'Blue-green vs canary vs rolling deployments?':
`**Why they ask:** release safety.

**Answer:**
"Rolling replaces instances gradually. Blue-green runs the new version alongside the old and switches all traffic at once, so rollback is just switching back. Canary routes a small slice — say 5% — to the new version, watches error rates and latency, then expands. Feature flags go further and decouple deployment from release entirely. My favorite is canary with automated analysis through Argo Rollouts or Flagger."

Tip: Canary with automated analysis.`,

'How do you roll back a bad deployment?':
`**Why they ask:** recovery speed.

**Answer:**
"Ideally automatically, when health checks or error-rate thresholds fail. Otherwise redeploy the previous immutable artifact, switch traffic back in blue-green, or flip the feature flag off. The catch is the database: schema changes must be backward compatible, or the old code can't run against the new schema and rollback fails."

Tip: Backward-compatible migrations.`,

'What is GitOps?':
`**Why they ask:** a modern deployment model.

**Answer:**
"Git is the source of truth for infrastructure and application configuration. An agent like Argo CD or Flux runs in the cluster and continuously reconciles actual state with the repository. Every change is a pull request, so you get review, an audit trail, and rollback by reverting a commit. It's pull-based — the CI system never needs cluster credentials."

Tip: Pull-based deployment.`,

'What branching strategy do you prefer?':
`**Why they ask:** delivery flow.

**Answer:**
"Trunk-based development with short-lived branches — merged within a day or two — and feature flags for incomplete work. GitFlow still fits scheduled releases with multiple supported versions, like on-prem software. Trunk-based correlates with better DORA performance because it avoids painful long merges."

Tip: Short-lived branches.`,

'Why infrastructure as code?':
`**Why they ask:** a core DevOps practice.

**Answer:**
"Repeatable, versioned, reviewed infrastructure; new environments in minutes rather than weeks; drift prevention; and disaster recovery because you can rebuild from code. Tools are Terraform or OpenTofu, CloudFormation, Bicep or Pulumi, plus Ansible for configuration. I run scheduled terraform plan jobs to detect drift when someone clicks in the console."

Tip: Mention drift detection.`,

'Terraform vs Ansible?':
`**Why they ask:** tool fit.

**Answer:**
"Terraform declaratively provisions infrastructure — networks, databases, clusters — and tracks it in state. Ansible is mainly configuration management and orchestration — installing and configuring software on servers — agentless over SSH. They complement each other: Terraform creates the VM, Ansible configures it."

Tip: Provisioning vs configuration.`,

'What is Docker and why use it?':
`**Why they ask:** container basics.

**Answer:**
"Docker packages an application with its dependencies into an image that runs the same on a laptop, in CI and in production. It gives environment consistency, isolation, fast startup and easy scaling with an orchestrator — the end of 'works on my machine'."

Tip: Image best practices.`,

'How do you write a good Dockerfile?':
`**Why they ask:** practical container skill.

**Answer:**
"Small, trusted base images — distroless or slim — multi-stage builds so compilers and build tools never reach the final image, layer ordering for caching with dependencies copied before source, running as non-root, pinned versions, no secrets baked in, and a health check. Multi-stage alone took one of our Node images from 1.1 GB to 180 MB."

Tip: Multi-stage builds.`,

'Explain core Kubernetes objects.':
`**Why they ask:** Kubernetes literacy.

**Answer:**
"Pods are the smallest unit. Deployments manage replicas and rolling updates for stateless apps. Services give stable networking. Ingress or the Gateway API handle HTTP routing. ConfigMaps and Secrets hold configuration. StatefulSets give stable identity and storage for databases. DaemonSets run one pod per node — log agents, for example. Jobs and CronJobs run batch work, and namespaces provide isolation."

Tip: Deployment vs StatefulSet.`,

'How do you troubleshoot a pod in CrashLoopBackOff?':
`**Why they ask:** daily Kubernetes reality.

**Answer:**
"kubectl describe pod for events, then kubectl logs --previous to see why the last container died. Then check: OOMKilled from memory limits, a liveness probe that's too aggressive, missing config or secrets, a wrong image or command, or a dependency like the database that isn't reachable at startup. OOMKills and probes cause most of them."

Tip: OOMKilled and probes are common.`,

'What are liveness, readiness and startup probes?':
`**Why they ask:** probe misconfiguration causes outages.

**Answer:**
"Readiness decides whether a pod receives traffic — failing it just removes the pod from the Service. Liveness restarts a container that's stuck. Startup delays the other probes for slow-starting apps like a Java service that needs 90 seconds. A liveness probe that checks the database can restart every pod when the database blips — that's a classic self-inflicted outage."

Tip: Readiness vs liveness.`,

'How do you manage Kubernetes manifests?':
`**Why they ask:** config at scale.

**Answer:**
"Helm charts for templated, versioned packages; Kustomize for environment overlays on plain YAML; and a GitOps tool to deploy them. Values per environment live in Git, and CI runs linting plus policy checks — like Kyverno or Conftest — before anything merges."

Tip: Helm vs Kustomize.`,

'How do you set up monitoring and alerting?':
`**Why they ask:** operability.

**Answer:**
"Metrics with Prometheus, CloudWatch or Datadog; logs with ELK or OpenSearch, Loki or Splunk; traces with OpenTelemetry and Jaeger; Grafana dashboards. Alerts fire on SLO-based symptoms — error rate and latency users feel — each with a runbook link. When I took over one rotation, cutting 140 noisy alerts to 25 meaningful ones ended the 3 a.m. false pages."

Tip: Runbooks with alerts.`,

'What is DevSecOps?':
`**Why they ask:** security in the pipeline.

**Answer:**
"Building security into delivery: SAST, dependency or SCA scanning, secrets scanning, container image scanning, IaC scanning, DAST, policy as code, signed artifacts and SBOMs. The point is shifting security left without slowing teams — findings show up in the pull request, not in an audit six months later."

Tip: Supply chain security.`,

'How do you manage secrets in pipelines?':
`**Why they ask:** pipelines are a prime target.

**Answer:**
"Secrets live in a vault — HashiCorp Vault, AWS Secrets Manager, Azure Key Vault — or the CI secret store. For cloud access I use OIDC federation so the pipeline gets short-lived credentials and there are no long-lived keys to leak. Secrets are masked in logs, scoped narrowly per environment, and rotated."

Tip: OIDC federation.`,

'What is software supply chain security?':
`**Why they ask:** a fast-growing threat area.

**Answer:**
"Protecting everything that goes into a build: verified dependencies and lockfiles, SBOMs, signed artifacts with Sigstore or cosign, build provenance per the SLSA framework, protected branches, least-privilege CI runners, and scanning for malicious packages. Incidents like compromised packages showed the build pipeline is as important as the code."

Tip: SLSA framework.`,

'How do you keep pipelines fast?':
`**Why they ask:** slow pipelines get bypassed.

**Answer:**
"Parallelize jobs, cache dependencies and Docker layers, run only affected tests in monorepos, use bigger runners where it pays, move slow end-to-end suites later, and fix flaky tests. On one repo caching plus test splitting took the pipeline from 38 minutes to 11."

Tip: Caching and parallelism.`,

'How do you handle a production incident?':
`**Why they ask:** calm under pressure.

**Answer:**
"Detect and acknowledge, assess impact, communicate — status page and stakeholders — then mitigate fast: roll back, scale or fail over. Root cause comes after service is restored. Then a blameless postmortem with action items that are tracked to completion."

Tip: Mitigate first.`,

'What makes a good blameless postmortem?':
`**Why they ask:** learning culture.

**Answer:**
"A timeline, customer impact, contributing factors both technical and process, what went well, what didn't, and owned action items with dates. It focuses on systems, not individuals — 'why did the system allow one command to delete prod?' rather than 'who ran it?'"

Tip: Track action items to completion.`,

'What tasks have you automated?':
`**Why they ask:** automation mindset.

**Answer:**
"Environment provisioning, deployments, certificate renewals, backup restore tests, scaling, patching, user onboarding, and nightly cleanup of idle resources. The certificate automation alone removed about 20 manual renewals a quarter and an entire class of outages."

Tip: Time saved.`,

'Which scripting languages do you use?':
`**Why they ask:** practical skill.

**Answer:**
"Bash for system tasks, Python for automation and API work — for example a script that reconciles cloud tags against our CMDB — PowerShell in Windows and Azure environments, and occasionally Go for CLI tooling."

Tip: Practical examples.`,

'Which Linux skills matter for DevOps?':
`**Why they ask:** troubleshooting foundation.

**Answer:**
"Processes and services with systemd, file permissions, networking tools — ss, curl, dig, tcpdump — logs with journalctl, package management, disk and memory troubleshooting with df, du, free and top, and shell scripting. If a disk fills up, du -sh across directories finds the culprit in a minute."

Tip: Troubleshooting commands.`,

'How do you troubleshoot slow network calls between services?':
`**Why they ask:** distributed debugging.

**Answer:**
"Start with a trace to see where time actually goes. Then check DNS resolution time, TLS handshakes — a missing connection pool means a new handshake on every call — load balancer health and limits, packet loss, and service mesh retries or timeouts. Once it was a client creating a new HTTPS connection per request; pooling cut p99 from 800 ms to 120."

Tip: Tracing shows where time goes.`,

'How do you manage build artifacts?':
`**Why they ask:** release integrity.

**Answer:**
"Versioned, immutable artifacts in a registry — container registries, Artifactory, Nexus — built once and promoted through dev, staging and production, so what we tested is exactly what we ship. Plus retention policies so the registry doesn't grow forever."

Tip: Build once, deploy many.`,

'How do you manage multiple environments?':
`**Why they ask:** consistency.

**Answer:**
"Infrastructure as code with environment parameters, consistent configuration management, ephemeral preview environments spun up per pull request and destroyed on merge, and promotion pipelines between environments."

Tip: Preview environments.`,

'How do feature flags help DevOps?':
`**Why they ask:** release control.

**Answer:**
"They let us deploy code without releasing features, roll out gradually — 1%, 10%, 100% — run A/B tests, kill a misbehaving feature in seconds without a deploy, and support trunk-based development. The discipline is cleaning up old flags."

Tip: Separate deploy from release.`,

'How do you handle database changes in CI/CD?':
`**Why they ask:** the hardest part of continuous delivery.

**Answer:**
"Version-controlled migrations run by the pipeline, the expand-and-contract pattern — add the new column, deploy code that writes both, backfill, switch reads, then drop the old column later — testing on copies of data, backups before production migrations, and monitoring afterward."

Tip: Expand/contract.`,

'How can DevOps reduce cloud costs?':
`**Why they ask:** cost awareness.

**Answer:**
"Autoscaling, scheduled shutdown of non-prod at night and weekends — that's about 65% of the hours — right-sizing, spot instances for CI runners, automated cleanup of unused resources, and cost dashboards per team."

Tip: Spot runners.`,

'Tell me about improving a delivery pipeline.':
`**Why they ask:** proof.

**Answer:**
"Deployments took two hours, happened weekly and failed often. I containerized the services and built GitHub Actions pipelines with tests and canary deploys via Argo Rollouts. We now deploy several times a day in 12 minutes, and change failure rate dropped from 20% to 5%."

Tip: DORA improvements.`,

'Tell me about an incident you led.':
`**Why they ask:** incident leadership.

**Answer:**
"A config change caused 502s across services. I led the rollback within 9 minutes, then we added config validation in CI and staged rollouts for config changes, the same as code."

Tip: Speed and prevention.`,

'How do you get developers to adopt new tools or practices?':
`**Why they ask:** influence.

**Answer:**
"Solve a pain they actually feel, make the new way easier than the old — templates, docs, a one-command setup — pilot with a willing team, share their results, and support people during adoption. Mandates without that rarely stick."

Tip: Make the right way easy.`,

'How is AI used in DevOps?':
`**Why they ask:** current trends.

**Answer:**
"AI assistants for writing pipelines and IaC, incident summarization and root-cause suggestions in AIOps tools, log anomaly detection, and code review help. All with human verification — an AI-written Terraform change still goes through plan and review."

Tip: AIOps.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior DevOps, SRE or platform engineering — building self-service platforms and reliability practices that many teams use."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I improve delivery speed and reliability together — I've moved teams from weekly to daily deployments with lower failure rates through CI/CD, infrastructure as code and observability."

Tip: Proof.`,

'Monitoring vs observability?':
`**Why they ask:** conceptual clarity.

**Answer:**
"Monitoring tracks known metrics and alerts on conditions we predicted. Observability is the ability to understand problems we didn't predict, from rich telemetry — logs, metrics and traces — asking new questions without shipping new code. Monitoring answers 'is it broken?'; observability answers 'why?'"

Tip: Known vs unknown unknowns.`,

'What makes a good runbook?':
`**Why they ask:** on-call quality.

**Answer:**
"A clear trigger — which alert — diagnosis steps, mitigation actions, escalation contacts, and links to the right dashboards. Kept current, and ideally the repetitive steps automated so the runbook becomes a button."

Tip: Automate runbook steps.`,

'How do you manage application configuration?':
`**Why they ask:** config errors cause outages.

**Answer:**
"Externalized config — environment variables, ConfigMaps, parameter stores — secrets separately in a vault, schemas that validate config in CI, and config changes deployed through pipelines like code, not edited live."

Tip: Validate config in CI.`,

'What is a service mesh?':
`**Why they ask:** advanced networking.

**Answer:**
"Infrastructure like Istio or Linkerd that handles service-to-service communication — mTLS, retries, timeouts, traffic splitting and observability — through sidecars or ambient mode, without application code changes. It adds real complexity, so I use it only when we need those features across many services."

Tip: Use only if complexity justifies it.`,

'How do you meet compliance requirements in DevOps?':
`**Why they ask:** regulated environments.

**Answer:**
"Automated evidence — pipeline logs, approvals, test results — change management through pull requests with required reviews, access controls, audit logging and policy-as-code checks. Auditors get a report instead of screenshots."

Tip: Compliance as code.`,

'How do you make on-call sustainable?':
`**Why they ask:** retention and reliability.

**Answer:**
"Reduce noisy alerts, write good runbooks, keep rotations fair, use follow-the-sun where possible, give time off after rough nights, and fix recurring issues instead of re-paging on them."

Tip: Alert hygiene.`,

'Builds are failing randomly. What do you do?':
`**Why they ask:** flakiness kills trust.

**Answer:**
"Look at failure patterns to separate flaky tests from infrastructure problems, quarantine flaky tests so they don't block merges, fix shared state or timing issues, stabilize runners, and track the flake rate so it stays visible."

Tip: Flake tracking.`,

"A team wants to deploy manually because pipelines are 'too slow'. How do you respond?":
`**Why they ask:** pragmatism.

**Answer:**
"They have a point, so I'd measure where the time goes and speed it up — caching, parallelism — while keeping the safety checks, and show the risk of manual deploys with real incident data. The goal is making the pipeline the fastest path."

Tip: Fix the pipeline.`,

'What is the difference between DevOps and platform engineering?':
`**Why they ask:** industry evolution.

**Answer:**
"DevOps is a culture and set of practices. Platform engineering builds an internal developer platform with self-service golden paths, so product teams can practice DevOps without each building their own tooling."

Tip: Platform as product.`,

'What is shift-left testing in DevOps?':
`**Why they ask:** quality strategy.

**Answer:**
"Moving testing earlier — unit and contract tests on every commit, static analysis and security scans in pull requests, ephemeral environments for integration tests — so problems are caught when they're cheapest to fix."

Tip: Faster feedback.`,

'How do you manage resource requests and limits for deployments?':
`**Why they ask:** cost and stability.

**Answer:**
"Set requests from observed usage — VPA recommendations or monitoring data — set memory limits to stop runaways, be cautious with CPU limits because they cause throttling, and review regularly. Requests drive scheduling and therefore cost; over-requesting by 2x means paying for twice the nodes."

Tip: Requests drive scheduling and cost.`,

};
