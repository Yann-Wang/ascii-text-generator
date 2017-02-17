#### ascii-text-generator

[![NPM](https://nodei.co/npm/ascii-text-generator.png?downloads=true)](http://nodei.co/npm/ascii-text-generator/)

[![NPM version](https://img.shields.io/npm/v/ascii-text-generator.svg)]()

Ascii-text-generator module make the character of a-z, 0-9 in the form of logo which is achieved by ascii characters. It can be used in web pages, console output, file header comments.

#### Installation
in Node.js :
```shell
npm install --save ascii-text-generator

```
in Browser :

[see: asciitext](http://www.wsabstract.com/script/script2/asciitext.shtml)

```html
<!-- when linking the file, suggest downloading this file and upload to your own cdn. -->
<script src="http://okup5z621.bkt.clouddn.com/atg.min.js"></script>
```

#### Usage
in Node.js :
```javascript
let ascii_text_generator = require('ascii-text-generator');

```
in Browser :
```html
<script>
    var atg = window.ascii_text_generator;
</script>
```

#### Method

##### ascii_text_generator(inputText[, textStyle])
- inputText : String 
- textStyle : "1" || "2"(default) || "3" // 1: "futuristik", 2: "block", 3: "wireframe"


#### Examples
in Node.js:
- output text logo to the header of file in the form of annotation
```javascript
let input_text = "ascii text \\ngenerator";
let text ="/*\n" + ascii_text_generator(input_text,"2") + "\n*/";

fs.outputFile("./build/file.js", text, function (err) {
    if(err){
        throw new Error(err);
    }else{
        console.log("output to file.js successfully.");
        // execute callback
    }
});


//file.js
/*
     ___   _____   _____   _   _        _____   _____  __    __  _____       
    /   | /  ___/ /  ___| | | | |      |_   _| | ____| \ \  / / |_   _|      
   / /| | | |___  | |     | | | |        | |   | |__    \ \/ /    | |        
  / / | | \___  \ | |     | | | |        | |   |  __|    }  {     | |        
 / /  | |  ___| | | |___  | | | |        | |   | |___   / /\ \    | |        
/_/   |_| /_____/ \_____| |_| |_|        |_|   |_____| /_/  \_\   |_|        
 _____   _____   __   _   _____   _____        ___   _____   _____   _____   
/  ___| | ____| |  \ | | | ____| |  _  \      /   | |_   _| /  _  \ |  _  \  
| |     | |__   |   \| | | |__   | |_| |     / /| |   | |   | | | | | |_| |  
| |  _  |  __|  | |\   | |  __|  |  _  /    / / | |   | |   | | | | |  _  /  
| |_| | | |___  | | \  | | |___  | | \ \   / /  | |   | |   | |_| | | | \ \  
\_____/ |_____| |_|  \_| |_____| |_|  \_\ /_/   |_|   |_|   \_____/ |_|  \_\ 
*/

```

- output text logo to the console
```javascript
let input_text = "art text";
let ascii_text =ascii_text_generator(input_text,"1");

console.log(ascii_text);
//console.log(chalk.blue.bold.bgGreen(ascii_text)); // make output colorful by using chalk module

// console
```

```html
 __   __  _|_      _|_   ___  \_' _|_  
(__( |  '  |_,      |_, (__/_ / \  |_, 
                                       
```


in Browser:
- output text logo to html element content

HTML:
```html
<p id="ascii-text"></p>
```
JS:
```javascript
var atg = window.ascii_text_generator;
var input_text = "art text";
var ascii_text =atg(input_text,"3");
var p = document.getElementById("ascii-text");

// you can add other css property and value in the end of the string.
p.style.cssText = "white-space:pre; font:16px/1 monospace;";  
p.innerHTML = ascii_text;

// page effect:

/¯\ |¯| ¯|¯   ¯|¯ |¯ \/ ¯|¯ 
|¯| |¯\  |     |  |¯ /\  |  
                   ¯       

```


#### Tests
in Node.js:

To run the test suite, first install the dependencies, then run npm test:
```shell
git clone https://github.com/Yann-Wang/ascii-text-generator.git
cd ascii-text-generator
npm install
npm test

```
in Browser:
```shell
cd ascii-text-generator
npm install
node static-server.js
# access http://localhost:3000/test/test_in_browser.html

```

#### Support
Node.js 0.10.0-7.5.0, Chrome 55+, Opera 42+, Firefox 43+, IE7+, Edge