const accountId = 2116
let accontEmail = "zworkmail@gmail.com"
var accountPassword = "12345"
accountCity = "Bokaro"

// accountId = 2  //  As we have already declared accountID as a constant we cannot change it, 
                 // if we do node will thorw an error stating - Assignement to constant variable.
accontEmail = "asad@gmial.com"
accountPassword = "656565"
accountCity= " delhi"
let accountState;
console.log(accountId);

/*
never use var, use always const and let beacuse of issue in block scope and functional scope 
*/

console.table([accountCity, accontEmail, accountPassword, accountState])