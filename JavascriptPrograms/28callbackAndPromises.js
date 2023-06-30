// function h(x, fn) {
//     // h --> is a hof(Higher Order Function)
//     // fn --> callback

//     console.log(x*x);
//     fn(x*x);
// }
// h(10, exec);
// function exec(n) {
//     console.log("squred value is ", n);
// }

// console.log("start");
// setTimeout(function f() {
//     console.log("timer done 1");
// },100);
// setTimeout(function f() {
//     console.log("timer done 2");
// },0);
// console.log("end");

// for(let i=0; i<10000000000; i++) {}

// Promise Constructor
function createPromise() {
  return new Promise(function exec(resolve, reject) {
    // your code goes here
    setTimeout(function f() {
      console.log("timer done");
      //   resolve("done");
      // reject("done");
      reject(10);
    }, 3000);
  });
}
console.log("start");
let x = createPromise();
console.log("got a new promise");
x.then(function f(value) {
  console.log("Promise done", value);
})
  .catch(function g(value) {
    console.log("handled", value);
  })
  .finally(function fn() {
    console.log("finally");
  });

console.log("end");

for (let i = 0; i < 100000000; i++) {
  //some code
}
// Async And Awair Fetch API
async function consume() {
  try {
    console.log("inside function");

    const response = await createPromise();
    console.log("response is ", response);
  } catch {
    console.log("handled", err);
  }
}
console.log("start");
consume();
console.log("end");

// fetch the data url
fetch("http://type.fit/api/quotes")
  .then(function f(response) {
    return response.json();
  })
  .then(function f(value) {
    console.log(value);
  });
