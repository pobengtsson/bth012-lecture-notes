/************************************************************************/
/** Problem: A user wants to print out the numbers from 21 to 33.
 */


/** Solution:
 */
// {
//   for (let i = 21; i <= 33; i++) {
//     console.log(i);
//   }
// }



/************************************************************************/
/** Problem: A user has an array of their favorite fruits and
 *  wants to print out each fruit in the list.
 */

/**Solution:
 */
// {
//   let fruits = ["apple", "banana", "cherry", "date", "elderberry"]
//   for (let fruit of Object.keys(fruits)) {
//       console.log(fruit)
//   }
// }



/************************************************************************/
/** Problem: A user wants to keep doubling a number until it
 *  exceeds 1000. They want to know what the final value is.
 */

/** Solution:
 */
// {
//   let number = 1
//   while (number <= 1000) {
//       number *= 2
//   }
//   console.log(number);
// }



/************************************************************************/
/** Problem: A user is prompted to enter a password.
 * They should be re-prompted until they enter the
 * correct password "jsRocks".
 */

/** Solution:
 */
// Generator function
// function* passwordInputSimulation() {
//   yield "jsIsCool"
//   yield "openAI"
//   yield "jsRocks"
//   yield "anotherTry"
//   yield "lastAttempt"
//   while(true) {
//     yield 'stubbornly entering the same password over and over again'
//   }
// }

// {
//   const passwordGenerator = passwordInputSimulation();
//   const correctPassword = "jsRocks";
//   let userAttempt;
//   let attemptCount = 0;
//   do {
//       userAttempt = passwordGenerator.next().value // get the next user password input attempt (Simulated)
//       attemptCount++;
//   } while (userAttempt !== correctPassword && attemptCount < 5);

//   if (userAttempt === correctPassword) {
//       console.log(`Correct password entered in attempt ${attemptCount}!`);
//   } else {
//       console.log("User failed to enter the correct password after all attempts.");
//   }
// }

// About generators:
// - yield only works inside generator functions.
//   -> Using yield in a normal function is a syntax error.
// - Arrow functions CANNOT be generators.
// for...of iterates values until done === true;
//   -> it ignores the final return value of the generator.
// You CAN make async generators with async function* name(...).
// If you don't need to pause/stream values, prefer a normal function that returns an array or object (simpler and more predictable).


/************************************************************************/
/** Problem: Print a pyramid '*' characters to the console.
 */

/** Solution:
 */
// {
//   const rows = 2
//   for (let i = 1; i <= rows; i++) {
//     let str = ""
//     for (let j = 1; j <= rows - i; j++) {
//         str += " "
//     }
//     for (let k = 1; k <= 2*i-1; k++) {
//         str += "*"s
//     }
//     console.log(str)
//   }
// }
