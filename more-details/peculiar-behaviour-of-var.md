# Why you don't want to use var

## Why does javascript have `var``

In the beginning JavaScript had one way of declaring variables, `var`.

`var` declared variables are _function scoped_ and _hoisted_, both peculiar behaviors that cause unexpected bugs to programmers used to other languages like Java, C#, etc.

### `var` hoisting

JavaScript will interpret any function such that all `var` declarations will be available from the beginning of the function but not necessarily initialised, independent of where the declaration was done in the function code.

### function scoped

Because `var` declared variables are function scoped they can be reached from anywhere in the function code, independent of where there declaration code occurs.

### example
```javascript
function x() {
  var foo = '1'
  if (!foo)
  {
    console.log('not logged to console')
    var bar = ' bar'
  }
  console.log(foo + bar)
}
x()
```


## Modern javascript introduced `let` and `const``

In modern ecmascript standards `let`and `const` has been introduced.

`let` and `const` declares the variable at its point in the code and the variable is reachable in the scope of the declaration and its subscopes.

### Same example with `const`
```javascript
function x() {
  const foo = '1'
  if (!foo)
  {
    console.log('not logged to console')
    const bar = ' bar'
  }
  console.log(foo + bar)
}
x()
```
When you run this in a browser console, you will get an `Uncaught ReferenceError: bar is not defined`.

And thats because bar is only reachable in the scope of the if statement, since it is a `const` declared variable. Try replacing the `const`s with `let`s and see how it behaves.

## `var` pitfalls - nested `for`-loops

Example using `var`in the loops:
```javascript
function nestedExample() {
  let count = 0
  for (var i = 0; i < 3; i++) {
    console.log("Outer loop i:", i)

    for (var i = 0; i < 2; i++) {
      console.log("  Inner loop i:", i)
      count += 1
    }
  }
  console.log(count)
}

nestedExample()
```

Example using `let` in the loops:
```javascript
function nestedExample() {
  let count = 0
  for (let i = 0; i < 3; i++) {
    console.log("Outer loop i:", i)

    for (let i = 0; i < 2; i++) {
      console.log("  Inner loop i:", i)
      count += 1
    }
  }
  console.log(count)
}

nestedExample()
```
