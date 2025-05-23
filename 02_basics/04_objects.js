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
console.log(information())