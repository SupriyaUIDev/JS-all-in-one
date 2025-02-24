//for loop
for (let i=1; i<=10 ;i++){

// if(i == 5){
//     console.log("5 is the best number")
// }
// console.log(i)

for(j=1;j<=10;j++){
    console.log(i*j)
}
}



const arr1 = [1,2,3,4,5]
for(i=0; i< arr1.length; i++){
    console.log(arr1[i])
}


//break and continue
console.log('------------------------------------- Break and continue -------------------------------------')
for(i=0;i<=20;i++){
// console.log(i)
if(i==5){
    console.log('5 Detected')
    break
}
console.log(`Index of i is ${i}`)
}

for(i=0;i<=20;i++){
// console.log(i)
if(i==5){
    console.log('5 Detected')
    continue
}
console.log(`Index of i is ${i}`)
}