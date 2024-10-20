## **Introduction to HTML**
- **HTML (HyperText Markup Language)** is the backbone of web development, defining the structure of web pages.
- The latest version, **HTML5**, introduces new elements and improved semantics.
- HTML uses a **tag-based structure** to define elements, with each element enclosed within angled brackets (e.g., `<tag>`).

## **Basic HTML Document Structure**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```
- **`<!DOCTYPE html>`**: Declares the document type as HTML5.
- **`<html>`**: The root element of the page.
- **`<head>`**: Contains metadata, scripts, and styles.
- **`<body>`**: Encloses all visible content on the web page.

## **Common HTML Tags**
### **Text Formatting**
- **`<h1>` to `<h6>`**: Define headings, from largest (`<h1>`) to smallest (`<h6>`).
  ```html
  <h1>Main Heading</h1>
  <h2>Sub Heading</h2>
  ```
- **`<p>`**: Defines a paragraph.
  ```html
  <p>This is a paragraph of text.</p>
  ```
- **`<div>` and `<span>`**: Used for grouping elements.
  - **`<div>`**: Block-level container, occupies full width.
  - **`<span>`**: Inline container, occupies only as much space as needed.
  ```html
  <div>This is a block element</div>
  <span>This is an inline element</span>
  ```

### **Links and Images**
- **`<a>`**: Defines a hyperlink, using the `href` attribute for the link destination.
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```
- **`<img>`**: Displays images using the `src` attribute for the image source.
  ```html
  <img src="image.jpg" alt="An example image">
  ```

### **Lists**
- **Unordered List (`<ul>`)** and **Ordered List (`<ol>`)** contain list items (`<li>`).
  ```html
  <ul>
      <li>Item 1</li>
      <li>Item 2</li>
  </ul>
  ```

### **Forms**
- Used to collect user input, with elements like `<form>`, `<input>`, `<label>`.
  ```html
  <form action="/submit_form" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name">
      <input type="submit" value="Submit">
  </form>
  ```

## **Understanding the DOM (Document Object Model)**
- The **DOM** represents an HTML document as a tree structure.
  - Each element is a **node** in this tree.
  - It allows JavaScript to access, modify, or remove HTML elements.

### **Querying the DOM with JavaScript (ES6)**
- **Selecting elements**:
  ```javascript
  // Selecting elements by ID
  const elementById = document.getElementById('myId')

  // Selecting elements by class name
  const elementsByClassName = document.getElementsByClassName('myClass')

  // Selecting elements by tag name
  const elementsByTagName = document.getElementsByTagName('div')

  // Using modern querySelector and querySelectorAll
  const element = document.querySelector('.myClass')  // Selects the first element with this class
  const elements = document.querySelectorAll('div')  // Selects all div elements
  ```

### **Manipulating the DOM with JavaScript**
- **Changing element content**:
  ```javascript
  const heading = document.querySelector('h1')
  heading.textContent = 'Updated Heading'
  ```

- **Adding new elements**:
  ```javascript
  const newDiv = document.createElement('div')
  newDiv.textContent = 'New Div'
  document.body.appendChild(newDiv)
  ```

- **Modifying attributes**:
  ```javascript
  const link = document.querySelector('a')
  link.setAttribute('href', 'https://www.newurl.com')
  ```

- **Handling events**:
  ```javascript
  const button = document.querySelector('button')
  button.addEventListener('click', () => {
      alert('Button clicked!')
  })
  ```

## **Conclusion**
- Understanding HTML syntax and tags is essential for web development.
- The **DOM** enables dynamic manipulation of HTML elements using JavaScript, allowing developers to create interactive web pages.
- Encourage students to practice by building simple web pages and experimenting with the DOM.
