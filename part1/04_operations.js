
let score = 23;
let bonus = 54;

let totalScore = score + bonus


let addition = 2 + 4;
let sub = 4-1;
let mul = 4*1;
let div = 5/2;
let reminder = 5%2;
let expo = 2 ** 4;

let myScore = 43;
myScore++;
console.log(myScore)  // output 44

let credit = 20;
credit--;
console.log(credit)   // output 19


//  comperision operator

let num1 = 3;
let num2 = 3;
let num3 = 5;

console.log(num1 == num2)  // output true
console.log(num2 == num3)  // output fasle
console.log(num2 != num3)  // output true
console.log(num1 < num2)  // output false
console.log(num1 <= num2)  // output true

// logical operator

// ! -> reverse
// && -> and
// || => or


let isLoggedIn = true
let paid = false

console.log("Is Allow: ",isLoggedIn && paid)  // false

let isEmailUser = true;
let isGoogleUser = false;
console.log("Is LoggedIn: ",isEmailUser || isGoogleUser) // true


// assignment operator

let num = 30 + 23

let num4 = 40;
num4 += 10;
num4 -= 10;
num4 *= 10;
num4 /= 10;
console.log("Number is: ",num4)   

/// operator presidesce

let val = 2*3+2-1;  // bad practice
let val2 = ((2 * (3 + 2)) - 1);  // good practice

console.log("value is: ", val) // output is 7
console.log("val2 is: ", val2)  // output is 9