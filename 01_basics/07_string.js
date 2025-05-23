const name = "Adnan"
const age = 24

console.log(`Myself ${name} Ahmad and i am ${age} years old.`)

const newString = new String('Adnan-Ahmad')
console.log(newString[4]) // To access key value pair
console.log(newString.__proto__) // To access prototype
console.log(newString.length) // To access length
console.log(newString.toLocaleUpperCase()) // Converted to uppercase function
console.log(newString.charAt(3)) // To find the character position by giving the number
console.log(newString.indexOf('n')) // To find the number position by giving the character

const subString = (newString.substring(0,6))
console.log(subString) // Access the character from 0 to 6.

const stringSlice = (newString.slice(-11,8))
console.log(stringSlice)

const trim = "  Spacer  "
const trim2 = "Right"
console.log(trim + trim2)
console.log(trim.trim() + trim2)
console.log(trim.trimStart() + trim2)
console.log(trim.trimEnd() + trim2) // It is removed the extra space

const adUrl = "https://webdesignad.in/home%20page"
console.log(adUrl.replace('%20', '-')) // It is replaced the values

console.log(adUrl.includes('design')) // It is find the value in the variable

console.log(newString.split('-')) // It is split the value based on '-'