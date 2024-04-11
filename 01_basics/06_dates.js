let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2024, 3, 12); // In Java Script Months starts from "0". i.e January = 0, Febuary = 1, March = 2,.....
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 3, 12, 7, 27);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-04-11");
console.log(myCreatedDate3.toLocaleDateString());

// Time Stamps----------------------------

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let myCreatedDate4 = new Date("2024-04-11");
console.log(myCreatedDate4.getTime());

let myDates = new Date();
console.log(newDates);

