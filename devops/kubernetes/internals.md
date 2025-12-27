# Kubernetes Internals

## Role of the control plane

The Kubernetes control plane is responsible for continuously managing the system so that the current state moves toward the desired state. It observes what is running in the cluster, compares it with what is expected, and decides what actions are needed to close the gap.

Rather than executing application code, the control plane coordinates decisions such as scheduling workloads, restarting failed components, and responding to changes in the cluster. It acts as the brain of the system.

## Pod scheduling

Kubernetes decides where a pod should run by evaluating the available nodes in the cluster against the pod’s requirements and the cluster’s constraints. The control plane considers factors such as resource availability, node health, and scheduling rules.

Once a suitable node is selected, Kubernetes assigns the pod to that node and monitors its execution. If conditions change, Kubernetes may reschedule the pod elsewhere.

## What happens when a pod crashes

When a pod crashes, Kubernetes detects that the actual state no longer matches the desired state. Through its reconciliation process, Kubernetes automatically creates a replacement pod to restore the expected behavior.

The failed pod is not repaired. Instead, it is replaced with a new instance that satisfies the declared state of the system.

## Why Kubernetes recreates pods instead of fixing them

Kubernetes recreates pods because pods are designed to be temporary and replaceable. Fixing a running pod would introduce hidden state and unpredictable behavior.

By recreating pods, Kubernetes ensures consistency and reliability. This approach allows the system to recover from failures quickly and keeps behavior predictable across environments.

## Eventual consistency in Kubernetes

Kubernetes is considered eventually consistent because changes are not applied instantaneously. The system continuously observes and reconciles state over time rather than enforcing immediate correctness.

This design allows Kubernetes to operate reliably in distributed environments where delays, failures, and partial updates are normal. Over time, the system converges toward the desired state through repeated reconciliation.
