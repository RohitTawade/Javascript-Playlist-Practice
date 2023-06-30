
// 1. Values (Data Types )
// Primiive Data Types 
let p =192.2;
let p1 ="Rohit Tawwade";
let p2 = true;
let p3 = null;  // Object
let p4;

console.log(typeof p);
console.log(typeof p1);
console.log(typeof p2);
console.log(typeof p3);
console.log(typeof p4);

// non- primitive data types -> Array , Object 

// 2. Array => any kind of value we can store the values in array in javascript
// -> array index start from zero
let arr = [12,13,13,14,14];
console.log(typeof arr);
console.log(arr);

// Object => {key:value} key:- index value :- values 

let  obj = {1:"Rohit", 2:101};

console.log(typeof obj); // object
console.log(obj);

// Variable => Place holder for value

// const -> value Which not used 
// var -> dead this var ES6
// let -> it is introduced in ES6

// 3. Operators (Logical Calculation)

// Oprand 2 + 2 = 4 So 2 and 2 is oprand 
// Oprator - + is a operator
// unary oprator -> i++ 
// binary operator -> a + b 
// - Assignment Operator -> =
// - Arithmetic Operator -> +, - , * , / , %(Return - Remainder ) , **(exponentional operator )  Ex. 2 power 2 =4

let a = 2**2;
console.log(a); // 4

// Comparisan Operator -> >, < , <= , >= , ==(Compare values ) , === (values + datatype) 
let b = 2=='2';
console.log(b); // true

let c = 2 === "2";
console.log(c); // false


