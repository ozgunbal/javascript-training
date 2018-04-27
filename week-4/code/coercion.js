// toString

var a = [1,2,3]
var b = a.toString();

console.log(a);
console.log(b);

var c = JSON.stringify(a);
console.log(c);

// toNumber

var d = Number("42");
var e = +"42";

console.log(d);
console.log(e);

// toBoolean

var f = Boolean (12 && "12");
var g = !!"I\'m truthy";

console.log(f);
console.log(g);

