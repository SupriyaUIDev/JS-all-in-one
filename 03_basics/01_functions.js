function sayMyname(){
    console.log("S")
    console.log("U")
    console.log("P")
    console.log("R")
    console.log("I")
    console.log("Y")
    console.log("A")

}
sayMyname()

function addTwoNum(num1, num2){
    console.log(num1+num2) // 7
}
addTwoNum(3,4) 
const result1 = addTwoNum(3,4) 
console.log("Result 1 : " , result1) // 'Result 1 :  undefined' as addTwoNum()  is not returning any value


function addTwoNumReturn(num1, num2){
    // let addition = num1+num2;
    // return addition 
   return num1+num2 // 7
   console.log(num1+num2) // this statement is ignored a it is after return statement. and nothing get executed after return statement in functino definition
}

const result2 = addTwoNumReturn(3,4)
console.log("Result 2 : " , result2) //Result 2 :  7


function loginUserMsg(username = "No one"){ // "No one" : default value, if no argument is passed to the functon, this will be considered as a default value
    if(username === undefined){
    // if(!username) // just another way to validate if argument is empty
        console.log("Please enter username")
    }
    else{
       return `${username} just logged in`
    }

}
// console.log(loginUserMsg("Nisha"))
console.log(loginUserMsg())// undefined (Please enter username)
console.log(loginUserMsg("Nisha"))// Nisha just logged in


function  calCartPrice(num1){
    return num1
}
console.log(calCartPrice(200)) //200
console.log(calCartPrice(150, 200, 800, 1420)) //150



function calCartPriceRest(...num1){
    return num1
}
console.log(calCartPriceRest(200,300,1540,1230)) //[ 200, 300, 1540, 1230 ]



function calCartPriceRest2(val1, val2, ...num1){

    return num1
}
console.log(calCartPriceRest2(200,300,1540,1230,640,550)) //[ 200, 300, 1540, 1230 ]

/* ---------------------------- Objects in function start ----------------------------*/
console.log("---------------------------- Objects in function start ----------------------------")
const userDetails={
    username : "Nisha",
    price : 250,
}


function handleObjects(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObjects(userDetails) //User name is Nisha and price is 250

/*Instead of creating and passing the object, we can directly pass the object as argument as below */
handleObjects({
    username : "Daksh",
    price : 240,
}) /*Output - User name is Daksh and price is 240*/

console.log("---------------------------- Objects in function end ----------------------------")
/*----------------------------Objects in function end ----------------------------*/





/* ---------------------------- Arrays in function start ----------------------------*/
console.log("---------------------------- Arrays in function start ----------------------------")
const mynewArray=[100,200,330,750]
function returnSecondValue(getArray){
return getArray[0]
}
console.log(returnSecondValue(mynewArray)) //100

console.log(returnSecondValue([700,500,300,570])) //700

console.log("---------------------------- Arrays in function end ----------------------------")
/* ---------------------------- Arrays in function end ----------------------------*/
