import askQuestion from "./askQuestion.js"

/** write your main application code in this file and add files
 * as necessary to make your code structure more testable and
 * easy to understand */
let exit = false
do {
  printMenu()
  const choice = await askQuestion("Enter the number for the command: ")
  console.log(`Your choice was ${choice}`)
  switch (choice) {
    case '1':
      console.log(`command 1`)
      break
    case '2':
      console.log(`command 2`)
      break
    default:
      console.log('Unrecognized command. Please try again!')
  }
} while (!exit)

function printMenu() {
  console.log("Welcome to the library. What do you want to do?")
  console.log("1) Add a book")
  console.log("2) Search for a book")
}


// import askQuestion from "./askQuestion.js"

// let otherVariable = 123
// const variableContainingAFunction = (someString, otherVariable) => {
//   console.log(otherVariable)
//   console.log(someString)
// }

// variableContainingAFunction("the string literal value", otherVariable)
// otherVariable = 678
// variableContainingAFunction("other string", otherVariable)
// variableContainingAFunction("isn't this fun!!!", otherVariable)

// const q1 = await askQuestion('Whats the answer to the first question?')
// console.log(`Your answer was ${q1}`)

// process.exit()
const aList = [1, 2, 3, 4]
let index = 0
do {
  if (aList[index] == 3) {
    break
  }
  index++
} while (true)
console.log("Done!")


// const aList = ['a', 'b', 'c']
// let index = 0;
// while (index < aList.length) {
//   console.log(`${aList[index]} at index ${index}`)
//   index ++
// }


// ['a','b','c'].forEach(function (item, index) {
//   console.log(`${item} is at index ${index}`)
// })