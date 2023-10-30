# NUMBERS

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
