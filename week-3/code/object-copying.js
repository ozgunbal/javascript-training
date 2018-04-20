var obj1 = {a: 5};
var obj2 = obj1;

// Mutation of obj1 too!
obj2.a = 6;

console.log(obj1);
console.log(obj2);


var obj3 = Object.assign({}, obj1);

obj3.a = 7;

console.log(obj1);
console.log(obj3);