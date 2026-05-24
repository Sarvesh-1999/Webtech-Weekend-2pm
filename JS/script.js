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
// var a = "Hello";
// var b = [10, 20, 30];
// a[0] = "X";
// b[0] = 100;
// console.log(a);
// console.log(b);

//! EXAMPLE OF PRIMITIVE DATATYPES
// var a1 = 10.8907;
// console.log(a1); // 10.8907
// console.log(typeof a1); // number

// var a2 = "Hello";
// console.log(a2); // Hello
// console.log(typeof a2); // string

// var a3 = true;
// console.log(a3); // true
// console.log(typeof a3); // boolean

// var a4;
// console.log(a4); // undefined
// console.log(typeof a4); // undefined

// var a5 = null;
// console.log(a5); // null
// console.log(typeof a5); // object

// // range -2^53 - 1 to 2^53 - 1
// var a6 = 1n;
// console.log(a6);
// console.log(typeof a6);

// var a7 = Symbol("Java");
// var a8 = Symbol("Java");

// console.log(a7);
// console.log(a8);

// console.log(a7 == a8);
// console.log(a7 === a8);

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

//! EXAMPLE OF NON-PRIMITIVE
// var arr = [10, 20, 30];
// console.log(arr);
// console.log(typeof arr);

// var obj = { name: "John Doe", age: 20 };
// console.log(obj);
// console.log(typeof obj);

// function demo() {
//   console.log("Demo Function");
// }
// demo();

var x = "hii";
x = 10;
if (typeof x === "string") {
  console.log(x.toUpperCase());
}

var arr = [10, 20, 30];
arr = { name: "John" };
if (Array.isArray(arr)) {
  arr.push(40);
}
