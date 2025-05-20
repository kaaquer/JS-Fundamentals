const { argv } = require('node:process');

let count = 0;
let foundArg = false;

argv.forEach(element => {
    if (count >= 2) {
        console.log(element);
        foundArg = true;
    }
    count++;
});

if (!foundArg) {
    console.log("No argument");
}