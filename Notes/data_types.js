// 🔹 1. Primitive Data Types
// Primitive types are immutable and compared by value.

/*a) String
Rules: Enclosed in " ", ' ', or `
Use: Represent text, characters, or words
Example:*/
let name = "John Doe"; 
console.log(name.toUpperCase()); // "JOHN DOE"

/*b) Number
Rules: Represents integers and floating-point numbers.
Special values: Infinity, -Infinity, NaN
Use: For arithmetic and numeric data
Example:*/
let age = 25; 
let price = 99.99;
console.log(age + price); // 124.99

/*c) BigInt
Rules: Add n at the end of number
Use: For very large integers beyond Number.MAX_SAFE_INTEGER
Example:*/
let big = 123456789012345678901234567890n;
console.log(big + 10n);

/*d) Boolean
Rules: Only true or false
Use: Logic, conditions, control flow
Example:*/
let isAdmin = true;
if (isAdmin) console.log("Welcome Admin");

/*e) Undefined
Rules: A variable declared but not assigned gets undefined
Use: Default uninitialized state
Example:*/
let x;
console.log(x); // undefined

/*f) Null
Rules: Intentional “empty” or “no value” assignment
Use: Represent nothing or cleared values
Example:*/
let user = null;
console.log(user); // null

/*g) Symbol
Rules: Created using Symbol(), unique even if same description
Use: Unique keys in objects (avoid collisions)
Example: */
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false

// 🔹 2. Non-Primitive (Reference) Data Types
// Stored and compared by reference (address in memory).

/*a) Object
Rules: Key-value pairs inside {}
Keys are strings (or symbols), values can be any type
Use: Store structured data
Example: */
let user1 = {
  name: "Alice",
  age: 30,
  isMember: true
};
console.log(user1.name); // Alice

/*b) Array
Rules: Ordered collection, zero-based index
Use: List-like structures
Example: */
let fruits = ["apple", "banana", "cherry"];
fruits.push("mango");
console.log(fruits[2]); // cherry

/*c) Function
Rules: First-class citizens (can be assigned, passed, returned)
Use: Encapsulate logic, reusable code
Example: */
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Sam")); // Hello, Sam

/*d) Date
Rules: Created with new Date()
Use: Work with dates & times
Example: */
let today = new Date();
console.log(today.toDateString());

/*e) RegExp
Rules: Defined using /pattern/flags
Use: Pattern matching in strings
Example: */
let pattern = /hello/i;
console.log(pattern.test("Hello World")); // true

/*f) Map
Rules: Key-value store, keys can be any type
Use: Better for dynamic object keys
Example: */
let map = new Map();
map.set("name", "Bob");
map.set(1, "one");
console.log(map.get(1)); // one

/*g) Set
Rules: Stores unique values only
Use: Avoid duplicates
Example: */
let set = new Set([1,2,2,3]);
console.log(set); // {1,2,3}

// 🔹 3. Special/Other Types

// Typed Arrays (e.g., Int8Array, Float32Array) → work with binary data.
// Promise → async operations.
// Error → handling runtime errors.

// ✅ Summary of Rules & Uses
/* 
Primitive: immutable, compared by value (string, number, bigint, boolean, undefined, null, symbol)
Non-Primitive: mutable, compared by reference (object, array, function, map, set, etc.)
Use primitives for simple values and objects/collections for structured/complex data.
*/

