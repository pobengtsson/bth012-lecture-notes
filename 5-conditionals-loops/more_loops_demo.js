
/************************************************************************/
/** Problem: Given an array of user ages, stop at the first age
 * that is below 18, as we want to alert the user.
 */

{
  let ages = [25, 30, 15, 40, 50]
  for (let age of ages) {
      if (age < 18) {
          // console.log("Alert: Found a user below 18!");
          break;
      }
  }
}




/************************************************************************/
/** Problem:  Loop through an array of user comments.
 *  If a comment contains a banned word "spam", skip it,
 *  but if a comment is "end", stop processing.
 */
let comments = ["This is great!", "Check out my site for free spam goodies!", "Awesome post!", "end", "Another comment"]
for (let comment of comments) {
    if (comment === "end") {
        break
    }
    if (comment.includes("spam")) {
        continue
    }
    console.log(comment)
}


/************************************************************************/
/** Problem: Orderfulfillment. From a user's basket of items, remove
 *  items one by one until you either encounter an out-of-stock item
 *  or empty the basket.
 */
{
  let basket = ["apple", "banana", "cherry", "date", "out-of-stock-item", "fig"]
  // while (basket.length > 0) {
  //   let item = basket.shift()
  //   if (item === "out-of-stock-item") {
  //       console.log("Encountered an out-of-stock item!")
  //       break
  //   }
  //   console.log("Processing item:", item)
  // }
}

/************************************************************************/
/** Problem: A user wants to search for a specific number in a 2D array.
 *  If the number is found, they'd like to know which row it was found
 *  in. If the number appears multiple times, they only care about
 *  the first occurrence.
 */
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ]
  let target = 9
  let foundRow
  search:
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        foundRow = i
        break search  // without the label, it would only break the inner most loop
      }
    }
  }
  console.log(`Found in row: ${foundRow}`)
}
