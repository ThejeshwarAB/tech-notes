# Jenkins Overview

## What problem Jenkins solves

Jenkins solves the problem of running repetitive workflows reliably and consistently. Manual workflows such as building code, running tests, packaging applications, and triggering deployments are slow, error-prone, and difficult to scale.

By automating these steps, Jenkins ensures that the same process runs the same way every time. This reduces human error, saves time, and makes workflows repeatable across teams and environments.

## Why Jenkins is an automation engine rather than a deployment tool

Jenkins is described as an automation engine because it does not decide how applications should be deployed. Instead, it executes predefined steps exactly as instructed.

Jenkins can trigger builds, run tests, create Docker images, or invoke Kubernetes deployments, but it does not manage infrastructure or runtime behavior itself. It focuses on automation, not ownership of deployment logic.

## How Jenkins fits with Git, Docker, and Kubernetes

Git acts as the source of truth for code. Docker packages the application and its dependencies. Kubernetes runs the application reliably across machines.

Jenkins fits between these tools by automating the steps that connect them. It reacts to changes in Git, builds Docker images, and triggers actions that allow Kubernetes to deploy or update applications.

## Role of pipelines in Jenkins

Pipelines define the sequence of steps Jenkins should execute. They describe the flow of work, such as building, testing, packaging, and deploying an application.

By defining workflows as pipelines, Jenkins ensures that automation is structured, repeatable, and easy to reason about.

## Why triggers are important in Jenkins workflows

Triggers determine when a Jenkins pipeline should run. They connect external events to automation.

Triggers can be code changes, scheduled executions, or manual actions. Without triggers, pipelines would require constant manual intervention and automation would lose its effectiveness.
