'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// function logger() {
//   console.log('Hi there, my name is Matt');
// }

// //calling / running / invoking
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges...yummy!`;
//   return juice
// }

// const appleJuice = fruitProcessor(2, 4);
// console.log(appleJuice)

// // when a function returns something - it is important to save to a variable to execute it.
// // functions are reusable code blocks to avoid Don't Repeat Yourself (DRY)

// Number('23');


//////////////////////////////////
// Function Declarations vs. Expressions

// FUNCTION DELCARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1997);
// console.log(age1)

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }

// const age2 = calcAge2(1997);
// console.log(age1, age2);

//////////////////////////////////
// Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1997, 'Matt'));


// Functions Calling Other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3))


// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }


// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
//   // return retirement;
//   // // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1930, 'Matt'));

// return statement immediately exits the function.


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let doplphinsAvg = calcAverage(44, 23, 71);
let koalasAvg = calcAverage(65, 54, 49);
console.log(doplphinsAvg, koalasAvg)

const checkWinner = function (doplphinsAvg, koalasAvg) {
  if (doplphinsAvg >= koalasAvg * 2) {
    console.log(`The Dolphins won with average points of ${doplphinsAvg}`)
  } else if (koalasAvg >= doplphinsAvg * 2) {
    console.log(`The Koalas won with average points of ${koalasAvg}`)
  } else {
    console.log('No one won!')
  };
}

checkWinner(doplphinsAvg, koalasAvg);
