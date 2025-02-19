const accountId = 12122;
let accountEmail = "kamalsh684@gmail.com";
var accountPass = "234234";
accountCity = "Jaipur";

// accountId = 22222; //not allowed

/*
Prefer not to use var
because of issue of block scope and functional scope
*/
accountEmail = "statusbykamal@gmail.com";
accountPass = "11111";
accountCity = "Delhi";

console.table([accountId,accountEmail,accountPass,accountCity]);