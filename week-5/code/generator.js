var x = 1;

function *foo() {
	x++;
    //yield;
    var y = yield; // pause!
    console.log(`y: ${y}`);
	console.log(`x: ${x}`);
}

function bar() {
	x++;
}


var it = foo();

// start `foo()` here!
console.log(it.next());
console.log(x);						// 2
bar();
console.log(x);						// 3
console.log(it.next(5));