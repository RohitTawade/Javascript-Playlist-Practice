let score = 4
function one() {
    let score = 0

    console.log(score);
}
function two() {
    let score = 3
    console.log(score);
}
function three() {
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);

function outerFun() {
    let outerVar = 'I am at scope level 1'

    function innerFun() {
        let innerVal = "I am at scope level 2"
        console.log(outerVar);
    } 
    console.log(innerVal);
    innerFun()
}
// outerFun()

const myGlobalValue = 0

function func() {
    const val1 = 1;
    console.log(myGlobalValue);

    function innerFunc() {
        const val2 = 2;
        console.log(val2, val1, myGlobalValue);

        function innerofInnerFunc() {

            const val3 =3
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerofInnerFunc()
    }
    innerFunc()
}
// func()

// closure

function superFun() {
    let outerValue = "I am Outer"
    function minorFunc() {
        console.log(outerValue);
    }
    minorFunc()
}
// superFun()

const errorMessage = "File not found"

setTimeout(function callback(){
    console.log(errorMessage);
},1000)

let pageCount = 0;

let items = [2,4,5,7, 8];

items.forEach(function iterator(num) {
    pageCount++
    console.log(num);
})

console.log("Page Count: ",pageCount);