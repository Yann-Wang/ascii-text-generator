/**
 * Created by a_wav on 2017/1/31.
 */
'use strict';
var chai = require('chai');
var assert = chai.assert;

var fs = require('fs-extra');
var ascii_text_generator = require('../');

describe('#ascii-text-generator', function() {
    it('output text logo to the header of file', function(done) {

        var input_text = "ascii text \\ngenerator";
        var text ="/*\n" + ascii_text_generator(input_text,"2") + "\n*/";

        fs.outputFile("./build/file.js", text, function (err) {
            assert.equal(err,null,"err is not null");
            console.log("output to file.js successfully.");
            // execute callback
            done();
        });

    });

    it('output text logo to the header of file', function(done) {

        var input_text = "art text";
        var text ="/*\n" + ascii_text_generator(input_text,"1") + "\n*/";

        fs.outputFile("./build/file2.js", text, function (err) {
            assert.equal(err,null,"err is not null");
            console.log("output to file2.js successfully.");
            // execute callback
            done();
        });

    });
});

