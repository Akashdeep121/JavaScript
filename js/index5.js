// type conversion and type coercion

console.log('welcome to index5')

let myVar;
myVar = String(34)
// console.log(myVar, (typeof myVar))
let booleanVar = String(true)
console.log(booleanVar, typeof booleanVar)

let date = String(new Date())
console.log(date, (typeof date))

let arr = String([1,2,3,4,5,6,7,8,9])
console.log(arr.length, (typeof arr))

let i = 75
console.log(i.toString())

let number = parseFloat('34.098')

console.log(number.toFixed(2), (typeof number))

// type coercion
let mystr = "698"
let mynum = 34

console.log(mystr + mynum)