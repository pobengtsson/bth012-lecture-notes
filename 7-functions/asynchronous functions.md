# Promises and how async/await makes them easier

## Why Promises?
- Callbacks lead to nested, hard-to-read code ("callback hell").
- Promises represent a value that may be available now, later, or never.
- They provide a standardized API for chaining, composition, and error propagation.

## Promise basics
A Promise has three states: pending → fulfilled (resolved) or rejected.
Create a Promise:
```js
const p = new Promise((resolve, reject) => {
  // async work
  if (success) resolve(value);
  else reject(error);
});
```
Consume with `then` / `catch` / `finally`:
```js
p.then(value => {
  // handle success
}).catch(err => {
  // handle error
}).finally(() => {
  // always runs
});
```

## Chaining and error propagation
Each `then` returns a new Promise. Errors bubble to the next `catch`.
```js
fetch('/data')
  .then(res => res.json())
  .then(data => doSomething(data))
  .then(result => console.log(result))
  .catch(err => console.error('any error in chain:', err));
```

## Converting callbacks to Promises
Example with setTimeout:
```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(500).then(() => console.log('done'));
```

## Composition helpers
- `Promise.all([...])` — wait for all, fails fast if any rejects.
- `Promise.race([...])` — resolves/rejects with the first settled promise.
- `Promise.allSettled([...])` — waits for all to settle, returns statuses.

Example:
```js
Promise.all([fetch(a), fetch(b)])
  .then(([ra, rb]) => Promise.all([ra.json(), rb.json()]));
```

## async / await — syntax sugar for Promises
- `async` marks a function that returns a Promise.
- `await` pauses execution until the Promise settles (only inside async functions).
- Code reads like synchronous code while still being asynchronous.

Example (equivalent to the earlier fetch chain):
```js
async function load() {
  try {
    const res = await fetch('/data');
    const data = await res.json();
    const result = await doSomething(data);
    console.log(result);
  } catch (err) {
    console.error('error:', err);
  }
}
```

Key points:
- `await` unwraps the fulfilled value; if the awaited Promise rejects, it throws — use try/catch.
- `async` functions always return a Promise. Example:
  ```js
  async function f() { return 1; } // f() resolves to 1
  ```

## Parallel vs sequential with await
Sequential (slower):
```js
const a = await fetch(urlA);
const b = await fetch(urlB);
```
Parallel (faster):
```js
const pa = fetch(urlA);
const pb = fetch(urlB);
const [a, b] = await Promise.all([pa, pb]);
```

## Error handling patterns
Prefer try/catch inside async functions. For top-level async code, catch the returned Promise:
```js
load().catch(err => console.error(err)); // if load is async
```

## Common pitfalls
- Don't use `await` in a loop if you can run tasks in parallel.
- `await` only works inside `async` functions.
- Cancelation is not built into Promises — use AbortController or libraries for cancelation.
- Long chains of `.then` can obfuscate control flow; async/await usually improves readability.

## Short checklist for migration
- If you have promise chains with several `.then`, consider rewriting with async/await.
- Keep composition (parallel work) using Promise combinators (`Promise.all`, etc.).
- Handle errors with try/catch or propagate by returning the Promise.

## Example: callback → Promise → async/await
Callback style:
```js
fs.readFile('file.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
```
Promise style:
```js
const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8')
  .then(text => console.log(text))
  .catch(err => console.error(err));
```
async/await style:
```js
async function showFile() {
  try {
    const text = await fs.readFile('file.txt', 'utf8');
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
```

That covers the essentials: Promises give you composable async values; async/await makes code more linear and easier to reason about while preserving Promise behavior and performance patterns when used correctly.
