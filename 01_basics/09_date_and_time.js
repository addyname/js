let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

// let mySpacificDate = new Date(2001, 4, 1) // Year, Month(Start from 0), Date
// let mySpacificDate = new Date(2001, 4, 1, 5, 30)
let mySpacificDate = new Date("2001-05-01") // Formats: 1)YY/MM/DD, 2)MM/DD/YY
//  console.log(mySpacificDate.toLocaleString())
// console.log(mySpacificDate.toTimeString())
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mySpacificDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())

newDate.toLocaleString('default', {
    weekday: "long",
})