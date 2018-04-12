// Even though try-catch is block scope, err in catch is not declared at global
try {
    console.log('Trying something wrong');
    throw new Error('Oops');
} catch (err) {
    console.log(`Error in catch: ${err}`);
}

console.log(`Error in global: ${err}`);