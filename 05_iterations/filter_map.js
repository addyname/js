// Map
/*
Transform each item and return a new array.
Returns a new array
Same length as original
Good for transforming data
*/
const map = [1, 2, 3];
const doubled = map.map(num => num * 2);
console.log(doubled);

// Filter
/*
Return a new array with elements that match a condition.
Returns a new array
May be shorter than original
Good for filtering out unwanted items
*/

const nums = [1, 2, 3, 4];
const even = nums.filter(num => num % 2 === 0);
console.log(even);