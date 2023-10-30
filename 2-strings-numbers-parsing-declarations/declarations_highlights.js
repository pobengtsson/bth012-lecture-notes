/****************************/
// DECLARATIONS

/** let - Variable declaration and assignment
 *
 * NOTE: different from Java or C, no type as part of the declaration
 */
{
  let  foo			// same as: let foo = undefined
  let kal, ada  // same as: let kal = undefined, ada = undefined
}



/** good practice to initialize with value: */
{
  let foo = 3
  let kal = 3, ada = 5
}



/** const - declarations and assignment
 *
 * NOTE: const must be initialized with value as it cannot change after its declaration.
 */
{
  //  const foo    // illegal, results in error: SyntaxError: Missing initializer in const declaration
}
{
  const foo = "correctly assigns a value at declaration"
}



// attempt to change value throws exception TypeError
{
  const foo = "unchanged"

  // will cause the program to crash with error: Assignment to constate variable
  // foo = "attempt to mutate"
}






/****************************/
/* SCOPE */



/** let, const
 *     1) not accessible to lines before their declaration
 *     2) can be accessed in (scoped to) the block that its defined, or children
 */
// Example: let
{
  // console.log(x)  // 1) will crash with error: Cannot access 'x' before initialization
  let x = 10
  {
    x*2  // works fine
  }
}
// x  // 2) will crash with error: ReferenceError: x is not defined



/** top level declaration
 * is when we declare a variable without
 * enclosing it in curly braces or other blocks.
 */
// Example:
let topLevelDeclaration = 3456






/** Duplicte identifiers in same scope
 *     - not allowed
 */
// example:
{
  let foo = 234
  // let foo = 43 // crashes with error: SyntaxError: Identifier 'foo' has already been declared
}




/** Declarations in nested scope (shadowing)
*/
// Example:
{
  let foo = 10
  {
    // console.log(foo) // prints what?
    let foo = 20
    // console.log(foo) // prints what?
  }
}
// NOTE: legal to use same identifier, but shadows the outer scope and risk of confusion



/** VARS an why not to use it!!
  var, same syntax as let but different semantics:
      - scoped to the body of the enclosing function body
      - outside function it becomes a property of the global object,  accessible through globalThis
      - legal to declare multiple times (often seen for i in for loops multiple times in a function)
      - vars are hoisted to the top of the enclosing function code
*/
// How let works:
{
  let f = function() {
    // console.log(x) // will crash with error: Cannot access 'x' before initialization
    {
      let x = 10 // declared in child scope of function body
      console.log(x) // will print x to console
    }
    // console.log(x) // will crash with error: ReferenceError: x is not defined
  }
  // f() // uncomment to try example
}

// same example, BUT WITH var
{
  let f = function() {
    console.log(x) // will NOT crash with error, but prints undefined
    x = 10 // assignment before declaration, weird... but legal
    {
      var x // declaration at the end of the function body
      console.log(x) // also works... as expected
    }
    var x = "happy programming!!"
    console.log(x) // prints x, even though it was declared in a child scope
  }
  // f()  // uncomment to try example
}
// GENERALLY: DO NOT use var as it is a common source of very confusing and hard to find errors

