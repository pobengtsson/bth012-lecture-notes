**Speaker Notes for CSS Presentation**

**Introduction:**
- Define CSS: "Cascading Style Sheets."
- CSS provides style to HTML's structure.
- Discuss the role of CSS in enhancing user experience.

---

**Step 1: CSS Selectors**
*Code Example:*
```html
<div id="uniqueElement">ID Selector</div>
<span class="commonElement">Class Selector</span>
<p>Element Selector</p>
```
```css
#uniqueElement {
    background-color: yellow;
}
.commonElement {
    font-style: italic;
}
p {
    color: blue;
}
```

**Notes:**
- ID (`#`) is for unique elements.
- Class (`.`) can style multiple elements.
- Element selectors target all instances of a tag.

*Browser Debug Mode:*
Inspect each element to display applied styles.

---

**Step 2: Understanding the Box Model**
*HTML/CSS Example:*
```html
<div class="box"></div>
```
```css
.box {
    width: 300px;
    height: 150px;
    padding: 10px;
    border: 2px solid black;
    margin: 20px;
    background-color: lightgrey;
}
```

**Notes:**
- Box model components: content, padding, border, margin.
- Content: Actual content of the element.
- Padding: Space between content and border.
- Border: Outer line surrounding padding and content.
- Margin: Space outside the border, between elements.

*Browser Debug Mode:*
Inspect the `.box` to display box model sections.

---

**Step 3: CSS Grid Layout**
*HTML/CSS Example:*
```html
<div class="grid-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
}
```

**Notes:**
- CSS Grid: 2D layout system for web design.
- `display: grid;`: activates grid layout.
- `grid-template-columns`: defines column sizes. `fr` is a fraction unit.
- `gap`: spacing between grid items.

*Browser Debug Mode:*
Inspect `.grid-container` to show the grid.

---

**Step 4: Media Queries & Responsive Design**
*HTML/CSS Example:*
```html
<div class="responsive-box"></div>
```
```css
.responsive-box {
    width: 100%;
    height: 50vh;
    background-color: green;
}

@media only screen and (max-width: 800px) {
    .responsive-box {
        background-color: red;
    }
}
```

**Notes:**
- Media queries adapt styles based on conditions.
- `max-width: 800px`: CSS rules within this query apply if the viewport is 800px or less.
- `vh`: Viewport height. `50vh` is 50% of the viewport's height.

*Browser Debug Mode:*
Resize the browser window to show the `.responsive-box` color change.

---

**Step 5: CSS Units**
*HTML/CSS Example:*
```html
<div class="percent-box"></div>
```
```css
.percent-box {
    width: 50%;
    height: 50%;
    background-color: purple;
}
```

**Notes:**
- Various CSS units: pixels (`px`), percentages (`%`), viewport width (`vw`), viewport height (`vh`), ems (`em`), rems (`rem`), and more.
- `%`: Relative to the parent element's size. In the example, the box will take up 50% of its container's width and height.
- Emphasize the importance of using responsive units like `%`, `vh`, and `vw` in modern web design.

*Browser Debug Mode:*
Inspect `.percent-box` to demonstrate the percentage sizing relative to its container.

---

**Conclusion:**
- CSS is vital for visually engaging, responsive websites.
- Experimenting is key: encourage trying out different selectors, properties, and units.
- With solid HTML/CSS knowledge, students can design websites that adapt to various devices and screen sizes.
