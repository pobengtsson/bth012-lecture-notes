# **Lecture 1: Setting Up the Development Environment with Visual Studio Code, Node.js, and Vite**

## **Outline**

- **Introduction**
  - Importance of a consistent development environment
  - Overview of tools: Node.js, Visual Studio Code (VS Code), and Vite
- **Installing Node.js**
  - Steps for Windows, macOS, and Linux
  - Verifying the installation
- **Installing Visual Studio Code**
  - Downloading and installing VS Code
  - Brief tour of VS Code interface
- **Setting Up Vite**
  - Introduction to Vite
  - Creating a new project using Vite
- **Running the Development Server**
  - Starting the server
  - Exploring the default project structure
- **Conclusion**
  - Recap of steps
  - Q&A session

## **Introduction**

Welcome to the first lecture on setting up your JavaScript development environment. Today, we'll walk through installing Node.js, Visual Studio Code, and Vite. By the end of this session, you'll have a working setup to start developing JavaScript applications.

## **Installing Node.js**

**Why Node.js?**

Node.js allows us to run JavaScript code outside the browser and comes with npm (Node Package Manager), which we use to manage project dependencies.
Project dependencies can, for example, be open source code and tools we need either while we develop (like test-tools) or when the code runs in production.

**Installation Steps:**

1. **Download Node.js:**
   - Visit the [Node.js official website - https://nodejs.org/en/download/](https://nodejs.org/en/download/) (accessible worldwide).
   - Choose the LTS (Long-Term Support) version for stability.

2. **Windows Installation:**
   - Run the downloaded `.msi` installer.
   - Follow the prompts, accepting the license agreement and default settings.

3. **macOS Installation:**
   - Open the downloaded `.pkg` installer.
   - Follow the installation wizard with default settings.

4. **Linux Installation:**
   - Open the terminal.
   - Run the following commands:

     ```bash
     # Using Ubuntu/Debian
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     sudo apt-get install -y nodejs

     # Using CentOS/RHEL
     curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
     sudo yum install -y nodejs
     ```

**Verifying the Installation:**

- Open your terminal or command prompt.
- Run:

  ```bash
  node -v
  npm -v
  ```

- You should see the version numbers if the installation was successful.

## **Installing Visual Studio Code**

**Why VS Code?**

VS Code is a lightweight, cross-platform code editor with robust extensions for JavaScript development.

VS Code is free to use and popular choice in development industri as it can be extended and configured for use with a large number of popular languages like java, python, javascript, C#, c++ etc.

**Installation Steps:**

1. **Download VS Code:**
   - Visit the [Visual Studio Code website - https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).
   - Download the installer for your operating system.

2. **Windows Installation:**
   - Run the downloaded `.exe` file.
   - Follow the setup wizard.
   - Optionally, check "Add to PATH" during installation.

3. **macOS Installation:**
   - Open the downloaded `.dmg` file.
   - Drag and drop VS Code into the Applications folder.

4. **Linux Installation:**
   - For Debian/Ubuntu-based systems:

     ```bash
     sudo apt update
     sudo apt install software-properties-common apt-transport-https wget
     wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
     sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
     sudo apt install code
     ```

**Exploring VS Code:**

- Launch VS Code.
- Familiarize yourself with the interface: Explorer, Search, Source Control, Run and Debug, Extensions.

## **Setting Up Vite**

**What is Vite?**

Vite is a build tool that offers fast development server startup and hot module replacement.
Hot module replacement allows a web application to update modules in real-time without requiring a full page refresh. This means you can test your code changes immediately in the browser without a page refresh.

**Creating a New Project:**

1. **Open Terminal in VS Code:**
   - Go to `View` > `Terminal`.

2. **Install `create-vite`:**
   - Run:

     ```bash
     npm init vite@latest my-vite-app
     ```

   - Choose `Vanilla` when asked to select a framework.
   - Choose `JavaScript`when asked to select a variant.

3. **Navigate into the Project Directory:**

   ```bash
   cd my-vite-app
   ```

4. **Install Dependencies:**

   ```bash
   npm install
   ```

### **Running the Development Server**

1. **Start the Server:**

   ```bash
   npm run dev
   ```

2. **Open in Browser:**

   - The terminal will display a local address, such as `http://localhost:5173`.
   - Open this URL in your web browser (e.g., Microsoft Edge, Chrome, Firefox or Safari).

3. **Explore the Project:**

   - Modify `main.js` and observe changes live in the browser.

### **Conclusion**

- **Recap:**
  - Installed Node.js and verified the installation.
  - Installed Visual Studio Code and explored its interface.
  - Set up a new Vite project and ran the development server.
- **Next Steps:**
  - Ensure your environment is working by modifying code and seeing changes.
  - Try changing the counter code and see that the webpage changes behaviour. Why not make the count increase by 8 each keypress.
