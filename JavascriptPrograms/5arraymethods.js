let array1= [1,2,3,4,5,6,7,8, true , 'rohit'];

// 1. pop() => Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

 let s=array1.pop();

 console.log(s) // Remove last element

 // 2. push() => Adds new elements to the end of an array, and returns the new length of the array.
 let s1=array1.push(12,12,12); // s1: returns last index of array and 12,12... this values adds inside the array
 console.log(s1) // Return last index
console.log(array1) // Return full array with push() method values including

 // 3. shift() => Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

 let s3=array1.shift();
console.log(s3)  // Return first removed index

console.log(array1)  // Remove first index


// 4. unshift() =>  Inserts new elements at the start of an array, and returns the new length of the array.
array1.unshift(4,[])
console.log(array1) // starting of array added the values given

// 5. concat() => Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let ar1=[12,13,14,15];
let ar2=[1,3,4,5];

let ar3 = ar1.concat();

console.log(ar3);

// 6. join() => A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. Adds all the elements of an array into a string, separated by the specified separator string.


let temp=ar3.join('@')
console.log(temp);

// 7. slice() => Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

let p=array1.slice(2,5);
console.log(p)  // Return section of array

// 8. splice() => Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

ar1.splice(1,2,34); // start index, delete count , value 
console.log(ar1);

// 9. reverse() => Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

ar2.reverse();
console.log(ar2);


// 10. indexOf() => Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let r=ar1.indexOf(15) // not specified array element then return  Zero
console.log(r); // Return index
