// array
const myArr = [9, 3, 6, 8, 6, 2, 4];
const myFriend = ["Akash", "Gaurav", "Chandan", "Pulkit", "Vinay"];
const myArr2 = new Array("Mango", "Banana", "Kiwi", "Watermelon");

console.log(myArr[0], myFriend[3], myArr2[3]);

// Array Methods--------------------

myArr2.push("Pineapple"); // To push new value or data
myArr2.push("Orange"); // To push new value or data

myArr2.pop(); // To remove last value or data
myArr2.unshift("Fruits"); // To add value or data at the start
console.log(myArr2);

console.log(myArr.includes(8)); // includes show the boolean statement
console.log(myArr2.includes("Norbu")); // includes show the boolean statement

console.log(myArr.indexOf(8)); // it shows the indexing of the data or value
console.log(myArr2.indexOf("Norbu")); // it shows the indexing of the data or value

const newArr = myArr.join(); // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice (Read About Both Terms = Important Topics) =====================

