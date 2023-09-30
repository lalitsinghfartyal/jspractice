const accountId = 101
let accountEmail = "lalitsanchay@gmail.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState;

accountEmail = "lalityogitpain@gmail.com"
accountPassword = "abcd"
accountCity = "UK"

/*
Prefer not to use var 
because of issue in block scope and functionaal scope
*/


console.log(accountCity)

console.table([accountEmail, accountPassword, accountCity, accountState])