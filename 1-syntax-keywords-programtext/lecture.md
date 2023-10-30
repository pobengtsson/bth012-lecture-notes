# Lecture 1 Variables and Arithmetic expressions (reduced)

Great source for javascript documentation:
https://developer.mozilla.org/


## PROGRAM TEXT
Case sensitive
	while (keyword)
	different from While, WHILE, whilE

	online, Online, OnLine, ONLINE are different variable names

Spaces between tokens are ignored  (unless part of string literal)
White space (space, tab, some ASCII control characters and Unicode space chars)

Line breaks (newline, line feed, carriage return, CR/LF) are ignored (mostly)
	=> formatting and indentation is choice of the programmer (unlike Python)

## COMMENTS

```javascript
	//  - any character from // to the end of the line is a comment
	/*
			any character between is treated as a comment including line breaks. May not be nested.
	*/
```

## LITERALS
	A value that appears directly in a program.
	Sometimes referred to as HARD CODED

```javascript
12               // The number twelve
1.2              // The number one point two
"hello world"    // A string of text
'Hi'             // Another string
true             // A Boolean value
false            // The other Boolean value
null             // Absence of an object
```

=> object literals later

## IDENTIFIERS

An identifier is simply a name
	used to name constants, variables, properties, functions, and classes and to provide labels for certain loops in JavaScript code
	must begin with a letter, an underscore (_), or a dollar sign ($)
	Subsequent characters can be letters, digits, underscores, or dollar signs.
	Digits are not allowed as the first character
		(so that JavaScript can easily distinguish identifiers from numbers.)

Legal identifiers:
```javascript
i
my_variable_name
v13
_dummy
$str
```

## RESERVED WORDS
part of the JavaScript language.
  * Many of these (such as if, while, and for) are reserved keywords that must not be used as the names of constants, variables, functions, or classes
	* though they can all be used as the names of properties within an object.
	* Others (such as `from`, `of`, `get`, and `set`)  are perfectly legal as identifiers.

  * Still other keywords (such as `let`) can’t be fully reserved in order to retain backward compatibilitycomplex rules that govern when they can be used as identifiers and when they cannot.
		- (let can be used as a variable name if declared with var outside of a class, for example, but not if declared inside a class or with const.)

avoid using any of these words as identifiers, except for from, set, and target, which are safe to use and are already in common use.

| | | | | | | |
| ----- | ----- | ----- | ----- | ----- | ------ | ----- |
| `as`| `const`| `export`| `get`| `null`| `target` | `void` |
| `async`| `continue`| `extends`| `if`| `of`| `this` | `while` |
| `await`| `debugger`| `false`| `import`| `return`| `throw` | `with` |
| `break`| `default`| `finally`| `in`| `set`| `true` | `yield` |
| `case`| `delete`| `for`| `instanceof`| `static` | `try` |
| `catch`| `do`| `from`| `let`| `super` | `typeof` |
| `class`| `else`| `function`| `new`| `switch` | `var` |

reserved for future versions:
`enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`

For historical reasons, arguments and eval are not allowed as identifiers in certain circumstances and are best avoided entirely.

## UNICODE
Its valid to use Unicode printable characters as identifiers, e.g. math characters etc

const π = 3.14;
const sí = true;

## OPTIONAL SEMI COLONS

`;` is used to separate statements

No need when followed by new line
Needed when followed by new statement
```javascript
let var = 1
let other_var = 2
```

compared to
```javascript
let var = 1 ; let other_ver = 2
```

## TYPES

Two categories:
* primitive types, and
* object types (we’ll come to objects later)

Primitive types in Javascript:
* `number`
* `string`
* `boolean`  (true or false)

special values: `null` and `undefined` only member of its own special type

ES6 adds a new special type: `Symbol`

Any (valid) JavaScript value
	that is not a number, a string, a boolean, a symbol, null, or undefined
	=> is an object

**more on objects in later classes**

## Memory handling

