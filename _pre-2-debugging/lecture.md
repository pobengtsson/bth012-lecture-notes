# **Lecture 2: Debugging JavaScript Code Using Browser Developer Tools and Visual Studio Code**

## **Outline**

- **Introduction**
  - Importance of debugging skills
  - Tools we'll use: Browser Developer Tools and VS Code Debugger
- **Debugging in the Browser with Vite Dev Server**
  - Running the application with `npm run dev`
  - Using Browser Developer Tools (e.g., Microsoft Edge)
  - Setting breakpoints, stepping through code, inspecting variables
- **Debugging a Node.js Program in VS Code**
  - Creating a simple Node.js program
  - Setting up debugging in VS Code for Node.js
  - Running and debugging the program
- **Sample JavaScript Program for Debugging**
  - Practicing debugging with a provided example
- **Conclusion**
  - Recap
  - Q&A session

## **Introduction**

Welcome to the lecture on debugging JavaScript code. Debugging is an valuable skill that helps you identify and fix issues when program behaviour is different from what you expect.

Today, we'll explore two primary debugging methods:

1. **Debugging in the Browser using Vite's Development Server**
2. **Debugging a Node.js Application in Visual Studio Code**

By the end of this lecture, you'll be equipped to debug both client-side and server-side JavaScript applications.

---

## **Debugging in the Browser with Vite Dev Server**

**Running the Application with `npm run dev`**

Before we start debugging, let's ensure our application is running:

1. **Navigate to Your Project Directory:**

   ```bash
   cd my-vite-app
   ```

2. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   - This command starts the Vite development server.
   - The terminal will display a local URL, such as `http://localhost:5173`.

3. **Open the Application in a Browser:**

   - Use Microsoft Edge, Chrome, Firefox or Safari. (others might work too, try at your own responsibility.)
   - Navigate to `http://localhost:5173`.

**Using Browser Developer Tools**

Browser Developer Tools provide powerful features for debugging client-side JavaScript code.

1. **Open Developer Tools:**

   - Press `F12`, or
   - Right-click on the page and select **Inspect**.

2. **Overview of Developer Tools:**

There are a large set of debugging tools available in the browser. The most useful for this course are:
   - **Elements:** Inspect and modify the DOM and CSS.
   - **Console:** View logs, warnings, and errors; execute JavaScript code.
   - **Sources:** View and debug JavaScript files.

**Setting Breakpoints and Debugging Code**

Let's debug a simple JavaScript function in our application.

**Vite generated Code (`main.js`):**

The `npm init vite@latest` should have generated some code to get your started. You should have:
  * `counter.js`
  * `main.js`

**Steps to Debug:**

1. **Access the Sources Tab:**

   - In Developer Tools, click on the **Sources** tab.

2. **Locate Your JavaScript File:**

   - In the left panel, expand the `(localhost)` or `(Your App)` folder.
   - Navigate to `counter.js`. 

   There might be two files listed with the same name. For now, choose the one in __italics__ and just ignore the other one.

3. **Set a Breakpoint:**

   - Click on the line number 5, that starts `element.innerHTML = `.

If you have opened the source map file, the browser will automatically switch to the source file and set the breakpoint.

4. **Press the count button:**

   - Now press the `count is 0` button.

5. **Inspect Variables:**

   - When execution pauses, hover over `count` and `counter` in the code to see their current values.
   - Use the **Scope** panel to view all variables in the current scope.

6. **Control Execution:**

   - **Resume Script Execution (`F8`):** Continues running the script until the next breakpoint.
   - **Step Over (`F10`):** Moves to the next line in the same function.
   - **Step Into (`F11`):** Enters into a called function.
   - **Step Out (`Shift+F11`):** Exits the current function.

7. **Watch Expressions:**

   - In the **Watch** panel, click **Add expression**.
   - Enter `greeting` to monitor its value as you step through the code.

**Using the Console for Debugging**

Write console.log("Hello!") at the prompt in the console and press enter.
The text "Hello!" should now be printed in the console.

You can use this to:
- Execute commands and test functions in real-time.
- Log errorinformatio and check for errors or warnings that may not stop execution but indicate issues.

---

### **Debugging a Node.js Program in VS Code**

Now, let's switch to debugging a Node.js application directly in Visual Studio Code.

**Creating a Simple Node.js Program**

1. **Create a New Directory:**

   ```bash
   mkdir node-debugging
   cd node-debugging
   ```

2. **Initialize a Node.js Project:**

   ```bash
   npm init -y
   ```

