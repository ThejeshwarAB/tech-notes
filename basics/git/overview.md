# Git Overview

## What problem Git solves

Git solves the problem of multiple people working in parallel on the same codebase without overwriting each other’s work.

Unlike simple file copying or shared folders, Git:

- Preserves the full history of changes
- Allows parallel development without blocking others
- Makes it possible to understand what changed, when, and why

Git turns uncontrolled file changes into an explicit, traceable history.

## Why Git is distributed

Git is distributed because it assumes:

- Changes happen constantly
- Work happens in parallel
- Developers need autonomy

Every developer has a complete copy of the project and its history.
This allows work to continue:

- Offline
- Independently
- Without a central bottleneck

Distribution is what makes Git fast, flexible, and resilient.

## Core assumptions Git makes

Git assumes that:

- Change is continuous
- Parallel work is normal
- Mistakes will happen
- History matters

Git does not try to prevent mistakes.
It assumes mistakes are inevitable and focuses on making them recoverable.

## Why Git exposes internal state

Git exposes its internal state because clarity is more important than convenience.

Instead of hiding what is happening:

- Git shows where you are in history
- Git shows what has changed
- Git shows what is staged, committed, or untracked

This makes Git predictable, but it also demands understanding from the user.

## Why Git is safe for experimentation

Git is safe for experimentation because:

- Changes are isolated into commits
- Parallel timelines can exist using branches
- History can be extended without destroying previous work

Experimentation is encouraged, but responsibility remains with the developer.

## Why parallel work is a first-class concept

Git treats parallel work as normal.

Branches allow:

- Independent development
- Isolated experimentation
- Controlled integration

Parallel work is not an add-on in Git. It is the default workflow.

## Why Git feels complex to beginners

Git feels complex because:

- It exposes internal state
- History is non-linear
- Actions have lasting consequences

Git does not hide complexity.
It requires users to understand how history evolves.

## Why Git requires discipline in teams

Git is extremely flexible, which makes it powerful and dangerous.

Without discipline:

- History can be rewritten incorrectly
- Shared work can be overwritten
- Conflicts can escalate

Git gives control, but expects responsibility in return.

## What kind of power Git gives

Git gives developers the power to:

- Track every meaningful change
- Work independently without blocking others
- Understand how a codebase evolved over time

This power enables collaboration, but only when used correctly.
