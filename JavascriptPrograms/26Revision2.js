
// Loops and conditainals 

// 1. if 

// if(1==1) {
//     console.log("Statement executed ");
// }

userToken = "Rohit Tawade"
let googleAuthToken = "googleAuthToken"

if(userToken || googleAuthToken ) {
    console.log("User Allowed to login");
}
else
{
    console.log("Please login to get your token");
}

let isPwStudnet = false
let isPwEmployee = true

if(isPwStudnet) {
    console.log("varified you are PW Student ");
} if(isPwEmployee) {
    console.log("Congrats, You are pw employee");
}
else {
    console.log("Sorry, details not found");
}

let isLoggedIn = true
// Ternary Operator
// condition ? true: false;
isLoggedIn ? console.log("Home Page") : console.log("Please login")



// Switch Case

let month = 4
switch (month) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4: 
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("saturday");                        
        break;

    default:
        console.log("Holiday");
        break;
}

// Loops(Itratoration) -> do-while , for , while

// for(let i =0; i<5; i++) {
//     // Statement
//     console.log(`Value of i: ${i}`);
// }

let arr = ["pw", "pw skills", "Internship", "pw labs" , "gate wallah"]

for(let i =0; i<arr.length; i++) {
    const element = arr[i];
    console.log(element);

}

// Object Loop

let obj = { 
    name: "pw students",
    course: "fswd",
    duration: 100
}

console.log("-----------------------------");
// For in loop
for (const i in obj) {
  // console.log(`${i} - ${obj[i]}`);  // key value

}

// For of loop

for (const ite of arr) {
    console.log(ite);
    
}

let newi=0;

while (newi<=5) {
    console.log(`value of i is: ${newi}`);
    newi++
    
}

// do {
// } while (condition);


