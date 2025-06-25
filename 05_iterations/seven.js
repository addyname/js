const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumers.map((num) => {
    return num + 7
})
// console.log(newNum)

myNumers.forEach((fornum) => {
    if (fornum == 1) {
       // console.log(myNumers[1])
    }
})

// Chaining Method
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);