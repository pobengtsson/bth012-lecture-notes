# Lecture 6 - test first unit tests with Jest


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

