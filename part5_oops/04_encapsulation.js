// Encapsulation:- it mean that restrict the direct access to the object data.

// Notes:- https://chatgpt.com/share/676e8a72-13cc-8011-84bc-9cb07a7f5782

class BankAccount {
    // balace cannot access outside the class
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalnace(){
        return `$ ${this.#balance}`
    }

}

let acount = new BankAccount()
console.log(acount.balance)  // output:- undefined
console.log(acount.deposit(500))  // output:- 500

console.log(acount.getBalnace())  // output:- % 500cccha

