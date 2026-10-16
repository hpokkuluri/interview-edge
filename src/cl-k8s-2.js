QB['cl-k8s'] = (QB['cl-k8s'] || []).concat([
["Scaling", "What is Karpenter?",
`**Answer:** An open-source node autoscaler (originating at AWS) that provisions right-sized nodes directly based on pending pod requirements, faster and more flexibly than the Cluster Autoscaler's fixed node groups, with consolidation to reduce cost.

Tip: Consolidation feature.`, 'D', 'M'],
["Quotas", "What are ResourceQuotas and LimitRanges?",
`**Answer:** ResourceQuotas cap total resources (CPU, memory, object counts) per namespace; LimitRanges set default and min/max requests and limits for containers in a namespace.

Tip: Multi-tenancy controls.`, 'B', 'M'],
["Policy", "Kyverno vs OPA Gatekeeper?",
`**Answer:** Both enforce policies via admission control. Kyverno uses Kubernetes-native YAML policies and can mutate and generate resources; Gatekeeper uses Rego (OPA) for flexible, powerful policies across systems.

Tip: Team skills decide.`, 'D', 'M']
]);
