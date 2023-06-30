let emp = {
    id: 101,
    name: "Rohit",
    age:20
};

let keys = Object.keys(emp);  // it return array that all key elments stored 

console.log(keys);

let values = Object.values(emp); // it return array that all values in the object 

console.log(values);


const entries= Object.entries(emp);  // it return kay value pair in the form of array
console.log(entries);  

// Object.freeze(emp); // Whenever you apply this function then you cannot modify the kay values....

Object.seal(emp); // This fuction allow for update but new key value not allow.
emp.address="random"; // not allow new key value beacause of seal().
emp.id=100;  // not changing because of freeze() fun or meth.
console.log(emp);

let o =  Object.assign({},emp); // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// {key:value} you can add assign() function key and values. 
console.log(o);





