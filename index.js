'use strict';
var buildStyle = require('./lib/ascii_text');

const INPUT_REGEX = /[\r\n\sa-zA-Z0-9]*/g;

function beginGenerator(inputText, textStyle = '2') {
    inputText = inputText.toLowerCase();

    if(INPUT_REGEX.test(inputText)) {
        if (textStyle === "1") {
            return buildStyle.buildStyle1(inputText);
        }
        if (textStyle === "2") {
            return buildStyle.buildStyle2(inputText);
        }
        if (textStyle === "3") {
            return buildStyle.buildStyle3(inputText);
        }
    } else {
        throw new Error('Fatal Error: The input "' + inputText + '" has an invalid character. Only characters a-z, 0-9, and newlines (\\n) are accepted.');
    }
}

module.exports = beginGenerator;