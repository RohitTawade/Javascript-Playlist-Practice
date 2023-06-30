
//hello world in Node.js 
console.log("Hello World")

//this keyword used to show the web info
  console.log(this);
// Values and Datatypes 

// - Primitive Data Types

// - number: 1,2,3, 4.5,24
// - String: "Rohit Tawade" or 'Rohit Tawade'
// - Boolean: true, false
// - null: Nothing
// - undefined : ex: let a;


// Non-Primitive Data Types 

// - Array
let names=["Rohit", "Rahul", "Sushant", "Kaif", false , 1, 2, 3, 'raju']
console.log(names)

// - Object: {}
// let: For declaring the variable
// const: constant variable 
// var: This is also declaring var but it is not recomded because of scope

 const myName = "Rohit"

 let highScore = 300
 console.log(highScore)

 // Assignment Operator
 let pwSkillCoursePrice = 3500
 console.log(pwSkillCoursePrice)

 let userBankBalance = 5000

 pwSkillCoursePrice = 2000
 console.log(pwSkillCoursePrice)

 let userName = "rohit";

 // Ex.
 let pwCoursePrice = 200
 let gstOnCourses = 36
 let finalPurchaseAmount = pwCoursePrice + gstOnCourses
 console.log("Final amount to be paid: ",finalPurchaseAmount);

 // Ex. 
 let pwDsaCourse=500
 console.log("Final price of DSA course: ", pwDsaCourse - gstOnCourses)

 console.log("Answer is: ", 5 % 2) //Modules Operator: Returns Remender
 console.log("Answer2 is: ", 3 ** 3) // it is used for power: 3 to the power 3: 27
 
let rohitHighScore=300
let rajuHighScore="300"
console.log(rohitHighScore == rajuHighScore) // Comparisan it return true or false : true but if you want to check type then use "==="
console.log(rohitHighScore < rajuHighScore)
console.log(rohitHighScore != rajuHighScore)

let value1=true
let value2=false
let value3=true
let value4=false

// &&
console.log(value1 && value2) 

let isLoggedIn = true
let cardDetails = true

// ||
let gmailAccount = true
let emailAccount = false
let githubLogin = false
console.log(gmailAccount || emailAccount || githubLogin);
