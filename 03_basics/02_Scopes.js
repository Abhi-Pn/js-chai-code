// var c = 30;

let a = 200

if (true) {
    let a = 100;
    const b = 400
    console.log("Inner: ", a)
}

console.log("Global: ", a)

function one(){
    const userName = "Abhi"
    function two(){
        const website = "Adyant Ato"
        console.log(userName);
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const userName = "Abhishek"
    if (userName === "Abhishek") {
        const lastName = " Painuli"
        console.log(userName + lastName);
        console.log(lastName);
    }
    console.log(userName)
}

// ================ Basic Hoisting ===================

console.log(addOne(8));
function addOne(num) {
    return num + 1
}


console.log(addTwo(5)); // In the type of Hoisting, error will occure
const addTwo = function(num){
    return num + 2
}


