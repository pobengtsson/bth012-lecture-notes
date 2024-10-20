# Lecture - Automatic Unit tests (using Vitest)


## Intro

Think of a really complex implementation!

```javascript
function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
```
Does it work?

On the surface, this function appears correct and straightforward. However, let’s discuss a few potential issues that automated testing could uncover:

1. **Non-integer Inputs:** If `n` is not an integer, the function will still attempt to calculate the factorial, which doesn’t make sense for non-integer values (e.g., `factorial(4.5)`).

2. **Negative Numbers:** If `n` is negative, this function will recurse indefinitely until a stack overflow occurs (e.g., `factorial(-1)`).

3. **Large Numbers:** For large values of `n`, this function will quickly hit JavaScript’s maximum call stack size, leading to a stack overflow error without handling it gracefully (e.g., `factorial(10000)`).

4. **Type Checking:** The function does not check if `n` is a number, so a call like `factorial("hello")` will throw an error, potentially crashing the program.


How we guarantee that it behaves intended?

We do **testing**. We run the software with different **example data and check that the results are according to our expectations**.
Most common is manual tests. When you code you run your code by typing commands and if it has a graphical userinterface you click and go through sequences of interaction to check that the ui behaves as you want.

When do we want to run tests?

Everytime we change any of the code in a system, which is often and many times.

Manual tests are slow, fault prone.
Automated unit tests are fast when we use tools like vitest.

And how can we be reasonably sure that the tests we write correctly detects undesired behaviour and bugs?

We can be reasonably sure when the code that does not yet have the expected behaviour, also leads to a failing test case, and only after that, we implement the expected behaviour to make the test pass.

This way we can be reasonably certain.

Test first coding, helps up write effective tests.

What is good unit tests?

A good unit test case is small and takes a fraction of a second to execute and only tests one single aspect of the code.

What code coverage should tests have?

Code coverage is a diagnostic measure, and not a goal in itself. It can tell how much of the code is executed when all the unit tests are run. Typically, more coverage is better.

How to work to get high code coverage from your unit tests?

Start with a small failing unit test. Then write the smallest piece of code you can to make the unit testcase pass. Then write another tiny unit test that fails. Write the smallest code change you can to make the test pass, and keep going like this. Your code will be very well tested when you have implemented your feature completely.


## Unit test structure

`describe()` -> used to structure the test and make them readable

`it()` -> used to describe assertions (facts about the code)

`expect()` -> used to execute this specific test case

matchers (`.toEqual()`, `.toBe`, etc) -> used to verify the assertions with code.


## Phases of test structure

Unit test typically has two phases of execution: `discovery` and `execution`

The code in `describe` are run as part of discovery phase.
The code in `it` run in the execution part.

If you forget to put an `it` inside the `describe` and write an expect inside the `describe` tests will have strange results.

### `beforeEach()`

When you declare variables to be used later in the tests, make sure that the variables are either constant or set the value in `beforeEach`. If you do not set the value in a beforeEach your multiple it/expects will use the same variable and the order of execution w

Do not:
```javascript
describe('tests that depend on the same variable', () => {
  let foo = 1
  describe('when add 1 to foo', () => {
    beforeEach(()=>{
      foo += 1
    })
    it('checks that foo is is 2', () => {
      expect(foo).toEqual(2)
    })
    it('checks that foo is less than 3', () => {
      expect(foo).toBeLessThan(3)
    })
  })
})
```

Exercise: The above code will have a failing test case. Run this example and figure out how to fix the test case it so that the tests work.

### focus on running certain tests

Appen `.skip` or `.only` to `describe()` and `it()` to tell jest wether to execlude tests from execution or to include only those marked.

example:
```javascript
describe.only('some test', () => {
  /* some test code */
})
```
