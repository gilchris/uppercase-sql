#!/usr/bin/env node

const process = require('process');
const path = require('path');
const uppercaseSQL = require('../lib/uppercase-sql');

var main = function () {
    let inputString = process.argv[2];
    if (process.argv.length > 2) {
        console.log(uppercaseSQL(inputString));
    }
} 
if (require.main === module) { 
    main();
}