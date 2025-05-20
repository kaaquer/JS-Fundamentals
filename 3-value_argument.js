const { argv } = require('node:process');

let count = 0;
let foundArg = false;
let output = '';

argv.forEach(element => {
    if (count >= 2) {
        output += element + ' ';
        foundArg = true;
    }
    count++;
});

if (!foundArg) {
    console.log("No argument");
} else {
    console.log(output.trim());
}