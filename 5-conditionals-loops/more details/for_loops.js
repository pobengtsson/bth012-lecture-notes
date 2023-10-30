/* FOR LOOPS */

/**************************/
/* FOR */
/* grammar
  for(initialize ; test ; increment)
    statement
*/
// Example: Infinite loop
{
  // for(;true;)
  //   console.log("Oh my, how do I stop this!!") // stop with by pressing ctrl-c
}

// Example 2: loop 10 times
{
  for(let count = 0; count < 10; count++) {
    // console.log(count);
  }
}

// Example 3: loop with more then one dependent variable
{
  let i, j, sum = 0;
  for(i = 0, j = 10 ; i < 10 ; i++, j--) {
      sum += i * j;
      // console.log(sum)
  }
}


/**************************/
/* FOR/OF */
/* grammar
  for (declaration of expression)
    statement
*/
// Benefits, does not risk getting infinite loops

// Example 1: Iterate over a string (which is a interable object)
{
  for (let letter of "String") {
    // console.log(letter)
  }
}

// Example 2: Iterate over a string (which is a interable object)
{
  let list = [1,2,3,4,5]
  for (let item of list) {
    // console.log(item)
  }
}



/**************************/
/* FOR/IN */
/* grammar
  for (declaration in expression)
    statement
*/
// We will look into this when we have talked about objects
