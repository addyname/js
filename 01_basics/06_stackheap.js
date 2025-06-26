// Stack means (Primitive Datatypes)
// The stack is a region of memory used for storing temporary data like: Function/method calls, Local variables and Return addresses.

let stack = "webdesignad"

let anotherStackId = stack
anotherStackId = "copywebdesignad"
console.log(stack)
console.log(anotherStackId) // It is store the last different value for the same variable. Also it will not change the original value.

// Heap means (Non-Primitive Datatypes)
// The heap is a region of memory used for storing objects and variables that require dynamic memory allocation. 

let heap = {
    name: "Adnan",
    pass: "123",
}

let anotherHeap = heap

anotherHeap.name = "Adnan2"

console.log(heap.name)
console.log(anotherHeap.name) // it is changed the values. It will change the original value.