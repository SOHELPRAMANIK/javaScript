"use strict";
// console.log("hello sohel you can learn js6");

// function addTwo(x, y){
//     return x+y;
// }// regularfunction
// let res=addTwo(10,20);
// console.log(res)

// let addTwo=(x, y)=>{
//     return x+y;
// }// arrow function
// let res=addTwo(10,70);
// console.log(res)

// function addTwo(... num){
//     return num[3]+num[6];
// }// rest perameter pass
// let res=addTwo(40,20,23,56,79,34,56);
// console.log(res)


// (()=>{
//     console.log('hello IIF')
// }) () //IIF

// (async()=>{
//     let res=await fetch('https://dummyjson.com/products/1')
//     let jason=await res.json()
//     console.log(jason)

// })()//ajax call--> sensetive(payment, SMS, Email, B2B) async api call



// ------> java script OOP------>
// let person={
//     first_name: "sohel",
//     last_name: "pramanik",
//     age: 24,
//     getName:()=>{
//         return person.first_name+" "+person.last_name;
//     }

// }
// console.log(person.getName());


// class person{
//     first_name = "sohel";
//     last_name = "pramanik";
//     age = 25
//     getName = ()=>{
//         return this.first_name+" "+ this.last_name;
//     }
// }
// let Object_1 = new person();
// console.log(Object_1.getName());
// console.log(Object_1.age)


// class person{

//     constructor(num1, num2){
//         console.log(num1 + num2)
//     }

//     first_name = "sohel";
//     last_name = "pramanik";
//     age = 25
//     getName = ()=>{
//         return this.first_name+" "+ this.last_name;
//     }
// }
// let Object_1 = new person(5,10);
// console.log(Object_1.getName());
// console.log(Object_1.age)

// class person{

//     first_name = "sohel";
//     last_name = "pramanik";
//     static age = 25//static keyword use for utility
//     getName = ()=>{
//         return this.first_name+" "+ this.last_name;
//     }
// }
// console.log(person.age)


class father{

    constructor(num1, num2){
        console.log(num1 + num2)
    }

    first_name = "sohel";
    last_name = "pramanik";
    age = 25
    getName = ()=>{
        return this.first_name+" "+ this.last_name;
    }
}
class son extends father{
    first_name= "Abdur";
    last_name= "Rahman";// son change property for it's method overriding
}// inheritance
let objf = new father(4 , 6);
let obj1= new son(2,4);
console.log(obj1.age)
console.log(obj1.getName())
console.log(objf.getName())