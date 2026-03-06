console.log("hii");

let a =10
a=20

// Type annotation
let b:string="hello"
let c:number=20


let number=10
let str="bhavv"
let d:boolean=true
let e:null=null
let f:undefined=undefined

let g:any=20
g="hii"
g=true

console.log(str)

// 

let arr:number[]=[10,20,20,30]
arr.push(50)
console.log(arr);

// let arr1:["bcvhsd", true,553646,34567]

let arr2: [string,boolean,number,number] = ["bcvhsd", true, 553646, 34567];

console.log(number)

console.log(arr)
console.log(arr2)


let stud:{
    name: string,
    age:number
    rollno?:number
}={
    name:" bhavishya",
    age:21
}



function greet(name:string , age:number):void{
    console.log(`${name} and ${age}`)
}


greet("bhav",21)



// function add(a:number,b:number):number{
//     return a+b
// }


let sum= (a:number,b:number) :number => {
    return a+b
}



let arr3:(string|number)[]=[234,"fgvbn",3456,3456,"cvbn"]

arr3.push(3456)
console.log(arr3)


let arr4: readonly(string|number)[]=[234,"fgvbn",3456,3456,"cvbn"]

//  sytax
//    interface Interface_name{
//     property:type
// }

// interface  Person{
//     readonly id:number,
//     name : string,
//     age :number,
//     gender : string
// }

// let obj:Person={
//     id:34567,
//     name:"Shawat",
//     age:21,
//     gender:"male"
// }


// console.log(obj.id)
// console.log(obj.name)


interface Animal{
    name:string,
    age:number,

}

// interface Dog extends Animal{
//     bread?:string
// }

// let mydog:Dog={
//     name:"tommy",
//     age:2,
//     bread:"bulldog"
// }

// console.log(obj.name)
// console.log(obj.age)


// interface Car{
//     brand:string,
//     colour:string,
//     start():string,
// }

// let myCar:Car={
//     brand:"toyota",
//     colour:"black",
//     start() {
//         return "starting"
//     },

// }

// console.log(myCar.start());

//!OOps
// class:
//blueprint
//structure of object

class demo{
    // ?properties
    // methods
    // constructor -->  special method
    constructor(){

    }
}

class car{
    public brand:string;
   private color:string="blue";

   


    display():void{
      console.log("display")
    }



    constructor(brand:string,color:string){
        this.brand=brand;
        this.color=color;
        this.display()
        this.display=()=>{
        console.log("new display");
        };
        this.display()
    }


    start():void{
        console.log("this is my car");
    }

}

let ca=new car("maruti","red")
ca.brand="maruti"

console.log(ca);

console.log(ca.display());


console.log(ca.brand)
// console.log(ca.color)


/**Access modifiers


 * public private
 * protected
 * 
 *  */ 




// basic inheritance

class Animal{
    eat(){
        console.log("all animals eat")
    }
}


class Cat extends Animal{
    sound(){
        console.log("meow");
    }
}

let cat =new Cat()
cat.eat()
cat.sound()



class Person{
   name:string="rhutuja"
   age:number=10

   constructor(name:string){
  this.name=name
   }
}

class techer extends Person{
    company:string="test yantra";
  constructor(company:string,name:string){
    this.name=name;
    super(name)


     this.company=company
  }

   display(){
    // super(name)
    // console.log(this.name);
    console.log(this.name);
    console.log(this.company);
    
   }
}


let t=new techer("Abc","xyz");
t.display()
console.log(t.age)


let obj={
    name:"fghj"
}

console.log(obj)