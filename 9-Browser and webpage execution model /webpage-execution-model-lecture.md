## **Guided Exploration of the Memory Game Webpage**

### **Introduction to the Example**
- The attached webpage is a simple **Memory Game** built with **HTML** and **JavaScript**.
- This game demonstrates the event-driven execution model in web browsers, focusing on how user interactions trigger changes in the DOM.

### **How to Load and Interact with the Webpage**
1. **Save the provided HTML file** (`memory-game.html`) to your local computer.
2. **Open the file** in a web browser (e.g., Chrome, Firefox, or Edge) by double-clicking it.
3. **Open Developer Tools** in the browser:
   - On Windows: Press **F12** or **Ctrl + Shift + I**.
   - On Mac: Press **Cmd + Opt + I**.
4. In Developer Tools, explore the following panels:
   - **Elements**: See the HTML structure.
   - **Console**: Interact with JavaScript and see console outputs.
   - **Sources**: View and debug the JavaScript code.

### **Structure of the Memory Game HTML**
- The HTML structure includes a **head** and a **body** section:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Memory Game</title>
      <!-- Styles are here but not the focus of this session -->
  </head>
  <body>
      <h1>Memory Game</h1>
      <div class="game-info">
          <span id="timer">Time: 0s</span>
          <span id="moves">Moves: 0</span>
      </div>
      <div class="game-board" id="gameBoard"></div>
      <button id="startButton">Start New Game</button>
      <script src="script.js"></script>
  </body>
  </html>
  ```
- **HTML Structure**: The structure is defined with tags like `<div>`, `<button>`, etc., which are styled using CSS to create the game layout.
  - **Note**: In this session, we will not focus on the CSS styling, which will be covered in another lecture.

### **Event-Driven Execution in JavaScript**
- The **event-driven model** is central to how JavaScript works in web pages. Events (e.g., button clicks) trigger specific functions.
- In this Memory Game:
  - **Click events** are used to flip cards and start the game.
  - **Timer events** are used to update the game timer.
  - The main events handled in this game include:
    1. **Button click** to start a new game.
    2. **Card click** to flip the card and check for a match.

### **Key JavaScript Concepts in the Example**
1. **Selecting and Manipulating the DOM**
   - JavaScript uses methods like `document.getElementById()` and `document.querySelector()` to select HTML elements and manipulate them.
   - Example from the Memory Game:
     ```javascript
     const gameBoard = document.getElementById('gameBoard')
     const startButton = document.getElementById('startButton')
     ```
2. **Event Listeners**
   - An event listener is used to respond to user actions, such as button clicks.
     ```javascript
     startButton.addEventListener('click', startGame)
     ```
   - In the `startGame()` function, new cards are created, shuffled, and added to the board.

3. **Creating and Appending Elements Dynamically**
   - The game dynamically creates card elements using `document.createElement()` and appends them to the DOM.
     ```javascript
     function createCard(emoji) {
         const card = document.createElement('div')
         card.className = 'card'
         card.innerHTML = `
             <div class="card-content">?</div>
             <div class="card-content card-back">${emoji}</div>
         `
         card.addEventListener('click', () => flipCard(card))
         return card
     }
     ```

4. **Handling Events and Game Logic**
   - The game logic is triggered by user interactions with the cards.
   - For instance, when a card is clicked, the `flipCard()` function is called, which checks if two cards match:
     ```javascript
     function flipCard(card) {
         if (!gameStarted || card.classList.contains('flipped') || flippedCards.length >= 2) return

         card.classList.add('flipped')
         flippedCards.push(card)

         if (flippedCards.length === 2) {
             moves++
             movesDisplay.textContent = `Moves: ${moves}`
             checkForMatch()
         }
     }
     ```
   - This function ensures that game rules are enforced, such as limiting the number of flipped cards to two.

5. **Timers and Delays**
   - The timer for the game is controlled using `setInterval()`, which continuously updates the elapsed time until the game ends.
     ```javascript
     function startTimer() {
         clearInterval(timer)
         timer = setInterval(() => {
             seconds++
             timerDisplay.textContent = `Time: ${seconds}s`
         }, 1000)
     }
     ```

### **Exercises for Students**
1. **Experiment with the Code**:
   - Modify the card content in the `createCard()` function to use different emojis or symbols.
   - Change the grid size by modifying the CSS grid structure in `.game-board` (not covered in detail here).

2. **Try Adding New Features**:
   - Add a reset button to clear the game state and restart the game.
   - Modify the timer to show milliseconds instead of seconds.

3. **Explore the Console and Elements Panel**:
   - Use the **Console** in Developer Tools to interact with the variables and functions, e.g., type `startGame()` to start the game.
   - Inspect the **Elements** panel to see how the DOM changes as you interact with the game.

### **Conclusion**
- The event-driven execution model in browsers relies on events triggered by user interactions.
- Understanding how to select, manipulate, and respond to DOM elements with JavaScript is essential for web development.
- CSS and advanced styling will be discussed in a separate lecture.
