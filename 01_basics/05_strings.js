const name = "Kamal";
const repo = 50;

// console.log(name + repo);

/* ------String Interpolation-------- */

console.log(`My name is ${name}, and my total repos are ${repo}.`);

/* ----Another way to declare a string--------- */
let str1 = new String("Kamal");
console.log(str1[2]);

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(2));
console.log(str1.indexOf('m'));

const newStr = str1.substring(0,3); //end point not included.
console.log(newStr);

const newStr2 = str1.slice(-8,4);
console.log(newStr2);

const str2 = "   khandal    ";
console.log(str2);
console.log(str2.trim());


const url = "https://kamal.com/kamal%20khandal";
console.log(url.replace('%20','-'));


console.log(url.includes('kachwal'));



const str3 = "kamal-khandal-sharma";
console.log(str3.split('-'));



