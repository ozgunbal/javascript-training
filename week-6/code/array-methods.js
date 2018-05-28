const double = x => x * 2;
const isEven = x => x % 2 == 0;

// Map
const initial = [1,4,6,7];
const mapped = initial.map(double);
console.log(initial);
console.log(mapped);

// Filter
const evens = initial.filter(isEven);
const odds = initial.filter(x => x % 2 == 1);
console.log(evens);
console.log(odds);

// Reduce
const humans = [
    {
        name: 'X',
        age: 30
    },
    {
        name: 'Y',
        age:  22
    }
];

const ageAverage = humans.reduce(function (ages, human) {
    ages.push(human.age);
    return ages;
},[]).reduce((a,b) => a + b)/ humans.length;
console.log(ageAverage);

const namesArray = humans.reduce((names, human) => {
    names.push(human.name);
    return names;
}, []);

console.log(namesArray);