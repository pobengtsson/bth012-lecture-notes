/************************************************************************/
/** Problem:
 *  A user inputs a string that represents a number.
 *  Convert the string to a number and then double it.
 */

/** Solution:
 * JavaScript will automatically type convert the
 * string to a number when using the multiplication operator.
 */

{
  let userInput = "42"
  let doubledNumber = userInput * 2
  // console.log(doubledNumber) // 84
}


/************************************************************************/
/** Problem:
 *  A user provides their name as input.
 *  Check if they have provided a non-empty name and log a welcome
 *  message or an error message accordingly.
*/
/** Solution:
 * JavaScript will automatically consider an empty string as falsy
 * and a non-empty string as truthy when used in a conditional statement.
 */
{
  let userName = "John"; // Test your code by changing the string to empty string
  // if (userName) {
  //     console.log(`Welcome, ${userName}!`);
  // } else {
  //     console.log("Please provide a valid name.");
  // }
}

/************************************************************************/
/** Problem: A user enters the amount they've saved this month
 *  as a string.
 * Add it to their total savings and display the updated savings.
 */
/** Solution:
 * In JavaScript, adding a string representation of a number to a
 * number will concatenate them if we aren't careful. We'll need
 * to convert the user input to a number before adding.
 */
{
  let userSavingsInput = "150" // Suppose this is the amount user saved this month
  let totalSavings = 1000 // Balance before this month's savings

  // Convert user input to a number and add to total savings
  totalSavings += Number(userSavingsInput)

  // console.log(`Your updated savings is SEK ${totalSavings}.`) // Outputs: Your updated savings is $1150.
}


/************************************************************************/
/** Problem: A user inputs a temperature reading in the format "Monday 15C".
 *  Check if the user inputs a temperature above 20C.
 */
/** Solution: */
{
  let temperatureInput = "Monday c25C"
  let parts = temperatureInput.split(' ') // splits the string into two parts
  let temperatureNumber = parseInt(parts[1]) // ignores white space, and parses until non-digits
  // console.log(temperatureNumber)
  // if (temperatureNumber > 20) {
  //     console.log("Temperature is above 20C")
  // } else {
  //     console.log("Temperature is 20C or below")
  // }
}
