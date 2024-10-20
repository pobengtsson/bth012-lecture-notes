### Lecture Notes on CSS3

---

### 1. **Introduction to CSS**
   - **Overview of CSS3 Evolution:**
     CSS3 introduced modular features, making it more efficient and capable of complex styling.
   - **Integration with HTML5:**
     CSS3 works seamlessly with HTML5 to enhance layout, design, and responsiveness.

   **HTML Example:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="style.css">
       <title>CSS Introduction</title>
   </head>
   <body>
       <h1>Welcome to CSS3</h1>
       <p>This is a CSS3 styling example.</p>
   </body>
   </html>
   ```

### 2. **CSS Syntax and Selectors**
   - **Basic Syntax:** CSS rules consist of selectors and declarations.
     ```css
     h1 {
         color: blue;
         font-size: 24px;
     }
     ```
   - **CSS Selectors:**
     - **Element selector:** `h1 { ... }`
     - **Class selector:** `.intro { ... }`
     - **ID selector:** `#header { ... }`
     - **Attribute selector:** `input[type="text"] { ... }`
     - **Pseudo-classes:** `a:hover { ... }`
     - **Pseudo-elements:** `p::first-line { ... }`
   - **Selector Specificity:**
     - Inline styles > IDs > Classes > Elements.

   **HTML Example:**
   ```html
   <div class="intro">Hello World</div>
   <a href="#" id="link">Hover over me</a>
   ```

### 3. **Box Model and Layouts**

The CSS Box Model is a fundamental concept that describes how elements are displayed and spaced on a web page. The model consists of the following parts:

1. **Content Area**: The area where text, images, and other elements are displayed.
2. **Padding**: Space between the content and the border. It creates inner spacing around the content.
3. **Border**: The edge around the padding. It can have a defined width, color, and style.
4. **Margin**: The outermost space that creates space between elements.

#### ASCII Diagram of the CSS Box Model

```
+-------------------------------+
|           Margin              |
|  +-------------------------+  |
|  |        Border           |  |
|  |  +-------------------+  |  |
|  |  |      Padding      |  |  |
|  |  |  +-------------+  |  |  |
|  |  |  |  Content    |  |  |  |
|  |  |  |             |  |  |  |
|  |  |  +-------------+  |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

Here's how this diagram translates into code:

```css
div {
    width: 200px;         /* Content width */
    padding: 20px;        /* Inner spacing */
    border: 5px solid;    /* Border width */
    margin: 10px;         /* Outer spacing */
}
```

### 4. **CSS Positioning**
   - **Types of Positioning:**
     - **Static:** Default positioning, follows the document flow.
     - **Relative:** Positions relative to itself.
     - **Absolute:** Positions relative to the nearest positioned ancestor.
     - **Fixed:** Stays fixed relative to the viewport.
   - **Z-index:** Controls stacking order.
     ```css
     .fixed {
         position: fixed;
         top: 10px;
         right: 10px;
         z-index: 999;
     }
     ```

   **HTML Example:**
   ```html
   <div class="fixed">I am fixed!</div>
   ```

### 5. **Responsive Web Design (RWD)**
   - **Media Queries:**
     ```css
     @media (max-width: 600px) {
         body {
             font-size: 12px;
         }
     }
     ```
   - **Units:** 
     - `%`, `rem`, `em`, `vh`, `vw` are commonly used for responsive sizing.
   - **Responsive Images:**
     ```html
     <img src="image.jpg" alt="Responsive Image" style="max-width: 100%;">
     ```

### 6. **CSS Animations and Transitions**
   - **Transitions:**
     ```css
     button {
         transition: background-color 0.3s ease-in-out;
     }
     button:hover {
         background-color: green;
     }
     ```
   - **Keyframe Animations:**
     ```css
     @keyframes slide {
         from { transform: translateX(0); }
         to { transform: translateX(100px); }
     }
     ```
   - **Transformations:**
     - Example of rotating an element: `transform: rotate(45deg);`

   **HTML Example:**
   ```html
   <button>Hover me</button>
   ```

### 7. **CSS Variables (Custom Properties)**
   - **Syntax and Use Cases:**
     ```css
     :root {
         --primary-color: #3498db;
     }
     body {
         color: var(--primary-color);
     }
     ```
   - **Using JavaScript with CSS Variables (ES6):**
     ```javascript
     document.documentElement.style.setProperty('--primary-color', '#e74c3c');
     ```

   **HTML Example:**
   ```html
   <div class="dynamic-color">This text is dynamic!</div>
   ```

### 8. **CSS Grid Layout**
   - **Basics of Grid Layout:**
     ```css
     .grid-container {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
     }
     ```
   - **Grid Template Areas:**
     ```css
     .grid-container {
         grid-template-areas: "header header header" "sidebar main main" "footer footer footer";
     }
     ```

   **HTML Example:**
   ```html
   <div class="grid-container">
       <div class="header">Header</div>
       <div class="sidebar">Sidebar</div>
       <div class="main">Main Content</div>
       <div class="footer">Footer</div>
   </div>
   ```

### 9. **Advanced Selectors and Derived Properties**
   - **Advanced Pseudo-classes:**
     - Example: `:nth-child(odd)`, `:nth-of-type(2)`.
   - **Derived Properties:**
     - Using `calc()`, `min()`, `max()`, `clamp()`.
       ```css
       div {
           width: calc(100% - 20px);
           font-size: clamp(16px, 2vw, 24px);
       }
       ```

### 10. **Inspecting and Modifying CSS in Browser Developer Tools**
   - **How to Use DevTools:**
     - Open DevTools: Right-click > Inspect or press F12.
     - **Inspect Elements:** Use the "Elements" tab to view and edit HTML/CSS.
     - **Modify Styles Instantly:** Edit CSS rules directly in the Styles panel and see changes in real-time.
     - **Layout Tool:** Use the "Layout" tab to see Flexbox or Grid overlays, inspect spacing, and modify properties on-the-fly.
