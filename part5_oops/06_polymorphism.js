
class Bird {
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly...`
    }
}

let bird = new Bird()
let penguin = new Penguin()

console.log((bird.fly()));  // output:- Flying...
console.log(penguin.fly());   // output:- Penguin can't fly...

