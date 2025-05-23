// Stack means (Primitive Datatypes)

let stack = "webdesignad"

let anotherStackId = stack
anotherStackId = "copywebdesignad"
console.log(stack)
console.log(anotherStackId) // It is store the last different value for the same variable. Also it will not change the original value.

// Heap means (Non-Primitive Datatypes)

let heap = {
    name: "Adnan",
    pass: "123",
}

let anotherHeap = heap

anotherHeap.name = "Adnan2"

console.log(heap.name)
console.log(anotherHeap.name) // it is changed the values. It will change the original value.