let num = 55;
console.log(num);

//Another way to define number variable
let num2 = new Number(222);
console.log(num2);

console.log(num2.toString().length);
console.log(num2.toFixed(2));

let otherNumber = 22.50
console.log(otherNumber.toPrecision(2));

let amount = 1000000;
console.log(amount.toLocaleString('en-IN'));

/*---------------------------Maths-------------------*/

console.log(Math.abs(-4));  //neg to pos
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random());

console.log(Math.floor((Math.random()*10)) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);







