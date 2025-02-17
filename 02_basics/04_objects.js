//singleton or construsctor
const tinderUser ={} // non singleton


 const tinderUser1 = new Object() // singleton
 console.log(tinderUser) // {}
 console.log(tinderUser1) //{}



 tinderUser.id = "123abc"
 tinderUser.name = "Sam"
 tinderUser.isLoggedIn = false

 console.log(tinderUser) //{ id: '123abc', name: 'Sam', isLoggedIn: false }

 const regularUser ={
    email:"some@gail.com",
    fullName :{
        userFullName:{
            firstName :"Nisha",
            lastName :"Raut"
        }
    }
 }

 console.log(regularUser.fullName.userFullName)
 console.log(regularUser.fullName.userFullName.firstName)
 console.log(regularUser.fullName.userFullName.lastName)


 const obj1={
    1:"a", 2:"b"
 }
 const obj2={
    3:"a", 4:"b"
 }
 const newObj={
    5:"a", 6:"b"
 }

 const obj3 ={obj1, obj2}
 console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

 obj4 = Object.assign({}, obj1, obj2, newObj)
 console.log(obj4)
 console.log(obj1)


 const spreadObj = {...obj1, ...obj2, ...newObj}
 console.log(spreadObj)


 const users =[
    {name:"abc",
        email:"a@gmail.com"
    },
    {name:"xyz",
        email:"x@gmail.com"
    },
    {name:"lmn",
        email:"l@gmail.com"
    }
 ]

 console.log(users[1].email)//x@gmail.com

 console.log(tinderUser)

 console.log(Object.keys(tinderUser)) // returns array of keys - [ 'id', 'name', 'isLoggedIn' ]
 console.log(Object.values(tinderUser)) //returns array of values - [ '123abc', 'Sam', false ]
 console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]


 console.log(tinderUser.hasOwnProperty('islogged')) //false
 console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true


 const course = {
    courseName :"javaScript",
    price : 1500,
    courseInstructor: "Mayank"
 }

//  course.courseInstructor
const {courseInstructor} = course 
console.log(courseInstructor)//Mayank


//another way
const {courseName : cName} = course 
console.log(cName)//Mayank