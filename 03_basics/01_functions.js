function sayMyName(){
    console.log("A")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("e")
    console.log("k")
}

// sayMyName()

function addTwoNums (num1, num2) { // In Parentheses the values are called Parameters
    console.log(num1 + num2)
}

addTwoNums(3,9) // In Parentheses the values on calling are called Arguments

function add2Numbs (num1, num2){
// let result = num1 + num2
// return result
return num1 + num2
}
result = add2Numbs (2,5)
console.log(result)

function loginMessage(userName){
    return `${userName} Just Logged In`
}
console.log(loginMessage("Abhishek"))


function loginMessage2(userName){
    if (userName === undefined) {
        console.log("Please enter your name")
        return

    }
    return `${userName} Just Logged In`
}
console.log(loginMessage2())