const myArr = [1,2,3,4,5] // Elements

const arrDiff = ["abc", 5, 3, "x"] // array can have different types of elements

console.log(myArr[0]);


const fName = ["Supriya", "Pooja", "Nisha","Neha"]
const myArr2 = new Array(55,66,88,44)
console.log(myArr2)


console.log(`------------------ Array methods start------------------`)
myArr.push(6)//[ 1, 2, 3, 4, 5, 6 ]
console.log(myArr)
myArr.push(7)  
console.log(myArr)//[ 1, 2, 3, 4, 5, 6, 7 ]
myArr.pop()// no argument required, delete last one
console.log(myArr)//[ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(9) // add element at the beginning of the array
console.log(myArr) //[9, 1, 2, 3, 4, 5, 6]

myArr.shift()
console.log(myArr) // no argument required, delete first one - //[1, 2, 3, 4, 5, 6]



console.log(myArr.includes(8)) //false
console.log(myArr.includes(5)) //true
console.log(myArr.indexOf(9)) // -1 is element is not in array
console.log(myArr.indexOf(3)) // -1 is element is not in array

const newArr = myArr.join() // adds all elements of array into a string comma seperated
console.log(newArr) //1,2,3,4,5,6
console.log(typeof newArr) // string
console.log(`------------------ Array methods End ------------------`)



console.log(`-----------------------------------------------------------------------------------------------------`)
console.log(`------------------ Slice and splice ------------------ `)

console.log("original array" , myArr)

const myNewArr1 = myArr.slice(1,3) // exclude 3
console.log("slice", myNewArr1) 
console.log("original array after slice" , myArr)


const myNewArr2 = myArr.splice(1,3)
console.log("Splice" , myNewArr2)
console.log("original array after splice" , myArr)

// console.log("Splice", myArr)