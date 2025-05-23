// Primitive Datatypes

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const datatypesString = "Adnan"
const datatypesNumber = 777
const datatypesBoolean = true //(true or false)
const datatypesNull = null
const datatypesUndefined = undefined

const datatypesSymbolId = Symbol(123)
const datatypesSymbolClass = Symbol(123)
// console.log(datatypesSymbolId === datatypesSymbolClass) Symbol give us different ids wheather we write the same number or not.

const datatypesBigInt = 123456789n

console.table([typeof datatypesString, typeof datatypesNumber, typeof datatypesBoolean, typeof datatypesNull, typeof datatypesUndefined, typeof datatypesSymbolId, typeof datatypesBigInt]);

// Non Primitive Datatypes or Reference

// 3 Types: Array, Objects, Functions

const arrayFunction = ["Adnan" , "Monis", "Seemab"]

let objectFunctions = {
    name: "Adnan", 
    age: 24
} 

let functions = function() {
    console.log("Hello world");
}

console.table([typeof arrayFunction, typeof objectFunctions, typeof functions])

// https://262.ecma-international.org/5.1/#sec-11.4.3