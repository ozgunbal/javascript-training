// String <--> Number

var a = "42" + 0;
console.log(a);
console.log(typeof a);

var b = "42" - 0;
console.log(b);
console.log(typeof b);

var c = "42" / "3";
console.log(c);
console.log(typeof c);

// Booleans

var d = "" || 45;
var e = "" && 45;
console.log(d);
console.log(e);

// Interesting Few Loose Equalities
Number.prototype.valueOf = () => 3;

console.log(new Number(45) == 3);

console.log(false == []);
console.log("0" == false);
console.log([] == ![]);

// One last evil example

if (g == 2 && g == 3) {
    console.log('This can happen but how?');
}