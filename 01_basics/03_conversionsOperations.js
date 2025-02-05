/*-------------------conversion to Number start--------------------*/
let score = "33"
console.log(typeof score);//both are same
console.log(typeof (score));//both are same


let valueInNumber = Number (score); //here we are converting variable declared above to Number

console.log(typeof valueInNumber)
console.log(valueInNumber)

//if we try to convert to Number ----------------------------------
// "33" => 33 - converted to number and output is numeric value
// "33abc" => converted to Number datatype but output is value is - NaN
//true => 1; false=>0 

/*-------------------conversion to Number End----------------------*/


/*-------------------conversion to Boolean start--------------------*/
let isLoggenIn = "adasf";
console.log(isLoggenIn)
let booleanIsLoggedIn = Boolean(isLoggenIn);
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// if we try to convert to Boolean ----------------------------------
// 1=>true; 0=> false
// "" => flase
// "any_string" => true

/*-------------------conversion to Boolean End----------------------*/




/*-------------------conversion to String start--------------------*/
let someNumber = 33
let StringNumber = String(someNumber)
console.log(typeof StringNumber);
console.log(StringNumber);
/*-------------------conversion to String End----------------------*/



/*******************       OPERATIONS        *********************** */
