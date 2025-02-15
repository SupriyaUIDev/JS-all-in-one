const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Flash", "Batman"]


marvel_heros.push(dc_heros) //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] - it takes array as a element only

console.log(marvel_heros)  
console.log(marvel_heros[3,2]) // Spiderman - takes 2nd element of 3rd element and 3rd element is array


const allheros = marvel_heros.concat(dc_heros) // returns complete new array with combination of both
console.log(allheros)


const all_new_heros = [...marvel_heros, ...dc_heros] 
console.log(all_new_heros)

/* 
Using concat and spread, we can combine two arrays.
But using CONCAT we can combine ONLY TWO
and SPREAD can combine more arrays and returns one combined array
*/


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]
const allNumbersArr = [...arr1, ...arr2, ...arr3]
console.log(`All numbers array = ${allNumbersArr}`)


const complex_arr = [1, 2, 3, [4,5,6], 7, [6, 7, [4,5]]]
const usable_arr= complex_arr.flat(0) // infinity is depth. we can actually give it in a number too (1 or 2) depending on how many arrays we have
console.log(usable_arr)
/* 
o/p of above ->
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/



console.log(Array.isArray("ABC")); //false
console.log(Array.isArray(arr1)); //true
console.log(Array.from("ABC")); //[ 'A', 'B', 'C' ]
console.log(Array.from({         //gives empty array
    name:"John",
    salary:50000
}));


let obj1 ={         //gives empty array
    name:"John",
    salary:50000
}


console.log(obj1)

console.log(Array.from(obj1.name)) //[ 'J', 'o', 'h', 'n' ]


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))