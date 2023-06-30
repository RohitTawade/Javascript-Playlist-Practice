// Object

const user = {
    username: "Rohit",
    email: "rohit@google.com"
}

const {username, email} = user



const myArray = [
    {
        username:"rohit",
        email: "rohit@google.com"
    },
    {
        username:"prem",
        email: "rohit@google.com"
    },
    {
        username:"govind",
        email: "rohit@google.com"
    }
]
myArray.map((ele) => {

    console.log(ele.username);
}) 

let pwCourse = {
    courseName: "pw1",
    price: 1299,

    getCourseDetails:  function() {
        console.log(`Course name is ${this.courseName} and price is ${this.price}`);
    }
}

Object.prototype.rohit = function() {
    console.log(`Rohit was hare`);
}
pwCourse.getCourseDetails();
pwCourse.rohit();
myArray.rohit()

const anewString = "Yatin"

anewString.rohit();

// prototype inheritance
Array.prototype.heyRohit = function() {
    console.log("Object Revision class");
}
myArray.heyRohit()

const user1 = {
    courseName: "pw1",
    price: 1299,
}
const user2 = {
   email:"some@gmail.com"
}
const user3 = {
    isloggedin: true,

}
const user4 = {
   support: "js course",
//    __proto__:user1 // access the property of user1 first method
}

// user4.__proto__= user1 // second method for aceesing

Object.getPrototypeOf(user4,user1) // third method

