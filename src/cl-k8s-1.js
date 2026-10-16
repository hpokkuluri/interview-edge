// Kubernetes Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cl-k8s'] = [
["Architecture", "Explain Kubernetes architecture.",
`**Why they ask:** foundational.

**Answer:** **Control plane:** kube-apiserver (front door for all operations), etcd (cluster state store), kube-scheduler (assigns pods to nodes), controller-manager (reconciliation loops), cloud-controller-manager. **Nodes:** kubelet (runs pods), container runtime (containerd), kube-proxy (service networking) or eBPF-based alternatives. Everything works by declaring desired state and controllers reconciling actual state.

Tip: Reconciliation loop concept.`, 'B', 'E'],

["Objects", "Deployment vs StatefulSet vs DaemonSet?",
`**Answer:** **Deployment:** stateless replicas with rolling updates. **StatefulSet:** stable identities, ordered deployment and persistent volumes per pod — databases, Kafka. **DaemonSet:** one pod per node — logging agents, monitoring, CNI.

Tip: Examples for each.`, 'B', 'E'],

["Networking", "How does Kubernetes networking work?",
`**Answer:** Every pod gets its own IP; pods communicate without NAT (flat network via the CNI plugin — Calico, Cilium, cloud CNIs). Services provide stable virtual IPs and DNS names load-balancing to pods (ClusterIP, NodePort, LoadBalancer). Ingress or Gateway API route external HTTP traffic.

Tip: CNI plugins.`, 'B', 'M'],

["Networking", "Explain Service types.",
`**Answer:** **ClusterIP:** internal-only virtual IP (default). **NodePort:** exposes on each node's port. **LoadBalancer:** provisions a cloud load balancer. **ExternalName:** DNS alias. Headless services (clusterIP: None) give direct pod DNS for StatefulSets.

Tip: Headless services.`, 'B', 'M'],

["Networking", "Ingress vs Gateway API?",
`**Answer:** Ingress is the older API for HTTP routing via controllers (NGINX, cloud). Gateway API is the newer, more expressive standard with role separation (GatewayClass, Gateway, HTTPRoute), supporting richer traffic management.

Tip: Gateway API is the future.`, 'D', 'M'],

["Networking", "What are network policies?",
`**Answer:** Rules controlling pod-to-pod and pod-to-external traffic by labels and namespaces. By default all traffic is allowed; apply default-deny policies and allow only required flows. Requires a CNI that supports them.

Tip: Default deny.`, 'D', 'M'],

["Storage", "How does persistent storage work in Kubernetes?",
`**Answer:** PersistentVolumeClaims request storage; StorageClasses define provisioners (CSI drivers for cloud disks, file storage) and parameters; PersistentVolumes are bound to claims. Access modes (ReadWriteOnce, ReadWriteMany) and reclaim policies matter.

Tip: CSI drivers.`, 'B', 'M'],

["Config", "ConfigMaps vs Secrets?",
`**Answer:** ConfigMaps hold non-sensitive configuration; Secrets hold sensitive data (base64-encoded, not encrypted by default — enable encryption at rest and use external secret managers). Mount as files or environment variables.

Tip: Secrets aren't encrypted by default.`, 'B', 'E'],

["Resources", "What are requests and limits?",
`**Answer:** **Requests** are guaranteed resources used for scheduling. **Limits** cap usage — exceeding memory limits causes OOMKill; CPU limits cause throttling. Set requests based on actual usage; be careful with CPU limits on latency-sensitive services. QoS classes: Guaranteed, Burstable, BestEffort.

Tip: CPU throttling issue.`, 'B', 'M'],

["Scheduling", "How do you control where pods run?",
`**Answer:** nodeSelector, node affinity/anti-affinity, pod affinity/anti-affinity, taints and tolerations (dedicate nodes), topology spread constraints (spread across zones), and priority classes.

Tip: Topology spread for HA.`, 'D', 'M'],

["Scaling", "How does autoscaling work in Kubernetes?",
`**Answer:** **HPA** scales pod replicas based on CPU, memory or custom metrics. **VPA** adjusts requests. **Cluster Autoscaler** or **Karpenter** adds/removes nodes when pods can't be scheduled. **KEDA** scales on event sources (queue length).

Tip: Karpenter and KEDA.`, 'B', 'M'],

["Health", "Explain liveness, readiness and startup probes.",
`**Answer:** Readiness controls whether a pod receives traffic; liveness restarts stuck containers; startup protects slow-starting apps from premature liveness failures. Bad liveness probes cause restart loops during dependency outages — don't check external dependencies in liveness.

Tip: Liveness shouldn't check dependencies.`, 'B', 'M'],

["Troubleshooting", "A pod is Pending. What do you check?",
`**Answer:** kubectl describe pod events: insufficient CPU/memory, node selectors/affinity not matching, taints without tolerations, PVC not bound, quota exceeded, or image pull secrets. Check cluster autoscaler status.

Tip: Events tell the story.`, 'B', 'M'],

