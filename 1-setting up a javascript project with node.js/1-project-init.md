# Setup a project

## install node.js
[Node.js](https://nodejs.org)

## install visual code
[Visual Studio Code](https://code.visualstudio.com/download)

## Javascript with Node project

* a defacto standard for structuring project code and resources
* manage dependencies (code from other sources)
  * needed to run the project
  * needed to develop/compile/package the project
  * automatically fetch dependencies from npm package registry

### npm init

npm init
=> package json

### Step 1: Set Up the Project

1. **Create a new directory for your project and navigate into it:**
   ```bash
   mkdir my-nodejs-project
   cd my-nodejs-project
   ```

2. **Initialize a new Node.js project:**
   ```bash
   npm init -y
   ```

### Step 2: Install vitest

1. **Install Vitest:**
   ```bash
   npm install --save-dev vitest
   ```

   Add `vitest` as the test command in package.json

### Step 3: Configure Vitest

1. **Create a `vitest.config.js` file in the root of your project:**
   ```js
   // vitest.config.js
   export default {
     test: {
       globals: true,
       environment: 'node',
     },
   }
   ```
   **globals**: This option allows you to use global variables like describe, it, expect, etc., without explicitly importing them in each test file. It makes the test files cleaner and more readable.

   **environment**: This sets the testing environment to Node.js. By default, Vitest runs tests in a browser-like environment (using jsdom). Setting this to 'node' is crucial for Node.js projects as it ensures that the tests run in a Node.js environment, which is appropriate for server-side code.

### Step 4: Write Your Code

1. **Create a directory for your source code (e.g., `src`):**
   ```bash
   mkdir src
   ```

2. **Create a sample JavaScript file (e.g., `index.js`) in the `src` directory:**
   ```js
   // src/index.js
   function greet(name) {
     return `Hello, ${name}!`;
   }

   // For command line execution
   if (require.main === module) {
     const name = process.argv[2] || 'World';
     console.log(greet(name));
   }

   module.exports = { greet };
   ```

### Step 5: Write Tests

1. **Create a directory for your tests (e.g., `tests`):**
   ```bash
   mkdir tests
   ```

2. **Create a sample test file (e.g., `index.test.js`) in the `tests` directory:**
   ```js
   // tests/index.test.js
   import { describe, it, expect } from 'vitest';
   const { greet } = require('../src/index');

   describe('greet', () => {
     it('should greet the person by name', () => {
       expect(greet('Alice')).toBe('Hello, Alice!');
     });

     it('should greet the world if no name is given', () => {
       expect(greet()).toBe('Hello, World!');
     });
   });
   ```

### Step 6: Add Scripts to `package.json`

1. **Update the `scripts` section in your `package.json` to add a test script:**
   ```json
   "scripts": {
     "test": "vitest"
   }
   ```
   The scripts section is where we can define commands that we can later run in our project environment. In addition to `test` we could add `run`, `compile`, `package`, `test:dev`, `test:e2e`, etc.

### Step 7: Run Your Tests

1. **Run the tests using npm:**
   ```bash
   npm test
   ```

### Step 8: Run Your Application

1. **Run your Node.js application from the command line:**
   ```bash
   node src/index.js Alice
   ```

This will print "Hello, Alice!" to the console.

### Summary
- **Project Setup**: Initialize a new Node.js project and install Vitest.
- **Configuration**: Configure Vitest with a `vitest.config.js` file.
- **Code and Tests**: Write your application code and corresponding tests.
- **Scripts**: Add necessary scripts to `package.json`.
- **Execution**: Run tests with `npm test` and execute the application with `node`.
