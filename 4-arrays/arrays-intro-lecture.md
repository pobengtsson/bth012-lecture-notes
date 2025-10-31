## JavaScript Arrays: An Introduction

### 1. **What are Arrays?**
   - An **array** in JavaScript is a special variable that can hold more than one value at a time.
   - Arrays are **ordered collections** of items, where each item can be accessed by its index (starting from `0`).
   - Arrays can store values of **any data type**—numbers, strings, objects, or even other arrays.

#### Array Syntax: Array Literal
   - In JavaScript, arrays are created using **array literals**:
     ```javascript
     let numbers = [1, 2, 3, 4, 5]
     let fruits = ['apple', 'banana', 'orange']
     let mixed = [1, 'hello', true, { name: 'John' }]
     ```

### 2. **Basic Array Operations**

#### Accessing Array Elements
   - You can access an array element using its **index**:
     ```javascript
     let fruits = ['apple', 'banana', 'orange']
     console.log(fruits[0]) // Output: 'apple'
     console.log(fruits[2]) // Output: 'orange'
     ```
   - You can also modify an array element by assigning a new value to a specific index:
     ```javascript
     fruits[1] = 'grape'
     console.log(fruits) // Output: ['apple', 'grape', 'orange']
     ```

#### Finding Array Length
   - You can find the number of elements in an array using the `.length` property:
     ```javascript
     console.log(fruits.length) // Output: 3
     ```

### 3. **Common Array Methods**

#### forEach()
   - The `forEach()` method executes a provided function once for each array element.
   - It’s commonly used to **iterate over the elements** of an array.
   ```javascript
   let numbers = [1, 2, 3, 4, 5]

   numbers.forEach((num) => {
       console.log(num)
   })
   // Output: 1, 2, 3, 4, 5
   ```

#### find()
   - The `find()` method returns the **first element** in the array that satisfies the provided testing function.
   - It returns `undefined` if no match is found.
   ```javascript
   let numbers = [1, 2, 3, 4, 5]
   let found = numbers.find((num) => num > 3)

   console.log(found) // Output: 4
   ```

#### filter()
   - The `filter()` method creates a **new array** with all elements that pass the test implemented by the provided function.
   - It is useful for selecting multiple elements based on a condition.
   ```javascript
   let numbers = [1, 2, 3, 4, 5]
   let evenNumbers = numbers.filter((num) => num % 2 === 0)

   console.log(evenNumbers) // Output: [2, 4]
   ```

#### map()
   - The `map()` method creates a **new array** populated with the results of calling a provided function on every element in the array.
   - It is useful for **transforming** each element in the array.
   ```javascript
   let numbers = [1, 2, 3, 4, 5]
   let squares = numbers.map((num) => num * num)

   console.log(squares) // Output: [1, 4, 9, 16, 25]
   ```

#### slice()
   - The `slice()` method returns a **shallow copy** of a portion of an array into a new array, without modifying the original array.
   - It takes two parameters: **start index** (inclusive) and **end index** (exclusive).
   ```javascript
   let numbers = [1, 2, 3, 4, 5]
   let sliced = numbers.slice(1, 4)

   console.log(sliced) // Output: [2, 3, 4]
   console.log(numbers) // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
   ```

#### splice()
   - The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements **in place**.
   - It takes three parameters: **start index**, **number of elements to remove**, and **elements to add** (optional).
   ```javascript
   let numbers = [1, 2, 3, 4, 5]
   numbers.splice(2, 1, 10) // Removes 1 element at index 2 and adds 10

   console.log(numbers) // Output: [1, 2, 10, 4, 5]
   ```

### 4. **Examples & Use Cases**

#### Example: Filtering Even Numbers and Mapping to Their Squares
```javascript
let numbers = [1, 2, 3, 4, 5, 6]
let evenSquares = numbers.filter((num) => num % 2 === 0).map((num) => num * num)

console.log(evenSquares) // Output: [4, 16, 36]
```