Javascript interpreter does automatic memory allocation and garbage collection
- no need for the programmer to (de)allocate memory

## MUTABILITY

**values are immutable**
	means => strings, since they are values, are immutable

```javascript
a = ”abc”
b = a
(a == b) == true
a = ”qwe”
(a == b) == false
```


## VARIABLES and CONSTANTS

```javascript
let
const
var  // obsoleted, complex semantics and scoping)
```

## NUMBERS

* JavaScript's primary numeric type is "Number."
* "Number" is used to represent integers and approximate real numbers.
* JavaScript represents numbers using the 64-bit floating-point format as defined by the IEEE 754 standard.
* It can represent numbers as large as ±1.7976931348623157 × 10^308.
* It can represent numbers as small as ±5 × 10^−324.
* You can exactly represent all integers between −9,007,199,254,740,992 (−2^53) and 9,007,199,254,740,992 (2^53) inclusive in JavaScript.
* Using integer values beyond this range may result in a loss of precision in the trailing digits.
* Some JavaScript operations, such as array indexing and bitwise operators, use 32-bit integers.

### NUMBER LITERALS
* Numbers directly appearing in a JavaScript program are called "numeric literals."
* Often referred to as ”Hard Coded” values
* Any numeric literal can be prefixed with a minus sign (-) to denote negativity.
* various formats

#### INTEGER LITERALS

**BASE 10**
written as a sequence of digits
```javascript
0
-1
14
90345908436
```

**BASE 16 (HEXADECIMAL)**
Prefix: `0X`  or `0x`
then followed by digits (0-9) or letters A-F or a-f


**BASE 2 (binary) and BASE 8 (octal)**
ES6 also supports
prefixes: 0b and 0o

#### FLOATING POINT LITERALS

Examples
```javascript
3.14
2345.6789
.333333333333333333
6.02e23        // 6.02 × 10²³
1.4738223E-32  // 1.4738223 × 10⁻³²
```

SYNTAX:  `[digits][.digits][(E|e)[(+|-)]digits]`

### SEPARATION CHARACTER

Underscore (_) can be used in numerical literals
Ex.
```javascript
let large_number = 2_234_123
```

## Globl object Math

A global Math object defines a number of mathematical operations:
```javascript
Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)           // => 1.0: round to the nearest integer
Math.ceil(.6)            // => 1.0: round up to an integer
Math.floor(.6)           // => 0.0: round down to an integer
Math.abs(-5)             // => 5: absolute value
Math.max(x,y,z)          // Return the largest argument
Math.min(x,y,z)          // Return the smallest argument
Math.random()            // Pseudo-random number x where 0 <= x < 1.0
Math.PI                  // π: circumference of a circle / diameter
Math.E                   // e: The base of the natural logarithm
Math.sqrt(3)             // => 3**0.5: the square root of 3
Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
Math.sin(0)              // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)             // Natural logarithm of 10
Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed
```


### Arithmetic

Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero.
Instead results are:
```javascript
Infinity
-Infinity
NaN
```

Global Number object;
```javascript
Infinity                    // A positive number too big to represent
Number.POSITIVE_INFINITY    // Same value
1/0                         // => Infinity
Number.MAX_VALUE * 2        // => Infinity; overflow

-Infinity                   // A negative number too big to represent
Number.NEGATIVE_INFINITY    // The same value
-1/0                        // => -Infinity
-Number.MAX_VALUE * 2       // => -Infinity

NaN                         // The not-a-number value
Number.NaN                  // The same value, written another way
0/0                         // => NaN
Infinity/Infinity           // => NaN

Number.MIN_VALUE/2          // => 0: underflow
-Number.MIN_VALUE/2         // => -0: negative zero
-1/Infinity                 // -> -0: also negative 0
-0

// The following Number properties are defined in ES6
Number.parseInt()       // Same as the global parseInt() function
Number.parseFloat()     // Same as the global parseFloat() function
Number.isNaN(x)         // Is x the NaN value?
Number.isFinite(x)      // Is x a number and finite?
Number.isInteger(x)     // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON          // => 2**-52: smallest difference between numbers
```

