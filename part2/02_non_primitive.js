// non-primitive data type :- Object, Array, function

let obj = {}

console.log(obj)  // output {}
console.log(typeof(obj)) //output object

const user = {
    firstname: "aziz",
    email: "a@gmail.com",
    isLoggedIn: true
}

// note:- userername cannot change but firstname or email can be changed because it is premitive data type.

console.log(user)  // output { firstname: 'aziz', email: 'a@gmail.com', isLoggedIn: true }
console.log(typeof(user)) //output:- object

console.log(user.firstname)  // output:- aziz

user.firstname = "updatedUser"
console.log(user.firstname)  // output:- updatedUser


user.lastName = "taufique"  // inserting last name
console.log(user.lastName)  // output:- taufique

console.log(user)   
// output   // {
            //     firstname: 'updatedUser',
            //     email: 'a@gmail.com',
            //     isLoggedIn: true,
            //     lastName: 'taufique'
            //   }

// Another way to write obj

const user2 = {
    "first name": "tarik",
    lastName: "miya"
}

console.log(user2["first name"])  // output tarik
console.log(user2["lastName"])    // output tarik

// inbuilt object
let today = new Date()
console.log(today.getDate())
console.log(today.getFullYear())



//////////////////////////            Array

let heros = ["a", "b", "c", true]



// type conversion
// js do lot of inplisit type conversion 

console.log(1 + '1')    // output:-  11
console.log('1' + 1)    // output:- 11

let isValue = true
console.log(Number(isValue))  // output:- 1
console.log(isValue + 1)  // output:- 2  because true = 1 => 1 + 1 = 2

let anothrValue = "2"  
console.log(typeof(Number(anothrValue)))  // output:- number 

let mixNumber = "2agb"
console.log(Number(mixNumber))  // output:- NaN
console.log(typeof Number(mixNumber))   // number



console.log(Number(null))  // output:- 0
console.log(Number(undefined))  // output:- NaN