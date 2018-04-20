function Parent (name) {
    this.name = name;
};

Parent.prototype.sayName = function () {
    return console.log(`My name is  ${this.name}`);
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.sayAge = function () {
    return console.log(`I'm ${this.age}`);
}

var child = new Child('Luffy', 19);


child.sayName();
child.sayAge();