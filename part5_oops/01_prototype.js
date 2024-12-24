// prototype based
// class-object based

// Initally js was Prototype based
// now js is class based it suppor class, object, constructor etc.

// https://chatgpt.com/share/676a77d6-8a18-8011-9d6b-ea8ae9faa49a
// https://chatgpt.com/share/676a8336-d2c4-8011-b902-04b7cf032732

// In browser
// let myArr = [1, 2, 3]
// console.log(myArr) // output:- values with prototype.

let computer = {cpu: 12}
let apple = {
    screen: "HD",
    __proto__: computer
}
let nvedia = {}

// console.log(computer)  // output:-  { cpu: 12 }
// console.log(`computer`, computer.__proto__)   // output:-  computer [Object: null prototype] {} , for more info run in browser

// console.log(`apple `, apple.__proto__)   // apple  { cpu: 12 }

// Note:- computer --> {} --> cpu: 12
//                      ^
//                      | 
// Note:- apple    --> {}  --> screen: "HD"

///////////////////////////////////////////////////////////////


let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

// another synter of prototype
Object.setPrototypeOf(tesla, genericCar)

console.log("tesla", tesla) // output:- tesla { driver: 'AI' }
console.log("tesla", genericCar);  // output:-  tesla { tyres: 4 } 
console.log('tesla', tesla.tyres);   // output:- tesla 4
console.log(`genericCar `, tesla.__proto__)  // output:-  genericCar  { tyres: 4 }

// beter way

console.log(`tesla`, Object.getPrototypeOf(tesla))   // output:- tesla { tyres: 4 }