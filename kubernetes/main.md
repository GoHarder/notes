# Kubernetes

## Sections

-  [Objects](#objects)
   -  [Namespace](#namespace)

---

## Objects

### Namespace

![namespace](./assets/objects/namespace.svg)

In Kubernetes, **namespaces** provides a mechanism for isolating groups of resources within a single cluster.
Names of resources need to be unique within a namespace, but not across namespaces.
Namespace-based scoping is applicable only for namespaced objects _(e.g. Deployments, Services, etc)_ and not for cluster-wide objects _(e.g. StorageClass, Nodes, PersistentVolumes, etc)_.

[Reference](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

### Service

![service](./assets/objects/service.svg)
