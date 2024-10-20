/****************************/
/* TYPE CONVERSIONS */

/** Automatic type conversions make javascript very different from
 * Java, C and Python
 * Javascript WILL CONVERT ANY VALUE TYPE to the type it needs
 */
// Example
// Let's see how values are converted
let values = [
  undefined,
  null,
  true,
  false,
  "",
  "0",
  "1.2",
  "one",
  0,
  -0,
  1,
  Infinity,
  -Infinity,
  NaN
]

console.log("Value\t\ttoString\ttoNumber\ttoBoolean")
for (let value of values) {
  console.log(`${typeof(value)!=='string'?value:'"'+value+'"'}\t\t${value}\t\t${Number(value)}\t\t${!!value}`)
}




/** Converting to BOOLEANS
 * Any value or object is, when needed, converted automatically to a Boolean
 * Values that convert to:
 *    - true is called truthy
 *    - false is called falsy
*/

/* These 6 converts to false */
undefined
null
0
-0
NaN
""
/** ALL OTHER VALUES and OBJECTS convert to true, are called truthy
 * As seen in the demo example, this is useful to validate input variables.
 * Makes it easy to check if variable has a
 * non empty, non zero, non null value, non NaN value. :)





/** Convenient ways to convert
 *  to string,
 *  to number,
 *  to boolean */

/* Example: Using operators: */
{
  let x = 123
  // console.log(typeof(x + ""))  // converts to string
}
/* Example: Using operators: + unary */
{
  let x = "x123"
  // console.log(typeof(+x)) // converts to number
  // console.log(typeof(x-0))  // converts to number
  // console.log(+x)
}
/* Example: Using operators: ! and !! */
{
  let x = 123
  // console.log(!!x)  // converts to boolean
  // console.log(!x)  // converts to !Boolean(x)
}




/****************************/
/* EXPLICIT TYPE CONVERSION */
// Examples
{
  let x = Boolean("true")
  let y	= String(123456)
  let n1 = Number(false)
  let n2 = Number("1235")
  let n3 = Number("prefix 1235 suffix")  // n3 == NaN
  // console.log(x,y,n1,n2,n3)
}
