// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`)
}) ();

// Add ";" to work the (IIFE) function before adding more functions. Without it is showing error.

(() => {
    console.log(`DB Connected Two`)
}) ();

((name) => {
    console.log(`DB Connected Three ${name}`)
}) ("Adnan");