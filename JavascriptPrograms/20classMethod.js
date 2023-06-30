// Static Methods

class Product {

    #rating; // private data member declaration
display(r) {

    this.#rating;

}

static custom()
{
    console.log("calling a static method");

}

}

const c =new Product(5);
Product.custom(); // calling a static method 
c.display();
console.log("Rating: ", c.rating);
