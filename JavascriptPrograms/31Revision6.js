// Objects


const obj1 = {
    name: "Rohit",
    role: "Student",


    isLoggedIn : true,

    registerUser: function () {
        console.log(`${this.name} is a registerUser }`);
    }
}
console.log(obj1.name);
console.log(obj1.role);
const obj2 = {
    10: "number10", 
    20: "number20"
}

const key1 = Symbol("key1")
const key2 = Symbol("key2")

const obj3 ={
    [key1] : "Rohit",
    [key2] : "pwskills"
}

console.log(obj3[key1]);
console.log(obj3[key2]);

const obj4 = new Object();
obj4.email = "rohit@pwskills.com"

const obj5 = {
    name: "Rohit",
    email: "rohit@google.com",
    isLoggedIn: true
}
Object.freeze(obj5); // not update if you try to update
obj5.email= "rohit@gmail.com" // update
obj5["isLoggedIn"] = false; // update
console.log(obj5);

console.log(Object.keys(obj5));
console.log(Object.values(obj5));

