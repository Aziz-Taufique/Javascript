// Note:- https://chatgpt.com/share/676ea8e7-fb40-8011-b156-f8f5af58bad0

class Employe {
    #salary;
    constructor(name, salary){
        if(salary <0 ){
            throw new Error("Salary can not be -ve")
        }
        this.name = name,
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid salary");
        }else{
            this.#salary = value
        }
    }

}


let emp = new Employe("Aziz", -100000)
// console.log(emp.name);    // output:- Aziz
console.log(emp._salary);  // output:- 100000

emp.salary = -60000