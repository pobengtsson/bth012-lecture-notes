# Lecture Notes: Layouts in CSS3 and HTML5

## 1. **Introduction to CSS Layouts**
   CSS layouts define how HTML elements are displayed on a webpage. They enable you to structure and design the layout of pages effectively.

   - **Goal:** To manage how content is presented across devices, adjusting for different screen sizes, and ensuring consistent visual structure.

## 2. **Block-Level and Inline-Level Layouts**
   - **Block-level elements:** Take up the full width of their container by default. Examples: `<div>`, `<h1>`, `<p>`.
   - **Inline-level elements:** Only take up as much width as needed. Examples: `<span>`, `<a>`, `<strong>`.

   ### Code Example:
   ```html
   <div style="background: lightblue;">Block-level element</div>
   <span style="background: lightcoral;">Inline element</span>
   ```
   - **Explanation:** The `<div>` stretches to the full width, while the `<span>` only surrounds its content.

## 3. **Positioning Layout Techniques**

   - **Static:** Default behavior.
   - **Relative:** Positioned relative to its normal position.
   - **Absolute:** Positioned relative to the nearest positioned ancestor.
   - **Fixed:** Positioned relative to the viewport.
   - **Sticky:** Switches between relative and fixed depending on scroll position.

   ### Code Example:
   ```html
   <div style="position: relative; top: 20px;">Relative Position</div>
   <div style="position: absolute; top: 50px; left: 150px;">Absolute Position</div>
   <div style="position: fixed; top: 0; background: lightblue;">Fixed Position</div>
   <div>Foo</div>
   <div>Foo</div>
   <div style="position: sticky; top: 50px;">Sticky Position</div>
   <div>Foo</div>
   <div>Foo</div>
   <div>Foo</div>
   <div>Foo</div>
   ```

## 4. **Grid Layout**

The CSS Grid Layout provides a two-dimensional layout system, which is ideal for creating both rows and columns. It offers more flexibility than Flexbox, making it suitable for designing complex web layouts.

### Key Concepts of Grid Layout

#### 4.1.1. **Defining a Grid Container**
   To create a grid layout, set the element's `display` property to `grid` or `inline-grid`.
   - **`grid`:** The container behaves as a block element.
   - **`inline-grid`:** The container behaves as an inline element.

   ```html
   <div class="grid-container">
       <div class="item1">Item 1</div>
       <div class="item2">Item 2</div>
       <div class="item3">Item 3</div>
   </div>
   ```

   ```css
   .grid-container {
       display: grid;
   }
   ```

#### 4.2.2. **Defining Grid Structure with Columns and Rows**
   - **`grid-template-columns`** and **`grid-template-rows`** define the grid structure by specifying column and row sizes.
   - You can use:
     - **Fixed units:** `px`, `cm`, `mm`
     - **responsive units:** ...
     - **Flexible units:** `fr` (fractional unit)
     - **Auto-adjusting:** `auto`, `min-content`, `max-content`

   ```css
   .grid-container {
       display: grid;
       grid-template-columns: 1fr 2fr 1fr;
       grid-template-rows: 100px auto;
   }
   ```

   In this example:
   - There are three columns: the first and third take up 1 fraction each, while the second takes up 2 fractions.
   - Two rows are defined: the first row has a fixed height of 100px, while the second adjusts automatically.

#### 4.2.3. **Grid Gaps**
   - **`gap`, `row-gap`, `column-gap`** control the spacing between grid items.

   ```css
   .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 20px;
   }
   ```

   This creates a 20px gap between all grid items.

#### 4.2.4. **Placing Grid Items**
   - Items within a grid container can be placed in specific rows and columns using **grid lines**.
   - **Grid lines** are numbered starting from 1 for each row and column.
   - Use the **`grid-column`** and **`grid-row`** properties to define where items should start and end.

   ```css
   .item1 {
       grid-column: 1 / 3; /* Starts at line 1, ends at line 3 */
       grid-row: 1 / 2;    /* Starts at line 1, ends at line 2 */
   }
   ```

   - This places **Item 1** to span across two columns in the first row.

#### 4.2.6. **Auto-Placement of Grid Items**
   - If you don’t explicitly place grid items, they will be automatically positioned in the grid in the order they appear in the HTML.

#### 4.2.7. **Grid Item Alignment**
   - Control the alignment of items within the grid using:
     - **`justify-items`**: Aligns items horizontally.
     - **`align-items`**: Aligns items vertically.
     - **`justify-content`**: Aligns the entire grid horizontally.
     - **`align-content`**: Aligns the entire grid vertically.

   ```css
   .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       justify-items: center;
       align-items: center;
   }
   ```

   This centers each item within its grid cell.

