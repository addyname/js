// const tinderUser = new Object() // Singleton Object
const tinderUser = {}  // Non Singleton Object

tinderUser.id = "123"
tinderUser.email = "test@gmail.com"
tinderUser.phone = "1234567890"

// console.log(tinderUser)

const myInformation = {
    fullname: {
        myfullname: {
            firstname: "Adnan",
            lastname: "Ahmad",
        }
    },
    lastupdateName: "Ahmad",
    email: [tinderUser.email],
    address: "Naya Bazar Kamptee",
}

const information = function() {
    console.log(`My full name is ${myInformation.fullname.myfullname.firstname} ${myInformation.lastupdateName}. My email id is ${myInformation.email} and my address is ${myInformation.address}.`)
}
//console.log(information())

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj3) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Returns the names of the enumerable string properties and methods of an object.
// console.log(Object.values(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object
// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object

// console.log(obj1.hasOwnProperty("1")); // Find the property.
