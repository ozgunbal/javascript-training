var obj =  {};

obj['Javascript Rocks!'] = 4;
obj[obj] = 5;
obj[false] = 6;

console.log(obj);
console.log(obj['Javascript Rocks!']);
console.log(obj['[object Object]']);