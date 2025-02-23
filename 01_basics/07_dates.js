let myDate = new Date();
console.log(myDate); //not clearly readable

console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025,1,23);
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

myDate.toLocaleString('default',{
    weekday:"long"
});

console.log(myDate);