3. **Create `app.js` File:**

   ```javascript
   // app.js
   function calculateFactorial(n) {
     if (n < 0) return undefined;
     if (n === 0) return 1;
     return n * calculateFactorial(n - 1);
   }

   const number = 5;
   const result = calculateFactorial(number);
   console.log(`Factorial of ${number} is ${result}`);
   ```

**Setting Up Debugging in VS Code**

1. **Open the Project in VS Code:**

   - Launch VS Code.
   - Open the `node-debugging` folder (`File` > `Open Folder`).

2. **Configure Debugging Environment:**

   - Go to the **Run and Debug** view (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac).
   - Click on **create a launch.json file**.
   - Select **Node.js** as the environment.

3. **Verify `launch.json`:**

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "skipFiles": [
            "<node_internals>/**"
          ],
          "program": "${workspaceFolder}/app.js",
       }
     ]
   }
   ```

**Running and Debugging the Program**

1. **Set Breakpoints:**

   - Open `app.js`.
   - Click next to the line numbers to set breakpoints, for example:
     - Line 9, where `calculateFactorial` is called.
     - Line 5, `return n * calculateFactorial(n - 1);`.

2. **Start Debugging:**

   - In the **Run and Debug** view, ensure **Launch Program** is selected.
   - Click the green **Start Debugging** button or press `F5`.

3. **Debugging Controls:**

   - **Continue (`F5`):** Resume program execution.
   - **Step Over (`F10`):** Execute the next line without entering functions.
   - **Step Into (`F11`):** Enter into the function call.
   - **Step Out (`Shift+F11`):** Exit the current function.

4. **Inspect Variables:**

   - Use the **Variables** panel to see the values of local and global variables.
   - Watch variables change as you step through the code.

5. **View Call Stack:**

   - The **Call Stack** panel shows the sequence of function calls.
   - Useful for understanding recursive functions.

6. **Using the Debug Console:**

   - Evaluate expressions and execute commands at the current execution point.
   - For example, type `n` to see its value.

**Stopping Debugging**

- Click the **Stop** button or press `Shift+F5` to end the debugging session.

---

### **Sample JavaScript Program for Debugging**

Let's practice debugging with a simple JavaScript program that contains an error.

**Example Program (`buggy-code.js`):**

```javascript
// buggy-code.js
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i <= str.length; i++) {
    reversed += str.charAt(str.length - i);
  }
  return reversed;
}

const originalString = 'Debugging';
const result = reverseString(originalString);
console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${result}`);
```

**Identifying and Fixing the Error**

1. **Set Up the Environment:**

   - Save `buggy-code.js` in your project folder.
   - Update `launch.json` to point to `buggy-code.js`.

2. **Set a Breakpoint:**

   - Place a breakpoint inside the `for` loop.

3. **Start Debugging:**

   - Run the debugger with the updated configuration.

4. **Inspect Variables:**

   - Monitor the values of `i`, `reversed`, and `str.charAt(str.length - i)`.

5. **Identify the Issue:**

   - Notice that when `i` equals `str.length`, `str.charAt(str.length - i)` is `str.charAt(0)`.
   - When `i` exceeds `str.length`, it results in `str.charAt(-1)`, which is an empty string.

6. **Fix the Error:**

   - Change the loop condition from `i <= str.length` to `i < str.length`.
   - Adjust the index in `str.charAt` if necessary.

   **Corrected Code:**

   ```javascript
   function reverseString(str) {
     let reversed = '';
     for (let i = 1; i <= str.length; i++) {
       reversed += str.charAt(str.length - i);
     }
     return reversed;
   }
   ```

   - Or adjust the loop to:

     ```javascript
     for (let i = str.length - 1; i >= 0; i--) {
       reversed += str.charAt(i);
     }
     ```

7. **Verify the Fix:**

   - Run the debugger again.
   - Ensure the `result` now correctly displays `gniggubeD`.

---

### **Conclusion**

**Recap:**

- **Debugging in the Browser:**
  - Learned to use browser developer tools to debug client-side JavaScript code.
  - Set breakpoints, stepped through code, and inspected variables.

- **Debugging in VS Code:**
  - Set up a Node.js debugging environment in VS Code.
  - Debugged a Node.js application, utilizing breakpoints and inspecting the call stack.

- **Practical Exercise:**
  - Practiced debugging with a sample JavaScript program containing an error.
  - Identified and fixed the error using debugging tools.

**Next Steps:**

- **Practice Further:**
  - Try debugging more complex applications.
  - Experiment with conditional breakpoints and exception handling.

- **Explore Advanced Features:**
  - Learn about watch expressions, call stack navigation, and profiling tools.

**Q&A Session:**

- Open the floor for any questions or clarifications.

