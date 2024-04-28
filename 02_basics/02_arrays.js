const marvelHeros = ["Thor", "Ironman", "Hulk"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);

const allHeros2 = [...marvelHeros, ...dcHeros];
console.log(allHeros2);

const anotherArray = [1, 3, 5, [4, 7, 9, [5, 1, 4,], 4, 7 ]];
const flatArray = anotherArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(flatArray);

console.log(Array.isArray("Abhishek Painuli"));
console.log(Array.from("Abhishek Painuli")); // Creates an array from an iterable object.
console.log(Array.from({name: "abhishek"})); // It gives the empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));