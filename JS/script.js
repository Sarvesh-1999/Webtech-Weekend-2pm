// single line comment
/** multi-line comment */

/**
 *! TOKENS : smallest unit of every programming lang 
 * Tokens are of 4 types
 * 1) keywords : pre-defined words which has specific meaning
 * 2) identifiers : name given to class, functions, variables
 * 3) literals : values stored in a variable
 * 4) operators : used to perform operation between operands

 * EXAMPLE :- var a = 10
 * var => keyword
 * a => identifier
 * = => operator
 * 10 => literal
 */

/**
 * ! DATATYPES : type of data stored in a variable
 * There are 2 types of datatypes
 * 1) Primitive - immutable - call by value
 * There are 7 types
 * a) number
 * b) string
 * c) boolean
 * d) undefined
 * e) null
 * f) bigint
 * g) symbol
 *
 * 2) Non-Primitive - mutable - call by reference
 * There are 3 types
 * a) array
 * b) object
 * c) function
 */

//! MUTABLE VS IMMUTABLE EXAMPLE
// var str = "Javascript";
// str[0] = "G";
// console.log(str); // Javascript

// var arr = [10, 20, 30];
// arr[0] = 100;
// console.log(arr); // [100,20,30]

//! PRIMITVE DATATYPES
// var a1 = 10.89219;
// console.log(a1); // 10.89219
// console.log(typeof a1); // number

// var a2 = "Hello World";
// console.log(a2); // Hello World
// console.log(typeof a2); // string

// var a3 = true;
// console.log(a3); // true
// console.log(typeof a3); // boolean

// var a4;
// console.log(a4); // undefined
// console.log(typeof a4); // undefined

// // console.log(a5);//! ReferenceError: a5 is not defined

// var a6 = null;
// console.log(a6); // null
// console.log(typeof a6); // object

// // number greater that this range (-2^53 - 1 to 2^53 - 1)
// var a7 = 9n;
// console.log(a7);
// console.log(typeof a7);

// var a8 = Symbol("hello");
// var a9 = Symbol("hello");

// console.log(a8);
// console.log(a9);

// console.log(a8 == a9); // false -> loosely comparison
// console.log(a8 === a9); // false -> strictly comparison

// //! loosely comparison : check data not datatype
// console.log(10 == "10"); // true
// console.log(10 == "11"); // false

// //! strictly comparison : check both data and datatype
// console.log(10 === "10"); // false
// console.log("10" === "11"); // false

//! VARIABLES AND ITS TYPES
// Variables are the container which is used to store data/literals.
// In JS we can create variables using 3 keywords which is var, let and const
// There are 2 types of variables : 1) Global 2) Local

//! DIFFERENCE BETWEEN var, let and const

// //! VAR
// var a; // declare
// console.log(a); // ud

// a = 10 // initialize
// console.log(a); // 10

// var a; // re-declare
// console.log(a); // 10

// a = 20 // re-initialize
// console.log(a); // 20

// //! LET
// let b;// declare
// console.log(b); // ud

// b = 100 // initialize
// console.log(b); // 100

// // let b; //! cannot re-declare

// b = 200 // re-initialize
// console.log(b); // 200

// //! CONST
// const c = 500 // declare and initialize
// console.log(c); // 500

// //! TYPES OF VARIABLES AND ITS SCOPE
// var x = 10; // global variable - global scope
// let y = 20; // global variable - global scope
// const z = 30; // global variable - global scope

// console.log(x); // 10
// console.log(y); // 20
// console.log(z); // 30

// {
//   console.log(x); // 10
//   console.log(y); // 20
//   console.log(z); // 30
// }

// {
//   var m = 100; // global scope - global variable
//   let n = 200; // block scope - local variable
//   const o = 300; // block scope - local variable

//   console.log(m); // 100
//   console.log(n); // 200
//   console.log(o); // 300
// }

// console.log(m); // 100
// // console.log(n);//! cannot access
// // console.log(o);//! cannot access

// function demo() {
//   var a1 = 1000; // local variable -  function/local scope
//   let a2 = 2000; // local variable - local scope
//   const a3 = 3000; // local variable - local scope
// }
// demo();

//! HOISTING : moving declaration part at the top of the code internally
//! TDZ : Temporal Dead Zone is the zone between accessing a let and const variables before initialization

// // var a = undefined; //HOISTED and initialized with undefined
// console.log(a); // ud
// console.log("Hii");// Hii
// var a;
// console.log(a); // ud
// a = 10;
// console.log(a); // 10

