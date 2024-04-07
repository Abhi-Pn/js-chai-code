// Stack Memory (Primitive)- In Stack Memory it will always target the *Copy*.

let myName = "Abhishek Painuli";
let otherName = myName;
otherName = "Tunnu"

console.log(myName);
console.log(otherName);

// Heap Memory (Non Primitive)- In Heap Memory it will always target the original *Reference*.

let user01 = {
    name: "Abhi",
    age: 30,
    sex: "Male"
}

let user02 = user01;

user02.age = 31

console.log(user01);
console.log(user02);