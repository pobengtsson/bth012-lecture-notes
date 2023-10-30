| Selector                    | Description                          | Example                                      |
|-----------------------------|--------------------------------------|----------------------------------------------|
| `*`                         | All elements                         | `* {color: red;}`                            |
| `E`                         | Elements of type E                   | `div {border: 1px solid;}`                   |
| `.class`                    | Elements with class "class"          | `.alert {color: red;}`                       |
| `#id`                       | Element with ID "id"                 | `#header {height: 50px;}`                    |
| `E F`                       | F inside E                           | `ul li {list-style-type: circle;}`           |
| `E > F`                     | F directly inside E                  | `div > p {color: green;}`                    |
| `E + F`                     | F directly after E                   | `h2 + p {font-size: 1em;}`                   |
| `E ~ F`                     | F siblings after E                   | `h2 ~ p {margin-top: 2em;}`                  |
| `[attr]`                    | Elements with attribute "attr"       | `input[disabled] {opacity: 0.5;}`            |
| `[attr=value]`              | Elements with attr="value"           | `input[type="text"] {width: 100%;}`          |
| `[attr^=value]`             | Attr starts with "value"             | `a[href^="http://"] {color: blue;}`          |
| `[attr$=value]`             | Attr ends with "value"               | `img[src$=".png"] {border: none;}`           |
| `[attr*=value]`             | Attr contains "value"                | `a[href*="google"] {font-weight: bold;}`     |
| `:active`                   | Activated element                    | `a:active {color: yellow;}`                  |
| `:checked`                  | Checked form elements                | `input:checked {background: gray;}`          |
| `:disabled`                 | Disabled form elements               | `input:disabled {background: lightgray;}`    |
| `:empty`                    | Elements with no children            | `div:empty {display: none;}`                 |
| `:first-child`              | First child of its parent            | `ul > li:first-child {font-weight: bold;}`   |
| `:last-child`               | Last child of its parent             | `ul > li:last-child {font-style: italic;}`   |
| `:nth-child(n)`             | nth child of its parent              | `ul > li:nth-child(2) {color: red;}`         |
| `:nth-last-child(n)`        | nth child from last                  | `ul > li:nth-last-child(2) {color: green;}`  |
| `:nth-of-type(n)`           | nth element of its type              | `p:nth-of-type(2) {text-decoration: underline;}` |
| `:nth-last-of-type(n)`      | nth element of its type from last    | `p:nth-last-of-type(2) {font-size: 1.5em;}`  |
| `:not(s)`                   | Elements not matching "s" selector   | `p:not(.special) {color: gray;}`             |
| `:hover`                    | Element being hovered                | `a:hover {text-decoration: underline;}`      |
| `:focus`                    | Element focused                      | `input:focus {border-color: blue;}`          |
| `::before`                  | Content before                       | `p::before {content: "Read: ";}`             |
| `::after`                   | Content after                        | `p::after {content: ".";}`                   |
| `::first-line`              | First line                           | `p::first-line {font-weight: bold;}`         |
| `::first-letter`            | First letter                         | `p::first-letter {font-size: 2em;}`          |

