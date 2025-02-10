//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*memory - 
stack (Premitive datatypes) - we get the copy of original value
heap(non-premitive datatypes) - we get the reference of of original value
*/

let name1 = "Supriya"
name2 = name1;
name2 = "Divya"
console.log(name1) // Supriya
console.log(name2) //Divya

let obj1 = {
    userName:"Supriya",
    empId:"12345"
}

obj2 = obj1
console.log(obj1)
console.log(obj2)

obj2.userName = "Sakshi"
//here both uderName for obj1 and obj2 will change as reference for both is same
console.log(obj1)
console.log(obj2) 