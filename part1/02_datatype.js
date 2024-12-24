

/*
    DATA TYPE :-
    1. String
    2. Number
    3. Boolean
    4. Bigint   - for large number

    5. Undenifned  -> i not have definition yet but this definition will be full fill in fucture or may be not
    6. null -> empty -> it noes not means zero , eg -> temperature sent to db 

    7. Object
    8. Symbol -> for uniqueness
*/

// variabe :- is like a container which store somethig




var score = 30;
console.log("score is: ", score)
let name = "aziz";
console.log("Hey", name)

const getScore = score
console.log("get score is: ", getScore);

//objects:-
let cities = ["patna", "delhi", "pune"];
let user = {firstname: "Aziz", fullname: "Taufique"}
let data = new Date()
console.log("Date is: ", data)


/*

Notes: Data Types, Variables, and Objects in JavaScript
Data Types in JavaScript
String
Represents text data.
Example: "Hello, World!"

Number
Represents numerical values (integers and floating-point).
Example: 42, 3.14

Boolean
Represents two values: true or false.
Example: isAvailable = true

BigInt
Used for very large integers that cannot be represented using Number.
Example: let bigNumber = 12345678901234567890n

Undefined
A variable declared but not assigned a value.
Example:
let x; // x is undefined

Null
Represents "empty" or "nothing".
Example: A database entry might set a temperature field to null when no value is provided.

Object
A collection of key-value pairs or more complex entities.
Example: {name: "John", age: 30}

Symbol
Used to create unique identifiers.
Example: let uniqueId = Symbol("id");

Variables in JavaScript
Variables are like containers used to store data.
Declared using var, let, or const.

var
Global or function-scoped.
Example:
var score = 30;
console.log("score is: ", score);

let
Block-scoped and can be reassigned.
Example:
let name = "Aziz";
console.log("Hey", name);

const
Block-scoped and cannot be reassigned.
Example:
const getScore = score;
console.log("get score is: ", getScore);

Objects in JavaScript
Arrays:
Ordered collections of elements.
Example:
let cities = ["patna", "delhi", "pune"];

Plain Objects:
Key-value pairs representing structured data.
Example:
let user = { firstname: "Aziz", fullname: "Taufique" };

Date Object:
Represents date and time.
Example:
let data = new Date();
console.log("Date is: ", data);

Key Points
null vs undefined:
null explicitly represents no value.
undefined means a variable has been declared but not assigned.
Symbols ensure unique property keys, especially in objects.

*/



/*
Understanding how data types are stored in memory is crucial to understanding JavaScript's behavior. Here's a breakdown of how the data types in your notes are stored in memory:

1. Primitive Data Types
Primitive data types are stored directly in the stack memory. These types hold their value directly and are immutable (cannot be changed).

String
Stored as a sequence of Unicode characters.
In memory, strings are immutable, meaning a new memory location is created when the string is modified.
Example:
let name = "Aziz"; // "Aziz" stored directly in the stack.

Number
Stored as a 64-bit floating-point value (IEEE 754 format).
Example:
let score = 30; // Stored in the stack as a number.

Boolean
Stored as a single bit (true = 1, false = 0), though it often occupies a larger memory block for alignment.
Example:
let isAvailable = true; // Stored in the stack.

BigInt
Stored as an arbitrary-length integer.
Unlike Number, it can represent very large integers without losing precision.
Example:
let big = 12345678901234567890n; // Stored in the heap for its large size.

Undefined
The value of undefined is stored directly in the stack with a reserved memory slot to indicate "not assigned".

Null
null is a special object pointer with a value of 0x00 in memory, signifying "no object".

2. Reference Data Types

Reference types (like objects, arrays, and functions) are stored differently:

The stack contains a reference (pointer) to the location in the heap memory where the actual data is stored.

Object
Stored in the heap memory.
The stack holds a reference to the heap's memory address where the object is located.
Example:
let user = { firstname: "Aziz", fullname: "Taufique" };
Memory:
Stack: user -> 0x001 (reference to heap).
Heap: { firstname: "Aziz", fullname: "Taufique" }.

Array
Stored in the heap memory, similar to objects.
The stack contains a reference to the heap.
Example:
let cities = ["patna", "delhi", "pune"];
Memory:
Stack: cities -> 0x002 (reference to heap).
Heap: ["patna", "delhi", "pune"].

Date Object
Stored in the heap memory.
The stack holds a reference to the heap.
Example:
let date = new Date();
Memory:
Stack: date -> 0x003.
Heap: Date object with timestamp and metadata.

Symbol
Stored in the heap for uniqueness.
Example:
let id = Symbol("unique");
Memory:
Stack: id -> 0x004.
Heap: Symbol("unique").
Key Concepts


Primitive vs Reference Storage:

Primitive values are stored directly in the stack and are copied by value.
Reference values are stored in the heap, and only the reference is copied.

Mutable vs Immutable:
Primitive types (e.g., strings, numbers) are immutable.
Reference types (e.g., objects, arrays) are mutable.

Garbage Collection:
JavaScript automatically removes unused objects from the heap through garbage collection when no stack reference points to the object.

Stack vs Heap:
Stack memory is fast but limited in size.
Heap memory is slower but can handle larger, more complex data structures.

*/