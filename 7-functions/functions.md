# Functions in javascript

A short introduction to ES6 function concepts and examples. Covers plain functions, functions-as-values, common array helpers, and how `this` is bound in different forms.

## Functions

Functions are reusable blocks of code. ES6 provides several ways to define them.

Function declaration
```js
function add(a, b = 0) {
  return a + b;
}
console.log(add(1, 2)); // 3
```

Function expression and arrow function
```js
const multiply = function(x, y) { return x * y; };
const square = x => x * x; // single expression -> implicit return
console.log(multiply(2, 3), square(4)); // 6 16
```

Rest parameters and default values
```js
function join(separator = ',', ...parts) {
  return parts.join(separator);
}
console.log(join('-', 'a', 'b', 'c')); // "a-b-c"
```

## Functions as values in variables

Functions are first-class: you can assign, pass, and return them.

Assigning and passing
```js
const greet = name => `Hello, ${name}!`;
function announce(fn, value) {
  console.log(fn(value));
}
announce(greet, 'Ada'); // "Hello, Ada!"
```

Returning functions (closures)
```js
const makeAdder = x => y => x + y;
const add5 = makeAdder(5);
console.log(add5(2)); // 7
```

Use with timers and events
```js
const id = setTimeout(() => console.log('later'), 1000);
clearTimeout(id); // cancel
```

## Array functions

Functional helpers are common and concise with arrow syntax.

map, filter, forEach, reduce
```js
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);       // [2,4,6,8]
const even = nums.filter(n => n % 2 === 0); // [2,4]
nums.forEach(n => console.log(n));          // logs 1,2,3,4

const sum = nums.reduce((acc, n) => acc + n, 0); // 10
```

Chaining
```js
const result = nums
  .map(n => n * 3)
  .filter(n => n > 5);
console.log(result);
```

## Binding this

`this` behavior differs between normal functions and arrow functions.

Method on an object (method `this` is dynamic)
```js
const obj = {
  value: 10,
  inc() { this.value += 1; }
};
obj.inc();
console.log(obj.value); // 11
```

Losing `this` when extracting a method
```js
const fn = obj.inc;
fn(); // `this` is undefined (or global) in strict mode -> error or no effect
```

Fixes: use `bind` or arrow functions

bind
```js
const bound = obj.inc.bind(obj);
bound(); // safe: updates obj.value
```

Arrow function keeps lexical `this` (useful in callbacks)
```js
class Counter {
  constructor() { this.count = 0; }
  start() {
    setInterval(() => {
      this.count++; // arrow uses `this` of the instance
      console.log(this.count);
    }, 1000);
  }
}
```

call / apply (invoke with explicit `this`)
```js
function show(prefix) { console.log(prefix, this.name); }
show.call({ name: 'JS' }, '->'); // "-> JS"
show.apply({ name: 'JS' }, ['->']);
```

Notes
- Use arrow functions when you want lexical `this`.
- Use `bind`, `call`, or `apply` when you need to set `this` explicitly.
- Prefer `const` for function expressions you don't reassign.

This gives a concise overview with ES6 examples to get started.
