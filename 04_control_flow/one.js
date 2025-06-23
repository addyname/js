//<-- Simple and best conversion -->
// console.log(2 > 1); (Greater than)
// console.log(2 >= 1); (Greater than and equal to)
// console.log(2 <= 1); (Less than and equal to)
// console.log(2 < 1); (Less than)
// console.log(2 == 1); (Equal to)
// console.log(2 != 1);  (Not equal too)
// ===  (Strict check means check the values as well as its datatypes)

// ---------------------------------------------
// const temperature = 40
// if (temperature < 50) {
//     console.log("Tempearture is less than 40")
// } else {
//     console.log("Temperature is greater than 40")
// }

// ---------------------------------------------
// let score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// ---------------------------------------------
// const balance = 1000
// // if (balance > 500) console.log("test"),console.log("test2"); // Shortend code but not recommended.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}