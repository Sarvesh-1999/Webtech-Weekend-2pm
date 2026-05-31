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

// var a = ud
// let b  ---> value unavailable ---> Temporal Dead Zone
// const c ---> value unavailable ---> Temporal Dead Zone

console.log(a); // ud
// console.log(b); //! ReferenceError: cannot access 'b' before initialization

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
