# Git Internals

## Commits

A commit represents a snapshot of the entire project at a specific point in time. It stores:
- The project content
- Metadata such as author, timestamp, and message
- A reference to its parent commit or commits

This information allows Git to reconstruct both the project state and its history.

Commits are immutable, meaning once a commit is created, it cannot be changed. Immutability ensures that history remains trustworthy and consistent, because past states cannot be altered silently. If commits could be modified, references would break and collaboration would become unreliable.

Each commit knows what came before it by storing a reference to its parent commit. By linking commits together through parent references, Git forms a connected history rather than isolated snapshots.

Two commits that look similar are still treated as different because a commit’s identity depends on everything it contains. Any difference in content, metadata, or parent references results in a completely new commit identity.

A commit is fundamentally defined by its contents and its position in history. If any part of that information changes, Git considers it a different commit.

## Branches

A branch is not a copy of the code. A branch is a movable reference that:
- Points to a specific commit
- Moves forward as new commits are added

When a branch is created, Git does not create a new snapshot or duplicate any files. It simply creates a new pointer that references an existing commit.

As new commits are added, the branch pointer moves forward to point to the latest commit. The commits themselves already exist in history and are connected through parent references.

Multiple branches can point to the same commit at the same time without conflict. Since branches are only references, pointing to the same commit does not duplicate data or create inconsistencies.

This design makes parallel work cheap and fast. Developers can create branches freely, work independently, and allow history to diverge and converge without copying the codebase.
