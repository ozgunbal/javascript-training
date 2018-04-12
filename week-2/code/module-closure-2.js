// Variable cannot be accessed from outside
const a = ['I\'m', 'an', 'array'];

function moduleFunc () {
    console.log(a);
}

// Exported properties can be accessed from outside
module.exports = {
    moduleFunc,
}