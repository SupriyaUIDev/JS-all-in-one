// const userEmail = "abc@gmail.com" //Got the email
// const userEmail = "" //Dont have email
const userEmail = [] //Got the email

if(userEmail){
    console.log("Got the email")
} else{
    console.log("Dont have email")
}

/*Falsy values => Assumed to be FALSE
false, 0, -0, BigInt (0n), null, undefined, Nan, "" -> empty string*/

/*Truthy values => Assumed to be TRUE
"0" , "false", " ",  [] - array, {} - object, function(){} ->empty function*/

// How to check if array is empty
if(userEmail.length === 0){
    console.log("Empty Array")
}


const objTest ={}
if(Object.keys(objTest).length === 0){
    console.log("Object is empty")
}

//Nullish coalescing operator (??) : null undefined
//majorly used for error handling
let val1
val1 = 5 ?? 75
console.log(val1) // 5

val1 = null ?? 75
console.log(val1) // 75

val1 = undefined ?? 65
console.log(val1) //65

val1 = null ?? 5 ?? 10
console.log(val1) // 5

val1 = undefined ?? 15 ?? 10
console.log(val1) // 15



//Terniary operator
//condition ? true statement : false statement

const teaPrice = 100;
teaPrice >= 80 ? console.log("Price is is too high") : console.log("Price is too low") //Price is is too high



const rating = 5
rating>=10 ? console.log("Rating is high") : console.log("Rating is low")