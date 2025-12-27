# Docker Internals

## Images and layers

A Docker image is an immutable, layered filesystem snapshot combined with metadata that defines how an application should run. It is not a running system, but a complete and reproducible definition of an environment.

Docker images are built as layers instead of a single filesystem to improve efficiency. Each layer represents a filesystem change, such as adding a runtime, installing dependencies, or copying application code. These layers are cached and reused across images.

Layer immutability allows Docker to cache aggressively. If a layer has not changed, Docker can reuse it instead of rebuilding it. This reduces storage usage and significantly speeds up image creation and reuse.

## Containers

A container is a running process created from an image. Internally, Docker takes an image and adds a thin writable layer on top of it, then starts a process inside that environment.

The image itself remains unchanged while the container is running. All runtime changes are written only to the container’s writable layer. Multiple containers can be created from the same image and run independently at the same time.

Changes made inside a running container do not modify the image. These changes exist only in the container’s writable layer and are lost when the container is removed unless explicitly persisted elsewhere.

Containers are considered disposable by design because they are meant to be created, destroyed, and recreated easily. Instead of fixing issues inside a container, the correct approach is to update the image and create a new container from it. This ensures predictability and reproducibility.

## Storage and filesystem behavior

The writable layer in a container is the editable layer that allows runtime changes without modifying the underlying image. It exists so containers can write files, generate logs, and modify state during execution while keeping images immutable.

When a container is deleted, its writable layer is deleted as well. The image layers remain untouched and can be reused to create new containers.

Docker discourages fixing issues inside running containers because such changes are temporary and unreproducible. Rebuilding the image ensures that changes are versioned, repeatable, and consistent across environments.

## Isolation model

Docker isolates containers using operating system features rather than full virtualization. Containers run as normal processes on the host system but are isolated using kernel mechanisms that separate filesystems, processes, and resources.

Containers share the host kernel, which means they do not run their own operating system. This eliminates the overhead of virtualization and allows containers to start quickly and use fewer system resources.

This isolation model makes containers faster than virtual machines because there is no need to boot a separate OS or emulate hardware. Docker focuses on isolating processes rather than machines.

## Docker Engine

Docker Engine is responsible for building images, creating and running containers, managing storage, and handling networking on a single machine. It acts as the control system that coordinates all container activity locally.

Docker Engine is considered a single-machine control system because it manages containers only on the host where it runs. It does not handle scheduling, scaling across machines, or high availability.

Problems such as multi-machine orchestration, automated scaling, and self-healing are intentionally not solved by Docker Engine. These responsibilities are handled by higher-level systems such as Kubernetes.