#### Example: Using find() to Locate an Element
```javascript
let fruits = ['apple', 'banana', 'orange', 'grape']
let foundFruit = fruits.find((fruit) => fruit.startsWith('o'))

console.log(foundFruit) // Output: 'orange'
```

#### Example: Slicing and Splicing
```javascript
let colors = ['red', 'blue', 'green', 'yellow', 'purple']

// Slicing
let selectedColors = colors.slice(1, 4)
console.log(selectedColors) // Output: ['blue', 'green', 'yellow']

// Splicing
colors.splice(2, 1, 'orange')
console.log(colors) // Output: ['red', 'blue', 'orange', 'yellow', 'purple']
```

### Iterators
Iterable — built-in ES6 iterables include:
- Array
- String
- Map
- Set
- TypedArray (Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array)
- Generator objects (created by function*)
- Any object implementing Symbol.iterator (custom iterables)

(Note: some host-provided collections like NodeList/HTMLCollection are iterable in modern environments but are not part of the ES6 language spec.)

### Iterators (ES6) — pedagogic examples

#### 1) for...of with built-in iterables
```javascript
const arr = [10, 20, 30]
for (const value of arr) {
   console.log(value) // 10, 20, 30
}

const str = 'hi'
for (const ch of str) {
   console.log(ch) // 'h', 'i'
}
```

#### 2) Manual consumption of an iterator
```javascript
const it = arr[Symbol.iterator]()   // get iterator object
console.log(it.next()) // { value: 10, done: false }
console.log(it.next()) // { value: 20, done: false }
console.log(it.next()) // { value: 30, done: false }
console.log(it.next()) // { value: undefined, done: true }
```

#### 3) Iterating Maps and Sets
```javascript
const m = new Map([['a',1], ['b',2]])
for (const [key, value] of m.entries()) {
   console.log(key, value) // 'a' 1  then 'b' 2
}

const s = new Set([1,2,3])
for (const v of s.values()) console.log(v) // 1, 2, 3
```

#### 4) Custom iterable object (implements Symbol.iterator)
```javascript
const range = {
   from: 1,
   to: 3,
   [Symbol.iterator]() {
      let current = this.from
      const last = this.to
      return {
         next() {
            if (current <= last) {
               return { value: current++, done: false }
            } else {
               return { value: undefined, done: true }
            }
         }
      }
   }
}

for (const n of range) console.log(n) // 1, 2, 3
```

#### 5) Using a generator as an iterator (concise custom iterable)
```javascript
function* rangeGen(start, end) {
   for (let i = start; i <= end; i++) yield i
}

const g = rangeGen(1, 3)
console.log(g.next()) // { value: 1, done: false }
for (const n of rangeGen(1, 3)) console.log(n) // 1, 2, 3
```

Tips:
- Any object with a Symbol.iterator method is iterable and works with for...of, spread ([...iterable]), and destructuring.
- Iterators expose a standard { value, done } protocol — you can drive them manually or let language constructs consume them.
- Generators are a convenient way to implement iterators without manually managing state.

### Generators

Generators are special ES6 functions (declared with function* or function * ) that return a generator object — an iterator you can drive manually. They let a function pause its execution at each yield, emit a value, and later resume from the same point when next() is called.

Key points:
- function* returns an **iterator** that implements the { value, done } protocol.
- yield pauses execution and produces a value; next(value) resumes the generator and can inject a value back into the paused yield expression.
- return ends the generator and sets done: true (optionally providing a final value).
- Generators are iterable (usable with for...of, spread, destructuring) and are useful for lazy sequences, custom iterables, and managing stateful or incremental computations.

Example:
```javascript
function* counter() {
   yield 1
   yield 2
   return 3
}
const it = counter()
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: 3, done: true }
```


### 5. **Summary**
   - Arrays in JavaScript are flexible and can store various types of data.
   - Built-in methods like **forEach**, **find**, **filter**, **map**, **slice**, and **splice** provide powerful ways to work with array data.
   - Remember that methods like **map**, **filter**, and **slice** do not modify the original array, while **splice** does.
