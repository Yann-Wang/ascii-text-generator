/**
 * Created by a_wav on 2017/1/31.
 */
'use strict';
const chai = require('chai');
let assert = chai.assert;

let fs = require('fs-extra');
let ascii_text_generator = require('../');

describe('#ascii-text-generator', function() {
    it('output text logo to the header of file', function(done) {

        let input_text = "ascii text \\ngenerator";
        let text ="/*\n" + ascii_text_generator(input_text,"2") + "\n*/";

        fs.outputFile("./build/file.js", text, function (err) {
            assert.equal(err,null,"err is not null");
            console.log("output to file.js successfully.");
            // execute callback
            done();
        });

    });
});

describe('#ascii-text-generator', function() {
    it('output text logo to the header of file', function(done) {

        let input_text = "art text";
        let text ="/*\n" + ascii_text_generator(input_text,"1") + "\n*/";

        fs.outputFile("./build/file2.js", text, function (err) {
            assert.equal(err,null,"err is not null");
            console.log("output to file2.js successfully.");
            // execute callback
            done();
        });

    });
});