const fs = require('fs');
const path = require('path');

const uppercaseSQLKeywords = function (inputString, dictionaryFilePath) {
    if (!dictionaryFilePath) {
        let dictionaryDir = path.join(__dirname, 'dictionary');
        fs.readdirSync(dictionaryDir).forEach((filename) => {
            inputString = uppercaseSQLKeywords(inputString, path.join(dictionaryDir, filename));
        });
        return inputString;
    }

    const dictionary = fs.readFileSync(dictionaryFilePath, 'utf8');
    let outString = '',
        token = '';
    for (let i = 0, l = inputString.length; i < l; i++) {
        if (/[\s\(\)]/.test(inputString[i]) || i + 1 === l) {
            if (!!token && new RegExp('^'+token.replace(/[(\.\+\*\{\})]/gi, '\\$&')+'$', 'im').test(dictionary)) {
                token = token.toUpperCase();
            }
            outString += token + inputString[i];
            token = '';
        } else {
            token += inputString[i];
        }
    }
    return outString;
}

module.exports = uppercaseSQLKeywords;