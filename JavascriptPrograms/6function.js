function greet() {
    console.log("Hi there");
    console.log("How are you");
}


 function sqr(x) { //Parameter
    //console.log(x*x); 
    return x*x;
 }
greet(); // calling

let s=sqr(3);  // --> Argument
console.log(s);

// 2. Function without a parameter and return

// Function Declaration

function sayMessage() {
   return "I am happy to learn full stack web developement from pw skills";
}

// calling function

let message= sayMessage();

console.log(message);

let newMessage = message+"Enroll Today";

console.log(newMessage);


// 3. Function with a parameter (Single And Multiple)

function displayMessage(messageToBeDisplayed)
{
    console.log(messageToBeDisplayed);
}

// calling in a function

displayMessage("I am happy to learn full stack web developement from pw");

displayMessage("I am enjoying the journey of javasript");

displayMessage(); // it says undefined 


// 4. function with multiple parameter and default parameter

function myFunction( x1,  y1=10) {
    return x1+y1;
}
console.log(myFunction(1));  // Function values assigned from left to right

// Array as an Argument

function sumOfTwoNumbers([num1,num2]) { // Assigned by array to the function
    return num1+num2; 

}

let numbers= [12,13];

let result = sumOfTwoNumbers(numbers);

console.log(result);


// 5. Function with unlimited number of parameters

function sumOfAllParameter()
{
    let sum=0;
    for(let i=0; i<arguments.length; i++)
       sum += arguments[i];

       return sum;
}

// Function
 let res= sumOfAllParameter(1,2,3,4,5,6,7,7,8,8,8); // We can pass unlimited argument in the function call
console.log(res);
// Output: 130












