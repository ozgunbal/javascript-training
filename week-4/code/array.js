var everything = [1, "2", true, {key: "value"}, function foo(){},["another", "array"], undefined, null];

console.log(everything);

console.log(everything["4"]);
console.log(everything["non-index"]);