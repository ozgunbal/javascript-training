function foo () {
    try {
        return 42;
    } finally {
        console.log('I can be printed finally');
    }
}

console.log(foo());