["Troubleshooting", "How do you debug CrashLoopBackOff?",
`**Answer:** kubectl logs --previous, describe for exit codes (137 = OOMKilled), check config and secrets, command/entrypoint, probes, and dependencies at startup. Use ephemeral debug containers (kubectl debug).

Tip: Exit code 137.`, 'B', 'M'],

["Troubleshooting", "A service isn't reachable. How do you troubleshoot?",
`**Answer:** Check pod readiness and endpoints (kubectl get endpoints), selector labels match, service ports/targetPort, DNS resolution from a debug pod, network policies, and ingress/gateway configuration.

Tip: Endpoints empty = selector mismatch.`, 'B', 'M'],

["Security", "How do you secure a Kubernetes cluster?",
`**Answer:** RBAC with least privilege, no cluster-admin for users, Pod Security Standards (restricted), network policies, image scanning and signed images, admission policies (Kyverno/OPA), secrets encryption and external secret stores, private API endpoint, audit logging, regular upgrades, and runtime security (Falco).

Tip: Pod Security Standards.`, 'D', 'M'],

["Security", "What is RBAC in Kubernetes?",
`**Answer:** Roles/ClusterRoles define permissions (verbs on resources); RoleBindings/ClusterRoleBindings grant them to users, groups or service accounts. Scope permissions to namespaces wherever possible.

Tip: Namespace scoping.`, 'B', 'M'],

["Security", "How do pods access cloud resources securely?",
`**Answer:** Workload identity (IRSA/EKS Pod Identity on AWS, Azure Workload Identity, GKE Workload Identity) mapping service accounts to cloud IAM roles — no static credentials.

Tip: No secrets for cloud access.`, 'D', 'M'],

["Helm", "What is Helm and how do you use it?",
`**Answer:** A package manager for Kubernetes: charts template manifests with values for environments, manage releases, upgrades and rollbacks. Keep charts simple, version them, and lint/test.

Tip: Values per environment.`, 'B', 'M'],

["GitOps", "How do you deploy to Kubernetes with GitOps?",
`**Answer:** Store manifests/Helm values in Git; Argo CD or Flux syncs the cluster to Git, detects drift, and supports progressive delivery (Argo Rollouts, Flagger). Changes happen via pull requests.

Tip: Argo Rollouts for canaries.`, 'B', 'M'],

["Upgrades", "How do you upgrade a cluster safely?",
`**Answer:** Review release notes and deprecated APIs, upgrade non-prod first, upgrade control plane then node pools (surge/blue-green node groups), respect PodDisruptionBudgets, update add-ons, and monitor.

Tip: PDBs.`, 'D', 'M'],

["Availability", "What is a PodDisruptionBudget?",
`**Answer:** Limits how many pods of an application can be voluntarily disrupted at once (during node drains/upgrades), ensuring minimum availability.

Tip: Upgrade safety.`, 'B', 'M'],

["Observability", "How do you monitor Kubernetes?",
`**Answer:** Prometheus (kube-state-metrics, node-exporter, cAdvisor) with Grafana, logs via Fluent Bit to a backend, traces with OpenTelemetry, alerts on node pressure, pod restarts, pending pods, API server latency, and application SLOs.

Tip: kube-state-metrics.`, 'B', 'M'],

["Operators", "What is an operator?",
`**Answer:** A custom controller with custom resources encoding operational knowledge (deploy, scale, back up, upgrade) for complex apps like databases. Built with Operator SDK or Kubebuilder.

Tip: Custom resources.`, 'D', 'M'],

["etcd", "Why is etcd critical and how do you protect it?",
`**Answer:** It stores all cluster state; losing it loses the cluster configuration. Back up regularly (managed services handle this), encrypt secrets at rest, run with odd-numbered members for quorum, and monitor latency.

Tip: Quorum.`, 'D', 'M'],

["Multi-tenancy", "How do you isolate teams in a shared cluster?",
`**Answer:** Namespaces with RBAC, resource quotas and limit ranges, network policies, policy enforcement, separate node pools for sensitive workloads, and cost allocation labels. Use separate clusters for strong isolation needs.

Tip: Soft vs hard isolation.`, 'D', 'M'],

["Service Mesh", "When would you use a service mesh?",
`**Answer:** For mTLS everywhere, fine-grained traffic management (canaries, retries, timeouts), and consistent telemetry across many services. Istio (including ambient mode) or Linkerd. Avoid if the complexity outweighs the benefits.

Tip: Ambient mode reduces sidecar overhead.`, 'D', 'S'],

["Cost", "How do you reduce Kubernetes costs?",
`**Answer:** Right-size requests (VPA recommendations), bin-packing, cluster autoscaler/Karpenter with spot instances, remove idle workloads, scale non-prod down off-hours, and cost visibility (Kubecost/OpenCost).

Tip: Requests drive cost.`, 'D', 'M'],

["Jobs", "How do you run batch jobs in Kubernetes?",
`**Answer:** Jobs and CronJobs with backoff limits, activeDeadlineSeconds, concurrency policies, resource requests, and cleanup (ttlSecondsAfterFinished). For complex workflows, Argo Workflows.

Tip: Concurrency policy.`, 'B', 'M'],

