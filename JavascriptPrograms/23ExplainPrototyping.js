
// let yourName = "Rohit"
// console.log(yourName.length)

// let yourNameTwo = "Tawade     "
// console.log(yourNameTwo.length);

// console.log(yourNameTwo.truelenght);

let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "flash", "superman"];

let heropower = {
    thor: "hammer" ,
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Rohit = function() {
    console.log("Rohit is present in all object");
}

console.log(myHeros.Rohit());
console.log(heropower.Rohit());

Array.prototype.heyRohit = function() {
    console.log("Rohit says hi...");
}

console.log(myHeros.heyRohit());
// console.log(heropower.heyRohit());



// inheritance 

const User = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable:false
}

const TAssistant = {
    makeAssignment: "JS Assignment ",
    fulltime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = user 

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.isAvailable);

String.prototype.truelenght = function() {
    console.log(`true length is ${this.trim().length}`);
}  
"Rohit     ".truelenght()
"Anurag     ".truelenght()

