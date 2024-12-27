// abstraction :- it hides the complex implementation details

// Notes:- https://chatgpt.com/share/676e8e1a-f958-8011-ae1c-f3cc30dd80ef

class CoffeMachine {
    start(){
        return "machine start..."
    }

    brewCoffee(){

        return "Brewing coffee"
    }

    pressStartButton(){
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} + ${msgTwo}`
    }

}

let myMachine = new CoffeMachine()
console.log(myMachine.start())    // output:- machine start...
console.log(myMachine.brewCoffee())   // output:- Brewing coffee
console.log(myMachine.pressStartButton());  // output:- machine start... + Brewing coffee
