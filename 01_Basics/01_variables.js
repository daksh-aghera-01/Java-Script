const accountID = 144553
let accountEmail = "abcd@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountID = 2 // Not allowed

accountEmail = "ad@ad.com"
accountPassword = "010101"
accountCity = "Vadodara"

// console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/