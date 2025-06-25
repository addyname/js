let w = 1
while (w < 10) {
    // console.log(`Value is ${w}`)
    w = w + 2
}

let myArray = ["Adnan", "Seemab", "Monis", "Nikhat", "Ravi"]
let a = 0
while (a < myArray.length) {
    // console.log(`${myArray[a]}`);
    a = a + 1
}
// Use it when you want to loop until a condition becomes false.
// Note : Check condition before loop starts.
// ----------------------------------------------

let score = 1
do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);

let Score = 11
do {
    console.log(`Score is ${Score}`);
    Score++
} while (Score <= 10);

// It always runs at least once, then checks the condition.
// Useful if you want to ensure the code runs at least once. 