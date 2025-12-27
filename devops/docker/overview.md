# Docker Overview

## What problem Docker solves

Docker solves the problem of environment inconsistency. Installing software locally ties an application to a specific operating system, configuration, and set of dependencies. This often leads to situations where an application works on one machine but fails on another.

By packaging the application together with its dependencies and runtime requirements, Docker ensures the application behaves the same across different systems. This eliminates setup inconsistencies, reduces onboarding time, and removes ambiguity between development, testing, and production environments.

## Why Docker is not the same as a virtual machine

Docker is not a virtual machine because it does not create or run a separate operating system. Docker containers share the host machine’s kernel and isolate processes rather than entire machines.

Virtual machines include their own operating system and kernel, which makes them heavier and slower to start. Docker containers are lightweight and start quickly because they rely on the host system’s kernel instead of emulating a full OS.

## Difference between an image and a container

A Docker image is a read-only blueprint that defines what should exist. It contains the application code, dependencies, and runtime configuration needed to run the application.

A Docker container is a running instance of an image. It represents the actual execution of the application defined by the image. Multiple containers can be created from the same image, but a container always originates from a single image.

## Why Docker images are immutable

Docker images are immutable to ensure predictability and reproducibility. Once an image is created, it does not change. Any modification requires creating a new image.

This immutability prevents hidden changes, reduces ambiguity, and makes it easier to reproduce the same behavior across environments. It also enables safe rollbacks by switching between image versions.

## Why Docker matters in team environments

In team environments, Docker reduces setup inconsistencies and simplifies collaboration. Instead of each developer configuring their system manually, teams share Docker images that define a consistent runtime environment.

This makes onboarding faster, improves reliability across machines, and enables automated workflows such as CI/CD pipelines. Docker acts as a shared contract that defines how an application should run.
