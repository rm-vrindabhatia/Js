const accountId = 144553
let accountEmail = "we@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
/* Prefer not to use var becoz of issue in block scope and functional scope*/
// accountId = 2 // not allowed
accountEmail = "vb@gmail.com"
accountPassword = "21212"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])

