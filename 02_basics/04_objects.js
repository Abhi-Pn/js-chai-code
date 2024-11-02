// const tinderUser = new Object() - declaring a object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Abhi";
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(tinderUser["isLoggedIn"]);
console.log(typeof tinderUser["isLoggedIn"]);
console.log(Object.keys(tinderUser)); // Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(tinderUser)); //Returns an array of values of the enumerable properties of an object
console.log(Object.entries(tinderUser)); //Returns an array of key/values of the enumerable properties of an object


const otherUser = {
    email: "abc@gmail.com",
    userFullName: {
        fullName: {
            firstName: "Abhishek",
            lastName: "Painuli",
        }
    }
}
console.log(otherUser);
console.log(otherUser.userFullName);
console.log(otherUser.userFullName.fullName);
console.log(otherUser.userFullName.fullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2};
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2) - "{}"- these parenthesis is target and the obj1, obj2 are the sources.
// const obj4 = {...obj1, ...obj2} spread all the value in the object
console.log(obj4);

// arrays of objects
const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    
]
user[0].email

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); we can do this as well

const {courseInstructor: instructor} = course
console.log(instructor);