const { argv } = require('node:process');

let firstArg = argv[2];

console.log(parseInt(firstArg) == firstArg ? `My number: ${firstArg}` : 'Not a number');