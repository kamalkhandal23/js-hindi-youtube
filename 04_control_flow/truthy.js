//truthy values
/* 
"0", "false", " ", [], {}, function(){}
*/

/*
Falsy Values
false,0,-0,BigInt 0n, "", null, undefined, NaN
*/

const userEmail = [];
if(userEmail){
    console.log("Received");
}else{
    console.log("Empty");
    
}

if(userEmail.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//object.keys gives the return value of object keys as array


//--------------------------------------------------------------
//Nullish Coaleascing Operator: Basically it is used in db 
//to avoid null and unfefined type of values

let val1;
// val1 = 5 ?? 10;  
// val1 = null ?? 10;
// val1 = undefined ?? 100;
// val1 = null ?? 10 ?? 100;
console.log(val1)




//Ternary Operator

const coldCoffee = 49;
//condition ? true : false

(coldCoffee > 40) ? console.log("Prices are high") : console.log("Low");
