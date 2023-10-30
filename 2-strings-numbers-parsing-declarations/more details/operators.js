
/****************************/
/* OPERATORS */

// by operator precedence. The operators listed first have higher precedence
const table = [
  ["Operator", "Operation", "Associativity", "Number of operands", "Types"],
  ["++", "Pre- or post-increment", "R", 1, "lval→num"],
  ["--", "Pre- or post-decrement", "R", 1, "lval→num"],
  ["-", "Negate number", "R", 1, "num→num"],
  ["+", "Convert to number", "R", 1, "any→num"],
  ["~", "Invert bits", "R", 1, "int→int"],
  ["!", "Invert boolean value", "R", 1, "bool→bool"],
  ["delete", "Remove a property", "R", 1, "lval→bool"],
  ["typeof", "Determine type of operand", "R", 1, "any→str"],
  ["void", "Return undefined value", "R", 1, "any→undef"],
  ["**", "Exponentiate", "R", 2, "num,num→num"],
  ["*, /, %", "Multiply, divide, remainder", "L", 2, "num,num→num"],
  ["+, -", "Add, subtract", "L", 2, "num,num→num"],
  ["+", "Concatenate strings", "L", 2, "str,str→str"],
  ["<<", "Shift left", "L", 2, "int,int→int"],
  [">>", "Shift right with sign extension", "L", 2, "int,int→int"],
  [">>>", "Shift right with zero extension", "L", 2, "int,int→int"],
  ["<, <=, >, >=", "Compare in numeric order", "L", 2, "num,num→bool"],
  ["<, <=, >, >=", "Compare in alphabetical order", "L", 2, "str,str→bool"],
  ["instanceof", "Test object class", "L", 2, "obj,func→bool"],
  ["in", "Test whether property exists", "L", 2, "any,obj→bool"],
  ["==", "Test for non-strict equality", "L", 2, "any,any→bool"],
  ["!=", "Test for non-strict inequality", "L", 2, "any,any→bool"],
  ["===", "Test for strict equality", "L", 2, "any,any→bool"],
  ["!==", "Test for strict inequality", "L", 2, "any,any→bool"],
  ["&", "Compute bitwise AND", "L", 2, "int,int→int"],
  ["^", "Compute bitwise XOR", "L", 2, "int,int→int"],
  ["|", "Compute bitwise OR", "L", 2, "int,int→int"],
  ["&&", "Compute logical AND", "L", 2, "any,any→any"],
  ["||", "Compute logical OR", "L", 2, "any,any→any"],
  ["??", "Choose 1st defined operand", "L", 2, "any,any→any"],
  ["?:", "Choose 2nd or 3rd operand", "R", 3, "bool,any,any→any"],
  ["=", "Assign to a variable or property", "R", 2, "lval,any→any"],
  ["**=, *=, /=, %=, +=, -=, &=, ^=, |=, <<=, >>=, >>>=", "Operate and assign", "R", 2, "lval,any→any"],
  [",", "Discard 1st operand, return 2nd", "L", 2, "any,any→any"]
];

function printTable(table) {
  const columnWidths = table[0].map((_, columnIndex) =>
  Math.max(...table.map(row => String(row[columnIndex]).length))
  );

  for (const row of table) {
    console.log(
      row.map((cell, index) =>
      String(cell).padEnd(columnWidths[index])
      ).join("  ")
      );
    }
  }
// Example
// printTable(table);  // uncomment to print the operators table

// Concerning the type lval:
// In JavaScript, variables, properties of objects, and elements of arrays are lvalues (type is table).


/****************************/
/* Operator Associativity */
// Means: Order of which operations of same precedence are performed

// Examples: left to right associativity
{
  let x, y , z
  w1 = x - y - z
  // is the same as:
	w2 = ((x - y) - z)

  w1 == w2 // true
}

// On the other hand, the following expressions:
// examples: right to left associativity
{
  let a,b,c,e,f,g
  let x, y , z
  // right to left
  y = a ** b ** c;
	x = ~-y;
	w = x = y = z;
	q = a?b:c?d:e?f:g;
//  are equivalent to:
	y = (a ** (b ** c));
	x = ~(-y);
	w = (x = (y = z));
	q = a?b:(c?d:(e?f:g));
}


/****************************/
/* operators HIGHLIGHTS - differences/unexpected */

// Examples of special uses of operators for conversion
{
  //unary +:
  let foo =	+"1"  // converts to number then does nothing
  //unary -:
	let bar = -"4" //  converts to number and changes sign => -4
}

// Examples of pre and post increment operators (simiar to Java)
{
  // Increment operators (++, --):
  //converts to number and assigns value back (has side effects)
	// operator POSITION SIGNIFICANT =>  (post and pre increment)
  let x = 4
  let y = ++x  // first adds 1 to value of x then returns the resulting value
  let z = x++  // first returns the value of x then adds 1
  x == 4
  y == 5
  z == 4
}

/* EQUALITY (==) versus strict (===) equality */
// ==
//     => operator for logical comparison that does conversion
// ===
//     => strict operator for logical comparison returns false if operands are of different types
//        (does not allow automatic conversion)



/* TERNARY OPERATOR ?: */
// ?: operator  is sometimes much more convenient than if-statements, e.g.
{
  let foo = true
	let x  = foo ? 'got foo' : 'was bar'
  // console.log(x)  // prints "got foo"
}



/* First defined operator ?? */
// similar to null-coalesce in other languages
//	useful to provide default values in e.g. user interfaces
// example
{
  let a
  let b = "value of b"
  let x =  a ?? b
  // console.log(x) // prints "value of b"
}
// A variant using the logical or operator
{
  let a
  let b = "value of b"
  let x =  a || b
  // console.log(x) // prints "value of b"
}


// NOTE there are differences depending in how ?? and || does conversion of values
// ?? only checks for null or undefined, while || checks for all falsy values.
// || will choose default for empty string, 0, false, NaN, (sometimes the needed behaviour in UI)
// example:
const exampleValue = (value, description) => {
  console.log(`For ${description} (${value}):`);
  console.log(`?? operator results in: ${value ?? 'Default'}`);
  console.log(`|| operator results in: ${value || 'Default'}`);
  console.log('------------');
}

const valuesToTest = [
  [null, "null"],
  [undefined, "undefined"],
  ["", "empty string"],
  [0, "zero"],
  [false, "false"],
  [NaN, "NaN"],
  ["sample text", "a truthy value"]
];

// valuesToTest.forEach(([value, desc]) => exampleValue(value, desc));
