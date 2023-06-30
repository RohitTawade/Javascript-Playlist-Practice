// Creation of object => kay value pair

let obj = {id: 101, name: "rohit", salary: 100000};

let emp = new Object();   // Empty Object 
emp.id=102;
emp.name="Rahul";
emp.salary=120000;

console.log(emp);
console.log(obj);
function Emp(i, n , s) {

    this.id=i;
    this.name=n; 
    this.salary=s;

}
const e = new Emp(103,"Raju", 1200001);
console.log(e);

// kay accessing
console.log(emp.id);

// another way to accessing fetch the key value 
console.log(emp['name'])

// assign value for keys
emp.salary = 130000;

// another way 
emp['salary']=1300;  // Updated

// delete the property
delete emp.id;  // id id deleted
console.log(emp);
