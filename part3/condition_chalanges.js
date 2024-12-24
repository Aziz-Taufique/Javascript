// check if the number is greater then other number.

let num1 = 5;
let num2 = 8;

if(num1 < num2){
    console.log(num1)
}else{
    console.log(num2)
}


// check if a string is uqual to another string.

let username = "aziz"
let anotherusername = "aziz"

if(username != anotherusername) return console.log("Yes")
else console.log("no")


// checking if a variable is number or not.

let score = 342;
// let score = "hee"

if(typeof score === 'number'){
    console.log("Yes it is numbre")
}else{
    console.log("No it is not number")
}


let marks = [];
// note:- the array is internally an object.
if(typeof marks === 'object'){
    console.log("Yes it is array")   // not execute
}else{
    console.log("No it is not array")  // execure
}

// check if boolean value is true or false: 




// let isReday = false
let isReday = true

if(isReday)  console.log("yes")
else console.log("No")


// check if array is empty or not.

let arr = [2, 3, 4]

if(arr.length === 0) console.log("Array is empty")
else console.log("no array is not empty")