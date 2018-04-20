function iHaveAThis () {
    console.log(this.a);
}
a = 4;

var obj = {
    a: 3,
    foo: iHaveAThis
}

// default binding
iHaveAThis();

// implicit binding
obj.foo();

// explicit binding
iHaveAThis.call(obj);

// new binding
function classish (a) {
    this.a = a;
}
var classLike = new classish(3);
console.log(classLike.a) // prints 3
