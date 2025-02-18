let a = 10
const b = 20
var c = 30

{}

console.log(a)
console.log(b)
console.log(c)


function one(){
    const username = "Nisha"
    function two(){
        const website ="https://www.w3schools.com/"
        console.log(username) // can access as username here as it is global for two
    }
    // console.log(website) //error bcz website scope is just for function two
    two()
}
one() //Nisha


if(true){
    const username = "Nisha"
    if (username === "Nisha"){
        const website = "youtube"
        console.log(username + " "  + website)
    }
    // console.log(website) //error - website is not defined
}
// console.log(username)//error - website is not defined

console.log(addOne(5)) // 6

function addOne(num1){
return num1 + 1
}


console.log(    addtTwo(5)) //error - Cannot access 'addtTwo' before initialization. 
const addtTwo = function (num2){
    return num2 + 2
    }

