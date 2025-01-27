const accountId = 144553
let accountEmail = "manish@gmail.com"
var accountPassword = "41131"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "nknkk@.com"
accountPassword = "1531186411"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])