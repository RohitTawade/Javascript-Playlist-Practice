// Anonymous Function
// const Product = function (n,p,r)
// {
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }
// const p =new Product("Iphone", 100000, 5);
// console.log(p);


// Arrow Function -> We cannot use arrow function as a function constructor follwing ex return error

// const Product = (n,p,r) => {
//     this.name = n;
//      this.price = p;
//      this.rating = r;
// }
//  const p =new Product("Iphone", 100000, 5);
// console.log(p);


let obj = {
    x:10, 
    fun ()  {
        y = {

            gun: () => {
                console.log(this.x);   
            }
        }
       y.gun();
    }
}

obj.fun() 

