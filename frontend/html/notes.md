# HTML Notes

## Structure

The `<!DOCTYPE html>` declaration is necessary to tell the browser to render the page in standards mode. Without it, browsers may fall back to quirks mode, which leads to inconsistent layout and CSS behavior across browsers.

Misusing heading levels does not usually break the visual layout, but it breaks the document structure. Screen readers rely on headings to navigate content, and search engines use them to understand content hierarchy. Incorrect heading usage damages accessibility and semantic clarity even if the page looks fine.

The `<head>` contains metadata about the document, such as the title and meta information, which the browser and search engines use to understand the page. The `<body>` contains the actual content meant for users. Mixing these responsibilities reduces clarity and can cause unexpected behavior.

## Semantics

Semantic tags like `header`, `main`, `section`, and `footer` were used instead of generic containers because they clearly describe the role of each part of the page. These tags provide meaning to machines, not just readability for humans.

Using `nav` is appropriate only for major navigation sections that help users move through the site. It should not be used for every group of links, such as minor footer links or unrelated link lists.

Semantic HTML improves accessibility by allowing screen readers to identify landmarks and navigate content efficiently. It also helps search engines understand the importance and structure of content, which improves indexing and relevance.

## Content

Meaningful link text is important because it provides context independently of surrounding content. Screen readers often read links out of context, and descriptive link text ensures users understand the destination without relying on visual cues.

The primary purpose of the `alt` attribute is to describe the meaning of an image when it cannot be seen. This is critical for screen readers and for situations where images fail to load. The goal is to convey intent, not appearance.

Ordered lists should not be used unless the order itself carries meaning. Even if items appear sequential, an unordered list is more appropriate when the sequence does not affect understanding.

## Forms

Every input must be associated with a label to ensure accessibility and clarity. Labels allow screen readers to announce what an input represents and make forms easier to use with keyboards and assistive technologies.

When labels are missing, users may misunderstand inputs, screen readers lose context, and form usability degrades. This often leads to incorrect data entry and poor accessibility.

Buttons should live inside a form element because forms define submission behavior. Placing buttons outside breaks expected browser behavior and makes form handling less predictable.

## Reflection

Semantic structure and head metadata initially felt unnecessary, but they made the document clearer, more maintainable, and easier to reason about once implemented.

A common mistake was not clearly separating different parts of the page. Adding structure and comments helped clarify intent and improve readability.

Good HTML should be treated as the skeleton of a website. Content should be placed deliberately using meaningful tags so that both humans and machines can understand the structure without relying on styling or scripts.
