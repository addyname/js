const myArray = [0, 1, 2, 3, 4] // Array type is object
// console.log(myArray[0])

const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7)
// myArray.push(9) // Add value on last place
// myArray.pop() // Remove the last value

// myArray.unshift(7) // Add value on first place
// myArray.shift() // Removed the first value
// console.log(myArray) 

// console.log(myArray.includes(4)) // Giving the value in true or false
// console.log(myArray2.indexOf(1)) // To find the number position by giving the number

const joinArray = myArray.join() // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArray)
// console.log(joinArray) 

 // slice, splice
const sliceArray = [0, 1, 2, 3, 4, 5]
console.log(sliceArray.slice(0,3)) // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
console.log(sliceArray)

const spliceArray = [0, 1, 2, 3, 4, 5]
console.log(spliceArray.splice(0,3)) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(spliceArray)