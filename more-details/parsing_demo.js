/************************************************************************/
/** Problem: A user is entering the number of items they want
 * to purchase on an e-commerce website. The input is
 * a string that might contain non-numeric characters.
 *
 * Parse the input to get the integer value of the quantity.
 */

/** Solution:
 */
{
  let userQuantityInput = "I'd like 7 items" // Assume this is a user input

  let quantity = parseInt(userQuantityInput, 10) // Convert the string input to an integer

  // if (isNaN(quantity) || quantity <= 0) {
  //     console.log("Please enter a valid quantity.")
  // } else {
  //     console.log(`You have selected ${quantity} items.`)
  // }
}


/************************************************************************/
/** Problem: A user is documenting the growth of a plant they're
 *  cultivating. Every week, they measure how much taller the plant
 *  has grown and enter this data in various formats like "The plant
 *  grew 2.3cm this week".
 *
 * Parse the input to extract the floating-point value of the growth.
 */

/** Solution:
 */

{
  let userPlantGrowthInput = "The plant grew 2.3cm this week"; // Assume this is a user input

  let growthMatch = userPlantGrowthInput.match(/[\d\.]+/) // note the use of (reg exp) patterns
  let growth = growthMatch ? parseFloat(growthMatch[0]) : NaN

  // if (isNaN(growth) || growth < 0) {
  //     console.log("Please enter a valid growth measurement.")
  // } else {
  //     console.log(`Your plant grew ${growth}cm this week.`)
  // }
}

/** The regular expression used in the example is `/[\d\.]+/`. Let's break it down:

1. `/.../`: This denotes the beginning and
            end of a regular expression in JavaScript.

2. `[...]`: Square brackets define a character set.
            The regular expression will match any
            single character that is in this set.

3. `\d`: This is a shorthand character class that
         matches any single digit from 0 to 9.
         The backslash (`\`) is an escape character,
         because `d` alone would just match the character "d".

4. `.`: Normally, the dot matches any character (except for
        a newline). But, when it's inside the square brackets,
        it's taken literally and matches just the dot character.

5. `+`: This is a quantifier. It specifies that the preceding
        element (in this case, our character set `[...]`) must
        appear one or more times in a row. So, our regular
        expression will match one or more characters that are
        either digits or dots.

In summary, `/[\d\.]+/` will match sequences that consist of one
or more characters where each character is either a digit or a dot.
This is ideal for extracting numbers (both integers and floating point)
from strings, as it will capture sequences like "123", "0.123",
"123.456", etc. However, it would also match sequences like "...",
so the context in which it's used is important.
 */