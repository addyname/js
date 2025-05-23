const score = 300
// console.log(score)

const newNumber = new Number(111)
// console.log(newNumber)
// console.log(newNumber.toString().length) // Converted the number to string.
// console.log(newNumber.toFixed(3)) // To add the digits(3) after the decimal

const mathPrecision = 1234.3455
// console.log(mathPrecision.toPrecision(4)) // Gives the value in 4 digites.

const handreds = 1000000
// console.log(handreds.toLocaleString()) // Add coma(,) for seperating long numbers.


//--------------- Math Functions -------------------------->


// console.log(Math.abs(-4))// It is converted the '-' to '+'
// console.log(Math.round(6.3))// Give the number value in round off
// console.log(Math.ceil(3.3)) // It is selected the top value of the 3.3 like 4
// console.log(Math.floor(3.3))// It is selected the lower value of the 3.3 like 3
// console.log(Math.sqrt(25)) // It give us the square root of the number
// console.log(Math.min(1, 2, 3, 4))// Pick the minimum value
// console.log(Math.max(1, 2, 3, 4))// Pick the maximum value

console.log(Math.random())// Give the value between 0 and 1
console.log(Math.random()*10 + 1)// Give the value between 0 and 10 but if we dont need 0 then add +1
console.log(Math.floor(Math.random()*20) + 1)// Give the value without decimal point by adding .floor function

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // If we need value between minimum and maximum number

