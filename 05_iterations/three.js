// for
let myArray = [1, 2, 3, 4, 5]
for (const num of myArray) {
    // console.log(`Number are ${num}`)
}

//With string
let string = "Adnan"
for (const text of string) {
    // console.log(`My name aphabets are ${text.toUpperCase()}.`)
}

//Maps

const map = new Map()
map.set ("IN", "India")
map.set ("USA", "United State Of America")
map.set ("Fr", "France")


// console.log("Country Code".toUpperCase())
for (const [key, value] of map) {
    // console.log(`${key.toUpperCase()}:- ${value.toUpperCase()}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }