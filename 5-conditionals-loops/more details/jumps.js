/* FOR LOOPS */

/**************************/
// LABELED STATEMENTS
/* grammar
  identifier: statement
*/
// Give a statement a name to refer to it from other parts of your code
// Example:
{
  let x = 0
  here: x++
}

// when a statement has a label/name we can use break or continue

// Example valid break from while loop
{
  let x = 0
  again: while(x<10) {
    x++
    // console.log(x)
    break again // breaks out of the while loop after printing x to console
  }
}

// Example: continue
{
  let x = 0
  again: while(x<10) {
    x++
    // console.log(x)
    continue again // stops executing this scope and runs the next loop
    console.log("Will never print")  // program never reaches this line
  }
}

// Example: continue with condition
{
  let x = 0
  again: while(x<10) {
    x++
    // console.log(x)
    if (x%2 === 0)
      continue again // stops executing this scope and runs the next loop
    // console.log("Only print if x is odd")
  }
}


/**************************/
// break   - with/without label
/* grammar
  break
  break identifier
*/
// breaks to the next immediate loop
// example
{
  let list = [1,2,3,4,5,"",6,7,8,9]
  let result = []
  computeSum: for(let item of list) {
    // if (Number.isNaN(item)) break computeSum
    for(let letter of "string") {
      if (letter == "n") break computeSum  // compare with break without label (computeSum)
        result.push(letter)
      }
  }
  // console.log(result)
}

// breaks out of the switch
// example
{
  let fruit = "apple";
  // switch(fruit) {
  //     case "apple":
  //         console.log("This is an apple.") // should be printed
  //         break // experiment with removing this break statement
  //     case "banana":
  //         console.log("This is a banana.") // should not be printed UNLESS the break on line 89 is removed
  //         break
  //     case "cherry":
  //         console.log("This is a cherry.") // should NOT be printed
  //         break
  //     default:
  //         console.log("This is some other fruit.") // should NOT be printed
  // }
}

// Example: Invalid  break to label that is out of reach to break
{
  let x = 0
  again: x = 0
  while(x<10) {
    x++
    // console.log(x)
    // break again  // this line crashes with error: SyntaxError: Undefined label 'again'
  }
}





/**************************/
// continue   - with/without label

// breaks to the next immediate loop

// example
{
  let list = [1,2,3,4,5,"",6,7,8,9]
  let result = []
  computeSum: for(let item of list) {
    // if (Number.isNaN(item)) break computeSum
    for(let letter of "string") {
      if (letter == "n") continue computeSum  // compare with break without label  (computeSum)
        result.push(letter)
      }
  }
  // console.log(result)
}





/**************************/
// throw - Exceptions
/* grammar
  throw expression
*/
// used to signal that some exceptional condition
// occurred that the code cannot recover from

// Example:
{
  // throw Error("This is an intended example error thrown")  // crashes the program with error
}


/**************************/
// try/catch/finally - Handling exceptions
/* grammar
  try {
    statements
  } catch (identifier) {
    statements
  } finally {
    statements
  }
*/
// NOTE: Curly braces are mandatory
// *catch block* can be one or many, in order to have different exception handling
// depending on what exception that is thrown and matched

// *finally block* is optional, but if included, will always be executed
// Use finally block to clean up and deallocate scarce resources

// used by generators, topic for later lecture

// Example:

{
  try {

  } catch (error) {
    
  }
}