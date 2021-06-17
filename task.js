// // Task 1 confirm the ending of a string

// function confirmEnding (str, target) {
//     let endChecker = str.charAt(str.length - 1)
//     if (endChecker === target ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// confirmEnding ("Bastian" , "n");
// confirmEnding ("Congratulation" , "on")

// // Task 2 converting celsius to fahrenheit

// function convertToFahrenheit (celsius) {
//     let fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit + "F";
// }
// convertToFahrenheit (-30);
// convertToFahrenheit (-10);

// // Task 3: Truncating a string

// function truncateString (str , num ) {
//     if (str.length > num) {
//         let subStr = str.substring(0, num);
//         return subStr + "...."
//     } else {
//         return str
//     }
// }
// truncateString ("A-tisket a-tasket A green and yellow basket" , 8);
// truncateString (" Absolutely Longer" , 2 );

// // Task 4: sum of all numbers in an array using a loop

// let sum= 0
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i]
// }
// alert (sum);

// // Task 5: Generate an array values with a loop and sum the values
// //  using a loop

// let arr = [];
// for (a = 0; a < 20; a++) {
//  arr.push(a + 1)
// }
// alert (arr)
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// alert (sum);

// // Task 6: Check if a number is a prime number

// let numeral = 11;
// let primer = `${nume} is a prime number` 

// for (let i = 2; i < numeral; i++) {
//      if (numeral % i === 0){
//          primer = `${numeral} is not a prime number`
//      }
// }

// alert (primer);

// // Task 7: prime number checker that takes input from 
// // the user, here a function is used to check if the
// // number is prime or not 

// let response ;
// let resp;
// let number = parseInt(prompt("Enter a positive number"));
// let prime = `${number} is a prime number`
// if (number === 1) {
//     response = "1 is neither a prime number or a composite number"
// } else  if (number > 1) {
// function isPrime (num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             prime = `${number} is not a prime number`
//         }
//     }
// }
// isPrime(number);
// } else {
//     resp = "This number is not a prime number"
// };

// // Task 8: factors of a number

// let integer = number;
// let arrr = [];
// let disp ;

// if (number === 1) {
//     alert (response);
// } else if (number > 1) {
// function factor (check) {
// for (let b = 1; b < integer ; b++) {
//     if (integer % b === 0) {
//          arrr.push(b);
//          disp = arrr;
//         }
//     }
// }
// } else {
//     alert (resp);
// }
// factor(integer)
// if (prime === `${number} is a prime number` ) {
//     alert (`${number} is a prime number`)
// } else {
// alert (`${prime} because ${integer} has the following factors ${disp}`);
// }
// let sum;
// let add = (a,b,c)  => {sum = a + b + c };
// add (2,3,7);
// alert (sum);


//TTask 9: A program that prints prime numbers between two intervals

let arr = [];
let lowerNumber = parseInt ( prompt ("enter the start point"));
let higherNumber = parseInt ( prompt ("enter end point"));

for ( let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag === 0) {
        arr.push(i);
    }
}

alert (`The prime numbers between ${lowerNumber} and ${higherNumber} are:
${arr}`);

// Task 10: A program to tell if 3 different numbers are evenly spaced 

// function evenlySpaced (a , b , c ) {
//     if ((a - b === b - c) || (a - c === c - b) || (a - b === c - a)) {
//         return true
//     } else {
//         return false
//     }
// }
// evenlySpaced (3, 6 , 12);

