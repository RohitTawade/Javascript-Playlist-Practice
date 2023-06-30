let arr =[1,2 , 3];

arr.forEach(function (element, index, arr) {
    console.log(index,element,arr);

});

arr.forEach ( (element,index, arr) => {
    console.log("arrow: ", index, element, arr);

});

const heros =  ["nagraj", 'doga', 'dhruva', 'maniraj'];

heros.forEach((element,index,heros) => {
    console.log("Heros: ", element.toUpperCase(), index);
})

arr.map((element,index, arr) => {

    console.log(element,index,arr);

})
heros.map((element) => {
    console.log(element.toUpperCase());
})

// Filter 

console.log(heros);
const heroWithRaj = heros.filter((h) =>
{
   return h.endsWith('raj');
})
console.log(heroWithRaj);

// Shopping cart 

const cartBill = [20,30,40]
const sumOfCartBill = cartBill.reduce((previousValue, curruntValue) =>  
    previousValue + curruntValue,0)
    console.log(sumOfCartBill);

// Game Score
const gameScore = [200, 300 , 310 , 250 , 150]

// Checks if all values are numbers
const gameScoreCheck = gameScore.every((value) => 
   typeof value === 'number'
)
console.log("Check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => 
score >200  )

console.log(above200);

// Assignments....

// findIndex
const gameIndex = gameScore.findIndex((index) => index )
// sum  
// sort
