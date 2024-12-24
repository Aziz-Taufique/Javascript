console.log("aziz")
console.log("taufique")  // prin in next line, it has built-in line

// another  way to print in js
process.stdout.write("hoo")
process.stdout.write("hehe")  // not not print in next line

console.log("oho")

console.table({name: "aziz"})

console.warn({city: "jalandhar"})



// Notes on Printing in JavaScript
// console.log():

// Used to print output to the console.
// Automatically appends a newline (\n) after the output, so subsequent outputs appear on the next line.

// console.log("aziz");  // Prints: aziz
// console.log("taufique");  // Prints: taufique on a new line

// process.stdout.write():
// Writes output to the console without appending a newline.
// Consecutive process.stdout.write() calls print output on the same line unless manually adding a newline (\n).

// process.stdout.write("hoo");  // Prints: hoo
// process.stdout.write("hehe");  // Prints: hoohehe (on the same line)
// console.log("oho");  // Prints: oho on a new line

// console.table():
// Displays data as a table in the console.
// Best suited for arrays or objects.
// Example:
// console.table({ name: "aziz" });
// ┌─────────┬─────────┐
// │ (index) │  Value  │
// ├─────────┼─────────┤
// │  name   │ 'aziz'  │
// └─────────┴─────────┘

// console.warn():
// Prints a warning message to the console.
// Typically styled differently in the console (e.g., yellow text or with a warning icon).
// Accepts strings, objects, or other data types.
// javascript
// Copy code
// console.warn({ city: "jalandhar" });  // Warns: { city: 'jalandhar' }
