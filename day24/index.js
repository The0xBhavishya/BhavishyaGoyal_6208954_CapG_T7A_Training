// import {add,name} from "./index";
// console.log(add(40,50));
// console.log(name);
// asynchronous programming
/**
 * timer function
 * promises
 * async and await --> ES8 --> 2017
 */
function task1() {
    console.log("task1");
}
function task2() {
    console.log("task2");
}
task1();
task2();
//?setTimeout ---->3000 ---->one time
//?setInterval ---->3000 ---->after each interation it will execute
console.log("start");
setTimeout(function () {
    console.log("task completed 1");
}, 3000);
// let x:number =setInterval((): void=>{
//     console.log("task completed 2");
// },3000);
// console.log("end");
//?Promises
//!fullfilled or resolved
//!rejected
//!pending
var p1 = new Promise(function (resolve, reject) {
    var success = true;
    if (success == true) {
        resolve("login successful");
    }
    else {
        reject("login unsuccessfull");
    }
});
console.log(p1);
// p1.then((ele)=>{
//     console.log(ele);
// }).catch(()=>{
// }).finally(()=>{
// })
function getUser() {
    return new Promise(function (resolve, reject) {
        resolve("user is there");
        // reject("user not there");  
    });
}
getUser().catch(function (ele) {
    console.log(ele);
})
    .then(function (res) {
    console.log(res);
});
var a = getUser();
console.log(a);
// let p2 = new Promise<number> ((resolve) =>{
//     resolve(42);
// })
// p2.then((value :  number) =>{
//     console.log("Resolved value with operations:", value*4);
// })
// p2.then((value) =>{
//     console.log("Resolved value with operations:", value*4);
// })
// p2.then((value) =>{
//     console.log("Resolved value with operations:", value/4);
// })
var p2 = new Promise(function (resolve) {
    resolve(100);
});
p2.then(function (num) { return num * 2; } //20
).then(function (res) { return res * 2; }).then(function (res) {
    console.log(res);
});
