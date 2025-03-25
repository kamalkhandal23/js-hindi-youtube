

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

// console.log(a); //10  showing due to not having block level scope
// console.log(b); //not defined error
// console.log(c); //not defined error



function one(){
    let username = "Kamal"

    function two(){
        let website = "Youtube"
        console.log(username);
    }

    two();
    //console.log(website);  //webiste is not defined:ERROR

}

one();

if(true){
    const username = "kamal"
    if(username === "kamal"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); scope error
    
}

// console.log(username); scope error


addOne();
function addOne(num) {
    return num + 1;
}


//addTwo();  //error..it is called hoisting we are trying to access the expression before initialisation
const addTwo = function(num) {
    return num + 2;
}




