var obj = {a: 4};

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

Object.defineProperty( obj, 'a', {
	value: 2,
	writable: false,
	configurable: false,
	enumerable: false
} );

console.log(obj.a);
// Not change due to lost writable property;
obj.a = 7;
console.log(obj.a);

try {
    // When property is not configurable
    Object.defineProperty( obj, 'a', {
        value: 8,
        writable: true,
        configurable: true,
        enumerable: true
    } );
} catch (e) {
    console.log(e);
};

// non-enumerable properties are not iterated
console.log('a' in obj);
for (var k in obj) {
    console.log('Did not iterate');
    console.log(k, obj[k]);
}