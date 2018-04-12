{
    console.log(`y in block scope before declaration: ${y}`);
    var y = 5; // hoisted
    console.log(`y in block scope: ${y}`);
}

console.log(`y in global scope: ${y}`);


// Curly brackets creates block scope
{
    console.log(`x in block scope before declaration: ${x}`);
    let x = 5;
    console.log(`x in block scope: ${x}`);
}

console.log(`x in global scope: ${x}`);

