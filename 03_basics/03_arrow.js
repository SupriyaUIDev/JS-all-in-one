const user={
    username:"Nisha",
    price : 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
   
}
user. welcomeMsg()
user.username = "Pooja"
user. welcomeMsg()

// console.log(this)


function one(){
    let username = "Shruti"
    console.log(this)
    console.log(this.username) //undefined as 'this' cannot be used in function
}

one()

const two=function (){
    let username = "Shruti"
    console.log(this)
    console.log(this.username) //undefined as 'this' cannot be used in function
}

two()


const arrowFun =()=>{
    let username = "Rutuja"
    console.log(this.username) // undefined
    console.log(this) //{}
}

arrowFun()


const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3,5)) // 8
/* Another way */
const addTwo_2 =(num1, num2) => num1+num2
console.log(addTwo_2(3,5)) // 8

/*Yet another way */
const addTwo_3 =(num1, num2) => (num1+num2)
console.log(addTwo_3(3,5)) // 8

/* with curly brackets we have to mention 'return' explicitly with round brackets we no need to */

/* if need to return an object with arrow function*/

const returnObj = (num1, num2)=> {username:"Nisha"} // cannot return object with {}
console.log(returnObj()) // undefined

const returnObj1 = (num1, num2)=> ({username:"Nisha"})
console.log(returnObj1()) // { username: 'Nisha' }