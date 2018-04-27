// Benefit of typeof undeclared

if(API) {
    global.API = "something";
}


if(typeof API === "undefined") {
    global.API = "something";
}

console.log(API);