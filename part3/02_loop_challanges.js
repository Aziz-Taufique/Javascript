// Q1

let arr = ["Green tea", "black tea", "chai", "oolong tea"]
let selectedTea = []
for(let i=0;i<arr.length;i++){
    if(arr[i] === "chai") break;
    else selectedTea.push(arr[i]);
}

console.log(selectedTea)



// Q2

let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []
for(let i=0;i<cities.length;i++){
    // if(cities[i] !== "paris") visitedCities.push(cities[i]);   // also correct
    if(cities[i] === "Paris") continue;
    visitedCities.push(cities[i]);
}

console.log(visitedCities)


// Q3   for-of loop.

let nums = [1, 2, 3, 4, 5]
let smallNumber = []
for(let num of nums){
    if(num === 4) break;
    else smallNumber.push(num)
}

console.log(smallNumber)


// Q4

let teas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for(let tea of teas){
    if(tea !== "herbal tea") preferredTeas.push(tea)
    // if(tea === "herbal tea") continue
    // preferredTeas.push(tea)
}

console.log(preferredTeas)


// Q5  for-in loop

let citiesPopulation = {
    London: 89000000,
    New_York: 900000,
    Paris: 230000,
    Delhi: 10000000
}

// console.log(Object.keys(citiesPopulation))  // output:- [ 'London', 'New York', 'Paris', 'Delhi' ]
// console.log(Object.values(citiesPopulation)) // output:- [ 89000000, 900000, 230000, 10000000 ]

let cityNewPopulations = {}

for(cities in citiesPopulation){
//    console.log(cities)   // output: keys of object
//    console.log(citiesPopulation[cities])   // values of object

    if(cities === "Delhi") break
    cityNewPopulations[cities] = citiesPopulation[cities]

}

console.log(cityNewPopulations)  // output:- { London: 89000000, New_York: 900000, Paris: 230000 }


// Q6

let worldCities = {
    sydney: 5000000,
    tokyo: 9000000,
    berlin: 3500000,
    paris: 220000
}

largeCities = {}

for(city in worldCities){
    if(worldCities[city < 3000000]) continue
    else largeCities[city] = worldCities[city]
}

console.log(largeCities)



// Q7  forEach loop

let cutting = ["early greay", 'green tea', "chai", "oolong tea"]

let availableTeas = []

cutting.forEach((e) => {
    if(e === "chai") return;
    else availableTeas.push(e)
})

console.log(availableTeas)


// Q8

let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"]

let traveledCities = []

myCities.forEach((city) => {
    if(city === "Sydney") return;
    traveledCities.push(city)
})

console.log(traveledCities)



// Q9


let myNums = [2, 5, 7, 9]

let doubledNums = []

myNums.forEach((num) => {
    if(num === 7) return;
    doubledNums.push(num*2)
})

console.log(doubledNums)



// Q10

let myTeas = ["chai", "Green tea", "Balck tea", "jasmine tea", "harbal tea"]

let sortTeas = []

for(let tea of myTeas){
    if(tea.length > 10) break;
    sortTeas.push(tea)
}   
console.log(sortTeas)