// // let a; //! TDZ --> HOISTED but cannot initialized with undefined
// // console.log(a); //! ReferenceError: Cannot access 'a' before initialization
// console.log("Hii"); // Hii
// let a;
// console.log(a); // ud
// a = 10;
// console.log(a); // 10

//! GEC EXMAPLE 1
// console.log("start");
// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = 60;
// console.log(a);
// console.log("end");

//! GEC EXAMPLE 2
// console.log("Start");
// // console.log(b);//!ReferenceError: Cannot access 'b' before initialization
// let b;
// console.log(b);
// b = 20;
// console.log(b);
// console.log("End");

//! FUNCTIONS

//! NAMED FUNCTION : FUNCTION WHICH HAS A NAME

// greet(); // <--- due to function hoisting

// function greet() {
//   console.log("Welcome");
// }

// greet(); // function call

//! FUNCTIONS WITH ARGUEMENTS AND PARAMETERS

// function printFullName(firstName, lastName) {
//   console.log(`My Fullname is ${firstName} ${lastName}`);
// }
// printFullName("John", "Doe");
// printFullName("James", "Doe");

// create a function to add two numeric values

//! FUNCTION WITH DEFAULT PARAMETERS
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1, n2);
//   console.log(n1 + n2);
// }
// sum(10, 25);
// sum();

//! RETURN TYPE FUNCTION
// function multiply(n1 = 1, n2 = 1) {
//   return n1 * n2;
// }

// let val = multiply(5, 7);
// console.log(`Multiple is --> ${val}`);

//! ANONYMOUS FUNCTION : FUNCTION WITHOUT NAME
// function () {}

//! FUNCTIION EXPRESSION : USED TO CALL ANONYMOUS FUNCTION BY STORING IT INTO A VARIABLE
// let a1 = function (x) {
//   console.log("I am Function expression");
//   return x + 50;
// };
// let val = a1(10);
// console.log(val);

// //! HIGHER ORDER FUNCTION
// // 1) a function should return another function
// function HOF1() {
//   return function () {};
// }

// // 2) a function should accept another function as arguement
// function HOF2() {}
// HOF2(function () {});

// //! CALLBACK FUNCTION
// // a function which passes as an arguement
// function Demo() {}
// Demo(function callback() {});

//! NESTED FUNCTION
// ! CLOSURE : its a temporary memory which is created whenever we access Parent's function property inside Child function

// function Parent() {
//   let a = 10;
//   console.log(a);

//   function Child() {
//     let b = 20;
//     console.log(b, a); // 'a' can be access due to closure
//   }

//   Child();
// }
// Parent();

//! ARROW FUNCTION : USED FOR SHORTER SYNTAX , INTODUCED IN ES6 VERSION

// let a1 = () => {
//   console.log("I am Arrow function 1");
// };

// a1();

// let a2 = () => console.log("I am Arrow Function 2");
// a2();

// let a3 = () => {
//   return "I am Explicit Return";
// };
// console.log(a3());

// let a4 = () => "I am Implicit Return";
// console.log(a4());

// let a5 = () => ({ name: "Java" });
// console.log(a5());

//! CONSTRUCTOR FUNCTION : USED TO CREATE OBJECTS
// function Student(name = "Not Available") {
//   this.studentName = name;
// }

// let s1 = new Student("Raj");
// let s2 = new Student("Rahul");
// let s3 = new Student();

// console.log(s1);
// console.log(s2);
// console.log(s3);

//! ARRAYS are collection of multiple data, In JS arrays are heterogenous

// let arr = [10, "hello", true, undefined, null, function () {}];
// //          0     1       2        3      4       5
// console.log(arr);
// console.log(arr[1]);

// console.log(arr.length); // 6

//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1);

// //! push() : appends elements at the end of an array
// arr1.push(60, 70, 80);
// console.log(arr1);

// //! pop() : removes element from last index
// arr1.pop();
// console.log(arr1);

// //! unshift() : appends elements at the first of an array
// arr1.unshift(100, 200, 300);
// console.log(arr1);

// //! shift() : removes element from 0th index
// arr1.shift();
// console.log(arr1);

//! slice(startPos , endPos) : it used to extract a copy of an original array
//--> Note : it excludes endPos

// //          -4  -3  -2  -1
// let arr2 = [10, 20, 30, 40];
// //           0   1   2   3

