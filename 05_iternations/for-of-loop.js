//for of loop

const arr = [1,2,3,4,5];
for(const val of arr){
    console.log(val);
}

const greetings = "hello worlds";
for(const greet of greetings){
    console.log(greet);
}


//maps
//collection of key-value pairs..It does not containes duplicate values
//order will be the same

const map = new Map();

map.set('IN','India');
map.set('USA','United States of America');
map.set('FR','France');

// console.log(map);

for(const key of map){
    console.log(key);  //it will return the array
}

for(const [key,value] of map){
    console.log(key,":",value);  //array destructer se key value ko print kara sakte hai
}


const myObj = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

//for(const [key,value] of myObj){
//    console.log(key, ":", value);  //error...myobj is not iteratable
//}



// we can use for in loop to iterate over the objects
for(const key in myObj){
    console.log(key);  //it will only provide keys not values
}

for(const key in myObj){
    console.log(`The key is ${key} and the value is ${myObj[key]}`)
}



//if we use for in loop to iterate over the array

const programming = ["js","ruby"];

for(const key in programming){
    console.log(key);  //it will only print index of the array
}

for(const key in programming){
    console.log(programming[key]);
    
}


//cannot be used in maps

