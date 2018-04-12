/**
 * Question 1
 */

// Popular interview question: What's the output and why?
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    });
};

/**
 * Question 2
 */

(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/**
 * Question 3
 */

// What's difference between undeclared variable and undefined variable?