
// Notes:- https://chatgpt.com/share/676e948c-b1f4-8011-9dda-cfce6e291a3e

class Calculator {
    // static is special method which are only be called by class itself, nobody else call it.
    static add(a, b){
        return a + b;
    }
}

let miniCalc = new Calculator()
// console.log((miniCalc.add(4, 5)));  // outptu:- TypeError: miniCalc.add is not a function

// access by class
console.log(Calculator.add(4,9));  // output:- 13



/////


class MyClass {
    static myStaticMethod() {
      return "Hello from static method!";
    }
  
    static myStaticProperty = "This is a static property";
  
    instanceMethod() {
      return "Hello from instance method!";
    }
  }
  
  console.log(MyClass.myStaticMethod()); // "Hello from static method!"
  console.log(MyClass.myStaticProperty); // "This is a static property"
  
  const myInstance = new MyClass();
  console.log(myInstance.instanceMethod()); // "Hello from instance method!"
  // console.log(myInstance.myStaticMethod()); // Error: not accessible on instances
  

  