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


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}


const yearsUntilRetirement = fucntion(birthYear, firstName) {
  const age = calcAge(birthYear);
const retirement = 65 - age;
return retirement;
  // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Matt'));
