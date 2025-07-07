let arr1=[5,6,9,7,1,34,36,18,42]

function ascOrder(arr){
// console.log(arr1)
let n= arr.length
// console.log(n)

for(let i=0;i<=n;i++){
    for(j=0;j<=n;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp;
        }
    }
   
}
console.log(arr)
}


ascOrder(arr1)