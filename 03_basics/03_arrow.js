const user= {
    username : "Nisha",
    website : "https://www.w3schools.com/",
    price:350,
    empId : 12345,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMsg() //Nisha, welcome to website
user.username = "Sam"
user.welcomeMsg() //Sam, welcome to website
console.log(this)