# JavaScript == ECMAScript-ECMA262 && Javascript !== ECMAScript

In daily speak we say JavaScript to mean what we code for web and others (==), but strictly (===) speaking, JavaScript is a trademark that is not really meaning the programming language that browsers and other environments support and run.

ECMA is a standardization organisation that decides on the ECMAScript standard (ECMA262) and has been updating the standard in regular editions since 2015.

These regular updates is to ensure ECMAScript remains efficient and developer-friendly. As ECMAScript evolves, understanding these features will help in writing more robust and modern code.

Here’s a condensed summary of key ECMAScript (ES) changes starting from ES6 to ES15, highlighting what both teachers and students of an intermediate JavaScript course should know:

## ES6 (2015)
The most significant update to JavaScript, **ES6** introduced features that modernized the language:
- **Block-scoped variables** with `let` and `const`.
- **Arrow functions** (`() => {}`), which offer a shorter syntax for anonymous functions.
- **Classes** for object-oriented programming.
- **Modules** (`import` and `export`) to structure code.
- **Promises** for asynchronous operations.
- **Template literals** (using backticks for multi-line strings and embedding expressions).
- **Destructuring** for arrays and objects.
- New data structures like **Map**, **Set**, **WeakMap**, and **WeakSet**.

## ES7 (2016)
This version had minor but important updates:
- **Exponentiation operator** (`**`) as an alternative to `Math.pow`.
- **Array.prototype.includes** to check if an array contains a certain value.

## ES8 (2017)
**ES8** focused on improving object handling and async programming:
- **Async/await** for writing cleaner asynchronous code.
- **Object.entries()** and **Object.values()** to work with object properties easily.
- **String padding** with `padStart` and `padEnd` methods.

## ES9 (2018)
This update focused on iteration and object manipulation:
- **Spread/rest properties** (`...`) for objects, allowing for easier copying and merging.
- **Promise.finally()** for handling cleanup code after promises.
- Asynchronous iteration using `for-await-of`.

## ES10 (2019)
Key updates in **ES10** include:
- **Array.prototype.flat()** and **flatMap()** for flattening arrays.
- **Optional catch binding** (you can omit the error object in `catch` blocks).
- **Object.fromEntries()** to convert key-value pairs into an object.

## ES11 (2020)
**ES11** brought improvements for nullish values and dynamic imports:
- **Nullish coalescing** (`??`) for setting default values.
- **Optional chaining** (`?.`) to safely access nested object properties.
- **Dynamic imports** (`import()` function) for asynchronous loading of modules.

## ES12 (2021)
Key features of **ES12**:
- **Logical assignment operators** (`||=`, `&&=`, `??=`).
- **Numeric separators** (e.g., `1_000_000` for readability in large numbers).
- Enhancements to **Promise.any()**.

## ES13 (2022)
In **ES13**, the language focused on standardization:
- **Top-level `await`**: Using `await` directly at the top level of modules.
- Improved control over array operations like `Array.prototype.at()`.

## ES14 (2023)
Important additions in **ES14** include:
- **Hashbang syntax** (`#!/usr/bin/env node`) for writing scripts directly executable in UNIX-like environments.
- Improvements to RegEx matching for better performance.

## ES15 (2024)
The latest, **ES15** (2024) introduces:
- **Array grouping methods** like `groupBy` for organizing array elements based on a condition.
- The **Temporal API** as a modern alternative to the Date object, offering better date and time handling.
- **RegExp match indices** (`/d` flag) for capturing the start and end positions of matches in regular expressions.
- **Enhanced error causes**, allowing developers to link errors for better debugging.
