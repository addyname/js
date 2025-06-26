const user = {
    userName: "Adnan Ahmad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website after paying ${this.price}.`)
    }
}
// user.welcomeMessage()
// user.userName = "Seemab"
// user.price = 1000
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const multiply = (num1, num2, num3) => {
//     return num1*num2*num3
// }

//const multiply = (num1, num2, num3) => num1*num2*num3 // second method

// const multiply = (num1, num2, num3) => (num1*num2*num3) // In this method we don`t need to add "return". Most of the time it is used in the "React Js".

const multiply = (num1, num2, num3) => ({userName: "Adnan"}) // Used "{}" to run objects.

console.log(multiply(100,20,10))





