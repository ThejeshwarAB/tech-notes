# Docker Commands

This file is a practical reference for Docker commands I have personally used.
It assumes understanding of Docker internals.

## Images

- docker images              → list local images
- docker pull image          → download image from registry
- docker rmi image           → remove image

## Containers

- docker ps                  → running containers
- docker ps -a               → all containers
- docker run image           → create and start container
- docker stop container      → stop running container
- docker rm container        → remove container

## Interactive usage

- docker run -it image sh    → run container with shell
- docker exec -it container sh → enter running container

## Cleanup

- docker system df           → disk usage
- docker system prune        → remove unused data
