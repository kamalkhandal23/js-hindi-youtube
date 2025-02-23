const myArr = [0,1,2,3,4,5,];
//shallow copy = same referance
//deep copy = duplicate
const myHeros = ["shaktiman","naagraj"];
console.log(myHeros[0]);

//array methods

myArr.push(6);
myArr.push(7);
myArr.pop();


myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(4)); //true
console.log(myArr.indexOf(3));  //3

console.log(myArr);


let newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);  //string

console.log(myArr);

//Slice & Splice

console.log("A ",myArr);
const my1 = myArr.slice(1,3); //3rd index not included
console.log(my1);
console.log("B ",myArr); // no change in the original array

const my2 = myArr.splice(1,3); //3rd index is included
console.log(my2);
console.log("Real Array", myArr); //elements from 1st index to 3rd index are removed


