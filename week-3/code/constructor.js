function Parent () {}

var child = new Parent();

console.log(child instanceof Parent);
console.log(child.constructor === Parent);
console.log(Object.getPrototypeOf(child) === Parent.prototype);