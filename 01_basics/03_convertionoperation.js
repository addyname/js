let score = true
//console.log(typeof score) 

let numberValue = Number(score)
//console.log(typeof score) 
//console.log(numberValue) 

/*
33 => 33
33abc => NaN(not a number)
true => 1 & false => 0
*/

let boolean = "Adnan"

let booleanConversion = Boolean(boolean)
//console.log(booleanConversion)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//<!------------------------------------- Operations ----------------------------------------->

let value = 3
let negValue = -2

//console.log(value + negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(3**3);
// console.log(2/3);
// console.log(3%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * (2 + 2));

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// Postfix increment operator
// Returns the current value, then increments.
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

// Prefix increment operator
// Increments first, then returns the new value.
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);


// Backticks
// Uses of ` ` and $ sign means (template literal)

let name = "Adnan";
let age = 24;

console.log(`My name is ${name} and I am ${age} years old.`);

// Without template literal

 let name1 = "Adnan";
 let age1 = 24;

 let message = "My name is " + name1 + " and I am " + age1 + " years old.";
 console.log(message);