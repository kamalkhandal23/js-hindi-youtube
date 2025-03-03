function add(num1, num2){
    console.log(num1 + num2);
}

// add(1,2);

//we can also store the function in a variable

const result = add(1,2);
console.log(result);  //undefined because in the function there is no return statement


function substract(num1,num2){
    let result = num2 - num1;
    return result;
}

const result2 = substract(1,2);
console.log(result2);  //1 because this function is returning some value


function userlogin(username){
    return `${username} just logged in !`
}

const ans = userlogin("kamal");
console.log(ans); //kamal just logged in !


function calculateCartPrice(...num){
    return num;    //using rest operator allows to get all the parameters from functions
}

console.log(calculateCartPrice(100,1002,2222));


//Functions with Objects

const user = {
    name : "Kamal",
    price : 999
}


function handleObject(ObjectName){
    return `User name is ${ObjectName.name} and the price is ${ObjectName.price}`;
}

console.log(handleObject(user));



//function with arrays

const myArr = [10,100,1000];

function callingArr(Arr){
    return Arr[2];
}

console.log(callingArr(myArr));