["Stateful", "Should you run databases on Kubernetes?",
`**Answer:** Possible with mature operators (CloudNativePG, Strimzi for Kafka) and strong expertise, but managed cloud databases are usually simpler and more reliable for most teams.

Tip: Pragmatic answer.`, 'D', 'M'],

["Images", "How do you manage container images securely?",
`**Answer:** Minimal base images, scanning in CI and registry, signing (cosign) with admission verification, pinned digests, private registries with access control, and regular rebuilds for patches.

Tip: Image signing.`, 'D', 'M'],

["CKA", "Which certifications are valuable?",
`**Answer:** CKA (administrator), CKAD (application developer), CKS (security specialist) from CNCF/Linux Foundation — hands-on exams.

Tip: Performance-based exams.`, 'B', 'E'],

["Behavioral", "Tell me about a Kubernetes problem you solved.",
`**Sample answer:** "Latency spikes came from CPU throttling due to tight CPU limits. I analyzed throttling metrics, removed CPU limits for latency-sensitive services while keeping requests accurate, and p99 latency dropped 60%."

Tip: Metrics-driven.`, 'B', 'M'],

["Behavioral", "Tell me about a cluster migration or upgrade you led.",
`**Sample answer:** "I migrated 120 services from self-managed clusters to EKS with Karpenter and Argo CD. Using blue-green cluster cutover by namespace, we finished with zero customer-facing downtime and cut node costs 35%."

Tip: Scale and safety.`, 'B', 'M'],

["Behavioral", "How do you help developers use Kubernetes effectively?",
`**Answer:** Templates and Helm charts, documentation, sane defaults (probes, resources), dashboards, office hours, and abstracting complexity through a platform.

Tip: Enablement.`, 'B', 'M'],

["AI", "How do you run AI/GPU workloads on Kubernetes?",
`**Answer:** GPU node pools with device plugins (NVIDIA), scheduling with taints/tolerations, GPU sharing (MIG, time-slicing), autoscaling, model serving frameworks (KServe, vLLM), and queueing for training jobs (Kueue).

Tip: GPU utilization is costly.`, 'D', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Platform engineering or SRE leadership — multi-cluster platforms and developer experience.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I run secure, reliable, cost-efficient Kubernetes platforms — migrations with zero downtime, 35% cost reduction, and developer-friendly templates."

Tip: Proof.`, 'B', 'M'],

["Labels", "What are labels and selectors?",
`**Answer:** Key-value metadata on objects; selectors match labels to connect Services to pods, Deployments to ReplicaSets, and policies to targets. Use consistent labeling standards (app.kubernetes.io/*).

Tip: Standard labels.`, 'B', 'E'],

["Rollouts", "How does a rolling update work?",
`**Answer:** The Deployment creates a new ReplicaSet and gradually shifts pods according to maxSurge and maxUnavailable, waiting for readiness. kubectl rollout undo reverts to the previous ReplicaSet.

Tip: maxSurge/maxUnavailable.`, 'B', 'M'],

["Namespaces", "What are namespaces used for?",
`**Answer:** Logical isolation of resources for teams, environments or apps, with scoped RBAC, quotas and policies. Not a hard security boundary on their own.

Tip: Not hard isolation.`, 'B', 'E'],

["Init Containers", "What are init and sidecar containers?",
`**Answer:** Init containers run to completion before app containers start (setup tasks, waiting for dependencies). Sidecars run alongside the app (proxies, log shippers); Kubernetes now has native sidecar support.

Tip: Native sidecars.`, 'B', 'M'],

["DNS", "How does DNS work in Kubernetes?",
`**Answer:** CoreDNS resolves service names like my-svc.my-namespace.svc.cluster.local to ClusterIPs; pods get DNS config automatically. DNS issues often appear as intermittent failures.

Tip: ndots and search domains can affect performance.`, 'D', 'M'],

["Admission", "What are admission controllers?",
`**Answer:** Plugins that intercept API requests to validate or mutate objects before they're stored — e.g. Pod Security Admission, policy engines (Kyverno, Gatekeeper), and mutating webhooks injecting sidecars.

Tip: Policy enforcement point.`, 'D', 'M'],

["Backups", "How do you back up Kubernetes workloads?",
`**Answer:** Velero for resources and volume snapshots, GitOps repos for manifests, and application-level backups for databases. Test restores.

Tip: Restore testing.`, 'D', 'M'],

["Scenario", "Nodes keep running out of memory. What do you do?",
`**Answer:** Identify pods without memory requests/limits or with leaks, set accurate requests, use limit ranges, monitor eviction events, right-size node types, and fix leaking applications.

Tip: Requests discipline.`, 'D', 'M'],

["Scenario", "Deployments are slow because images are huge. How do you fix it?",
`**Answer:** Slim images with multi-stage builds, smaller base images, image caching/pre-pulling on nodes, registry close to clusters, and lazy-loading technologies.

Tip: Image size matters.`, 'B', 'M']
];
