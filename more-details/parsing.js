/****************************/
/* PARSING Numbers from Strings */

// Number() only succeeds parsing a numbers with valid digits only, i.e. without leading trailing characters

// Example parseInt()
{
  let strings = [
    "3 blind mice",
    "-12.34",
    "0xFF",
    "0xff",
    "-0XFF",
    "0.1",
    ".1" // NaN, integers cant start with . so NaN
  ]
  for(str of strings) {
    console.log(`str: ${str} => ${parseInt(str)}`)
  }
}

// Example parseFloat()
{
  let strings = [
    " 3.14 meters",
    ".1",
    "$72.47" // NaN, numbers can't start with "$"
  ]
  for(str of strings) {
    // console.log(`str: ${str} => ${parseFloat(str)}`)
  }
}
