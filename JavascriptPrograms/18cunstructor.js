

// Function Constructor 

function Product(n,p,r) {
    this.name = n;
    this.price = p;
    this.rating = r;
    // Best case no return any primitive and non-primitive
}
const p =new Product("macbook", 1500000, 5);

console.log(p);


let x = { 
    p:Product
};

x.p("airpods", 20000, 5)
console.log(x);


/*
    1. this keyword in js is diff than other language
    2. this keyword refres to the context from where we called
    

    in the function constructor also 
    1. if you return primitive it is ignored and we return the object reffred by this 
    2. if you return a custom obj. then the custom obj is returned 
    3. if you don't return anything , then object refferred by this is returned 
*/