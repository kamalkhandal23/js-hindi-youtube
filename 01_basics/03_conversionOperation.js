let score = false;
let valueInNumber = Number(score); //it will convert the value in number
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

/*
"33" => 33
"33abc" => NaN
true => 1, false => 0
*/

let isLoggedIn = 1;
let valueInBool = Boolean(isLoggedIn);
console.log(valueInBool);

/*
0 => false
1 => true
"" => false
"kamal" => true
*/

////////////CONVERSION///////
let value = 5;
let negValue = -value;
console.log(negValue);

let str1 = "kamal";
let str2 = " khandal";
console.log(str1 + str2);


console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1"); //41


// prefix & postfix

let x = 5;
let y = x++;
console.log(x + " " + y); //postfix increment, increments the value and returns the value before incrementing

let a = 1;
let b = ++a;
console.log(a + " " + b); //prefix increment, increments the value and returns the value after incrementing.




