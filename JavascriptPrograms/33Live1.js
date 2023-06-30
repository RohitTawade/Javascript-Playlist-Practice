// Promises And async

//1
const promiseOne = new Promise(function(resolve, reject) {
    // Do an asnc task
    // DB call, cryptography

    setTimeout(function(){
        console.log("Asnc task is complete");
        resolve()
    },1000)
})

// consuming a promise 2
promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve,reject) {

    setTimeout( function() {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function() {
    console.log("promise consumed: 2");
})

// 3
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // Db call to get all users from databases 
        resolve({useername:"Rohit", emial:"ROhit@gmail.com"})
    },1000)

})
promiseThree.then(function(user) {
    console.log(user);
})


// reject 

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function(){
        let error = true // false

        if(!error) {
            resolve({useername:"Rohit", email:"Rohit@gmail.com"})
        }
        else {
            reject("ERROR: something went wrong")
        }
    },1000)

})
promiseFour
.then(function(user){
    console.log(user);

    return user.useername

})
.then((name) => {
    console.log(name); // username 
})
.catch(function(error){
    console.log(error);

}) // catch for reject and  then is resolve 
.finally(() => {
    console.log("This statement execute either resolved or reject ");
})


// 5
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username:"raj" , email: "raj@gmail.com"})
        }
        else
        {
            console.log("Error something went wrong");
        }
    },1000)
})
async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}
consumePromiseFive()

// Async await function
async function getAllUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`) // json data
    const data = response.json()
    console.log(data);
}
getAllUsers()

// above same try to implement in promise 
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(function(response){

    return response.json()
})
.then( (data) => console.log(data))
.catch((error) => console.log(error))
// Above two code not run because of fetch() function is introduced version 18.