const score=400
console.log(score)
const balance = new  Number(1500)
console.log(balance);


console.log(balance.toString())
console.log(typeof(balance.toString()))
console.log(balance.toString().length)
console.log(balance.toFixed(2))// o/p - 1500.00
console.log(`Balance precision - ${balance.toPrecision(5)}`) // o/p - 1500.00

const otherNumber = 23.66666
console.log(`othernumber precision - ${otherNumber.toPrecision(3)}`) // o/p - 23.7


const aNumebr = 10458761;
console.log(aNumebr.toLocaleString('en-IN'))// o/p - 1,04,58,761. Default is US standard(10,458,761)



// +++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++
console.log('---------------------------------MATH start here-----------------------------------------')
console.log(Math)
console.log(Math.abs(-66))
console.log(Math.round(4.3)) // 4 
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.3)) // 4
console.log(Math.pow(2,5)) //32 
console.log(Math.min(4,9,63,32,5)) // 4
console.log(Math.max(4,9,63,32,5)) // 63    
console.log(Math.random()) // generates random value between 0-1
console.log((Math.random()*10) +1)


const  min = 10
const max = 20


console.log(Math.floor(Math.random()*(max-min+1))+min)