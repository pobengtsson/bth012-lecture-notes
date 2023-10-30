/************************************************************************/
/** Operators demo - some differences to java, python and c
 */


/************************************************************************/
/** Problem: What is the shortest code to write to convert a string
 * representation of an number to a number?
 */
/** Solution:
 */
{
  //unary +:
  let foo =	+"1.34"  // converts to number then does nothing
  // console.log(typeof(foo), foo)
}
// Curiosity..  unary minus:
{
	let bar = -"4.234" //  converts to number and changes sign => -4
  // console.log(typeof(bar), bar)
}



/************************************************************************/
/** Problem: In, for example a loop, what is the shortest way to
 * use and increment (or decrement) a variable
 */
/** Solution:
 */
{
  let x = 10
  let y = ++x  // first adds 1 to value of x then returns the resulting value
  let z = ++x  // first returns the value of x then adds 1
  // Before running the code, guess what the values for x, y, z are?
  // console.log(`x: ${x} y:${y} z:${z}`)
}


/************************************************************************/
/** Problem: With all the automatic conversion going on i javascript,
 *  how can you be sure when comparing two variables if they really
 *  have the same value, or if they just both got converted to
 *  a boolean value of true?
 */
/**
 * Solution: Use the strict equality operator
 */
{
  let a = 10
  let b = "10"
  // if (a == b)  // allows automatic type conversion
  //   console.log("Equal!!")
  // else
  //   console.log("not equal")

  // if (a === b) // false if types are different (does not convert types)
  //   console.log("Strictly equal")
  // else
  //   console.log("No, NOT STRICTLY equal")
}



/************************************************************************/
/** Problem: You want to print one of two values (a or b) to the console.
 *  But, depending on if a third value (condition) is true,
 *  you want to print a for true and b for false.
 *  What's an elegant way to do this in javascript?
 */
/** Solution:
 * Ternary operator (?:)
 */
{
  let a = "condition was true"
  let b = "condition was false"
  let condition = true // try with false as well
  // console.log(condition ? a : b)  // prints "condition was true"
}


/************************************************************************/
/** Problem: In a ui, you want to present a value. But you don't know
 *  if the variable has a value or it is undefined or null. If there is
 *  no defined value, you want to present a default value.
 *  How can you do this with javascript in an elegant way?
 */

/** Solution:
 * First defined operator ??
 */
{
  let a = undefined
  let b = "value of b"
  let x =  a ?? b
  // console.log(x) // prints "value of b"
}

// The ?? operator is relatively new in javascript, and
// a variant using the logical or operator exists since before
// BUT they are slightly different
{
  let a
  let b = "value of b"
  let x =  a || b // same result as ??
  // console.log(x) // prints "value of b"
}


// NOTE there are differences depending in how ?? and || does conversion of values
// ?? only checks for null or undefined, while || checks for all falsy values.
let nullValue = null;
let undefinedValue = undefined;
let emptyString = "";
let zeroValue = 0;

console.log(nullValue ?? "Default");        // "Default"
console.log(undefinedValue ?? "Default");   // "Default"
console.log(emptyString ?? "Default");      // "" (because empty string is neither null nor undefined)
console.log(zeroValue ?? "Default");        // 0 (because 0 is neither null nor undefined)

console.log(nullValue || "Default");        // "Default"
console.log(undefinedValue || "Default");   // "Default"
console.log(emptyString || "Default");      // "Default" (because empty string is falsy)
console.log(zeroValue || "Default");        // "Default" (because 0 is falsy)

// SO, in some circumstances || is better and in some other ?? is better