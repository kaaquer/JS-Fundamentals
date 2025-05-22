const {argv} = require('process');
input = parseInt(argv[2]);

if (typeof input === 'number' && !isNaN(input) && input > 0) {
    for (let i = 1; i <= input; i++) {
        console.log('X'.repeat(input));}}
else {
    console.log('Missing size')}
