# Lecture Notes: Layouts in CSS3 and HTML5

## 1. **Flexbox (Flexible Box Layout)**
The Flexbox layout is designed to provide efficient and predictable alignment of elements within a container, making it a great choice for both horizontal and vertical layouts. It is one-dimensional, meaning it organizes items along either a **row** (horizontal axis) or a **column** (vertical axis).

### Key Concepts in Flexbox
- **Flex Container:** The parent element where Flexbox is applied (using `display: flex;`).
- **Flex Items:** The direct children of the flex container.

### Flexbox Container Properties
Here’s a breakdown of the most important properties for controlling layout using Flexbox:

#### 1. **`display: flex;`**
   - Sets an element as a flex container.
   - Activates Flexbox for its child elements, making them flex items.

#### 2. **`flex-direction`**
   Defines the direction of the main axis, determining how the flex items are laid out in the container:
   - **`row`** (default): Lays out items horizontally, left to right.
   - **`row-reverse`**: Lays out items horizontally, right to left.
   - **`column`**: Lays out items vertically, top to bottom.
   - **`column-reverse`**: Lays out items vertically, bottom to top.

   ### Code Example for `flex-direction`:
   ```html
   <div style="display: flex; flex-direction: row;">
       <div style="background: lightcoral; padding: 20px;">Item 1</div>
       <div style="background: lightblue; padding: 20px;">Item 2</div>
       <div style="background: lightgreen; padding: 20px;">Item 3</div>
   </div>
   ```
   - **Explanation:** Items are aligned in a row from left to right. Changing `flex-direction` to `column` stacks the items vertically.

#### 3. **`justify-content`**
   Aligns flex items along the main axis (horizontal for `row`, vertical for `column`):
   - **`flex-start`** (default): Items align to the start of the main axis.
   - **`flex-end`**: Items align to the end of the main axis.
   - **`center`**: Items are centered along the main axis.
   - **`space-between`**: Equal space between items, with no space at the start or end.
   - **`space-around`**: Equal space around each item, with half-size space at the start and end.
   - **`space-evenly`**: Equal space between and around items.

   ### Code Example for `justify-content`:
   ```html
   <div style="display: flex; justify-content: space-between;">
       <div style="background: lightcoral; padding: 20px;">Item 1</div>
       <div style="background: lightblue; padding: 20px;">Item 2</div>
       <div style="background: lightgreen; padding: 20px;">Item 3</div>
   </div>
   ```
   - **Explanation:** Items are distributed evenly with equal spacing between them.

#### 4. **`align-items`**
   Aligns items along the cross axis (vertical for `row`, horizontal for `column`):
   - **`stretch`** (default): Stretches items to fill the container.
   - **`flex-start`**: Aligns items to the start of the cross axis.
   - **`flex-end`**: Aligns items to the end of the cross axis.
   - **`center`**: Centers items along the cross axis.
   - **`baseline`**: Aligns items to their baseline.

   ### Code Example for `align-items`:
   ```html
   <div style="display: flex; align-items: center; height: 200px;">
       <div style="background: lightcoral; padding: 20px;">Item 1</div>
       <div style="background: lightblue; padding: 40px;">Item 2</div>
       <div style="background: lightgreen; padding: 60px;">Item 3</div>
   </div>
   ```
   - **Explanation:** All items are vertically centered in the container.

#### 5. **`align-self`**
   Allows a single flex item to override the `align-items` property:
   - Can be set to `auto`, `flex-start`, `flex-end`, `center`, `baseline`, or `stretch`.

   ### Code Example for `align-self`:
   ```html
   <div style="display: flex; align-items: stretch;">
       <div style="align-self: flex-start; background: lightcoral; padding: 30px;">Item 1</div>
       <div style="align-self: center; background: lightblue; padding: 10px;">Item 2</div>
       <div style="align-self: flex-end; background: lightgreen; padding: 20px;">Item 3</div>
   </div>
   ```
   - **Explanation:** Item 1 aligns to the top, Item 2 centers, and Item 3 aligns to the bottom.

#### 6. **`flex-wrap`**
   Controls whether items wrap to a new line when they overflow the container:
   - **`nowrap`** (default): All items remain in one line.
   - **`wrap`**: Items wrap onto multiple lines.
   - **`wrap-reverse`**: Items wrap in the reverse direction.

   ### Code Example for `flex-wrap`:
   ```html
   <div style="display: flex; flex-wrap: wrap; width: 200px;">
       <div style="background: lightcoral; padding: 20px;">Item 1</div>
       <div style="background: lightblue; padding: 20px;">Item 2</div>
       <div style="background: lightgreen; padding: 20px;">Item 3</div>
       <div style="background: lightpink; padding: 20px;">Item 4</div>
   </div>
   ```
   - **Explanation:** Items wrap onto a new line when they exceed the container width.

