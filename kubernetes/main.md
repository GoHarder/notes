# Kubernetes <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Overall Structure](#overall-structure)
- [Core Components](#core-components)
- [Master Nodes](#master-nodes)
- [Worker Nodes](#worker-nodes)
- [Setup](#setup)
  - [Todo](#todo)
  - [What Kubernetes will do](#what-kubernetes-will-do)
- [Objects](#objects)
  - [Container](#container)
  - [Container Runtime](#container-runtime)
  - [Control Plane](#control-plane)
  - [Deployment](#deployment)
  - [Kube Proxy](#kube-proxy)
  - [Kubelet](#kubelet)
  - [Namespace](#namespace)
  - [Node](#node)
  - [Pod](#pod)
  - [Service](#service)
  - [Workload](#workload)

---

## Overall Structure

![overall structure](./assets/components.svg)

-  The master node controls your deployment (the worker nodes)
-  Worker nodes run the containers of your application
-  Nodes can be virtual machines or physical machines
-  Multiple pods can be created and removed to scale your application.

---

## Core Components

-  Cluster (A collection of node machines)
-  [Nodes](#node)
   -  Master Node (Manages pods across worker nodes)
   -  Worker Node (Hosts pods running containers)
-  [Pods](#pod)
-  [Container](#container)
-  [Services](#service)

---

## Master Nodes

ADD SECTION

---

## Worker Nodes

ADD SECTION

---

## Setup

### Todo

1. Create the cluster and the node instances (Worker & Master Nodes)
2. Setup API Server, kubelet, and other Kubernetes services / software on Nodes
3. Create other (cloud) provider resources that might be needed (e.g. Load Balancer, Filesystems)

### What Kubernetes will do

1. Create your objects (e.g. Pods) and manage them
2. Monitor Pods and re-create them, scale Pods etc.
3. Kubernetes utilizes the provided (cloud) resources to apply your configuration / goals

---

## Objects

Kubernetes entities are called objects.

### Container

A lightweight and portable executable image that contains software and all of its dependencies.

### Container Runtime

ADD SECTION

### Control Plane

ADD SECTION

### Deployment

ADD SECTION

### Kube Proxy

Add Section

### Kubelet

ADD SECTION

### Namespace

![namespace](./assets/objects/namespace.svg)
Namespace

> In Kubernetes, **namespaces** provides a mechanism for isolating groups of resources within a single cluster.
> Names of resources need to be unique within a namespace, but not across namespaces.
> Namespace-based scoping is applicable only for namespaced objects _(e.g. Deployments, Services, etc)_ and not for cluster-wide objects _(e.g. StorageClass, Nodes, PersistentVolumes, etc)_.

[Source - https://kubernetes.io](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

### Node


![master node](./assets/objects/master-node.svg)
Master Node

![node](./assets/objects/node.svg)
Worker Node

> Kubernetes runs your [workload](#workload) by placing containers into Pods to run on _Nodes_. A node may be a virtual or physical machine, depending on the cluster.
> Each node is managed by the [control plane](#control-plane) and contains the services necessary to run Pods.
> The components on a node include the [kubelet](#kubelet), a [container runtime](#container-runtime), and the [kube-proxy](#kube-proxy).

[Source - https://kubernetes.io](https://kubernetes.io/docs/concepts/architecture/nodes/)

### Pod

![namespace](./assets/objects/pod.svg)
Pod

> **Pods** are the smallest deployable units of computing that you can create and manage in Kubernetes.
>
> A Pod (as in a pod of whales or pea pod) is a group of one or more [containers](#container), with shared storage and network resources, and a specification for how to run the containers.
> A Pod's contents are always co-located and co-scheduled, and run in a shared context.
> A Pod models an application-specific "logical host": it contains one or more application containers which are relatively tightly coupled.
> In non-cloud contexts, applications executed on the same physical or virtual machine are analogous to cloud applications executed on the same logical host.

[Source - https://kubernetes.io](https://kubernetes.io/docs/concepts/workloads/pods/)

### Service

![service](./assets/objects/service.svg)
Service

> In Kubernetes, a **Service** is a method for exposing a network application that is running as one or more [Pods](#pod) in your cluster.
>
> A key aim of Services in Kubernetes is that you don't need to modify your existing application to use an unfamiliar service discovery mechanism.
> You can run code in Pods, whether this is a code designed for a cloud-native world, or an older app you've containerized.
> You use a Service to make that set of Pods available on the network so that clients can interact with it.

[Source - https://kubernetes.io](https://kubernetes.io/docs/concepts/services-networking/service/)

### Workload

ADD SECTION
