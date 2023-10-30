Computed values represent the final values used in the rendering process after all calculations are made. This is distinct from specified values, which are the values provided directly in the stylesheet, and used values, which are the values actually used in the final layout (and can be influenced by the layout calculations themselves).

The concept of computed values is most commonly encountered when using CSS Custom Properties (often referred to as CSS variables) and the `calc()` function. Here's an overview of how these can be used:

### 1. CSS Custom Properties:

CSS Custom Properties allow you to define custom variables, which can then be reused throughout your stylesheet. The value of a custom property can be used in a way that computes to a final value.

Example:
```css
:root {
  --main-font-size: 16px;
}

body {
  font-size: var(--main-font-size); /* This uses the computed value of --main-font-size */
}
```

### 2. `calc()` Function:

The `calc()` function allows you to perform calculations in your CSS values. This allows for a combination of different units, or even computations based on custom properties.

Example:
```css
:root {
  --base-margin: 10px;
}

.container {
  padding: calc(var(--base-margin) * 2); /* Computed value will be 20px */
}
```

### 3. Combinations:

You can combine the power of custom properties and the `calc()` function to create dynamic styles.

Example:
```css
:root {
  --base-font-size: 16px;
  --heading-multiplier: 2;
}

h1 {
  font-size: calc(var(--base-font-size) * var(--heading-multiplier)); /* Computed value will be 32px */
}
```

### How to Check Computed Values:

In practice, you may want to see the computed values for debugging or other purposes. Web developer tools in browsers like Chrome, Firefox, and Edge have a "Computed" tab in their element inspection pane. This shows the computed values of all CSS properties for the currently selected element.

For instance, given the styles above, if you were to inspect an `h1` element, you'd see a computed `font-size` of `32px` even if the stylesheet itself contains a `calc()` expression.

In summary, computed values in CSS represent the end result of any calculations or variable replacements defined in your styles. By understanding and utilizing computed values, you can write more dynamic and reusable styles.