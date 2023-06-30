// Destructing spread and rest

// map , sets and array


// SPREAD

//const oneArray  = [1,2,3] 
//const twoArray  = [4,5,6] 


//const threeArray = oneArray.concat(twoArray);
// const threeArray = [oneArray, twoArray]

 //const threeArray = [...oneArray , ...twoArray];  // spread operator
 
 //console.log(threeArray);


// +++++++++++++++++++++++++++++++++
// arguments 

//  function testOne() {
//     console.log(typeof arguments);   // Object
// }

//testOne([1,2,3,4,5,6])   // calling function
//testOne(1,2,3,4,5)


// ++++++++++++++++++++++++++++++++++++
// Rest
function manyArguments() {
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e )
    console.log(finalArr);
}

function manyArguments2(...args) {

   console.log(typeof args)
    let finalArr = args.map(ee => ee)
    console.log(finalArr);
  
}
// manyArguments(1,2,3)
// manyArguments2(1,2,3)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = [ "superman" , "flash"]
const newNames = ["batman" , ...names , "thor"]



