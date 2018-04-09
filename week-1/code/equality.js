var a = 5;
var b = '5';

// Loose equality - only value
console.log(Boolean(a == b));
// Strict equality - value and type
console.log(Boolean(a === b));

var c = {property: 'value'}; // new object
var d = {property: 'value'}; // new object
var e = c // e has a same reference with c

// Object equality work only when they have the same reference
console.log(Boolean(c === d));
console.log(Boolean(c === e));