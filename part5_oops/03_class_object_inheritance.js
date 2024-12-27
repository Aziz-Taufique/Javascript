// Notes:- https://chatgpt.com/share/676d28fb-37e8-8011-8e67-4829f114c430

let car = {
    make: "Toyata",
    model: "Camry",
    year: 2020,

    start: function (){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start())  // output:- Toyata car got started in 2020


// constructor fucntion

function Person(name, age){
    this.name = name,
    this.age = age
}

const person = new Person("Aziz", 20)
console.log(person)  // output:- Person { name: 'Aziz', age: 20 }
const anotherPerson = new Person("Salman", 50)
console.log(anotherPerson)  // output:- Person { name: 'Salman', age: 50 }


/// prototype:-


function Animal(type){
    this.type = type;
}

/// prototypal chain
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

let dog = new Animal('dog')
console.log(dog.speak())  // output:- dog makes a sound


///// Prototype in arr

Array.prototype.aziz = function(){
    return `Custon method ${this}`
}

let myArr = [1, 2, 3, 4]
console.log(myArr.aziz())   // output:- Custon method 1,2,3,4

let myNewArr = [4, 5, 6]
console.log(myNewArr.aziz())   // output:- Custon method 4,5,6   



/////////// class

// Note:- when function goes inside a class they are refered as method. 
class Vechicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }


    // method
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

// inherit vechicle class
class Car extends Vechicle {
    // Note:- if we not declear a constructor here, then it borrow a constructor from Vechicle class

    // method
    drive(){
        return `${this.make} : This is an Inheritance example`
    }
}


let myCar = new Car("toyata", "bmw")  
console.log(myCar);  // output:- Car { make: 'toyata', model: 'bmw' }
console.log(myCar.start())  // output:- bmw is a car from toyata
console.log(myCar.drive())   /// output:- toyata : This is an Inheritance example
console.log(myCar.make)   // output:- toyata
console.log(myCar.model)  // output:- bmw
