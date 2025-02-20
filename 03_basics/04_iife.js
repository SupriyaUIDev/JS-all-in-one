/*named IIFE*/
(function one(){
    console.log(`DB connected`)
})();

// ()()
//Unnamed IIFE
(() =>{
    console.log(`DB connected two`)
})();


(function_new = function(){
    console.log('hi')
})();


// pass an argument to IIFE 
((userName) =>{
    console.log(`Hi ${userName}`)

})('Nisha');