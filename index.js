'use strict';
var buildStyle = require('./lib/ascii_text');

function beginGenerator(inputText, textStyle) {
    var validChars = true;
    var invalChar;

    inputText = inputText.toLowerCase();

    for (var i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) != "a" && inputText.charAt(i) != "b" && inputText.charAt(i) != "c" && inputText.charAt(i) != "d" && inputText.charAt(i) != "e" && inputText.charAt(i) != "f" && inputText.charAt(i) != "g" && inputText.charAt(i) != "h" && inputText.charAt(i) != "i" && inputText.charAt(i) != "j" && inputText.charAt(i) != "k" && inputText.charAt(i) != "l" && inputText.charAt(i) != "m" && inputText.charAt(i) != "n" && inputText.charAt(i) != "o" && inputText.charAt(i) != "p" && inputText.charAt(i) != "q" && inputText.charAt(i) != "r" && inputText.charAt(i) != "s" && inputText.charAt(i) != "t" && inputText.charAt(i) != "u" && inputText.charAt(i) != "v" && inputText.charAt(i) != "w" && inputText.charAt(i) != "x" && inputText.charAt(i) != "y" && inputText.charAt(i) != "z" && inputText.charAt(i) != " " && inputText.charAt(i) != "0" && inputText.charAt(i) != "1" && inputText.charAt(i) != "2" && inputText.charAt(i) != "3" && inputText.charAt(i) != "4" && inputText.charAt(i) != "5" && inputText.charAt(i) != "6" && inputText.charAt(i) != "7" && inputText.charAt(i) != "8" && inputText.charAt(i) != "9" && inputText.substring(i, (i + 2)) != "\\n") {
            validChars = false;
            invalChar = inputText.charAt(i)
        }
    }

    if (validChars == false) {
        throw new Error('Fatal Error: Character "' + invalChar + '" invalid.  Only characters a-z, 0-9, and newlines (\n) accepted.')
    }
    if (validChars == true) {
        if (textStyle === "1") {
            return buildStyle.buildStyle1(inputText)
        }
        if (textStyle === "2") {
            return buildStyle.buildStyle2(inputText)
        }
        if (textStyle === "3") {
            return buildStyle.buildStyle3(inputText)
        }
    }
}

module.exports = beginGenerator;