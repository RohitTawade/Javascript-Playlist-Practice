// 6. Arrow Function --> 2015 June introduced widely used 

// it is also known as fat arrow function it is used as a shorthand for writing function expressions.


// 1. One Parameter, and a single return statement 
const square= (x) => x * x;

// 2. Multiple parameter, and a single return expression
const sumOfTwoNumberss = (x,y) =>  x+y;

// 3. Multiple statements in function expression
const sum = (x,y) => {
    console.log('Adding');
    return x+y;
}
// 4. Returning an object
const sumAndDifference = (x , y) => ( { sum: x + y, difference: x - y });
// Calling a arrow function

let output1 = square(5); 
let output2 = sumOfTwoNumberss(1,2);
let output3 = sum(12,13);
let output4 = sumAndDifference(3,3);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);