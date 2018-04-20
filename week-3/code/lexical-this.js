// without this adoption

function delayOne (ms) {
    setTimeout(function() {
        console.log('Without Adoption:');
        console.log(this);
    }, ms);
};

delayOne.call({prop: 'value'}, 1000);

// with this adoption

function delayTwo (ms) {
    setTimeout(() => {
        console.log('With Adoption:');
        console.log(this);
    }, ms);
};

delayTwo.call({prop: 'value'}, 1000);