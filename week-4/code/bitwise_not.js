// Binary NOT

console.log(~(-1));

console.log(~3);
console.log(~(-4));

var a = [1,2,3,77];

if (a.indexOf(77) > -1) {
    console.log('I found 77');
}

if(~a.indexOf(74)) {
    console.log('I found 77, more easily but more implicitly!');
}

// Use instead of Math.floor

console.log(Math.floor(3.14));
console.log(~3.14);
console.log(~~3.14);