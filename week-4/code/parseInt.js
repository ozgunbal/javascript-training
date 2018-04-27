var a = "34";
var b = "34px";

console.log(Number(a));
console.log(Number(b));

console.log(parseInt(a));
console.log(parseInt(b,10));


// WTF!!
console.log(parseInt(1/0, 19));

var c = {
    num: 12,
    toString: function () { return String(this.num * 3); }
}
console.log(parseInt(c));
console.log(c);