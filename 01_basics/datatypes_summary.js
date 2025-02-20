/*
There are two categorization of datatypes on the basis of 
how the data can be accessed and store in the memory.
1. Primitive
2. Non-Primitive
*/

// # Primitive
/*
There are total 7 types of primitive datatypes
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

Note :  Primitive datatypes do not shares the direct referance of the original variable
        it shares the copy.
*/

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2);  //false bcz symbol provides uniqueness


/*
---Reference Type (Non-Primitive DataTypes)---
1. Array
2. Objects
3. Functions
*/

 const heroes = ["saktiman","naagraj","doga"];
 let myobj = {
    name : "kamal",
    age : 22
 }
 const var1 = function(){
    console.log("Hellow World");
 }
 