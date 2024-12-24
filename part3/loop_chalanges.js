// Q1

let i = 100;
let sum = 0;
while(i != 0){
    sum += i;
    i--;
}

console.log(sum)

// Q2

let j = 5;
let countDown = []
while(j != 0){
    countDown.push(j)
    j--
}

console.log(countDown)


// Q3

// Note: nodejs does not support prompt, run in browser.

/*

let teaCollection = []
let tea

do{
    tea =  prompt(`Enter your favourite tea (Type stop to finish): `)
   if(tea !== "stop") teaCollection.push(tea)
}while(tea !== "stop")

console.log(teaCollection)   // ['chai', 'tea', 'lemon tea']

*/

// Q4

let total = 0;
let num = 1

do{
    total += num;
    num++;
}while(
    num <=3
)

console.log(total)   // output:- 6


// Q5

let multipliedNumber = []

let arr = [2, 4, 6]

for(let i=0;i<arr.length;i++){
    multipliedNumber.push(arr[i]*2)
}

console.log(multipliedNumber)   // output:- [ 4, 8, 12 ]


// Q6

let = cityList = []
let cities = ["Paris", "New york", "Tokyo", "London"]


for(let i = 0;i<cities.length;i++){
    console.log(cities[i]);
    cityList.push(cities[i])
}

console.log(cityList)

