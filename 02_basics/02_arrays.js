const marvel_heros = ["thor","iron-man","spider-man"];
const dc_heros = ["super-man","flash","batman"];
//marvel_heros.push(dc_heros);
// console.log(marvel_heros); //it takes the dc_heroes as a single element


const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //[ 'thor', 'iron-man', 'spider-man', 'super-man', 'flash', 'batman' ]



//Spread-Operator
const spread_heros = [...marvel_heros,...dc_heros];
console.log(spread_heros); //same output as concat



const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
let real_arr = arr1.flat(Infinity);
console.log(real_arr);


console.log(Array.isArray("kamal"));
console.log(Array.from("kamal"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));