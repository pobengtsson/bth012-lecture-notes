// Conditionals, if, if/else, if/else if


/**************************/
/* If-statement (grammar):
if (expression)
	statement

  Note: parenthesis around expression are _required_ syntax
*/

// Example:
/*
if (true)
  console.log("Condition was true")
*/

// Variant with compound statement
/*
if (1==true) {
  console.log("1 is truthy")
}
*/

/* If-else grammar
if (expression)
  statement
else
  statement
*/

// Example:
/*
if (0 == true)
  console.log("This SHOULDN't get printed to the log, because 0 is falsy")
else
  console.log("0 is falsy, so this else statement should be printed to the log")
*/

// Warning when nesting if-else statements
// (bad code smell and easily cause confusion)

// Example:
/*
	i = j = 1
	k = 2
	if (i === j)
	    if (j === k)
        	console.log("i equals k")
	else
	    console.log("i doesn't equal j")    // WRONG!!
*/

//	else belongs to the nearest if
//	solve by using compound statements between if and else

// Example: (Does not print anything.)
/*
i = j = 1
k = 2
if (i === j) {
    if (j === k)
        console.log("i equals k")
} else {
    console.log("i doesn't equal j")
}
*/


/* If/else if grammar
	else if (expression)
		statement

	prefer else if over nested if-else
*/

// Example:
/*
i = j = 1;
k = 2;
if (i === j)
  ;
else if (j === k)
  console.log("i equals k");
else
  console.log("i doesn't equal j");
  */

/**************************/
/* Swith statement grammar
switch(expression) {
	case value:
		break
	default:  //optional, if no case match the block is skipped
		break
}

*/
// Example:
/*
switch(12) {
  case 10:
    console.log("surprising print out. Shouldn't print this")
    break
  case 12:
    console.log("Expected print out.")
    break
  default:
    console.log("surprising default print out. Shouldn't print this")
    break
}
*/
// NOTE: Breaks required, unless fall-through is desired
// Example:
/*
switch(12) {
  case 10:
    console.log("surprising print out. Shouldn't print this")
    // break
  case 12:
    console.log("Expected print out.")
    // break
  default:
    console.log("Surprising default print out. Shouldn't print this")
    // break
}
*/

//Keep in mind that convertibility of one value to another does not imply equality of those two values.
//If undefined is used where a boolean value is expected, for example, it will convert to false.
//	does not mean that undefined == false.
//	operators and statements expect values of various types and perform conversions to those types.
// Example: If-statement
if (undefined)
  console.log("THIS SHOULD NOT BE PRINTED TO THE LOG")
// else
//   console.log("undefined was converted to false, as expected")

// Example: == operator never attempts to convert to booleans.
if ("true" == true)
  console.log("'true' was UNEXPECTEDLY converted to a boolean")
// else
//   console.log("'true' was not converted to boolean true, as expected")

//	=> Explore conversions on your own!!!
// This is a major difference of javascript compared to Java, and Python

// END