Thank you for catching that! I’ll provide a more complete explanation of the `flex-grow`, `flex-shrink`, and `flex-basis` properties, along with examples to illustrate each of them. Here’s the revised section:

---

### 7. **`flex-grow`, `flex-shrink`, and `flex-basis`**

These properties define how flex items adjust their sizes based on the available space within the flex container.

#### **`flex-grow`**
- Specifies how much a flex item should grow relative to other items inside the same container when there’s extra space.
- **Default value:** `0` (does not grow).
- If set to `1`, the item will take up remaining space in proportion to other items’ `flex-grow` values.

   ### Code Example for `flex-grow`:
   ```html
   <div style="display: flex;">
       <div style="flex-grow: 1; background: lightcoral; padding: 20px;">Grow 1</div>
       <div style="flex-grow: 2; background: lightblue; padding: 20px;">Grow 2</div>
       <div style="flex-grow: 3; background: lightgreen; padding: 20px;">Grow 3</div>
   </div>
   ```
   - **Explanation:** The items grow to fill the container’s extra space in a 1:2:3 ratio.

#### **`flex-shrink`**
- Controls how much a flex item should shrink relative to other items when the container’s space is insufficient.
- **Default value:** `1` (items can shrink).
- If set to `0`, the item will not shrink when the container overflows.

   ### Code Example for `flex-shrink`:
   ```html
   <div style="display: flex; width: 300px;">
       <div style="flex-shrink: 1; width: 200px; background: lightcoral; padding: 20px;">Shrink 1</div>
       <div style="flex-shrink: 2; width: 200px; background: lightblue; padding: 20px;">Shrink 2</div>
       <div style="flex-shrink: 3; width: 200px; background: lightgreen; padding: 20px;">Shrink 3</div>
   </div>
   ```
   - **Explanation:** If the container's width is less than 600px, the items will shrink in a 1:2:3 ratio to fit within the container.

#### **`flex-basis`**
- Specifies the initial main size of a flex item before any growing or shrinking occurs.
- **Default value:** `auto`, which sizes the item based on its content.
- Can also be set to a specific width or height, depending on the direction (`flex-direction`).

   ### Code Example for `flex-basis`:
   ```html
   <div style="display: flex;">
       <div style="flex-basis: 100px; background: lightcoral; padding: 20px;">Basis 100px</div>
       <div style="flex-basis: 200px; background: lightblue; padding: 20px;">Basis 200px</div>
       <div style="flex-basis: 150px; background: lightgreen; padding: 20px;">Basis 150px</div>
   </div>
   ```
   - **Explanation:** The items are sized initially to 100px, 200px, and 150px, respectively, regardless of the container size.

#### **`flex` shorthand property**
- Combines `flex-grow`, `flex-shrink`, and `flex-basis` into one line:
  - **Syntax:** `flex: [flex-grow] [flex-shrink] [flex-basis];`

   ### Code Example for `flex` shorthand:
   ```html
   <div style="display: flex;">
       <div style="flex: 1 1 100px; background: lightcoral; padding: 20px;">Flex 1 1 100px</div>
       <div style="flex: 2 1 200px; background: lightblue; padding: 20px;">Flex 2 1 200px</div>
       <div style="flex: 1 0 150px; background: lightgreen; padding: 20px;">Flex 1 0 150px</div>
   </div>
   ```
   - **Explanation:**
     - **Item 1:** Starts with 100px, grows proportionally, and can shrink.
     - **Item 2:** Starts with 200px, grows twice as fast, and can shrink.
     - **Item 3:** Starts with 150px, grows, but does not shrink.


### **Responsive Layout Examples**
   #### Example 1: Responsive Flexbox Layout
   ```html
   <div class="flex-container">
       <div class="flex-item">Item 1</div>
       <div class="flex-item">Item 2</div>
       <div class="flex-item">Item 3</div>
   </div>

   <style>
       .flex-container {
           display: flex;
           flex-wrap: wrap;
       }

       .flex-item {
           flex: 1 1 200px;
           margin: 10px;
           background: lightcoral;
       }

       @media (max-width: 600px) {
           .flex-item {
               flex: 1 1 100%;
           }
       }
   </style>
   ```
   - **Explanation:** The layout is flexible, and at smaller screen sizes (600px or less), items stack vertically.
