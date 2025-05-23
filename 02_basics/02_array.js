const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays.
//console.log(allHeros);

const spreadHeros = [...marvel_heros, ...dc_heros] // Spread operator and also prefable
// console.log(spreadHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);

// ----------------------------------- Convert to Array ----------------------------------- //

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // Creates an array from an iterable object.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.