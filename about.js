// //non-premitive Data Types
// let myInformation = { name: 'sohel', age: 24, country: 'Bangladesh' };
// let myArray = [1,2,3,4,5];
// // console.log(myInformation.age)
// console.log(myArray[1])

// for (forLoop = 1; forLoop <= 10; forLoop++) {
//   console.log(forLoop);
// }

// whileLoop = 1;
// while (whileLoop <= 10) {
//   console.log(whileLoop);
//   whileLoop++;
// }

// doLoop = 1;
// do {
//   console.log(doLoop);
//   doLoop++;
// } while (doLoop < 10);

// let breckLoop = 1;
// for (breckLoop; breckLoop <= 20; breckLoop++) {
//   if (breckLoop === 5) {
//     console.log('i am stoping loop at 5');
//     break;
//   }
//   console.log(breckLoop);
// }

// let continueLoop = 1;
// for (continueLoop; continueLoop <= 10; continueLoop++) {
//   if (continueLoop === 3 || continueLoop === 7) {
//     continue;
//   }
//   console.log(continueLoop);
// }

// while (true) {
//   console.log('infinite Loop');
// }

// let myArray = ['Sohel', 'Abdur Rahman', 'Sumaiya'];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// let sumNumber = [5, 10, 20, 15];
// let sum = 0;
// // for (let n = 0; n < sumNumber.length; n++) {
// //   sum += sumNumber[n];
// // }
// while (sumNumber.length) {
//   sum += sumNumber.shift();
// }
// console.log(sum);

// let person = {
//   name: 'sohel',
//   age: 26,
// };
// for (let items in person) {
//   console.log(items, person[items]);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let bigNum = [62, 45, 76, 24, 654, 97];
// let largest = bigNum[0];
// for (let i = 0; i < bigNum.length; i++) {
//   if (bigNum[i] > largest) {
//     largest = bigNum[i];
//   }
// }
// console.log(largest);

// let marks = 40;
// switch (true) {
//   case marks >= 80 && marks <= 100:
//     console.log('A+');
//     break;
//   case marks >= 70 && marks < 80:
//     console.log('A-');
//     break;
//   case marks >= 60 && marks < 70:
//     console.log('A');
//     break;
//   case marks >= 50 && marks < 60:
//     console.log('B');
//     break;
//   case marks >= 40 && marks < 50:
//     console.log('C');
//     break;
//   case marks >= 33 && marks < 40:
//     console.log('D');
//     break;
//   default:
//     break;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2);
// console.log(newArr);

// let numArry = [34, 20, 10, 40, 50, 60];
// var result = numArry.filter(function (item) {
//   return item > 30;
// });
// console.log(result);

// ========> Scope ========>
// --------golobal Scope-------
// let global_Scope = 'Sohel';
// function x() {
//   console.log(global_Scope);
// }
// x();

// --------functional Scope-------
// function x() {
//   functional_scope = 'Sohan';
//   console.log(functional_scope);
// }
// x();

// Block Scope(let and const)
// if (true) {
//   var x = 10; //it's not work for block scope
//   let y = 40;
//   const z = 30;
//   // console.log(x);
//   // console.log(y);
//   // console.log(z);
// }
// console.log(x);
// console.log(y); // block scope not work outside
// console.log(z); // block scope not work outside

//  =======> Lexical Environment( kon variable kothay theke access kora jy seta lexical environment) <========

// function outer() {
//   let country = 'Bangladesh';
//   function inner() {
//     console.log(country);
//   }
//   inner();
// }
// outer();

// // =====> Closures in javaScript <======
// function outerFunction() {
//   let counter = 0; //clouser variable
//   function innerFunction() {
//     //for it's clousers variable
//     counter++;
//     console.log(`Counter is ${counter}`);
//   }
//   return innerFunction;
// }
// const myFun = outerFunction();
// myFun();
// myFun();
// myFun();
// myFun();
// myFun();

// ========> Java Script Object Oriented programming(OOP) <=======

