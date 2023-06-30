
// What are classes and objects

class Product 
{
    // Properties -> variable 
    // name;
    // price;
    // rating;

    // In the one class only one constructor present we cannot achive the constructor overloading 
     constructor(n,p,r) {
        console.log("Calling the constructor ");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10; -> if you are returning primitive then it will be avoided in constructor

       // return {x:0, y:20} // -> id you return non primitive then it will be returned 
     }

   // behaviour -> function
    display()  {
        console.log("This refers to", this);
        console.log("Displaying the current product", this.name, this.price, this.rating);
    }
}

const p = new Product("Iphone", 100000, 5);  // new -> creates an empty plain object 
// -> in the above piece of code we are calling the constructor method

p.display();
// console.log(p.name);
console.log(p); // Print all class behaviour