// console.log(arr2.slice(1, 3)); // [20, 30]
// console.log(arr2.slice(1)); // [20, 30, 40]
// console.log(arr2.slice(-4, -1)); // [10, 20, 30]
// console.log(arr2.slice(1, -1)); // [20, 30]

//! splice(startPos , deleteCount , newElements) : used to add and remove the elements, it modifies the original array
// let arr3 = [10, 20, 30, 40, 50];

//! remove
// arr3.splice(1, 3);
// console.log(arr3); // [10, 50]

//! add : [10, 20, 30, 35, 36, 40, 50];
// arr3.splice(3, 0, 35, 36);
// console.log(arr3);

//! add and remove : [10, 20, 100, 50];
// arr3.splice(2, 2, 100);
// console.log(arr3); // [10, 20, 100, 50]

// let arr4 = [10, 20, 30, 40];

// //! forEach(()=>{}) : loops through on array and performs task on it. it returns undefined
// let val1 = arr4.forEach((ele, idx, arr) => {
//   console.log(ele, idx, arr);
//   return ele + 5;
// });
// console.log(val1); // undefined

// //! map(()=>{}) : used to transform an array and return a new array without changing the original array
// let val2 = arr4.map((ele, idx, arr) => {
//   console.log(ele, idx, arr);
//   return ele + 5;
// });
// console.log(val2); // [15,25,35,45]

// //! filter(()=>{}) : it creates a new array containing elements which satisfies the given condition
// let val3 = arr4.filter((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val3); // [30, 40]

// //! find(()=>{}) : returns the first element which satisfies the condition
// let val4 = arr4.find((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val4); // 30

// //! findIndex(()=>{}) : returns the index of first element which satisfies the condition
// let val5 = arr4.findIndex((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val5); // 2

//! OBJECTS : it is used to store data in the form of key and value pairs
// Each key and value pair is known as property
// If we store function inside an object it is known as method

// let obj = {
//   name: "Henry",
//   age: 20,
//   isLoggedIn: false,
//   greet: function () {
//     console.log("I am Method");
//   },
// };

// console.log(obj.name); // Henry
// obj.greet();

//! CRUD USING OBJECTS

// //! CREATE
// let obj1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };
// console.log(obj1);

// //! READ
// console.log(obj1.firstName); // John

// //! UPDATE
// obj1.age = 30;
// console.log(obj1.age);

// //! CREATE NEW PROPERTY
// obj1.isMarried = true;
// obj1.demo = null;
// console.log(obj1);

// //! DELETE
// delete obj1.demo
// console.log(obj1);

//! OBJECT METHODS
// let obj2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };
// //! Object.keys()
// console.log(Object.keys(obj2)); //  ['firstName', 'lastName', 'age']

// //! Object.values()
// console.log(Object.values(obj2)); // ['John', 'Doe', 25]

// //! Object.entries()
// let entries = Object.entries(obj2);
// console.log(entries);// [ ["firstName" , "John"] , ["lastName" , "Doe"] , ["age" , 25] ]

// //! Object.fromEntries()
// let val = Object.fromEntries(entries);
// console.log(val); // {firstName: 'John', lastName: 'Doe', age: 25}

//! SHALLOW COPY AND DEEP COPY
// let obj1 = {
//   name: "John",
//   age: 20,
//   address: { city: "Delhi" },
// };

// // let obj2 = { ...obj1 }; // shallow copy
// let obj2 = structuredClone(obj1); // deep copy

// obj2.age = 30;
// obj2.address.city = "Noida";

// console.log("obj1 ---> ", obj1);
// console.log("obj2 ---> ", obj2);

// Sarvesh 0987654321
// Neo5g 1234554321

//! PROMISE

// let p1 = fetch("https://dummyjson.com/todos");
// console.log(p1);

// p1.then((resp) => {
//   let p2 = resp.json();
//   console.log(p2);

//   p2.then((data) => {
//     console.log(data.todos);
//   });
// });

// p1.catch((err) => {
//   console.log(err);
// });

//! ASYNC AND AWAIT

// async function getProducts() {
//   try {
//     let resp = await fetch("https://dummyjson.com/products");
//     let data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getProducts();

// ! setInterval() and setTimeout()

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 5000);

// let intervalID = setInterval(() => {
//   console.log("Interval ⭐");
// }, 2000);

// setTimeout(() => {
//   console.log("interval stopped");
//   clearInterval(intervalID)
// }, 10000);

// console.log("End");

//! EVENT LOOPS

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 2000);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("END");
