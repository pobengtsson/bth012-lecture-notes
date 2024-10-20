/************************************************************************/
/** Problem: A user tries to download a file, but when we access it
 *  the file is no longer available
 */

{
  function isReadable(file) {
    // in a real project, this would use file system functions to check
    return false
  }

  let filename = "a file that was there but then removed"
  if (!isReadable(filename)) {
    throw new Error(`No readable file at ${filename}`)
  }
}


/************************************************************************/
/** Problem: A user tries to add an item to their shopping cart,
 * but the item is out of stock.
 */

{
  function addToCart(item) {
    if (item.stock <= 0) {
        throw new Error('Item is out of stock.');
    }
    // Add item to cart logic...
  }
  addToCart({stock: 0}) // crashes program and throws: Error: Item is out of stock.
}


/**
 * Problem: you need to use a function that might throw an error and there is no way
 * for you to check it in code before
 */

functionMayThrowError = function () {
  throw new Error()
}

{
  try {
    // call the function that might throw error
    functionMayThrowError("someParameter")
    console.log('This line is not executed when the function throws an error.')
  } catch {error} {
    // take care of the error situation
    console.log(error)
  }
}

/**
 * Problem: You first setup a connection, then
 * execute an operation that might fail with execption.
 * Only, independent of the operation failing or not,
 * the connection needs to be closes in nice
 */

class Connection {
  constructor() {}
  open() {
      console.log("Connection opened.")
  }

  close() {
      console.log("Connection closed.")
  }
}

function riskyOperation() {
  // simulation of an operation that depends on things that are out of our control
  if (Math.random() > 0.5) {
      throw new Error("Operation failed.")
  } else {
      console.log("Operation succeeded.")
  }
}

function main() {
  const connection = new Connection()

  connection.open()

  try {
      riskyOperation()
  } catch (error) {
      console.error("An error occurred:", error.message)
  } finally {
      // This block ensures that the connection is closed no matter what.
      connection.close()
  }
}

main()
