
// we can also create blue print of sbi form by function

function Person(name, age){
    this.name = name
    this.age = age
}


function Car(make, model){
    this.make = make
    this.model = model
}

let MyCar = new Car("Toyata", "bmw")
console.log(MyCar)   // output:- Car { make: 'Toyata', model: 'bmw' }

let MyNewCar =  new Car("tata", "nano")
console.log(MyNewCar)   // output:- Car { make: 'tata', model: 'nano' }


function Tea(type){
    this.type = type
    this.describe = function (){
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon tea")
console.log(lemonTea)  // output:-   Tea { type: 'Lemon tea', describe: [Function (anonymous)] }
console.log(lemonTea.describe())   // output:- This is a cup of Lemon tea

function Animal(species){
    this.species = species
}

// set prototype in function
Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}

let dog = new Animal("dog")
console.log(dog.sound())


let cat = new Animal("cat")
console.log(cat.sound())


// Error

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name
}


let tea = new Drink("tea")
console.log(tea);
