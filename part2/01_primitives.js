//  data types:- 
        // 1. primitive :- string, number, null, undefined, boolean, symbol
/*
  In JavaScript, primitive data types are the fundamental building blocks of data. They represent single values and are immutable, meaning their values cannot be changed once created.
Here are the 7 primitive data types in JavaScript:
Boolean: Represents a logical value, either true or false.
Null: Represents the intentional absence of a value.
Undefined: Represents a variable that has been declared but not assigned a value.
Number: Represents both integer and floating-point numbers.
String: Represents a sequence of characters.
BigInt: Represents integers larger than the maximum safe integer (Number.MAX_SAFE_INTEGER).
Symbol: Represents a unique and immutable value that can be used as an identifier.
Example:
JavaScript

let isTrue = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let count = 10; // Number
let name = "Alice"; // String
let bigNumber = 12345678901234567890n; // BigInt
let uniqueKey = Symbol("key"); // Symbol
            
*/


let number = 30;
console.log(typeof(number)) // output number

let anotherNumber = new Number(30) 
console.log(typeof(anotherNumber)) // object
console.log(anotherNumber) // output will be [Number: 30]
console.log(anotherNumber.valueOf()) // 30

// Note:- every primitive datatype can be also converted in non-primitive data type


////////////////// boolean

const isActive = true
console.log(typeof(isActive))  // output boolean

let isReallyActive = new Boolean(true)  // not recomended


///////////////// null and undefined


let firstName;
console.log(firstName)  // output undefind

// console.log(secondName)  // output:- ReferenceError: secondName is not defined

let thirdName = null;
console.log(thirdName)  // output:- null

let forthName = undefined
console.log(forthName)  // output:- undefined


//////       string

let myString = "hello"
let yourString = "fooo"
let username = "aziz"

let oldGreet = myString + " taufique"  
console.log(oldGreet)  // output:- hello taufique

let greetMessage = `Hello ${username}`
console.log(greetMessage) // output:- Hello aziz

let demoOne = `Value is ${4*3}`
console.log(demoOne)  // output:- Value is 12


/// sumbol:- it generate unique value

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1) // output:- Symbol() in memory js internally take as unique value
console.log(sm1 == sm2)  // output:- false


let sm3 = Symbol("Aziz")
let sm4 = Symbol("Aziz")

console.log(sm3)  // Symbol(Aziz)
console.log(sm3 == sm4)  // false