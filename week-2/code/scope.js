function foo (a) {
    // Look up for first a then b
    console.log(a + b);
    b = a;
}
var b;

foo(2);