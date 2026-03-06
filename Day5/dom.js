console.log(window);
// var a=10;
// let b=10

// console.log("hello");
// window.console.log("hello")

// console.log(document)
// console.log(document.body)
// console.log(document.title)
// console.log(document.head)

// !DOM --> DOCUMENT OBJECT MODEL
//  It is tree like structure 

// console.log(document.body.childNodes);


// console.log(document.body.children);

// let btn1=document.body.children[0]
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

// console.log(document.body.children[1]);

// let div1=document.body.children[3];
// console.log(div1.firstElementChild)
// console.log(div1.lastElementChild)


// let head4=div1.firstElementChild
// console.log(head4.nextElementSibling)
// console.log(head4.previousElementSibling)

//! dom direct access methods

//?getElementById
// let h1 =document.getElementById("head1")
// console.log(h1);

// //?getElementsByClassName
let head4 = document.getElementsByClassName("h44")
// console.log(head4)

let btn = document.getElementById("btn1")
console.log(btn)

btn.style.fontSize = "50px"


let convertedarray = Array.from(head4);
console.log(convertedarray);
convertedarray.map((ele) => {
    ele.style.color = "red"
    ele.style.backgroundColor = "yellow"
    ele.style.fontSize = "50px"

})


let btname = document.getElementsByName("btn")
console.log(btname);



let h11 = document.getElementsByTagName("h1")
console.log(h11)


//?querySelector
let h1 = document.querySelector(".h44")
console.log(h1)

let h13 = document.querySelectorAll(".h44")
console.log(h13)

// createElement
let img1 = document.createElement("img");
console.log(img1);
img1.setAttribute("src", "./night.jpg");

img1.setAttribute("alt", "broken");

document.body.append(img1)


let h5 = document.createElement("h1");
h5.innerHTML = "javascript"
document.body.append(h5);

let p = document.createElement("p");
p.textContent = "playwright"

p.setAttribute("id", "p1")
document.body.append(p)
console.log(p);
p.removeAttribute("id");
console.log(p);

//? event handling

//inline handling

// let btn1=document.getElementById("btn1")
//    function demo(){
//     alert("button is clicked")
//    }


//    // another way
//    let btn2=document.getElementById("btn1")
//    btn1.onclick=function(){
//     alert("button is clicked")
//    }


//    // another way using arrow function
//    let btn3 = document.getElementById("btn1");
//    btn3.onclick = () => {
//   alert("button is clicked");
// }


//!addeventListener

/**
 * syntax
 * 
 * element.addEventListener("event", callback)
 */




console.log(add(1, 2));

console.log(typeof(add));


let arr = [10, 20, 30, 40];
console.log(arr);
console.log(typeof(arr))

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    document.body.style.backgroundColor = "cyan"
    let img1 = document.createElement("img");
    img1.setAttribute("src", "./night.jpg");
    document.body.append(img1)

})


let btn2 = document.getElementById("bt99");
let dark = false
btn2.addEventListener("click", () => {

    if (!dark) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        dark = true
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        dark = false
    }


})

let heading = document.getElementById("head1");
let counterDisplay = document.getElementById("counter");

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");


let count = 0;


increaseBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = "Count:" + count;
});
decreaseBtn.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = "Count: " + count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = "Count: " + count;
});


let table = document.createElement("table");
table.setAttribute("border", "9");
table.style.borderCollapse="collapse";
table.setAttribute("cellpadding", "10");


let heading2 = document.createElement("h2");
for (let i=1; i<=5; i++) {
    let tr = document.createElement("tr");
  for (let j=1; j<=5; j++) {
    let td =document.createElement("td");
        td.textContent =  (i+j);
         tr.append(td);  
    }
    table.append(tr);
}


document.body.append(table);



function add(a, b) {
    return a + b;
}

console.log(add instanceof Object);