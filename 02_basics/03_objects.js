/*singleton :> if we create object with constructor
create it like -> object.create
*/

//object literals => keys are considered as a string

const mySym = Symbol ("key1") // symbol declaration

const jsUser ={
fName :"Nisha",
"full name" : "Nisha Raut",
// mySym : "myKey2",
[mySym] : "myKey1",
age : 18,
location   :"Mumbai",
email : "nisha@gmail.com",
isLoggedIn : false,
lastLoginDays : ["Monday" , "Wednesday"]
}

console.log(jsUser.fName)
console.log(jsUser["fName"])
console.log(jsUser["full name"])// we cannot access this like - jsUser.full name
// console.log(typeof jsUser.mySym)
console.log(typeof jsUser[mySym]) // string


jsUser.email = "nisha_new@gmail.com" // overwrite
// Object.freeze(jsUser)

jsUser.email = "nisha1@hotmail.com" //once object is freez, value cannot be changed

console.log(jsUser) 

jsUser.greeting =function(){
    console.log('Hi JS user')
}
jsUser.greeting();//Hi JS user


// console.log(jsUser.greeting) 
// console.log(jsUser.greeting())   
// console.log(jsUser.greetingTwo())   
// Object.unfreeze(jsUser)


jsUser.greetingTwo = function(){
    console.log(`Hi JS user ${this.fName}`); // this refers to the present keys available in object we are referring to which is 'jsUser'
}
jsUser.greetingTwo();//Hi JS user Nisha
