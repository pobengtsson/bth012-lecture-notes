/**************************/
// TEXT



// PITFALL: due to how javascript represents unicode characters
//Example:
let euro = "€";
let love = "❤";
euro.length == 1   // this string has one 16-bit element
love.length == 2  // the UTF-16 encoding of ❤ is "\ud83d\udc99"

// So how can we get the printable charactes easily:
{
  let count = 0
  let sentence = "some unicode string 🥰😍😎🤩"
  for (let printable of sentence)
    count++
  // console.log(`length: ${sentence.length}  printable count: ${count}`)
}

let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

let list = "123;144;456754".split(';')
// console.log(list)

// Searching for a string in a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l
// console.log("aaaaa".indexOf('b'))

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

// When you want many copies of a string put together
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
      //  console.log(`Radix: ${radix} => ${foo.toString(radix)}`)
  }
}

// Examples toFixed(precision):
{
  // toFixed(precision)  => number of decimals, _never_ exponential notation, rounds up
  const value = 123.45678901234
  // for (precision of [0,1,2,5,7])
    // console.log(`Value: ${value} precision: ${precision} => ${value.toFixed(precision)}`)
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
