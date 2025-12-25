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

## HEAD

HEAD represents the current position in the Git history. It tells Git what you are currently working on and provides the context for future actions. In practice, HEAD is responsible for:
- Indicating your current location in history
- Determining where new commits will be attached

Most of the time, HEAD points to a branch rather than directly to a commit. That branch then points to the latest commit in its line of history. This indirection allows Git to move the branch forward automatically as new commits are created.

Where a new commit is attached is determined by where HEAD points. When a new commit is created, it is added on top of the commit that HEAD ultimately refers to, and the branch that HEAD points to moves forward to reference this new commit.

When HEAD points directly to a commit instead of a branch, it is called a detached HEAD state. In this state, HEAD is no longer tracking a branch and is instead attached to a specific commit in history.

Git allows a detached HEAD state to exist so that users can inspect, explore, or experiment with past commits without moving or modifying any branch. This provides flexibility to navigate history while keeping the existing branch structure unchanged.

## History as a Graph

Git history is represented as a graph rather than a straight line because work can happen in parallel. The history graph allows Git to represent divergence and convergence naturally. At a conceptual level, the graph consists of:
- Commits as nodes
- Parent references as connections between nodes
- Branches and HEAD as ways to navigate the graph

Each commit connects to history by storing a reference to its parent commit. By following these parent references backward, Git can reconstruct the entire sequence of changes that led to the current state. This creates a connected structure rather than isolated snapshots.

When a commit has more than one parent, it represents a merge. A merge commit connects multiple lines of development by referencing more than one parent commit. This shows that previously separate histories have been combined into a single point in the graph.

Branching changes the shape of the history graph by creating divergence. When work continues independently on different branches, the graph splits into separate paths that can evolve in parallel.

When two branches are merged, the graph does not become a straight line. Instead, a new commit is created that connects the diverged paths. This preserves the full history of parallel work while showing where integration occurred.

Rewriting history changes the shape of the history graph by replacing existing commits with new ones. The original commits are not modified. Instead, new commits are created with different parent relationships, forming a new version of history.

Rewriting history is safe when the commits involved exist only locally or are not shared with others. It becomes dangerous when the same history is shared, because replacing commits causes the graph to diverge between different copies of the repository.

