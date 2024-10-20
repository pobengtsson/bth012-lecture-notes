Sure! Here's a CSS selector cheat sheet with brief examples for each:

**Universal Selector**
```css
* {
  margin: 0;
}
```
Selects all elements.

**Type Selector (or Tag Selector)**
```css
h1 {
  color: blue;
}
```
Selects all `<h1>` elements.

**Class Selector**
```css
.button {
  background-color: yellow;
}
```
Selects all elements with `class="button"`.

**ID Selector**
```css
#header {
  background-color: gray;
}
```
Selects the element with `id="header"`.

**Descendant Selector**
```css
article p {
  color: green;
}
```
Selects all `<p>` elements inside `<article>` elements.

**Child Selector**
```css
ul>li {
  list-style-type: square;
}
```
Selects all `<li>` elements that are direct children of `<ul>`.

**Adjacent Sibling Selector**
```css
h2 + p {
  font-weight: bold;
}
```
Selects the first `<p>` element immediately after any `<h2>`.

**General Sibling Selector**
```css
h2 ~ p {
  margin-top: 10px;
}
```
Selects all `<p>` elements that are siblings of `<h2>`.

**Attribute Selector**
```css
a[href^="https://"] {
  color: red;
}
```
Selects all `<a>` elements with an `href` attribute starting with "https://".

**Pseudo-classes**
```css
a:hover {
  text-decoration: underline;
}

input:disabled {
  opacity: 0.5;
}

p:nth-child(2) {
  color: pink;
}
```
Selects links when hovered, disabled inputs, and the second `<p>` child respectively.

**Pseudo-elements**
```css
p::first-line {
  font-weight: bold;
}

p::before {
  content: "Note: ";
  font-style: italic;
}
```
Selects the first line of a paragraph and inserts content before a paragraph respectively.

**Grouping**
```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```
Selects `<h1>`, `<h2>`, and `<h3>` elements.

**Not Selector**
```css
p:not(.special) {
  color: gray;
}
```
Selects all `<p>` elements that do not have the class "special".

**Combination of selectors**
```css
input[type="text"]:focus {
  border: 2px solid blue;
}
```
Selects text input fields that are currently focused.

This is by no means an exhaustive list, but it should cover most of the common selectors you'll encounter. Familiarity with these selectors will provide a solid foundation for most CSS tasks.