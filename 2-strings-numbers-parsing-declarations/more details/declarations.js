/****************************/
// DECLARATIONS

/* Variable declaration and assignment */

// different from Java or C, no type as part of the declaration
{
  let  foo			// same as let foo = undefined
  let kal, ada  // same as let kal = undefined, ada = undefined
}

// good practice to initialize with value:
{
  let foo = 3
  let kal = 3, ada = 5
}

// can use previously declared values:
{
  let x = 3, y = x * x  // x is declared and assigned first, then used in the expression to assign y
}

/****************************/
/* Declaring CONSTANTS */
{
  // const foo    // illegal must be initialized with value, results in error
}
{
  const foo = "correct"
}

// attempt to change value throws exception TypeError
{
  const foo = "unchanged"
  // will cause the program to crash with error: Assignment to constate variable
  // foo = "attempt to mutate"
}

/****************************/
/* SCOPE */
/**
  let, const declared variables:
    - are scoped to the block that its defined
    - are not accessible to lines before their declaration
    */
// Example: let
{
  // will crash with error: Cannot access 'x' before initialization
  // console.log(x)
  let x = 10
}

// top level declaration is when we declare a variable without
// enclosing it in curly braces or other blocks.
// Example:
let topLevelDeclaration = 3456

/* Duplicte identifiers in scope */
// example:
{
  let foo = 234
  // crashes with error: SyntaxError: Identifier 'foo' has already been declared
  // let foo = 43
}

/* Declarations in nested scope */
// example:
{
  let foo = 10
  {
    let foo = 20
    // console.log(foo) // prints what?

  }
}
// legal to use same identifier, but shadows the outer scope and risk of confusion


/**
  var, same syntax as let but different semantics:
      - scoped to the body of the enclosing scope
      - outside function it becomes a property of the global object,  accessible through globalThis
      - legal to declare multiple times (often seen for i in for loops multiple times in a function)
      - vars are hoisted to the top of the enclosing function code
*/
// earlier example with let:
{
  let f = function() {
    // will crash with error: Cannot access 'x' before initialization
    // console.log(x)
    let x = 10
  }
  f()
}
// same example, but with var
{
  let f = function() {
    // will NOT crash with error, but prints undefined
    console.log(bar)
    // LOTS OF LINES OF CODE
    bar = "foo"
    // more lines of code
    var bar
  }
  // f()  // uncomment to try example
}
// GENERALLY: avoid using var as it is a common source of very confusing errors

