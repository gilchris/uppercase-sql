# sqlup

To uppercase SQL keywords in string.

## Install

    npm install -g uppercase-sql

## running in console

    uppercase-sql "select * from member where memberIndex = :memberIndex"

## using by library

    npm install -save uppercase-sql

### in code

    const uppercaseSQL = require('uppercase-sql');

    let output = uppercaseSQL("select * from member where memberIndex = :memberIndex");