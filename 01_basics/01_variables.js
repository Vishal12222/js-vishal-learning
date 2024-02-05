const accountId = 144533
let accountEmail = "vishal@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "deep@gmail.com"
accountPassword = "55555"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])