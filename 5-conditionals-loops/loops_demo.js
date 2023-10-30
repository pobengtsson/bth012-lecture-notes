/************************************************************************/
/** Problem: A user wants to print out the numbers from 21 to 33.
 */


/** Solution:
 */
{
  for (let i = 21; i <= 33; i++) {
      // console.log(i);
  }
}



/************************************************************************/
/** Problem: A user has an array of their favorite fruits and
 *  wants to print out each fruit in the list.
 */

/**Solution:
 */
{
  const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
  for (let fruit of fruits) {
      // console.log(fruit);
  }
}



/************************************************************************/
/** Problem: A user wants to keep doubling a number until it
 *  exceeds 1000. They want to know what the final value is.
 */

/** Solution:
 */
{
  let number = 1;
  while (number <= 1000) {
      number *= 2;
  }
  // console.log(number);
}



/************************************************************************/
/** Problem: A user is prompted to enter a password.
 * They should be re-prompted until they enter the
 * correct password "jsRocks".
 */

/** Solution:
 */
function* passwordInputSimulation() {
  yield "jsIsCool";
  yield "openAI";
  yield "jsRocks";
  yield "anotherTry";
  yield "lastAttempt";
}

{
  const passwordGenerator = passwordInputSimulation();
  let correctPassword = "jsRocks";
  let userAttempt;
  let attemptCount = 0;
  do {
      userAttempt = passwordGenerator.next().value // get the next user password input attempt (Simulated)
      attemptCount++;
  } while (userAttempt !== correctPassword && attemptCount < 5);

  // if (userAttempt === correctPassword) {
  //     console.log(`Correct password entered in attempt ${attemptCount}!`);
  // } else {
  //     console.log("User failed to enter the correct password after all attempts.");
  // }
}




/************************************************************************/
/** Problem: Print a pyramid '*' characters to the console.
 */

/** Solution:
 */
{
  const rows = 5;
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= 2*i-1; k++) {
        str += "*";
    }
    // console.log(str);
  }
}
