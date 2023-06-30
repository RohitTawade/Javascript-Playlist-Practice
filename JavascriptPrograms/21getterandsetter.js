class Product 
{
    #rating;
    constructor(n,p,r) {
        console.log("calling the constructor ");
        this.name= n;
        this.price = p;
        this.#rating = r;

    }

    get ratingGetter() {
        console.log(this.#rating);
    }
    set ratingSetter(r) {
        if(r<0) return;
        this.#rating =r;
    }

    display()
    {
        console.log("Displaying the current product: ", this.name, this.price, this.#rating);
    }

    

}

const p =new Product("Iphone", 10000, 5);

console.log(p);
p.ratingSetter = 10;
p.ratingGetter;

p.display();

