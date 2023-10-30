/* WHILE LOOPS */

/**************************/
/* WHILE */
/* grammar
  while (expression)
    statement
*/
// Example: Infinite loop
{
  // while (true)
  //   console.log("Oh my, how do I stop this!!") // stop with by pressing ctrl-c
}

// Example 2 - finite loop
{
  let count = 0;
  while(count < 10) {
      // console.log(count);
      count++;
  }
}

// Example 3 - loop runs once
{
  let count = 0;
  while(count < 1) {
      // console.log(count);
      count++;
  }
}

/**************************/
/* DO-WHILE */
/* grammar
do
    statement
while (expression)
*/
// Example: loop always and only once
{
  let count = 0
  do {
    // this is always executed each loop before evaluating the expression
    // console.log(count++)
  } while(false)
}