const course = {
    name: "Adnan",
    price: "456",
    myFullName: "Adnan Ahmad",
}

console.log(course.name)

const {price} = course
console.log(price)

const {myFullName:FullName} = course // De-Structure or change the property
console.log(FullName)