"use strict"

let array=[1,2,3,4,5,6,7,8,9,10]

let arr1=[1,"bcd",true , null,undefined]

console.log(arr1)
console.log(array)

console.log(arr1[1])
delete arr1[1]
console.log(arr1[1])

let student={name :"ram",age:20,college:"jecrc"}

console.log(student)


let ar="abc"
console.log(ar[1])

// delete ar[1]
console.log(ar[1])


function add(){
    let a=10
    let b=20
    console.log(a+b)
}

add()
add()

// let a=function sub(a,b=10){
//     console.log(a-b)
//     return a-b
// }
// sub(10)

// 
 const b =function(){
    console.log("hello ..");
    return 10 
}

b();


console.log(b());


(function(){
    console.log("hello 1");
}())


// //IIFE
// (function(){
//     console.log("hello 2");
// })()




// bare type
// G=100
// console.log(G)


//

function abc(){
    var d =11;
    let e=12;
    const f=133;
    console.log(d);
    console.log(e);
    console.log(f);
}
abc()

// console.log(d)
// console.log(e)
// console.log(f)


let z =() =>{
console.log("hii");
return "hello "
console.log("Class");
}

z()
console.log(z());

//  whenever i store a function in a variable then it is called as function expression 
let a = n=>n*2
// whichever function we are storing inside the variable is known as first class/citizen function and the variable in which we are storing the function is known as first class/ citizen variable function




// and if i am storing a function in a variable without name then it is called as anonymous function and if i am storing a function in a variable without name and also invoking it then it is called as IIFE (immediately invoked function expression)
