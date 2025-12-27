# Kubernetes Overview

## What problem Kubernetes solves

Kubernetes solves the problem of running many containers reliably across many machines. When systems grow beyond a single machine, failures become normal. Containers crash, machines go down, and network conditions change constantly.

Kubernetes automates container placement, restarts failed workloads, replaces unhealthy instances, and maintains availability without manual intervention. It allows systems to continue operating reliably even when individual components fail.

## Why Kubernetes is a control system rather than a runtime

Kubernetes is described as a control system because it does not run application code directly. Instead, it continuously observes the system and takes actions to make the actual state match the desired state.

Users declare what they want the system to look like, such as how many instances should be running. Kubernetes then decides how to achieve that and keeps correcting the system whenever it drifts from the declared intent.

## What desired state means in Kubernetes

Desired state is a declaration of how the system should behave, not how to implement it. It describes conditions such as how many workloads should be running and how they should be exposed.

Kubernetes constantly compares the desired state with the current state. If they differ, Kubernetes reconciles the system by creating, deleting, or restarting components until the desired state is reached.

## Why Kubernetes uses pods instead of running containers directly

Kubernetes uses pods because some containers need to be scheduled, started, and managed together. A pod groups one or more containers that share the same lifecycle, network, and storage context.

By treating pods as the smallest unit of execution, Kubernetes can manage tightly coupled containers as a single entity while still scaling and scheduling them across machines.

## Why services are needed even when pods are running correctly

Pods are temporary and can be created, destroyed, or replaced at any time. Their identities and locations are not stable.

Services provide a stable access point to a group of pods. They allow other parts of the system to communicate with workloads reliably, even as pods change underneath.
