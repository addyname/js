// For in. This loop is used for Objects.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
 for (const obj in myObject) {
    // console.log(`${obj} shortend is ${myObject[obj]}`)
 }

 // For Array
 const programming = ["js", "rb", "py", "java", "cpp"]

 for (const arr in programming) {
    // console.log(`On the ${arr} position we have placed the ${programming[arr]} language `)
 }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }