//singleton
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "kamalsh@gmail.com",
    full_name : {
        userfull_name : {
            first_name : "kamal",
            last_name : "khandal"
        }
    }
}

// console.log(regularUser.full_name.userfull_name);


//Merging two or more objects

const obj1 = {a:"1",b:"2"};
const obj2 = {c:"3",d:"4"};

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);


const obj3 = {...obj1,...obj2};
console.log(obj3);


//accessing objects from database

const user = [
    {
        id : 1,
        email : "kamal@gmail.com"
    },
    {
        id : 1,
        email : "kamal11@gmail.com"
    },
    {
        id : 1,
        email : "kamal@gmail.com"
    }
]

console.log(user[1].email);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



