// anonymous function

let x= function () {
    console.log("Hi");
}

x(); // calling


// immediately invoked function expression
// Ex.1
(function sample() {
    console.log("Hello");
})();

// Ex.2

(function (x) {
    console.log(x*x);
})(5);

// Self-invoking functions => When a function calls itself is called self-invoking functions
// Ex
(function ex() {
    console.log("Hello how are you" );
})(); 
