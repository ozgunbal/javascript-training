console.log(a);
foo();
console.log(bar);
bar();


var a = 5;
// Function declaration
function foo() {
    console.log('Executing foo.');
}
// Function expression
var bar = function() {
    console.log('Executing bar');
}