#### Decimal/Floating point Rounding Errors

There are infinitely many real numbers
but only a finite number of them (18,437,736,874,454,810,627, to be exact) can be represented exactly by the JavaScript floating-point format

Integers are exakt, but division of integers and decimal numbers may not be exactly represented internally/Binary

```javascript
let x = .3 - .2;    // thirty cents minus 20 cents
let y = .2 - .1;    // twenty cents minus 10 cents
x === y             // => false: the two values are not the same!
x === .1            // => false: .3-.2 is not equal to .1
y === .1            // => true: .2-.1 is equal to .1
// BUT
x == y  // => true
```

BigInt => New support since ES2020, support for 64-bit integers. Out of the scope of this course.

## Date & Time

There is a defined class Date for date and time

```javascript
let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
```
`timestamp`, specifies the number of elapsed milliseconds since January 1, 1970

More on dates later.

## Text

type => string
an immutable ordered sequence of 16-bit values
	each of which typically represents a Unicode character
	length of a string is the number of 16-bit values it contains

strings use zero-based indexing
empty string is the string of length 0
no special type that represents a single element of a string (like Character in Java)
	to represent a single 16-bit value, simply use a string that has a length of 1.

Pitfall: du to how javascript represents unicode characters

```javascript
let euro = "€";
let love = "❤";
euro.length   // => 1: this character has one 16-bit element
love.length   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
```

iterable => for/of  or … operator
	iterate over the actual characters not the 16-bit values

### String lterals

single (`'`) or double quote (`"`) or backtick (`)
```javascript
// The empty string
var emptyString = ""

// A simple string in single quotes
var singleQuotedString = 'example'

/ An attribute in single quotes with an inner double quote
var attributeString = 'value="input"'

// A complex string with an inner single quote
var complexSingleQuoteString = "Isn't it amazing how Rowling's stories inspire?"

// A descriptive string about a math concept
var mathDescriptionString = "π represents the ratio of a circle's circumference to its diameter"
```

Concatenation and source lines and output lines
`foo\nbar`  => prints to two lines (new line character escaped

backticks give ability (since ES6) to:
```javascript
`foo \
bar`  => ’foo bar’
```
or
```javascript
`foo
bar` => ’foo \nbar’
```

Escaping in strings

Sequence	Character represented
\0	The NUL character (\u0000)
\b	Backspace (\u0008)
\t	Horizontal tab (\u0009)
\n	Newline (\u000A)
\v	Vertical tab (\u000B)
\f	Form feed (\u000C)
\r	Carriage return (\u000D)
\"	Double quote (\u0022)
\'	Apostrophe or single quote (\u0027)
\\	Backslash (\u005C)
\xnn	The Unicode character specified by the two hexadecimal digits nn
\unnnn	The Unicode character specified by the four hexadecimal digits nnnn
\u{n}	The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)
Template literals

similar to string interpolation in other languages

### String template / string interpolation
```javascript
let foo = ’10’
let bar = `foo is ${foo}`
bar == ’foo is 10’ => true

// A template string with both single and double quotes
var templateString = `"He exclaimed 'wow'", she responded.`
```

Working with Strings
```javascript
”one” + ”two” // results in ”onetwo”
let str = ’BTH’
”prefix” + str => ”prefixBTH’
```
All strings always have length property
```javascript
’someString’.length == 10 // is true
```
Strings have methods for manipulation
```javascript
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
```

## Booleans

`true` or `false`

Any value or object convert to a Boolean
These 6 values converts to false (and are called falsy)
```javascript
undefined
null
0
-0
NaN
""
```
**ALL OTHER VALUES and OBJECTS convert to true, are called truthy**

## Null and undefined

`Null` -> absence of value
`undefined` -> absence of value because the variable have not been intialized or set (if object)

```javascript
null == undefined => true
null === undefined => false
```
