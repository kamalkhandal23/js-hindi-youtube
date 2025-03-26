const programming = ["js","ruby"];
programming.forEach(function (item) {
    console.log(item)
})

programming.forEach( (e) => {
    console.log(e)
} )





//we can also create that callback function outside and then we 
//can access it via giving referance to the foreach loop


function printMe(item){
    console.log(item);
}

programming.forEach(printMe);


programming.forEach((item,index,myarr) => {
    console.log(item,index,myarr);
    
})



//multiple objects in array
//[{},{},,{}]

let mulArr = [
    {
        fullName : "Kamal Kishore Bochiwal",
        age : 22
    },
    {
        fullName : "Sourav Jangir",
        age : 21
    },
    {
        fullName : "Krishna Kachwal",
        age : 25
    }
]

mulArr.forEach( (item) => {
    console.log(item.fullName)
} )


//foreach loop return undefined

const coding = ["js", "ruby", "cpp"];

const values = coding.forEach((item) => {
    console.log(item)
})

console.log(values); //undefined



const nums = [1,2,3,4,5,6];

const newNums = nums.filter((num) => num > 4);
console.log(newNums);






const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbooks = books.filter((item) => item.genre === 'History');
  console.log(userbooks);
  

  let userbooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'Fiction'
})









//Maps

const arr = [1,2,3,4,5,6];
const newArr = arr.map( (num) => {return num+1});
console.log(newArr)


//Function Chaining

const resutl2 = arr
                    .map((item) => item * 10)
                    .map((item) => item + 1)
                    .filter((item) => item >= 40)

console.log(resutl2)





//Reduce

const try1 = [1,2,3];

const myTotal = try1.reduce(function(acc,currval){
    console.log(`acc:${acc} and carrval:${currval}`);
    return acc + currval;
},0);

console.log(myTotal)
