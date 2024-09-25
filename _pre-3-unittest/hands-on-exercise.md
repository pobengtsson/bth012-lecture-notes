# **Exercise: Developing a Stack Using Test-Driven Development (TDD)**

## **Objective**

In this hands-on exercise, you'll develop a simple `Stack` class in JavaScript using the principles of Test-Driven Development (TDD). You'll write unit tests using Vitest before writing the actual implementation code, ensuring that each feature is thoroughly tested and functioning as expected.

## **Prerequisites**

- Node.js and npm installed
- Visual Studio Code installed
- Vitest installed in your project (`npm install -D vitest`)
- Basic understanding of JavaScript classes and functions
- Familiarity with running scripts via npm

## **Exercise Overview**

1. **Setup the Project Structure**
2. **Write Tests for Stack Initialization**
3. **Implement Stack Initialization**
4. **Write Tests for `push` Method**
5. **Implement `push` Method**
6. **Write Tests for `pop` Method**
7. **Implement `pop` Method**
8. **Write Tests for Edge Cases**
9. **Run and Debug Tests**
10. **Reflect on the TDD Process**

---

## **Instructions**

### **1. Setup the Project Structure**

- **Initialize npm Project**

  Open your terminal and navigate to your project directory. Initialize a new npm project:

  ```bash
  npm init -y
  ```

- **Install Vitest**

  ```bash
  npm install -D vitest
  ```

- **Project Folder Structure**

  ```
  your-project/
  ├── package.json
  ├── src/
  │   └── stack.js
  └── tests/
      └── stack.test.js
  ```

- **Configure Test Script**

  In your `package.json`, add the following script:

  ```json
  "scripts": {
    "test": "vitest"
  }
  ```

### **2. Write Tests for Stack Initialization**

- **Create Test File**

  In the `tests` directory, create a file named `stack.test.js`.

- **Write the First Test**

  ```javascript
  // tests/stack.test.js
  import { describe, it, expect } from 'vitest';
  import Stack from '../src/stack';

  describe('Stack', () => {
    it('should create an empty stack', () => {
      const stack = new Stack();
      expect(stack.size()).toBe(0);
    });
  });
  ```

- **Run the Test**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should fail because `Stack` and `size()` are not yet implemented.

### **3. Implement Stack Initialization**

- **Create Stack Class**

  In the `src` directory, create a file named `stack.js`.

  ```javascript
  // src/stack.js
  export default class Stack {
    constructor() {
      this.items = [];
    }

    size() {
      return this.items.length;
    }
  }
  ```

- **Run the Test Again**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should now pass.

### **4. Write Tests for `push` Method**

- **Add Test for Push Operation**

  ```javascript
  // tests/stack.test.js
  // ... previous imports and tests
  it('should add an element to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });
  ```

- **Run the Test**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should fail because `push` and `peek` methods are not implemented.

### **5. Implement `push` Method**

- **Add `push` and `peek` Methods**

  ```javascript
  // src/stack.js
  // ... previous code
  push(element) {
    this.items.push(element);
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  ```

- **Run the Test Again**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should now pass.

### **6. Write Tests for `pop` Method**

- **Add Test for Pop Operation**

  ```javascript
  // tests/stack.test.js
  // ... previous imports and tests
  it('should remove the top element from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });
  ```

- **Run the Test**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should fail because `pop` method is not implemented.

### **7. Implement `pop` Method**

- **Add `pop` Method**

  ```javascript
  // src/stack.js
  // ... previous code
  pop() {
    return this.items.pop();
  }
  ```

- **Run the Test Again**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should now pass.

### **8. Write Tests for Edge Cases**

- **Test Popping from an Empty Stack**

  ```javascript
  // tests/stack.test.js
  // ... previous imports and tests
  it('should return undefined when popping from an empty stack', () => {
    const stack = new Stack();
    const popped = stack.pop();
    expect(popped).toBeUndefined();
    expect(stack.size()).toBe(0);
  });
  ```

- **Run the Test**

  ```bash
  npm run test
  ```

  **Expected Result:** The test should pass if the `pop` method correctly handles empty stacks.

### **9. Run and Debug Tests**

- **Debugging in Visual Studio Code**

  - **Create Launch Configuration**

    In VS Code, create or update your `launch.json` file in the `.vscode` directory:

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Debug Vitest Tests",
          "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
          "args": ["run"],
          "autoAttachChildProcesses": true,
          "cwd": "${workspaceFolder}",
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen"
        }
      ]
    }
    ```

  - **Set Breakpoints**

    Open `stack.js` or `stack.test.js` and set breakpoints by clicking in the gutter next to the line numbers.

  - **Start Debugging**

    Go to the Run and Debug view (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and select **Debug Vitest Tests**. Click the green play button to start debugging.

- **Inspect Variables and Call Stack**

  Use the debugging toolbar and panels to step through code, inspect variables, and analyze the call stack.

### **10. Reflect on the TDD Process**

- **Benefits Experienced**

  - Immediate feedback on code changes.
  - Confidence that code meets specifications.
  - Easier to identify and fix bugs.

- **Challenges Faced**

  - Thinking about tests before implementation.
  - Writing minimal code to pass tests.

---

## **Additional Challenges (Optional)**

- **Implement Error Handling**

  Write tests to check if the stack throws an error when exceeding a certain size limit.

- **Implement `isEmpty` Method**

  Add a method to check if the stack is empty and write corresponding tests.

---

## **Tips and Best Practices**

- **Commit Frequently**

  If using version control, commit your changes after each passing test.

- **Clear and Descriptive Test Names**

  Use test descriptions that clearly state the expected behavior.

- **One Test at a Time**

  Focus on one test case at a time to simplify debugging.

- **Avoid Hardcoding Values**

  Ensure your implementation works for various inputs, not just the test cases.

---

## **Cross-Platform Considerations**

- **Ensure Scripts Work on All Platforms**

  Use the `cross-env` package if you need to set environment variables in your scripts.

  ```bash
  npm install -D cross-env
  ```

  Update `package.json` if necessary:

  ```json
  "scripts": {
    "test": "cross-env NODE_ENV=test vitest"
  }
  ```

- **File Paths**

  Use relative paths and Node.js path utilities to maintain cross-platform compatibility.

---

### **Conclusion**

By completing this exercise, you've practiced:

- Setting up a testing environment with Vitest.
- Writing unit tests before implementation (TDD).
- Implementing a basic data structure in JavaScript.
- Running and debugging tests in Visual Studio Code.

---

### **Common Pitfalls to Avoid**

- **Not Running Tests Frequently**

  Run your tests after each change to catch issues early.

- **Ignoring Failed Tests**

  Investigate and resolve any failing tests before moving on.

- **Overcomplicating Code**

  Write the simplest code possible to pass the test.

---

### **Additional Resources**

- [Vitest Getting Started Guide](https://vitest.dev/guide/)
- [Test-Driven Development by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530) by Kent Beck
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) on MDN
- [Visual Studio Code Debugging](https://code.visualstudio.com/docs/editor/debugging)

---

**Note:** If you encounter any issues or have questions during the exercise, please feel free to ask for assistance. Sharing insights and solutions helps everyone learn more effectively.