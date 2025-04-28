const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed");
        resolve();
    }, 2000);
})

promiseOne.then(function () {
    console.log("promise resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve();
    },2000)
}).then(function(){
    console.log("promise 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3 is completed");
        resolve({user:"john",age:30});
    },2000)
});

promiseThree.then(function(data){
    console.log("promise 3 resolved");
    console.log(data);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user:"john",age:30});
        }else{
            reject("Error: Something went wrong");
        }
    },1000)
})

promiseFour.then(function(data){
    console.log("promise 4 resolved");
    console.log(data);
    return data.user
}).then(function(user){
    console.log("User is: " + user);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise 4 is completed");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            console.log("Async task 5 is completed");
            resolve({user:"js",password:"1234"});
        }else{
            reject("Error : JS went wrong");
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }

// };

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})