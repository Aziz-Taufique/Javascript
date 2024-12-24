// Q1

function makeTea(typeOfTea){
    return `Makng ${typeOfTea}`;
}

const teaOrder = makeTea("green tea");
// console.log(teaOrder); // output:-  Makng green tea


// Q2

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`
    }
    return confirmOrder()
}

// console.log(orderTea("chai"))   // output:-   Order confirmed for chai


// Q3

// const totalPrice = (price, quantity) => {
//     return price*quantity
// }


// Note:- if you dont use {}, then do need to return.  (called implicit return)

/*
Implicit Return in JS
Implicit return, also known as implicit return value, is a feature in JavaScript where a function returns a value without explicitly using the return keyword. This is achieved by using arrow functions or single-line function blocks.
*/

const totalPrice = (price, quantity) =>  price*quantity

let totalCost = totalPrice(10, 5);
console.log(totalCost)  


