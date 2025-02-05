const accountId = 15420
let accountEmail="abc@gmail.com"
var password = "12345"
accountCity="Pune"
let accountState
// accountId = 123 // not allowed
accountEmail = "123@gmail.com"
password = "789";
accountCity="Mumbai"
console.log(accountId, accountEmail, password, accountCity)
console.table([accountId, accountEmail, password, accountCity,accountState]);

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/
