const { argv } = require('node:process');

let count = 0;
let firstArg = '';
let foundArg = false;

argv.forEach(element => {
    if (count === 2) {
        firstArg = element;
        foundArg = true;
    }
    count++;
});

if (!foundArg) {
    console.log("No argument");
} else {
    console.log(firstArg);
}