/**************************/
// TEXT

// when we code we often work with text in some ways,
// we ask for input from the user, and process that input
// we try to make numbers or data of the input (parsing)
// we also want to output data to the users and to make it easy to understand and look better
// we want to format the data, making tables look nice, numbers have right number of decimals etc.

// in javascript, all these things is done using string and its operators and functions

/**
  type => string
  Strings:
  -  are an immutable ordered sequence of 16-bit values
	    each of which typically represents a Unicode character
	- have all a length property that is:
      the number of 16-bit values it contains

  - use zero-based indexing
  - that are empty (the empty string, "") have length 0
  - have no special type that represents a single element of a string (like Character in Java)
	    to represent a single 16-bit value, simply use a string that has a length of 1.
*/

// example:
{
  let x = "w"
}


// PITFALL: due to how javascript represents unicode characters
//Example:
let euro = "€";
let love = "❤";
euro.length == 1   // this string has one 16-bit element
love.length == 2  // the UTF-16 encoding of ❤ is "\ud83d\udc99"


/****************************/
// Strings are iterable
// Iterates of the characters, not the 16-bit values

// example for/of
/*
for (letter of "❤")
  console.log(letter)
*/

// example spread operator (...)
/*
console.log(..."kalle")
*/
// Note how the letters are spaced.

/**************************/
/* STRING LITERALS */

//single (''),
'a nice example of single quoted string'
//double quotes (""), or
"beautiful example of double quoted string"
// backticks (``)
let x = `extravagant example of back-ticked string`

// The empty string
var emptyString = ""

// A simple string in single quotes
var singleQuotedString = 'example'

// A str in single quotes with an inner double quote
var str = 'value="input"'

// A complex string with an inner single quote
var complexSingleQuoteString = "Isn't it amazing how Rowling's stories inspire?"

// A descriptive string about a math concept
var mathDescriptionString = "π represents the ratio of a circle's circumference to its diameter"

// Concatenation and source lines and output lines
{
  let str = 'foo\nbar'
  // console.log(str) // prints two lines (new line character escaped
}

/****************************/
/* BACKTICKS - multi-lines */
// write a single line string on multiple source lines
{
  let sl = `foo \
  bar`
  // console.log(sl) // prints single line with "foo bar"
}

// or, write a multi-line string on multiple source lines (verbatim)
{
  let ml = `foo
  bar`
//  console.log(ml) // prints to two lines, first ’foo' then 'bar’ on the second line
}

/****************************/
/* BACKTICKS - Template strings */
// similar to string interpolation in other languages
{
  let foo = `10`
  let bar = `foo is ${foo}`
  // console.log(bar == `foo is 10`) // prints true
}

// A template string with both single and double quotes
{
  var templateString = `"He exclaimed 'wow'", she responded.`
  // console.log(templateString)
}


/****************************/
/* ESCAPING IN STRINGS */
{
  let exampleString =
    "NUL:\0|" +          // The NUL character
    "BS:\b|" +           // Backspace
    "HT:\t|" +           // Horizontal tab
    "NL:\n|" +           // Newline
    "VT:\v|" +           // Vertical tab
    "FF:\f|" +           // Form feed
    "CR:\r|" +           // Carriage return
    "DQ:\"" + "|" +      // Double quote
    "SQ:\'" + "|" +      // Single quote
    "BSL:\\" + "|" +     // Backslash
    "HEX:\x41|" +        // Unicode character specified by two hexadecimal digits - This is "A"
    "U:\u0042|" +        // Unicode character specified by four hexadecimal digits - This is "B"
    "U+:\u{43}|"        // Unicode character specified by the codepoint in ES6 format - This is "C"

  // console.log(exampleString)
}

/****************************/
/* Working with Strings */
{ // Concatenation with + operator
  let str = "one" + "two"
  // console.log(str) // prints ”onetwo”
}

let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6


/****************************/
/* FORMATTING STRINGS from NUMBERS*/
// All objects has a toString()
// Global object Number

// Examples toString(n):
{
  //   .toString(n)  => n i radix  eg. 2, 8, 10, 16  gives binary, octal, decimal and hexadecimal
  let foo = Number(103)
  for (radix of [2,8,10,16,21]) {
    //    console.log(`Radix: ${radix} => ${foo.toString(radix)}`)
  }
}

// Examples toFixed(precision):
{
  // toFixed(precision)  => number of decimals, _never_ exponential notation, rounds up
  const value = 123.45678901234
  // for (precision of [0,1,2,5,7])
  //   console.log(`Value: ${value} precision: ${precision} => ${value.toFixed(precision)}`)
}

// Examples toExponential(precision):
{
  // toExponential(n) =>  number of decimals, _always_ exponential notation, rounds up
  const value = 123.45678901234
  // for (precision of [0,1,2,5,7])
  //   console.log(`Value: ${value} precision: ${precision} => ${value.toExponential(precision)}`)
}

// Examples toPrecision(n):
{
  // toPrecision(n) => uses exponential if necessary to make precision as argument, rounds up
  // defined for precision values from 1 and up
  const value = 123.45678901234
  // for (precision of [1,2,5,7])
  //   console.log(`Value: ${value} precision: ${precision} => ${value.toPrecision(precision)}`)
}
