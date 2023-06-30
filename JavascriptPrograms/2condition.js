// Variable and values (Number, String , Boolean etc)
// Operators

// Conditions and Loops

let age = 17

if(age>=18) {
    console.log("You are Allowed");
}
else {
    console.log("You are not Allowed")
}

let signal = "red"
if(signal=="red")
{
    console.log("Red => STOP")
} // Condition 1
else if(signal=="yellow") {
    console.log("signal => Go slow")
} // Condition 2
else if(signal=="green") {
    console.log("Green => Go Fast")
} // Condition 3
else {
    console.log("Invalid")
} // Last

// Switch Case

let user="Admin"

switch(user) {
    case "Admin":
        console.log("He is Admin")
        break;
    case "Student":
        console.log("He is Student")
        break;
    case "Mentor": 
        console.log("He is Mentor")
        break;
        
    default:
        console.log("I am Default")    
}

// Loops
// 1. do while 2. while 3. for 

// 1. for 

for(let i=0; i<5; i++) {
    console.log(i);
}

// 2. while
console.log("While Loop ")

let i=0;
while(i < 5) {
    console.log(i)
    i++;
}

// 3. do while

// let j=0; 
// do {
//   console.log("Hello World ")
//   i++;
// }
// while(j <= 5);


// Ternary Op / Ternary Condition
//  condition ? true: false

let isLoggedIn = true;
isLoggedIn ? console.log("Home Page"): console.log("Login Page");