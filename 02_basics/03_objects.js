//singleton

//object literals
const mySym = Symbol("key1");
const jsUser = {
    name : "Hitesh",
    age : 18,
    [mySym] : "myKey1",  //declaration of symbol in object
    location : "jaipur",
    email : "kamal@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); //best way to access
console.log(jsUser[mySym]);


jsUser["email"] = "kamalsh684@gmail.com";
console.log(jsUser["email"]);


//Object.freeze(jsUser); //freezing of object will not allow the change
jsUser["email"] = "kamalsh633@gmail.com";
console.log(jsUser["email"]);
console.log(jsUser);


jsUser.greeting = function(){
    console.log(`Welcome, ${this.full_name}`);
    
}

jsUser.greetingtwo = function(){
    console.log(`Hey my name is,${this.name}`);
}
jsUser.full_name = "kanu khandal";  //addition of key value pair

console.log(jsUser);

console.log(jsUser.greeting());


console.log(jsUser.greetingtwo());
