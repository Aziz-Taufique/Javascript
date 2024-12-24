// Q1

let teaFlavors = ["grreen tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0]
console.log(firstTea)

// Q2

let cities = ["London", "Tokyo", "Paris", "New York"]
let favoriteCity = cities[2]
console.log(favoriteCity)

// Q3

let teaTypes = ["harbal tea", "white tea", "masala tea"]
console.log(teaTypes)

teaTypes[1] = "jasmine tea"
console.log(teaTypes)

// Q4

let citiesVisited = ["Mumbai", "Sydney"]
console.log(citiesVisited)
citiesVisited[citiesVisited.length] = "berlin"
// citiesVisited.push("Berlin")
console.log(citiesVisited)


// Q5

let teaOrders = ["chai", "iced tea", "matcha", "early grey"]
console.log(teaOrders)
let lastOrder = teaOrders.pop()
console.log(teaOrders)
console.log(lastOrder)


// Q6   make soft copy of existing array
/*
let var1 = 5;
let var2 = var1
var1 = 9;
console.log(var2) // 5;

let popularTea = ["green tea", "oolong tea", "chai"];
console.log(popularTea)
let softTea = [];
console.log(softTea)
for(let i=0;i<popularTea.length;i++){
    softTea.push(popularTea[i])
}

console.log(softTea)
*/

let popularTea = ["green tea", "oolong tea", "chai"];
console.log(popularTea)     // output:- [ 'green tea', 'oolong tea', 'chai' ]
let softCopyTeas = popularTea
popularTea.pop()
console.log(softCopyTeas)   // output:- [ 'green tea', 'oolong tea' ]
console.log(popularTea)    // output:- [ 'green tea', 'oolong tea' ]


// Q7   make hard copy of existing array

let topCities = ["Berlin", "Singapore", "Waseypur"]
let hardCopy = [...topCities]
// let hardCopy = topCities.slice()
topCities.pop()
console.log(topCities)
console.log([hardCopy])

// Q8

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = europeanCities + asianCities
// console.log(worldCities)  //output:- Paris,RomeTokyo,Bangkok
// console.log(typeof worldCities)   // output:- String

// let worldCities = [europeanCities, asianCities]
// console.log(worldCities)  //Output:-   [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)   // output:- [ 'Paris', 'Rome', 'Tokyo', 'Bangkok' ]


// Q9

const teaMenu = ["masala tea", 'oolong tea', "green tea"]
console.log(teaMenu.length)  // output:- 3


// Q10

let cityBucketList = ["kyoto", "London", "Cape town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)  // output:- true

console.log(cityBucketList.includes("mumbai"))  // false


// shift:- remove first el of arr and shift remaining el from starting

const arr1 = [1, 2, 3]
const firstEl = arr1.shift()

console.log(firstEl)  // output:- 1
console.log(arr1)     // output:- [ 2, 3 ]


// unshift

const arr2 = [1, 2, 3]
console.log(arr2.unshift(4, 5))  // output:- 
console.log(arr2)        // output:- [ 4, 5, 1, 2, 3 ]
 