// class myClass {
//   constructor() {
//     console.log('Constractor Calling Auto');
//   }
//   x = 40;
//   y = 30;
//   // myFunn() method
//   myFun() {
//     console.log('Hello My OOP');
//   }
// }
// const myObj = new myClass();
// myObj.myFun();

// class Student {
//   // constructor(name, roll) {
//   // defult value set in constructor
//   constructor(name = 'sohan', roll = 40) {
//     this.name = name; //if not use it's then we can't access name here result undefind
//     this.roll = roll;
//     console.log(name, roll);
//   }
// }
// const my_student_obj = new Student('Sohel', 348036);
// const my_student_obj_1 = new Student();
// // console.log(my_student_obj_1.name);

// console.log(my_student_obj.name);
// console.log(my_student_obj.roll);

// ===use static keyword <===
// class myClass {
//   static hello() {
//     console.log('Hello OOP Static');
//   }
// }
// myClass.hello();

// // ====> inheritance <====
// class Parent {
//   hello() {
//     console.log('Hello Inheritance');
//   }
// }
// class Child extends Parent {}
// let childObj = new Child();
// childObj.hello();

// =====> overriding(if i change parent class value in child class) <====
// class Parent {
//   hello() {
//     console.log('Hello Inheritance');
//   }
// }
// class Child extends Parent {
//   hello() {
//     console.log('I want change my parent class');
//   } //so it's overriding
// }
// let childObj = new Child();
// childObj.hello();
// =====>Super keyword <====
// class Parent {
//   hello() {
//     console.log('Hello Inheritance');
//   }
// }
// class Child extends Parent {
//   test() {
//     super.hello();
//   }
// }
// let childObj = new Child();
// childObj.test();

// // =====> regular Function <======
// function Sum(a, b) {
//   return a + b;
// }
// let myFun = Sum(20, 4);
// console.log(myFun);

// // ======> Arrow Function <======
// let myArrow = (a, b) => {
//   return a + b;
// };
// let arrowFun = myArrow(20, 5);
// console.log(arrowFun);

// =====> java Script Hoisting <======
// let x;
// x = 10;
// console.log(x);
// // x = 10;

// console.log(c);
// var c = 10; // here only variable name go to up but variable value not go up for output undefine

// console.log(b);
// // let a = 'sohel';
// var b = 'sohel';

// hello(); // if we use here java script machine store function end point
// function hello() {
//   console.log('Hello from Hoisting');
// }
// //javaScript machine following this code
// function hello() {
//   console.log('Hello from Hoisting');
// }
// hello();

// =======> javaScript Promise Async <======
// const getData = () => {
//   return new Promise((resolve, regect) => {
//     const success = false;
//     setTimeout(() => {
//       if (success) {
//         resolve('Approved');
//       } else {
//         regect('Information Rejected');
//       }
//     }, 2000);
//   });
// };
// getData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log('waiting....');

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/todos/2'
//     );
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

// ======> error Handling in javascript(try, catch, finally) <==========
// try {
//   let taka = '300';
//   let balance = Number(taka);
//   if (isNaN(balance)) {
//     throw new Error('Invalid Input');
//   }
//   console.log('Your Balance is : ' + balance);
// } catch (error) {
//   console.log('The error is : ' + error.message);
// } finally {
//   console.log('This is the final Block');
// }
// ========> Module Import <===========
// import { add, subtract } from "./math.js"; //double import
// add(5, 20);
// subtract(10, 5);

// import subtract from "./math.js"; //single import
// subtract(10, 5);

// ==========> Java Script destructuring(Array, Object) <===========

// const student = ["Sohel", 25, "Dhaka"];
// // const Name = student[0];
// // const Age = student[1];
// // const City = student[2];
// const [Name, Age, City] = student; // so it's destructuring Array
// console.log(`Name: ${Name} Age: ${Age} City: ${City}`);

// const person = {
//   name: "sohan",
//   age: 23,
//   city: "Teacher",
// };
// // const name = person.name;
// // const age = person.age;
// const { name, age, city } = person; // so it's destructuring object
// console.log(`Name: ${name} Age: ${age} City: ${city}`);
