const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcomeMessage();
user.username = "kamal"; //changing current context
user.welcomeMessage();

//this keyword talks about current context

function chai(){
    const username = "Kamal"
    console.log(this.username);
}

chai();  //undefined bcz we cannot use this in the normal function type

//---------------------arrow functions------------------------

const chai2 = () => {
    let username = "kamal";
    console.log(this.username);
    
}

chai2(); //showing undefined so we cannot use this keyword in arrow function also...

const fun1 = (num1,num2) => {
    return num1 + num2;
}

console.log(fun1(10,20));
//above function is basic arrow function

//implicit arrow function
let fun2 = (num1,num2) => num1 - num2
console.log(fun2(5,3));

//we can also use brackets to avoid writing return keyword
let fun3 = (num1,num2) => (num1*num2);
console.log(fun3(2,3));


