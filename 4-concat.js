const {argv} = require('node:process');

let count = 0;
let firstArg = '';
let secondArg = '';
let foundArg = false;
let output = '';

argv.forEach(element => {
    if (count === 2) {
        firstArg = element;
        foundArg = true;
    }
    if (count === 3) {
        secondArg = element;
        foundArg = true;
    }
    count++;
});

console.log(`${firstArg? firstArg : 'undefined'} is ${secondArg? secondArg : 'undefined'}`);