// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // Declare symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // best way to declare objects
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" 
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

const userName = "Adnan Ahmad"
JsUser.greeting = function() {
    console.log(`Hi, myself ${userName}`)
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function() {
    console.log(`Hi, myself ${userName} and i am ${this.age} years old.`) // Use "this." to access the object values.
}

console.log(JsUser.greetingTwo()) 

