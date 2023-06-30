// Function -> Structure the app, Reuse the code , reduce number of line

// Function Declaration
function rohit(x,y) {
    console.log("Hello World");
    return  sum = x+y;
}
 rohit(12,13)    //Function call
 console.log(sum);

 
 function sayHello() {
    console.log("Hello World...... ");
 }
 sayHello();

 function addTwoNum(num1 , num2 ) {
    let result = num1 + num2;
    return result;
    // console.log("Rohit"); after return statement we cannot print log statement 
 }
// const res=addTwoNum(12,31);
// console.log(res);

function subtractTwoNumber(num1 , num2) {
    return num1 - num2;
}
// console.log(  subtractTwoNumber(12,2))

function registerPWUser(user="Richa") {
    if(user === undefined) {
        return "Please pass the username"
    }
    return user + ' is registred at pw'
}

console.log( registerPWUser() );


// Amazon shopping cart

function cartBillTotal(...numbers) {
    // take a variable total
    let total =0;
    // loop all values 
    for(const num of numbers) {
        total += num
    }
    // return total
    return total

}
const user = {
    id: "123",
    name: "Rohit",
    email: "rishav@pw.live"
}

function addUser(obj) {
    console.log(`A user name ${obj.name} got an email ${obj.email}`);
}
addUser(user)

function addTwoNumbers(num1 , num2) {  // Regular Function
    return num1 +num2;
}

const addTwoNumberv2 = (num1 , num2) => {  // Arrow function
    return num1 + num2 

}

const addTwoNumberv3 = (num1, num2) => num1 + num2; // Dont need return keyword 
const addTwoNumberv4 = num1 => 5; // Implicit return 
const addTwoNumberv5 = num1 => {email: "rohit@pw.live"}; // Implicit return 
const addTwoNumberv6 = (num1,num2) => {email: "rohit@pw.live"}; // Implicit return 

function learning () {
    console.log(this);
}
const learningTwo =  ()=> {
    console.log(this);
}
learning()
learningTwo()

