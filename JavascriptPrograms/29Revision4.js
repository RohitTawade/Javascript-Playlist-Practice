// Array in js

// [] -> Array - it can store all vlues(Data ) type store

// index -> 0,1,2,3,4,5 ,  6
let numbers = [1, 2, 3, 4, 5, 6, "rohit", "tawde", "A"];

//Everything in javascript is an Object

// console.log( numbers.length);

// console.log(numbers[ numbers.length - 1 ]);

//    numbers[7] = "Tawade";

// for(let i =0; i<numbers.length; i++) {
//     if(numbers[i]=="tawde") {
//         numbers[i] = "Tawade";
//     }
// }

//     let names = new Array("Rohit", "Tawade", "Amit");

//     console.log(names);

//    console.log(numbers);
numbers.push("Rohit"); // last index inserted
console.log(numbers);
console.log(numbers.pop()); // delete last index item
console.log(numbers);
console.log(numbers.indexOf(6)); // return index
console.log(numbers.at(5)); // return index value in array
console.log(numbers.shift()); // Remove the first value from array
console.log(numbers.unshift("fsvd")); // insert first element in array
console.log(numbers);
console.log(numbers.slice(1, 5)); // return the start to end inside array element
let arr1 = numbers.splice(3, 2, "pw", "skills"); // delete the 3 is a index and 2 is count of number that we can delete and two string are placed inside that index deleted
console.log(arr1);
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers.sort());
