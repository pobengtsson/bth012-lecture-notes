# **Lecture 3: Introduction to Unit Testing with Vitest**

## **Outline**

1. **Introduction to Unit Testing**
   - What is unit tests and importance
   - Benefits of unit tests in software development

2. **Understanding Vitest**
   - What is Vitest?
   - Installation and setup

3. **Writing Your First Unit Test**
   - Normal style vs. Spec style
   - Creating test files
   - Writing test cases

4. **Running and Debugging Tests**
   - Executing tests with Vitest
   - Debugging tests in Visual Studio Code
   - Using breakpoints and watch expressions

5. **Unit Test Lifecycle**
   - Discovery phase
   - Execution phase
   - Understanding test reports

6. **Cross-Platform Considerations**
   - Ensuring compatibility with Linux, Mac, and Windows
   - Using the `cross-env` npm package

7. **Hands-On Practice**
   - Live coding session
   - Students write and run their own tests

8. **Conclusion and Next Steps**
   - Recap of key concepts
   - Preparing for the next lecture

---

## **1. Introduction to Unit Testing**

- **Definition and Importance**
  - Unit testing is the testing of individual units (function, class or component) of software to validate that each unit behaves as expected.
  - typically tests run small isolated parts, and does not involve running the whole application to run the test,
  - Essential for ensuring code quality, facilitating refactoring, and simplifying integration.

- **Benefits in Software Development**
  - **Early Bug Detection**: Catch issues early in the development cycle.
  - **Documentation**: Tests can serve as additional documentation for how code is supposed to work. Especially when spec-style.
  - **Confidence in Code Changes**: Easier to modify and improve code without fear of breaking existing functionality.
  - **Faster development speed when code grows**: Quickly run unit tests for regression testing when developing new behaviour.

## **2. Understanding Vitest**

- **What is Vitest?**
  - A fast unit test framework powered by Vite.
  - Provides a familiar API similar to Jest, but optimized for speed and seamless integration with Vite projects.

- **Installation and Setup**
  - **Prerequisites**: Ensure Node.js and npm are installed.
  - **Installing Vitest**:
    Install as development dependency (`-D`).
    ```bash
    npm install -D vitest
    ```
  - **Configuring Vitest**:
    - Add a `test` script in `package.json` so that you can run tests by typing `npm run test`:
      ```json
      "scripts": {
        "test": "vitest",
        "test:watch": "vitest --watch"
      }
      ```

## **3. Writing Your First Unit Test**

- **Normal Style vs. Spec Style**
  - **Normal Style**: Writing tests using standard function syntax.
    ```javascript
    // example.test.js
    import { sum } from './sum';

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);  // assertions are critical to tests
    });
    ```
  - **Spec Style**: Using BDD (Behavior Driven Development) syntax with `describe` and `it`.
    ```javascript
    // example.test.js
    import { sum } from './sum';

    describe('Sum Function', () => {
      it('should add 1 and 2 to make 3', () => {
        expect(sum(1, 2)).toBe(3); // assertions are critical to tests
      });
    });
    ```

- **Creating Test Files**
  - Test files should be named with `.test.js` or `.spec.js` extensions.
  - Place them alongside the code or in a separate `tests` directory.

- **Writing Test Cases**
  - Import the module or function to test.
  - Use assertions like `expect` to validate outcomes (critical).

## **4. Running and Debugging Tests**

- **Executing Tests with Vitest**
  - Run all tests:
    ```bash
    npm run test
    ```
  - Run tests in watch mode:
    For focused test driven coding, run tests in watch mode. Whenever you save a code or test file, the tests are executed instantly and automatically.
    ```bash
    npm run test:watch
    ```

- **Debugging Tests in Visual Studio Code**
  - **Setup Launch Configuration**:
    - In VS Code, create a `launch.json` file:
      ```json
      {
        "version": "0.1.0",
        "configurations": [
          {
            "type": "node",
            "request": "launch",
            "name": "Debug Vitest Tests",
            "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
            "args": ["--inspect-brk", "--threads", "false"],
            "autoAttachChildProcesses": true,
            "smartStep": true,
            "console": "integratedTerminal"
          }
        ]
      }
      ```
  - **Using Breakpoints and Watch Expressions**
    - Set breakpoints by clicking next to the line numbers in your code.
    - Use the Debug panel to inspect variables and watch expressions.

## **5. Unit Test Lifecycle**

- **Discovery Phase**
  - Vitest searches for test files matching the specified patterns.
  - Collects all test cases and prepares them for execution.

- **Execution Phase**
  - Runs each test case, reporting successes and failures.
  - Executes setup and teardown hooks if defined (`beforeEach`, `afterEach`).

- **Understanding Test Reports**
  - **Passed Tests**: Indicated with a green checkmark.
  - **Failed Tests**: Indicated with a red cross and error details.
  - **Skipped Tests**: Marked as pending or skipped, won't affect the test suite outcome.

## **6. Cross-Platform Considerations**

- **Ensuring Compatibility with Linux, Mac, and Windows**
  - Line endings and file paths may differ; avoid hardcoding paths.
  - Use platform-independent methods from Node.js APIs.

- **Using the `cross-env` npm Package**
  - **Purpose**: Allows you to set environment variables across different platforms.
  - **Installation**:
    ```bash
    npm install -D cross-env
    ```
  - **Usage in `package.json`**:
    ```json
    "scripts": {
      "test": "cross-env NODE_ENV=test vitest"
    }
    ```

## **7. Hands-On Practice**

- **Live Coding Session**
  - See [Hands on exercise](hands-on-exercise.md)

- **Students Write and Run Their Own Tests**
  - Encourage students to implement additional test cases.
  - Experiment with edge cases and error handling.

## **8. Conclusion and Next Steps**

- **Recap of Key Concepts**
  - Importance of unit testing.
  - How to write and run tests using Vitest.
  - Debugging techniques in VS Code.

- **Preparing for the Next Lecture**
  - Ensure your development environment is set up.
  - Read about asynchronous testing and mocking data.

---

**Note to Students:**

Make sure to try out the examples provided during the lecture on your own machines. If you encounter any issues, check that all dependencies are installed correctly and that your environment variables are set up properly. Don't hesitate to ask questions during the hands-on session.

---

**Additional Resources:**

- [Vitest Documentation](https://vitest.dev/)
- [Node.js Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [Visual Studio Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
