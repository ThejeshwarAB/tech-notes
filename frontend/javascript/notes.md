# JavaScript Fundamentals

## What JavaScript is responsible for

JavaScript is responsible for behavior and state. It controls how applications respond to user actions, manage data, communicate asynchronously, and update the interface dynamically.

JavaScript does not define structure or appearance. It operates on top of HTML and CSS, manipulating state and reacting to events.

## Execution model

JavaScript executes code synchronously from top to bottom. Only one operation runs at a time, which makes JavaScript single-threaded.

Asynchronous operations do not run in parallel. Instead, they are scheduled and resumed later, allowing JavaScript to remain responsive without blocking the main thread.

Understanding execution order is critical for predicting behavior and avoiding timing-related bugs.

## State and data

State represents values that change over time. JavaScript manages state through variables, objects, and arrays.

Primitive values are immutable and copied by value. Objects and arrays are reference-based, which means multiple variables can point to the same data.

Mutation changes shared state and can cause side effects. Immutability creates predictable state transitions and reduces unintended behavior.

## Functions

Functions are units of computation that accept input, transform it, and optionally return output.

Pure functions always return the same result for the same input and do not modify external state. Impure functions depend on or modify external values, making them harder to reason about.

Clear data flow through functions improves readability, testability, and scalability.

## Arrays

Arrays represent ordered collections of data and are commonly used to model lists, results, and dynamic state.

Modern JavaScript favors declarative array methods such as `map`, `filter`, `find`, and `reduce` over manual loops. These methods describe what transformation is happening rather than how it is performed.

Immutability is especially important with arrays, as direct mutation can affect multiple references and introduce subtle bugs.

## Objects

Objects group related data using key–value pairs and act as containers for structured state.

Objects are passed by reference, which means modifying an object affects all references to it. Shallow copies protect only the top level, while nested objects remain shared.

Careless mutation of objects is a common source of bugs in larger applications.

## Control flow

Control flow determines which path the program takes based on conditions and data.

Clear control flow minimizes nesting and makes intent obvious. Early returns and guard clauses reduce complexity and prevent invalid states from propagating.

Readable control flow is more valuable than clever logic.

## Scope and closures

Scope defines where variables are accessible. JavaScript uses block scope for `let` and `const`, and function scope for functions.

Closures allow functions to retain access to variables from their creation context even after execution has finished.

Closures enable encapsulation and private state but should be used deliberately to avoid hidden dependencies.

## Asynchronous behavior

Asynchronous JavaScript allows long-running operations such as network requests to execute without blocking the main thread.

Promises represent future values and move through pending, fulfilled, or rejected states. `async` and `await` provide a clearer syntax for working with promises.

Async functions pause execution locally without stopping the program. Errors in async code must be handled explicitly.

## DOM interaction

The DOM is a JavaScript-accessible representation of the HTML document. JavaScript reads from and writes to the DOM to update the interface dynamically.

DOM manipulation involves selecting elements, reading state, updating content, and managing classes. JavaScript controls state, while CSS controls presentation.

Events connect user actions to state changes. The UI should always reflect state rather than direct DOM manipulation logic.

## Debugging mindset

Most JavaScript bugs are state or timing issues rather than syntax errors.

Effective debugging involves inspecting state, understanding execution order, and isolating side effects. Predictability comes from minimizing mutation and making data flow explicit.

## JavaScript mental model

JavaScript should be treated as a system that manages state, reacts to events, and coordinates asynchronous work.

Clear data flow, controlled state changes, and predictable execution lead to maintainable and scalable applications.
