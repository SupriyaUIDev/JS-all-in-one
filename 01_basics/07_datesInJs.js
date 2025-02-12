let myDate = new Date()
console.log(myDate)//2025-02-12T09:55:45.404Z
console.log(myDate.toString()) //Wed Feb 12 2025 09:55:45 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Wed Feb 12 2025
console.log(myDate.toLocaleDateString())//2/12/2025
console.log(typeof myDate) // object

console.log('---------------------- My created date ----------------------')
let myCreatedDate = new Date(2023, 0, 23)// pass year, month and date. o/p - Mon Jan 23 2023
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2023, 0, 23,5,3)
console.log(myCreatedDate2.toLocaleString())//5.3 - time. O/p - 1/23/2023, 5:03:00 AM


let myCreatedDate3 = new Date("2023-01-16")
console.log(myCreatedDate3.toLocaleString()) // o/p - 1/16/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate3.getTime())
console.log(Date.now()/1000) // convert current time into sec
console.log(Math.floor(Date.now()/1000))  // get rid of decimal

console.log("---------------- New Date start ----------------")
let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getTime())
console.log(newDate.getDay())
console.log("---------------- New Date end ----------------")


console.log(newDate.toLocaleString("default", {
    weekday:"long"
}))