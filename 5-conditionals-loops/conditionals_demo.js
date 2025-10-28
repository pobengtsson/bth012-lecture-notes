// Some programming problems we might want to solve
// with if/if-else
/*===============================================*/
// Determine if a number is even or odd
// {
//   const number = 45634
//   if (number % 2 === 0) {
//       console.log("Even")
//   } else {
//       console.log("Odd")
//   }
// }

/*===============================================*/
// Positive, Negative, or Zero?
// Given a number, determine if it's positive, negative, or zero.

// {
//   const number = '-13'

//   if (number > 0) {
//       console.log("Positive")
//   } else if (number < 0) {
//       console.log("Negative")
//   } else {
//       console.log("Zero")
//   }
// }

/*===============================================*/
// Find the largest among three numbers (find the bug)
// {
//   const a = 122
//   const b = 12
//   const c = 135

//   if (a > b && a > c) {
//       console.log(a + " is the largest.")
//   } else if (b > a && b > c) {
//       console.log(b + " is the largest.")
//   } else {
//       console.log(c + " is the largest.")
//   }

//   // const largest = [a,b,c, 13, 456, 45.4, 3.14]
//   //   .reduce((acc, val) => val + acc)
//   // console.log(largest)
// }

/*===============================================*/
// Age Categories
// Given an age, classify it as 'Child' (0-12),
// 'Teenager' (13-19), 'Adult' (20-64), or 'Senior' (65+).
// {
//   const age = 50

//   if (age >= 0 && age <= 12) {
//       console.log("Child")
//   } else if (age >= 13 && age <= 19) {
//       console.log("Teenager")
//   } else if (age >= 20 && age <= 64) {
//       console.log("Adult")
//   } else if (age >= 65) {
//       console.log("Senior")
//   } else {
//       console.log("Invalid age.")
//   }
// }

/*===============================================*/
// Basic Grading System
//   Given a score out of 100, grade it as A, B, C, D, or F.
// {
//   let score = 90

//   if (score >= 90) {
//       console.log("A")
//   } else if (score >= 80) {
//       console.log("B")
//   } else if (score >= 70) {
//       console.log("C")
//   } else if (score >= 60) {
//       console.log("D")
//   } else {
//       console.log("F")
//   }
// }

/*===============================================*/
// Basic Grading System - SWITCH
// {
//   let score = 91;
//   switch (true) {
//     case score >= 90:
//       console.log("A");
//       break;
//     case score >= 80:
//       console.log("B");
//       break;
//     case score >= 70:
//       console.log("C");
//       break;
//     case score >= 60:
//       console.log("D");
//       break;
//     default:
//       console.log("F");
//   }
// }

/*===============================================*/
// Is it a weekend? - SWITCH
// {
//   let day = "Saturday";
//   switch (day) {
//     case "Saturday":
//     case "Sunday":
//       console.log("It's a weekend!");
//       break;
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//       console.log("It's a weekday.");
//       break;
//     default:
//       console.log("Invalid day.");
//   }
// }

