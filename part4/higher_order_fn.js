
// Q1   Higher order function

function makeTea(typeOfTea){
    return typeOfTea
}

function processTeaOrder(makeTeaFn){
    return makeTeaFn("earl grey")
}

const order = processTeaOrder(makeTea)
// console.log(order)


// Q2  closure in js

function createTeaMaker(name){
    let num = 4;
    return function (teaType){
        return `Making ${num} ${teaType} ${name}`
    }
    
}

const teaMaker = createTeaMaker("by aziz")
const returnFn = teaMaker("green tea")
console.log(returnFn)       