const accountId = 12345
let accountEmail = "example@gmail.com"
var accountPassword = "123"
accountCity = "Pune" // Try to avoide this way to assign veriable
let accountState

// accountId = 2 // Not Allowed
accountEmail = "hello@gmail.com"
accountPassword = "321"
accountCity = "enuP"

console.log(accountEmail);

/*
Don't use var to define the veriable because of functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
