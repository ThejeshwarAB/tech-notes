# Jenkins Internals

## Role of the Jenkins controller

The Jenkins controller is responsible for managing the overall system. It stores pipeline definitions, schedules jobs, assigns work to agents, and tracks execution results.

The controller does not execute heavy workloads itself. Instead, it coordinates and monitors automation while maintaining the state of jobs and their outcomes.

## Purpose of Jenkins agents

Jenkins agents are responsible for executing the actual steps of a pipeline. They run builds, tests, packaging steps, and deployment commands as instructed by the controller.

Agents allow Jenkins to distribute work across multiple machines or environments. This makes automation scalable and prevents the controller from becoming overloaded.

## How Jenkins executes pipelines internally

When a pipeline is triggered, Jenkins selects an available agent and assigns the pipeline to it. The pipeline stages are then executed in the defined order or in parallel, depending on the configuration.

The controller monitors execution, records logs and results, and reports success or failure without directly running the workload itself.

## Importance of stages inside a pipeline

Stages divide a pipeline into logical sections such as build, test, or deploy. They make pipeline execution easier to understand, track, and debug.

By organizing work into stages, Jenkins provides visibility into where failures occur and allows teams to reason about automation flow more clearly.

## Why Jenkins is stateless with respect to application logic

Jenkins is considered stateless with respect to application logic because it does not store or manage application behavior. It only executes automation steps defined by the user.

All application logic lives outside Jenkins, in source code, build tools, or deployment systems. Jenkins simply orchestrates execution without owning the logic itself.
