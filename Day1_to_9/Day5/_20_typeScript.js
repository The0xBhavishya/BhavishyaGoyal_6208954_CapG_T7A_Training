var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hii");
var a = 10;
a = 20;
// Type annotation
var b = "hello";
var c = 20;
var number = 10;
var str = "bhavv";
var d = true;
var e = null;
var f = undefined;
var g = 20;
g = "hii";
g = true;
console.log(str);
// 
var arr = [10, 20, 20, 30];
arr.push(50);
console.log(arr);
// let arr1:["bcvhsd", true,553646,34567]
var arr2 = ["bcvhsd", true, 553646, 34567];
console.log(number);
console.log(arr);
console.log(arr2);
var stud = {
    name: " bhavishya",
    age: 21
};
function greet(name, age) {
    console.log("".concat(name, " and ").concat(age));
}
greet("bhav", 21);
// function add(a:number,b:number):number{
//     return a+b
// }
var sum = function (a, b) {
    return a + b;
};
var arr3 = [234, "fgvbn", 3456, 3456, "cvbn"];
arr3.push(3456);
console.log(arr3);
var arr4 = [234, "fgvbn", 3456, 3456, "cvbn"];
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
var demo = /** @class */ (function () {
    // ?properties
    // methods
    // constructor -->  special method
    function demo() {
    }
    return demo;
}());
var car = /** @class */ (function () {
    function car(brand, color) {
        this.color = "blue";
        this.brand = brand;
        this.color = color;
        this.display();
        this.display = function () {
            console.log("new display");
        };
        this.display();
    }
    car.prototype.display = function () {
        console.log("display");
    };
    car.prototype.start = function () {
        console.log("this is my car");
    };
    return car;
}());
var ca = new car("maruti", "red");
ca.brand = "maruti";
console.log(ca);
console.log(ca.display());
console.log(ca.brand);
// console.log(ca.color)
/**Access modifiers


 * public private
 * protected
 *
 *  */
// basic inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("all animals eat");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log("meow");
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.eat();
cat.sound();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "rhutuja";
        this.age = 10;
        this.name = name;
    }
    return Person;
}());
var techer = /** @class */ (function (_super) {
    __extends(techer, _super);
    function techer(company, name) {
        var _this = this;
        _this.name = name;
        _this = _super.call(this, name) || this;
        _this.company = "test yantra";
        _this.company = company;
        return _this;
    }
    techer.prototype.display = function () {
        // super(name)
        // console.log(this.name);
        console.log(this.name);
        console.log(this.company);
    };
    return techer;
}(Person));
var t = new techer("Abc", "xyz");
t.display();
console.log(t.age);
var obj = {
    name: "fghj"
};
console.log(obj);
