// Notes:- https://chatgpt.com/share/676e9138-cdfc-8011-8efa-c337e910d5d7
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

