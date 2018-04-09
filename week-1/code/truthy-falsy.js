console.log(Boolean(''));

if('') {
    console.log('Would not be printed');
}

console.log(Boolean(0));

if(0) {
    console.log('Would not be printed');
}

console.log(Boolean(NaN));

if(NaN) {
    console.log('Would not be printed');
}

console.log(Boolean(null));

if(null) {
    console.log('Would not be printed');
}

console.log(Boolean(undefined));

if(undefined) {
    console.log('Would not be printed');
}

console.log(Boolean(false));
if(false) {
    console.log('Would not be printed');
}