# CSS Fundamentals

## What CSS is responsible for

CSS is responsible for presentation and layout. It defines how structured content is visually displayed, positioned, and adapted across different screen sizes and devices.

CSS does not define meaning or behavior. It operates on top of HTML structure and works best when the underlying markup is semantic and well-structured.

## Separation of concerns

CSS is intentionally separated from HTML to keep structure and presentation independent. This separation improves maintainability, reuse, and scalability.

By isolating styles from markup, multiple stylesheets can be applied to the same document, and visual changes can be made without altering content structure.

## The box model

The box model defines how elements occupy space in the layout. Every element consists of content, padding, border, and margin.

Padding controls space inside an element, while margin controls space outside it. Misunderstanding this distinction is a common cause of layout bugs, especially when spacing appears inconsistent or elements overflow unexpectedly.

A clear understanding of the box model is essential for debugging layout issues and predicting how elements interact with each other.

## Layout and flow

CSS layout determines how elements are arranged in relation to one another. Modern CSS favors layout systems that are flexible and predictable rather than manual positioning.

Flexbox is commonly used for one-dimensional layouts where elements need to align or distribute space along a single axis. It simplifies alignment problems that were previously difficult to solve using older techniques.

Layout issues often arise not from incorrect properties but from incorrect assumptions about how elements flow and size themselves.

## Responsiveness

Responsive design ensures layouts adapt to different screen sizes and devices. A mobile-first approach starts with constrained layouts and progressively enhances them for larger screens.

Responsiveness is achieved by adjusting layout direction, spacing, and sizing rather than redesigning entire pages. Media queries should be minimal and applied only where layout behavior needs to change.

A responsive layout prioritizes readability and usability over pixel-perfect consistency.

## Debugging CSS

CSS debugging is primarily observational. Inspecting elements, understanding applied styles, and identifying which rules affect layout is more effective than trial-and-error changes.

Most layout issues stem from incorrect assumptions about spacing, inheritance, or layout context rather than syntax errors.

A systematic approach to debugging involves isolating elements, simplifying styles, and applying targeted fixes.

## CSS selectors

Selectors define how styles are applied to elements. Clear and shallow selectors improve readability and reduce unintended side effects.

Overly specific or deeply nested selectors make styles brittle and harder to maintain. Prefer class-based selectors and limit reliance on structural depth.

---

## CSS Selectors Reference

## CSS Selectors Reference

| Selector type | Syntax | Example | What it selects | Typical use case |
|-------------|-------|--------|-----------------|------------------|
| Universal | `*` | `* { box-sizing: border-box; }` | All elements | Global resets |
| Element | `tag` | `p {}` | All `<p>` elements | Base typography |
| Class | `.class` | `.card {}` | Elements with class | Reusable components |
| ID | `#id` | `#header {}` | One unique element | Rare layout hooks |
| Descendant | `A B` | `.nav a {}` | Any matching element inside | Scoped styling |
| Child | `A > B` | `.list > li {}` | Direct children only | Strict structure |
| Adjacent sibling | `A + B` | `h2 + p {}` | Immediate next sibling | Fine spacing control |
| General sibling | `A ~ B` | `h2 ~ p {}` | All following siblings | Section-based rules |
| Attribute | `[attr]` | `[disabled] {}` | Elements with attribute | Form states |
| Attribute value | `[attr=value]` | `input[type="email"] {}` | Exact attribute match | Precise targeting |
| Pseudo-class | `:` | `button:hover {}` | Element state | Interaction |
| Pseudo-element | `::` | `p::first-line {}` | Part of an element | Cosmetic effects |
| Grouping | `,` | `h1, h2, h3 {}` | Multiple selectors | Shared styles |


## CSS mental model

CSS should be treated as a system that reacts to structure rather than a set of visual hacks. Predictable layouts come from understanding flow, spacing, and context rather than memorizing properties.

Well-written CSS is minimal, intentional, and resilient to change.
