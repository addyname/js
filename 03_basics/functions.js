function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
                      // Parameters//
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//              //Arguments//
// addTwoNumbers( 3 , 6 )

// function myNumber(number1, number2){
//     console.log(number1+number2)
// }
// const myNewNumber = myNumber(3,4)

// console.log("Number:", myNewNumber) // Give value undefined, so we use below method

function myNumber(number1, number2){
    console.log(number1+number2)
    return number1+number2
}
// const myNewNumber = myNumber(3,4)

// console.log("Number:", myNewNumber) // Use "return", if we use variable.

function loginUserMessage(username = "User"){ // Use default value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));