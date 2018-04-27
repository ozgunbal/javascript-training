var a = 1.0;
var b = 1.1;

console.log(a);
console.log(b);


// Not a number

var c = 4 * "something";

console.log(c);
console.log(Number.isNaN(c));

console.log(NaN == NaN);
console.log(NaN === NaN);

// Infinities

var d = 1 / 0;
var e = -1 / 0;

console.log(d);
console.log(e);

// Zeroes
var f = 0 / -1;
var g = 1 / Infinity;

console.log(f);
console.log(g);
