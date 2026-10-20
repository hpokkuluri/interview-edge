// Rewritten Cloud & DevOps — Kubernetes Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix cl-k8s-).
module.exports = {

'Deployment vs StatefulSet vs DaemonSet?':
`**Why they ask:** choosing the right workload controller.

**Answer:**
"A Deployment runs stateless, interchangeable replicas with rolling updates — web APIs. A StatefulSet gives each pod a stable identity, ordered rollout and its own persistent volume — Postgres, Kafka, Elasticsearch, where pod-0 must stay pod-0 with its data. A DaemonSet runs exactly one pod per node — log shippers like Fluent Bit, node exporters, the CNI agent."

Tip: Examples for each.`,

'How does Kubernetes networking work?':
`**Why they ask:** networking is where most debugging happens.

**Answer:**
"Every pod gets its own IP, and pods talk to each other without NAT across a flat network that the CNI plugin provides — Calico, Cilium or a cloud CNI. Services give a stable virtual IP and DNS name that load-balances to healthy pods — ClusterIP, NodePort or LoadBalancer. Ingress or the Gateway API route external HTTP traffic into Services."

Tip: CNI plugins.`,

'Explain Service types.':
`**Why they ask:** exposure basics.

**Answer:**
"ClusterIP is the default — an internal-only virtual IP. NodePort exposes the service on a port on every node. LoadBalancer provisions a cloud load balancer in front. ExternalName is just a DNS alias to something outside. And a headless service — clusterIP set to None — returns pod IPs directly, which StatefulSets use so clients can reach postgres-0 specifically."

Tip: Headless services.`,

'Ingress vs Gateway API?':
`**Why they ask:** current direction of the ecosystem.

**Answer:**
"Ingress is the older, simpler API for HTTP routing, implemented by controllers like NGINX or cloud load balancers, with lots of features hidden in annotations. Gateway API is the newer standard: it separates roles — the platform team owns GatewayClass and Gateway, app teams own HTTPRoutes — and natively supports header matching, traffic splitting and more protocols. New platforms should start with Gateway API."

Tip: Gateway API is the future.`,

'What are network policies?':
`**Why they ask:** cluster segmentation.

**Answer:**
"Rules that control pod-to-pod and pod-to-external traffic using labels and namespaces. By default everything can talk to everything, so I apply a default-deny policy per namespace and then allow only required flows — the frontend can reach the API on 8080, the API can reach the database on 5432. It needs a CNI that enforces them, like Calico or Cilium."

Tip: Default deny.`,

'How does persistent storage work in Kubernetes?':
`**Why they ask:** stateful workloads.

**Answer:**
"An app requests storage with a PersistentVolumeClaim. A StorageClass defines the provisioner — a CSI driver for cloud disks or file storage — and parameters like disk type. The volume is provisioned and bound to the claim. Access modes matter — ReadWriteOnce for a block disk on one node, ReadWriteMany for shared file storage — and so does the reclaim policy: Retain keeps the data if the claim is deleted, Delete removes it."

Tip: CSI drivers.`,

'ConfigMaps vs Secrets?':
`**Why they ask:** config hygiene.

**Answer:**
"ConfigMaps hold non-sensitive configuration; Secrets hold sensitive data. But Secrets are only base64-encoded, not encrypted by default — so I enable encryption at rest for etcd and usually pull real secrets from an external manager through the External Secrets Operator or the CSI secrets driver. Both can be mounted as files or environment variables; files update without a restart."

Tip: Secrets aren't encrypted by default.`,

'What are requests and limits?':
`**Why they ask:** resource management affects stability and cost.

**Answer:**
"Requests are the guaranteed amount the scheduler uses to place pods. Limits cap usage: exceed the memory limit and the container is OOMKilled; hit the CPU limit and it's throttled. I set requests from actual usage and I'm careful with CPU limits on latency-sensitive services because throttling causes latency spikes even when the node has spare CPU. QoS classes follow: Guaranteed when requests equal limits, Burstable, and BestEffort with neither."

Tip: CPU throttling issue.`,

'How do you control where pods run?':
`**Why they ask:** scheduling control.

**Answer:**
"nodeSelector for simple matching, node affinity for richer rules, pod anti-affinity to keep replicas apart, taints and tolerations to dedicate nodes — GPU nodes only accept GPU workloads — topology spread constraints to spread replicas evenly across zones, and priority classes so critical pods can preempt others. Topology spread is the one I set on every production deployment."

Tip: Topology spread for HA.`,

'How does autoscaling work in Kubernetes?':
`**Why they ask:** elasticity at both layers.

**Answer:**
"Horizontal Pod Autoscaler adds pod replicas based on CPU, memory or custom metrics. Vertical Pod Autoscaler adjusts requests. Cluster Autoscaler or Karpenter adds nodes when pods can't be scheduled and removes empty ones. KEDA scales on event sources like queue length — even down to zero. A typical worker setup is KEDA on SQS depth plus Karpenter for nodes."

Tip: Karpenter and KEDA.`,

'Explain liveness, readiness and startup probes.':
`**Why they ask:** probes cause many self-inflicted outages.

**Answer:**
"Readiness controls whether a pod gets traffic. Liveness restarts a stuck container. Startup protects slow-starting apps from being killed by liveness before they're up. The key rule: liveness should never check external dependencies — if the database blips and every pod's liveness fails, Kubernetes restarts the whole fleet and turns a blip into an outage."

Tip: Liveness shouldn't check dependencies.`,

'A pod is Pending. What do you check?':
`**Why they ask:** troubleshooting method.

**Answer:**
"kubectl describe pod — the events usually say it directly: insufficient CPU or memory, a node selector or affinity nothing matches, taints without tolerations, an unbound PVC — often a zone mismatch — a namespace quota exceeded, or image pull secrets. Then I check the cluster autoscaler or Karpenter logs to see why it didn't add a node."

Tip: Events tell the story.`,

'How do you debug CrashLoopBackOff?':
`**Why they ask:** daily reality.

**Answer:**
"kubectl logs --previous for the crashed container's output, kubectl describe for the exit code — 137 means OOMKilled, 1 usually an app error — then config and secrets, the command and entrypoint, probes, and startup dependencies. If the image has no shell, kubectl debug attaches an ephemeral debug container."

Tip: Exit code 137.`,

"A service isn't reachable. How do you troubleshoot?":
`**Why they ask:** layered debugging.

**Answer:**
"Check pods are Ready, then kubectl get endpoints — empty endpoints almost always means the Service selector doesn't match the pod labels. Then port versus targetPort, DNS resolution from a debug pod, network policies blocking traffic, and finally the ingress or gateway routing."

Tip: Endpoints empty = selector mismatch.`,

'How do you secure a Kubernetes cluster?':
`**Why they ask:** security depth.

**Answer:**
"RBAC with least privilege and no cluster-admin for humans day to day, Pod Security Standards at the restricted level, network policies, scanned and signed images, admission policies with Kyverno or OPA, secrets encryption plus an external secret store, a private API endpoint, audit logging, regular upgrades, and runtime detection with Falco."

Tip: Pod Security Standards.`,

'What is RBAC in Kubernetes?':
`**Why they ask:** access control basics.

**Answer:**
"Roles and ClusterRoles define permissions as verbs on resources — get, list, create on pods. RoleBindings and ClusterRoleBindings grant them to users, groups or service accounts. I scope to namespaces wherever possible — a team gets edit in its own namespace, not cluster-wide — and bind to groups from the identity provider, not individuals."

Tip: Namespace scoping.`,

'How do pods access cloud resources securely?':
`**Why they ask:** credential hygiene.

**Answer:**
"Workload identity — IRSA or EKS Pod Identity on AWS, Azure Workload Identity, GKE Workload Identity — maps a Kubernetes service account to a cloud IAM role. The pod gets short-lived credentials automatically; no static keys in Secrets."

Tip: No secrets for cloud access.`,

'What is Helm and how do you use it?':
`**Why they ask:** packaging.

**Answer:**
"Helm is Kubernetes' package manager. Charts template the manifests, values files customize them per environment, and Helm manages releases with upgrades and rollbacks. I keep charts simple — heavy templating logic becomes unreadable — version them, and run helm lint plus template rendering tests in CI."

Tip: Values per environment.`,

'How do you deploy to Kubernetes with GitOps?':
`**Why they ask:** modern delivery.

**Answer:**
"Manifests or Helm values live in Git. Argo CD or Flux syncs the cluster to Git, flags drift, and with Argo Rollouts or Flagger does progressive delivery. Every change is a pull request, so rollback is a revert."

Tip: Argo Rollouts for canaries.`,

'How do you upgrade a cluster safely?':
`**Why they ask:** upgrades are routine risk.

**Answer:**
"Read the release notes and scan for deprecated APIs with a tool like Pluto, upgrade non-prod first, then the control plane, then node pools with surge or blue-green node groups, respecting PodDisruptionBudgets. Update add-ons — CNI, CoreDNS, ingress controller — and watch dashboards throughout."

Tip: PDBs.`,

'What is a PodDisruptionBudget?':
`**Why they ask:** availability during maintenance.

**Answer:**
"It limits how many pods of an app can be voluntarily disrupted at once during drains and upgrades — for example minAvailable 2 out of 3 replicas — so a node upgrade never takes the whole service down."

Tip: Upgrade safety.`,

'How do you monitor Kubernetes?':
`**Why they ask:** operability.

**Answer:**
"Prometheus with kube-state-metrics, node-exporter and cAdvisor, Grafana dashboards, logs through Fluent Bit to a backend, traces with OpenTelemetry. Alerts on node pressure, restart loops, pending pods, API server latency and application SLOs."

Tip: kube-state-metrics.`,

'What is an operator?':
`**Why they ask:** extending Kubernetes.

**Answer:**
"A custom controller plus custom resources that encode operational knowledge — deploying, scaling, backing up, upgrading — for complex apps like databases. You declare 'a Postgres cluster with three replicas and nightly backups' and the operator makes it so. Built with Operator SDK or Kubebuilder."

Tip: Custom resources.`,

'Why is etcd critical and how do you protect it?':
`**Why they ask:** control plane understanding.

**Answer:**
"etcd stores all cluster state; lose it and you lose the cluster's configuration. Back it up regularly — managed services do this for you — encrypt secrets at rest, run an odd number of members, usually three or five, for quorum, and monitor disk latency because etcd is very sensitive to slow disks."

Tip: Quorum.`,

'How do you isolate teams in a shared cluster?':
`**Why they ask:** multi-tenancy.

**Answer:**
"Namespaces with RBAC, resource quotas and limit ranges, network policies, policy enforcement, separate node pools for sensitive workloads, and cost allocation labels. That's soft isolation; for strong isolation — untrusted code or strict compliance — separate clusters."

Tip: Soft vs hard isolation.`,

'When would you use a service mesh?':
`**Why they ask:** complexity judgment.

**Answer:**
"When we need mTLS everywhere, fine-grained traffic management — canaries, retries, timeouts — and consistent telemetry across many services. Istio, including ambient mode without sidecars, or Linkerd for simplicity. If we have ten services and no mTLS requirement, the complexity isn't worth it."

Tip: Ambient mode reduces sidecar overhead.`,

'How do you reduce Kubernetes costs?':
`**Why they ask:** cost ownership.

**Answer:**
"Right-size requests using VPA recommendations, improve bin-packing, use Karpenter or the cluster autoscaler with spot instances, remove idle workloads, scale non-prod down off-hours, and give teams visibility with Kubecost or OpenCost. On one cluster, average CPU requests were 4x actual usage; right-sizing cut the node count by 40%."

Tip: Requests drive cost.`,

'How do you run batch jobs in Kubernetes?':
`**Why they ask:** non-web workloads.

**Answer:**
"Jobs and CronJobs with backoff limits, activeDeadlineSeconds so nothing runs forever, a concurrency policy — Forbid if two runs mustn't overlap — resource requests, and ttlSecondsAfterFinished for cleanup. For multi-step workflows, Argo Workflows."

Tip: Concurrency policy.`,

'Should you run databases on Kubernetes?':
`**Why they ask:** pragmatism.

**Answer:**
"It's possible with mature operators — CloudNativePG, Strimzi for Kafka — and real expertise. But for most teams a managed cloud database is simpler and more reliable, so that's my default unless there's a portability or cost reason."

Tip: Pragmatic answer.`,

'How do you manage container images securely?':
`**Why they ask:** supply chain.

**Answer:**
"Minimal base images, scanning in CI and in the registry, signing with cosign and verifying signatures at admission, pinning by digest, private registries with access control, and regular rebuilds to pick up patches."

Tip: Image signing.`,

'Which certifications are valuable?':
`**Why they ask:** credentials.

**Answer:**
"CKA for administrators, CKAD for application developers, and CKS for security, from the CNCF and Linux Foundation. They're hands-on, performance-based exams, which is why they're respected."

Tip: Performance-based exams.`,

'Tell me about a Kubernetes problem you solved.':
`**Why they ask:** proof.

**Answer:**
"Latency spikes turned out to be CPU throttling from tight CPU limits. I analyzed the throttling metrics, removed CPU limits for latency-sensitive services while keeping requests accurate, and p99 latency dropped 60%."

Tip: Metrics-driven.`,

'Tell me about a cluster migration or upgrade you led.':
`**Why they ask:** delivery at scale.

**Answer:**
"I migrated 120 services from self-managed clusters to EKS with Karpenter and Argo CD. With a blue-green cluster cutover namespace by namespace, we had zero customer-facing downtime and cut node costs 35%."

Tip: Scale and safety.`,

'How do you help developers use Kubernetes effectively?':
`**Why they ask:** enablement.

**Answer:**
"Templates and Helm charts with sane defaults for probes and resources, documentation, dashboards per service, office hours, and ideally a platform that hides most of Kubernetes so developers think in services, not YAML."

Tip: Enablement.`,

'How do you run AI/GPU workloads on Kubernetes?':
`**Why they ask:** growing demand.

**Answer:**
"GPU node pools with the NVIDIA device plugin, taints and tolerations so only GPU workloads land there, GPU sharing with MIG or time-slicing, autoscaling, model serving with KServe or vLLM, and job queueing for training with Kueue. Idle GPUs are very expensive, so utilization monitoring matters."

Tip: GPU utilization is costly.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward platform engineering or SRE leadership — multi-cluster platforms and developer experience."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I run secure, reliable, cost-efficient Kubernetes platforms — a zero-downtime migration of 120 services, 35% lower node costs, and templates developers actually like using."

Tip: Proof.`,

'What are labels and selectors?':
`**Why they ask:** the glue of Kubernetes.

**Answer:**
"Labels are key-value metadata on objects; selectors match them to connect Services to pods, Deployments to ReplicaSets, and policies to targets. I use the standard app.kubernetes.io labels — name, instance, version, part-of — so tooling works consistently."

Tip: Standard labels.`,

'How does a rolling update work?':
`**Why they ask:** deployment mechanics.

**Answer:**
"The Deployment creates a new ReplicaSet and shifts pods gradually according to maxSurge — how many extra pods are allowed — and maxUnavailable — how many can be down — waiting for readiness at each step. kubectl rollout undo goes back to the previous ReplicaSet."

Tip: maxSurge/maxUnavailable.`,

'What are namespaces used for?':
`**Why they ask:** organization basics.

**Answer:**
"Logical isolation of resources by team, environment or app, with scoped RBAC, quotas and policies. On their own they're not a hard security boundary — pods in different namespaces can still talk unless network policies stop them."

Tip: Not hard isolation.`,

'What are init and sidecar containers?':
`**Why they ask:** pod patterns.

**Answer:**
"Init containers run to completion before the app starts — running migrations or waiting for a dependency. Sidecars run alongside the app — proxies, log shippers. Kubernetes now has native sidecars, which start before and stop after the main container, fixing old issues like Jobs never completing."

Tip: Native sidecars.`,

'How does DNS work in Kubernetes?':
`**Why they ask:** a common source of intermittent failures.

**Answer:**
"CoreDNS resolves names like my-svc.my-namespace.svc.cluster.local to ClusterIPs, and pods get their DNS config automatically. The default ndots of 5 means an external name like api.stripe.com is tried against several search domains first, multiplying lookups — lowering ndots or using fully qualified names with a trailing dot fixes a lot of latency."

Tip: ndots and search domains can affect performance.`,

'What are admission controllers?':
`**Why they ask:** policy enforcement.

**Answer:**
"Plugins that intercept API requests and validate or mutate objects before they're stored — Pod Security Admission, policy engines like Kyverno or Gatekeeper, and mutating webhooks that inject sidecars. It's the enforcement point for 'no privileged pods' or 'every pod needs resource requests'."

Tip: Policy enforcement point.`,

'How do you back up Kubernetes workloads?':
`**Why they ask:** recovery.

**Answer:**
"Velero for cluster resources and volume snapshots, the GitOps repo as the source of manifests, and application-level backups for databases. And restore tests — a backup nobody has restored is unproven."

Tip: Restore testing.`,

'Nodes keep running out of memory. What do you do?':
`**Why they ask:** stability troubleshooting.

**Answer:**
"Find pods without memory requests or limits and pods that leak, set accurate requests, add LimitRanges so new pods get defaults, watch eviction events, right-size node types, and get the leaking applications fixed."

Tip: Requests discipline.`,

'Deployments are slow because images are huge. How do you fix it?':
`**Why they ask:** practical performance.

**Answer:**
"Slim the images with multi-stage builds and smaller bases, cache or pre-pull common images on nodes, keep the registry in the same region as the clusters, and consider lazy-loading image technologies. Going from 2 GB to 200 MB images cut our pod start time from minutes to seconds."

Tip: Image size matters.`,

'What is Karpenter?':
`**Why they ask:** modern node autoscaling.

**Answer:**
"An open-source node autoscaler, originally from AWS, that provisions right-sized nodes directly from pending pods' requirements instead of scaling fixed node groups. It's faster and more flexible than Cluster Autoscaler, and its consolidation feature replaces under-used nodes with cheaper ones."

Tip: Consolidation feature.`,

'What are ResourceQuotas and LimitRanges?':
`**Why they ask:** multi-tenancy controls.

**Answer:**
"ResourceQuotas cap totals per namespace — CPU, memory, object counts. LimitRanges set default and min/max requests and limits for containers in a namespace, so a pod deployed without requests still gets sensible ones."

Tip: Multi-tenancy controls.`,

'Kyverno vs OPA Gatekeeper?':
`**Why they ask:** policy tooling.

**Answer:**
"Both enforce policy through admission control. Kyverno uses Kubernetes-native YAML and can also mutate and generate resources, so it's easy for platform teams. Gatekeeper uses Rego, which is more powerful and reusable beyond Kubernetes but has a learning curve. Team skills usually decide."

Tip: Team skills decide.`,

};
