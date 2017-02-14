/**
 * Created by a_wav on 2017/2/4.
 */
'use strict';
var ascii_text_generator = require('../');
var chalk = require('chalk');

describe('#ascii-text-generator', function() {
    it('output the text logo to the console', function(done) {
        var input_text = "art text";
        var ascii_text =ascii_text_generator(input_text,"1");

        console.log(ascii_text);
        done();
    });

    it('output colorful text logo to the console by using chalk npm module', function(done) {
        var input_text = "art text";
        var ascii_text =ascii_text_generator(input_text,"1");

        console.log(chalk.blue.bold.bgGreen(ascii_text));
        done();
    });
});

//chalk.blue.bgRed.bold('Hello world!');
