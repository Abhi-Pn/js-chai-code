// singleton
// Object.create - Other way to create a object as constructor method (singleton)

// Object Literals

const jsUser = {
    name: "Abhishek",
    "full name": "Abhishek Painuli",
    age: 31,
    location: "Delhi",
    email: "abhishek@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // Square Notation - which is more correct way.
console.log(jsUser["full name"]);

jsUser.email = "ap@gmail.com" // to the value of the variable in the object
//Object.freeze(jsUser) // revents the modification of existing property attributes and values, and prevents the addition of new properties.
console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Helo JS Users")
}

jsUser.greetingTwo = function(){
    console.log(`Helo JS Users- ${this.name}`)
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());