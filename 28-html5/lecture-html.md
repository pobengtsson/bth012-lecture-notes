**Speaker Notes for HTML5 Presentation**

**Introduction:**
- Explain the importance and role of HTML in web development.
- Define HTML as the "HyperText Markup Language".
- Emphasize that HTML5 is the latest evolution and includes many new features.

**Step 1: Basic Document Structure**
*Code Example:*
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
</body>
</html>
```

**Notes:**
- Explain the `<!DOCTYPE html>` declaration. It's used to specify the document type and version (HTML5).
- `<html>` is the root element of an HTML page.
- `<head>` contains meta-information and the title of the page.
- `<body>` contains the content of the page.

*Browser Debug Mode:*
Inspect the `<head>` and notice the title.

---

**Step 2: Adding Basic Content**
*Code Example:*
```html
<body>
    <h1>Welcome to My Page</h1>
    <p>This is a paragraph.</p>
</body>
```

**Notes:**
- Introduce the `<h1>` tag which is a header. There are header tags from `<h1>` to `<h6>`, with `<h1>` being the largest.
- The `<p>` tag represents a paragraph.

*Browser Debug Mode:*
Inspect the `<h1>` and `<p>` elements and show how they're displayed.

---

**Step 3: Creating Lists**
*Code Example:*
```html
<body>
    <h1>My Favourite Fruits</h1>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
</body>
```

**Notes:**
- Introduce the unordered list `<ul>` and list item `<li>` tags.
- Explain how each list item is a child of the unordered list.

*Browser Debug Mode:*
Inspect the `<ul>` and see the list of fruits.

---

**Step 4: Linking to Other Pages**
*Code Example:*
```html
<body>
    <h1>Welcome to My Page</h1>
    <p>Visit <a href="https://www.example.com">this website</a> for more information.</p>
</body>
```

**Notes:**
- Introduce the anchor `<a>` tag, which is used to create hyperlinks.
- The `href` attribute specifies the URL of the page the link goes to.

*Browser Debug Mode:*
Inspect the `<a>` tag and show the `href` attribute.

---

**Step 5: Adding Images**
*Code Example:*
```html
<body>
    <h1>Welcome to My Page</h1>
    <img src="path/to/image.jpg" alt="Description of Image">
</body>
```

**Notes:**
- Introduce the `<img>` tag.
- The `src` attribute indicates the source path of the image.
- The `alt` attribute provides an alternative description, crucial for accessibility.

*Browser Debug Mode:*
Inspect the `<img>` tag and highlight the `src` and `alt` attributes.

---

**Step 6: Forms and Input Elements**
*Code Example:*
```html
<body>
    <h1>Contact Form</h1>
    <form action="/submit_form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="user_email">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
```

**Notes:**
- Introduce the `<form>`, `<label>`, and `<input>` tags.
- The `action` attribute in the `<form>` tag specifies where to send the form data.
- Different `type` attributes in the `<input>` tag specify different kinds of input fields.

*Browser Debug Mode:*
Inspect the form and show how the data would be sent when the submit button is clicked.

---

**Conclusion:**
- Summarize the importance of understanding HTML structure and elements.
- Encourage students to explore more tags and attributes on their own.
- Highlight that while HTML structures the content, there are other technologies (CSS, JavaScript) that help style and bring interactivity to a website, which will be explored in future sessions.