### Summary of CSS Grid Properties
   - **Container properties:**
     - `grid-template-columns`, `grid-template-rows`
     - `gap`, `justify-content`, `align-content`
   - **Item properties:**
     - `grid-column`, `grid-row`
     - `justify-self`, `align-self`

The CSS Grid is powerful for building both simple and complex layouts. It’s suitable for creating entire page structures, grids within sections, or aligning items in complex patterns.

## 5. **Responsive Layouts**
Responsive layouts adapt to different screen sizes, ensuring optimal display on various devices, from large desktops to small mobile phones. Responsive design is crucial for improving user experience across devices and achieving a seamless interface.

### 5.1. **Understanding Responsive Layouts**
   - **Goal:** Create a fluid, flexible layout that adjusts to the user’s device.
   - **Core Principles:**
     - **Fluid grids:** Use relative units like percentages instead of fixed units like pixels.
     - **Flexible images:** Set a maximum width (e.g., `max-width: 100%`) to make images scale proportionally.
     - **Media queries:** Adjust layout based on screen characteristics.

### 5.2. **Fluid Grids**
   Fluid grids use relative units (e.g., `%`) to define the width of elements, making them adaptable to different screen sizes.

   #### Example:
   ```html
   <div style="width: 50%; background: lightblue;">Fluid Grid Column</div>
   ```
   - This column takes up 50% of its parent container’s width, regardless of screen size.

### 5.3. **Flexible Images**
   - Images should resize proportionally to fit their containers while maintaining aspect ratio.
   - Use the `max-width` property to ensure images don’t overflow their container.

   #### Example:
   ```html
   <img src="image.jpg" style="max-width: 100%; height: auto;" alt="Responsive Image">
   ```
   - The image will scale down to fit the container but won’t exceed its original size.

### 5.4. **Responsive Units**
   Using responsive units helps achieve flexible, dynamic layouts. Units like `%`, `em`, `rem`, `vw`, and `vh` adapt to different screen sizes.

   #### Key Responsive Units:
   - **Percentage (`%`):** Relative to the parent container's size.
   - **Viewport Width (`vw`):** 1vw is 1% of the viewport width.
   - **Viewport Height (`vh`):** 1vh is 1% of the viewport height.
   - **em and rem:**
     - **`em`**: Relative to the font size of the parent element.
     - **`rem`**: Relative to the root element’s font size, making it consistent across elements.

### 5.5. **Responsive Layout Examples**

   #### Example Responsive Grid Layout
   ```html
   <div class="grid-container">
       <div class="grid-item">1</div>
       <div class="grid-item">2</div>
       <div class="grid-item">3</div>
   </div>

   <style>
       .grid-container {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
           gap: 10px;
       }
   </style>
   ```
   - **Explanation:** The `auto-fill` and `minmax()` functions make the grid items responsive, adjusting based on available space.

## 6. **CSS Size Measurement Units: Feature Table**

| **Unit**     | **Type**           | **Description**                                                               | **Example**                        |
|--------------|--------------------|-------------------------------------------------------------------------------|------------------------------------|
| **px**       | Absolute           | Fixed unit; remains constant regardless of device or screen size.             | `width: 300px;`                    |
| **%**        | Relative           | Based on the parent container's dimensions, making it flexible.              | `width: 50%;`                      |
| **em**       | Relative           | Relative to the font size of the parent element.                             | `font-size: 1.5em;`                |
| **rem**      | Relative           | Relative to the root element’s font size (usually the `<html>` element).     | `font-size: 2rem;`                 |
| **vw**       | Viewport-based     | 1% of the viewport width.                                                    | `width: 50vw;`                     |
| **vh**       | Viewport-based     | 1% of the viewport height.                                                   | `height: 100vh;`                   |
| **vmin**     | Viewport-based     | 1% of the smaller dimension (width or height) of the viewport.               | `width: 50vmin;`                   |
| **vmax**     | Viewport-based     | 1% of the larger dimension (width or height) of the viewport.                | `width: 50vmax;`                   |
| **ch**       | Relative           | Approximate width of the character ‘0’ in the font, often used for text areas. | `width: 30ch;`                     |
| **ex**       | Relative           | Height of the lowercase ‘x’ in the font, rarely used for layout.             | `font-size: 2ex;`                  |
| **cm, mm**   | Absolute           | Units based on centimeters or millimeters; mostly used in print design.      | `width: 2cm;`                      |
| **in**       | Absolute           | Inches, primarily for print layouts.                                         | `height: 1in;`                     |
| **pt**       | Absolute           | Points; 1pt equals 1/72 of an inch.                                          | `font-size: 12pt;`                 |
| **pc**       | Absolute           | Picas; 1pc equals 12 points.                                                 | `font-size: 1pc;`                  |
