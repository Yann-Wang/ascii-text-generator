/**
 * Created by a_wav on 2017/2/4.
 */
let ascii_text_generator = require('../');
let chalk = require('chalk');

describe('#ascii-text-generator', function() {
    it('output the text logo to the console', function(done) {
        let input_text = "art text";
        let ascii_text =ascii_text_generator(input_text,"1");

        console.log(ascii_text);
        done();
    });
});

//chalk.blue.bgRed.bold('Hello world!');

describe('#ascii-text-generator', function() {
    it('output colorful text logo to the console by using chalk npm module', function(done) {
        let input_text = "art text";
        let ascii_text =ascii_text_generator(input_text,"1");

        console.log(chalk.blue.bold.bgGreen(ascii_text));
        done();
    });
});