// Numbers

const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(typeof(balance.toString()));
console.log(balance.toFixed(2));

const otherNum = 19.19910;
console.log(otherNum.toPrecision(3));

const otherNum2 = 191.91910;
console.log(otherNum2.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

// ===========Maths=================================

console.log(Math); //Open in Browser
console.log(Math.abs(-4)); //.abs is use for to convert Negative (-ve) values into Positive (+ve) values.
console.log(Math.round(6.4));
console.log(Math.round(7.8));
console.log(Math.ceil(6.4));
console.log(Math.floor(7.8));
console.log(Math.min(4,6,9,3,5,2,7,8));
console.log(Math.max(4,6,9,3,5,2,7,8));

console.log(Math.random()); // Math.random always give values between 0 to 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);